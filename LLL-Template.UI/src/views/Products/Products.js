import React from 'react';
import PropTypes from 'prop-types';
import ProductCards from '../components/ProductCards';

function Products({ products, setProducts }) {
  return (
    <>
      <div className='card-container-2 product-view'>
        {products?.map((productInfo) => (
          <ProductCards
            // key={productInfo.firebaseKey}
            product={productInfo}
            setProducts={setProducts}
          />
        ))}
      </div>
    </>
  );
}

Products.propTypes = {
  productss: PropTypes.array,
  setProducts: PropTypes.func,
};

export default Products;
