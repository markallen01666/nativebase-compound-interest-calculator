import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  H2,
  Button
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const CalculatorScreen = props => {
  return (
    <Container style={styles.screen}>
      <H2 style={styles.h2}>Calculate total</H2>
      <Text style={styles.text}>
        Enter the amount invested, the annual interest rate percentage, and the
        number of years that the funds will be invested.
      </Text>
      <Text style={styles.text}>
        The total is made up of the original amount invested plus the total
        compounded interest over the years the fund were invested.
      </Text>
      <Content style={styles.content}>
        <Form style={styles.form}>
          <Item>
            <Input placeholder="Amount invested" style={styles.input} />
          </Item>
          <Item style={styles.item}>
            <Input
              placeholder="Interest Rate % per year"
              style={styles.input}
            />
          </Item>
          <Item style={styles.item}>
            <Input
              placeholder="Number of years funds invested"
              style={styles.input}
            />
          </Item>
          <View style={styles.button}>
            <Button rounded onPress={() => props.changeView("HomeScreen")}>
              <Text style={styles.buttonText}>Calculate</Text>
            </Button>
          </View>
        </Form>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20,
    marginHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  content: {
    width: "70%"
  },
  form: {
    paddingVertical: 40
  },
  h2: {},
  text: {
    paddingTop: 20
  },
  button: {
    marginTop: 40,
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center"
  },
  input: {
    textAlign: "center"
  }
});

export default CalculatorScreen;
