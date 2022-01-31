import { combineReducers } from 'redux';

import quiz from 'reducers/quiz';

const rootReducer = combineReducers({
  quiz,
});

export default rootReducer;
