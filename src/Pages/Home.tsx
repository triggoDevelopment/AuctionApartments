import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { HomeBanner, Login, Signup } from "../Components/HomeComponents";
import { Container } from "@mui/system";

const Home: React.FC = (): JSX.Element => {
  const [isSignup, setIsSignup] = useState(true);
  return (
    <Container maxWidth="xl">
      <Grid container alignItems="center">
        <Grid item xs={12} md={7} lg={6}>
          {isSignup ? (
            <Signup isSignup={isSignup} setIsSignup={setIsSignup} />
          ) : (
            <Login />
          )}
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <HomeBanner />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
