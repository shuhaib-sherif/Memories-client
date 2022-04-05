import * as API from "../api/index";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await API.getPosts();
    dispatch({
      type: "FETCH_ALL",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPosts = (post) => async (dispatch) => {
  const { data } = await API.createPost(post);
  try {
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePosts = (id,post) => async (dispatch) => {
  const { data } = await API.updatePost(id,post);
  try {
    dispatch({
      type: "UPDATE",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const increaseLikesAction = (id) => async (dispatch) => {
  const { data } = await API.increaseLikesapi(id);
  console.log('data',data)
  try {
    dispatch({
      type: "INCREASE_LIKES",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePosts = (id) => async (dispatch) => {
  const { data } = await API.deletePost(id);
  try {
    dispatch({
      type: "DELETE",
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const postData = (post) => async (dispatch) => {
  try {
    dispatch({
      type: "POST_DATA",
      payload: post,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const clearPosts = () => async (dispatch) => {
  
  try {
    dispatch({
      type: "CLEAR_DATA",
    });
  } catch (error) {
    console.log(error.message);
  }
};

