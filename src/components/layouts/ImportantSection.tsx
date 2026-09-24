import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ImportantSection: React.FC<{
  title: React.ReactNode;
  content: React.ReactNode;
}> = ({ title, content }) => {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: 2,
        p: 3,
        mb: 4,
      }}
    >
      <Typography>
        ✅ {title}: {content}
      </Typography>
    </Box>
  );
};
