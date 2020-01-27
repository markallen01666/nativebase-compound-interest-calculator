import React from "react";
import { StyleSheet } from "react-native";
import { Container, Text, H2 } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const AboutScreen = props => {
  return (
    <Container style={styles.screen}>
      <H2>About this app</H2>
      <Text style={styles.text}>
        This app calculates the final value of an investment after the
        application of compound interest for a chosen number of years.
      </Text>
      <Text style={styles.text}>
        This is a demonstration app built with React Native, Expo, and the
        NativeBase UI framework.
      </Text>
      <Text style={styles.text}>
        I converted the default App.js from the Class based app component
        described in the NativeBase documentation to a Functional component with
        Hooks.
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 40,
    marginTop: 40,
    marginBottom: 20,
    alignItems: "center"
  },
  text: {
    paddingTop: 20,
    textAlign: "center"
  }
});

export default AboutScreen;
