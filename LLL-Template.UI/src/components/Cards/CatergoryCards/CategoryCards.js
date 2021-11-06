/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getCategories, deleteCategory } from '../../../helpers/data/categoryData';
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
  Modal,
} from './CategoryCardElements';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

export const CategoryCards = ({
  user,
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
        deleteCategory(id).then(() => getCategories().then((response) => setCategories(response)));
        break;
      case 'view':
        history.push(`api/categories/${id}`);
        break;
      default:
        console.warn('Nothing selected');
    }
  };

  return (
    <CategoryCard className='CategoryCard' key={id} id='CategoryCard'>
      <CategoryCardHeader className='CategoryCardHeader'>
      {
            user !== null
            && <div className="CategoryCardHeader" id="authButtons">
              {
                (user)
                  ? <CategoryCardButtons className='CategoryCardButtons'>
                      <Button1 className="editCategory" id='editCategory' onClick={openModal}>
                        <CategoryCardEdit
                          className='CategoryCardEditImage'
                          src={edit}
                        ></CategoryCardEdit>
                      </Button1>
                      <Button1 className='deleteCategory' id='deleteCategory' onClick={() => handleClick('delete')}>
                        <CategoryCardDelete
                          className='CategoryCardDeleteImage'
                          src={deleted}
                        ></CategoryCardDelete>
                      </Button1>
                    </CategoryCardButtons>
                  : <div></div>
              }
              </div>
            }
      </CategoryCardHeader>
      <Button className="CategoryCardButton">
        <CategoryCardImg className='CategoryCardImg' src={categoryImageUrl} onClick={() => handleClick('view')} />
      </Button>
      <CategoryCardFooter className='CategoryCardFooter'>
        {categoryName}
      </CategoryCardFooter>
        <Modal
          isOpen={modalIsOpen}
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
        </Modal>
    </CategoryCard>
  );
};

CategoryCards.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  categoryImageUrl: PropTypes.string,
  setCategories: PropTypes.func,
};

export default CategoryCards;
