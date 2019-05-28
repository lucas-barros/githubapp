import { combineReducers } from 'redux';

import userReducer from 'redux/user/reducer';

const rootReducers = combineReducers({
  userState: userReducer
});

export default rootReducers;
