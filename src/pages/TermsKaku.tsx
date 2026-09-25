import Box from "@mui/material/Box";
import React from "react";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Typography from "@mui/material/Typography";
import { BulletItem, BulletList } from "../components/layouts/BulletList";

export const TermsKaku: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Términos y Condiciones · kaku Budget</SectionLabel>

      <Typography variant="h2" gutterBottom>
        1. Aceptación de los términos
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Al descargar, instalar o utilizar la aplicación{" "}
        <strong>kaku Budget</strong> (en adelante, «la App»), aceptas quedar
        vinculado por estos Términos y Condiciones. Si no estás de acuerdo, no
        uses la App.
      </Typography>

      <Typography variant="h2" gutterBottom>
        2. Descripción de la App
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        kaku Budget es una herramienta de gestión financiera personal diseñada
        para ayudarte a registrar y controlar tus ingresos y gastos de forma
        sencilla y segura. La App opera principalmente{" "}
        <strong>sin conexión</strong> y almacena tus datos de manera local en tu
        dispositivo.
      </Typography>

      <Typography variant="h2" gutterBottom>
        3. Propiedad intelectual
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Todo el contenido, código, diseño y marcas relacionadas con kaku Budget
        son propiedad de <strong>Pablo Briceño Dev</strong> o de sus
        licenciantes. No se concede ningún derecho de uso comercial,
        reproducción o distribución sin autorización expresa.
      </Typography>

      <Typography variant="h2" gutterBottom>
        4. Uso de la App
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          Debes ser mayor de edad o contar con el consentimiento de tus
          padres/tutores para usar la App.
        </BulletItem>
        <BulletItem>
          Eres responsable de la confidencialidad de tu dispositivo y de las
          credenciales de tu cuenta de Google (si usas la sincronización con
          Drive).
        </BulletItem>
        <BulletItem>
          No está permitido usar la App para fines ilegales o fraudulentos.
        </BulletItem>
      </BulletList>

      <Typography variant="h2" gutterBottom>
        5. Protección biométrica
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        La App puede ofrecer la opción de desbloqueo mediante{" "}
        <strong>biometría</strong> (huella dactilar o reconocimiento facial).
        Esta funcionalidad es <strong>opcional</strong> y se ejecuta
        íntegramente en tu dispositivo.{" "}
        <strong>No almacenamos ni transmitimos</strong> tus datos biométricos en
        ningún momento.
      </Typography>

      <Typography variant="h2" gutterBottom>
        6. Sincronización con Google Drive
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Si activas la sincronización, la App creará copias de seguridad de tus
        datos en tu propia cuenta de Google Drive. Esto es{" "}
        <strong>voluntario</strong> y solo tú tienes acceso a esos archivos. No
        compartimos ni accedemos a tu información almacenada en Drive.
      </Typography>

      <Typography variant="h2" gutterBottom>
        7. Limitación de responsabilidad
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        kaku Budget se proporciona «tal cual». No garantizamos que la App esté
        libre de errores o que sea ininterrumpida. En ningún caso seremos
        responsables por daños directos, indirectos o consecuentes derivados del
        uso de la App.
      </Typography>

      <Typography variant="h2" gutterBottom>
        8. Modificaciones
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Nos reservamos el derecho de actualizar estos términos en cualquier
        momento. La versión vigente siempre estará disponible en este enlace. El
        uso continuado de la App tras los cambios implica tu aceptación de los
        mismos.
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
