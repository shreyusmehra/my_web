import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const MessageAlert = ({ sendAlert, setSendAlert }) => {
  const handleClick = () => {
    setSendAlert(null);
  };

  useEffect(() => {
    setTimeout(() => {
      handleClick();
    }, [3000]);
    //eslint-disable-next-line
  }, [sendAlert]);

  return (
    <div className="message-sent-container">
      <div className="message">{sendAlert}</div>
      <div className="message-close-btn-container">
        <button
          type="reset"
          className="message-close-btn"
          onClick={() => handleClick()}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default MessageAlert;
