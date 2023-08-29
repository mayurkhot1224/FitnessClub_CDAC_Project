import { combineReducers } from "redux";

import LoginReducer from "./LoginReducer";

const reducers = combineReducers({
  isSignin: LoginReducer,
});

export default reducers;
