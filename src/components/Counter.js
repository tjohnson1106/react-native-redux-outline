import React, { Component } from "react";
import { View, Text, StyleShee, TouchableOpacity } from "react-native";

class Counter extends Component {
  state = {
    counter: 0
  };

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => this.increaseCounter}>
            <Text>Increase</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{this.state.counter}</Text>
          <TouchableOpacity onPress={() => this.decreaseCounter}>
            <Text style={styles.counterText}>Decrease</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  counter: {
    flexDirection: "row",
    width: 200,
    justifyContent: "space-around"
  },
  counterText: {
    fontSize: 20
  }
});

export default Counter;
