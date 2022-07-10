import { useNavigate } from "react-router-dom";
import { projects } from "../data";
import { motion } from "framer-motion";

const Projects = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/projects/${id}`);
  };
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="projects-container">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div className="projects">
        {projects.map((project) => {
          const { id, name } = project;
          return (
            <motion.article
              animate={{ x: [-1200, 0], opacity: 1 }}
              transition={{
                delay: 1,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 2 },
              }}
              key={id}
              className="single-project"
            >
              <h3>{name}</h3>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
                className="explore-container"
                onClick={() => handleClick(id)}
              >
                Explore
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
