import Box from "@mui/material/Box";
import React from "react";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Typography from "@mui/material/Typography";
import { ImportantSection } from "../components/layouts/ImportantSection";
import Link from "@mui/material/Link";
import { BulletItem, BulletList } from "../components/layouts/BulletList";

export const PrivacyKaku: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Política de Privacidad · kaku Budget</SectionLabel>

      <Typography variant="h2" gutterBottom>
        Compromiso con tu privacidad
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        En <strong>kaku Budget</strong>, la privacidad de tus datos es nuestra
        prioridad. Esta política explica cómo manejamos la información cuando
        usas nuestra aplicación.
      </Typography>

      <ImportantSection
        title={<strong>Resumen rápido</strong>}
        content={
          <>
            No recopilamos ningún dato personal. Toda tu información financiera
            permanece <strong>en tu dispositivo</strong>. La biometría y la
            sincronización con Drive son opcionales y seguras.
          </>
        }
      />

      <Typography variant="h2" gutterBottom>
        1. Datos que no recopilamos
      </Typography>
      <BulletList sx={{ mb: 3 }}>
        <BulletItem>
          <strong>Información personal:</strong> nombres, correos electrónicos,
          números de teléfono, direcciones, etc.
        </BulletItem>
        <BulletItem>
          <strong>Datos financieros:</strong> saldos, transacciones, categorías,
          notas o cualquier otro dato que ingreses en la App.
        </BulletItem>
        <BulletItem>
          <strong>Ubicación:</strong> no solicitamos ni accedemos a tu ubicación
          geográfica.
        </BulletItem>
        <BulletItem>
          <strong>Identificadores de dispositivo:</strong> no recogemos el IMEI,
          dirección MAC ni otros identificadores únicos.
        </BulletItem>
      </BulletList>

      <Typography variant="h2" gutterBottom>
        2. Uso de la biometría
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        La App puede ofrecer un bloqueo adicional mediante{" "}
        <strong>huella dactilar o reconocimiento facial</strong>. Esta
        característica es <strong>opcional</strong> y está gestionada por el
        sistema operativo de tu dispositivo.
        <strong>No almacenamos, procesamos ni transmitimos</strong> tus datos
        biométricos en ningún momento.
      </Typography>

      <Typography variant="h2" gutterBottom>
        3. Sincronización con Google Drive
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Si decides activar la copia de seguridad en la nube, la App utilizará
        los servicios de
        <strong>Google Drive</strong> para guardar un archivo cifrado con tus
        datos. Este proceso es <strong>voluntario</strong> y solo tú tienes
        control sobre esos archivos. No tenemos acceso a ellos y no los
        utilizamos para ningún propósito.
      </Typography>

      <Typography variant="h2" gutterBottom>
        4. Permisos de la App
      </Typography>
      <BulletList>
        <BulletItem>
          <strong>Almacenamiento:</strong> solo para importar/exportar archivos
          de copia de seguridad (si lo solicitas).
        </BulletItem>
        <BulletItem>
          <strong>Biometría:</strong> para la autenticación opcional.
        </BulletItem>
        <BulletItem>
          <strong>Internet:</strong> exclusivamente para la sincronización con
          Drive y para comprobar actualizaciones de la App.
        </BulletItem>
      </BulletList>
      <Typography
        variant="body1"
        sx={{ mb: 3, color: "text.secondary", mt: 4 }}
      >
        Ningún permiso se utiliza para recopilar información personal.
      </Typography>

      <Typography variant="h2" gutterBottom>
        5. Servicios de terceros
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        La única integración externa es con <strong>Google Drive</strong> (para
        copias de seguridad) y<strong>Google Play</strong> (para distribución y
        actualizaciones). Cada uno de estos servicios tiene sus propias
        políticas de privacidad, que te recomendamos revisar.
      </Typography>

      <Typography variant="h2" gutterBottom>
        6. Seguridad
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Implementamos medidas técnicas para proteger tus datos locales. Sin
        embargo, ninguna transmisión por Internet o almacenamiento electrónico
        es 100% seguro. Recuerda que la responsabilidad de mantener segura tu
        cuenta de Google (si usas Drive) es tuya.
      </Typography>

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
          <strong>Última actualización:</strong> 6 de agosto de 2026.
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
