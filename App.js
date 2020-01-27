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
  Icon
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
  };

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

  // Screen navigation
  let content = <HomeScreen changeView={setContentView} />;

  if (contentView === "AboutScreen")
    content = <AboutScreen changeView={setContentView} />;
  if (contentView === "CalculatorScreen")
    content = <CalculatorScreen changeView={setContentView} />;

  return (
    <Container>
      <Header style={styles.header}>
        <Left style={styles.left}>
          <Button transparent onPress={homeHandler}>
            <Icon name="home" />
          </Button>
        </Left>
        <Body style={styles.headerTitle}>
          <Title>
            <H1 style={styles.h1}>CI Calc</H1>
          </Title>
        </Body>
        <Right style={styles.left}></Right>
      </Header>
      {content}
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 70,
    paddingTop: 20
  },
  headerTitle: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  left: {
    flex: 1
  },
  right: {
    flex: 1
  },
  h1: {
    color: "white"
  }
});
