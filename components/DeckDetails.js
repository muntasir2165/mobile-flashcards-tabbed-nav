import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { saveDecks, fetchDecks } from "../utils/api";

class DeckDetails extends Component {
  state = {
    deckListing: {}
  };
  componentDidMount() {
    fetchDecks()
      .then(decks => this.setState({ deckListing: decks }))
      .catch(error => console.log(error));
  }

  deleteDeck = deckId => {
    // console.log("Id of the deck to delete: " + deckId);
    // console.log("Current decks: " + JSON.stringify(this.state.deckListing));
    // const currentDecks = { ...this.state.deckListing };
    // currentDecks[deckId] = undefined;
    // delete currentDecks[deckId];
    // console.log("Decks after the delete: " + JSON.stringify(currentDecks));
    // saveDecks(currentDecks)
    //   .then(() => this.props.navigation.navigate("DeckListing"))
    //   .catch(error => console.log(error));
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => {}}>
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Text>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.deleteDeck(this.props.navigation.state.params.deckId)
          }
        >
          <Text>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default DeckDetails;
