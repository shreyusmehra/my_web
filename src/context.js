import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendAlert, setSendAlert] = useState(null);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider
      value={{
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
