import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "./useIntersectionObserver";

const INFO_CARDS = [
  { icon: <Mail size={20} />, label: "Email", value: "k29paliwal@gmail.com", href: "mailto:k29paliwal@gmail.com" },
  { icon: <MapPin size={20} />, label: "Location", value: "Bhopal, India", href: null },
  { icon: <Github size={20} />, label: "GitHub", value: "github.com/Kanak29p", href: "https://github.com/Kanak29p" },
  { icon: <Linkedin size={20} />, label: "LinkedIn", value: "kanak-paliwal", href: "https://linkedin.com/in/kanak-paliwal" },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container" ref={ref} style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.7s ease"
      }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p className="section-label">// get_in_touch</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700 }}>Contact Me</h2>
          <p style={{ color: "var(--text-secondary)", marginTop: "0.75rem" }}>Have an opportunity or just want to say hi? I'd love to hear from you.</p>
        </div>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem" }}>
          {/* Left: Info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {INFO_CARDS.map(({ icon, label, value, href }) => {
              const content = (
                <>
                  <div style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: "linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))",
                    border: "1px solid rgba(108,99,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent-purple)" }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "2px" }}>{label}</div>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.9rem" }}>{value}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="contact-card" style={{ color: "inherit" }}>{content}</a>
              ) : (
                <div key={label} className="contact-card">{content}</div>
              );
            })}
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                height: "100%", gap: "1rem", textAlign: "center", minHeight: 300 }}>
                <CheckCircle size={56} style={{ color: "var(--success)" }} />
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem" }}>Message sent!</h3>
                <p style={{ color: "var(--text-secondary)" }}>I'll get back to you soon.</p>
                <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  style={{ marginTop: "0.5rem", background: "none", border: "1px solid var(--accent-purple)", borderRadius: 8,
                    color: "var(--accent-purple)", padding: "0.6rem 1.4rem", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: "0.9rem" }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div className="name-email-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <input className="form-input" placeholder="Your Name" required value={formData.name}
                    onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))} />
                  <input className="form-input" type="email" placeholder="Your Email" required value={formData.email}
                    onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))} />
                </div>
                <input className="form-input" placeholder="Subject" required value={formData.subject}
                  onChange={(e) => setFormData((f) => ({ ...f, subject: e.target.value }))} />
                <textarea className="form-input" rows={5} placeholder="Your message..." required value={formData.message}
                  onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))} />
                <button type="submit"
                  style={{ width: "100%", padding: "1rem", borderRadius: 8, border: "none",
                    background: "linear-gradient(135deg, #6c63ff, #00d4ff)", color: "white",
                    fontFamily: "var(--font-body)", fontSize: "1rem", fontWeight: 600, cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    transition: "opacity 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.opacity = "0.9"; el.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLButtonElement; el.style.opacity = "1"; el.style.transform = ""; }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
