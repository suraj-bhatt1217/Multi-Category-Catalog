import { Link, Navigate, useParams } from 'react-router-dom';
import { items } from '../utils/catalog';
import './ItemDetail.css';

export default function ItemDetail() {
  const { id } = useParams();
  const numericId = Number(id);

  const invalid =
    id === undefined ||
    Number.isNaN(numericId) ||
    !Number.isInteger(numericId) ||
    numericId < 0 ||
    numericId >= items.length;

  if (invalid) {
    return <Navigate to="/" replace />;
  }

  const item = items[numericId];

  return (
    <article className="detail">
      <Link to="/" className="detail-back">
        <span aria-hidden>←</span> Back to categories
      </Link>

      <div className="detail-layout">
        <div className="detail-visual">
          <div className="detail-image-wrap">
            <img
              src={item.image}
              alt=""
              decoding="async"
            />
          </div>
          <span className="detail-category-chip">{item.category}</span>
        </div>

        <div className="detail-content">
          <h1 className="detail-title">{item.itemname}</h1>
          <p className="detail-meta-line">
            <span className="detail-meta-label">Category</span>
            <span className="detail-meta-value">{item.category}</span>
          </p>

          <h2 className="detail-section-title">Specifications</h2>
          <dl className="detail-props">
            {item.itemprops.map((prop, propIndex) => (
              <div key={`${propIndex}-${prop.label}`} className="detail-prop">
                <dt className="detail-prop__label">{prop.label}</dt>
                <dd className="detail-prop__value">{prop.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  );
}
