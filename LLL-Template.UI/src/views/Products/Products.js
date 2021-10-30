// import userEvent from '@testing-library/user-event';
import React, { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/data/ProductsData';
import ProductCards from '../../components/Cards/ProductCards/ProductCards';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className='product-view'>
        {products?.map((productInfo) => (
          <ProductCards
            key={productInfo.id}
            product={productInfo}
          />
        ))}
      </div>
    </>
  );
}

export default Products;
