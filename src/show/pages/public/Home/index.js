import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart } from '../../../../process/reducer/products';
import { Navbar } from '../../../components'

const ProductList = () => {
  const dispatch = useDispatch();
  
  // Access the 'products', 'loading', and 'error' from state
  const productsState = useSelector((state) => state.product);
  const { products = [], loading = false, error = null } = productsState || {}; // Default to avoid undefined errors

  useLayoutEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
       <Navbar/>
      <h1>Pokémon Listddsss</h1>
      {loading ? <p>Loading products...</p> :
        <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}</li>
        ))}
      </ul>}
    </div>
  );
};

export default ProductList;

