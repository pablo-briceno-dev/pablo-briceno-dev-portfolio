import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../components/layouts/Navbar";
import { Home } from "../pages/Home";
import { Privacy } from "../pages/Privacy";
import { PrivacyKaku } from "../pages/PrivacyKaku";
import { PrivacyRutaPlaca } from "../pages/PrivacyRutaPlaca";
import { Support } from "../pages/Support";
import { SupportKaku } from "../pages/SupportKaku";
import { Terms } from "../pages/Terms";
import { TermsKaku } from "../pages/TermsKaku";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Home /> },
      { path: "support", element: <Support /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy-policy", element: <PrivacyRutaPlaca /> },
      { path: "privacy-policy-kaku", element: <PrivacyKaku /> },
      { path: "support-kaku", element: <SupportKaku /> },
      { path: "terms-kaku", element: <TermsKaku /> },
    ],
  },
]);
