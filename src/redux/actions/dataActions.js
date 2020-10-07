import {
  SET_SHOUTS,
  LOADING_DATA,
  LIKE_SHOUT,
  UNLIKE_SHOUT,
  DELETE_SHOUT,
  SET_ERRORS,
  POST_SHOUT,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_SHOUT,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
} from "../types";
import axios from "axios";

// Get all Shouts
export const getShouts = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });

  axios
    .get("/shouts")
    .then((res) => {
      dispatch({
        type: SET_SHOUTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_SHOUTS,
        payload: [],
      });
    });
};

// Like a Shout
export const likeShout = (shoutId) => (dispatch) => {
  axios
    .get(`/shout/${shoutId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_SHOUT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Unlike a Shout
export const unlikeShout = (shoutId) => (dispatch) => {
  axios
    .get(`/shout/${shoutId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_SHOUT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// Delete a Shout
export const deleteShout = (shoutId) => (dispatch) => {
  axios
    .delete(`/shout/${shoutId}`)
    .then(() => {
      dispatch({
        type: DELETE_SHOUT,
        payload: shoutId,
      });
    })
    .catch((err) => console.log(err));
};

// Post a Shout
export const postShout = (newShout) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/shout", newShout)
    .then((res) => {
      dispatch({
        type: POST_SHOUT,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Get a Shout
export const getShout = (shoutId) => (dispatch) => {
  dispatch({
    type: LOADING_UI,
  });
  axios
    .get(`/shout/${shoutId}`)
    .then((res) => {
      dispatch({
        type: SET_SHOUT,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};

// Submit a Comment
export const submitComment = (shoutId, commentData) => (dispatch) => {
  axios
    .post(`/shout/${shoutId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) =>
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Clear Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_SHOUTS,
        payload: res.data.shouts,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_SHOUTS,
        payload: null,
      });
    });
};
