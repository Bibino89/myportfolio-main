import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Code2,
  Layers3,
  Database,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";

const skills = [
  { title: "Languages & frameworks", items: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"], icon: Code2 },
  { title: "Styling & UI", items: ["Tailwind CSS", "Bootstrap", "Shadcn/UI", "Responsive design", "Accessible UI"], icon: Layers3 },
  { title: "Tools & practices", items: ["Git", "GitHub", "REST API integration", "Agile development", "Performance optimization", "Code review"], icon: Database },
];

const projects = [
  {
    number: "01",
    name: "Lok Sabha Project",
    type: "Legislative data platform",
    description:
      "Integrated APIs and services to display real-time legislative data, with a responsive and accessible interface for desktop and mobile users.",
    stack: ["React", "API Integration", "Responsive UI", "Accessibility"],
    icon: Layers3,
  },
  {
    number: "02",
    name: "NPTEL Project",
    type: "Learning & video platform",
    description:
      "Built the frontend GUI with Next.js and React, integrated video data, and developed a feature to convert English source videos into multiple languages with subtitles and voice-over.",
    stack: ["Next.js", "React", "Tailwind CSS", "Shadcn UI"],
    icon: Smartphone,
  },
  {
    number: "03",
    name: "VFX Studio Employee CRM Management",
    type: "CRM application",
    description:
      "Contributed across frontend and backend using Next.js and TypeScript, managing employee and customer records with a focus on data accuracy and consistency.",
    stack: ["Next.js", "TypeScript", "CRM", "Data Management"],
    icon: Database,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span className="section-dot" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" aria-label="Home"><span className="brand-mark">B.</span><span>Bibino SN<span className="brand-period">.</span></span></a>
          <div className="nav-links">
            <a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Projects</a><a href="#contact">Contact</a>
          </div>
          <a className="nav-cta" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero container" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse" /> OPEN TO OPPORTUNITIES <span className="eyebrow-line" /></div>
          <h1>Building digital<br />experiences that<br /><span className="gradient-text">make an impact.</span></h1>
          <p className="hero-description">Hi, I&apos;m <strong>Bibino SN</strong> — a Software Engineer with 3.5 years of frontend development experience, building responsive, accessible and performant web applications.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <ArrowUpRight size={17} /></a><a className="button button-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">View resume <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Get in touch <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-meta"><span><span className="meta-icon"><Code2 size={14} /></span> Frontend developer</span><span className="meta-divider" /><span>Kanyakumari, Tamil Nadu</span></div>
        </div>
        <div className="hero-art" aria-label="Decorative developer code illustration">
          <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          <div className="code-card">
            <div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>developer.tsx</span><span className="code-lock">TS</span></div>
            <div className="code-content">
              <div><span className="ln">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
              <div><span className="ln">02</span>&nbsp;&nbsp;focus: <span className="code-green">&quot;Frontend&quot;</span>,</div>
              <div><span className="ln">03</span>&nbsp;&nbsp;stack: [</div>
              <div><span className="ln">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;React&quot;</span>,</div>
              <div><span className="ln">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;Next.js&quot;</span>,</div>
              <div><span className="ln">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">&quot;TypeScript&quot;</span></div>
              <div><span className="ln">07</span>&nbsp;&nbsp;],</div>
              <div><span className="ln">08</span>&nbsp;&nbsp;mindset: <span className="code-green">&quot;Keep learning&quot;</span></div>
              <div><span className="ln">09</span>{"}"};</div>
              <div className="code-cursor"><span className="ln">10</span><span className="cursor" /></div>
            </div>
            <div className="code-bottom"><span><span className="status-dot" /> Ready to build</span><span>UTF-8&nbsp; · &nbsp;TypeScript</span></div>
          </div>
          <div className="float-chip chip-top"><span className="chip-symbol">✳</span> Creative thinking</div>
          <div className="float-chip chip-bottom"><Terminal size={15} /> Clean code, real impact</div>
          <div className="hero-star star-one">✳</div><div className="hero-star star-two">✦</div>
        </div>
        <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
      </section>

      <section className="about section container" id="about">
        <SectionLabel>01 / ABOUT ME</SectionLabel>
        <div className="about-grid">
          <h2>Frontend engineer.<br /><span className="muted-heading">Product-minded builder.</span></h2>
          <div className="about-copy">
            <p>I am a Software Engineer at Netphenix IT Solutions Pvt Ltd, specializing in frontend development. I build scalable web interfaces with React, Next.js and TypeScript, with a focus on responsive design, accessibility and performance.</p>
            <p>I collaborate with UI/UX designers and backend teams, integrate REST APIs, and work across the development lifecycle — from implementation and debugging to code review and production-ready releases.</p>
            <a className="text-link" href="#contact">A little more about me <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="stats-row">
          <div className="stat"><strong>3.5+</strong><span>Years of experience</span></div>
          <div className="stat"><strong>React</strong><span>Frontend development</span></div>
          <div className="stat"><strong>Next.js</strong><span>Modern web applications</span></div>
        </div>
      </section>

      <section className="skills section container" id="skills">
        <SectionLabel>02 / TOOLKIT</SectionLabel>
        <div className="section-heading"><h2>Tools I use to<br /><span className="muted-heading">bring ideas to life.</span></h2><p>A growing toolkit for building reliable, maintainable and user-friendly digital products.</p></div>
        <div className="skill-grid">
          {skills.map((group) => {
            const Icon = group.icon;
            return <article className="skill-card" key={group.title}><div className="skill-icon"><Icon size={20} /></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>;
          })}
        </div>
      </section>

      <section className="work section container" id="work">
        <SectionLabel>03 / SELECTED WORK</SectionLabel>
        <div className="section-heading work-heading"><h2>Some things I&apos;ve<br /><span className="muted-heading">worked on.</span></h2><p>A few examples of application work and frontend explorations. Project details can be refined with approved public information.</p></div>
        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className="project-card" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-icon"><Icon size={23} /></div>
              <div className="project-info"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
              <div className="project-arrow"><ArrowUpRight size={20} /></div>
            </article>;
          })}
        </div>
      </section>

      <section className="experience section container" id="experience">
        <SectionLabel>04 / EXPERIENCE & EDUCATION</SectionLabel>
        <div className="section-heading"><h2>Experience that<br /><span className="muted-heading">keeps me growing.</span></h2><p>Working with teams to turn requirements into reliable, user-friendly software.</p></div>
        <article className="experience-card">
          <div><span className="project-type">JAN 2023 — PRESENT</span><h3>Software Developer</h3><p className="company-name">Netphenix IT Solutions Pvt Ltd</p></div>
          <div className="experience-detail"><p>Developing, testing, debugging and documenting applications with TypeScript, JavaScript, HTML and CSS. Building scalable frontend experiences, maintaining cross-browser compatibility, managing code with Git/GitHub, and collaborating with UI/UX teams to improve usability and accessibility.</p></div>
        </article>
        <div className="education-grid">
          <div className="education-card"><span className="project-type">APR 2022</span><h3>MBA</h3><p>Udaya School of Engineering, Ammandivilai</p></div>
          <div className="education-card"><span className="project-type">APR 2018</span><h3>BCA</h3><p>Nesamony Memorial Christian College, Marthandam</p></div>
        </div>
      </section>

      <section className="contact section container" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" />
          <SectionLabel>05 / GET IN TOUCH</SectionLabel>
          <div className="contact-content"><div><h2>Have a good idea?<br /><span className="gradient-text">Let&apos;s build it.</span></h2><p>I&apos;m always interested in meaningful projects, new challenges and conversations about technology.</p></div><a className="button button-primary contact-button" href="mailto:marsbibino@gmail.com">Say hello <ArrowUpRight size={17} /></a></div>
          <div className="contact-footer"><span><Mail size={15} /> marsbibino@gmail.com</span><div><a href="https://linkedin.com/in/bibino-sn-051756251" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a></div></div>
        </div>
      </section>
      <footer className="footer container"><a className="brand" href="#home"><span className="brand-mark">B.</span><span>Bibino SN<span className="brand-period">.</span></span></a><span>Designed & built with care.</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
