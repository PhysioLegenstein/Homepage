(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6xyR":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),i=a.n(l),c=a("q1tI"),s=a.n(c),d=a("vUet"),m=a("YdCC"),u=function(e){return s.a.forwardRef((function(t,a){return s.a.createElement("div",Object(r.a)({},t,{ref:a,className:i()(t.className,e)}))}))},o=a("Wzyw"),b=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.variant,m=e.as,u=void 0===m?"img":m,o=Object(n.a)(e,["bsPrefix","className","variant","as"]),b=Object(d.a)(a,"card-img");return s.a.createElement(u,Object(r.a)({ref:t,className:i()(c?b+"-"+c:b,l)},o))}));b.displayName="CardImg",b.defaultProps={variant:null};var h=b,E=u("h5"),f=u("h6"),p=Object(m.a)("card-body"),g=Object(m.a)("card-title",{Component:E}),v=Object(m.a)("card-subtitle",{Component:f}),j=Object(m.a)("card-link",{Component:"a"}),y=Object(m.a)("card-text",{Component:"p"}),w=Object(m.a)("card-header"),N=Object(m.a)("card-footer"),x=Object(m.a)("card-img-overlay"),O=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,m=e.bg,u=e.text,b=e.border,h=e.body,E=e.children,f=e.as,g=void 0===f?"div":f,v=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),j=Object(d.a)(a,"card"),y=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:j+"-header"}}),[j]);return s.a.createElement(o.a.Provider,{value:y},s.a.createElement(g,Object(r.a)({ref:t},v,{className:i()(l,j,m&&"bg-"+m,u&&"text-"+u,b&&"border-"+b)}),h?s.a.createElement(p,null,E):E))}));O.displayName="Card",O.defaultProps={body:!1},O.Img=h,O.Title=g,O.Subtitle=v,O.Body=p,O.Link=j,O.Text=y,O.Header=w,O.Footer=N,O.ImgOverlay=x;t.a=O},MBJH:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),l=a("TSYQ"),i=a.n(l),c=a("q1tI"),s=a.n(c),d=a("vUet"),m=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.striped,m=e.bordered,u=e.borderless,o=e.hover,b=e.size,h=e.variant,E=e.responsive,f=Object(n.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(d.a)(a,"table"),g=i()(l,p,h&&p+"-"+h,b&&p+"-"+b,c&&p+"-striped",m&&p+"-bordered",u&&p+"-borderless",o&&p+"-hover"),v=s.a.createElement("table",Object(r.a)({},f,{className:g,ref:t}));if(E){var j=p+"-responsive";return"string"==typeof E&&(j=j+"-"+E),s.a.createElement("div",{className:j},v)}return v}));t.a=m},jvTS:function(e,t,a){e.exports=a.p+"static/Matthias2-0b2ca8892fbe3c84fb5ab3887660022f.jpg"},uGUT:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=a("9eSz"),c=a.n(i),s=a("7vrA"),d=a("3Z9Z"),m=a("JI6e"),u=a("2mvg"),o=a("MBJH"),b=a("YdCC"),h=Object(b.a)("card-columns"),E=a("6xyR"),f=a("cWnB"),p=a("vrFN"),g=a("Bl7J"),v=a("jvTS"),j=a.n(v);t.default=function(){var e=Object(l.c)("1354978533");return n.a.createElement(g.a,null,n.a.createElement(p.a,{title:"Über Mich"}),n.a.createElement(s.a,{className:"border rounded shadow site-section"},n.a.createElement("h1",null,"Über Mich"),n.a.createElement(d.a,null,n.a.createElement(m.a,{md:6,className:"text-center"},n.a.createElement(u.a,{className:"rounded img-fluid shadow",id:"about-pic",src:j.a,alt:"Matthias Legenstein"})),n.a.createElement(m.a,{md:6,className:"text-center my-auto pt-3"},n.a.createElement("p",null,"Die Faszination an der Bewegung, wie auch jahrelanges Arbeiten als freiwilliger Sanitäter beim Roten Kreuz haben mich auf den Beruf des Physiotherapeuten aufmerksam gemacht. Mich begeistern die vielfältigen Therapiemöglichkeiten, die den Patienten dauerhaft mehr Lebensqualität ermöglichen können."))),n.a.createElement("div",{className:"about-section text-center"},n.a.createElement("p",null,n.a.createElement("span",{className:"about-motto"},"„Behandle jeden Patienten – wie du auch selbst behandelt werden möchtest“")))),n.a.createElement(s.a,{className:"border rounded shadow text-center site-section"},n.a.createElement("h1",null,"Fortbildungen")),n.a.createElement(s.a,null,n.a.createElement(h,null,e.allMarkdownRemark.edges.map((function(e){return n.a.createElement(E.a,{key:e.node.frontmatter.title,className:"shadow"},n.a.createElement(E.a.Img,{as:c.a,variant:"top",fluid:e.node.frontmatter.image.childImageSharp.fluid,alt:e.node.frontmatter.title}),n.a.createElement(E.a.Body,null,n.a.createElement(E.a.Title,null,n.a.createElement("span",null,e.node.frontmatter.title)),n.a.createElement(E.a.Text,null,n.a.createElement("span",null,e.node.frontmatter.description)),n.a.createElement(l.a,{to:"/über-mich/"+e.node.fields.slug},n.a.createElement(f.a,{variant:"primary"},"Mehr lesen..."))))})))),n.a.createElement(s.a,{className:"border rounded shadow site-section"},n.a.createElement("div",{className:"about-section"},n.a.createElement("h1",null,"Mein beruflicher Werdegang"),n.a.createElement(o.a,{responsive:!0,borderless:!0,striped:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Jahr"),n.a.createElement("th",null,"Tätigkeit"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"2008"),n.a.createElement("td",null,"Matura – AHS Berndorf")),n.a.createElement("tr",null,n.a.createElement("td",null,"2009"),n.a.createElement("td",null,"Zivildienst Rotes Kreuz, anschließend jahrelange freiwillige Tätigkeit als Sanitäter")),n.a.createElement("tr",null,n.a.createElement("td",null,"2009 bis 2011"),n.a.createElement("td",null,"Studium an der WU-Wien - Betriebswirtschaftslehre")),n.a.createElement("tr",null,n.a.createElement("td",null,"2011 bis 2014"),n.a.createElement("td",null,"Studiengang Physiotherapie am FH Campus Wien")),n.a.createElement("tr",null,n.a.createElement("td",null,"2014 bis 2018"),n.a.createElement("td",null,"Beschäftigt als Physiotherapeut bei Caritas Socialis Wien (Tagesheim)")),n.a.createElement("tr",null,n.a.createElement("td",null,"2015 bis 2018"),n.a.createElement("td",null,"Beschäftigt als Physiotherapeut im rehabilitativen Bereich des Gesundheits- und Kurhotels Badener Hof")),n.a.createElement("tr",null,n.a.createElement("td",null,"2018 bis 2020"),n.a.createElement("td",null,"Beschäftigt als Physiotherapeut bei Optima Med - ambulantes Rehabilitationszentrum Wiener Neustadt")),n.a.createElement("tr",null,n.a.createElement("td",null,"Seit 2019"),n.a.createElement("td",null,"Selbständige Tätigkeit als Physiotherapeut in der Physiopraxis Health & Sport Kottingbrunn")),n.a.createElement("tr",null,n.a.createElement("td",null,"Seit 2020"),n.a.createElement("td",null,"Selbständige Tätigkeit als Physiotherapeut bei  Physiotherapie Legenstein in Baden")))))))}}}]);
//# sourceMappingURL=component---src-pages-uber-mich-js-664561c1b130e3f40f7c.js.map