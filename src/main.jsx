import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login/index'
import GlobalStyle from './styles/globalStyles'
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer autoClose={4000} />
    <GlobalStyle/>
    <Login />
  </React.StrictMode>,
)
