import { useNavigate } from "react-router-dom";
import web3Logo from "../assests/images/port1.jpg";
import codeImage from "../assests/images/coding.png";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="home-container">
      <div className="container1">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 1, delay: 1 }}
          className="intro-container"
        >
          <h3>Software Developer</h3>
          <div className="quote-container">
            "Programming is skill best acquires by practice and example rather
            from books"
          </div>
          <p>
            <span id="tag1">Full Stack Developer</span>,willing to solve real
            world problems. <span id="tag2">Creativity</span> is the key which
            creates solution for special problems. Always open for feedback.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 1, delay: 2 }}
          className="intro-image-container"
        >
          <img src={codeImage} alt="" />
        </motion.div>
      </div>

      <motion.div
        animate={{ x: [-1400, 0], opacity: 1 }}
        transition={{
          delay: 2,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        className="interest-title"
      >
        I N T E R E S T S
      </motion.div>
      <div className="interests-container">
        <motion.img
          whileHover={{ scale: 0.8 }}
          drag
          dragConstraints={{
            top: -10,
            left: -10,
            right: 10,
            bottom: 10,
          }}
          src={web3Logo}
          style={{ borderRadius: "10px" }}
          alt=""
        />
        <div className="interest">
          <p>
            I have keen interest in Web Development, I enjoy building web
            application that can help in solving real world problems and also
            learning about new technologies.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className="about-navigate"
            onClick={handleClick}
          >
            More About Me!
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
