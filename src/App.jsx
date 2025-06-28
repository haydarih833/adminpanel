import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './componets/Header'
import DashBorad from './componets/Dashboard'
import Layout from './layouts/layout'

function App() {


  return (
    <div className='w-full h-screen bg-gray-200 text-right'>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route path='/' element={<DashBorad />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </div>
  )
}

export default App
