import { saveDecks, fetchDecks, removeDecks } from "../utils/api";
import { defaultDecks } from "../utils/defaultDecks";

export const SET_DECK_LISTING = "SET_DECK_LISTING";
export const NEW_DECK = "NEW_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const NEW_QUESTION_ANSWER = "NEW_QUESTION_ANSWER";
export const EMPTY_STORE = "EMPTY_STORE";

const setDeckListing = deckListing => ({
  type: SET_DECK_LISTING,
  deckListing: JSON.parse(deckListing)
});

export const handleSetDeckList = () => {
  return dispatch => {
    fetchDecks()
      .then(decks => {
        console.log("Current decks in AsyncStorage: " + JSON.stringify(decks));
        if (!decks || Object.keys(JSON.parse(decks)).length === 0) {
          console.log("Setting up AsyncStorage with default decks");
          saveDecks(defaultDecks)
            .then(() => console.log("Updated AsyncStorage with default decks"))
            .then(() => {
              fetchDecks()
                .then(decks => {
                  console.log("Fetched default decks from AsyncStorage");
                  dispatch(setDeckListing(decks));
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        } else {
          dispatch(setDeckListing(decks));
        }
      })
      .catch(error => console.log(error));
  };
};

export const newDeck = title => ({
  type: NEW_DECK,
  title
});

const deleteDeck = newDeck => ({
  type: NEW_DECK,
  newDeck
});

export const handleDeleteDeck = newDeck => {
  return dispatch => {
    saveDecks(newDeck)
      .then(() =>
        fetchDecks()
          .then(decks => dispatch(setDeckListing(decks)))
          .catch(error => console.log(error))
      )
      .catch(error => console.log(error));
  };
};

export const newQuestionAnswer = (title, question, answer) => ({
  type: NEW_QUESTION_ANSWER,
  title,
  question,
  answer
});

const emptyStore = () => ({
  type: EMPTY_STORE
});

export const handleEmptyStore = () => {
  return dispatch => {
    removeDecks()
      .then(() => dispatch(emptyStore()))
      .catch(error => console.log(error));
  };
};
