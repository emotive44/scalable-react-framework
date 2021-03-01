import React, { FC, useCallback, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../shared/store/store';
import { debouncedLogin, debouncedLogout } from '../../shared/store/actions/auth';
import { GET_POSTS } from '../../shared/graphql/queries/posts';
import classes from './Home.module.scss';
import { CSSTransition, SwitchTransition } from 'react-transition-group';


interface HomeProps {

}

const Home:FC<HomeProps> = () => {
  // const { loading, error, data } = useQuery(GET_POSTS);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const nodeRef1 = useRef(null);

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1 className={classes.home}>Home</h1>

      {/* TOGGLE */}
      <div style={{ overflow: 'hidden' }}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            timeout           = {400}
            nodeRef           = {nodeRef}
            key               = {isAuth ? 'auth' : 'not-auth'}
            classNames={{
              enter           : classes.enter,
              enterActive     : classes['enter-active'],
              enterDone       : classes['enter-done'],
              exit            : classes.exit,
              exitActive      : classes['exit-active'],
              exitDone        : classes['exit-done'],
            }}
          >
            <div ref={nodeRef}>
              {!isAuth ? <p>You are NOT logged in</p> : <p>You are logged in</p> }
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>

      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>

      {/* FADE */}
      <div>
        <CSSTransition
          in={isAuth}
          unmountOnExit
          timeout             = {1000}
          nodeRef             = {nodeRef1}
          classNames={{
            enter             : classes['enter-fade'],
            enterActive       : classes['enter-active-fade'],
            exitActive        : classes['exit-active-fade']
          }}
        >
          <p ref={nodeRef1}>Fade Show/Hide</p>
        </CSSTransition>
      </div>
    </div>
  )
}

export default Home;
