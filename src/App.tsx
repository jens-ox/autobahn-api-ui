import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { autobahnApiClient } from "./apis/autobahn/client";

function App() {
  useEffect(() => {
    const listAutobahnen = async () => {
      autobahnApiClient.listAutobahnen();
    };

    listAutobahnen();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
