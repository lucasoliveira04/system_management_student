import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppProviders from "./context/AppProviders";
import { AppRoutes } from "./Routes";

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

function AppContent() {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = "Jorgina";
        document.title = `${getPageTitle()} | ${baseTitle}`;
    }, [location]);

    const getPageTitle = () => {
        switch (location.pathname) {
            case "/home-admin":
                return "Home";
            case "/auth":
                return "Login";
            default:
                return "Página";
        }
    };

    return (
        <AppProviders>
            <Helmet>
                <title>{getPageTitle()} | Jorgina</title>
            </Helmet>
            <AppRoutes />
        </AppProviders>
    );
}

export default App;
