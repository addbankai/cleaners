(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2893:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l={src:"/_next/static/media/supercell.e40f68b5.png",height:581,width:1875,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEUAAAAPDw0PDAsPDwsPDgzp4w1zAAAABXRSTlMBvmhCpSCR9tAAAAAJcEhZcwAALiMAAC4jAXilP3YAAAATSURBVHicY2BgYGJkYWYAAQgDAADAABU933XyAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},13022:(e,t,a)=>{Promise.resolve().then(a.bind(a,33792))},33792:(e,t,a)=>{"use strict";a.a(e,async(e,l)=>{try{a.r(t),a.d(t,{default:()=>w});var n=a(95155),i=a(12115),s=a(66766),r=a(54390),o=a(85993),c=a(2893),A=a(56238),d=a(84860),h=a(35839),u=a(35695),m=a(85494),g=a(34507),x=e([h,m]);function w(){let{isConnected:e}=(0,h.v)(),t=(0,u.useRouter)(),[a,l]=(0,i.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"page-layout",children:[(0,n.jsxs)("aside",{className:"sidebar",children:[(0,n.jsxs)("div",{className:"sidebar-logo",children:[(0,n.jsx)(s.default,{src:o.A,alt:"Logo",width:150,height:40})," "]}),(0,n.jsxs)("nav",{className:"sidebar-nav",children:[(0,n.jsx)("a",{href:"/dashboard",onClick:a=>{a.preventDefault(),e?t.push("/dashboard"):l(!0)},children:"Dashboard"}),(0,n.jsxs)("a",{href:"#",className:"marketplace-dropdown",children:["Marketplace",(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-4 h-4 inline-block ml-1",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),(0,n.jsx)("a",{href:"/whitepaper",children:"Whitepaper"})]})]}),(0,n.jsxs)("div",{className:"content-wrapper",children:[(0,n.jsx)("header",{className:"header content-header"}),(0,n.jsxs)("main",{className:"main-background",children:[(0,n.jsx)("div",{className:"game-logo",children:"Slithermon"}),(0,n.jsx)("button",{className:"play-now-button",onClick:()=>{e?(console.log("User is connected, proceeding to play..."),alert("Play Now action (not implemented yet)")):l(!0)},children:"PLAY NOW"})]}),(0,n.jsxs)("section",{className:"partners-section",children:[(0,n.jsx)("h2",{className:"section-title",children:"Our Partner"}),(0,n.jsxs)("div",{className:"partners-logos",children:[(0,n.jsx)(s.default,{src:c.A,alt:"Supercell Logo",width:300,height:100,className:"partner-logo-img"})," ",(0,n.jsx)(s.default,{src:A.A,alt:"Sinester VC Logo",width:300,height:100,className:"partner-logo-img"})," ",(0,n.jsx)(s.default,{src:d.A,alt:"Tencent Games Logo",width:300,height:100,className:"partner-logo-img"})," "]})]}),(0,n.jsxs)("section",{className:"partners-section",children:[(0,n.jsx)("h2",{className:"section-title",children:"Blockchain"}),(0,n.jsxs)("div",{className:"partners-logos",children:[(0,n.jsx)(s.default,{src:r.A,alt:"Cardano Logo",width:300,height:150})," "]})]}),(0,n.jsx)(g.A,{})]})]}),(0,n.jsx)(m.A,{isOpen:a,onClose:()=>{l(!1)}})]})}[h,m]=x.then?(await x)():x,l()}catch(e){l(e)}})},34507:(e,t,a)=>{"use strict";a.d(t,{A:()=>g});var l=a(95155);a(12115);var n=a(83540),i=a(58995),s=a(79133),r=a(54811),o=a(94517),c=a(24026);let A=[{name:"Snek.fun Fairlaunch",value:93,description:"Launched fairly on the Snek.fun platform."},{name:"Treasury",value:4,description:"Reserved for future development and ecosystem growth."},{name:"Team",value:3,description:"Allocated to the core team."}],d=["#00ff9d","#ff47a4","#4d7cff"],h=Math.PI/180,u=e=>{let{cx:t,cy:a,midAngle:n,innerRadius:i,outerRadius:s,percent:r}=e,o=i+(s-i)*.5,c=t+o*Math.cos(-n*h),A=a+o*Math.sin(-n*h);return(0,l.jsx)("text",{x:c,y:A,fill:"white",textAnchor:c>t?"start":"end",dominantBaseline:"central",fontSize:"12px",fontWeight:"bold",children:"".concat(Number(100*r).toFixed(0),"%")})},m=e=>{let{active:t,payload:a}=e;if(t&&a&&a.length){let e=A.find(e=>{var t;return e.name===(null===(t=a[0])||void 0===t?void 0:t.name)});return(0,l.jsxs)("div",{className:"custom-tooltip",children:[(0,l.jsx)("p",{className:"label",children:"".concat(a[0].name," : ").concat(a[0].value,"%")}),e&&(0,l.jsx)("p",{className:"desc",children:e.description})]})}return null},g=()=>(0,l.jsxs)("section",{className:"tokenomics-section-v2",children:[(0,l.jsx)("h2",{className:"section-title",children:"VENOM Tokenomics"}),(0,l.jsxs)("div",{className:"tokenomics-content",children:[(0,l.jsx)("div",{className:"chart-container",children:(0,l.jsx)(n.u,{width:"100%",height:350,children:(0,l.jsxs)(i.r,{children:[(0,l.jsx)(s.F,{data:A,cx:"50%",cy:"50%",labelLine:!1,label:u,outerRadius:130,innerRadius:60,fill:"#8884d8",dataKey:"value",stroke:"#111827",strokeWidth:3,children:A.map((e,t)=>(0,l.jsx)(r.f,{fill:d[t%d.length]},"cell-".concat(t)))}),(0,l.jsx)(o.m,{content:(0,l.jsx)(m,{}),cursor:{fill:"rgba(255, 255, 255, 0.1)"}}),(0,l.jsx)(c.s,{layout:"vertical",align:"right",verticalAlign:"middle",iconType:"circle",wrapperStyle:{paddingLeft:"20px"},formatter:e=>(0,l.jsx)("span",{style:{color:"#e5e7eb"},children:e})})]})})}),(0,l.jsxs)("div",{className:"tokenomics-details",children:[(0,l.jsx)("h3",{children:"Distribution & Utility"}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Fairlaunch:"})," 93% launched on Snek.fun platform."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Treasury:"})," 4% reserved."]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("strong",{children:"Team:"})," 3% allocated."]})]}),(0,l.jsxs)("div",{className:"utility-info",children:[(0,l.jsx)("h4",{children:"Token Utility"}),(0,l.jsxs)("p",{children:["VENOM will be used as an ",(0,l.jsx)("strong",{children:"additional currency for minting"})," within 48 hours of launch."]}),(0,l.jsxs)("p",{children:["Engage in ",(0,l.jsx)("strong",{children:"minigames to earn SLITH"})," tokens."]})]}),(0,l.jsxs)("div",{className:"governance-info",children:[(0,l.jsx)("h4",{children:"SLITH Governance Token"}),(0,l.jsx)("p",{children:"Tokenomics for the SLITH governance token will be announced after the game launch."}),(0,l.jsxs)("p",{children:["Participate in ",(0,l.jsx)("strong",{children:"Play-to-Airdrop"})," events!"]})]})]})]})]})},35839:(e,t,a)=>{"use strict";a.a(e,async(e,l)=>{try{a.d(t,{WalletProvider:()=>A,v:()=>d});var n=a(95155),i=a(12115),s=a(40014),r=e([s]);s=(r.then?(await r)():r)[0];let o="connectedWalletName",c=(0,i.createContext)(void 0),A=e=>{let{children:t}=e,[a,l]=(0,i.useState)(null),[r,A]=(0,i.useState)(null),[d,h]=(0,i.useState)(null),[u,m]=(0,i.useState)(!1),[g,x]=(0,i.useState)(!0),[w,j]=(0,i.useState)(null),[p,v]=(0,i.useState)([]),[f,b]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{x(!0),j(null);try{let e="mainnetVbjVldxKBO4c6U4z5IB6s7hivqfNQ9n7";if(!e)throw Error("NEXT_PUBLIC_BLOCKFROST_API_KEY not set.");let t=await s.yN.new(new s.OC("https://cardano-mainnet.blockfrost.io/api/v0",e),"Mainnet");l(t);let a=[];window.cardano&&Object.keys(window.cardano).forEach(e=>{var t,l;window.cardano&&"function"==typeof(null===(t=window.cardano[e])||void 0===t?void 0:t.enable)&&(null===(l=window.cardano[e])||void 0===l?void 0:l.apiVersion)&&a.push(e)}),v(a),console.log("Available wallets:",a);let n=localStorage.getItem(o);n&&a.includes(n)?(console.log("Found last connected wallet in storage: ".concat(n)),b(n)):(b(null),localStorage.removeItem(o))}catch(e){console.error("Initialization error:",e),j("Failed to initialize connection. Please refresh."),localStorage.removeItem(o)}finally{x(!1)}})()},[]);let S=(0,i.useCallback)(async e=>{var t;if(!a||!(null===(t=window.cardano)||void 0===t?void 0:t[e]))return j("Lucid not initialized or wallet '".concat(e,"' not found.")),Promise.reject(Error("Wallet '".concat(e,"' not found.")));x(!0),j(null);try{let t=window.cardano[e];if(!t||"function"!=typeof t.enable)throw Error("Wallet API or enable function for '".concat(e,"' not found."));let l=await t.enable();a.selectWallet(l);let n=await a.wallet.address();A(l),h(n),m(!0),b(e),localStorage.setItem(o,e),console.log("Connected to ".concat(e,", Address: ").concat(n))}catch(a){console.error("Failed to connect to ".concat(e,":"),a);let t=a instanceof Error?a.message:String(a);throw j("Failed to connect wallet: ".concat(t)),m(!1),A(null),h(null),b(null),localStorage.removeItem(o),a}finally{x(!1)}},[a]),N=(0,i.useCallback)(()=>{A(null),h(null),m(!1),b(null),localStorage.removeItem(o),console.log("Wallet disconnected.")},[]);return(0,n.jsx)(c.Provider,{value:{lucid:a,walletApi:r,address:d,isConnected:u,isLoading:g,error:w,availableWallets:p,lastConnectedWallet:f,connectWallet:S,disconnectWallet:N},children:t})},d=()=>{let e=(0,i.useContext)(c);if(void 0===e)throw Error("useWallet must be used within a WalletProvider");return e};l()}catch(e){l(e)}})},54390:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l={src:"/_next/static/media/cardano.61812007.png",height:900,width:1600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEUALq0AJ58AMq0AM64AMbFSVEMfAAAABXRSTlMHAVFAJGnzUpcAAAAJcEhZcwAAAVAAAAFQAfvlIoQAAAAfSURBVHicY2CEAgYGRgYIYGZhYmJiZmKGiTAywNQAAAOtACms/OJ8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},56238:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l={src:"/_next/static/media/sinestervc.c6f37b13.png",height:581,width:1875,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEVhER0PEhIAAAAJERFMaXFjn+t2AAAABXRSTlMqFQkcAMd78GsAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAZSURBVHicBcEBAQAAAIIgK/9vDhCSVIRt9QEHACEZPGnwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},84860:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l={src:"/_next/static/media/tencentgames.b011a563.png",height:581,width:1875,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAJ1BMVEU5OTdra22cflY3NzciKzjm0x4yMjIAWbxdXV1MWnHwnxUAAADTuR6xLdMVAAAADXRSTlNQRDtJO544TR64qgPMamFjtwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABpJREFUeJxjYOVhYmFgZmBj4OJkZ2Jk5OAGAALCAFJPB7otAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2}},85494:(e,t,a)=>{"use strict";a.a(e,async(e,l)=>{try{a.d(t,{A:()=>o});var n=a(95155);a(12115);var i=a(35839),s=a(35695),r=e([i]);function o(e){let{isOpen:t,onClose:a}=e,{availableWallets:l,connectWallet:r,isLoading:o,error:c}=(0,i.v)(),A=(0,s.useRouter)(),d=async e=>{try{await r(e),A.push("/dashboard"),a()}catch(e){console.error("Modal connection error:",e),a()}};return t?(0,n.jsxs)("div",{className:"modal-overlay open",onClick:a,children:[" ",(0,n.jsxs)("div",{className:"wallet-selection-modal modern-modal",onClick:e=>e.stopPropagation(),children:[(0,n.jsx)("h4",{children:"Connect Wallet"}),o&&(0,n.jsx)("p",{children:"Connecting..."}),c&&!o&&(0,n.jsx)("p",{className:"wallet-error modal-error",children:c}),!o&&(0,n.jsx)("ul",{children:Array.isArray(l)&&l.length>0?l.map(e=>{var t,a,l,i;return(0,n.jsx)("li",{children:(0,n.jsxs)("button",{onClick:()=>d(e),children:[(null===(a=window.cardano)||void 0===a?void 0:null===(t=a[e])||void 0===t?void 0:t.icon)&&(0,n.jsx)("img",{src:window.cardano[e].icon,alt:"".concat(e," icon"),width:"24",height:"24",style:{marginRight:"10px",verticalAlign:"middle"}}),(0,n.jsx)("span",{children:(null===(i=window.cardano)||void 0===i?void 0:null===(l=i[e])||void 0===l?void 0:l.name)||e})]})},e)}):(0,n.jsx)("li",{children:"No compatible wallets found. Please install a Cardano wallet extension."})}),(0,n.jsx)("button",{onClick:a,className:"close-modal-button",children:"Cancel"})]})]}):null}i=(r.then?(await r)():r)[0],l()}catch(e){l(e)}})},85993:(e,t,a)=>{"use strict";a.d(t,{A:()=>l});let l={src:"/_next/static/media/logo.764c90b2.png",height:343,width:1024,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJ1BMVEWzmjx2mSt+rSOJvyUvdBsofBxIkB4xix1pnSR+riR1pSJhoiZmpSQv5H4DAAAADXRSTlMHFej7MlROmuf3JYVV6o6HtgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAACJJREFUeJwFwYcBADAMwyDZWV3/31tA0n0AXjvCPnTWVLY+BTEAaGTL/m0AAAAASUVORK5CYII=",blurWidth:8,blurHeight:3}}},e=>{var t=t=>e(e.s=t);e.O(0,[14,383,441,684,358],()=>t(13022)),_N_E=e.O()}]);