import React from "react";
import { Link } from "react-router-dom";

function SignedOut() {
  return (
    <div className="menu-items">
      {" "}
      <div className="item">
        <Link to={"/products"} className="link-properties">
          Products{" "}
        </Link>
      </div>
      <div className="item">
        <Link to={"/login"} className="link-properties">
          Login
        </Link>{" "}
      </div>
      <div className="item">
        <Link to={"/register"} className="link-properties">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SignedOut;
