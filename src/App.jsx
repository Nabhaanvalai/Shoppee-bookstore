import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';

export default function App() {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {
    const isPresent = cart.some((product) => product.id === item.id);

    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return; // Prevent adding the same item again
    }

    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <Shop handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
      {warning && <div className="warning">Item already in cart</div>}
    </div>
  );
}
