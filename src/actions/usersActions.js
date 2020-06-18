import axios from "axios";
import { GET_USERS, LOADING, ERROR } from "../types/usersTypes";
export const getUsers = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/userss"
    );

    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  } catch (error) {
    console.log("Error: ", error.message);
    dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
