import { useGlobalContext } from "../context";
import { details } from "../data";
import { motion } from "framer-motion";

const Details = () => {
  const { detailId } = useGlobalContext();
  const detail = details.find((item) => item.id === detailId);
  const { description } = detail;
  return (
    <motion.div
      animate={{ x: [-1200, 0], opacity: 1 }}
      transition={{
        delay: 2,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 2 },
      }}
      className="details-container"
    >
      <h3>{description}</h3>
    </motion.div>
  );
};

export default Details;
