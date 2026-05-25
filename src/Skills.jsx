const SKILL_GROUPS = [
  {
    category: "Languages",
    icon: "{ }",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 45 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⬡",
    skills: [
      { name: "React", level: 75 },
      { name: "Node.js", level: 70 },
      { name: "AngularJS", level: 55 },
    ],
  },
  {
    category: "Databases",
    icon: "⬡",
    skills: [
      { name: "PostgreSQL", level: 60 },
      { name: "Neon DB", level: 65 },
    ],
  },
  {
    category: "Tools",
    icon: "⚙",
    skills: [
      { name: "Git", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 65 },
      { name: "Thunder Client", level: 65 },
      { name: "Canva", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">

      <span className="section__tag">What I Know</span>
      <h2 className="section__title">Skills & <em>Tools</em></h2>
      <p className="section__subtitle">
        A snapshot of the technologies I've worked with — from building UIs to managing databases and everything in between.
      </p>

      <div className="skills__grid">
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group" key={group.category}>
            <h3 className="skill-group__title">
              <span className="skill-group__icon">{group.icon}</span>
              {group.category}
            </h3>
            <div className="skill-group__list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
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