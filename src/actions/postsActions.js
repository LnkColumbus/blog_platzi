import axios from "axios";
import { GET_POSTS_BY_USER, LOADING, ERROR } from "../types/postsTypes";
import { GET_USERS } from "../types/usersTypes";

// export const getPosts = () => async (dispatch) => {
//   dispatch({
//     type: LOADING,
//   });
//   try {
//     const response = await axios("https://jsonplaceholder.typicode.com/posts");

//     dispatch({
//       type: GET_POSTS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: ERROR,
//       payload: `Algo salió mal, intente de nuevo.
//       ${error.message}`,
//     });
//   }
// };

export const getPostByUserID = (key) => async (dispatch, getState) => {
  dispatch({
    type: LOADING,
  });
  const { users } = getState().usersReducer;
  const { posts } = getState().postsReducer;
  const userId = users[key].id;

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const updatedPosts = [...posts, response.data];

    dispatch({
      type: GET_POSTS_BY_USER,
      payload: updatedPosts,
    });

    const postKey = updatedPosts.length - 1;
    const updatedUsers = [...users];
    updatedUsers[key] = {
      ...users[key],
      postKey,
    };

    dispatch({
      type: GET_USERS,
      payload: updatedUsers,
    });
  } catch (error) {
    console.log(`Error: ${error.message}`);
    dispatch({
      type: ERROR,
      payload: "Publicaciones no disponibles.",
    });
  }
};
