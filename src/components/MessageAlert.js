import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context";

const MessageAlert = () => {
  const { sendAlert, setSendAlert } = useGlobalContext();
  const handleClick = () => {
    setSendAlert(null);
  };

  useEffect(() => {
    const MessageTimer = () => {
      setTimeout(() => {
        handleClick();
      }, [5000]);
    };
    MessageTimer();
    clearTimeout(MessageTimer);
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
