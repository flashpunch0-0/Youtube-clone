import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
// creteStore is old we can use it using leagacy_
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth.reducer";
// used in middleware
const initialState = {
  name: "kratik",
  age: "20",
};

// const authreducerobject = (initialState) => initialState;
const authreducerobject = combineReducers({
  authReducer,
});
export const store = createStore(
  authreducerobject,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
