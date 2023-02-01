import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, Box, IconButton, InputBase, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.primary.main}`,
  backgroundColor: "#7A85EB",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.05),
  },

  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(8),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  marginRight: 2,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "white",
  marginRight: 2,
  "& .MuiInputBase-input": {
    padding: theme.spacing(0.7, 0, 0.7, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const SearchArea = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "flex" },
        flexGrow: 1,
        justifyContent: { sm: "center", md: "left" },
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <IconButton
        size="medium"
        sx={{
          marginLeft: 1,
          borderRadius: 1,
          color: "white",
          backgroundColor: "primary.main",
          "& .MuiTouchRipple-root .MuiTouchRipple-child": {
            borderColor: "rgba(238, 242, 255, 0.5)",
            borderRadius: 1,
          },
          "&:hover": {
            background: "rgba(0, 0, 0, 0.04)",
            boxShadow: "inset 0px 0px 1px 1px rgba(238, 242, 255, 0.5)",
            transition: "0.2s ease",
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchArea;
