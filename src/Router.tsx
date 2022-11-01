import React from "react";
import { Route, Routes } from "react-router-dom";
import Organizze from "./Pages/Organizze";

const Router = () => {
  return (
    <Routes>
      <Route path="/organizze" element={<Organizze />} />
    </Routes>
  );
};

export default Router;
