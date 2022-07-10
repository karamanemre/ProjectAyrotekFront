import React, { useState } from "react";
import { useFormik, Form, Formik } from "formik";
import * as Yup from "yup";
import { useUserContext } from "../../context/UserContext";
import ProductService from "../../services/prouctService";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import './Products.scss'

function ProductAdd() {
  const { currentUser } = useUserContext();
  const [spinner, setSpinner] = useState();

  let initialValues = {
    name: "",
    description: "",
    price: "",
    sellerId: currentUser.userId,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Zorunlu alan"),
    description: Yup.string().required("Zorunlu alan"),
    price: Yup.string().required("Zorunlu alan"),
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(currentUser.userId);
      setSpinner(true);
      const productService = new ProductService();
      values.sellerId = currentUser.userId;
      productService
        .save(values)
        .then((res) => toast.success("Başarıyla eklendi"))
        .catch((err) => toast.error("İşlem başarısız."));
      setSpinner(false);
    },
  });

  return (
    <div className="product-add">
      <form onSubmit={handleSubmit} className="form">
        <div className="content">
          <div className="product-title">Product Add</div>
          <div className="mb-3 product-div">
            <Input
              label={"Product Name"}
              error={errors.name}
              inputType="text"
              name={"name"}
              value={values.name}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              label={"Product Description"}
              error={errors.description}
              inputType="text"
              name={"description"}
              value={values.description}
              handleChange={handleChange}
            />
          </div>
          <div>
            <Input
              label={"Product Price"}
              error={errors.price}
              inputType="text"
              name={"price"}
              value={values.price}
              handleChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-primary w-100"
              type="submit"
              disabled={spinner}
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd;
