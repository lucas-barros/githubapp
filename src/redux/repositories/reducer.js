import types from 'redux/repositories/types';

const initialState = {
  login: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET:
      return { ...state, login: action.payload.login };
    default:
      return state;
  }
};
export default reducer;
