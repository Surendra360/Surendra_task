import React, { useState, createContext, useContext } from 'react';
import Nav from './components/Nav';
import Wellcome from './components/homePage/Wellcome';
import Menu from './components/menu/Menu';
import { Route, Routes } from 'react-router-dom';
import Checkout from './components/menu/cart/Checkout';
import Done from './components/menu/cart/Done';

const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const updateCart = (item, quantity) => {
    const existingItem = cart.items.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ ...item, quantity });
    }
    setCart({ ...cart, total: cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0) });
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Wellcome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </div>
    </CartContext.Provider>
  );
};

export default App;