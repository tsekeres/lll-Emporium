import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  SingleProductContainer,
  SingleProductCards,
  SingleProductCardImg,
  SingleProductCardHeader,
  SingleProductCardButtons,
  SingleProductCardEdit,
  SingleProductCardDelete,
  SingleProductCardBody,
  CardTitle,
  CardText,
  Button,
  Button1,
  CartButton,
  Modal,
} from './SingleProductCardElements';
import {
  getProducts,
  deleteProduct,
  getSingleProduct,
} from '../../../helpers/data/productData';
import ProductForm from '../../Forms/ProductForms/ProductForm';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

const SingleProductCard = ({
  setProducts,
  productTypes,
  user,
}) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id).then(setProduct);
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProduct(id).then(() => getProducts().then((response) => setProducts(response)));
        history.push('/products');
        break;
      case 'add-to-cart':
        console.warn('Add To Cart');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <SingleProductContainer className='single-product-view'>
      <SingleProductCards
        className='SingleProductCard'
        key={id}
        id='SingleProductCard'
      >
        <SingleProductCardHeader className='SingleProductCardHeader'>
          {user !== null && (
            <div className='SingleProductCardHeader' id='authButtons'>
              {user ? (
                <SingleProductCardButtons className='SingleProductCardButtons'>
                  <Button1 id='editSingleProduct' onClick={openModal}>
                    <SingleProductCardEdit
                      className='SingleProductCardEdit'
                      src={edit}
                    ></SingleProductCardEdit>
                  </Button1>
                  <CartButton
                    id='add-to-cart'
                    onClick={() => handleClick('add-to-cart')}
                  >
                    <SingleProductCardEdit
                      className='SingleProductCardEdit'
                      src={edit}
                    ></SingleProductCardEdit>
                  </CartButton>
                  <Button1
                    id='deleteSingleProduct'
                    onClick={() => handleClick('delete')}
                  >
                    <SingleProductCardDelete
                      className='SingleProductCardDelete'
                      src={deleted}
                    ></SingleProductCardDelete>
                  </Button1>
                </SingleProductCardButtons>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </SingleProductCardHeader>
        <Button>
          <SingleProductCardImg
            className='SingleProductCardImg'
            src={product.productImageUrl}
            onClick={() => handleClick('view')}
          />
        </Button>
        <SingleProductCardBody>
          <CardTitle tag='h5'>{product.productName}</CardTitle>
          <hr></hr>
          <CardText>{product.productDescription}</CardText>
          <hr></hr>
          <CardText>Price: {product.price}</CardText>
        </SingleProductCardBody>
        <Modal
          isOpen={modalIsOpen}
          className='Modal'
          parentSelector={() => document.querySelector('#ProductContainer')}
        >
          <Button className='modalClose' onClick={closeModal}>
            <SingleProductCardDelete src={deleted} />
          </Button>
          <ProductForm
            productFormTitle='Edit Product'
            productTypeId={product.productTypeId}
            productTypes={productTypes}
            setProducts={setProducts}
            product={product}
            id={id}
            productDescription={product.productDescription}
            productImageUrl={product.productImageUrl}
            productName={product.productName}
            price={product.price}
            user={user}
          />
        </Modal>
      </SingleProductCards>
    </SingleProductContainer>
  );
};

SingleProductCard.propTypes = {
  product: PropTypes.any,
  setProducts: PropTypes.func,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default SingleProductCard;
