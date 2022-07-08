import React from "react";
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import "./login.scss";

function Login() {
  let initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Zorunlu alan"),
    password: Yup.string().required("Zorunlu alan"),
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      alert("sad");
    },
  });

  return (
    <div className="login-page">
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
