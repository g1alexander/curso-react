import { Navigate, createBrowserRouter } from "react-router-dom";

import { AboutPage, HomePage, LoginPage, MainApp } from ".";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <LoginPage />,
  // },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);
