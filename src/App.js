import "./App.css";
import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <div className="text-xl">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
