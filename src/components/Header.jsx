import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
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
      </div>
    </div>
  );
}

export default Header;
