import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faBriefcaseMedical, faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

import Seo from "../components/seo"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <Container className="border rounded shadow site-section">
        <h1>Kontakt</h1>
        <Row>
          <Col md={6} className="text-center">
            <h3>Details</h3>
            <div className="text-center contact-section">
              <span className="contact-icons"><FontAwesomeIcon icon={faUser} /></span>
              <span className="text-center">Matthias Legenstein, BSC</span>
            </div>
            <div className="text-center contact-section">
              <span className="contact-icons"><FontAwesomeIcon icon={faBriefcaseMedical} /></span>
              <span className="text-center">Wahltherapeut</span>
            </div>
            <div className="text-center contact-section">
              <span className="contact-icons"><FontAwesomeIcon icon={faPhone} /></span>
              <span>+43 664 89 89 549</span>
            </div>
            <div className="text-center contact-section">
              <span className="contact-icons"><FontAwesomeIcon icon={faEnvelope} /></span>
              <span>physio.legenstein@gmx.at</span>
            </div>
            <h3>Praxis</h3>
            <div className="text-center contact-section">
              <span className="contact-icons"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
              <span className="text-center">
                Erzherzog Rainer Ring 13<br></br>2500, Baden<br></br>1.
                Stockwerk<br></br>(nicht barrierefrei - Nutzen Sie die Option
                des Hausbesuches!)
              </span>
            </div>
          </Col>
          <Col className="text-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.263568613887!2d16.22935271560922!3d48.00861757921332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476db0607b164ab7%3A0xad17c1ae9b434502!2sErzherzog%20Rainer-Ring%2013%2C%202500%20Baden!5e0!3m2!1sde!2sat!4v1587912125508!5m2!1sde!2sat"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              title="Mein Standort"
            ></iframe>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col md={6}>
            <h3 className="text-center">Parken - Kurzparkzone</h3>
            <div className="contact-section">
              <ul className="list-unstyled">
                <li>
                  Direkt vor der Praxis und entlang des Erzherzog Rainer Rings
                  finden sich zahlreiche Parkplätze innerhalb der Kurzparkzone
                  (zahlungspflichtig 8:00 – 18:00). Bitte beachten Sie bei Ihrer
                  Zeitplanung, dass es ab 17:00 zu einem verstärkten
                  Verkehrsaufkommen und reduzierter Parkmöglichkeiten kommen
                  kann!
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <h3 className="text-center">Kostenfreies Parken</h3>
            <div className="contact-section">
              <ul>
                <li>
                  In der <span>Marchetstraße 7</span>bei den Badener Pfadfindern
                  &amp; Pfadfinderinnen haben Sie die Möglichkeit des
                  kostenfreien Parkens. Gehweg: 130m / 2 Minuten
                </li>
                <li>
                  In der <span>Gutenbrunnerstraße 2</span>, zwischen Römertherme
                  und grünem Markt, finden Sie das nahe gelegene Parkdeck der
                  Römertherme. In der obersten Etage stehen Sie für 3 Stunden
                  gratis. &nbsp;Gehweg: 290-350m / 4-5 Minuten
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="border rounded shadow site-section">
        <div id="terminvereinbarung"></div>
        <h1>Terminvereinbarung</h1>
        <Form action="https://formspree.io/xzbkzdrp" method="POST">
          <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name..." name="name" />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <input className="form-control" type="email" name="_replyto" placeholder="Email..." />
          </Form.Group>
          <Form.Group controlId="formGroupTelephone">
            <Form.Label>Telefon</Form.Label>
            <Form.Control type="text" placeholder="Telefon..." name="telephone" />
          </Form.Group>
          <Form.Group controlId="formGroupMessage">
            <Form.Label>Nachricht</Form.Label>
            <Form.Control as="textarea" rows="5" placeholder="Nachricht..." name="message" />
          </Form.Group>
          <input type="hidden" name="_subject" value="Terminvereinbarung" />
          <Button type="submit">Abschicken</Button>
        </Form>
      </Container>
    </Layout>
  )
}

export default ContactPage
