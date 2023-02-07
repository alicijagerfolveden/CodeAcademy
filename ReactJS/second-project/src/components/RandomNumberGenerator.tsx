import { useEffect, useState } from "react";

export const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [description, setDescription] = useState("");
  const isImportantValue = randomNumber > 50;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const products = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
      (result) => result
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  }, []); //kai masyve keičiasi reikšmės, vykdyk kodo funkciją

  useEffect(() => {
    // alert(randomNumber);
  }, [randomNumber, description]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className={isImportantValue ? "importantValue" : "boldValue"}>
            {randomNumber.toFixed()}
          </p>

          <button
            onClick={() => {
              const magicNumber = Math.random() * 100;
              setRandomNumber(magicNumber);
            }}
          >
            Click
          </button>

          {isImportantValue && <p>Important Client</p>}

          <input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </>
      )}
    </>
  );
};
