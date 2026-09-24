export type ContactKind = "github" | "linkedin" | "email";

export interface Contact {
  kind: ContactKind;
  label: string;
  value: string; // texto mostrado, ej: "pablo-briceno-dev"
  href: string;
}

export const contacts: Contact[] = [
  {
    kind: "github",
    label: "GitHub",
    value: "pablo-briceno-dev",
    href: "https://github.com/pablo-briceno-dev",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    value: "pablo-briceno-dev",
    href: "https://www.linkedin.com/in/pablo-briceno-dev",
  },
  {
    kind: "email",
    label: "Email",
    value: "pablo.briceno.dev@gmail.com",
    href: "mailto:pablo.briceno.dev@gmail.com",
  },
];
