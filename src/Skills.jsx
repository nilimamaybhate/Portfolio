import { useEffect, useRef } from "react";

const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
      { name: "HTML",       level: 90 },
      { name: "CSS",        level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Python",     level: 45 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "</>",
    skills: [
      { name: "React",     level: 75 },
      { name: "Node.js",   level: 70 },
      { name: "AngularJS", level: 55 },
    ],
  },
  {
    category: "Databases",
    icon: "[ ]",
    skills: [
      { name: "PostgreSQL", level: 60 },
      { name: "Neon DB",    level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: "⚙",
    skills: [
      { name: "Git",            level: 70 },
      { name: "VS Code",        level: 90 },
      { name: "Postman",        level: 65 },
      { name: "Thunder Client", level: 65 },
      { name: "Canva",          level: 80 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("skills--visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills section" id="skills" ref={sectionRef}>

      <div className="skills__header">
        <span className="section__tag">What I Know</span>
        <h2 className="section__title">Skills & <em>Tools</em></h2>
        <p className="section__subtitle">
          A snapshot of the technologies I've worked with — from building UIs
          to managing databases and everything in between.
        </p>
      </div>

      <div className="skills__grid">
        {SKILL_GROUPS.map((group, gi) => (
          <div
            className="skill-group"
            key={group.category}
            style={{ "--gi": gi }}
          >
            {/* Card header */}
            <h3 className="skill-group__title">
              <span className="skill-group__icon">{group.icon}</span>
              {group.category}
            </h3>

            {/* Skill rows */}
            <div className="skill-group__list">
              {group.skills.map((skill, si) => (
                <div
                  className="skill-item"
                  key={skill.name}
                  style={{ "--si": si }}
                >
                  <div className="skill-item__top">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__pct">{skill.level}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div
                      className="skill-item__fill"
                      style={{ "--fill": `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}