import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  searchedVideosReducer,
} from "./reducers/videos.reducer";

const authreducerobject = combineReducers({
  homeVideos: homeVideosReducer,
  auth: authReducer,
  searchedVideos: searchedVideosReducer,
});

const store = legacy_createStore(
  authreducerobject,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
