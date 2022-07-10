import MessageAlert from "../components/MessageAlert";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    sendAlert,
    setSendAlert,
    error,
    setError,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      return setError("Enter in all the given fields");
    }
    setError(null);
    setSendAlert("Your message has been successfully sent");
    setName("");
    setEmail("");
    setMessage("");
  };
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <form className="contact-form">
      <div className="title-page">
        {sendAlert && <MessageAlert />}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          Contact
        </motion.h2>
      </div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeIn", duration: 1, delay: 1 }}
        className="input-fields"
      >
        <p style={{ color: "red" }}>{error}</p>
        <input
          type={"text"}
          placeholder="Name"
          required
          className="input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"email"}
          placeholder="Email"
          required
          className="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Type your message"
          required
          className="input-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </motion.div>
      <motion.button
        animate={{ x: [-1200, 0], opacity: 1 }}
        transition={{
          delay: 1,
          x: { type: "spring", stiffness: 100 },
          default: { duration: 2 },
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className="send-message-btn"
        onClick={handleSubmit}
      >
        Send Message
      </motion.button>
    </form>
  );
};

export default Contact;
