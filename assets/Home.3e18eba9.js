import{e,u as a,f as t,g as s,h as l,o as i,c as o,b as r,i as n,t as c,_ as v,p as u,j as f,F as d,r as m,w as p,k as h,l as k}from"./app.2378e4b4.js";u("data-v-024e1674");const x={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},$={key:2,class:"description"};f();var _=e({expose:[],setup(e){const u=a(),f=t(),d=s((()=>f.value.heroImage||m.value||h.value||_.value)),m=s((()=>null!==f.value.heroText)),p=s((()=>f.value.heroText||u.value.title)),h=s((()=>null!==f.value.tagline)),k=s((()=>f.value.tagline||u.value.description)),_=s((()=>f.value.actionLink&&f.value.actionText)),b=s((()=>f.value.altActionLink&&f.value.altActionText));return(e,a)=>l(d)?(i(),o("header",x,[e.$frontmatter.heroImage?(i(),o("figure",y,[r("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):n("v-if",!0),l(m)?(i(),o("h1",g,c(l(p)),1)):n("v-if",!0),l(h)?(i(),o("p",$,c(l(k)),1)):n("v-if",!0),l(_)?(i(),o(v,{key:3,item:{link:l(f).actionLink,text:l(f).actionText},class:"action"},null,8,["item"])):n("v-if",!0),l(b)?(i(),o(v,{key:4,item:{link:l(f).altActionLink,text:l(f).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)}});_.__scopeId="data-v-024e1674",u("data-v-e5f225ce");const b={key:0,class:"home-features"},I={class:"wrapper"},T={class:"container"},A={class:"features"},L={key:0,class:"title"},w={key:1,class:"details"};f();var j=e({expose:[],setup(e){const a=t(),v=s((()=>a.value.features&&a.value.features.length>0)),u=s((()=>a.value.features?a.value.features:[]));return(e,a)=>l(v)?(i(),o("div",b,[r("div",I,[r("div",T,[r("div",A,[(i(!0),o(d,null,m(l(u),((e,a)=>(i(),o("section",{key:a,class:"feature"},[e.title?(i(),o("h2",L,c(e.title),1)):n("v-if",!0),e.details?(i(),o("p",w,c(e.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)}});j.__scopeId="data-v-e5f225ce";const B={},C=p();u("data-v-df8b2502");const F={key:0,class:"footer"},q={class:"container"},z={class:"text"};f();const D=C(((e,a)=>e.$frontmatter.footer?(i(),o("footer",F,[r("div",q,[r("p",z,c(e.$frontmatter.footer),1)])])):n("v-if",!0)));B.render=D,B.__scopeId="data-v-df8b2502",u("data-v-6e1bdf43");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};f();var H=e({expose:[],setup:e=>(e,a)=>{const t=h("Content");return i(),o("main",E,[r(_),k(e.$slots,"hero",{},void 0,!0),r(j),r("div",G,[r(t)]),k(e.$slots,"features",{},void 0,!0),r(B),k(e.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-6e1bdf43";export default H;
