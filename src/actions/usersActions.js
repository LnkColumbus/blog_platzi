export const getUsers = () => (dispatch) => {
  dispatch({
    type: "GET_USERS",
    payload: [1, 2, 3],
  });
};
