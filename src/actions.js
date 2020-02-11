import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS,
  REQUEST_ROBOT_FAILED
} from "./constants";

export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

export const requestRobots = () => dispatch => {
  dispatch({ type: REQUEST_ROBOT_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(robots => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: robots }))
    .catch(err => dispatch({ type: REQUEST_ROBOT_FAILED, payload: err }));
};
