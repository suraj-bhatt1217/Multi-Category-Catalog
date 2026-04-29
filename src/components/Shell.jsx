import { Link } from 'react-router-dom';
import './Shell.css';

export default function Shell({ children }) {
  return (
    <>
      <header className="shell-header">
        <div className="shell-header__inner">
          <Link to="/" className="shell-logo">
            <span className="shell-logo__mark" aria-hidden />
            <span className="shell-logo__text">NovaCatalog</span>
          </Link>
          <nav className="shell-nav" aria-label="Primary">
            <Link to="/" className="shell-nav__link">
              Categories
            </Link>
          </nav>
        </div>
      </header>
      <main className="shell-main">{children}</main>
      <footer className="shell-footer">
        <p>Multi-category product catalog — assignment demo</p>
      </footer>
    </>
  );
}
