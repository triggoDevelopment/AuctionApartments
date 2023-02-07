import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = ({ size = "large", sx, ...props }) => {
  return (
    <MuiButton
      sx={{
        ...sx,
        boxShadow: "none",
        textTransform: "none",
      }}
      size={size}
      {...props}
      variant="contained"
    />
  );
};

export default Button;
