import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './shared/store/store';
import Routes from './shared/routes/Routes';

const App:FC = () => {
  return (
    <Provider store={store()}>
      <Router>
        <Routes isAuth={false} />
      </Router>
    </Provider>
  );
}

export default App;
