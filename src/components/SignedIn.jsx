import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import UserService from "../services/userServices";

function SignedIn() {

  const navigate = useNavigate();

  const {
    currentUser,
    setCurrentUser,
    setCurrentUserName,
    currentUserName,
    setIsLogin,
  } = useUserContext();

  useEffect(() => {
    const userService = new UserService();
    userService
      .getById(currentUser.userId)
      .then((res) => setCurrentUserName(res.data.data.fullname));
  }, []);

  const logOut = () => {
    setIsLogin(false)
    setCurrentUser({id:"",token:"",fullname:""})
    navigate("/")
  };

  return (
    <div className="signedIn d-flex flex-row gap-3">
      <div>
        <b>{currentUserName}</b>
      </div>
      <Link to={"/products"} className={"link-properties"}>
        <div>Ürün Listesi</div>
      </Link>
      <Link to={"/productadd"} className={"link-properties"}>
        <div>Ürün Ekle</div>
      </Link>
      <a onClick={logOut} className={"log-out"}>Çıkış yap</a>
    </div>
  );
}

export default SignedIn;
