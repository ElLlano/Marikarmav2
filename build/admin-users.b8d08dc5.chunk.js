"use strict";(self.webpackChunkmarikarma_api_v_2=self.webpackChunkmarikarma_api_v_2||[]).push([[5199],{54920:(x,d,e)=>{e.d(d,{R:()=>c});var t=e(67294),i=e(62853),m=e(88767);function c(u={},a={}){const{id:s="",...E}=u,{get:g}=(0,i.kY)(),{data:n,isError:A,isLoading:C,refetch:R}=(0,m.useQuery)(["users",s,E],async()=>{const{data:{data:P}}=await g(`/admin/users/${s}`,{params:E});return P},a);return{users:t.useMemo(()=>s&&n?[n]:Array.isArray(n?.results)?n.results:[],[n,s]),pagination:t.useMemo(()=>n?.pagination??null,[n?.pagination]),isLoading:C,isError:A,refetch:R}}},71359:(x,d,e)=>{e.d(d,{Z:()=>n});var t=e(67294),i=e(16607),m=e(12473),c=e(62853),u=e(52933),a=e(45697),s=e.n(a),E=e(86896);const g=({displayedFilters:A})=>{const[C,R]=(0,t.useState)(!1),{formatMessage:v}=(0,E.Z)(),P=(0,t.useRef)(),B=()=>{R(D=>!D)};return t.createElement(t.Fragment,null,t.createElement(i.x,{paddingTop:1,paddingBottom:1},t.createElement(m.z,{variant:"tertiary",ref:P,startIcon:t.createElement(u.Z,null),onClick:B,size:"S"},v({id:"app.utils.filters",defaultMessage:"Filters"})),C&&t.createElement(c.J5,{displayedFilters:A,isVisible:C,onToggle:B,source:P})),t.createElement(c.W$,{filtersSchema:A}))};g.propTypes={displayedFilters:s().arrayOf(s().shape({name:s().string.isRequired,metadatas:s().shape({label:s().string}),fieldSchema:s().shape({type:s().string})})).isRequired};const n=g},61611:(x,d,e)=>{e.d(d,{W:()=>pe,Z:()=>Fe});var t=e(67294),i=e(40720),m=e(90731),c=e(55040),u=e(34726),a=e(62853),s=e(80129),E=e.n(s),g=e(86896),n=e(88767),A=e(86706),C=e(16550),R=e(54920),v=e(80902),P=e(36364),B=e(71359),D=e(12473),F=e(24116),se=e(45697),o=e.n(se);const q=({onClick:l})=>{const{formatMessage:f}=(0,g.Z)();return t.createElement(D.z,{onClick:l,startIcon:t.createElement(F.Z,null),size:"S"},f({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};q.propTypes={onClick:o().func.isRequired};var ne=e(35752),Z=e(29299),G=e(69398),le=e(12803),b=e(10574),z=e(96987),ee=e(96208),p=e(16607),fe=e(2382),Me=e(54425),re=e(96854);const oe=({canDelete:l,headers:f,entriesToDelete:T,onClickDelete:k,onSelectRow:Y,withMainAction:$,withBulkActions:W,rows:U})=>{const{push:h,location:{pathname:V}}=(0,C.k6)(),{formatMessage:O}=(0,g.Z)();return t.createElement(ne.p,null,U.map(r=>{const j=T.findIndex(I=>I===r.id)!==-1;return t.createElement(Z.Tr,{key:r.id,...(0,a.X7)({fn:()=>h(`${V}/${r.id}`),condition:W})},$&&t.createElement(G.Td,{...a.UW},t.createElement(le.C,{"aria-label":O({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,re.Pp)(r.firstname,r.lastname)}),checked:j,onChange:()=>{Y({name:r.id,value:!j})}})),f.map(({key:I,cellFormatter:H,name:K,...N})=>t.createElement(G.Td,{key:I},typeof H=="function"?H(r,{key:I,name:K,formatMessage:O,...N}):t.createElement(b.Z,{textColor:"neutral800"},r[K]||"-"))),W&&t.createElement(G.Td,null,t.createElement(z.k,{justifyContent:"end"},t.createElement(ee.h,{onClick:()=>h(`${V}/${r.id}`),label:O({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,re.Pp)(r.firstname,r.lastname)}),noBorder:!0,icon:t.createElement(fe.Z,null)}),l&&t.createElement(p.x,{paddingLeft:1,...a.UW},t.createElement(ee.h,{onClick:()=>k(r.id),label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,re.Pp)(r.firstname,r.lastname)}),noBorder:!0,icon:t.createElement(Me.Z,null)})))))}))};oe.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},oe.propTypes={canDelete:o().bool,entriesToDelete:o().array,headers:o().array.isRequired,onClickDelete:o().func,onSelectRow:o().func,rows:o().array,withBulkActions:o().bool,withMainAction:o().bool};const ye=oe;var ve=e(74622),Pe=e(36854),he=e(71543),de=e(31988),ie=e(6498),Ae=e(37022),Ce=e(82392),De=e(75071),Oe=e(41054),Te=e(30164),Le=e(85078),J=e(87561);const ue={firstname:"",lastname:"",email:"",roles:[]},Re=[],Ue=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]],Ie=J.Ry().shape({firstname:J.Z_().trim().required(a.I0.required),lastname:J.Z_(),email:J.Z_().email(a.I0.email).required(a.I0.required),roles:J.IX().min(1,a.I0.required).required(a.I0.required)}),Se={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Ee=({onSuccess:l,onToggle:f})=>{const[T,k]=(0,t.useState)("create"),[Y,$]=(0,t.useState)(!1),[W,U]=(0,t.useState)(null),{formatMessage:h}=(0,g.Z)(),V=(0,a.lm)(),{lockApp:O,unlockApp:r}=(0,a.o1)(),{post:j}=(0,a.kY)(),I=(0,v.c)(Re,async()=>(await e.e(9329).then(e.bind(e,99329))).ROLE_LAYOUT,{combine(y,S){return[...y,S]},defaultValue:[]}),H=(0,v.c)(ue,async()=>(await e.e(9329).then(e.bind(e,99329))).FORM_INITIAL_VALUES,{combine(y,S){return{...y,...S}},defaultValue:ue}),K=(0,v.c)(Te.A,async()=>(await e.e(566).then(e.bind(e,20566))).MagicLinkEE),N=(0,n.useMutation)(y=>j("/admin/users",y),{async onSuccess({data:y}){U(y.data.registrationToken),await l(),ae(),$(!1)},onError(y){throw $(!1),V({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),y},onSettled(){r()}}),w=h({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),te=async(y,{setErrors:S})=>{O(),$(!0);try{await N.mutateAsync(y)}catch(X){r(),X?.response?.data?.error.message==="Email already taken"&&S({email:X.response.data.error.message})}},ae=()=>{M?k(M):f()},{buttonSubmitLabel:_,isDisabled:Q,next:M}=Se[T],Ze=T==="create"?t.createElement(D.z,{type:"submit",loading:Y},h(_)):t.createElement(D.z,{type:"button",loading:Y,onClick:f},h(_));return K?t.createElement(ve.P,{onClose:f,labelledBy:"title"},t.createElement(Pe.x,null,t.createElement(Ce.O,{label:w},t.createElement(De.$,{isCurrent:!0},w))),t.createElement(Oe.J9,{enableReinitialize:!0,initialValues:H,onSubmit:te,validationSchema:Ie,validateOnChange:!1},({errors:y,handleChange:S,values:X})=>t.createElement(a.l0,null,t.createElement(he.f,null,t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:6},T!=="create"&&t.createElement(K,{registrationToken:W}),t.createElement(p.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},h({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(p.x,{paddingTop:4},t.createElement(z.k,{direction:"column",alignItems:"stretch",gap:1},t.createElement(de.r,{gap:5},Ue.map(ce=>ce.map(L=>t.createElement(ie.P,{key:L.name,...L.size},t.createElement(a.jm,{...L,disabled:Q,error:y[L.name],onChange:S,value:X[L.name]})))))))),t.createElement(p.x,null,t.createElement(b.Z,{variant:"beta",as:"h2"},h({id:"global.roles",defaultMessage:"User's role"})),t.createElement(p.x,{paddingTop:4},t.createElement(de.r,{gap:5},t.createElement(ie.P,{col:6,xs:12},t.createElement(Le.Z,{disabled:Q,error:y.roles,onChange:S,value:X.roles})),I.map(ce=>ce.map(L=>t.createElement(ie.P,{key:L.name,...L.size},t.createElement(a.jm,{...L,disabled:Q,onChange:S,value:X[L.name]}))))))))),t.createElement(Ae.m,{startActions:t.createElement(D.z,{variant:"tertiary",onClick:f,type:"button"},h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Ze})))):null};Ee.propTypes={onToggle:o().func.isRequired,onSuccess:o().func.isRequired};const Be=Ee,me=({pagination:l})=>t.createElement(p.x,{paddingTop:4},t.createElement(z.k,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(a.v4,null),t.createElement(a.tU,{pagination:l})));me.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},me.propTypes={pagination:o().shape({page:o().number,pageCount:o().number,pageSize:o().number,total:o().number})};const We=me,Ke=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],xe=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:l},{formatMessage:f}){return t.createElement(b.Z,{textColor:"neutral800"},l.map(T=>f({id:`Settings.permissions.users.${T.code}`,defaultMessage:T.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:l},{formatMessage:f}){return t.createElement(z.k,null,t.createElement(a.qb,{isActive:l,variant:l?"success":"danger"}),t.createElement(b.Z,{textColor:"neutral800"},f({id:l?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:l?"Active":"Inactive"})))}}],ge=["ee","license-limit-info"],pe=()=>{const{post:l}=(0,a.kY)(),{formatAPIError:f}=(0,a.So)(),[T,k]=(0,t.useState)(!1),Y=(0,A.v9)(P._),{allowedActions:{canCreate:$,canDelete:W,canRead:U}}=(0,a.ss)(Y.settings.users),h=(0,n.useQueryClient)(),V=(0,a.lm)(),{formatMessage:O}=(0,g.Z)(),{search:r}=(0,C.TH)();(0,a.go)();const{users:j,pagination:I,isError:H,isLoading:K,refetch:N}=(0,R.R)(E().parse(r,{ignoreQueryPrefix:!0}),{cacheTime:0,enabled:U}),w=(0,v.c)(q,async()=>(await e.e(5833).then(e.bind(e,85833))).CreateActionEE),te=xe.map(M=>({...M,metadatas:{...M.metadatas,label:O(M.metadatas.label)}})),ae=O({id:"global.users",defaultMessage:"Users"}),_=()=>{k(M=>!M)},Q=(0,n.useMutation)(async M=>{await l("/admin/users/batch-delete",{ids:M})},{async onSuccess(){await N(),await h.refetchQueries(ge)},onError(M){V({type:"warning",message:{id:"notification.error",message:f(M),defaultMessage:"An error occured"}})}});return w?t.createElement(i.o,{"aria-busy":K},t.createElement(a.SL,{name:"Users"}),t.createElement(m.T,{primaryAction:$&&t.createElement(w,{onClick:_}),title:ae,subtitle:O({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),U&&t.createElement(c.Z,{startActions:t.createElement(t.Fragment,null,t.createElement(a.m,{label:O({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:ae})}),t.createElement(B.Z,{displayedFilters:Ke}))}),t.createElement(u.D,{canRead:U},!U&&t.createElement(a.ZF,null),H&&t.createElement("div",null,"TODO: An error occurred"),U&&t.createElement(t.Fragment,null,t.createElement(a.tM,{contentType:"Users",isLoading:K,onConfirmDeleteAll:Q.mutateAsync,onConfirmDelete:M=>Q.mutateAsync([M]),headers:te,rows:j,withBulkActions:!0,withMainAction:W},t.createElement(ye,{canDelete:W,headers:te,rows:j,withBulkActions:!0,withMainAction:W})),I&&t.createElement(We,{pagination:I}))),T&&t.createElement(Be,{onSuccess:async()=>{await N(),await h.refetchQueries(ge)},onToggle:_})):null},Fe=()=>{const l=(0,v.c)(pe,async()=>(await e.e(5481).then(e.bind(e,17403))).UserListPageEE);return l?t.createElement(l,null):null}},87901:(x,d,e)=>{e.r(d),e.d(d,{default:()=>s});var t=e(67294),i=e(62853),m=e(86706),c=e(36364),u=e(61611);const s=()=>{const E=(0,m.v9)(c._);return t.createElement(i.O4,{permissions:E.settings.users.main},t.createElement(u.Z,null))}},6324:(x,d,e)=>{e.d(d,{Z:()=>g});var t=e(67294),i=e(96208),m=e(62853),c=e(43838),u=e(45697),a=e.n(u),s=e(86896);const E=({children:n,target:A})=>{const C=(0,m.lm)(),{formatMessage:R}=(0,s.Z)(),{copy:v}=(0,m.VP)(),P=R({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),B=async()=>{await v(A)&&C({type:"info",message:{id:"notification.link-copied"}})};return t.createElement(m.Y_,{endAction:t.createElement(i.h,{label:P,noBorder:!0,icon:t.createElement(c.Z,null),onClick:B}),title:A,titleEllipsis:!0,subtitle:n,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};E.propTypes={children:a().oneOfType([a().element,a().string]).isRequired,target:a().string.isRequired};const g=E},30164:(x,d,e)=>{e.d(d,{A:()=>s});var t=e(67294),i=e(45697),m=e.n(i),c=e(86896),u=e(95651),a=e(6324);const s=({registrationToken:E})=>{const{formatMessage:g}=(0,c.Z)(),n=`${window.location.origin}${u.Z}auth/register?registrationToken=${E}`;return t.createElement(a.Z,{target:n},g({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};s.defaultProps={registrationToken:""},s.propTypes={registrationToken:m().string}},85078:(x,d,e)=>{e.d(d,{Z:()=>B});var t=e(67294),i=e(59586),m=e(40933),c=e(62853),u=e(2),a=e(45697),s=e.n(a),E=e(86896),g=e(88767),n=e(1565);const A=(0,n.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,C=n.default.div`
  animation: ${A} 2s infinite linear;
`,R=()=>t.createElement(C,null,t.createElement(u.Z,null)),v=async()=>{const{get:D}=(0,c.tg)(),{data:F}=await D("/admin/roles");return F.data},P=({disabled:D,error:F,onChange:se,value:o})=>{const{status:q,data:ne}=(0,g.useQuery)(["roles"],v,{staleTime:5e4}),{formatMessage:Z}=(0,E.Z)(),G=F?Z({id:F,defaultMessage:F}):"",le=Z({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),b=Z({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),z=Z({id:"app.components.Select.placeholder",defaultMessage:"Select"}),ee=q==="loading"?t.createElement(R,null):void 0;return t.createElement(i.P,{id:"roles",disabled:D,error:G,hint:b,label:le,name:"roles",onChange:p=>{se({target:{name:"roles",value:p}})},placeholder:z,multi:!0,startIcon:ee,value:o.map(p=>p.toString()),withTags:!0,required:!0},(ne||[]).map(p=>t.createElement(m.W,{key:p.id,value:p.id.toString()},Z({id:`global.${p.code}`,defaultMessage:p.name}))))};P.defaultProps={disabled:!1,error:void 0},P.propTypes={disabled:s().bool,error:s().string,onChange:s().func.isRequired,value:s().array.isRequired};const B=P},55040:(x,d,e)=>{e.d(d,{Z:()=>m});var t=e(85893),i=e(96987);const m=({startActions:c,endActions:u})=>!c&&!u?null:(0,t.jsxs)(i.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,t.jsx)(i.k,{gap:2,wrap:"wrap",children:c}),(0,t.jsx)(i.k,{gap:2,shrink:0,wrap:"wrap",children:u})]})}}]);