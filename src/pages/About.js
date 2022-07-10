import Details from "../components/Details";
import TechStack from "../components/TechStack";
import { useGlobalContext } from "../context";
import { details } from "../data";
import { motion } from "framer-motion";

const About = () => {
  const { setDetailId } = useGlobalContext();

  const handleClick = (id) => {
    setDetailId(id);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="about-container">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 1 }}
        className="about-title"
      >
        About
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 1, delay: 1 }}
        className="about"
      >
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
      </motion.div>
      <Details />
      <TechStack />
    </div>
  );
};

export default About;
