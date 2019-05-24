import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"

const ContactPage = () => {
  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata {
        twitter
        twitterUrl
      }
    }
  }`)

  return (
    <Layout>
      <h1>Contact Page</h1>
      <p>
        The best way to reach me is via{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${data.site.siteMetadata.twitterUrl}${data.site.siteMetadata.twitter}`}
        >
          {` ${data.site.siteMetadata.twitter} `}
      </a>
        on Twiter
    </p>
    </Layout>
  )
}

export default ContactPage
