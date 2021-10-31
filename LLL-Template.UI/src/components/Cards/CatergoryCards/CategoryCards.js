/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { useHistory } from 'react-router-dom';
import { deleteCategory } from '../../../helpers/data/categoryData';
import CategoryForms from '../../Forms/CategoryForms/CategoryForms';
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
  Modal1,
} from './CategoryCardElements';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

export const CategoryCards = ({
  setCategories,
  id,
  categoryImageUrl,
  categoryName,
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
        deleteCategory(id).then((categoryArray) => setCategories(categoryArray));
        break;
      case 'view':
        history.push(`/categories/${id}`);
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
        <CategoryCardImg className='CategoryCardImg' src={categoryImageUrl} />
      </Button>
      <CategoryCardFooter className='CategoryCardFooter'>
        {categoryName}
      </CategoryCardFooter>
      <Modal1 className='displayEdit'>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className='Modal'
          parentSelector={() => document.querySelector('#CategoryContainer')}
        >
          <Button className='modalClose' onClick={closeModal}>
            <CategoryCardDelete src={deleted}/>
          </Button>
          <CategoryForms
            categoryFormTitle='Edit Category'
            id={id}
            categoryImageUrl={categoryImageUrl}
            categoryName={categoryName}
            setCategories={setCategories}
          />
        </ReactModal>
      </Modal1>
    </CategoryCard>
  );
};

CategoryCards.propTypes = {
  id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryImageUrl: PropTypes.string.isRequired,
  setCategories: PropTypes.func,
};

export default CategoryCards;
