import React, { useState, useEffect } from "react";
import "../styles/cart.css";

export default function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  // Calculate the total price whenever the cart updates
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * (item.quantity || 1);
    });
    setPrice(total);
  }, [cart]);

  // Increase quantity of an item
  const incr = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity of an item
  const decr = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && (item.quantity || 1) > 1
        ? { ...item, quantity: (item.quantity || 1) - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div className="cart-box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
            <div className="cart-details">
              <p>{item.name}</p>
              <div className="quantity-controls">
                <button onClick={() => incr(item.id)}>+</button>
                <span>{item.quantity || 1}</span>
                <button onClick={() => decr(item.id)}>-</button>
              </div>
              <p>Price: ${item.price}</p>
              <button className="remove" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div className="cart-total">
        <h3>Total Price: ${price}</h3>
      </div>
    </div>
  );
}
