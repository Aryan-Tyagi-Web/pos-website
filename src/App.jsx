import './App.css'
import { useEffect, useRef, useState } from 'react'

function Counter({ end, decimals = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const duration = 1800
    const startTime = performance.now()

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCount(end * eased)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [started, end])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}

function App() {
  const [showTopButton, setShowTopButton] = useState(false)
  const [productFilter, setProductFilter] = useState('All Products')
  const [menuOpen, setMenuOpen] = useState(false)

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
      behavior: 'smooth'
    })
  }

  return (
    <div className="app">

      {/* HEADER */}
      <header className="site-header">
        <div className="header-container">

          <a href="#" className="brand">
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
  <a
    href="/products"
    className={currentPath === '/products' ? 'active' : ''}
    onClick={() => setMenuOpen(false)}
  >
    Products
  </a>

  <a
    href="/solutions"
    className={currentPath === '/solutions' ? 'active' : ''}
    onClick={() => setMenuOpen(false)}
  >
    Solutions
  </a>

  <a
    href="/industries"
    className={currentPath === '/industries' ? 'active' : ''}
    onClick={() => setMenuOpen(false)}
  >
    Industries
  </a>

  <a
    href="/company"
    className={currentPath === '/company' ? 'active' : ''}
    onClick={() => setMenuOpen(false)}
  >
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


      {/* HERO */}
      <main className="hero">

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="hero-container">

          {/* LEFT CONTENT */}
          <div className="hero-content">

            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              Smart POS Technology for Modern Business
            </div>

            <h1>
              Powering the
              <span> Future of Commerce.</span>
            </h1>

            <p>
              Intelligent POS hardware built to simplify billing,
              payments, ordering and everyday business operations.
            </p>

            <div className="hero-actions">
              <a href="/products" className="primary-btn">
                Explore Products
                <span>↗</span>
              </a>

              <a href="/solutions" className="secondary-btn">
                Discover Solutions
                <span>→</span>
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <strong>01</strong>
                <span>Smart Hardware</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>02</strong>
                <span>Business Ready</span>
              </div>

              <div className="trust-line"></div>

              <div className="trust-item">
                <strong>03</strong>
                <span>Built to Scale</span>
              </div>
            </div>

          </div>


          {/* RIGHT VISUAL */}
          <div className="hero-visual">

            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>

            <div className="floating-card card-top">
              <span className="card-icon">▣</span>
              <div>
                <strong>Fast Checkout</strong>
                <small>Seamless transactions</small>
              </div>
            </div>

            <div className="pos-device">

              <div className="device-screen">

                <div className="screen-top">
                  <span>POS TECH</span>
                  <span>●</span>
                </div>

                <div className="screen-title">
                  <small>Today's Sales</small>
                  <strong>₹ 48,920</strong>
                </div>

                <div className="sales-chart">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="screen-bottom">
                  <div>
                    <small>Orders</small>
                    <strong>128</strong>
                  </div>

                  <div>
                    <small>Growth</small>
                    <strong>+24%</strong>
                  </div>
                </div>

              </div>

              <div className="device-base">
                <div className="device-slot"></div>
                <div className="device-logo">P</div>
              </div>

            </div>

            <div className="floating-card card-bottom">
              <span className="success-icon">✓</span>
              <div>
                <strong>Payment Complete</strong>
                <small>Transaction secured</small>
              </div>
            </div>

          </div>

        </div>

        <div className="hero-bottom-line">
          <span>POS TERMINALS</span>
          <span>ORDER MANAGEMENT</span>
          <span>PAYMENT SOLUTIONS</span>
          <span>SELF SERVICE</span>
          <span>DIGITAL COMMERCE</span>
        </div>

      </main>

      {/* SOLUTIONS */}
<section className="solutions-section" id="solutions">

  <div className="solutions-container">

    <div className="solutions-top">

      <div className="section-label light">
        <span></span>
        BUILT FOR THE WAY BUSINESS WORKS
      </div>

      <div className="solutions-title-row">

        <h2>
          Technology that works
          <span> around your business.</span>
        </h2>

        <p>
          From the first order to the final payment, our
          hardware solutions are designed to make every
          interaction faster, simpler and smarter.
        </p>

      </div>

    </div>


    <div className="solutions-showcase">

      {/* CARD 01 */}
      <div className="solution-item solution-large">

        <div className="solution-item-top">
          <span>01</span>
          <span className="solution-arrow">↗</span>
        </div>

        <div className="solution-visual visual-terminal">
          <div className="mini-screen">
            <div className="mini-header"></div>
            <div className="mini-lines">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <div className="mini-button"></div>
          </div>
        </div>

        <div className="solution-item-content">
          <h3>Point of Sale</h3>
          <p>
            Smart terminals built for fast billing,
            payments and reliable everyday operations.
          </p>
        </div>

      </div>


      {/* CARD 02 */}
      <div className="solution-item">

        <div className="solution-item-top">
          <span>02</span>
          <span className="solution-arrow">↗</span>
        </div>

        <div className="solution-visual visual-order">
          <div className="order-screen">
            <span>NEW ORDER</span>
            <strong>Table 24</strong>
            <small>4 Items • ₹1,280</small>
          </div>
        </div>

        <div className="solution-item-content">
          <h3>Order Management</h3>
          <p>
            Take orders faster and keep your operations
            connected across every touchpoint.
          </p>
        </div>

      </div>


      {/* CARD 03 */}
      <div className="solution-item">

        <div className="solution-item-top">
          <span>03</span>
          <span className="solution-arrow">↗</span>
        </div>

        <div className="solution-visual visual-kiosk">
          <div className="kiosk-screen">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="solution-item-content">
          <h3>Self-Service</h3>
          <p>
            Create faster customer experiences with
            intuitive self-service technology.
          </p>
        </div>

      </div>


      {/* CARD 04 */}
      <div className="solution-item">

        <div className="solution-item-top">
          <span>04</span>
          <span className="solution-arrow">↗</span>
        </div>

        <div className="solution-visual visual-menu">
          <div className="menu-screen">
            <div className="menu-row"></div>
            <div className="menu-row"></div>
            <div className="menu-row"></div>
            <div className="menu-row"></div>
          </div>
        </div>

        <div className="solution-item-content">
          <h3>Digital Experiences</h3>
          <p>
            Modern digital interfaces for menus,
            displays and connected customer journeys.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

{/* PRODUCTS */}
<section className="products-section" id="products">

  <div className="products-container">

    <div className="products-heading">

      <div className="section-label">
        <span></span>
        OUR PRODUCTS
      </div>

      <h2>
        Hardware built for
        <span> every business.</span>
      </h2>

      <p>
        Reliable POS technology designed to help
        businesses sell faster, serve better and grow
        with confidence.
      </p>

    </div>


    <div className="products-filter">

      <button
        className={productFilter === 'All Products' ? 'active' : ''}
        onClick={() => setProductFilter('All Products')}
      >
        All Products
      </button>

      <button
        className={productFilter === 'POS Terminals' ? 'active' : ''}
        onClick={() => setProductFilter('POS Terminals')}
      >
        POS Terminals
      </button>

      <button
        className={productFilter === 'Kiosks' ? 'active' : ''}
        onClick={() => setProductFilter('Kiosks')}
      >
        Kiosks
      </button>

      <button
        className={productFilter === 'Accessories' ? 'active' : ''}
        onClick={() => setProductFilter('Accessories')}
      >
        Accessories
      </button>

    </div>


    <div className="products-grid">

      {(productFilter === 'All Products' || productFilter === 'POS Terminals') && (
      <article className="product-card">

        <div className="product-image">
          <div className="image-placeholder">
            <span>PRODUCT IMAGE</span>
          </div>

          <span className="product-tag">BEST SELLER</span>
        </div>

        <div className="product-info">

          <span className="product-category">
            POS TERMINAL
          </span>

          <h3>Smart POS Terminal</h3>

          <p>
            Powerful Android POS terminal built for
            fast and reliable daily transactions.
          </p>

          <a href="#contact">
            View Product <span>↗</span>
          </a>

        </div>

      </article>
      )}


      {(productFilter === 'All Products' || productFilter === 'POS Terminals') && (
      <article className="product-card">

        <div className="product-image">
          <div className="image-placeholder">
            <span>PRODUCT IMAGE</span>
          </div>
        </div>

        <div className="product-info">

          <span className="product-category">
            SMART POS
          </span>

          <h3>All-in-One POS</h3>

          <p>
            A sleek business-ready POS solution
            combining performance and simplicity.
          </p>

          <a href="#contact">
            View Product <span>↗</span>
          </a>

        </div>

      </article>
      )}


      {(productFilter === 'All Products' || productFilter === 'Kiosks') && (
      <article className="product-card">

        <div className="product-image">
          <div className="image-placeholder">
            <span>PRODUCT IMAGE</span>
          </div>
        </div>

        <div className="product-info">

          <span className="product-category">
            SELF SERVICE
          </span>

          <h3>Self-Service Kiosk</h3>

          <p>
            Interactive self-service technology
            designed for faster customer experiences.
          </p>

          <a href="#contact">
            View Product <span>↗</span>
          </a>

        </div>

      </article>
      )}


      {(productFilter === 'All Products' || productFilter === 'Accessories') && (
      <article className="product-card">

        <div className="product-image">
          <div className="image-placeholder">
            <span>PRODUCT IMAGE</span>
          </div>
        </div>

        <div className="product-info">

          <span className="product-category">
            ACCESSORIES
          </span>

          <h3>POS Accessories</h3>

          <p>
            Essential peripherals and accessories
            designed to complete your POS setup.
          </p>

          <a href="#contact">
            View Product <span>↗</span>
          </a>

        </div>

      </article>
      )}

    </div>

  </div>

</section>

{/* INDUSTRIES */}
<section className="industries-section" id="industries">

  <div className="industries-container">

    <div className="industries-heading">

      <div className="section-label">
        <span></span>
        BUILT FOR EVERY BUSINESS
      </div>

      <h2>
        One POS platform.
        <span> Every kind of business.</span>
      </h2>

      <p>
        Flexible technology designed around the way
        different businesses operate, sell and serve
        their customers.
      </p>

    </div>


    <div className="industries-grid">

      <div className="industry-card industry-featured">

        <div className="industry-number">01</div>

        <div className="industry-icon">◈</div>

        <div className="industry-content">
          <h3>Retail</h3>

          <p>
            Faster billing, inventory management and
            seamless payment experiences for modern retail.
          </p>

          <a href="#contact">
            Explore solution <span>↗</span>
          </a>
        </div>

      </div>


      <div className="industry-card">

        <div className="industry-number">02</div>

        <div className="industry-icon">⌁</div>

        <div className="industry-content">
          <h3>Restaurants</h3>

          <p>
            Simplify ordering, billing and payments
            across every customer touchpoint.
          </p>

          <a href="#contact">
            Explore solution <span>↗</span>
          </a>
        </div>

      </div>


      <div className="industry-card">

        <div className="industry-number">03</div>

        <div className="industry-icon">◇</div>

        <div className="industry-content">
          <h3>Hospitality</h3>

          <p>
            Connected POS solutions built for hotels,
            cafés and hospitality businesses.
          </p>

          <a href="#contact">
            Explore solution <span>↗</span>
          </a>
        </div>

      </div>


      <div className="industry-card">

        <div className="industry-number">04</div>

        <div className="industry-icon">＋</div>

        <div className="industry-content">
          <h3>QSR & Food Service</h3>

          <p>
            Keep queues moving with fast ordering,
            payments and self-service technology.
          </p>

          <a href="#contact">
            Explore solution <span>↗</span>
          </a>
        </div>

      </div>


      <div className="industry-card">

        <div className="industry-number">05</div>

        <div className="industry-icon">▣</div>

        <div className="industry-content">
          <h3>Supermarkets</h3>

          <p>
            Reliable checkout technology designed for
            high-volume everyday transactions.
          </p>

          <a href="#contact">
            Explore solution <span>↗</span>
          </a>
        </div>

      </div>


      <div className="industry-card">

        <div className="industry-number">06</div>

        <div className="industry-icon">✦</div>

        <div className="industry-content">
          <h3>Growing Businesses</h3>

          <p>
            Scalable POS infrastructure that grows
            alongside your business.
          </p>

          <a href="#contact">
            Explore solution <span>↗</span>
          </a>
        </div>

      </div>

    </div>

  </div>

</section>

    {/* BUSINESS IMPACT */}
<section className="impact-section">

  <div className="impact-container">

    <div className="impact-intro">

      <div className="section-label light">
        <span></span>
        BUILT TO PERFORM
      </div>

      <h2>
        Better technology.
        <span> Better business.</span>
      </h2>

      <p>
        From faster transactions to smoother operations,
        our POS solutions help businesses deliver better
        experiences every day.
      </p>

    </div>


    <div className="impact-stats">

      <div className="impact-stat">
        <strong><Counter end={10} /><span>K+</span></strong>
        <p>Transactions powered every day</p>
      </div>

      <div className="impact-stat">
        <strong><Counter end={99.9} decimals={1} /><span>%</span></strong>
        <p>Reliable system uptime</p>
      </div>

      <div className="impact-stat">
        <strong><Counter end={24} /><span>/7</span></strong>
        <p>Business-ready technology</p>
      </div>

      <div className="impact-stat">
        <strong><Counter end={50} /><span>+</span></strong>
        <p>Business use cases</p>
      </div>

    </div>


    <div className="impact-bottom">

      <span>SMARTER OPERATIONS</span>
      <span>FASTER CHECKOUT</span>
      <span>CONNECTED BUSINESS</span>
      <span>READY TO SCALE</span>

    </div>

  </div>

</section>

    {/* CTA */}
<section className="cta-section" id="contact">

  <div className="cta-container">

    <div className="cta-glow"></div>

    <div className="cta-content">

      <div className="section-label light">
        <span></span>
        LET'S BUILD WHAT'S NEXT
      </div>

      <h2>
        Ready to make
        <span> business simpler?</span>
      </h2>

      <p>
        Talk to our team about the right POS technology
        for your business and discover a smarter way to
        sell, serve and grow.
      </p>

      <div className="cta-actions">

        <a href="/request-demo" className="cta-primary">
          Request a Demo
          <span>↗</span>
        </a>

        <a href="/contact" className="cta-secondary">
          Talk to Our Team
          <span>→</span>
        </a>

      </div>

    </div>

    <div className="cta-side-text">
      <span>POS TECHNOLOGY</span>
      <span>BUILT FOR GROWTH</span>
    </div>

  </div>

</section>

    {/* FOOTER */}
<footer className="site-footer">

  <div className="footer-container">

    <div className="footer-main">

      <div className="footer-brand">

        <a href="#" className="brand footer-logo">
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
          <a href="/solutions/order-management">
            Order Management
          </a>
          <a href="/solutions/digital-experiences">
            Digital Experiences
          </a>
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

export default App