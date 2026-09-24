import Container from "@mui/material/Container";
import React from "react";
import { Hero } from "../components/hero/Hero";
import { ProjectsSection } from "../components/projects/ProjectsSection";
import { ContactSection } from "../components/contact/ContactSection";

export const Home: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
      <Hero />
      <ProjectsSection />
      <ContactSection />
    </Container>
  );
};
