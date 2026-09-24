import Box from "@mui/material/Box";
import { palette } from "../../theme/theme";
import { SectionLabel } from "../layouts/SectionLabel";
import Stack from "@mui/material/Stack";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../../data/projects";

export const ProjectsSection: React.FC = () => {
  return (
    <Box
      component="section"
      id="apps"
      sx={{ py: 9, borderTop: `1px solid ${palette.border}` }}
    >
      <SectionLabel>Apps</SectionLabel>
      <Stack spacing={3}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
    </Box>
  );
};
