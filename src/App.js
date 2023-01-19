import React from "react";
import CVEspanol from "./components/CVEspanol";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CVEnglish from "./components/CVEnglish";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"></header>
        <Routes>
          <Route path="/" element={<CVEspanol />} />
          <Route path="/eng" element={<CVEnglish />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
