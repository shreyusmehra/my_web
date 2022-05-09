import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>NOT FOUND</h1>
      <h2>Page does not exist (Error code : 404)</h2>
      <Link to={"/"}>back to home</Link>
    </div>
  );
};

export default Error;
