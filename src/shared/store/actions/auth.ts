import { 
  LOGIN, 
  LOGOUT, 
  DEBOUNCE_LOGIN,
  DEBOUNCE_LOGOUT,
  LoginAction,
  LogoutAction,
  DebounceLoginAction,
  DebounceLogoutAction,
} from '../types/auth';


export const login = (): LoginAction => {
  return { type: LOGIN }
}

export const debouncedLogin = (): DebounceLoginAction => {
  return { type: DEBOUNCE_LOGIN }
}

export const logout = (): LogoutAction => {
  return { type: LOGOUT }
}

export const debouncedLogout = (): DebounceLogoutAction => {
  return { type: DEBOUNCE_LOGOUT }
}
