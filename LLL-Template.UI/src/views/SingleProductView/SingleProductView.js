import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SingleProductCard from '../../components/Cards/ProductCards/SingleProductCard.js';
import { getSingleProduct } from '../../helpers/data/productData.js';

function SingleProduct({ user }) {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleTrip(id).then(setTrip);
  }, []);

  return (
    <div className='single-product-view'>
      <SingleProductCard trip={trip} user={user} admin={admin} />
    </div>
  );
}

SingleTrip.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default SingleTrip;
