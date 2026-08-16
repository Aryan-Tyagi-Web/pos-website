import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Industries() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

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
            <a
              href="/products"
              className={currentPath === '/products' ? 'active' : ''}
            >
              Products
            </a>
            <a
              href="/solutions"
              className={currentPath === '/solutions' ? 'active' : ''}
            >
              Solutions
            </a>
            <a
              href="/industries"
              className={currentPath === '/industries' ? 'active' : ''}
            >
              Industries
            </a>
            <a
              href="/company"
              className={currentPath === '/company' ? 'active' : ''}
            >
              Company
            </a>
          </nav>

          <a href="/contact" className="header-cta">
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
          href="/contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </a>
      </aside>


      {/* INDUSTRIES PAGE */}
      <main className="industries-page">

        {/* HERO */}
        <section className="industries-hero">
          <div className="industries-hero-content">

            <div className="industries-eyebrow">
              <span></span>
              INDUSTRIES WE SERVE
            </div>

            <h1>
              Technology for
              <span>every business.</span>
            </h1>

            <p>
              Purpose-built POS and commerce technology designed
              around the unique needs of retail, hospitality,
              restaurants, and growing businesses.
            </p>

            <div className="industries-hero-actions">
              <a href="#industry-grid" className="industries-primary-btn">
                Explore Industries
                <span>↘</span>
              </a>

              <Link to="/contact" className="industries-secondary-btn">
                Talk to an Expert
              </Link>
            </div>

          </div>

          <div className="industries-hero-visual">

            <div className="industry-orbit orbit-a"></div>
            <div className="industry-orbit orbit-b"></div>

            <div className="industry-command-panel">

              <div className="industry-panel-top">
                <span>BUSINESS PERFORMANCE</span>
                <span className="industry-live">
                  <i></i>
                  LIVE
                </span>
              </div>

              <div className="industry-panel-main">
                <small>Connected Locations</small>
                <strong>128</strong>
                <span>+24.8% this year</span>
              </div>

              <div className="industry-metrics">
                <div>
                  <small>Transactions</small>
                  <strong>24.6K</strong>
                </div>

                <div>
                  <small>Uptime</small>
                  <strong>99.9%</strong>
                </div>

                <div>
                  <small>Locations</small>
                  <strong>128</strong>
                </div>
              </div>

              <div className="industry-panel-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

            </div>

          </div>
        </section>


        {/* INDUSTRY GRID */}
        <section className="industry-grid-section" id="industry-grid">

          <div className="industries-section-heading">
            <div>
              <span>BUILT FOR YOUR INDUSTRY</span>
              <h2>One platform. Every environment.</h2>
            </div>

            <p>
              From busy restaurant counters to high-volume retail
              environments, POS TECH adapts to the way your business
              operates.
            </p>
          </div>

          <div className="industry-grid">

            <article className="industry-card industry-card-featured">
              <div className="industry-card-number">01</div>
              <div className="industry-card-icon">▥</div>

              <h3>Retail</h3>

              <p>
                Keep stores moving with fast checkout, flexible
                payments, and connected customer experiences.
              </p>

              <div className="industry-card-tags">
                <span>Checkout</span>
                <span>Payments</span>
                <span>Inventory</span>
              </div>

              <a href="/industries/retail">
                Explore Retail
                <span>↗</span>
              </a>
            </article>


            <article className="industry-card">
              <div className="industry-card-number">02</div>
              <div className="industry-card-icon">▦</div>

              <h3>Restaurants</h3>

              <p>
                Simplify ordering, payments, and table-side
                experiences while keeping service fast.
              </p>

              <div className="industry-card-tags">
                <span>Ordering</span>
                <span>Tableside</span>
              </div>

              <a href="/industries/restaurants">
                Explore Restaurants
                <span>↗</span>
              </a>
            </article>


            <article className="industry-card">
              <div className="industry-card-number">03</div>
              <div className="industry-card-icon">◫</div>

              <h3>Hospitality</h3>

              <p>
                Deliver seamless guest experiences across
                front desk, payments, and on-property services.
              </p>

              <div className="industry-card-tags">
                <span>Guest Experience</span>
                <span>Payments</span>
              </div>

              <a href="/industries/hospitality">
                Explore Hospitality
                <span>↗</span>
              </a>
            </article>


            <article className="industry-card">
              <div className="industry-card-number">04</div>
              <div className="industry-card-icon">⌂</div>

              <h3>Small Business</h3>

              <p>
                Get the essential tools to manage everyday sales,
                payments, and customer interactions with confidence.
              </p>

              <div className="industry-card-tags">
                <span>Simple Setup</span>
                <span>Payments</span>
              </div>

              <a href="/industries/small-business">
                Explore Small Business
                <span>↗</span>
              </a>
            </article>


            <article className="industry-card">
              <div className="industry-card-number">05</div>
              <div className="industry-card-icon">▣</div>

              <h3>Quick Service</h3>

              <p>
                Speed up high-volume service with streamlined
                ordering, checkout, and self-service experiences.
              </p>

              <div className="industry-card-tags">
                <span>Speed</span>
                <span>Self-Service</span>
              </div>

              <a href="/industries/quick-service">
                Explore Quick Service
                <span>↗</span>
              </a>
            </article>


            <article className="industry-card">
              <div className="industry-card-number">06</div>
              <div className="industry-card-icon">⌘</div>

              <h3>Growing Businesses</h3>

              <p>
                Build a flexible commerce foundation that can
                scale from one location to many.
              </p>

              <div className="industry-card-tags">
                <span>Multi-Location</span>
                <span>Scale</span>
              </div>

              <a href="/industries/growing-businesses">
                Explore More
                <span>↗</span>
              </a>
            </article>

          </div>
        </section>


        {/* INDUSTRY BENEFITS */}
        <section className="industries-benefits">

          <div className="industries-section-heading">
            <div>
              <span>WHY BUSINESSES CHOOSE POS TECH</span>
              <h2>Designed around the way you work.</h2>
            </div>

            <p>
              Your industry has its own challenges. Our technology
              gives your team the flexibility to solve them without
              adding unnecessary complexity.
            </p>
          </div>

          <div className="industry-benefit-grid">

            <article>
              <strong>01</strong>
              <h3>Fast by Design</h3>
              <p>
                Keep customers moving with responsive checkout
                and streamlined workflows.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Easy to Operate</h3>
              <p>
                Give employees intuitive tools that are simple
                to learn and easy to use.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Connected Everywhere</h3>
              <p>
                Bring locations, transactions, and business
                operations together in one ecosystem.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Ready to Grow</h3>
              <p>
                Start with what you need today and expand as
                your business grows.
              </p>
            </article>

          </div>
        </section>


        {/* CTA */}
        <section className="industries-bottom-cta" id="contact">

          <div>
            <span>BUILT FOR YOUR BUSINESS</span>

            <h2>
              Let's find the right
              <span> setup for you.</span>
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
                <a href="/products/pos-terminals">POS Terminals</a>
                <a href="/products/self-service">Self-Service</a>
                <a href="/products/accessories">Accessories</a>
              </div>

              <div className="footer-column">
                <h4>Solutions</h4>
                <a href="/solutions">All Solutions</a>
                <a href="/solutions/pos">Point of Sale</a>
                <a href="/solutions/order-management">Order Management</a>
                <a href="/solutions/digital-experiences">Digital Experiences</a>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="/company">About Us</a>
                <a href="/industries">Industries</a>
                <a href="/contact">Contact</a>
                <a href="/request-demo">Request a Demo</a>
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
              <a href="/rma">Support / RMA</a>
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

export default Industries
