import { Grid, Typography, Box } from "@mui/material";

export const Calculator = () => {
  const grayButtonStyles = {
    display: {
      backgroundColor: "gray",
      color: "black",
      fontWeight: "bold",
      borderRadius: "50%",
      height: "150px",
      lineHeight: "150px",
      padding: "5px",
      fontSize: "40px",
    },
  };
  const numberButtonStyles = {
    display: {
      backgroundColor: "rgb(75, 75, 75)",
      color: "white",
      fontWeight: "bold",
      borderRadius: "50%",
      height: "150px",
      lineHeight: "150px",
      padding: "5px",
      fontSize: "40px",
    },
  };

  const numberZeroButtonStyles = {
    display: {
      backgroundColor: "rgb(75, 75, 75)",
      color: "white",
      fontWeight: "bold",
      borderRadius: "100px",
      height: "150px",
      lineHeight: "150px",
      padding: "5px",
      fontSize: "40px",
    },
  };

  const orangeButtonStyles = {
    display: {
      backgroundColor: "orange",
      color: "white",
      fontWeight: "bold",
      borderRadius: "50%",
      height: "150px",
      lineHeight: "150px",
      padding: "5px",
      fontSize: "40px",
    },
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ margin: "10px" }}>
        Calculator
      </Typography>
      <Grid
        container
        spacing={1}
        sx={{
          margin: "auto",
          width: "600px",
        }}
      >
        <Grid item xs={12} sx={{ border: "1px solid black", padding: "20px" }}>
          Display
        </Grid>
        <Grid item xs={3} sx={grayButtonStyles}>
          C
        </Grid>
        <Grid item xs={3} sx={grayButtonStyles}>
          +/-
        </Grid>
        <Grid item xs={3} sx={grayButtonStyles}>
          %
        </Grid>
        <Grid item xs={3} sx={orangeButtonStyles}>
          /
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          7
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          8
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          9
        </Grid>
        <Grid item xs={3} sx={orangeButtonStyles}>
          *
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          4
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          5
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          6
        </Grid>
        <Grid item xs={3} sx={orangeButtonStyles}>
          -
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          1
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          2
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          3
        </Grid>
        <Grid item xs={3} sx={orangeButtonStyles}>
          +
        </Grid>
        <Grid item xs={6} sx={numberZeroButtonStyles}>
          0
        </Grid>
        <Grid item xs={3} sx={numberButtonStyles}>
          ,
        </Grid>
        <Grid item xs={3} sx={orangeButtonStyles}>
          =
        </Grid>
      </Grid>
    </Box>
  );
};
