import React from "react";
import CVEspanol from "./components/CVEspanol";
import { GrDocumentPdf, GrDownload } from "react-icons/gr";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import CVEnglish from "./components/CVEnglish";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header"></header>
        <div className="row">
          <div className="col-12 text-end">
            <NavLink to="/">
              <button className="btn btn-sm btn-light text-secondary me-2 mt-2">
                ESP
              </button>
            </NavLink>
            <NavLink to="/eng">
              <button className="btn btn-sm btn-light text-secondary me-2 mt-2">
                ENG
              </button>
            </NavLink>
            <button className="btn btn-sm btn-light text-secondary me-2 mt-2">
              <GrDownload className="me-1" />
              <GrDocumentPdf />
            </button>
          </div>
        </div>

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
