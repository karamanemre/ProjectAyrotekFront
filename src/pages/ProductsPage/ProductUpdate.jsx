import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import "./Products.scss";
import { useParams } from "react-router";
import { useProductContext } from "../../context/ProductContext";
import { toast } from "react-toastify";
import ProductService from "../../services/prouctService";

function ProductUpdate() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { products } = useProductContext();
  const [spinner, setSpinner] = useState();

  useEffect(() => {
    products.map((item) => {
     if( item.id === parseInt(id)){
      changeValue(item);
      setProduct(item)
     }
    });
  },[id]);

  let initialValues = {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    sellerId: product.sellerId,
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
      console.log(values);
        setSpinner(true);
        console.log(values);
        const productService = new ProductService();
        productService
          .update(values)
          .then((res) => toast.success("Başarıyla güncellendi"))
          .catch((err) => toast.error("İşlem başarısız."));
        setSpinner(false);
    },
  });

  const changeValue = value => {
    values.id = value.id
    values.description=value.description
    values.name=value.name
    values.sellerId=value.sellerId
    values.price=value.price
  }

  return (
    <div className="product-add">
      <div className="content-modal">
        <form onSubmit={handleSubmit} className="form">
          <div className="content">
            <div className="product-title">Product Update</div>
            <div className="mb-3 product-div">
            <input
              name={"name"}
              onChange={handleChange}
              value={values.name}
              type={"text"}
              className={"form-control"}
              placeholder={"label"}
              defaultValue={product.name} 
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
        </form> 
      </div>
    </div>
  );
}

export default ProductUpdate;
