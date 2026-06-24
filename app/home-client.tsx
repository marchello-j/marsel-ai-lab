"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import { BackToTop } from "./back-to-top";

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

const caseTechStack = [
  "Telegram Bot API",
  "n8n",
  "PostgreSQL",
  "OpenRouter",
  "Docker",
  "Railway"
];

const architectureFlow = [
  "Telegram",
  "n8n",
  "PostgreSQL",
  "OpenRouter",
  "Telegram"
];

const translations = {
  en: {
    languageSwitcherLabel: "Select language",
    nav: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contact" }
    ],
    headerCta: "Start",
    hero: {
      title: "AI Automation, Landing Pages & YouTube Research Tools",
      subtitle:
        "I build practical AI workflows, Telegram bots, landing pages, and research tools that help small businesses and creators save time, test ideas, and grow faster.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      signals: ["AI Workflows", "Telegram Bots", "Niche Tools", "Landing Pages"],
      panelTitle: "Automation Map",
      panelStatus: "Live-ready",
      panelRows: [
        "Lead capture",
        "AI assistant",
        "Research engine",
        "Publishing flow"
      ],
      stackLabel: "Stack signal"
    },
    about: {
      kicker: "About",
      title: "Practical AI systems for real business work.",
      text:
        "Marsel AI Lab focuses on useful automation, not demos for demos. The work connects AI models, data, APIs, Telegram interfaces, landing pages, and deployment platforms into systems that can be tested quickly and improved over time."
    },
    services: {
      kicker: "Services",
      title: "Build the workflow, the interface, and the growth loop.",
      items: [
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
      ]
    },
    projects: {
      kicker: "Projects",
      title: "Selected builds shaped for speed and usefulness.",
      items: [
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
      ]
    },
    caseStudy: {
      kicker: "Featured Case Study",
      title: "Telegram AI Bot with Memory",
      status: "Working prototype",
      flowLabel: "Architecture flow",
      problemLabel: "Problem",
      problem:
        "Most simple AI bots forget previous messages and respond without context.",
      solutionLabel: "Solution",
      solution:
        "This workflow connects Telegram, n8n, PostgreSQL, and OpenRouter. It loads recent chat history before generating a reply, then saves both user and assistant messages back to the database.",
      workflowTitle: "Workflow",
      workflowSteps: [
        "Telegram Trigger receives a message",
        "n8n loads recent chat history from PostgreSQL",
        "OpenRouter generates a contextual AI reply",
        "n8n sends the response back to Telegram",
        "PostgreSQL saves the new conversation messages"
      ],
      stackTitle: "Tech stack"
    },
    techStack: {
      kicker: "Tech Stack",
      title: "Tools that move from idea to deployed system."
    },
    workflow: {
      kicker: "Workflow",
      title: "A compact process from signal to launch.",
      steps: ["Research", "Plan", "Design", "Build", "Automate", "Deploy"]
    },
    contact: {
      kicker: "Contact",
      title: "Have an automation idea or landing page to ship?",
      text:
        "Send a short message with the workflow, bot, page, or research tool you want to build. I will help turn the idea into a practical first release.",
      availability: "Availability",
      linksSoon: "Contact links will be added soon."
    },
    footer: "AI automation, bots, landing pages, research tools."
  },
  ru: {
    languageSwitcherLabel: "Выбор языка",
    nav: [
      { label: "Обо мне", href: "#about" },
      { label: "Услуги", href: "#services" },
      { label: "Проекты", href: "#projects" },
      { label: "Стек", href: "#stack" },
      { label: "Контакты", href: "#contact" }
    ],
    headerCta: "Начать",
    hero: {
      title: "AI-автоматизация, лендинги и инструменты для анализа YouTube-ниш",
      subtitle:
        "Я создаю практичные AI-workflow, Telegram-ботов, лендинги и исследовательские инструменты, которые помогают малому бизнесу и авторам экономить время, проверять идеи и быстрее расти.",
      primaryCta: "Смотреть проекты",
      secondaryCta: "Связаться",
      signals: ["AI-workflow", "Telegram-боты", "Анализ ниш", "Лендинги"],
      panelTitle: "Карта автоматизации",
      panelStatus: "Готово к запуску",
      panelRows: [
        "Сбор заявок",
        "AI-ассистент",
        "Исследование ниш",
        "Публикационный процесс"
      ],
      stackLabel: "Сигнал стека"
    },
    about: {
      kicker: "Обо мне",
      title: "Практичные AI-системы для реальных бизнес-задач.",
      text:
        "Marsel AI Lab фокусируется на полезной автоматизации, а не на демо ради демо. Работа объединяет AI-модели, данные, API, Telegram-интерфейсы, лендинги и платформы деплоя в системы, которые можно быстро протестировать и постепенно улучшать."
    },
    services: {
      kicker: "Услуги",
      title: "Собираю workflow, интерфейс и цикл роста.",
      items: [
        {
          title: "AI-автоматизация",
          description:
            "n8n workflow, API-интеграции, PostgreSQL, Telegram-боты и AI-ассистенты."
        },
        {
          title: "Лендинги",
          description:
            "Быстрые, адаптивные и понятные лендинги для услуг, продуктов и личных брендов."
        },
        {
          title: "Инструменты для анализа YouTube-ниш",
          description:
            "Инструменты для поиска ниш, анализа каналов, отслеживания конкурентов и генерации идей для контента."
        },
        {
          title: "AI video workflow",
          description:
            "Системы для сценариев, озвучки, генерации изображений, генерации видео и подготовки к публикации."
        }
      ]
    },
    projects: {
      kicker: "Проекты",
      title: "Работы, собранные под скорость, практичность и запуск.",
      items: [
        {
          title: "Telegram AI Bot with Memory",
          stack: ["Telegram", "n8n", "PostgreSQL", "OpenRouter"],
          visual: "bot",
          description:
            "Telegram-ассистент, который помнит историю диалога и отвечает с учетом контекста."
        },
        {
          title: "YouTube Niche Researcher",
          stack: ["YouTube API", "PostgreSQL", "n8n", "GPT/Gemini"],
          visual: "research",
          description:
            "Инструмент для анализа YouTube-ниш, конкурентов и возможностей для новых видео."
        },
        {
          title: "Landing Page System",
          stack: ["Next.js", "Tailwind CSS", "Vercel"],
          visual: "landing",
          description:
            "Переиспользуемая структура лендингов для малого бизнеса и специалистов."
        }
      ]
    },
    caseStudy: {
      kicker: "Кейс",
      title: "Telegram AI Bot with Memory",
      status: "Рабочий прототип",
      flowLabel: "Архитектура",
      problemLabel: "Проблема",
      problem:
        "Большинство простых AI-ботов забывают предыдущие сообщения и отвечают без контекста.",
      solutionLabel: "Решение",
      solution:
        "Этот workflow соединяет Telegram, n8n, PostgreSQL и OpenRouter. Перед генерацией ответа он загружает свежую историю чата, а затем сохраняет сообщения пользователя и ассистента обратно в базу данных.",
      workflowTitle: "Workflow",
      workflowSteps: [
        "Telegram Trigger получает сообщение",
        "n8n загружает свежую историю чата из PostgreSQL",
        "OpenRouter генерирует контекстный AI-ответ",
        "n8n отправляет ответ обратно в Telegram",
        "PostgreSQL сохраняет новые сообщения диалога"
      ],
      stackTitle: "Технологии"
    },
    techStack: {
      kicker: "Стек",
      title: "Инструменты, с которыми идея доходит до деплоя."
    },
    workflow: {
      kicker: "Процесс",
      title: "Короткий путь от сигнала к запуску.",
      steps: ["Research", "Plan", "Design", "Build", "Automate", "Deploy"]
    },
    contact: {
      kicker: "Контакты",
      title: "Есть идея для автоматизации или лендинга?",
      text:
        "Опишите workflow, бота, страницу или исследовательский инструмент, который хотите собрать. Я помогу превратить идею в практичный первый релиз.",
      availability: "Доступность",
      linksSoon: "Контактные ссылки скоро появятся."
    },
    footer: "AI-автоматизация, боты, лендинги и исследовательские инструменты."
  }
} as const;

type Language = keyof typeof translations;
type ThemePreference = "system" | "light" | "dark";
type Translation = (typeof translations)[Language];
type ProjectVisual = "bot" | "research" | "landing";

function applyThemePreference(theme: ThemePreference) {
  const root = document.documentElement;

  if (theme === "system") {
    delete root.dataset.theme;
    root.style.colorScheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return;
  }

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

export function HomeClient() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<ThemePreference>("system");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("marsel-ai-lab-language");

    if (storedLanguage === "en" || storedLanguage === "ru") {
      window.requestAnimationFrame(() => {
        setLanguage(storedLanguage);
      });
    }
  }, []);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("marsel-ai-lab-theme");

    if (storedTheme === "light" || storedTheme === "dark" || storedTheme === "system") {
      window.requestAnimationFrame(() => {
        setTheme(storedTheme);
        applyThemePreference(storedTheme);
      });
      return;
    }

    applyThemePreference("system");
  }, []);

  useEffect(() => {
    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      applyThemePreference("system");
    };

    syncSystemTheme();
    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
  }, [theme]);

  const changeLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem("marsel-ai-lab-language", nextLanguage);
  };

  const changeTheme = (nextTheme: ThemePreference) => {
    setTheme(nextTheme);
    window.localStorage.setItem("marsel-ai-lab-theme", nextTheme);
    applyThemePreference(nextTheme);
  };

  const t = translations[language];

  return (
    <main
      id="top"
      className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]"
    >
      <div className="site-ambient" />
      <Header
        language={language}
        theme={theme}
        onLanguageChange={changeLanguage}
        onThemeChange={changeTheme}
        t={t}
      />
      <Hero t={t} />
      <About t={t} />
      <Services t={t} />
      <Projects t={t} />
      <FeaturedCaseStudy t={t} />
      <TechStack t={t} />
      <Workflow t={t} />
      <Contact t={t} />
      <Footer t={t} />
      <BackToTop />
    </main>
  );
}

function Header({
  language,
  theme,
  onLanguageChange,
  onThemeChange,
  t
}: {
  language: Language;
  theme: ThemePreference;
  onLanguageChange: (language: Language) => void;
  onThemeChange: (theme: ThemePreference) => void;
  t: Translation;
}) {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-[#050706]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex min-w-0 items-center gap-3" aria-label="Marsel AI Lab home">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-[var(--accent-soft)] bg-[var(--accent)]/12 text-sm font-black text-[var(--accent)] transition group-hover:scale-105">
            M
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-white min-[380px]:inline">
            Marsel AI Lab
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher
            currentLanguage={language}
            label={t.languageSwitcherLabel}
            onLanguageChange={onLanguageChange}
          />
          <ThemeSwitcher currentTheme={theme} onThemeChange={onThemeChange} />
          <a
            href="#contact"
            className="rounded-full border border-white/14 px-3 py-2 text-sm font-semibold text-white transition hover:border-[var(--accent-soft)] hover:bg-[var(--accent)]/10 sm:px-4"
          >
            {t.headerCta}
          </a>
        </div>
      </nav>
    </header>
  );
}

function ThemeSwitcher({
  currentTheme,
  onThemeChange
}: {
  currentTheme: ThemePreference;
  onThemeChange: (theme: ThemePreference) => void;
}) {
  const switcherRef = useRef<HTMLDetailsElement>(null);
  const themeLabels: Record<ThemePreference, string> = {
    system: "System",
    light: "Light",
    dark: "Dark"
  };
  const themes: ThemePreference[] = ["system", "light", "dark"];

  const selectTheme = (theme: ThemePreference) => {
    onThemeChange(theme);
    switcherRef.current?.removeAttribute("open");
  };

  return (
    <details ref={switcherRef} className="theme-switcher">
      <summary aria-label="Theme">
        <span>Theme</span>
        <strong>{themeLabels[currentTheme]}</strong>
      </summary>
      <div className="theme-menu" role="menu" aria-label="Theme options">
        {themes.map((theme) => (
          <button
            key={theme}
            type="button"
            role="menuitemradio"
            aria-checked={currentTheme === theme}
            className={currentTheme === theme ? "is-active" : ""}
            onClick={() => selectTheme(theme)}
          >
            {themeLabels[theme]}
          </button>
        ))}
      </div>
    </details>
  );
}

function LanguageSwitcher({
  currentLanguage,
  label,
  onLanguageChange
}: {
  currentLanguage: Language;
  label: string;
  onLanguageChange: (language: Language) => void;
}) {
  return (
    <div className="language-switcher" role="group" aria-label={label}>
      {(["en", "ru"] as const).map((language) => (
        <button
          key={language}
          type="button"
          aria-pressed={currentLanguage === language}
          onClick={() => onLanguageChange(language)}
          className={currentLanguage === language ? "is-active" : ""}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Hero({ t }: { t: Translation }) {
  return (
    <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
      <div className="max-w-3xl animate-rise">
        <p className="mb-5 inline-flex rounded-full border border-[var(--accent-soft)] bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)]">
          Marsel AI Lab
        </p>
        <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.96] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-white/70 sm:text-xl">
          {t.hero.subtitle}
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-[#211006] transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] active:translate-y-0"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/16 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/28 hover:bg-white/8 active:translate-y-0"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
        <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {t.hero.signals.map((item) => (
            <div key={item} className="signal-pill">
              {item}
            </div>
          ))}
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
            <span className="text-sm font-semibold text-white">{t.hero.panelTitle}</span>
            <span className="rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-bold text-[var(--accent)]">
              {t.hero.panelStatus}
            </span>
          </div>
          <div className="grid gap-4 p-5">
            {t.hero.panelRows.map((label, index) => (
              <div
                key={label}
                className="automation-row"
                style={{ "--delay": `${index * 110}ms` } as CSSProperties}
              >
                <span className="size-2 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(255,155,92,0.62)]" />
                <span className="font-semibold text-white/88">{label}</span>
                <span className="ml-auto text-sm text-white/45">0{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-black/24 p-5">
            <div className="mb-4 flex items-center justify-between text-sm">
              <span className="text-white/58">{t.hero.stackLabel}</span>
              <span className="font-semibold text-[var(--accent)]">Next + AI + n8n</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,var(--accent),#45725d)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About({ t }: { t: Translation }) {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="section-kicker">{t.about.kicker}</p>
          <h2 className="section-title">{t.about.title}</h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-white/66">
          {t.about.text}
        </p>
      </div>
    </section>
  );
}

function Services({ t }: { t: Translation }) {
  return (
    <section id="services" className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">{t.services.kicker}</p>
        <h2 className="section-title">{t.services.title}</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {t.services.items.map((service) => (
          <article key={service.title} className="feature-card">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/62">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects({ t }: { t: Translation }) {
  return (
    <section id="projects" className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">{t.projects.kicker}</p>
        <h2 className="section-title">{t.projects.title}</h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {t.projects.items.map((project) => (
          <article key={project.title} className="project-card">
            <div className={`project-visual project-visual-${project.visual as ProjectVisual}`}>
              <span />
              <span />
              <span />
            </div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
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

function FeaturedCaseStudy({ t }: { t: Translation }) {
  return (
    <section id="case-study" className="section-shell">
      <div className="case-study-panel">
        <div className="case-study-header">
          <div>
            <p className="section-kicker">{t.caseStudy.kicker}</p>
            <h2 className="section-title">{t.caseStudy.title}</h2>
          </div>
          <span className="case-status">{t.caseStudy.status}</span>
        </div>

        <div className="case-flow" aria-label={t.caseStudy.flowLabel}>
          {architectureFlow.map((item, index) => (
            <div key={`${item}-${index}`} className="case-flow-item">
              <span>{item}</span>
              {index < architectureFlow.length - 1 ? (
                <strong aria-hidden="true">→</strong>
              ) : null}
            </div>
          ))}
        </div>

        <div className="case-study-grid">
          <article className="case-copy-card">
            <span>{t.caseStudy.problemLabel}</span>
            <p>{t.caseStudy.problem}</p>
          </article>
          <article className="case-copy-card case-copy-card-strong">
            <span>{t.caseStudy.solutionLabel}</span>
            <p>{t.caseStudy.solution}</p>
          </article>
        </div>

        <div className="case-study-details">
          <div className="case-workflow-card">
            <h3>{t.caseStudy.workflowTitle}</h3>
            <ol>
              {t.caseStudy.workflowSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="case-stack-card">
            <h3>{t.caseStudy.stackTitle}</h3>
            <div>
              {caseTechStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack({ t }: { t: Translation }) {
  return (
    <section id="stack" className="section-shell">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8 lg:p-10">
        <div className="mb-8 max-w-2xl">
          <p className="section-kicker">{t.techStack.kicker}</p>
          <h2 className="section-title">{t.techStack.title}</h2>
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

function Workflow({ t }: { t: Translation }) {
  return (
    <section id="workflow" className="section-shell">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">{t.workflow.kicker}</p>
        <h2 className="section-title">{t.workflow.title}</h2>
      </div>
      <div className="grid gap-3 md:grid-cols-6">
        {t.workflow.steps.map((step, index) => (
          <div key={step} className="workflow-step">
            <span className="text-sm font-black text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
            <span className="mt-4 block text-lg font-bold text-white">{step}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }: { t: Translation }) {
  return (
    <section id="contact" className="section-shell pb-20">
      <div className="grid gap-8 rounded-[2rem] border border-[var(--accent-soft)] bg-[linear-gradient(135deg,rgba(255,155,92,0.14),rgba(255,255,255,0.04))] p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="section-kicker">{t.contact.kicker}</p>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
            {t.contact.text}
          </p>
        </div>
        <div className="grid content-end gap-3">
          <div className="contact-link">
            <span>{t.contact.availability}</span>
            <strong>{t.contact.linksSoon}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }: { t: Translation }) {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
        <p>Marsel AI Lab</p>
        <p>{t.footer}</p>
      </div>
    </footer>
  );
}
