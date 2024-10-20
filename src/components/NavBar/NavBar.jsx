import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"> 
          <div className="d-flex align-items-center">
            <a className="navbar-brand me-2" href="#">Mi Tienda</a>
            <div className="d-lg-none"> 
              <CartWidget />
            </div>
          </div>
  
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Category 1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Category 2</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Category 3</a>
              </li>
            </ul>
            <div className="d-none d-lg-flex">
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    );
  };
  

export default NavBar