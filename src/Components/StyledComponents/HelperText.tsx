import React from "react";
import { Typography } from "@mui/material";

interface IProps {
  text: string | undefined;
  icon: React.ReactNode;
}
const HelperText: React.FC<IProps> = ({ text, icon }): JSX.Element => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {text != null && icon}
      <Typography
        variant="subtitle1"
        sx={{ ml: 0.5, fontSize: "0.8rem" }}
        component={"span"}
      >
        {text}
      </Typography>
    </div>
  );
};

export default HelperText;
