export default function Dashboard() {
  return (
    <main style={{padding: 24, fontFamily: "ui-sans-serif, system-ui"}}>
      <img src="/brand/high-and-lifted-logo.jpg" alt="High & Lifted" style={{height:56}} />
      <h1 style={{fontSize: 22, marginTop: 12}}>Welcome to High & Lifted</h1>

      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:16, marginTop:16}}>
        <a href="#" style={card}>HR & Leave</a>
        <a href="#" style={card}>Payroll (Payslips)</a>
        <a href="#" style={card}>Quotes & Invoices</a>
        <a href="#" style={card}>Settings</a>
      </div>
    </main>
  );
}

const card: React.CSSProperties = {
  padding:"16px 14px", border:"1px solid #eee", borderRadius:12, textDecoration:"none", color:"#111", background:"#fff"
};
