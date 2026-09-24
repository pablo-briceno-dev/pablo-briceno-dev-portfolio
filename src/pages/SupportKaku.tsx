import Box from "@mui/material/Box";
import React from "react";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Typography from "@mui/material/Typography";
import { BulletItem, BulletList } from "../components/layouts/BulletList";
import Link from "@mui/material/Link";

export const SupportKaku: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Soporte · kaku Budget</SectionLabel>

      <Typography variant="h2" gutterBottom>
        ¿Cómo podemos ayudarte?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        En <strong>kaku Budget</strong> nos esforzamos por ofrecer la mejor
        experiencia. Si tienes alguna duda, problema o sugerencia, aquí
        encontrarás toda la información que necesitas.
      </Typography>

      <Typography variant="h2" gutterBottom>
        📋 Preguntas frecuentes
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          <strong>¿Cómo activo la protección biométrica?</strong>
          <br />
          Ve a Ajustes → Seguridad y activa el interruptor. La app usará el
          reconocimiento facial o de huella dactilar de tu dispositivo.
        </BulletItem>
        <BulletItem>
          <strong>¿Dónde se guardan mis datos?</strong>
          <br />
          Toda tu información financiera se almacena <strong>
            localmente
          </strong>{" "}
          en tu dispositivo. Puedes hacer copias de seguridad en tu propia
          cuenta de Google Drive.
        </BulletItem>
        <BulletItem>
          <strong>¿La app comparte mis datos con terceros?</strong>
          <br />
          No. kaku Budget <strong>no recopila</strong> ningún dato personal ni
          financiero. La sincronización con Drive es opcional y únicamente para
          tu respaldo.
        </BulletItem>
        <BulletItem>
          <strong>He perdido mi copia de seguridad, ¿puedo recuperarla?</strong>
          <br />
          Si has vinculado tu cuenta de Google, puedes restaurar desde Drive en
          la pantalla de configuración de copias de seguridad.
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
        <Typography sx={{ mb: 1 }}>
          Si no encuentras solución, escríbenos a:
        </Typography>
        <Link
          href="mailto:pablo.briceno.dev@gmail.com"
          sx={{ color: "primary.main" }}
        >
          pablo.briceno.dev@gmail.com
        </Link>
        <Typography
          sx={{ mt: 1, fontSize: "0.85rem", color: "text.secondary" }}
        >
          Respondemos en un plazo máximo de 48 horas.
        </Typography>
      </Box>

      <Typography variant="h2" gutterBottom>
        🐛 Reportar un error
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Si encuentras un fallo, por favor envíanos un correo con:
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          Versión de la app (puedes verla en Ajustes → Acerca de).
        </BulletItem>
        <BulletItem>Modelo de dispositivo y versión de Android.</BulletItem>
        <BulletItem>
          Pasos para reproducir el problema (si es posible).
        </BulletItem>
      </BulletList>

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
        <Typography
          align="center"
          sx={{
            mb: 1,
            color: "primary.main",
            fontSize: "1.1rem",
          }}
        >
          Lo revisaremos con prioridad
        </Typography>
      </Box>
    </Box>
  );
};
