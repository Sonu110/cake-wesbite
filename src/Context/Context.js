import { useEffect, useState } from "react";
import { createContext } from "react";

const Mycontext = createContext();

const MyProvider = ({ children }) => {
  const [name, setname] = useState("");
  const [pasword, setpassword] = useState("");
  const [auth, setauth] = useState(false);

  useEffect(() => {
    if (name === "sonu") {
      setauth(true);
    }
  }, [name]);

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
