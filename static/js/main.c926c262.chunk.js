(this.webpackJsonpeop=this.webpackJsonpeop||[]).push([[0],{104:function(e,t,a){e.exports=a(145)},143:function(e,t,a){},145:function(e,t,a){"use strict";a.r(t);a(105);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=a(41),i=a(18),u=a(19),s=a(21),m=a(20),d=a(15),h=a(22),g=a(96),b=a(178),f=a(173),p=a(180),E=a(179),v=a(187),y=a(175),O=a(176),w=a(42),j=a(149),k=a(177),C=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function x(e){var t=C();return Object(n.useEffect)((function(){}),[e.darkState]),r.a.createElement(y.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(k.a,{checked:e.darkState,onChange:e.changeTheme}),r.a.createElement(w.a,{variant:"h6",className:t.title},"Employee Oversight Portal"),r.a.createElement(j.a,null,r.a.createElement(v.a,{tag:c.b,to:"/EOP"},r.a.createElement(w.a,{variant:"body1",style:{color:"white"}},"Home"))),r.a.createElement(j.a,{color:"inherit"},r.a.createElement(v.a,{tag:c.b,to:"/EOP/gridComp"},r.a.createElement(w.a,{variant:"body1",style:{color:"white"}},"Test Grid Component")))))}var N=Object(f.a)((function(e){return{root:{height:"800px",maxWidth:"1600px"}}}));function S(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),o=a[0],l=a[1],c=o?"dark":"light",i=N(),u=Object(g.a)({palette:{type:c}});return r.a.createElement(b.a,{theme:u},r.a.createElement(E.a,null),r.a.createElement(x,{darkState:o,changeTheme:function(){l(!o)}}),r.a.createElement(p.a,{className:i.root},e.children))}var D=a(29),T=a.n(D),W=a(182),P=a(183),H=a(188),M=a(184),L=a(186),B=a(148),A=a(185),F=a(58),R=a.n(F),z=a(35),G=a(57),Y=a.n(G),X=(a(80),a(3)),I=a(94),J=a.n(I),U=a(181),V=a(5),$={date:"Date",time:"Time",event:"Event",allDay:"All Day",week:"Week",work_week:"Work Week",day:"Day",month:"Month",previous:"Back",next:"Next",yesterday:"Yesterday",tomorrow:"Tomorrow",today:"Today",agenda:"Agenda",noEventsInRange:"There are no events in this range.",showMore:function(e){return"+".concat(e," more")}},_=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).navigate=function(t){console.log(t),e.props.onNavigate(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(y.a,{position:"static"},r.a.createElement(O.a,{classNames:t.toolbar},r.a.createElement(U.a,null,r.a.createElement(j.a,{type:"button",onClick:function(){return e.navigate("TODAY")}},r.a.createElement(w.a,{variant:"subtitle1",style:{color:"white"}},"Today")),r.a.createElement(j.a,{type:"button",onClick:function(){return e.navigate("PREV")}},r.a.createElement(w.a,{variant:"subtitle1",style:{color:"white"}},"Prev")),r.a.createElement(j.a,{type:"button",onClick:function(){return e.navigate("NEXT")}},r.a.createElement(w.a,{variant:"subtitle1",style:{color:"white"}},"Next"))),r.a.createElement(w.a,{className:t.toolBarLabel},this.props.label),r.a.createElement(U.a,{className:"rbc-btn-group"},this.viewNamesGroup($))))}},{key:"viewNamesGroup",value:function(e){var t=this,a=this.props.views,n=this.props.view;if(a.length>1)return a.map((function(a){return r.a.createElement(j.a,{type:"button",key:a,className:Object(X.default)({"rbc-active":n===a}),onClick:t.view.bind(null,a)},r.a.createElement(w.a,{variant:"subtitle1",style:{color:"white"}},e[a]))}))}}]),a}(J.a),q=Object(V.a)((function(e){return{toolBar:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",marginBottom:"10px"},toolBarLabel:{flexGrow:1,padding:"0 10px",textAlign:"center"}}}))(_),K=Object(z.b)(Y.a),Q=Object(f.a)((function(e){return{root:{height:"100%"},cardHeader:{height:"15%"},cardContent:{height:"85%"}}}));function Z(e){var t=Q();Object(n.useEffect)((function(){}),[e.isStatic]);var a=[{id:0,title:"All Day Event very long title",allDay:!0,start:new Date(2021,1,23),end:new Date(2021,1,24)}],o={toolbar:q};return r.a.createElement(W.a,{variant:"outlined",className:t.root},r.a.createElement(P.a,{avatar:r.a.createElement(H.a,{component:"fieldset"},r.a.createElement(M.a,{control:r.a.createElement(L.a,{checked:e.isStatic,onChange:e.toggleStatic}),label:"locked:",labelPlacement:"start"})),action:r.a.createElement(B.a,{"area-label":"fullscreen",onClick:function(){window.location.href="/EOP/TOCFullscreen"}},r.a.createElement(R.a,null)),className:t.cardHeader}),r.a.createElement(A.a,{className:t.cardContent},r.a.createElement(z.a,{events:a,localizer:K,components:o})))}var ee=a(59),te=a.n(ee),ae=Object(f.a)((function(e){return{root:{height:"100%"},cardHeader:{height:"15%"},cardContent:{height:"85%"}}}));function ne(e){var t=ae();Object(n.useEffect)((function(){}),[e.isStatic]);return r.a.createElement(W.a,{variant:"outlined",className:t.root},r.a.createElement(P.a,{avatar:r.a.createElement(H.a,{component:"fieldset"},r.a.createElement(M.a,{control:r.a.createElement(L.a,{checked:e.isStatic,onChange:e.toggleStatic}),label:"locked:",labelPlacement:"start"})),action:r.a.createElement(B.a,{"area-label":"fullscreen",onClick:function(){window.location.href="/EOP/OrgChartFullscreen"}},r.a.createElement(R.a,null)),className:t.cardHeader}),r.a.createElement(A.a,{className:t.cardContent},r.a.createElement(te.a,{datasource:{id:"n1",name:"Lao Lao",title:"general manager",children:[{id:"n2",name:"Bo Miao",title:"department manager"},{id:"n3",name:"Su Miao",title:"department manager",children:[{id:"n4",name:"Tie Hua",title:"senior engineer"},{id:"n5",name:"Hei Hei",title:"senior engineer",children:[{id:"n6",name:"Dan Dan",title:"engineer"},{id:"n7",name:"Xiang Xiang",title:"engineer"}]},{id:"n8",name:"Pang Pang",title:"senior engineer"}]},{id:"n9",name:"Hong Miao",title:"department manager"},{id:"n10",name:"Chun Miao",title:"department manager",children:[{id:"n11",name:"Yue Yue",title:"senior engineer"}]}]},pan:!0,zoom:!0})))}a(85),Object(D.WidthProvider)(D.Responsive);function re(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)(!1),c=Object(h.a)(l,2),i=c[0],u=c[1],s=Object(n.useState)(!1),m=Object(h.a)(s,2),d=m[0],g=m[1],b=Object(n.useState)(!0),f=Object(h.a)(b,2),p=f[0],E=f[1],v=Object(n.useState)(!1),y=Object(h.a)(v,2),O=y[0],w=y[1],j=Object(n.useState)(!1),k=Object(h.a)(j,2),C=k[0],x=k[1],N=[{i:"a",x:0,y:0,w:8,h:14,minW:8,isDraggable:i,isResizable:d},{i:"b",x:8,y:0,w:8,h:14,minW:8,isDraggable:O,isResizable:C}],S=Object(n.useState)(N),D=Object(h.a)(S,2),W=(D[0],D[1]);return r.a.createElement(T.a,{className:"layout",layout:N,cols:16,rowHeight:30,width:1600,onLayoutChange:function(e){console.log("layout change"),W(e)}},r.a.createElement("div",{key:"a"},r.a.createElement(Z,{isStatic:a,toggleStatic:function(){o(!a),u(!i),g(!d)}})),r.a.createElement("div",{key:"b",onMouseEnter:function(){document.body.style.overflow="hidden"},onMouseLeave:function(){document.body.style.overflow="auto"}},r.a.createElement(ne,{isStatic:p,toggleStatic:function(){E(!p),w(!O),x(!C)}})))}var oe=a(40),le=a.n(oe),ce=a(95),ie=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={forecasts:[],loading:!0},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.populateWeatherData()}},{key:"render",value:function(){var e=this.state.loading?r.a.createElement("p",null,r.a.createElement("em",null,"Loading...")):a.renderForecastsTable(this.state.forecasts);return r.a.createElement("div",null,r.a.createElement("h1",{id:"tabelLabel"},"Weather forecast"),r.a.createElement("p",null,"This component demonstrates fetching data from the server."),e)}},{key:"populateWeatherData",value:function(){var e=Object(ce.a)(le.a.mark((function e(){var t,a;return le.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("weatherforecast");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({forecasts:a,loading:!1});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"renderForecastsTable",value:function(e){return r.a.createElement("table",{className:"table table-striped","aria-labelledby":"tabelLabel"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Temp. (C)"),r.a.createElement("th",null,"Temp. (F)"),r.a.createElement("th",null,"Summary"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.date},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.temperatureC),r.a.createElement("td",null,e.temperatureF),r.a.createElement("td",null,e.summary))}))))}}]),a}(n.Component);ie.displayName=ie.name;var ue=a(48),se=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={currentCount:0},n.incrementCounter=n.incrementCounter.bind(Object(ue.a)(n)),n}return Object(u.a)(a,[{key:"incrementCounter",value:function(){this.setState({currentCount:this.state.currentCount+1})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Counter"),r.a.createElement("p",null,"This is a simple example of a React component."),r.a.createElement("p",{"aria-live":"polite"},"Current count: ",r.a.createElement("strong",null,this.state.currentCount)),r.a.createElement("button",{className:"btn btn-primary",onClick:this.incrementCounter},"Increment"))}}]),a}(n.Component);se.displayName=se.name;var me=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(T.a,{className:"layout",layout:[{i:"a",x:0,y:0,w:1,h:2,static:!0},{i:"b",x:1,y:0,w:3,h:2,minW:2,maxW:4},{i:"c",x:1,y:2,w:1,h:2}],cols:12,rowHeight:30,width:1200},r.a.createElement("div",{style:{backgroundColor:"blue"},key:"a"},"a"),r.a.createElement("div",{style:{backgroundColor:"black"},key:"b"},"b"),r.a.createElement("div",{style:{backgroundColor:"red"},key:"c"},"c"))}}]),a}(n.Component),de=a(98),he=Object(z.b)(Y.a);function ge(){var e=[{id:0,title:"All Day Event very long title",allDay:!0,start:new Date(2021,1,23),end:new Date(2021,1,24)}],t={toolbar:q};return r.a.createElement(de.a,{style:{height:"100%"}},r.a.createElement(z.a,{events:e,localizer:he,components:t}))}function be(){return r.a.createElement(de.a,{style:{height:"90%"}},r.a.createElement(te.a,{datasource:{id:"n1",name:"Lao Lao",title:"general manager",children:[{id:"n2",name:"Bo Miao",title:"department manager"},{id:"n3",name:"Su Miao",title:"department manager",children:[{id:"n4",name:"Tie Hua",title:"senior engineer"},{id:"n5",name:"Hei Hei",title:"senior engineer",children:[{id:"n6",name:"Dan Dan",title:"engineer"},{id:"n7",name:"Xiang Xiang",title:"engineer"}]},{id:"n8",name:"Pang Pang",title:"senior engineer"}]},{id:"n9",name:"Hong Miao",title:"department manager"},{id:"n10",name:"Chun Miao",title:"department manager",children:[{id:"n11",name:"Yue Yue",title:"senior engineer"}]}]},pan:!0,zoom:!0}))}a(143);var fe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentWillMount",value:function(){document.body.style.margin="auto 17px auto 17px"}},{key:"componentWillUnmount",value:function(){document.body.style.margin="auto"}},{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement(d.a,{exact:!0,path:"/",component:re}),r.a.createElement(d.a,{exact:!0,path:"/EOP",component:re}),r.a.createElement(d.a,{path:"/EOP/gridComp",component:me}),r.a.createElement(d.a,{path:"/EOP/TOCFullscreen",component:ge}),r.a.createElement(d.a,{path:"/EOP/OrgChartFullscreen",component:be}))}}]),a}(n.Component);fe.displayName=fe.name;var pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ve=document.getElementsByTagName("base")[0].getAttribute("href"),ye=document.getElementById("root");l.a.render(r.a.createElement(c.a,{basename:ve},r.a.createElement(fe,null)),ye),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");pe?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Ee(e)}))}}()},80:function(e,t,a){},85:function(e,t,a){}},[[104,1,2]]]);
//# sourceMappingURL=main.c926c262.chunk.js.map