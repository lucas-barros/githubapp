import types from 'redux/repositories/types';

const getRepositories = login => ({
  type: types.GET,
  payload: {
    login
  }
});

export { getRepositories };
