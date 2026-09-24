import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { BulletItem, BulletList } from "../components/layouts/BulletList";
import { ImportantSection } from "../components/layouts/ImportantSection";
import { SectionLabel } from "../components/layouts/SectionLabel";
import Link from "@mui/material/Link";

export const Privacy: React.FC = () => {
  return (
    <Box>
      <SectionLabel>Política de Privacidad</SectionLabel>

      <Typography variant="h2" gutterBottom>
        Compromiso con tu privacidad
      </Typography>

      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        En <strong>Pablo Briceño Dev</strong>, la privacidad de tus datos es
        nuestra prioridad. Esta política explica cómo manejamos la información
        cuando usas cualquiera de nuestras aplicaciones.
      </Typography>

      <ImportantSection
        title={<strong>Resumen rápido</strong>}
        content={
          <>
            No recopilamos ningún dato personal. Toda tu información permanece{" "}
            <strong>en tu dispositivo</strong>. La biometría y las
            sincronizaciones con la nube (si existen) son opcionales y seguras.
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
          <strong>Datos financieros o de cualquier otro tipo</strong> que
          introduzcas en las aplicaciones.
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
        Algunas aplicaciones pueden ofrecer un bloqueo adicional mediante{" "}
        <strong>huella dactilar o reconocimiento facial</strong>. Esta
        característica es <strong>opcional</strong> y está gestionada por el
        sistema operativo de tu dispositivo.
        <strong>No almacenamos, procesamos ni transmitimos</strong> tus datos
        biométricos en ningún momento.
      </Typography>

      <Typography variant="h2" gutterBottom>
        3. Sincronización con servicios de terceros
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "text.secondary" }}>
        Si alguna aplicación ofrece copias de seguridad en la nube (por ejemplo,
        con <strong>Google Drive</strong>), esta funcionalidad es{" "}
        <strong>voluntaria</strong> y solo tú tienes control sobre esos
        archivos. No tenemos acceso a ellos y no los utilizamos para ningún
        propósito.
      </Typography>

      <Typography variant="h2" gutterBottom>
        4. Permisos de las aplicaciones
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
          <strong>Internet:</strong> exclusivamente para funciones que requieren
          conexión (sincronización, actualizaciones, etc.).
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
        Las aplicaciones pueden integrarse con servicios como{" "}
        <strong>Google Play</strong> (distribución y actualizaciones) y{" "}
        <strong>Google Drive</strong> (copias de seguridad). Cada uno de estos
        servicios tiene sus propias políticas de privacidad, que te recomendamos
        revisar.
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
        significativos a través de las aplicaciones o por correo electrónico (si
        nos has proporcionado uno para soporte).
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
