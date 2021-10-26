import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home/Home';
import Products from '../views/Products/Products';

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
  products, setProducts
}) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/products"
          component={() => (
            <Products
              products={products}
              setProducts={setProducts}
            />
          )}
        />
        <PrivateRoute
        />
        <Route path="*" />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  products: PropTypes.array,
};

export default Routes;
