import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { handleDeleteDeck } from "../actions";

class DeckDetails extends Component {
  deleteDeck = deckId => {
    console.log("Id of the deck to delete: " + deckId);
    console.log("Current decks: " + JSON.stringify(this.props.deckListing));
    const currentDecks = { ...this.props.deckListing };
    currentDecks[deckId] = undefined;
    delete currentDecks[deckId];
    console.log("Decks after the delete: " + JSON.stringify(currentDecks));
    this.props.handleDeleteDeck(currentDecks);
    // this.props.navigation.navigate("DeckListing");
    // this.props.navigation.goBack();
        this.props.navigation.navigate("DeckListing", {
          onGoBack: () => this.refresh()
        });
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

const mapStateToProps = deckListing => ({
  deckListing
});

const mapDispatchToProps = dispatch => ({
  handleDeleteDeck: () => dispatch(handleDeleteDeck())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckDetails);
