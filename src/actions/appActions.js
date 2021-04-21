import axios from "axios";
import {
  APPS_LIST_REQUEST,
  APPS_LIST_SUCCESS,
  APPS_LIST_FAIL,
  STATS_BY_ID_REQUEST,
  STATS_BY_ID_SUCCESS,
  STATS_BY_ID_FAIL,
} from "../constants/appConstants";

export const getAllApps = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: APPS_LIST_REQUEST,
    });
    const appList = await axios.get(
      `https://api.npoint.io/adf6676a313fa01f787d`
    );
    let apps = appList.data;
    const statList = await axios.get(
      `https://api.npoint.io/baf8dba5974d29aa094b`
    );
    const stats = statList.data;
    for (const [key, value] of Object.entries(stats)) {
      let revenue = 0;
      let adRequest = 0;
      let adResponse = 0;
      let impressions = 0;
      value.forEach((e) => {
        revenue += e.revenue;
        adRequest += e.adRequest;
        adResponse += e.adResponse;
        impressions += e.impressions;
      });
      apps[key - 1].revenue = revenue;
      apps[key - 1].adRequest = adRequest;
      apps[key - 1].adResponse = adResponse;
      apps[key - 1].impressions = impressions;
    }
    dispatch({
      type: APPS_LIST_SUCCESS,
      payload: apps,
    });
  } catch (error) {
    dispatch({
      type: APPS_LIST_FAIL,
      payload: error,
    });
  }
};
export const getStatsById = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: STATS_BY_ID_REQUEST,
    });
    const appList = await axios.get(
      `https://api.npoint.io/adf6676a313fa01f787d`
    );

    const { appName, publisherName } = appList.data.find((a) => a.id == id);
    const { data } = await axios.get(
      `https://api.npoint.io/baf8dba5974d29aa094b/${id}`
    );
    dispatch({
      type: STATS_BY_ID_SUCCESS,
      payload: {
        id,
        appName,
        publisherName,
        data,
      },
    });
  } catch (error) {
    dispatch({
      type: STATS_BY_ID_FAIL,
      payload: error,
    });
  }
};
