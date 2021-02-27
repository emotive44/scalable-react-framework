import React, { FC, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../shared/store/store';
import { debouncedLogin, debouncedLogout } from '../../shared/store/actions/auth';
import { GET_POSTS } from '../../shared/graphql/queries/posts';
import classes from './Home.module.scss';


interface HomeProps {

}

const Home:FC<HomeProps> = () => {
  // const { loading, error, data } = useQuery(GET_POSTS);
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

  // if(loading) {
  //   return <p>Loading....</p>
  // }

  // if(error) {
  //   return <p>{error?.graphQLErrors[0].message}</p>
  // }
  
  return (
    <div>
      <h1 className={classes.home}>Home</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
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
