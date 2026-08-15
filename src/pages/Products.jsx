import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const productCategories = [
  {
    number: '01',
    icon: '◈',
    name: 'Mobile POS',
    description: 'Compact Android POS devices built for flexible, on-the-go transactions.',
  },
  {
    number: '02',
    icon: '▣',
    name: 'Stationary POS',
    description: 'Reliable countertop systems designed for fast everyday checkout.',
  },
  {
    number: '03',
    icon: '▤',
    name: 'Order Taking Tablets',
    description: 'Portable ordering solutions that help teams serve customers faster.',
  },
  {
    number: '04',
    icon: '▥',
    name: 'Digital Menu Board',
    description: 'Modern digital displays for menus, promotions, and customer experiences.',
  },
  {
    number: '05',
    icon: '⌘',
    name: 'Kiosk',
    description: 'Self-service systems designed for ordering, payments, ticketing, and more.',
  },
]

const products = [
  {
    number: '01',
    name: 'SN11',
    slug: 'sn11',
    category: 'MOBILE POS',
    description: 'Compact mobile POS hardware for flexible point-of-sale operations.',
  },
  {
    number: '02',
    name: 'SN57',
    slug: 'sn57',
    category: 'MOBILE POS',
    description: 'Portable POS hardware designed for fast customer transactions.',
  },
  {
    number: '03',
    name: 'SN60',
    slug: 'sn60',
    category: 'MOBILE POS',
    description: 'Modern mobile commerce hardware for efficient checkout experiences.',
  },
  {
    number: '04',
    name: 'SN65',
    slug: 'sn65',
    category: 'MOBILE POS',
    description: 'Flexible mobile POS hardware for retail and hospitality environments.',
  },
  {
    number: '05',
    name: 'SN80',
    slug: 'sn80',
    category: 'MOBILE POS',
    description: 'A larger mobile POS format designed for connected commerce workflows.',
  },
  {
    number: '06',
    name: 'SN200',
    slug: 'sn200',
    category: 'STATIONARY POS',
    description: 'Countertop POS hardware built for dependable everyday operations.',
  },
  {
    number: '07',
    name: 'X6',
    slug: 'x6',
    category: 'STATIONARY POS',
    description: 'Modular POS hardware designed for flexible Android and Windows setups.',
  },
  {
    number: '08',
    name: 'Z3',
    slug: 'z3',
    category: 'STATIONARY POS',
    description: 'Professional countertop POS hardware for modern business environments.',
  },
  {
    number: '09',
    name: 'Order Taking Tablet',
    slug: 'order-taking-tablet',
    category: 'ORDER TAKING',
    description: 'Tablet-based ordering designed to help teams capture orders efficiently.',
  },
  {
    number: '10',
    name: 'Digital Menu Display',
    slug: 'digital-menu-display',
    category: 'DIGITAL MENU',
    description: 'Digital display hardware for clear, flexible menu presentation.',
  },
  {
    number: '11',
    name: 'C2100',
    slug: 'c2100',
    category: 'KIOSK',
    description: 'Self-service kiosk hardware designed for interactive customer experiences.',
  },
  {
    number: '12',
    name: 'Self-Service Kiosk',
    slug: 'self-service-kiosk',
    category: 'KIOSK',
    description: 'Standalone self-service hardware for ordering and customer workflows.',
  },
  {
    number: '13',
    name: 'Enterprise Kiosk',
    slug: 'enterprise-kiosk',
    category: 'KIOSK',
    description: 'Scalable kiosk hardware for high-traffic commercial environments.',
  },
]

function Products() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const [activeCategory, setActiveCategory] = useState('ALL')

  const currentPath = window.location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const filteredProducts =
    activeCategory === 'ALL'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="app">

      {/* HEADER */}
      <header className="site-header">
        <div className="header-container">

          <a href="/" className="brand">
            <div className="brand-mark">P</div>
            <div className="brand-name">
              POS<span>TECH</span>
            </div>
          </a>

          <nav className="main-nav">
            <a href="/products" className={currentPath === '/products' ? 'active' : ''}>
              Products
            </a>

            <a href="/solutions" className={currentPath === '/solutions' ? 'active' : ''}>
              Solutions
            </a>

            <a href="/industries" className={currentPath === '/industries' ? 'active' : ''}>
              Industries
            </a>

            <a href="/company" className={currentPath === '/company' ? 'active' : ''}>
              Company
            </a>
          </nav>

          <a href="#contact" className="header-cta">
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
      ></div>

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
          <a href="/products" className={currentPath === '/products' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Products
          </a>

          <a href="/solutions" className={currentPath === '/solutions' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Solutions
          </a>

          <a href="/industries" className={currentPath === '/industries' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Industries
          </a>

          <a href="/company" className={currentPath === '/company' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
            Company
          </a>
        </nav>

        <a
          href="#contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </a>
      </aside>


      <main className="products-page">

        {/* HERO */}
        <section className="products-hero">
          <div className="products-hero-content">

            <div className="products-eyebrow">
              <span></span>
              OUR PRODUCTS
            </div>

            <h1>
              Technology built for
              <span>modern commerce.</span>
            </h1>

            <p>
              Explore a complete range of POS hardware and self-service
              technology designed to help businesses sell faster,
              serve better, and grow with confidence.
            </p>

            <div className="products-hero-actions">
              <a href="#product-catalog" className="products-primary-btn">
                Explore Products
                <span>↘</span>
              </a>

              <a href="/contact" className="products-secondary-btn">
                Talk to an Expert
              </a>
            </div>

          </div>

          <div className="products-hero-visual">
            <div className="products-glow"></div>

            <div className="product-device">
              <div className="device-screen">
                <div className="screen-top">
                  <span>POS</span>
                  <span>●</span>
                </div>

                <div className="screen-total">
                  <small>Today's Sales</small>
                  <strong>₹24,680</strong>
                </div>

                <div className="screen-bars">
                  <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
              </div>

              <div className="device-base"></div>
            </div>
          </div>
        </section>


        {/* PRODUCT CATEGORIES */}
        <section className="product-categories">

          <div className="products-section-heading">
            <div>
              <span>PRODUCT ECOSYSTEM</span>
              <h2>Everything you need to sell.</h2>
            </div>

            <p>
              From mobile checkout to self-service experiences,
              build a complete commerce setup around your business.
            </p>
          </div>

          <div className="product-category-grid product-category-grid-five">
            {productCategories.map((category) => (
              <article className="product-category-card" key={category.name}>
                <div className="product-card-number">{category.number}</div>
                <div className="product-card-icon">{category.icon}</div>

                <h3>{category.name}</h3>

                <p>{category.description}</p>

                <a
                  href="#product-catalog"
                  onClick={() => setActiveCategory(category.name.toUpperCase())}
                >
                  Explore
                  <span>↗</span>
                </a>
              </article>
            ))}
          </div>

        </section>


        {/* PRODUCT CATALOG */}
        <section className="product-catalog" id="product-catalog">

          <div className="products-section-heading catalog-heading">
            <div>
              <span>PRODUCT CATALOGUE</span>
              <h2>Find the right hardware.</h2>
            </div>

            <p>
              Browse the product range by category. Product photography
              and final specifications can be added once the client
              provides the approved assets.
            </p>
          </div>

          <div className="product-filter-bar">

            {[
              'ALL',
              'MOBILE POS',
              'STATIONARY POS',
              'ORDER TAKING',
              'DIGITAL MENU',
              'KIOSK',
            ].map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'active' : ''}
                onClick={() => setActiveCategory(category)}
              >
                {category === 'ALL' ? 'All Products' : category}
              </button>
            ))}

          </div>

          <div className="product-catalog-grid">

            {filteredProducts.map((product) => (
              <article className="product-catalog-card" key={product.name}>

                <div className="catalog-product-visual">
                  <div className="catalog-product-placeholder">
                    <span>{product.name}</span>
                    <small>PRODUCT IMAGE</small>
                  </div>

                  <div className="catalog-product-index">
                    {product.number}
                  </div>
                </div>

                <div className="catalog-product-info">

                  <span>{product.category}</span>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <div className="catalog-product-actions">
                    <a href={`/products/${product.slug}`}>
                      View Product
                      <span>↗</span>
                    </a>

                    <a href="#contact" className="catalog-enquire-link">
                      Enquire
                    </a>
                  </div>

                </div>

              </article>
            ))}

          </div>

        </section>


        {/* PRODUCT EXPERIENCE */}
        <section className="product-experience">

          <div className="product-experience-copy">
            <span>BUILT AROUND YOUR BUSINESS</span>

            <h2>
              Hardware that works
              <span>with your workflow.</span>
            </h2>

            <p>
              Choose the right combination of POS, mobile ordering,
              digital displays, and self-service hardware for the way
              your business operates.
            </p>

            <a href="#contact" className="products-primary-btn">
              Build Your Setup
              <span>↗</span>
            </a>
          </div>

          <div className="product-experience-grid">

            <div>
              <strong>01</strong>
              <span>Fast Checkout</span>
              <p>Designed for quick, reliable customer transactions.</p>
            </div>

            <div>
              <strong>02</strong>
              <span>Flexible Hardware</span>
              <p>Choose hardware that fits your environment and workflow.</p>
            </div>

            <div>
              <strong>03</strong>
              <span>Self-Service</span>
              <p>Give customers more ways to browse, order, and pay.</p>
            </div>

            <div>
              <strong>04</strong>
              <span>Connected Commerce</span>
              <p>Build a technology ecosystem that can grow with you.</p>
            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="products-bottom-cta" id="contact">

          <div>
            <span>READY TO BUILD?</span>

            <h2>
              Let's find the right
              <span>solution for you.</span>
            </h2>
          </div>

          <a href="/contact">
            Talk to an Expert
            <span>↗</span>
          </a>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-main">

            <div className="footer-brand">

              <a href="/" className="brand footer-logo">
                <div className="brand-mark">P</div>

                <div className="brand-name">
                  POS<span>TECH</span>
                </div>
              </a>

              <p>
                Intelligent POS technology built to help
                modern businesses sell smarter, serve better
                and grow faster.
              </p>

              <a href="mailto:hello@postech.com" className="footer-email">
                hello@postech.com
              </a>

            </div>

            <div className="footer-links">

              <div className="footer-column">
                <h4>Products</h4>
                <a href="/products">All Products</a>
                <a href="#product-catalog">POS Hardware</a>
                <a href="#product-catalog">Self-Service</a>
                <a href="#product-catalog">Accessories</a>
              </div>

              <div className="footer-column">
                <h4>Solutions</h4>
                <a href="/solutions">All Solutions</a>
                <a href="/solutions">Point of Sale</a>
                <a href="/solutions">Order Management</a>
                <a href="/solutions">Digital Experiences</a>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="/company">About Us</a>
                <a href="/industries">Industries</a>
                <Link to="/contact">Contact</Link>
                <Link to="/contact">Request a Demo</Link>
              </div>

            </div>

          </div>

          <div className="footer-bottom">

            <span>
              © 2026 POS TECH. All rights reserved.
            </span>

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


      {showTopButton && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}

    </div>
  )
}

export default Products