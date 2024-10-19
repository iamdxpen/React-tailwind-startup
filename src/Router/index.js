import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages";

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
