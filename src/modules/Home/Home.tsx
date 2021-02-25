import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../shared/store/store';
import { debouncedLogin, debouncedLogout } from '../../shared/store/actions/auth';


interface HomeProps {

}


const Home:FC<HomeProps> = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();

  const loginHandler = useCallback(
    () => dispatch(debouncedLogin()),
    [dispatch]
  );

  const logoutHandler = useCallback(
    () => dispatch(debouncedLogout()),
    [dispatch]
  );

  return (
    <div>
      <h1>Home</h1>
      {isAuth 
        ? <p>You are logged in</p>
        : <p>You are not logged in</p>
      }

      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Home;
