import React from 'react';
import { useDispatch } from 'react-redux';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', price: 25 },
  { id: 2, name: 'Snake Plant', price: 15 },
  { id: 3, name: 'Succulent', price: 10 },
  { id: 4, name: 'Cactus', price: 12 },
  { id: 5, name: 'Palm', price: 30 },
  { id: 6, name: 'Bamboo', price: 20 },
];

function ProductListingPage() {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h2>Product Listing</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductListingPage;
