import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  // MARKDOWN QUERY
  // const data = useStaticQuery(graphql`query {
  //   allMarkdownRemark {
  //     edges {
  //       node {
  //         frontmatter {
  //           title
  //           date
  //         }
  //         html
  //         excerpt
  //         fields {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // }`)
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i) => {
          return (
            <li className={blogStyles.post} key={i}>
              <Link to={`/blog/${edge.node.slug}`}>
                <strong>{`${edge.node.title} `}</strong>
                <small>{edge.node.publishedDate}</small>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
