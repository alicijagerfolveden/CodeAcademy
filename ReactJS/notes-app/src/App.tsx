import "./App.css";
import { FetchProducts } from "./components/4-pratise-ca/FetchData";
import { SecondPractise } from "./components/second-lesson-ca/second-practise";

const App = () => {
  // useEffect(() => {
  //   const products = fetch("https://golden-whispering-show.glitch.me").then(
  //     (result) => result
  //   );
  //   console.log(products);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1_000);
  // }, []);

  return (
    <div className="App">
      {/* <SecondPractise /> */}
      <div>
        <FetchProducts />
      </div>
    </div>
  );
};

export default App;
