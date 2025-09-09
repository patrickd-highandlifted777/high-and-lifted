import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
export async function POST(req: Request) {
  try {
    const { to } = await req.json();
    const recipients = Array.isArray(to) ? to : [to];
    const html = `<div style="font-family:ui-sans-serif,system-ui"><h2>High & Lifted — Test Email</h2><p>If you received this, Resend is working.</p></div>`;
    await sendEmail({ to: recipients, subject: "Test email from High & Lifted", html });
    return NextResponse.json({ ok: true });
  } catch (e:any) {
    return NextResponse.json({ error: e?.message || "send failed" }, { status: 500 });
  }
}
