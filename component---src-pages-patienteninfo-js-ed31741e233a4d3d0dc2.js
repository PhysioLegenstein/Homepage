(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6xyR":function(e,n,a){"use strict";var t=a("wx14"),r=a("zLVn"),l=a("TSYQ"),i=a.n(l),c=a("q1tI"),s=a.n(c),u=a("vUet"),d=a("YdCC"),m=function(e){return s.a.forwardRef((function(n,a){return s.a.createElement("div",Object(t.a)({},n,{ref:a,className:i()(n.className,e)}))}))},o=a("Wzyw"),h=s.a.forwardRef((function(e,n){var a=e.bsPrefix,l=e.className,c=e.variant,d=e.as,m=void 0===d?"img":d,o=Object(r.a)(e,["bsPrefix","className","variant","as"]),h=Object(u.a)(a,"card-img");return s.a.createElement(m,Object(t.a)({ref:n,className:i()(c?h+"-"+c:h,l)},o))}));h.displayName="CardImg",h.defaultProps={variant:null};var b=h,g=m("h5"),E=m("h6"),f=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:g}),p=Object(d.a)("card-subtitle",{Component:E}),y=Object(d.a)("card-link",{Component:"a"}),w=Object(d.a)("card-text",{Component:"p"}),k=Object(d.a)("card-header"),x=Object(d.a)("card-footer"),N=Object(d.a)("card-img-overlay"),z=s.a.forwardRef((function(e,n){var a=e.bsPrefix,l=e.className,d=e.bg,m=e.text,h=e.border,b=e.body,g=e.children,E=e.as,v=void 0===E?"div":E,p=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(u.a)(a,"card"),w=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(o.a.Provider,{value:w},s.a.createElement(v,Object(t.a)({ref:n},p,{className:i()(l,y,d&&"bg-"+d,m&&"text-"+m,h&&"border-"+h)}),b?s.a.createElement(f,null,g):g))}));z.displayName="Card",z.defaultProps={body:!1},z.Img=b,z.Title=v,z.Subtitle=p,z.Body=f,z.Link=y,z.Text=w,z.Header=k,z.Footer=x,z.ImgOverlay=N;n.a=z},bTpR:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),l=a("7vrA"),i=a("3Z9Z"),c=a("JI6e"),s=a("6xyR"),u=a("wx14"),d=a("zLVn"),m=a("TSYQ"),o=a.n(m),h=a("JCAc"),b=a("vUet"),g=a("ILyh"),E=r.a.createContext(null);E.displayName="AccordionContext";var f=E;var v=r.a.forwardRef((function(e,n){var a=e.as,l=void 0===a?"button":a,i=e.children,c=e.eventKey,s=e.onClick,m=Object(d.a)(e,["as","children","eventKey","onClick"]),o=function(e,n){var a=Object(t.useContext)(f),r=Object(t.useContext)(g.a);return function(t){r&&r(e===a?null:e,t),n&&n(t)}}(c,s);return"button"===l&&(m.type="button"),r.a.createElement(l,Object(u.a)({ref:n,onClick:o},m),i)})),p=a("vYJ8"),y=r.a.forwardRef((function(e,n){var a=e.children,l=e.eventKey,i=Object(d.a)(e,["children","eventKey"]),c=Object(t.useContext)(f);return r.a.createElement(p.a,Object(u.a)({ref:n,in:c===l},i),r.a.createElement("div",null,r.a.Children.only(a)))}));y.displayName="AccordionCollapse";var w=y,k=r.a.forwardRef((function(e,n){var a=Object(h.a)(e,{activeKey:"onSelect"}),t=a.as,l=void 0===t?"div":t,i=a.activeKey,c=a.bsPrefix,s=a.children,m=a.className,E=a.onSelect,v=Object(d.a)(a,["as","activeKey","bsPrefix","children","className","onSelect"]),p=o()(m,Object(b.a)(c,"accordion"));return r.a.createElement(f.Provider,{value:i||null},r.a.createElement(g.a.Provider,{value:E||null},r.a.createElement(l,Object(u.a)({ref:n},v,{className:p}),s)))}));k.displayName="Accordion",k.Toggle=v,k.Collapse=w;var x=k,N=a("vrFN"),z=a("Bl7J");n.default=function(){return r.a.createElement(z.a,null,r.a.createElement(N.a,{title:"Patienteninfo"}),r.a.createElement(l.a,{className:"text-left border rounded shadow site-section"},r.a.createElement("h1",null,"Organisatorisches zur Physiotherapie")),r.a.createElement(l.a,null,r.a.createElement(i.a,null,r.a.createElement(c.a,{lg:4,md:12,className:"mb-3"},r.a.createElement("div",{className:"info-box shadow",id:"info-box-one"},r.a.createElement("h4",null,r.a.createElement("b",null,"1.")," Die ärztliche Verordnung..."),r.a.createElement("hr",null),r.a.createElement("ul",null,r.a.createElement("li",null,"gültige ärztliche Verordnung, ausgestellt von Ihrem Hausarzt bzw. Facharzt"),r.a.createElement("li",null,"VOR der ersten Therapieeinheit"),r.a.createElement("li",null,"die Verordnung sollte folgendes beinhalten: Therapieart, Anzahl, Dauer und Name des Therapeuten"),r.a.createElement("br",null),r.a.createElement("i",null,"z.B.: 10 x Einzelheilgymnastik à 45 min, Herrn Legenstein")),r.a.createElement("i",null,"Empfehlung: Bewilligen Sie Ihre ärztliche Verordnung vorab bei der Krankenkasse"))),r.a.createElement(c.a,{lg:4,md:12,className:"mb-3"},r.a.createElement("div",{className:"info-box shadow",id:"info-box-two"},r.a.createElement("h4",null,r.a.createElement("b",null,"2.")," Zur Therapie..."),r.a.createElement("hr",null),"Mitzunehmen:",r.a.createElement("ul",null,r.a.createElement("li",null,"ärztliche Verordnung"),r.a.createElement("li",null,"wenn vorhanden: aktuelle medizinisch relevante Unterlagen (Befunde, Röntgen, Entlassungsberichte, ...)"),r.a.createElement("li",null,"bequeme Kleidung"),r.a.createElement("li",null,"großes Handtuch")),r.a.createElement("b",null,r.a.createElement("i",null,"WICHTIG: Aufgrund der aktuellen Situation ist das Betreten der Praxis nur mit Mund-Nasenschutz erlaubt!")))),r.a.createElement(c.a,{lg:4,md:12,className:"mb-3"},r.a.createElement("div",{className:"info-box shadow",id:"info-box-three"},r.a.createElement("h4",null,r.a.createElement("b",null,"3.")," Rückerstattung..."),r.a.createElement("hr",null),"Die Krankenkasse benötigt:",r.a.createElement("ul",null,r.a.createElement("li",null,"Honorarnote + Zahlungsbestätigung"),r.a.createElement("li",null,"bewilligte ärztliche Verordnung")))))),r.a.createElement(l.a,{className:"text-left border rounded shadow site-section"},r.a.createElement("h1",null,"Häufige Fragen"),r.a.createElement("div",{className:"faq-section"},r.a.createElement(x,{defaultActiveKey:"0"},r.a.createElement(s.a,null,r.a.createElement(x.Toggle,{as:s.a.Header,eventKey:"0"},"Welche Sicherheitsmaßnahmen werden aufgrund des Coronavirus durchgeführt?"),r.a.createElement(x.Collapse,{eventKey:"0"},r.a.createElement(s.a.Body,null,r.a.createElement("ol",null,r.a.createElement("li",null,"Bei vorliegenden Symptomen, die mit dem Coronavirus in Verbindung stehen, bitte nicht die Praxis aufsuchen - wir werden telefonisch einen Ersatztermin organisieren."),r.a.createElement("li",null,"Hatten Sie Kontakt mit einer kürzlich positiv getesteten Person - auch hier bitte um telefonische Rücksprache."),r.a.createElement("li",null,"In den Räumlichkeiten der Praxis ist das Tragen eines Mund-Nasenschutzes erforderlich."),r.a.createElement("li",null,"Zu Beginn der Therapie bitten wir um eine gründliche Handdesinfektion."),r.a.createElement("li",null,"Um das Überschneiden von Patiententerminen zu vermeiden und so den Kontakt mit anderen Patienten gering zu halten - bitte um pünktliches Erscheinen."))))),r.a.createElement(s.a,null,r.a.createElement(x.Toggle,{as:s.a.Header,eventKey:"1"},"Was muss ich zur Physiotherapie mitbringen?"),r.a.createElement(x.Collapse,{eventKey:"1"},r.a.createElement(s.a.Body,null,"Für die erste Therapieeinheit werden alle ",r.a.createElement("b",null,"relevanten Befunde")," und die ",r.a.createElement("b",null,"ärztliche Zuweisung")," benötigt. Weiters sollten Sie ",r.a.createElement("b",null,"bequeme Kleidung")," und ein frisches ",r.a.createElement("b",null,"Handtuch")," mitbringen."))),r.a.createElement(s.a,null,r.a.createElement(x.Toggle,{as:s.a.Header,eventKey:"2"},"Wie läuft der erste Termin ab?"),r.a.createElement(x.Collapse,{eventKey:"2"},r.a.createElement(s.a.Body,null,"Beim ersten Termin wird zunächst ein ",r.a.createElement("b",null,"genauer Befund")," erstellt (Vorgeschichte, Problemfindung, Zielsetzung, …). Nach Durchführung verschiedener Tests und Untersuchung des Problembereichs wird eine physiotherapeutische Arbeitsdiagnose gestellt. Gemeinsam mit Ihnen wird dann ein ",r.a.createElement("b",null,"Behandlungsplan")," entwickelt um ",r.a.createElement("b",null,"Ihre definierten Ziele bestmöglich zu erreichen"),"."))),r.a.createElement(s.a,null,r.a.createElement(x.Toggle,{as:s.a.Header,eventKey:"3"},"Was bedeutet Wahltherapeut?"),r.a.createElement(x.Collapse,{eventKey:"3"},r.a.createElement(s.a.Body,null,"Als Wahltherapeut habe ich keinen direkten Vertrag mit der Krankenkasse. Sie erhalten nach einem oder mehreren Behandlungsterminen eine Rechnung. Nach der Begleichung schicken Sie die Rechnung samt Zahlungsbestätigung an Ihre Krankenkasse. Sie bekommen dann, gemäß den Tarifen Ihrer Versicherung, einen Teilbetrag refundiert."))),r.a.createElement(s.a,null,r.a.createElement(x.Toggle,{as:s.a.Header,eventKey:"4"},"Wie können vereinbarte Termine abgesagt werden?"),r.a.createElement(x.Collapse,{eventKey:"4"},r.a.createElement(s.a.Body,null,"Terminabsagen bitte spätestens 24h im Vorhinein. Absagen ausschließlich telefonisch per Anruf, SMS oder Mailbox. Bitte haben Sie Verständnis, dass bei zu spät abgesagten Terminen oder dem Nichterscheinen zum Termin 50% der Honorarnote ausgestellt werden. Die Krankenkassa übernimmt hierbei keine Kosten.")))))))}}}]);
//# sourceMappingURL=component---src-pages-patienteninfo-js-ed31741e233a4d3d0dc2.js.map