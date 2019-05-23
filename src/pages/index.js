import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hello</h1>
    <h2>I'm Gus, a full-stack developer who wants to live in Canada</h2>
    <p>
      You need a software developer? <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
)

export default IndexPage
