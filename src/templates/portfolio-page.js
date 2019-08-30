import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'

import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioPageTemplate = ({
  content,
  title,
  tags,
  description,
  helmet,
  contentComponent
}) => {
  const PortfolioContent = contentComponent || Content
  return(
  <section className="section">
    {helmet || ''}
    <div className="container content">
      <div className="columns">
          <div className="column is-10 is-offset-1">
            <Link className="btn" to="/portfolio">Return to Portfolio</Link>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PortfolioContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
    </div>
  </section>
  )
}


const PortfolioPage = ({ data }) => {
  const { markdownRemark: portfolio } = data

  return (
    <Layout>
      <PortfolioPageTemplate
        content={portfolio.html}
        title={portfolio.frontmatter.title}
        tags={portfolio.frontmatter.tags}
        description={portfolio.frontmatter.description}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPage

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        date
        title
        type
        description
        tags
      }
    }
  }
`