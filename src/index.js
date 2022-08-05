import ReactDOM from "react-dom";
import "./styles.css";
import React from "react";

function App() {
  const [state, setState] = React.useState("");
  const HandleClick = () => {
    if (state === "open") {
      alert("welcome ");
    } else {
      alert("wrong password");
    }
  };

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        placeholder="Super duper secret"
        onChange={(e) => setState(e.target.value)}
      />
      <br />
      <br />
      <br />

      <button className="btn" onClick={HandleClick} disabled={state.length < 1}>
        Click
      </button>

      <p>
        Hint: It's <strong>open</strong>
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
