import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AppLoading } from "expo";
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  H1,
  Button,
  Text
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import AboutScreen from "./screens/AboutScreen";

// fetch fonts returning promise for <AppLoading />
const fetchFonts = () => {
  return Font.loadAsync({
    Roboto: require("native-base/Fonts/Roboto.ttf"),
    Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    ...Ionicons.font
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [contentView, setContentView] = useState("HomeScreen");

  const homeHandler = () => {
    setContentView("HomeScreen");
  }

  // render wait until assets loaded
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  let content = <HomeScreen changeView={setContentView} />;

  if (contentView === "AboutScreen")
    content = <AboutScreen changeView={setContentView} />;
  if (contentView === "CalculatorScreen")
    content = <CalculatorScreen changeView={setContentView} />;

  return (
    <Container>
      <Header style={styles.header}>
        <Left />
        <Body style={styles.headerTitle}>
          <Title>
            <H1 style={styles.h1}>Compound Interest Calculator</H1>
          </Title>
        </Body>
        <Right>
          <Button onPress={homeHandler}><Text>Back</Text></Button>
        </Right>
      </Header>
      {content}
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70
  },
  headerTitle: {
    flex: 3,
    paddingTop: 20,
    justifyContent: "center"
  },
  h1: {
    color: "white"
  }
});
