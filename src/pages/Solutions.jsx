import { useEffect, useState } from 'react'
import '../App.css'

function Solutions() {
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

        <a
          href="#contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </a>
      </aside>


      {/* SOLUTIONS HERO */}
      <main className="solutions-page">

        <section className="solutions-hero">
          <div className="solutions-hero-content">

            <div className="solutions-eyebrow">
              <span></span>
              OUR SOLUTIONS
            </div>

            <h1>
              Smarter commerce.
              <span> Better business.</span>
            </h1>

            <p>
              Connected POS solutions designed to simplify operations,
              improve customer experiences, and help businesses grow
              with confidence.
            </p>

            <div className="solutions-hero-actions">
              <a href="#solution-grid" className="solutions-primary-btn">
                Explore Solutions
                <span>↘</span>
              </a>

              <a href="/contact" className="solutions-secondary-btn">
                Talk to an Expert
              </a>
            </div>

          </div>

          <div className="solutions-hero-visual">

            <div className="solution-orbit orbit-one"></div>
            <div className="solution-orbit orbit-two"></div>

            <div className="solution-dashboard">

              <div className="dashboard-header">
                <span>BUSINESS OVERVIEW</span>
                <span className="dashboard-status">
                  <i></i>
                  LIVE
                </span>
              </div>

              <div className="dashboard-sales">
                <small>Today's Revenue</small>
                <strong>₹48,620</strong>
                <span>+18.4%</span>
              </div>

              <div className="dashboard-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="dashboard-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>
        </section>


        {/* SOLUTION GRID */}
        <section className="solutions-grid-section" id="solution-grid">

          <div className="solutions-section-heading">
            <div>
              <span>CONNECTED SOLUTIONS</span>
              <h2>Everything works better together.</h2>
            </div>

            <p>
              Bring checkout, ordering, payments, and customer
              experiences together in one connected ecosystem.
            </p>
          </div>

          <div className="solutions-grid">

            <article className="solution-card solution-card-large">
              <div className="solution-card-number">01</div>
              <div className="solution-card-icon">▣</div>

              <h3>Point of Sale</h3>

              <p>
                Fast and reliable checkout technology that keeps
                transactions moving and gives your team the tools
                they need every day.
              </p>

              <a href="/solutions/point-of-sale">
                Explore Solution
                <span>↗</span>
              </a>
            </article>

            <article className="solution-card">
              <div className="solution-card-number">02</div>
              <div className="solution-card-icon">▤</div>

              <h3>Order Management</h3>

              <p>
                Connect orders, operations, and fulfillment so
                your business can stay organized from checkout
                to completion.
              </p>

              <a href="/solutions/order-management">
                Explore Solution
                <span>↗</span>
              </a>
            </article>

            <article className="solution-card">
              <div className="solution-card-number">03</div>
              <div className="solution-card-icon">◫</div>

              <h3>Self-Service</h3>

              <p>
                Give customers intuitive self-service experiences
                that reduce friction and keep queues moving.
              </p>

              <a href="/solutions/self-service">
                Explore Solution
                <span>↗</span>
              </a>
            </article>

            <article className="solution-card">
              <div className="solution-card-number">04</div>
              <div className="solution-card-icon">⌘</div>

              <h3>Digital Experiences</h3>

              <p>
                Create connected customer journeys across digital
                displays, interfaces, and in-store experiences.
              </p>

              <a href="/solutions/digital-experiences">
                Explore Solution
                <span>↗</span>
              </a>
            </article>

          </div>
        </section>


        {/* BENEFITS */}
        <section className="solutions-benefits">

          <div className="solutions-section-heading">
            <div>
              <span>WHY POS TECH</span>
              <h2>Built around your business.</h2>
            </div>

            <p>
              Technology should make operations simpler, not more
              complicated. Our solutions are designed around the
              way modern businesses actually work.
            </p>
          </div>

          <div className="solutions-benefit-grid">

            <article>
              <strong>01</strong>
              <h3>Faster Operations</h3>
              <p>
                Reduce unnecessary steps and keep everyday
                transactions moving smoothly.
              </p>
            </article>

            <article>
              <strong>02</strong>
              <h3>Connected Systems</h3>
              <p>
                Keep your commerce operations connected across
                checkout, ordering, payments, and experiences.
              </p>
            </article>

            <article>
              <strong>03</strong>
              <h3>Better Experiences</h3>
              <p>
                Give customers and employees technology that feels
                simple, fast, and intuitive.
              </p>
            </article>

            <article>
              <strong>04</strong>
              <h3>Ready to Scale</h3>
              <p>
                Build a flexible technology foundation that can
                grow alongside your business.
              </p>
            </article>

          </div>
        </section>


        {/* CTA */}
        <section className="solutions-bottom-cta" id="contact">

          <div>
            <span>READY TO GET STARTED?</span>

            <h2>
              Let's build a
              <span> smarter operation.</span>
            </h2>
          </div>

          <a href="#contact">
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

export default Solutions
