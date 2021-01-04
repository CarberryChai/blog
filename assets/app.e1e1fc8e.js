import{r as e,m as t,a as n,n as a,i as o,d as s,h as r,b as l,o as i,c,w as u,e as d,f as p,g as h,t as f,j as v,p as m,k as g,l as b,q as k,s as w,u as x,v as y,F as $,x as C,y as _,z as L,A as E,B as S,C as A,D as I,E as q}from"./framework.5c8a4622.js";const T="undefined"!=typeof window;function B(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function H(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),T){const e="/blog/";t=t.slice(e.length).replace(/\//g,"_")+".md";t=`${e}assets/${t}.${__VP_HASH_MAP__[t]}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const R=Symbol();function D(){return function(){const e=o(R);if(!e)throw new Error("useRouter() is called without provider.");return e}().route}function O(e,t,n=!1){const a=document.querySelector(".nav-bar").offsetHeight,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const e=o.offsetTop-a-15;!n||Math.abs(e-window.scrollY)>window.innerHeight?window.scrollTo(0,e):window.scrollTo({left:0,top:e,behavior:"smooth"})}}const P=s({name:"VitePressContent",setup(){const e=D();return()=>e.component?r(e.component):null}}),U=s({setup(e,{slots:t}){const n=l(!1);return i((()=>{n.value=!0})),()=>n.value&&t.default?t.default():null}});const j=l((M='{"lang":"zh-CN","title":"Carberry⚡","description":"Vite & Vue powered static site generator.","base":"/blog/","head":[["style",{},"img { border-radius: 10px }h1.title { margin-left: 0.5em }"]],"themeConfig":{"repo":"carberrychai/blog","docsDir":"docs","lastUpdated":"Last Updated","nav":[{"text":"前端","link":"/frontend/"},{"text":"后端","link":"/backend/"},{"text":"开发工具","link":"/tools/"}],"sidebar":{"/frontend/":[{"text":"Basic","children":[{"text":"Vue常见题目","link":"/frontend/vue-common-question"},{"text":"前端常见问题","link":"/frontend/FrontEnd-common-question"},{"text":"input number 那些坑","link":"/frontend/input-number-bugs"},{"text":"Promise","link":"/frontend/Promise"},{"text":"阿里OSS小试","link":"/frontend/Having-ali-OSS-a-try"}]},{"text":"Advanced","children":[{"text":"前端部署的一点经验","link":"/frontend/FrontEnd-deploy"},{"text":"设计模式","link":"/frontend/FrontEnd-Design-Patterns"}]}],"/backend/":[{"text":"C++","children":[{"text":"const限定符","link":"/backend/const-determiner"}]},{"text":"Java","children":[{"text":"LeetCode题解","link":"/backend/LeetCode"}]},{"text":"其他","children":[{"text":"客户端访问docker部署MySQL","link":"/backend/docker-client-deploy-mysql"}]}],"/tools/":[{"text":"工具","children":[{"text":"Git","link":"/tools/Git"}]}]}},"locales":{}}',n(JSON.parse(M))));var M;function W(){return j}const z="undefined"!=typeof window;function F(e,t){const n=function(e,t){t.sort(((e,t)=>{const n=t.split("/").length-e.split("/").length;return 0!==n?n:t.length-e.length}));for(const n of t)if(e.startsWith(n))return n}(t,Object.keys(e));return n?e[n]:void 0}function V(e,t){t=function(e,t){if(!z)return t;const n=e.base,a=n.endsWith("/")?n.slice(0,-1):n;return t.slice(a.length)}(e,t);const n=F(e.locales||{},t)||{},a=F(e.themeConfig&&e.themeConfig.locales||{},t)||{};return{...e,...n,themeConfig:{...e.themeConfig,...a,locales:{}},locales:{}}}function N(e){const t=e||D();return c((()=>V(j.value,t.path)))}function G(e){const t=e||D();return c((()=>t.data))}function K(e,t){const n=Array.from(document.querySelectorAll("meta"));let a=!0;const o=e=>{a?a=!1:(n.forEach((e=>document.head.removeChild(e))),n.length=0,e&&e.length&&e.forEach((e=>{const t=function([e,t,n]){const a=document.createElement(e);for(const o in t)a.setAttribute(o,t[o]);n&&(a.innerHTML=n);return a}(e);document.head.appendChild(t),n.push(t)})))};u((()=>{const n=e.data,a=t.value,s=n&&n.title;document.title=(s?s+" | ":"")+a.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:a.description}],...a.head,...n&&n.frontmatter.head||[]])}))}const J=v("data-v-6e0ba27d");m("data-v-6e0ba27d");const Y=h("p",{class:"title"},"Debug",-1),Q={class:"block"},X={class:"block"},Z={class:"block"};g();s({expose:[],setup(e){const t=l(null),n=l(!1);return d(n,(e=>{!1===e&&(t.value.scrollTop=0)})),J(((e,a)=>(b(),p("div",{class:["debug",{open:n.value}],ref:t,onClick:a[1]||(a[1]=e=>n.value=!n.value)},[Y,h("pre",Q,"$page "+f(e.$page),1),h("pre",X,"$siteByRoute "+f(e.$siteByRoute),1),h("pre",Z,"$site "+f(e.$site),1)],2))))}}).__scopeId="data-v-6e0ba27d";const ee={},te=v("data-v-00c3af85")(((e,t)=>(b(),p("a",{class:"nav-bar-title",href:e.$site.base,"aria-label":`${e.$site.title}, back to home`},[e.$themeConfig.logo?(b(),p("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,["src"])):k("v-if",!0),w(" "+f(e.$site.title),1)],8,["href","aria-label"]))));ee.render=te,ee.__scopeId="data-v-00c3af85";const ne=["GitHub","GitLab","Bitbucket"].map((e=>[e,new RegExp(e,"i")]));function ae(){const e=N();return c((()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const a=/^https?:/.test(o=n)?o:`https://github.com/${o}`;var o;return{text:function(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const a=ne.find((([e,t])=>t.test(n[0])));if(a&&a[0])return a[0];return"Source"}(a,t.repoLabel),link:a}}))}const oe=/#.*$/,se=/(index)?\.(md|html)$/,re=/\/$/,le=/^[a-z]+:/i;function ie(e){return Array.isArray(e)}function ce(e){return le.test(e)}function ue(e){return decodeURI(e).replace(oe,"").replace(se,"")}function de(e){return/^\//.test(e)?e:`/${e}`}function pe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function he(e){const t=D(),{withBase:n}=function(){const e=W();return{withBase:function(t){return B(e.value.base,t)}}}(),a=ce(e.link);return{props:c((()=>{const o=fe(t.path);let s=!1;if(e.activeMatch)s=new RegExp(e.activeMatch).test(o);else{const t=fe(n(e.link));s="/"===t?t===o:o.startsWith(t)}return{class:{active:s,isExternal:a},href:a?e.link:n(e.link),target:e.target||a?"_blank":null,rel:e.rel||a?"noopener noreferrer":null,"aria-label":e.ariaLabel}})),isExternal:a}}function fe(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const ve={},me={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},ge=h("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),be=h("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1);ve.render=function(e,t){return b(),p("svg",me,[ge,be])};const ke=v("data-v-98431d6e");m("data-v-98431d6e");const we={class:"nav-link"};g();var xe=s({expose:[],props:{item:{type:null,required:!0}},setup(e){const{item:t}=e,{props:n,isExternal:a}=he(t);return ke(((e,o)=>(b(),p("div",we,[h("a",y({class:"item"},x(n)),[w(f(t.text)+" ",1),x(a)?(b(),p(ve,{key:0})):k("v-if",!0)],16)]))))}});xe.__scopeId="data-v-98431d6e";const ye=v("data-v-63e6a3ce");m("data-v-63e6a3ce");const $e={class:"nav-dropdown-link-item"},Ce=h("span",{class:"arrow"},null,-1),_e={class:"text"},Le={class:"icon"};g();var Ee=s({expose:[],props:{item:{type:null,required:!0}},setup(e){const{item:t}=e,{props:n,isExternal:a}=he(t);return ye(((e,o)=>(b(),p("div",$e,[h("a",y({class:"item"},x(n)),[Ce,h("span",_e,f(t.text),1),h("span",Le,[x(a)?(b(),p(ve,{key:0})):k("v-if",!0)])],16)]))))}});Ee.__scopeId="data-v-63e6a3ce";const Se=v("data-v-517467a8");m("data-v-517467a8");const Ae={class:"button-text"},Ie={class:"dialog"};g();var qe=s({expose:[],props:{item:{type:null,required:!0}},setup(e){const t=D(),n=l(!1);function a(){n.value=!n.value}return d((()=>t.path),(()=>{n.value=!1})),Se(((t,o)=>(b(),p("div",{class:["nav-dropdown-link",{open:n.value}]},[h("button",{class:"button","aria-label":e.item.ariaLabel,onClick:a},[h("span",Ae,f(e.item.text),1),h("span",{class:["button-arrow",n.value?"down":"right"]},null,2)],8,["aria-label"]),h("ul",Ie,[(b(!0),p($,null,C(e.item.items,(e=>(b(),p("li",{key:e.text,class:"dialog-item"},[h(Ee,{item:e},null,8,["item"])])))),128))])],2))))}});qe.__scopeId="data-v-517467a8";const Te=v("data-v-f465d38e");m("data-v-f465d38e");const Be={key:0,class:"nav-links"},He={key:1,class:"item"},Re={key:2,class:"item"};g();var De=s({expose:[],setup(e){const t=N(),n=function(){const e=D(),t=W();return c((()=>{const n=t.value.themeConfig.locales;if(!n)return null;const a=Object.keys(n);if(a.length<=1)return null;const o=T?t.value.base:"/",s=o.endsWith("/")?o.slice(0,-1):o,r=e.path.slice(s.length),l=a.find((e=>"/"!==e&&r.startsWith(e))),i=l?r.substring(l.length-1):r,c=a.map((e=>{const t=e.endsWith("/")?e.slice(0,-1):e;return{text:n[e].label,link:`${t}${i}`}})),u=l||"/";return{text:n[u].selectText?n[u].selectText:"Languages",items:c}}))}(),a=ae(),o=c((()=>s.value||a.value)),s=c((()=>t.value.themeConfig.nav));return Te(((e,t)=>x(o)?(b(),p("nav",Be,[x(s)?(b(!0),p($,{key:0},C(x(s),(e=>(b(),p("div",{key:e.text,class:"item"},[e.items?(b(),p(qe,{key:0,item:e},null,8,["item"])):(b(),p(xe,{key:1,item:e},null,8,["item"]))])))),128)):k("v-if",!0),x(n)?(b(),p("div",He,[h(qe,{item:x(n)},null,8,["item"])])):k("v-if",!0),x(a)?(b(),p("div",Re,[h(xe,{item:x(a)},null,8,["item"])])):k("v-if",!0)])):k("v-if",!0)))}});De.__scopeId="data-v-f465d38e";const Oe={emits:["toggle"]},Pe=h("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[h("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1);Oe.render=function(e,t,n,a,o,s){return b(),p("div",{class:"sidebar-button",onClick:t[1]||(t[1]=t=>e.$emit("toggle"))},[Pe])};const Ue=v("data-v-6e7c0b86");m("data-v-6e7c0b86");const je={class:"nav-bar"},Me=h("div",{class:"flex-grow"},null,-1),We={class:"nav"};g();var ze=s({expose:[],emits:["toggle"],setup:e=>Ue(((e,t)=>(b(),p("header",je,[h(Oe,{onToggle:t[1]||(t[1]=t=>e.$emit("toggle"))}),h(ee),Me,h("div",We,[h(De)]),_(e.$slots,"search")]))))});function Fe(){let e=null,t=null;const n=function(e,t){let n,a=!1;return()=>{n&&clearTimeout(n),a?n=setTimeout(e,t):(e(),a=!0,setTimeout((()=>{a=!1}),t))}}(a,300);function a(){const e=function(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter((t=>e.some((e=>e.hash===t.hash))))}([].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item")));for(let t=0;t<e.length;t++){const n=e[t],a=e[t+1],[s,r]=Ne(t,n,a);if(s)return history.replaceState(null,document.title,r||" "),void o(r)}}function o(n){if(s(t),s(e),t=document.querySelector(`.sidebar a[href="${n}"]`),!t)return;t.classList.add("active");const a=t.closest(".sidebar-links > ul > li");a&&a!==t.parentElement?(e=a.querySelector("a"),e&&e.classList.add("active")):e=null}function s(e){e&&e.classList.remove("active")}i((()=>{a(),window.addEventListener("scroll",n)})),L((()=>{o(decodeURIComponent(location.hash))})),E((()=>{window.removeEventListener("scroll",n)}))}function Ve(e){const t=document.querySelector(".nav-bar").offsetHeight;return e.parentElement.offsetTop-t-15}function Ne(e,t,n){const a=window.scrollY;return 0===e&&0===a?[!0,null]:a<Ve(t)?[!1,null]:!n||a<Ve(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function Ge(e,t){if(function(e){return!1===e||"auto"===e||ie(e)}(e))return e;t=de(t);for(const n in e)if(t.startsWith(de(n)))return e[n];return"auto"}function Ke(e){return e.reduce(((e,t)=>(t.link&&e.push({text:t.text,link:pe(t.link)}),function(e){return void 0!==e.children}(t)&&(e=[...e,...Ke(t.children)]),e)),[])}function Je(e,t){const n=[];if(void 0===e)return[];let a;return e.forEach((({level:e,title:o,slug:s})=>{if(e-1>t)return;const r={text:o,link:`#${s}`};2===e?(a=r,n.push(r)):a&&(a.children||(a.children=[])).push(r)})),n}ze.__scopeId="data-v-6e7c0b86";const Ye=e=>{const t=D(),n=W(),a=t.data.headers,o=e.item.text,s=function(e,t){if(void 0===t)return t;if(t.startsWith("#"))return t;return function(e,t){const n=e.endsWith("/"),a=t.startsWith("/");return n&&a?e.slice(0,-1)+t:n||a?e+t:`${e}/${t}`}(e,t)}(n.value.base,e.item.link),l=e.item.children,i=function(e,t){return void 0!==t&&ue(e.path)===ue(t)}(t,s),c=Qe(i,l,a);return r("li",{class:"sidebar-link"},[r(s?"a":"p",{class:{"sidebar-link-item":!0,active:i},href:s},o),c])};function Qe(e,t,n){return t&&t.length>0?r("ul",{class:"sidebar-links"},t.map((e=>r(Ye,{item:e})))):e&&n?Qe(!1,function(e){return Xe(function(e){let t;return(e=e.map((e=>Object.assign({},e)))).forEach((e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((e=>2===e.level))}(e))}(n)):null}function Xe(e){return e.map((e=>({text:e.title,link:`#${e.slug}`,children:e.children?Xe(e.children):void 0})))}const Ze={key:0,class:"sidebar-links"};var et=s({expose:[],setup(e){const t=function(){const e=D(),t=N();return Fe(),c((()=>{const n=e.data.headers,a=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(!1===a)return[];if("auto"===a)return Je(n,o);const s=Ge(t.value.themeConfig.sidebar,e.path);return!1===s?[]:"auto"===s?Je(n,o):s}))}();return(e,n)=>x(t).length>0?(b(),p("ul",Ze,[(b(!0),p($,null,C(x(t),(e=>(b(),p(x(Ye),{key:e.text,item:e},null,8,["item"])))),128))])):k("v-if",!0)}});const tt=v("data-v-58e261f2");var nt=s({expose:[],props:{open:{type:Boolean,required:!0}},setup:e=>tt(((t,n)=>(b(),p("aside",{class:["sidebar",{open:e.open}]},[h(De,{class:"nav"}),_(t.$slots,"sidebar-top"),h(et),_(t.$slots,"sidebar-bottom")],2))))});nt.__scopeId="data-v-58e261f2";const at=/bitbucket.org/;function ot(){const e=N(),t=G();return{url:c((()=>{const n=null==t.value.frontmatter.editLink?e.value.themeConfig.editLinks:t.value.frontmatter.editLink;const{repo:a,docsDir:o="",docsBranch:s="master",docsRepo:r=a}=e.value.themeConfig,{relativePath:l}=t.value;return n&&l&&a?function(e,t,n,a,o){return at.test(e)?function(e,t,n,a,o){return(ce(t)?t:e).replace(re,"")+`/src/${a}/`+(n?n.replace(re,"")+"/":"")+o+`?mode=edit&spa=0&at=${a}&fileviewer=file-view-default`}(e,t,n,a,o):function(e,t,n,a,o){return(ce(t)?t:`https://github.com/${t}`).replace(re,"")+`/edit/${a}/`+(n?n.replace(re,"")+"/":"")+o}(0,t,n,a,o)}(a,r,o,s,l):null})),text:c((()=>e.value.themeConfig.editLinkText||"Edit this page"))}}const st=v("data-v-fb0131f2");m("data-v-fb0131f2");const rt={class:"edit-link"};g();var lt=s({expose:[],setup(e){const{url:t,text:n}=ot();return st(((e,a)=>(b(),p("div",rt,[x(t)?(b(),p("a",{key:0,class:"link",href:x(t),target:"_blank",rel:"noopener noreferrer"},[w(f(x(n))+" ",1),h(ve,{class:"icon"})],8,["href"])):k("v-if",!0)]))))}});lt.__scopeId="data-v-fb0131f2";const it=v("data-v-52854a16");m("data-v-52854a16");const ct={key:0,class:"last-updated"},ut={class:"prefix"},dt={class:"datetime"};g();var pt=s({expose:[],setup(e){const t=N(),n=G(),a=c((()=>{const e=t.value.themeConfig.lastUpdated;return void 0!==e&&!1!==e})),o=c((()=>{const e=t.value.themeConfig.lastUpdated;return!0===e?"Last Updated":e})),s=l("");return i((()=>{s.value=new Date(n.value.lastUpdated).toLocaleString("en-US")})),it(((e,t)=>x(a)?(b(),p("p",ct,[h("span",ut,f(x(o))+":",1),h("span",dt,f(s.value),1)])):k("v-if",!0)))}});pt.__scopeId="data-v-52854a16";const ht=v("data-v-5a019cc9");m("data-v-5a019cc9");const ft={class:"page-footer"},vt={class:"edit"},mt={class:"updated"};g();var gt=s({expose:[],setup:e=>ht(((e,t)=>(b(),p("footer",ft,[h("div",vt,[h(lt)]),h("div",mt,[h(pt)])]))))});function bt(){const e=N(),t=G(),n=c((()=>pe(de(t.value.relativePath)))),a=c((()=>{const t=Ge(e.value.themeConfig.sidebar,n.value);return ie(t)?Ke(t):[]})),o=c((()=>a.value.findIndex((e=>e.link===n.value)))),s=c((()=>{if(!1!==e.value.themeConfig.nextLinks&&o.value>-1&&o.value<a.value.length-1)return a.value[o.value+1]})),r=c((()=>{if(!1!==e.value.themeConfig.prevLinks&&o.value>0)return a.value[o.value-1]})),l=c((()=>!!s.value||!!r.value));return{next:s,prev:r,hasLinks:l}}gt.__scopeId="data-v-5a019cc9";const kt={},wt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},xt=h("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1);kt.render=function(e,t){return b(),p("svg",wt,[xt])};const yt={},$t={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Ct=h("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1);yt.render=function(e,t){return b(),p("svg",$t,[Ct])};const _t=v("data-v-6683615c");m("data-v-6683615c");const Lt={key:0,class:"next-and-prev-link"},Et={class:"container"},St={class:"prev"},At={class:"text"},It={class:"next"},qt={class:"text"};g();var Tt=s({expose:[],setup(e){const{hasLinks:t,prev:n,next:a}=bt();return _t(((e,o)=>x(t)?(b(),p("div",Lt,[h("div",Et,[h("div",St,[x(n)?(b(),p("a",{key:0,class:"link",href:e.$withBase(x(n).link)},[h(kt,{class:"icon icon-prev"}),h("span",At,f(x(n).text),1)],8,["href"])):k("v-if",!0)]),h("div",It,[x(a)?(b(),p("a",{key:0,class:"link",href:e.$withBase(x(a).link)},[h("span",qt,f(x(a).text),1),h(yt,{class:"icon icon-next"})],8,["href"])):k("v-if",!0)])])])):k("v-if",!0)))}});Tt.__scopeId="data-v-6683615c";const Bt=v("data-v-b109f666");m("data-v-b109f666");const Ht={class:"page"},Rt={class:"container"},Dt={class:"content"};g();var Ot=s({expose:[],setup:e=>Bt(((e,t)=>{const n=S("Content");return b(),p("main",Ht,[h("div",Rt,[_(e.$slots,"top"),h("div",Dt,[h(n)]),h(gt),h(Tt),_(e.$slots,"bottom")])])}))});Ot.__scopeId="data-v-b109f666";var Pt=s({expose:[],setup(e){const t=A((()=>import("./Home.92e8c455.js"))),n=()=>null,a=n,o=n,s=n,r=D(),i=W(),u=N(),f=c((()=>i.value.themeConfig)),v=G(),m=c((()=>!!r.data.frontmatter.customLayout)),g=c((()=>!!r.data.frontmatter.home)),w=c((()=>{const{themeConfig:e}=u.value,{frontmatter:t}=r.data;return!1!==t.navbar&&!1!==e.navbar&&(i.value.title||e.logo||e.repo||e.nav)})),y=l(!1),C=c((()=>{const{frontmatter:e}=r.data,{themeConfig:t}=u.value;return!e.home&&!1!==e.sidebar&&("object"==typeof t.sidebar&&0!=Object.keys(t.sidebar).length||Array.isArray(t.sidebar)&&0!=t.sidebar.length)})),L=e=>{y.value="boolean"==typeof e?e:!y.value},E=L.bind(null,!1);d(r,E);const q=c((()=>[{"no-navbar":!w.value,"sidebar-open":y.value,"no-sidebar":!C.value}]));return(e,n)=>{const r=S("Content"),l=S("Debug");return b(),p($,null,[h("div",{class:["theme",x(q)]},[x(w)?(b(),p(ze,{key:0,onToggle:L},{search:I((()=>[_(e.$slots,"navbar-search",{},(()=>[x(f).algolia?(b(),p(x(s),{key:0,options:x(f).algolia},null,8,["options"])):k("v-if",!0)]))])),_:1})):k("v-if",!0),h(nt,{open:y.value},{"sidebar-top":I((()=>[_(e.$slots,"sidebar-top")])),"sidebar-bottom":I((()=>[_(e.$slots,"sidebar-bottom")])),_:1},8,["open"]),k(" TODO: make this button accessible "),h("div",{class:"sidebar-mask",onClick:n[1]||(n[1]=e=>L(!1))}),x(m)?(b(),p(r,{key:1})):x(g)?(b(),p(x(t),{key:2},{hero:I((()=>[_(e.$slots,"home-hero")])),features:I((()=>[_(e.$slots,"home-features")])),footer:I((()=>[_(e.$slots,"home-footer")])),_:1})):(b(),p(Ot,{key:3},{top:I((()=>[_(e.$slots,"page-top-ads",{},(()=>[x(f).carbonAds?(b(),p(x(a),{key:"carbon"+x(v).relativePath,code:x(f).carbonAds.carbon,placement:x(f).carbonAds.placement},null,8,["code","placement"])):k("v-if",!0)])),_(e.$slots,"page-top")])),bottom:I((()=>[_(e.$slots,"page-bottom"),_(e.$slots,"page-bottom-ads",{},(()=>[x(f).carbonAds&&x(f).carbonAds.custom?(b(),p(x(o),{key:"custom"+x(v).relativePath,code:x(f).carbonAds.custom,placement:x(f).carbonAds.placement},null,8,["code","placement"])):k("v-if",!0)]))])),_:1}))],2),h(l)],64)}}});const Ut={class:"theme"},jt=h("h1",null,"404",-1);const Mt={Layout:Pt,NotFound:s({expose:[],setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];return(e,n)=>(b(),p("div",Ut,[jt,h("blockquote",null,f(t[Math.floor(Math.random()*t.length)]),1),h("a",{href:e.$site.base,"aria-label":"go to home"},"Take me home.",8,["href"])]))}})},Wt=new Set,zt=()=>document.createElement("link");let Ft;const Vt=T&&(Ft=zt())&&Ft.relList&&Ft.relList.supports&&Ft.relList.supports("prefetch")?e=>{const t=zt();t.rel="prefetch",t.href=e,document.head.appendChild(t)}:e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};const Nt=Mt.NotFound||(()=>"404 Not Found"),Gt={name:"VitePressApp",setup:()=>(function(){if(!T)return;if(!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const a=()=>{n&&n.disconnect(),n=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=e.target;n.unobserve(t);const{pathname:a}=t;if(!Wt.has(a)){Wt.add(a);const e=H(a);Vt(e)}}}))})),t((()=>{document.querySelectorAll("#app a").forEach((e=>{const{target:t,hostname:a,pathname:o}=e;"_blank"!==t&&a===location.hostname&&(o!==location.pathname?n.observe(e):Wt.add(o))}))}))};i(a);const o=D();d((()=>o.path),a),E((()=>{n&&n.disconnect()}))}(),()=>r(Mt.Layout))};function Kt(){const o=function(){let o,s=T;return function(o,s){const r=e({path:"/",component:null,data:null}),l="undefined"!=typeof window;function i(e=(l?location.href:"/")){const t=new URL(e,"http://a.com");return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+=".html",e=t.pathname+t.search+t.hash),l&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",e)),u(e)}let c=null;async function u(e,i=0){const u=new URL(e,"http://a.com"),d=c=u.pathname;try{let e=o(d);if("then"in e&&"function"==typeof e.then&&(e=await e),c===d){c=null;const{default:o,__pageData:s}=e;if(!o)throw new Error(`Invalid route component: ${o}`);r.path=d,r.component=t(o),r.data=n(JSON.parse(s)),l&&a((()=>{if(u.hash&&!i){const e=document.querySelector(decodeURIComponent(u.hash));if(e)return void O(e,u.hash)}window.scrollTo(0,i)}))}}catch(p){p.message.match(/fetch/)||console.error(p),c===d&&(c=null,r.path=d,r.component=s?t(s):null)}}return l&&(window.addEventListener("click",(e=>{const t=e.target.closest("a");if(t){const{href:n,protocol:a,hostname:o,pathname:s,hash:r,target:l}=t,c=window.location;e.ctrlKey||e.shiftKey||e.altKey||e.metaKey||"_blank"===l||a!==c.protocol||o!==c.hostname||(e.preventDefault(),s===c.pathname?r&&r!==c.hash&&(history.pushState(null,"",r),O(t,r,t.classList.contains("header-anchor"))):i(n))}}),{capture:!0}),window.addEventListener("popstate",(e=>{u(location.href,e.state&&e.state.scrollPosition||0)})),window.addEventListener("hashchange",(e=>{e.preventDefault()}))),{route:r,go:i}}((e=>{let t=H(e);return s&&(o=t),(s||o===t)&&(t=t.replace(/\.js$/,".lean.js")),T?(s=!1,import(t)):require(t)}),Nt)}(),s=q(Gt);s.provide(R,o);const r=N(o.route),l=G(o.route);return T&&K(o.route,r),function(e,t,n,a){Object.defineProperties(e.config.globalProperties,{$site:{get:()=>t.value},$siteByRoute:{get:()=>n.value},$themeConfig:{get:()=>n.value.themeConfig},$page:{get:()=>a.value},$frontmatter:{get:()=>a.value.frontmatter},$title:{get:()=>a.value.title?a.value.title+" | "+n.value.title:n.value.title},$description:{get:()=>a.value.description||n.value.description},$withBase:{value:e=>B(t.value.base,e)}})}(s,j,r,l),function(e){e.component("Content",P),e.component("ClientOnly",U),e.component("Debug",(()=>null))}(s),Mt.enhanceApp&&Mt.enhanceApp({app:s,router:o,siteData:j}),{app:s,router:o}}if(T){const{app:e,router:t}=Kt();t.go().then((()=>{e.mount("#app")}))}export{xe as _,N as a,Kt as createApp,G as u};
