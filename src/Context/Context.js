import { useEffect, useState } from "react";
import { createContext } from "react";

const Mycontext = createContext();

const MyProvider = ({ children }) => {
  const [name, setname] = useState("");
  const [pasword, setpassword] = useState("");
  const [auth, setauth] = useState(true);




  const [users, setUsers] = useState([]);

  
  useEffect(() => {
    // Fetch data from Flask API
    fetch('http://127.0.0.1:1000/menu')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])
  
  
  



  const [cart, setcart] = useState([]);
  console.log("this is cartt",cart);

  const remove = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setcart(updatedCart);
  };

  return (
    <Mycontext.Provider
      value={{ cart, setcart, remove, name, setname, pasword, setpassword, auth ,users }}
    >
      {children}
    </Mycontext.Provider>
  );
};

export { Mycontext, MyProvider };
