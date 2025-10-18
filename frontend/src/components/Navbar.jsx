import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Digital Portfolio</span>
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="nav-item dropdown">
            <button
              className={`nav-link dropdown-toggle ${location.pathname.includes('/projects') ? 'active' : ''}`}
              onClick={() => handleDropdownToggle('projects')}
            >
              Projects <ChevronDown size={16} />
            </button>
            <ul className={`dropdown-menu ${activeDropdown === 'projects' ? 'show' : ''}`}>
              <li>
                <Link
                  to="/projects/year1"
                  className="dropdown-link"
                  onClick={() => setIsOpen(false)}
                >
                  NYP Year 1
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/year2"
                  className="dropdown-link"
                  onClick={() => setIsOpen(false)}
                >
                  NYP Year 2
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <button
              className={`nav-link dropdown-toggle ${location.pathname.includes('/activities') ? 'active' : ''}`}
              onClick={() => handleDropdownToggle('activities')}
            >
              Activities <ChevronDown size={16} />
            </button>
            <ul className={`dropdown-menu ${activeDropdown === 'activities' ? 'show' : ''}`}>
              <li>
                <Link
                  to="/activities/hobbies"
                  className="dropdown-link"
                  onClick={() => setIsOpen(false)}
                >
                  Hobbies
                </Link>
              </li>
              <li>
                <Link
                  to="/activities/cca"
                  className="dropdown-link"
                  onClick={() => setIsOpen(false)}
                >
                  CCA
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              to="/certificates"
              className={`nav-link ${isActive('/certificates') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Certificates
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
