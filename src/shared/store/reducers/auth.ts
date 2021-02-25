import { LOGIN, LOGOUT, AuthActionsTypes } from '../types/auth';


interface IAuthState {
  isAuth: boolean,
}

const initialState: IAuthState = {
  isAuth: false,
}

export default function authReducer (state = initialState, action: AuthActionsTypes): IAuthState {
  const { type } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      }
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      }
    default:
      return state;
  }
}
