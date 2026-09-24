import Box from "@mui/material/Box";
import type { Project } from "../../types/project";
import { palette } from "../../theme/theme";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { LINK_ICONS } from "./icons";
import Link from "@mui/material/Link";
import { StatusBadge } from "./StatusBadge";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Box
      sx={{
        background: palette.surface,
        border: `1px solid ${project.featured ? palette.accent : palette.border}`,
        borderRadius: 3,
        p: 4,
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "56px 1fr" },
        gap: 3,
        alignItems: "start",
        transition: "border-color .25s, transform .25s",
        "&:hover": {
          borderColor: palette.accent,
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: "14px",
          overflow: "hidden",
          flexShrink: 0,
        }}
      >
        <Box
          component="img"
          src={project.icon}
          alt={project.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>

      <Stack spacing={1}>
        <Typography
          variant="h3"
          sx={{ fontSize: "1.15rem", letterSpacing: "-.01em" }}
        >
          {project.name}
        </Typography>

        <Typography
          sx={{ fontSize: ".83rem", color: palette.muted, lineHeight: 1.7 }}
        >
          {project.description}
        </Typography>

        <StatusBadge status={project.status} />

        {project.tags && project.tags.length > 0 && (
          <Stack direction="row" sx={{ pt: 0.5, flexWrap: "wrap", gap: 1 }}>
            {project.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  fontSize: ".65rem",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: palette.muted,
                }}
              >
                #{tag}
              </Box>
            ))}
          </Stack>
        )}

        {project.links.length > 0 && (
          <Stack direction="row" sx={{ mt: 1.5, flexWrap: "wrap", gap: 1.25 }}>
            {project.links.map((link) => (
              <Button
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                startIcon={LINK_ICONS[link.kind]}
                variant={link.kind === "play" ? "contained" : "outlined"}
                size="small"
                sx={
                  link.kind === "play"
                    ? {
                        background: `linear-gradient(135deg, ${palette.accent2}, ${palette.accent})`,
                        color: palette.bg,
                        "&:hover": { opacity: 0.85 },
                      }
                    : {
                        background: palette.tagBg,
                        borderColor: palette.border,
                        color: palette.muted,
                        "&:hover": {
                          borderColor: palette.accent,
                          color: palette.text,
                        },
                      }
                }
              >
                {link.label}
              </Button>
            ))}
          </Stack>
        )}

        {project.legalLinks && project.legalLinks.length > 0 && (
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              gap: 2,
              mt: 1.5,
              pt: 1.5,
              borderTop: `1px solid ${palette.border}`,
            }}
          >
            {project.legalLinks.map((legal) => (
              <Link
                key={legal.href}
                href={legal.href}
                underline="none"
                sx={{
                  fontSize: ".7rem",
                  letterSpacing: ".08em",
                  textTransform: "uppercase",
                  color: palette.muted,
                  "&:hover": { color: palette.accent },
                }}
              >
                {legal.label}
              </Link>
            ))}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};
