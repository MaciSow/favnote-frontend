import { Article, Note, Twitter } from 'data/cardContent';
import {
  ADD_ITEM_SUCCESS,
  ADD_ITEM_REQUEST,
  REMOVE_ITEM_SUCCESS,
  REMOVE_ITEM_REQUEST,
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  FETCH_SUCCESS,
  FETCH_REQUEST,
  FETCH_FAILURE,
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
  isLoading: true,
  isError: false,
  articles: [],
  twitters: [],
  notes: [],
} as State;

const rootReducer = (state = initialState, action: any) => {
  const basicState = {
    ...state,
    isLoading: false,
    isError: false,
  };

  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_SUCCESS:
      return {
        // ...basicState,
        ...state,
        isLoading: false,
        isError: false,
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
