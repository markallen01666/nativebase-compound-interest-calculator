import React from "react";
import { View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Container, Header, Button, Text, H2 } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = props => {
  return (
    <Container style={styles.screen}>
      <H2 style={styles.screenHeader}>Home Screen</H2>
      <Button rounded success style={styles.button} onPress={() => props.changeView("CalculatorScreen")}>
        <Text>Calculator</Text>
      </Button>
      <Button rounded dark style={styles.button} onPress={() => props.changeView("AboutScreen")}>
        <Text>About</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 40,
    alignItems: "center"
  },
  screenHeader: {
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
  }
});

export default HomeScreen;
