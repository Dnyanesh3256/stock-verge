import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_page/home/HomePage'
import AboutPage from "./landing_page/about/AboutPage"
import SignupPage from "./landing_page/signup/SignupPage"
import PricingPage from './landing_page/pricing/PricingPage'
import ProductsPage from "./landing_page/products/ProductsPage"
import SupportPage from "./landing_page/support/SupportPage"
import NotFound from "./landing_page/NotFound"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/pricing' element={<PricingPage/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
