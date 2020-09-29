import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Accordion from "react-bootstrap/Accordion"

import Seo from "../components/seo"
import Layout from "../components/layout"

const InfoPage = () => {
  return (
    <Layout>
      <Seo title="Patienteninfo" />
      <Container className="text-left border rounded shadow site-section">
        <h1>Organisatorisches zur Physiotherapie</h1>
      </Container>
      <Container>
        <Row>
          <Col lg={4} md={12} className="mb-3">
            <div className="info-box shadow" id="info-box-one">
              <h4><b>1.</b> Die ärztliche Verordnung...</h4>
              <hr></hr>
              <ul>
                <li>gültige ärztliche Verordnung, ausgestellt von Ihrem Hausarzt bzw. Facharzt</li>
                <li>VOR der ersten Therapieeinheit</li>
                <li>die Verordnung sollte folgendes beinhalten: Therapieart, Anzahl, Dauer und Therapeutenname</li>
                <br></br>
                <i>z.B.: 10 x Einzelheilgymnastik a 45min, Herrn Legenstein</i>
              </ul>
              <i>Empfehlung: Bewilligen Sie Ihre ärztliche Verordnung vorab bei der Krankenkasse</i>
            </div>
            
          </Col>
          <Col lg={4} md={12} className="mb-3">
            <div className="info-box shadow" id="info-box-two">
              <h4><b>2.</b> Zur Therapie...</h4>
              <hr></hr>
              Mitzunehmen:
              <ul>
                <li>ärztliche Verordnung</li>
                <li>wenn vorhanden aktuelle medizinisch relevante Unterlagen (Befunde, Röntgen, Entlassungsberichte, ...)</li>
                <li>bequeme Kleidung</li>
                <li>großes Handtuch</li>
              </ul>
              <i>WICHTIG: Aufgrund der aktuellen Situation ist das Betreten der Praxis nur mit Mund-Nasenschutz erlaubt</i>
            </div>
          </Col>
          <Col lg={4} md={12} className="mb-3">
            <div className="info-box shadow" id="info-box-three">
              <h4><b>3.</b> Rückerstattung...</h4>
              <hr></hr>
              Die Krankenkasse benötigt:
              <ul>
                <li>Honorarnote + Zahlungsbestätigung</li>
                <li>bewilligte ärztliche Verordnung</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="text-left border rounded shadow site-section">
        <h1>Häufige Fragen</h1>
        <div className="faq-section">
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Welche Sicherheitsmaßnahmen werden aufgrund des Coronaviruses durchgeführt?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ol>
                    <li>Bei vorliegenden Symptomen die mit dem Coronavirus in Verbindung stehen bitte nicht die Praxis aufsuchen - wir werden telefonisch einen Ersatztermin organisieren.</li>
                    <li>Hatten Sie Kontakt mit einer kürzlich positiv getesteten Person - auch hier bitte um telefonische Rücksprache.</li>
                    <li>In den Räumlichkeiten der Praxis ist das Tragen eines Nasen-Mundschutzes oder eines Face-Shields erforderlich.</li>
                    <li>Zu Beginn der Therapie bitten wir um eine gründliche Handdesinfektion.</li>
                    <li>Um das Überschneiden von Patiententerminen zu vermeiden um so den Kontakt mit anderen Patienten gering zu halten - bitte um ein pünktliches Erscheinen.</li>
                  </ol>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Was muss ich zur Physiotherapie mitbringen?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Für die erste Therapieeinheit werden alle <b>relevanten Befunde</b> und die <b>ärztliche Zuweisung</b> benötigt. Ansonsten sollten Sie <b>bequeme Kleidung</b> und ein frisches <b>Handtuch</b> mitbringen.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Wie läuft der erste Termin ab?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Beim ersten Termin wird zunächst ein <b>genauer Befund</b> aufgenommen (Vorgeschichte, Problemfindung, Zielsetzung, …). Nach Durchführung verschiedener Tests und Untersuchung des Problembereichs wird eine physiotherapeutische Arbeitsdiagnose gestellt. Gemeinsam mit Ihnen wird dann ein <b>Behandlungsplan</b> erstellt um <b>Ihre definierten Ziele bestmöglich zu erreichen</b>.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Was bedeutet Wahltherapeut?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Als Wahltherapeut habe ich keinen direkten Vertrag mit der Krankenkasse. Sie erhalten nach einer oder mehreren Behandlungsterminen eine Rechnung. Nach der Begleichung schicken Sie die Rechnung samt Zahlungsbestätigung zu Ihrer Krankenkasse. Sie bekommen dann gemäß den Tarifen Ihrer Versicherung einen Teilbetrag refundiert.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                Wie können vereinbarte Termine abgesagt werden?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  Terminabsagen bitte spätestens 24h im Vorhinein. Absagen ausschließlich telefonisch per Anruf, SMS oder Mailbox. Bitte haben Sie Verständnis, dass bei zu spät abgesagten Terminen oder dem nicht erscheinen zum Termin 50% der Honorarnote ausgestellt werden. Die Krankenkassa übernimmt hierbei keine Kosten.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </Layout>
  )
}

export default InfoPage
