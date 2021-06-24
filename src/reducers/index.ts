import { Article, articles, Note, notes, Twitter, twitters } from 'data/cardContent';

export type State = {
  twitters: Twitter[];
  articles: Article[];
  notes: Note[];
};

const initialState = {
  articles: [...articles],
  twitters: [...twitters],
  notes: [...notes],
} as State;

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        [action.payload.itemType]: [
          // @ts-ignore
          ...state[action.payload.itemType].filter((item) => item.id !== action.payload.id),
        ],
      };
    default:
      break;
  }

  return state;
};

export default rootReducer;
