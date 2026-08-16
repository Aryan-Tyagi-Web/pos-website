import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Terms() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 500)
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
    <div className="app legal-page">
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="brand">
            <div className="brand-mark">P</div>
            <div className="brand-name">POS<span>TECH</span></div>
          </Link>

          <nav className="main-nav">
            <Link to="/products">Products</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/company">Company</Link>
          </nav>

          <Link to="/contact" className="header-cta">
            Get a Quote <span>↗</span>
          </Link>

          <button
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
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
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
        </nav>

        <Link to="/contact" className="mobile-drawer-cta" onClick={() => setMenuOpen(false)}>
          Get a Quote <span>↗</span>
        </Link>
      </aside>

      <main>
        <section className="legal-hero">
          <div className="legal-eyebrow"><span></span> LEGAL</div>
          <h1>Terms & <span>Conditions.</span></h1>
          <p>
            These terms describe the general conditions for using the POS TECH
            website and its content.
          </p>
          <small>Last updated: August 15, 2026</small>
        </section>

        <section className="legal-content">
          <aside className="legal-sidebar">
            <span>ON THIS PAGE</span>
            <a href="#acceptance">Acceptance</a>
            <a href="#website">Website Use</a>
            <a href="#content">Content & IP</a>
            <a href="#enquiries">Enquiries</a>
            <a href="#third-party">Third-Party Links</a>
            <a href="#liability">Liability</a>
            <a href="#contact">Contact</a>
          </aside>

          <article className="legal-article">
            <section id="acceptance">
              <span>01</span>
              <h2>Acceptance of These Terms</h2>
              <p>
                By accessing or using this website, you acknowledge that you
                have read and understood these terms and agree to use the
                website responsibly and in accordance with applicable law.
              </p>
            </section>

            <section id="website">
              <span>02</span>
              <h2>Website Use</h2>
              <p>
                The website is provided for general information about POS TECH,
                its products, solutions, industries, and services. You must not
                use the website in a way that could damage, disable, overload,
                interfere with, or compromise the website or its users.
              </p>
            </section>

            <section id="content">
              <span>03</span>
              <h2>Content & Intellectual Property</h2>
              <p>
                Unless otherwise stated, website text, graphics, branding,
                layouts, and other materials are owned by or licensed to the
                business. You may view the content for personal or legitimate
                business evaluation, but you may not reproduce, modify,
                distribute, or commercially exploit it without permission.
              </p>
            </section>

            <section id="enquiries">
              <span>04</span>
              <h2>Enquiries & Information</h2>
              <p>
                Information submitted through enquiry or quote forms should be
                accurate and complete. Submitting an enquiry does not by itself
                create a contract, purchase order, service agreement, or other
                binding commercial relationship.
              </p>
            </section>

            <section id="third-party">
              <span>05</span>
              <h2>Third-Party Links</h2>
              <p>
                The website may contain links or references to third-party
                websites or services. POS TECH is not responsible for the
                content, availability, or practices of third-party websites.
              </p>
            </section>

            <section id="liability">
              <span>06</span>
              <h2>Limitation of Liability</h2>
              <p>
                To the extent permitted by applicable law, the website and its
                content are provided on an informational basis without a
                guarantee that the website will always be available, complete,
                or error-free. Nothing in these terms excludes rights or
                liabilities that cannot legally be excluded.
              </p>
            </section>

            <section id="contact">
              <span>07</span>
              <h2>Contact</h2>
              <p>
                Questions about these terms can be sent to:
              </p>
              <a className="legal-contact-link" href="mailto:hello@postech.com">
                hello@postech.com
              </a>
            </section>

            <div className="legal-note">
              <strong>Important:</strong> This is a website-ready general terms
              template. Before publishing it as the company's final legal
              terms, have the business/legal adviser review jurisdiction,
              governing law, commercial terms, warranties, product terms,
              limitations, and any applicable regulations.
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="brand footer-logo">
                <div className="brand-mark">P</div>
                <div className="brand-name">POS<span>TECH</span></div>
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
              <Link to="/rma">Support / RMA</Link>
            </div>
            <span className="footer-status"><i></i>SYSTEMS ONLINE</span>
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

export default Terms
