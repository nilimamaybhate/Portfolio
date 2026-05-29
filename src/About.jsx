import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about" ref={sectionRef}>

      {/* ── Diagonal rule background shapes ── */}
      <div className="about__shapes" aria-hidden="true">
        <svg className="about__shapes-svg" viewBox="0 0 960 600" preserveAspectRatio="xMaxYMin slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
  <filter id="glow">
    <feGaussianBlur stdDeviation="3" result="blur" />
    <feMerge>
      <feMergeNode in="blur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
</defs>
          {/* Diagonal rule lines — top right */}
          <line x1="520" y1="0"  x2="960" y2="440" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="560" y1="0"  x2="960" y2="400" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="600" y1="0"  x2="960" y2="360" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="640" y1="0"  x2="960" y2="320" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="680" y1="0"  x2="960" y2="280" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="720" y1="0"  x2="960" y2="240" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="760" y1="0"  x2="960" y2="200" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="800" y1="0"  x2="960" y2="160" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="840" y1="0"  x2="960" y2="120" stroke="#f0f0f0" strokeWidth="1"/>
          <line x1="880" y1="0"  x2="960" y2="80"  stroke="#f0f0f0" strokeWidth="1"/>
          {/* Crimson accent diagonal — slightly thicker, low opacity */}
          <line x1="490" y1="0"  x2="960" y2="470" stroke="#c0392b" strokeWidth="1.5" strokeOpacity="0.12"/>
          <line x1="460" y1="0"  x2="960" y2="500" stroke="#c0392b" strokeWidth="1"   strokeOpacity="0.06"/>
          {/* Bottom horizontal rule */}
          <line x1="0" y1="560" x2="960" y2="560" stroke="#1a1a1a" strokeWidth="0.5" strokeOpacity="0.06"/>
          {/* Small accent square — bottom right */}
          <rect x="930" y="548" width="14" height="14" fill="none" stroke="#c0392b" strokeWidth="1" strokeOpacity="0.35"/>
          {/* Top-left crosshair */}
          <line x1="32" y1="48" x2="52" y2="48" stroke="#1a1a1a" strokeWidth="0.75" strokeOpacity="0.15"/>
          <line x1="42" y1="38" x2="42" y2="58" stroke="#1a1a1a" strokeWidth="0.75" strokeOpacity="0.15"/>
          <circle cx="42" cy="48" r="2" fill="#c0392b" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* ── Header ── */}
      <div className="about__header">
        <span className="section__tag">About Me</span>
        <div className="about__header-row">
          <h2 className="section__title">
            A developer who loves<br />
            <em>building for people</em>
          </h2>
          <p className="about__tagline">
            MSc Computer Science · Pune, India · Open to Work
          </p>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="about__grid">

        {/* Col 1 — personal summary */}
        <div className="about__summary">
          <p className="about__body">
            I'm <strong>Nilima Maybhate</strong>, a fresh MSc Computer Science
            graduate from <strong>Prof. Ramkrishna More College, Akurdi</strong>.
            I just wrapped up my final year exams and I'm ready to take everything
            I've learned and put it to real use.
          </p>
          <p className="about__body">
            My main interest is web development — I enjoy building things people
            can actually see and use. Every new technology I come across makes me
            equal parts excited and terrified, and I've learned that's usually a
            sign I'm about to grow.
          </p>
          <p className="about__body">
            I pick things up fast, ask a lot of questions, and don't give up
            easily. Right now I'm looking for my first industry role where I can
            contribute, learn from experienced people, and build things that matter.
          </p>

          <div className="about__actions">
            <a href="/resume.pdf" className="btn btn--primary" target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
            <a href="#contact" className="btn btn--outline">Let's Talk</a>
          </div>
        </div>

        {/* Col 2 — info cards */}
        <div className="about__cards">

          <div className="about__card">
            <div className="about__card-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="about__card-body">
              <span className="about__card-label">Education</span>
              <p className="about__card-title">MSc Computer Science</p>
              <p className="about__card-sub">Prof. Ramkrishna More College · 2025</p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div className="about__card-body">
              <span className="about__card-label">Location</span>
              <p className="about__card-title">Pune, Maharashtra</p>
              <p className="about__card-sub">Available remote &amp; on-site</p>
            </div>
          </div>

          <div className="about__card">
            <div className="about__card-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <div className="about__card-body">
              <span className="about__card-label">Focus Area</span>
              <p className="about__card-title">Web Development</p>
              <p className="about__card-sub">Frontend · Full Stack · UI/UX Aware</p>
            </div>
          </div>

          <div className="about__card about__card--highlight">
            <div className="about__card-icon">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="about__card-body">
              <span className="about__card-label">Status</span>
              <p className="about__card-title">Actively Job Seeking</p>
              <p className="about__card-sub">Available immediately · Entry level</p>
            </div>
            <div className="about__card-pulse">
              <span className="about__pulse-dot"/>
              <span className="about__pulse-ring"/>
            </div>
          </div>

        </div>
      </div>

      {/* ── Traits bar ── */}
      <div className="about__traits">
        {["Quick Learner","Team Player","Web Development",
          "Problem Solver","Detail Oriented","Open to Feedback"
        ].map((t) => (
          <span className="about__trait" key={t}>{t}</span>
        ))}
      </div>

    </section>
  );
}