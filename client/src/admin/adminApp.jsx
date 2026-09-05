import { Routes, Route } from "react-router-dom";

import "./admin.css";

import Login from "./components/pages/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/layout/AdminLayout";

import Dashboard from "./components/pages/Dashboard/Dashboard";
import Projects from "./components/pages/Projects/Project";
function AdminApp() {
  return (
    <Routes>
      <Route index element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route
            path="dashboard"
            element={<Dashboard/>}
          />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminApp;