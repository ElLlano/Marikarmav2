"use strict";(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[349],{40784:(M,m,e)=>{e.d(m,{r:()=>E});var t=e(85893),a=e(16607),l=e(99168),i=e.n(l);function v(r,f,u){if(!r||!f||!u)return{display:"none"};const{x:n,y:s}=u;return{transform:`translate(${n}px, ${s}px)`}}const E=({renderItem:r})=>{const{itemType:f,isDragging:u,item:n,initialOffset:s,currentOffset:o,mouseOffset:w}=(0,l.useDragLayer)(d=>({item:d.getItem(),itemType:d.getItemType(),initialOffset:d.getInitialSourceClientOffset(),currentOffset:d.getSourceClientOffset(),isDragging:d.isDragging(),mouseOffset:d.getClientOffset()}));return u?(0,t.jsx)(a.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,t.jsx)(a.x,{style:v(s,o,w),children:r({type:f,item:n})})}):null}},75021:(M,m,e)=>{e.d(m,{q:()=>i});var t=e(67294),a=e(62853),l=e(88767);function i({enabled:v}={enabled:!0}){const{get:E}=(0,a.kY)(),{data:r,isError:f,isLoading:u}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:o}}=await E("/admin/license-limit-information");return o},{enabled:v}),n=t.useMemo(()=>r??{},[r]),s=t.useCallback(o=>(n?.features??[]).find(d=>d.name===o)?.options??{},[n?.features]);return{license:n,getFeature:s,isError:f,isLoading:u}}},43390:(M,m,e)=>{e.d(m,{eJ:()=>R,lx:()=>C,h4:()=>T,fC:()=>A});var t=e(67294),a=e(71590),l=e(40720),i=e(34726),v=e(90731),E=e(62853),r=e(97695),f=e(86896),u=e(40784),n=e(86978),s=e(96987),o=e(10574),w=e(58471),d=e(45697),h=e.n(d),y=e(1565);const S=(0,y.default)(s.k)`
  svg path {
    fill: ${({theme:O})=>O.colors.neutral600};
  }
`;function L({name:O}){return t.createElement(s.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,E.Q1)(300)},t.createElement(S,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(w.Z,{width:`${8/16}rem`})),t.createElement(o.Z,{fontWeight:"bold"},O))}L.propTypes={name:h().string.isRequired};function p({type:O,item:D}){switch(O){case n.uL.STAGE:return t.createElement(L,{...D});default:return null}}function C(){return t.createElement(u.r,{renderItem:p})}function A({children:O}){return t.createElement(a.A,null,t.createElement(l.o,{tabIndex:-1},t.createElement(i.D,null,O)))}function R({href:O}){const{formatMessage:D}=(0,f.Z)();return t.createElement(E.rU,{startIcon:t.createElement(r.Z,null),to:O},D({id:"global.back",defaultMessage:"Back"}))}function T({title:O,subtitle:D,navigationAction:P,primaryAction:W}){return t.createElement(t.Fragment,null,t.createElement(E.SL,{name:O}),t.createElement(v.T,{navigationAction:P,primaryAction:W,title:O,subtitle:D}))}},38705:(M,m,e)=>{e.d(m,{uT:()=>p,fC:()=>R,Dx:()=>L});var t=e(67294),a=e(10574),l=e(96987),i=e(74622),v=e(71543),E=e(16607),r=e(96208),f=e(94101),u=e(35771),n=e(45697),s=e.n(n),o=e(86896),w=e(1565);const d=e.p+"0cd5f8915b265d5b1856.png",h="limits-title",y="https://strapi.io/pricing-cloud",S="https://strapi.io/contact-sales";function L({children:T}){return t.createElement(a.Z,{variant:"alpha",id:h},T)}L.propTypes={children:s().node.isRequired};function p({children:T}){return t.createElement(a.Z,{variant:"omega"},T)}p.propTypes={children:s().node.isRequired};function C(){const{formatMessage:T}=(0,o.Z)();return t.createElement(l.k,{gap:2,paddingTop:4},t.createElement(f.Q,{variant:"default",isExternal:!0,href:y},T({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(f.Q,{variant:"tertiary",isExternal:!0,href:S},T({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const A=w.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:T})=>`-${T.spaces[7]}`};
  margin-top: ${({theme:T})=>`-${T.spaces[7]}`};
  width: 360px;
`;function R({children:T,isOpen:O,onClose:D}){const{formatMessage:P}=(0,o.Z)();return O?t.createElement(i.P,{labelledBy:h},t.createElement(v.f,null,t.createElement(l.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(l.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},T,t.createElement(C,null)),t.createElement(l.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(A,{src:d,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(E.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(r.h,{icon:t.createElement(u.Z,null),"aria-label":P({id:"global.close",defaultMessage:"Close"}),onClick:D})))))):null}R.defaultProps={isOpen:!1},R.propTypes={children:s().node.isRequired,isOpen:s().bool,onClose:s().func.isRequired}},86978:(M,m,e)=>{e.d(m,{$k:()=>d,Ef:()=>p,FT:()=>S,Nj:()=>o,Ot:()=>n,QM:()=>f,VS:()=>h,_X:()=>C,bc:()=>s,gu:()=>l,k_:()=>w,lv:()=>y,qZ:()=>r,rg:()=>v,sN:()=>a,uL:()=>L,x4:()=>u,yq:()=>i,zn:()=>E});var t=e(12255);const a="settings_review-workflows",l="Settings/Review_Workflows/RESET_WORKFLOW",i="Settings/Review_Workflows/SET_CONTENT_TYPES",v="Settings/Review_Workflows/SET_IS_LOADING",E="Settings/Review_Workflows/SET_ROLES",r="Settings/Review_Workflows/SET_WORKFLOW",f="Settings/Review_Workflows/SET_WORKFLOWS",u="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",n="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",s="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",o="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",w="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",d="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",h="Settings/Review_Workflows/WORKFLOW_UPDATE",y={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},S=t.W.colors.primary600,L={STAGE:"stage"},p="numberOfWorkflows",C="stagesPerWorkflow"},52258:(M,m,e)=>{e.d(m,{n:()=>i});var t=e(67294),a=e(62853),l=e(88767);function i(v={}){const{get:E}=(0,a.kY)(),{id:r="",...f}=v,u={populate:"stages"},{data:n,isLoading:s,status:o,refetch:w}=(0,l.useQuery)(["review-workflows","workflows",r],async()=>(await E(`/admin/review-workflows/workflows/${r}`,{params:{...u,...f}})).data),d=t.useMemo(()=>r&&n?.data?[n.data]:Array.isArray(n?.data)?n.data:[],[n?.data,r]);return{meta:t.useMemo(()=>n?.meta??{},[n?.meta]),workflows:d,isLoading:s,status:o,refetch:w}}},26259:(M,m,e)=>{e.r(m),e.d(m,{default:()=>z});var t=e(67294),a=e(62853),l=e(86706),i=e(36364),v=e(96987),E=e(74863),r=e(5923),f=e(38454),u=e(3547),n=e(29299),s=e(69398),o=e(10574),w=e(22304),d=e(35752),h=e(96208),y=e(83598),S=e(2382),L=e(54425),p=e(86896),C=e(88767),A=e(16550),R=e(1565),T=e(92686),O=e(75021),D=e(43390),P=e(38705),W=e(86978),H=e(52258);const V=(0,R.default)(a.rU)`
  align-items: center;
  height: ${(0,a.Q1)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:c})=>`${c.spaces[2]}}`};
  width: ${(0,a.Q1)(32)};

  svg {
    height: ${(0,a.Q1)(12)};
    width: ${(0,a.Q1)(12)};

    path {
      fill: ${({theme:c})=>c.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:c})=>c.colors.neutral800};
      }
    }
  }
`;function X(){const{formatMessage:c}=(0,p.Z)(),{push:j}=(0,A.k6)(),{collectionTypes:J,singleTypes:b,isLoading:_}=(0,T.G)(),{meta:B,workflows:$,isLoading:N,refetch:q}=(0,H.n)(),[F,k]=t.useState(null),[ee,x]=t.useState(!1),{del:te}=(0,a.kY)(),{formatAPIError:ne}=(0,a.So)(),G=(0,a.lm)(),{getFeature:ae,isLoading:Z}=(0,O.q)(),{trackUsage:Q}=(0,a.rS)(),se=(0,l.v9)(i._),{allowedActions:{canCreate:Y,canDelete:oe}}=(0,a.ss)(se.settings["review-workflows"]),I=ae("review-workflows"),{mutateAsync:le,isLoading:re}=(0,C.useMutation)(async({workflowId:g,stages:K})=>{const{data:{data:U}}=await te(`/admin/review-workflows/workflows/${g}`,{data:K});return U},{onSuccess(){G({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}}),ie=g=>[...J,...b].find(U=>U.uid===g).info.displayName,de=g=>{k(g)},ce=()=>{k(null)},Ee=async()=>{try{const g=await le({workflowId:F});return await q(),k(null),g}catch(g){return G({type:"warning",message:ne(g)}),null}};return t.useEffect(()=>{!N&&!Z&&I?.[W.Ef]&&B?.workflowCount>parseInt(I[W.Ef],10)&&x(!0)},[Z,N,I,B?.workflowCount,B.workflowsTotal]),t.createElement(t.Fragment,null,t.createElement(D.h4,{primaryAction:Y&&t.createElement(a.Qj,{startIcon:t.createElement(y.Z,null),size:"S",to:"/settings/review-workflows/create",onClick:g=>{I?.[W.Ef]&&B?.workflowCount>=parseInt(I[W.Ef],10)?(g.preventDefault(),x(!0)):Q("willCreateWorkflow")}},c({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),subtitle:c({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:c({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),t.createElement(D.fC,null,N||_?t.createElement(v.k,{justifyContent:"center"},t.createElement(E.a,null,c({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"}))):t.createElement(r.i,{colCount:3,footer:Y&&t.createElement(f.c,{icon:t.createElement(y.Z,null),onClick:()=>{I?.[W.Ef]&&B?.workflowCount>=parseInt(I[W.Ef],10)?x(!0):(j("/settings/review-workflows/create"),Q("willCreateWorkflow"))}},c({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})),rowCount:1},t.createElement(u.h,null,t.createElement(n.Tr,null,t.createElement(s.Th,null,t.createElement(o.Z,{variant:"sigma"},c({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}))),t.createElement(s.Th,null,t.createElement(o.Z,{variant:"sigma"},c({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}))),t.createElement(s.Th,null,t.createElement(o.Z,{variant:"sigma"},c({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}))),t.createElement(s.Th,null,t.createElement(w.T,null,c({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"}))))),t.createElement(d.p,null,$.map(g=>t.createElement(n.Tr,{...(0,a.X7)({fn(K){K.target.nodeName!=="BUTTON"&&j(`/settings/review-workflows/${g.id}`)}}),key:`workflow-${g.id}`},t.createElement(s.Td,{width:(0,a.Q1)(250)},t.createElement(o.Z,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0},g.name)),t.createElement(s.Td,null,t.createElement(o.Z,{textColor:"neutral800"},g.stages.length)),t.createElement(s.Td,null,t.createElement(o.Z,{textColor:"neutral800"},(g?.contentTypes??[]).map(ie).join(", "))),t.createElement(s.Td,null,t.createElement(v.k,{alignItems:"center",justifyContent:"end"},t.createElement(V,{to:`/settings/review-workflows/${g.id}`,"aria-label":c({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:g.name})},t.createElement(S.Z,null)),$.length>1&&oe&&t.createElement(h.h,{"aria-label":c({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:t.createElement(L.Z,null),noBorder:!0,onClick:()=>{de(g.id)}}))))))),t.createElement(a.QH,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:re,isOpen:!!F,onToggleDialog:ce,onConfirm:Ee}),t.createElement(P.fC,{isOpen:ee,onClose:()=>x(!1)},t.createElement(P.Dx,null,c({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})),t.createElement(P.uT,null,c({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})))))}function z(){const c=(0,l.v9)(i._);return t.createElement(a.O4,{permissions:c.settings["review-workflows"].main},t.createElement(X,null))}},38454:(M,m,e)=>{e.d(m,{c:()=>u});var t=e(85893),a=e(1565),l=e(16607),i=e(26910),v=e(96987),E=e(10574);const r=(0,a.default)(l.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:n})=>n.colors.primary600};
  }
`,f=(0,a.default)(l.x)`
  border-radius: 0 0 ${({theme:n})=>n.borderRadius} ${({theme:n})=>n.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,u=({children:n,icon:s,...o})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(i.i,{}),(0,t.jsx)(f,{as:"button",background:"primary100",padding:5,...o,children:(0,t.jsxs)(v.k,{children:[(0,t.jsx)(r,{"aria-hidden":!0,background:"primary200",children:s}),(0,t.jsx)(l.x,{paddingLeft:3,children:(0,t.jsx)(E.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:n})})]})})]})},94101:(M,m,e)=>{e.d(m,{Q:()=>n});var t=e(85893),a=e(67294),l=e(1565),i=e(62485),v=e(20501),E=e(53342),r=e(96987),f=e(10574);const u=(0,l.default)(v.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${i.sg}
    &:active {
      ${i.sg}
    }
  }

  &:hover {
    ${i.yP}
  }

  &:active {
    ${i.tB}
  }

  ${i.PD}
`,n=a.forwardRef(({variant:s="default",startIcon:o,endIcon:w,disabled:d=!1,children:h,size:y="S",as:S=E.f,...L},p)=>{const C=y==="S"?2:"10px",A=4;return(0,t.jsxs)(u,{ref:p,"aria-disabled":d,size:y,variant:s,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:C,paddingLeft:A,paddingRight:A,paddingTop:C,pointerEvents:d?"none":void 0,...L,as:S||E.f,children:[o&&(0,t.jsx)(r.k,{"aria-hidden":!0,children:o}),(0,t.jsx)(f.Z,{variant:y==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:h}),w&&(0,t.jsx)(r.k,{"aria-hidden":!0,children:w})]})});n.displayName="LinkButton"}}]);
