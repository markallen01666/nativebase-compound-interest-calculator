import React, { useState } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Form,
  H2,
  Item,
  Input,
  Text
} from "native-base";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

const CalculatorScreen = props => {
  const [startAmount, setStartAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [yearsInvested, setYearsInvested] = useState("");
  const [result, setResult] = useState(0);

  const startAmountHandler = startAmount => {
    // validate input
    let amt = startAmount.replace(/[^0-9^\.]/g, ""); // no characters except digits or "."
    // only a single decimal point allowed in number
    let decimalCount = 0;
    for (let i = 0; i < amt.length; i++) {
      if (amt[i] === ".") {
        decimalCount++;
        if (decimalCount > 1) {
          amt = amt.slice(0, i) + amt.slice(i + 1);
        }
      }
    }
    setStartAmount(amt);
  };

  const interestRateHandler = interestRate => {
    // validate input
    let amt = interestRate.replace(/[^0-9^\.]/g, ""); // no characters except digits or "."
    // only a single decimal point allowed in number
    let decimalCount = 0;
    for (let i = 0; i < amt.length; i++) {
      if (amt[i] === ".") {
        decimalCount++;
        if (decimalCount > 1) {
          amt = amt.slice(0, i) + amt.slice(i + 1);
        }
      }
    }
    setInterestRate(amt);
  };

  const yearsInvestedHandler = yearsInvested => {
    // validate input
    let amt = yearsInvested.replace(/[^0-9]/g, ""); // integer value only
    setYearsInvested(amt);
  };

  const calculateCompoundInterest = () => {
    Keyboard.dismiss();
    if (parseFloat(interestRate) > 0) {
      let amt =
        parseFloat(startAmount) *
        (1 + parseFloat(interestRate) / 100) ** parseInt(yearsInvested);
      setResult(amt.toFixed(2));
    }
  };

  const resetInputHandler = () => {
    setStartAmount("");
    setInterestRate("");
    setYearsInvested("");
  };

  const resultCard = (
    <Card>
      <CardItem header bordered style={styles.cardHeader}>
        <Text>Result</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>
            {startAmount} invested for {yearsInvested} years, with a compounded
            annual interest rate of {interestRate}%, would yield:
          </Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text>{result}</Text>
      </CardItem>
    </Card>
  );

  let resultLayout = <Text></Text>;
  
  if (result > 0) {
    resultLayout = resultCard;
  }



  return (
    <Container style={styles.screen}>
      <H2 style={styles.h2}>Calculate total</H2>
      <Text style={styles.text}>
        Enter the amount invested, the annual interest rate percentage, and the
        number of years that the funds will be invested.
      </Text>
      <Content padder style={styles.content}>
        <Card>
          <Form style={styles.form}>
            <Item>
              <Input
                placeholder="Amount invested"
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={10}
                onChangeText={startAmountHandler}
                value={startAmount}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                placeholder="Interest Rate % per year"
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={10}
                onChangeText={interestRateHandler}
                value={interestRate}
              />
            </Item>
            <Item style={styles.item}>
              <Input
                placeholder="Number of years funds invested"
                style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                maxLength={10}
                onChangeText={yearsInvestedHandler}
                value={yearsInvested}
              />
            </Item>
            <View style={styles.button}>
              <Button rounded onPress={calculateCompoundInterest}>
                <Text style={styles.buttonText}>Calculate</Text>
              </Button>
            </View>
          </Form>
        </Card>
        {resultLayout}
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
    alignItems: "center"
  },
  content: {
    width: "80%"
  },
  form: {
    paddingVertical: 40
  },
  h2: {},
  text: {
    paddingVertical: 20,
    textAlign: "center"
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
