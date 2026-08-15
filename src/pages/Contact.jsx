import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Contact() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const [submitted, setSubmitted] = useState(false)

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="app contact-page">

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

          <a href="#contact-form" className="header-cta active">
            Get a Quote
            <span>↗</span>
          </a>

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

        <a
          href="#contact-form"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </a>
      </aside>


      <main>

        <section className="contact-hero">

          <div className="contact-hero-copy">

            <div className="contact-eyebrow">
              <span></span>
              GET IN TOUCH
            </div>

            <h1>
              Let's build a
              <span>better checkout.</span>
            </h1>

            <p>
              Tell us a little about your business and what you are
              looking to build. Our team will help you find the right
              POS technology and commerce setup.
            </p>

          </div>

          <div className="contact-hero-side">
            <span>START A CONVERSATION</span>
            <strong>Have a project in mind?</strong>
            <a href="#contact-form">
              Request a Quote
              <span>↘</span>
            </a>
          </div>

        </section>


        <section className="contact-section" id="contact-form">

          <div className="contact-info">

            <span className="contact-section-label">CONTACT</span>

            <h2>Tell us what you need.</h2>

            <p>
              Whether you are opening a new location, upgrading your
              existing POS setup, or planning a larger rollout, start
              the conversation below.
            </p>

            <div className="contact-info-list">

              <div>
                <span>EMAIL</span>
                <a href="mailto:hello@postech.com">hello@postech.com</a>
              </div>

              <div>
                <span>AVAILABILITY</span>
                <strong>Monday – Friday</strong>
              </div>

              <div>
                <span>RESPONSE</span>
                <strong>We'll get back to you shortly.</strong>
              </div>

            </div>

          </div>


          <div className="contact-form-card">

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>

                <span>REQUEST RECEIVED</span>

                <h3>Thanks for reaching out.</h3>

                <p>
                  Your enquiry has been received. Our team will be in
                  touch shortly to discuss your requirements.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                >
                  Send another request
                  <span>↗</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="contact-form-row">

                  <label>
                    <span>YOUR NAME *</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    <span>COMPANY NAME *</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Enter company name"
                      required
                    />
                  </label>

                </div>

                <div className="contact-form-row">

                  <label>
                    <span>WORK EMAIL *</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label>
                    <span>PHONE NUMBER</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91"
                    />
                  </label>

                </div>

                <div className="contact-form-row">

                  <label>
                    <span>INDUSTRY *</span>
                    <select name="industry" required defaultValue="">
                      <option value="" disabled>Select industry</option>
                      <option value="retail">Retail</option>
                      <option value="restaurants">Restaurants</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="small-business">Small Business</option>
                      <option value="quick-service">Quick Service</option>
                      <option value="growing-businesses">Growing Business</option>
                    </select>
                  </label>

                  <label>
                    <span>INTERESTED IN *</span>
                    <select name="interest" required defaultValue="">
                      <option value="" disabled>Select solution</option>
                      <option value="pos">Point of Sale</option>
                      <option value="order-management">Order Management</option>
                      <option value="self-service">Self-Service</option>
                      <option value="digital-experiences">Digital Experiences</option>
                      <option value="hardware">POS Hardware</option>
                    </select>
                  </label>

                </div>

                <label className="contact-form-full">
                  <span>YOUR REQUIREMENT</span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Tell us about your business, locations, current setup, or what you are looking to build..."
                  ></textarea>
                </label>

                <button type="submit" className="contact-submit">
                  Send Request
                  <span>↗</span>
                </button>

                <small className="contact-form-note">
                  By submitting this form, you agree to be contacted about your enquiry.
                </small>

              </form>
            )}

          </div>

        </section>


        <section className="contact-bottom-cta">

          <div>
            <span>NOT SURE WHERE TO START?</span>
            <h2>
              Explore our
              <span>solutions first.</span>
            </h2>
          </div>

          <Link to="/solutions">
            Explore Solutions
            <span>↗</span>
          </Link>

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
                <Link to="/solutions/point-of-sale">Point of Sale</Link>
                <Link to="/solutions/order-management">Order Management</Link>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <Link to="/company">About Us</Link>
                <Link to="/industries">Industries</Link>
                <a href="#contact-form">Contact</a>
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

export default Contact
