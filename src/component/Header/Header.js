import React from "react";
import "./Header.css";

import Burger from "../Burger/Burger";
import { Link } from "react-router-dom";

import { GiLightSabers } from "react-icons/gi";

export default function Header({ burger }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <h1 className="logo">
            <GiLightSabers className="header-logo-icon" />
            101 Concepts
          </h1>
        </Link>
        <Burger />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <Link to="/" className="header-nav-link">
              <li className="header-nav-list-item">Home</li>
            </Link>
            <Link to="/about" className="header-nav-link">
              <li className="header-nav-list-item">About</li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
