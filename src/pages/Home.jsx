import { Link } from 'react-router-dom';
import { groupByCategory, items, sortedCategoryKeys } from '../utils/catalog';
import './Home.css';

const CATEGORY_THEME = {
  Cars: {
    stripe: '#38bdf8',
    badge: 'rgba(56, 189, 248, 0.18)',
    label: '#7dd3fc',
  },
  Bikes: {
    stripe: '#fb7185',
    badge: 'rgba(251, 113, 133, 0.18)',
    label: '#fda4af',
  },
  Phones: {
    stripe: '#c084fc',
    badge: 'rgba(192, 132, 252, 0.18)',
    label: '#d8b4fe',
  },
  Computers: {
    stripe: '#34d399',
    badge: 'rgba(52, 211, 153, 0.18)',
    label: '#6ee7b7',
  },
};

function defaultTheme() {
  return {
    stripe: 'var(--accent)',
    badge: 'var(--accent-dim)',
    label: 'var(--accent)',
  };
}

export default function Home() {
  const grouped = groupByCategory(items);
  const keys = sortedCategoryKeys(grouped);

  return (
    <div className="home">
      <header className="home-hero">
        <p className="home-hero__eyebrow">Explore the collection</p>
        <h1 className="home-hero__title">Dynamic multi-category catalog</h1>
        <p className="home-hero__subtitle">
          Browse by segment — each section groups products with previews. Select any item for full specs.
        </p>
      </header>

      {keys.map((category) => (
        <section
          key={category}
          className="category-block"
          style={{
            '--category-stripe': (CATEGORY_THEME[category] || defaultTheme()).stripe,
            '--category-badge-bg': (CATEGORY_THEME[category] || defaultTheme()).badge,
            '--category-badge-text': (CATEGORY_THEME[category] || defaultTheme()).label,
          }}
        >
          <div className="category-block__head">
            <h2 className="category-block__title">{category}</h2>
            <span className="category-block__count">
              {grouped[category].length} {grouped[category].length === 1 ? 'item' : 'items'}
            </span>
          </div>

          <ul className="category-grid">
            {grouped[category].map(({ item, index }) => (
              <li key={`${category}-${index}`}>
                <Link to={`/item/${index}`} className="product-card">
                  <div className="product-card__media">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="product-card__badge">{item.category}</span>
                  </div>
                  <div className="product-card__body">
                    <h3 className="product-card__name">{item.itemname}</h3>
                    {item.itemprops.length > 0 && (
                      <p className="product-card__preview">
                        <span className="product-card__preview-label">{item.itemprops[0].label}</span>
                        {' · '}
                        <span>{item.itemprops[0].value}</span>
                        {item.itemprops.length > 1 && (
                          <span className="product-card__preview-more">
                            {' '}+{item.itemprops.length - 1} more
                          </span>
                        )}
                      </p>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
