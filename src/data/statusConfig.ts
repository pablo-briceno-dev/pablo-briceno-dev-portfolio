import type { ProjectStatus } from "../types/project";

export const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; dotColor: "accent" | "accent2" | "muted" }
> = {
  available: { label: "Disponible en Google Play", dotColor: "accent" },
  "coming-soon": { label: "Próximamente en Google Play", dotColor: "accent2" },
  "in-development": { label: "En desarrollo", dotColor: "muted" },
  archived: { label: "Archivado", dotColor: "muted" },
};
