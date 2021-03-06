import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddCard from "./components/AddCard";
import AddDeck from "./components/AddDeck";
import DeckDetails from "./components/DeckDetails";
import DeckListing from "./components/DeckListing";
import Quiz from "./components/Quiz";
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { purple, white } from "./utils/colors";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";

const DeckStack = createStackNavigator({
  DeckListing: { screen: DeckListing },
  DeckDetails: { screen: DeckDetails },
  AddCard: { screen: AddCard },
  Quiz: { screen: Quiz }
});

const MainNavigator = createAppContainer(
  createBottomTabNavigator(
    {
      Decks: {
        screen: DeckStack
      },
      AddDeck: {
        screen: AddDeck
      }
    },
    {
      tabBarPosition: "bottom",
      tabBarOptions: {
        activeTintColor: "#f2f2f2",
        activeBackgroundColor: "#2EC4B6",
        inactiveTintColor: "#666",
        labelStyle: {
          fontSize: 22,
          padding: 12
        }
      }
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
