import { useEffect, useRef } from "react";



export default function Contact() {

   const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("contact--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact section" id="contact" ref={sectionRef}>

      <span className="section__tag">Get In Touch</span>
      <h2 className="section__title">Let's <em>Connect</em></h2>
      <p className="section__subtitle">
        I'm currently open to full-time roles and freelance opportunities.
        If you'd like to work together or just say hi — my inbox is open.
      </p>

      <div className="contact__inner">

        {/* Left — info */}
        <div className="contact__info">

          <div className="contact__item">
            <div className="contact__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <span className="contact__label">Email</span>
              <a href="mailto:your@email.com" className="contact__value">your@email.com</a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </div>
            <div>
              <span className="contact__label">GitHub</span>
              <a href="https://github.com/nilimamaybhate" target="_blank" rel="noreferrer" className="contact__value">github.com/nilimamaybhate</a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <span className="contact__label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/nilimamaybhate" target="_blank" rel="noreferrer" className="contact__value">linkedin.com/in/nilimamaybhate</a>
            </div>
          </div>

          <div className="contact__item">
            <div className="contact__icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <span className="contact__label">Location</span>
              <span className="contact__value">Pune, Maharashtra, India</span>
            </div>
          </div>

        </div>

        {/* Right — form */}
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="contact__form-row">
            <div className="contact__field">
              <label className="contact__field-label">Your Name</label>
              <input type="text" className="contact__input" placeholder="Jane Smith" />
            </div>
            <div className="contact__field">
              <label className="contact__field-label">Your Email</label>
              <input type="email" className="contact__input" placeholder="jane@example.com" />
            </div>
          </div>
          <div className="contact__field">
            <label className="contact__field-label">Subject</label>
            <input type="text" className="contact__input" placeholder="Job opportunity / Project collaboration" />
          </div>
          <div className="contact__field">
            <label className="contact__field-label">Message</label>
            <textarea className="contact__input contact__textarea" placeholder="Tell me about the role or what you have in mind..." rows={5} />
          </div>
          <button type="submit" className="btn btn--primary contact__submit">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>

      </div>

      {/* Footer */}
      <div className="contact__footer">
        <p>© 2025 Nilima Maybhate · Built with React & ❤️</p>
      </div>

    </section>
  );
}