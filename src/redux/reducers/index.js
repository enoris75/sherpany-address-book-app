import {
  GET_USERS_BATCH,
  SET_IS_LOADING_ON,
  SET_IS_LOADING_OFF,
} from "../constants/action-types";

/**
 * Size of a users batch
 */
const BATCH_SIZE = 50;

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
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_USERS_BATCH) {
    return Object.assign({}, state, {
      users: state.users.concat(action.payload),
      usersLoaded: state.usersLoaded + BATCH_SIZE,
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

  return state;
}

export default rootReducer;
