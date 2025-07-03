import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import DashBorad from './componets/Dashboard'
import Layout from './layouts/layout'
import SignInPage from './componets/loginSign/SignUp'
import Login from './componets/loginSign/logIn'
function App() {

  return (
    <div className='w-full h-screen bg-gray-200 '>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Layout type="users" />} />
          <Route path='/products' element={<Layout type="products" />} />
          {/* <Route path='/signIn' element={<SignInPage />} /> */}
          {/* <Route path='/login' element={<Login />} /> */}
        </Routes>

      </BrowserRouter>

    </div >
  )
}

export default App
