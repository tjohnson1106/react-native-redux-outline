import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./src/components/Counter";
import { reducer } from "./src/reducers";

// Store -> holds state single source of truth(only one state)
// Action -> state can be modified with actions
// Dispatcher -> action needs to be sent by some one - dispensing an action
// Reducer -> recives the action and modifies the state and gives new state
// Subscriber ->  listens for state changes (using connect)

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}
