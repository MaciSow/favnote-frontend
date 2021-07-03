import axios from 'axios';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

export const removeItem = (itemType: string, id: string) => ({
  type: REMOVE_ITEM,
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType: string, itemContent: object) => {
  const getId = () => `
  ${Math.random().toString(36).substr(2, 9)}
  `;

  return {
    type: ADD_ITEM,
    payload: {
      itemType,
      item: {
        id: getId(),
        ...itemContent,
      },
    },
  };
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
