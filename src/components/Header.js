import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const totalItems = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
}

export default Header;
