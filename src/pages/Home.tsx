import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10">
      <h1>Home</h1>
      <div className="flex gap-10 mt-10">
        <Link to="/organizze">Organizze</Link>
        <Link to="/gymone">GynOne</Link>
      </div>
    </div>
  );
};

export default Home;
