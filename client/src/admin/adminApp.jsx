import { Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login/Login";

function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default AdminApp;