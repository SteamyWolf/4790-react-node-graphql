(this["webpackJsonpip-address-node-react"]=this["webpackJsonpip-address-node-react"]||[]).push([[0],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=(a(95),a(96),a(158)),o=a(160),j=a(56),l=a(161),d=a(155),u=a(39),b=a(2),O=Object(d.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},button:{textDecoration:"none",color:"white"},colors:{color:"green"}}})),x=function(e){var t=O();return Object(b.jsx)("div",{children:Object(b.jsx)(s.a,{position:"static",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(j.a,{variant:"h6",className:t.title,children:Object(b.jsx)(u.b,{to:"/",className:t.button,children:"IP Addresses"})}),Object(b.jsx)(l.a,{children:Object(b.jsx)(u.b,{to:"/favorites",className:t.button,children:"Favorites"})})]})})})},h=a(21),p=a.n(h),v=a(34),f=a(13),g=a(35),m=a.n(g),y=a(172),w=a(162),N=a(163),k=a(164),C=a(165),z=a(166),_=a(167),F=a(173),I=a(168),S=a(169),T=a(52),D=a.n(T),P=a(51),V=a.n(P),A=a(53),E=a.n(A),B=a(54),R=a.n(B),q=a(55),G=a.n(q),L=a(80),M=a.n(L),J=a(79),W=a.n(J),Y=Object(d.a)((function(e){return{card:{width:"500px",margin:"0 auto",marginTop:30},avatar:{backgroundColor:"white"},error:{color:"red"},success:{color:"green"}}})),H=function(e){var t=e.data,a=e.saveToFavorites,n=e.errorMsg,c=e.favorited,r=Y(),i=t;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(w.a,{className:r.card,children:[Object(b.jsx)(N.a,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsxs)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["IP: ",Object(b.jsx)("b",{children:i.query})]}),Object(b.jsxs)(C.a,{children:[Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:r.avatar,children:Object(b.jsx)(V.a,{style:{fill:"blue"}})})}),Object(b.jsx)(I.a,{children:i.country})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:r.avatar,children:Object(b.jsx)(D.a,{color:"secondary"})})}),Object(b.jsx)(I.a,{children:i.city})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:r.avatar,children:Object(b.jsx)(E.a,{style:{fill:"green"}})})}),Object(b.jsx)(I.a,{children:i.regionName})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:r.avatar,children:Object(b.jsx)(R.a,{style:{fill:"orange"}})})}),Object(b.jsx)(I.a,{children:i.timezone})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:r.avatar,children:Object(b.jsx)(G.a,{style:{fill:"purple"}})})}),Object(b.jsx)(I.a,{children:i.org})]})]})]})}),Object(b.jsxs)(S.a,{children:[Object(b.jsx)(l.a,{size:"small",color:"primary",variant:"contained",startIcon:c?Object(b.jsx)(W.a,{}):Object(b.jsx)(M.a,{}),disabled:c,onClick:a,children:"Save to Favorites"}),c?Object(b.jsx)("p",{className:r.success,children:"Successfully Saved to Favorites!"}):n?Object(b.jsx)("p",{className:r.error,children:n}):null]})]})})},K=a(170),Q=Object(d.a)((function(e){return{card:{width:"500px",margin:"0 auto",marginTop:30},avatar:{backgroundColor:"white"},form:{margin:"0 auto",width:"200px",marginTop:30},buttonDiv:{width:"100%",marginTop:10,textAlign:"center"},textField:{width:"100%"},red:{color:"crimson"}}})),U=function(){var e=Q(),t=Object(n.useState)({}),a=Object(f.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(f.a)(i,2),o=s[0],j=s[1],d=Object(n.useState)(!1),u=Object(f.a)(d,2),O=u[0],x=u[1],h=Object(n.useState)(!1),g=Object(f.a)(h,2),w=g[0],N=g[1],k=Object(n.useState)(""),C=Object(f.a)(k,2),z=C[0],_=C[1],F=Object(n.useState)(""),I=Object(f.a)(F,2),S=I[0],T=I[1],D=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),N(!1),T(""),e.prev=3,e.next=6,m.a.get("https://ip-address-app-wyatt.herokuapp.com/location/".concat(o));case 6:if(t=e.sent,console.log(t.data),"fail"!==t.data.status){e.next=12;break}return T(t.data.message),x(!1),e.abrupt("return");case 12:r(t.data),_(""),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.log(e.t0);case 19:x(!1);case 20:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.prev=1,""===c.org&&(x(!1),_("Organization Required")),e.next=5,m.a.post("https://ip-address-app-wyatt.herokuapp.com/location/saveLocation",{ip:c.query,country:c.country,city:c.city,region:c.regionName,timezone:c.timezone,organization:c.org});case 5:t=e.sent,console.log(t),N(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0),N(!1);case 14:x(!1);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[O?Object(b.jsx)(K.a,{}):null,S?Object(b.jsx)("div",{className:e.red,children:S}):null,Object(b.jsxs)("form",{className:e.form,children:[Object(b.jsx)(y.a,{className:e.textField,placeholder:"Enter IP Address here",value:o,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("div",{className:e.buttonDiv,children:Object(b.jsx)(l.a,{color:"primary",variant:"contained",onClick:D,disabled:!o,children:"Enter"})})]}),c&&Object.keys(c).length>0&&c.constructor===Object?Object(b.jsx)(H,{data:c,saveToFavorites:P,errorMsg:z,favorited:w}):null]})},X=a(11),Z=a(24),$=a(17),ee=a(171),te=a(82),ae=a.n(te),ne=a(81),ce=a.n(ne),re=a(83),ie=a.n(re),se=Object(d.a)((function(e){return{ipData:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},card:{width:"500px",margin:"0 auto",marginTop:30,position:"relative"},editIcon:{zIndex:1,position:"absolute",top:0,right:0},avatar:{backgroundColor:"white"},form:{margin:"0 auto",width:"200px"},buttonDiv:{width:"100%",marginTop:10,textAlign:"center"},textField:{width:"100%"},textFieldCenter:{display:"flex",alignItems:"center"}}})),oe=function(){var e=se(),t=Object(n.useState)([]),a=Object(f.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(!1),s=Object(f.a)(i,2),o=s[0],d=s[1],u=Object(n.useState)({ip:"",country:"",city:"",region:"",timezone:"",organization:""}),O=Object(f.a)(u,2),x=O[0],h=O[1],g=function(){var e=Object(v.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("https://ip-address-app-wyatt.herokuapp.com/location/favorites");case 3:t=e.sent,a=t.data.map((function(e){return Object($.a)({editing:!1},e)})),r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){g()}),[]);var T=function(){var e=Object(v.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,m.a.delete("https://ip-address-app-wyatt.herokuapp.com/location/delete/".concat(t));case 3:a=e.sent,n=c.findIndex((function(e){return e._id===a.data._id})),1===c.length?r([]):(c.splice(n,1),r(c)),d(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(v.a)(p.a.mark((function e(t){var a,n,i,s,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.put("https://ip-address-app-wyatt.herokuapp.com/location/put",x);case 2:a=e.sent,n=c.find((function(e){return e._id===t})),i=c.findIndex((function(e){return e._id===n._id})),s=Object(Z.a)(c),o=Object($.a)({editing:!1},a.data),s.splice(i,1,o),r(s);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e,t,a){"ip"===t?h(Object($.a)(Object($.a)({},x),{},{ip:e.target.value})):"country"===t?h(Object($.a)(Object($.a)({},x),{},{country:e.target.value})):"city"===t?h(Object($.a)(Object($.a)({},x),{},{city:e.target.value})):"region"===t?h(Object($.a)(Object($.a)({},x),{},{region:e.target.value})):"timezone"===t?h(Object($.a)(Object($.a)({},x),{},{timezone:e.target.value})):"organization"===t?h(Object($.a)(Object($.a)({},x),{},{organization:e.target.value})):console.log("ERROR!!!")};return Object(b.jsxs)(b.Fragment,{children:[o?Object(b.jsx)("div",{className:"test",children:Object(b.jsx)(K.a,{})}):null,c.length<1?Object(b.jsx)("div",{children:"You have no saved favorites. Go save some!"}):Object(b.jsx)("div",{className:e.ipData,children:c.map((function(t){return Object(b.jsxs)(w.a,{className:e.card,children:[Object(b.jsx)(ee.a,{className:e.editIcon,onClick:function(){return function(e){var t=c.find((function(t){return t._id===e}));h(t),t.editing=!t.editing;var a=c.findIndex((function(e){return e._id===t._id})),n=Object(Z.a)(c);n.splice(a,1,t),r(n)}(t._id)},children:Object(b.jsx)(ce.a,{})}),Object(b.jsx)(N.a,{children:Object(b.jsxs)(k.a,{children:[Object(b.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.editing?Object(b.jsxs)("div",{className:e.textFieldCenter,children:["IP: ",Object(b.jsx)(y.a,{type:"text",defaultValue:t.ip,variant:"outlined",onChange:function(e){return A(e,"ip",t._id)}})]}):Object(b.jsxs)("div",{children:["IP: ",Object(b.jsx)("b",{children:t.ip})]})}),Object(b.jsxs)(C.a,{children:[Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:e.avatar,children:Object(b.jsx)(V.a,{style:{fill:"blue"}})})}),Object(b.jsx)(I.a,{children:t.editing?Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{variant:"outlined",defaultValue:t.country,onChange:function(e){return A(e,"country",t._id)}})}):t.country})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:e.avatar,children:Object(b.jsx)(D.a,{color:"secondary"})})}),Object(b.jsx)(I.a,{children:t.editing?Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{variant:"outlined",defaultValue:t.city,onChange:function(e){return A(e,"city",t._id)}})}):t.city})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:e.avatar,children:Object(b.jsx)(E.a,{style:{fill:"green"}})})}),Object(b.jsx)(I.a,{children:t.editing?Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{variant:"outlined",defaultValue:t.region,onChange:function(e){return A(e,"region",t._id)}})}):t.region})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:e.avatar,children:Object(b.jsx)(R.a,{style:{fill:"orange"}})})}),Object(b.jsx)(I.a,{children:t.editing?Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{variant:"outlined",defaultValue:t.timezone,onChange:function(e){return A(e,"timezone",t._id)}})}):t.timezone})]}),Object(b.jsxs)(z.a,{children:[Object(b.jsx)(_.a,{children:Object(b.jsx)(F.a,{className:e.avatar,children:Object(b.jsx)(G.a,{style:{fill:"purple"}})})}),Object(b.jsx)(I.a,{children:t.editing?Object(b.jsx)("div",{children:Object(b.jsx)(y.a,{variant:"outlined",defaultValue:t.organization,onChange:function(e){return A(e,"organization",t._id)}})}):t.organization})]})]})]})}),Object(b.jsx)(S.a,{children:t.editing?Object(b.jsx)(l.a,{size:"small",color:"primary",variant:"contained",startIcon:Object(b.jsx)(ie.a,{}),onClick:function(){return P(t._id)},children:"Save Changes"}):Object(b.jsx)(l.a,{size:"small",color:"secondary",variant:"contained",startIcon:Object(b.jsx)(ae.a,{}),onClick:function(){return T(t._id)},children:"Delete"})})]},t._id)}))})]})},je=Object(n.createContext)(),le=function(e){var t=Object(n.useState)({}),a=Object(f.a)(t,1)[0];return Object(b.jsx)(je.Provider,{value:{ipAddressData:a},children:e.children})},de=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{}),Object(b.jsx)(le,{children:Object(b.jsxs)(X.c,{children:[Object(b.jsx)(X.a,{path:"/favorites",component:oe}),Object(b.jsx)(X.a,{path:"/",exact:!0,component:U})]})})]})},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,175)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(u.a,{children:Object(b.jsx)(de,{})})}),document.getElementById("root")),ue()},95:function(e,t,a){},96:function(e,t,a){}},[[127,1,2]]]);
//# sourceMappingURL=main.4985973a.chunk.js.map