import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<NoPage />} /> */}
    </Routes>
  );
};

export default Routing;
