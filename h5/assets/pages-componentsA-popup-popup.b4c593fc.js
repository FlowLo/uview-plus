import{_ as o}from"./u-navbar.d978f48c.js";import{o as e,c as t,w as p,a as l,b as a,r as i,F as s,q as u,d as r,i as c,e as n}from"./index.e2b961eb.js";import{r as d}from"./uni-app.es.f8d56709.js";import{_ as m}from"./u-gap.081abd21.js";import{_ as v}from"./u-cell.97c71986.js";import{_ as f}from"./u-cell-group.53153c2e.js";import{_ as h}from"./u-button.7cbfb2c7.js";import{_ as b}from"./u-popup.86162fc5.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-status-bar.fb49d1cd.js";import"./u-icon.00c3f616.js";import"./u-line.25650e30.js";import"./u-loading-icon.0dc87d48.js";import"./u-overlay.349866fb.js";import"./u-transition.3af68c24.js";import"./u-safe-bottom.25ab8339.js";var y=w({data:()=>({show:!1,popupData:{overlay:!0,mode:"bottom",borderRadius:"",closeable:!0,closeOnClickOverlay:!0},list:[{popupData:{overlay:!0,mode:"top",closeOnClickOverlay:!0},title:"顶部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeTop.png"},{popupData:{overlay:!0,mode:"right",closeOnClickOverlay:!0},title:"右侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeRight.png"},{popupData:{overlay:!0,mode:"bottom",closeOnClickOverlay:!0},title:"底部弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeBottom.png"},{popupData:{overlay:!0,mode:"left",closeOnClickOverlay:!0},title:"左侧弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeLeft.png"},{popupData:{overlay:!0,mode:"center",round:10,closeOnClickOverlay:!0},title:"居中弹出",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/modeCenter.png"},{popupData:{overlay:!0,mode:"bottom",round:10,closeOnClickOverlay:!0},title:"显示圆角",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showRadis.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!1,closeOnClickOverlay:!1},title:"禁止点击遮罩关闭",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/noClose.png"},{popupData:{overlay:!0,mode:"bottom",closeable:!0,closeOnClickOverlay:!0},title:"显示关闭按钮",iconUrl:"https://cdn.uviewui.com/uview/demo/popup/showCloseBtn.png"}]}),methods:{openPopup(o){this.popupData=o,uni.$u.sleep().then((()=>{this.show=!this.show}))},navigateBack(){uni.navigateBack()},open(){},close(){this.show=!1}}},[["render",function(w,y,O,g,C,k){const D=d(r("u-navbar"),o),j=d(r("u-gap"),m),_=n,x=d(r("u-cell"),v),U=d(r("u-cell-group"),f),B=d(r("u-button"),h),R=c,I=d(r("u-popup"),b);return e(),t(R,null,{default:p((()=>[l(D,{title:"弹窗",onLeftClick:k.navigateBack,safeAreaInsetTop:"",fixed:"",placeholder:""},null,8,["onLeftClick"]),l(j,{height:"20",bgColor:"#fff"}),l(U,null,{default:p((()=>[(e(!0),a(s,null,i(C.list,((o,a)=>(e(),t(x,{titleStyle:{fontWeight:500},onClick:e=>k.openPopup(o.popupData),title:o.title,key:a,isLink:""},{default:p((()=>[l(_,{slot:"icon",class:"u-cell-icon",src:o.iconUrl,mode:"widthFix"},null,8,["src"])])),_:2},1032,["onClick","title"])))),128))])),_:1}),l(I,{safeAreaInsetBottom:!0,safeAreaInsetTop:!0,mode:C.popupData.mode,show:C.show,round:C.popupData.round,overlay:C.popupData.overlay,borderRadius:C.popupData.borderRadius,closeable:C.popupData.closeable,closeOnClickOverlay:C.popupData.closeOnClickOverlay,onClose:k.close,onOpen:k.open},{default:p((()=>[l(R,{class:"u-popup-slot",style:u({width:["bottom","top"].includes(C.popupData.mode)?"750rpx":"200px",marginTop:["left","right"].includes(C.popupData.mode)?"480rpx":"0"})},{default:p((()=>[l(B,{type:"success",text:"点我关闭",customStyle:"width: 200rpx",onClick:y[0]||(y[0]=o=>C.show=!C.show)})])),_:1},8,["style"])])),_:1},8,["mode","show","round","overlay","borderRadius","closeable","closeOnClickOverlay","onClose","onOpen"])])),_:1})}],["__scopeId","data-v-12b07f25"]]);export{y as default};
