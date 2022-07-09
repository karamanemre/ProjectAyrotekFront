import React from 'react'
import { Route, Routes } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Home from '../pages/HomePage/Home'
import Login from '../pages/LoginPage/Login'
import Products from '../pages/ProductsPage/Products'
import Register from '../pages/RegisterPage/Register'

function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Routes>
       
       <Route path='/' element={<Home/>} />
       <Route path='/products' element={<Products/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
   </Routes>
    </div>
   
  )
}

export default Dashboard