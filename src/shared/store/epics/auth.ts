import { ofType, ActionsObservable, Epic} from 'redux-observable';
import { debounceTime, delay, map } from 'rxjs/operators';

import { login, logout } from '../actions/auth';
import { DEBOUNCE_LOGIN, DEBOUNCE_LOGOUT, AuthActionsTypes } from '../types/auth';


export const loginEpic: Epic = (action$: ActionsObservable<AuthActionsTypes>) => {
  return action$.pipe(
    ofType(DEBOUNCE_LOGIN),
    debounceTime(400),
    delay(1000),
    map(login)
  );
}

export const logoutEpic: Epic = (action$: ActionsObservable<AuthActionsTypes>) => {
  return action$.pipe(
    ofType(DEBOUNCE_LOGOUT),
    debounceTime(400),
    delay(1000),
    map(logout)
  );
}
  