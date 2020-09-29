import React from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"

import Seo from "../components/seo"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`

const Training = props => {
  return (
    <Layout>
      <Seo title={props.data.markdownRemark.frontmatter.title} />
      <Container className="border rounded shadow site-section">
        <div className="training-section">
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>
      </Container>
    </Layout>
  )
}

export default Training
