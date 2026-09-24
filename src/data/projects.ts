import type { Project } from "../types/project";

/**
 * Registro de proyectos/apps del portafolio.
 *
 * Para publicar un proyecto nuevo, agrega un objeto más a este arreglo.
 * Nada más en el código necesita tocarse: la sección de "Apps" en Home,
 * el conteo, el orden y las tarjetas se generan automáticamente a partir
 * de esta lista.
 *
 * Convenciones:
 * - `id`: kebab-case, único. Se usa como key de React.
 * - `icon`: coloca la imagen en /public/assets/apps/<archivo> y referencia
 *   esa ruta absoluta aquí (ej: "/assets/apps/mi-app.png").
 * - `legalLinks`: si tu app está en Play Store, casi siempre necesitas
 *   Soporte + Privacidad + Términos. Aloja esos HTML como archivos
 *   estáticos en /public/legal/<id>/... para que la URL no cambie nunca
 *   (Play Store guarda esos enlaces en su consola).
 */
export const projects: Project[] = [
  {
    id: "ruta-placa",
    name: "RutaPlaca",
    description:
      "Consulta el pico y placa de tu vehículo en las principales ciudades de Colombia. Notificaciones inteligentes, widgets y soporte para múltiples vehículos.",
    icon: "/apps/ruta-placa.png",
    status: "available",
    tags: ["Flutter", "Android"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.pablobricenodev.ruta_placa&pcampaignid=web_share",
        kind: "play",
      },
      {
        label: "Ver código",
        href: "https://github.com/pablo-briceno-dev/ruta-placa-app",
        kind: "github",
      },
    ],
    legalLinks: [
      { label: "Soporte", href: "/support" },
      {
        label: "Política de Privacidad",
        href: "/privacy-policy",
      },
      { label: "Términos y Condiciones", href: "/terms" },
    ],
  },
  {
    id: "kaku-budget",
    name: "Kaku Budget",
    description:
      "Lleva el control de tu presupuesto personal de forma simple: ingresos, gastos y categorías, pensado para el día a día.",
    icon: "/apps/kaku-budget.png",
    status: "coming-soon",
    tags: ["Flutter", "Android"],
    links: [
      {
        label: "Ver código",
        href: "https://github.com/pablo-briceno-dev/kaku-app",
        kind: "github",
      },
    ],
    legalLinks: [
      { label: "Soporte", href: "/support-kaku" },
      {
        label: "Política de Privacidad",
        href: "/privacy-policy-kaku",
      },
      {
        label: "Términos y Condiciones",
        href: "/terms-kaku",
      },
    ],
  },

  // 👇 Ejemplo de cómo se ve agregar un proyecto nuevo (bórralo o complétalo):
  // {
  //   id: 'mi-app-nueva',
  //   name: 'Mi App Nueva',
  //   description: 'Una línea corta explicando qué hace.',
  //   icon: '/assets/apps/mi-app-nueva.png',
  //   status: 'in-development',
  //   tags: ['Flutter'],
  //   links: [
  //     { label: 'Ver código', href: 'https://github.com/pablo-briceno-dev/mi-app-nueva', kind: 'github' },
  //   ],
  // },
];
