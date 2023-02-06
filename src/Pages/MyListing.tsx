import React from "react";
import Grid from "@mui/material/Grid";
import { HomeBanner, Signup } from "../Components/HomeComponents";

const Home: React.FC = (): JSX.Element => {
  return (
    <Grid container>
      <Grid xs={12} md={6}></Grid>
      <Grid xs={12} md={6}>
        <HomeBanner />
      </Grid>
    </Grid>
  );
};

export default Home;
