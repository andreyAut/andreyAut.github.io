import "../styles/Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projetos</h2>
      <div className="project-container">
        <div className="project-item">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Preview do Projeto 1"
            className="project-img"
          />
          <h3>Projeto 1</h3>
          <p>Descrição breve do projeto.</p>
          <a href="https://github.com/seu-usuario/projeto1" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </div>
        <div className="project-item">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Preview do Projeto 2"
            className="project-img"
          />
          <h3>Projeto 2</h3>
          <p>Descrição breve do projeto.</p>
          <a href="https://github.com/seu-usuario/projeto2" target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
