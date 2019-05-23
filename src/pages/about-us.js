import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>I'm currently a software engineer in a full-time job</p>
    Want to work with me <Link to="/contact">Contact.</Link>
  </Layout>
)

export default AboutPage
