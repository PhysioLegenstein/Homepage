import React from "react"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Seo title="404" />
      <Container className="border rounded shadow site-section text-center">
        <h1 className="display-1">Sorry!</h1>
        <h2 className="display-5">Diese Seite konnte nicht gefunden werden!</h2>
        <hr />
        <h3>
          <Link to="/">Zurück zur Startseite</Link>
        </h3>
      </Container>
    </Layout>
  )
}

export default NotFound
