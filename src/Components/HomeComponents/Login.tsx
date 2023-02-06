import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { TextField } from "../FormComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../Validation";

interface IFormInputs {
  fname: string;
  lname: string;
}

const Login: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(SignupSchema),
  });

  const formSubmitHandler: SubmitHandler<IFormInputs> = (
    data: IFormInputs
  ) => {};
  return (
    <Box
      onSubmit={handleSubmit(formSubmitHandler)}
      component="form"
      sx={{
        bgcolor: "secondary.main",
        color: "text.primary",
        borderRadius: 1.5,
        p: 3,
        my: 5,
      }}
    >
      <Typography variant="h5" color={"primary"} fontWeight="700">
        Sign Up
      </Typography>
      <Typography variant="subtitle1">
        You can either sign up as a user or as a RE Agent.
      </Typography>
    </Box>
  );
};

export default Login;
