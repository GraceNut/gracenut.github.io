import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/page-styles/index.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div class="bio">
      <h2>Intro</h2>
      <p>
        Hi, I’m Haley Gerstenberg. If you want to get to know me a bit, this is the place to do it.  
        I do a variety of things. I’m a lifelong bad writer, trying to be a consistent one. If you’d like to say hi, 
        feel free to reach out on <a href="https://twitter.com/imhaleyfyi">Twitter</a>.
      </p>
    </div>

    <div class="posts">
      <h2>Writing</h2>
      <ul>
        { data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={ node.id } className="post">
            <Link to={ node.fields.slug } className="post-link">
              <h3 className="title">{ node.frontmatter.title }</h3>
              <p className="excerpt">{ node.excerpt }</p>
              <div class="info">
                <span className="date">{ node.frontmatter.date }</span>
                <span className="readtime">read time:&nbsp;{ node.timeToRead }min</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default IndexPage

export const  query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
        excerpt
        timeToRead
      }
    }
  }
}
`
