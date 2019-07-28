import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "MobileFlashcards:decks";

export const saveDecks = decks => {
  return AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
};

export const fetchDecks = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY);
};

// export const updateDecks = deckList => {
//   return AsyncStorage.mergeItem(
//     DECK_STORAGE_KEY,
//     JSON.stringify({
//       deckList
//     })
//   );
// };
