import { createStore } from "redux";

const INITIAL_STATE = [];

function reducer(state = INITIAL_STATE, action) {
  return state;
}

export default createStore(reducer);
