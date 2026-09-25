import Box from "@mui/material/Box";
import type React from "react";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Typography from "@mui/material/Typography";
import { BulletItem, BulletList } from "../components/layouts/BulletList";

export const Terms: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Términos y Condiciones</SectionLabel>

      <Typography variant="h2" gutterBottom>
        1. Aceptación de los términos
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Al descargar, instalar o utilizar cualquiera de las aplicaciones
        desarrolladas por <strong>Pablo Briceño Dev</strong> (en adelante, «el
        Desarrollador»), aceptas quedar vinculado por estos Términos y
        Condiciones. Si no estás de acuerdo, no uses las aplicaciones.
      </Typography>

      <Typography variant="h2" gutterBottom>
        2. Descripción de las aplicaciones
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Las aplicaciones ofrecidas por el Desarrollador son herramientas
        diseñadas para facilitar diversas tareas cotidianas. Cada aplicación
        puede tener funcionalidades específicas, pero todas comparten el
        compromiso con la privacidad y la seguridad de tus datos.
      </Typography>

      <Typography variant="h2" gutterBottom>
        3. Propiedad intelectual
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Todo el contenido, código, diseño y marcas relacionadas con las
        aplicaciones son propiedad de <strong>Pablo Briceño Dev</strong> o de
        sus licenciantes. No se concede ningún derecho de uso comercial,
        reproducción o distribución sin autorización expresa.
      </Typography>

      <Typography variant="h2" gutterBottom>
        4. Uso de las aplicaciones
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          Debes ser mayor de edad o contar con el consentimiento de tus
          padres/tutores para usar las aplicaciones.
        </BulletItem>
        <BulletItem>
          Eres responsable de la confidencialidad de tu dispositivo y de las
          credenciales de terceros (como Google Drive) si las usas.
        </BulletItem>
        <BulletItem>
          No está permitido usar las aplicaciones para fines ilegales o
          fraudulentos.
        </BulletItem>
      </BulletList>

      <Typography variant="h2" gutterBottom>
        5. Protección de datos y biometría
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Algunas aplicaciones pueden ofrecer la opción de desbloqueo mediante{" "}
        <strong>biometría</strong> (huella dactilar o reconocimiento facial).
        Esta funcionalidad es <strong>opcional</strong> y se ejecuta
        íntegramente en tu dispositivo.{" "}
        <strong>No almacenamos ni transmitimos</strong> tus datos biométricos en
        ningún momento.
      </Typography>

      <Typography variant="h2" gutterBottom>
        6. Sincronización con servicios de terceros
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Si alguna aplicación ofrece sincronización en la nube (por ejemplo, con
        Google Drive), esta es <strong>voluntaria</strong> y solo tú tienes
        acceso a tus datos. No compartimos ni accedemos a tu información
        almacenada en dichos servicios.
      </Typography>

      <Typography variant="h2" gutterBottom>
        7. Limitación de responsabilidad
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Las aplicaciones se proporcionan «tal cual». No garantizamos que estén
        libres de errores o que sean ininterrumpidas. En ningún caso el
        Desarrollador será responsable por daños directos, indirectos o
        consecuentes derivados del uso de las aplicaciones.
      </Typography>

      <Typography variant="h2" gutterBottom>
        8. Modificaciones
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Nos reservamos el derecho de actualizar estos términos en cualquier
        momento. La versión vigente siempre estará disponible en este enlace. El
        uso continuado de las aplicaciones tras los cambios implica tu
        aceptación de los mismos.
      </Typography>

      <Box
        sx={{
          bgcolor: "background.paper",
          p: "13px 18px", // o py: 2, px: 2.5
          borderRadius: 1, // 8px con el theme por defecto
          border: "1px solid",
          borderColor: "divider",
          mb: 3,
          borderLeft: "3px solid",
        }}
      >
        <Typography
          align="left"
          sx={{
            mb: 1,
            color: "primary.main",
            fontSize: "1.1rem",
          }}
        >
          <strong>Última actualización:</strong> 6 de agosto de 2026.
        </Typography>
      </Box>
    </Box>
  );
};
