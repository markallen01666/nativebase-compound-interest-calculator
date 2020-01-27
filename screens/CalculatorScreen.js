import React from "react";
import { View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const CalculatorScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>This is the Calculator screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CalculatorScreen;
