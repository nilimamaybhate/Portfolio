import { useEffect, useRef } from "react";

const PROJECTS = [
  {
    number: "01",
    title: "E-commerce Platform",
    role: "Web Developer Intern",
    company: "DigiTech Solutions",
    description:
      "A full-stack e-commerce platform built during my internship at DigiTech Solutions. Led the development end-to-end — handling product listings, cart, orders, and overall user experience with a React frontend and Node.js backend connected to a Neon serverless database.",
    tags: ["React", "Node.js", "HTML", "CSS", "JavaScript", "Neon DB"],
    live: "https://vedayura1.netlify.app",
    github: null,
    featured: true,
  },
  {
    number: "02",
    title: "Sattva by Mrunmayee",
    role: "Freelance Developer",
    company: "Independent Project",
    description:
      "A portfolio website designed and developed for a professional dietitian. Clean, minimal, and built with pure HTML, CSS, and JavaScript — focused on presenting services and building trust with potential clients.",
    tags: ["HTML", "CSS", "JavaScript"],
    live: "https://sattvabymrunmayee.netlify.app",
    github: null,
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("projects--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects section" id="projects" ref={sectionRef}>

      <div className="projects__header">
        <span className="section__tag">Selected Work</span>
        <h2 className="section__title">Things I've <em>Built</em></h2>
        <p className="section__subtitle">
          Real projects — built with real intent, shipped to the real web.
        </p>
      </div>

      <div className="projects__list">
        {PROJECTS.map((p, i) => (
          <div
            className={`prow ${p.featured ? "prow--dark" : "prow--light"}`}
            key={p.number}
            style={{ "--i": i }}
          >

            {/* Left — number + company */}
            <div className="prow__left">
              <span className="prow__num">{p.number}</span>
              <span className="prow__company">{p.company}</span>
            </div>

            {/* Center — main content */}
            <div className="prow__body">
              <div className="prow__role">{p.role}</div>
              <h3 className="prow__title">{p.title}</h3>
              <p className="prow__desc">{p.description}</p>
              <div className="prow__tags">
                {p.tags.map((t) => (
                  <span className="prow__tag" key={t}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right — link */}
            <div className="prow__right">
              {p.featured && (
                <span className="prow__badge">Featured</span>
              )}
              {p.live && (
                
                  <a href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="prow__link"
                >
                  <span>View Project</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}