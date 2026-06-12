import { useEffect, useRef } from "react";

const PROJECTS = [
{
number: "01",
title: "Sattva by Mrunmayee",
role: "Freelance Developer",
company: "Independent Project",
description:
"A portfolio website designed and developed for a professional dietitian. Clean, minimal, and built with pure HTML, CSS, and JavaScript — focused on presenting services and building trust with potential clients.",
tags: ["HTML", "CSS", "JavaScript"],
live: "https://sattvabymrunmayee.netlify.app",
github: "https://github.com/nilimamaybhate/sattvaByMrunmayee"
},

{
number: "02",
title: "Task Manager App",
role: "Full Stack Developer",
company: "Personal Project",
description:
"A full-stack MERN task management application with JWT authentication, protected routes, and complete CRUD functionality. Includes task filtering, search, user authentication, and a responsive UI.",
tags: [
"React",
"Node.js",
"Express.js",
"MongoDB",
"JWT",
"Tailwind CSS"
],
live: "https://task-manager-by-nilima.netlify.app/",
github: "https://github.com/nilimamaybhate/task-manager"
},

{
number: "03",
title: "Personal Portfolio Website",
role: null,
company: null,
description:
"Designed and developed a responsive portfolio website to showcase projects, education, and contact information with smooth animations and modern UI.",
tags: ["React", "CSS", "Javascript"],
live: "https://nilima-maybhate.netlify.app/",
github: "https://github.com/nilimamaybhate/Portfolio"
},

{
number: "04",
title: "Coming Soon",
role: "Next Project",
company: "In Progress",
description:
"Currently building a new project to explore modern web technologies and expand full-stack development skills. Stay tuned.",
tags: ["Coming Soon"],
live: null,
github: null
}
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

          {/* Right — links */}
<div className="prow__right">

  {p.featured && (
    <span className="prow__badge">Featured</span>
  )}

  <div className="prow__actions">

    {p.live && (
      <a
        href={p.live}
        target="_blank"
        rel="noreferrer"
        className="prow__link"
      >
        <span>Live Demo</span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="17" x2="17" y2="7"/>
          <polyline points="7 7 17 7 17 17"/>
        </svg>
      </a>
    )}

    {p.github && (
      <a
        href={p.github}
        target="_blank"
        rel="noreferrer"
        className="prow__link prow__link--ghost"
      >
        <span>GitHub</span>

        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74 1.2.09 1.84 1.25 1.84 1.25 1.08 1.84 2.82 1.31 3.51 1 .11-.8.42-1.31.77-1.61-2.67-.31-5.47-1.33-5.47-5.94 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.31 1.23a11.4 11.4 0 0 1 6.02 0c2.3-1.55 3.3-1.23 3.3-1.23.67 1.68.25 2.93.13 3.24.77.84 1.23 1.91 1.23 3.22 0 4.62-2.81 5.62-5.49 5.93.43.37.82 1.1.82 2.23v3.31c0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/>
        </svg>
      </a>
    )}

  </div>

</div>

          </div>
        ))}
      </div>

    </section>
  );
}