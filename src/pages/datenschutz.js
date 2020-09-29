import React from "react"

import Container from "react-bootstrap/Container"

import Seo from "../components/seo"
import Layout from "../components/layout"

const DatenschutzPage = () => {
    return (
        <Layout>
            <Seo title="Datenschutz" />
            <Container className="text-left border rounded shadow site-section">
                <h1>Datenschutzerklärung</h1>
                <h2>Datenschutz</h2>
                <p>Wir haben diese Datenschutzerklärung (Fassung 28.09.2020-221133870) verfasst, um Ihnen gemäß der Vorgaben der <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&tid=221133870" rel="noopener noreferrer nofollow" class="external">Datenschutz-Grundverordnung (EU) 2016/679</a> zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite haben.</p>
                <p>Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.</p>
                <br />
                <h2>Automatische Datenspeicherung</h2>
                <p>Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen automatisch erstellt und gespeichert, so auch auf dieser Webseite.</p>
                <p>Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser Webserver (Computer auf dem diese Webseite gespeichert ist) automatisch Daten wie</p>
                <ul>
                    <li>die Adresse (URL) der aufgerufenen Webseite</li>
                    <li>Browser und Browserversion</li>
                    <li>das verwendete Betriebssystem</li>
                    <li>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</li>
                    <li>den Hostname und die IP-Adresse des Geräts von welchem aus zugegriffen wird</li>
                    <li>Datum und Uhrzeit</li>
                </ul>
                <p>in Dateien (Webserver-Logfiles).</p>
                <p>In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
                <br />
                <h2>Cookies</h2>
                <p>Unsere Webseite verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.<br />
Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>
                <br />
                <h3>Was genau sind Cookies?</h3>
                <p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
                <p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Webseite auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem „Hirn“ Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.</p>
                <p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Webseite, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
                <p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>
                <p>So können zum Beispiel Cookie-Daten aussehen:</p>
                <p>
                    <strong>Name:</strong> _ga<br />
                    <strong>Wert:</strong> GA1.2.1326744211.152221133870-6<br />
                    <strong>Verwendungszweck:</strong> Unterscheidung der Webseitenbesucher<br />
                    <strong>Ablaufdatum:</strong> nach 2 Jahren</p>
                <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
                <ul>
                    <li>Mindestens 4096 Bytes pro Cookie</li>
                    <li>Mindestens 50 Cookies pro Domain</li>
                    <li>Mindestens 3000 Cookies insgesamt</li>
                </ul>
                <br />
                <h3>Welche Arten von Cookies gibt es?</h3>
                <p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
                <p>Man kann 4 Arten von Cookies unterscheiden:</p>
                <p>
                    <strong>Unerlässliche Cookies<br />
                    </strong>Diese Cookies sind nötig, um grundlegende Funktionen der Webseite sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</p>
                <p>
                    <strong>Zweckmäßige Cookies<br />
                    </strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Webseite bei verschiedenen Browsern gemessen.</p>
                <p>
                    <strong>Zielorientierte Cookies<br />
                    </strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</p>
                <p>
                    <strong>Werbe-Cookies<br />
                    </strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
                <p>Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
                <br />
                <h3>Wie kann ich Cookies löschen?</h3>
                <p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Webseite die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
                <p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
                <p>
                    <a href="https://support.google.com/chrome/answer/95647?tid=221133870" rel="noopener noreferrer nofollow" class="external">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                </p>
                <p>
                    <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221133870" rel="noopener noreferrer nofollow" class="external">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                </p>
                <p>
                    <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221133870" rel="noopener noreferrer nofollow" class="external">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Internet Explorer: Löschen und Verwalten von Cookies</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                </p>
                <p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder „Cookies deaktivieren Chrome“ im Falle eines Chrome Browsers.</p>
                <br />
                <h3>Wie sieht es mit meinem Datenschutz aus?</h3>
                <p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine Einwilligung von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG).</p>
                <p>Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir <a href="https://tools.ietf.org/html/rfc6265" rel="nofollow noopener noreferrer" class="external">https://tools.ietf.org/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens „HTTP State Management Mechanism“.</p>
                <br />
                <h2>Speicherung persönlicher Daten</h2>
                <p>Persönliche Daten, die Sie uns auf dieser Website elektronisch übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher verwahrt und nicht an Dritte weitergegeben.</p>
                <p>Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit jenen Besuchern, die Kontakt ausdrücklich wünschen und für die Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten eingesehen werden.</p>
                <p>Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits dieser Webseite – können wir keine sichere Übertragung und den Schutz Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten niemals unverschlüsselt per E-Mail zu übermitteln.</p>
                <br />
                <h2>Rechte laut Datenschutzgrundverordnung</h2>
                <p>Ihnen stehen laut den Bestimmungen der DSGVO und des österreichischen <a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001597&tid=221133870" rel="noopener noreferrer nofollow" class="external">Datenschutzgesetzes (DSG)</a> grundsätzlich die folgende Rechte zu:</p>
                <ul>
                    <li>Recht auf Berichtigung (Artikel 16 DSGVO)</li>
                    <li>Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17 DSGVO)</li>
                    <li>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</li>
                    <li>Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang mit der Berichtigung oder Löschung personenbezogener Daten oder der Einschränkung der Verarbeitung (Artikel 19 DSGVO)</li>
                    <li>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</li>
                    <li>Widerspruchsrecht (Artikel 21 DSGVO)</li>
                    <li>Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung — einschließlich Profiling — beruhenden Entscheidung unterworfen zu werden (Artikel 22 DSGVO)</li>
                </ul>
                <p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren, welche in Österreich die Datenschutzbehörde ist, deren Webseite Sie unter <a href="https://www.dsb.gv.at/?tid=221133870" class="external" rel="nofollow">https://www.dsb.gv.at/</a> finden.</p>
                <br />
                <h2>Auswertung des Besucherverhaltens</h2>
                <p>In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob und wie wir Daten Ihres Besuchs dieser Website auswerten. Die Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person schließen.</p>
                <p>Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu widersprechen erfahren Sie in der folgenden Datenschutzerklärung.</p>
                <br />
                <h2>TLS-Verschlüsselung mit https</h2>
                <p>Wir verwenden https um Daten abhörsicher im Internet zu übertragen (Datenschutz durch Technikgestaltung <a href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=221133870" rel="noopener noreferrer nofollow" class="external">Artikel 25 Absatz 1 DSGVO</a>). Durch den Einsatz von TLS (Transport Layer Security), einem Verschlüsselungsprotokoll zur sicheren Datenübertragung im Internet können wir den Schutz vertraulicher Daten sicherstellen. Sie erkennen die Benutzung dieser Absicherung der Datenübertragung am kleinen Schlosssymbol links oben im Browser und der Verwendung des Schemas https (anstatt http) als Teil unserer Internetadresse.</p>
                <br />
                <h2>Google Maps Datenschutzerklärung</h2>
                <p>Wir benützen auf unserer Website Google Maps der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Mit Google Maps können wir Ihnen Standorte besser zeigen und damit unser Service an Ihre Bedürfnisse anpassen. Durch die Verwendung von Google Maps werden Daten an Google übertragen und auf den Google-Servern gespeichert. Hier wollen wir nun genauer darauf eingehen, was Google Maps ist, warum wir diesen Google-Dienst in Anspruch nehmen, welche Daten gespeichert werden und wie Sie dies unterbinden können.</p>
                <br />
                <h3>Was ist Google Maps?</h3>
                <p>Google Maps ist ein Internet-Kartendienst der Firma Google. Mit Google Maps können Sie online über einen PC, ein Tablet oder eine App genaue Standorte von Städten, Sehenswürdigkeiten, Unterkünften oder Unternehmen suchen. Wenn Unternehmen auf Google My Business vertreten sind, werden neben dem Standort noch weitere Informationen über die Firma angezeigt. Um die Anfahrtsmöglichkeit anzuzeigen, können Kartenausschnitte eines Standorts mittels HTML-Code in eine Website eingebunden werden. Google Maps zeigt die Erdoberfläche als Straßenkarte oder als Luft- bzw. Satellitenbild. Dank der Street View Bilder und den hochwertigen Satellitenbildern sind sehr genaue Darstellungen möglich.</p>
                <br />
                <h3>Warum verwenden wir Google Maps auf unserer Webseite?</h3>
                <p>All unsere Bemühungen auf dieser Seite verfolgen das Ziel, Ihnen eine nützliche und sinnvolle Zeit auf unserer Webseite zu bieten. Durch die Einbindung von Google Maps können wir Ihnen die wichtigsten Informationen zu diversen Standorten liefern. Sie sehen auf einen Blick wo wir unseren Firmensitz haben. Die Wegbeschreibung zeigt Ihnen immer den besten bzw. schnellsten Weg zu uns. Sie können den Anfahrtsweg für Routen mit dem Auto, mit öffentlichen Verkehrsmitteln, zu Fuß oder mit dem Fahrrad abrufen. Für uns ist die Bereitstellung von Google Maps Teil unseres Kundenservice.</p>
                <br />
                <h3>Welche Daten werden von Google Maps gespeichert?</h3>
                <p>Damit Google Maps ihren Dienst vollständig anbieten kann, muss das Unternehmen Daten von Ihnen aufnehmen und speichern. Dazu zählen unter anderem die eingegebenen Suchbegriffe, Ihre IP-Adresse und auch die Breiten- bzw. Längenkoordinaten. Benutzen Sie die Routenplaner-Funktion wird auch die eingegebene Startadresse gespeichert. Diese Datenspeicherung passiert allerdings auf den Webseiten von Google Maps. Wir können Sie darüber nur informieren, aber keinen Einfluss nehmen. Da wir Google Maps in unsere Webseite eingebunden haben, setzt Google mindestens ein Cookie (Name: NID) in Ihrem Browser. Dieses Cookie speichert Daten über Ihr Userverhalten. Google nutzt diese Daten in erster Linie, um eigene Dienste zu optimieren und individuelle, personalisierte Werbung für Sie bereitzustellen.</p>
                <p>Folgendes Cookie wird aufgrund der Einbindung von Google Maps in Ihrem Browser gesetzt:</p>
                <p>
                    <strong>Name:</strong> NID<br />
                    <strong>Wert:</strong> 188=h26c1Ktha7fCQTx8rXgLyATyITJ221133870-5<br />
                    <strong>Verwendungszweck:</strong> NID wird von Google verwendet, um Werbeanzeigen an Ihre Google-Suche anzupassen. Mit Hilfe des Cookies „erinnert“ sich Google an Ihre am häufigsten eingegebenen Suchanfragen oder Ihre frühere Interaktion mit Anzeigen. So bekommen Sie immer maßgeschneiderte Werbeanzeigen. Das Cookie enthält eine einzigartige ID, die Google benutzt, um Ihre persönlichen Einstellungen für Werbezwecke zu sammeln.<br />
                    <strong>Ablaufdatum:</strong> nach 6 Monaten</p>
                <p>
                    <strong>Anmerkung:</strong> Wir können bei den Angaben der gespeicherten Daten keine Vollständigkeit gewährleisten. Speziell bei der Verwendung von Cookies sind Veränderungen nie auszuschließen. Um das Cookie NID zu identifizieren, wurde eine eigene Testseite angelegt, wo ausschließlich Google Maps eingebunden war.</p>
                <br />
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Die Google-Server stehen in Rechenzentren auf der ganzen Welt. Die meisten Server befinden sich allerdings in Amerika. Aus diesem Grund werden Ihre Daten auch vermehrt in den USA gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: <a href="https://www.google.com/about/datacenters/inside/locations/?hl=de" rel="noopener noreferrer nofollow" class="external">https://www.google.com/about/datacenters/inside/locations/?hl=de</a>
                </p>
                <p>Die Daten verteilt Google auf verschiedenen Datenträgern. Dadurch sind die Daten schneller abrufbar und werden vor etwaigen Manipulationsversuchen besser geschützt. Jedes Rechenzentrum hat auch spezielle Notfallprogramme. Wenn es zum Beispiel Probleme bei der Google-Hardware gibt oder eine Naturkatastrophe die Server lahm legt, bleiben die Daten ziemlich sicher trotzdem geschützt.</p>
                <p>Manche Daten speichert Google für einen festgelegten Zeitraum. Bei anderen Daten bietet Google lediglich die Möglichkeit, diese manuell zu löschen. Weiters anonymisiert das Unternehmen auch Informationen (wie zum Beispiel Werbedaten) in Serverprotokollen, indem es einen Teil der IP-Adresse und Cookie-Informationen nach 9 bzw.18 Monaten löscht.</p>
                <br />
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Mit der 2019 eingeführten automatischen Löschfunktion von Standort- und Aktivitätsdaten werden Informationen zur Standortbestimmung und Web-/App-Aktivität – abhängig von Ihrer Entscheidung – entweder 3 oder 18 Monate gespeichert und dann gelöscht. Zudem kann man diese Daten über das Google-Konto auch jederzeit manuell aus dem Verlauf löschen. Wenn Sie Ihre Standorterfassung vollständig verhindern wollen, müssen Sie im Google-Konto die Rubrik „Web- und App-Aktivität“ pausieren. Klicken Sie „Daten und Personalisierung“ und dann auf die Option „Aktivitätseinstellung“. Hier können Sie die Aktivitäten ein- oder ausschalten.</p>
                <p>In Ihrem Browser können Sie weiters auch einzelne Cookies deaktivieren, löschen oder verwalten. Je nach dem welchen Browser Sie verwenden, funktioniert dies immer etwas anders. Die folgenden Anleitungen zeigen, wie Sie Cookies in Ihrem Browser verwalten:</p>
                <p>
                    <a href="https://support.google.com/chrome/answer/95647?tid=221133870" rel="noopener noreferrer nofollow" class="external">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                </p>
                <p>
                    <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221133870" rel="noopener noreferrer nofollow" class="external">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                </p>
                <p>
                    <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221133870" rel="noopener noreferrer nofollow" class="external">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Internet Explorer: Löschen und Verwalten von Cookies</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                </p>
                <p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie es erlauben oder nicht.</p>
                <p>Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" rel="follow noopener noreferrer" class="external">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI</a>. Wenn Sie mehr über die Datenverarbeitung von Google erfahren wollen, empfehlen wir Ihnen die hauseigene Datenschutzerklärung des Unternehmens unter <a href="https://policies.google.com/privacy?hl=de" rel="noopener noreferrer nofollow" class="external">https://policies.google.com/privacy?hl=de</a>.</p>
                <br />
                <h2>Google Fonts Datenschutzerklärung</h2>
                <p>Auf unserer Website verwenden wir Google Fonts. Das sind die „Google-Schriften“ der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich.</p>
                <p>Für die Verwendung von Google-Schriftarten müssen Sie sich nicht anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine Cookies in Ihrem Browser gespeichert. Die Dateien (CSS, Schriftarten/Fonts) werden über die Google-Domains fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung von Google Fonts, an Google übermittelt werden. Google erfasst die Nutzung von CSS (Cascading Style Sheets) und der verwendeten Schriftarten und speichert diese Daten sicher. Wie die Datenspeicherung genau aussieht, werden wir uns noch im Detail ansehen.</p>
                <br />
                <h3>Was sind Google Fonts?</h3>
                <p>Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über 800 Schriftarten, die <a href="https://de.wikipedia.org/wiki/Google_LLC?tid=221133870" class="external" rel="nofollow">Google</a> Ihren Nutzern kostenlos zu Verfügung stellen.</p>
                <p>Viele dieser Schriftarten sind unter der SIL Open Font License veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht wurden. Beides sind freie Software-Lizenzen.</p>
                <br />
                <h3>Warum verwenden wir Google Fonts auf unserer Webseite?</h3>
                <p>Mit Google Fonts können wir auf der eigenen Webseite Schriften nutzen, und müssen sie nicht auf unserem eigenen Server hochladen. Google Fonts ist ein wichtiger Baustein, um die Qualität unserer Webseite hoch zu halten. Alle Google-Schriften sind automatisch für das Web optimiert und dies spart Datenvolumen und ist speziell für die Verwendung bei mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle Ladezeit. Des Weiteren sind Google Fonts sichere Web Fonts. Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten optisch verzerren. Dank des schnellen Content Delivery Network (CDN) gibt es mit Google Fonts keine plattformübergreifenden Probleme. Google Fonts unterstützt alle gängigen Browser (Google Chrome, Mozilla Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+ und iOS 4.2+ (iPhone, iPad, iPod). Wir verwenden die Google Fonts also, damit wir unser gesamtes Online-Service so schön und einheitlich wie möglich darstellen können.</p>
                <br />
                <h3>Welche Daten werden von Google gespeichert?</h3>
                <p>Wenn Sie unsere Webseite besuchen, werden die Schriften über einen Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten an die Google-Server übermittelt. So erkennt Google auch, dass Sie bzw. Ihre IP-Adresse unsere Webseite besucht. Die Google Fonts API wurde entwickelt, um Verwendung, Speicherung und Erfassung von Endnutzerdaten auf das zu reduzieren, was für eine ordentliche Bereitstellung von Schriften nötig ist. API steht übrigens für „Application Programming Interface“ und dient unter anderem als Datenübermittler im Softwarebereich.</p>
                <p>Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google feststellen, wie gut die einzelnen Schriften ankommen. Die Ergebnisse veröffentlicht Google auf internen Analyseseiten, wie beispielsweise Google Analytics. Zudem verwendet Google auch Daten des eigenen Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften verwenden. Diese Daten werden in der BigQuery-Datenbank von Google Fonts veröffentlicht. Unternehmer und Entwickler nützen das Google-Webservice BigQuery, um große Datenmengen untersuchen und bewegen zu können.</p>
                <p>Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage auch Informationen wie Spracheinstellungen, IP-Adresse, Version des Browsers, Bildschirmauflösung des Browsers und Name des Browsers automatisch an die Google-Server übertragen werden. Ob diese Daten auch gespeichert werden, ist nicht klar feststellbar bzw. wird von Google nicht eindeutig kommuniziert.</p>
                <br />
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern kann.</p>
                <p>Die Font-Dateien werden bei Google ein Jahr gespeichert. Google verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften verweisen, werden sie nach dem ersten Besuch zwischengespeichert und erscheinen sofort auf allen anderen später besuchten Webseiten wieder. Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu verbessern.</p>
                <br />
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu können, müssen Sie den Google-Support auf <a href="https://support.google.com/?hl=de&tid=221133870" class="external" rel="nofollow">https://support.google.com/?hl=de&tid=221133870</a> kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn Sie unsere Seite nicht besuchen.</p>
                <p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a href="https://developers.google.com/fonts/faq?tid=221133870" class="external" rel="nofollow">https://developers.google.com/fonts/faq?tid=221133870</a>. Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein, doch wirklich detaillierte Informationen über Datenspeicherung sind nicht enthalten. Es ist relativ schwierig, von Google wirklich präzise Informationen über gespeicherten Daten zu bekommen.</p>
                <p>Welche Daten grundsätzlich von Google erfasst werden und wofür diese Daten verwendet werden, können Sie auch auf <a href="https://policies.google.com/privacy?hl=de&tid=221133870" class="external" rel="nofollow">https://www.google.com/intl/de/policies/privacy/</a> nachlesen.</p>
                <br />
                <h2>Google Fonts Lokal Datenschutzerklärung</h2>
                <p>Auf unserer Website nutzen wir Google Fonts der Firma Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich. Wir haben die Google-Schriftarten lokal, d.h. auf unserem Webserver – nicht auf den Servern von Google – eingebunden. Dadurch gibt es keine Verbindung zu Google-Servern und somit auch keine Datenübertragung oder Speicherung.</p>
                <br />
                <h3>Was sind Google Fonts?</h3>
                <p>Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es sich um ein interaktives Verzeichnis mit über 800 Schriftarten, die <a href="https://de.wikipedia.org/wiki/Google_LLC?tid=221133870" class="external" rel="nofollow">Google</a> kostenlos bereitstellt. Mit Google Fonts könnte man Schriften nutzen, ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich jede Informationsübertragung zu Google-Servern zu unterbinden, haben wir die Schriftarten auf unseren Server heruntergeladen. Auf diese Weise handeln wir datenschutzkonform und senden keine Daten an Google Fonts weiter.</p>
                <p>Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf <a href="https://developers.google.com/fonts/faq?tid=221133870" class="external" rel="nofollow">https://developers.google.com/fonts/faq?tid=221133870</a>.</p>
                <br />
                <h2>Google Analytics Datenschutzerklärung</h2>
                <p>Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des amerikanischen Unternehmens Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen auf unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese Aktion in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten, können wir unsere Website und unser Service besser an Ihre Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking Tool ein und informieren Sie vor allem darüber, welche Daten gespeichert werden und wie Sie das verhindern können.</p>
                <br />
                <h3>Was ist Google Analytics?</h3>
                <p>Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Damit Google Analytics funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die Sie auf unserer Website ausführen. Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort gespeichert.</p>
                <p>Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei kann es sich unter anderem um folgende Berichte handeln:</p>
                <ul>
                    <li>Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer, wer sich für unser Service interessiert.</li>
                    <li>Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und verbessern.</li>
                    <li>Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir mehr Menschen für unser Service begeistern können.</li>
                    <li>Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links Sie anklicken.</li>
                    <li>Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.</li>
                    <li>Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.</li>
                </ul>
                <br />
                <h3>Warum verwenden wir Google Analytics auf unserer Webseite?</h3>
                <p>Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestmögliche Service bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.</p>
                <p>Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und Schwächen unserer Website. Einerseits können wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die sich dafür interessieren.</p>
                <br />
                <h3>Welche Daten werden von Google Analytics gespeichert?</h3>
                <p>Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen User. Wenn Sie das nächste Mal unsere Seite besuchen, werden Sie als „wiederkehrender“ User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So ist es überhaupt erst möglich pseudonyme Userprofile auszuwerten.</p>
                <p>Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre Interaktionen auf unserer Website gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können über Google Analytics generierte Daten mit Drittanbieter-Cookies verknüpft werden. Google gibt keine Google Analytics-Daten weiter, außer wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich ist.</p>
                <p>Folgende Cookies werden von Google Analytics verwendet:</p>
                <p>
                    <strong>Name:</strong> _ga<br />
                    <strong>Wert: </strong>2.1326744211.152221133870-5<br />
                    <strong>Verwendungszweck:</strong> Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich dient es zur Unterscheidung der Webseitenbesucher.<br />
                    <strong>Ablaufdatum:</strong> nach 2 Jahren</p>
                <p>
                    <strong>Name:</strong> _gid<br />
                    <strong>Wert: </strong>2.1687193234.152221133870-1<br />
                    <strong>Verwendungszweck:</strong> Das Cookie dient auch zur Unterscheidung der Webseitenbesucher<br />
                    <strong>Ablaufdatum:</strong> nach 24 Stunden</p>
                <p>
                    <strong>Name:</strong> _gat_gtag_UA_<br />
                    <strong>Wert:</strong> 1<br />
                    <strong>Verwendungszweck:</strong> Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ .<br />
                    <strong>Ablaufdatum: </strong>nach 1 Minute</p>
                <p>
                    <strong>Name:</strong> AMP_TOKEN<br />
                    <strong>Wert:</strong> keine Angaben<br />
                    <strong>Verwendungszweck:</strong> Das Cookie hat einen Token, mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen werden kann. Andere mögliche Werte weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.<br />
                    <strong>Ablaufdatum:</strong> nach 30 Sekunden bis zu einem Jahr</p>
                <p>
                    <strong>Name:</strong> __utma<br />
                    <strong>Wert: </strong>1564498958.1564498958.1564498958.1<br />
                    <strong>Verwendungszweck:</strong> Mit diesem Cookie kann man Ihr Verhalten auf der Website verfolgen und die Leistung messen. Das Cookie wird jedes Mal aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
                    <strong>Ablaufdatum:</strong> nach 2 Jahren</p>
                <p>
                    <strong>Name:</strong> __utmt<br />
                    <strong>Wert:</strong> 1<br />
                    <strong>Verwendungszweck:</strong> Das Cookie wird wie _gat_gtag_UA_ zum Drosseln der Anforderungsrate verwendet.<br />
                    <strong>Ablaufdatum:</strong> nach 10 Minuten</p>
                <p>
                    <strong>Name:</strong> __utmb<br />
                    <strong>Wert: </strong>3.10.1564498958<br />
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal aktualisiert, wenn neue Daten bzw. Infos an Google Analytics gesendet werden.<br />
                    <strong>Ablaufdatum:</strong> nach 30 Minuten</p>
                <p>
                    <strong>Name:</strong> __utmc<br />
                    <strong>Wert:</strong> 167421564<br />
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen für wiederkehrende Besucher festzulegen. Dabei handelt es sich um ein Session-Cookie und wird nur solange gespeichert, bis Sie den Browser wieder schließen.<br />
                    <strong>Ablaufdatum:</strong> Nach Schließung des Browsers</p>
                <p>
                    <strong>Name:</strong> __utmz<br />
                    <strong>Wert:</strong> m|utmccn=(referral)|utmcmd=referral|utmcct=/<br />
                    <strong>Verwendungszweck:</strong> Das Cookie wird verwendet, um die Quelle des Besucheraufkommens auf unserer Website zu identifizieren. Das heißt, das Cookie speichert, von wo Sie auf unsere Website gekommen sind. Das kann eine andere Seite bzw. eine Werbeschaltung gewesen sein.<br />
                    <strong>Ablaufdatum:</strong> nach 6 Monaten</p>
                <p>
                    <strong>Name:</strong> __utmv<br />
                    <strong>Wert:</strong> keine Angabe<br />
                    <strong>Verwendungszweck:</strong> Das Cookie wird verwendet, um benutzerdefinierte Userdaten zu speichern. Es wird immer aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
                    <strong>Ablaufdatum:</strong> nach 2 Jahren</p>
                <p>
                    <strong>Anmerkung:</strong> Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google die Wahl ihrer Cookies immer wieder auch verändert.</p>
                <p>Hier zeigen wir Ihnen einen Überblick über die wichtigsten Daten, die mit Google Analytics erhoben werden:</p>
                <p>
                    <strong>Heatmaps:</strong> Google legt sogenannte Heatmaps an. Über Heatmaps sieht man genau jene Bereiche, die Sie anklicken. So bekommen wir Informationen, wo Sie auf unserer Seite „unterwegs“ sind.</p>
                <p>
                    <strong>Sitzungsdauer:</strong> Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne die Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.</p>
                <p>
                    <strong>Absprungrate</strong> (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite ansehen und dann unsere Website wieder verlassen.</p>
                <p>
                    <strong>Kontoerstellung:</strong> Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung machen, erhebt Google Analytics diese Daten.</p>
                <p>
                    <strong>IP-Adresse:</strong> Die IP-Adresse wird nur in gekürzter Form dargestellt, damit keine eindeutige Zuordnung möglich ist.</p>
                <p>
                    <strong>Standort:</strong> Über die IP-Adresse kann das Land und Ihr ungefährer Standort bestimmt werden. Diesen Vorgang bezeichnet man auch als IP- Standortbestimmung.</p>
                <p>
                    <strong>Technische Informationen:</strong> Zu den technischen Informationen zählen unter anderem Ihr Browsertyp, Ihr Internetanbieter oder Ihre Bildschirmauflösung.</p>
                <p>
                    <strong>Herkunftsquelle:</strong> Google Analytics beziehungsweise uns interessiert natürlich auch über welche Website oder welche Werbung Sie auf unsere Seite gekommen sind.</p>
                <p>Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z.B., wenn Sie ein Video über unsere Seite abspielen), das Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren Favoriten. Die Aufzählung hat keinen Vollständigkeitsanspruch und dient nur zu einer allgemeinen Orientierung der Datenspeicherung durch Google Analytics.</p>
                <br />
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in Amerika und folglich werden Ihr Daten meist auf amerikanischen Servern gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: <a href="https://www.google.com/about/datacenters/inside/locations/?hl=de" rel="noopener noreferrer nofollow" class="external">https://www.google.com/about/datacenters/inside/locations/?hl=de</a>
                </p>
                <p>Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.</p>
                <p>Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten eingestellt. Dann werden Ihre Userdaten gelöscht. Allerdings haben wir die Möglichkeit, die Aufbewahrungsdauer von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur Verfügung:</p>
                <ul>
                    <li>Löschung nach 14 Monaten</li>
                    <li>Löschung nach 26 Monaten</li>
                    <li>Löschung nach 38 Monaten</li>
                    <li>Löschung nach 50 Monaten</li>
                    <li>Keine automatische Löschung</li>
                </ul>
                <p>Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer größeren Einheit.</p>
                <br />
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on können Sie unter <a href="https://tools.google.com/dlpage/gaoptout?hl=de" rel="noopener noreferrer nofollow" class="external">https://tools.google.com/dlpage/gaoptout?hl=de</a> runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.</p>
                <p>Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics) deaktivieren, löschen oder verwalten wollen, gibt es für jeden Browser eine eigene Anleitung:</p>
                <p>
                    <a href="https://support.google.com/chrome/answer/95647?tid=221133870" rel="noopener noreferrer nofollow" class="external">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                </p>
                <p>
                    <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221133870" rel="noopener noreferrer nofollow" class="external">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                </p>
                <p>
                    <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221133870" rel="noopener noreferrer nofollow" class="external">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Internet Explorer: Löschen und Verwalten von Cookies</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                </p>
                <p>Google Analytics ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" rel="follow noopener noreferrer" class="external">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=221133870</a>. Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links: <a href="http://www.google.com/analytics/terms/de.html" rel="noopener noreferrer nofollow" class="external">http://www.google.com/analytics/terms/de.html</a> und <a href="https://support.google.com/analytics/answer/6004245?hl=de" rel="noopener noreferrer nofollow" class="external">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
                <br />
                <h2>Google Analytics IP-Anonymisierung</h2>
                <p>Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von Google Analytics implementiert. Diese Funktion wurde von Google entwickelt, damit diese Webseite die geltenden Datenschutzbestimmungen und Empfehlungen der lokalen Datenschutzbehörden einhalten kann, wenn diese eine Speicherung der vollständigen IP-Adresse untersagen. Die Anonymisierung bzw. Maskierung der IP findet statt, sobald die IP-Adressen im Google Analytics-Datenerfassungsnetzwerk eintreffen und bevor eine Speicherung oder Verarbeitung der Daten stattfindet.</p>
                <p>Mehr Informationen zur IP-Anonymisierung finden Sie auf <a href="https://support.google.com/analytics/answer/2763052?hl=de" rel="noopener nofollow" class="external">https://support.google.com/analytics/answer/2763052?hl=de</a>.</p>
                <br />
                <h2>Google Analytics Berichte zu demografischen Merkmalen und Interessen</h2>
                <p>Wir haben in Google Analytics die Funktionen für Werbeberichte eingeschaltet. Die Berichte zu demografischen Merkmalen und Interessen enthalten Angaben zu Alter, Geschlecht und Interessen. Damit können wir uns – ohne diese Daten einzelnen Personen zuordnen zu können – ein besseres Bild von unseren Nutzern machen. Mehr über die Werbefunktionen erfahren Sie <a href="https://support.google.com/analytics/answer/3450482?hl=de_AT&utm_id=ad" rel="noopener nofollow" class="external">auf https://support.google.com/analytics/answer/3450482?hl=de_AT&utm_id=ad</a>.</p>
                <p>Sie können die Nutzung der Aktivitäten und Informationen Ihres Google Kontos unter “Einstellungen für Werbung” auf <a href="https://adssettings.google.com/authenticated" class="external" rel="nofollow">https://adssettings.google.com/authenticated</a> per Checkbox beenden.</p>
                <br />
                <h2>Google Analytics Zusatz zur Datenverarbeitung</h2>
                <p>Wir haben mit Google einen Direktkundenvertrag zur Verwendung von Google Analytics abgeschlossen, indem wir den “Zusatz zur Datenverarbeitung” in Google Analytics akzeptiert haben.</p>
                <p>Mehr über den Zusatz zur Datenverarbeitung für Google Analytics finden Sie hier: <a href="https://support.google.com/analytics/answer/3379636?hl=de&utm_id=ad" rel="noopener nofollow" class="external">https://support.google.com/analytics/answer/3379636?hl=de&utm_id=ad</a>
                </p>
                <br />
                <h2>Google Analytics Google-Signale Datenschutzerklärung</h2>
                <p>Wir haben in Google Analytics die Google-Signale aktiviert. So werden die bestehenden Google-Analytics-Funktionen (Werbeberichte, Remarketing, gerätübergreifende Berichte und Berichte zu Interessen und demografische Merkmale) aktualisiert, um zusammengefasste und anonymisierte Daten von Ihnen zu erhalten, sofern Sie personalisierte Anzeigen in Ihrem Google-Konto erlaubt haben.</p>
                <p>Das besondere daran ist, dass es sich dabei um ein Cross-Device-Tracking handelt. Das heißt Ihre Daten können geräteübergreifend analysiert werden. Durch die Aktivierung von Google-Signale werden Daten erfasst und mit dem Google-Konto verknüpft. Google kann dadurch zum Beispiel erkennen, wenn Sie auf unsere Webseite über ein Smartphone ein Produkt ansehen und erst später über einen Laptop das Produkt kaufen. Dank der Aktivierung von Google-Signale können wir gerätübergreifende Remarketing-Kampagnen starten, die sonst in dieser Form nicht möglich wären. Remarketing bedeutet, dass wir Ihnen auch auf anderen Webseiten unser Angebot zeigen können.</p>
                <p>In Google Analytics werden zudem durch die Google-Signale weitere Besucherdaten wie Standort, Suchverlauf, YouTube-Verlauf und Daten über Ihre Handlungen auf unserer Webseite, erfasst. Wir erhalten dadurch von Google bessere Werbeberichte und nützlichere Angaben zu Ihren Interessen und demografischen Merkmalen. Dazu gehören Ihr Alter, welche Sprache sie sprechen, wo Sie wohnen oder welchem Geschlecht Sie angehören. Weiters kommen auch noch soziale Kriterien wie Ihr Beruf, Ihr Familienstand oder Ihr Einkommen hinzu. All diese Merkmal helfen Google Analytics Personengruppen bzw. Zielgruppen zu definieren.</p>
                <p>Die Berichte helfen uns auch Ihr Verhalten, Ihre Wünsche und Interessen besser einschätzen zu können. Dadurch können wir unsere Dienstleistungen und Produkte für Sie optimieren und anpassen. Diese Daten laufen standardmäßig nach 26 Monaten ab. Bitte beachten Sie, dass diese Datenerfassung nur erfolgt, wenn Sie personalisierte Werbung in Ihrem Google-Konto zugelassen haben. Es handelt sich dabei immer um zusammengefasste und anonyme Daten und nie um Daten einzelner Personen. In Ihrem Google-Konto können Sie diese Daten verwalten bzw. auch löschen.</p>
                <br />
                <h2>Google Tag Manager Datenschutzerklärung</h2>
                <p>Für unsere Website verwenden wir den Google Tag Manager des Unternehmens Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Dieser Tag Manager ist eines von vielen hilfreichen Marketing-Produkten von Google. Über den Google Tag Manager können wir Code-Abschnitte von diversen Trackingtools, die wir auf unserer Webseite verwenden, zentral einbauen und verwalten.</p>
                <p>In dieser Datenschutzerklärung wollen wir Ihnen genauer erklären was der Google Tag Manager macht, warum wir ihn verwenden und in welcher Form Daten verarbeitet werden.</p>
                <br />
                <h3>Was ist der Google Tag Manager?</h3>
                <p>Der Google Tag Manager ist ein Organisationstool, mit dem wir Webseiten-Tags zentral und über eine Benutzeroberfläche einbinden und verwalten können. Als Tags bezeichnet man kleine Code-Abschnitte, die beispielsweise Ihre Aktivitäten auf unserer Webseite aufzeichnen (tracken). Dafür werden JavaScript-Code-Abschnitte in den Quelltext unserer Seite eingesetzt. Die Tags stammen oft von google-internen Produkten wie Google Ads oder Google Analytics, aber auch Tags von anderen Unternehmen können über den Manager eingebunden und verwaltet werden. Solche Tags übernehmen unterschiedliche Aufgaben. Sie können Browserdaten sammeln, Marketingtools mit Daten füttern, Buttons einbinden, Cookies setzen und auch Nutzer über mehrere Webseiten hinweg verfolgen.</p>
                <br />
                <h3>Warum verwenden wir den Google Tag Manager für unserer Webseite?</h3>
                <p>Wie sagt man so schön: Organisation ist die halbe Miete! Und das betrifft natürlich auch die Pflege unserer Webseite. Um unsere Webseite für Sie und alle Menschen, die sich für unsere Produkte und Dienstleistungen interessieren, so gut wie möglich zu gestalten, brauchen wir diverse Trackingtools wie beispielsweise Google Analytics. Die erhobenen Daten dieser Tools zeigen uns, was Sie am meisten interessiert, wo wir unsere Leistungen verbessern können und welchen Menschen wir unsere Angebote noch zeigen sollten. Und damit dieses Tracking funktioniert, müssen wir entsprechende JavaScript-Codes in unsere Webseite einbinden. Grundsätzlich könnten wir jeden Code-Abschnitt der einzelnen Tracking-Tools separat in unseren Quelltext einbauen. Das erfordert allerdings relativ viel Zeit und man verliert leicht den Überblick. Darum nützen wir den Google Tag Manager. Wir können die nötigen Skripte einfach einbauen und von einem Ort aus verwalten. Zudem bietet der Google Tag Manager eine leicht zu bedienende Benutzeroberfläche und man benötigt keine Programmierkenntnisse. So schaffen wir es, Ordnung in unserem Tag-Dschungel zu halten.</p>
                <br />
                <h3>Welche Daten werden vom Google Tag Manager gespeichert?</h3>
                <p>Der Tag Manager selbst ist eine Domain, die keine Cookies setzt und keine Daten speichert. Er fungiert als bloßer „Verwalter“ der implementierten Tags. Die Daten erfassen die einzelnen Tags der unterschiedlichen Web-Analysetools. Die Daten werden im Google Tag Manager quasi zu den einzelnen Tracking-Tools durchgeschleust und nicht gespeichert.</p>
                <p>Ganz anders sieht das allerdings mit den eingebundenen Tags der verschiedenen Web-Analysetools, wie zum Beispiel Google Analytics, aus. Je nach Analysetool werden meist mit Hilfe von Cookies verschiedene Daten über Ihr Webverhalten gesammelt, gespeichert und verarbeitet. Dafür lesen Sie bitte unsere Datenschutztexte zu den einzelnen Analyse- und Trackingtools, die wir auf unserer Webseite verwenden.</p>
                <p>In den Kontoeinstellungen des Tag Managers haben wir Google erlaubt, dass Google anonymisierte Daten von uns erhält. Dabei handelt es sich aber nur um die Verwendung und Nutzung unseres Tag Managers und nicht um Ihre Daten, die über die Code-Abschnitte gespeichert werden. Wir ermöglichen Google und anderen, ausgewählte Daten in anonymisierter Form zu erhalten. Wir stimmen somit der anonymen Weitergabe unseren Website-Daten zu. Welche zusammengefassten und anonymen Daten genau weitergeleitet werden, konnten wir – trotz langer Recherche – nicht in Erfahrung bringen. Auf jeden Fall löscht Google dabei alle Infos, die unsere Webseite identifizieren könnten. Google fasst die Daten mit Hunderten anderen anonymen Webseiten-Daten zusammen und erstellt, im Rahmen von Benchmarking-Maßnahmen, Usertrends. Bei Benchmarking werden eigene Ergebnisse mit jenen der Mitbewerber verglichen. Auf Basis der erhobenen Informationen können Prozesse optimiert werden.</p>
                <br />
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Wenn Google Daten speichert, dann werden diese Daten auf den eigenen Google-Servern gespeichert. Die Server sind auf der ganzen Welt verteilt. Die meisten befinden sich in Amerika. Unter <a href="https://www.google.com/about/datacenters/inside/locations/?hl=de" rel="noopener noreferrer nofollow" class="external">https://www.google.com/about/datacenters/inside/locations/?hl=de</a> können Sie genau nachlesen, wo sich die Google-Server befinden.</p>
                <p>Wie lange die einzelnen Tracking-Tools Daten von Ihnen speichern, entnehmen Sie unseren individuellen Datenschutztexten zu den einzelnen Tools.</p>
                <br />
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Der Google Tag Manager selbst setzt keine Cookies, sondern verwaltet Tags verschiedener Tracking-Webseiten. In unseren Datenschutztexten zu den einzelnen Tracking-Tools, finden Sie detaillierte Informationen wie Sie Ihre Daten löschen bzw. verwalten können.</p>
                <p>Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" rel="noopener noreferrer nofollow" class="external">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=221133870</a>. Wenn Sie mehr über den Google Tag Manager erfahren wollen, empfehlen wir Ihnen die FAQs unter <a href="https://www.google.com/intl/de/tagmanager/faq.html" rel="noopener noreferrer nofollow" class="external">https://www.google.com/intl/de/tagmanager/faq.html</a>.</p>
                <br />
                <h2>Google Site Kit Datenschutzerklärung</h2>
                <p>Wir haben in unsere Website das WordPress-Plugin Google Site Kit des amerikanischen Unternehmens Google Inc. eingebunden. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Mit Google Site Kit können wir schnell und einfach Statistiken, die aus diversen Google-Produkten wie Google Analytics stammen, direkt in unserem WordPress-Dashboard ansehen. Das Tool beziehungsweise die in Google Site Kit eingebundenen Tools sammeln unter anderem auch personenbezogene Daten von Ihnen. In dieser Datenschutzerklärung erklären wir Ihnen, warum wir Google Site Kit verwenden, wie lange und wo Daten gespeichert werden und welche weiteren Datenschutztexte in diesem Zusammenhang für Sie relevant sind.</p>
                <br />
                <h3>Was ist Google Site Kit?</h3>
                <p>Google Site Kit ist ein Plugin für das Content-Management-System WordPress. Mit diesem Plugin können wir wichtige Statistiken zur Websiteanalyse direkt in unserem Dashboard ansehen. Dabei handelt es sich um Statistiken, die von anderen Google-Produkten erhoben werden. Allen voran von Google Analytics. Neben Google Analytics können auch noch die Services Google Search Console, Page Speed Insight, Google AdSense, Google Optimize und Google Tag Manager mit Google Site Kit verknüpft werden.</p>
                <br />
                <h3>Warum verwenden wir Google Site Kit auf unserer Website?</h3>
                <p>Als Dienstleister ist es unsere Aufgabe, Ihnen auf unserer Website das bestmögliche Erlebnis zu bieten. Sie sollen sich auf unserer Website wohl fühlen und schnell und einfach genau das finden, was Sie suchen. Statistische Auswertungen helfen uns dabei, sie besser kennen zu lernen und unser Angebot an Ihre Wünsche und Interessen anzupassen. Für diese Auswertungen nutzen wir verschiedene Google-Tools. Site Kit erleichtert diesbezüglich unsere Arbeit sehr, weil wir die Statistiken der Google-Produkte gleich im Dashboard ansehen und analysieren können. Wir müssen uns also nicht mehr für das jeweilige Tool extra anmelden. Site Kit bietet somit immer einen guten Überblick über die wichtigsten Analyse-Daten.</p>
                <br />
                <h3>Welche Daten werden von Google Site Kit gespeichert?</h3>
                <p>Wenn Sie im Cookie-Hinweis (auch Script oder Banner genannt) Trackingtools aktiv zugestimmt haben, werden durch Google-Produkte wie Google Analytics Cookies gesetzt und Daten von Ihnen, etwa über Ihr Userverhalten, an Google gesendet, dort gespeichert und verarbeitet. Darunter werden auch personenbezogen Daten wie Ihre IP-Adresse gespeichert.</p>
                <p>Für genauere Informationen zu den einzelnen Diensten haben wir eigenen Textabschnitte in dieser Datenschutzerklärung. Sehen Sie sich beispielsweise unsere Datenschutzerklärung zu Google Analytics an. Hier gehen wir sehr genau auf die erhobenen Daten ein. Sie erfahren wie lange Google Analytics Daten speichert, verwaltet und verarbeitet, welche Cookies zum Einsatz kommen können und wie Sie die Datenspeicherung verhindern. Ebenso haben wir auch für weitere Google-Dienste wie etwa den Google Tag Manager oder Google AdSense eigene Datenschutzerklärungen mit umfassenden Informationen.</p>
                <p>Im Folgenden zeigen wir Ihnen beispielhafte Google-Analytics-Cookies, die in Ihrem Browser gesetzt werden können, sofern Sie der Datenverarbeitung durch Google grundsätzlich zugestimmt haben. Bitte beachten Sie, dass es sich bei diesen Cookies lediglich um eine Auswahl handelt:</p>
                <p>
                    <strong>Name:</strong> _ga<br />
                    <strong>Wert:</strong>2.1326744211.152221133870-2<br />
                    <strong>Verwendungszweck:</strong> Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich dient es zur Unterscheidung der Websitenbesucher.<br />
                    <strong>Ablaufdatum:</strong> nach 2 Jahren</p>
                <p>
                    <strong>Name:</strong> _gid<br />
                    <strong>Wert:</strong>2.1687193234.152221133870-7<br />
                    <strong>Verwendungszweck:</strong> Auch dieses Cookie dient der Unterscheidung von Websitesbesuchern.<br />
                    <strong>Ablaufdatum:</strong> nach 24 Stunden</p>
                <p>
                    <strong>Name:</strong> _gat_gtag_UA_<br />
                    <strong>Wert:</strong> 1<br />
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird zum Senken der Anforderungsrate verwendet.<br />
                    <strong>Ablaufdatum: </strong>nach 1 Minute</p>
                <br />
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Google speichert erhobene Daten auf eigenen Google-Servern, die weltweit verteilt sind. Die meisten Server befinden sich in den Vereinigten Staaten und daher ist es leicht möglich, dass Ihre Daten auch dort gespeichert werden. Auf <a href="https://www.google.com/about/datacenters/inside/locations/?hl=de" class="external" rel="nofollow">https://www.google.com/about/datacenters/inside/locations/?hl=de</a> sehen Sie genau, wo das Unternehmen Server bereitstellt.</p>
                <p>Daten, die durch Google Analytics erhoben werden, werden standardisiert 26 Monate aufbewahrt. Im Anschluss werden Ihre Userdaten gelöscht. Die Aufbewahrungsdauer gilt für alle Daten, die mit Cookies, Usererkennung und Werbe-IDs verknüpft sind.</p>
                <br />
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Sie haben immer das Recht, Auskunft über Ihre Daten zu erhalten, Ihre Daten löschen, berichtigen oder einschränken zu lassen. Zudem können Sie auch in Ihrem Browser Cookies jederzeit deaktivieren, löschen oder verwalten. Hier zeigen wir Ihnen die entsprechenden Anleitungen der gängigsten Browser:</p>
                <p>
                    <a href="https://support.google.com/chrome/answer/95647?tid=221133870" rel="noopener noreferrer nofollow" class="external">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                </p>
                <p>
                    <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221133870" rel="noopener noreferrer nofollow" class="external">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                </p>
                <p>
                    <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221133870" rel="noopener noreferrer nofollow" class="external">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Internet Explorer: Löschen und Verwalten von Cookies</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                </p>
                <p>Google ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework, wodurch der korrekte und sichere Datentransfer persönlicher Daten geregelt wird. Mehr Informationen dazu finden Sie auf <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" class="external" rel="nofollow">https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&tid=221133870</a>. Um mehr über die Datenverarbeitung durch Google zu erfahren, empfehlen wir Ihnen die umfassenden Datenschutzrichtlinien von Google unter <a href="https://policies.google.com/privacy?hl=de?tid=221133870" class="external" rel="nofollow">https://policies.google.com/privacy?hl=de</a>.</p>
                <br />
                <h2>OpenStreetMap Datenschutzerklärung</h2>
                <p>Wir haben auf unserer Website Kartenausschnitte des Online-Kartentools „OpenStreetMap“ eingebunden. Dabei handelt es sich um ein sogenanntes Open-Source-Mapping, welches wir über eine API (Schnittstelle) abrufen können. Angeboten wird diese Funktion von OpenStreetMap Foundation, St John’s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom. Durch die Verwendung dieser Kartenfunktion wird Ihre IP-Adresse an OpenStreetMap weitergeleitet. In dieser Datenschutzerklärung erfahren Sie warum wir Funktionen des Tools OpenStreetMap verwenden, wo welche Daten gespeichert werden und wie Sie diese Datenspeicherung verhindern können.</p>
                <br />
                <h3>Was ist OpenStreetMap?</h3>
                <p>Das Projekt OpenStreetMap wurde 2004 ins Leben gerufen. Ziel des Projekts ist und war es, eine freie Weltkarte zu erschaffen. User sammeln weltweit Daten etwa über Gebäude, Wälder, Flüsse und Straßen. So entstand über die Jahre eine umfangreiche, von Usern selbst erstellte digitale Weltkarte. Selbstverständlich ist die Karte, nicht vollständig, aber in den meisten Regionen mit sehr vielen Daten ausgestattet.</p>
                <br />
                <h3>Warum verwenden wir OpenStreetMap auf unserer Website?</h3>
                <p>Unsere Website soll Ihnen in erster Linie hilfreich sein. Und das ist sie aus unserer Sicht immer dann, wenn man Information schnell und einfach findet. Da geht es natürlich einerseits um unsere Dienstleistungen und Produkte, andererseits sollen Ihnen auch weitere hilfreiche Informationen zur Verfügung stehen. Deshalb nutzen wir auch den Kartendienst OpenStreetMap. Denn so können wir Ihnen beispielsweise genau zeigen, wie Sie unsere Firma finden. Die Karte zeigt Ihnen den besten Weg zu uns und Ihre Anfahrt wird zum Kinderspiel.</p>
                <br />
                <h3>Welche Daten werden von OpenStreetMap gespeichert?</h3>
                <p>Wenn Sie eine unserer Webseiten besuchen, die OpenStreetMap anbietet, werden Nutzerdaten an den Dienst übermittelt und dort gespeichert. OpenStreetMap sammelt etwa Informationen über Ihre Interaktionen mit der digitalen Karte, Ihre IP-Adresse, Daten zu Ihrem Browser, Gerätetyp, Betriebssystem und an welchem Tag und zu welcher Uhrzeit Sie den Dienst in Anspruch genommen haben. Dafür wird auch Tracking-Software zur Aufzeichnung von Userinteraktionen verwendet. Das Unternehmen gibt hier in der eigenen Datenschutzerklärung das Analysetool „Piwik“ an.</p>
                <p>Die erhobenen Daten sind in Folge den entsprechenden Arbeitsgruppen der OpenStreetMap Foundation zugänglich. Laut dem Unternehmen werden persönliche Daten nicht an andere Personen oder Firmen weitergegeben, außer dies ist rechtlich notwendig. Der Drittanbieter Piwik speichert zwar Ihre IP-Adresse, allerdings in gekürzter Form.</p>
                <p>Folgendes Cookie kann in Ihrem Browser gesetzt werden, wenn Sie mit OpenStreetMap auf unserer Website interagieren:</p>
                <p>
                    <strong>Name:</strong> _osm_location<br />
                    <strong>Wert:</strong> 9.63312%7C52.41500%7C17%7CM<br />
                    <strong>Verwendungszweck:</strong> Das Cookie wird benötigt, um die Inhalte von OpenStreetMap zu entsperren.<br />
                    <strong>Ablaufdatum:</strong> nach 10 Jahren</p>
                <p>Wenn Sie sich das Vollbild der Karte ansehen wollen, werden Sie auf die OpenStreetMap-Website verlinkt. Dort können unter anderem folgende Cookies in Ihrem Browser gespeichert werden:</p>
                <p>
                    <strong>Name:</strong> _osm_totp_token<br />
                    <strong>Wert:</strong> 148253221133870-2<br />
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird benutzt, um die Bedienung des Kartenausschnitts zu gewährleisten.<br />
                    <strong>Ablaufdatum:</strong> nach einer Stunde</p>
                <p>
                    <strong>Name:</strong> _osm_session<br />
                    <strong>Wert:</strong> 1d9bfa122e0259d5f6db4cb8ef653a1c<br />
                    <strong>Verwendungszweck:</strong> Mit Hilfe des Cookies können Sitzungsinformationen (also Userverhalten) gespeichert werden.<br />
                    <strong>Ablaufdatum:</strong> nach Sitzungsende</p>
                <p>
                    <strong>Name:</strong> _pk_id.1.cf09<br />
                    <strong>Wert:</strong> 4a5.1593684142.2.1593688396.1593688396221133870-9<br />
                    <strong>Verwendungszweck:</strong> Dieses Cookie wird von Piwik gesetzt, um Userdaten wie etwa das Klickverhalten zu speichern bzw. zu messen.<br />
                    <strong>Ablaufdatum:</strong> nach einem Jahr</p>
                <br />
                <h3>Wie lange und wo werden die Daten gespeichert?</h3>
                <p>Die API-Server, die Datenbanken und die Server von Hilfsdiensten befinden sich derzeit im Vereinten Königreich (Großbritannien und Nordirland) und in den Niederlanden. Ihre IP-Adresse und Userinformationen, die in gekürzter Form durch das Webanalysetool Piwik gespeichert werden, werden nach 180 Tagen wieder gelöscht.</p>
                <br />
                <h3>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
                <p>Sie haben jederzeit das Recht auf Ihre personenbezogenen Daten zuzugreifen und Einspruch gegen die Nutzung und Verarbeitung zu erheben. Cookies, die von OpenStreetMap möglicherweise gesetzt werden, können Sie in Ihrem Browser jederzeit verwalten, löschen oder deaktivieren. Dadurch wird allerdings der Dienst nicht mehr im vollen Ausmaß funktionieren. Bei jedem Browser funktioniert die Verwaltung, Löschung oder Deaktivierung von Cookies etwas anders. Im Folgenden finden Sie Links zu den Anleitungen der bekanntesten Browser:</p>
                <p>
                    <a href="https://support.google.com/chrome/answer/95647?tid=221133870" rel="noopener noreferrer nofollow" class="external">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
                </p>
                <p>
                    <a href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=221133870" rel="noopener noreferrer nofollow" class="external">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
                </p>
                <p>
                    <a href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=221133870" rel="noopener noreferrer nofollow" class="external">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Internet Explorer: Löschen und Verwalten von Cookies</a>
                </p>
                <p>
                    <a href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=221133870" rel="noopener noreferrer nofollow" class="external">Microsoft Edge: Löschen und Verwalten von Cookies</a>
                </p>
                <p>Wenn Sie mehr über die Datenverarbeitung durch OpenStreetMap erfahren wollen, empfehlen wir Ihnen die Datenschutzerklärung des Unternehmens unter <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy?tid=221133870" rel="noopener noreferrer nofollow" class="external">https://wiki.osmfoundation.org/wiki/Privacy_Policy.</a>
                </p>
            </Container>
        </Layout>
    )
}

export default DatenschutzPage