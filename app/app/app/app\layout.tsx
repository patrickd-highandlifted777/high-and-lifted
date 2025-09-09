export const metadata = {
  title: "High & Lifted",
  description: "High & Lifted internal app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "ui-sans-serif, system-ui" }}>
        {/* Top brand bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: 16, borderBottom: "1px solid #eee" }}>
          <img src="/brand/high-and-lifted-logo.jpg" alt="High & Lifted" style={{ height: 40 }} />
          <span style={{ fontWeight: 600 }}>High & Lifted</span>
        </div>
        {/* Page content */}
        <div style={{ padding: 16 }}>{children}</div>
      </body>
    </html>
  );
}
