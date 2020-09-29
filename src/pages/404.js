import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404" />
      <Container>
        <h1>Page not found</h1>
        <p>
          <Link to="/">Head home</Link>
        </p>
      </Container>
    </Layout>
  )
}

export default NotFound
