import React, { useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
    </div>
  );
}

const ThemeContext = React.createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Amazing button</button>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
