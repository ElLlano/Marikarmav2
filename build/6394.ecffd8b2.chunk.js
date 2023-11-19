"use strict";(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[6394],{84409:(R,o,e)=>{e.d(o,{p:()=>d});var t=e(67294),u=e(62853),_=e(88767);const d=(m={})=>{const{get:E}=(0,u.kY)(),{data:n,isLoading:s}=(0,_.useQuery)(["ee","providers"],async()=>{const{data:P}=await E("/admin/providers");return P},m);return{providers:t.useMemo(()=>n??[],[n]),isLoading:s}}},76394:(R,o,e)=>{e.r(o),e.d(o,{LoginEE:()=>l});var t=e(67294),u=e(26910),_=e(16607),d=e(96987),m=e(10574),E=e(45697),n=e.n(E),s=e(86896),D=e(1565),P=e(50745),O=e(31640),M=e(84409),v=e(80090);const i=(0,D.default)(u.i)`
  flex: 1;
`,l=c=>{const{formatMessage:a}=(0,s.Z)(),{isLoading:p,providers:g}=(0,M.p)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!p&&g.length===0?t.createElement(P.ZP,null,t.createElement(O.Z,{...c})):t.createElement(P.ZP,null,t.createElement(O.Z,{...c},t.createElement(_.x,{paddingTop:7},t.createElement(d.k,{direction:"column",alignItems:"stretch",gap:7},t.createElement(d.k,null,t.createElement(i,null),t.createElement(_.x,{paddingLeft:3,paddingRight:3},t.createElement(m.Z,{variant:"sigma",textColor:"neutral600"},a({id:"Auth.login.sso.divider"}))),t.createElement(i,null)),t.createElement(v.Z,{providers:g,displayAllProviders:!1})))))};l.defaultProps={onSubmit:c=>c.preventDefault(),requestError:null},l.propTypes={formErrors:n().object.isRequired,modifiedData:n().object.isRequired,onChange:n().func.isRequired,onSubmit:n().func,requestError:n().object}},80090:(R,o,e)=>{e.d(o,{Z:()=>c});var t=e(67294),u=e(96987),_=e(81315),d=e(10574),m=e(31988),E=e(6498),n=e(45697),s=e.n(n),D=e(86896),P=e(73727),O=e(1565);const M=O.default.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:a})=>a.colors.neutral600};
`,v=(0,O.default)(u.k)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:a})=>a.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:a})=>a.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:a})=>a.spaces[2]};
  }
`,i=({provider:a})=>t.createElement(_.u,{label:a.displayName},t.createElement(M,{href:`${window.strapi.backendURL}/admin/connect/${a.uid}`},a.icon?t.createElement("img",{src:a.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(d.Z,null,a.displayName)));i.propTypes={provider:s().shape({icon:s().string,displayName:s().string.isRequired,uid:s().string.isRequired}).isRequired};const l=({providers:a,displayAllProviders:p})=>{const{formatMessage:g}=(0,D.Z)();return p?t.createElement(m.r,{gap:4},a.map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r})))):a.length>2&&!p?t.createElement(m.r,{gap:4},a.slice(0,2).map(r=>t.createElement(E.P,{key:r.uid,col:4},t.createElement(i,{provider:r}))),t.createElement(E.P,{col:4},t.createElement(_.u,{label:g({id:"global.see-more"})},t.createElement(M,{as:P.rU,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(v,{justifyContent:"center"},a.map(r=>t.createElement(i,{key:r.uid,provider:r})))};l.defaultProps={displayAllProviders:!0},l.propTypes={providers:s().arrayOf(s().object).isRequired,displayAllProviders:s().bool};const c=l}}]);
