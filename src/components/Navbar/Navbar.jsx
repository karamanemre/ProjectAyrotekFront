import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import SignedIn from "../SignedIn";
import SignedOut from "../SignedOut";
import "./navbar.scss";

function Navbar() {

  const {isLogin} = useUserContext();

  return (
    <div className="navbar">
      <div className="container">
        <Link to={"/"}>
          {" "}
          <img src="./logo.png" />
        </Link>
      {!isLogin ?  <SignedOut/> : <SignedIn/>}
      </div>
    </div>
  );
}

export default Navbar;
