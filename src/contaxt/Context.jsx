import { createContext, useState } from "react";

 const Cartcontext = createContext(null)

const CartcontextProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(second)

    const addToCart = (item) => {
        setCart([...cart, item]);
        setTotal(total + item.price);
      };

      const removeFromCart = (item) => {
        setCart(cart.filter((i) => i.id !== item.id));
        setTotal(total - item.price);
      };
   
    return (<Cartcontext.Provider value={{cart, addToCart, removeFromCart, total}}>
        { children }
    </Cartcontext.Provider>)
}
export { Cartcontext, CartcontextProvider };