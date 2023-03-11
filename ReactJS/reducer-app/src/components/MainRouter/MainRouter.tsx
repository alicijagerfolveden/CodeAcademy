import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart, NotFoundPage, Products } from "..";
import { Header } from "../Header";

export const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
