import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { saveDecks, fetchDecks } from "../utils/api";
import { defaultDecks } from "../utils/defaultDecks";

class DeckListing extends Component {
  state = {
    deckListing: {}
  };
  componentDidMount() {
    fetchDecks()
      .then(decks => {
        if (!JSON.stringify(decks)) {
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
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {Object.keys(this.state.deckListing).map((deckId, index) => (
          <Button
            key={`${index}-${this.state.deckListing[deckId]}`}
            style={styles.deckButton}
            title={`${this.state.deckListing[deckId].title}\n${
              this.state.deckListing[deckId].questions.length
            } cards`}
            onPress={() =>
              this.props.navigation.navigate("DeckDetails", {
                deck: this.state.deckListing[deckId]
              })
            }
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckButton: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20
  }
});


export default DeckListing;
