import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palet {
    default: string;
    paper: string;
    secondary: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFFFFF",
    },
    success: {
      main: "#28a828",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F7F7F7",
    },
  },
});
