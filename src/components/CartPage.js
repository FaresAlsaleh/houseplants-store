import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>
      <button onClick={() => alert('Coming Soon')}>Checkout</button>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
