import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthPage } from "../pages/AuthPage"

export const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    );
  };