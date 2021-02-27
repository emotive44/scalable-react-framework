import React, { FC } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './shared/store/store';
import Routes from './shared/routes/Routes';
import ApolloProvider from './shared/graphql/ApolloProvider';

const App:FC = () => {
  return (
    <ApolloProvider>
      <ReduxProvider store={store()}>
        <Router>
          <Routes isAuth={false} />
        </Router>
      </ReduxProvider>
    </ApolloProvider>
  );
}

export default App;
