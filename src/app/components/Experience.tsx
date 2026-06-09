import { MapPin } from "lucide-react";
import { useIntersectionObserver } from "./useIntersectionObserver";

export function Experience() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="experience" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container" ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">// work_experience</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700 }}>Experience</h2>
        </div>

        <div className="timeline-wrapper" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <div className="timeline-dot" />
            <div style={{
              background: "var(--bg-secondary)", border: "1px solid var(--border-subtle)",
              borderRadius: 16, padding: "2rem", marginLeft: "1rem"
            }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700 }}>
                  Aptitude Guru
                </span>
                <span style={{ border: "1px solid var(--accent-purple)", borderRadius: 20, padding: "2px 12px", fontSize: "0.8rem", color: "var(--accent-purple)", fontFamily: "var(--font-mono)" }}>
                  Jun 2024 – Jul 2024
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 600,
                  background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Full-Stack Developer Intern
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                  <MapPin size={14} /> Bhopal, India (Remote)
                </span>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginBottom: "1rem" }}>
                DT Department · 45-day Internship
              </p>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>
                Developed a comprehensive PTE Exam Preparation Platform from the ground up, delivering a robust, scalable web application used by students preparing for the Pearson Test of English.
              </p>

              <ul style={{ color: "var(--text-secondary)", lineHeight: 1.8, paddingLeft: "1.2rem", marginBottom: "1.25rem" }}>
                <li>Architected and built the full-stack application using React.js + TypeScript on the frontend and Node.js + Express.js on the backend, with MySQL and Snowflake databases</li>
                <li>Implemented secure authentication flows with JWT, Google OAuth, and Firebase Cloud Messaging for real-time push notifications</li>
                <li>Set up CI/CD pipelines using GitHub Actions with SonarQube for code quality, and deployed to Render with Nginx as a reverse proxy</li>
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Snowflake", "JWT", "Google OAuth", "Firebase FCM", "GitHub Actions", "SonarQube"].map((tech) => (
                  <span key={tech} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
