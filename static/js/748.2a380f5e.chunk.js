"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{47:function(n,e,t){t.d(e,{O:function(){return m}});var r,o,i,a,s,c=t(168),u=t(731),l=t(444),f=l.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding: 24px;\n"]))),p=(0,l.ZP)(u.rU)(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),d=l.ZP.li(i||(i=(0,c.Z)(["\n  flex-basis: calc((100% - 80px) / 4);\n  margin: 10px;\n"]))),h=l.ZP.img(a||(a=(0,c.Z)(["\n  flex-grow: 1;\n  /* width: 100%; */\n  /* height: 100%; */\n"]))),x=l.ZP.h4(s||(s=(0,c.Z)([""]))),g=t(184),m=function(n){var e=n.movies,t=n.location;return(0,g.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,o=n.name,i=n.poster_path;return(0,g.jsx)(d,{children:(0,g.jsxs)(p,{to:"/movies/".concat(e),state:{from:t},children:[(0,g.jsx)(h,{src:i?"https://image.tmdb.org/t/p/original/".concat(i):"https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png",alt:null!==r&&void 0!==r?r:o}),(0,g.jsx)(x,{children:null!==r&&void 0!==r?r:o})]})},e)}))})}},748:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var r,o,i,a=t(861),s=t(885),c=t(757),u=t.n(c),l=t(596),f=t(47),p=t(791),d=t(731),h=t(689),x=t(827),g=t(168),m=t(444),v=m.ZP.form(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  max-width: 400px;\n  margin: 20px auto 0;\n  border: 2px solid #3f3f40;\n  border-radius: 8px;\n  overflow: hidden;\n"]))),Z=m.ZP.input(o||(o=(0,g.Z)(["\n  width: 100%;\n  font-size: 16px;\n  font-weight: 600;\n  padding-left: 8px;\n"]))),b=m.ZP.button(i||(i=(0,g.Z)(["\n  color: #000000;\n  background-color: #f0f0f0;\n  font-size: 16px;\n  font-weight: 600;\n  padding: 8px;\n  cursor: pointer;\n  border: 0;\n  outline: none;\n  :hover {\n    color: #ffffff;\n    background-color: #3f3f40;\n  }\n"]))),w=t(184);function j(n){var e=(0,p.useState)(""),t=(0,s.Z)(e,2),r=t[0],o=t[1],i=(0,d.lr)(),c=(0,s.Z)(i,2),g=c[0],m=c[1],j=(0,p.useState)([]),k=(0,s.Z)(j,2),y=k[0],P=k[1],C=(0,h.TH)();(0,p.useEffect)((function(){g.get("query")&&function(){var n=(0,a.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.bI)(g);case 3:e=n.sent,P(e),e.length||l.Am.info("Nothing found for your request",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}()()}),[g]);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault();var e=r.trim();if(!e)return l.Am.warn("enter a valid request!",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});m({query:e}),o("")},children:[(0,w.jsx)(Z,{type:"text",value:r,onChange:function(n){o(n.currentTarget.value)}}),(0,w.jsx)(b,{type:"submit",children:"Search"})]}),y&&(0,w.jsx)(f.O,{movies:y,location:C})]})}}}]);
//# sourceMappingURL=748.2a380f5e.chunk.js.map