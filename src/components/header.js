import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// import './header.module.scss'
import headerStyles from './header.module.scss'

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }`)

  return (
    <header className={headerStyles.header}>
      <h1><Link className={headerStyles.title} to="/">{data.site.siteMetadata.title}</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog Page</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about-us">About Me</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent
