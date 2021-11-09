import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home/Home';
import Products from '../views/Products/Products';
import Designers from '../views/Designers/Designers';
import PersonalProfile from '../views/PersonalProfile/PersonalProfile';
import { ProductTypes } from '../views/ProductTypes/ProductTypes';
import OrderHistory from '../views/OrderHistory/OrderHistory';
import SellingHistory from '../views/SellingHistory/SellingHistory';
import RoleTypeView from '../views/RoleTypes/RoleTypes';
import userCardView from '../views/Users/Users';
import SingleCategoryView from '../views/SingleCategoryView/SingleCategoryView';
import SingleProductTypeView from '../views/SingleProductTypeView/SingleProductType';
import OrderDetailView from '../views/Cart/Order';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // eslint-disable-next-line no-confusing-arrow
  const routeChecker = (taco) => user ? (
      <Component {...taco} user={user} />
  ) : (
      <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
  );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

function Routes({
  user, categories, setCategories, productTypes, setProductTypes, products, setProducts,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Home
              categories={categories}
              setCategories={setCategories}
              user={user}
            />
          )}
          categories={categories}
          setCategories={setCategories}
          user={user}
        />
        <Route
          exact
          path="/Categories/:categoryId"
          user={user}
          component={() => <SingleCategoryView user={user} />}
        />
                <Route
          exact
          path="/ProductTypes/:productTypeId"
          user={user}
          component={() => <SingleProductTypeView user={user} />}
        />
        <Route exact path="/Designers" component={Designers} />
        <Route
          exact
          path="/ProductTypes"
          component={() => (
            <ProductTypes
              categories={categories}
              setCategories={setCategories}
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              user={user}
            />
          )}
          categories={categories}
          setCategories={setCategories}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          user={user}
        />
        <Route
          exact
          path="/Products"
          component={() => (
            <Products
              productTypes={productTypes}
              setProductTypes={setProductTypes}
              products={products}
              setProducts={setProducts}
              user={user}
            />
          )}
          productTypes={productTypes}
          setProductTypes={setProductTypes}
          products={products}
          setProducts={setProducts}
          user={user}
        />
        <Route exact path="/PersonalProfile" component={PersonalProfile} />
        <Route exact path="/OrderHistory" component={OrderHistory} />
        <Route exact path="/SellingHistory" component={SellingHistory} />
        <Route exact path="/Users" component={userCardView} />
        <Route exact path="/orders/:orderId" component={() => <OrderDetailView /> } />
        <Route exact path="/Users/RoleTypes" component={() => <RoleTypeView />} />
        <PrivateRoute />
        <PrivateRoute />
        <Route path="*" />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  categories: PropTypes.any,
  setCategories: PropTypes.func,
  products: PropTypes.any,
  setProducts: PropTypes.func,
  productTypes: PropTypes.any,
  setProductTypes: PropTypes.func,
};

export default Routes;
