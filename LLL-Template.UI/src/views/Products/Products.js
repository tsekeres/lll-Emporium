import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import getProducts from "../../../helpers/data/ProductsData";
import ProductCards from "../components/ProductCards";

function Products () {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <div className="card-container-2 product-view">
        {products?.map((productInfo) => (
          <ProductCards
            key={user.Id}
            product={productInfo}
          />
        ))}
      </div>
    </>
  );
}

// Products.propTypes = {
//   productss: PropTypes.array,
//   setProducts: PropTypes.func,
// };

export default Products;
