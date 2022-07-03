import { useNavigate } from "react-router-dom";
import web3Logo from "../assests/images/port1.jpg";
import codeImage from "../assests/images/coding.png";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-container">
      <div className="container1">
        <div className="intro-container">
          <h3>Software Developer</h3>
          <div className="quote-container">
            "Programming is skill best acquires by practice and example rather
            from books"
          </div>
          <p>
            <span id="tag1">Full Stack Developer</span>,willing to solve real
            world problems. <span id="tag2">Creativity</span> is the key which
            creates solution for special problems. Always open for suggestions.
          </p>
        </div>
        <div className="intro-image-container">
          <img src={codeImage} alt="" />
        </div>
      </div>

      <div className="interest-title">I N T E R E S T S</div>
      <div className="interests-container">
        <img src={web3Logo} style={{ borderRadius: "10px" }} alt="" />
        <div className="interest">
          <p>
            I have keen interest in Web Development, I enjoy building web
            application that can help in solving real world problems and
            learning new technologies.
          </p>
          <div className="about-navigate" onClick={handleClick}>
            More About Me!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
