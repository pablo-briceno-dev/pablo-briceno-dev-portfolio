import Stack from "@mui/material/Stack";
import { STATUS_CONFIG } from "../../data/statusConfig";
import { palette } from "../../theme/theme";
import type { ProjectStatus } from "../../types/project";
import GlobalStyles from "@mui/material/GlobalStyles";
import Typography from "@mui/material/Typography";

const DOT_COLOR = {
  accent: palette.accent,
  accent2: palette.accent2,
  muted: palette.muted,
};

export const StatusBadge: React.FC<{ status: ProjectStatus }> = ({
  status,
}) => {
  const config = STATUS_CONFIG[status];
  const color = DOT_COLOR[config.dotColor];

  return (
    <Stack
      direction="row"
      spacing={0.875}
      sx={{ mt: 0.5, alignItems: "center" }}
    >
      <GlobalStyles
        styles={{
          "@keyframes pulse": {
            "0%, 100%": { opacity: 1 },
            "50%": { opacity: 0.3 },
          },
        }}
      />
      <Stack
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: color,
          animation: "pulse 2s infinite",
        }}
      />
      <Typography
        sx={{
          fontSize: ".7rem",
          letterSpacing: ".1em",
          textTransform: "uppercase",
          color,
        }}
      >
        {config.label}
      </Typography>
    </Stack>
  );
};
