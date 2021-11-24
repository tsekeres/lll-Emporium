import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  BagDiv,
  BagImage,
  CartCountDiv
} from './CartIconsElements';
import bag from '../../Assets/NavBarIcons/bag.png';

const CartIcon = ({
  cartCount,
  cartId
}) => {
  const history = useHistory();
  const handleClick = () => {
    if (cartId !== '') {
      history.push(`/orders/${cartId}`);
    } else history.push('/emptyCart');
  };
  return (
    <>
    <BagDiv onClick={handleClick}>
      <BagImage src={bag} />
      <CartCountDiv>{cartCount}</CartCountDiv>
    </BagDiv>
    </>
  );
};

CartIcon.propTypes = {
  cartCount: PropTypes.number,
  cartId: PropTypes.string
};

export default CartIcon;
