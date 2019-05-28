import types from 'redux/user/types';

const getUser = login => ({
  type: types.GET,
  payload: {
    login
  }
});

const addUser = user => ({
  type: types.ADD,
  payload: {
    user
  }
});

export { getUser, addUser };
