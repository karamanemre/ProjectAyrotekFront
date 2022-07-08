import React from "react";
import { useUserContext } from "../../context/UserContext";
import "./ProductCard.scss";

function ProductCard() {

    const {isLogin,currentUser} = useUserContext();

  return (
    <div className="product-card">
      <div>
        <b>Product Name:</b> Iphone 13
      </div>
      <div>
        {" "}
        <b>Product Description:</b> 128gb hafıza
      </div>
      <div>
        <b>Product Price:</b> 10485$
      </div>
      <div>
        {" "}
        <b>Seller:</b> Emre Karaman
      </div>
      {isLogin && currentUser.id === "1" && <div className={"cart-detail"}>
        <span>Sil</span>
        <span>Güncelle</span>
      </div>}
      
    </div>
  );
}

export default ProductCard;
