import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

const data = {
  retail: ['Retail','RETAIL','Keep every store','moving smarter.','Keep stores moving with fast checkout, flexible payments, and connected customer experiences built around the pace of retail.','Checkout & Payments'],
  restaurants: ['Restaurants','RESTAURANTS','Serve customers','without the friction.','Simplify ordering, payments, and table-side experiences while keeping service fast and your team focused on the customer.','Ordering & Payments'],
  hospitality: ['Hospitality','HOSPITALITY','Make every guest','interaction count.','Deliver seamless guest experiences across front desk, payments, and on-property services with connected commerce technology.','Guest Experience & Payments'],
  'small-business': ['Small Business','SMALL BUSINESS','Everything you need','to run the day.','Get the essential tools to manage everyday sales, payments, and customer interactions with a simple, dependable commerce setup.','Sales & Payments'],
  'quick-service': ['Quick Service','QUICK SERVICE','Built for','high-volume service.','Speed up high-volume service with streamlined ordering, checkout, and self-service experiences designed around throughput.','Speed & Ordering'],
  'growing-businesses': ['Growing Businesses','GROWING BUSINESSES','Start focused.','Scale with confidence.','Build a flexible commerce foundation that can scale from one location to many without adding unnecessary operational complexity.','Scalability & Operations'],
}

function IndustryDetail() {
  const { slug } = useParams()
  const item = data[slug]
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [menuOpen])

  if (!item) {
    return (
      <main className="industry-detail-not-found">
        <span>INDUSTRY NOT FOUND</span>
        <h1>We couldn't find that industry.</h1>
        <Link to="/industries">← Back to Industries</Link>
      </main>
    )
  }

  const [name, eyebrow, title, highlight, description, focus] = item
  const features = [
    ['01','Fast Operations',`Keep ${name.toLowerCase()} workflows simple, responsive, and easy to operate.`],
    ['02','Better Customer Experience','Create smoother interactions across the customer journey.'],
    ['03','Connected Commerce','Bring transactions and everyday business operations together.'],
    ['04','Ready to Grow','Build a flexible foundation that can expand with your business.'],
  ]

  return (
    <div className="app industry-detail-page">
      <header className="site-header">
        <div className="header-container">
          <Link to="/" className="brand"><div className="brand-mark">P</div><div className="brand-name">POS<span>TECH</span></div></Link>
          <nav className="main-nav">
            <Link to="/products">Products</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/industries" className="active">Industries</Link>
            <Link to="/company">Company</Link>
          </nav>
          <a href="/contact" className="header-cta">Get a Quote <span>↗</span></a>
          <button className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <aside className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header"><span>MENU</span><button className="mobile-drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button></div>
        <nav className="mobile-drawer-nav">
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/solutions" onClick={() => setMenuOpen(false)}>Solutions</Link>
          <Link to="/industries" className="active" onClick={() => setMenuOpen(false)}>Industries</Link>
          <Link to="/company" onClick={() => setMenuOpen(false)}>Company</Link>
        </nav>
        <a href="/contact" className="mobile-drawer-cta" onClick={() => setMenuOpen(false)}>Get a Quote <span>↗</span></a>
      </aside>

      <main>
        <section className="industry-detail-hero">
          <div className="industry-detail-copy">
            <Link to="/industries" className="industry-back-link">← Back to Industries</Link>
            <div className="industry-detail-eyebrow"><span></span>{eyebrow}</div>
            <h1>{title}<span>{highlight}</span></h1>
            <p>{description}</p>
            <div className="industry-detail-actions">
              <Link to="/contact" className="industries-primary-btn">Talk to an Expert <span>↗</span></Link>
              <Link to="/industries" className="industries-secondary-btn">Explore Industry</Link>
            </div>
          </div>
          <div className="industry-detail-visual">
            <div className="industry-detail-glow"></div>
            <div className="industry-detail-dashboard">
              <div className="industry-detail-top"><span>INDUSTRY OVERVIEW</span><span>● LIVE</span></div>
              <div className="industry-detail-main"><small>Connected Locations</small><strong>128</strong><span>+24.8% this year</span></div>
              <div className="industry-detail-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
              <div className="industry-detail-metrics"><div><small>Transactions</small><strong>24.6K</strong></div><div><small>Uptime</small><strong>99.9%</strong></div><div><small>Locations</small><strong>128</strong></div></div>
            </div>
          </div>
        </section>

        <section className="industry-detail-focus" id="industry-focus">
          <div className="industry-detail-heading"><span>BUILT FOR {eyebrow}</span><h2>Technology around the way you work.</h2></div>
          <div className="industry-focus-grid">
            {features.map(([n,t,d]) => <article key={n}><strong>{n}</strong><div><h3>{t}</h3><p>{d}</p></div></article>)}
          </div>
        </section>

        <section className="industry-detail-overview">
          <div className="industry-detail-heading"><span>INDUSTRY OVERVIEW</span><h2>A setup designed for your environment.</h2></div>
          <div className="industry-overview-table">
            {[
              ['Industry',name],['Core Needs',focus],['Customer Experience','Connected'],['Deployment','Single & Multi-Location'],['Best Fit',name]
            ].map(([a,b]) => <div className="industry-overview-row" key={a}><span>{a}</span><strong>{b}</strong></div>)}
          </div>
        </section>

        <section className="industry-detail-cta" id="industry-contact">
          <div><span>BUILT FOR {eyebrow}</span><h2>Let's build the right<span>setup for your business.</span></h2></div>
          <a href="mailto:hello@postech.com">Talk to an Expert <span>↗</span></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <Link to="/" className="brand footer-logo"><div className="brand-mark">P</div><div className="brand-name">POS<span>TECH</span></div></Link>
              <p>Intelligent POS technology built to help modern businesses sell smarter, serve better and grow faster.</p>
              <a href="mailto:hello@postech.com" className="footer-email">hello@postech.com</a>
            </div>
            <div className="footer-links">
              <div className="footer-column"><h4>Products</h4><Link to="/products">All Products</Link><Link to="/products">POS Hardware</Link><Link to="/products">Self-Service</Link></div>
              <div className="footer-column"><h4>Solutions</h4><Link to="/solutions">All Solutions</Link><Link to="/solutions/point-of-sale">Point of Sale</Link><Link to="/solutions/order-management">Order Management</Link><Link to="/solutions/digital-experiences">Digital Experiences</Link></div>
              <div className="footer-column"><h4>Company</h4><Link to="/company">About Us</Link><Link to="/industries">Industries</Link><a href="#industry-contact">Contact</a></div>
            </div>
          </div>
          <div className="footer-bottom"><span>© 2026 POS TECH. All rights reserved.</span><div className="footer-bottom-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/rma">Support / RMA</a></div><span className="footer-status"><i></i>SYSTEMS ONLINE</span></div>
        </div>
      </footer>

      {showTopButton && <button className="scroll-top-btn" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top">↑</button>}
    </div>
  )
}

export default IndustryDetail
