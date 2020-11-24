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
              boxShadow: '0.5rem 0 0 rgba(0, 100, 148, 0.7), -0.5rem 0 0 rgba(27, 152, 224, 0.7)',
              backgroundColor: 'rgb(19, 41, 61)',
              color: 'white',
              padding: '1rem',
              textShadow: '3px 3px 1px rgba(200, 200, 200, 0.25)',
            }}
          >
            My Latest Projects
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
