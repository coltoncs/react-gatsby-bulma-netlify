//Modules
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, animated, config } from 'react-spring'

//Components 
import Wiggle from './Wiggle'

//Styles & logos
import logo from '../img/cs-logo.svg'
import twitter from '../img/social/twitter.svg'
import linkedin from '../img/social/linkedin.svg'
import github from '../img/github-icon.svg'

const Footer = () => {
  //Create footer animation with slide up and fade in
  const animation = useSpring({opacity: 1, transform: 'translate3d(0,0rem,0)', from: {opacity:0, transform: 'translate3d(0, 20rem, 0)'}, config: config.slow})
  
  //Return the footer view with the animation applied to the parent
  return (
    <animated.footer style={animation} className="footer has-background-primary has-text-white-ter">
      <div className="content has-text-centered">
        <img
          src={logo}
          alt="Colton Sweeney"
          style={{ width: '14em', height: '10em' }}
        />
      </div>
      <div className="content has-text-centered has-background-primary has-text-white-ter">
        <div className="container has-background-primary has-text-white-ter">
          <div className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/portfolio">
                      Portfolio
                      </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Latest Posts
                      </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                      </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a title="twitter" href="https://twitter.com/coltonsdev">
                <Wiggle rotation={15}>
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '1em', height: '1em' }}
                />
                </Wiggle>
              </a>
              <a title="linkedin" href="https://www.linkedin.com/in/colton-sweeney/">
                <Wiggle rotation={-15}>
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  style={{ width: '1em', height: '1em' }}
                />
                </Wiggle>
              </a>
              <a title="github" href="https://github.com/pizdetz">
                <Wiggle rotation={15}>
                <img
                  src={github}
                  alt="GitHub"
                  style={{ width: '1em', height: '1em' }}
                />
                </Wiggle>
              </a>
            </div>
          </div>
        </div>
      </div>
    </animated.footer>
  )

}

export default Footer
