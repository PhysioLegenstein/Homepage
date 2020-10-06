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

export default class ContactPage extends React.Component {
  state = {
    client: "",
    email: "",
    telephone: "",
    message: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })

    if(this.state.client.length === 0 || this.state.email.length === 0 || this.state.telephone.length === 0 || this.state.message.length === 0) {
      document.getElementById("submit-button").disabled = true;
    }
    else {
      document.getElementById("submit-button").disabled = false;
    }
  }

  render() {
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
                    Direkt vor der Praxis finden sich zahlreiche Parkplätze innerhalb der Kurzparkzone (zahlungspflichtig 8:00 – 18:00). In der Gutenbrunnnerstraße 2, zwischen Römertherme und Grünem Markt finden Sie das nahe gelegene Parkhaus der Römertherme. Gehweg 290-250m / 4-5 Minuten
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <h3 className="text-center">Kostenfreies Parken</h3>
              <div className="contact-section">
                <ul>
                  <li>
                    In der <span>Marchetstraße 7</span> bei den Badener Pfadfindern
                    &amp; Pfadfinderinnen haben Sie die Möglichkeit kostenfrei zu parken. Gehweg: 130m / 2 Minuten
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
              <Form.Control type="text" placeholder="Name..." name="client" value={this.state.client} onChange={this.handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <input className="form-control" type="email" name="email" placeholder="Email..." value={this.state.email} onChange={this.handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formGroupTelephone">
              <Form.Label>Telefon</Form.Label>
              <Form.Control type="text" placeholder="Telefon..." name="telephone" value={this.state.telephone} onChange={this.handleInputChange} />
            </Form.Group>
            <Form.Group controlId="formGroupMessage">
              <Form.Label>Nachricht</Form.Label>
              <Form.Control as="textarea" rows="5" placeholder="Nachricht..." name="message" value={this.state.message} onChange={this.handleInputChange} />
            </Form.Group>
            <input type="hidden" name="_subject" value="Terminvereinbarung" />
            <Row>
              <Col>
                <Button type="submit" id="submit-button" disabled={true}>Abschicken</Button>
              </Col>
              <Col>
                <span className="text-muted float-right"><i>Bitte alle Felder ausfüllen!</i></span>
              </Col>
            </Row>
          </Form>
        </Container>
      </Layout>
    )
  }
}
