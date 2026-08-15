import { useEffect, useState } from 'react'
import '../App.css'

function Company() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)
  const currentPath = window.location.pathname

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    ['/products', 'Products'],
    ['/solutions', 'Solutions'],
    ['/industries', 'Industries'],
    ['/company', 'Company'],
  ]

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-container">
          <a href="/" className="brand">
            <div className="brand-mark">P</div>
            <div className="brand-name">POS<span>TECH</span></div>
          </a>

          <nav className="main-nav">
            {navItems.map(([path, label]) => (
              <a key={path} href={path} className={currentPath === path ? 'active' : ''}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="header-cta">Get a Quote <span>↗</span></a>

          <button
            className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
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
      ></div>

      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span>MENU</span>
          <button className="mobile-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
        </div>

        <nav className="mobile-drawer-nav">
          {navItems.map(([path, label]) => (
            <a
              key={path}
              href={path}
              className={currentPath === path ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="mobile-drawer-cta" onClick={() => setMenuOpen(false)}>
          Get a Quote <span>↗</span>
        </a>
      </aside>

      <main className="company-page">

        <section className="company-hero">
          <div className="company-hero-content">
            <div className="company-eyebrow"><span></span>ABOUT POS TECH</div>

            <h1>
              Building the future of
              <span>modern commerce.</span>
            </h1>

            <p>
              We create practical commerce technology that helps
              businesses simplify operations, serve customers better,
              and build for what comes next.
            </p>

            <div className="company-hero-actions">
              <a href="#our-story" className="company-primary-btn">Our Story <span>↘</span></a>
              <a href="#contact" className="company-secondary-btn">Talk to an Expert</a>
            </div>
          </div>

          <div className="company-hero-visual">
            <div className="company-orbit company-orbit-one"></div>
            <div className="company-orbit company-orbit-two"></div>

            <div className="company-visual-card">
              <div className="company-visual-top">
                <span>POS TECH</span>
                <span>MODERN COMMERCE</span>
              </div>

              <div className="company-visual-center">
                <div className="company-visual-mark">P</div>
                <div>
                  <small>CONNECTED COMMERCE</small>
                  <strong>BUILT TO MOVE BUSINESS FORWARD</strong>
                </div>
              </div>

              <div className="company-visual-lines">
                <i></i><i></i><i></i><i></i>
              </div>
            </div>
          </div>
        </section>

        <section className="company-story" id="our-story">
          <div className="company-section-heading">
            <div>
              <span>OUR STORY</span>
              <h2>Technology should make business simpler.</h2>
            </div>
            <p>
              POS TECH is built around a simple idea: commerce technology
              should help people do their jobs better, not make everyday
              operations more complicated.
            </p>
          </div>

          <div className="company-story-grid">
            <div className="company-story-number">
              <span>01</span>
              <strong>OUR<br />APPROACH</strong>
            </div>

            <div className="company-story-copy">
              <p>
                We focus on creating connected solutions for the moments
                that matter most — from the first customer interaction
                to the final payment.
              </p>
              <p>
                Our approach combines reliable hardware, thoughtful
                software, and flexible commerce experiences so businesses
                can build an operation that works for them today and
                grows with them tomorrow.
              </p>
            </div>
          </div>
        </section>

        <section className="company-purpose">
          <div className="company-purpose-card company-purpose-dark">
            <span>OUR MISSION</span>
            <h2>Make commerce <span>work better.</span></h2>
            <p>
              Give businesses technology that is reliable, intuitive,
              and ready for the pace of modern commerce.
            </p>
          </div>

          <div className="company-purpose-card company-purpose-light">
            <span>OUR VISION</span>
            <h2>A simpler way <span>to do business.</span></h2>
            <p>
              Build connected commerce experiences that help businesses
              operate with more clarity and confidence.
            </p>
          </div>
        </section>

        <section className="company-values">
          <div className="company-section-heading">
            <div>
              <span>WHAT WE BELIEVE</span>
              <h2>Built on the right principles.</h2>
            </div>
            <p>
              The products we build are shaped by the principles we bring
              to every decision, every experience, and every relationship.
            </p>
          </div>

          <div className="company-values-grid">
            <article>
              <strong>01</strong>
              <h3>Keep It Simple</h3>
              <p>Great technology should feel clear and intuitive, even when the systems behind it are complex.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Build With Purpose</h3>
              <p>Every feature should solve a real business problem and create meaningful value.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Stay Reliable</h3>
              <p>Businesses depend on their commerce systems. Reliability is part of the product.</p>
            </article>
            <article>
              <strong>04</strong>
              <h3>Think Forward</h3>
              <p>We design for today's needs while keeping an eye on what businesses need tomorrow.</p>
            </article>
          </div>
        </section>

        <section className="company-stats">
          <div className="company-stats-intro">
            <span>OUR COMMITMENT</span>
            <h2>Focused on <span>what matters.</span></h2>
          </div>

          <div className="company-stat-grid">
            <div><strong>01</strong><span>Customer First</span></div>
            <div><strong>02</strong><span>Built to Scale</span></div>
            <div><strong>03</strong><span>Connected by Design</span></div>
            <div><strong>04</strong><span>Ready for What's Next</span></div>
          </div>
        </section>

        <section className="company-bottom-cta" id="contact">
          <div>
            <span>LET'S WORK TOGETHER</span>
            <h2>Ready to build <span>what's next?</span></h2>
          </div>
          <a href="#contact">Talk to an Expert <span>↗</span></a>
        </section>

      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="/" className="brand footer-logo">
                <div className="brand-mark">P</div>
                <div className="brand-name">POS<span>TECH</span></div>
              </a>
              <p>
                Intelligent POS technology built to help modern businesses
                sell smarter, serve better and grow faster.
              </p>
              <a href="mailto:hello@postech.com" className="footer-email">hello@postech.com</a>
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
            <span>© 2026 POS TECH. All rights reserved.</span>
            <div className="footer-bottom-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <span className="footer-status"><i></i>SYSTEMS ONLINE</span>
          </div>
        </div>
      </footer>

      {showTopButton && (
        <button className="scroll-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  )
}

export default Company
