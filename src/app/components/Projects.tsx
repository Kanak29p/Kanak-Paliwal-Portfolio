import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const PROJECTS = [
  {
    id: 1,
    title: "PTE Exam Preparation Platform",
    badge: "Full Stack · Internship",
    featured: true,
    gradient: "linear-gradient(135deg, #6c63ff, #00d4ff)",
    description: "A comprehensive end-to-end exam preparation platform for PTE (Pearson Test of English) with role-based access, real-time notifications, and CI/CD deployment. Built during a 45-day internship.",
    highlights: [
      "Implemented Google OAuth + JWT authentication with role-based access control",
      "Integrated Firebase Cloud Messaging for real-time push notifications",
      "Achieved 90%+ code coverage with SonarQube quality gates in CI/CD pipeline",
    ],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "MySQL", "Snowflake", "JWT", "Google OAuth", "Firebase FCM", "GitHub Actions", "SonarQube", "Render"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    badge: "Full Stack · Personal",
    featured: false,
    gradient: "linear-gradient(135deg, #ff6b6b, #feca57)",
    description: "A WhatsApp-inspired real-time messaging app with WebSocket communication, user rooms, and message persistence.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "AWS Cloud Infrastructure",
    badge: "Cloud · DevOps",
    featured: false,
    gradient: "linear-gradient(135deg, #f9ca24, #f0932b)",
    description: "Designed and deployed a scalable multi-tier cloud architecture on AWS with VPC, EC2, S3, IAM roles, and Nginx reverse proxy configuration.",
    tech: ["AWS EC2", "AWS S3", "AWS VPC", "AWS IAM", "Docker", "Nginx", "Linux"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Student Dashboard Portal",
    badge: "Frontend · React",
    featured: false,
    gradient: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
    description: "A dynamic student management dashboard with grade tracking, attendance visualization, and course enrollment features.",
    tech: ["React.js", "TypeScript", "Chart.js", "CSS Modules"],
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    title: "ML Sentiment Analyzer",
    badge: "Machine Learning · Python",
    featured: false,
    gradient: "linear-gradient(135deg, #00b894, #00cec9)",
    description: "A sentiment analysis tool trained on social media data using NLP techniques, with a Flask API and interactive web interface.",
    tech: ["Python", "scikit-learn", "NLTK", "Flask", "React.js"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const featured = PROJECTS.find((p) => p.featured)!;
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container" ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">// my_projects</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700 }}>Projects</h2>
        </div>

        {/* Featured */}
        <div style={{
          background: "var(--bg-primary)", border: "1px solid var(--border-subtle)",
          borderRadius: 16, overflow: "hidden", marginBottom: "2rem",
          borderTop: `4px solid transparent`,
          backgroundImage: `linear-gradient(var(--bg-primary), var(--bg-primary)), ${featured.gradient}`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}>
          <div style={{ padding: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.4rem" }}>{featured.title}</h3>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>{featured.badge}</span>
              </div>
              <span style={{ background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))",
                border: "1px solid var(--accent-purple)", borderRadius: 20, padding: "4px 14px",
                fontSize: "0.78rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                ⭐ Featured Project
              </span>
            </div>

            <div className="featured-interior" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2rem" }}>
              <div>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>{featured.description}</p>
                <ul style={{ paddingLeft: "1.2rem", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {featured.highlights?.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.5rem" }}>
                  {featured.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href={featured.github} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.5rem 1rem",
                      border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--text-secondary)",
                      textDecoration: "none", fontSize: "0.85rem", transition: "border-color 0.2s, color 0.2s" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-purple)"; el.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                    <Github size={16} /> Code
                  </a>
                  <a href={featured.demo} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.5rem 1rem",
                      border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--text-secondary)",
                      textDecoration: "none", fontSize: "0.85rem", transition: "border-color 0.2s, color 0.2s" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-cyan)"; el.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of projects */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {rest.map((project) => (
            <div key={project.id} className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}>
              <div style={{ height: 4, background: project.gradient }} />
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{project.title}</h3>
                  <span style={{ fontSize: "0.78rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>{project.badge}</span>
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>{project.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {project.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.4rem 0.8rem",
                      border: "1px solid var(--border-subtle)", borderRadius: 6, color: "var(--text-secondary)",
                      textDecoration: "none", fontSize: "0.8rem", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-purple)"; el.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                    <Github size={14} /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.4rem 0.8rem",
                      border: "1px solid var(--border-subtle)", borderRadius: 6, color: "var(--text-secondary)",
                      textDecoration: "none", fontSize: "0.8rem", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-cyan)"; el.style.color = "var(--text-primary)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                    <ExternalLink size={14} /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
