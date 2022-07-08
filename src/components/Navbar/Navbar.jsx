import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "../SignedIn";
import SignedOut from "../SignedOut";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to={"/"}>
          {" "}
          <img src="./logo.png" />
        </Link>
      {true ?  <SignedOut/> : <SignedIn/>}
      </div>
    </div>
  );
}

export default Navbar;
