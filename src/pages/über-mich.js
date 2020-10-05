import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Table from "react-bootstrap/Table"
import CardColumns from "react-bootstrap/CardColumns"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

import Seo from "../components/seo"
import Layout from "../components/layout"

import pic01 from "./../Images/matthias.jpg"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/training/"}}) {
        edges {
          node {
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 350, maxHeight: 150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="Über Mich" />
      <Container className="border rounded shadow site-section">
        <h1>Über Mich</h1>
        <Row>
          <Col md={8} className="text-center">
            <Image
              as={Img}
              className="rounded img-fluid shadow"
              id="about-pic"
              src={pic01}
              alt="Matthias Legenstein"
            />
          </Col>
          <Col md={4} className="text-center my-auto pt-3">
            <p>
              <span className="about-motto">„Behandle jeden Patienten – wie du auch selbst behandelt werden möchtest“</span>
            </p>
          </Col>
        </Row>
        <div className="about-section">
          <p>
            Die Faszination an der Bewegung, wie auch jahrelanges Arbeiten als
            freiwilliger Sanitäter beim Roten Kreuz haben mich auf den Beruf des
            Physiotherapeuten aufmerksam gemacht. Mich begeistern die vielfältigen Therapiemöglichkeiten, die den Patienten dauerhaft mehr Lebensqualität ermöglichen können.
          </p>
        </div>
      </Container>
      <Container className="border rounded shadow text-center site-section">
          <h1>Fortbildungen</h1>
      </Container>
      <Container>
          <CardColumns>
              {data.allMarkdownRemark.edges.map((edge) => {
                  return (
                      <Card key={edge.node.frontmatter.title} className="shadow">
                          <Card.Img as={Img} variant="top" fluid={edge.node.frontmatter.image.childImageSharp.fluid} alt={edge.node.frontmatter.title} />
                          <Card.Body>
                              <Card.Title><span>{edge.node.frontmatter.title}</span></Card.Title>
                              <Card.Text><span>{edge.node.frontmatter.description}</span></Card.Text>
                              <Link to={`/über-mich/${edge.node.fields.slug}`}>
                                  <Button variant="primary">Mehr lesen...</Button>
                              </Link>
                          </Card.Body>
                      </Card>
                  )
              })}
          </CardColumns>
      </Container>
      <Container className="border rounded shadow site-section">
        <div className="about-section">
          <h1>Mein beruflicher Werdegang</h1>
          <Table responsive borderless striped>
            <thead>
              <tr>
                <th>Jahr</th>
                <th>Tätigkeit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2008</td>
                <td>Matura – AHS Berndorf</td>
              </tr>
              <tr>
                <td>2009</td>
                <td>
                  Zivildienst Rotes Kreuz, anschließend jahrelange freiwillige
                  Tätigkeit als Sanitäter
                </td>
              </tr>
              <tr>
                <td>2009 bis 2011</td>
                <td>Studium an der WU-Wien - Betriebswirtschaftslehre</td>
              </tr>
              <tr>
                <td>2011 bis 2014</td>
                <td>Studiengang Physiotherapie am FH Campus Wien</td>
              </tr>
              <tr>
                <td>2014 bis 2018</td>
                <td>
                  Beschäftigt als Physiotherapeut bei Caritas Socialis Wien
                  (Tagesheim)
                </td>
              </tr>
              <tr>
                <td>2015 bis 2018</td>
                <td>
                  Beschäftigt als Physiotherapeut im rehabilitativen Bereich des
                  Gesundheits- und Kurhotels Badener Hof
                </td>
              </tr>
              <tr>
                <td>2018 bis 2020</td>
                <td>
                  Beschäftigt als Physiotherapeut bei Optima Med - ambulantes
                  Rehabilitationszentrum Wiener Neustadt
                </td>
              </tr>
              <tr>
                <td>Seit 2019</td>
                <td>
                  Selbständige Tätigkeit als Physiotherapeut in der Physiopraxis
                  Health &amp; Sport Kottingbrunn
                </td>
              </tr>
              <tr>
                <td>Seit 2020</td>
                <td>
                  Selbständige Tätigkeit als Physiotherapeut bei  Physiotherapie Legenstein in Baden
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </Layout>
  )
}

export default AboutPage
