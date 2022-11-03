import { ArrowSquareOut } from "phosphor-react";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import GymOne from "./pages/GymOne";
import Home from "./pages/Home";
import Organizze from "./pages/Organizze";

const Router = () => {
  return (
    <div>
      <nav
        className="py-8 px-6 md:px-16 flex items-center justify-between
      bg-white"
      >
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <div className="flex gap-10">
          <Link to="/organizze" target={"_blank"}>Organizze</Link>
          <Link to="/gymone">GynOne</Link>
          <a
            href="https://greenlp-react.vercel.app/"
            target="_blanck"
            className="flex items-center justify-center gap-2"
          >
            GreenOne <ArrowSquareOut size={18} />
          </a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizze" element={<Organizze />} />
        <Route path="/gymone" element={<GymOne />} />
      </Routes>
    </div>
  );
};

export default Router;
