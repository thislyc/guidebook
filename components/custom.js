(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/custom"],{"301e":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar}},name:"custom",computed:{style:function(){var t=this.StatusBar,a=this.CustomBar,e=this.bgImage,n="height:".concat(a,"px;padding-top:").concat(t,"px;");return this.bgImage&&(n="".concat(n,"background-image:url(").concat(e,");")),n}},props:{bgColor:{type:String,default:""},hasHeight:{type:[Boolean,String],default:!0},isTitle:{type:[Boolean,String],default:!1},transparent:{type:[Boolean,String],default:!1},isBack:{type:[Boolean,String],default:!1},bgImage:{type:String,default:""},top:{type:Number,default:0}},methods:{BackPage:function(){t.navigateBack({delta:1})}}};a.default=e}).call(this,e("543d")["default"])},"35cf":function(t,a,e){"use strict";var n,u=function(){var t=this,a=t.$createElement;t._self._c},r=[];e.d(a,"b",(function(){return u})),e.d(a,"c",(function(){return r})),e.d(a,"a",(function(){return n}))},7543:function(t,a,e){"use strict";e.r(a);var n=e("35cf"),u=e("f0ba");for(var r in u)"default"!==r&&function(t){e.d(a,t,(function(){return u[t]}))}(r);var o,c=e("f0c5"),i=Object(c["a"])(u["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);a["default"]=i.exports},f0ba:function(t,a,e){"use strict";e.r(a);var n=e("301e"),u=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(a,t,(function(){return n[t]}))}(r);a["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/custom',
    {
        'components/custom':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7543"))
        })
    },
    [['components/custom']]
]);
