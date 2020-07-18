import {
  GET_USERS_BATCH,
  SET_IS_LOADING_ON,
  SET_IS_LOADING_OFF,
} from "../constants/action-types";

export function getUsersBatch(payload) {
  return { type: GET_USERS_BATCH, payload };
}

export function setIsLoadingOn(payload) {
  return { type: SET_IS_LOADING_ON, payload };
}

export function setIsLoadingOff(payload) {
  return { type: SET_IS_LOADING_OFF, payload };
}
