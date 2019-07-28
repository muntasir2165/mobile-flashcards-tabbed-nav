import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AddDeck from "./components/AddDeck";
import AddCard from "./components/AddCard";
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

const DeckStack = createStackNavigator({
  DeckListing: { screen: DeckListing },
  DeckDetails: { screen: DeckDetails },
  AddCard: { screen: AddCard },
  Quiz: { screen: Quiz },
});

const MainNavigator = createBottomTabNavigator(
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
    swipeEnabled: true,
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
);

function App() {
  return (
    <View style={styles.container}>
      <Text>in here</Text>
      <MainNavigator />
    </View>
  );
}
export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
