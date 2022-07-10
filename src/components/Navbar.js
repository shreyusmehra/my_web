import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <motion.nav
      animate={{ y: [-100, 0] }}
      transition={{ ease: "easeIn", duration: 2 }}
    >
      <div className="nav-center">
        <div className="nav-header">
          <h4>Shreyus's Portfolio</h4>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} className="navbar-link">
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
