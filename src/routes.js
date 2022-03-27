import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/user/login";
import Signup from "./components/user/signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
