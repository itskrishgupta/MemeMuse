(this["webpackJsonpmeme-muse"]=this["webpackJsonpmeme-muse"]||[]).push([[0],{46:function(e,t,r){},97:function(e,t,r){"use strict";r.r(t);var s=r(0),c=r.n(s),n=r(7),a=r.n(n),i=(r(46),r(42)),o=r.n(i),l=r(55),j=r(20),d=r(56),b=r.n(d),h=r(2),u=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("footer",{children:Object(h.jsxs)("h6",{children:["Copyright \xa9 2022 Meme Muse Network.All Rights Reserved.",Object(h.jsx)("a",{style:{color:"white"},target:"_blank",rel:"noreferrer",children:"The Meme Muse is not responsible for the content of external sites."})]})})})},p=function(e){var t=e.newsArray,r=Object(s.useState)(15),c=Object(j.a)(r,2),n=c[0],a=c[1];return Object(h.jsxs)(h.Fragment,{children:["    ",Object(h.jsxs)("div",{className:"app-content",children:[Object(h.jsx)("div",{className:"download-text",style:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},children:Object(h.jsx)("p",{children:"Shortly we are launching our App. For the best Experience"})}),t.filter((function(e,t){return t<n})).map((function(e){var t=e.author,r=e.title,s=e.publishedAt,c=e.description,n=e.urlToImage,a=e.url,i=e.source.name;return Object(h.jsxs)("div",{className:"newsCard",children:[Object(h.jsx)("img",{className:"newsImage",src:n||"https://www.unityhighschool.org/wp-content/uploads/2014/08/default-placeholder.png",alt:"News"}),Object(h.jsxs)("div",{className:"newsText",children:[" ",Object(h.jsxs)("span",{className:"title",children:[r,Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"author",children:[Object(h.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",children:[Object(h.jsx)("b",{children:"Muse"})," "]}),Object(h.jsxs)("span",{className:"muted",children:["by ",t||"unknown"," on"," ",Object(h.jsx)("span",{className:"publishedAt",children:s})]})]}),Object(h.jsx)("div",{className:"lowerNewsText",children:Object(h.jsx)("div",{className:"description",children:Object(h.jsx)("p",{children:c})})})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("span",{className:"readmore",children:[" ",Object(h.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer",children:["read more at"," ",Object(h.jsxs)("span",{style:{color:"black"},children:[" ",Object(h.jsx)("b",{children:i})," "]})," "]})]})})]}),Object(h.jsx)("div",{})]})}))]})," ",Object(h.jsx)("div",{children:Object(h.jsxs)("button",{style:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,cursor:"pointer",marginLeft:550,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",marginRight:450,height:48,padding:"0 30px"},onClick:function(){a(n+15)},children:["  ",Object(h.jsx)("span",{className:"app-content",style:{fontWeight:"bold"},children:"Load More"})]})})]})},x=r(28),O=r(43),g=r(4),m=r(126),f=r(133),w=r(131),y=r(129),v=r(130),k=r(134),N=r(58),L=r.n(N),A=r(128),F=r(59),R=r(132),T=["business","entertainment","general","health","science","sports","technology"],M=Object(m.a)({list:{width:200,paddingTop:20,paddingLeft:10,paddingRight:10},fullList:{width:"auto"}});function S(e){var t,r=e.setcategory,s=M(),n=c.a.useState({left:!1}),a=Object(j.a)(n,2),i=a[0],o=a[1],l=Object(A.a)("(prefers-color-scheme: dark)"),d=c.a.useMemo((function(){return Object(F.a)({palette:{type:l?"dark":"light"}})}),[l]),b=function(e,t){return function(r){("keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&o(Object(O.a)(Object(O.a)({},i),{},Object(x.a)({},e,t)))}};return Object(h.jsx)("div",{children:Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)(w.a,{onClick:b("left",!0),children:Object(h.jsx)(L.a,{})}),Object(h.jsx)(R.a,{theme:d,children:Object(h.jsx)(f.a,{anchor:"left",open:i.left,onClose:b("left",!1),children:(t="left",Object(h.jsxs)("div",{className:Object(g.a)(s.list,Object(x.a)({},s.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:b(t,!1),onKeyDown:b(t,!1),children:[Object(h.jsx)("p",{children:"Categories"}),Object(h.jsx)(y.a,{children:T.map((function(e,t){return Object(h.jsx)(v.a,{button:!0,onClick:function(){r(e)},style:{textTransform:"capitalize",height:"40px",borderRadius:5},children:Object(h.jsx)(k.a,{primary:e})},e)}))})]}))})})]},"left")})}var W=function(e){var t=e.setcategory;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"inshorts-header",style:{border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",padding:"0 30px"},children:[Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)(S,{setcategory:t})}),Object(h.jsx)("img",{style:{cursor:"pointer",paddingTop:"0.5rem"},src:"https://lh3.googleusercontent.com/IhYabo3dk0TFgk-Pu0K1jX21gX2rEgj1ytdRmhFh_UkkxyvuoFyq923m_mL5qw7QHq2PmLp9CTdHX1Me-IB3kgQHQ9RkcR6v7zNPBUb_9NN6hFhhEuiWIk5H5epcIQD4aWPoPiyKYiIqlh0xU0Lny2OAq8vBvZJ2ul05yEYDndOGduzRNzYoLi3ww0Lu8_0HeY5LS45oWV5grJx4W3dW4TY3i7W0FO0GSBRK_CAFme8p0lKx21rX1djccR-Yo0rcnouBtT7Li4rpC-5nHAj0V6NAbcKFTTxlNZ0fQtMrOX791U9HyRwi_HmHAHa52F2twdgmUvj1MQLSWMjzIRsDT2eoGjiI5Qjj1xXRzTIDaZlDb4u-3eBEKOw53PA7iiFQGYmMgFGK5gdDssQ5QjxlBqZtLj1pTtJlSFepFmW9b_UtVCbB4i0ev0qnY0WGdqjNwDerHsPAK1ScrzokZrii63bj5L4z_An8GmBp7Zzd1CorrmbOGVL4oY6i6aM71tzsohsfcZW5ugenYEXkJ1vRKUsdWLwO3n56HSNs69deq5Mu2Pv3R6iiMl2vkDeaM3Z4JBuLyrzICtO3ZWyYeyx1qCT0jm02waL5uL1UuwNHheyST_2G7RwKlUPzG81Ar8mIWoz3neyOTwvXR_fLYiLTC7aFP7G9ZG48MCWpEALrmtuOnzMkJpQQyz9HPPaek1xVlyhDWNgX14oSylXvB8Wga9DUW_SA4HZpAosvzkuut26O5AgBAOQN4YfEyrzblA=w371-h238-no?authuser=0",height:"80%",alt:""})]})})};var z=function(){var e=Object(s.useState)("business"),t=Object(j.a)(e,2),r=t[0],c=t[1],n=Object(s.useState)([]),a=Object(j.a)(n,2),i=a[0],d=a[1];return Object(s.useEffect)(Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://saurav.tech/NewsAPI/top-headlines/category/".concat(r,"/in.json"));case 3:t=e.sent,d(t.data.articles),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))),Object(h.jsxs)("div",{children:[Object(h.jsx)(W,{setcategory:c}),Object(h.jsx)(p,{newsArray:i}),Object(h.jsx)(u,{})]})};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(z,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.308f4bad.chunk.js.map