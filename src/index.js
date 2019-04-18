import React, { useContext, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
      <br />
      <TextInputWithFocusButton />
    </div>
  );
}

// useContext hook
const ThemeContext = React.createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Amazing button</button>;
}

// useRef hook
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    inputEl.current.value = "Bolaji";
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
