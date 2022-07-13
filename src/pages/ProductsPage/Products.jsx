import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProductContext } from "../../context/ProductContext";
import ProductService from "../../services/prouctService";
import "./Products.scss";

function Products() {
  const { setProducts, products } = useProductContext();

  useEffect(() => {
    const productService = new ProductService();
    productService.getAll().then((res) => {
      setProducts(res.data.data);
    });
  }, [products.length]);

  return (
    <div className="products-page container">
      {products.length < 1 && (
        <div className="d-flex justify-content-center w-100 bg-d">
          <img src="./not-found.jpg"></img>
        </div>
      )}
      {products.map((item,key) => (
        <div>
          <ProductCard key={key} item={item} />
        </div>
      ))}
    </div>
  );
}

export default Products;
