(self.webpackChunk=self.webpackChunk||[]).push([[778],{20882:(e,t,n)=>{n.r(t),n.d(t,{ChipmunkGButtonCalloutPopup:()=>g});var a=n(61658),s=n(5872),i=n(27378),r=n(1620),o=n(36504),c=n(19106),l=n(32713);class m extends i.Component{constructor(){super(...arguments),this.state={acknowledgementDone:!1,isAcknowledging:!1}}async componentDidMount(){!this.state||this.state.isAcknowledging||this.state.acknowledgementDone||(this.setState({isAcknowledging:!0}),await this.acknowledgeMessage(),this.setState({acknowledgementDone:!0}))}async acknowledgeMessage(){await l.Z.acknowledgeMessage(this.messageId),c.J.chipmunkMessageDisplayed(this.campaignName,this.messageId)}onSoftDismiss(){this.props.softDismiss(),c.J.chipmunkMessageSoftDismissed(this.campaignName,this.messageId)}onHardDismiss(){this.props.hardDismiss(this.messageId),c.J.chipmunkMessageHardDismissed(this.campaignName,this.messageId)}onCTAClick(){c.J.chipmunkMessageCTAClick(this.campaignName,this.messageId)}get message(){return this.props.messages[0].message}get messageId(){return this.props.messages[0].messageId}get campaignName(){return this.props.messages[0].campaignName}}var d=n(88326);class g extends m{constructor(){super(...arguments),this._getContainerHeader=e=>{var t;switch(null===(t=e.arguments)||void 0===t?void 0:t.headerType){case o.n0.Default:return i.createElement("div",{className:`${a.containerHeaderDefault} ${a.container}`});case o.n0.ImageBlock:return this._getContainerImageBlock(e);default:return null}},this._getContainerImageBlock=e=>{var t;const n=null===(t=e.arguments)||void 0===t?void 0:t.imageUrl;if(void 0===n)return null;const r="keyboard-qrcode.png"===n,o="brand-tone-ipm-header.png"===n,c="snippet-ipm-header.gif"===n,l=r||o||c;return i.createElement("div",{className:(0,s.cs)(a.container,{[a.containerKeyboardQRCodeImageBlock]:r,[a.containerBrandToneImageBlock]:o,[a.containerSnippetImageBlock]:c,[a.containerHeaderImageBlock]:!l})},l?i.createElement("div",{className:(0,s.cs)({[a.qrcode]:r,[a.img]:!r})}):i.createElement("img",{src:n}))},this._getContainerTitle=e=>{var t;return i.createElement("div",{className:`${a.containerTitle} ${a.container}`},i.createElement("h3",null,null===(t=e.arguments)||void 0===t?void 0:t.text))},this._getContainerText=e=>{var t;return i.createElement("div",{className:`${a.containerText} ${a.container}`},i.createElement("p",null,null===(t=e.arguments)||void 0===t?void 0:t.text))}}render(){var e;const t=this.message,n=this.message.containerContent[0],c=(null==n?void 0:n.containerType)===o.lS.Header&&(null===(e=n.arguments)||void 0===e?void 0:e.headerType)===o.n0.ImageBlock&&"snippet-ipm-header.gif"===n.arguments.imageUrl;return i.createElement("div",{className:(0,s.cs)(a.gButtonPopup,a.gdocsBeta,a.chipmunkGButtonCalloutPopup)},i.createElement("div",{className:a.closeWrapper},i.createElement(r.P,{onClick:()=>this.onSoftDismiss(),color:c?"white":"dark"})),i.createElement("div",{className:a.containerContents},t.containerContent.map(((e,t)=>i.createElement(i.Fragment,{key:t},this._getContainer(e))))))}_getContainer(e){switch(null==e?void 0:e.containerType){case o.lS.Header:return this._getContainerHeader(e);case o.lS.Title:return this._getContainerTitle(e);case o.lS.Text:return this._getContainerText(e);case o.lS.Buttons:return this._getContainerButton(e);default:return null}}_getContainerButton(e){var t,n;return i.createElement("div",{className:`${a.containerButton} ${a.container}`},null===(n=null===(t=e.arguments)||void 0===t?void 0:t.buttons)||void 0===n?void 0:n.map(((e,t)=>i.createElement(i.Fragment,{key:t},this._getButton(e)))))}_getButton(e){switch(e.buttonType){case o.nt.Link:return i.createElement(d.M,{clickHandler:()=>this.onCTAClick()},i.createElement("a",{href:e.linkUrl,target:"_blank",className:a.button},e.text));case o.nt.SoftDismiss:return i.createElement(d.M,{clickHandler:()=>this.onSoftDismiss()},i.createElement("button",{className:a.dismiss},e.text));case o.nt.HardDismiss:return i.createElement(d.M,{clickHandler:()=>this.onHardDismiss()},i.createElement("button",{className:a.dismiss},e.text));default:return null}}}},61658:e=>{e.exports={gButtonPopup:"_1kF5v",newDataControl:"_2DXpn",showWrapper:"jbUGk",flipped:"_33Y70",title:"_3j0IH",icon:"_3mzPB",button:"_3ayiu",buttonText:"_3iTGv",popupFooter:"_1Pn79",isFlipped:"mrPCR",settings:"_1wln3",text:"_1igtd",bold:"_233YR",link:"_3Zolz",secondary:"_3CC0d",firstTime:"eytxh",close:"_1Q8MJ",disable:"_2GBXV",gdocs:"_1rwC7",gdocsBeta:"_3Nt7c",header:"_2QN8E",headerUnavailable:"_3oKby",cardsIcon:"_2p0cU",bubbleArrow:"_3P-V4",unavailablePopup:"_3ItKT",loginReminder:"_3nwkh",permission:"_3t67i",buttonsContainer:"_1o9Lo",mainButton:"_2Ltwz",secondaryButton:"_1gDFt",onboarding:"_36Myk",chipmunkGButtonCalloutPopup:"_1BqSc",closeWrapper:"_1iSkp",containerContents:"_3-RfQ",container:"_3DqWc",containerHeaderDefault:"tSLDM",containerKeyboardQRCodeImageBlock:"_35_s3",qrcode:"_25Ol6",containerBrandToneImageBlock:"_26_GC",img:"_38WyO",containerSnippetImageBlock:"g-PwS",containerHeaderImageBlock:"_2u4gj",containerTitle:"_3SP28",containerText:"w2FY9",containerButton:"_3p4LT",dismiss:"_1CkBd",warningPopup:"dcXJa",btn:"_36yMW",warning:"_3IVIe",ctaBtnGroup:"_1Bbg8",ctaButton:"_1mTiW",later:"_22eWb",managedSSOControl:"nF7Y6",illustration:"ThWjl",signInWithSSO:"_3cCtR",signInWithSSO2:"_2Z9Lo"}}}]);