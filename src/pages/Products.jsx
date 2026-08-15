function Products() {
  return (
    <main className="products-page">

      {/* PRODUCTS HERO */}
      <section className="products-hero">
        <div className="products-hero-content">

          <div className="products-eyebrow">
            <span></span>
            OUR PRODUCTS
          </div>

          <h1>
            Technology built for
            <span> modern commerce.</span>
          </h1>

          <p>
            Powerful POS hardware and intelligent commerce solutions
            designed to help businesses sell faster, serve better,
            and grow with confidence.
          </p>

          <div className="products-hero-actions">
            <a href="#featured-products" className="products-primary-btn">
              Explore Products
              <span>↘</span>
            </a>

            <a href="#contact" className="products-secondary-btn">
              Talk to an Expert
            </a>
          </div>

        </div>

        <div className="products-hero-visual">
          <div className="products-glow"></div>

          <div className="product-device">
            <div className="device-screen">
              <div className="screen-top">
                <span>POS</span>
                <span>●</span>
              </div>

              <div className="screen-total">
                <small>Today's Sales</small>
                <strong>$24,680</strong>
              </div>

              <div className="screen-bars">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>

            <div className="device-base"></div>
          </div>
        </div>
      </section>


      {/* PRODUCT CATEGORIES */}
      <section className="product-categories">

        <div className="products-section-heading">
          <div>
            <span>PRODUCT ECOSYSTEM</span>
            <h2>Everything you need to sell.</h2>
          </div>

          <p>
            From checkout hardware to self-service experiences,
            build a complete commerce setup around your business.
          </p>
        </div>

        <div className="product-category-grid">

          <article className="product-category-card">
            <div className="product-card-number">01</div>
            <div className="product-card-icon">▣</div>
            <h3>POS Terminals</h3>
            <p>
              Modern point-of-sale terminals designed for
              fast, reliable everyday transactions.
            </p>
            <a href="#featured-products">
              Explore
              <span>↗</span>
            </a>
          </article>

          <article className="product-category-card">
            <div className="product-card-number">02</div>
            <div className="product-card-icon">▤</div>
            <h3>Self-Service Kiosks</h3>
            <p>
              Give customers a faster way to browse, order,
              pay, and complete their purchases.
            </p>
            <a href="#featured-products">
              Explore
              <span>↗</span>
            </a>
          </article>

          <article className="product-category-card">
            <div className="product-card-number">03</div>
            <div className="product-card-icon">◫</div>
            <h3>Payment Devices</h3>
            <p>
              Flexible payment hardware built to support
              secure and seamless transactions.
            </p>
            <a href="#featured-products">
              Explore
              <span>↗</span>
            </a>
          </article>

          <article className="product-category-card">
            <div className="product-card-number">04</div>
            <div className="product-card-icon">⌘</div>
            <h3>Accessories</h3>
            <p>
              Essential accessories that complete your
              point-of-sale and commerce environment.
            </p>
            <a href="#featured-products">
              Explore
              <span>↗</span>
            </a>
          </article>

        </div>
      </section>


      {/* FEATURED PRODUCTS */}
      <section className="featured-products" id="featured-products">

        <div className="products-section-heading featured-heading">
          <div>
            <span>FEATURED HARDWARE</span>
            <h2>Built to perform.</h2>
          </div>

          <p>
            Premium hardware designed around speed,
            reliability, and a better customer experience.
          </p>
        </div>

        <div className="featured-product-grid">

          <article className="featured-product-card large">
            <div className="featured-product-visual terminal-visual">
              <div className="terminal-shape">
                <div className="terminal-display"></div>
              </div>
            </div>

            <div className="featured-product-info">
              <span>01 / POS HARDWARE</span>
              <h3>Smart POS Terminal</h3>
              <p>
                A powerful all-in-one checkout experience
                for modern retail and hospitality businesses.
              </p>
              <a href="#contact">
                Request Information
                <span>↗</span>
              </a>
            </div>
          </article>

          <article className="featured-product-card">
            <div className="featured-product-visual kiosk-visual">
              <div className="kiosk-shape">
                <div className="kiosk-screen"></div>
              </div>
            </div>

            <div className="featured-product-info">
              <span>02 / SELF-SERVICE</span>
              <h3>Self-Service Kiosk</h3>
              <p>
                Streamline ordering and reduce waiting times.
              </p>
              <a href="#contact">
                Request Information
                <span>↗</span>
              </a>
            </div>
          </article>

          <article className="featured-product-card">
            <div className="featured-product-visual payment-visual">
              <div className="payment-device">
                <div className="payment-screen"></div>
                <div className="payment-buttons"></div>
              </div>
            </div>

            <div className="featured-product-info">
              <span>03 / PAYMENTS</span>
              <h3>Payment Device</h3>
              <p>
                Fast and secure payment acceptance.
              </p>
              <a href="#contact">
                Request Information
                <span>↗</span>
              </a>
            </div>
          </article>

        </div>
      </section>


      {/* CTA */}
      <section className="products-bottom-cta" id="contact">
        <div>
          <span>READY TO BUILD?</span>
          <h2>
            Let's find the right
            <span> solution for you.</span>
          </h2>
        </div>

        <a href="#contact">
          Talk to an Expert
          <span>↗</span>
        </a>
      </section>

    </main>
  )
}

export default Products