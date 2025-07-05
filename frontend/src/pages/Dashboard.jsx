import React from "react";
import { useAuth } from "../contexts/AuthContext";
import usePageTitle from "../hooks/usePageTitle";

const Dashboard = () => {
  const { user } = useAuth();
  usePageTitle(`Bem vindo, ${user.name}`);

  return <div>Dashboard</div>;
};

export default Dashboard;
