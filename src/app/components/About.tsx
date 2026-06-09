import { useIntersectionObserver } from "./useIntersectionObserver";

const STATS = [
  { number: "9.26", label: "CGPA" },
  { number: "1", label: "Internship" },
  { number: "5", label: "Projects" },
];

export function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="about" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container" ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease"
      }}>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "4rem", alignItems: "center" }}>
          {/* Left: Avatar */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: 220, height: 220 }}>
              {/* Spinning border */}
              <div style={{
                position: "absolute", inset: -4, borderRadius: 26,
                background: "conic-gradient(from 0deg, #6c63ff, #00d4ff, #6c63ff)",
                animation: "spin 4s linear infinite",
                zIndex: 0
              }} />
              <div style={{
                position: "relative", zIndex: 1, width: 220, height: 220,
                background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "center",
                margin: 4
              }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "5rem", fontWeight: 700, color: "white" }}>KP</span>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="section-label">// about_me</p>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.25rem" }}>Who Am I?</h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "1rem" }}>
              I'm a Computer Science undergrad at VIT Bhopal, passionate about creating impactful digital experiences. My journey spans full-stack web development, cloud infrastructure on AWS, and building products that solve real problems.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
              When I'm not writing code, I'm exploring DevOps pipelines, tinkering with cloud architectures, or diving deep into new technologies. I believe in clean code, continuous learning, and shipping products that matter.
            </p>

            {/* Stat cards */}
            <div className="stat-cards" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {STATS.map(({ number, label }) => (
                <div key={label} className="stat-card" style={{
                  background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)",
                  borderRadius: 12, padding: "1.2rem 1.6rem", textAlign: "center", flex: 1, minWidth: 100
                }}>
                  <div style={{ fontSize: "2rem", fontWeight: 700, fontFamily: "var(--font-heading)",
                    background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    {number}
                  </div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
