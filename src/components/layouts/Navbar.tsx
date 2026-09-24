import AppBar from "@mui/material/AppBar";
import { palette } from "../../theme/theme";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Footer } from "./Footer";
import ScrollToHash from "./ScrollToHash";

const NAV_ITEMS = [
  { label: "Apps", href: "/#apps" },
  { label: "Soporte", href: "/support" },
  { label: "Contacto", href: "/#contacto" },
];

export const Navbar: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToHash />

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(8,11,15,.7)",
          borderBottom: `1px solid ${palette.border}`,
          boxShadow: "none",
        }}
      >
        <Container maxWidth="md">
          <Toolbar
            disableGutters
            sx={{ height: 56, minHeight: "56px !important" }}
          >
            <Typography
              component={Link}
              to="/"
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: ".95rem",
                letterSpacing: ".08em",
                color: palette.accent,
                textDecoration: "none",
                flexGrow: 1,
              }}
            >
              PB.dev
            </Typography>
            <Stack
              direction="row"
              spacing={3.5}
              component="ul"
              sx={{ listStyle: "none" }}
            >
              {NAV_ITEMS.map((item) => (
                <Typography key={item.href} component="li">
                  <Button
                    component={Link}
                    to={item.href}
                    sx={{
                      fontSize: ".75rem",
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      color: palette.muted,
                      transition: "color .2s",
                      "&:hover": { color: palette.text },
                    }}
                  >
                    {item.label}
                  </Button>
                </Typography>
              ))}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md" sx={{ flexGrow: 1, py: 4 }}>
        <Outlet />
      </Container>

      <Footer />
    </Box>
  );
};
