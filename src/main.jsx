import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {HomeBody} from './components'
import CartPage from './components/CartPage.jsx'
import ProductsPage from './components/ProductsPage.jsx'
import { HashRouter } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>} >
      <Route path='' element = {<HomeBody />} ></Route>
      <Route path='cart' element = {<CartPage />} ></Route>
      <Route path='products/:productname' element = {<ProductsPage />} ></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
  
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <HashRouter router = {router} >
//   </HashRouter>
// )