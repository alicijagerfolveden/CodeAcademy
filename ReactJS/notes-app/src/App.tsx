import React from "react";
import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";

const App = () => {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");
  const title = (text: string, subtitle: string) => {
    return (
      <div>
        <h1>Info {text}</h1>
        <h2>Info {subtitle}</h2>
      </div>
    );
  };

  return (
    <div className="App">
      {title("hero", "subtitle")}
      <input
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={
          () => setI(i + 1) //naudoti tik pradiniams projektams
        }
      >
        Submit
      </button>
      {Button()}

      <p>i antruoju {i ** 2}</p>
      <p>{description}</p>
    </div>
  );
};

export default App;
