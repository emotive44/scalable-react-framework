import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './shared/routes/Routes';

const App:FC = () => {
  return (
    <Router>
      <div>
        React
        <Routes isAuth={false} />
      </div>
    </Router>
  );
}

export default App;
