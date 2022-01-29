import { combineReducers } from 'redux';
import blog from './Blog/reducer';

const rootReducer = combineReducers({ blog });

export default rootReducer;
