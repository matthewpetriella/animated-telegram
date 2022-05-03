import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";

function Header() {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1 className="title">Sweet Treats</h1>
        </Link>

        <nav className="navigation">
          <div className="home-nav">YO Yo</div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
