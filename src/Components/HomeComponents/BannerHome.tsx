import React from "react";
import Box from "@mui/material/Box";

const HomeBanner = (): JSX.Element => {
  return (
    <Box
      component="img"
      sx={{ display: "flex", margin: "0 auto", maxWidth: "100%" }}
      alt="houseBanner"
      src="images/houseBanner.png"
    />
  );
};

export default HomeBanner;
