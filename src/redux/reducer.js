import types from 'redux/types';

const initialState = {
  searchString: '',
  type: 'user',
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TYPE:
      return { ...state, type: action.payload.type };
    case types.GET_USER:
      return { ...state, searchString: action.payload.searchString, type: 'user' };
    case types.GET_REPOS:
      return { ...state, searchString: action.payload.searchString };
    case types.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(user => user.login !== action.payload.user.login),
          action.payload.user
        ]
      };
    case types.REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.login !== action.payload.user.login)
      };
    default:
      return state;
  }
};
export default reducer;
