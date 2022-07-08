import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/HomePage/Home'
import Login from '../pages/LoginPage/Login'
import Register from '../pages/RegisterPage/Register'

function Dashboard() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default Dashboard