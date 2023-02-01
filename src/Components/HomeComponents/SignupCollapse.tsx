import React from "react";
import {
  Typography,
  Grid,
  Collapse,
  IconButtonProps,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FileUpload, TextField } from "../FormComponents";
import Medal from "@mui/icons-material/WorkspacePremium";
import { Button } from "../StyledComponents";
import { Dispatch, SetStateAction } from "react";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(-90deg)" : "rotate(deg)",

  color: theme.palette.primary.main,
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface IProps {
  control: any;
  setExpanded: Dispatch<SetStateAction<boolean>>;
  expanded: boolean;
}

const SignupCollapse: React.FC<IProps> = ({
  setExpanded,
  expanded,
  control,
}: IProps) => {
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Typography color="primary.main" fontWeight={"700"}>
          RE Agent:
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Grid container>
          <Grid
            className="ss"
            item
            xs={12}
            lg={6}
            sx={{ pr: 2, maxWidth: "50%" }}
          >
            <FileUpload />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ pl: 2, maxWidth: "50%" }}>
            <TextField
              fullWidth
              control={control}
              name="licence"
              label="Licence Number"
              placeholder="Enter Licence Number"
            />
            <TextField
              fullWidth
              control={control}
              name="fullname"
              label="Full Name"
              placeholder="Enter Full Name"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"space-between"}
          mt={2}
          sx={{
            border: "1px solid #E5E7EB",
            borderWidth: "1px 0 0 0",
            pt: 3,
            pb: 3,
          }}
        >
          <Grid item xs={12} lg={6} sx={{ pr: 2, maxWidth: "50%" }}>
            <Button
              startIcon={<Medal />}
              fullWidth
              sx={{
                background: "white",
                border: "1px solid #818CF8",
                color: "primary.main",
              }}
            >
              Add Membership
            </Button>
          </Grid>
        </Grid>
      </Collapse>
    </>
  );
};

export default SignupCollapse;
