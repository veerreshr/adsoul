import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  allAppsReducer,
  // allStatsReducer,
  statsByIdReducer,
} from "./reducers/appReducer";

const reducer = combineReducers({
  allApps: allAppsReducer,
  // allStats: allStatsReducer,
  statsById: statsByIdReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
