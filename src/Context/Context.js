import { useEffect, useState } from "react";
import { createContext } from "react";

const Mycontext = createContext();

const MyProvider = ({ children }) => {
  const [name, setname] = useState("");
  const [pasword, setpassword] = useState("");
  const [auth, setauth] = useState(true);
  const [restorents ,setrestorents ] =([])
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

  useEffect(() => {
console.log("the value of restorenrt ",restorents);
    // Fetch data from Flask API
    fetch('http://127.0.0.1:1000/restorentdata')
      .then(response => response.json())
      .then(data => {
        console.log("the data is ",data);
        setrestorents(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])
  
  

const cartdata = JSON.parse (localStorage.getItem("cart"))||[]
const cartprotextion = localStorage.getItem('users')

console.log("the cart protextions",cartprotextion);
  const [cart, setcart] = useState(cartdata);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([...cart]));
    localStorage.setItem('users', auth);
  }, [cart,auth]);

  






  const remove = (productId) => {
    const updatedCart = cart.filter((item) => item[0] !== productId);
    console.log("remove cart name " , updatedCart);
    setcart(updatedCart);
  };

  return (
    <Mycontext.Provider
      value={{ cart, setcart, remove, name, setname, pasword, setpassword, auth ,users ,setauth,setrestorents,restorents}}
    >
      {children}
    </Mycontext.Provider>
  );
};

export { Mycontext, MyProvider };
