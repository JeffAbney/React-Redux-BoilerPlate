import { SOME_ACTION } from "../constants/actionTypes"

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === SOME_ACTION) {
    return "New State";
  }
  return state;
}

export default rootReducer;