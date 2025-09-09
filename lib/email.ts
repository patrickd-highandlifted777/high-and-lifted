import { Resend } from "@resend/node";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function sendEmail({ to, subject, html }: { to: string | string[]; subject: string; html: string }) {
  if (!process.env.RESEND_API_KEY) throw new Error("Missing RESEND_API_KEY");
  const resp = await resend.emails.send({
    from: "High & Lifted <no-reply@highandlifted.co.za>",
    to, subject, html,
  });
  return resp;
}
