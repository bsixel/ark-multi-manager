"use client";
import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#233058",
      // main: "#1d5e78",
      // main: "#3b7287",
      // main: "#9ba4dc",
      light: "#8fc8d9",
      dark: "#3c4373",
      contrastText: "#FFF",
    },
    secondary: {
      main: "#d214c8",
      light: "#e691e1",
      dark: "#63105f",
      contrastText: "#FFF",
    },
    background: {
      default: "#233058",
      paper: "#6f71b1",
    },
    text: {
      primary: "#FFF",
      secondary: "#ebc95b",
    },
  },
});
