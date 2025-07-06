import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import Layout from './layouts/layout'
import SignIn from './componets/pagesAuth'
import PrivateRoute from './componets/PrivateRoute'
import SignUp from './signup'
function App() {

  return (
    <div className='w-full h-screen bg-gray-200 '>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/users' element={
            <PrivateRoute>
            <Layout type="users" />
            </PrivateRoute>
          } />
          <Route path='/products' element={
            <PrivateRoute>
            <Layout type="products" />
             </PrivateRoute>
          } />
          <Route path='/*' element={
            <PrivateRoute>
              
            </PrivateRoute>
          } />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
