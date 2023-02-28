import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { TProductsProps } from "./types";

export const Product: FC<TProductsProps> = ({ product }) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button
        onClick={() =>
          dispatch({ type: "addProduct", payload: { productId: product.id } })
        }
      >
        Add to card
      </button>
    </div>
  );
};
