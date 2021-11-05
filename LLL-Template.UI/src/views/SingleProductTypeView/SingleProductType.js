import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ItemCard from '../../Components/PersonalComponents/ItemCardComponent';
import { showCategoryItems } from '../../helpers/data/CategoryItemData';
import { getCategory } from '../../helpers/data/CategoryData';
import ItemForm from '../../Forms/ItemForm';

export default function SingleCategoryView({
  user,
}) {
  const [categoryItems, setCategoryItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const { id } = useParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    showCategoryItems(categoryKey).then((response) => setCategoryItems(response.items));
    getCategory(user).then((response) => setCategories(response));
  }, []);

  return (
         <div className="categoryItemView" >
                  <div className="d-flex flex-column justify-content-center">
                  <button id="addItem" onClick={openModal}>Add Item</button>
                  <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        className="Modal"
                      >
                        <button className="modalClose" onClick={closeModal}>Close Form</button>
                        <ItemForm
                        itemFormTitle="Add Item"
                        setItems={setCategoryItems}
                        user={user}
                        items={categoryItems}
                        categories={categories}
                        setCategories={setCategories}
                        />
                      </Modal>
                </div>
                   <div className="innerContainer">
                    <div className="searchAndCardContainer">
                      <input type="search" id="categoryItemSearch" placeholder="Search" aria-describedby="button-addon" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className="cardContainer">
                      {filteredData.map((item) => (
                        <ItemCard
                          key={item.firebaseKey}
                          items={categoryItems}
                          categoryKey={categoryKey}
                          categories={categories}
                          setCategories={setCategories}
                          setItems={setCategoryItems}
                          user={user}
                          {...item}
                        />
                      ))}
                    </div>

                </div>
      </div>
  );
}

SingleCategoryView.propTypes = {
  user: PropTypes.any,
};