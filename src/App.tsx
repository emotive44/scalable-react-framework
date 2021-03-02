import React, { FC, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './shared/store/store';
import Routes from './shared/routes/Routes';
import ApolloProvider from './shared/graphql/ApolloProvider';
import { LOCALSTORAGE_THEME, THEME_DEFAULT } from './shared/constants';


const App:FC = () => {
  useEffect(() => {
    const el = document.getElementsByTagName('html')[0]; 
    const theme = localStorage.getItem(LOCALSTORAGE_THEME);

    if(theme) {
      el?.classList.add(theme);
    } else {
      el?.classList.add(THEME_DEFAULT);
    }
  }, []);

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
