import { combineEpics } from 'redux-observable';
import { loginEpic, logoutEpic } from '../epics/auth';


export default combineEpics(
  loginEpic,
  logoutEpic,
);
