import React from "react";
import { Route, Routes } from "react-router-dom";
import GymOne from "./pages/GymOne";
import Organizze from "./pages/Organizze";

const Router = () => {
  return (
    <Routes>
      <Route path="/organizze" element={<Organizze />} />
      <Route path="/gymone" element={<GymOne />} />
    </Routes>
  );
};

export default Router;
