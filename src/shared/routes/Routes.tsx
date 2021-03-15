import React, { FC, lazy, Suspense, CSSProperties } from 'react';
import { Route, Router, Switch, useHistory } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import useNetworkStatus from '../hooks/useNetworkStatus';
import { Notification } from '../library';

import Navbar from '../components/Navbar/Navbar';
const Home = lazy(() => import('../../modules/Home/Home'));
const Dashboard = lazy(() => import('../../modules/Dashboard/Dashboard'));
const UIComponents = lazy(() => import('../../modules/UIComponents/UIComponents'));


interface RoutesProps {
  isAuth: boolean,
}

const Routes:FC<RoutesProps> = ({ isAuth }) => {
  const history = useHistory();
  const { networkStatus } = useNetworkStatus();

  const styles: CSSProperties  = {
    top: '50%',
    left: '50%',
    width: '10rem',
    height: '10rem',
    position: 'fixed',
    transform: 'translate(-50%, -50%)'
  }
  const Loading = <img src='/spinner.gif' alt='' style={styles} />

  return (
    <Router history={history}>
      <Navbar />
      {networkStatus === 'offline' && (
        <Notification 
          type='error' 
          position='bottom-left'
          title='Something went wrong'
          message='Internet connection has been lost!'
        />
      )}
      {networkStatus === 'online' && (
         <Notification 
          type='success' 
          position='bottom-left'
          title='Congrats'
          message='Internet connection has been restored!'
          autoClose
        />
      )}
      <Switch>
        <Suspense fallback={Loading}>
          <Route exact path="/" component={Home} />
          <Route path='/ui-components' component={UIComponents} />
          <PrivateRoute exact path="/dashboard" isAuth={isAuth} component={Dashboard} />
        </Suspense>
      </Switch>
    </Router>
  );
}

export default Routes;
