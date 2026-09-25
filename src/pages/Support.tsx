import Box from "@mui/material/Box";
import React from "react";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Typography from "@mui/material/Typography";
import { BulletItem, BulletList } from "../components/layouts/BulletList";
import Link from "@mui/material/Link";

export const Support: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Soporte · Pablo Briceño Dev</SectionLabel>

      <Typography variant="h2" gutterBottom>
        ¿Cómo podemos ayudarte?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Como desarrollador independiente, me comprometo a ofrecerte el mejor
        soporte posible para todas mis aplicaciones. Si tienes alguna duda,
        problema o sugerencia, aquí encontrarás la información que necesitas.
      </Typography>

      <Typography variant="h2" gutterBottom>
        📋 Preguntas frecuentes generales
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          <strong>¿Cómo puedo contactar al desarrollador?</strong>
          <br />
          Puedes escribirme al correo que aparece más abajo. Respondo en un
          plazo máximo de 48 horas.
        </BulletItem>
        <BulletItem>
          <strong>¿Dónde se almacenan mis datos?</strong>
          <br />
          Todas mis aplicaciones están diseñadas para almacenar tus datos{" "}
          <strong>localmente</strong> en tu dispositivo, a menos que se indique
          lo contrario. Si alguna app ofrece sincronización en la nube, será
          opcional y bajo tu control.
        </BulletItem>
        <BulletItem>
          <strong>¿Compartes mis datos con terceros?</strong>
          <br />
          No. No recopilo ni comparto ningún dato personal. Las únicas
          integraciones externas son las necesarias para el funcionamiento (por
          ejemplo, Google Drive para copias de seguridad) y siempre con tu
          consentimiento.
        </BulletItem>
        <BulletItem>
          <strong>¿Cómo reporto un error?</strong>
          <br />
          Envía un correo con la mayor cantidad de detalles posible: modelo de
          dispositivo, versión del sistema, pasos para reproducir el problema y,
          si es posible, una captura de pantalla.
        </BulletItem>
      </BulletList>

      <Typography variant="h2" gutterBottom>
        📧 Contacto directo
      </Typography>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: "16px 20px", // o py: 2, px: 2.5
          borderRadius: 1, // 8px con el theme por defecto
          border: "1px solid",
          borderColor: "divider",
          mb: 3,
        }}
      >
        <Typography sx={{ mb: 1 }}>Puedes escribirme a:</Typography>
        <Link
          href="mailto:pablo.briceno.dev@gmail.com"
          sx={{ color: "primary.main" }}
        >
          pablo.briceno.dev@gmail.com
        </Link>
        <Typography
          sx={{ mt: 1, fontSize: "0.85rem", color: "text.secondary" }}
        >
          Respondo en un plazo máximo de 48 horas.
        </Typography>
      </Box>

      <Typography variant="h2" gutterBottom>
        🐛 Reportar un error o sugerir una mejora
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Si encuentras un fallo o tienes una idea para mejorar alguna de mis
        apps, por favor envíame un correo con:
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          Nombre de la aplicación y versión (puedes verla en Ajustes → Acerca
          de).
        </BulletItem>
        <BulletItem>
          Modelo de dispositivo y versión de Android / iOS.
        </BulletItem>
        <BulletItem>Descripción clara del problema o sugerencia.</BulletItem>
      </BulletList>

      <Box
        sx={{
          bgcolor: "background.paper",
          p: "16px 20px", // o py: 2, px: 2.5
          borderRadius: 1, // 8px con el theme por defecto
          border: "1px solid",
          borderColor: "divider",
          mb: 3,
          borderLeft: "3px solid",
        }}
      >
        <Typography
          align="center"
          sx={{
            mb: 1,
            color: "primary.main",
            fontSize: "1.5rem",
          }}
        >
          ¡Toda contribución es bienvenida!
        </Typography>
      </Box>
    </Box>
  );
};
