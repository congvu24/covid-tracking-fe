import React from "react";
import logo from "./logo.svg";
import Container from "./pages/HomePage/Container";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
