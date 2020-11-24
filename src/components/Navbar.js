import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/cs-logo.svg'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Wiggle from './Wiggle'

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
            <Wiggle y={3}>
              <img src={logo} alt="Colton Sweeney" style={{ width: '88px' }} />
            </Wiggle>
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
              <Wiggle x={2}>
                About
              </Wiggle>
            </Link>
            <Link className="navbar-item" to="/portfolio">
              <Wiggle y={2}>
                Portfolio
              </Wiggle>
            </Link>
            <Link className="navbar-item" to="/blog">
              <Wiggle x={-2}>
                Blog
              </Wiggle>
            </Link>
            <Link className="navbar-item" to="/contact">
              <Wiggle y={-2}>
                Contact
              </Wiggle>
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <OutboundLink
              className="navbar-item"
              href="https://github.com/pizdetz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Wiggle rotation={30} className="icon">
                <img src={github} alt="Github" />
              </Wiggle>
            </OutboundLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
