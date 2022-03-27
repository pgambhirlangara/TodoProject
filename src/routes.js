import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/user/login";
import Signup from "./components/user/signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
