import{c as e,d as a,u as t,l as s,f as l,g as o,q as i,t as r,j as c,p as n,k as f,F as v,x as u,y as d}from"./framework.5c8a4622.js";import{u as m,a as p,_ as k}from"./app.e1e1fc8e.js";function h(){const a=m();return e((()=>a.value.frontmatter))}const x=c("data-v-7f697f38");n("data-v-7f697f38");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},$={key:1,class:"title"},_={key:2,class:"description"};f();var I=a({expose:[],setup(a){const c=p(),n=h(),f=e((()=>n.value.heroImage||v.value||d.value||I.value)),v=e((()=>null!==n.value.heroText)),u=e((()=>n.value.heroText||c.value.title)),d=e((()=>null!==n.value.tagline)),m=e((()=>n.value.tagline||c.value.description)),I=e((()=>n.value.actionLink&&n.value.actionText)),T=e((()=>n.value.altActionLink&&n.value.altActionText));return x(((e,a)=>t(f)?(s(),l("header",y,[e.$frontmatter.heroImage?(s(),l("figure",g,[o("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):i("v-if",!0),t(v)?(s(),l("h1",$,r(t(u)),1)):i("v-if",!0),t(d)?(s(),l("p",_,r(t(m)),1)):i("v-if",!0),t(I)?(s(),l(k,{key:3,item:{link:t(n).actionLink,text:t(n).actionText},class:"action"},null,8,["item"])):i("v-if",!0),t(T)?(s(),l(k,{key:4,item:{link:t(n).altActionLink,text:t(n).altActionText},class:"action alt"},null,8,["item"])):i("v-if",!0)])):i("v-if",!0)))}});I.__scopeId="data-v-7f697f38";const T=c("data-v-e5f225ce");n("data-v-e5f225ce");const b={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},j={class:"features"},w={key:0,class:"title"},q={key:1,class:"details"};f();var B=a({expose:[],setup(a){const c=h(),n=e((()=>c.value.features&&c.value.features.length>0)),f=e((()=>c.value.features?c.value.features:[]));return T(((e,a)=>t(n)?(s(),l("div",b,[o("div",A,[o("div",L,[o("div",j,[(s(!0),l(v,null,u(t(f),((e,a)=>(s(),l("section",{key:a,class:"feature"},[e.title?(s(),l("h2",w,r(e.title),1)):i("v-if",!0),e.details?(s(),l("p",q,r(e.details),1)):i("v-if",!0)])))),128))])])])])):i("v-if",!0)))}});B.__scopeId="data-v-e5f225ce";const F={},z=c("data-v-df8b2502");n("data-v-df8b2502");const C={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=z(((e,a)=>e.$frontmatter.footer?(s(),l("footer",C,[o("div",D,[o("p",E,r(e.$frontmatter.footer),1)])])):i("v-if",!0)));F.render=G,F.__scopeId="data-v-df8b2502";const H=c("data-v-24d7e9f0");n("data-v-24d7e9f0");const J={class:"home","aria-labelledby":"main-title"};f();var K=a({expose:[],setup:e=>H(((e,a)=>(s(),l("main",J,[o(I),d(e.$slots,"hero"),o(B),d(e.$slots,"features"),o(F),d(e.$slots,"footer")]))))});K.__scopeId="data-v-24d7e9f0";export default K;