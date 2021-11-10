import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import SingleProductCard from '../../components/Cards/ProductCards/SingleProductCard.js';
import { getSingleProduct } from '../../helpers/data/productData.js';

function SingleProduct({ user }) {
  const [trip, setTrip] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleTrip(firebaseKey).then(setTrip);
  }, []);

  return (
    <div className='card-container-b trip-view'>
      <SingleTripCard trip={trip} user={user} admin={admin} />
    </div>
  );
}

SingleTrip.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
};

export default SingleTrip;
