import React from "react";
import { palette } from "../../theme/theme";
import { Box, Chip, GlobalStyles, Stack, Typography } from "@mui/material";

const TAGS = ["Flutter", "Android", "Full Stack", "Colombia 🇨🇴"];

const fadeUp = (delay: number) => ({
  opacity: 0,
  animation: `fadeUp .6s ${delay}s forwards`,
});

export const Hero: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 9, sm: 12.5 }, pb: { xs: 7, sm: 10 } }}
    >
      <GlobalStyles
        styles={{
          "@keyframes fadeUp": {
            from: { opacity: 0, transform: "translateY(20px)" },
            to: { opacity: 1, transform: "translateY(0)" },
          },
        }}
      />
      <Stack spacing={3.5}>
        <Stack
          direction="row"
          spacing={1.25}
          sx={{
            alignItems: "center",
            fontSize: ".72rem",
            letterSpacing: ".18em",
            textTransform: "uppercase",
            color: palette.accent,
            gap: 1,
            ...fadeUp(0.1),
            "&::before": {
              content: "''",
              display: "block",
              width: 32,
              height: 2,
              background: palette.accent,
            },
          }}
        >
          <span>Desarrollador Independiente</span>
        </Stack>

        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2.6rem, 7vw, 4.8rem)",
            lineHeight: 1.05,
            letterSpacing: "-.02em",
            ...fadeUp(0.2),
          }}
        >
          Pablo
          <br />
          <Box
            component="span"
            sx={{
              background: `linear-gradient(135deg, ${palette.accent} 0%, ${palette.accent2} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Briceño
          </Box>{" "}
          Dev
        </Typography>

        <Typography
          sx={{
            maxWidth: 520,
            fontSize: ".9rem",
            lineHeight: 1.8,
            color: palette.muted,
            ...fadeUp(0.3),
          }}
        >
          Desarrollador Full Stack y Mobile independiente. Construyo
          aplicaciones Android nativas con Flutter, enfocadas en resolver
          problemas reales para usuarios colombianos.
        </Typography>

        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: 1.25,
            ...fadeUp(0.4),
          }}
        >
          {TAGS.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
