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
      <Text style={styles.text}>
        This app calculates the total value of an investment after it has been allowed to grow with all interest re-invested.
      </Text>
      <Text style={styles.text}>
        To use this app you will need to know the amount to be invested at the start, the annual interest rate to apply, and the number of years that the investment will be held.
      </Text>
      <Text style={styles.text}>
        The total is made up of the original amount invested plus the total
        compounded interest over the years the fund were invested.
      </Text>
      <Text style={styles.formula}>
        The calculation is made using the formula:
      </Text>
      <Text style={styles.formula}>
        Final total = (initial investment) x ((1 + (interest rate)/100)) to the power of the number of years the investment is held)
      </Text>
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
  },
  text: {
    paddingVertical: 20,
    width: "80%",
    textAlign: "center"
  },
  formula: {
    paddingVertical: 20,
    width: "80%",
    textAlign: "center"
  }
});

export default HomeScreen;
