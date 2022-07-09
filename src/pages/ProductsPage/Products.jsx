import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import { useProductContext } from '../../context/ProductContext'
import ProductService from '../../services/prouctService'
import './Products.scss'

function Products() {

 const {setProducts,products} =useProductContext()

  useEffect(()=>{
    const productService = new ProductService();
    productService.getAll().then(res =>{
      setProducts(res.data.data)
    });
  },[])

  return (
    <div className='products-page container'>
    {products.map(item => (
      <ProductCard item={item} />
    ))}
     
    </div>
  )
}

export default Products