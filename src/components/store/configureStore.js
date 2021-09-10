import { combineReducers, createStore } from "redux";

import loginReducer from "./ducks/login";
import sorterReducer from "./ducks/sorter";

const reducer = combineReducers({
  login: loginReducer,
  sorter: sorterReducer,
});

const store = createStore(reducer);

export default store;
