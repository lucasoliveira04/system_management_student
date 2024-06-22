import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"
import { HomePageAdmin } from "../pages/HomeAdminPage";
import PrivateRoute from "./PrivateRoute";

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />

          <Route 
            path="/home-admin" 
            element={
              <PrivateRoute>
                <HomePageAdmin/>
              </PrivateRoute>
            }          
            />
            <Route path="/auth" element={<Navigate to={"/auth"}/>}/>
        </Routes>
      </BrowserRouter>
    );
  };