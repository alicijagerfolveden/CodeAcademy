import { useEffect, useState } from "react";

export const FetchProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const products = fetch("https://golden-whispering-show.glitch.me").then(
      (result) => result.json().then((products) => console.log(products))
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 1_000);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : <p>Fetching completed</p>}</>;
};
