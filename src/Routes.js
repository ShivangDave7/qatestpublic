import React from "react";
import MyAccount from "pages/MyAccount";
import SignUp from "pages/SignUp";
import Login from "pages/Login";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
