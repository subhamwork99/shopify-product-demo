import{R as O}from"./react-dom.3bcc12a2.js";import{a as l,b as m,j as e,d as E,e as s,F as S,C as u,T as g,f as h,P as y,L as c,B as I,A as L,t as T,S as _,g as f,I as C,E as F}from"./@shopify.ed910c88.js";import{r as d}from"./react.0eba5c70.js";import{u as b,a as M,b as P,c as j}from"./react-router.699a6d80.js";import{u as B,Q as N,a as U,M as k,b as H}from"./react-query.f776da15.js";import{B as z}from"./react-router-dom.d2f5ff8a.js";import"./object-assign.9840bf7d.js";import"./scheduler.fc517f69.js";import"./web-vitals.054bdbc3.js";import"./@remix-run.710d1171.js";import"./@babel.45f3495d.js";const D=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}};D();function Y(){const n=l.useAppBridge(),{search:r}=b();return d.exports.useEffect(()=>{if(!!n&&!!r){const i=new URLSearchParams(r).get("redirectUri");new URL(decodeURIComponent(i)).hostname===location.hostname&&m.Redirect.create(n).dispatch(m.Redirect.Action.REMOTE,decodeURIComponent(i))}},[n,r]),e(l.Loading,{})}var Q=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),K="/assets/empty-state.aece716c.svg",$="/assets/home-trophy.d70b3542.png";function v(){const n=l.useAppBridge(),r=E.authenticatedFetch(n);return async(o,i)=>{const t=await r(o,i);return W(t.headers,n),t}}function W(n,r){if(n.get("X-Shopify-API-Request-Failure-Reauthorize")==="1"){const o=n.get("X-Shopify-API-Request-Failure-Reauthorize-Url")||"/api/auth";m.Redirect.create(r).dispatch(m.Redirect.Action.REMOTE,o.startsWith("/")?`https://${window.location.host}${o}`:o)}}const X=({url:n,fetchInit:r={},reactQueryOptions:o})=>{const i=v(),t=d.exports.useMemo(()=>async()=>(await i(n,r)).json(),[n,JSON.stringify(r)]);return B(n,t,{...o,refetchOnWindowFocus:!1})};function q(){const n={content:null},[r,o]=d.exports.useState(!0),[i,t]=d.exports.useState(n),a=v(),{data:p,refetch:R,isLoading:A,isRefetching:w}=X({url:"/api/products/count",reactQueryOptions:{onSuccess:()=>{o(!1)}}}),x=i.content&&!w&&e(l.Toast,{...i,onDismiss:()=>t(n)});return s(S,{children:[x,e(u,{title:"Product Counter",sectioned:!0,primaryFooterAction:{content:"Populate 5 products",onAction:async()=>{o(!0),(await a("/api/products/create")).ok?(await R(),t({content:"5 products created!"})):(o(!1),t({content:"There was an error creating products",error:!0}))},loading:r},children:s(g,{spacing:"loose",children:[e("p",{children:"Sample products are created with a default title and price. You can remove them at any time."}),s(h,{as:"h4",variant:"headingMd",children:["TOTAL PRODUCTS",e(h,{variant:"bodyMd",as:"p",fontWeight:"semibold",children:A?"-":p.count})]})]})})]})}function V({children:n}){const r=b(),o=M(),i=d.exports.useMemo(()=>({replace:t=>{o(t,{replace:!0})}}),[o]);d.exports.useMemo(()=>({history:i,location:r}),[i,r]),console.log("log of SHOPIFY_API_KEY",void 0),d.exports.useState(()=>{const t=new URLSearchParams(r.search).get("host")||window.__SHOPIFY_DEV_HOST;return window.__SHOPIFY_DEV_HOST=t,{host:t,apiKey:void 0,forceRedirect:!0}});{const t={title:"Missing Shopify API Key",children:e(S,{children:"Your app is running without the SHOPIFY_API_KEY environment variable. Please ensure that it is set when running or building your React app."})};return e(y,{narrowWidth:!0,children:e(c,{children:e(c.Section,{children:e("div",{style:{marginTop:"100px"},children:e(I,{...t,status:"critical"})})})})})}}function G({children:n}){const r=new N({queryCache:new U,mutationCache:new k});return e(H,{client:r,children:n})}function J({url:n,children:r,external:o,...i}){const t=l.useNavigate(),a=d.exports.useCallback(()=>{t(n)},[n]);return o||/^(?:[a-z][a-z\d+.-]*:|\/\/)/.test(n)?e("a",{...i,href:n,target:"_blank",rel:"noopener noreferrer",children:r}):e("a",{...i,onClick:a,children:r})}function Z({children:n}){return e(L,{i18n:T,linkComponent:J,children:n})}function ee(){return s(y,{narrowWidth:!0,children:[e(l.TitleBar,{title:"App name",primaryAction:null}),s(c,{children:[e(c.Section,{children:e(u,{sectioned:!0,children:s(_,{wrap:!1,spacing:"extraTight",distribution:"trailing",alignment:"center",children:[e(_.Item,{fill:!0,children:s(g,{spacing:"loose",children:[e(h,{as:"h2",variant:"headingMd",children:"Nice work on building a Shopify app \u{1F389}"}),s("p",{children:["Your app is ready to explore! It contains everything you need to get started including the"," ",e(f,{url:"https://polaris.shopify.com/",external:!0,children:"Polaris design system"}),","," ",e(f,{url:"https://shopify.dev/api/admin-graphql",external:!0,children:"Shopify Admin API"}),", and"," ",e(f,{url:"https://shopify.dev/apps/tools/app-bridge",external:!0,children:"App Bridge"})," ","UI library and components."]}),s("p",{children:["Ready to go? Start populating your app with some sample products to view and test in your store."," "]}),s("p",{children:["Learn more about building out your app in"," ",e(f,{url:"https://shopify.dev/apps/getting-started/add-functionality",external:!0,children:"this Shopify tutorial"})," ","\u{1F4DA}"," "]})]})}),e(_.Item,{children:e("div",{style:{padding:"0 20px"},children:e(C,{source:$,alt:"Nice work on building a Shopify app",width:120})})})]})})}),e(c.Section,{children:e(q,{})})]})]})}var te=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));function ne(){return e(y,{children:e(u,{children:e(u.Section,{children:e(F,{heading:"There is no page at this address",image:K,children:e("p",{children:"Check the URL and try again, or use the search bar to find what you need."})})})})})}var re=Object.freeze(Object.defineProperty({__proto__:null,default:ne},Symbol.toStringTag,{value:"Module"}));function oe(){return s(y,{children:[e(l.TitleBar,{title:"Page name",primaryAction:{content:"Primary action",onAction:()=>console.log("Primary action")},secondaryActions:[{content:"Secondary action",onAction:()=>console.log("Secondary action")}]}),s(c,{children:[s(c.Section,{children:[s(u,{sectioned:!0,children:[e(h,{variant:"headingMd",as:"h2",children:"Heading"}),e(g,{children:e("p",{children:"Body"})})]}),s(u,{sectioned:!0,children:[e(h,{variant:"headingMd",as:"h2",children:"Heading"}),e(g,{children:e("p",{children:"Body"})})]})]}),e(c.Section,{secondary:!0,children:s(u,{sectioned:!0,children:[e(h,{variant:"headingMd",as:"h2",children:"Heading"}),e(g,{children:e("p",{children:"Body"})})]})})]})]})}var ie=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));function ae({pages:n}){const r=se(n),o=r.map(({path:t,component:a})=>e(P,{path:t,element:e(a,{})},t)),i=r.find(({path:t})=>t==="/notFound").component;return s(j,{children:[o,e(P,{path:"*",element:e(i,{})})]})}function se(n){return Object.keys(n).map(o=>{let i=o.replace("./pages","").replace(/\.(t|j)sx?$/,"").replace(/\/index$/i,"/").replace(/\b[A-Z]/,t=>t.toLowerCase()).replace(/\[(?:[.]{3})?(\w+?)\]/g,(t,a)=>`:${a}`);return i.endsWith("/")&&i!=="/"&&(i=i.substring(0,i.length-1)),n[o].default||console.warn(`${o} doesn't export a default React component`),{path:i,component:n[o].default}}).filter(o=>o.component)}function ce(){const n={"./pages/ExitIframe.jsx":Q,"./pages/index.jsx":te,"./pages/NotFound.jsx":re,"./pages/pagename.jsx":ie};return e(Z,{children:e(z,{children:e(V,{children:s(G,{children:[e(l.NavigationMenu,{navigationLinks:[{label:"Page name",destination:"/pagename"}]}),e(ae,{pages:n})]})})})})}O.render(e(ce,{}),document.getElementById("app"));
