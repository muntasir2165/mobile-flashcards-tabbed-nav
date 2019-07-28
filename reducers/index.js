import {
  SET_DECK_LIST,
  NEW_DECK,
  DELETE_DECK,
  NEW_QUESTION_ANSWER
} from "../actions";

const decks = (state = {}, action) => {
  switch (action.type) {
    case SET_DECK_LIST:
      return {
        ...state,
        ...action.deckList
      };

    case NEW_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] }
      };
    case DELETE_DECK:
      const currentDeck = { ...state };
      currentDeck[action.title] = undefined;
      delete currentDeck[action.title];
      return {
        ...currentDeck
      };
    case NEW_QUESTION_ANSWER:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [
            ...state[action.title].questions,
            { question: action.question, answer: action.answer }
          ]
        }
      };
    default:
      return state;
  }
};

export default decks;
