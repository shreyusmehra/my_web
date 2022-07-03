import { useGlobalContext } from "../context";
import { details } from "../data";

const Details = () => {
  const { detailId } = useGlobalContext();
  const detail = details.find((item) => item.id === detailId);
  const { description } = detail;
  return (
    <div className="details-container">
      <h3>{description}</h3>
    </div>
  );
};

export default Details;
