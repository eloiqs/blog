import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

const BlogPost: React.FunctionComponent<Props> = ({
  data: { markdownRemark: post },
}) => (
  <Layout>
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  </Layout>
)

export default BlogPost

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: {
        title: string
      }
    }
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
