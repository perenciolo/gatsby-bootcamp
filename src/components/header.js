import React from "react"
import { Link } from "gatsby"

// import './header.module.scss'
import headerStyles from './header.module.scss'

const HeaderComponent = () => (
  <header className={headerStyles.header}>
    <h1><Link className={headerStyles.title} to="/">Gustavo Perenciolo</Link></h1>
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

export default HeaderComponent
