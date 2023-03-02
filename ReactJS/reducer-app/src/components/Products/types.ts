import { TProduct, TProductsAction } from "../ProductsContext/types";

export type TProductsProps = {
  product: TProduct;
};

export type TProductActionButtonProps = {
  title: string;
  type: TProductsAction["type"];
  productId: number;
};
