import { techStack } from "../data";
import { ImArrowDown } from "react-icons/im";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className="techstack-container">
      <motion.div
        animate={{ x: [-1200, 0], opacity: 1 }}
        transition={{
          delay: 2,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="techstack-title"
      >
        <h2>{`TECH  STACK`}</h2>
      </motion.div>
      <div className="techstack">
        {techStack.map((skill) => {
          const { id, name, description, icon } = skill;
          return (
            <>
              <motion.article
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                  },
                }}
                key={id}
                className="skill-container"
              >
                <i>{icon}</i>
                <p>{description}</p>
                <p>{`(${name})`}</p>
              </motion.article>
              <i className="arrow-icon">{id < 5 ? <ImArrowDown /> : ""}</i>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
