import { BackToTop } from "./back-to-top";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" }
];

const services = [
  {
    title: "AI Automation",
    description:
      "n8n workflows, API integrations, PostgreSQL, Telegram bots, and AI assistants."
  },
  {
    title: "Landing Pages",
    description:
      "Fast, responsive, conversion-focused landing pages for services, products, and personal brands."
  },
  {
    title: "YouTube Research Tools",
    description:
      "Tools for finding niches, analyzing channels, tracking competitors, and generating content ideas."
  },
  {
    title: "AI Video Workflow",
    description:
      "Systems for scripts, voiceover, image generation, video generation, and publishing workflows."
  }
];

const projects = [
  {
    title: "Telegram AI Bot with Memory",
    stack: ["Telegram", "n8n", "PostgreSQL", "OpenRouter"],
    visual: "bot",
    description:
      "A Telegram assistant that remembers conversation history and responds using AI."
  },
  {
    title: "YouTube Niche Researcher",
    stack: ["YouTube API", "PostgreSQL", "n8n", "GPT/Gemini"],
    visual: "research",
    description:
      "A research tool for analyzing YouTube niches, competitors, and video opportunities."
  },
  {
    title: "Landing Page System",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    visual: "landing",
    description:
      "A reusable landing page structure for small businesses and service providers."
  }
];

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "PostgreSQL",
  "n8n",
  "OpenRouter",
  "Gemini",
  "Telegram API",
  "Vercel",
  "Railway",
  "Docker"
];

const workflow = ["Research", "Plan", "Design", "Build", "Automate", "Deploy"];

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="site-ambient" />
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Workflow />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050706]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3" aria-label="Marsel AI Lab home">
          <span className="grid size-9 place-items-center rounded-xl border border-[var(--accent-soft)] bg-[var(--accent)]/12 text-sm font-black text-[var(--accent)] transition group-hover:scale-105">
            M
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            Marsel AI Lab
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/14 px-4 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent-soft)] hover:bg-[var(--accent)]/10"
        >
          Start a project
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
      <div className="max-w-3xl animate-rise">
        <p className="mb-5 inline-flex rounded-full border border-[var(--accent-soft)] bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)]">
          Marsel AI Lab
        </p>
        <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.96] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
          AI Automation, Landing Pages & YouTube Research Tools
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/70 sm:text-xl">
          I build practical AI workflows, Telegram bots, landing pages, and research
          tools that help small businesses and creators save time, test ideas, and
          grow faster.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[#031211] transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/16 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/8 active:translate-y-0"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {["AI Workflows", "Telegram Bots", "Niche Tools", "Landing Pages"].map(
            (item) => (
              <div key={item} className="signal-pill">
                {item}
              </div>
            )
          )}
        </div>
      </div>

      <div className="relative animate-rise-delayed">
        <div className="hero-visual" aria-hidden="true">
          <span className="orbit orbit-one" />
          <span className="orbit orbit-two" />
          <span className="lab-node node-one">API</span>
          <span className="lab-node node-two">AI</span>
          <span className="lab-node node-three">DB</span>
        </div>
        <div className="lab-panel relative">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <span className="text-sm font-semibold text-white">Automation Map</span>
            <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-bold text-[var(--accent)]">
              Live-ready
            </span>
          </div>
          <div className="grid gap-4 p-5">
            {["Lead capture", "AI assistant", "Research engine", "Publishing flow"].map(
              (label, index) => (
                <div key={label} className="automation-row" style={{ "--delay": `${index * 110}ms` } as React.CSSProperties}>
                  <span className="size-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(65,245,215,0.72)]" />
                  <span className="font-semibold text-white/88">{label}</span>
                  <span className="ml-auto text-sm text-white/45">0{index + 1}</span>
                </div>
              )
            )}
          </div>
          <div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-black/24 p-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-white/58">Stack signal</span>
              <span className="font-semibold text-[var(--accent)]">Next + AI + n8n</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,var(--accent),#9f8cff)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">About</p>
          <h2 className="section-title">Practical AI systems for real business work.</h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-white/66">
          Marsel AI Lab focuses on useful automation, not demos for demos. The work
          connects AI models, data, APIs, Telegram interfaces, landing pages, and
          deployment platforms into systems that can be tested quickly and improved
          over time.
        </p>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">Services</p>
        <h2 className="section-title">Build the workflow, the interface, and the growth loop.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="feature-card">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/62">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title">Selected builds shaped for speed and usefulness.</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className={`project-visual project-visual-${project.visual}`}>
              <span />
              <span />
              <span />
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="mt-4 leading-7 text-white/62">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/68">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="stack" className="section-shell">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">Tech Stack</p>
          <h2 className="section-title">Tools that move from idea to deployed system.</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full bg-white/8 px-4 py-2 text-sm font-semibold text-white/76 ring-1 ring-white/10 transition hover:bg-[var(--accent)]/12 hover:text-[var(--accent)]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section id="workflow" className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">Workflow</p>
        <h2 className="section-title">A compact process from signal to launch.</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-6">
        {workflow.map((step, index) => (
          <div key={step} className="workflow-step">
            <span className="text-sm font-black text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
            <span className="mt-4 block text-lg font-bold text-white">{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="grid gap-8 rounded-[2rem] border border-[var(--accent-soft)] bg-[linear-gradient(135deg,rgba(65,245,215,0.14),rgba(255,255,255,0.04))] p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Have an automation idea or landing page to ship?</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
            Send a short message with the workflow, bot, page, or research tool you
            want to build. I will help turn the idea into a practical first release.
          </p>
        </div>
        <div className="grid content-end gap-3">
          <a className="contact-link" href="mailto:contact@example.com">
            <span>Email</span>
            <strong>contact@example.com</strong>
          </a>
          <a className="contact-link" href="https://t.me/your_username">
            <span>Telegram</span>
            <strong>@your_username</strong>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>Marsel AI Lab</p>
        <p>AI automation, bots, landing pages, research tools.</p>
      </div>
    </footer>
  );
}
