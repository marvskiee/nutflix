import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Information from "./components/Information";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mtv/:id" element={<Information />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
