import { useFormik } from "formik";
import React from "react";
import Input from "../../components/Input";
import * as Yup from "yup";
import './register.scss'

function Register() {
  let initialValues = {
    username: "",
    password: "",
    fullname:""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan"),
    fullname: Yup.string().required("Zorunlu alan"),
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert("register")
    },
  });

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit}>
        <div className="content">
          <div className="mb-3">
            <Input
              label={"Username"}
              error={errors.username}
              inputType="text"
              name={"username"}
              value={values.username}
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
            <button className="btn btn-outline-primary w-100" type="submit" disabled={errors.password || errors.username}>
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
