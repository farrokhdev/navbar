(this.webpackJsonpnavbar=this.webpackJsonpnavbar||[]).push([[0],{18:function(t,e,c){},25:function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),i=c(12),s=c.n(i),l=(c(18),c(10)),a=c(4),o=c(3),u=c(1),j=[{id:0,url:"/",text:"random"},{id:1,url:"/about",text:"about"},{id:2,url:"/projects",text:"projects"},{id:3,url:"/contact",text:"contact"},{id:4,url:"/profile",text:"profile"}],b=[{id:0,url:"https://www.twitter.com",icon:Object(u.jsx)(a.c,{})},{id:1,url:"https://www.twitter.com",icon:Object(u.jsx)(a.e,{})},{id:2,url:"https://www.twitter.com",icon:Object(u.jsx)(a.d,{})},{id:3,url:"https://www.twitter.com",icon:Object(u.jsx)(a.b,{})}],d=function(){var t=Object(n.useRef)(null),e=Object(n.useRef)(null),c=Object(n.useRef)(null),r=Object(n.useState)(!1),i=Object(l.a)(r,2),s=i[0],d=i[1],x=Object(n.useState)(0),O=Object(l.a)(x,2),f=O[0],p=O[1];console.log(f);Object(n.useEffect)((function(){d(!1),p(0)}),[]),Object(n.useEffect)((function(){var c=e.current.getBoundingClientRect().height;s?(t.current.style.height="".concat(c,"px"),t.current.style.padding="20px",e.current.style.pointerEvents="auto",e.current.style.opacity="1"):(t.current.style.height="0px",t.current.style.padding="0px",e.current.style.pointerEvents="none",e.current.style.opacity="0")}),[s]),Object(n.useEffect)((function(){c.current.className="navbar ".concat(j[f].text),t.current.className="toggle-links ".concat(j[f].text)}),[f]);var h=function(t){p(t)};return Object(u.jsxs)("div",{className:"navbar",ref:c,children:[Object(u.jsx)(o.b,{to:"/",className:"logo",onClick:function(){return p(0)},children:"Fadev"}),Object(u.jsx)("div",{className:"toggle",onClick:function(){d(!s)},children:Object(u.jsx)(a.a,{})}),Object(u.jsx)("div",{className:"toggle-links",ref:t,children:Object(u.jsx)("div",{className:"links-wrapper",ref:e,children:j.map((function(t){var e=t.id,c=t.url,n=t.text;return Object(u.jsx)(o.b,{to:c,onClick:function(){return h(e)},children:n},e)}))})}),Object(u.jsx)("div",{className:"links",children:j.map((function(t){var e=t.id,c=t.url,n=t.text;return Object(u.jsx)(o.b,{to:c,onClick:function(){return h(e)},children:n},e)}))}),Object(u.jsx)("div",{className:"socials",children:b.map((function(t){var e=t.id,c=t.url,n=t.icon;return Object(u.jsx)(o.b,{to:c,children:n},e)}))})]})};var x=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)("section",{className:"main",children:Object(u.jsx)(d,{})})})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.7aaae86f.chunk.js.map