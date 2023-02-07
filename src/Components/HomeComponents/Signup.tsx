import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { TextField } from "../FormComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../Validation";
import { ValidationTextList, SignupCollapse, SignupBottom } from ".";

interface IFormInputs {
  fname: string;
  lname: string;
}

const Signup: React.FC = () => {
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
      <Grid
        container
        justifyContent={"space-between"}
        mt={2}
        sx={{ border: "1px solid #E5E7EB", borderWidth: "1px 0", pt: 3, pb: 3 }}
      >
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ pr: 2, maxWidth: "50%", borderRight: "1px solid #E5E7EB" }}
        >
          <Grid container justifyContent={"space-between"}>
            <TextField
              sx={{ width: { xs: "100%", sm: "48%", md: "100%", lg: "48%" } }}
              control={control}
              name="firstName"
              label="First Name"
            />

            <TextField
              sx={{ width: { xs: "100%", sm: "48%", md: "100%", lg: "48%" } }}
              control={control}
              name="lastName"
              label="Last Name"
            />
          </Grid>
          <TextField
            fullWidth
            control={control}
            name="email"
            label="Email Address"
          />
          <TextField
            fullWidth
            control={control}
            name="username"
            label="Username"
            placeholder="Create a username"
          />
          <TextField
            fullWidth
            control={control}
            name="phone"
            label="Phone Number"
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ pl: 2, maxWidth: "50%" }}>
          <TextField
            fullWidth
            control={control}
            name="password"
            label="Password"
            placeholder="Create Password"
          />
          <TextField
            fullWidth
            control={control}
            name="confirmPassword"
            label="Confirm Password"
          />
          <ValidationTextList />
        </Grid>
      </Grid>
      <SignupCollapse
        setExpanded={setExpanded}
        expanded={expanded}
        control={control}
      />
      <SignupBottom expanded={expanded} />
    </Box>
  );
};

export default Signup;
