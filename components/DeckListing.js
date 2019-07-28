import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { saveDecks, fetchDecks } from "../utils/api";
import { defaultDecks } from "../utils/defaultDecks";

class DeckListing extends Component {
  state = {
    deckListing: {}
  };

  // Used for debugging purposes
  componentDidMount1() {
    saveDecks({});
  }

  componentDidMount() {
    fetchDecks()
      .then(decks => {
        console.log("Current decks in AsyncStorage: " + JSON.stringify(decks));
        if (
          !JSON.stringify(decks) ||
          Object.keys(JSON.parse(decks)).length === 0
        ) {
          console.log("Setting up AsyncStorage with default decks");
          saveDecks(defaultDecks)
            .then(() => console.log("Updated AsyncStorage with default decks"))
            .then(() => {
              fetchDecks()
                .then(decks => {
                  console.log("Fetched default decks from AsyncStorage");
                  this.setState({
                    deckListing: JSON.parse(decks)
                  });
                })
                .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
        } else {
          this.setState({ deckListing: JSON.parse(decks) });
        }
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {Object.keys(this.state.deckListing).length > 0 ? (
          Object.keys(this.state.deckListing).map((deckId, index) => (
            <Button
              key={`${index}-${this.state.deckListing[deckId]}`}
              title={`${this.state.deckListing[deckId].title}\n${
                this.state.deckListing[deckId].questions.length
              } cards`}
              onPress={() =>
                this.props.navigation.navigate("DeckDetails", {
                  deckId: deckId
                })
              }
            />
          ))
        ) : (
          <Text>No Deck to Display</Text>
        )}
      </View>
    );
  }
}

export default DeckListing;
