import { useIntersectionObserver } from "./useIntersectionObserver";

const CERTS = [
  { emoji: "🎓", name: "Introduction to Machine Learning", issuer: "NPTEL", color: "#ff6b35" },
  { emoji: "🌐", name: "Bits and Bytes of Computer Networking", issuer: "Coursera", color: "#0056d3" },
];

export function Certifications() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="certifications" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container" ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">// certifications</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700 }}>Certifications</h2>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {CERTS.map(({ emoji, name, issuer, color }) => (
            <div key={name} style={{
              background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)",
              borderRadius: 16, padding: "2rem", minWidth: 280, maxWidth: 340,
              textAlign: "center", transition: "transform 0.2s, border-color 0.2s",
            }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.borderColor = color; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLDivElement; el.style.transform = ""; el.style.borderColor = "var(--border-subtle)"; }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{emoji}</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", lineHeight: 1.4 }}>{name}</h3>
              <p style={{ color: color, fontWeight: 600, marginBottom: "1rem", fontSize: "0.95rem" }}>{issuer}</p>
              <span style={{ display: "inline-block", background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.3)",
                borderRadius: 20, padding: "4px 14px", color: "var(--success)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>
                ✓ Verified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
