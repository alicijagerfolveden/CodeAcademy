import { type FC, useContext } from "react";
import { ProductsContext } from "../ProductsContext";
import { ProductActionButton } from "./ProductActionButton";
import { TProductsProps } from "./types";

export const Product: FC<TProductsProps> = ({ product }) => {
  const { cartProducts } = useContext(ProductsContext);

  const isProductInCart = cartProducts.some(
    //ToDo: naudoti objektą
    (cartProduct) => cartProduct.id === product.id
  );

  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <div>
        <ProductActionButton
          title="+"
          type="addProduct"
          productId={product.id}
        />
        {isProductInCart ? (
          <ProductActionButton
            title="-"
            type="removeProduct"
            productId={product.id}
          />
        ) : null}
      </div>
    </div>
  );
};
