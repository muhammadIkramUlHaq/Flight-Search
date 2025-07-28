import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: palette.primary,
    secondary: palette.secondary,
    text: palette.text,
    background: palette.background,
  },
});

export default theme;
