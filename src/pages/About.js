import Details from "../components/Details";
import TechStack from "../components/TechStack";
import { useGlobalContext } from "../context";
import { details } from "../data";

const About = () => {
  const { setDetailId } = useGlobalContext();

  const handleClick = (id) => {
    setDetailId(id);
  };
  return (
    <div className="about-container">
      <div className="about-title">About</div>
      <div className="about">
        {details.map((detail) => {
          const { id, title } = detail;
          return (
            <article
              className="about-story"
              key={id}
              onClick={() => handleClick(id)}
            >
              {title}
            </article>
          );
        })}
      </div>
      <Details />
      <TechStack />
    </div>
  );
};

export default About;
