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
import { getShoppingCart, createOrder } from '../../../helpers/data/orderData';
import ProductForm from '../../Forms/ProductForms/ProductForm';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';
import { addOrderLine, getLineItemsByOrderId } from '../../../helpers/data/lineItemData';

const SingleProductCard = ({
  setProducts,
  productTypeId,
  productTypes,
  user,
  setCartCount,
  setCartId
}) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const timeStamp = new Date();

  useEffect(() => {
    let mounted = true;
    getSingleProduct(id).then(setProduct);
    return () => {
      mounted = false;
      return mounted;
    };
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
        deleteProduct(id).then(getProducts(setProducts)).then(history.push('/products'));
        break;
      case 'add-to-cart':
        console.warn('Add To Cart');
        getShoppingCart(user.id).then((cart) => {
          // no cart exists, so we create one
          console.warn(cart.id != null);
          if (cart.length === 0) {
            const cartObj = {
              customerId: user.id,
              // shippingCity: '',
              // shippingState: '',
              // shippingZip: '',
              // shippingCost: '',
              orderDate: timeStamp.toISOString()
              // completed: false
            };
            console.warn(cartObj);
            createOrder(cartObj)
              .then((cartId) => setCartId(cartId));
          } else if (cart.id != null) {
            setCartId(cart.id);
            console.warn('Found cart');
            const lineItemObj = {
              orderId: cart.id,
              productID: product.id,
              unitPrice: product.price,
              quantity: product.inventoryCount ? 1 : 0
            };
            console.warn(lineItemObj);
            addOrderLine(lineItemObj)
              .then(() => {
                getLineItemsByOrderId(cart.id)
                  .then((lineItemList) => setCartCount(lineItemList.length));
              });
          }
        });
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
                  { product.inventoryCount > 0 ? <CartButton
                    id='add-to-cart'
                    onClick={() => handleClick('add-to-cart')}
                  >
                    <SingleProductCardEdit
                      className='SingleProductCardEdit'
                      src={edit}
                    ></SingleProductCardEdit>
                  </CartButton> : '' }
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
            productTypeId={productTypeId}
            productTypes={productTypes}
            setProducts={setProducts}
            product={product}
            id={id}
            productDescription={product.productDescription}
            productImageUrl={product.productImageUrl}
            productName={product.productName}
            price={product.price}
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
  setCartCount: PropTypes.func,
  setCartId: PropTypes.func,
  user: PropTypes.any,
};

export default SingleProductCard;
