import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { sampleAction } from "./lib/actions";

function App() {
  const dispatch = useDispatch();
  const sample = {
    key1: "value1",
    key2: 100,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          onClick={() => {
            dispatch(sampleAction(sample));
          }}
        >
          Sample Button
        </button>
      </header>
    </div>
  );
}

export default App;
