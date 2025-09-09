import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST() {
  try {
    // find or create an organisation
    const { data: orgExisting, error: orgSelErr } =
      await supabaseAdmin.from("organisations").select("id").limit(1).maybeSingle();
    if (orgSelErr) throw orgSelErr;

    let orgId = orgExisting?.id;
    if (!orgId) {
      const { data: orgIns, error: orgInsErr } =
        await supabaseAdmin.from("organisations").insert({ name: "High And Lifted (Pty) Ltd" }).select().single();
      if (orgInsErr) throw orgInsErr;
      orgId = orgIns?.id;
    }
    if (!orgId) throw new Error("Failed to create/find organisation");

    // ensure settings row exists, then mark activated
    await supabaseAdmin
      .from("organisation_settings")
      .upsert({ organisation_id: orgId, activated_at: new Date().toISOString() });

    // (optional) seed chart of accounts if your RPC exists
    try { await supabaseAdmin.rpc("seed_chart_of_accounts", { p_org: orgId }); } catch {}

    return NextResponse.json({ ok: true, organisation_id: orgId });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "activation failed" }, { status: 500 });
  }
}
