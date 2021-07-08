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
  twitters: Twitter[];
  articles: Article[];
  notes: Note[];
};

const initialState = {
  userID: '60dda0bd574b76927c213e3f',
  isLoading: false,
  articles: [],
  twitters: [],
  notes: [],
} as State;

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userID: action.payload.data._id,
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
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
