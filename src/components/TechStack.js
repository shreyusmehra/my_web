import { techStack } from "../data";
import { ImArrowDown } from "react-icons/im";
const TechStack = () => {
  return (
    <div className="techstack-container">
      <div className="techstack-title">
        <h2>{`TECH  STACK`}</h2>
      </div>
      <div className="techstack">
        {techStack.map((skill) => {
          const { id, name, description, icon } = skill;
          return (
            <>
              <article key={id} className="skill-container">
                <i>{icon}</i>
                <p>{description}</p>
                <p>{`(${name})`}</p>
              </article>
              <i className="arrow-icon">{id < 5 ? <ImArrowDown /> : ""}</i>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
