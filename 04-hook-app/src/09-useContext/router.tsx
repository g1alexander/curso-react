import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";

import { AboutPage, HomePage, LoginPage, MainApp } from ".";

export const routes: RouteObject[] = [
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
];

export const router = createBrowserRouter(routes);
