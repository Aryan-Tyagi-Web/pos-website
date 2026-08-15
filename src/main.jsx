import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import App from './App.jsx'

import Products from './pages/Products.jsx'
import Solutions from './pages/Solutions.jsx'
import Industries from './pages/Industries.jsx'
import Company from './pages/Company.jsx'

const isGitHubPages =
  window.location.hostname.endsWith('github.io')

const basename = isGitHubPages ? '/pos-website' : '/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/products" element={<Products />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/industries" element={<Industries />} />

        <Route path="/company" element={<Company />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)