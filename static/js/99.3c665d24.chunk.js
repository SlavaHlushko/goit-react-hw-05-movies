"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[99],{9099:function(e,n,t){t.r(n),t.d(n,{Reviews:function(){return f}});var r,i=t(9439),u=t(2791),c=t(7689),o=t(9818),a=t(168),s=t(6444).ZP.div(r||(r=(0,a.Z)(["\n  list-style-type: none;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),d=t(184),f=function(){var e=(0,c.UO)().movieId,n=(0,u.useState)([]),t=(0,i.Z)(n,2),r=t[0],a=t[1];return(0,u.useEffect)((function(){(0,o.tx)(e).then((function(e){a(e)}))}),[e]),0===r.length?(0,d.jsx)("p",{children:"We don't have any reviews for yhis movie"}):(0,d.jsx)(s,{children:r.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("b",{children:"Author:"}),(0,d.jsx)("b",{children:t})]}),(0,d.jsx)("p",{children:r})]},n)}))})}},9818:function(e,n,t){t.d(n,{Hg:function(){return u},bV:function(){return i},tx:function(){return a},zp:function(){return c},zv:function(){return o}});var r=t(2388),i="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";function u(){return r.Z.get("trending/movie/day").then((function(e){return e.data.results}))}function c(e){return r.Z.get("search/movie?query=".concat(e)).then((function(e){return e.data.results}))}function o(e){return r.Z.get("movie/".concat(e,"/credits/reviews")).then((function(e){return e.data}))}function a(e){return r.Z.get("movie/".concat(e,"/reviews")).then((function(e){return e.data.results}))}r.Z.defaults.baseURL="https://api.themoviedb.org/3/",r.Z.defaults.params={key:"68b942bb9ae0cb3e532a5c540add82e6",language:"en-US"}}}]);
//# sourceMappingURL=99.3c665d24.chunk.js.map