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
                <td>63€</td>
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
          <p>Pauschalpreis + 20€</p>
        </div>
        <div className="service-section">
          <h2 className="text-left">Rückerstattung der Krankenkasse</h2>
          <p>
            Die Höhe der Rückerstattung wird durch Ihre jeweilige Krankenkasse
            bestimmt. Diese Tarife werden gelegentlich angepasst – nähere
            Informationen holen Sie sich bitte bei Ihrer zuständigen
            Krankenkasse.
          </p>
        </div>
        <div className="service-section">
          <h2 className="text-left">
            Überblick der Rückerstattung nach Krankenkasse
          </h2>
          <Table responsive borderless striped>
            <thead>
              <tr>
                <th>Leistung</th>
                <th>ÖGK (NÖ)</th>
                <th>ÖGK (Wien)</th>
                <th>BVA</th>
                <th>SVA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Physiotherapie 30 min</td>
                <td>16,74</td>
                <td>14,86</td>
                <td>23</td>
                <td>25,18</td>
              </tr>
              <tr>
                <td>Physiotherapie 45 min</td>
                <td>25,07</td>
                <td>22,28</td>
                <td>34,50</td>
                <td>37,77</td>
              </tr>
              <tr>
                <td>Physiotherapie 60 min</td>
                <td>33,43</td>
                <td></td>
                <td></td>
                <td>50,36</td>
              </tr>
              <tr>
                <td>Hausbesuch</td>
                <td>17,80</td>
                <td>20,04</td>
                <td>24</td>
                <td>25</td>
              </tr>
              <tr>
                <td>Teilmassage 15 min</td>
                <td>6,61</td>
                <td>4,42</td>
                <td>7</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
          <span className="text-muted float-right"><i>Stand Oktober 2020</i></span>
        </div>
        <div>
          <br />
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
