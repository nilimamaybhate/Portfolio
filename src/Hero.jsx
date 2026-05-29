import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Trigger animations after mount
    requestAnimationFrame(() => {
      el.classList.add("hero--loaded");
    });
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>

      {/* Background image + overlay */}
      <div className="hero__bg">
        <img
          src="/public/assets/hero-image.jpg"
          alt=""
          className="hero__bg-img"
        />
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">

        {/* Eyebrow tag */}
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Portfolio</span>
        </div>

        {/* Huge italic name */}
        <h1 className="hero__name">
          <span className="hero__name-first">Nilima</span>
          <span className="hero__name-last">
            Maybhate<span className="hero__dot">.</span>
          </span>
        </h1>



        {/* Bottom row */}
        <div className="hero__bottom">
         <div className="hero__meta">
  <p className="hero__description">
    A detail-oriented web developer with a genuine passion for building user-focused experiences.
  </p>
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