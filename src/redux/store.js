// import {
//   legacy_createStore as createStore,
//   applyMiddleware,
//   combineReducers,
// } from "redux";
// // creteStore is old we can use it using leagacy_
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { authReducer } from "./reducers/auth.reducer";
// import { homeVideosReducer } from "./reducers/videos.reducer";
// // used in middleware

// // const authreducerobject = (initialState) => initialState;
// const authreducerobject = combineReducers({
//   authReducer,
//   homeVideosReducer,
// });
// export const store = createStore(
//   authreducerobject,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export default store;

import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { homeVideosReducer } from "./reducers/videos.reducer";

const authreducerobject = combineReducers({
  homeVideos: homeVideosReducer,
  auth: authReducer,
});

const store = legacy_createStore(
  authreducerobject,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
