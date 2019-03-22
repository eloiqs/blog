import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

const IndexPage: React.FunctionComponent<Props> = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Home"
      keywords={[
        `eloiqs`,
        `blog`,
        `eloi`,
        `software`,
        `developer`,
        `development`,
      ]}
    />
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              {node.frontmatter.title}{' '}
              <span
                style={{
                  color: '#bbb',
                }}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

interface Props {
  data: {
    allMarkdownRemark: {
      totalCount: number
      edges: {
        node: {
          id: string
          frontmatter: {
            title: string
            date: string
          }
          fields: {
            slug: string
          }
          excerpt: string
        }
      }[]
    }
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
