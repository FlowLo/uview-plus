(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{566:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"nvue特性相关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvue特性相关"}},[t._v("#")]),t._v(" Nvue特性相关")]),t._v(" "),s("p",[t._v("前言：uview-plus在1.x版本，只有部分组件支持"),s("code",[t._v("nvue")]),t._v("，不推荐在"),s("code",[t._v("nvue")]),t._v("项目中使用，目前uview-plus研发组正在研发2.0版本，将会全面兼容"),s("code",[t._v("nvue")]),t._v("，我们在这里做一个专题，列出一些"),s("code",[t._v("nvue")]),t._v("上的坑，希望能帮助到您。")]),t._v(" "),s("h3",{attrs:{id:"text组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text组件"}},[t._v("#")]),t._v(" Text组件")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("我们在"),s("code",[t._v("vue")]),t._v("中，可以将文本相关的内容放到"),s("code",[t._v("view")]),t._v("或者"),s("code",[t._v("text")]),t._v("组件，这都是没问题的，但是在"),s("code",[t._v("nvue")]),t._v("中，需要动态响应(双向绑定)的内容，必须放在"),s("code",[t._v("text")]),t._v("标签，如果放在"),s("code",[t._v("view")]),t._v("可以正常显示，但是无法双向绑定。")])]),t._v(" "),s("li",[s("p",[t._v("在"),s("code",[t._v("nvue")]),t._v("中，文本的样式无法继承父元素的颜色(color)，必须具体到给每一个"),s("code",[t._v("text")]),t._v("元素定义类名，在通过指定的类名给赋予颜色值，其他类似出现不能继承父组件的情况，也可参考此做法。")])]),t._v(" "),s("li",[s("p",[t._v("在"),s("code",[t._v("nvue")]),t._v("中，"),s("code",[t._v("text")]),t._v("组件不能换行写内容，否则会出现无法去除的周边空白内容(类似被加上了"),s("code",[t._v("padding")]),t._v("或者"),s("code",[t._v("margin")]),t._v("的效果)，如下：")])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- nvue中错误写法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    桃花潭水深千尺\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- nvue中正确写法 --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("不及汪伦送我情"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"事件冒泡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件冒泡"}},[t._v("#")]),t._v(" 事件冒泡")]),t._v(" "),s("p",[s("code",[t._v("weex")]),t._v("事件冒泡相关文档 —— "),s("a",{attrs:{href:"https://weex.apache.org/zh/docs/events/event-bubbling.html#%E9%98%BB%E6%AD%A2%E5%86%92%E6%B3%A1",target:"_blank",rel:"noopener noreferrer"}},[t._v("事件冒泡"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("weex")]),t._v("原文中，需要给给页面(组件)根元素设置"),s("code",[t._v('bubble="true"')]),t._v("才能产生事件冒泡机制，但是在"),s("code",[t._v("uni-app")]),t._v("的"),s("code",[t._v("nvue")]),t._v("中，已自动加上类似"),s("code",[t._v('bubble="true"')]),t._v("的操作，无需用户额外干预，自动就会获得事件冒泡的机制。另外，在nvue中，我们可以通过如下方式阻止事件冒泡：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@tap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parentClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@tap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("childClick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("childClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内部被点击'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("parentClick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'父元素将不会捕获冒泡事件'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"line-height"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#line-height"}},[t._v("#")]),t._v(" line-height")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("nvue")]),t._v("中，"),s("code",[t._v("line-height")]),t._v("与字体大小"),s("code",[t._v("font-size")]),t._v("无关，如果赋予数值，单位默认为"),s("code",[t._v("px")]),t._v("，这意味着不可以如下使用：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* vue正常，nvue中会导致行高只有1px */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"样式穿透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式穿透"}},[t._v("#")]),t._v(" 样式穿透")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("weex")]),t._v("("),s("code",[t._v("nvue")]),t._v(")中有如此描述："),s("a",{attrs:{href:"https://weex.apache.org/zh/guide/use-vue-in-weex.html#%E5%B9%B3%E5%8F%B0%E7%9A%84%E5%B7%AE%E5%BC%82",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Weex 里， 每一个 Vue 组件的样式都是 scoped"),s("OutboundLink")],1),t._v("，这说明"),s("code",[t._v("vue")]),t._v("中的的"),s("code",[t._v("/deep/")]),t._v("和"),s("code",[t._v("::v-deep")]),t._v("在"),s("code",[t._v("nvue")]),t._v("中都是无效，修改子组件样式只能通过传参进行，而不能进行样式穿透。")]),t._v(" "),s("h3",{attrs:{id:"字体引入不能加引号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体引入不能加引号"}},[t._v("#")]),t._v(" 字体引入不能加引号")]),t._v(" "),s("p",[s("code",[t._v("nvue")]),t._v("下，"),s("code",[t._v("font-family")]),t._v("的字体引入，不能加引号，否则会导致字体图标无法显示，如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 错误写法 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'uicon-iconfont'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 正确写法 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" uicon-iconfont"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"nvue不支持全局mixin-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nvue不支持全局mixin-prototype"}},[t._v("#")]),t._v(" Nvue不支持全局Mixin，Prototype")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("nvue")]),t._v("中，不支持在类似"),s("code",[t._v("main.js")]),t._v("中进行全局"),s("code",[t._v("mixin")]),t._v("，如有需要，可以在每一个"),s("code",[t._v("nvue")]),t._v("文件中，独立引入使用，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js中如下写法nvue页面无效")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mixin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以在页面中进行mixin，比如test.nvue中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mixins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 另外，nvue页面中，定义在main.js中的Vue.propertype无效")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propertype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("xxx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"scss中的-export无效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scss中的-export无效"}},[t._v("#")]),t._v(" Scss中的:export无效")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("vue")]),t._v("中，我们可以通过"),s("code",[t._v("*.scss")]),t._v("中使用"),s("a",{attrs:{href:"https://www.jianshu.com/p/069f4f79de16",target:"_blank",rel:"noopener noreferrer"}},[t._v(":export"),s("OutboundLink")],1),t._v("进行变量导出，供"),s("code",[t._v("js")]),t._v("和"),s("code",[t._v("css")]),t._v("共同使用变量，但是"),s("code",[t._v("nvue")]),t._v("中不支持此写法，请勿使用。")]),t._v(" "),s("h3",{attrs:{id:"transition属性不能简写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transition属性不能简写"}},[t._v("#")]),t._v(" transition属性不能简写")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("vue")]),t._v("中，我们可以很方便的简写"),s("code",[t._v("transition")]),t._v("属性，但是"),s("code",[t._v("nvue")]),t._v("中，必须分开写才有效，如下：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://weex.apache.org/zh/docs/styles/common-styles.html#transition",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex文档关于transition的描述"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如下写法，vue有效，nvue无效 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity 0.3s ease-in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* nvue页面需要拆分成如下写法 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" opacity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-duration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.3s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition-timing-function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ease-in"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"box-shadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#box-shadow"}},[t._v("#")]),t._v(" box-shadow")]),t._v(" "),s("p",[t._v("据关于"),s("a",{attrs:{href:"https://weex.apache.org/zh/docs/styles/common-styles.html#%E9%98%B4%E5%BD%B1-box-shadow",target:"_blank",rel:"noopener noreferrer"}},[t._v("weex关于box-shadow文档"),s("OutboundLink")],1),t._v("描述，"),s("code",[t._v("weex")]),t._v("不支持"),s("code",[t._v("android")]),t._v("上的"),s("code",[t._v("box-shadow")]),t._v("属性，但是经实测，在"),s("code",[t._v("nvue")]),t._v("(uni-app改良后台的"),s("code",[t._v("weex")]),t._v(")上"),s("code",[t._v("android")]),t._v("，是支持的"),s("code",[t._v("box-shadow")]),t._v("属性效果的。")]),t._v(" "),s("p",[t._v("需要说明的是，在"),s("code",[t._v("IOS")]),t._v("上，目前(2020-10-30)不允许将"),s("code",[t._v("box-shadow")]),t._v("值设置为"),s("code",[t._v("none")]),t._v("，否则会出现锐利的高亮白色边框，由于"),s("code",[t._v("nvue")]),t._v("支持"),s("code",[t._v("rgba")]),t._v("透明度，我们可以通过如下方式实现类似"),s("code",[t._v("none")]),t._v("的效果：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 0 0 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rgba")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"border-radius"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#border-radius"}},[t._v("#")]),t._v(" border-radius")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://weex.apache.org/zh/docs/styles/common-styles.html#border-radius",target:"_blank",rel:"noopener noreferrer"}},[t._v("在"),s("code",[t._v("weex")]),t._v("文档中有明确的说明"),s("OutboundLink")],1),t._v("，"),s("code",[t._v("border-radius")]),t._v("支持简写形式，但是在"),s("code",[t._v("nvue")]),t._v("的"),s("code",[t._v("android")]),t._v("端，"),s("code",[t._v("border-radius")]),t._v("必须分开写才有效，如下：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* nvue下，安卓不支持此写法 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 必须如下写法才能兼容 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-left-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-right-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-left-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-right-radius")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"关于-template-和-block"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于-template-和-block"}},[t._v("#")]),t._v(" 关于<template/> 和 <block/>")]),t._v(" "),s("p",[t._v("以下文字取自uni-app文档原文，"),s("a",{attrs:{href:"https://uniapp.dcloud.io/frame?id=template-block",target:"_blank",rel:"noopener noreferrer"}},[t._v("点此查看"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("`<template/>` 和 `<block/>` 并不是一个组件，它们仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。  \n`<block/>` 在不同的平台表现存在一定差异，推荐统一使用 `<template/>`。\n")])])]),s("p",[t._v("上面说，二者不会在页面做任何的渲染，但是在"),s("code",[t._v("nvue")]),t._v("中，"),s("code",[t._v("<block/>")]),t._v("确确实实被渲染成为一个"),s("code",[t._v("<block/>")]),t._v("元素，由于"),s("code",[t._v("nvue")]),t._v("默认"),s("code",[t._v("flex")]),t._v("布局，且为\n"),s("code",[t._v("column")]),t._v("竖向布局，这可能会导致"),s("code",[t._v("<block/>")]),t._v("标签下存在多个其他元素时，这些元素会竖向排列，您不得不额外对"),s("code",[t._v("<block/>")]),t._v("元素设置样式，所以我们建议只要是"),s("code",[t._v("nvue")]),t._v("的场景，一律使用"),s("code",[t._v("<template/>")]),t._v("而不是"),s("code",[t._v("<block/>")]),t._v(" 标签")])])}),[],!1,null,null,null);s.default=e.exports}}]);