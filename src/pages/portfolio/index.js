import React from 'react'

import Layout from '../../components/Layout'
import Projects from '../../components/Projects'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/portfolio-image.jpg')`,
            backgroundPosition: `center center`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 rgb(2, 43, 58), -0.5rem 0 0 rgb(2, 43, 58)',
              backgroundColor: 'rgb(2, 43, 58)',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Projects
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <Projects />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
