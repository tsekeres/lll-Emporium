import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  ProductCard,
  ProductCardImg,
  ProductCardHeader,
  ProductCardButtons,
  ProductCardDelete,
  ProductCardBody,
  CardTitle,
  Button,
  Button1,
} from './ProductCardElements';
import { getProducts, deleteProduct } from '../../../helpers/data/productData';
import deleted from '../../../Assets/ActionIcons/Delete.png';

const ProductCards = ({
  setProducts,
  productImageUrl,
  productName,
  id,
  user,
  designerId,
}) => {
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProduct(id).then(() => getProducts().then((response) => setProducts(response)));
        break;
      case 'view':
        history.push(`/products/${id}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <ProductCard
      className='ProductCard'
      key={id}
      id='ProductCard'
    >
      <ProductCardHeader className='ProductCardHeader'>
        {
        user !== null
        && <div className='ProductCardHeader' id='authButtons'>
          {
            ((user.roleTypeName === 'Designer' && user.id === designerId) || user.roleTypeName === 'Administrator')
              ? <ProductCardButtons className='ProductCardButtons'>
                  <Button1 id='deleteProduct' onClick={() => handleClick('delete')}>
                  <ProductCardDelete
                    className='ProductCardDelete'
                    src={deleted}
                  ></ProductCardDelete>
                  </Button1>
                </ProductCardButtons>
              : <div></div>
          }
        </div>
      }
      </ProductCardHeader>
      <Button>
        <ProductCardImg
          className='ProductCardImg'
          src={productImageUrl}
          onClick={() => handleClick('view')}
        />
      </Button>
      <ProductCardBody>
        <CardTitle tag='h5'>{productName}</CardTitle>
      </ProductCardBody>
    </ProductCard>
  );
};

ProductCards.propTypes = {
  setProducts: PropTypes.func,
  productImageUrl: PropTypes.string,
  productName: PropTypes.string,
  id: PropTypes.string,
  user: PropTypes.any,
  designerId: PropTypes.any,
};

export default ProductCards;
