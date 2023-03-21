import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../Cart";
import { Header } from "../Header";
import { Home } from "../Home";
import { Login } from "../Login";
import { Products } from "../Products";
import { Register } from "../Register";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
