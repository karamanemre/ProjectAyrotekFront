import React from "react";
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import "./login.scss";
import UserService from '../../services/userServices.js'
import { toast } from "react-toastify";
import { Navigate, Redirect, useNavigate } from 'react-router-dom';
import {useUserContext} from "../../context/UserContext"

function Login() {

  const navigate = useNavigate();
  const {setIsLogin,setCurrentUser} = useUserContext();

  let initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan"),
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const userService = new UserService()
      userService.login(values).then(res=>{
        toast.success("Giriş başarılı")
        setCurrentUser(res.data.data)
        setIsLogin(true)
        navigate("/")
      }).catch(err=>{
        toast.error("Giriş başarısız")
      })
    },
  });

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="mb-3">
            <Input
              label={"Username"}
              error={errors.email}
              inputType="text"
              name={"email"}
              value={values.email}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              label={"Password"}
              error={errors.password}
              inputType="password"
              name={"password"}
              value={values.password}
              handleChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-primary w-100" type="submit" disabled={errors.password || errors.username}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
