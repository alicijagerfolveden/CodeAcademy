import { useState } from "react";

export const FirstComponent = () => {
  const [i, setI] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div className="App">
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
      <p>i antruoju {i ** 2}</p>
      <p>{description}</p>
    </div>
  );
};
