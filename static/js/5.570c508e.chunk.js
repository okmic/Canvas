(this["webpackJsonpcanvas-gh"]=this["webpackJsonpcanvas-gh"]||[]).push([[5],{58:function(e,t,c){"use strict";c(2),c(27);var n=c(19),i=c.n(n),a=c(1);t.a=function(e){return Object(a.jsx)("div",{className:e.preloaderStatus?"preloader":"preloader active",children:Object(a.jsx)(i.a,{type:"bars",color:"#964b00",height:30,width:100})})}},59:function(e,t,c){e.exports={accordion_container:"Accordion_accordion_container__A2Ew_",accordion_title:"Accordion_accordion_title__2XP1Z",description__container:"Accordion_description__container__2qy2Y",accordion_description:"Accordion_accordion_description__3BIh9",show:"Accordion_show__y8sTp",title_event_accordion:"Accordion_title_event_accordion__FlLLL"}},60:function(e,t,c){},61:function(e,t,c){"use strict";c(2);var n=c(8),i=c(62),a=c.n(i),s=c(1);t.a=function(e){return Object(s.jsx)("div",{className:a.a.breadcrumbs__container,children:Object(s.jsxs)("ul",{children:[e.linkOne&&Object(s.jsxs)("li",{children:[Object(s.jsx)(n.c,{to:"/Home",children:Object(s.jsx)("span",{children:e.linkOne})}),Object(s.jsx)("span",{children:"/"})]}),e.linkTwo&&Object(s.jsxs)("li",{children:[Object(s.jsx)(n.c,{to:"/Gallery",children:Object(s.jsx)("span",{children:e.linkTwo})}),Object(s.jsx)("span",{children:"/"})]}),Object(s.jsx)("li",{className:a.a.breadcrumbs__active,children:Object(s.jsx)("span",{children:e.activeLink})})]})})}},62:function(e,t,c){e.exports={breadcrumbs__container:"Breadcrumbs_breadcrumbs__container__2HIBD",breadcrumbs__active:"Breadcrumbs_breadcrumbs__active__hPwJ9"}},63:function(e,t,c){"use strict";var n=c(5),i=c(2),a=c(64),s=c(29),r=c(59),o=c.n(r),d=c(1),j=function(e){return Object(d.jsx)("div",{className:o.a.accordion_container,children:Object(d.jsxs)("div",{className:o.a.accordion_title,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("li",{children:e.paintingName}),Object(d.jsxs)("li",{children:[e.price," \u20bd"]}),Object(d.jsx)("li",{children:e.description.meterial}),Object(d.jsx)("li",{children:e.description.size})]}),Object(d.jsx)("div",{className:o.a.title_event_accordion})]})})},l=(c(60),c(15)),b=c(28),u=function(e){return e.buttonState?Object(d.jsx)("div",{className:"basket__gallary",children:Object(d.jsx)("span",{className:"button",onClick:function(){return e.buttonBasket&&(t=e.id,c=e.imgName,n=e.paintingName,i=e.price,e.sendBasketTh(t,c,n,i),e.removeStatus(t));var t,c,n,i},children:Object(d.jsxs)("b",{children:[" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 ",Object(d.jsx)(l.a,{size:19})," "]})})}):Object(d.jsx)("div",{className:(e.buttonBasket,"basket__gallaryAnimate"),children:Object(d.jsx)("span",{className:e.classes__span,children:Object(d.jsxs)("b",{children:[Object(d.jsx)(b.a,{color:"green"})," "]})})})};t.a=function(e){var t=Object(i.useState)(!1),c=Object(n.a)(t,2),r=c[0],o=c[1],l=Object(i.useState)(!0),b=Object(n.a)(l,1)[0];return Object(d.jsx)("div",{className:"contPainting",children:Object(d.jsxs)("div",{className:"boxPainting",children:[Object(d.jsxs)("div",{className:"items__painting",children:[Object(d.jsx)("div",{className:"painting",children:Object(d.jsx)(a.LazyLoadImage,{onClick:function(){return o(!0)},src:e.imgName,alt:e.imgName,effect:"blur"})}),Object(d.jsx)(u,{id:e.id,removeStatus:e.removeStatus,buttonBasket:b,sendBasketTh:e.sendBasketTh,buttonState:e.buttonState,imgName:e.imgName,paintingName:e.paintingName,price:e.price})]}),Object(d.jsx)("div",{className:"description",children:Object(d.jsx)("ul",{className:"description__ul",children:Object(d.jsx)(j,{id:e.id,paintingName:e.paintingName,price:e.price,description:e.description})})}),Object(d.jsx)(s.a,{active:r,setActive:o,children:Object(d.jsx)("img",{src:e.imgName,alt:e.imgName})})]})})}},67:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c(2),a=c(14),s=c(5),r=c(61),o=c(58),d=c(63),j=c(1),l=function(e){var t=Object(i.useState)(!0),c=Object(s.a)(t,2),n=c[0],a=c[1];return Object(i.useEffect)((function(){setTimeout((function(){a(!1)}),1150)}),[e.mountainLandscapes]),Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{preloaderStatus:n}),Object(j.jsxs)("div",{className:"this__garnes",children:[Object(j.jsx)(r.a,{linkOne:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",linkTwo:"\u0413\u0430\u043b\u0435\u0440\u0435\u044f",activeLink:"\u0413\u043e\u0440\u043d\u044b\u0435 \u043f\u0435\u0439\u0437\u0430\u0436\u0438"}),e.mountainLandscapes.map((function(t){return Object(j.jsx)(d.a,{id:t.id,sendBasketTh:e.sendBasketTh,imgName:t.imgName,paintingName:t.paintingName,price:t.price,description:t.description,buttonState:t.buttonState,removeStatus:e.mountainStatus},t.id)}))]})]})},b=c(12);t.default=Object(a.b)((function(e){return{mountainLandscapes:e.canvasReduser.mountainLandscapes}}),{sendBasketTh:b.h,mountainStatus:b.c})((function(e){return Object(j.jsx)(l,Object(n.a)({},e))}))}}]);
//# sourceMappingURL=5.570c508e.chunk.js.map