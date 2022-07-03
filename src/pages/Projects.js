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
          const { id, name } = project;
          return (
            <article key={id} className="single-project">
              <h3>{name}</h3>
              <div
                className="explore-container"
                onClick={() => handleClick(id)}
              >
                Explore
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
