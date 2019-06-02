import types from 'store/types';
import { createReducer } from './utils';

const get = (state, action) => ({
  ...state,
  searchString: action.payload.searchString
});

const addUser = (state, action) => {
  const login = action.payload.user;
  if (state.users.some(user => user.login === login)) {
    return state;
  } else {
    return {
      ...state,
      users: [...state.users, action.payload.user]
    };
  }
};

const removeUser = (state, action) => ({
  ...state,
  users: state.users.filter(user => user.login !== action.payload.user.login)
});

const ACTION_HANDLERS = {
  [types.GET_REPOS]: get,
  [types.GET_USER]: get,
  [types.ADD_USER]: addUser,
  [types.REMOVE_USER]: removeUser
};

const initialState = {
  searchString: 'lucas-barros',
  type: 'user',
  users: []
};

export default createReducer(initialState, ACTION_HANDLERS);
