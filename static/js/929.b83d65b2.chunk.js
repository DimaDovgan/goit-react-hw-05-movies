"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[929],{7221:function(n,t,e){e.d(t,{E:function(){return a}});var r=e(8214),c=e(5861),i=e(4569),u=e.n(i),a=function(){var n=(0,c.Z)((0,r.Z)().mark((function n(t,e){var c;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u()("https://api.themoviedb.org/".concat(t).concat("api_key=34c87deee135f98fe7a77be6f3027085").concat(e));case 2:return c=n.sent,n.abrupt("return",c.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},3748:function(n,t,e){e.d(t,{D:function(){return u}});var r={li:"serch-film_li__Zt2uD"},c=e(3504),i=e(184),u=function(n){var t=n.filmArr,e=n.config;return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:r.ul,children:t.map((function(n){return(0,i.jsx)(c.rU,{to:"".concat(e,"/").concat(n.id.toString()),className:r.li,children:n.title},n.id)}))})})}},5929:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=e(8152),c=e(2791),i=e(3504),u=e(184),a=function(){var n=(0,c.useState)(""),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,u.jsxs)("form",{children:[(0,u.jsx)("label",{children:(0,u.jsx)("input",{type:"text",name:"query",value:e,onChange:function(n){var t=n.target.value;a(t)}})}),(0,u.jsx)(i.rU,{to:"?query=".concat(e),onClick:function(n){a("")},children:(0,u.jsx)("button",{children:"Submit"})})]})},o=e(7221),s=e(6871),f=e(3748),l=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],i=t[1],l=(0,c.useState)(null),h=(0,r.Z)(l,2),d=(h[0],h[1]),v=((0,s.UO)().id,(0,s.TH)().search);return(0,c.useEffect)((function(){var n=v.slice(1),t="&"+n;""!==n&&(0,o.E)("3/search/movie?",t).then((function(n){i(n.results)})).catch((function(n){return d(n)}))}),[v]),(0,u.jsxs)("div",{children:[(0,u.jsx)(a,{}),e.length>0&&(0,u.jsx)(f.D,{filmArr:e,config:"/movies"})]})}}}]);
//# sourceMappingURL=929.b83d65b2.chunk.js.map