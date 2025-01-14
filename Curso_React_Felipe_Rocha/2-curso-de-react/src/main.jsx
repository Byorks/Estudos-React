import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TaskPage from "./pages/TaskPage.jsx"
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateTaskPage from "./pages/UpdateTaskPage.jsx";

const router = createBrowserRouter ([ 
  {
    path: "/",
    element: <App />
  },
  {
    path: "/task",
    element: <TaskPage />
  },
  {
    path: "/taskupdate",
    element: <UpdateTaskPage />
  }
])

// Aqui estamos trazendo o conteúdo de App e implementando com .render onden o elemento escolhido é o Id -> root;
// Estamos renderizando um componente;
// Componentes devem ser sempre com letra maiúscula;
// StrictMdode ajuda no processo de desenvolvimento, mas preciso pesquisar como.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
