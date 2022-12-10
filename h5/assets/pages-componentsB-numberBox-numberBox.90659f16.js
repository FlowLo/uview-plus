var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,s=(e,t)=>{for(var l in t||(t={}))o.call(t,l)&&u(e,l,t[l]);if(n)for(var l of n(t))a.call(t,l)&&u(e,l,t[l]);return e},i=(e,n)=>t(e,l(n));import{j as r,m as d,k as c,d as h,o as m,c as p,w as b,u as g,l as f,p as y,q as v,a as C,n as x,i as V,I as _,f as S,t as T,g as B}from"./index.063d1d59.js";import{_ as P}from"./u-icon.019210d5.js";import{r as w}from"./uni-app.es.a1ea7be9.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{_ as $}from"./u-cell.42cef35a.js";import{_ as F}from"./u-cell-group.c1c272ea.js";import"./u-line.5d70f236.js";var U=k({name:"u-number-box",mixins:[d,c,{props:{name:{type:[String,Number],default:r.numberBox.name},modelValue:{type:[String,Number],default:r.numberBox.value},min:{type:[String,Number],default:r.numberBox.min},max:{type:[String,Number],default:r.numberBox.max},step:{type:[String,Number],default:r.numberBox.step},integer:{type:Boolean,default:r.numberBox.integer},disabled:{type:Boolean,default:r.numberBox.disabled},disabledInput:{type:Boolean,default:r.numberBox.disabledInput},asyncChange:{type:Boolean,default:r.numberBox.asyncChange},inputWidth:{type:[String,Number],default:r.numberBox.inputWidth},showMinus:{type:Boolean,default:r.numberBox.showMinus},showPlus:{type:Boolean,default:r.numberBox.showPlus},decimalLength:{type:[String,Number,null],default:r.numberBox.decimalLength},longPress:{type:Boolean,default:r.numberBox.longPress},color:{type:String,default:r.numberBox.color},buttonSize:{type:[String,Number],default:r.numberBox.buttonSize},bgColor:{type:String,default:r.numberBox.bgColor},cursorSpacing:{type:[String,Number],default:r.numberBox.cursorSpacing},disablePlus:{type:Boolean,default:r.numberBox.disablePlus},disableMinus:{type:Boolean,default:r.numberBox.disableMinus},iconStyle:{type:[Object,String],default:r.numberBox.iconStyle}}}],data:()=>({currentValue:"",longPressTimer:null}),watch:{watchChange(e){this.check()},modelValue(e){e!==this.currentValue&&(this.currentValue=this.format(this.modelValue))}},computed:{getCursorSpacing(){return uni.$u.getPx(this.cursorSpacing)},buttonStyle(){return e=>{const t={backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),color:this.color};return this.isDisabled(e)&&(t.backgroundColor="#f7f8fa"),t}},inputStyle(){this.disabled||this.disabledInput;return{color:this.color,backgroundColor:this.bgColor,height:uni.$u.addUnit(this.buttonSize),width:uni.$u.addUnit(this.inputWidth)}},watchChange(){return[this.integer,this.decimalLength,this.min,this.max]},isDisabled(){return e=>"plus"===e?this.disabled||this.disablePlus||this.currentValue>=this.max:this.disabled||this.disableMinus||this.currentValue<=this.min}},mounted(){this.init()},emits:["update:modelValue","focus","blur","overlimit","change","plus","minus"],methods:{init(){this.currentValue=this.format(this.modelValue)},format(e){return e=""===(e=this.filter(e))?0:+e,e=Math.max(Math.min(this.max,e),this.min),null!==this.decimalLength&&(e=e.toFixed(this.decimalLength)),e},filter(e){return e=String(e).replace(/[^0-9.-]/g,""),this.integer&&-1!==e.indexOf(".")&&(e=e.split(".")[0]),e},check(){const e=this.format(this.currentValue);e!==this.currentValue&&(this.currentValue=e)},onFocus(e){this.$emit("focus",i(s({},e.detail),{name:this.name}))},onBlur(e){this.format(e.detail.value),this.$emit("blur",i(s({},e.detail),{name:this.name}))},onInput(e){const{value:t=""}=e.detail||{};if(""===t)return;let l=this.filter(t);if(null!==this.decimalLength&&-1!==l.indexOf(".")){const e=l.split(".");l=`${e[0]}.${e[1].slice(0,this.decimalLength)}`}l=this.format(l),this.emitChange(l)},emitChange(e){this.asyncChange||this.$nextTick((()=>{this.$emit("update:modelValue",e),this.currentValue=e,this.$forceUpdate()})),this.$emit("change",{value:e,name:this.name})},onChange(){const{type:e}=this;if(this.isDisabled(e))return this.$emit("overlimit",e);const t="minus"===e?-this.step:+this.step,l=this.format(this.add(+this.currentValue,t));this.emitChange(l),this.$emit(e)},add(e,t){const l=Math.pow(10,10);return Math.round((e+t)*l)/l},clickHandler(e){this.type=e,this.onChange()},longPressStep(){this.clearTimeout(),this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),250)},onTouchStart(e){this.longPress&&(this.clearTimeout(),this.type=e,this.longPressTimer=setTimeout((()=>{this.onChange(),this.longPressStep()}),600))},onTouchEnd(){this.longPress&&this.clearTimeout()},clearTimeout(){clearTimeout(this.longPressTimer),this.longPressTimer=null}}},[["render",function(e,t,l,n,o,a){const u=V,s=w(h("u-icon"),P),i=_;return m(),p(u,{class:"u-number-box"},{default:b((()=>[e.showMinus&&e.$slots.minus?(m(),p(u,{key:0,class:"u-number-box__slot",onClick:t[0]||(t[0]=g((e=>a.clickHandler("minus")),["stop"])),onTouchstart:t[1]||(t[1]=e=>a.onTouchStart("minus")),onTouchend:g(a.clearTimeout,["stop"])},{default:b((()=>[f(e.$slots,"minus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showMinus?(m(),p(u,{key:1,class:y(["u-number-box__minus",{"u-number-box__minus--disabled":a.isDisabled("minus")}]),onClick:t[2]||(t[2]=g((e=>a.clickHandler("minus")),["stop"])),onTouchstart:t[3]||(t[3]=e=>a.onTouchStart("minus")),onTouchend:g(a.clearTimeout,["stop"]),"hover-class":"u-number-box__minus--hover","hover-stay-time":"150",style:v([a.buttonStyle("minus")])},{default:b((()=>[C(s,{name:"minus",color:a.isDisabled("minus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):x("",!0),f(e.$slots,"input",{},(()=>[C(i,{disabled:e.disabledInput||e.disabled,"cursor-spacing":a.getCursorSpacing,class:y([{"u-number-box__input--disabled":e.disabled||e.disabledInput},"u-number-box__input"]),modelValue:o.currentValue,"onUpdate:modelValue":t[4]||(t[4]=e=>o.currentValue=e),onBlur:a.onBlur,onFocus:a.onFocus,onInput:a.onInput,type:"number",style:v([a.inputStyle])},null,8,["disabled","cursor-spacing","class","modelValue","onBlur","onFocus","onInput","style"])]),!0),e.showPlus&&e.$slots.plus?(m(),p(u,{key:2,class:"u-number-box__slot",onClick:t[5]||(t[5]=g((e=>a.clickHandler("plus")),["stop"])),onTouchstart:t[6]||(t[6]=e=>a.onTouchStart("plus")),onTouchend:g(a.clearTimeout,["stop"])},{default:b((()=>[f(e.$slots,"plus",{},void 0,!0)])),_:3},8,["onTouchend"])):e.showPlus?(m(),p(u,{key:3,class:y(["u-number-box__plus",{"u-number-box__minus--disabled":a.isDisabled("plus")}]),onClick:t[7]||(t[7]=g((e=>a.clickHandler("plus")),["stop"])),onTouchstart:t[8]||(t[8]=e=>a.onTouchStart("plus")),onTouchend:g(a.clearTimeout,["stop"]),"hover-class":"u-number-box__plus--hover","hover-stay-time":"150",style:v([a.buttonStyle("plus")])},{default:b((()=>[C(s,{name:"plus",color:a.isDisabled("plus")?"#c8c9cc":"#323233",size:"15",bold:"",customStyle:e.iconStyle},null,8,["color","customStyle"])])),_:1},8,["onTouchend","class","style"])):x("",!0)])),_:3})}],["__scopeId","data-v-757acca0"]]);var j=k({data:()=>({value1:3,value2:3,value3:3,value4:3,value5:3,value6:3,value7:3,value8:3.1,value9:3,value10:3,value11:3,step1:2,min1:5,max1:8,asyncChange:!0,color:"#FFFFFF",buttonSize:36,bgColor:"#2979ff"}),methods:{change(e){console.log("change",e)},myAsyncChange(e){this.asyncChange=!1,uni.showLoading({title:"正在加载"}),setTimeout((()=>{uni.hideLoading(),this.value9=e,this.asyncChange=!0}),3e3)}}},[["render",function(e,t,l,n,o,a){const u=w(h("u-number-box"),U),s=w(h("u-cell"),$),i=w(h("u-icon"),P),r=V,d=B,c=w(h("u-cell-group"),F);return m(),p(r,{class:""},{default:b((()=>[C(c,{border:!0},{default:b((()=>[C(s,{border:!0,title:"基础用法"},{"right-icon":b((()=>[C(u,{modelValue:o.value1,"onUpdate:modelValue":t[0]||(t[0]=e=>o.value1=e),step:"1",onChange:a.change},null,8,["modelValue","onChange"])])),_:1}),C(s,{border:!0,title:"步长设置"},{"right-icon":b((()=>[C(u,{modelValue:o.value2,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value2=e),step:o.step1,onChange:a.change},null,8,["modelValue","step","onChange"])])),_:1}),C(s,{border:!0,title:"限制输入范围"},{"right-icon":b((()=>[C(u,{modelValue:o.value3,"onUpdate:modelValue":t[2]||(t[2]=e=>o.value3=e),step:"1",min:o.min1,max:o.max1,onChange:a.change},null,8,["modelValue","min","max","onChange"])])),_:1}),C(s,{border:!0,title:"限制输入整数"},{"right-icon":b((()=>[C(u,{modelValue:o.value4,"onUpdate:modelValue":t[3]||(t[3]=e=>o.value4=e),step:"1",integer:"",onChange:a.change},null,8,["modelValue","onChange"])])),_:1}),C(s,{border:!0,title:"禁用状态"},{"right-icon":b((()=>[C(u,{modelValue:o.value5,"onUpdate:modelValue":t[4]||(t[4]=e=>o.value5=e),step:"1",disabled:!0,onChange:a.change},null,8,["modelValue","onChange"])])),_:1}),C(s,{border:!0,title:"禁用输入框"},{"right-icon":b((()=>[C(u,{modelValue:o.value6,"onUpdate:modelValue":t[5]||(t[5]=e=>o.value6=e),step:"1",disabledInput:!0,onChange:a.change},null,8,["modelValue","onChange"])])),_:1}),C(s,{border:!0,title:"禁用长按"},{"right-icon":b((()=>[C(u,{modelValue:o.value7,"onUpdate:modelValue":t[6]||(t[6]=e=>o.value7=e),step:"1",longPress:!1,onChange:a.change},null,8,["modelValue","onChange"])])),_:1}),C(s,{border:!0,title:"固定小数位数"},{"right-icon":b((()=>[C(u,{modelValue:o.value8,"onUpdate:modelValue":t[7]||(t[7]=e=>o.value8=e),step:"0.2",decimalLength:"1",onChange:a.change},null,8,["modelValue","onChange"])])),_:1}),C(s,{border:!0,title:"异步变更"},{"right-icon":b((()=>[C(u,{modelValue:o.value9,"onUpdate:modelValue":t[8]||(t[8]=e=>o.value9=e),step:"1",asyncChange:o.asyncChange,onChange:a.myAsyncChange},null,8,["modelValue","asyncChange","onChange"])])),_:1}),C(s,{border:!0,title:"自定义大小颜色样式"},{"right-icon":b((()=>[C(u,{modelValue:o.value10,"onUpdate:modelValue":t[9]||(t[9]=e=>o.value10=e),step:"1",color:o.color,buttonSize:o.buttonSize,bgColor:o.bgColor,onChange:a.change,iconStyle:"color: #fff"},null,8,["modelValue","color","buttonSize","bgColor","onChange"])])),_:1}),C(s,{border:!0,title:"自定义(为0时减少按钮会消失)"},{"right-icon":b((()=>[C(u,{modelValue:o.value11,"onUpdate:modelValue":t[10]||(t[10]=e=>o.value11=e),step:"1",min:0,showMinus:o.value11>0},{minus:b((()=>[C(r,{class:"minus"},{default:b((()=>[C(i,{name:"minus",size:"12"})])),_:1})])),input:b((()=>[C(d,{style:{width:"50px","text-align":"center"},class:"input"},{default:b((()=>[S(T(o.value11),1)])),_:1})])),plus:b((()=>[C(r,{class:"plus"},{default:b((()=>[C(i,{name:"plus",color:"#FFFFFF",size:"12"})])),_:1})])),_:1},8,["modelValue","showMinus"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-51831bde"]]);export{j as default};
