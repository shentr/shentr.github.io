!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=118)}({0:function(t,n,r){t.exports=r(10)},1:function(t,n,r){var e=r(7),o=r(8),i=r(9);t.exports=function(t,n){return e(t)||o(t,n)||i()}},10:function(t,n,r){var e=function(t){"use strict";var n,r=Object.prototype,e=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function u(t,n,r,e){var o=n&&n.prototype instanceof y?n:y,i=Object.create(o.prototype),c=new P(e||[]);return i._invoke=function(t,n,r){var e=l;return function(o,i){if(e===h)throw new Error("Generator is already running");if(e===p){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=O(c,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===l)throw e=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=h;var u=f(t,n,r);if("normal"===u.type){if(e=r.done?p:s,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e=p,r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",s="suspendedYield",h="executing",p="completed",d={};function y(){}function v(){}function g(){}var m={};m[i]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(k([])));x&&x!==r&&e.call(x,i)&&(m=x);var w=g.prototype=y.prototype=Object.create(m);function j(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function E(t){var n;this._invoke=function(r,o){function i(){return new Promise(function(n,i){!function n(r,o,i,c){var a=f(t[r],t,o);if("throw"!==a.type){var u=a.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?Promise.resolve(l.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):Promise.resolve(l).then(function(t){u.value=t,i(u)},function(t){return n("throw",t,i,c)})}c(a.arg)}(r,o,n,i)})}return n=n?n.then(i,i):i()}}function O(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,O(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function L(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function _(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return c.next=c}}return{next:T}}function T(){return{value:n,done:!0}}return v.prototype=w.constructor=g,g.constructor=v,g[a]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===v||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(n,r,e,o){var i=new E(u(n,r,e,o));return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},j(w),w[a]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return a.type="throw",a.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var u=e.call(c,"catchLoc"),f=e.call(c,"finallyLoc");if(u&&f){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},11:function(t,n){t.exports=function(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},118:function(t,n,r){"use strict";r.r(n);var e=r(0),o=r.n(e),i=r(3),c=r.n(i),a=r(2),u=r(15);function f(){if(Object(a.d)(location.href).path.match(/^display\/~tianwen/)){var t=document.querySelectorAll("#title-text")[1].innerText;new u.a([{id:"email",text:"Email",style:{top:"50px",right:"400px",left:"inherit",height:"30px",width:"50px",color:"rgba(249, 117, 144)","font-size":"14px","text-align":"center"},onClick:function(){var n,r,e,o,i,c,a,u,f,l,s;n={sendTo:["dongdongguai"],chaosongTo:["zongheng"],subject:"周报 ".concat(t),content:""},r=n.sendTo,e=void 0===r?[]:r,o=n.chaosongTo,i=void 0===o?[]:o,c=n.subject,a=void 0===c?"":c,u=n.content,f=void 0===u?"":u,l=(e||[]).map(function(t){return t+"@pinduoduo.com"}).join(";"),s=(i||[]).map(function(t){return t+"@pinduoduo.com"}).join(";"),location.href="mailto:".concat(l,"?cc=").concat(s,"&subject=").concat(a,"&body=").concat(f)}}])}}!function(){var t=c()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:f();case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},15:function(t,n,r){"use strict";r.d(n,"a",function(){return s});var e=r(1),o=r.n(e),i=r(4),c=r.n(i),a=r(5),u=r.n(a),f=r(6),l=r.n(f),s=function(){function t(n){u()(this,t),this.btns=n,this.renderBtns()}return l()(t,[{key:"createBtnDom",value:function(t){var n=t.id,r=t.btnCnt,e=t.text,i=t.style,a=void 0===i?{}:i,u=document.createElement("button");u.id=n||"btn-".concat(r),u.innerText=e,a=c()({position:"fixed",top:0,left:"".concat(70*r++,"px"),height:"30px",width:"60px",background:"rgba(15, 245, 213, 0.08)","font-size":".14rem","text-align":"center",color:"rgb(255, 170, 187, .8)","z-index":99999},a);var f="";return Object.entries(a).forEach(function(t){var n=o()(t,2),r=n[0],e=n[1];f+="".concat(r,": ").concat(e,";")}),u.style.cssText=f,document.body.appendChild(u),u}},{key:"renderBtns",value:function(){var t=this;this.btns.forEach(function(n,r){var e=n.id,o=n.text,i=n.style,c=n.onClick,a=void 0===c?function(){}:c;t.createBtnDom({id:e,text:o,style:i,btnCnt:r}).addEventListener("click",a)})}}]),t}()},2:function(t,n,r){"use strict";r.d(n,"d",function(){return i}),r.d(n,"b",function(){return c}),r.d(n,"c",function(){return a}),r.d(n,"a",function(){return u});var e=r(1),o=r.n(e);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href,n={},r=t.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);return["url","protocol","slash","host","port","path","query","hash"].forEach(function(t,e){n[t]=r[e]}),n}function c(t){t.url;var n=t.protocol,r=t.slash,e=t.host,o=t.port,i=t.path,c=t.query,a=t.hash;return"".concat(n,":").concat(r).concat(e).concat(o?":".concat(o):"").concat(i?"/".concat(i):"").concat(c?"?".concat(c):"").concat(a?"#".concat(a):"")}function a(t){var n={};return(t||i().query||"").replace(/^\?/,"").split("&").forEach(function(t){var r=t.split("=");n[r[0]]=decodeURIComponent(r[1]||"")}),n}function u(t){return Object.entries(t).map(function(t){var n=o()(t,2),r=n[0],e=n[1];return"".concat(r,"=").concat(e)}).join("&")}},3:function(t,n){function r(t,n,r,e,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?n(u):Promise.resolve(u).then(e,o)}t.exports=function(t){return function(){var n=this,e=arguments;return new Promise(function(o,i){var c=t.apply(n,e);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)})}}},4:function(t,n,r){var e=r(11);t.exports=function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),o.forEach(function(n){e(t,n,r[n])})}return t}},5:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},6:function(t,n){function r(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}t.exports=function(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}},7:function(t,n){t.exports=function(t){if(Array.isArray(t))return t}},8:function(t,n){t.exports=function(t,n){var r=[],e=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(e=(c=a.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}return r}},9:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}});