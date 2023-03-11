import { ProductsContext } from "../ProductsContext";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Product } from "./Product";
import { TProduct } from "../ProductsContext/types";
import {
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
} from "@mui/material";

export const Products = () => {
  const { dispatch, fetchedProducts } = useContext(ProductsContext);

  const [shouldShowCheapProducts, setShouldShowCheapProducts] = useState(false);
  const [inexpensiveProducts, setInexpensiveProducts] = useState<TProduct[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(!fetchedProducts.length);

  const productsToRender = shouldShowCheapProducts
    ? inexpensiveProducts
    : fetchedProducts;

  const handleCheckboxChange = () => {
    setShouldShowCheapProducts(
      (prevShouldShowCheapProducts) => !prevShouldShowCheapProducts
    );

    if (inexpensiveProducts && !inexpensiveProducts.length) {
      setInexpensiveProducts(
        fetchedProducts.filter(
          (fetchedProduct) => (fetchedProduct.price || 0) < 50
        )
      );
    }
  };

  useEffect(() => {
    if (!fetchedProducts.length) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          dispatch({
            type: "setProducts",
            payload: { fetchedProducts: res.data },
          });
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [dispatch, fetchedProducts]);

  return (
    <Box role="products-constainer">
      <Box textAlign="center">
        <FormControlLabel
          control={
            <Checkbox
              checked={shouldShowCheapProducts}
              onChange={handleCheckboxChange}
              name="inexpensive products checkbox"
            />
          }
          label="Inexpensive Products"
        />
      </Box>

      {isLoading ? (
        <Typography
          component="h1"
          variant="h3"
          padding={2}
          role="loading-message"
        >
          Loading
        </Typography>
      ) : (
        <Grid
          aria-label="products list"
          container
          display="flex"
          justifyContent="center"
          gridTemplateColumns="auto auto auto"
          gap="30px"
          margin="0 auto"
        >
          {productsToRender.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </Box>
  );
};
