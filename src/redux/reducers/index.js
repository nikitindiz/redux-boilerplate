import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import news from '../modules/news/reducers';

const rootReducer = combineReducers({
  news,
  routing: routerReducer
});

export default rootReducer;
