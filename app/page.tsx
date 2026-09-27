/* TCF Blanc Simulateur – landing page clone */
"use client";

import { useState } from "react";
import SignupModal from "./SignupModal";

const IconLogo = () => (
  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" aria-hidden="true">
    <rect x="0.5" y="10" width="3" height="6" rx="1.5" fill="#1b6bff" opacity="0.45" />
    <rect x="5.5" y="7" width="3" height="12" rx="1.5" fill="#1b6bff" opacity="0.7" />
    <rect x="10.5" y="2" width="3.5" height="22" rx="1.75" fill="#1b6bff" />
    <rect x="16" y="7" width="3" height="12" rx="1.5" fill="#1b6bff" opacity="0.7" />
    <rect x="21" y="10" width="3" height="6" rx="1.5" fill="#1b6bff" opacity="0.45" />
  </svg>
);

const IconHome = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.1 1 12h3v10h7v-6h2v6h7V12h3L12 2.1z" />
  </svg>
);

const IconBookText = () => (
  <svg
    width="13"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <path d="M8 7h8" />
    <path d="M8 11h6" />
  </svg>
);

const IconChat = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

const IconLogin = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" x2="3" y1="12" y2="12" />
  </svg>
);

const IconUserPlus = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 21a8 8 0 0 1 13.292-6" />
    <circle cx="10" cy="8" r="5" />
    <path d="M19 16v6" />
    <path d="M22 19h-6" />
  </svg>
);

const IconArrowRight = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconHeadphones = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

const IconBookOpen = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.2 4.2c-1.5-1-3.6-1.6-6.2-1.7-.5 0-1 .4-1 1v13.9c0 .5.4.9 1 .9 2.7.1 4.7.7 6.2 1.7.3.2.6.3.8.3V4.5c-.2 0-.5-.1-.8-.3Zm10-1.7c-2.7.1-4.7.7-6.2 1.7-.3.2-.6.3-.8.3v15.8c.2 0 .5-.1.8-.3 1.5-1 3.6-1.6 6.2-1.7.5 0 1-.4 1-.9V3.4c0-.5-.5-.9-1-.9Z" />
  </svg>
);

const IconMapleLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.7 12.4c.4-.2.4-.7.1-.9l-1.7-1 .3-2.6c0-.4-.4-.7-.8-.5l-1.3.6-2-3.4c-.2-.4-.8-.3-.9.1l-.5 1.9-1.2-.7c-.3-.2-.7 0-.7.4l.2 2.9-1.4-.5-.9-3.9c-.1-.4-.7-.4-.8 0l-.9 3.9-1.4.5.2-2.9c0-.4-.4-.6-.7-.4l-1.2.7-.5-1.9c-.1-.4-.7-.5-.9-.1l-2 3.4-1.3-.6c-.4-.2-.8.1-.8.5l.3 2.6-1.7 1c-.3.2-.3.7.1.9l7 3.9-.5 2.2h3.4V23h1.8v-4.5h3.4l-.5-2.2 7-3.9Z" />
  </svg>
);

const IconPen = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 20h9" />
    <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
  </svg>
);

const WmAudioLines = () => (
  <svg width="118" height="110" viewBox="0 0 118 110" fill="none" aria-hidden="true">
    {[16, 30, 50, 26, 46, 64, 36, 104, 78, 52, 86, 40, 64, 38].map((h, i) => (
      <rect
        key={i}
        x={i * 8.57}
        y={55.5 - h / 2}
        width="5"
        height={h}
        rx="2.5"
        fill="#d8e6f8"
      />
    ))}
  </svg>
);

const WmFileText = ({ tone = "#dbe7f6" }: { tone?: string }) => (
  <svg width="53" height="78" viewBox="0 0 24 34" fill="none" aria-hidden="true">
    <path
      d="M14 0H3a2 2 0 0 0-2 2v30a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9l-9-9Z"
      fill={tone}
    />
    <path d="M14 0v7a2 2 0 0 0 2 2h7L14 0Z" fill="#e9f0fa" />
    <rect x="5" y="13" width="9" height="2" rx="1" fill="#f4f8fd" />
    <rect x="5" y="17.5" width="14" height="2" rx="1" fill="#f4f8fd" />
    <rect x="5" y="22" width="14" height="2" rx="1" fill="#f4f8fd" />
    <rect x="5" y="26.5" width="10" height="2" rx="1" fill="#f4f8fd" />
  </svg>
);

const WmWorldMap = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="data:image/png;base64,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"
    width={138}
    height={94}
    alt=""
    aria-hidden="true"
    style={{ display: "block" }}
  />
);

const Globe = () => (
  <svg
    className="globe"
    width="560"
    height="560"
    viewBox="0 0 560 560"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="globeGrad" cx="42%" cy="34%" r="70%">
        <stop offset="0%" stopColor="#f2f8ff" />
        <stop offset="60%" stopColor="#e4eefc" />
        <stop offset="100%" stopColor="#dbe8fa" />
      </radialGradient>
    </defs>
    <circle cx="280" cy="280" r="238" fill="url(#globeGrad)" opacity="0.75" />
    <g fill="#cbdcf6" opacity="0.85">
      <path d="M180 130c22-14 52-18 76-12 14 4 30 2 42-6 14-9 34-8 46 3 8 8 4 20-8 24-18 6-38 4-54 12-14 6-28 16-42 12-10-3-6-14-14-18-12-6-26 2-36-8-4-3-8-4-10-7Z" />
      <path d="M120 210c24-10 52-10 76 0 18 8 40 8 58 16 14 7 10 24-4 28-22 7-46 4-68 8-18 3-40 8-54-4-12-10-16-28-4-36 0-6-2-10-4-12Z" />
      <path d="M300 260c18-5 40-4 54 8 10 8 26 8 34 16 8 12-4 24-16 25-22 3-44-1-62-9-14-7-26-15-26-27 0-8 8-11 16-13Z" />
      <path d="M210 360c16-8 36-8 52 0 12 7 28 8 36 18 8 10 0 24-12 25-20 3-40 0-56-7-12-5-24-12-24-23 0-5 2-10 4-13Z" />
      <path d="M360 150c20-10 46-12 66-4 14 5 30 4 42 12 10 7 6 20-6 23-18 5-36 2-52 8-14 5-28 12-40 6-10-5-14-16-12-26 1-8 0-15 2-19Z" />
    </g>
    <ellipse
      cx="330"
      cy="120"
      rx="180"
      ry="72"
      stroke="#b9d2f2"
      strokeWidth="1.5"
      strokeDasharray="6 7"
      transform="rotate(-14 330 120)"
    />
  </svg>
);

type TestCard = {
  id: string;
  title: string;
  subtitle: string;
  link: string[];
  desc: string[];
  icon: React.ReactNode;
  watermark: React.ReactNode;
  accent?: boolean;
};

const CARDS: TestCard[] = [
  {
    id: "tp",
    title: "TCF TP",
    subtitle: "Test de Connaissance du Français",
    link: ["TP (Tout Public)"],
    desc: [
      "Mettez-vous en situation avec une",
      "simulation d'examen complète et une",
      "interface identique à celle du jour J.",
    ],
    icon: <IconHeadphones />,
    watermark: <WmAudioLines />,
  },
  {
    id: "dap",
    title: "TCF DAP",
    subtitle: "Test de Connaissance du Français",
    link: ["DAP (Demande d'Admission", "Préalable)"],
    desc: ["Testez vos compétences en français", "pour vos études en France."],
    icon: <IconBookOpen />,
    watermark: <WmFileText />,
  },
  {
    id: "canada",
    title: "TCF CANADA",
    subtitle: "Test de Connaissance du Français",
    link: ["Pour le Canada"],
    desc: [
      "Passez le TCF pour votre projet",
      "d'immigration ou d'installation au",
      "Canada.",
    ],
    icon: <IconMapleLeaf />,
    watermark: <WmWorldMap />,
  },
  {
    id: "ee",
    title: "Expression Écrite",
    subtitle: "L'épreuve qui départage les candidats",
    link: ["Sujets d'actualité · correction IA", "détaillée"],
    desc: [
      "Des sujets d'actualité proches de",
      "ceux du jour J : entraînez-vous à",
      "l'écrit seul, avec note sur 20 et",
      "erreurs expliquées.",
    ],
    icon: <IconPen />,
    watermark: <WmFileText tone="#dbe7f6" />,
    accent: true,
  },
];

const STATS = [
  { emoji: "👥", value: "12762", suffix: "", label: "étudiants inscrits", cx: 140 },
  { emoji: "📝", value: "+25", suffix: "", label: "examens réels", cx: 392 },
  { emoji: "⭐", value: "4,8", suffix: "/5", label: "note des candidats", cx: 637 },
  { emoji: "🏆", value: "N°1", suffix: "", label: "simulateur TCF", cx: 889 },
];

export default function Home() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <header className="mobile-bar">
        <div className="mobile-brand">
          <IconLogo />
          <div className="brand-text">
            <span className="brand-name">TCF</span>
            <span className="brand-tag">BLANC SIMULATEUR</span>
          </div>
        </div>
        <button
          className="burger"
          type="button"
          aria-label="Menu"
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>
      {drawerOpen && <div className="scrim" onClick={() => setDrawerOpen(false)} />}
      <aside
        className={`sidebar${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      >
        <div className="brand">
          <IconLogo />
          <div className="brand-text">
            <span className="brand-name">TCF</span>
            <span className="brand-tag">BLANC SIMULATEUR</span>
          </div>
        </div>
        <nav className="nav-top">
          <a className="nav-item active" href="#">
            <IconHome />
            <span>Accueil</span>
          </a>
        </nav>
        <div className="nav-bottom">
          <a className="nav-item guide" href="#">
            <IconBookText />
            <span>Guide TCF</span>
          </a>
          <a className="nav-item" href="#">
            <IconChat />
            <span>Contact</span>
          </a>
          <div className="side-links">
            <a href="#">Le TCF Tout Public</a>
            <a href="#">Le TCF DAP</a>
            <a href="#">Le TCF Canada</a>
            <a href="#">Conditions générales</a>
            <a href="#">Confidentialité</a>
          </div>
        </div>
      </aside>

      <main className="main">
        <div className="dots dots-a" />
        <div className="dots dots-b" />
        <div className="dots dots-c" />
        <div className="dots dots-d" />
        <Globe />

        <header className="topbar">
          <button className="btn btn-light" type="button">
            <IconLogin />
            <span>Se connecter</span>
          </button>
          <button className="btn btn-primary" type="button">
            <IconUserPlus />
            <span>S'inscrire</span>
          </button>
        </header>

        <section className="hero">
          <p className="eyebrow">Bienvenue sur</p>
          <h1>
            Préparez-vous au
            <br />
            succès avec <span className="accent">TCF</span>
            <br />
            <span className="accent">Blanc Simulateur</span>
          </h1>
          <p className="lead">
            Mettez-vous en situation dans des conditions réelles du TCF et
            améliorez vos compétences en français.
          </p>
        </section>

        <section className="cards">
          {CARDS.map((c) => (
            <article key={c.id} className={`card${c.accent ? " accent" : ""}`}>
              {c.accent && (
                <span className="badge">
                  <span className="badge-spark">✨</span> Nouveau
                </span>
              )}
              <div className="card-top">
                <div className="icon-circle">{c.icon}</div>
                <div className={`wm wm-${c.id}`}>{c.watermark}</div>
                <h2 className="card-title">{c.title}</h2>
                <p className="card-sub">{c.subtitle}</p>
                <p className="card-link">
                  {c.link.map((l, i) => (
                    <span key={i} className="card-link-line">
                      {l}
                    </span>
                  ))}
                </p>
              </div>
              <div className="card-footer">
                <p className="card-desc">
                  {c.desc.map((l, i) => (
                    <span key={i} className="card-desc-line">
                      {l}
                    </span>
                  ))}
                </p>
                <button
                  className="card-btn"
                  type="button"
                  onClick={() => setSignupOpen(true)}
                >
                  <span>Commencer</span>
                  <IconArrowRight />
                </button>
              </div>
            </article>
          ))}
        </section>

        <section className="stats">
          <i className="stat-div" style={{ left: 257 }} />
          <i className="stat-div" style={{ left: 506 }} />
          <i className="stat-div" style={{ left: 755 }} />
          {STATS.map((s) => (
            <div
              key={s.label}
              className="stat"
              style={{ left: s.cx - 100, width: 200 }}
            >
              <span className="stat-emoji">{s.emoji}</span>
              <span className="stat-value">
                {s.value}
                {s.suffix && <em>{s.suffix}</em>}
              </span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </section>

        <footer className="copyright">
          © 2026 tcfblanc. Tous droits réservés.
        </footer>
      </main>

      {signupOpen && <SignupModal onClose={() => setSignupOpen(false)} />}
    </>
  );
}
