(self.webpackChunk=self.webpackChunk||[]).push([[391],{53e3:(e,t,n)=>{var a=n(80890),o="chrome-extension://__MSG_@@extension_id__/",r="moz-extension://__MSG_@@extension_id__/",s="safari-web-extension://__MSG_@@extension_id__/",i=self.GR_RESOURCE_ROOT||o,l=self.GR_RESOURCE_ROOT||r,c=self.GR_RESOURCE_ROOT||s;e.exports={__css:a.toString().replace(new RegExp(o,"g"),i).replace(new RegExp(r,"g"),l).replace(new RegExp(s,"g"),c),...a.locals}},84488:(e,t,n)=>{n.d(t,{G:()=>r});var a=n(27378),o=n(31542);const r=({children:e,style:t,dataGrammarlyPart:n="ui-kit-iframe",...r})=>{const[s,i]=a.useState(null),l=a.useCallback((e=>{var t,n;let a=null;"contentDocument"in e.target&&(a=null!==(n=null===(t=e.target.contentDocument)||void 0===t?void 0:t.body)&&void 0!==n?n:null),i(a),a&&(a.style.margin="0",a.style.height="100vh")}),[]);return a.createElement("iframe",{...r,style:{border:"none",...t},onLoad:l,srcDoc:"<html><body></body></html>","data-grammarly-part":n},s&&(0,o.createPortal)(e,s))}},68538:(e,t,n)=>{n.r(t),n.d(t,{OnboardingDialog:()=>T});var a=n(44577),o=n(26273),r=n(37896),s=n(27378),i=n(41263),l=n(18505),c=n(2780),p=n(68383),d=n(38983),h=n(5872),u=n(92783),m=n(62111),A=n(19106),g=n(1620),b=n(88326),v=n(33304),S=n.n(v);const f=e=>s.createElement(b.M,{clickHandler:e.clickHandler},s.createElement("button",{className:S().buttonPrimary},e.children)),y=e=>s.createElement(b.M,{clickHandler:e.clickHandler},s.createElement("button",{className:S().buttonSecondary},e.children));var k=n(43694),E=n.n(k);class x extends s.Component{constructor(){super(...arguments),this.onClick=()=>{A.J.onboardingOverlayLetsWriteButtonClick("end-step"),this.props.onClose()}}render(){return s.createElement(s.Fragment,null,s.createElement("h3",{className:E().header},"You’re all set. Happy writing!"),s.createElement(f,{clickHandler:this.onClick},"Let’s Write"))}}class C extends s.Component{componentDidMount(){A.J.onboardingOnboardingStepOverlayShow(this.props.stepName)}render(){return s.createElement(s.Fragment,null,s.createElement("div",{className:E().content},s.createElement("h3",{className:E().header},this.props.header),s.createElement("p",{className:E().text},this.props.text),s.createElement("div",{className:E().footer},s.createElement("span",{className:E().stepIndicator},this.props.currentStep," of ",this.props.totalStep),s.createElement(f,{clickHandler:this.props.onNext},"Next"))))}}var _=n(84488),w=n(68370),R=n(53e3),I=n.n(R);class W extends s.Component{constructor(){super(...arguments),this.onSelectChange=e=>{this.props.onChange(e.target.value)}}render(){return s.createElement(_.G,{style:{width:"100%",height:"85px"}},s.createElement(w.b,null,I().__css),s.createElement("div",{className:I().wrapper},s.createElement("div",{className:I().label},this.props.label),s.createElement("div",{className:I().selectWrapper},s.createElement("select",{className:I().select,onChange:this.onSelectChange,defaultValue:this.props.defaultValue||""},s.createElement("option",{key:"-1",disabled:!0,hidden:!0}),this.props.options.map(((e,t)=>s.createElement("option",{key:t,value:e.value},e.title)))))))}}var z=n(73580),P=n.n(z);const F=e=>s.createElement(b.M,{clickHandler:e.onChange},s.createElement("div",{className:P().checkboxWrapper,onClick:e.onChange},s.createElement("div",{className:(0,h.cs)(P().checkbox,!0===e.value&&P().checkboxActive)}),s.createElement("span",{className:P().label},e.label)));var D=n(94633),N=n.n(D);const J=[{value:"british",title:"🇬🇧 British English"},{value:"american",title:"🇺🇸 American English"},{value:"australian",title:"🇦🇺 Australian English"},{value:"canadian",title:"🇨🇦 Canadian English"}];class U extends s.Component{constructor(){super(...arguments),this.state={dialect:this.defaultDialect,autocorrect:this.props.personalizablePageState.autocorrectEnabled||!1,defs:this.props.personalizablePageState.enabledDefs},this.onSave=()=>{const e=this.props.personalizeActions;this.state.dialect&&e.changeStrongDialect(this.state.dialect),e.toggleAutocorrect(this.state.autocorrect),e.toggleDefs(this.state.defs),this.props.onNext(),A.J.onboardingOverlaySaveButtonClick("personalize-step")},this.onSkip=()=>{A.J.onboardingOverlaySkipPersonalizationButtonClick("personalize-step"),this.props.onNext()}}get defaultDialect(){return this.props.personalizablePageState.dialectStrong||this.props.personalizablePageState.dialectWeak}render(){return s.createElement("div",{className:N().personalizeStep},s.createElement("h2",{className:N().header},"Personalize Grammarly to meet your writing needs."),s.createElement("div",{className:N().formWrapper},s.createElement(W,{label:"I write in:",options:J,onChange:e=>this.setState({dialect:e}),defaultValue:this.defaultDialect}),s.createElement(F,{onChange:()=>this.setState({autocorrect:!this.state.autocorrect}),value:this.state.autocorrect,label:"Correct spelling automatically"}),s.createElement(F,{onChange:()=>this.setState({defs:!this.state.defs}),value:this.state.defs,label:"Show synonyms and definitions"})),s.createElement("div",{className:N().footer},s.createElement(y,{clickHandler:this.onSkip},"Skip"),s.createElement(f,{clickHandler:this.onSave},"Save")))}}var G;!function(e){e[e.checkWriting=0]="checkWriting",e[e.acceptSuggestion=1]="acceptSuggestion",e[e.popupEditor=2]="popupEditor",e[e.personalize=3]="personalize",e[e.end=4]="end"}(G||(G={}));const B={[G.checkWriting]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-check-text.mp4",[G.acceptSuggestion]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-accept-suggestion.mp4",[G.popupEditor]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-popup-editor.mp4",[G.end]:"https://d201kpdrh73vuz.cloudfront.net/onboarding/2020/onboarding-white-G.mp4"},O={[G.checkWriting]:"data:image/png;base64,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"};var V=n(12187);const M=[G.checkWriting,G.acceptSuggestion,G.popupEditor,G.personalize,G.end];class Q extends s.Component{constructor(){super(...arguments),this.state={stepIndex:0},this.goToNextStep=()=>{this.state.stepIndex<M.length-1&&this.setState({stepIndex:this.state.stepIndex+1})}}componentDidMount(){A.J.onboardingOverlayShow(),(0,m.T)().onboardingTutorialShow()}get currentStep(){return M[this.state.stepIndex]}renderStep(){const e={onClose:this.props.onClose,onNext:this.goToNextStep,key:this.currentStep},t={...e,currentStep:this.state.stepIndex+1,totalStep:M.filter((e=>e!==G.end)).length};switch(this.currentStep){case G.checkWriting:return s.createElement(C,{...t,stepName:"checkWriting",header:"When you see the Grammarly logo, it means Grammarly is checking your writing.",text:"When Grammarly finds an issue, you’ll see a red number. When it’s green, it means Grammarly found no issue."});case G.acceptSuggestion:return s.createElement(C,{...t,stepName:"acceptSuggestion",header:"Review and accept Grammarly suggestions as you’re writing.",text:"Hover on underlines to see Grammarly’s suggestion and click to apply the change."});case G.popupEditor:return s.createElement(C,{...t,stepName:"popupEditor",header:"Click the Grammarly logo to go deeper.",text:"Clicking the Grammarly logo will open an editing window. Here you can see additional details about Grammarly’s suggestions."});case G.personalize:return s.createElement(U,{...e,personalizeActions:this.props.personalizeActions,personalizablePageState:this.props.personalizablePageState,saveAnonymousProps:this.props.saveAnonymousProps});case G.end:return s.createElement(x,{...e});default:return null}}renderVideoWithPreload(){return M.map(((e,t)=>!!B[e]&&t<=this.state.stepIndex+1&&s.createElement("video",{key:t,...(0,V.Sh)(E().video,this.currentStep===e&&E().show),autoPlay:!0,loop:!0,muted:!0,preload:"auto",poster:O[e]},s.createElement("source",{src:B[e]}))))}render(){return s.createElement("div",{...(0,V.Sh)(E().onboardingTour,this.currentStep===G.end&&E().white)},s.createElement("div",{className:E().close},s.createElement(g.P,{onClick:()=>{A.J.onboardingOverlayCloseButtonClick("dialog"),this.props.onClose()},kind:"transparent"})),this.renderVideoWithPreload(),this.renderStep())}}var Z=n(33163);class H extends s.Component{constructor(){super(...arguments),this._containerRef=null,this.state={hide:!1},this.onClose=e=>{e&&e.stopPropagation(),this.setState({hide:!0}),this._containerRef&&this._containerRef.addEventListener("animationend",(()=>this.props.onClose()))},this.setOnboardingRef=e=>{e&&!this._containerRef?(this._containerRef=e,this._containerRef.addEventListener("click",this.preventClick)):!e&&this._containerRef&&(this._containerRef.removeEventListener("click",this.preventClick),this._containerRef=null)},this.preventClick=e=>{e.stopPropagation(),e.stopImmediatePropagation()}}componentDidMount(){this._sub=this.props.shouldClose.subscribe((e=>{e&&this.onClose()}))}componentWillUnmount(){var e;null===(e=this._sub)||void 0===e||e.unsubscribe()}render(){const e=(0,h.cs)({[Z.onboardingDialog]:!0,[Z.hide]:this.state.hide,[Z.windows]:(0,u.ED)()});return s.createElement("div",{ref:this.setOnboardingRef,className:e,"data-grammarly-part":"onboarding"},s.createElement("div",{className:Z.content},s.createElement("div",{className:Z.viewContainer},s.createElement(Q,{onClose:this.onClose,personalizeActions:this.props.personalizeActions,personalizablePageState:this.props.personalizablePageState,saveAnonymousProps:this.props.saveAnonymousProps}))))}}class T extends((0,r.qH)(a.u)){constructor({doc:e,saveAnonymousProps:t,personalizeActions:n,personalizablePageState:a}){super(),this.view=null,this.shouldClose=d.h.create(!1),this.onKey=e=>{(0,r.rw)(e)===r.DG&&this.view&&this.shouldClose.set(!0)},this.onClose=()=>{this.emit("hide"),this.remove()},this.component=()=>(s.useEffect((()=>((0,o.o)(this.doc.defaultView,"keydown",this.onKey,!1),()=>(0,o.E)(this.doc.defaultView,"keydown",this.onKey,!1))),[]),s.createElement(i.L,{chunkName:"onboardingDialog"},s.createElement(H,{saveAnonymousProps:this.saveAnonymousProps,personalizeActions:this.personalizeActions,personalizablePageState:this.personalizablePageState,onClose:this.onClose,shouldClose:this.shouldClose}))),this.doc=e,this.saveAnonymousProps=t,this.personalizeActions=n,this.personalizablePageState=a,this.createView()}createView(){if(!this.view){const e=this.component;this.view=l.VB.get({monitorAs:"onboarding"}).inject(c.EM.fromDocument(this.doc,"grammarly-onboarding"),c.zs.appendChild(this.doc.documentElement),p.G7.showWhenLoaded(s.createElement(e,null)))}}remove(){this.view&&(this.view.dispose(),this.view=null)}}},80890:(e,t,n)=>{var a=n(93476),o=n(91678),r=n(87546),s=a((function(e){return e[1]})),i=o(r);s.push([e.id,'._10TAx-wrapper{font-family:Inter,"SF UI Text",system,-apple-system,".SFNSDisplay-Regular",SFProText-Regular,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif !important;color:#0e101a !important;margin-bottom:16px !important}._3YQRC-label{font-weight:600 !important;font-size:14px !important;line-height:24px !important;margin-bottom:4px !important}._3FRQz-selectWrapper{position:relative !important;}._3FRQz-selectWrapper:after{pointer-events:none !important;content:\'\' !important;position:absolute !important;top:4px !important;right:4px !important;width:32px;height:32px;background-size:32px 32px;background-image:url('+i+');background-repeat:no-repeat}._3SUP2-select{font-family:Inter,"SF UI Text",system,-apple-system,".SFNSDisplay-Regular",SFProText-Regular,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif !important;color:#0e101a !important;-webkit-appearance:none;-ms-appearance:none;-o-appearance:none;appearance:none;box-shadow:none !important;background-color:transparent !important;background-image:none !important;outline:none !important;margin:0 !important;pointer-events:auto !important;background:#f9faff !important;border:1px solid #e7e9f5 !important;box-sizing:border-box !important;border-radius:4px !important;width:100% !important;height:40px !important;padding:8px !important}',""]),s.locals={wrapper:"_10TAx-wrapper",label:"_3YQRC-label",selectWrapper:"_3FRQz-selectWrapper",select:"_3SUP2-select"},e.exports=s},93476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var s=this[r][0];null!=s&&(o[s]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);a&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},91678:e=>{e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},33163:e=>{e.exports={onboardingDialog:"_2PUCY",gr__onboarding_dialog_appear:"_2kQom",viewContainer:"_2r76m",experimentSize:"_3QRBn",view:"iXxau",windows:"_3YNSP",footer:"_220RP",hide:"_2crZn",gr__onboarding_dialog_disappear:"_3pI3R",content:"_2WdMd",gr__centered_onboarding_dialog_content_disappear:"_1MuSx",gr__centered_onboarding_dialog_content_appear:"_1PPL8"}},33304:e=>{e.exports={buttonPrimary:"DeSZy",buttonSecondary:"_19BHo"}},73580:e=>{e.exports={checkboxWrapper:"_1nbHQ",checkbox:"_1rrFK",checkboxActive:"_3QCtQ",label:"_2uB3E"}},43694:e=>{e.exports={onboardingTour:"_1kT00",close:"_1d9eL",video:"_1EkJs",show:"_30F92",content:"_26qzv",header:"_5zyYS",text:"_1nSmD",footer:"_1U2Zt",stepIndicator:"_1ASb6",white:"_1a0vu"}},94633:e=>{e.exports={personalizeStep:"_3UcZy",header:"_2WHOT",formWrapper:"_18hhZ",footer:"_3Laiq"}},87546:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const a="chrome-extension://__MSG_@@extension_id__/src/images/31cf0fff64370d348f4388b99eecd7c3/dropdown-double-arrow.svg"}}]);