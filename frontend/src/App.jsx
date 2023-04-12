import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pags/home/HomePage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
