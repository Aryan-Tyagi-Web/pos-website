import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const products = [
  'Select product',
  'SN11',
  'SN57',
  'SN60',
  'SN65',
  'SN80',
  'SN200',
  'X6',
  'Z3',
  'Order Taking Tablet',
  'Digital Menu Display',
  'C2100',
  'Self-Service Kiosk',
  'Enterprise Kiosk',
]

function RMA() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app rma-page">

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
          Get a Quote
          <span>↗</span>
        </Link>
      </aside>


      <main>

        <section className="rma-hero">
          <div className="rma-hero-content">

            <div className="rma-eyebrow">
              <span></span>
              SUPPORT & SERVICE
            </div>

            <h1>
              Need help with
              <span>your hardware?</span>
            </h1>

            <p>
              Register a support request for your POS hardware and our
              service team can review the issue and get back to you.
            </p>

          </div>

          <div className="rma-hero-card">
            <span>RMA / SUPPORT</span>
            <strong>We're here to help.</strong>
            <p>
              Keep your product serial number and issue details ready
              before submitting your request.
            </p>
          </div>
        </section>


        <section className="rma-section">

          <div className="rma-info">

            <span className="rma-section-label">REGISTER A COMPLAINT</span>

            <h2>Tell us what went wrong.</h2>

            <p>
              Submit the details below so the support team can understand
              your hardware issue and contact you with the next steps.
            </p>

            <div className="rma-info-list">

              <div>
                <span>STEP 01</span>
                <strong>Identify your product</strong>
                <p>Provide the product model and serial number.</p>
              </div>

              <div>
                <span>STEP 02</span>
                <strong>Describe the issue</strong>
                <p>Tell us what is happening and when the issue started.</p>
              </div>

              <div>
                <span>STEP 03</span>
                <strong>Submit your request</strong>
                <p>Our team can review your information and follow up.</p>
              </div>

            </div>

            <div className="rma-support-note">
              <span>GENERAL ENQUIRIES</span>
              <a href="/contact">Contact our team <b>↗</b></a>
            </div>

          </div>


          <div className="rma-form-card">

            {submitted ? (
              <div className="rma-success">

                <div className="rma-success-icon">✓</div>

                <span>REQUEST RECEIVED</span>

                <h3>Your support request has been submitted.</h3>

                <p>
                  Thank you. Your information has been recorded for this
                  demo form. Connect this form to your support/RMA system
                  before production launch.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Submit another request
                  <span>↗</span>
                </button>

              </div>
            ) : (
              <form onSubmit={(event) => {
                event.preventDefault()
                setSubmitted(true)
              }}>

                <div className="rma-form-heading">
                  <span>RMA REQUEST</span>
                  <h3>Register a Complaint</h3>
                </div>

                <div className="rma-form-row">

                  <label>
                    <span>PRODUCT *</span>
                    <select required defaultValue="">
                      <option value="" disabled>Select product</option>
                      {products.slice(1).map((product) => (
                        <option value={product} key={product}>{product}</option>
                      ))}
                    </select>
                  </label>

                  <label>
                    <span>SERIAL NUMBER *</span>
                    <input
                      type="text"
                      placeholder="Enter serial number"
                      required
                    />
                  </label>

                </div>

                <div className="rma-form-row">

                  <label>
                    <span>YOUR NAME *</span>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    <span>COMPANY NAME</span>
                    <input
                      type="text"
                      placeholder="Enter company name"
                    />
                  </label>

                </div>

                <div className="rma-form-row">

                  <label>
                    <span>EMAIL *</span>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label>
                    <span>CONTACT NUMBER *</span>
                    <input
                      type="tel"
                      placeholder="+91"
                      required
                    />
                  </label>

                </div>

                <label className="rma-form-full">
                  <span>ADDRESS</span>
                  <textarea
                    rows="3"
                    placeholder="Enter your address"
                  ></textarea>
                </label>

                <label className="rma-form-full">
                  <span>TECHNICAL ISSUE *</span>
                  <textarea
                    rows="6"
                    placeholder="Describe the issue, error message, or problem with the device..."
                    required
                  ></textarea>
                </label>

                <div className="rma-upload-grid">

                  <label className="rma-upload">
                    <span>IMAGE</span>
                    <input type="file" accept="image/*" />
                    <strong>+ Add image</strong>
                    <small>Optional</small>
                  </label>

                  <label className="rma-upload">
                    <span>VIDEO</span>
                    <input type="file" accept="video/*" />
                    <strong>+ Add video</strong>
                    <small>Optional</small>
                  </label>

                </div>

                <button type="submit" className="rma-submit">
                  Submit Support Request
                  <span>↗</span>
                </button>

                <small className="rma-form-note">
                  Please provide accurate product and contact information.
                </small>

              </form>
            )}

          </div>

        </section>


        <section className="rma-bottom-cta">

          <div>
            <span>NEED SOMETHING ELSE?</span>
            <h2>
              Talk to our
              <span>team.</span>
            </h2>
          </div>

          <a href="/contact">
            Contact Us
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
                <Link to="/products">POS Hardware</Link>
                <Link to="/products">Self-Service</Link>
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
                <Link to="/contact">Contact</Link>
                <Link to="/rma">Support / RMA</Link>
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

export default RMA
