Here's the fully updated prompt for a React portfolio:

---

**REACT PORTFOLIO DESIGN PROMPT**

---

Build a complete, fully functional React developer portfolio as a **single JSX file** (for use in Claude Artifacts / CodeSandbox / StackBlitz). Use only these allowed imports:

```
import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
         ChevronDown, Menu, X, Code2, Database, Cloud, 
         Wrench, Shield, Rocket, Palette, Terminal } from "lucide-react"
```

No React Router. No external UI libraries. All styling via **inline styles + a `<style>` tag injected into `document.head`** inside a `useEffect`. Use CSS custom properties for theming. Default export a single `App` component.

---

## 👤 PERSONAL DETAILS

- **Name:** Kanak Paliwal
- **Role:** Full-Stack Developer | CS Undergrad @ VIT Bhopal
- **Typewriter strings** (cycle with useEffect + useState): `"Building Full-Stack Web Apps"`, `"Cloud & DevOps Enthusiast"`, `"Turning Ideas Into Products"`
- **Email:** k29paliwal@gmail.com
- **Phone:** +91-8085727434
- **Location:** Bhopal, India
- **GitHub:** https://github.com/Kanak29p
- **LinkedIn:** https://linkedin.com/in/kanak-paliwal

---

## 🎨 DESIGN SYSTEM

Inject all CSS variables into `:root` via a `useEffect` stylesheet:

```css
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
```

Import from Google Fonts in the injected style: Space Grotesk, Inter, Fira Code.

**Scrollbar styling:** thin, accent-colored via CSS.

---

## 🧩 COMPONENT STRUCTURE

Break the App into these components defined in the same file:

```
App
├── Navbar
├── Hero
├── About
├── Skills
├── Experience
├── Projects
├── Certifications
├── Contact
└── Footer
```

Each component is a named arrow function. App renders them all in order inside a `<div>` with `backgroundColor: var(--bg-primary)`.

---

## 📐 NAVBAR COMPONENT

**State:** `scrolled` (bool), `menuOpen` (bool), `activeSection` (string)

**Behavior:**
- Fixed top, full width, z-index 1000
- Background: `rgba(10,10,15,0.85)`, `backdropFilter: blur(12px)`
- On scroll > 80px: add `borderBottom: '1px solid var(--border-subtle)'`
- Left: `<span>` "KP" styled with gradient text using `background-clip: text`
- Right (desktop): nav links array — `['About','Skills','Experience','Projects','Certifications','Contact']` — mapped to `<button>` elements that call a `scrollToSection(id)` helper
- Active link: gradient underline via `::after` pseudo or inline borderBottom with accent color
- **Scrollspy:** useEffect with scroll listener that checks `getBoundingClientRect()` of each section and sets `activeSection`
- Mobile (< 768px): show hamburger icon (Menu/X from lucide), clicking toggles a full-screen overlay menu with all links centered, closing on link click

---

## 🦸 HERO COMPONENT

**State:** `typewriterText` (string), `typewriterIndex` (number), `charIndex` (number), `isDeleting` (bool)

**Typewriter logic:** useEffect with setInterval — types characters forward, pauses 2s, deletes backward, moves to next string, loops infinitely. Cursor blinks via CSS animation `blink` keyframe injected in stylesheet.

**Layout:** CSS Grid, 2 columns on desktop (`1fr 1fr`), 1 column stacked on mobile. Min-height `100vh`, centered vertically.

**Left column:**
- `<p>` tag: `< Hello World />` — monospace font, accent cyan color, with `|` cursor span that blinks
- `<h1>`: "Kanak Paliwal" — `fontSize: clamp(2.8rem, 6vw, 5rem)`, bold, gradient text
- `<p>`: typewriter text with blinking cursor, accent purple color, monospace
- Bio `<p>`: *"CS undergrad at VIT Bhopal with a passion for building scalable full-stack applications and exploring cloud infrastructure. I turn complex problems into clean, working products."*
- Two `<button>` elements:
  - "View My Work" → onClick scrolls to `#projects`, gradient background, hover: `translateY(-2px)` + stronger shadow
  - "Download Resume" → outlined, gradient border via `border: 2px solid transparent` + `background-clip` trick, same hover lift
- Social row: 3 icon buttons (Github, Linkedin, Mail from lucide) — hover: color transitions to accent, `translateY(-3px)`

**Right column:**
- Styled code block `<pre>` showing:
```javascript
const developer = {
  name: "Kanak Paliwal",
  stack: ["React", "Node", "AWS"],
  status: "Building cool stuff...",
  open_to: "Opportunities 🚀"
};
```
- Syntax highlighting done manually with `<span>` elements: keys in `#6c63ff`, strings in `#00d4ff`, punctuation in `#a0a0b0`, numbers in `#00e676`
- Code block styles: `backgroundColor: #0d0d15`, `border: 1px solid #2a2a3a`, `borderRadius: 16px`, `padding: 2rem`, box-shadow with purple glow `0 0 40px rgba(108,99,255,0.15)`
- Fake top bar with 3 colored dots (red/yellow/green) like a macOS window

**Background:** Render a `<canvas>` element behind everything with a JS particle animation (dots floating slowly, connected by lines when close — done in useEffect with requestAnimationFrame). Canvas `position: absolute`, `zIndex: 0`. All hero content `position: relative`, `zIndex: 1`.

**Scroll chevron:** `ChevronDown` icon at bottom center, CSS `bounce` keyframe animation, onClick scrolls to `#about`

---

## 👨‍💻 ABOUT COMPONENT

**Layout:** 2-column grid (left: avatar, right: text)

**Left:** A styled div `200x200px` — gradient background (`var(--accent-gradient)`), borderRadius `20px`, centered "KP" text in white, `fontSize: 5rem`, bold. Add a subtle rotating border animation using CSS `@keyframes rotate` with a conic-gradient wrapper div.

**Right:**
- Section label: `// about_me` in monospace, accent cyan
- `<h2>`: "Who Am I?"
- Two paragraphs as described above
- 3 stat cards in a flex row:
  - Each card: `backgroundColor: var(--bg-secondary)`, `border: 1px solid var(--border-subtle)`, `borderRadius: 12px`, `padding: 1.2rem`, centered text
  - "9.26 CGPA" / "1 Internship" / "5 Projects"
  - Number in large gradient text, label below in secondary text color

**Scroll animation:** Every section uses an `useIntersectionObserver` custom hook defined once at the top of the file:
```javascript
const useIntersectionObserver = (options) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if(entry.isIntersecting) setIsVisible(true); },
      options
    );
    if(ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, isVisible];
};
```
Apply to every section wrapper: `opacity: isVisible ? 1 : 0`, `transform: isVisible ? 'translateY(0)' : 'translateY(40px)'`, `transition: 'all 0.7s ease'`

---

## 🛠️ SKILLS COMPONENT

**State:** none needed

**Data:** Define a `skillsData` array of objects at top of component:
```javascript
[
  { category: "Languages", icon: <Terminal size={20}/>, skills: ["C++","Python","Java","SQL"] },
  { category: "Frontend", icon: <Palette size={20}/>, skills: ["HTML","CSS","JavaScript","React.js","TypeScript"] },
  { category: "Backend", icon: <Code2 size={20}/>, skills: ["Node.js","Express.js"] },
  { category: "Databases", icon: <Database size={20}/>, skills: ["MongoDB","MySQL","Snowflake"] },
  { category: "Cloud & DevOps", icon: <Cloud size={20}/>, skills: ["AWS EC2","AWS S3","AWS VPC","AWS IAM","Docker","Nginx","Linux"] },
  { category: "Auth & Services", icon: <Shield size={20}/>, skills: ["JWT","Google Sign-In","Firebase FCM"] },
  { category: "CI/CD & Tools", icon: <Wrench size={20}/>, skills: ["Git","GitHub Actions","SonarQube","Postman","VS Code"] },
  { category: "Deployment", icon: <Rocket size={20}/>, skills: ["GitHub Pages","Render","AWS Hosting"] },
]
```

**Layout:** CSS Grid `repeat(auto-fill, minmax(280px, 1fr))`, gap `1.5rem`

**Each category card:**
- `backgroundColor: var(--bg-secondary)`, `border: 1px solid var(--border-subtle)`, `borderRadius: 16px`, `padding: 1.5rem`
- Header row: icon (accent colored) + category name bold
- Skills: flex-wrap row of pill tags
- Each pill: `backgroundColor: var(--bg-tertiary)`, `border: 1px solid var(--border-subtle)`, `borderRadius: 20px`, `padding: 4px 12px`, `fontSize: 0.85rem`
- Pill hover state (via React `onMouseEnter/Leave` + state or CSS class): background shifts to gradient, text white
- Card hover: `border-color` shifts to `var(--accent-purple)`, subtle glow shadow

---

## 💼 EXPERIENCE COMPONENT

**Layout:** Vertical timeline — a `position: relative` wrapper with a `::before` pseudo-element (via injected CSS) that draws a vertical gradient line on the left

**Single entry card:**
- Circle dot on the timeline line (accent gradient)
- Card to the right: `backgroundColor: var(--bg-secondary)`, `border: 1px solid var(--border-subtle)`, `borderRadius: 16px`, `padding: 2rem`
- Top row: Company name bold large + date badge (pill, accent border)
- Second row: Role title in gradient text + location with MapPin icon
- "DT Department · 45-day Internship" subtitle
- Description paragraph
- 3 bullet points as described
- Bottom: flex-wrap tech tag row (same pill style as skills but smaller)

---

## 🚀 PROJECTS COMPONENT

**State:** `hoveredProject` (number or null) — track which card is hovered

**Data:** Define `projectsData` array with objects:
```javascript
{
  id: 1,
  title: "PTE Exam Preparation Platform",
  badge: "Full Stack · Internship",
  featured: true,
  gradient: "linear-gradient(135deg, #6c63ff, #00d4ff)",
  description: "...",
  highlights: ["...","..."],  // for featured project only
  tech: ["React.js","TypeScript","Node.js","Express.js","MySQL","Snowflake","JWT","Google OAuth","Firebase FCM","GitHub Actions","SonarQube","Render"],
  github: "#",
  demo: "#"
}
```

**Layout:**
- Featured project (id:1) renders full-width above the grid
- Remaining 4 projects in CSS Grid `repeat(auto-fill, minmax(320px, 1fr))`

**Featured card extra styling:**
- Gradient top border `4px solid`, full gradient
- Two-column interior layout: description+highlights left, tech tags right
- "⭐ Featured Project" badge in top-right corner

**Regular card:**
- Gradient top bar `4px` tall
- Title, badge, description, tech tags, bottom action row
- Hover: `transform: translateY(-6px)`, `boxShadow: 0 20px 40px rgba(108,99,255,0.2)`

**Bottom of each card:** Two icon buttons — `<Github size={16}/>` + "Code" text, `<ExternalLink size={16}/>` + "Demo" text. Styled as small outlined buttons.

---

## 📜 CERTIFICATIONS COMPONENT

**Layout:** Flex row, centered, gap `2rem`, wrapping on mobile

**Two cards:**
```javascript
[
  { emoji: "🎓", name: "Introduction to Machine Learning", issuer: "NPTEL", color: "#ff6b35" },
  { emoji: "🌐", name: "Bits and Bytes of Computer Networking", issuer: "Coursera", color: "#0056d3" }
]
```

Each card:
- `backgroundColor: var(--bg-secondary)`, `borderRadius: 16px`, `padding: 2rem`, `minWidth: 280px`
- Top: large emoji
- Certificate name bold
- Issuer name in secondary color
- Bottom: `<span>` "✓ Verified" in success green, small pill background

---

## 📬 CONTACT COMPONENT

**State:** `formData` object `{name, email, subject, message}`, `submitted` (bool)

**Layout:** 2-column grid — left info cards, right form

**Left column info cards** (map over array):
```javascript
[
  { icon: <Mail/>, label: "Email", value: "k29paliwal@gmail.com", href: "mailto:..." },
  { icon: <MapPin/>, label: "Location", value: "Bhopal, India", href: null },
  { icon: <Github/>, label: "GitHub", value: "github.com/Kanak29p", href: "https://github.com/Kanak29p" },
  { icon: <Linkedin/>, label: "LinkedIn", value: "kanak-paliwal", href: "https://linkedin.com/in/kanak-paliwal" },
]
```
Each card: icon in accent gradient circle, label small secondary, value bold. Hover: `border-color` accent, slight lift.

**Right column — form:**
- All inputs: `backgroundColor: var(--bg-tertiary)`, `border: 1px solid var(--border-subtle)`, `borderRadius: 8px`, `color: var(--text-primary)`, `padding: 0.85rem 1rem`
- Focus style (via injected CSS): `border-color: var(--accent-purple)`, `boxShadow: 0 0 0 3px rgba(108,99,255,0.2)`, `outline: none`
- Name + Email side by side in a grid `1fr 1fr` (stack on mobile)
- Subject full width
- Message textarea `rows={5}`, resizable vertically only
- Submit button: full width, gradient background, `padding: 1rem`, `borderRadius: 8px`, `fontWeight: 600`, hover: `opacity: 0.9` + lift
- On submit: `e.preventDefault()`, set `submitted: true`, show success div: green checkmark icon + "Message sent! I'll get back to you soon." — with option to send another (reset state)

---

## 🦶 FOOTER COMPONENT

- `backgroundColor: var(--bg-secondary)`, `borderTop: 1px solid var(--border-subtle)`
- Centered flex column
- "Designed & Built by **Kanak Paliwal**" — name in gradient text
- `© 2025 · Made with ☕ and a lot of React`
- 3 social icon buttons row (Github, Linkedin, Mail) with hover accent color
- On hover each icon: `transform: translateY(-3px)` + color to accent

---

## ✨ ANIMATIONS (all via injected CSS keyframes)

```css
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
@keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
@keyframes rotate { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes gradientShift { 0%,100%{backgroundPosition:0% 50%} 50%{backgroundPosition:100% 50%} }
```

Hero section on mount: `animation: fadeInUp 0.8s ease forwards`
Scroll chevron: `animation: bounce 2s infinite`
Cursor in typewriter: `animation: blink 1s infinite`

---

## 📱 RESPONSIVE BREAKPOINTS (via injected CSS)

```css
@media (max-width: 768px) {
  /* Hero: grid 1 col, code block below text */
  /* About: grid 1 col */
  /* Skills: already auto-fill so handles itself */
  /* Projects: 1 col */
  /* Contact: 1 col */
  /* Navbar: hide links, show hamburger */
  /* Featured project: 1 col interior */
}
@media (max-width: 480px) {
  /* Further font size reductions using clamp fallbacks */
  /* Stat cards: 1 col */
  /* Contact name+email: 1 col */
}
```

---

## ⚙️ FINAL REQUIREMENTS

- Export default `App` component
- All sub-components defined in the same file above `App`
- All data arrays (projects, skills, etc.) defined inside their respective components or just above them
- No `console.error` suppressions — write clean code
- No placeholder or lorem ipsum text — use all real content from this prompt
- Every `onClick` and `onChange` handler properly defined
- Canvas particle animation cleaned up on unmount (`return () => cancelAnimationFrame(animId)`)
- All section wrapper divs have `id` attributes matching nav links: `id="about"`, `id="skills"`, `id="experience"`, `id="projects"`, `id="certifications"`, `id="contact"`
- `scrollToSection` helper: `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`

---

Paste this into Claude Artifacts or any AI and say: *"Build this complete React portfolio as a single JSX file. Output the full working code."*