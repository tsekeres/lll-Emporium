import React from 'react';
import PropTypes from 'prop-types';
import {
  BagDiv,
  BagImage
} from './CartIconsElements';
import bag from '../../Assets/NavBarIcons/bag.png';

const CartIcon = ({
  count
}) => (
  <>
  <BagDiv>
    <BagImage src={bag} className='bag-image'/>
    {count}
  </BagDiv>
  </>
);

CartIcon.propTypes = {
  count: PropTypes.any
};

export default CartIcon;
