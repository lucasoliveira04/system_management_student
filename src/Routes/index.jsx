import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import { HomePageAdmin } from "../pages/HomeAdminPage";
import PrivateRoute from "./PrivateRoute";

const routes = [
  {
    path: "/",
    element: <Navigate to={"/auth"}/>
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/home-admin",
    element: (
      <PrivateRoute>
        <HomePageAdmin/>
      </PrivateRoute>
    )
  }
]

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) =>(
            <Route
              key={index}
              path={route.path}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    );
  };