const { createContext, useState, useContext } = require("react");

const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [products,setProducts] = useState([]);


  const values = {
    products,setProducts
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}