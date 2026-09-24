import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si hay hash, scroll al elemento correspondiente
    if (hash) {
      const id = hash.replace("#", "");
      // Pequeño delay para asegurar que el DOM ya renderizó
      const timeout = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);

      return () => clearTimeout(timeout);
    }

    // Si no hay hash, scroll al top al cambiar de ruta
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
}
