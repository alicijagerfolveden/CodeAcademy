import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AddData } from "./Add";
import { Home } from "./Home";
import { NavigationContainer } from "./StyledComponents";

export const MainRouter = (props: any) => {
  return (
    <BrowserRouter>
      <NavigationContainer>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </NavigationContainer>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddData />} />
        <Route path="*" element={<p>Tokio puslapio nėra</p>} />
      </Routes>
    </BrowserRouter>
  );
};
