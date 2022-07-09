import React from "react";
import { useUserContext } from "../../context/UserContext";
import "./ProductCard.scss";

function ProductCard({item}) {

    const {isLogin,currentUser} = useUserContext();

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
      {isLogin && currentUser.id === item.sellerId && <div className={"cart-detail"}>
        <span>Sil</span>
        <span>Güncelle</span>
      </div>}
      
    </div>
  );
}

export default ProductCard;
