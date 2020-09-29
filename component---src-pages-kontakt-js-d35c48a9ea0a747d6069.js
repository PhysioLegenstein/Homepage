(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{IDOG:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t("dI71"),l=t("q1tI"),r=t.n(l),s=t("7vrA"),i=t("3Z9Z"),c=t("JI6e"),o=t("wx14"),m=t("zLVn"),d=t("TSYQ"),u=t.n(d),b=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,l=e.className,s=e.type,i=void 0===s?"valid":s,c=e.tooltip,d=void 0!==c&&c,b=Object(m.a)(e,["as","className","type","tooltip"]);return r.a.createElement(n,Object(o.a)({},b,{ref:a,className:u()(l,i+"-"+(d?"tooltip":"feedback"))}))})));b.displayName="Feedback";var f=b,v=r.a.createContext({controlId:void 0}),p=t("vUet"),h=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,c=e.type,d=void 0===c?"checkbox":c,b=e.isValid,f=void 0!==b&&b,h=e.isInvalid,E=void 0!==h&&h,N=e.isStatic,x=e.as,g=void 0===x?"input":x,O=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),y=Object(l.useContext)(v),j=y.controlId,P=y.custom?[s,"custom-control-input"]:[n,"form-check-input"],I=P[0],k=P[1];return n=Object(p.a)(I,k),r.a.createElement(g,Object(o.a)({},O,{ref:a,type:d,id:t||j,className:u()(i,n,f&&"is-valid",E&&"is-invalid",N&&"position-static")}))}));h.displayName="FormCheckInput";var E=h,N=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,i=e.htmlFor,c=Object(m.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(l.useContext)(v),b=d.controlId,f=d.custom?[n,"custom-control-label"]:[t,"form-check-label"],h=f[0],E=f[1];return t=Object(p.a)(h,E),r.a.createElement("label",Object(o.a)({},c,{ref:a,htmlFor:i||b,className:u()(s,t)}))}));N.displayName="FormCheckLabel";var x=N,g=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.inline,c=void 0!==i&&i,d=e.disabled,b=void 0!==d&&d,h=e.isValid,N=void 0!==h&&h,g=e.isInvalid,O=void 0!==g&&g,y=e.feedbackTooltip,j=void 0!==y&&y,P=e.feedback,I=e.className,k=e.style,w=e.title,C=void 0===w?"":w,F=e.type,z=void 0===F?"checkbox":F,R=e.label,S=e.children,L=e.custom,V=e.as,G=void 0===V?"input":V,T=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),B="switch"===z||L,M=B?[s,"custom-control"]:[n,"form-check"],A=M[0],K=M[1];n=Object(p.a)(A,K);var J=Object(l.useContext)(v).controlId,W=Object(l.useMemo)((function(){return{controlId:t||J,custom:B}}),[J,B,t]),Z=null!=R&&!1!==R&&!S,D=r.a.createElement(E,Object(o.a)({},T,{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:O,isStatic:!Z,disabled:b,as:G}));return r.a.createElement(v.Provider,{value:W},r.a.createElement("div",{style:k,className:u()(I,n,B&&"custom-"+z,c&&n+"-inline")},S||r.a.createElement(r.a.Fragment,null,D,Z&&r.a.createElement(x,{title:C},R),(N||O)&&r.a.createElement(f,{type:N?"valid":"invalid",tooltip:j},P))))}));g.displayName="FormCheck",g.Input=E,g.Label=x;var O=g,y=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,c=e.isValid,d=e.isInvalid,b=e.lang,f=e.as,h=void 0===f?"input":f,E=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),N=Object(l.useContext)(v),x=N.controlId,g=N.custom?[s,"custom-file-input"]:[n,"form-control-file"],O=g[0],y=g[1];return n=Object(p.a)(O,y),r.a.createElement(h,Object(o.a)({},E,{ref:a,id:t||x,type:"file",lang:b,className:u()(i,n,c&&"is-valid",d&&"is-invalid")}))}));y.displayName="FormFileInput";var j=y,P=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,s=e.className,i=e.htmlFor,c=Object(m.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(l.useContext)(v),b=d.controlId,f=d.custom?[n,"custom-file-label"]:[t,"form-file-label"],h=f[0],E=f[1];return t=Object(p.a)(h,E),r.a.createElement("label",Object(o.a)({},c,{ref:a,htmlFor:i||b,className:u()(s,t),"data-browse":c["data-browse"]}))}));P.displayName="FormFileLabel";var I=P,k=r.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,s=e.bsCustomPrefix,i=e.disabled,c=void 0!==i&&i,d=e.isValid,b=void 0!==d&&d,h=e.isInvalid,E=void 0!==h&&h,N=e.feedbackTooltip,x=void 0!==N&&N,g=e.feedback,O=e.className,y=e.style,P=e.label,k=e.children,w=e.custom,C=e.lang,F=e["data-browse"],z=e.as,R=void 0===z?"div":z,S=e.inputAs,L=void 0===S?"input":S,V=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),G=w?[s,"custom"]:[n,"form-file"],T=G[0],B=G[1];n=Object(p.a)(T,B);var M=Object(l.useContext)(v).controlId,A=Object(l.useMemo)((function(){return{controlId:t||M,custom:w}}),[M,w,t]),K=null!=P&&!1!==P&&!k,J=r.a.createElement(j,Object(o.a)({},V,{ref:a,isValid:b,isInvalid:E,disabled:c,as:L,lang:C}));return r.a.createElement(v.Provider,{value:A},r.a.createElement(R,{style:y,className:u()(O,n,w&&"custom-file")},k||r.a.createElement(r.a.Fragment,null,w?r.a.createElement(r.a.Fragment,null,J,K&&r.a.createElement(I,{"data-browse":F},P)):r.a.createElement(r.a.Fragment,null,K&&r.a.createElement(I,null,P),J),(b||E)&&r.a.createElement(f,{type:b?"valid":"invalid",tooltip:x},g))))}));k.displayName="FormFile",k.Input=j,k.Label=I;var w=k,C=(t("2W6z"),r.a.forwardRef((function(e,a){var t,n,s=e.bsPrefix,i=e.bsCustomPrefix,c=e.type,d=e.size,b=e.htmlSize,f=e.id,h=e.className,E=e.isValid,N=void 0!==E&&E,x=e.isInvalid,g=void 0!==x&&x,O=e.plaintext,y=e.readOnly,j=e.custom,P=e.as,I=void 0===P?"input":P,k=Object(m.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),w=Object(l.useContext)(v).controlId,C=j?[i,"custom"]:[s,"form-control"],F=C[0],z=C[1];if(s=Object(p.a)(F,z),O)(n={})[s+"-plaintext"]=!0,t=n;else if("file"===c){var R;(R={})[s+"-file"]=!0,t=R}else if("range"===c){var S;(S={})[s+"-range"]=!0,t=S}else if("select"===I&&j){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+d]=d,t=L}else{var V;(V={})[s]=!0,V[s+"-"+d]=d,t=V}return r.a.createElement(I,Object(o.a)({},k,{type:c,size:b,ref:a,readOnly:y,id:f||w,className:u()(h,t,N&&"is-valid",g&&"is-invalid")}))})));C.displayName="FormControl";var F=Object.assign(C,{Feedback:f}),z=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,s=e.children,i=e.controlId,c=e.as,d=void 0===c?"div":c,b=Object(m.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.a)(t,"form-group");var f=Object(l.useMemo)((function(){return{controlId:i}}),[i]);return r.a.createElement(v.Provider,{value:f},r.a.createElement(d,Object(o.a)({},b,{ref:a,className:u()(n,t)}),s))}));z.displayName="FormGroup";var R=z,S=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,s=e.bsPrefix,i=e.column,d=e.srOnly,b=e.className,f=e.htmlFor,h=Object(m.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),E=Object(l.useContext)(v).controlId;s=Object(p.a)(s,"form-label");var N="col-form-label";"string"==typeof i&&(N=N+"-"+i);var x=u()(b,s,d&&"sr-only",i&&N);return f=f||E,i?r.a.createElement(c.a,Object(o.a)({as:"label",className:x,htmlFor:f},h)):r.a.createElement(n,Object(o.a)({ref:a,className:x,htmlFor:f},h))}));S.displayName="FormLabel",S.defaultProps={column:!1,srOnly:!1};var L=S,V=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,s=void 0===l?"small":l,i=e.muted,c=Object(m.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.a)(t,"form-text"),r.a.createElement(s,Object(o.a)({},c,{ref:a,className:u()(n,t,i&&"text-muted")}))}));V.displayName="FormText";var G=V,T=r.a.forwardRef((function(e,a){return r.a.createElement(O,Object(o.a)({},e,{ref:a,type:"switch"}))}));T.displayName="Switch",T.Input=O.Input,T.Label=O.Label;var B=T,M=t("YdCC"),A=Object(M.a)("form-row"),K=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,l=e.className,s=e.validated,i=e.as,c=void 0===i?"form":i,d=Object(m.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.a)(t,"form"),r.a.createElement(c,Object(o.a)({},d,{ref:a,className:u()(l,s&&"was-validated",n&&t+"-inline")}))}));K.displayName="Form",K.defaultProps={inline:!1},K.Row=A,K.Group=R,K.Control=F,K.Check=O,K.File=w,K.Switch=B,K.Label=L,K.Text=G;var J=K,W=t("cWnB"),Z=t("IP2g"),D=t("wHSu"),Y=t("vrFN"),q=t("Bl7J"),H=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];return(a=e.call.apply(e,[this].concat(n))||this).state={client:"",email:"",telephone:"",message:""},a.handleInputChange=function(e){var t,n=e.target,l=n.value,r=n.name;a.setState(((t={})[r]=l,t)),0===a.state.client.length||0===a.state.email.length||0===a.state.telephone.length||0===a.state.message.length?document.getElementById("submit-button").disabled=!0:document.getElementById("submit-button").disabled=!1},a}return Object(n.a)(a,e),a.prototype.render=function(){return r.a.createElement(q.a,null,r.a.createElement(Y.a,{title:"Kontakt"}),r.a.createElement(s.a,{className:"border rounded shadow site-section"},r.a.createElement("h1",null,"Kontakt"),r.a.createElement(i.a,null,r.a.createElement(c.a,{md:6,className:"text-center"},r.a.createElement("h3",null,"Details"),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(Z.a,{icon:D.e})),r.a.createElement("span",{className:"text-center"},"Matthias Legenstein, BSC")),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(Z.a,{icon:D.a})),r.a.createElement("span",{className:"text-center"},"Wahltherapeut")),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(Z.a,{icon:D.d})),r.a.createElement("span",null,"+43 664 89 89 549")),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(Z.a,{icon:D.b})),r.a.createElement("span",null,"physio.legenstein@gmx.at")),r.a.createElement("h3",null,"Praxis"),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(Z.a,{icon:D.c})),r.a.createElement("span",{className:"text-center"},"Erzherzog Rainer Ring 13",r.a.createElement("br",null),"2500, Baden",r.a.createElement("br",null),"1. Stockwerk",r.a.createElement("br",null),"(nicht barrierefrei - Nutzen Sie die Option des Hausbesuches!)"))),r.a.createElement(c.a,{className:"text-center"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.263568613887!2d16.22935271560922!3d48.00861757921332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476db0607b164ab7%3A0xad17c1ae9b434502!2sErzherzog%20Rainer-Ring%2013%2C%202500%20Baden!5e0!3m2!1sde!2sat!4v1587912125508!5m2!1sde!2sat",width:"100%",height:"400",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",title:"Mein Standort"}))),r.a.createElement("br",null),r.a.createElement(i.a,null,r.a.createElement(c.a,{md:6},r.a.createElement("h3",{className:"text-center"},"Parken - Kurzparkzone"),r.a.createElement("div",{className:"contact-section"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"Direkt vor der Praxis und entlang des Erzherzog Rainer Rings finden sich zahlreiche Parkplätze innerhalb der Kurzparkzone (zahlungspflichtig 8:00 – 18:00). Bitte beachten Sie bei Ihrer Zeitplanung, dass es ab 17:00 zu einem verstärkten Verkehrsaufkommen und reduzierter Parkmöglichkeiten kommen kann!")))),r.a.createElement(c.a,{md:6},r.a.createElement("h3",{className:"text-center"},"Kostenfreies Parken"),r.a.createElement("div",{className:"contact-section"},r.a.createElement("ul",null,r.a.createElement("li",null,"In der ",r.a.createElement("span",null,"Marchetstraße 7"),"bei den Badener Pfadfindern & Pfadfinderinnen haben Sie die Möglichkeit des kostenfreien Parkens. Gehweg: 130m / 2 Minuten"),r.a.createElement("li",null,"In der ",r.a.createElement("span",null,"Gutenbrunnerstraße 2"),", zwischen Römertherme und grünem Markt, finden Sie das nahe gelegene Parkdeck der Römertherme. In der obersten Etage stehen Sie für 3 Stunden gratis.  Gehweg: 290-350m / 4-5 Minuten")))))),r.a.createElement(s.a,{className:"border rounded shadow site-section"},r.a.createElement("div",{id:"terminvereinbarung"}),r.a.createElement("h1",null,"Terminvereinbarung"),r.a.createElement(J,{action:"https://formspree.io/xzbkzdrp",method:"POST"},r.a.createElement(J.Group,{controlId:"formGroupName"},r.a.createElement(J.Label,null,"Name"),r.a.createElement(J.Control,{type:"text",placeholder:"Name...",name:"client",value:this.state.client,onChange:this.handleInputChange})),r.a.createElement(J.Group,{controlId:"formGroupEmail"},r.a.createElement(J.Label,null,"Email"),r.a.createElement("input",{className:"form-control",type:"email",name:"email",placeholder:"Email...",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(J.Group,{controlId:"formGroupTelephone"},r.a.createElement(J.Label,null,"Telefon"),r.a.createElement(J.Control,{type:"text",placeholder:"Telefon...",name:"telephone",value:this.state.telephone,onChange:this.handleInputChange})),r.a.createElement(J.Group,{controlId:"formGroupMessage"},r.a.createElement(J.Label,null,"Nachricht"),r.a.createElement(J.Control,{as:"textarea",rows:"5",placeholder:"Nachricht...",name:"message",value:this.state.message,onChange:this.handleInputChange})),r.a.createElement("input",{type:"hidden",name:"_subject",value:"Terminvereinbarung"}),r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(W.a,{type:"submit",id:"submit-button",disabled:!0},"Abschicken")),r.a.createElement(c.a,null,r.a.createElement("span",{className:"text-muted float-right"},r.a.createElement("i",null,"Bitte alle Felder ausfüllen!")))))))},a}(r.a.Component)},cWnB:function(e,a,t){"use strict";var n=t("wx14"),l=t("zLVn"),r=t("TSYQ"),s=t.n(r),i=t("q1tI"),c=t.n(i),o=t("vUet"),m=t("dbZe"),d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,i=e.size,d=e.active,u=e.className,b=e.block,f=e.type,v=e.as,p=Object(l.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(o.a)(t,"btn"),E=s()(u,h,d&&"active",h+"-"+r,b&&h+"-block",i&&h+"-"+i);if(p.href)return c.a.createElement(m.a,Object(n.a)({},p,{as:v,ref:a,className:s()(E,p.disabled&&"disabled")}));a&&(p.ref=a),f?p.type=f:v||(p.type="button");var N=v||"button";return c.a.createElement(N,Object(n.a)({},p,{className:E}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=d}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-d35c48a9ea0a747d6069.js.map