(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[750],{51754:(S,v,e)=>{"use strict";e.d(v,{F:()=>g});var t=e(67294),o=e(62853),n=e(86896),d=e(88767);const g=(r={},f={})=>{const{id:l="",...i}=r,{get:a}=(0,o.kY)(),{locale:u}=(0,n.Z)(),p=(0,o.Xe)(u,{sensitivity:"base"}),{data:c,error:m,isError:s,isLoading:h,refetch:O}=(0,d.useQuery)(["roles",l,i],async()=>{const{data:R}=await a(`/admin/roles/${l??""}`,{params:i});return R},f);return{roles:t.useMemo(()=>{let R=[];return l&&c?R=[c.data]:Array.isArray(c?.data)&&(R=c.data),[...R].sort((w,D)=>p.compare(w.name,D.name))},[c,l,p]),error:m,isError:s,isLoading:h,refetch:O}}},79194:(S,v,e)=>{"use strict";e.d(v,{v:()=>n});var t=e(67294),o=e(86706);function n(d,g){const r=(0,o.oR)();(0,t.useEffect)(()=>{r.injectReducer(d,g)},[r,d,g])}},75021:(S,v,e)=>{"use strict";e.d(v,{q:()=>d});var t=e(67294),o=e(62853),n=e(88767);function d({enabled:g}={enabled:!0}){const{get:r}=(0,o.kY)(),{data:f,isError:l,isLoading:i}=(0,n.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:p}}=await r("/admin/license-limit-information");return p},{enabled:g}),a=t.useMemo(()=>f??{},[f]),u=t.useCallback(p=>(a?.features??[]).find(m=>m.name===p)?.options??{},[a?.features]);return{license:a,getFeature:u,isError:l,isLoading:i}}},11984:(S,v,e)=>{"use strict";e.d(v,{CI:()=>r,ES:()=>o,FP:()=>i,Js:()=>u,Lk:()=>c,Mu:()=>l,PP:()=>d,Pz:()=>p,_V:()=>g,fC:()=>n,rI:()=>a,wt:()=>m,xn:()=>f});var t=e(86978);function o(s){return{type:t.bc,payload:{id:s}}}function n({workflow:s}){return{type:t.qZ,payload:s}}function d({workflows:s}){return{type:t.QM,payload:s}}function g(s){return{type:t.x4,payload:{stageId:s}}}function r(s={}){return{type:t.Ot,payload:s}}function f(s,h){return{type:t.Nj,payload:{stageId:s,...h}}}function l(s){return{type:t.k_,payload:s}}function i(s,h){return{type:t.$k,payload:{newIndex:h,oldIndex:s}}}function a(s){return{type:t.VS,payload:s}}function u(){return{type:t.gu}}function p(s){return{type:t.yq,payload:s}}function c(s){return{type:t.zn,payload:s}}function m(s){return{type:t.rg,payload:s}}},43390:(S,v,e)=>{"use strict";e.d(v,{eJ:()=>P,lx:()=>w,h4:()=>C,fC:()=>D});var t=e(67294),o=e(71590),n=e(40720),d=e(34726),g=e(90731),r=e(62853),f=e(97695),l=e(86896),i=e(40784),a=e(86978),u=e(96987),p=e(10574),c=e(58471),m=e(45697),s=e.n(m),h=e(1565);const O=(0,h.default)(u.k)`
  svg path {
    fill: ${({theme:T})=>T.colors.neutral600};
  }
`;function A({name:T}){return t.createElement(u.k,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,r.Q1)(300)},t.createElement(O,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6},t.createElement(c.Z,{width:`${8/16}rem`})),t.createElement(p.Z,{fontWeight:"bold"},T))}A.propTypes={name:s().string.isRequired};function R({type:T,item:W}){switch(T){case a.uL.STAGE:return t.createElement(A,{...W});default:return null}}function w(){return t.createElement(i.r,{renderItem:R})}function D({children:T}){return t.createElement(o.A,null,t.createElement(n.o,{tabIndex:-1},t.createElement(d.D,null,T)))}function P({href:T}){const{formatMessage:W}=(0,l.Z)();return t.createElement(r.rU,{startIcon:t.createElement(f.Z,null),to:T},W({id:"global.back",defaultMessage:"Back"}))}function C({title:T,subtitle:W,navigationAction:x,primaryAction:B}){return t.createElement(t.Fragment,null,t.createElement(r.SL,{name:T}),t.createElement(g.T,{navigationAction:x,primaryAction:B,title:T,subtitle:W}))}},38705:(S,v,e)=>{"use strict";e.d(v,{uT:()=>R,fC:()=>P,Dx:()=>A});var t=e(67294),o=e(10574),n=e(96987),d=e(74622),g=e(71543),r=e(16607),f=e(96208),l=e(94101),i=e(35771),a=e(45697),u=e.n(a),p=e(86896),c=e(1565);const m=e.p+"0cd5f8915b265d5b1856.png",s="limits-title",h="https://strapi.io/pricing-cloud",O="https://strapi.io/contact-sales";function A({children:C}){return t.createElement(o.Z,{variant:"alpha",id:s},C)}A.propTypes={children:u().node.isRequired};function R({children:C}){return t.createElement(o.Z,{variant:"omega"},C)}R.propTypes={children:u().node.isRequired};function w(){const{formatMessage:C}=(0,p.Z)();return t.createElement(n.k,{gap:2,paddingTop:4},t.createElement(l.Q,{variant:"default",isExternal:!0,href:h},C({id:"Settings.review-workflows.limit.cta.learn",defaultMessage:"Learn more"})),t.createElement(l.Q,{variant:"tertiary",isExternal:!0,href:O},C({id:"Settings.review-workflows.limit.cta.sales",defaultMessage:"Contact Sales"})))}const D=c.default.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:C})=>`-${C.spaces[7]}`};
  margin-top: ${({theme:C})=>`-${C.spaces[7]}`};
  width: 360px;
`;function P({children:C,isOpen:T,onClose:W}){const{formatMessage:x}=(0,p.Z)();return T?t.createElement(d.P,{labelledBy:s},t.createElement(g.f,null,t.createElement(n.k,{gap:2,paddingLeft:7,position:"relative"},t.createElement(n.k,{alignItems:"start",direction:"column",gap:2,width:"60%"},C,t.createElement(w,null)),t.createElement(n.k,{justifyContent:"end",height:"100%",width:"40%"},t.createElement(D,{src:m,"aria-hidden":!0,alt:"",loading:"lazy"}),t.createElement(r.x,{display:"flex",position:"absolute",right:0,top:0},t.createElement(f.h,{icon:t.createElement(i.Z,null),"aria-label":x({id:"global.close",defaultMessage:"Close"}),onClick:W})))))):null}P.defaultProps={isOpen:!1},P.propTypes={children:u().node.isRequired,isOpen:u().bool,onClose:u().func.isRequired}},68997:(S,v,e)=>{"use strict";e.d(v,{U:()=>oe});var t=e(67294),o=e(16607),n=e(96987),d=e(62853),g=e(45697),r=e.n(g),f=e(86896),l=e(86706),i=e(1565),a=e(11984),u=e(10574),p=e(45196);const c=(0,i.default)(p.Z)`
  > circle {
    fill: ${({theme:E})=>E.colors.neutral150};
  }
  > path {
    fill: ${({theme:E})=>E.colors.neutral600};
  }
`,m=(0,i.default)(o.x)`
  border-radius: 26px;

  svg {
    height: ${({theme:E})=>E.spaces[6]};
    width: ${({theme:E})=>E.spaces[6]};

    > path {
      fill: ${({theme:E})=>E.colors.neutral600};
    }
  }

  &:hover {
    color: ${({theme:E})=>E.colors.primary600} !important;
    ${u.Z} {
      color: ${({theme:E})=>E.colors.primary600} !important;
    }

    ${c} {
      > circle {
        fill: ${({theme:E})=>E.colors.primary600};
      }
      > path {
        fill: ${({theme:E})=>E.colors.neutral100};
      }
    }
  }

  &:active {
    ${u.Z} {
      color: ${({theme:E})=>E.colors.primary600};
    }

    ${c} {
      > circle {
        fill: ${({theme:E})=>E.colors.primary600};
      }
      > path {
        fill: ${({theme:E})=>E.colors.neutral100};
      }
    }
  }
`;function s({children:E,...$}){return t.createElement(m,{as:"button",background:"neutral0",border:"neutral150",paddingBottom:3,paddingLeft:4,paddingRight:4,paddingTop:3,shadow:"filterShadow",...$},t.createElement(n.k,{gap:2},t.createElement(c,{"aria-hidden":!0}),t.createElement(u.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral500"},E)))}s.propTypes={children:r().node.isRequired};var h=e(82832),O=e(96208),A=e(22304),R=e(63122),w=e(1744),D=e(68889),P=e(31988),C=e(6498),T=e(38670),W=e(90090),x=e(52575),B=e(40563),G=e(79823),z=e(62873),U=e(43838),K=e(41054),V=e(61080),J=e(21440),M=e(21892),b=e(86978),Q=e(65649),k=e(5318);const _=(0,i.default)(h.ML)`
  padding-left: ${({theme:E})=>E.spaces[7]};
`,q=(0,i.default)(n.k)`
  > * {
    flex-grow: 1;
  }
`,Ee=(0,i.default)(x.sN)`
  color: ${({theme:E})=>E.colors.danger600};
`,ve=(0,i.default)(B.xz)`
  :hover,
  :focus {
    background-color: ${({theme:E})=>E.colors.neutral100};
  }

  > span {
    font-size: 0;
  }
`,ye=(0,i.default)(O.h)`
  align-items: center;
  border-radius: ${({theme:E})=>E.borderRadius};
  display: flex;
  justify-content: center;

  :hover,
  :focus {
    background-color: ${({theme:E})=>E.colors.neutral100};
  }

  svg {
    height: auto;
    width: ${({theme:E})=>E.spaces[3]}};
  }
`,he=(0,k.s)();function Se(){return t.createElement(o.x,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",display:"block",hasRadius:!0,padding:6,shadow:"tableShadow"})}function de({id:E,index:$,canDelete:F,canReorder:re,canUpdate:N,isOpen:se=!1,stagesCount:Y}){const X=y=>`${y+1} of ${Y}`,ee=y=>{te(I({id:"dnd.grab-item",defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:j.value,position:X(y)}))},Oe=y=>{te(I({id:"dnd.drop-item",defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:j.value,position:X(y)}))},Me=()=>{te(I({id:"dnd.cancel-item",defaultMessage:"{item}, dropped. Re-order cancelled."},{item:j.value}))},we=(y,L)=>{te(I({id:"dnd.reorder",defaultMessage:"{item}, moved. New position in list: {position}."},{item:j.value,position:X(y)})),Z((0,a.FP)(L,y))},Ce=()=>{ie(!0)},[ce,te]=t.useState(null),{formatMessage:I}=(0,f.Z)(),{trackUsage:Re}=(0,d.rS)(),Z=(0,l.I0)(),Ae=(0,d.lm)(),[le,Pe]=t.useState(se),[De,ie]=t.useState(!1),[j,ue,We]=(0,K.U$)(`stages.${$}.name`),[ae,me,Ie]=(0,K.U$)(`stages.${$}.color`),[H,ge,xe]=(0,K.U$)(`stages.${$}.permissions`),Le=(0,l.v9)(Q.g$),[{handlerId:ke,isDragging:be,handleKeyDown:Be},$e,Ue,Ne,pe]=(0,J.Y9)(re,{index:$,item:{name:j.value},onGrabItem:ee,onDropItem:Oe,onMoveItem:we,onCancel:Me,type:b.uL.STAGE}),Ke=(0,M.FE)($e,Ue),je=he.map(({hex:y,name:L})=>({value:y,label:I({id:"Settings.review-workflows.stage.color.name",defaultMessage:"{name}"},{name:L}),color:y})),{themeColorName:Fe}=(0,k.k)(ae.value)??{},fe=Le.filter(y=>y.code!=="strapi-super-admin");return t.useEffect(()=>{pe((0,V.rX)(),{captureDraggingState:!1})},[pe,$]),t.createElement(o.x,{ref:Ke},ce&&t.createElement(A.T,{"aria-live":"assertive"},ce),be?t.createElement(Se,null):t.createElement(R.U,{size:"S",variant:"primary",onToggle:()=>{Pe(!le),le||Re("willEditStage")},expanded:le,shadow:"tableShadow",error:ue.error??me?.error??ge?.error??!1,hasErrorMessage:!1},t.createElement(w.B,{title:j.value,togglePosition:"left",action:(F||N)&&t.createElement(n.k,null,t.createElement(B.fC,null,t.createElement(ve,{size:"S",endIcon:null,paddingLeft:2,paddingRight:2},t.createElement(G.Z,{"aria-hidden":!0,focusable:!1}),t.createElement(A.T,{as:"span"},I({id:"[tbdb].components.DynamicZone.more-actions",defaultMessage:"More actions"}))),t.createElement(B.VY,{popoverPlacement:"bottom-end",zIndex:2},t.createElement(B.rl,null,N&&t.createElement(x.sN,{onClick:()=>Z((0,a.ES)(E))},I({id:"Settings.review-workflows.stage.delete",defaultMessage:"Duplicate stage"})),F&&t.createElement(Ee,{onClick:()=>Z((0,a._V)(E))},I({id:"Settings.review-workflows.stage.delete",defaultMessage:"Delete"}))))),N&&t.createElement(ye,{background:"transparent",forwardedAs:"div",hasRadius:!0,role:"button",noBorder:!0,tabIndex:0,"data-handler-id":ke,ref:Ne,label:I({id:"Settings.review-workflows.stage.drag",defaultMessage:"Drag"}),onClick:y=>y.stopPropagation(),onKeyDown:Be},t.createElement(z.Z,null)))}),t.createElement(D.v,{padding:6,background:"neutral0",hasRadius:!0},t.createElement(P.r,{gap:4},t.createElement(C.P,{col:6},t.createElement(T.o,{...j,id:j.name,disabled:!N,label:I({id:"Settings.review-workflows.stage.name.label",defaultMessage:"Stage name"}),error:ue.error??!1,onChange:y=>{We.setValue(y.target.value),Z((0,a.xn)(E,{name:y.target.value}))},required:!0})),t.createElement(C.P,{col:6},t.createElement(W.q4,{disabled:!N,error:me?.error??!1,id:ae.name,required:!0,label:I({id:"content-manager.reviewWorkflows.stage.color",defaultMessage:"Color"}),onChange:y=>{Ie.setValue(y),Z((0,a.xn)(E,{color:y}))},value:ae.value.toUpperCase(),startIcon:t.createElement(n.k,{as:"span",height:2,background:ae.value,borderColor:Fe==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},je.map(({value:y,label:L,color:ne})=>{const{themeColorName:Ze}=(0,k.k)(ne);return t.createElement(W.ag,{value:y,key:y,startIcon:t.createElement(n.k,{as:"span",height:2,background:ne,borderColor:Ze==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2})},L)}))),t.createElement(C.P,{col:6},fe.length===0?t.createElement(d.X0,{description:{id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"},intlLabel:{id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"},name:H.name}):t.createElement(n.k,{alignItems:"flex-end",gap:3},t.createElement(q,{grow:1},t.createElement(h.NU,{...H,disabled:!N,error:ge.error??!1,id:H.name,label:I({id:"Settings.review-workflows.stage.permissions.label",defaultMessage:"Roles that can change this stage"}),onChange:y=>{const L=y.map(ne=>({role:parseInt(ne,10),action:"admin::review-workflows.stage.transition"}));xe.setValue(L),Z((0,a.xn)(E,{permissions:L}))},placeholder:I({id:"Settings.review-workflows.stage.permissions.placeholder",defaultMessage:"Select a role"}),required:!0,value:(H.value??[]).map(y=>`${y.role}`),withTags:!0},[{label:I({id:"Settings.review-workflows.stage.permissions.allRoles.label",defaultMessage:"All roles"}),children:fe.map(y=>({value:`${y.id}`,label:y.name}))}].map(y=>"children"in y?t.createElement(h.Ab,{key:y.label,label:y.label,values:y.children.map(L=>L.value)},y.children.map(L=>t.createElement(_,{key:L.value,value:L.value},L.label))):t.createElement(h.ML,{key:y.value,value:y.value},y.label)))),t.createElement(O.h,{disabled:!N,icon:t.createElement(U.Z,null),label:I({id:"Settings.review-workflows.stage.permissions.apply.label",defaultMessage:"Apply to all stages"}),size:"L",variant:"secondary",onClick:()=>Ce(H.value)})))))),t.createElement(d.QH.Root,{iconRightButton:null,isOpen:De,onToggleDialog:()=>ie(!1),onConfirm:()=>{Z((0,a.Mu)({permissions:H.value})),ie(!1),Ae({type:"success",message:I({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy.success",defaultMessage:"Applied roles to all other stages of the workflow"})})},variantRightButton:"primary"},t.createElement(d.QH.Body,null,t.createElement(u.Z,{textAlign:"center",variant:"omega"},I({id:"Settings.review-workflows.page.edit.confirm.stages.permissions.copy",defaultMessage:"Roles that can change that stage will be applied to all the other stages."})))))}de.propTypes=r().shape({id:r().number.isRequired,color:r().string.isRequired,canDelete:r().bool.isRequired,canReorder:r().bool.isRequired,canUpdate:r().bool.isRequired,stagesCount:r().number.isRequired}).isRequired;const Te=(0,i.default)(o.x)`
  transform: translateX(-50%);
`;function oe({canDelete:E,canUpdate:$,stages:F}){const{formatMessage:re}=(0,f.Z)(),N=(0,l.I0)(),{trackUsage:se}=(0,d.rS)();return t.createElement(n.k,{direction:"column",gap:6,width:"100%"},t.createElement(o.x,{position:"relative",spacing:4,width:"100%"},t.createElement(Te,{background:"neutral200",height:"100%",left:"50%",position:"absolute",top:"0",width:2,zIndex:1}),t.createElement(n.k,{direction:"column",alignItems:"stretch",gap:6,zIndex:2,position:"relative",as:"ol"},F.map((Y,X)=>{const ee=Y?.id??Y.__temp_key__;return t.createElement(o.x,{key:`stage-${ee}`,as:"li"},t.createElement(de,{id:ee,index:X,isOpen:!Y.id,canDelete:F.length>1&&E,canReorder:F.length>1,canUpdate:$,stagesCount:F.length}))}))),$&&t.createElement(s,{type:"button",onClick:()=>{N((0,a.CI)({name:""})),se("willCreateStage")}},re({id:"Settings.review-workflows.stage.add",defaultMessage:"Add new stage"})))}oe.defaultProps={canDelete:!0,canUpdate:!0,stages:[]},oe.propTypes={canDelete:r().bool,canUpdate:r().bool,stages:r().arrayOf(r().shape({id:r().number,__temp_key__:r().number,name:r().string.isRequired}))}},85230:(S,v,e)=>{"use strict";e.d(v,{Y:()=>A});var t=e(67294),o=e(82832),n=e(10574),d=e(31988),g=e(6498),r=e(38670),f=e(62853),l=e(41054),i=e(45697),a=e.n(i),u=e(86896),p=e(86706),c=e(1565),m=e(11984),s=e(65649);const h=(0,c.default)(o.ML)`
  padding-left: ${({theme:R})=>R.spaces[7]};
`,O=(0,c.default)(n.Z)`
  font-style: italic;
`;function A({canUpdate:R}){const{formatMessage:w,locale:D}=(0,u.Z)(),P=(0,p.I0)(),{collectionTypes:C,singleTypes:T}=(0,p.v9)(s.HK),W=(0,p.v9)(s.DV),x=(0,p.v9)(s.D6),[B,G,z]=(0,l.U$)("name"),[U,K,V]=(0,l.U$)("contentTypes"),J=(0,f.Xe)(D,{sensitivity:"base"});return t.createElement(d.r,{background:"neutral0",hasRadius:!0,gap:4,padding:6,shadow:"tableShadow"},t.createElement(g.P,{col:6},t.createElement(r.o,{...B,id:B.name,disabled:!R,label:w({id:"Settings.review-workflows.workflow.name.label",defaultMessage:"Workflow Name"}),error:G.error??!1,onChange:M=>{P((0,m.rI)({name:M.target.value})),z.setValue(M.target.value)},required:!0})),t.createElement(g.P,{col:6},t.createElement(o.NU,{...U,customizeContent:M=>w({id:"Settings.review-workflows.workflow.contentTypes.displayValue",defaultMessage:"{count} {count, plural, one {content type} other {content types}} selected"},{count:M.length}),disabled:!R,error:K.error??!1,id:U.name,label:w({id:"Settings.review-workflows.workflow.contentTypes.label",defaultMessage:"Associated to"}),onChange:M=>{P((0,m.rI)({contentTypes:M})),V.setValue(M)},placeholder:w({id:"Settings.review-workflows.workflow.contentTypes.placeholder",defaultMessage:"Select"})},[...C.length>0?[{label:w({id:"Settings.review-workflows.workflow.contentTypes.collectionTypes.label",defaultMessage:"Collection Types"}),children:[...C].sort((M,b)=>J.compare(M.info.displayName,b.info.displayName)).map(M=>({label:M.info.displayName,value:M.uid}))}]:[],...T.length>0?[{label:w({id:"Settings.review-workflows.workflow.contentTypes.singleTypes.label",defaultMessage:"Single Types"}),children:[...T].map(M=>({label:M.info.displayName,value:M.uid}))}]:[]].map(M=>"children"in M?t.createElement(o.Ab,{key:M.label,label:M.label,values:M.children.map(b=>b.value.toString())},M.children.map(b=>{const{name:Q}=x.find(k=>(W&&k.id!==W.id||!W)&&k.contentTypes.includes(b.value))??{};return t.createElement(h,{key:b.value,value:b.value},w({id:"Settings.review-workflows.workflow.contentTypes.assigned.notice",defaultMessage:"{label} {name, select, undefined {} other {<i>(assigned to <em>{name}</em> workflow)</i>}}"},{label:b.label,name:Q,em:(...k)=>t.createElement(n.Z,{as:"em",fontWeight:"bold"},k),i:(...k)=>t.createElement(O,null,k)}))})):t.createElement(o.ML,{key:M.value,value:M.value},M.label)))))}A.defaultProps={canUpdate:!0},A.propTypes={canUpdate:a().bool}},86978:(S,v,e)=>{"use strict";e.d(v,{$k:()=>m,Ef:()=>R,FT:()=>O,Nj:()=>p,Ot:()=>a,QM:()=>l,VS:()=>s,_X:()=>w,bc:()=>u,gu:()=>n,k_:()=>c,lv:()=>h,qZ:()=>f,rg:()=>g,sN:()=>o,uL:()=>A,x4:()=>i,yq:()=>d,zn:()=>r});var t=e(12255);const o="settings_review-workflows",n="Settings/Review_Workflows/RESET_WORKFLOW",d="Settings/Review_Workflows/SET_CONTENT_TYPES",g="Settings/Review_Workflows/SET_IS_LOADING",r="Settings/Review_Workflows/SET_ROLES",f="Settings/Review_Workflows/SET_WORKFLOW",l="Settings/Review_Workflows/SET_WORKFLOWS",i="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",a="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",u="Settings/Review_Workflows/WORKFLOW_CLONE_STAGE",p="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",c="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGES",m="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",s="Settings/Review_Workflows/WORKFLOW_UPDATE",h={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},O=t.W.colors.primary600,A={STAGE:"stage"},R="numberOfWorkflows",w="stagesPerWorkflow"},52258:(S,v,e)=>{"use strict";e.d(v,{n:()=>d});var t=e(67294),o=e(62853),n=e(88767);function d(g={}){const{get:r}=(0,o.kY)(),{id:f="",...l}=g,i={populate:"stages"},{data:a,isLoading:u,status:p,refetch:c}=(0,n.useQuery)(["review-workflows","workflows",f],async()=>(await r(`/admin/review-workflows/workflows/${f}`,{params:{...i,...l}})).data),m=t.useMemo(()=>f&&a?.data?[a.data]:Array.isArray(a?.data)?a.data:[],[a?.data,f]);return{meta:t.useMemo(()=>a?.meta??{},[a?.meta]),workflows:m,isLoading:u,status:p,refetch:c}}},3848:(S,v,e)=>{"use strict";e.d(v,{E:()=>n,I:()=>d});var t=e(18172),o=e(86978);const n={serverState:{contentTypes:{collectionTypes:[],singleTypes:[]},roles:[],workflow:null,workflows:[]},clientState:{currentWorkflow:{data:{name:"",contentTypes:[],stages:[],permissions:void 0}},isLoading:!0}};function d(r=n,f){return(0,t.Uy)(r,l=>{const{payload:i}=f;switch(f.type){case o.yq:{l.serverState.contentTypes=i;break}case o.rg:{l.clientState.isLoading=i;break}case o.zn:{l.serverState.roles=i;break}case o.qZ:{const a=i;a&&(l.serverState.workflow=a,l.clientState.currentWorkflow.data={...a,stages:a.stages.map(u=>({...u,color:u?.color??o.FT}))});break}case o.QM:{l.serverState.workflows=i;break}case o.gu:{l.clientState=n.clientState,l.serverState=n.serverState;break}case o.x4:{const{stageId:a}=i,{currentWorkflow:u}=r.clientState;l.clientState.currentWorkflow.data.stages=u.data.stages.filter(p=>(p?.id??p.__temp_key__)!==a);break}case o.Ot:{const{currentWorkflow:a}=r.clientState;a.data||(l.clientState.currentWorkflow.data={stages:[]});const u=g(l.clientState.currentWorkflow.data.stages);l.clientState.currentWorkflow.data.stages.push({...i,color:i?.color??o.FT,__temp_key__:u});break}case o.bc:{const{currentWorkflow:a}=r.clientState,{id:u}=i,p=a.data.stages.findIndex(m=>(m?.id??m?.__temp_key__)===u),c=a.data.stages[p];l.clientState.currentWorkflow.data.stages.splice(p+1,0,{...c,id:void 0,__temp_key__:g(l.clientState.currentWorkflow.data.stages)});break}case o.Nj:{const{currentWorkflow:a}=r.clientState,{stageId:u,...p}=i;l.clientState.currentWorkflow.data.stages=a.data.stages.map(c=>(c.id??c.__temp_key__)===u?{...c,...p}:c);break}case o.k_:{const{currentWorkflow:a}=r.clientState;l.clientState.currentWorkflow.data.stages=a.data.stages.map(u=>({...u,...i}));break}case o.$k:{const{currentWorkflow:{data:{stages:a}}}=r.clientState,{newIndex:u,oldIndex:p}=i;if(u>=0&&u<a.length){const c=a[p];let m=[...a];m.splice(p,1),m.splice(u,0,c),l.clientState.currentWorkflow.data.stages=m}break}case o.VS:{l.clientState.currentWorkflow.data={...l.clientState.currentWorkflow.data,...i};break}default:break}})}const g=(r=[])=>{const f=r.map(l=>l.id??l.__temp_key__);return Math.max(...f,-1)+1}},65649:(S,v,e)=>{"use strict";e.d(v,{CA:()=>p,D6:()=>a,DV:()=>i,HK:()=>f,RR:()=>m,bH:()=>u,g$:()=>l,xU:()=>c});var t=e(18446),o=e.n(t),n=e(20573),d=e(86978),g=e(3848);const r=s=>s[d.sN]??g.E,f=(0,n.P1)(r,({serverState:{contentTypes:s}})=>s),l=(0,n.P1)(r,({serverState:{roles:s}})=>s),i=(0,n.P1)(r,({clientState:{currentWorkflow:s}})=>s.data),a=(0,n.P1)(r,({serverState:{workflows:s}})=>s),u=(0,n.P1)(r,({serverState:s,clientState:{currentWorkflow:h}})=>!o()(s.workflow,h.data)),p=(0,n.P1)(r,({serverState:s,clientState:{currentWorkflow:h}})=>!(s.workflow?.stages??[]).every(O=>!!h.data.stages.find(({id:A})=>A===O.id))),c=(0,n.P1)(r,({clientState:{isLoading:s}})=>s),m=(0,n.P1)(r,({serverState:s})=>s)},5318:(S,v,e)=>{"use strict";e.d(v,{k:()=>n,s:()=>d});var t=e(12255),o=e(86978);function n(g){if(!g)return null;const f=Object.entries(t.W.colors).filter(([,l])=>l.toUpperCase()===g.toUpperCase()).reduce((l,[i])=>(o.lv?.[i]&&(l=i),l),null);return f?{themeColorName:f,name:o.lv[f]}:null}function d(){return Object.entries(o.lv).map(([g,r])=>({hex:t.W.colors[g].toUpperCase(),name:r}))}},66578:(S,v,e)=>{"use strict";e.d(v,{V:()=>d});var t=e(36968),o=e.n(t),n=e(87561);async function d({values:g,formatMessage:r}){const f=n.Ry({contentTypes:n.IX().of(n.Z_()),name:n.Z_().max(255,r({id:"Settings.review-workflows.validation.name.max-length",defaultMessage:"Name can not be longer than 255 characters"})).required(),stages:n.IX().of(n.Ry().shape({name:n.Z_().required(r({id:"Settings.review-workflows.validation.stage.name",defaultMessage:"Name is required"})).max(255,r({id:"Settings.review-workflows.validation.stage.max-length",defaultMessage:"Name can not be longer than 255 characters"})).test("unique-name",r({id:"Settings.review-workflows.validation.stage.duplicate",defaultMessage:"Stage name must be unique"}),function(l){const{options:{context:i}}=this;return i.stages.filter(a=>a.name===l).length===1}),color:n.Z_().required(r({id:"Settings.review-workflows.validation.stage.color",defaultMessage:"Color is required"})).matches(/^#(?:[0-9a-fA-F]{3}){1,2}$/i),permissions:n.IX(n.Ry({role:n.Rx().strict().typeError(r({id:"Settings.review-workflows.validation.stage.permissions.role.number",defaultMessage:"Role must be of type number"})).required,action:n.Z_().required({id:"Settings.review-workflows.validation.stage.permissions.action.required",defaultMessage:"Action is a required argument"})})).strict()})).min(1)});try{return await f.validate(g,{abortEarly:!1,context:g}),!0}catch(l){let i={};return l instanceof n.p8&&l.inner.forEach(a=>{o()(i,a.path,a.message)}),i}}},27561:(S,v,e)=>{var t=e(67990),o=/^\s+/;function n(d){return d&&d.slice(0,t(d)+1).replace(o,"")}S.exports=n},67990:S=>{var v=/\s/;function e(t){for(var o=t.length;o--&&v.test(t.charAt(o)););return o}S.exports=e},51584:(S,v,e)=>{var t=e(44239),o=e(37005),n="[object Boolean]";function d(g){return g===!0||g===!1||o(g)&&t(g)==n}S.exports=d},7654:(S,v,e)=>{var t=e(81763);function o(n){return t(n)&&n!=+n}S.exports=o},81763:(S,v,e)=>{var t=e(44239),o=e(37005),n="[object Number]";function d(g){return typeof g=="number"||o(g)&&t(g)==n}S.exports=d},14841:(S,v,e)=>{var t=e(27561),o=e(13218),n=e(33448),d=0/0,g=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt;function i(a){if(typeof a=="number")return a;if(n(a))return d;if(o(a)){var u=typeof a.valueOf=="function"?a.valueOf():a;a=o(u)?u+"":u}if(typeof a!="string")return a===0?a:+a;a=t(a);var p=r.test(a);return p||f.test(a)?l(a.slice(2),p?2:8):g.test(a)?d:+a}S.exports=i},63122:(S,v,e)=>{"use strict";e.d(v,{U:()=>p,y:()=>a});var t=e(85893),o=e(67294),n=e(1565),d=e(31254),g=e(92058),r=e(10574),f=e(96987),l=e(16607);const i=({theme:c,expanded:m,variant:s,disabled:h,error:O})=>O?`1px solid ${c.colors.danger600} !important`:h?`1px solid ${c.colors.neutral150}`:m?`1px solid ${c.colors.primary600}`:s==="primary"?`1px solid ${c.colors.neutral0}`:`1px solid ${c.colors.neutral100}`,a=(0,n.default)(r.Z)``,u=(0,n.default)(l.x)`
  border: ${i};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:c})=>c.colors.primary600};

    ${a} {
      color: ${({theme:c,expanded:m})=>m?void 0:c.colors.primary700};
    }

    ${r.Z} {
      color: ${({theme:c,expanded:m})=>m?void 0:c.colors.primary600};
    }

    & > ${f.k} {
      background: ${({theme:c})=>c.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:c})=>c.colors.primary200};
    }
  }
`,p=({children:c,disabled:m=!1,error:s,expanded:h=!1,hasErrorMessage:O=!0,id:A,onToggle:R,toggle:w,size:D="M",variant:P="primary",shadow:C})=>{const T=(0,g.M)(A),W=o.useMemo(()=>({expanded:h,onToggle:R,toggle:w,id:T,size:D,variant:P,disabled:m}),[m,h,T,R,D,w,P]);return(0,t.jsxs)(d.S.Provider,{value:W,children:[(0,t.jsx)(u,{"data-strapi-expanded":h,disabled:m,"aria-disabled":m,expanded:h,hasRadius:!0,variant:P,error:s,shadow:C,children:c}),s&&O&&(0,t.jsx)(l.x,{paddingTop:1,children:(0,t.jsx)(r.Z,{variant:"pi",textColor:"danger600",children:s})})]})}},68889:(S,v,e)=>{"use strict";e.d(v,{v:()=>d});var t=e(85893),o=e(31254),n=e(16607);const d=({children:g,...r})=>{const{expanded:f,id:l}=(0,o.A)();if(!f)return null;const i=`accordion-content-${l}`,a=`accordion-label-${l}`,u=`accordion-desc-${l}`;return(0,t.jsx)(n.x,{role:"region",id:i,"aria-labelledby":a,"aria-describedby":u,...r,children:g})}},31254:(S,v,e)=>{"use strict";e.d(v,{A:()=>n,S:()=>o});var t=e(67294);const o=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),n=()=>(0,t.useContext)(o)},1744:(S,v,e)=>{"use strict";e.d(v,{B:()=>c});var t=e(85893),o=e(58471),n=e(1565),d=e(63122),g=e(31254);const r=({expanded:m,disabled:s,variant:h})=>{let O="neutral100";return m?O="primary100":s?O="neutral150":h==="primary"&&(O="neutral0"),O};var f=e(58753),l=e(85200),i=e(96987),a=e(10574);const u=(0,n.default)(f.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:m,expanded:s})=>s?m.colors.primary600:m.colors.neutral500};
    }
  }
`,p=(0,n.default)(i.k)`
  min-height: ${({theme:m,size:s})=>m.sizes.accordions[s]};
  border-radius: ${({theme:m,expanded:s})=>s?`${m.borderRadius} ${m.borderRadius} 0 0`:m.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:m})=>m.colors.primary600};
      }
    }
  }
`,c=({title:m,description:s,as:h="span",togglePosition:O="right",action:A,...R})=>{const{onToggle:w,toggle:D,expanded:P,id:C,size:T,variant:W,disabled:x}=(0,g.A)(),B=`accordion-content-${C}`,G=`accordion-label-${C}`,z=`accordion-desc-${C}`,U=T==="M"?6:4,K=T==="M"?U:U-2,V=r({expanded:P,disabled:x,variant:W}),M={as:h,fontWeight:T==="S"?"bold":void 0,id:G,textColor:P?"primary600":"neutral700",ellipsis:!0,variant:T==="M"?"delta":void 0},b=P?"primary600":"neutral600",Q=P?"primary200":"neutral200",k=T==="M"?`${32/16}rem`:`${24/16}rem`,_=()=>{x||(D&&!w?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),D()):w&&w())},q=(0,t.jsx)(i.k,{justifyContent:"center",borderRadius:"50%",height:k,width:k,transform:P?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:Q,cursor:x?"not-allowed":"pointer",onClick:_,shrink:0,children:(0,t.jsx)(l.J,{as:o.Z,width:T==="M"?`${11/16}rem`:`${8/16}rem`,color:P?"primary600":"neutral600"})});return(0,t.jsx)(p,{paddingBottom:K,paddingLeft:U,paddingRight:U,paddingTop:K,background:V,expanded:P,size:T,justifyContent:"space-between",cursor:x?"not-allowed":"",children:(0,t.jsxs)(i.k,{gap:3,flex:1,maxWidth:"100%",children:[O==="left"&&q,(0,t.jsx)(u,{onClick:_,"aria-disabled":x,"aria-expanded":P,"aria-controls":B,"aria-labelledby":G,"data-strapi-accordion-toggle":!0,expanded:P,type:"button",flex:1,minWidth:0,...R,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.y,{...M,children:m}),s&&(0,t.jsx)(a.Z,{as:"p",id:z,textColor:b,children:s})]})}),O==="right"&&(0,t.jsxs)(i.k,{gap:3,children:[q,A]}),O==="left"&&A]})})}},94101:(S,v,e)=>{"use strict";e.d(v,{Q:()=>a});var t=e(85893),o=e(67294),n=e(1565),d=e(62485),g=e(20501),r=e(53342),f=e(96987),l=e(10574);const i=(0,n.default)(g.G)`
  text-decoration: none;

  &[aria-disabled='true'] {
    ${d.sg}
    &:active {
      ${d.sg}
    }
  }

  &:hover {
    ${d.yP}
  }

  &:active {
    ${d.tB}
  }

  ${d.PD}
`,a=o.forwardRef(({variant:u="default",startIcon:p,endIcon:c,disabled:m=!1,children:s,size:h="S",as:O=r.f,...A},R)=>{const w=h==="S"?2:"10px",D=4;return(0,t.jsxs)(i,{ref:R,"aria-disabled":m,size:h,variant:u,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:w,paddingLeft:D,paddingRight:D,paddingTop:w,pointerEvents:m?"none":void 0,...A,as:O||r.f,children:[p&&(0,t.jsx)(f.k,{"aria-hidden":!0,children:p}),(0,t.jsx)(l.Z,{variant:h==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:s}),c&&(0,t.jsx)(f.k,{"aria-hidden":!0,children:c})]})});a.displayName="LinkButton"}}]);
