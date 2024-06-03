import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <h1>
        <Link to={"/"}>
          <img src="/logo.webp" alt="캐치시큐" />
        </Link>
      </h1>
      <Nav></Nav>
    </header>
  );
}

export default Header;
