import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/cs-logo.svg'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navbarActiveClass, setNavbarActiveClass] = useState('');

  function toggleHamburger() {
    setActive(!active);
    active ? setNavbarActiveClass('is-active') : setNavbarActiveClass('');
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Home">
            <img src={logo} alt="Colton Sweeney" style={{ width: '88px' }} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navbarActiveClass}`}
            data-target="navMenu"
            onClick={toggleHamburger}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navbarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
              </Link>
            <Link className="navbar-item" to="/portfolio">
              Portfolio
              </Link>
            <Link className="navbar-item" to="/blog">
              Blog
              </Link>
            <Link className="navbar-item" to="/contact">
              Contact
              </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <OutboundLink
              className="navbar-item"
              href="https://github.com/pizdetz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </OutboundLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
