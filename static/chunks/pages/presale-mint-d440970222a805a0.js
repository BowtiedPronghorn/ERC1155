(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{41018:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/presale-mint",function(){return n(54556)}])},54556:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return S}});var r=n(34051),i=n.n(r),t=n(85893),o=n(91895),c=n.n(o),a=n(68527),l=n(15193),d=n(89238),u=n(80534),h=n(35959),f=n(67294),v=JSON.parse('["0x70997970C51812dc3A010C7d01b50e0d17dc79C8","0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC","0x2fad86e9a409fc4f2aae46e4cc7c38e58e0ed395"]'),m=n(25712),x=n(25675),g=n.n(x),p=n(37918),w=n.n(p),b=n(6862),j=n(2162),C=n(94648),y=n.n(C),N=n(13098);function k(e,s,n,r,i,t,o){try{var c=e[t](o),a=c.value}catch(l){return void n(l)}c.done?s(a):Promise.resolve(a).then(r,i)}var P="0x90d197fc1417bC58A2193E0B124771Eec5CC18ca",_=Number("5"),S=function(){var e=(0,u.LN)(),s=e.activeChain,n=e.switchNetwork,r=(0,f.useState)(BigInt(1e16).toString()),o=r[0],x=r[1],p=(0,f.useState)([""]),C=p[0],S=p[1],E=(0,f.useState)(1),M=E[0],A=E[1],F=(0,f.useState)(!1),T=F[0],z=F[1],B=(0,u.mA)(),I=B.data,O=B.isError,R=(0,u.GG)({addressOrName:P,contractInterface:h.Mt},"mintPreSale",{overrides:{value:o},args:[M,C],onError:function(e){console.log(e)},onSuccess:function(e){console.log("Success",e),z(!0)}}),Y=R.data,L=R.error,U=R.isError,q=R.isLoading,G=R.write;(0,f.useEffect)((function(){if(!O&&(null===I||void 0===I?void 0:I.address)){var e=function(e,s){var n=e.map((function(e){return y()(e)})),r=new j.MerkleTree(n,y(),{sortPairs:!0}),i=y()(s),t=r.getHexProof(i),o=r.getHexRoot();return{valid:r.verify(t,i,o),proof:t}}(v,I.address);e.valid?S(e.proof):S([])}}),[null===I||void 0===I?void 0:I.address]);var H=function(){var e,s=(e=i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log("Error minting ".concat(e.t0));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})),function(){var s=this,n=arguments;return new Promise((function(r,i){var t=e.apply(s,n);function o(e){k(t,r,i,o,c,"next",e)}function c(e){k(t,r,i,o,c,"throw",e)}o(void 0)}))});return function(){return s.apply(this,arguments)}}();return(0,t.jsx)("div",{className:c().background,children:(0,t.jsx)("div",{className:c().container,children:(0,t.jsxs)("main",{className:c().main,children:[(0,t.jsxs)("h1",{className:c().title,children:["Non-fungible Coinbaes",(0,t.jsx)("br",{}),"\u26a1\ufe0f Pre-sale Minting Now \u26a1\ufe0f"]}),T?(0,t.jsxs)(a.gC,{children:[(0,t.jsx)(g(),{alt:"placeholder image for team members",src:"/assets/success.png",width:250,height:250}),(0,t.jsx)("p",{style:{color:"white"},children:"You've successfully minted! Click here to view your newly minted Coinbae"}),(0,t.jsx)(a.rU,{href:"/mypage",children:(0,t.jsx)(l.zx,{style:{fontFamily:"'Press Start 2P', cursive",color:"#4b4f56",borderRadius:"0"},children:"View My Coinbae"})})]}):(null===I||void 0===I?void 0:I.address)?(null===s||void 0===s?void 0:s.id)!==_?(0,t.jsxs)(a.gC,{children:[(0,t.jsx)(g(),{alt:"placeholder image for team members",src:"/assets/cb.png",width:250,height:250}),(0,t.jsx)("p",{style:{color:"white"},children:"You're on the wrong Network!"}),(0,t.jsx)(l.zx,{style:{fontFamily:"'Press Start 2P', cursive",color:"#4b4f56",borderRadius:"0"},onClick:function(){n&&n(_)},children:"Switch Network"})]}):(0,t.jsxs)(a.gC,{children:[(0,t.jsx)(g(),{alt:"placeholder image for team members",src:"/assets/cbw.png",width:250,height:250}),(0,t.jsxs)(m.Y2,{step:1,defaultValue:1,min:1,max:3,precision:0,onChange:function(e){A(Number(e));var s=.01*Number(e),n=w().utils.toWei(s.toString(10),"ether");x(n)},inputMode:"numeric",variant:"filled",children:[(0,t.jsx)(m.zu,{_focus:{bg:"white.300"},_active:{bg:"white.300"}}),(0,t.jsxs)(m.Fi,{children:[(0,t.jsx)(m.WQ,{}),(0,t.jsx)(m.Y_,{})]})]}),(0,t.jsxs)(l.zx,{style:{fontFamily:"'Press Start 2P', cursive",color:"#4b4f56",borderRadius:"0"},onClick:H,children:["Mint Pre-sale",q&&(0,t.jsx)(d.$,{marginLeft:2})]}),Y&&(0,t.jsxs)("p",{style:{color:"white"},children:["Success:"," ",(0,t.jsx)("a",{href:"".concat("https://goerli.etherscan.io","/tx/").concat(Y.hash),target:"_blank",rel:"noreferrer",children:(0,b.n)(Y.hash)})]}),U&&(0,t.jsxs)("p",{style:{color:"red"},children:["Error:"," ",(null===L||void 0===L?void 0:L.message.includes("Max tokens to mint"))&&"Minted max tokens",(null===L||void 0===L?void 0:L.message.includes("not open"))&&"Presale is currently closed",(null===L||void 0===L?void 0:L.message.includes("insufficient funds"))&&"Insufficient funds",(null===L||void 0===L?void 0:L.message.includes("Insufficient tokens remaining"))&&"The collection has fully minted",(null===L||void 0===L?void 0:L.message.includes("Address does not exist in list"))&&"This address is not in the presale list",(null===L||void 0===L?void 0:L.message.includes("User rejected request"))&&"User rejected request"]})]}):(0,t.jsxs)(a.gC,{children:[(0,t.jsx)(g(),{alt:"placeholder image for team members",src:"/assets/cb.png",width:250,height:250}),(0,t.jsx)("p",{style:{color:"white"},children:"Connect wallet to check eligibility!"}),(0,t.jsx)(N.Z,{})]})]})})})}},52361:function(){},94616:function(){}},function(e){e.O(0,[543,194,598,940,205,774,888,179],(function(){return s=41018,e(e.s=s);var s}));var s=e.O();_N_E=s}]);