import React from 'react';
import PropTypes from 'prop-types';
import {
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
  Modal,
} from './SingleProductCardElements';
import {
  getProducts,
  deleteProduct,
} from '../../../helpers/data/productData';
import ProductForm from '../../Forms/ProductForms/ProductForm';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

const SingleProductCard = ({
  setProducts,
  product,
  productTypeId,
  productTypes,
  id,
  user,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProduct(id).then(getProducts(setProducts));
        break;
      case 'add-to-cart':
        console.warn('Add To Cart');
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
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
                <Button1
                  id='add-to-cart'
                  onClick={() => handleClick('add-to-cart')}
                ></Button1>
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
        <CardText>{product.productDescription}</CardText>
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
          productTypeId={productTypeId}
          productTypes={productTypes}
          setProducts={setProducts}
          id={product.id}
          productDescription={product.productDescription}
          productImageUrl={product.productImageUrl}
          productName={product.productName}
          price={product.price}
        />
      </Modal>
    </SingleProductCards>
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
