import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useProductContext } from "../../context/ProductContext";
import { useUserContext } from "../../context/UserContext";
import ProductService from "../../services/prouctService";
import UpdateProductModalButton from "../ModalButton/UpdateProductModalButton";
import "./ProductCard.scss";

function ProductCard({ item }) {
  const { isLogin, currentUser } = useUserContext();
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    const productService = new ProductService();
    productService
      .delete(id)
      .then((res) => toast.success("Başarılı"))
      .catch((err) => toast.error("Başarısız"));
  };

  return (
    <div className="product-card">
      <div>
        <b>Product Name:</b> {item.name}
      </div>
      <div>
        {" "}
        <b>Product Description:</b> {item.description}
      </div>
      <div>
        <b>Product Price:</b> {item.price}
      </div>
      <div>
        {" "}
        <b>Seller:</b> Emre Karaman
      </div>
      {isLogin && currentUser.userId === item.sellerId && (
        <div className={"cart-detail"}>
          <span onClick={() => deleteProduct(item.id)}>Sil</span>
          <span onClick={()=>navigate(`/productupdate/${item.id}`)}>
           Güncelle
          </span>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
