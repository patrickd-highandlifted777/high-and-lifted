"use client";
export default function Onboarding() {
  async function finish() {
    const r = await fetch("/api/activation/apply", { method: "POST" });
    const j = await r.json();
    alert("Activation: " + JSON.stringify(j));
  }
  return (
    <main style={{padding:24, fontFamily:"ui-sans-serif, system-ui"}}>
      <h2 style={{fontSize:18, fontWeight:600}}>Onboarding</h2>
      <p>Click once to apply default settings and seed accounts.</p>
      <button onClick={finish} style={{marginTop:12, padding:"8px 12px", borderRadius:8, background:"#111", color:"#fff"}}>Finish Setup</button>
    </main>
  );
}
