import{_ as s}from"./u-icon.019210d5.js";import{o as a,c as o,w as e,a as t,f as d,d as n,g as i,i as l,s as u}from"./index.063d1d59.js";import{r as p}from"./uni-app.es.a1ea7be9.js";import{_ as r}from"./u-button.5f9ef231.js";import{_ as c}from"./u-keyboard.9e22371b.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-loading-icon.c3a69b20.js";import"./u-popup.65b87fcd.js";import"./u-overlay.20247f59.js";import"./u-transition.ba4cb519.js";import"./u-status-bar.d6df4e62.js";import"./u-safe-bottom.656044f3.js";var h=f({data:()=>({show:!1,password:""}),onLoad(){},methods:{onChange(s){this.password.length<6&&(this.password+=s),this.password.length>=6&&this.pay()},onBackspace(s){this.password.length>0&&(this.password=this.password.substring(0,this.password.length-1))},pay(){uni.showLoading({title:"支付中"}),setTimeout((()=>{uni.hideLoading(),this.show=!1,uni.showToast({icon:"success",title:"支付成功"})}),2e3)},showPop(s=!0){this.password="",this.show=s},finish(){console.log(11111)}}},[["render",function(f,h,m,g,b,w){const _=p(n("u-icon"),s),j=i,k=p(n("u-button"),r),y=l,x=u("u-message-input"),C=p(n("u-keyboard"),c);return a(),o(y,null,{default:e((()=>[t(y,{class:"u-padding-40"},{default:e((()=>[t(k,{type:"success",onClick:h[0]||(h[0]=s=>w.showPop(!0))},{default:e((()=>[t(_,{name:"red-packet"}),t(j,{class:"u-padding-left-10"},{default:e((()=>[d("发送1.00元红包")])),_:1})])),_:1})])),_:1}),t(C,{default:"",ref:"uKeyboard",mode:"number",mask:!0,"mask-close-able":!1,"dot-enabled":!1,show:b.show,"safe-area-inset-bottom":!0,tooltip:!1,onChange:w.onChange,onBackspace:w.onBackspace},{default:e((()=>[t(y,null,{default:e((()=>[t(y,{class:"u-text-center u-padding-20 money"},{default:e((()=>[t(j,null,{default:e((()=>[d("1.00")])),_:1}),t(j,{class:"u-font-20 u-padding-left-10"},{default:e((()=>[d("元")])),_:1}),t(y,{class:"u-padding-10 close","data-flag":"false",onClick:h[1]||(h[1]=s=>w.showPop(!1))},{default:e((()=>[t(_,{name:"close",color:"#333333",size:"28"})])),_:1})])),_:1}),t(y,{class:"u-flex u-row-center"},{default:e((()=>[t(x,{mode:"box",maxlength:6,"dot-fill":!0,modelValue:b.password,"onUpdate:modelValue":h[2]||(h[2]=s=>b.password=s),"disabled-keyboard":!0,onFinish:w.finish},null,8,["modelValue","onFinish"])])),_:1}),t(y,{class:"u-text-center u-padding-top-10 u-padding-bottom-20 tips"},{default:e((()=>[d("支付键盘")])),_:1})])),_:1})])),_:1},8,["show","onChange","onBackspace"])])),_:1})}],["__scopeId","data-v-71afbeb6"]]);export{h as default};
