import { useNavigate } from "react-router-dom";
import { projects } from "../data";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/projects/${id}`);
  };
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          return (
            <article
              key={project.id}
              className="single-project"
              onClick={() => handleClick(project.id)}
            >
              <h3>{project.name}</h3>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
