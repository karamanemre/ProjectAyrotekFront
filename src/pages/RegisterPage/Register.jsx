import { useFormik } from "formik";
import React, { useState } from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
import './register.scss'
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import UserService from "../../services/userServices";
import { useUserContext } from "../../context/UserContext";
import Spinner from '../../components/Spinner'

function Register() {

  const [emailUniqe,setEmaiilUniqe] = useState("");
  const {isLoading,setIsLoading} = useUserContext();
  const [spinner,setSpinner] = useState(false);

  const navigate = useNavigate();

  let initialValues = {
    email: "deneme@gmail.com",
    password: "1",
    fullname:"Emre Karaman"
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Zorunlu alan").email("Lütfen doğru bir email giriniz"),
    password: Yup.string().required("Zorunlu alan"),
    fullname: Yup.string().required("Zorunlu alan"),
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      setSpinner(true)
      const userService = new UserService()
      userService.register(values).then(res=>{
        if(res.status === 409){return setEmaiilUniqe("email alanı uniqe olmalı")}
        toast.success("Kayıt başarılı")
        console.log("sdsd");
        navigate("/login")
      }).catch(err=>{
        console.log(err);
        if(err.response.status === 409){return setEmaiilUniqe(err.response.data.message)}
        toast.error("Kayıt başarısız")
      })
      setSpinner(false)
    },
  });

  const isDisabled = errors.email || errors.fullname || errors.password || emailUniqe || spinner

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit}>
        <div className="content">
        <div className="register-title">Register</div>
          <div className="mb-3">
            <Input
              label={"Email"}
              error={errors.email || emailUniqe}
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
          <div>
            <Input
              label={"Fullname"}
              error={errors.fullname}
              inputType="text"
              name={"fullname"}
              value={values.fullname}
              handleChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-outline-primary w-100" type="submit" disabled={isDisabled}>
             {spinner ? <Spinner/> : "Register"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
