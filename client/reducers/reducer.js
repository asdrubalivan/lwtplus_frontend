import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import { default as textReducer }  from './text/reducer';

const rootReducer = combineReducers({textReducer});

const store = createStore(rootReducer);

export default store;
