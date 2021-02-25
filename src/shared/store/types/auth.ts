export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const DEBOUNCE_LOGIN = 'DEBOUNCE_LOGIN';
export const DEBOUNCE_LOGOUT = 'DEBOUNCE_LOGOUT';


export interface LoginAction { 
  type: typeof LOGIN,
  payload?: Object,
}

export interface DebounceLoginAction {
  type: typeof DEBOUNCE_LOGIN,
  payload?: Object,
}

export interface LogoutAction { 
  type: typeof LOGOUT,
  payload?: Object,
}


export interface DebounceLogoutAction {
  type: typeof DEBOUNCE_LOGOUT,
  payload?: Object,
}

export type AuthActionsTypes = LoginAction | LogoutAction | DebounceLoginAction | DebounceLogoutAction;
