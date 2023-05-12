import * as React from "react";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Box
      sx={{
        width: 500,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <h1>Welcome to QuizME!</h1>
    </Box>
  );
}
