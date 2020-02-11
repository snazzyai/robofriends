import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from "./constants";

const initialStateSearch = {
  searchField: ""
};

export const searchRobot = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

const initialStateRequest = {
  robots: [],
  isPending: false,
  error: ""
};

export const requestRobotReducer = (
  state = initialStateRequest,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return {
        ...state,
        isPending: true
      };
    case REQUEST_ROBOT_SUCCESS:
      return {
        ...state,
        robots: action.payload
      };
    case REQUEST_ROBOT_FAILED:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
