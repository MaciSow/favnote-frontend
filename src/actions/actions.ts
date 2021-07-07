import axios from 'axios';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const removeItem = (itemType: string, id: string) => (dispatch: any) => {
  dispatch({ type: REMOVE_ITEM_REQUEST });
  axios
    .delete(`http://localhost:9000/api/note/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: REMOVE_ITEM_FAILURE });
    });
};

export const addItem = (itemType: string, itemContent: object) => (dispatch: any, getState: any) => {
  dispatch({ type: ADD_ITEM_REQUEST });
  axios
    .post(`http://localhost:9000/api/note`, {
      userID: getState().userID,
      type: itemType,
      ...itemContent,
    })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ADD_ITEM_SUCCESS,
        payload: {
          itemType,
          data: response.data,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_ITEM_FAILURE });
    });
};

export const authenticate = (username: string, password: string) => (dispatch: any) => {
  dispatch({ type: AUTH_REQUEST });
  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const fetchItems = (itemType: string) => (dispatch: any, getState: any) => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get('http://localhost:9000/api/notes/type', {
      params: {
        type: itemType,
        userID: getState().userID,
      },
    })
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: {
          data,
          itemType,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
