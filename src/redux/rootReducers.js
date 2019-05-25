import { combineReducers } from 'redux';

import repositoriesReducer from 'redux/repositories/reducer';

const rootReducers = combineReducers({
  repositoriesState: repositoriesReducer
});

export default rootReducers;
