export default function Experience() {
  return (
    <section className="experience section" id="experience">

      <span className="section__tag">Work History</span>
      <h2 className="section__title">Experience</h2>
      <p className="section__subtitle">
        Where I've worked and what I've built.
      </p>

      <div className="exp__timeline">

        <div className="exp__item">

          {/* Left — date + line */}
          <div className="exp__left">
            <span className="exp__date">Nov 2025 — Apr 2026</span>
            <div className="exp__line" />
          </div>

          {/* Dot */}
          <div className="exp__dot" />

          {/* Right — content */}
          <div className="exp__content">
            <div className="exp__header">
              <div>
                <h3 className="exp__title">Web Developer Intern</h3>
                <span className="exp__company">DigiTech Solutions</span>
              </div>
              <span className="chip">5 Months</span>
            </div>

            <p className="exp__desc">
              Worked as a web developer intern where I independently built
              <strong> Vedayura</strong> — a full-stack e-commerce platform —
              from scratch. Took ownership of the entire development cycle,
              from designing the UI to connecting the backend and deploying
              it live on Netlify.
            </p>

            <ul className="exp__highlights">
              <li>Built a complete e-commerce platform solo using React, Node.js, and Neon DB</li>
              <li>Designed and developed responsive UI with HTML, CSS, and JavaScript</li>
              <li>Integrated backend APIs and managed database with PostgreSQL / Neon DB</li>
              <li>Deployed and maintained the live application on Netlify</li>
              <li>Collaborated with AI tools to accelerate development and problem-solving</li>
            </ul>

            <div className="exp__tags">
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">Neon DB</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">HTML/CSS/JS</span>
              <span className="chip">Netlify</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}