import { useEffect, useRef } from "react";

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("exp--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience section" id="experience" ref={sectionRef}>

      <div className="exp__header-block">
        <span className="section__tag">Work History</span>
        <h2 className="section__title">Experience</h2>
        <p className="section__subtitle">
          Where I've worked and what I've built.
        </p>
      </div>

      <div className="exp__list">
        <div className="exp-card">

          {/* Top header bar */}
          <div className="exp-card__top">
            <div className="exp-card__icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <div className="exp-card__meta">
              <h3 className="exp-card__role">Web Developer Intern</h3>
              <span className="exp-card__company">DigiTech Solutions</span>
            </div>
            <div className="exp-card__right-meta">
              <span className="exp-card__duration">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                5 Months
              </span>
              <span className="exp-card__date">Nov 2025 — Apr 2026</span>
              <span className="exp-card__status">
                <span className="exp-card__status-dot" />
                Completed
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="exp-card__body">

            <p className="exp-card__desc">
              Worked as a Web Developer Intern and contributed to the development
              of a full-stack e-commerce platform. Assisted in building responsive
              UI components, integrating backend functionalities, and deploying the
              project on Netlify while collaborating with the team throughout the
              development process.
            </p>

            {/* Highlights grid */}
            <ul className="exp-card__highlights">
              {[
                "Built complete e-commerce platform using React, Node.js, and Neon DB",
                "Designed and developed responsive UI with HTML, CSS, and JavaScript",
                "Integrated backend APIs and managed database with PostgreSQL / Neon DB",
                "Deployed and maintained the live application on Netlify",
                "Collaborated with AI tools to accelerate development and problem-solving",
              ].map((item, i) => (
                <li key={i} style={{ "--li": i }}>{item}</li>
              ))}
            </ul>

            {/* Tags */}
            <div className="exp-card__tags">
              {["React", "Node.js", "Neon DB", "PostgreSQL", "HTML/CSS/JS", "Netlify"].map((t) => (
                <span className="chip" key={t}>{t}</span>
              ))}
            </div>

          </div>

          {/* Decorative corner accent */}
          <div className="exp-card__corner" aria-hidden="true" />

        </div>
      </div>

    </section>
  );
}