export type ProjectStatus =
  | "available" // Publicado y disponible (Play Store, web, etc)
  | "coming-soon" // Terminado o casi, pendiente de publicación
  | "in-development" // En construcción activa
  | "archived"; // Descontinuado / ya no se mantiene

export type LinkKind = "play" | "github" | "web" | "external";

export interface ProjectLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface Project {
  /** Identificador único, usado como key de React y para rutas/legal. kebab-case */
  id: string;
  name: string;
  description: string;
  /** Ruta a la imagen del ícono dentro de /public, ej: "/assets/apps/kaku-budget.png" */
  icon: string;
  status: ProjectStatus;
  /** Botones de acción (Play Store, GitHub, sitio web, etc) */
  links: ProjectLink[];
  /** Enlaces a políticas / soporte de la app */
  legalLinks?: LegalLink[];
  tags?: string[];
  /** Si true, se destaca visualmente (ej. borde de acento) */
  featured?: boolean;
}
