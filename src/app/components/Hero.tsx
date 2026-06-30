import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown, ExternalLink } from "lucide-react";

const TYPEWRITER_STRINGS = [
  "Building Full-Stack Web Apps",
  "Cloud & DevOps Enthusiast",
  "Turning Ideas Into Products",
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const [typewriterText, setTypewriterText] = useState("");
  const [typewriterIndex, setTypewriterIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const current = TYPEWRITER_STRINGS[typewriterIndex];
    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setTypewriterText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setTypewriterText(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, 35);
    } else {
      setIsDeleting(false);
      setTypewriterIndex((i) => (i + 1) % TYPEWRITER_STRINGS.length);
      setCharIndex(0);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, typewriterIndex]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(108,99,255,0.5)";
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: "80px" }}>
        <div className="hero-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center",
          animation: "fadeInUp 0.8s ease forwards"
        }}>
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent-cyan)", fontSize: "1rem" }}>
              {"< Hello World />"} <span className="blink-cursor">|</span>
            </p>

            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 700,
              lineHeight: 1.1, background: "linear-gradient(135deg, #6c63ff, #00d4ff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Kanak Paliwal
            </h1>

            <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent-purple)", fontSize: "1.1rem", minHeight: "1.6em" }}>
              {typewriterText}<span className="blink-cursor">|</span>
            </p>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "1rem", maxWidth: "480px" }}>
              CS undergrad at VIT Bhopal with a passion for building scalable full-stack applications and exploring cloud infrastructure. I turn complex problems into clean, working products.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button onClick={() => scrollToSection("projects")}
                style={{ background: "linear-gradient(135deg, #6c63ff, #00d4ff)", border: "none", borderRadius: "8px",
                  padding: "0.8rem 1.8rem", color: "white", fontFamily: "var(--font-body)", fontSize: "0.95rem",
                  fontWeight: 600, cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(108,99,255,0.4)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.transform = ""; (e.currentTarget as HTMLButtonElement).style.boxShadow = ""; }}>
                View My Work
              </button>
              <a href="/Kanak-Paliwal-Portfolio/Kanak Resume.pdf" download
                style={{ borderRadius: "8px", padding: "0.8rem 1.8rem", color: "var(--text-primary)", fontFamily: "var(--font-body)",
                  fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", textDecoration: "none",
                  background: "transparent", border: "2px solid #6c63ff", transition: "transform 0.2s, box-shadow 0.2s", display: "inline-block" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(108,99,255,0.3)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = ""; (e.currentTarget as HTMLAnchorElement).style.boxShadow = ""; }}>
                Download Resume
              </a>
            </div>

            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                { icon: <Github size={20} />, href: "https://github.com/Kanak29p", label: "GitHub" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/kanak-paliwal", label: "LinkedIn" },
                { icon: <Mail size={20} />, href: "mailto:k29paliwal@gmail.com", label: "Email" },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px",
                    borderRadius: "10px", border: "1px solid var(--border-subtle)", background: "var(--bg-secondary)",
                    color: "var(--text-secondary)", transition: "color 0.2s, transform 0.2s, border-color 0.2s", textDecoration: "none" }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "var(--accent-cyan)"; el.style.transform = "translateY(-3px)"; el.style.borderColor = "var(--accent-cyan)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "var(--text-secondary)"; el.style.transform = ""; el.style.borderColor = "var(--border-subtle)"; }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Code block */}
          <div style={{ background: "#0d0d15", border: "1px solid #2a2a3a", borderRadius: "16px", padding: "2rem",
            boxShadow: "0 0 40px rgba(108,99,255,0.15), 0 20px 60px rgba(0,0,0,0.5)" }}>
            {/* macOS dots */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "1.5rem" }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
              ))}
            </div>
            <pre style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", lineHeight: 1.8, overflow: "auto" }}>
              <span style={{ color: "#a0a0b0" }}>{"const "}</span>
              <span style={{ color: "#00d4ff" }}>developer</span>
              <span style={{ color: "#a0a0b0" }}>{" = {"}</span>{"\n"}
              <span style={{ color: "#a0a0b0" }}>{"  "}</span>
              <span style={{ color: "#6c63ff" }}>name</span>
              <span style={{ color: "#a0a0b0" }}>{": "}</span>
              <span style={{ color: "#00d4ff" }}>"Kanak Paliwal"</span>
              <span style={{ color: "#a0a0b0" }}>{","}</span>{"\n"}
              <span style={{ color: "#a0a0b0" }}>{"  "}</span>
              <span style={{ color: "#6c63ff" }}>stack</span>
              <span style={{ color: "#a0a0b0" }}>{": ["}</span>
              <span style={{ color: "#00d4ff" }}>"React"</span>
              <span style={{ color: "#a0a0b0" }}>{", "}</span>
              <span style={{ color: "#00d4ff" }}>"Node"</span>
              <span style={{ color: "#a0a0b0" }}>{", "}</span>
              <span style={{ color: "#00d4ff" }}>"AWS"</span>
              <span style={{ color: "#a0a0b0" }}>{"],"}</span>{"\n"}
              <span style={{ color: "#a0a0b0" }}>{"  "}</span>
              <span style={{ color: "#6c63ff" }}>status</span>
              <span style={{ color: "#a0a0b0" }}>{": "}</span>
              <span style={{ color: "#00d4ff" }}>"Building cool stuff..."</span>
              <span style={{ color: "#a0a0b0" }}>{","}</span>{"\n"}
              <span style={{ color: "#a0a0b0" }}>{"  "}</span>
              <span style={{ color: "#6c63ff" }}>open_to</span>
              <span style={{ color: "#a0a0b0" }}>{": "}</span>
              <span style={{ color: "#00d4ff" }}>"Opportunities 🚀"</span>{"\n"}
              <span style={{ color: "#a0a0b0" }}>{"};"}</span>
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll chevron */}
      <button onClick={() => scrollToSection("about")}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)",
          animation: "bounce 2s infinite", zIndex: 1 }}>
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
