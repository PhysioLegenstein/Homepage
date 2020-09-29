import React from "react"

import Container from "react-bootstrap/Container"

import Seo from "../components/seo"
import Layout from "../components/layout"

const ImpressumPage = () => {
    return (
        <Layout>
            <Seo title="Impressum" />
            <Container className="text-left border rounded shadow site-section">
                <h1>Impressum</h1>
                <p>Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</p>
                <br />
                <p>Matthias Legenstein, BSc</p>
                <br />
                <p>Erzherzog Rainer-Ring 13, <br />2500 Baden, <br />Österreich</p>
                <br />
                <p>
                    <strong>Tel.:</strong> 0677 / 630 964 88<br />
                    <strong>E-Mail:</strong> <a href="mailto:physio.legenstein@gmx.at">physio.legenstein@gmx.at</a>
                </p>
                <br />
                <h2>EU-Streitschlichtung</h2>
                <p>Gemäß Verordnung über Online-Streitbeilegung in Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die Online-Streitbeilegungsplattform (OS-Plattform) informieren.<br />
Verbraucher haben die Möglichkeit, Beschwerden an die Online Streitbeilegungsplattform der Europäischen Kommission unter <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=DE" class="external" rel="nofollow">http://ec.europa.eu/odr?tid=221133870</a> zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in unserem Impressum.</p>
                <p>Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder verpflichtet sind, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                <br />
                <h2>Haftung für Inhalte dieser Webseite</h2>
                <p>Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen uns korrekte und aktuelle Informationen bereitzustellen. Leider können wir keine Haftung für die Korrektheit aller Inhalte auf dieser Webseite übernehmen, speziell für jene die seitens Dritter bereitgestellt wurden.</p>
                <p>Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen, bitten wir Sie uns umgehend zu kontaktieren, Sie finden die Kontaktdaten im Impressum.</p>
                <br />
                <h2>Haftung für Links auf dieser Webseite</h2>
                <p>Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht laut <a href="https://www.ris.bka.gv.at/Dokument.wxe?Abfrage=Bundesnormen&Dokumentnummer=NOR40025813&tid=221133870" rel="noopener nofollow" class="external">§ 17 ECG</a> für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen sind und wir Links sofort entfernen würden, wenn uns Rechtswidrigkeiten bekannt werden.</p>
                <p>Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitten wir Sie uns zu kontaktieren, Sie finden die Kontaktdaten im Impressum.</p>
                <br />
                <h2>Urheberrechtshinweis</h2>
                <p>Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos) unterliegen dem Urheberrecht. Falls notwendig, werden wir die unerlaubte Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.</p>
                <br />
                <h2>Bildernachweis</h2>
                <p>Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</p>
                <p>Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:</p>
                <ul>
                    <li>Matthias Legenstein</li>
                </ul>

            </Container>
        </Layout>
    )
}

export default ImpressumPage