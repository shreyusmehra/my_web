import { useState } from "react";
import MessageAlert from "../components/MessageAlert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendAlert, setSendAlert] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && !email && !message) {
      return setError("Enter in all the given fields");
    }
    setError(null);
    setSendAlert("Your message has been successfully sent");
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <form>
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
          required={true}
          className="input-name"
          minLength={3}
          maxLength={50}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"email"}
          placeholder="Email"
          required={true}
          className="input-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Type your message"
          required={true}
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
