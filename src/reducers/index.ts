import { Article, Note, Twitter } from 'data/cardContent';
import { Reducer } from 'redux';
import {
  ADD_ITEM_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_FAILURE,
  FETCH_SUCCESS,
  FETCH_REQUEST,
  FETCH_FAILURE,
  LOGOUT,
} from 'actions/actions';

export type State = {
  userID: string;
  isLoading: boolean;
  isError: boolean;
  twitters: Twitter[];
  articles: Article[];
  notes: Note[];
};

const initialState = {
  userID: '60dda0bd574b76927c213e3f',
  isLoading: false,
  isError: false,
  articles: [],
  twitters: [],
  notes: [],
} as State;

const rootReducer: Reducer<State> = (state = initialState, action) => {
  const basicState = {
    ...state,
    isLoading: false,
    isError: false,
  };

  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case AUTH_SUCCESS:
      return {
        ...basicState,
        userID: action.payload.data._id,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...basicState,
        userID: action.payload.data._id,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGOUT:
      return {
        ...state,
        userID: '',
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SUCCESS:
      return {
        ...basicState,
        [action.payload.itemType]: [...action.payload.data],
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          // @ts-ignore
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        // @ts-ignore
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
