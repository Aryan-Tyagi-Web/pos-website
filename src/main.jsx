import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

import Products from './pages/Products.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import Solutions from './pages/Solutions.jsx'
import SolutionDetail from './pages/SolutionDetail.jsx'
import Industries from './pages/Industries.jsx'
import IndustryDetail from './pages/IndustryDetail.jsx'
import Company from './pages/Company.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/products" element={<Products />} />

        <Route path="/products/:slug" element={<ProductDetail />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/solutions/:slug" element={<SolutionDetail />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/industries/:slug" element={<IndustryDetail />} />

        <Route path="/company" element={<Company />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy" element={<Privacy />} />
        
        <Route path="/terms" element={<Terms />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)