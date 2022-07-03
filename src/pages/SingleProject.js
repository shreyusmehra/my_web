import { Link, useParams } from "react-router-dom";
import { projects } from "../data";
import { FaGithub } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

const SingleProject = () => {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  const { name, Github, techstack, description } = project;
  return (
    <section className="section-project">
      <h3>{name}</h3>
      <h4>{`Tech Stack used: ${techstack}`}</h4>
      <h4>
        <i>{<FaGithub />}</i>
        Github Link:
        <a href={Github} target="_blank" rel="noreferrer">
          Click here
        </a>
      </h4>
      <p>{description}</p>
      <div className="back-btn">
        <Link to={"/projects"}>
          <i>{<IoArrowBackCircle />}</i>
          <h4>Back to Projects</h4>
        </Link>
      </div>
    </section>
  );
};

export default SingleProject;
