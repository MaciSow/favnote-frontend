import { Article, articles, Note, notes, Twitter, twitters } from 'data/cardContent';
import {
  REMOVE_ITEM,
  ADD_ITEM,
  AUTH_SUCCESS,
  AUTH_REQUEST,
  AUTH_FAILURE,
  FETCH_SUCCESS,
  FETCH_REQUEST,
  FETCH_FAILURE,
} from 'actions/actions';

export type State = {
  userID: string;
  twitters: Twitter[];
  articles: Article[];
  notes: Note[];
};

const initialState = {
  userID: '60dda0bd574b76927c213e3f',
  articles: [],
  twitters: [],
  notes: [],
} as State;

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        userID: action.payload.data._id,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...action.payload.data],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          // @ts-ignore
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    case ADD_ITEM:
      return {
        ...state,
        // @ts-ignore
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
