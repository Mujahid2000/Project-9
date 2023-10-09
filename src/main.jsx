import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import AuthProvide from './Providers/AuthProvide'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
    <RouterProvider router={routes}></RouterProvider>
    </AuthProvide>
  </React.StrictMode>,
)
