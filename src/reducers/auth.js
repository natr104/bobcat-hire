import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
  } from "../actions/types";
  const user = JSON.parse(localStorage.getItem("user"));
  const jwt = JSON.parse(localStorage.getItem("jwt"));
  const initialState = user
    ? { isLoggedIn: true, user, jwt }
    : { isLoggedIn: false, user: null, jwt: null };
  export default function authReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          jwt: payload.jwt
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
          jwt: payload.jwt
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          jwt: null
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          jwt: null
        };
      default:
        return state;
    }
  }