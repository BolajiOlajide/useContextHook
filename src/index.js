import React, {
  useContext,
  useRef,
  useReducer,
  useState,
  useEffect
} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [theme, changeTheme] = useState("dark");
  const [label, updateLabel] = useState("light mode");
  // useContext hook
  const ThemeContext = React.createContext(theme);

  function Button({ label, changeTheme }) {
    const theme = useContext(ThemeContext);
    return (
      <button className={theme} onClick={() => changeTheme(label)}>
        {label} mode
      </button>
    );
  }

  useEffect(() => {
    const newMode = theme === "dark" ? "light" : "dark";
    updateLabel(newMode);
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Button label={label} changeTheme={changeTheme} />
      <br />
      <br />
      <TextInputWithFocusButton />
      <br />
      <br />
      <Bar />
    </div>
  );
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

// useReducer hook
const initialState = { width: 15 };
const reducer = (state, action) => {
  switch (action) {
    case "plus":
      return { width: state.width + 15 };
    case "minus":
      return { width: Math.max(state.width - 15, 10) };
    default:
      throw new Error("what's going on?");
  }
};

const Bar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div
        style={{ background: "papayawhip", height: "30px", width: state.width }}
      />
      <div style={{ marginTop: "3rem" }}>
        <button onClick={() => dispatch("plus")}>Increase bar size</button>
        <button onClick={() => dispatch("minus")}>Decrease bar size</button>
      </div>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
