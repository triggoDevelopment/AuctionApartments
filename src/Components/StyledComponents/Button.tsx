import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

export type ExtendButtonProps = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & ButtonProps;

const Button: React.FC<ExtendButtonProps> = ({
  startIcon,
  endIcon,
  sx,
  ...props
}) => {
  return (
    <MuiButton
      sx={{
        ...sx,
        boxShadow: "none",
        textTransform: "none",
      }}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
      variant="contained"
    />
  );
};

export default Button;
