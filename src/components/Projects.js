import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Projects extends React.Component {
  render() {
    const { data } = this.props
    const { edges: panes } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {panes &&
          panes.map(({ node: pane }) => (
            <div className="is-parent column is-6" key={pane.id}>
              <article
                className={`blog-list-item tile is-child box notification ${
                  pane.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <header>
                  {pane.frontmatter.featuredimage ? (
                    <div className="featured-thumbnail">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: pane.frontmatter.featuredimage,
                          alt: `featured image thumbnail for project ${
                            pane.title
                          }`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p className="post-meta">
                    <span><h1>{pane.frontmatter.title}</h1><h4><small>{pane.frontmatter.type}</small></h4></span>  
                    <span className="subtitle is-size-5 is-block">
                      {pane.frontmatter.date}
                    </span>
                  </p>
                </header>
                <p>
                  {pane.excerpt}
                  <br />
                  <br />
                  <Link className="button" to={pane.fields.slug}>
                    Keep Reading →
                  </Link>      
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {templateKey: {eq: "portfolio-page"}}}
        ) {
          edges {
            node {
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                description
                type
                title
                tags
                templateKey
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, maxHeight: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              excerpt(pruneLength: 100)
              id
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Projects data={data} count={count} />}
  />
)
