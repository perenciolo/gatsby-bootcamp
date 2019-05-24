import React from "react"
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata {
        author
        year
      }
    }
  }`)

  return (
    <footer>
      <p>Created by {data.site.siteMetadata.author}, &copy; {data.site.siteMetadata.year}</p>
    </footer>
  )
}

export default Footer
