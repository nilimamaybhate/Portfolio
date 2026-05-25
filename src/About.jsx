export default function About() {
  return (
    <section className="about" id="about">

      <div className="about__inner">

        {/* Left — dark panel with big italic question */}
        <div className="about__left">
          <div className="about__left-content">
            <span className="about__left-tag">About</span>
            <h2 className="about__question">
              Who<br />am I<span className="about__qmark">?</span>
            </h2>
          </div>
        </div>

        {/* Right — text content */}
        <div className="about__right">
          <span className="section__tag">Nice to meet you</span>

          <p className="about__body">
            I'm <strong>Nilima Maybhate</strong>, a fresh MSc Computer Science
            graduate from <strong>Prof. Ramkrishna More College, Akurdi</strong>.
            I just wrapped up my final year exams and I'm ready to take everything
            I've learned and put it to real use.
          </p>

          <p className="about__body">
            My main interest is web development — I enjoy building things people
            can actually see and use. I also have foundational knowledge across
            other areas of CS and I'm always expanding. Honestly, every new
            technology I come across makes me equal parts excited and terrified —
            and I've learned that's usually a sign I'm about to grow.
          </p>

          <p className="about__body">
            I pick things up fast, I ask a lot of questions, and I don't give up
            easily. Right now I'm actively looking for my first industry role where
            I can contribute, learn from experienced people, and build things that matter.
          </p>

          <div className="about__tags">
            <span className="chip">Quick Learner</span>
            <span className="chip">Web Development</span>
            <span className="chip">Final Year Graduate</span>
            <span className="chip">Open to Opportunities</span>
          </div>

          <a href="/resume.pdf" className="btn btn--primary about__cta" target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>

      </div>

    </section>
  );
}