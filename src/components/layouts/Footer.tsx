import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme/theme";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      component="footer"
      sx={{ borderTop: `1px solid ${palette.border}`, py: 4 }}
    >
      <Container maxWidth="md">
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          <Typography sx={{ fontSize: ".72rem", color: palette.muted }}>
            © {year} Pablo Briceño Dev
          </Typography>
          <Stack direction="row" spacing={2.25} sx={{ flexWrap: "wrap" }}>
            <Typography
              component={Link}
              to="/terms"
              sx={{
                fontSize: ".72rem",
                color: palette.muted,
                textDecoration: "none",
                "&:hover": { color: palette.accent },
              }}
            >
              Términos y Condiciones
            </Typography>
            <Typography
              component={Link}
              to="/privacy"
              sx={{
                fontSize: ".72rem",
                color: palette.muted,
                textDecoration: "none",
                "&:hover": { color: palette.accent },
              }}
            >
              Política de Privacidad
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
