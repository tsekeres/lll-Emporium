import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SingleProductCard from '../../components/Cards/ProductCards/SingleProductCard';
import { getSingleProduct } from '../../helpers/data/productData';

function SingleProduct({ user }) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, []);

  return (
    <div className='single-product-view'>
      <SingleProductCard product={product} user={user}/>
    </div>
  );
}

SingleProduct.propTypes = {
  user: PropTypes.any,
  product: PropTypes.any,
  setProduct: PropTypes.func,
};

export default SingleProduct;
