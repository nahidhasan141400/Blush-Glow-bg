"use strict";(self.webpackChunkbag_api=self.webpackChunkbag_api||[]).push([[2869],{72869:(k,K,s)=>{s.d(K,{App:()=>Ae});var e=s(74081),x=s(51447),i=s(10859),y=s(27279),$=s(5938),V=s(6918),m=s(32370),w=s(15244),J=s(12881),S=s(35250),T=s(48102),g=s(10701),u=s(73354),I=s(93415),B=s(27875),N=s(68412),z=s(4987),Q=s(8990),C=s(74758),H=s(6191),G=s(93153),F=s(50086),le=s(23298),oe=s(74577),de=s(69878),X=s(94098),Y=s(61908),t=s(15530),ce=s(26784),ge=s(78665),_e=s(76827),me=s(75438),q=s(52448),he=s(36938),W=s(61020),Z=s(19003),ee=s(71563),se=s(47853),pe=s(79213);const ue=se.Ry().shape({name:se.Z_().trim().required()}).required().noUnknown(),ae=({handleClose:a,handleSubmit:r,initialValues:o,isLoading:n=!1})=>{const{formatMessage:l}=(0,W.Z)();return(0,e.jsxs)($.P,{onClose:a,labelledBy:"title",children:[(0,e.jsx)(V.x,{children:(0,e.jsx)(m.Z,{id:"title",fontWeight:"bold",textColor:"neutral800",children:l({id:"content-releases.modal.add-release-title",defaultMessage:"New release"})})}),(0,e.jsx)(ee.J9,{validateOnChange:!1,onSubmit:r,initialValues:o,validationSchema:ue,children:({values:E,errors:M,handleChange:P})=>(0,e.jsxs)(ee.l0,{children:[(0,e.jsx)(w.f,{children:(0,e.jsx)(J.o,{label:l({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:E.name,error:M.name,onChange:P,required:!0})}),(0,e.jsx)(S.m,{startActions:(0,e.jsx)(T.z,{onClick:a,variant:"tertiary",name:"cancel",children:l({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(T.z,{name:"submit",loading:n,disabled:!E.name,type:"submit",children:l({id:"content-releases.modal.form.button.submit",defaultMessage:"Continue"})})})]})})]})},xe=(0,Z.ZP)(g.k)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:a})=>a.borderRadius};
  border-bottom-left-radius: ${({theme:a})=>a.borderRadius};
  border-top: 1px solid ${({theme:a})=>a.colors.neutral150};
`,Ee=(0,Z.ZP)(g.k)`
  align-self: stretch;
`,Me=(0,Z.ZP)(ce.Z)`
  width: ${({theme:a})=>a.spaces[4]};
  height: ${({theme:a})=>a.spaces[4]};
  path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,je=(0,Z.ZP)(ge.Z)`
  width: ${({theme:a})=>a.spaces[4]};
  height: ${({theme:a})=>a.spaces[4]};
  path {
    fill: ${({theme:a})=>a.colors.danger600};
  }
`,te=({onClick:a,children:r})=>(0,e.jsx)(Ee,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,alignItems:"center",gap:2,as:"button",hasRadius:!0,onClick:a,children:r}),ne=({toggleEditReleaseModal:a,toggleWarningSubmit:r,children:o})=>{const{formatMessage:n}=(0,W.Z)(),{releaseId:l}=(0,x.UO)(),[E,M]=y.useState(!1),P=y.useRef(null),{data:h,isLoading:f,isError:b}=(0,i.u)({id:l}),[U,{isLoading:L}]=(0,i.c)(),R=(0,t.lm)(),{formatAPIError:A}=(0,t.So)(),d=h?.data,p=()=>{M(v=>!v)},_=()=>{a(),p()},O=async()=>{const v=await U({id:l});"data"in v?R({type:"success",message:n({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})}):(0,i.i)(v.error)?R({type:"warning",message:A(v.error)}):R({type:"warning",message:n({id:"notification.error",defaultMessage:"An error occurred"})})},c=()=>{r(),p()};if(f)return(0,e.jsx)(u.o,{"aria-busy":f,children:(0,e.jsx)(I.x,{paddingBottom:8,children:(0,e.jsx)(t.dO,{})})});if(b||!d)return(0,e.jsx)(u.o,{children:(0,e.jsx)(I.x,{paddingBottom:8,children:(0,e.jsx)(t.Hn,{})})});const j=d.actions.meta.count||0,D=`${d.createdBy.firstname} ${d.createdBy.lastname}`;return(0,e.jsxs)(u.o,{"aria-busy":f,children:[(0,e.jsx)(I.x,{paddingBottom:8,children:(0,e.jsx)(B.T,{title:d.name,subtitle:n({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:j}),navigationAction:(0,e.jsx)(N.r,{startIcon:(0,e.jsx)(_e.Z,{}),to:"/plugins/content-releases",children:n({id:"global.back",defaultMessage:"Back"})}),primaryAction:!d.releasedAt&&(0,e.jsxs)(g.k,{gap:2,children:[(0,e.jsx)(z.h,{label:n({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release actions"}),ref:P,onClick:p,children:(0,e.jsx)(me.Z,{})}),E&&(0,e.jsxs)(Q.J2,{source:P,placement:"bottom-end",onDismiss:p,spacing:4,minWidth:"242px",children:[(0,e.jsxs)(g.k,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,children:[(0,e.jsx)(t.jW,{permissions:i.P.update,children:(0,e.jsxs)(te,{onClick:_,children:[(0,e.jsx)(Me,{}),(0,e.jsx)(m.Z,{ellipsis:!0,children:n({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]})}),(0,e.jsx)(t.jW,{permissions:i.P.delete,children:(0,e.jsxs)(te,{onClick:c,children:[(0,e.jsx)(je,{}),(0,e.jsx)(m.Z,{ellipsis:!0,textColor:"danger600",children:n({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})})]}),(0,e.jsxs)(xe,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(m.Z,{variant:"pi",fontWeight:"bold",children:n({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(m.Z,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(t.ij,{timestamp:new Date(d.createdAt)}),n({id:"content-releases.header.actions.created.description",defaultMessage:" by {createdBy}"},{createdBy:D})]})]})]}),(0,e.jsx)(T.z,{size:"S",variant:"tertiary",children:n({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),(0,e.jsx)(t.jW,{permissions:i.P.publish,children:(0,e.jsx)(T.z,{size:"S",variant:"default",onClick:O,loading:L,disabled:d.actions.meta.count===0,children:n({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})})}),o]})},fe=()=>{const{formatMessage:a}=(0,W.Z)(),{releaseId:r}=(0,x.UO)(),[{query:o}]=(0,t.Kx)(),n=(0,t.lm)(),{formatAPIError:l}=(0,t.So)(),{data:E,isLoading:M,isError:P}=(0,i.u)({id:r}),h=E?.data,{isLoading:f,isFetching:b,isError:U,data:L}=(0,i.d)({...o,releaseId:r}),[R]=(0,i.e)(),A=async(_,O)=>{const c=await R({params:{releaseId:r,actionId:O},body:{type:_.target.value}});"error"in c&&((0,i.i)(c.error)?n({type:"warning",message:l(c.error)}):n({type:"warning",message:a({id:"notification.error",defaultMessage:"An error occurred"})}))};if(f||M)return(0,e.jsx)(C.D,{children:(0,e.jsx)(t.dO,{})});if(U||P||!h)return(0,e.jsx)(C.D,{children:(0,e.jsx)(t.Hn,{})});const d=L?.data,p=L?.meta;return!d||!d.length?(0,e.jsx)(C.D,{children:(0,e.jsx)(H.x,{content:a({id:"content-releases.pages.Details.empty-state.content",defaultMessage:"This release is empty."}),icon:(0,e.jsx)(q.Z,{width:"10rem"})})}):(0,e.jsx)(C.D,{children:(0,e.jsxs)(g.k,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(t.iA.Root,{rows:d.map(_=>({..._,id:Number(_.entry.id)})),colCount:d.length,isLoading:f,isFetching:b,children:(0,e.jsxs)(t.iA.Content,{children:[(0,e.jsxs)(t.iA.Head,{children:[(0,e.jsx)(t.iA.HeaderCell,{fieldSchemaType:"string",label:a({id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"}),name:"name"}),(0,e.jsx)(t.iA.HeaderCell,{fieldSchemaType:"string",label:a({id:"content-releases.page.ReleaseDetails.table.header.label.locale",defaultMessage:"locale"}),name:"locale"}),(0,e.jsx)(t.iA.HeaderCell,{fieldSchemaType:"string",label:a({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(t.iA.HeaderCell,{fieldSchemaType:"string",label:a({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"})]}),(0,e.jsx)(t.iA.LoadingBody,{}),(0,e.jsx)(t.iA.Body,{children:d.map(({id:_,type:O,entry:c})=>(0,e.jsxs)(G.Tr,{children:[(0,e.jsx)(F.Td,{children:(0,e.jsx)(m.Z,{children:`${c.contentType.mainFieldValue||c.id}`})}),(0,e.jsx)(F.Td,{children:(0,e.jsx)(m.Z,{children:`${c?.locale?.name?c.locale.name:"-"}`})}),(0,e.jsx)(F.Td,{children:(0,e.jsx)(m.Z,{children:c.contentType.displayName||""})}),(0,e.jsx)(F.Td,{children:h.releasedAt?(0,e.jsx)(m.Z,{children:a({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:O==="publish",b:j=>(0,e.jsx)(m.Z,{fontWeight:"bold",children:j})})}):(0,e.jsx)(i.R,{selected:O,handleChange:j=>A(j,_),name:`release-action-${_}-type`})})]},_))})]})}),(0,e.jsxs)(g.k,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(t.v4,{defaultValue:p?.pagination?.pageSize.toString()}),(0,e.jsx)(t.tU,{pagination:{pageCount:p?.pagination?.pageCount||0}})]})]})})},De=()=>{const{formatMessage:a}=(0,W.Z)(),{releaseId:r}=(0,x.UO)(),o=(0,t.lm)(),{formatAPIError:n}=(0,t.So)(),{push:l}=(0,x.k6)(),[E,M]=y.useState(!1),[P,h]=y.useState(!1),{isLoading:f,data:b,isSuccess:U}=(0,i.u)({id:r}),[L,{isLoading:R}]=(0,i.a)(),[A,{isLoading:d}]=(0,i.b)(),p=()=>{M(D=>!D)},_=()=>h(D=>!D);if(f)return(0,e.jsx)(ne,{toggleEditReleaseModal:p,toggleWarningSubmit:_,children:(0,e.jsx)(C.D,{children:(0,e.jsx)(t.dO,{})})});const O=U&&b?.data?.name||"",c=async D=>{const v=await L({id:r,name:D.name});"data"in v?o({type:"success",message:a({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}):(0,i.i)(v.error)?o({type:"warning",message:n(v.error)}):o({type:"warning",message:a({id:"notification.error",defaultMessage:"An error occurred"})}),p()},j=async()=>{const D=await A({id:r});"data"in D?l("/plugins/content-releases"):(0,i.i)(D.error)?o({type:"warning",message:n(D.error)}):o({type:"warning",message:a({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(ne,{toggleEditReleaseModal:p,toggleWarningSubmit:_,children:[(0,e.jsx)(fe,{}),E&&(0,e.jsx)(ae,{handleClose:p,handleSubmit:c,isLoading:f||R,initialValues:{name:O||""}}),(0,e.jsx)(t.QH,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:P,isConfirmButtonLoading:d,onToggleDialog:_,onConfirm:j})]})},Pe=()=>(0,e.jsx)(t.jW,{permissions:i.P.main,children:(0,e.jsx)(De,{})}),ie=({isLoading:a,totalReleases:r,onClickAddRelease:o,children:n})=>{const{formatMessage:l}=(0,W.Z)();return(0,e.jsxs)(u.o,{"aria-busy":a,children:[(0,e.jsx)(B.T,{title:l({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:!a&&l({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"{number, plural, =0 {No releases} one {# release} other {# releases}}"},{number:r}),primaryAction:(0,e.jsx)(t.jW,{permissions:i.P.create,children:(0,e.jsx)(T.z,{startIcon:(0,e.jsx)(he.Z,{}),onClick:o,children:l({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),n]})},Re=(0,Z.ZP)(pe.r)`
  display: block;
`,re=({sectionTitle:a,releases:r=[],isError:o=!1})=>{const{formatMessage:n}=(0,W.Z)();return o?(0,e.jsx)(t.Hn,{}):r?.length===0?(0,e.jsx)(H.x,{content:n({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:a}),icon:(0,e.jsx)(q.Z,{width:"10rem"})}):(0,e.jsx)(le.r,{gap:4,children:r.map(({id:l,name:E,actions:M})=>(0,e.jsx)(oe.P,{col:3,s:6,xs:12,children:(0,e.jsx)(Re,{href:`content-releases/${l}`,isExternal:!1,children:(0,e.jsxs)(g.k,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:2,children:[(0,e.jsx)(m.Z,{as:"h3",variant:"delta",fontWeight:"bold",children:E}),(0,e.jsx)(m.Z,{variant:"pi",children:n({id:"content-releases.page.Releases.release-item.entries",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:M.meta.count})})]})})},l))})},Oe={name:""},ye=()=>{const[a,r]=y.useState(!1),o=(0,t.lm)(),{formatMessage:n}=(0,W.Z)(),{push:l}=(0,x.k6)(),{formatAPIError:E}=(0,t.So)(),[{query:M},P]=(0,t.Kx)(),h=(0,i.f)(M),[f,{isLoading:b}]=(0,i.g)(),{isLoading:U,isSuccess:L,isError:R}=h,A=()=>{r(c=>!c)};if(U)return(0,e.jsx)(ie,{onClickAddRelease:A,isLoading:!0,children:(0,e.jsx)(C.D,{children:(0,e.jsx)(t.dO,{})})});const d=L&&h.currentData?.meta?.pagination?.total||0,p=c=>{P({...M,page:1,pageSize:h?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:c!==0}}})},_=h?.currentData?.meta?.activeTab||"pending",O=async c=>{const j=await f({name:c.name});"data"in j?(o({type:"success",message:n({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),l(`/plugins/content-releases/${j.data.data.id}`)):(0,i.i)(j.error)?o({type:"warning",message:E(j.error)}):o({type:"warning",message:n({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(ie,{onClickAddRelease:A,totalReleases:d,children:[(0,e.jsx)(C.D,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(de.v,{label:n({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:["pending","done"].indexOf(_),onTabChange:p,children:[(0,e.jsx)(I.x,{paddingBottom:8,children:(0,e.jsxs)(X.m,{children:[(0,e.jsx)(X.O,{children:n({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending"})}),(0,e.jsx)(X.O,{children:n({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]})}),(0,e.jsxs)(Y.n,{children:[(0,e.jsx)(Y.x,{children:(0,e.jsx)(re,{sectionTitle:"pending",releases:h?.currentData?.data,isError:R})}),(0,e.jsx)(Y.x,{children:(0,e.jsx)(re,{sectionTitle:"done",releases:h?.currentData?.data,isError:R})})]})]}),d>0&&(0,e.jsxs)(g.k,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(t.v4,{options:["8","16","32","64"],defaultValue:h?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(t.tU,{pagination:{pageCount:h?.currentData?.meta?.pagination?.pageCount||0}})]})]})}),a&&(0,e.jsx)(ae,{handleClose:A,handleSubmit:O,isLoading:b,initialValues:Oe})]})},Ce=()=>(0,e.jsx)(t.jW,{permissions:i.P.main,children:(0,e.jsx)(ye,{})}),Ae=()=>(0,e.jsxs)(x.rs,{children:[(0,e.jsx)(x.AW,{exact:!0,path:`/plugins/${i.p}`,component:Ce}),(0,e.jsx)(x.AW,{exact:!0,path:`/plugins/${i.p}/:releaseId`,component:Pe})]})},68412:(k,K,s)=>{s.d(K,{r:()=>T});var e=s(74081),x=s(27279),i=s(48157),y=s(47533),$=s(19003),V=s(61657),m=s(32370),w=s(93415);const J=$.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:g})=>g?"none":void 0};
  color: ${({disabled:g,theme:u})=>g?u.colors.neutral600:u.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${m.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:g})=>g.colors.primary500};
  }

  &:active {
    color: ${({theme:g})=>g.colors.primary700};
  }

  ${V.BF};
`,S=(0,$.ZP)(w.x)`
  display: flex;
`,T=x.forwardRef(({children:g,href:u,to:I,disabled:B=!1,startIcon:N,endIcon:z,...Q},C)=>{const H=u?"_blank":void 0,G=u?"noreferrer noopener":void 0;return(0,e.jsxs)(J,{as:I&&!B?y.OL:"a",target:H,rel:G,to:B?void 0:I,href:B?"#":u,disabled:B,ref:C,...Q,children:[N&&(0,e.jsx)(S,{as:"span","aria-hidden":!0,paddingRight:2,children:N}),(0,e.jsx)(m.Z,{children:g}),z&&!u&&(0,e.jsx)(S,{as:"span","aria-hidden":!0,paddingLeft:2,children:z}),u&&(0,e.jsx)(S,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(i.Z,{})})]})})},76827:(k,K,s)=>{s.d(K,{Z:()=>i});var e=s(74081);const x=y=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...y,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),i=x}}]);
