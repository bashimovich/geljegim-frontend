(self.webpackChunkhindi_merkezi=self.webpackChunkhindi_merkezi||[]).push([[928],{4987:(e,n,a)=>{"use strict";a.d(n,{A:()=>o});a(5043);var t=a(8010),r=a(3417),i=a(7734),s=a(3363),c=a(4117),l=a(579);const o=function(){const{t:e}=(0,c.Bd)();return(0,l.jsx)("div",{className:"footer__wrapper",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"footer__cards",children:[(0,l.jsxs)("div",{className:"footer__card",children:[(0,l.jsx)("div",{className:"footer__logo",children:(0,l.jsx)("img",{src:s,alt:""})}),(0,l.jsx)("div",{className:"footer__copy__right",children:(0,l.jsxs)("p",{children:[" 2024 TICIT. ",e("right"),". "]})}),(0,l.jsxs)("div",{className:"footer__social__media__link",children:[(0,l.jsx)(r.A,{}),(0,l.jsx)(t.A,{}),(0,l.jsx)(i.A,{})]})]}),(0,l.jsxs)("div",{className:"footer__card",children:[(0,l.jsx)("p",{className:"habarlasmak",children:e("contact")}),(0,l.jsxs)("p",{className:"address",children:["ticit@sanly.tm /",e("address")," 22 +99312946014 / +99312946019",(0,l.jsx)("a",{href:"https://ticit.edu.tm",className:"ticit__a",children:"www.ticit.edu.tm"})]})]})]})})})}},5742:(e,n,a)=>{"use strict";a.d(n,{A:()=>c});a(5043);var t=a(9974),r=a(2405),i=a(4117),s=a(579);const c=function(){const{i18n:e,t:n}=(0,i.Bd)();function a(n){e.changeLanguage(n)}return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"info__wrapper",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"lang__info",children:[(0,s.jsxs)("div",{className:"info",children:[(0,s.jsxs)("div",{className:"info__card",children:[(0,s.jsx)(t.A,{}),(0,s.jsxs)("p",{children:[n("address"),", 22"]})]}),(0,s.jsxs)("div",{className:"info__card",children:[(0,s.jsx)(r.A,{}),(0,s.jsx)("p",{children:"+99312946014 / +99312946019"})]})]}),(0,s.jsxs)("div",{className:"languages__list",children:[(0,s.jsx)("p",{className:"tm"===e.language?"lang active":"lang",onClick:()=>{a("tm")},children:"TM"}),(0,s.jsx)("p",{children:"|"}),(0,s.jsx)("p",{className:"ru"===e.language?"lang active":"lang",onClick:()=>{a("ru")},children:"RU"}),(0,s.jsx)("p",{children:"|"}),(0,s.jsx)("p",{className:"en"===e.language?"lang active":"lang",onClick:()=>{a("en")},children:"EN"})]})]})})})})}},2899:(e,n,a)=>{"use strict";a.d(n,{A:()=>o});var t=a(5043),r=a(8818),i=a(3211),s=a(3216),c=a(4117),l=a(579);const o=function(){const{t:e,i18n:n}=(0,c.Bd)(),a=(0,s.Zp)(),[o,d]=(0,t.useState)([]);return(0,t.useEffect)((()=>{i.S.get("marque-articles/").then((e=>{d(e.data.results)})).catch((e=>{console.log(e)}))}),[]),(0,l.jsxs)("div",{className:"marque__wrapper",children:[(0,l.jsx)("div",{className:"marque__title",children:(0,l.jsx)("p",{children:e("news")})}),(0,l.jsx)(r.A,{pauseOnHover:!0,children:null===o||void 0===o?void 0:o.map(((e,t)=>(0,l.jsx)("a",{className:"marque__news__list",onClick:()=>{return n=e.id,void a("/article",{state:n});var n},children:"tm"===n.language?e.title_tm:"ru"===n.language?e.title_ru:"en"===n.language?e.title_en:null},t)))})]})}},4312:(e,n,a)=>{"use strict";a.d(n,{A:()=>u});var t=a(5043),r=a(3363),i=a(9611),s=a(4802),c=a(6360),l=a(3216),o=a(4117),d=a(579);const u=function(){const{t:e}=(0,o.Bd)(),n=(0,l.Zp)(),[a,u]=(0,t.useState)(!1);function m(){n("/")}function f(e){n("/articles",{state:e})}return(0,d.jsx)("div",{className:"navigation__wrapper",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"navigation",children:[(0,d.jsx)("div",{className:"navigation__logo",children:(0,d.jsx)("img",{onClick:()=>m(),src:r,alt:""})}),(0,d.jsxs)("div",{className:"navigation__menu",children:[(0,d.jsxs)("ul",{className:a?"active":"",children:[(0,d.jsx)("li",{className:"parent__category",children:(0,d.jsx)("a",{href:"",className:"nav__link",onClick:()=>m(),children:e("home")})}),(0,d.jsxs)("li",{className:"parent__category",children:[(0,d.jsx)("a",{className:"nav__link",children:e("school")}),(0,d.jsxs)("div",{className:"sub__category",children:[(0,d.jsxs)("p",{className:"sub_parent_category",children:[e("university"),(0,d.jsxs)("div",{className:"child_category",children:[(0,d.jsx)("p",{onClick:()=>{f("univer")},children:e("university")}),(0,d.jsx)("p",{onClick:()=>{f("uni_news")},children:e("news")})]})]}),(0,d.jsxs)("p",{className:"sub_parent_category",children:[e("vacational"),(0,d.jsxs)("div",{className:"child_category",children:[(0,d.jsx)("p",{onClick:()=>{f("vacational")},children:e("vacational")}),(0,d.jsx)("p",{onClick:()=>{f("vac_news")},children:e("news")})]})]}),(0,d.jsxs)("p",{className:"sub_parent_category",children:[e("lyceum"),(0,d.jsxs)("div",{className:"child_category",children:[(0,d.jsx)("p",{onClick:()=>{f("lycee")},children:e("lyceum")}),(0,d.jsx)("p",{onClick:()=>{f("lycee_news")},children:e("news")})]})]})]})]}),(0,d.jsx)("li",{className:"parent__category",children:(0,d.jsx)("a",{href:"https://korpe.ticit.edu.tm",target:"_blank",children:e("korpe")})}),(0,d.jsx)("li",{className:"parent__category",children:(0,d.jsx)("a",{className:"nav__link",onClick:()=>{n("/news")},id:"news",children:e("news")})}),(0,d.jsx)("li",{className:"parent__category",children:(0,d.jsx)("a",{className:"nav__link",onClick:()=>{n("/media")},id:"media",children:e("media")})}),(0,d.jsx)("li",{className:"parent__category",children:(0,d.jsx)("a",{href:"https://kesgitle.ticit.edu.tm/",target:"_blank",children:e("kesgitle")})}),(0,d.jsx)("li",{className:"parent__category",children:(0,d.jsx)("a",{onClick:()=>{n("/vacancy")},target:"_blank",children:e("work")})}),(0,d.jsxs)("li",{className:"parent__category",children:[(0,d.jsx)("a",{className:"nav__link",children:e("hukuk")}),(0,d.jsxs)("div",{className:"sub__category",children:[(0,d.jsx)("p",{onClick:()=>{n("/laws")},children:e("laws")}),(0,d.jsx)("p",{onClick:()=>{n("/docs")},children:e("documents")})]})]}),(0,d.jsx)("li",{onClick:()=>{n("/search")},className:"parent__category",children:(0,d.jsx)(c.A,{})})]}),(0,d.jsx)("div",{className:"menu__icon",onClick:function(){u(!a)},children:a?(0,d.jsx)("span",{children:(0,d.jsx)(s.A,{})}):(0,d.jsx)("span",{children:(0,d.jsx)(i.A,{})})})]})]})})})}},3211:(e,n,a)=>{"use strict";a.d(n,{S:()=>t});const t=a(7154).A.create({baseURL:"https://gel.edu.tm/api/",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"*/*"}})},5502:(e,n,a)=>{"use strict";var t=a(4994);n.A=void 0;var r=t(a(39)),i=a(579);n.A=(0,r.default)((0,i.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2m5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"}),"Cancel")},7734:(e,n,a)=>{"use strict";var t=a(4994);n.A=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=s(n);if(a&&a.has(e))return a.get(e);var t={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=r?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(t,i,c):t[i]=e[i]}t.default=e,a&&a.set(e,t)}(a(5043));var r=t(a(39)),i=a(579);function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:n})(e)}n.A=(0,r.default)((0,i.jsx)("path",{d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"}),"Instagram")},8010:(e,n,a)=>{"use strict";var t=a(4994);n.A=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=s(n);if(a&&a.has(e))return a.get(e);var t={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=r?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(t,i,c):t[i]=e[i]}t.default=e,a&&a.set(e,t)}(a(5043));var r=t(a(39)),i=a(579);function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:n})(e)}n.A=(0,r.default)((0,i.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn")},3417:(e,n,a)=>{"use strict";var t=a(4994);n.A=void 0;!function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=s(n);if(a&&a.has(e))return a.get(e);var t={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=r?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(t,i,c):t[i]=e[i]}t.default=e,a&&a.set(e,t)}(a(5043));var r=t(a(39)),i=a(579);function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:n})(e)}n.A=(0,r.default)((0,i.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter")},8818:(e,n,a)=>{var t=a(5043);function r(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var i=r(t);!function(e){if(!e||"undefined"===typeof window)return;const n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n)}('.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}');const s=t.forwardRef((function(e,n){let{style:a={},className:r="",autoFill:s=!1,play:c=!0,pauseOnHover:l=!1,pauseOnClick:o=!1,direction:d="left",speed:u=50,delay:m=0,loop:f=0,gradient:h=!1,gradientColor:p="white",gradientWidth:v=200,onFinish:_,onCycleComplete:j,onMount:g,children:x}=e;const[y,w]=t.useState(0),[N,k]=t.useState(0),[b,C]=t.useState(1),[A,O]=t.useState(!1),M=t.useRef(null),E=n||M,P=t.useRef(null),q=t.useCallback((()=>{if(P.current&&E.current){const e=E.current.getBoundingClientRect(),n=P.current.getBoundingClientRect();let a=e.width,t=n.width;"up"!==d&&"down"!==d||(a=e.height,t=n.height),C(s&&a&&t&&t<a?Math.ceil(a/t):1),w(a),k(t)}}),[s,E,d]);t.useEffect((()=>{if(A&&(q(),P.current&&E.current)){const e=new ResizeObserver((()=>q()));return e.observe(E.current),e.observe(P.current),()=>{e&&e.disconnect()}}}),[q,E,A]),t.useEffect((()=>{q()}),[q,x]),t.useEffect((()=>{O(!0)}),[]),t.useEffect((()=>{"function"===typeof g&&g()}),[]);const W=t.useMemo((()=>s?N*b/u:N<y?y/u:N/u),[s,y,N,b,u]),z=t.useMemo((()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!c||l?"paused":"running","--pause-on-click":!c||l&&!o||o?"paused":"running","--width":"up"===d||"down"===d?"100vh":"100%","--transform":"up"===d?"rotate(-90deg)":"down"===d?"rotate(90deg)":"none"})),[a,c,l,o,d]),S=t.useMemo((()=>({"--gradient-color":p,"--gradient-width":"number"===typeof v?"".concat(v,"px"):v})),[p,v]),R=t.useMemo((()=>({"--play":c?"running":"paused","--direction":"left"===d?"normal":"reverse","--duration":"".concat(W,"s"),"--delay":"".concat(m,"s"),"--iteration-count":f?"".concat(f):"infinite","--min-width":s?"auto":"100%"})),[c,d,W,m,f,s]),H=t.useMemo((()=>({"--transform":"up"===d?"rotate(90deg)":"down"===d?"rotate(-90deg)":"none"})),[d]),B=t.useCallback((e=>[...Array(Number.isFinite(e)&&e>=0?e:0)].map(((e,n)=>i.default.createElement(t.Fragment,{key:n},t.Children.map(x,(e=>i.default.createElement("div",{style:H,className:"rfm-child"},e))))))),[H,x]);return A?i.default.createElement("div",{ref:E,style:z,className:"rfm-marquee-container "+r},h&&i.default.createElement("div",{style:S,className:"rfm-overlay"}),i.default.createElement("div",{className:"rfm-marquee",style:R,onAnimationIteration:j,onAnimationEnd:_},i.default.createElement("div",{className:"rfm-initial-child-container",ref:P},t.Children.map(x,(e=>i.default.createElement("div",{style:H,className:"rfm-child"},e)))),B(b-1)),i.default.createElement("div",{className:"rfm-marquee",style:R},B(b))):null}));n.A=s},3363:(e,n,a)=>{"use strict";e.exports=a.p+"static/media/Geljegim.cec2c2a9c63e3550c8fd.png"}}]);
//# sourceMappingURL=928.c1d16afb.chunk.js.map