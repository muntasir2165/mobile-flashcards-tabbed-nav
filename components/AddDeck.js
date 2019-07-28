import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
class AddDeck extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>AddDeck</Text>
        <Button
          title="Go to Deck Details"
          onPress={() => this.props.navigation.navigate("DeckDetails")}
        />
      </View>
    );
  }
}

const mapStateToProps = deckList => ({});

const mapDispatchToProps = dispatch => ({});

export default AddDeck;
