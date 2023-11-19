(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[1481],{44174:a=>{function d(n,t,r,s){for(var o=-1,e=n==null?0:n.length;++o<e;){var i=n[o];t(s,i,r(i),n)}return s}a.exports=d},47443:(a,d,n)=>{var t=n(42118);function r(s,o){var e=s==null?0:s.length;return!!e&&t(s,o,0)>-1}a.exports=r},1196:a=>{function d(n,t,r){for(var s=-1,o=n==null?0:n.length;++s<o;)if(r(t,n[s]))return!0;return!1}a.exports=d},48983:(a,d,n)=>{var t=n(40371),r=t("length");a.exports=r},81119:(a,d,n)=>{var t=n(89881);function r(s,o,e,i){return t(s,function(c,x,u){o(i,c,e(c),u)}),i}a.exports=r},41848:a=>{function d(n,t,r,s){for(var o=n.length,e=r+(s?1:-1);s?e--:++e<o;)if(t(n[e],e,n))return e;return-1}a.exports=d},42118:(a,d,n)=>{var t=n(41848),r=n(62722),s=n(42351);function o(e,i,c){return i===i?s(e,i,c):t(e,r,c)}a.exports=o},62722:a=>{function d(n){return n!==n}a.exports=d},27561:(a,d,n)=>{var t=n(67990),r=/^\s+/;function s(o){return o&&o.slice(0,t(o)+1).replace(r,"")}a.exports=s},45652:(a,d,n)=>{var t=n(88668),r=n(47443),s=n(1196),o=n(74757),e=n(23593),i=n(21814),c=200;function x(u,l,v){var h=-1,f=r,j=u.length,g=!0,m=[],p=m;if(v)g=!1,f=s;else if(j>=c){var O=l?null:e(u);if(O)return i(O);g=!1,f=o,p=new t}else p=l?[]:m;n:for(;++h<j;){var E=u[h],I=l?l(E):E;if(E=v||E!==0?E:0,g&&I===I){for(var C=p.length;C--;)if(p[C]===I)continue n;l&&p.push(I),m.push(E)}else f(p,I,v)||(p!==m&&p.push(I),m.push(E))}return m}a.exports=x},9872:(a,d,n)=>{var t=n(44174),r=n(81119),s=n(67206),o=n(1469);function e(i,c){return function(x,u){var l=o(x)?t:r,v=c?c():{};return l(x,i,s(u,2),v)}}a.exports=e},23593:(a,d,n)=>{var t=n(58525),r=n(50308),s=n(21814),o=1/0,e=t&&1/s(new t([,-0]))[1]==o?function(i){return new t(i)}:r;a.exports=e},42351:a=>{function d(n,t,r){for(var s=r-1,o=n.length;++s<o;)if(n[s]===t)return s;return-1}a.exports=d},88016:(a,d,n)=>{var t=n(48983),r=n(62689),s=n(21903);function o(e){return r(e)?s(e):t(e)}a.exports=o},67990:a=>{var d=/\s/;function n(t){for(var r=t.length;r--&&d.test(t.charAt(r)););return r}a.exports=n},21903:a=>{var d="\\ud800-\\udfff",n="\\u0300-\\u036f",t="\\ufe20-\\ufe2f",r="\\u20d0-\\u20ff",s=n+t+r,o="\\ufe0e\\ufe0f",e="["+d+"]",i="["+s+"]",c="\\ud83c[\\udffb-\\udfff]",x="(?:"+i+"|"+c+")",u="[^"+d+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",h="\\u200d",f=x+"?",j="["+o+"]?",g="(?:"+h+"(?:"+[u,l,v].join("|")+")"+j+f+")*",m=j+f+g,p="(?:"+[u+i+"?",i,l,v,e].join("|")+")",O=RegExp(c+"(?="+c+")|"+p+m,"g");function E(I){for(var C=O.lastIndex=0;O.test(I);)++C;return C}a.exports=E},7739:(a,d,n)=>{var t=n(89465),r=n(9872),s=Object.prototype,o=s.hasOwnProperty,e=r(function(i,c,x){o.call(i,x)?i[x].push(c):t(i,x,[c])});a.exports=e},47037:(a,d,n)=>{var t=n(44239),r=n(1469),s=n(37005),o="[object String]";function e(i){return typeof i=="string"||!r(i)&&s(i)&&t(i)==o}a.exports=e},50308:a=>{function d(){}a.exports=d},84238:(a,d,n)=>{var t=n(280),r=n(64160),s=n(98612),o=n(47037),e=n(88016),i="[object Map]",c="[object Set]";function x(u){if(u==null)return 0;if(s(u))return o(u)?e(u):u.length;var l=r(u);return l==i||l==c?u.size:t(u).length}a.exports=x},18601:(a,d,n)=>{var t=n(14841),r=1/0,s=17976931348623157e292;function o(e){if(!e)return e===0?e:0;if(e=t(e),e===r||e===-r){var i=e<0?-1:1;return i*s}return e===e?e:0}a.exports=o},40554:(a,d,n)=>{var t=n(18601);function r(s){var o=t(s),e=o%1;return o===o?e?o-e:o:0}a.exports=r},7334:(a,d,n)=>{var t=n(79833);function r(s){return t(s).toLowerCase()}a.exports=r},14841:(a,d,n)=>{var t=n(27561),r=n(13218),s=n(33448),o=0/0,e=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,x=parseInt;function u(l){if(typeof l=="number")return l;if(s(l))return o;if(r(l)){var v=typeof l.valueOf=="function"?l.valueOf():l;l=r(v)?v+"":v}if(typeof l!="string")return l===0?l:+l;l=t(l);var h=i.test(l);return h||c.test(l)?x(l.slice(2),h?2:8):e.test(l)?o:+l}a.exports=u},44908:(a,d,n)=>{var t=n(45652);function r(s){return s&&s.length?t(s):[]}a.exports=r},53768:(a,d,n)=>{"use strict";n.d(d,{O:()=>r});var t=n(60914);const r=t.Wx},71590:(a,d,n)=>{"use strict";n.d(d,{A:()=>i});var t=n(85893),r=n(1565),s=n(16607);const o=(0,r.default)(s.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:c})=>c?"auto 1fr":"1fr"};
`,e=(0,r.default)(s.x)`
  overflow-x: hidden;
`,i=({sideNav:c,children:x})=>(0,t.jsxs)(o,{hasSideNav:Boolean(c),children:[c,(0,t.jsx)(e,{paddingBottom:10,children:x})]})},29824:(a,d,n)=>{"use strict";n.d(d,{r:()=>v});var t=n(85893),r=n(67294),s=n(62577),o=n(73727),e=n(1565),i=n(66362),c=n(10574),x=n(16607);const u=e.default.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:h})=>h?"none":void 0};
  color: ${({disabled:h,theme:f})=>h?f.colors.neutral600:f.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${c.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:h})=>h.colors.primary500};
  }

  &:active {
    color: ${({theme:h})=>h.colors.primary700};
  }

  ${i.BF};
`,l=(0,e.default)(x.x)`
  display: flex;
`,v=r.forwardRef(({children:h,href:f,to:j,disabled:g=!1,startIcon:m,endIcon:p,...O},E)=>{const I=f?"_blank":void 0,C=f?"noreferrer noopener":void 0;return(0,t.jsxs)(u,{as:j&&!g?o.OL:"a",target:I,rel:C,to:g?void 0:j,href:g?"#":f,disabled:g,ref:E,...O,children:[m&&(0,t.jsx)(l,{as:"span","aria-hidden":!0,paddingRight:2,children:m}),(0,t.jsx)(c.Z,{children:h}),p&&!f&&(0,t.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:p}),f&&(0,t.jsx)(l,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,t.jsx)(s.Z,{})})]})})},56233:(a,d,n)=>{"use strict";n.d(d,{m:()=>i});var t=n(85893),r=n(1565),s=n(31988);const o=`${232/16}rem`,e=(0,r.default)(s.r)`
  width: ${o};
  background: ${({theme:c})=>c.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:c})=>c.colors.neutral200};
  z-index: 1;
`,i=({ariaLabel:c,...x})=>(0,t.jsx)(e,{"aria-label":c,as:"nav",...x})},71603:(a,d,n)=>{"use strict";n.d(d,{p:()=>m});var t=n(85893),r=n(67294),s=n(90272),o=n(1565),e=n(40840),i=n(92058);const c=p=>{const O=(0,r.useRef)();return(0,r.useEffect)(()=>{O.current=p}),O.current};var x=n(26910),u=n(16607),l=n(49185),v=n(35987),h=n(96987),f=n(10574),j=n(96208);const g=(0,o.default)(x.i)`
  width: ${24/16}rem;
  background-color: ${({theme:p})=>p.colors.neutral200};
`,m=({as:p="h2",label:O,searchLabel:E="",searchable:I=!1,onChange:C=()=>{},value:B="",onClear:R=()=>{},onSubmit:M=()=>{},id:y})=>{const[P,A]=(0,r.useState)(!1),L=c(P),_=(0,i.M)(y),T=(0,r.useRef)(void 0),S=(0,r.useRef)(void 0);(0,r.useEffect)(()=>{P&&T.current&&T.current.focus(),L&&!P&&S.current&&S.current.focus()},[P,L]);const W=()=>{A(D=>!D)},b=D=>{R(D),T.current.focus()},$=D=>{D.relatedTarget?.id!==_&&A(!1)},U=D=>{D.key===e.y.ESCAPE&&A(!1)};return P?(0,t.jsxs)(u.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,t.jsx)(l.U,{children:(0,t.jsx)(v.w,{name:"searchbar",value:B,onChange:C,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:U,ref:T,onBlur:$,onClear:b,onSubmit:M,clearLabel:"Clear",size:"S",children:E})}),(0,t.jsx)(u.x,{paddingLeft:2,paddingTop:4,children:(0,t.jsx)(g,{})})]}):(0,t.jsxs)(u.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,t.jsxs)(h.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,t.jsx)(f.Z,{variant:"beta",as:p,children:O}),I&&(0,t.jsx)(j.h,{ref:S,onClick:W,label:E,icon:(0,t.jsx)(s.Z,{})})]}),(0,t.jsx)(u.x,{paddingTop:4,children:(0,t.jsx)(g,{})})]})}},36636:(a,d,n)=>{"use strict";n.d(d,{E:()=>h});var t=n(85893),r=n(67294),s=n(59233),o=n(1565),e=n(16607),i=n(10574),c=n(96987),x=n(53342);const u=(0,o.default)(e.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:f})=>f.colors.neutral800};
  svg > * {
    fill: ${({theme:f})=>f.colors.neutral600};
  }

  &.active {
    ${({theme:f})=>`
      background-color: ${f.colors.primary100};
      border-right: 2px solid ${f.colors.primary600};
      svg > * {
        fill: ${f.colors.primary700};
      }
      ${i.Z} {
        color: ${f.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,l=(0,o.default)(s.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:f,$active:j})=>j?f.colors.primary600:f.colors.neutral600};
  }
`,v=o.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,h=r.forwardRef(({children:f,icon:j=null,withBullet:g=!1,as:m=x.f,isSubSectionChild:p=!1,...O},E)=>(0,t.jsxs)(u,{as:m,icon:j,background:"neutral100",paddingLeft:p?9:7,paddingBottom:2,paddingTop:2,ref:E,...O,children:[(0,t.jsxs)(c.k,{children:[j?(0,t.jsx)(v,{children:j}):(0,t.jsx)(l,{}),(0,t.jsx)(e.x,{paddingLeft:2,children:(0,t.jsx)(i.Z,{as:"span",children:f})})]}),g&&(0,t.jsx)(e.x,{as:c.k,paddingRight:4,children:(0,t.jsx)(l,{$active:!0})})]}))},21660:(a,d,n)=>{"use strict";n.d(d,{D:()=>j});var t=n(85893),r=n(67294),s=n(1565),o=n(58471),e=n(96987),i=n(16607),c=n(10574);const x=(0,s.default)(e.k)`
  border: none;
  padding: 0;
  background: transparent;
`,u=s.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:g})=>g?"0deg":"180deg"});
`,l=({collapsable:g=!1,label:m,onClick:p=()=>{},ariaExpanded:O,ariaControls:E})=>g?(0,t.jsxs)(x,{as:"button",onClick:p,"aria-expanded":O,"aria-controls":E,textAlign:"left",children:[(0,t.jsx)(i.x,{paddingRight:1,children:(0,t.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:m})}),g&&(0,t.jsx)(u,{rotated:O,children:(0,t.jsx)(o.Z,{"aria-hidden":!0})})]}):(0,t.jsx)(x,{children:(0,t.jsx)(i.x,{paddingRight:1,children:(0,t.jsx)(c.Z,{variant:"sigma",textColor:"neutral600",children:m})})});var v=n(92058),h=n(18787);const f=(0,s.default)(i.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
`,j=({collapsable:g=!1,label:m,badgeLabel:p,children:O,id:E})=>{const[I,C]=(0,r.useState)(!0),B=(0,v.M)(E),R=()=>{C(M=>!M)};return(0,t.jsxs)(e.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,t.jsx)(f,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,t.jsxs)(i.x,{position:"relative",paddingRight:p?6:0,children:[(0,t.jsx)(l,{onClick:R,ariaExpanded:I,ariaControls:B,collapsable:g,label:m}),p&&(0,t.jsx)(h.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:p})]})}),(!g||I)&&(0,t.jsx)("ol",{id:B,children:r.Children.map(O,(M,y)=>(0,t.jsx)("li",{children:M},y))})]})}},61499:(a,d,n)=>{"use strict";n.d(d,{Z:()=>e});var t=n(85893),r=n(67294),s=n(16607),o=n(96987);const e=({children:i,spacing:c=2,horizontal:x=!1,...u})=>(0,t.jsx)(s.x,{paddingTop:2,paddingBottom:4,children:(0,t.jsx)(o.k,{as:"ol",gap:c,direction:x?"row":"column",alignItems:x?"center":"stretch",...u,children:r.Children.map(i,(l,v)=>(0,t.jsx)("li",{children:l},v))})})}}]);
