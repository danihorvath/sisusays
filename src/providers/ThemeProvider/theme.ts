import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    default: string;
    paper: string;
    secondary: string;
  }
}
declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    translucent: true;
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
    background: {
      default: "#FFFFFF",
      paper: "#F7F7F7",
      secondary: "#F7F7F7",
    },
  },
});
