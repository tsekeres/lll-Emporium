import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home/Home';
import Designers from '../views/Designers/Designers';
import PersonalProfile from '../views/PersonalProfile/PersonalProfile';
import OrderHistory from '../views/OrderHistory/OrderHistory';
import SellingHistory from '../views/SellingHistory/SellingHistory';
import Users from '../views/Users/Users';
import RoleTypeView from '../views/RoleTypes/RoleTypes';

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

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Designers" component={Designers} />
        <Route exact path="/PersonalProfile" component={PersonalProfile} />
        <Route exact path="/OrderHistory" component={OrderHistory} />
        <Route exact path="/SellingHistory" component={SellingHistory} />
        <Route exact path="/Users" component={Users} />
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
};

export default Routes;
