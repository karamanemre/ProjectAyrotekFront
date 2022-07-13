import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import Input from "../Input";
import "./modalbutton.scss";
import * as Yup from "yup";
import ProductService from "../../services/prouctService";
import { toast } from "react-toastify";
import { useUserContext } from "../../context/UserContext";
import { useProductContext } from "../../context/ProductContext";

function ModalButton({ text }) {
  const [spinner, setSpinner] = useState();

  let initialValues = {
    name: "",
    description: "",
    price: "",
    sellerId: "",
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
      setSpinner(true);
      const productService = new ProductService();
      productService
        .update(values)
        .then((res) => toast.success("Başarıyla eklendi"))
        .catch((err) => toast.error("İşlem başarısız."));
      setSpinner(false);
    },
  });
  
  return (
    <div id="modal-button-container">
      <div className="container">
        <div className="interior">
          <a href="#open-modal">{"Edit Product"}</a>
        </div>
      </div>
      <div id="open-modal" className="modal-window">
        <div>
          <a href="#" title="Close" className="modal-close text-primary">
            {"Close"}
          </a>

          <form onSubmit={handleSubmit}>
            <h2 className="mb-5 mt-3"> {"Edit Product"}</h2>

            <div className="text-dark">
              <div className="content">
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
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalButton;
