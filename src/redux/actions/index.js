import { SOME_ACTION } from "../constants/actionTypes.js";

export function changeSomething(payload) {
    return { type: "SOME_ACTION", payload }
  };