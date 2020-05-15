import * as types from "../constants/ActionTypes";

const initialState = { loading: false, data: [], error: null };

export default function dataReducer(state = initialState, action) {

  switch (action.type) {
      
    case types.GetDataStarted:
      return {
        loading: true,
        data: [],
        error: null
      };
    case types.GetDataSuccess:
      return {
        loading: false,
        data: action.payload.data,
        error: null
      };
    case types.GetDataFailure:
      return {
        loading: false,
        data: [],
        error: action.payload.error
      };
    default:
      return state;
  }
}
