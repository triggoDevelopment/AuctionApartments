import { Box, Checkbox, FormControl, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { TextField } from "../FormComponents";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "../Validation";
import { Button, GoogleButton } from "../StyledComponents";
import { Link } from "react-router-dom";
interface IFormInputs {
  fname: string;
  lname: string;
}

const Login: React.FC = () => {
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
    <Grid container justifyContent={"center"}>
      <Grid item xs={8}>
        <Box
          onSubmit={handleSubmit(formSubmitHandler)}
          component="form"
          sx={{
            bgcolor: "secondary.main",
            color: "text.primary",
            borderRadius: 1.5,
            p: 5,
            my: 5,
          }}
        >
          <Typography variant="h5" color={"primary"} fontWeight="700">
            Login
          </Typography>
          <Typography variant="subtitle1">
            Login to your account to access your listings.{" "}
          </Typography>
          <Grid
            container
            justifyContent={"space-between"}
            mt={2}
            sx={{
              border: "1px solid #E5E7EB",
              borderWidth: "1px 0",
              pt: 3,
              pb: 3,
            }}
          >
            <TextField
              fullWidth
              control={control}
              name="email"
              label="Email Address"
            />
            <TextField
              fullWidth
              control={control}
              name="password"
              label="Password"
              placeholder="Create Password"
            />
            <Grid container justifyContent="space-between" alignItems="center">
              <FormControl
                sx={{
                  width: { xs: "100%", sm: "48%", md: "100%", lg: "48%" },
                  flexDirection: "row",
                  alignItems: "center",
                }}
                fullWidth
              >
                <Checkbox
                  sx={{
                    pl: 0,
                    "&.Mui-checked": {
                      color: "grey[700]",
                    },
                  }}
                />
                <Typography component={"span"} variant={"subtitle1"}>
                  Remember Me
                </Typography>
              </FormControl>
              <Typography
                component={"span"}
                sx={{ textDecoration: "underline" }}
                variant={"subtitle1"}
                color="primary.main"
              >
                Forgot Password
              </Typography>
            </Grid>
          </Grid>
          <Button sx={{ my: 1 }} type="submit" fullWidth>
            Sign Up
          </Button>
          <GoogleButton />
          <Typography sx={{ textAlign: "center" }} color="text.secondary">
            No Account?{" "}
            <Link className="link" to="/">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
