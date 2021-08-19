function e(){return(e=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function t(e,r){return(t=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,r,a){return(i=n()?Reflect.construct:function(e,r,n){var i=[null];i.push.apply(i,r);var a=new(Function.bind.apply(e,i));return n&&t(a,n.prototype),a}).apply(null,arguments)}function a(e){var n="function"==typeof Map?new Map:void 0;return(a=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,s)}function s(){return i(e,arguments,r(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),t(s,e)})(e)}var s=/%[sdj%]/g,u=function(){};function o(e){if(!e||!e.length)return null;var r={};return e.forEach((function(e){var t=e.field;r[t]=r[t]||[],r[t].push(e)})),r}function f(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];var i=0,a=t.length;if("function"==typeof e)return e.apply(null,t);if("string"==typeof e){var u=e.replace(s,(function(e){if("%%"===e)return"%";if(i>=a)return e;switch(e){case"%s":return String(t[i++]);case"%d":return Number(t[i++]);case"%j":try{return JSON.stringify(t[i++])}catch(e){return"[Circular]"}break;default:return e}}));return u}return e}function l(e,r){return null==e||(!("array"!==r||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(r)||"string"!=typeof e||e))}function c(e,r,t){var n=0,i=e.length;!function a(s){if(s&&s.length)t(s);else{var u=n;n+=1,u<i?r(e[u],a):t([])}}([])}"undefined"!=typeof process&&process.env&&"production"!==process.env.NODE_ENV&&"undefined"!=typeof window&&"undefined"!=typeof document&&(u=function(e,r){"undefined"!=typeof console&&console.warn&&r.every((function(e){return"string"==typeof e}))&&console.warn(e,r)});var d=function(e){var r,n;function i(r,t){var n;return(n=e.call(this,"Async Validation Error")||this).errors=r,n.fields=t,n}return n=e,(r=i).prototype=Object.create(n.prototype),r.prototype.constructor=r,t(r,n),i}(a(Error));function p(e,r,t,n,i){if(r.first){var a=new Promise((function(r,a){c(function(e){var r=[];return Object.keys(e).forEach((function(t){r.push.apply(r,e[t]||[])})),r}(e),t,(function(e){return n(e),e.length?a(new d(e,o(e))):r(i)}))}));return a.catch((function(e){return e})),a}var s=!0===r.firstFields?Object.keys(e):r.firstFields||[],u=Object.keys(e),f=u.length,l=0,p=[],y=new Promise((function(r,a){var y=function(e){if(p.push.apply(p,e),++l===f)return n(p),p.length?a(new d(p,o(p))):r(i)};u.length||(n(p),r(i)),u.forEach((function(r){var n=e[r];-1!==s.indexOf(r)?c(n,t,y):function(e,r,t){var n=[],i=0,a=e.length;function s(e){n.push.apply(n,e||[]),++i===a&&t(n)}e.forEach((function(e){r(e,s)}))}(n,t,y)}))}));return y.catch((function(e){return e})),y}function y(e,r){return function(t){var n,i;return n=e.fullFields?function(e,r){for(var t=e,n=0;n<r.length;n++){if(null==t)return t;t=t[r[n]]}return t}(r,e.fullFields):r[t.field||e.fullField],(i=t)&&i.message?(t.field=t.field||e.fullField,t.fieldValue=n,t):{message:"function"==typeof t?t():t,fieldValue:n,field:t.field||e.fullField}}}function h(r,t){if(t)for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];"object"==typeof i&&"object"==typeof r[n]?r[n]=e({},r[n],i):r[n]=i}return r}var g=function(e,r,t,n,i,a){!e.required||t.hasOwnProperty(e.field)&&!l(r,a||e.type)||n.push(f(i.messages.required,e.fullField))},m={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,url:new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},v={integer:function(e){return v.number(e)&&parseInt(e,10)===e},float:function(e){return v.number(e)&&!v.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(e){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!v.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&!!e.match(m.email)&&e.length<255},url:function(e){return"string"==typeof e&&!!e.match(m.url)},hex:function(e){return"string"==typeof e&&!!e.match(m.hex)}},b={required:g,whitespace:function(e,r,t,n,i){(/^\s+$/.test(r)||""===r)&&n.push(f(i.messages.whitespace,e.fullField))},type:function(e,r,t,n,i){if(e.required&&void 0===r)g(e,r,t,n,i);else{var a=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(a)>-1?v[a](r)||n.push(f(i.messages.types[a],e.fullField,e.type)):a&&typeof r!==e.type&&n.push(f(i.messages.types[a],e.fullField,e.type))}},range:function(e,r,t,n,i){var a="number"==typeof e.len,s="number"==typeof e.min,u="number"==typeof e.max,o=r,l=null,c="number"==typeof r,d="string"==typeof r,p=Array.isArray(r);if(c?l="number":d?l="string":p&&(l="array"),!l)return!1;p&&(o=r.length),d&&(o=r.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),a?o!==e.len&&n.push(f(i.messages[l].len,e.fullField,e.len)):s&&!u&&o<e.min?n.push(f(i.messages[l].min,e.fullField,e.min)):u&&!s&&o>e.max?n.push(f(i.messages[l].max,e.fullField,e.max)):s&&u&&(o<e.min||o>e.max)&&n.push(f(i.messages[l].range,e.fullField,e.min,e.max))},enum:function(e,r,t,n,i){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(r)&&n.push(f(i.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,r,t,n,i){if(e.pattern)if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern));else if("string"==typeof e.pattern){new RegExp(e.pattern).test(r)||n.push(f(i.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},q=function(e,r,t,n,i){var a=e.type,s=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,a)&&!e.required)return t();b.required(e,r,n,s,i,a),l(r,a)||b.type(e,r,n,s,i)}t(s)},w={string:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();b.required(e,r,n,a,i,"string"),l(r,"string")||(b.type(e,r,n,a,i),b.range(e,r,n,a,i),b.pattern(e,r,n,a,i),!0===e.whitespace&&b.whitespace(e,r,n,a,i))}t(a)},method:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},number:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(""===r&&(r=void 0),l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},boolean:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},regexp:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),l(r)||b.type(e,r,n,a,i)}t(a)},integer:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},float:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},array:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(null==r&&!e.required)return t();b.required(e,r,n,a,i,"array"),null!=r&&(b.type(e,r,n,a,i),b.range(e,r,n,a,i))}t(a)},object:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.type(e,r,n,a,i)}t(a)},enum:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i),void 0!==r&&b.enum(e,r,n,a,i)}t(a)},pattern:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"string")&&!e.required)return t();b.required(e,r,n,a,i),l(r,"string")||b.pattern(e,r,n,a,i)}t(a)},date:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r,"date")&&!e.required)return t();var s;if(b.required(e,r,n,a,i),!l(r,"date"))s=r instanceof Date?r:new Date(r),b.type(e,s,n,a,i),s&&b.range(e,s.getTime(),n,a,i)}t(a)},url:q,hex:q,email:q,required:function(e,r,t,n,i){var a=[],s=Array.isArray(r)?"array":typeof r;b.required(e,r,n,a,i,s),t(a)},any:function(e,r,t,n,i){var a=[];if(e.required||!e.required&&n.hasOwnProperty(e.field)){if(l(r)&&!e.required)return t();b.required(e,r,n,a,i)}t(a)}};function O(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var F=O(),_=function(){function r(e){this.rules=null,this._messages=F,this.define(e)}var t=r.prototype;return t.define=function(e){var r=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(t){var n=e[t];r.rules[t]=Array.isArray(n)?n:[n]}))},t.messages=function(e){return e&&(this._messages=h(O(),e)),this._messages},t.validate=function(t,n,i){var a=this;void 0===n&&(n={}),void 0===i&&(i=function(){});var s=t,u=n,l=i;if("function"==typeof u&&(l=u,u={}),!this.rules||0===Object.keys(this.rules).length)return l&&l(null,s),Promise.resolve(s);if(u.messages){var c=this.messages();c===F&&(c=O()),h(c,u.messages),u.messages=c}else u.messages=this.messages();var d={};(u.keys||Object.keys(this.rules)).forEach((function(r){var n=a.rules[r],i=s[r];n.forEach((function(n){var u=n;"function"==typeof u.transform&&(s===t&&(s=e({},s)),i=s[r]=u.transform(i)),(u="function"==typeof u?{validator:u}:e({},u)).validator=a.getValidationMethod(u),u.validator&&(u.field=r,u.fullField=u.fullField||r,u.type=a.getType(u),d[r]=d[r]||[],d[r].push({rule:u,value:i,source:s,field:r}))}))}));var g={};return p(d,u,(function(t,n){var i,a=t.rule,o=!("object"!==a.type&&"array"!==a.type||"object"!=typeof a.fields&&"object"!=typeof a.defaultField);function l(r,t){return e({},t,{fullField:a.fullField+"."+r,fullFields:a.fullFields?[].concat(a.fullFields,[r]):[r]})}function c(i){void 0===i&&(i=[]);var c=Array.isArray(i)?i:[i];!u.suppressWarning&&c.length&&r.warning("async-validator:",c),c.length&&void 0!==a.message&&(c=[].concat(a.message));var d=c.map(y(a,s));if(u.first&&d.length)return g[a.field]=1,n(d);if(o){if(a.required&&!t.value)return void 0!==a.message?d=[].concat(a.message).map(y(a,s)):u.error&&(d=[u.error(a,f(u.messages.required,a.field))]),n(d);var p={};a.defaultField&&Object.keys(t.value).map((function(e){p[e]=a.defaultField})),p=e({},p,t.rule.fields);var h={};Object.keys(p).forEach((function(e){var r=p[e],t=Array.isArray(r)?r:[r];h[e]=t.map(l.bind(null,e))}));var m=new r(h);m.messages(u.messages),t.rule.options&&(t.rule.options.messages=u.messages,t.rule.options.error=u.error),m.validate(t.value,t.rule.options||u,(function(e){var r=[];d&&d.length&&r.push.apply(r,d),e&&e.length&&r.push.apply(r,e),n(r.length?r:null)}))}else n(d)}o=o&&(a.required||!a.required&&t.value),a.field=t.field,a.asyncValidator?i=a.asyncValidator(a,t.value,c,t.source,u):a.validator&&(!0===(i=a.validator(a,t.value,c,t.source,u))?c():!1===i?c("function"==typeof a.message?a.message(a.fullField||a.field):a.message||(a.fullField||a.field)+" fails"):i instanceof Array?c(i):i instanceof Error&&c(i.message)),i&&i.then&&i.then((function(){return c()}),(function(e){return c(e)}))}),(function(e){!function(e){for(var r,t,n=[],i={},a=0;a<e.length;a++)r=e[a],t=void 0,Array.isArray(r)?n=(t=n).concat.apply(t,r):n.push(r);n.length?(i=o(n),l(n,i)):l(null,s)}(e)}),s)},t.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!w.hasOwnProperty(e.type))throw new Error(f("Unknown rule type %s",e.type));return e.type||"string"},t.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var r=Object.keys(e),t=r.indexOf("message");return-1!==t&&r.splice(t,1),1===r.length&&"required"===r[0]?w.required:w[this.getType(e)]||void 0},r}();function x(e,r,t,n,i,a,s,u,o,f){"boolean"!=typeof s&&(o=u,u=s,s=!1);const l="function"==typeof t?t.options:t;let c;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),n&&(l._scopeId=n),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,o(e)),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=c):r&&(c=s?function(e){r.call(this,f(e,this.$root.$options.shadowRoot))}:function(e){r.call(this,u(e))}),c)if(l.functional){const e=l.render;l.render=function(r,t){return c.call(t),e(r,t)}}else{const e=l.beforeCreate;l.beforeCreate=e?[].concat(e,c):[c]}return t}_.register=function(e,r){if("function"!=typeof r)throw new Error("Cannot register a validator by type, validator is not a function");w[e]=r},_.warning=u,_.messages=F,_.validators=w;const j=x({render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("label",[e._v(e._s(e.label))]),e._v(" "),t("div",[e._t("default"),e._v(" "),e.errMessage?t("p",[e._v(e._s(e.errMessage))]):e._e()],2)])},staticRenderFns:[]},undefined,{name:"lgFormItem",inject:["form"],props:{label:{type:String},prop:{type:String}},data:()=>({errMessage:""}),mounted(){this.$on("validate",(()=>{this.validate()}))},methods:{validate(){if(!this.prop)return;const e=this.form.model[this.prop],r=this.form.rules[this.prop],t={[this.prop]:r};return new _(t).validate({[this.prop]:e},(e=>{this.errMessage=e?e[0].message:""}))}}},undefined,false,undefined,!1,void 0,void 0,void 0);j.install=e=>{e.component(j.name,j)};export{j as default};
