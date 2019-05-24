import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Head from "../components/head"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD MMMM YYYY")
      body {
        json
      }
    }
  }
`
// CREATE MARKDOWN QUERY
// export const query = graphql`query ($slug: String!) {
//   markdownRemark (
//     fields: { slug: { eq: $slug } }
//   ) {
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url

        return <img src={url} alt={alt} />
      },
    },
  }
  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>
        <small>{props.data.contentfulBlogPost.publishedDate}</small>
      </p>
      {documentToReactComponents(
        props.data.contentfulBlogPost.body.json,
        options
      )}
      <Link to="/blog">Back to all posts</Link>
    </Layout>
  )
}

export default Blog
