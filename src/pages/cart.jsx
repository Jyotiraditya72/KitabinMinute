import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ isLoggedIn }) => { // Component name must be Capitalized
  if (!isLoggedIn) {
    return (
      <div>
        <h2>Please Login</h2>
        <Link to="/login">Go to Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {/* Cart items logic here */}
    </div>
  );
};

export default Cart