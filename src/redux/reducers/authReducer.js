import {SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST} from "../constants";

const initialState = {
  isLoading: false,
  response: {},
  error: {},
};

export default (state=initialState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {...initialState, isLoading: true};
    case SIGN_UP_SUCCESS:
      return {...initialState, isLoading:false, response: action.payload};
    case SIGN_UP_FAILURE:
      return {...initialState, isLoading:false, error: action.payload};
    default:
      return state
  }
}