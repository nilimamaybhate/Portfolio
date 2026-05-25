const PROJECTS = [
  {
    number: "01",
    title: "Vedayura",
    role: "Solo Developer · Internship Project",
    company: "DigiTech Solutions",
    description:
      "A full-stack e-commerce platform built end-to-end during my 5-month internship. Handles product listings, cart, orders, and a clean user experience — all developed independently with a modern React frontend and a Node.js backend connected to a Neon serverless database.",
    tags: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Neon DB"],
    live: "https://vedayura.netlify.app",
    github: null,
    featured: true,
  },
  {
    number: "02",
    title: "Sattva by Mrunmayee",
    role: "Freelance · Portfolio Website",
    company: "Live on Netlify",
    description:
      "A personal portfolio website designed and developed for a professional dietitian. Clean, minimal, and built with pure HTML, CSS, and JavaScript — focused on presenting services and building trust with potential clients.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://sattvabymrunmayee.netlify.app",
    github: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">

      <div className="projects__header">
        <span className="section__tag">Selected Work</span>
        <h2 className="section__title">Things I've <em>Built</em></h2>
        <p className="section__subtitle">
          Real projects — built with real intent, shipped to the real web.
        </p>
      </div>

      <div className="projects__list">
        {PROJECTS.map((p) => (
          <div className={`project-card ${p.featured ? "project-card--featured" : ""}`} key={p.number}>

            <div className="project-card__left">
              <span className="project-card__num">{p.number}</span>
              {p.featured && <span className="project-card__badge">Featured</span>}
            </div>

            <div className="project-card__body">
              <div className="project-card__meta">
                <span className="project-card__company">{p.company}</span>
                <span className="project-card__role">{p.role}</span>
              </div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
            </div>

            <div className="project-card__links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Live Site
                </a>
              )}
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link project-card__link--ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}