import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { MainRouter } from "./components/pages/MainRouter";
import { PageFooter } from "./components/small-components/PageFooter";
import { PageHeader } from "./components/small-components/PageHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader />
        <MainRouter />
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
