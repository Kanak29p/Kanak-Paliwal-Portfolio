import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

function scrollToSection(id: string) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase())).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i]!.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(NAV_LINKS[i]);
          return;
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(10,10,15,0.85)", backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid #2a2a3a" : "1px solid transparent",
        transition: "border-color 0.3s",
        padding: "0 2rem", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <span
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer", fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700,
            background: "linear-gradient(135deg, #6c63ff, #00d4ff)", WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          KP
        </span>

        <div className="nav-links" style={{ display: "flex", gap: "0.25rem" }}>
          {NAV_LINKS.map((link) => (
            <button key={link} className={`nav-link${activeSection === link ? " active" : ""}`}
              onClick={() => scrollToSection(link.toLowerCase())}>
              {link}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", padding: "0.5rem" }}>
          <Menu size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none",
              cursor: "pointer", color: "var(--text-primary)" }}>
            <X size={28} />
          </button>
          {NAV_LINKS.map((link) => (
            <button key={link} className="mobile-nav-link" onClick={() => {
              scrollToSection(link.toLowerCase());
              setMenuOpen(false);
            }}>
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
