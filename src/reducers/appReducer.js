import {
  APPS_LIST_REQUEST,
  APPS_LIST_SUCCESS,
  APPS_LIST_FAIL,
  STATS_BY_ID_REQUEST,
  STATS_BY_ID_SUCCESS,
  STATS_BY_ID_FAIL,
} from "../constants/appConstants";
export const allAppsReducer = (state = { loading: true, data: [] }, action) => {
  switch (action.type) {
    case APPS_LIST_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case APPS_LIST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
      };
    case APPS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const statsByIdReducer = (
  state = { loading: true, id: 0, data: [] },
  action
) => {
  switch (action.type) {
    case STATS_BY_ID_REQUEST:
      return {
        loading: true,
        id: 0,
        data: [],
      };
    case STATS_BY_ID_SUCCESS:
      return {
        loading: false,
        id: action.payload.id,
        appName: action.payload.appName,
        publisherName: action.payload.publisherName,
        data: action.payload.data,
      };
    case STATS_BY_ID_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
