import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border-subtle)", padding: "3rem 2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          {[
            { icon: <Github size={20} />, href: "https://github.com/Kanak29p", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/kanak-paliwal", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:k29paliwal@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40,
                borderRadius: 10, border: "1px solid var(--border-subtle)", color: "var(--text-secondary)",
                textDecoration: "none", transition: "color 0.2s, transform 0.2s, border-color 0.2s" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "var(--accent-cyan)"; el.style.transform = "translateY(-3px)"; el.style.borderColor = "var(--accent-cyan)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "var(--text-secondary)"; el.style.transform = ""; el.style.borderColor = "var(--border-subtle)"; }}>
              {icon}
            </a>
          ))}
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", textAlign: "center" }}>
          Designed & Built by{" "}
          <span style={{ fontWeight: 700, background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Kanak Paliwal
          </span>
        </p>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", opacity: 0.7 }}>
          © 2025 · Made with ☕ and a lot of React
        </p>
      </div>
    </footer>
  );
}
