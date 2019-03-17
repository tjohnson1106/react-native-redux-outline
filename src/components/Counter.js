import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class Counter extends Component {
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  decreaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.counter}>
          <TouchableOpacity onPress={() => this.increaseCounter()}>
            <Text style={styles.counterText}>Increase</Text>
          </TouchableOpacity>
          <Text>{this.props.counter}</Text>
          <TouchableOpacity onPress={() => this.decreaseCounter()}>
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

function mapStateToProps(state) {
  return {
    // get state to from store and map to prop
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () =>
      dispatch({
        type: "INCREASE_COUNTER"
      }),

    decreaseCounter: () =>
      dispatch({
        type: "DECREASE_COUNTER"
      })
  };
}

export default connect(mapStateToProps)(Counter);
