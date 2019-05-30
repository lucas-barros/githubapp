import types from 'redux/types';

const getUser = searchString => ({
  type: types.GET_USER,
  payload: {
    searchString
  }
});

const getRepos = searchString => ({
  type: types.GET_REPOS,
  payload: {
    searchString
  }
});

const addUser = user => ({
  type: types.ADD_USER,
  payload: {
    user
  }
});

const removeUser = user => ({
  type: types.REMOVE_USER,
  payload: {
    user
  }
});

const setType = type => ({
  type: types.SET_TYPE,
  payload: {
    type
  }
});

export { getUser, addUser, setType, getRepos, removeUser };
