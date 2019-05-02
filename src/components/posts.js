import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout';
import '../components/page-styles/posts.scss'

function BlogPost(props) {
  const post = props.data.markdownRemark;
  const { title } = post.frontmatter;
  return (
    <Layout>
      <div class="blog-post">
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost;
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
