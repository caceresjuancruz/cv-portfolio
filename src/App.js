import React from "react";
import CVEspanol from "./components/CVEspanol";
import { GrDocumentPdf, GrDownload } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="row">
        <div className="col-12 text-end">
          <button className="btn btn-sm btn-light text-secondary me-2 mt-2">
            ESP
          </button>
          <button className="btn btn-sm btn-light text-secondary me-2 mt-2">
            ENG
          </button>
          <button className="btn btn-sm btn-light text-secondary me-2 mt-2">
            <GrDownload className="me-1" />
            <GrDocumentPdf />
          </button>
        </div>
      </div>
      <CVEspanol />
    </div>
  );
}

export default App;
