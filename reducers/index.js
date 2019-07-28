import {
  SET_DECK_LISTING,
  NEW_DECK,
  DELETE_DECK,
  NEW_QUESTION_ANSWER,
  EMPTY_STORE
} from "../actions";

const decks = (state = {}, action) => {
  switch (action.type) {
    case SET_DECK_LISTING:
      console.log(
        "inside SET_DECK_LISTING: " + JSON.stringify(action.deckListing)
      );
      return {
        ...state,
        ...action.deckListing
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
    case EMPTY_STORE:
      console.log(
        "inside EMPTY_STORE: " + JSON.stringify(action.deckListing)
      );
      return {};
    default:
      return state;
  }
};

export default decks;
