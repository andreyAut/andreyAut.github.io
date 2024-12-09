import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBug, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faReact, faNodeJs, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <FontAwesomeIcon icon={faReact} className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faNodeJs} className="skill-icon" />
          <p>Node.js</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faCode} className="skill-icon" />
          <p>Automação</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faBug} className="skill-icon" />
          <p>Testes</p>
        </div>
        <div className="skill-item">
          <FontAwesomeIcon icon={faGithub} className="skill-icon" />
          <p>CI/CD</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
