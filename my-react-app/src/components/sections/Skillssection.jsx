import React from 'react';
import "./skillssection.css";

const Skillssection = () => {
  const skills = {
    technical: ["HTML & CSS","C++","JavaScript","TypeScript","React.js","Tailwind","Git/GitHub","3D Models and Graphics"],
    soft: ["Communication","Teamwork","Adaptability","Time Management","Passionate"],
    languages: [
      { name: "English", level: "C1" },
      { name: "Arabic", level: "Native" }
    ]
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">
        Skills
        <span className="skills-heading-line" />
      </h2>

      <div className="skills-boxes-container creative-grid">
        <div className="skill-box technical-box glass">
          <h3>🛠️ Technical</h3>
          <div className="skill-tags technical-tags">
            {skills.technical.map((skill, i) => (
              <span key={skill} className="skill-tag tech-tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skill-box soft-box glass">
          <h3>🤝 Soft Skills</h3>
          <ul className="soft-list">
            {skills.soft.map(s => (
              <li key={s} className="soft-pill">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-box language-box glass">
          <h3>🌐 Languages</h3>
          <div className="language-rings">
            {skills.languages.map(l => (
              <div key={l.name} className="language-ring" data-level={l.level} data-name={l.name}>
                <div className="lr-core">
                  <span className="lr-name">{l.name}</span>
                  <span className="lr-level">{l.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillssection;