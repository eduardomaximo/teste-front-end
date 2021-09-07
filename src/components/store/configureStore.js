import { combineReducers, createStore } from "redux";

import loginReducer from "./ducks/login";

const reducer = combineReducers({
  login: loginReducer,
});

const store = createStore(reducer);

export default store;
