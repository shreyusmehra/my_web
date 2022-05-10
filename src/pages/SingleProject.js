import { Link, useParams } from "react-router-dom";
import { projects } from "../data";

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  const { name, Github } = project;
  return (
    <section className="section-project">
      <h3>{name}</h3>
      <h4>
        Github Repo Link:
        <a href={Github} target="_blank" rel="noreferrer">
          Click here
        </a>
      </h4>
      <Link to={"/projects"}>back to projects</Link>
    </section>
  );
};

export default SingleProject;
