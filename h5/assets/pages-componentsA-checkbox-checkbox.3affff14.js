import{o as e,c as a,w as l,a as c,f as o,b as d,r as t,F as u,g as n,d as s,i as m}from"./index.063d1d59.js";import{_ as b,a as _}from"./u-checkbox-group.8c477d7a.js";import{r as k}from"./uni-app.es.a1ea7be9.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.019210d5.js";var h=i({data:()=>({checkboxList1:[{name:"苹果",disabled:!1},{name:"香蕉",disabled:!1},{name:"橙子",disabled:!1}],checkboxValue1:["苹果","橙子"],checkboxList2:[{name:"西游记",disabled:!1},{name:"红楼梦",disabled:!1},{name:"三国演义",disabled:!1},{name:"水浒传",disabled:!1}],checkboxValue2:["西游记","红楼梦","三国演义","水浒传"],checkboxList3:[{name:"冬瓜",disabled:!1},{name:"西瓜",disabled:!1},{name:"黄瓜",disabled:!1},{name:"傻瓜",disabled:!1}],checkboxValue3:["傻瓜"],checkboxList4:[{name:"黄庭坚",disabled:!1},{name:"欧阳修",disabled:!1},{name:"苏小宝",disabled:!1},{name:"王安石",disabled:!1}],checkboxValue4:["黄庭坚","欧阳修","王安石"],checkboxList5:[{name:"红色",disabled:!1},{name:"黄色",disabled:!1},{name:"绿色",disabled:!1},{name:"蓝色",disabled:!1}],checkboxValue5:["绿色"],checkboxList6:[{name:"小鸟",disabled:!1},{name:"游艇",disabled:!1},{name:"轮船",disabled:!1},{name:"飞机",disabled:!1}],checkboxValue6:["游艇","轮船"],checkboxList7:[{name:"汽车",disabled:!1},{name:"蒸汽机",disabled:!1},{name:"猪肉",disabled:!1},{name:"抄手",disabled:!1}],checkboxValue7:["汽车","蒸汽机"]}),watch:{checkboxValue1(e,a){}},methods:{checkboxChange(e){}}},[["render",function(i,h,x,f,g,p){const V=n,r=k(s("u-checkbox"),b),C=k(s("u-checkbox-group"),_),y=m;return e(),a(y,{class:"u-page"},{default:l((()=>[c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("基本案例")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("苹果、香蕉和橙子哪个最甜？")])),_:1}),c(y,{class:"u-demo-block__content"},{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue1,"onUpdate:modelValue":h[0]||(h[0]=e=>g.checkboxValue1=e),placement:"column",onChange:p.checkboxChange},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList1,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("自定义形状")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("中国四大名著是？")])),_:1}),c(y,{class:"u-demo-block__content"},{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue2,"onUpdate:modelValue":h[1]||(h[1]=e=>g.checkboxValue2=e),placement:"column",onChange:p.checkboxChange,shape:"square"},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList2,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("是否禁用")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("下面什么东西不能吃？")])),_:1}),c(y,{class:"u-demo-block__content"},{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue3,"onUpdate:modelValue":h[2]||(h[2]=e=>g.checkboxValue3=e),placement:"column",onChange:p.checkboxChange},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList3,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name,disabled:0===c},null,8,["label","name","disabled"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("是否禁止点击提示语选中复选框")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("北宋四大家是谁？")])),_:1}),c(y,{class:"u-demo-block__content"},{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue4,"onUpdate:modelValue":h[3]||(h[3]=e=>g.checkboxValue4=e),placement:"column",onChange:p.checkboxChange,labelDisabled:!0},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList4,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("自定义颜色")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("哪个颜色最好看？")])),_:1}),c(y,{class:"u-demo-block__content"},{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue5,"onUpdate:modelValue":h[4]||(h[4]=e=>g.checkboxValue5=e),placement:"column",onChange:p.checkboxChange,activeColor:"#19be6b"},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList5,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"8px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("横向排列形式")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("什么东西不能飞？")])),_:1}),c(y,{class:"u-demo-block__content"},{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue6,"onUpdate:modelValue":h[5]||(h[5]=e=>g.checkboxValue6=e),onChange:p.checkboxChange},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList6,((l,c)=>(e(),a(r,{customStyle:{marginRight:"16px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1}),c(y,{class:"u-demo-block"},{default:l((()=>[c(V,{class:"u-demo-block__title"},{default:l((()=>[o("横向两端排列形式")])),_:1}),c(V,{class:"u-block__title"},{default:l((()=>[o("什么东西不能吃？")])),_:1}),c(y,null,{default:l((()=>[c(y,{class:"u-page__checkbox-item"},{default:l((()=>[c(C,{modelValue:g.checkboxValue7,"onUpdate:modelValue":h[6]||(h[6]=e=>g.checkboxValue7=e),onChange:p.checkboxChange,borderBottom:!0,placement:"column",iconPlacement:"right"},{default:l((()=>[(e(!0),d(u,null,t(g.checkboxList7,((l,c)=>(e(),a(r,{customStyle:{marginBottom:"16px"},key:c,label:l.name,name:l.name},null,8,["label","name"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-926e1bfa"]]);export{h as default};
