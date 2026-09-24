import { Box, GlobalStyles } from "@mui/material";
import { palette } from "./theme";

/**
 * Réplica de los ::before / .blob del index.html original:
 * textura de ruido sutil + dos manchas de color que flotan de fondo.
 * Vive aparte del theme.ts para no mezclar "colores" con "efectos visuales".
 */
export function BackgroundFX() {
  return (
    <>
      <GlobalStyles
        styles={{
          "@keyframes drift": {
            from: { transform: "translate(0, 0) scale(1)" },
            to: { transform: "translate(60px, 40px) scale(1.1)" },
          },
        }}
      />
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.4,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
          width: 600,
          height: 600,
          background: palette.accent2,
          top: -200,
          left: -200,
          animation: "drift 18s ease-in-out infinite alternate",
        }}
      />
      <Box
        sx={{
          position: "fixed",
          borderRadius: "50%",
          filter: "blur(120px)",
          opacity: 0.12,
          pointerEvents: "none",
          zIndex: 0,
          width: 500,
          height: 500,
          background: palette.accent,
          bottom: -150,
          right: -150,
          animation: "drift 22s ease-in-out infinite alternate-reverse",
        }}
      />
    </>
  );
}
