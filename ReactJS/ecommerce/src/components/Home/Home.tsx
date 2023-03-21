import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Link to="/login">Login</Link>
        </Grid>
        <Grid item>
          <Link to="/register">Register</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
