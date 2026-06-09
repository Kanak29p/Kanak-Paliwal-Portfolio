import { Terminal, Palette, Code2, Database, Cloud, Shield, Wrench, Rocket } from "lucide-react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const SKILLS_DATA = [
  { category: "Languages", icon: <Terminal size={20} />, skills: ["C++", "Python", "Java", "SQL"] },
  { category: "Frontend", icon: <Palette size={20} />, skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"] },
  { category: "Backend", icon: <Code2 size={20} />, skills: ["Node.js", "Express.js"] },
  { category: "Databases", icon: <Database size={20} />, skills: ["MongoDB", "MySQL", "Snowflake"] },
  { category: "Cloud & DevOps", icon: <Cloud size={20} />, skills: ["AWS EC2", "AWS S3", "AWS VPC", "AWS IAM", "Docker", "Nginx", "Linux"] },
  { category: "Auth & Services", icon: <Shield size={20} />, skills: ["JWT", "Google Sign-In", "Firebase FCM"] },
  { category: "CI/CD & Tools", icon: <Wrench size={20} />, skills: ["Git", "GitHub Actions", "SonarQube", "Postman", "VS Code"] },
  { category: "Deployment", icon: <Rocket size={20} />, skills: ["GitHub Pages", "Render", "AWS Hosting"] },
];

export function Skills() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="skills" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container" ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">// tech_stack</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700 }}>Skills & Technologies</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {SKILLS_DATA.map(({ category, icon, skills }) => (
            <div key={category} className="skill-card">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ color: "var(--accent-purple)" }}>{icon}</span>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>{category}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
