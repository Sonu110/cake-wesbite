import { useEffect, useState } from "react";
import { createContext } from "react";

const Mycontext = createContext();

const MyProvider = ({ children }) => {
  const storedName = localStorage.getItem("name") || "";
  const storedAuth = localStorage.getItem("auth") === "true" || false;

  const [name, setname] = useState(storedName);
  const [pasword, setpassword] = useState("");
  const [auth, setauth] = useState(storedAuth);

  useEffect(() => {
    // Check if the name is "sonu" to set auth to true
    setauth(name === "sonu");
  }, [name]);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("auth", auth.toString());
  }, [name, auth]);

  const [cart, setcart] = useState([]);

  const remove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setcart(updatedCart);
  };

  return (
    <Mycontext.Provider
      value={{ cart, setcart, remove, name, setname, pasword, setpassword, auth }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export { Mycontext, MyProvider };
