import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SingleProductCard from '../../components/Cards/ProductCards/SingleProductCard';
import { getSingleProduct } from '../../helpers/data/productData';
import { SingleProductContainer } from './SingleProductElements';

function SingleProduct({ user }) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    getSingleProduct(id).then(setProduct);
    return () => {
      mounted = false;
      return mounted;
    };
  }, []);

  return (
    <SingleProductContainer className="single-product-view">
      <SingleProductCard
        key={id}
        id={id}
        product={product}
        user={user}
      />
    </SingleProductContainer>
  );
}

SingleProduct.propTypes = {
  user: PropTypes.any,
  product: PropTypes.any,
  setProduct: PropTypes.func,
};

export default SingleProduct;
