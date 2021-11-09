/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { getProductTypes, deleteProductType } from '../../../helpers/data/productTypesData';
import ProductTypeForms from '../../Forms/ProductTypeForms/ProductTypeForms';
import {
  PTCard,
  PTCardImg,
  PTCardHeader,
  PTCardButtons,
  PTCardEdit,
  PTCardDelete,
  PTCardFooter,
  Button,
  Button1,
  Modal,
} from './ProductTypeCardElements';
import edit from '../../../Assets/ActionIcons/Edit.png';
import deleted from '../../../Assets/ActionIcons/Delete.png';

export const ProductTypeCards = ({
  user,
  setProductTypes,
  id,
  categoryId,
  productTypeImageUrl,
  typeName,
  categories,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  console.warn(categories);

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
    <PTCard className='PTCard' key={id} id='PTCard'>
      <PTCardHeader className='PTCardHeader'>
      {
            user !== null
            && <div className="PTCardHeader" id="authButtons">
              {
                (user)
                  ? <PTCardButtons className='PTCardButtons'>
                      <Button1 id='editProductType' onClick={openModal}>
                      <PTCardEdit
                        className='PTCardEdit'
                        src={edit}
                      ></PTCardEdit>
                      </Button1>
                      <Button1 id='deletePT' onClick={() => handleClick('delete')}>
                        <PTCardDelete
                          className='PTCardDelete'
                          src={deleted}
                        ></PTCardDelete>
                      </Button1>
                    </PTCardButtons>
                  : <div></div>
              }
              </div>
            }
      </PTCardHeader>
      <Button>
        <PTCardImg className='PTCardImg' src={productTypeImageUrl} onClick={() => handleClick('view')} />
      </Button>
      <PTCardFooter className='PTCardFooter'>
        {typeName}
      </PTCardFooter>
        <Modal
          isOpen={modalIsOpen}
          className='Modal'
          parentSelector={() => document.querySelector('#CategoryContainer')}
        >
          <Button className='modalClose' onClick={closeModal}>
            <PTCardDelete src={deleted}/>
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
    </PTCard>
  );
};

ProductTypeCards.propTypes = {
  user: PropTypes.any,
  id: PropTypes.string.isRequired,
  typeName: PropTypes.string.isRequired,
  productTypeImageUrl: PropTypes.string,
  setProductTypes: PropTypes.func,
  categoryId: PropTypes.string,
  categories: PropTypes.any,
};

export default ProductTypeCards;
