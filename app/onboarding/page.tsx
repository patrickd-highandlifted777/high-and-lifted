"use client";
import React from "react";

async function withTimeout<T>(p: Promise<T>, ms = 20000) {
  return Promise.race([
    p,
    new Promise<T>((_, rej) => setTimeout(() => rej(new Error("Request timed out")), ms)),
  ]);
}

export default function Onboarding() {
  const [status, setStatus] = React.useState<"idle"|"running"|"ok"|"error">("idle");
  const [message, setMessage] = React.useState<string>("");

  async function finish() {
    setStatus("running");
    setMessage("Applying activation…");
    try {
      const res = await withTimeout(fetch("/api/activation/apply", { method: "POST" }), 20000);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || `HTTP ${res.status}`);
      }
      const j = await res.json();
      setStatus("ok");
      setMessage(`Activation complete. Org ID: ${j?.organisation_id || "unknown"}`);
    } catch (e: any) {
      setStatus("error");
      setMessage(e?.message || "Activation failed");
    }
  }

  return (
    <main style={{padding:24, fontFamily:"ui-sans-serif, system-ui"}}>
      <h2 style={{fontSize:18, fontWeight:600}}>Onboarding</h2>
      <p>Click once to apply default settings and seed accounts.</p>

      <button
        onClick={finish}
        disabled={status === "running"}
        style={{
          marginTop:12, padding:"8px 12px", borderRadius:8,
          background: status === "running" ? "#999" : "#111",
          color:"#fff", cursor: status === "running" ? "not-allowed" : "pointer"
        }}
      >
        {status === "running" ? "Working…" : "Finish Setup"}
      </button>

      <div style={{marginTop:12, fontSize:14}}>
        {status === "running" && <span>⏳ {message}</span>}
        {status === "ok" && <span>✅ {message}</span>}
        {status === "error" && <span>❌ {message}</span>}
      </div>

      <div style={{marginTop:16, fontSize:12, color:"#555"}}>
        Tip: You can also POST to <code>/api/activation/apply</code> directly or check
        <a href="/api/health" style={{marginLeft:6, textDecoration:"underline"}}> /api/health</a>.
      </div>
    </main>
  );
}
