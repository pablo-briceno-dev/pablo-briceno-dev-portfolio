import Box from "@mui/material/Box";
import React from "react";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { BulletItem, BulletList } from "../components/layouts/BulletList";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const PrivacyRutaPlaca: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Política de Privacidad — RutaPlaca</SectionLabel>

      <Typography variant="h2" gutterBottom>
        1. Información que recopilamos
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        RutaPlaca <strong>no recopila ni transmite datos personales</strong>a
        servidores externos. Toda la información que ingresas se almacena
        únicamente en tu dispositivo.
      </Typography>

      <Typography variant="h2" gutterBottom>
        2. Datos almacenados localmente
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>Placas y alias de vehículos que registres</BulletItem>
        <BulletItem>Ciudad seleccionada para consulta</BulletItem>
        <BulletItem>Preferencias de notificaciones</BulletItem>
        <BulletItem>Caché de reglas de pico y placa</BulletItem>
      </BulletList>

      <Typography variant="h2" gutterBottom>
        3. Conexión a internet
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        La app se conecta únicamente para descargar reglas de pico y placa desde
        GitHub. No se envía ningún dato del usuario.
      </Typography>

      <Typography variant="h2" gutterBottom>
        4. Publicidad
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        La app puede mostrar anuncios de Google AdMob. Consulta la{"  "}
        <Typography
          component="a"
          href="https://policies.google.com/privacy"
          sx={{ color: "primary.main" }}
        >
          política de Google
        </Typography>
        {"  "}
        para más información.
      </Typography>

      <Typography variant="h2" gutterBottom>
        5. Notificaciones
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Las notificaciones se generan completamente en tu dispositivo. No se
        envían datos a servidores externos.
      </Typography>

      <Typography variant="h2" gutterBottom>
        6. Permisos requeridos
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: "bold" }}>Permiso</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: "bold" }}>Motivo</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>POST_NOTIFICATIONS</code>
              </TableCell>
              <TableCell>Enviar alertas de pico y placa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>SCHEDULE_EXACT_ALARM</code>
              </TableCell>
              <TableCell>Programar notificaciones en hora exacta</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>INTERNET</code>
              </TableCell>
              <TableCell>Descargar reglas de pico y placa</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>RECEIVE_BOOT_COMPLETED</code>
              </TableCell>
              <TableCell>Reprogramar notificaciones al reiniciar</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h2" gutterBottom>
        7. Cambios en esta política
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Podemos actualizar esta política ocasionalmente. La versión más reciente
        estará siempre disponible en este enlace. Te notificaremos de cambios
        significativos a través de la App o por correo electrónico (si nos has
        proporcionado uno para soporte).
      </Typography>

      <Box
        sx={{
          bgcolor: "background.paper",
          p: "16px 20px", // o py: 2, px: 2.5
          borderRadius: 1, // 8px con el theme por defecto
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Typography sx={{ fontSize: "0.85rem", color: "text.secondary" }}>
          <strong>Última actualización:</strong> abril de 2026.
          <br />
          Si tienes preguntas sobre esta política, contáctanos en{" "}
          <Link
            href="mailto:pablo.briceno.dev@gmail.com"
            sx={{ color: "primary.main" }}
          >
            pablo.briceno.dev@gmail.com
          </Link>
          .
        </Typography>
      </Box>
    </Box>
  );
};
