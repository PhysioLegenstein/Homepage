import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import logo from "./../images/logo.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <footer className="sticky-bottom">
      <Container>
        <Row>
          <Col sm={6} md={4} className="footer-navigation">
            <h3 className="text-center bg-white border rounded border-primary">
              <Link to="/">
                <Image id="footerLogo" alt="Logo" src={logo} />
              </Link>
            </h3>
            <p className="links">
              <Link to="/über-mich">Über Mich</Link>
              <strong> · </strong>
              <Link to="/kontakt">Kontakt</Link>
              <strong> · </strong>
              <Link to="/leistung-preise">Leistung/Preise</Link>
              <strong> · </strong>
              <Link to="/patienteninfo">Patienteninfo</Link>
              <strong>&nbsp;</strong>
            </p>
            <p className="company-name">
              {data.site.siteMetadata.title} © 2020
            </p>
          </Col>
          <Col sm={6} md={4} className="footer-contacts">
            <div>
              <span className="footer-contacts-icon" ><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
              <p>
                <span className="new-line-span">Erzherzog Rainer Ring 13</span>
                2500, Baden
              </p>
            </div>
            <div>
              <span className="footer-contacts-icon" ><FontAwesomeIcon icon={faPhone} /></span>
              <p className="footer-center-info email text-left">
                +43 664 89 89 549
              </p>
            </div>
            <div>
              <span className="footer-contacts-icon" ><FontAwesomeIcon icon={faEnvelope} /></span>
              <p>
                <a href="mailto:physio.legenstein@gmx.at">
                  physio.legenstein@gmx.at
                </a>
              </p>
            </div>
          </Col>
          <div className="clearfix"></div>
          <Col md={4} className="footer-about">
            <h4>Über die Homepage</h4>
            <p>
              Die Webseite wurde gestaltet und erstellt von <b>Michael Legenstein</b>
            </p>
            <hr></hr>
            <p>
              <Link to="/impressum">Impressum</Link>
              <strong> | </strong>
              <Link to="/datenschutz">Datenschutzerklärung</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
