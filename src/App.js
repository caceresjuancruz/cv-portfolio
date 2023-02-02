import React from "react";
import CVEspanol from "./components/CVEspanol";
import { Routes, Route } from "react-router-dom";
import CVEnglish from "./components/CVEnglish";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Routes>
        <Route path="/" element={<CVEspanol />} />
        <Route path="/eng" element={<CVEnglish />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
