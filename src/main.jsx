import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/home'
import NotFound from './pages/notfound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Restaurants from './pages/restaurants'

const router = createBrowserRouter([
  {
    path: '/',
    element:<HomePage />,
    errorElement:<NotFound />
  },
  {
    path: '/restaurants',
    element:<Restaurants />,
    errorElement:<NotFound />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
