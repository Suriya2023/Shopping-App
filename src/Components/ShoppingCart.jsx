import React, { useState } from "react";
import "./ShoppingCart.css";  

const ShoppingCart = () => {

    
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartSection = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="shopping-cart">
      <div className="cart-logo" onClick={toggleCartSection}>
        🛒
      </div>

      <div className={`cart-section ${isCartOpen ? "open" : ""}`}>
        <h2>Your Shopping Cart</h2>
        <p>No items in the cart yet!</p>
      </div>
    </div>
  );
};

export default ShoppingCart;
