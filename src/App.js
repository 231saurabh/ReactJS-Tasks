import React from "react";
import { store } from "../src/store";
import { Provider } from "react-redux";
import Background from "./components/bgApp/Background";

const App = () => {
  return (
    <Provider store={store}>
      <Background />
    </Provider>
  );
};

export default App;
