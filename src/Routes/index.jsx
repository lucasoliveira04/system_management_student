import {Navigate, Route, Routes} from "react-router-dom";
import {HomePageAdmin} from "../pages/HomeAdminPage";
import PrivateRoute from "./PrivateRoute";
import {NotFoundPage} from "../pages/NotFoundPage.jsx";
import {AuthPage} from "../pages/AuthPage.jsx";

const routes = [
    {
        path: "/",
        element: <Navigate to="/auth" />,
    },
    {
        path: "/auth",
        element: <AuthPage/>,
    },
    {
        path: "/home-admin",
        element: (
            <PrivateRoute>
                <HomePageAdmin />
            </PrivateRoute>
        ),
    },
    {
       path: "/notfound",
        element: (
            <PrivateRoute>
                <NotFoundPage />
            </PrivateRoute>
        )
    },
];

export const AppRoutes = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    );
};
