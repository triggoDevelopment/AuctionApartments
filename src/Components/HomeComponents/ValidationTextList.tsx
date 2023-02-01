import React from "react";
import { Typography } from "@mui/material";

const validatoinList = [
  "At least 8 characters.",
  "Both uppercase and lowercase letters.",
  "Including numbers.",
  "At least one special character.",
  "Shouldn't include personal Information.",
  "Avoid Full words.",
];
const ValidationTextList: React.FC = (): JSX.Element => {
  return (
    <Typography
      sx={{ my: 1, listStylePosition: "inside", pl: 1 }}
      component={"ul"}
    >
      {validatoinList.map((item, idx) => (
        <Typography
          key={idx}
          variant="subtitle1"
          color="text.secondary"
          lineHeight={"1.45rem"}
          fontWeight="300"
          fontSize={"0.8rem"}
          component={"li"}
        >
          {item}
        </Typography>
      ))}
    </Typography>
  );
};

export default ValidationTextList;
