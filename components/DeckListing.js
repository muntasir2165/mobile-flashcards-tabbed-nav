import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { connect } from "react-redux";
import { handleSetDeckList, handleEmptyStore } from "../actions";

class DeckListing extends Component {
  componentDidMount() {
    this.props.handleSetDeckList();
    // this.props.handleEmptyStore();
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
        {Object.keys(this.props.deckListing).length > 0 ? (
          Object.keys(this.props.deckListing).map((deckId, index) => (
            <Button
              key={`${index}-${this.props.deckListing[deckId]}`}
              title={`${this.props.deckListing[deckId].title}\n${
                this.props.deckListing[deckId].questions.length
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
const mapStateToProps = deckListing => ({
  deckListing
});

const mapDispatchToProps = dispatch => ({
  handleSetDeckList: () => dispatch(handleSetDeckList()),
  handleEmptyStore: () => dispatch(handleEmptyStore())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckListing);
