import{_ as t}from"./u-icon.019210d5.js";import{o as e,c as s,w as i,a as l,f as a,b as r,r as o,F as c,d as n,g as u,i as h,S as m,p as d,u as p,t as g,e as f}from"./index.063d1d59.js";import{r as b}from"./uni-app.es.a1ea7be9.js";import{c as T}from"./classify.data.b4943125.js";import{_ as w}from"./plugin-vue_export-helper.21dcd24c.js";var _=w({data:()=>({scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",tabbar:T,menuItemPos:[],arr:[],scrollRightTop:0,timer:null}),onLoad(){},onReady(){this.getMenuItemTop()},methods:{async swichMenu(t){0==this.arr.length&&await this.getMenuItemTop(),t!=this.current&&(this.scrollRightTop=this.oldScrollTop,this.$nextTick((function(){this.scrollRightTop=this.arr[t],this.current=t,this.leftMenuStatus(t)})))},getElRect(t,e){new Promise(((s,i)=>{uni.createSelectorQuery().in(this).select("."+t).fields({size:!0},(i=>{i?(this[e]=i.height,s()):setTimeout((()=>{this.getElRect(t)}),10)})).exec()}))},async observer(){this.tabbar.map(((t,e)=>{uni.createIntersectionObserver(this).relativeTo(".right-box",{top:0}).observe("#item"+e,(t=>{if(t.intersectionRatio>0){let e=t.id.substring(4);this.leftMenuStatus(e)}}))}))},async leftMenuStatus(t){this.current=t,0!=this.menuHeight&&0!=this.menuItemHeight||(await this.getElRect("menu-scroll-view","menuHeight"),await this.getElRect("u-tab-item","menuItemHeight")),this.scrollTop=t*this.menuItemHeight+this.menuItemHeight/2-this.menuHeight/2},getMenuItemTop(){new Promise((t=>{uni.createSelectorQuery().selectAll(".class-item").boundingClientRect((e=>{e.length?e.forEach((s=>{this.arr.push(s.top-e[0].top),t()})):setTimeout((()=>{this.getMenuItemTop()}),10)})).exec()}))},async rightScroll(t){this.oldScrollTop=t.detail.scrollTop,0==this.arr.length&&await this.getMenuItemTop(),this.timer||(this.menuHeight||await this.getElRect("menu-scroll-view","menuHeight"),setTimeout((()=>{this.timer=null;let e=t.detail.scrollTop+this.menuHeight/2;for(let t=0;t<this.arr.length;t++){let s=this.arr[t],i=this.arr[t+1];if(!i||e>=s&&e<i)return void this.leftMenuStatus(t)}}),10))}}},[["render",function(T,w,_,v,I,S){const y=b(n("u-icon"),t),H=u,R=h,x=m,M=f;return e(),s(R,{class:"u-wrap"},{default:i((()=>[l(R,{class:"u-search-box"},{default:i((()=>[l(R,{class:"u-search-inner"},{default:i((()=>[l(y,{name:"search",color:"#909399",size:28}),l(H,{class:"u-search-text"},{default:i((()=>[a("搜索")])),_:1})])),_:1})])),_:1}),l(R,{class:"u-menu-wrap"},{default:i((()=>[l(x,{"scroll-y":"","scroll-with-animation":"",class:"u-tab-view menu-scroll-view","scroll-top":I.scrollTop,"scroll-into-view":I.itemId},{default:i((()=>[(e(!0),r(c,null,o(I.tabbar,((t,r)=>(e(),s(R,{key:r,class:d(["u-tab-item",[I.current==r?"u-tab-item-active":""]]),onClick:p((t=>S.swichMenu(r)),["stop"])},{default:i((()=>[l(H,{class:"u-line-1"},{default:i((()=>[a(g(t.name),1)])),_:2},1024)])),_:2},1032,["class","onClick"])))),128))])),_:1},8,["scroll-top","scroll-into-view"]),l(x,{"scroll-top":I.scrollRightTop,"scroll-y":"","scroll-with-animation":"",class:"right-box",onScroll:S.rightScroll},{default:i((()=>[l(R,{class:"page-view"},{default:i((()=>[(e(!0),r(c,null,o(I.tabbar,((t,n)=>(e(),s(R,{class:"class-item",id:"item"+n,key:n},{default:i((()=>[l(R,{class:"item-title"},{default:i((()=>[l(H,null,{default:i((()=>[a(g(t.name),1)])),_:2},1024)])),_:2},1024),l(R,{class:"item-container"},{default:i((()=>[(e(!0),r(c,null,o(t.foods,((t,r)=>(e(),s(R,{class:"thumb-box",key:r},{default:i((()=>[l(M,{class:"item-menu-image",src:t.icon,mode:""},null,8,["src"]),l(R,{class:"item-menu-name"},{default:i((()=>[a(g(t.name),1)])),_:2},1024)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["id"])))),128))])),_:1})])),_:1},8,["scroll-top","onScroll"])])),_:1})])),_:1})}],["__scopeId","data-v-3d7857a6"]]);export{_ as default};
