!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=44)}({0:function(t,r,n){t.exports=n(12)},1:function(t,r,n){var e=n(6),o=n(7),i=n(8);t.exports=function(t,r){return e(t)||o(t,r)||i()}},12:function(t,r,n){var e=function(t){"use strict";var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,n,e){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new P(e||[]);return i._invoke=function(t,r,n){var e=l;return function(o,i){if(e===h)throw new Error("Generator is already running");if(e===p){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===y)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===l)throw e=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=h;var u=f(t,r,n);if("normal"===u.type){if(e=n.done?p:s,u.arg===y)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(e=p,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",s="suspendedYield",h="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&e.call(x,i)&&(m=x);var b=g.prototype=v.prototype=Object.create(m);function L(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function E(t){var r;this._invoke=function(n,o){function i(){return new Promise(function(r,i){!function r(n,o,i,a){var c=f(t[n],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&e.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(l).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(n,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,_(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}return{next:k}}function k(){return{value:r,done:!0}}return d.prototype=b.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(r,n,e,o){var i=new E(u(r,n,e,o));return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(b),b[c]="Generator",b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=S,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return c.type="throw",c.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),f=e.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},2:function(t,r,n){"use strict";n.d(r,"d",function(){return i}),n.d(r,"b",function(){return a}),n.d(r,"c",function(){return c}),n.d(r,"a",function(){return u});var e=n(1),o=n.n(e);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:location.href,r={},n=t.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/);return["url","protocol","slash","host","port","path","query","hash"].forEach(function(t,e){r[t]=n[e]}),r}function a(t){t.url;var r=t.protocol,n=t.slash,e=t.host,o=t.port,i=t.path,a=t.query,c=t.hash;return"".concat(r,":").concat(n).concat(e).concat(o?":".concat(o):"").concat(i?"/".concat(i):"").concat(a?"?".concat(a):"").concat(c?"#".concat(c):"")}function c(t){var r={};return(t||i().query||"").replace(/^\?/,"").split("&").forEach(function(t){var n=t.split("=");r[n[0]]=decodeURIComponent(n[1]||"")}),r}function u(t){return Object.entries(t).map(function(t){var r=o()(t,2),n=r[0],e=r[1];return"".concat(n,"=").concat(e)}).join("&")}},3:function(t,r){function n(t,r,n,e,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?r(u):Promise.resolve(u).then(e,o)}t.exports=function(t){return function(){var r=this,e=arguments;return new Promise(function(o,i){var a=t.apply(r,e);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}},44:function(t,r,n){"use strict";n.r(r);var e=n(0),o=n.n(e),i=n(3),a=n.n(i);n(2);function c(){var t=0,r=[];document.querySelectorAll(".doc-viewer-value").forEach(function(n,e){if(36===e||(e-36)%39==0){var o=n.innerText;r.push({android:o.match(/Android (.*);/)[1],wx:o.match(/MicroMessenger\/(.*?) /)[1]}),t++}}),console.log(t),console.log(r)}!function(){var t=a()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:document.querySelectorAll(".discover-table-open-button").forEach(function(t){return t.click()}),c();case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()()},6:function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},7:function(t,r){t.exports=function(t,r){var n=[],e=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(e=(a=c.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}},8:function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}});