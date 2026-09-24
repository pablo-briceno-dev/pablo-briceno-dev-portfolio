import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { palette } from "../../theme/theme";
import Box from "@mui/material/Box";
import type { ReactNode } from "react";

export const SectionLabel: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <Stack
      direction={"row"}
      spacing={1.5}
      sx={{ mb: 4.5, alignItems: "center" }}
    >
      <Typography
        sx={{
          fontSize: ".7rem",
          letterSpacing: ".2em",
          textTransform: "uppercase",
          color: palette.accent,
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </Typography>
      <Box sx={{ flex: 1, height: "1px", background: palette.border }} />
    </Stack>
  );
};
