import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class DeckDetails extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>{this.props.navigation.state.params.deck.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = deckList => ({});

const mapDispatchToProps = dispatch => ({});

export default DeckDetails;
