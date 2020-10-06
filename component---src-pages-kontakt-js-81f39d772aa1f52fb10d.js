(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{IDOG:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var l=t("dI71"),n=t("q1tI"),r=t.n(n),s=t("7vrA"),c=t("3Z9Z"),i=t("JI6e"),o=t("wx14"),m=t("zLVn"),d=t("TSYQ"),u=t.n(d),b=(t("K9S6"),r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,n=e.className,s=e.type,c=void 0===s?"valid":s,i=e.tooltip,d=void 0!==i&&i,b=Object(m.a)(e,["as","className","type","tooltip"]);return r.a.createElement(l,Object(o.a)({},b,{ref:a,className:u()(n,c+"-"+(d?"tooltip":"feedback"))}))})));b.displayName="Feedback";var f=b,v=r.a.createContext({controlId:void 0}),p=t("vUet"),h=r.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,i=e.type,d=void 0===i?"checkbox":i,b=e.isValid,f=void 0!==b&&b,h=e.isInvalid,E=void 0!==h&&h,N=e.isStatic,x=e.as,O=void 0===x?"input":x,y=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),g=Object(n.useContext)(v),j=g.controlId,P=g.custom?[s,"custom-control-input"]:[l,"form-check-input"],I=P[0],w=P[1];return l=Object(p.a)(I,w),r.a.createElement(O,Object(o.a)({},y,{ref:a,type:d,id:t||j,className:u()(c,l,f&&"is-valid",E&&"is-invalid",N&&"position-static")}))}));h.displayName="FormCheckInput";var E=h,N=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,c=e.htmlFor,i=Object(m.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(n.useContext)(v),b=d.controlId,f=d.custom?[l,"custom-control-label"]:[t,"form-check-label"],h=f[0],E=f[1];return t=Object(p.a)(h,E),r.a.createElement("label",Object(o.a)({},i,{ref:a,htmlFor:c||b,className:u()(s,t)}))}));N.displayName="FormCheckLabel";var x=N,O=r.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,c=e.inline,i=void 0!==c&&c,d=e.disabled,b=void 0!==d&&d,h=e.isValid,N=void 0!==h&&h,O=e.isInvalid,y=void 0!==O&&O,g=e.feedbackTooltip,j=void 0!==g&&g,P=e.feedback,I=e.className,w=e.style,C=e.title,k=void 0===C?"":C,F=e.type,z=void 0===F?"checkbox":F,R=e.label,S=e.children,G=e.custom,L=e.as,T=void 0===L?"input":L,V=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),B="switch"===z||G,M=B?[s,"custom-control"]:[l,"form-check"],A=M[0],K=M[1];l=Object(p.a)(A,K);var J=Object(n.useContext)(v).controlId,W=Object(n.useMemo)((function(){return{controlId:t||J,custom:B}}),[J,B,t]),D=null!=R&&!1!==R&&!S,Y=r.a.createElement(E,Object(o.a)({},V,{type:"switch"===z?"checkbox":z,ref:a,isValid:N,isInvalid:y,isStatic:!D,disabled:b,as:T}));return r.a.createElement(v.Provider,{value:W},r.a.createElement("div",{style:w,className:u()(I,l,B&&"custom-"+z,i&&l+"-inline")},S||r.a.createElement(r.a.Fragment,null,Y,D&&r.a.createElement(x,{title:k},R),(N||y)&&r.a.createElement(f,{type:N?"valid":"invalid",tooltip:j},P))))}));O.displayName="FormCheck",O.Input=E,O.Label=x;var y=O,g=r.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,i=e.isValid,d=e.isInvalid,b=e.lang,f=e.as,h=void 0===f?"input":f,E=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),N=Object(n.useContext)(v),x=N.controlId,O=N.custom?[s,"custom-file-input"]:[l,"form-control-file"],y=O[0],g=O[1];return l=Object(p.a)(y,g),r.a.createElement(h,Object(o.a)({},E,{ref:a,id:t||x,type:"file",lang:b,className:u()(c,l,i&&"is-valid",d&&"is-invalid")}))}));g.displayName="FormFileInput";var j=g,P=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,c=e.htmlFor,i=Object(m.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),d=Object(n.useContext)(v),b=d.controlId,f=d.custom?[l,"custom-file-label"]:[t,"form-file-label"],h=f[0],E=f[1];return t=Object(p.a)(h,E),r.a.createElement("label",Object(o.a)({},i,{ref:a,htmlFor:c||b,className:u()(s,t),"data-browse":i["data-browse"]}))}));P.displayName="FormFileLabel";var I=P,w=r.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,c=e.disabled,i=void 0!==c&&c,d=e.isValid,b=void 0!==d&&d,h=e.isInvalid,E=void 0!==h&&h,N=e.feedbackTooltip,x=void 0!==N&&N,O=e.feedback,y=e.className,g=e.style,P=e.label,w=e.children,C=e.custom,k=e.lang,F=e["data-browse"],z=e.as,R=void 0===z?"div":z,S=e.inputAs,G=void 0===S?"input":S,L=Object(m.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=C?[s,"custom"]:[l,"form-file"],V=T[0],B=T[1];l=Object(p.a)(V,B);var M=Object(n.useContext)(v).controlId,A=Object(n.useMemo)((function(){return{controlId:t||M,custom:C}}),[M,C,t]),K=null!=P&&!1!==P&&!w,J=r.a.createElement(j,Object(o.a)({},L,{ref:a,isValid:b,isInvalid:E,disabled:i,as:G,lang:k}));return r.a.createElement(v.Provider,{value:A},r.a.createElement(R,{style:g,className:u()(y,l,C&&"custom-file")},w||r.a.createElement(r.a.Fragment,null,C?r.a.createElement(r.a.Fragment,null,J,K&&r.a.createElement(I,{"data-browse":F},P)):r.a.createElement(r.a.Fragment,null,K&&r.a.createElement(I,null,P),J),(b||E)&&r.a.createElement(f,{type:b?"valid":"invalid",tooltip:x},O))))}));w.displayName="FormFile",w.Input=j,w.Label=I;var C=w,k=(t("2W6z"),r.a.forwardRef((function(e,a){var t,l,s=e.bsPrefix,c=e.bsCustomPrefix,i=e.type,d=e.size,b=e.htmlSize,f=e.id,h=e.className,E=e.isValid,N=void 0!==E&&E,x=e.isInvalid,O=void 0!==x&&x,y=e.plaintext,g=e.readOnly,j=e.custom,P=e.as,I=void 0===P?"input":P,w=Object(m.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),C=Object(n.useContext)(v).controlId,k=j?[c,"custom"]:[s,"form-control"],F=k[0],z=k[1];if(s=Object(p.a)(F,z),y)(l={})[s+"-plaintext"]=!0,t=l;else if("file"===i){var R;(R={})[s+"-file"]=!0,t=R}else if("range"===i){var S;(S={})[s+"-range"]=!0,t=S}else if("select"===I&&j){var G;(G={})[s+"-select"]=!0,G[s+"-select-"+d]=d,t=G}else{var L;(L={})[s]=!0,L[s+"-"+d]=d,t=L}return r.a.createElement(I,Object(o.a)({},w,{type:i,size:b,ref:a,readOnly:g,id:f||C,className:u()(h,t,N&&"is-valid",O&&"is-invalid")}))})));k.displayName="FormControl";var F=Object.assign(k,{Feedback:f}),z=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.children,c=e.controlId,i=e.as,d=void 0===i?"div":i,b=Object(m.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(p.a)(t,"form-group");var f=Object(n.useMemo)((function(){return{controlId:c}}),[c]);return r.a.createElement(v.Provider,{value:f},r.a.createElement(d,Object(o.a)({},b,{ref:a,className:u()(l,t)}),s))}));z.displayName="FormGroup";var R=z,S=r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,s=e.bsPrefix,c=e.column,d=e.srOnly,b=e.className,f=e.htmlFor,h=Object(m.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),E=Object(n.useContext)(v).controlId;s=Object(p.a)(s,"form-label");var N="col-form-label";"string"==typeof c&&(N=N+"-"+c);var x=u()(b,s,d&&"sr-only",c&&N);return f=f||E,c?r.a.createElement(i.a,Object(o.a)({as:"label",className:x,htmlFor:f},h)):r.a.createElement(l,Object(o.a)({ref:a,className:x,htmlFor:f},h))}));S.displayName="FormLabel",S.defaultProps={column:!1,srOnly:!1};var G=S,L=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,s=void 0===n?"small":n,c=e.muted,i=Object(m.a)(e,["bsPrefix","className","as","muted"]);return t=Object(p.a)(t,"form-text"),r.a.createElement(s,Object(o.a)({},i,{ref:a,className:u()(l,t,c&&"text-muted")}))}));L.displayName="FormText";var T=L,V=r.a.forwardRef((function(e,a){return r.a.createElement(y,Object(o.a)({},e,{ref:a,type:"switch"}))}));V.displayName="Switch",V.Input=y.Input,V.Label=y.Label;var B=V,M=t("YdCC"),A=Object(M.a)("form-row"),K=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,n=e.className,s=e.validated,c=e.as,i=void 0===c?"form":c,d=Object(m.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(p.a)(t,"form"),r.a.createElement(i,Object(o.a)({},d,{ref:a,className:u()(n,s&&"was-validated",l&&t+"-inline")}))}));K.displayName="Form",K.defaultProps={inline:!1},K.Row=A,K.Group=R,K.Control=F,K.Check=y,K.File=C,K.Switch=B,K.Label=G,K.Text=T;var J=K,W=t("cWnB"),D=t("IP2g"),Y=t("wHSu"),Z=t("vrFN"),q=t("Bl7J"),H=function(e){function a(){for(var a,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return(a=e.call.apply(e,[this].concat(l))||this).state={client:"",email:"",telephone:"",message:""},a.handleInputChange=function(e){var t,l=e.target,n=l.value,r=l.name;a.setState(((t={})[r]=n,t)),0===a.state.client.length||0===a.state.email.length||0===a.state.telephone.length||0===a.state.message.length?document.getElementById("submit-button").disabled=!0:document.getElementById("submit-button").disabled=!1},a}return Object(l.a)(a,e),a.prototype.render=function(){return r.a.createElement(q.a,null,r.a.createElement(Z.a,{title:"Kontakt"}),r.a.createElement(s.a,{className:"border rounded shadow site-section"},r.a.createElement("h1",null,"Kontakt"),r.a.createElement(c.a,null,r.a.createElement(i.a,{md:6,className:"text-center"},r.a.createElement("h3",null,"Details"),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(D.a,{icon:Y.e})),r.a.createElement("span",{className:"text-center"},"Matthias Legenstein, BSC")),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(D.a,{icon:Y.a})),r.a.createElement("span",{className:"text-center"},"Wahltherapeut")),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(D.a,{icon:Y.d})),r.a.createElement("span",null,"+43 664 89 89 549")),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(D.a,{icon:Y.b})),r.a.createElement("span",null,"physio.legenstein@gmx.at")),r.a.createElement("h3",null,"Praxis"),r.a.createElement("div",{className:"text-center contact-section"},r.a.createElement("span",{className:"contact-icons"},r.a.createElement(D.a,{icon:Y.c})),r.a.createElement("span",{className:"text-center"},"Erzherzog Rainer Ring 13",r.a.createElement("br",null),"2500, Baden",r.a.createElement("br",null),"1. Stockwerk",r.a.createElement("br",null),"(nicht barrierefrei - Nutzen Sie die Option des Hausbesuches!)"))),r.a.createElement(i.a,{className:"text-center"},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2669.263568613887!2d16.22935271560922!3d48.00861757921332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476db0607b164ab7%3A0xad17c1ae9b434502!2sErzherzog%20Rainer-Ring%2013%2C%202500%20Baden!5e0!3m2!1sde!2sat!4v1587912125508!5m2!1sde!2sat",width:"100%",height:"400",frameBorder:"0",allowFullScreen:"","aria-hidden":"false",title:"Mein Standort"}))),r.a.createElement("br",null),r.a.createElement(c.a,null,r.a.createElement(i.a,{md:6},r.a.createElement("h3",{className:"text-center"},"Parken - Kurzparkzone"),r.a.createElement("div",{className:"contact-section"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,"Direkt vor der Praxis finden sich zahlreiche Parkplätze innerhalb der Kurzparkzone (zahlungspflichtig 8:00 – 18:00). In der Gutenbrunnnerstraße 2, zwischen Römertherme und Grünem Markt finden Sie das nahe gelegene Parkhaus der Römertherme. Gehweg 290-250m / 4-5 Minuten")))),r.a.createElement(i.a,{md:6},r.a.createElement("h3",{className:"text-center"},"Kostenfreies Parken"),r.a.createElement("div",{className:"contact-section"},r.a.createElement("ul",null,r.a.createElement("li",null,"In der ",r.a.createElement("span",null,"Marchetstraße 7")," bei den Badener Pfadfindern & Pfadfinderinnen haben Sie die Möglichkeit kostenfrei zu parken. Gehweg: 130m / 2 Minuten")))))),r.a.createElement(s.a,{className:"border rounded shadow site-section"},r.a.createElement("div",{id:"terminvereinbarung"}),r.a.createElement("h1",null,"Terminvereinbarung"),r.a.createElement(J,{action:"https://formspree.io/xzbkzdrp",method:"POST"},r.a.createElement(J.Group,{controlId:"formGroupName"},r.a.createElement(J.Label,null,"Name"),r.a.createElement(J.Control,{type:"text",placeholder:"Name...",name:"client",value:this.state.client,onChange:this.handleInputChange})),r.a.createElement(J.Group,{controlId:"formGroupEmail"},r.a.createElement(J.Label,null,"Email"),r.a.createElement("input",{className:"form-control",type:"email",name:"email",placeholder:"Email...",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(J.Group,{controlId:"formGroupTelephone"},r.a.createElement(J.Label,null,"Telefon"),r.a.createElement(J.Control,{type:"text",placeholder:"Telefon...",name:"telephone",value:this.state.telephone,onChange:this.handleInputChange})),r.a.createElement(J.Group,{controlId:"formGroupMessage"},r.a.createElement(J.Label,null,"Nachricht"),r.a.createElement(J.Control,{as:"textarea",rows:"5",placeholder:"Nachricht...",name:"message",value:this.state.message,onChange:this.handleInputChange})),r.a.createElement("input",{type:"hidden",name:"_subject",value:"Terminvereinbarung"}),r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement(W.a,{type:"submit",id:"submit-button",disabled:!0},"Abschicken")),r.a.createElement(i.a,null,r.a.createElement("span",{className:"text-muted float-right"},r.a.createElement("i",null,"Bitte alle Felder ausfüllen!")))))))},a}(r.a.Component)},cWnB:function(e,a,t){"use strict";var l=t("wx14"),n=t("zLVn"),r=t("TSYQ"),s=t.n(r),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=t("dbZe"),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.variant,c=e.size,d=e.active,u=e.className,b=e.block,f=e.type,v=e.as,p=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),h=Object(o.a)(t,"btn"),E=s()(u,h,d&&"active",h+"-"+r,b&&h+"-block",c&&h+"-"+c);if(p.href)return i.a.createElement(m.a,Object(l.a)({},p,{as:v,ref:a,className:s()(E,p.disabled&&"disabled")}));a&&(p.ref=a),f?p.type=f:v||(p.type="button");var N=v||"button";return i.a.createElement(N,Object(l.a)({},p,{className:E}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=d}}]);
//# sourceMappingURL=component---src-pages-kontakt-js-81f39d772aa1f52fb10d.js.map