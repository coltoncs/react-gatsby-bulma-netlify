import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import { useSpring, animated, config } from 'react-spring'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const animate = useSpring({
    to: [{opacity: 1, transform: 'translate3d(0, 0rem, 0)'}], 
    from: { opacity: 0, transform: 'translate3d(0, -15rem, 0)'}, config: config.slow
  })

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/favicon.ico`}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href={`${withPrefix("/")}img/favicon.ico`}
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <Navbar />
      <animated.div style={animate}>{children}</animated.div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
