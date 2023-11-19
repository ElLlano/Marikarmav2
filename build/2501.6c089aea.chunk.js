"use strict";(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[2501],{84409:(D,d,e)=>{e.d(d,{p:()=>o});var t=e(67294),u=e(62853),m=e(88767);const o=(l={})=>{const{get:r}=(0,u.kY)(),{data:E,isLoading:a}=(0,m.useQuery)(["ee","providers"],async()=>{const{data:g}=await r("/admin/providers");return g},l);return{providers:t.useMemo(()=>E??[],[E]),isLoading:a}}},80090:(D,d,e)=>{e.d(d,{Z:()=>f});var t=e(67294),u=e(96987),m=e(81315),o=e(10574),l=e(31988),r=e(6498),E=e(45697),a=e.n(E),p=e(86896),g=e(73727),v=e(1565);const h=v.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,v.default)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(m.u,{label:n.displayName},t.createElement(h,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.Z,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const P=({providers:n,displayAllProviders:M})=>{const{formatMessage:y}=(0,p.Z)();return M?t.createElement(l.r,{gap:4},n.map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(i,{provider:s})))):n.length>2&&!M?t.createElement(l.r,{gap:4},n.slice(0,2).map(s=>t.createElement(r.P,{key:s.uid,col:4},t.createElement(i,{provider:s}))),t.createElement(r.P,{col:4},t.createElement(m.u,{label:y({id:"global.see-more"})},t.createElement(h,{as:g.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(s=>t.createElement(i,{key:s.uid,provider:s})))};P.defaultProps={displayAllProviders:!0},P.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const f=P},52501:(D,d,e)=>{e.r(d),e.d(d,{FORMS:()=>s});var t=e(67294),u=e(26910),m=e(40720),o=e(16607),l=e(10574),r=e(96987),E=e(74863),a=e(12473),p=e(62853),g=e(86896),v=e(16550),h=e(1565),O=e(43847),i=e(50745),P=e(84409),f=e(80090);const n=(0,h.default)(u.i)`
  flex: 1;
`,s={providers:{Component:()=>{const{push:R}=(0,v.k6)(),{formatMessage:c}=(0,g.Z)(),{isLoading:C,providers:A}=(0,P.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),T=()=>{R("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!C&&A.length===0?t.createElement(v.l_,{to:"/auth/login"}):t.createElement(i.ZP,null,t.createElement(m.o,null,t.createElement(i.bU,null,t.createElement(i.sg,null,t.createElement(O.T,null),t.createElement(o.x,{paddingTop:6,paddingBottom:1},t.createElement(l.Z,{as:"h1",variant:"alpha"},c({id:"Auth.form.welcome.title"}))),t.createElement(o.x,{paddingBottom:7},t.createElement(l.Z,{variant:"epsilon",textColor:"neutral600"},c({id:"Auth.login.sso.subtitle"})))),t.createElement(r.k,{direction:"column",alignItems:"stretch",gap:7},C?t.createElement(r.k,{justifyContent:"center"},t.createElement(E.a,null,c({id:"Auth.login.sso.loading"}))):t.createElement(f.Z,{providers:A}),t.createElement(r.k,null,t.createElement(n,null),t.createElement(o.x,{paddingLeft:3,paddingRight:3},t.createElement(l.Z,{variant:"sigma",textColor:"neutral600"},c({id:"or"}))),t.createElement(n,null)),t.createElement(a.z,{fullWidth:!0,size:"L",onClick:T},c({id:"Auth.form.button.login.strapi"})))),t.createElement(r.k,{justifyContent:"center"},t.createElement(o.x,{paddingTop:4},t.createElement(p.rU,{to:"/auth/forgot-password"},t.createElement(l.Z,{variant:"pi"},c({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}}}]);
