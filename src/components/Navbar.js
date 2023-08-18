import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const Nav = () => (
  <nav className="navbar">
    <h1 className="Bookstore-CMS">BOOKSTORE CMS</h1>
    <div className="navlist-con">
      <ul className="nav-list">
        <li>
          <NavLink
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
          >
            Categories
          </NavLink>
        </li>
      </ul>
      <div className="oval"><FontAwesomeIcon icon={faUser} /></div>
    </div>
  </nav>
);

export default Nav;
