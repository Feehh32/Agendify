import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../components/layouts/MainLayout";
import RegisterPage from "../pages/RegisterPage";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
