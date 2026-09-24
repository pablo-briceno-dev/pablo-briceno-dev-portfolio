import Box from "@mui/material/Box";
import type React from "react";
import { palette } from "../../theme/theme";
import { contacts } from "../../data/contacts";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SectionLabel } from "../layouts/SectionLabel";
import { CONTACT_ICONS } from "../projects/icons";

export const ContactSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="contacto"
      sx={{ py: 9, borderTop: `1px solid ${palette.border}` }}
    >
      <SectionLabel>Contacto</SectionLabel>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 2,
        }}
      >
        {contacts.map((contact) => (
          <Box
            key={contact.kind}
            component="a"
            href={contact.href}
            target="_blank"
            rel="noopener"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.75,
              px: 3,
              py: 2.5,
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              borderRadius: 2.5,
              textDecoration: "none",
              color: palette.muted,
              fontSize: ".8rem",
              transition: "border-color .2s, color .2s, transform .2s",
              "&:hover": {
                borderColor: palette.accent,
                color: palette.text,
                transform: "translateY(-2px)",
              },
            }}
          >
            <Stack
              sx={{
                width: 36,
                height: 36,
                background: palette.tagBg,
                borderRadius: "8px",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {CONTACT_ICONS[contact.kind]}
            </Stack>
            <Stack sx={{ minWidth: 0, overflow: "hidden" }}>
              <Typography
                sx={{
                  fontSize: ".65rem",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  color: palette.accent,
                }}
              >
                {contact.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: ".8rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {contact.value}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
