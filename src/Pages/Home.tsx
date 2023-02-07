import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { HomeBanner, Login, Signup } from "../Components/HomeComponents";
import { Container } from "@mui/system";
import { useLocation } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";
  return (
    <Container maxWidth="xl">
      <Grid container alignItems="center">
        <Grid item xs={12} md={7} lg={6}>
          {isLogin ? <Login /> : <Signup />}
        </Grid>
        <Grid item xs={12} md={5} lg={6}>
          <HomeBanner />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
