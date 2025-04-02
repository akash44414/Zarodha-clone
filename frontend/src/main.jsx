import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

// import HomePage from './landingPage/home/HomePage'
import Navbar from './landingPage/navbar'
import Footer from './landingPage/footer'
// import signup from './landingPage/Sigup'
// import Signup from './landingPage/signup/sigup'
import {  BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom'

import Home from './landingPage/home/HomePage'
import About from './landingPage/about/About'
import Support from './landingPage/support/Support'
// import Contact from './landingPage/contact/Contact'
import Products from './landingPage/products/Products'
import Pricing from './landingPage/pricing/Pricing'
import Signup from './landingPage/signup/Signup'
import Signups from './landingPage/signup'

// import routeres


createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/support" element={<Support />} />
    {/* <Route path="/contact" element={<Contact />} />      */}
    <Route path="/products" element={<Products />} />
    <Route path="/pricing" element={<Pricing />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signups" element={<Signups />} />
    <Route path="*" element={<Home />} />
  </Routes>
  <Footer />
 </BrowserRouter>
);
