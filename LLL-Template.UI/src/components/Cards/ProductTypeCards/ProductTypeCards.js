/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProductTypes, deleteProductType } from '../../../helpers/data/productTypesData';
import ProductTypeForms from '../../Forms/ProductTypeForms/ProductTypeForms';
import {
  CategoryCard,
  CategoryCardImg,
  CategoryCardHeader,
  CategoryCardButtons,
  CategoryCardEdit,
  CategoryCardDelete,
  CategoryCardFooter,
  Button,
  Button1,
  Modal,
} from './ProductTypeCardElements';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

export const ProductTypeCards = ({
  setProductTypes,
  id,
  categoryId,
  productTypeImageUrl,
  typeName,
  categories,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProductType(id).then(() => getProductTypes().then((response) => setProductTypes(response)));
        break;
      case 'view':
        history.push(`api/ProductTypes/${id}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <CategoryCard className='CategoryCard' key={id} id='CategoryCard'>
      <CategoryCardHeader className='CategoryCardHeader'>
        <CategoryCardButtons className='CategoryCardButtons'>
          <Button1 id='editCategory' onClick={openModal}>
            <CategoryCardEdit
              className='CategoryCardEdit'
              src={edit}
            ></CategoryCardEdit>
          </Button1>
          <Button1 id='deleteCategory' onClick={() => handleClick('delete')}>
            <CategoryCardDelete
              className='CategoryCardDelete'
              src={deleted}
            ></CategoryCardDelete>
          </Button1>
        </CategoryCardButtons>
      </CategoryCardHeader>
      <Button>
        <CategoryCardImg className='CategoryCardImg' src={productTypeImageUrl} onClick={() => handleClick('view')} />
      </Button>
      <CategoryCardFooter className='CategoryCardFooter'>
        {typeName}
      </CategoryCardFooter>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='Modal'
          parentSelector={() => document.querySelector('#CategoryContainer')}
        >
          <Button className='modalClose' onClick={closeModal}>
            <CategoryCardDelete src={deleted}/>
          </Button>
          <ProductTypeForms
            productTypeFormTitle='Edit Product Type'
            id={id}
            productTypeImageUrl={productTypeImageUrl}
            typeName={typeName}
            setProductTypes={setProductTypes}
            categoryId={categoryId}
            categories={categories}
          />
        </Modal>
    </CategoryCard>
  );
};

ProductTypeCards.propTypes = {
  id: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  productTypeImageUrl: PropTypes.string,
  setProductTypes: PropTypes.func,
  categoryId: PropTypes.string,
  categories: PropTypes.any,
};

export default ProductTypeCards;
