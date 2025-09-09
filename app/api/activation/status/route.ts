import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET() {
  try {
    const { data: org, error: orgErr } =
      await supabaseAdmin.from("organisations").select("id").limit(1).maybeSingle();
    if (orgErr) throw orgErr;

    const orgId = org?.id || null;

    let activated = false;
    if (orgId) {
      const { data: s } = await supabaseAdmin
        .from("organisation_settings")
        .select("activated_at")
        .eq("organisation_id", orgId)
        .maybeSingle();
      activated = !!s?.activated_at;
    }

    return NextResponse.json({ ok: true, organisation_id: orgId, activated });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "status error" }, { status: 500 });
  }
}
