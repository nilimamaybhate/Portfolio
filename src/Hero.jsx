import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.8,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const clipReveal = (delay = 0) => ({
  initial: {
    clipPath: "inset(0 100% 0 0)",
  },
  animate: {
    clipPath: "inset(0 0% 0 0)",
  },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.77, 0, 0.18, 1],
  },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.85]);

  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero__bg">
        <motion.div
          className="hero__bg-wrap"
          style={{ y: bgY, scale: bgScale }}
        >
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1800&auto=format&fit=crop&q=80"
            alt=""
            className="hero__bg-img"
          />

          {/* Animated color overlays */}
          <motion.div
            className="hero__bg-tint hero__bg-tint--crimson"
            animate={{
              opacity: [0.15, 0.28, 0.15],
              x: [0, 12, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero__bg-tint hero__bg-tint--dark"
            animate={{
              opacity: [0.08, 0.18, 0.08],
              x: [0, -10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>

        {/* Floating light orbs */}
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{
            x: [0, -25, 0],
            y: [0, 18, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Gradient overlay — darkens on scroll */}
        <motion.div
          className="hero__overlay"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content — same as before */}
      <div className="hero__content">
        <motion.div className="hero__eyebrow" {...fadeUp(0.2)}>
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Portfolio · 2025</span>
        </motion.div>

        <h1 className="hero__name">
          <motion.span
            className="hero__name-iam"
            style={{ display: "block" }}
            {...fadeUp(0.3)}
          >
            I am
          </motion.span>
          <motion.span
            className="hero__name-first"
            style={{ display: "block" }}
            {...clipReveal(0.5)}
          >
            Nilima
          </motion.span>
          <motion.span
            className="hero__name-last"
            style={{ display: "block", overflow: "visible" }}
            initial={{ clipPath: "inset(0 100% 0 0 round 0px)" }}
            animate={{ clipPath: "inset(0 0% 0 0 round 0px)" }}
            transition={{ duration: 0.9, ease: [0.77, 0, 0.18, 1], delay: 0.85 }}
          >
            Maybhate<span className="hero__dot">.</span>
          </motion.span>
        </h1>

        <motion.div className="hero__bottom" {...fadeUp(1.0)}>
          <div className="hero__bottom-inner">
            <p className="hero__description">
              A detail-oriented web developer with a genuine passion
              for building user-focused experiences.
            </p>
            <div className="hero__actions">
              <motion.a
                href="#projects"
                className="btn btn--primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn--ghost"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>

    </section>
  );
}