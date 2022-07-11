import React from "react";
import { toast } from "react-toastify";
import { useUserContext } from "../../context/UserContext";
import ProductService from "../../services/prouctService";
import UpdateProductModalButton from "../ModalButton/UpdateProductModalButton";
import "./ProductCard.scss";

function ProductCard({item}) {

    const {isLogin,currentUser} = useUserContext();
    
    const deleteProduct = (id) => {
      const productService = new ProductService();
      productService.delete(id).then(res=>toast.success("Başarılı")).catch(err=>toast.error("Başarısız"));
    }

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
      {isLogin && currentUser.userId === item.sellerId && <div className={"cart-detail"}>
        <span onClick={()=>deleteProduct(item.id)}>Sil</span>
        <span><UpdateProductModalButton product={item} text={"Güncelle"} /></span>
      </div>}
      
    </div>
  );
}

export default ProductCard;
