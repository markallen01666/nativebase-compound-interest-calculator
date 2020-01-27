import React from "react";
import { StyleSheet } from "react-native";
import { Container, Button, Text, H1 } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = props => {
  return (
    <Container style={styles.screen}>
      <H1 style={styles.appTitle}>Compound Interest Calculator</H1>
      <Button
        rounded
        success
        style={styles.button}
        onPress={() => props.changeView("CalculatorScreen")}
      >
        <Text>Calculator</Text>
      </Button>
      <Button
        rounded
        dark
        style={styles.button}
        onPress={() => props.changeView("AboutScreen")}
      >
        <Text>About</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  },
  appTitle: {
    marginTop: 40,
    marginBottom: 20
  },
  button: {
    marginVertical: 20
  }
});

export default HomeScreen;
