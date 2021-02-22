import React, { ComponentType, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';


interface PrivateRouteProps {
  path          ?: string,
  isAuth         : boolean,
  exact         ?: boolean,
  component      : ComponentType<any>,
}

const PrivateRoute:FC<PrivateRouteProps> = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => isAuth ? <Component {...props} /> : <Redirect to="/login" /> }
    />
  );
};

export default PrivateRoute;
