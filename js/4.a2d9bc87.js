(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{2682:function(t,e,a){"use strict";var n=a("5808"),i=a.n(n);i.a},5808:function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        正道之声\n      ")]),a("div",[t._v(t._s(t.date))])],1)],1),a("q-drawer",{attrs:{mini:t.miniState,"show-if-above":"",bordered:"","content-class":"bg-grey-2"},on:{mouseover:function(e){t.miniState=!1},mouseout:function(e){t.miniState=!0}},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",{attrs:{padding:""}},[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[a("img",{attrs:{src:"statics/zhengdao.jpg",width:"25px",alt:"正道中国"}})]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-ma-sm navigation-item",attrs:{"active-class":"tab-active",to:t.link,exact:"",clickable:""}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=(a("2682"),a("2877")),p=a("eebe"),u=a.n(p),m=a("66e5"),d=a("4074"),f=a("0016"),b=a("0170"),v=a("714f"),w=Object(c["a"])(s,l,r,!1,null,null,null),k=w.exports;u()(w,"components",{QItem:m["a"],QItemSection:d["a"],QIcon:f["a"],QItemLabel:b["a"]}),u()(w,"directives",{Ripple:v["a"]});var q={name:"MainLayout",components:{EssentialLink:k},data:function(){return{leftDrawerOpen:!1,miniState:!1,date:(new Date).toLocaleDateString("zh-CN"),essentialLinks:[{title:"新闻链接",caption:"",icon:"home",link:"/"},{title:"战友频道",caption:"",icon:"group",link:"channels"},{title:"最新视频",caption:"",icon:"movie",link:"videos"},{title:"关于",caption:"",icon:"person",link:"about"}]}}},g=q,_=a("4d5a"),L=a("e359"),Q=a("65c6"),h=a("9c40"),y=a("6ac5"),S=a("9404"),D=a("1c1c"),O=a("09e3"),x=Object(c["a"])(g,n,i,!1,null,null,null);e["default"]=x.exports;u()(x,"components",{QLayout:_["a"],QHeader:L["a"],QToolbar:Q["a"],QBtn:h["a"],QToolbarTitle:y["a"],QDrawer:S["a"],QList:D["a"],QItemLabel:b["a"],QPageContainer:O["a"]})}}]);