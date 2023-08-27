import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Beaches from "./pages/Beaches.jsx";
import Mountain from "./pages/Mountain.jsx";
import Birds from "./pages/Birds.jsx";
import Food from "./pages/Food.jsx";
const routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/mountain",
        element: <Mountain />,
      },
      {
        path: "/beaches",
        element: <Beaches />,
      },
      {
        path: "/birds",
        element: <Birds />,
      },
      {
        path: "/food",
        element: <Food />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routerProvider} />
  </React.StrictMode>
);
