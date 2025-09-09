export default function Home() {
  return (
    <main style={{padding: 24, fontFamily: "ui-sans-serif, system-ui"}}>
      <img src="/brand/high-and-lifted-logo.jpg" alt="High & Lifted" style={{height:56}} />
      <h1 style={{fontSize: 20, marginTop: 12}}>High & Lifted — App</h1>

      <ul style={{marginTop:12, lineHeight:1.8}}>
        <li><a href="/onboarding" style={{textDecoration:"underline"}}>Run Onboarding again (safe)</a></li>
        <li><a href="/api/health" style={{textDecoration:"underline"}}>Health check (envs present = true)</a></li>
        <li><a href="/api/settings/test-email" style={{textDecoration:"underline"}}>POST /api/settings/test-email</a> (use a REST client)</li>
        <li><a href="/api/payroll/payslip" style={{textDecoration:"underline"}}>POST /api/payroll/payslip</a> (returns PDF)</li>
      </ul>
    </main>
  );
}
