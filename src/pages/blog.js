import React from "react"
import { graphql, Link, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import headerStyles from '../components/header.module.scss'

const BlogPage = () => {
  const data = useStaticQuery(graphql`query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }`)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          return (
            <li key={i}>
              <Link className={headerStyles.navItem} to={`/blog/${edge.node.fields.slug}`}>
                <strong>{`${edge.node.frontmatter.title} `}</strong>
                <small>{edge.node.frontmatter.date}</small>
              </Link>
            </li>);
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
