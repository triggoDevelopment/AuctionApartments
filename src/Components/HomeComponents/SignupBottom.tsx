import { Checkbox, FormControl, Grid, Typography } from "@mui/material";
import { Button } from "../StyledComponents";
import { Link } from "react-router-dom";

interface IProps {
  expanded: boolean;
}

const SignupBottom: React.FC<IProps> = ({ expanded }): JSX.Element => {
  return (
    <>
      <FormControl
        sx={{
          flexDirection: "row",
          alignItems: "center",
        }}
        fullWidth
      >
        <Checkbox
          sx={{
            pl: 0,
            "&.Mui-checked": {
              color: "primary.main",
            },
          }}
        />
        <Typography component={"span"} variant={"subtitle1"}>
          By creating an account you agree to the{" "}
          <Typography
            sx={{ color: "primary.main", textDecoration: "underline" }}
            component={"span"}
            variant={"subtitle1"}
          >
            terms of uses{" "}
          </Typography>
          and our{" "}
          <Typography
            sx={{ color: "primary.main", textDecoration: "underline" }}
            component={"span"}
            variant={"subtitle1"}
          >
            {" "}
            privacy policy
          </Typography>
        </Typography>
      </FormControl>
      <Grid
        container
        alignItems={expanded ? "center" : "stretch"}
        flexDirection={expanded ? "row" : "column"}
        mt={2}
      >
        <Grid item xs={12} lg={6} sx={{ pr: 2, maxWidth: "50%" }}>
          <Button type="submit" fullWidth>
            Sign Up
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            pr: 2,
            pt: expanded ? 0 : 2,
            textAlign: expanded ? "left" : "center",
          }}
        >
          <Typography color="text.secondary">
            Have an account?{" "}
            <Link className="link" to="/login">
              Login
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupBottom;
