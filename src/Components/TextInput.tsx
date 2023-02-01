import React from "react";
import { Grid, TextField, Typography } from "@mui/material";

type TextInputProps = {
  label: string;
};
const TextInput = ({ label }: TextInputProps) => {
  return (
    <Grid pb={3} item xs={12}>
      <Typography sx={{ fontWeight: 600, color: "primary.500" }}>
        {label}
      </Typography>
      <TextField fullWidth placeholder="First Name" size="small" />
    </Grid>
  );
};

export default TextInput;
