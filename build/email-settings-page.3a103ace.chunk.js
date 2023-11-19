"use strict";(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[1495],{91043:(b,u,t)=>{t.r(u),t.d(u,{default:()=>F});var e=t(67294),r=t(40720),h=t(90731),p=t(34726),g=t(96987),S=t(16607),d=t(10574),f=t(31988),m=t(6498),x=t(38670),C=t(59586),L=t(40933),n=t(12473),a=t(62853),o=t(24116),l=t(86896),i=t(88767),c=t(1565),y=t(31350),M=t(87561);const j=M.Ry().shape({email:M.Z_().email(a.I0.email).required(a.I0.required)}),Z=c.default.a`
  color: ${({theme:T})=>T.colors.primary600};
`,z=()=>e.createElement(a.O4,{permissions:y._.settings},e.createElement(W,null)),W=()=>{const T=(0,a.lm)(),{formatMessage:s}=(0,l.Z)(),{lockApp:k,unlockApp:A}=(0,a.o1)(),{get:H,post:K}=(0,a.kY)(),{data:R,isLoading:P}=(0,i.useQuery)(["email","settings"],async()=>{const{data:{config:E}}=await H("/email/settings");return E}),B=(0,i.useMutation)(E=>K("/email/test",E),{onError(){T({type:"warning",message:s({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:v})})},onSuccess(){T({type:"success",message:s({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:v})})}},{retry:!1});(0,a.go)();const[O,U]=e.useState({}),[v,V]=e.useState(""),[$,D]=e.useState(!1);e.useEffect(()=>{j.validate({email:v},{abortEarly:!1}).then(()=>D(!0)).catch(()=>D(!1))},[v]);const N=E=>{V(()=>E.target.value)},G=async E=>{E.preventDefault();try{await j.validate({email:v},{abortEarly:!1})}catch(J){U((0,a.CJ)(J))}k(),B.mutate({to:v}),A()};return e.createElement(r.o,{labelledBy:"title","aria-busy":P||B.isLoading},e.createElement(a.SL,{name:s({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})}),e.createElement(h.T,{id:"title",title:s({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:s({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),e.createElement(p.D,null,P?e.createElement(a.dO,null):e.createElement("form",{onSubmit:G},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:7},e.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(g.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(d.Z,{variant:"delta",as:"h2"},s({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})),e.createElement(d.Z,null,s({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:e.createElement(Z,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer"},s({id:"email.link",defaultMessage:"Link"}))}))),e.createElement(f.r,{gap:5},e.createElement(m.P,{col:6,s:12},e.createElement(x.o,{name:"shipper-email",label:s({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:R.settings.defaultFrom})),e.createElement(m.P,{col:6,s:12},e.createElement(x.o,{name:"response-email",label:s({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,onChange:()=>{},value:R.settings.defaultReplyTo})),e.createElement(m.P,{col:6,s:12},e.createElement(C.P,{name:"email-provider",label:s({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"}),disabled:!0,onChange:()=>{},value:R.provider},e.createElement(L.W,{value:R.provider},R.provider)))))),e.createElement(g.k,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(d.Z,{variant:"delta",as:"h2"},s({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})),e.createElement(f.r,{gap:5,alignItems:"end"},e.createElement(m.P,{col:6,s:12},e.createElement(x.o,{id:"test-address-input",name:"test-address",onChange:N,label:s({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"}),value:v,error:O.email?.id&&s({id:`email.${O.email?.id}`,defaultMessage:"This is an invalid email"}),placeholder:s({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})),e.createElement(m.P,{col:7,s:12},e.createElement(n.z,{loading:B.isLoading,disabled:!$,type:"submit",startIcon:e.createElement(o.Z,null)},s({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})))))))))},F=z},34726:(b,u,t)=>{t.d(u,{D:()=>h});var e=t(85893),r=t(16607);const h=({children:p})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:p})},90731:(b,u,t)=>{t.d(u,{T:()=>x});var e=t(85893),r=t(67294),h=t(1565);const p=n=>{const a=(0,r.useRef)(null),[o,l]=(0,r.useState)(!0),i=([c])=>{l(c.isIntersecting)};return(0,r.useEffect)(()=>{const c=a.current,y=new IntersectionObserver(i,n);return c&&y.observe(a.current),()=>{c&&y.disconnect()}},[a,n]),[a,o]};var g=t(79698);const S=(n,a)=>{const o=(0,g.W)(a);(0,r.useLayoutEffect)(()=>{const l=new ResizeObserver(o);return Array.isArray(n)?n.forEach(i=>{i.current&&l.observe(i.current)}):n.current&&l.observe(n.current),()=>{l.disconnect()}},[n,o])};var d=t(16607),f=t(96987),m=t(10574);const x=n=>{const a=(0,r.useRef)(null),[o,l]=(0,r.useState)(null),[i,c]=p({root:null,rootMargin:"0px",threshold:0});return S(i,()=>{i.current&&l(i.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{a.current&&l(a.current.getBoundingClientRect())},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:o?.height},ref:i,children:c&&(0,e.jsx)(L,{ref:a,...n})}),!c&&(0,e.jsx)(L,{...n,sticky:!0,width:o?.width})]})};x.displayName="HeaderLayout";const C=(0,h.default)(d.x)`
  width: ${({width:n})=>n?`${n/16}rem`:void 0};
  z-index: ${({theme:n})=>n.zIndices[1]};
`,L=r.forwardRef(({navigationAction:n,primaryAction:a,secondaryAction:o,subtitle:l,title:i,sticky:c,width:y,...M},I)=>{const j=typeof l=="string";return c?(0,e.jsx)(C,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:y,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{children:[n&&(0,e.jsx)(d.x,{paddingRight:3,children:n}),(0,e.jsxs)(d.x,{children:[(0,e.jsx)(m.Z,{variant:"beta",as:"h1",...M,children:i}),j?(0,e.jsx)(m.Z,{variant:"pi",textColor:"neutral600",children:l}):l]}),o?(0,e.jsx)(d.x,{paddingLeft:4,children:o}):null]}),(0,e.jsx)(f.k,{children:a?(0,e.jsx)(d.x,{paddingLeft:2,children:a}):void 0})]})}):(0,e.jsxs)(d.x,{ref:I,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:n?6:8,background:"neutral100","data-strapi-header":!0,children:[n?(0,e.jsx)(d.x,{paddingBottom:2,children:n}):null,(0,e.jsxs)(f.k,{justifyContent:"space-between",children:[(0,e.jsxs)(f.k,{minWidth:0,children:[(0,e.jsx)(m.Z,{as:"h1",variant:"alpha",...M,children:i}),o?(0,e.jsx)(d.x,{paddingLeft:4,children:o}):null]}),a]}),j?(0,e.jsx)(m.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:l}):l]})})},40720:(b,u,t)=>{t.d(u,{o:()=>g});var e=t(85893),r=t(1565),h=t(16607);const p=(0,r.default)(h.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,g=({labelledBy:S="main-content-title",...d})=>(0,e.jsx)(p,{"aria-labelledby":S,as:"main",id:"main-content",tabIndex:-1,...d})}}]);