import React, { useState } from "react";
import { AppLoading } from "expo";
import { Container, Text } from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import CalculatorScreen from "./screens/CalculatorScreen";
import AboutScrenn from "./screens/AboutScreen"; 

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

  let content = (
    <Text>-- This is the basic app converted to functional component --</Text>
  );

  return <Container>{content}</Container>;
}
