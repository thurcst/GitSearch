import { Action } from 'redux';
import { UserAction, UserActions } from './actions';

import { UserState } from '../shared/interfaces/user.interface';

const INITIAL_STATE: UserState = {
  twitter_username: '',
  following_url: '',
  public_gists: 0,
  public_repos: 0,
  avatar_url: '',
  repos_url: '',
  logged: false,
  followers: 0,
  following: 0,
  location: '',
  html_url: '',
  company: '',
  email: '',
  login: '',
  blog: '',
  name: '',
  bio: '',
  type: '',
  url: '',
  id: 0,
};

export function userReducer(state = INITIAL_STATE, ac: Action) {
  const action = ac as UserAction;
  switch (action.type) {
    case UserActions.LOGIN:
      return {
        ...state,
        logged: true,
      };
    case UserActions.LOGOUT:
      return {
        ...state,
        logged: false,
      };
    default:
      return state;
  }
}
