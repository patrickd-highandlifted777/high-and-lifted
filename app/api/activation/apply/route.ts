import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
export async function POST() {
  try {
    const { data: orgExisting } = await supabaseAdmin.from("organisations").select("id").limit(1).maybeSingle();
    let orgId = orgExisting?.id;
    if (!orgId) {
      const { data: org } = await supabaseAdmin.from("organisations").insert({ name: "High And Lifted (Pty) Ltd" }).select().single();
      orgId = org?.id;
    }
    if (!orgId) throw new Error("Failed to create/find organisation");
    try { await supabaseAdmin.rpc("seed_chart_of_accounts", { p_org: orgId }); } catch {}
    return NextResponse.json({ ok: true, organisation_id: orgId });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || "activation failed" }, { status: 500 });
  }
}
