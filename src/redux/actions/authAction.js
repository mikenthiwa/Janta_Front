import {SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST} from "../constants";

export const signUpRequest = (credentials) =>{
  console.log(credentials);
  return {
    type: SIGN_UP_REQUEST,
    payload: credentials
  }
};

export const signUpSuccess = response => ({
  type: SIGN_UP_SUCCESS,
  payload: response
});

export const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: error
});

