import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    };
  }, []);

  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h1">Welcome to my page</Typography>
    </Box>
  );
};
