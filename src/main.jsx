import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <ToastContainer position='top-right' autoClose={3000} />
        <App />
      </Provider>
    </ThemeProvider>

  </React.StrictMode>,
)
