# High & Lifted — Minimal Next.js App

- `/onboarding` → click **Finish Setup** to seed settings & accounts
- `POST /api/settings/test-email` → send a Resend test email

**Env vars (Vercel → Project → Settings → Environment Variables):**
```
NEXT_PUBLIC_SUPABASE_URL=https://pdxpnygsfpledjpurxhd.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...            # from Supabase
SUPABASE_SERVICE_ROLE_KEY=...                # from Supabase
RESEND_API_KEY=...                           # from Resend
APP_BASE_URL=https://app.highandlifted.co.za
```
