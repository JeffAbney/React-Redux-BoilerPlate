import { SOME_ACTION } from "../constants/actionTypes"

const initialState = {
  messages: ["Hello Cutie!"]
};

function rootReducer(state = initialState, action) {
  if (action.type === SOME_ACTION) {
    return Object.assign({}, state,
       {
        messages:
      [...state.messages, action.payload]
       });
  }
  return state;
}

export default rootReducer;