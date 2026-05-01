const PRODUCTS = [
  {
    name: 'Family Finance',
    domain: 'finance.getfamilyfinance.com',
    href: 'https://finance.getfamilyfinance.com',
    appHref: 'https://app.getfamilyfinance.com',
    description:
      "Plan your family's budget, track spending, and stay on top of monthly bills together.",
    tags: ['Budgeting', 'Bills', 'Goals'],
    iconClass: 'product-icon-finance',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h4l3-9 4 18 3-9h4" />
      </svg>
    ),
  },
  {
    name: 'Stock Chatter',
    domain: 'stocktracker.getfamilyfinance.com',
    href: 'https://stocktracker.getfamilyfinance.com',
    appHref: 'https://stocktracker.getfamilyfinance.com/dashboard',
    description:
      'Catch trending stocks early. Daily AI scan of social signals, with entry, target, and stop levels.',
    tags: ['Investing', 'AI signals', 'Daily digest'],
    iconClass: 'product-icon-stock',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-head">
        <div className={`product-icon ${product.iconClass}`}>{product.icon}</div>
        <div>
          <div className="product-name">{product.name}</div>
          <div className="product-domain">{product.domain}</div>
        </div>
      </div>
      <p className="product-desc">{product.description}</p>
      <div className="product-tags">
        {product.tags.map((t) => (
          <span key={t} className="product-tag">
            {t}
          </span>
        ))}
      </div>
      <div className="product-actions">
        <a
          className="product-cta"
          href={product.appHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch app
          <span aria-hidden="true">→</span>
        </a>
        <a
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 12, color: 'var(--text-faint)' }}
        >
          Learn more
        </a>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="page">
      <nav className="nav">
        <div className="nav-brand">
          <div className="nav-logo">G</div>
          <div className="nav-name">GetFamilyFinance</div>
        </div>
        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="https://app.getfamilyfinance.com" className="nav-link-cta">
            Sign in
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-eyebrow">A family of money tools</div>
        <h1 className="hero-title">Smart tools for smarter family finances.</h1>
        <p className="hero-sub">
          A growing collection of simple, beautiful apps to help your family
          budget, invest, and grow wealth together.
        </p>
      </section>

      <section className="products" id="products">
        <div className="products-label">Our apps</div>
        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        <div className="coming-soon">
          <div className="coming-soon-title">More tools coming soon</div>
          <div className="coming-soon-sub">
            Tax helper, retirement planner, kids&apos; allowance tracker
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 GetFamilyFinance</span>
        <span>Privacy · Terms · Contact</span>
      </footer>
    </main>
  );
}
