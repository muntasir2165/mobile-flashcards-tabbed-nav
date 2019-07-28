import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

class AddCard extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Add Card</Text>
      </View>
    );
  }
}

const mapStateToProps = deckList => ({});

const mapDispatchToProps = dispatch => ({});

export default AddCard;
