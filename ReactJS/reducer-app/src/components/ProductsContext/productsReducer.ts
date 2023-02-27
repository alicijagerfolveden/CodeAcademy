import type { TProductsAction, TProductsState } from "./types";

export const productsReducer = (
  state: TProductsState,
  action: TProductsAction
) => {
  switch (action.type) {
    case "addProduct":
      console.log("add Product");
      break;

    case "removeProduct":
      console.log("remove Product");
      break;

    case "setProducts":
      console.log("set Products");
      break;

      default: 
      console.log("no case matched")
      break;
  }
  return state;


};
