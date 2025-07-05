import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoutes";
import Dashboard from "../pages/Dashboard";
import PublicRoute from "./PublicRoute";
import About from "../pages/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route path="about" element={<About />} />

        <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
