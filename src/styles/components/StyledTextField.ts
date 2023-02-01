import { alpha, styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.common.white,
    zIndex: 10,
  },
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    zIndex: 10,
  },
  "& .MuiInputBase-root.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline":
    {
      border: `1.5px solid ${theme.palette.grey[100]}`,
    },
  "& .MuiInputBase-root.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
    {
      backgroundColor: theme.palette.grey[50],
      border: `1.5px solid ${theme.palette.grey[100]}`,
    },
  "& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
      border: `1px solid ${theme.palette.primary.main}`,
      boxShadow: `${alpha(theme.palette.primary.main, 0.05)} 0 0 1px 0.1rem`,
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
    },
  "& .MuiSvgIcon-root": {
    zIndex: 10,
  },

  "& label": {
    color: theme.palette.primary.main,
    left: "-0.7rem",
    top: "-0.7em",
    fontWeight: 600,
  },

  "& legend": {
    width: 0,
  },
}));
