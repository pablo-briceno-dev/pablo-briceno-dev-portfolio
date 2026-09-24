import { createTheme } from "@mui/material/styles";

export const palette = {
  bg: "#080b0f",
  surface: "#0e1318",
  border: "#1c242d",
  accent: "#00e5ff",
  accent2: "#7b61ff",
  text: "#e8edf2",
  muted: "#5a6a7a",
  tagBg: "#111820",
};

declare module "@mui/material/styles" {
  interface Palette {
    surface: string;
    borderColor: string;
    accent2: string;
    tagBg: string;
  }
  interface PaletteOptions {
    surface?: string;
    borderColor?: string;
    accent2?: string;
    tagBg?: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: palette.bg,
      paper: palette.surface,
    },
    primary: { main: palette.accent },
    secondary: { main: palette.accent2 },
    text: {
      primary: palette.text,
      secondary: palette.muted,
    },
    divider: palette.border,
    surface: palette.surface,
    borderColor: palette.border,
    accent2: palette.accent2,
    tagBg: palette.tagBg,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: "'DM Mono', monospace",
    h1: { fontFamily: "'Syne', sans-serif", fontWeight: 800 },
    h2: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: "1.5rem",
      letterSpacing: "-.01em",
    },
    h3: {
      fontFamily: "'Syne', sans-serif",
      fontWeight: 700,
      fontSize: "1.2rem",
      letterSpacing: "-.01em",
    },
    button: { fontFamily: "'DM Mono', monospace", textTransform: "uppercase" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: { backgroundColor: palette.bg, color: palette.text },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          letterSpacing: ".08em",
          fontSize: ".75rem",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: palette.tagBg,
          border: `1px solid ${palette.border}`,
          color: palette.muted,
          borderRadius: 4,
          fontSize: ".72rem",
          letterSpacing: ".1em",
          textTransform: "uppercase",
        },
      },
    },
  },
});
