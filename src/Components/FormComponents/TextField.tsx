import React from "react";

import { InputAdornment, TextFieldProps } from "@mui/material";
import { StyledTextField } from "../../styles/components";
import { Controller } from "react-hook-form";

export type ExtendTextFieldProps = {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label?: string;
  name: string;
  control: any;
} & TextFieldProps;

const MyTextField = ({
  endAdornment,
  startAdornment,
  label,
  placeholder,
  control,
  name,
  sx,
  size = "small",
  ...props
}: ExtendTextFieldProps) => {
  return (
    <Controller
      name={name}
      defaultValue=""
      control={control}
      render={({ field, fieldState }) => (
        <StyledTextField
          label={label}
          {...field}
          placeholder={placeholder || label}
          sx={{ ...sx, marginTop: "2rem" }}
          {...props}
          size={size}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ),
          }}
          error={!!fieldState.error}
          helperText={fieldState.error ? fieldState.error.message : "cs"}
        />
      )}
    />
  );
};

export default MyTextField;
