import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainRouter } from "./components/pages/MainRouter";
import { ProductsContext } from "./components/ProductsContext/ProductsContext";
import { PageFooter } from "./components/small-components/PageFooter";
import { PageHeader } from "./components/small-components/PageHeader";

function App() {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => setProducts(["Apples"]), []);

  return (
    <div className="App">
      <ProductsContext.Provider value={products}>
        <BrowserRouter>
          <PageHeader />
          <MainRouter />
          <PageFooter />
        </BrowserRouter>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
