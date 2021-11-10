import React from 'react';
import PropTypes from 'prop-types';
import {
  SingleProductCard,
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
} from './ProductCardElements';
import {
  getProducts,
  deleteProduct,
} from '../../../helpers/data/productData';
import ProductForm from '../../Forms/ProductForms/ProductForm';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

const SingleProductCard = ({
  setProducts,
  productTypeId,
  productTypes,
  productImageUrl,
  productName,
  productDescription,
  price,
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
    <SingleProductCard
      className="SingleProductCard"
      key={id}
      id="SingleProductCard"
    >
      <SingleProductCardHeader className="SingleProductCardHeader">
        {user !== null && (
          <div className="SingleProductCardHeader" id="authButtons">
            {user ? (
              <SingleProductCardButtons className="SingleProductCardButtons">
                <Button1 id="editSingleProduct" onClick={openModal}>
                  <SingleProductCardEdit
                    className="SingleProductCardEdit"
                    src={edit}
                  ></SingleProductCardEdit>
                </Button1>
                <Button1
                  id="add-to-cart"
                  onClick={() => handleClick("add-to-cart")}
                >
                </Button1>
                <Button1
                  id="deleteSingleProduct"
                  onClick={() => handleClick("delete")}
                >
                  <SingleProductCardDelete
                    className="SingleProductCardDelete"
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
          className="SingleProductCardImg"
          src={productImageUrl}
          onClick={() => handleClick("view")}
        />
      </Button>
      <SingleProductCardBody>
        <CardTitle tag="h5">{productName}</CardTitle>
        <CardText>{productDescription}</CardText>
        <CardText>{price}</CardText>
      </SingleProductCardBody>
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        parentSelector={() => document.querySelector("#ProductContainer")}
      >
        <Button className="modalClose" onClick={closeModal}>
          <SingleProductCardDelete src={deleted} />
        </Button>
        <ProductForm
          productFormTitle="Edit Product"
          productTypeId={productTypeId}
          productTypes={productTypes}
          setProducts={setProducts}
          id={id}
          productDescription={productDescription}
          productImageUrl={productImageUrl}
          productName={productName}
          price={price}
        />
      </Modal>
    </SingleProductCard>
  );
};

SingleProductCard.propTypes = {
  setProducts: PropTypes.func,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
  productImageUrl: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default SingleProductCard;
