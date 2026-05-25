export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background image + overlay */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&auto=format&fit=crop&q=80"
          alt=""
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">

        {/* Huge italic name */}
        <h1 className="hero__name">
          <span className="hero__name-first">Nilima</span>
          <span className="hero__name-last">Maybhate<span className="hero__dot">.</span></span>
        </h1>

        {/* Bottom row — tagline left, buttons right */}
        <div className="hero__bottom">
          <div className="hero__meta">
            <span className="hero__tag">Computer Science Student</span>
            <span className="hero__divider">·</span>
            <span className="hero__tag">Seeking Opportunities</span>
          </div>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View My Work</a>
            <a href="#contact" className="btn btn--ghost">Get In Touch</a>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

    </section>
  );
}