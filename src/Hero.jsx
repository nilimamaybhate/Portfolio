import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

const clipReveal = (delay = 0) => ({
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: { clipPath: "inset(0 0% 0 0)" },
  transition: { duration: 0.9, delay, ease: [0.77, 0, 0.18, 1] },
});

/* ── Canvas particle field ───────────────────────────── */
function ParticleCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      o: Math.random() * 0.5 + 0.1,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,210,130,${p.o})`;
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(255,180,80,${0.06 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 3,
      }}
    />
  );
}

/* ── SVG noise grain ─────────────────────────────────── */
function Grain() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.04,
        pointerEvents: "none",
        zIndex: 4,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="ng">
        <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#ng)" />
    </svg>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0.55, 0.85]);

  return (
    <section className="hero" id="home">

      {/* ── BACKGROUND ── */}
      <div className="hero__bg">

        {/* Parallax — CSS class owns position/size, JSX only drives y & scale */}
        <motion.div
          className="hero__bg-wrap"
          style={{ y: bgY, scale: bgScale, willChange: "transform" }}
        >
          <img
            src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=1800&auto=format&fit=crop&q=80"
            alt=""
            className="hero__bg-img"
            style={{ opacity: 0.2, mixBlendMode: "luminosity" }}
          />

          {/* Your original tint classes — keep working with existing CSS */}
          <motion.div
            className="hero__bg-tint hero__bg-tint--crimson"
            animate={{ opacity: [0.15, 0.28, 0.15], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="hero__bg-tint hero__bg-tint--dark"
            animate={{ opacity: [0.08, 0.18, 0.08], x: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </motion.div>

        {/* ── Drifting ambient orbs (NEW) ── */}

        {/* Large amber bloom — top right */}
        <motion.div
          animate={{ x: [0, 45, -15, 0], y: [0, -35, 18, 0], scale: [1, 1.14, 0.94, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "-10%",
            right: "2%",
            width: "54vw",
            height: "54vw",
            maxWidth: 780,
            maxHeight: 780,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(210,95,15,0.52) 0%, rgba(160,40,8,0.26) 42%, transparent 68%)",
            filter: "blur(64px)",
            zIndex: 1,
          }}
        />

        {/* Deep crimson — bottom left */}
        <motion.div
          animate={{ x: [0, -38, 14, 0], y: [0, 28, -12, 0], scale: [1, 0.91, 1.09, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          style={{
            position: "absolute",
            bottom: "-5%",
            left: "-6%",
            width: "46vw",
            height: "46vw",
            maxWidth: 660,
            maxHeight: 660,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(155,28,8,0.46) 0%, rgba(90,12,4,0.20) 46%, transparent 70%)",
            filter: "blur(72px)",
            zIndex: 1,
          }}
        />

        {/* Gold accent — centre */}
        <motion.div
          animate={{ x: [0, 22, -10, 0], y: [0, 18, -22, 0], opacity: [0.45, 0.82, 0.45] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{
            position: "absolute",
            top: "18%",
            left: "32%",
            width: "28vw",
            height: "28vw",
            maxWidth: 420,
            maxHeight: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,165,28,0.20) 0%, rgba(200,100,10,0.08) 52%, transparent 70%)",
            filter: "blur(52px)",
            zIndex: 1,
          }}
        />

        {/* Your original orb class slots — kept so CSS still targets them */}
        <motion.div
          className="hero__orb hero__orb--1"
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hero__orb hero__orb--2"
          animate={{ x: [0, -25, 0], y: [0, 18, 0], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Dark radial vignette — focuses eye on content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 85% 85% at 55% 45%, transparent 25%, rgba(8,3,2,0.55) 65%, rgba(5,1,1,0.92) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Animated particle field */}
        <ParticleCanvas />

        {/* Film grain */}
        <Grain />

        {/* Scroll-driven darken — your original */}
        <motion.div
          className="hero__overlay"
          style={{ opacity: overlayOpacity, zIndex: 5 }}
        />
      </div>

      {/* ── CONTENT — 100% original, zero changes ── */}
      <div className="hero__content">
        <motion.div className="hero__eyebrow" {...fadeUp(0.2)}>
          <span className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Portfolio · 2026</span>
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