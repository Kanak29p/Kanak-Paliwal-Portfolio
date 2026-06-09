import { useEffect } from "react";

export function PortfolioStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.id = "portfolio-styles";
    style.textContent = `
      :root {
        --bg-primary: #0a0a0f;
        --bg-secondary: #111118;
        --bg-tertiary: #1a1a24;
        --accent-purple: #6c63ff;
        --accent-cyan: #00d4ff;
        --accent-gradient: linear-gradient(135deg, #6c63ff, #00d4ff);
        --text-primary: #f0f0f0;
        --text-secondary: #a0a0b0;
        --border-subtle: #2a2a3a;
        --success: #00e676;
        --font-heading: 'Space Grotesk', sans-serif;
        --font-body: 'Inter', sans-serif;
        --font-mono: 'Fira Code', monospace;
      }

      * { box-sizing: border-box; margin: 0; padding: 0; }

      html { scroll-behavior: smooth; }

      body {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        font-family: var(--font-body);
        overflow-x: hidden;
      }

      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: var(--bg-primary); }
      ::-webkit-scrollbar-thumb { background: var(--accent-purple); border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: var(--accent-cyan); }

      @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
      @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      @keyframes gradientShift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

      .gradient-text {
        background: var(--accent-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .gradient-border {
        position: relative;
        border: 2px solid transparent;
        background-clip: padding-box;
        background: var(--bg-primary);
      }

      .section-label {
        font-family: var(--font-mono);
        color: var(--accent-cyan);
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
        letter-spacing: 0.05em;
      }

      section {
        padding: 5rem 0;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .blink-cursor {
        animation: blink 1s infinite;
        color: var(--accent-cyan);
      }

      /* Nav */
      .nav-link { background: none; border: none; cursor: pointer; color: var(--text-secondary); font-family: var(--font-body); font-size: 0.9rem; padding: 0.4rem 0.8rem; border-radius: 6px; transition: color 0.2s, background 0.2s; position: relative; }
      .nav-link:hover { color: var(--text-primary); }
      .nav-link.active { color: var(--accent-purple); }
      .nav-link.active::after { content: ''; position: absolute; bottom: -2px; left: 50%; transform: translateX(-50%); width: 60%; height: 2px; background: var(--accent-gradient); border-radius: 2px; }

      /* Timeline */
      .timeline-wrapper { position: relative; padding-left: 2rem; }
      .timeline-wrapper::before { content: ''; position: absolute; left: 0; top: 8px; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan), transparent); }
      .timeline-dot { position: absolute; left: -2rem; top: 1.5rem; width: 14px; height: 14px; border-radius: 50%; background: var(--accent-gradient); box-shadow: 0 0 12px rgba(108,99,255,0.5); transform: translateX(-6px); }

      /* Pills */
      .tech-pill { background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 20px; padding: 4px 12px; font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-secondary); transition: all 0.2s; display: inline-block; }
      .tech-pill:hover { background: var(--accent-gradient); color: white; border-color: transparent; }

      /* Inputs */
      .form-input { width: 100%; background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 8px; color: var(--text-primary); padding: 0.85rem 1rem; font-family: var(--font-body); font-size: 0.95rem; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
      .form-input:focus { border-color: var(--accent-purple); box-shadow: 0 0 0 3px rgba(108,99,255,0.2); }
      .form-input::placeholder { color: var(--text-secondary); }

      textarea.form-input { resize: vertical; min-height: 120px; }

      /* Mobile nav overlay */
      .mobile-menu { position: fixed; inset: 0; background: rgba(10,10,15,0.97); z-index: 999; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2rem; }
      .mobile-nav-link { font-size: 1.5rem; color: var(--text-primary); background: none; border: none; cursor: pointer; font-family: var(--font-heading); transition: color 0.2s; }
      .mobile-nav-link:hover { color: var(--accent-cyan); }

      /* Skill pill hover handled via JS state */
      .skill-pill { background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: 20px; padding: 4px 12px; font-size: 0.85rem; color: var(--text-secondary); transition: all 0.2s; display: inline-block; cursor: default; }
      .skill-pill:hover { background: linear-gradient(135deg, #6c63ff, #00d4ff); color: white; border-color: transparent; }

      /* Skill card hover */
      .skill-card { background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: 16px; padding: 1.5rem; transition: border-color 0.2s, box-shadow 0.2s; }
      .skill-card:hover { border-color: var(--accent-purple); box-shadow: 0 0 20px rgba(108,99,255,0.15); }

      /* Project card hover */
      .project-card { background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: 16px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
      .project-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(108,99,255,0.2); }

      /* Contact info card */
      .contact-card { background: var(--bg-secondary); border: 1px solid var(--border-subtle); border-radius: 14px; padding: 1.2rem 1.5rem; display: flex; align-items: center; gap: 1rem; transition: border-color 0.2s, transform 0.2s; text-decoration: none; }
      .contact-card:hover { border-color: var(--accent-purple); transform: translateY(-2px); }

      @media (max-width: 768px) {
        .hero-grid { grid-template-columns: 1fr !important; }
        .about-grid { grid-template-columns: 1fr !important; }
        .featured-interior { grid-template-columns: 1fr !important; }
        .contact-grid { grid-template-columns: 1fr !important; }
        .name-email-grid { grid-template-columns: 1fr !important; }
        .stat-cards { flex-direction: column !important; align-items: center !important; }
        .nav-links { display: none !important; }
        .hamburger { display: flex !important; }
      }

      @media (min-width: 769px) {
        .hamburger { display: none !important; }
      }

      @media (max-width: 480px) {
        .stat-cards .stat-card { width: 100%; }
        .section-heading { font-size: 2rem !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.getElementById("portfolio-styles")?.remove(); };
  }, []);
  return null;
}
