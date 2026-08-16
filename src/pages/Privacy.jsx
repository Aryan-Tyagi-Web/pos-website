import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Privacy() {
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

        <Link
          to="/contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote <span>↗</span>
        </Link>
      </aside>

      <main>
        <section className="legal-hero">
          <div className="legal-eyebrow"><span></span> LEGAL</div>
          <h1>Privacy <span>Policy.</span></h1>
          <p>
            This Privacy Policy explains how POS TECH may collect, use,
            and protect information when you use our website or contact us.
          </p>
          <small>Last updated: August 15, 2026</small>
        </section>

        <section className="legal-content">
          <aside className="legal-sidebar">
            <span>ON THIS PAGE</span>
            <a href="#information">Information We Collect</a>
            <a href="#use">How We Use Information</a>
            <a href="#sharing">Information Sharing</a>
            <a href="#security">Security</a>
            <a href="#choices">Your Choices</a>
            <a href="#contact">Contact Us</a>
          </aside>

          <article className="legal-article">
            <section id="information">
              <span>01</span>
              <h2>Information We Collect</h2>
              <p>
                When you submit an enquiry, request a quote, or otherwise
                contact us, we may receive information such as your name,
                company name, email address, phone number, business details,
                and the information you choose to include in your message.
              </p>
              <p>
                We may also receive basic technical information associated
                with your use of the website, such as browser, device,
                approximate location, and website usage information.
              </p>
            </section>

            <section id="use">
              <span>02</span>
              <h2>How We Use Information</h2>
              <p>Information may be used to:</p>
              <ul>
                <li>Respond to enquiries and requests for information.</li>
                <li>Provide information about products and solutions.</li>
                <li>Understand and improve website performance and usability.</li>
                <li>Maintain website security and prevent misuse.</li>
                <li>Meet applicable legal or administrative requirements.</li>
              </ul>
            </section>

            <section id="sharing">
              <span>03</span>
              <h2>Information Sharing</h2>
              <p>
                We do not intend to sell personal information submitted
                through this website. Information may be shared with service
                providers or business partners where reasonably necessary to
                operate the website, respond to enquiries, provide requested
                services, or comply with applicable law.
              </p>
            </section>

            <section id="security">
              <span>04</span>
              <h2>Security</h2>
              <p>
                We take reasonable measures designed to protect information
                from unauthorized access, misuse, alteration, or disclosure.
                No website or electronic transmission can be guaranteed to be
                completely secure.
              </p>
            </section>

            <section id="choices">
              <span>05</span>
              <h2>Your Choices</h2>
              <p>
                You may choose what information to provide through our forms.
                If you have questions about information you have submitted or
                want to request an update or deletion where applicable,
                contact us using the details below.
              </p>
            </section>

            <section id="contact">
              <span>06</span>
              <h2>Contact Us</h2>
              <p>
                For privacy-related questions or requests, contact:
              </p>
              <a className="legal-contact-link" href="mailto:hello@postech.com">
                hello@postech.com
              </a>
            </section>

            <div className="legal-note">
              <strong>Important:</strong> This is a website-ready general
              privacy policy template. Before publishing it as the company's
              final legal policy, replace any placeholders and have the
              business/legal adviser review it for the company's actual
              practices, jurisdiction, cookies, analytics, vendors, and
              applicable privacy requirements.
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

export default Privacy
