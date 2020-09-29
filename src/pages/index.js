import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query {
          allFile(filter: {relativeDirectory: {eq: "images/carousel"}}) {
              edges {
                  node {
                      childImageSharp {
                        fluid(quality: 90) {
                          ...GatsbyImageSharpFluid
                        }
                      }
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <Seo title="Home" />
      <div id="promo">
        <Jumbotron>
          <h1>Physiotherapie</h1>
          <h6>Matthias Legenstein, Bsc.</h6>
          <h5><b>0677 / 630 964 88</b></h5>
          <br></br>
          <Link to="/kontakt#terminvereinbarung">
            <Button>Termin vereinbaren</Button>
          </Link>
        </Jumbotron>
      </div>
      <Container className="bg-white p-1 my-2 rounded shadow">
        <Carousel>
          {data.allFile.edges.map(pic =>
            <Carousel.Item key={pic.node.childImageSharp.fluid.src}>
              <Img fluid={pic.node.childImageSharp.fluid} />
            </Carousel.Item>
          )}
        </Carousel>
      </Container>
    </Layout>
  )
}

export default IndexPage
