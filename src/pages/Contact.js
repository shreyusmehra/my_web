import MessageAlert from "../components/MessageAlert";
import { useGlobalContext } from "../context";

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
  return (
    <form className="contact-form">
      <div className="title-page">
        {sendAlert && (
          <MessageAlert sendAlert={sendAlert} setSendAlert={setSendAlert} />
        )}
        <h2>Contact</h2>
      </div>
      <div className="input-fields">
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
      </div>
      <button type="submit" className="send-message-btn" onClick={handleSubmit}>
        Send Message
      </button>
    </form>
  );
};

export default Contact;
