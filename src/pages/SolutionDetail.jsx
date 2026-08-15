import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const solutionDetails = {
  'point-of-sale': {
    name: 'Point of Sale',
    eyebrow: 'POINT OF SALE',
    title: 'Checkout built for',
    highlight: 'modern business.',
    description:
      'Fast, reliable point-of-sale technology designed to keep transactions moving and give your team a simpler everyday checkout experience.',
    features: [
      ['01', 'Fast Checkout', 'Keep transactions moving with a focused, efficient checkout workflow.'],
      ['02', 'Reliable Operations', 'Give teams dependable technology for everyday selling.'],
      ['03', 'Connected Commerce', 'Connect checkout with the wider commerce experience.'],
      ['04', 'Ready to Scale', 'Build a POS foundation that can grow with your business.'],
    ],
    specs: [
      ['Solution', 'Point of Sale'],
      ['Best For', 'Retail & Hospitality'],
      ['Core Experience', 'Checkout & Transactions'],
      ['Hardware', 'POS Terminals & Accessories'],
      ['Deployment', 'Countertop / Mobile'],
    ],
  },

  'order-management': {
    name: 'Order Management',
    eyebrow: 'ORDER MANAGEMENT',
    title: 'Keep every order',
    highlight: 'moving smoothly.',
    description:
      'Connect orders, operations, and fulfillment into a more organized workflow from the moment an order is created through completion.',
    features: [
      ['01', 'Connected Orders', 'Bring order information into one connected workflow.'],
      ['02', 'Better Visibility', 'Help teams stay organized from order to fulfillment.'],
      ['03', 'Fewer Friction Points', 'Simplify everyday operational steps for your team.'],
      ['04', 'Scalable Workflows', 'Create an operational foundation that can grow with demand.'],
    ],
    specs: [
      ['Solution', 'Order Management'],
      ['Best For', 'Restaurants & Hospitality'],
      ['Core Experience', 'Ordering & Fulfillment'],
      ['Hardware', 'POS & Order Taking Devices'],
      ['Deployment', 'Connected'],
    ],
  },

  'self-service': {
    name: 'Self-Service',
    eyebrow: 'SELF-SERVICE',
    title: 'Give customers a',
    highlight: 'faster way to buy.',
    description:
      'Create intuitive self-service experiences that let customers browse, order, and complete transactions with less friction.',
    features: [
      ['01', 'Easy Ordering', 'Create a straightforward customer-led ordering journey.'],
      ['02', 'Reduced Queues', 'Give customers another way to complete everyday purchases.'],
      ['03', 'Simple Interfaces', 'Keep interactions clear and intuitive.'],
      ['04', 'Flexible Deployment', 'Build self-service experiences around your environment.'],
    ],
    specs: [
      ['Solution', 'Self-Service'],
      ['Best For', 'Retail & Hospitality'],
      ['Core Experience', 'Customer-led Ordering'],
      ['Hardware', 'Kiosks & Displays'],
      ['Deployment', 'Stationary'],
    ],
  },

  'digital-experiences': {
    name: 'Digital Experiences',
    eyebrow: 'DIGITAL EXPERIENCES',
    title: 'Turn every touchpoint',
    highlight: 'into an experience.',
    description:
      'Create connected customer journeys across digital displays, interfaces, and in-store experiences that feel consistent and easy to use.',
    features: [
      ['01', 'Digital Displays', 'Present menus, promotions, and information clearly.'],
      ['02', 'Connected Journeys', 'Create a consistent experience across customer touchpoints.'],
      ['03', 'Flexible Content', 'Support changing customer and business needs.'],
      ['04', 'Modern Experience', 'Make every interaction feel simple and intuitive.'],
    ],
    specs: [
      ['Solution', 'Digital Experiences'],
      ['Best For', 'Retail & Hospitality'],
      ['Core Experience', 'Digital Customer Journey'],
      ['Hardware', 'Digital Displays & Interfaces'],
      ['Deployment', 'In-store / Customer-facing'],
    ],
  },
}

function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutionDetails[slug]
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!solution) {
    return (
      <main className="solution-detail-not-found">
        <span>SOLUTION NOT FOUND</span>
        <h1>We couldn't find that solution.</h1>
        <Link to="/solutions">← Back to Solutions</Link>
      </main>
    )
  }

  return (
    <div className="app solution-detail-page">

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
            <Link to="/solutions" className="active">Solutions</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/company">Company</Link>
          </nav>

          <a href="#solution-contact" className="header-cta">
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
          <Link to="/solutions" className="active" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/industries" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
        </nav>

        <a
          href="#solution-contact"
          className="mobile-drawer-cta"
          onClick={() => setMenuOpen(false)}
        >
          Get a Quote
          <span>↗</span>
        </a>
      </aside>


      <main>

        <section className="solution-detail-hero">

          <div className="solution-detail-copy">

            <Link to="/solutions" className="solution-back-link">
              ← Back to Solutions
            </Link>

            <div className="solution-detail-eyebrow">
              <span></span>
              {solution.eyebrow}
            </div>

            <h1>
              {solution.title}
              <span>{solution.highlight}</span>
            </h1>

            <p>{solution.description}</p>

            <div className="solution-detail-actions">
              <a href="#solution-contact" className="solutions-primary-btn">
                Talk to an Expert
                <span>↗</span>
              </a>

              <a href="#solution-features" className="solutions-secondary-btn">
                Explore Solution
              </a>
            </div>

          </div>

          <div className="solution-detail-visual">

            <div className="solution-detail-glow"></div>

            <div className="solution-dashboard-detail">

              <div className="detail-dashboard-top">
                <span>BUSINESS OVERVIEW</span>
                <span><i></i> LIVE</span>
              </div>

              <div className="detail-dashboard-total">
                <small>Today's Revenue</small>
                <strong>₹48,620</strong>
                <span>+18.4%</span>
              </div>

              <div className="detail-dashboard-bars">
                <i></i><i></i><i></i><i></i><i></i><i></i><i></i>
              </div>

              <div className="detail-dashboard-cards">
                <div></div>
                <div></div>
                <div></div>
              </div>

            </div>

          </div>

        </section>


        <section className="solution-detail-features" id="solution-features">

          <div className="solution-detail-heading">
            <span>WHAT YOU GET</span>
            <h2>Built around your business.</h2>
          </div>

          <div className="solution-feature-grid">
            {solution.features.map(([number, title, description]) => (
              <article key={number}>
                <strong>{number}</strong>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>

        </section>


        <section className="solution-detail-specs">

          <div className="solution-detail-heading">
            <span>SOLUTION OVERVIEW</span>
            <h2>Designed to fit your workflow.</h2>
          </div>

          <div className="solution-spec-table">
            {solution.specs.map(([label, value]) => (
              <div className="solution-spec-row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

        </section>


        <section className="solution-detail-cta" id="solution-contact">

          <div>
            <span>READY TO GET STARTED?</span>
            <h2>
              Let's build a
              <span>smarter operation.</span>
            </h2>
          </div>

          <a href="mailto:hello@postech.com">
            Talk to an Expert
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
                <a href="/products#product-catalog">POS Hardware</a>
                <a href="/products#product-catalog">Self-Service</a>
              </div>

              <div className="footer-column">
                <h4>Solutions</h4>
                <Link to="/solutions">All Solutions</Link>
                <a href="/solutions/point-of-sale">Point of Sale</a>
                <a href="/solutions/order-management">Order Management</a>
                <a href="/solutions/digital-experiences">Digital Experiences</a>
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

export default SolutionDetail
