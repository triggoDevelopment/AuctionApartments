import { Button, InputAdornment, TextFieldProps } from "@mui/material";
import { Controller } from "react-hook-form";
import ErrorOutlineOutlined from "@mui/icons-material/ErrorOutlineOutlined";
import HelperText from "../StyledComponents/HelperText";
import { StyledTextField } from "../../styles/components";

export type ExtendTextFieldProps = {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  label?: string;
  name: string;
  control: any;
} & TextFieldProps;

const MyTextField: React.FC<ExtendTextFieldProps> = ({
  endAdornment,
  startAdornment,
  label,
  placeholder,
  control,
  name,
  sx,
  size = "small",
  ...props
}): JSX.Element => {
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
          helperText={
            <HelperText
              icon={
                <ErrorOutlineOutlined
                  sx={{ fontSize: "0.6rem" }}
                  color="error"
                />
              }
              text={fieldState.error?.message}
            />
          }
        />
      )}
    />
  );
};

export default MyTextField;
