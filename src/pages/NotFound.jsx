import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app not-found-page">

      <header className="site-header">
        <div className="header-container">

          <Link to="/" className="brand">
            <div className="brand-mark">P</div>
            <div className="brand-name">
              POS<span>TECH</span>
            </div>
          </Link>

          <nav className="main-nav">
            <Link to="/products">Products</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/company">Company</Link>
          </nav>

          <Link to="/contact" className="header-cta">
            Get a Quote
            <span>↗</span>
          </Link>

          <button
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
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
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
        </nav>

        <Link
          to="/contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </Link>
      </aside>


      <main className="not-found-main">

        <div className="not-found-code">404</div>

        <div className="not-found-eyebrow">
          <span></span>
          PAGE NOT FOUND
        </div>

        <h1>
          Looks like you've
          <span>taken a wrong turn.</span>
        </h1>

        <p>
          The page you're looking for doesn't exist, has been moved,
          or the URL may have been entered incorrectly.
        </p>

        <div className="not-found-actions">
          <Link to="/" className="not-found-primary">
            Back to Home
            <span>↗</span>
          </Link>

          <Link to="/contact" className="not-found-secondary">
            Contact Us
          </Link>
        </div>

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
                <Link to="/products">POS Hardware</Link>
                <Link to="/products">Self-Service</Link>
              </div>

              <div className="footer-column">
                <h4>Solutions</h4>
                <Link to="/solutions">All Solutions</Link>
                <Link to="/solutions/point-of-sale">Point of Sale</Link>
                <Link to="/solutions/order-management">Order Management</Link>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <Link to="/company">About Us</Link>
                <Link to="/industries">Industries</Link>
                <Link to="/contact">Contact</Link>
              </div>

            </div>

          </div>

          <div className="footer-bottom">
            <span>© 2026 POS TECH. All rights reserved.</span>

            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
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

export default NotFound
