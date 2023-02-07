import { SvgIcon } from "@mui/material";
import React from "react";
import Button from "./Button";

const GoogleButton = () => {
  return (
    <Button
      sx={{
        padding: 0.5,
        background: "#fff",
        color: "#9CA3AF",
        fontWeight: 600,
        mb: 2,
      }}
      fullWidth
      variant="contained"
    >
      <img
        style={{ marginRight: "10px" }}
        width="35px"
        height="35px"
        src="images/googleIcon.svg"
        alt="googleIcon"
      />
      Login With Google
    </Button>
  );
};
export default GoogleButton;
