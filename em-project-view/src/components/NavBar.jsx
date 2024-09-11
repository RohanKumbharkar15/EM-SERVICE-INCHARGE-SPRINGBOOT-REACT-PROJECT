import React from "react";
import "../App.css";

function NavBar() {
  return (
    <>
      <nav className="bg-secondary pt-3 pb-3 ">
        <div className="container d-flex justify-content-between align-items-center ">
          <div className="d-flex gap-3 align-items-center">
            <span className="fs-2  nav1">
              <i class="bi bi-people"></i>
            </span>
            <h2 className="fst-italic fw-bold  m-0 nav1">EM Service</h2>
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="nav1">
              Home
            </a>
            <a href="#" className="nav1">
              Profile
            </a>
            <a href="#" className="nav1">
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
