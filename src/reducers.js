import { combineReducers } from 'redux';

import {
  WIDTH_CHANGE,
  TOGGLE_POPUP,
  
  
} from './actions';

function widthChange(state = {}, action) {
  switch (action.type) {
    case WIDTH_CHANGE:
      return { ...action.data };
    default:
      return state;
  }
}

function currentPopup(state = ["5"], action) {
  switch (action.type) {
    case TOGGLE_POPUP:
      return xor(state, [].concat(action.ids));
    default:
      return state;
  }
}

const reducers = combineReducers({
  widthChange,
  currentPopup
});

export default reducers;
