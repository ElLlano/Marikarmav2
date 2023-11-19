"use strict";(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[3981],{62019:(Q,M,n)=>{n.r(M),n.d(M,{HomePageCE:()=>N,default:()=>Ie});var e=n(67294),s=n(16607),B=n(71590),v=n(40720),C=n(31988),y=n(6498),l=n(62853),P=n(64593),R=n(97582),g=n(86896),Z=n(680);function j(t,o){var a=t.values,r=(0,R._T)(t,["values"]),d=o.values,u=(0,R._T)(o,["values"]);return(0,Z.wU)(d,a)&&(0,Z.wU)(r,u)}function S(t){var o=(0,g.Z)(),a=o.formatMessage,r=o.textComponent,d=r===void 0?e.Fragment:r,u=t.id,H=t.description,D=t.defaultMessage,E=t.values,p=t.children,k=t.tagName,I=k===void 0?d:k,$=t.ignoreTag,Ae={id:u,description:H,defaultMessage:D},O=a(Ae,E,{ignoreTag:$});return typeof p=="function"?p(Array.isArray(O)?O:[O]):I?e.createElement(I,null,e.Children.toArray(O)):e.createElement(e.Fragment,null,O)}S.displayName="FormattedMessage";var T=e.memo(S,j);T.displayName="MemoizedFormattedMessage";const A=T;var L=n(16550),c=n(1565),m=n(96987),f=n(10574),x=n(12473),b=n(98),Y=n(99571),V=n(45697),i=n.n(V),h=n(16334),J=n(43234),X=n(2364);const G=({type:t,title:o,number:a,content:r,hasLine:d})=>{const{formatMessage:u}=(0,g.Z)();return e.createElement(s.x,null,e.createElement(m.k,null,e.createElement(s.x,{minWidth:(0,l.Q1)(30),marginRight:5},e.createElement(X.Z,{type:t,number:a})),e.createElement(f.Z,{variant:"delta",as:"h3"},u(o))),e.createElement(m.k,{alignItems:"flex-start"},e.createElement(m.k,{justifyContent:"center",minWidth:(0,l.Q1)(30),marginBottom:3,marginTop:3,marginRight:5},d&&e.createElement(J.Z,{type:t,minHeight:t===h.lW?(0,l.Q1)(85):(0,l.Q1)(65)})),e.createElement(s.x,{marginTop:2},t===h.lW&&r)))};G.defaultProps={content:void 0,number:void 0,type:h.VM,hasLine:!0},G.propTypes={content:i().node,number:i().number,title:i().shape({id:i().string,defaultMessage:i().string}).isRequired,type:i().oneOf([h.lW,h.hx,h.VM]),hasLine:i().bool};const w=G,q=(t,o)=>t===-1||o<t?h.hx:o>t?h.VM:h.lW,U=({sections:t,currentSectionKey:o})=>{const a=t.findIndex(r=>r.key===o);return e.createElement(s.x,null,t.map((r,d)=>e.createElement(w,{key:r.key,title:r.title,content:r.content,number:d+1,type:q(a,d),hasLine:d!==t.length-1})))};U.defaultProps={currentSectionKey:void 0},U.propTypes={sections:i().arrayOf(i().shape({key:i().string.isRequired,title:i().shape({id:i().string,defaultMessage:i().string}).isRequired,content:i().node})).isRequired,currentSectionKey:i().string};const _=U,ee=()=>{const{guidedTourState:t,setSkipped:o}=(0,l.c1)(),{formatMessage:a}=(0,g.Z)(),{trackUsage:r}=(0,l.rS)(),d=Object.entries(Y.Z).map(([E,p])=>({key:E,title:p.home.title,content:e.createElement(l.Qj,{onClick:()=>r(p.home.trackingEvent),to:p.home.cta.target,endIcon:e.createElement(b.Z,null)},a(p.home.cta.title))})),H=d.map(E=>({isDone:Object.entries(t[E.key]).every(([,p])=>p),...E})).find(E=>!E.isDone)?.key,D=()=>{o(!0),r("didSkipGuidedtour")};return e.createElement(s.x,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(f.Z,{variant:"beta",as:"h2"},a({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(_,{sections:d,currentSectionKey:H})),e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(x.z,{variant:"tertiary",onClick:D},a({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))},te=t=>Object.entries(t).every(([,o])=>Object.entries(o).every(([,a])=>a));var ne=n(92686),ae=n(80902);const oe=n.p+"7e9af4fb7e723fcebf1f.svg";var le=n(36311),re=n(89776),se=n(76730),ie=n(4900);const de=n.p+"27d16aefee06412db90a.png",ce=n.p+"bb4d0d527bdfb161bc5a.svg",me=n.p+"bb3108f7fd1e6179bde1.svg",ue=c.default.a`
  text-decoration: none;
`,pe=(0,c.default)(s.x)`
  background-image: url(${({backgroundImage:t})=>t});
`,ge=(0,c.default)(m.k)`
  background: rgba(255, 255, 255, 0.3);
`,fe=()=>{const{formatMessage:t}=(0,g.Z)(),{trackUsage:o}=(0,l.rS)();return e.createElement(ue,{href:"https://cloud.strapi.io",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>{o("didClickOnTryStrapiCloudSection")}},e.createElement(m.k,{shadow:"tableShadow",hasRadius:!0,padding:6,background:"neutral0",position:"relative",gap:6},e.createElement(pe,{backgroundImage:de,hasRadius:!0,padding:3},e.createElement(ge,{width:(0,l.Q1)(32),height:(0,l.Q1)(32),justifyContent:"center",hasRadius:!0,alignItems:"center"},e.createElement("img",{src:me,alt:t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"})}))),e.createElement(m.k,{gap:1,direction:"column",alignItems:"start"},e.createElement(m.k,null,e.createElement(f.Z,{fontWeight:"semiBold",variant:"pi"},t({id:"app.components.BlockLink.cloud",defaultMessage:"Strapi Cloud"}))),e.createElement(f.Z,{textColor:"neutral600"},t({id:"app.components.BlockLink.cloud.content",defaultMessage:"A fully composable, and collaborative platform to boost your team velocity."})),e.createElement(s.x,{src:ce,position:"absolute",top:0,right:0,as:"img"}))))},W=c.default.a`
  text-decoration: none;
`,he=()=>{const{formatMessage:t}=(0,g.Z)(),{trackUsage:o}=(0,l.rS)(),a=r=>{o(r)};return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(fe,null),e.createElement(W,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonReadTheDocumentationSection")},e.createElement(l.Y_,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(le.Z,null),iconBackground:"primary100"})),e.createElement(W,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonCodeExampleSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(re.Z,null),iconBackground:"warning100"})),e.createElement(W,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonTutorialSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(se.Z,null),iconBackground:"secondary100"})),e.createElement(W,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>a("didClickonBlogSection")},e.createElement(l.Y_,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(ie.Z,null),iconBackground:"alternative100"})))};var z=n(29430);const Ee=(0,c.default)(f.Z)`
  word-break: break-word;
`,F=({hasCreatedContentType:t,onCreateCT:o})=>{const{formatMessage:a}=(0,g.Z)();return e.createElement("div",null,e.createElement(s.x,{paddingLeft:6,paddingBottom:10},e.createElement(m.k,{direction:"column",alignItems:"flex-start",gap:5},e.createElement(f.Z,{as:"h1",variant:"alpha"},a(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Ee,{textColor:"neutral600",variant:"epsilon"},a(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(z.r,{isExternal:!0,href:"https://strapi.io/blog"},a({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(x.z,{size:"L",onClick:o,endIcon:e.createElement(b.Z,null)},a({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};F.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},F.propTypes={hasCreatedContentType:i().bool,onCreateCT:i().func};const ve=F;var ye=n(94101),ke=n(77190),Ce=n(67008),Me=n(61193),Be=n(32765),Pe=n(13956),Se=n(10778),Te=n(62577);const Le=(0,c.default)(ke.Z)`
  path {
    fill: #7289da !important;
  }
`,xe=(0,c.default)(Ce.Z)`
  > path:first-child {
    fill: #ff4500;
  }
`,K=(0,c.default)(Me.Z)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,be=(0,c.default)(Be.Z)`
  path {
    fill: #1da1f2 !important;
  }
`,He=(0,c.default)(Pe.Z)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,De=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(Se.Z,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement(Le,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(xe,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(be,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(He,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(K,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(K,null),alt:"career"}],Oe=(0,c.default)(ye.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,Re=(0,c.default)(C.r)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,Ze=()=>{const{formatMessage:t}=(0,g.Z)(),{communityEdition:o}=(0,l.L7)(),a=[...De,{icon:e.createElement(K,null),link:o?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(s.x,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(s.x,{paddingBottom:7},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:5},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:3},e.createElement(f.Z,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(f.Z,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(z.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(Te.Z,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(Re,null,a.map(({icon:r,link:d,name:u})=>e.createElement(y.P,{col:6,s:12,key:u.id},e.createElement(Oe,{size:"L",startIcon:r,variant:"tertiary",href:d,isExternal:!0},t(u))))))},je=(0,c.default)(s.x)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,N=()=>{const{collectionTypes:t,singleTypes:o,isLoading:a}=(0,ne.G)(),{guidedTourState:r,isGuidedTourVisible:d,isSkipped:u}=(0,l.c1)(),H=!te(r)&&d&&!u,{push:D}=(0,L.k6)(),E=k=>{k.preventDefault(),D("/plugins/content-type-builder/content-types/create-content-type")},p=(0,e.useMemo)(()=>{const k=I=>I.filter($=>$.isDisplayed);return k(t).length>1||k(o).length>0},[t,o]);return a?e.createElement(l.dO,null):e.createElement(B.A,null,e.createElement(A,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},k=>e.createElement(P.q,{title:k[0]})),e.createElement(v.o,null,e.createElement(je,null,e.createElement("img",{alt:"","aria-hidden":!0,src:oe})),e.createElement(s.x,{padding:10},e.createElement(C.r,null,e.createElement(y.P,{col:8,s:12},e.createElement(ve,{onCreateCT:E,hasCreatedContentType:p}))),e.createElement(C.r,{gap:6},e.createElement(y.P,{col:8,s:12},H?e.createElement(ee,null):e.createElement(he,null)),e.createElement(y.P,{col:4,s:12},e.createElement(Ze,null))))))};function We(){const t=(0,ae.c)(N,async()=>(await n.e(8296).then(n.bind(n,66831))).HomePageEE);return t?e.createElement(t,null):null}const Ie=We},71590:(Q,M,n)=>{n.d(M,{A:()=>y});var e=n(85893),s=n(1565),B=n(16607);const v=(0,s.default)(B.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:l})=>l?"auto 1fr":"1fr"};
`,C=(0,s.default)(B.x)`
  overflow-x: hidden;
`,y=({sideNav:l,children:P})=>(0,e.jsxs)(v,{hasSideNav:Boolean(l),children:[l,(0,e.jsx)(C,{paddingBottom:10,children:P})]})},94101:(Q,M,n)=>{n.d(M,{Q:()=>g});var e=n(85893),s=n(67294),B=n(1565),v=n(62485),C=n(20501),y=n(53342),l=n(96987),P=n(10574);const R=(0,B.default)(C.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${v.sg}
    &:active {
      ${v.sg}
    }
  }

  &:hover {
    ${v.yP}
  }

  &:active {
    ${v.tB}
  }

  ${v.PD}
`,g=s.forwardRef(({variant:Z="default",startIcon:j,endIcon:S,disabled:T=!1,children:A,size:L="S",as:c=y.f,...m},f)=>{const x=L==="S"?2:"10px",b=4;return(0,e.jsxs)(R,{ref:f,"aria-disabled":T,size:L,variant:Z,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:x,paddingLeft:b,paddingRight:b,paddingTop:x,pointerEvents:T?"none":void 0,...m,as:c||y.f,children:[j&&(0,e.jsx)(l.k,{"aria-hidden":!0,children:j}),(0,e.jsx)(P.Z,{variant:L==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:A}),S&&(0,e.jsx)(l.k,{"aria-hidden":!0,children:S})]})});g.displayName="LinkButton"}}]);
