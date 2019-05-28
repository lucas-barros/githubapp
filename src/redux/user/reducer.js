import types from 'redux/user/types';

const initialState = {
  login: '',
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET:
      return { ...state, login: action.payload.login };
    case types.ADD:
      const login = action.payload.user.login;
      return {
        ...state,
        users: [...state.users.filter(user => user.login !== login), action.payload.user]
      };
    default:
      return state;
  }
};
export default reducer;
