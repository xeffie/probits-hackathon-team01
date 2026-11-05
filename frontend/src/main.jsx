import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReflectionProvider } from "./context/ReflectionProvider";
import routing from "./router.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReflectionProvider>
      <RouterProvider router={routing} />
    </ReflectionProvider>
  </StrictMode>,
);