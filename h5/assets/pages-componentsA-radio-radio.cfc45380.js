import{o as a,c as e,w as l,a as d,f as o,b as u,r as t,F as s,t as m,g as i,d as n,i as c}from"./index.063d1d59.js";import{_,a as r}from"./u-radio-group.e054cde4.js";import{r as b}from"./uni-app.es.a1ea7be9.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.019210d5.js";var p=f({data:()=>({radiolist1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"橙子",disabled:!1},{name:"榴莲",disabled:!1}],radiovalue1:"苹果",radiolist2:[{name:"李白",disabled:!1},{name:"韩信",disabled:!1},{name:"马可波罗",disabled:!1},{name:"百里守约",disabled:!1}],radiovalue2:"李白",radiolist3:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"菠萝",disabled:!1}],radiovalue3:"苹果",radiolist4:[{name:"3倍镜",disabled:!1},{name:"4倍镜",disabled:!1},{name:"6倍镜",disabled:!1},{name:"8倍镜",disabled:!1}],radiovalue4:"6倍镜",radiolist5:[{name:"红色",disabled:!1},{name:"绿色",disabled:!1},{name:"蓝色",disabled:!1},{name:"黄色",disabled:!1}],radiovalue5:"绿色",radiolist6:[{name:"妲己",disabled:!1},{name:"虞姬",disabled:!1},{name:"不知火舞",disabled:!1}],radiovalue6:"妲己",radiolist7:[{name:"可爱",disabled:!1},{name:"一般",disabled:!1},{name:"不可爱",disabled:!1}],radiovalue7:"可爱"}),watch:{radiovalue1(a,e){console.log("v-model",a)}},methods:{groupChange(a){console.log("groupChange",a)},radioChange(a){console.log("radioChange",a)}}},[["render",function(f,p,g,k,v,V){const h=i,y=b(n("u-radio"),_),C=b(n("u-radio-group"),r),x=c;return a(),e(x,{class:"u-page"},{default:l((()=>[d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("基本案例")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("苹果、香蕉和橙子哪个最甜？")])),_:1}),d(x,{class:"u-demo-block__content"},{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue1,"onUpdate:modelValue":p[0]||(p[0]=a=>v.radiovalue1=a),placement:"column",onChange:V.groupChange},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist1,((l,d)=>(a(),e(y,{customStyle:{marginBottom:"8px"},key:d,label:l.name,name:l.name,onChange:V.radioChange},null,8,["label","name","onChange"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1}),o(" "+m(v.radiovalue1),1)])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("自定义形状")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("王者荣耀谁最帅？")])),_:1}),d(x,{class:"u-demo-block__content"},{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue2,"onUpdate:modelValue":p[1]||(p[1]=a=>v.radiovalue2=a),placement:"column",shape:"square"},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist2,((l,d)=>(a(),e(y,{customStyle:{marginBottom:"8px"},key:d,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),o(" "+m(v.radiovalue2),1)])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("是否禁用")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("苹果、香蕉和菠萝哪个最甜？")])),_:1}),d(x,{class:"u-demo-block__content"},{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue3,"onUpdate:modelValue":p[2]||(p[2]=a=>v.radiovalue3=a),placement:"column"},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist3,((l,d)=>(a(),e(y,{customStyle:{marginBottom:"8px"},key:d,label:l.name,name:l.name,disabled:!d},null,8,["label","name","disabled"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("纵向排列")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("狙击枪用哪个倍镜最好？")])),_:1}),d(x,{class:"u-demo-block__content"},{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue4,"onUpdate:modelValue":p[3]||(p[3]=a=>v.radiovalue4=a),placement:"column",labelDisabled:!0},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist4,((l,d)=>(a(),e(y,{customStyle:{marginBottom:"8px"},key:d,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("自定义颜色？")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("你比较喜欢下面哪个颜色？")])),_:1}),d(x,{class:"u-demo-block__content"},{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue5,"onUpdate:modelValue":p[4]||(p[4]=a=>v.radiovalue5=a),placement:"column",activeColor:"#19be6b"},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist5,((l,d)=>(a(),e(y,{customStyle:{marginBottom:"8px"},key:d,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("横向排列形式？")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("王者荣耀哪个英雄最美？")])),_:1}),d(x,{class:"u-demo-block__content"},{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue6,"onUpdate:modelValue":p[5]||(p[5]=a=>v.radiovalue6=a),placement:"row"},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist6,((l,d)=>(a(),e(y,{customStyle:{marginRight:"16px"},key:d,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1}),d(x,{class:"u-demo-block"},{default:l((()=>[d(h,{class:"u-demo-block__title"},{default:l((()=>[o("横向两端排列形式？")])),_:1}),d(h,{class:"u-block__title"},{default:l((()=>[o("你觉得阿木木可爱吗？")])),_:1}),d(x,null,{default:l((()=>[d(x,{class:"u-page__radio-item"},{default:l((()=>[d(C,{modelValue:v.radiovalue7,"onUpdate:modelValue":p[6]||(p[6]=a=>v.radiovalue7=a),borderBottom:!0,placement:"column",iconPlacement:"right"},{default:l((()=>[(a(!0),u(s,null,t(v.radiolist7,((l,d)=>(a(),e(y,{customStyle:{marginBottom:"16px"},key:d,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-6cfefec4"]]);export{p as default};
