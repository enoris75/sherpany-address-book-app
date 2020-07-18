// Where All Redux is
import { createStore } from "redux";
import { BATCH_SIZE } from "../Constants";

/**
 * Identifier for the action which adds a batch of users to the global state.
 */
const ADD_USERS_BATCH = "ADD_USERS_BATCH";
/**
 * Identifier for the action which sets the IsLoading flag to true.
 */
const SET_IS_LOADING_ON = "SET_IS_LOADING_ON";
/**
 * Identifier for the action which sets the IsLoading flag to false.
 */
const SET_IS_LOADING_OFF = "SET_IS_LOADING_OFF";
/**
 * Identifier for the action which sets the latest error.
 */
const SET_LATEST_ERROR = "SET_LATEST_ERROR";

/**
 * Initial state of the global state.
 */
const initialState = {
  /**
   * Storage of the users, empty in the initial state
   */
  users: [],
  /**
   * Numbers of users loaded, empty in the initial state
   */
  usersLoaded: 0,
  /**
   * Is a batch of users being loaded
   */
  isLoading: false,
  /**
   * Most recent error message. If the latest request was successful it will be null.
   */
  latestError: null,
};

/**
 * Action which adds the given batch of users to the global state.
 * @param {any[]} batchOfUsers
 */
export function setUsersBatch(batchOfUsers) {
  return { type: ADD_USERS_BATCH, payload: batchOfUsers };
}

/**
 * Action which sets the IsLoading flag to on.
 */
export function setIsLoadingOn() {
  return { type: SET_IS_LOADING_ON };
}

/**
 * Action which sets the IsLoading flag to off.
 */
export function setIsLoadingOff() {
  return { type: SET_IS_LOADING_OFF };
}

/**
 * Action which sets Latest Error message in the global state.
 * @param {string} errorMessage
 */
export function setLatestError(errorMessage) {
  return { type: SET_LATEST_ERROR, payload: errorMessage };
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_USERS_BATCH) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload),
      usersLoaded: state.usersLoaded + BATCH_SIZE,
      latestError: null,
    });
  }
  if (action.type === SET_IS_LOADING_ON) {
    return Object.assign({}, state, {
      isLoading: true,
    });
  }
  if (action.type === SET_IS_LOADING_OFF) {
    return Object.assign({}, state, {
      isLoading: false,
    });
  }
  if (action.type === SET_LATEST_ERROR) {
    return Object.assign({}, state, {
      latestError: action.payload,
    });
  }

  return state;
}

export const store = createStore(rootReducer);
