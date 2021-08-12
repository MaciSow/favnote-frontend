import axios from 'axios';
import { GetRootState, RootState } from 'store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT = 'LOGOUT';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export type TAction = ActionCreator<ThunkAction<void, RootState, unknown, Action>>;

export type TDispatch = ThunkDispatch<RootState, void, Action>;

export type ThunkResult<R> = ThunkAction<R, RootState, unknown, Action>;

export const removeItem: TAction = (itemType: string, id: string) => (dispatch: TDispatch) => {
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
      // eslint-disable-next-line no-console
      console.log(err);
      dispatch({ type: REMOVE_ITEM_FAILURE });
    });
};

export const addItem: TAction =
  (itemType: string, itemContent: object) => (dispatch: TDispatch, getState: GetRootState) => {
    dispatch({ type: ADD_ITEM_REQUEST });
    axios
      .post(`http://localhost:9000/api/note`, {
        userID: getState().userID,
        type: itemType,
        ...itemContent,
      })
      .then((response) => {
        dispatch({
          type: ADD_ITEM_SUCCESS,
          payload: {
            itemType,
            data: response.data,
          },
        });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
        dispatch({ type: ADD_ITEM_FAILURE });
      });
  };

export const authenticate: TAction = (username: string, password: string) => (dispatch: TDispatch) => {
  dispatch({ type: AUTH_REQUEST });
  return axios
    .post('http://localhost:9000/api/user/login', {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: AUTH_SUCCESS, payload });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      dispatch({ type: AUTH_FAILURE });
    });
};

export const registerUser: TAction = (username: string, password: string) => (dispatch: TDispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  return axios
    .post('http://localhost:9000/api/user/register', {
      username,
      password,
    })
    .then((payload) => {
      dispatch({ type: REGISTER_SUCCESS, payload });
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      dispatch({ type: REGISTER_FAILURE });
    });
};

export const logout: TAction = () => (dispatch: TDispatch) => {
  dispatch({ type: LOGOUT });
};

export const fetchItems: TAction = (itemType: string) => (dispatch: TDispatch, getState: GetRootState) => {
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
      // eslint-disable-next-line no-console
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
