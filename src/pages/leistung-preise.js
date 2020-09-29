import React from "react"
import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

import Seo from "../components/seo"
import Layout from "../components/layout"

const ServicePage = () => {
  return (
    <Layout>
      <Seo title="Leistung-Preise" />
      <Container className="text-left border rounded shadow site-section">
        <h1>Leistung - Preise</h1>
        <div className="service-section">
          <h2 className="text-left">Physiotherapie</h2>
          <Table responsive borderless striped>
            <thead>
              <tr>
                <th>Dauer</th>
                <th>Preis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>30 min</td>
                <td>45€</td>
              </tr>
              <tr>
                <td>45 min</td>
                <td>60€</td>
              </tr>
              <tr>
                <td>60 min</td>
                <td>80€</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="service-section">
          <h2 className="text-left">Teilmassage</h2>
          <Table responsive borderless striped>
            <thead>
              <tr>
                <th>Dauer</th>
                <th>Preis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15 min</td>
                <td>17€</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="service-section">
          <h2 className="text-left">Hausbesuche</h2>
          <p>Pauschalpreis +20€</p>
        </div>
        <div className="service-section">
          <h2 className="text-left">Rückerstattung der Krankenkassa</h2>
          <p>
            Die Höhe der Rückerstattung wird durch Ihre jeweilige Krankenkassa
            bestimmt. Diese Tarife werden regelmäßig angepasst – genaue
            Informationen holen Sie sich bitte bei Ihrer zuständigen
            Krankenkassa ein.
          </p>
        </div>
        <div className="service-section">
          <h2 className="text-left">
            Überblick der Rückerstattung nach Krankenkassa
          </h2>
          <Table responsive borderless striped>
            <thead>
              <tr>
                <th>Leistung</th>
                <th>ÖGK - Beruftätig in NÖ</th>
                <th>ÖGK - Beruftätig in Wien</th>
                <th>SVA</th>
                <th>BVA</th>
                <th>KVA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Physiotherapie 30 min</td>
                <td>16,74</td>
                <td>14,86</td>
                <td>20,14</td>
                <td>22,99</td>
                <td>20,43</td>
              </tr>
              <tr>
                <td>Physiotherapie 45 min</td>
                <td>25,07</td>
                <td>22,28</td>
                <td>30,21</td>
                <td>33,14</td>
                <td>30,64</td>
              </tr>
              <tr>
                <td>Hausbesuch</td>
                <td>17,59</td>
                <td>20,04</td>
                <td>20,14</td>
                <td>22,88</td>
                <td>17,59</td>
              </tr>
              <tr>
                <td>Teilmassage 15 min</td>
                <td></td>
                <td>4,42</td>
                <td>10,67</td>
                <td>7,31</td>
                <td>6,08</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <p>
            WICHTIG: bitte die ärztlich verordneten Therapien VOR bzw.
            SPÄTESTENS nach der ersten Therapieeinheit bewilligen lassen. Für
            Rückfragen stehe ich gerne zur Verfügung.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default ServicePage
