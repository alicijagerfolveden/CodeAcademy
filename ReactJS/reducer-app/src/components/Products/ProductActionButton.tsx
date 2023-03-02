import { FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { TProductsAction } from "../ProductsContext/types";
import { TProductActionButtonProps } from "./types";

export const ProductActionButton: FC<TProductActionButtonProps> = ({
  title,
  type,
  productId,
}) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <button onClick={() => dispatch({ type, payload: { productId } })}>
      {title}
    </button>
  );
};
