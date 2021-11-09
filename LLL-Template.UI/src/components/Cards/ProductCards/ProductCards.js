import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductCard,
  ProductCardImg,
  ProductCardHeader,
  ProductCardButtons,
  ProductCardEdit,
  ProductCardDelete,
  ProductCardBody,
  CardTitle,
  CardText,
  Button,
  Button1,
  Modal,
} from './ProductCardElements';
import { getProducts, deleteProduct, getSingleProduct } from '../../../helpers/data/ProductsData';
import ProductForm from '../../Forms/ProductForms/ProductForm';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

const ProductCards = ({
  setProducts,
  productTypeId,
  productTypes,
  productImageURL,
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
        deleteProduct(id)
          .then(getProducts(setProducts));
        break;
      case 'view':
        getSingleProduct(id);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <ProductCard
      className="ProductCard"
      key={id}
      id="ProductCard"
    >
      <ProductCardHeader className="ProductCardHeader"> {
        user !== null
        && <div className='ProductCardHeader' id='authButtons'> {
          (user)
            ? <ProductCardButtons className="ProductCardButtons">
          <Button1 id="editProduct" onClick={openModal}>
            <ProductCardEdit
              className="ProductCardEdit"
              src={edit}
            ></ProductCardEdit>
          </Button1>
          <Button1 id="deleteProduct" onClick={() => handleClick('delete')}>
            <ProductCardDelete
              className="ProductCardDelete"
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
          className="ProductCardImg"
          src={productImageURL}
          onClick={() => handleClick('view')}
        />
      </Button>
      <ProductCardBody>
        <CardTitle tag="h5">{productName}</CardTitle>
        <CardText>{productDescription}</CardText>
        <CardText>{price}</CardText>
      </ProductCardBody>
      <Modal
        isOpen={modalIsOpen}
        className="Modal"
        parentSelector={() => document.querySelector('#ProductContainer')}
      >
        <Button className="modalClose" onClick={closeModal}>
          <ProductCardDelete src={deleted} />
        </Button>
        <ProductForm
          productFormTitle="Edit Product"
          productTypeId={productTypeId}
          productTypes={productTypes}
          setProducts={setProducts}
          id={id}
          productDescription={productDescription}
          productImageURL={productImageURL}
          productName={productName}
          price={price}
        />
      </Modal>
    </ProductCard>
  );
};

ProductCards.propTypes = {
  setProducts: PropTypes.func,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
  productImageURL: PropTypes.string,
  productName: PropTypes.string.isRequired,
  productDescription: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  user: PropTypes.any,
};

export default ProductCards;
