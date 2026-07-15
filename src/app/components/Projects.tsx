import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const PROJECTS = [
  {
    id: 1,
    title: "PTE Exam Preparation Platform",
    badge: "Full Stack · Featured Project",
    featured: true,
    gradient: "linear-gradient(135deg, #6c63ff, #00d4ff)",
    description: "A full-stack web application built to help students prepare for the PTE Academic exam through realistic practice tests across Speaking, Writing, Reading, and Listening modules.",
    highlights: [
      "Developed a complete exam simulation platform with timed sections, navigation controls, and automated scoring workflows.",
      "Built secure REST APIs with role-based authentication using Firebase Authentication.",
      "Designed and managed question banks, user responses, and test data using MySQL and Snowflake.",
      "Integrated GitHub Actions for CI/CD and SonarQube for continuous code quality analysis.",
      "Deployed the frontend on GitHub Pages and the backend on Render.",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Snowflake",
      "Firebase Authentication",
      "JWT",
      "GitHub Actions",
      "SonarQube",
      "Docker",
      "Kubernetes",
      "AWS",
      "Nginx"
    ],
    github: "https://github.com/Kanak29p/Exam-Prep-Platform",
    // demo: "#",
  },
  {
    id: 2,
    title: "AI-Powered Content Automation Platform",
    badge: "AI · Full Stack",
    featured: false,
    gradient: "linear-gradient(135deg, #a29bfe, #ff7675)",
    description: "A web platform that streamlines content creation using AI-powered image generation while providing a scalable and modular architecture for future enhancements.",
    highlights: [
      "Developed responsive frontend interfaces for an intuitive user experience.",
      "Integrated backend services for efficient image generation workflows and data handling.",
      "Designed a modular architecture to simplify feature expansion and long-term maintenance.",
      "Focused on clean code structure and scalable application design."
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "AI Image Generation API",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    github: "https://github.com/Kanak29p/Kanak29p-AI-Powered-Content-Automation-Platform",
    demo: "#",
  },
  {
    id: 3,
    title: "Production-Ready Web Application Deployment",
    badge: "Cloud & DevOps",
    featured: false,
    gradient: "linear-gradient(135deg, #20bf6b, #0984e3)",
    description: "Configured and deployed a production-style web application environment using Nginx and MySQL while implementing industry-standard deployment practices.",
    highlights: [
      "Configured Nginx as a reverse proxy for application hosting.",
      "Integrated MySQL with the backend for persistent data storage.",
      "Structured deployment pipelines and server configuration following production practices.",
      "Gained hands-on experience with web hosting, server configuration, and application deployment."
    ],
    tech: [
      "Nginx",
      "MySQL",
      "Linux",
      "Docker",
      "Node.js",
      "GitHub"
    ],
    github: "https://github.com/Kanak29p/Web-App-deployment-using-Nginx-and-MySQL",
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
                  {featured.github && (
                    <a href={featured.github} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.5rem 1rem",
                        border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--text-secondary)",
                        textDecoration: "none", fontSize: "0.85rem", transition: "border-color 0.2s, color 0.2s" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-purple)"; el.style.color = "var(--text-primary)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                      <Github size={16} /> Code
                    </a>
                  )}
                  {featured.demo && (
                    <a href={featured.demo} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.5rem 1rem",
                        border: "1px solid var(--border-subtle)", borderRadius: 8, color: "var(--text-secondary)",
                        textDecoration: "none", fontSize: "0.85rem", transition: "border-color 0.2s, color 0.2s" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-cyan)"; el.style.color = "var(--text-primary)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
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
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.4rem 0.8rem",
                        border: "1px solid var(--border-subtle)", borderRadius: 6, color: "var(--text-secondary)",
                        textDecoration: "none", fontSize: "0.8rem", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-purple)"; el.style.color = "var(--text-primary)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", padding: "0.4rem 0.8rem",
                        border: "1px solid var(--border-subtle)", borderRadius: 6, color: "var(--text-secondary)",
                        textDecoration: "none", fontSize: "0.8rem", transition: "all 0.2s" }}
                      onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--accent-cyan)"; el.style.color = "var(--text-primary)"; }}
                      onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = "var(--border-subtle)"; el.style.color = "var(--text-secondary)"; }}>
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
