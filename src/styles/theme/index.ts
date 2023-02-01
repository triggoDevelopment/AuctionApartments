import { createTheme } from "@mui/material/styles";
import { palette } from "./pallete";
import { typography } from "./typography";

let theme = createTheme({
  palette,
  typography,
  shape: {
    borderRadius: 8,
  },
});

theme = createTheme(theme, {
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: theme.palette.primary.light,
        },
      },
    },
  },
});

export default theme;
