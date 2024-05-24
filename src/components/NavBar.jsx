import CartWidget from './CartWidget.jsx';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg mysteryCH-NavColor">
      <div className="container-fluid">
        <div className="navbar-left">
          <Link className="navbar-brand" to='/'>
            <img src='/assets/images/store/MysteryCH_logotipo.png' alt="Logo" />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-center">
            <div className="category-filter">
              <h4 className='subtitulos'>Filtra por categoría</h4>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link nav-pills" to='/category/coffee'>Café</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-pills" to='/category/tea'>Té</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-pills" to='/category/juice'>Jugos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-pills" to='/category/food'>Comestibles</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-right">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className='btn position-relative carritoNav'>
                <CartWidget />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;