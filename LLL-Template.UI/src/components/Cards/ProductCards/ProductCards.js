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
  product,
  setProducts,
  categoryId,
  categories,
  productTypeId,
  productTypes,
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
        deleteProduct(product.productId)
          .then(getProducts(setProducts));
        break;
      case 'view':
        getSingleProduct(product.productId);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <ProductCard
      className="ProductCard"
      key={product.productId}
      id="ProductCard"
    >
      <ProductCardHeader className="ProductCardHeader">
        <ProductCardButtons className="ProductCardButtons">
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
      </ProductCardHeader>
      <Button>
        <ProductCardImg
          className="ProductCardImg"
          src={product.productImageURL}
          onClick={() => handleClick('view')}
        />
      </Button>
      <ProductCardBody>
        <CardTitle tag="h5">{product.productName}</CardTitle>
        <CardText>{product.productDescription}</CardText>
        <CardText>{product.price}</CardText>
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
          categoryId={categoryId}
          categories={categories}
          productTypeId={productTypeId}
          productTypes={productTypes}
          setProducts={setProducts}
          productId={product.productId}
          productDescription={product.productDescription}
          productImageURL={product.productImageURL}
          productName={product.productName}
          price={product.price}
        />
      </Modal>
    </ProductCard>
  );
};

ProductCards.propTypes = {
  product: PropTypes.object,
  setProducts: PropTypes.func,
  categoryId: PropTypes.string,
  categories: PropTypes.any,
  productTypeId: PropTypes.string,
  productTypes: PropTypes.any,
};

export default ProductCards;
