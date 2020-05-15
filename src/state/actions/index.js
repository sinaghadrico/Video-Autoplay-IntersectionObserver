import * as types from "../constants/ActionTypes";

import axios from "axios";



export const fetchData = () => {
    return async (dispatch, getState) => {
      dispatch(getDataStarted());
      try {
        const { data } = await axios.get( '/fa/v1/video/video/mostViewedVideos');
        dispatch(getDataSuccess(data.data));
      } catch (error) {
        dispatch(getDataFailure(error));
      }
    };
  };





const getDataSuccess = (data) => ({
  type: types.GetDataSuccess,
  payload: { data },
});

const getDataStarted = () => ({
  type: types.GetDataStarted,
});

const getDataFailure = (error) => ({
  type: types.GetDataFailure,
  payload: {
    error,
  },
});

