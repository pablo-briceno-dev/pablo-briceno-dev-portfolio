import type { Theme } from "@emotion/react";
import type { SxProps } from "@mui/material";
import Box from "@mui/system/Box";
import type { ReactNode } from "react";

interface BulletListProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

export const BulletList: React.FC<BulletListProps> = ({ children, sx }) => (
  <Box
    component={"ul"}
    sx={{
      listStyle: "none",
      display: "grid",
      gap: 1,
      pl: 0,
      m: 0,
      ...sx,
    }}
  >
    {children}
  </Box>
);

interface BulletItemProps {
  children: ReactNode;
}

export const BulletItem: React.FC<BulletItemProps> = ({ children }) => (
  <Box
    component="li"
    sx={{
      fontSize: "0.9rem",
      lineHeight: 1.7,
      color: "text.secondary",
      pl: 2.5,
      position: "relative",
      "&::before": {
        content: '"▹"',
        position: "absolute",
        left: 0,
        color: "primary.main",
      },
    }}
  >
    {children}
  </Box>
);
