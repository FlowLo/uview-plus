import{j as e,m as t,k as a,o,c as s,w as u,f as l,t as r,p as d,q as i,n,g as b}from"./index.063d1d59.js";import{_ as h}from"./plugin-vue_export-helper.21dcd24c.js";var g=h({name:"u-badge",mixins:[t,{props:{isDot:{type:Boolean,default:e.badge.isDot},value:{type:[Number,String],default:e.badge.value},modelValue:{type:[Number,String],default:e.badge.modelValue},show:{type:Boolean,default:e.badge.show},max:{type:[Number,String],default:e.badge.max},type:{type:String,default:e.badge.type},showZero:{type:Boolean,default:e.badge.showZero},bgColor:{type:[String,null],default:e.badge.bgColor},color:{type:[String,null],default:e.badge.color},shape:{type:String,default:e.badge.shape},numberType:{type:String,default:e.badge.numberType},offset:{type:Array,default:e.badge.offset},inverted:{type:Boolean,default:e.badge.inverted},absolute:{type:Boolean,default:e.badge.absolute}}},a],computed:{boxStyle:()=>({}),badgeStyle(){const e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){const t=this.offset[0],a=this.offset[1]||t;e.top=uni.$u.addUnit(t),e.right=uni.$u.addUnit(a)}return e},showValue(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}},[["render",function(e,t,a,h,g,p){const f=b;return e.show&&(0!==Number(e.value)||e.showZero||e.isDot)?(o(),s(f,{key:0,class:d([[e.isDot?"u-badge--dot":"u-badge--not-dot",e.inverted&&"u-badge--inverted","horn"===e.shape&&"u-badge--horn",`u-badge--${e.type}${e.inverted?"--inverted":""}`],"u-badge"]),style:i([e.$u.addStyle(e.customStyle),p.badgeStyle])},{default:u((()=>[l(r(e.isDot?"":p.showValue),1)])),_:1},8,["class","style"])):n("",!0)}],["__scopeId","data-v-ef539908"]]);export{g as _};
