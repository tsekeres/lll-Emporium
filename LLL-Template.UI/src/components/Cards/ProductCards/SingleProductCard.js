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
import bag from '../../../Assets/NavBarIcons/bag.png';
import { addOrderLine, getLineItemsByOrderId } from '../../../helpers/data/lineItemData';

const SingleProductCard = ({
  setProducts,
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
        deleteProduct(id).then(() => getProducts().then((response) => setProducts(response)));
        history.push('/products');
        break;
      case 'add-to-cart':
        getShoppingCart(user.id).then((cart) => {
          // no cart exists, so we create one
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
            createOrder(cartObj)
              .then((cartId) => {
                setCartId(cartId);
                const lineItemObj = {
                  orderId: cartId,
                  productId: product.id,
                  unitPrice: product.price,
                  quantity: product.inventoryCount ? 1 : 0
                };
                addOrderLine(lineItemObj)
                  .then(() => {
                    getLineItemsByOrderId(cart.id)
                      .then((lineItemList) => setCartCount(lineItemList.length));
                  });
              });
          } else if (cart.id != null) {
            setCartId(cart.id);
            const lineItemObj = {
              orderId: cart.id,
              productId: product.id,
              unitPrice: product.price,
              quantity: product.inventoryCount ? 1 : 0
            };
            addOrderLine(lineItemObj)
              .then(() => {
                getLineItemsByOrderId(cart.id)
                  .then((lineItemList) => setCartCount(lineItemList.length));
              });
          }
        });
        break;
      default:
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
                      src={bag}
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
  setCartCount: PropTypes.func,
  setCartId: PropTypes.func,
  user: PropTypes.any,
};

export default SingleProductCard;
