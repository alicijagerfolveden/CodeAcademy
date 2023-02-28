import { ProductsContext } from "../ProductsContext";
import { useContext } from "react";

export const Cart = () => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <>
      <h1>Products</h1>
      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: 1 } })
        }
      >
        Add to card
      </button>
    </>
  );
};
