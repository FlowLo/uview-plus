import{_ as o}from"./u-navbar.79d1fc6d.js";import{o as e,c as t,w as p,a,b as l,r as i,F as s,q as u,d as r,i as n,e as c}from"./index.063d1d59.js";import{r as d}from"./uni-app.es.a1ea7be9.js";import{_ as m}from"./u-gap.4d126340.js";import{_ as v}from"./u-cell.42cef35a.js";import{_ as f}from"./u-cell-group.c1c272ea.js";import{_ as h}from"./u-button.5f9ef231.js";import{_ as w}from"./u-popup.65b87fcd.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-status-bar.d6df4e62.js";import"./u-icon.019210d5.js";import"./u-line.5d70f236.js";import"./u-loading-icon.c3a69b20.js";import"./u-overlay.20247f59.js";import"./u-transition.ba4cb519.js";import"./u-safe-bottom.656044f3.js";var b=y({data:()=>({show:!1,popupData:{overlay:!0,mode:"bottom",borderRadius:"",closeable:!0,closeOnClickOverlay:!0},list:[{popupData:{overlay:!0,mode:"top",closeOnClickOverlay:!0},title:"顶部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeTop.png"},{popupData:{overlay:!0,mode:"right",closeOnClickOverlay:!0},title:"右侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeRight.png"},{popupData:{overlay:!0,mode:"bottom",closeOnClickOverlay:!0},title:"底部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"},{popupData:{overlay:!0,mode:"left",closeOnClickOverlay:!0},title:"左侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"},{popupData:{overlay:!0,mode:"center",round:10,closeOnClickOverlay:!0},title:"居中弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"},{popupData:{overlay:!0,mode:"bottom",round:10,closeOnClickOverlay:!0},title:"显示圆角",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showRadis.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!1,closeOnClickOverlay:!1},title:"禁止点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/noClose.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!0,closeOnClickOverlay:!0},title:"显示关闭按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"}]}),methods:{openPopup(o){this.popupData=o,uni.$u.sleep().then((()=>{this.show=!this.show}))},navigateBack(){uni.navigateBack()},open(){},close(){this.show=!1}}},[["render",function(y,b,O,g,C,k){const D=d(r("u-navbar"),o),j=d(r("u-gap"),m),_=c,x=d(r("u-cell"),v),U=d(r("u-cell-group"),f),B=d(r("u-button"),h),R=n,I=d(r("u-popup"),w);return e(),t(R,null,{default:p((()=>[a(D,{title:"弹窗",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),a(j,{height:"20",bgColor:"#fff"}),a(U,null,{default:p((()=>[(e(!0),l(s,null,i(C.list,((o,l)=>(e(),t(x,{titleStyle:{fontWeight:500},onClick:e=>k.openPopup(o.popupData),title:o.title,key:l,isLink:""},{default:p((()=>[a(_,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),a(I,{safeAreaInsetBottom:!0,safeAreaInsetTop:!0,mode:C.popupData.mode,show:C.show,round:C.popupData.round,overlay:C.popupData.overlay,borderRadius:C.popupData.borderRadius,closeable:C.popupData.closeable,closeOnClickOverlay:C.popupData.closeOnClickOverlay,onClose:k.close,onOpen:k.open},{default:p((()=>[a(R,{class:"u-popup-slot",style:u({width:["bottom","top"].includes(C.popupData.mode)?"750rpx":"200px",marginTop:["left","right"].includes(C.popupData.mode)?"480rpx":"0"})},{default:p((()=>[a(B,{type:"success",text:"点我关闭",customStyle:"width: 200rpx",onClick:b[0]||(b[0]=o=>C.show=!C.show)})])),_:1},8,["style"])])),_:1},8,["mode","show","round","overlay","borderRadius","closeable","closeOnClickOverlay","onClose","onOpen"])])),_:1})}],["__scopeId","data-v-12b07f25"]]);export{b as default};
