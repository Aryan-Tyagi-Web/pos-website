import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const productDetails = {
  sn11: {
    name: 'SN11',
    category: 'MOBILE POS',
    eyebrow: 'MOBILE POS',
    description:
      'Compact Android POS hardware designed for flexible point-of-sale operations and fast customer transactions.',
    features: [
      'Compact mobile form factor',
      'Fast and reliable checkout workflow',
      'Designed for retail and hospitality environments',
      'Easy to integrate into mobile commerce operations',
    ],
    specs: [
      ['Product Type', 'Mobile POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Portable'],
      ['Platform', 'Android'],
      ['Connectivity', 'Wi-Fi / Mobile connectivity'],
    ],
  },
  sn57: {
    name: 'SN57',
    category: 'MOBILE POS',
    eyebrow: 'MOBILE POS',
    description:
      'Portable POS hardware designed to help businesses process transactions efficiently across flexible selling environments.',
    features: [
      'Portable checkout experience',
      'Designed for fast transactions',
      'Flexible business deployment',
      'Suitable for modern commerce workflows',
    ],
    specs: [
      ['Product Type', 'Mobile POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Portable'],
      ['Platform', 'Android'],
      ['Deployment', 'Mobile / Countertop'],
    ],
  },
  sn60: {
    name: 'SN60',
    category: 'MOBILE POS',
    eyebrow: 'MOBILE POS',
    description:
      'Modern mobile commerce hardware built for efficient checkout experiences and flexible customer service.',
    features: [
      'Mobile-first checkout workflow',
      'Modern POS experience',
      'Flexible deployment options',
      'Built for everyday transactions',
    ],
    specs: [
      ['Product Type', 'Mobile POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Portable'],
      ['Platform', 'Android'],
      ['Deployment', 'Mobile'],
    ],
  },
  sn65: {
    name: 'SN65',
    category: 'MOBILE POS',
    eyebrow: 'MOBILE POS',
    description:
      'Flexible mobile POS hardware for retail and hospitality environments where speed, mobility, and dependable checkout matter.',
    features: [
      'Flexible mobile POS format',
      'Fast customer transactions',
      'Designed for retail and hospitality',
      'Easy fit for connected commerce workflows',
    ],
    specs: [
      ['Product Type', 'Mobile POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Portable'],
      ['Platform', 'Android'],
      ['Deployment', 'Mobile / Countertop'],
    ],
  },
  sn80: {
    name: 'SN80',
    category: 'MOBILE POS',
    eyebrow: 'MOBILE POS',
    description:
      'A larger mobile POS format designed for connected commerce workflows and flexible business operations.',
    features: [
      'Larger mobile POS format',
      'Connected commerce workflow',
      'Designed for flexible operations',
      'Suitable for high-use environments',
    ],
    specs: [
      ['Product Type', 'Mobile POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Portable'],
      ['Platform', 'Android'],
      ['Deployment', 'Mobile'],
    ],
  },
  sn200: {
    name: 'SN200',
    category: 'STATIONARY POS',
    eyebrow: 'STATIONARY POS',
    description:
      'Countertop POS hardware built for dependable everyday operations and reliable customer checkout.',
    features: [
      'Stable countertop deployment',
      'Designed for everyday checkout',
      'Reliable business workflow',
      'Suitable for retail and hospitality',
    ],
    specs: [
      ['Product Type', 'Stationary POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Countertop'],
      ['Platform', 'Android'],
      ['Deployment', 'Stationary'],
    ],
  },
  x6: {
    name: 'X6',
    category: 'STATIONARY POS',
    eyebrow: 'STATIONARY POS',
    description:
      'Modular POS hardware designed for flexible Android and Windows setups across modern business environments.',
    features: [
      'Modular POS setup',
      'Flexible deployment',
      'Designed for Android and Windows environments',
      'Adaptable to different business workflows',
    ],
    specs: [
      ['Product Type', 'Stationary POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Countertop'],
      ['Platform', 'Android / Windows'],
      ['Deployment', 'Stationary'],
    ],
  },
  z3: {
    name: 'Z3',
    category: 'STATIONARY POS',
    eyebrow: 'STATIONARY POS',
    description:
      'Professional countertop POS hardware designed for modern business environments and dependable daily operations.',
    features: [
      'Professional countertop design',
      'Reliable checkout workflow',
      'Modern business deployment',
      'Built for everyday operations',
    ],
    specs: [
      ['Product Type', 'Stationary POS'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Countertop'],
      ['Platform', 'Android'],
      ['Deployment', 'Stationary'],
    ],
  },
  'order-taking-tablet': {
    name: 'Order Taking Tablet',
    category: 'ORDER TAKING',
    eyebrow: 'ORDER TAKING',
    description:
      'Tablet-based ordering designed to help teams capture orders efficiently and create a smoother customer experience.',
    features: [
      'Portable order capture',
      'Faster table-side service',
      'Designed for hospitality workflows',
      'Connected ordering experience',
    ],
    specs: [
      ['Product Type', 'Order Taking Tablet'],
      ['Use Case', 'Restaurants & Hospitality'],
      ['Form Factor', 'Tablet'],
      ['Workflow', 'Order Management'],
      ['Deployment', 'Mobile'],
    ],
  },
  'digital-menu-display': {
    name: 'Digital Menu Display',
    category: 'DIGITAL MENU',
    eyebrow: 'DIGITAL MENU',
    description:
      'Digital display hardware for clear, flexible menu presentation, promotions, and customer communication.',
    features: [
      'Clear digital menu presentation',
      'Flexible promotional content',
      'Modern customer-facing display',
      'Designed for commercial environments',
    ],
    specs: [
      ['Product Type', 'Digital Menu Display'],
      ['Use Case', 'Retail & Hospitality'],
      ['Display', 'Digital'],
      ['Content', 'Menu / Promotions'],
      ['Deployment', 'Customer-facing'],
    ],
  },
  c2100: {
    name: 'C2100',
    category: 'KIOSK',
    eyebrow: 'KIOSK',
    description:
      'Self-service kiosk hardware designed for interactive customer experiences and streamlined ordering workflows.',
    features: [
      'Interactive self-service experience',
      'Designed for customer ordering',
      'Streamlined kiosk workflow',
      'Suitable for high-traffic environments',
    ],
    specs: [
      ['Product Type', 'Self-Service Kiosk'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Kiosk'],
      ['Workflow', 'Self-Service'],
      ['Deployment', 'Stationary'],
    ],
  },
  'self-service-kiosk': {
    name: 'Self-Service Kiosk',
    category: 'KIOSK',
    eyebrow: 'KIOSK',
    description:
      'Standalone self-service hardware for ordering and customer workflows with a modern, easy-to-use experience.',
    features: [
      'Standalone self-service workflow',
      'Customer-led ordering',
      'Designed to reduce friction',
      'Suitable for busy environments',
    ],
    specs: [
      ['Product Type', 'Self-Service Kiosk'],
      ['Use Case', 'Retail & Hospitality'],
      ['Form Factor', 'Kiosk'],
      ['Workflow', 'Self-Service'],
      ['Deployment', 'Stationary'],
    ],
  },
  'enterprise-kiosk': {
    name: 'Enterprise Kiosk',
    category: 'KIOSK',
    eyebrow: 'KIOSK',
    description:
      'Scalable kiosk hardware designed for high-traffic commercial environments and connected self-service experiences.',
    features: [
      'Scalable self-service deployment',
      'Designed for high-traffic environments',
      'Connected customer experience',
      'Flexible commercial use cases',
    ],
    specs: [
      ['Product Type', 'Enterprise Kiosk'],
      ['Use Case', 'Enterprise'],
      ['Form Factor', 'Kiosk'],
      ['Workflow', 'Self-Service'],
      ['Deployment', 'Stationary'],
    ],
  },
}

function ProductDetail() {
  const { slug } = useParams()
  const product = productDetails[slug]
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }

  return () => {
    document.body.style.overflow = ''
    document.documentElement.style.overflow = ''
  }
}, [menuOpen])

  if (!product) {
    return (
      <main className="product-detail-not-found">
        <span>PRODUCT NOT FOUND</span>
        <h1>We couldn't find that product.</h1>
        <Link to="/products">← Back to Products</Link>
      </main>
    )
  }

  return (
    <div className="app product-detail-page">

      <header className="site-header">
        <div className="header-container">

          <Link to="/" className="brand">
            <div className="brand-mark">P</div>
            <div className="brand-name">
              POS<span>TECH</span>
            </div>
          </Link>

          <nav className="main-nav">
            <Link to="/products" className="active">Products</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/company">Company</Link>
          </nav>

          <a href="#product-contact" className="header-cta">
            Get a Quote
            <span>↗</span>
          </a>

          <button
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </header>

      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span>MENU</span>
          <button
            className="mobile-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="mobile-drawer-nav">
          <Link to="/products" className="active" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
        </nav>

        <a
          href="#product-contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </a>
      </aside>

      <main>

        <section className="product-detail-hero">

          <div className="product-detail-copy">

            <Link to="/products" className="product-back-link">
              ← Back to Products
            </Link>

            <div className="product-detail-eyebrow">
              <span></span>
              {product.eyebrow}
            </div>

            <h1>
              {product.name}
              <span>built for modern commerce.</span>
            </h1>

            <p>{product.description}</p>

            <div className="product-detail-actions">
              <a href="#product-contact" className="products-primary-btn">
                Request Information
                <span>↗</span>
              </a>

              <a href="#specifications" className="products-secondary-btn">
                View Specifications
              </a>
            </div>

          </div>

          <div className="product-detail-visual">

            <div className="product-detail-glow"></div>

            <div className="detail-device">
              <div className="detail-device-screen">
                <span>POS</span>
                <strong>{product.name}</strong>
                <small>{product.category}</small>

                <div className="detail-screen-bars">
                  <i></i><i></i><i></i><i></i><i></i>
                </div>
              </div>

              <div className="detail-device-base"></div>
            </div>

            <div className="detail-image-note">
              PRODUCT IMAGE
              <span>Replace with approved client asset</span>
            </div>

          </div>

        </section>


        <section className="product-detail-features">

          <div className="product-detail-section-heading">
            <span>PRODUCT OVERVIEW</span>
            <h2>Designed around the way you work.</h2>
          </div>

          <div className="product-feature-grid">
            {product.features.map((feature, index) => (
              <article key={feature}>
                <strong>{String(index + 1).padStart(2, '0')}</strong>
                <h3>{feature}</h3>
                <span>Built for connected commerce.</span>
              </article>
            ))}
          </div>

        </section>


        <section className="product-specifications" id="specifications">

          <div className="product-detail-section-heading">
            <span>TECHNICAL INFORMATION</span>
            <h2>Specifications.</h2>
          </div>

          <div className="specification-table">
            {product.specs.map(([label, value]) => (
              <div className="specification-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="specification-note">
            <span>NOTE</span>
            <p>
              Final technical specifications, dimensions, ports, processor,
              memory, display, connectivity, and certification details should
              be replaced with the approved product datasheet before launch.
            </p>
          </div>

        </section>


        <section className="product-detail-cta" id="product-contact">

          <div>
            <span>INTERESTED IN {product.name}?</span>
            <h2>
              Let's build the right
              <span>setup for your business.</span>
            </h2>
          </div>

          <a href="mailto:hello@postech.com">
            Talk to an Expert
            <span>↗</span>
          </a>

        </section>

      </main>

      <footer className="site-footer">
        <div className="footer-container">

          <div className="footer-main">

            <div className="footer-brand">
              <Link to="/" className="brand footer-logo">
                <div className="brand-mark">P</div>
                <div className="brand-name">
                  POS<span>TECH</span>
                </div>
              </Link>

              <p>
                Intelligent POS technology built to help modern businesses
                sell smarter, serve better and grow faster.
              </p>

              <a href="mailto:hello@postech.com" className="footer-email">
                hello@postech.com
              </a>
            </div>

            <div className="footer-links">

              <div className="footer-column">
                <h4>Products</h4>
                <Link to="/products">All Products</Link>
                <a href="/products#product-catalog">POS Hardware</a>
                <a href="/products#product-catalog">Self-Service</a>
              </div>

              <div className="footer-column">
                <h4>Solutions</h4>
                <Link to="/solutions">All Solutions</Link>
                <Link to="/solutions">Point of Sale</Link>
                <Link to="/solutions">Order Management</Link>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <Link to="/company">About Us</Link>
                <Link to="/industries">Industries</Link>
                <a href="#product-contact">Contact</a>
              </div>

            </div>

          </div>

          <div className="footer-bottom">
            <span>© 2026 POS TECH. All rights reserved.</span>

            <div className="footer-bottom-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>

            <span className="footer-status">
              <i></i>
              SYSTEMS ONLINE
            </span>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default ProductDetail
