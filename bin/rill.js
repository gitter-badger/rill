!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.rill=e()}}(function(){var e;return function t(e,r,n){function s(i,a){if(!r[i]){if(!e[i]){var h="function"==typeof require&&require;if(!a&&h)return h(i,!0);if(o)return o(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var c=r[i]={exports:{}};e[i][0].call(c.exports,function(t){var r=e[i][1][t];return s(r?r:t)},c,c.exports,t,e,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,t,r){function n(e){return s(e),function(t,r){function n(o){if(s>=o)return Promise.reject(new Error("next() called multiple times"));if(s=o,fn=e[o]||r,!fn)return Promise.resolve();try{return Promise.resolve(fn(t,function(){return n(o+1)}))}catch(i){return Promise.reject(i)}}var s=-1;return n(0)}}function s(e){if(!Array.isArray(e))throw new TypeError("Middleware stack must be an array!");for(var t=e.length;t--;)if("function"!=typeof e[t])throw new TypeError("Middleware must be composed of functions!")}t.exports=n},{}],2:[function(e,t,r){var n=/ *([^=;]+) *= ? *([^;]+)?/g;r.parse=function(e){var t,r,s={};if("string"!=typeof e)return s;for(;m=n.exec(e);)t=m[1],r=m[2],s[t]=r?decodeURIComponent(r):void 0;return s},r.serialize=function(e,t,r){var n=[e+"="+encodeURIComponent(t)];return r&&(r.domain&&n.push("domain="+r.domain),r.path&&n.push("path="+r.path),r.expires&&n.push("expires="+(r.expires.toUTCString?r.expires.toUTCString():r.expires)),r.maxAge&&n.push("max-age="+(0|r.maxAge)),r.httpOnly&&n.push("httponly"),r.secure&&n.push("secure")),n.join("; ")}},{}],3:[function(e,t,r){function n(e,t,r){this.code=e,this.message=t||s[e],Error.call(this),Error.captureStackTrace&&Error.captureStackTrace(this,n);for(var o in r)this[o]=r[o]}var s=e(5).STATUS_CODES;t.exports=n,n.prototype=Object.create(Error)},{5:5}],4:[function(e,t,r){"use strict";function n(e){this.navigate(h.href,{popState:!0})}function s(e){if(!e.defaultPrevented){var t=e.target,r=!1;if(t.action&&!(t.target&&"_self"!==t.target||t.hasAttribute("rel")&&u.rel.test(t.getAttribute("rel")))){var n=(t.getAttribute("method")||t.method).toUpperCase(),s=a(t,"GET"===n);if("GET"===n){var o=i.parse(i.resolve(h.href,t.action));delete o.search,o.query=s.body,r=this.navigate(i.format(o))}else r=this.navigate({url:t.action,method:n,body:s.body,files:s.files,headers:{"content-type":t.enctype}});t.hasAttribute("data-noreset")||t.reset(),r&&e.preventDefault()}}}function o(e){if(!(e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button)){for(var t=e.target;null!=t&&"A"!==t.nodeName;)t=t.parentNode;t&&t.href&&(t.download||t.target&&"_self"!==t.target||t.rel&&u.rel.test(t.rel)||this.navigate(t.href)&&e.preventDefault())}}var i=e(26),a=e(17),h=window.history.location||window.location,u={rel:/(?:^|\s+)external(?:\s+|$)/};t.exports={onPopState:n,onSubmit:s,onClick:o}},{17:17,26:26}],5:[function(e,t,r){"use strict";var n=e(8),s=e(6),o=e(7),i=e(24),a=["CHECKOUT","CONNECT","COPY","DELETE","GET","HEAD","LOCK","M-SEARCH","MERGE","MKACTIVITY","MKCALENDAR","MKCOL","MOVE","NOTIFY","OPTIONS","PATCH","POST","PROPFIND","PROPPATCH","PURGE","PUT","REPORT","SEARCH","SUBSCRIBE","TRACE","UNLOCK","UNSUBSCRIBE"];t.exports={STATUS_CODES:i,METHODS:a,Server:n,IncomingMessage:s,ServerResponse:o,createServer:function(e){return new n(e)}}},{24:24,6:6,7:7,8:8}],6:[function(e,t,r){"use strict";function n(e){this.url=e.url,this.method=e.method||"GET",this.headers=e.headers||{},this.headers.date=(new Date).toUTCString(),this.headers.host=o.host,this.headers.cookie=document.cookie,this.headers["user-agent"]=navigator.userAgent,this.headers["accept-language"]=navigator.language,this.headers.connection="keep-alive",this.headers["cache-control"]="max-age=0",this.headers.accept="*/*",this.headers.referer=i,this.connection={remoteAddress:"127.0.0.1",encrypted:"https:"===o.protocol},this.body=e.body,this.files=e.files,i=e.url}var s=(e(26),e(13).EventEmitter),o=window.history.location||window.location,i=document.referrer,a=n.prototype=Object.create(s.prototype);a.httpVersionMajor=1,a.httpVersionMinor=1,a.httpVersion=a.httpVersionMajor+"."+a.httpVersionMinor,a.complete=!1,t.exports=n},{13:13,26:26}],7:[function(e,t,r){"use strict";function n(e){this._headers={}}var s=e(13).EventEmitter,o=e(24),i=function(){},a=n.prototype=Object.create(s.prototype);a.statusCode=null,a.statusMessage=null,a.sendDate=!0,a.finished=!1,a.write=a.writeContinue=a.setTimeout=a.addTrailers=i,a.writeHead=function(e,t,r){if(!this.finished&&(this.statusCode=e,this.headersSent=!0,t&&("object"==typeof t?r=t:this.statusMessage=t),"object"==typeof r))for(var n in r)this.setHeader(n,r[n])},a.getHeader=function(e){return this._headers[e.toLowerCase()]},a.removeHeader=function(e){delete this._headers[e.toLowerCase()]},a.setHeader=function(e,t){this._headers[e.toLowerCase()]=t},a.end=function(){this.finished||(null==this.statusMessage&&(this.statusMessage=o[this.statusCode]),this.sendDate&&(this._headers.date=(new Date).toUTCString()),this._headers.status=this.statusCode,this.headersSent=!0,this.finished=!0,this.emit("finish"))},t.exports=n},{13:13,24:24}],8:[function(e,t,r){"use strict";function n(e){if(this._handle=this,this._pending_refresh=null,e){if("function"!=typeof e)throw new TypeError("listener must be a function");this.on("request",e)}}var s=e(26),o=e(13).EventEmitter,i=e(4),a=e(6),h=e(7),u=window.history.location||window.location,c=n.prototype=Object.create(o.prototype);c.listen=function(){var e=arguments[arguments.length-1];return this._onPopState=i.onPopState.bind(this),this._onSubmit=i.onSubmit.bind(this),this._onClick=i.onClick.bind(this),window.addEventListener("DOMContentLoaded",this._onPopState),window.addEventListener("popstate",this._onPopState),window.addEventListener("submit",this._onSubmit),window.addEventListener("click",this._onClick),"function"==typeof e&&setTimeout(e,0),this},c.close=function(){var e=arguments[arguments.length-1];return window.removeEventListener("DOMContentLoaded",this._onPopState),window.removeEventListener("popstate",this._onPopState),window.removeEventListener("submit",this._onSubmit),window.removeEventListener("click",this._onClick),"function"==typeof e&&setTimeout(e,0),this.emit("close"),this},c.navigate=function(e,t){"object"!=typeof t&&(t={}),"string"==typeof e&&(e={url:e});var r=s.parse(s.resolve(u.href,e.url));if(r.host!==u.host)return!1;if(r.protocol!==u.protocol)return!1;e.url=r.path+(r.hash||"");var e=new a(e),n=new h;return n.once("finish",function(){if(e.complete=!0,e.emit("end"),clearTimeout(this._pending_refresh),n.getHeader("set-cookie")){var r=n.getHeader("set-cookie");r.constructor!==Array&&(r=[r]),r.forEach(function(e){document.cookie=e})}if(n.getHeader("refresh")){var s=n.getHeader("refresh").split("; url="),o=1e3*parseInt(s[0]),i=s[1];this._pending_refresh=setTimeout(this.navigate.bind(this,i),o)}if(n.getHeader("location"))return void setTimeout(this.navigate.bind(this,n.getHeader("location"),{replaceState:!0}),0);if("GET"===e.method&&!t.popState){var a=e.url.match(/#(.+)$/);if(null==a)window.scrollTo(0,0);else{var h=document.getElementById(a[1]);h&&h.scrollIntoView({block:"start",behavior:"smooth"})}history[t.replaceState?"replaceState":"pushState"](null,document.title,e.url)}}.bind(this)),this.emit("request",e,n),this},t.exports=n},{13:13,26:26,4:4,6:6,7:7}],9:[function(e,t,r){t.exports=function(e){if(!e)return 0;e=e.toString();for(var t=len=e.length;t--;){var r=e[t].charCodeAt();r>=56320&&57343>=r&&t--,r>127&&2047>=r?len++:r>2047&&65535>=r&&(len+=2)}return len}},{}],10:[function(e,t,r){t.exports={Buffer:function(){}}},{}],11:[function(e,t,r){t.exports={lookup:function(){}}},{}],12:[function(e,t,r){function n(e){return e instanceof a}function s(e){return"function"==typeof e.pipe}function o(e){if("function"==typeof e.toJSON||e.constructor===Object||e.constructor===Array)return!0;try{return JSON.stringify(e),!0}catch(t){return!1}}var i=/^\s*</,a=e(10).Buffer,h=e(11).lookup;t.exports=function(e){if(null!=e&&"function"!=typeof e){if("object"==typeof e){if(n(e))return"application/octet-stream";if(s(e))return h(e.path)||"application/octet-stream";if(o(e))return"application/json; charset=UTF-8"}return"text/"+(i.test(String(e))?"html":"plain")+"; charset=UTF-8"}}},{10:10,11:11}],13:[function(e,t,r){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(e){return"function"==typeof e}function o(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,r,n,o,h,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[e],a(r))return!1;if(s(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:o=Array.prototype.slice.call(arguments,1),r.apply(this,o)}else if(i(r))for(o=Array.prototype.slice.call(arguments,1),u=r.slice(),n=u.length,h=0;n>h;h++)u[h].apply(this,o);return!0},n.prototype.addListener=function(e,t){var r;if(!s(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,s(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,"function"==typeof console.trace)),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}if(!s(t))throw TypeError("listener must be a function");var n=!1;return r.listener=t,this.on(e,r),this},n.prototype.removeListener=function(e,t){var r,n,o,a;if(!s(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(r=this._events[e],o=r.length,n=-1,r===t||s(r.listener)&&r.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(r)){for(a=o;a-- >0;)if(r[a]===t||r[a].listener&&r[a].listener===t){n=a;break}if(0>n)return this;1===r.length?(r.length=0,delete this._events[e]):r.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[e],s(r))this.removeListener(e,r);else if(r)for(;r.length;)this.removeListener(e,r[r.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?s(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(s(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},{}],14:[function(e,t,r){function n(e){if("string"!=typeof e)throw new TypeError("Header Fields must be strings.");return e=e.toLowerCase(),"referrer"===e&&(e="referer"),e}t.exports=n},{}],15:[function(e,t,r){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],16:[function(e,t,r){function n(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return t.filter(i).join("/").replace(/\/+/g,"/")}function s(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return t.filter(i).join(".").replace(/^\./,"").replace(/\.+/g,".")}function o(){for(var e=arguments.length,t=new Array(e);e--;)t[e]=arguments[e];return t.filter(i).join("&").replace(/^&/,"").replace(/&+/g,"&")}function i(e){return null!=e}t.exports={pathname:n,hostname:s,query:o}},{}],17:[function(e,t,r){"use strict";function n(e,t,r){return e[t]=t in e?o.concat(e[t],r):r,e}var s=e(20),o=[],i={INPUT:!0,TEXTAREA:!0,SELECT:!0,BUTTON:!0};t.exports=function(e,t){if(!e||"FORM"!==e.nodeName)throw new Error("Can only parse form elements.");for(var r,o=t?n:s,a="multipart/form-data"===e.enctype,h=e.elements,u={},c=a?{}:void 0,f=0,l=h.length;l>f;f++)if(r=h[f],!r.disabled&&r.name&&i[r.nodeName]){var p=r.name,d=r.options;switch(r.type){case"submit":r===document.activeElement&&o(u,p,r.value);break;case"checkbox":case"radio":r.checked&&o(u,p,r.value);break;case"select-one":r.selectedIndex>=0&&o(u,p,d[r.selectedIndex].value);break;case"select-multiple":for(var m,v=[],g=0,y=d.length;y>g;g++)m=d[g],m&&m.selected&&v.push(m.value);o(u,p,v);break;case"file":a&&r.files&&o(c,p,[].slice.call(r.files));break;default:o(u,p,r.value)}}return{body:u,files:c}}},{20:20}],18:[function(e,t,r){function n(e){for(var t,r=[],n=0,s=0,o="";null!=(t=v.exec(e));){var i=t[0],h=t[1],u=t.index;if(o+=e.slice(s,u),s=u+i.length,h)o+=h[1];else{o&&(r.push(o),o="");var c=t[2],f=t[3],l=t[4],p=t[5],d=t[6],m=t[7],g="+"===d||"*"===d,y="?"===d||"*"===d,w=c||"/",b=l||p||(m?".*":"[^"+w+"]+?");r.push({name:f||n++,prefix:c||"",delimiter:w,optional:y,repeat:g,pattern:a(b)})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function s(e){return o(n(e))}function o(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^"+e[r].pattern+"$"));return function(r){for(var n="",s=r||{},o=0;o<e.length;o++){var i=e[o];if("string"!=typeof i){var a,h=s[i.name];if(null==h){if(i.optional)continue;throw new TypeError('Expected "'+i.name+'" to be defined')}if(m(h)){if(!i.repeat)throw new TypeError('Expected "'+i.name+'" to not repeat, but received "'+h+'"');if(0===h.length){if(i.optional)continue;throw new TypeError('Expected "'+i.name+'" to not be empty')}for(var u=0;u<h.length;u++){if(a=encodeURIComponent(h[u]),!t[o].test(a))throw new TypeError('Expected all "'+i.name+'" to match "'+i.pattern+'", but received "'+a+'"');n+=(0===u?i.prefix:i.delimiter)+a}}else{if(a=encodeURIComponent(h),!t[o].test(a))throw new TypeError('Expected "'+i.name+'" to match "'+i.pattern+'", but received "'+a+'"');n+=i.prefix+a}}else n+=i}return n}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function h(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function c(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return h(e,t)}function f(e,t,r){for(var n=[],s=0;s<e.length;s++)n.push(d(e[s],t,r).source);var o=new RegExp("(?:"+n.join("|")+")",u(r));return h(o,t)}function l(e,t,r){for(var s=n(e),o=p(s,r),i=0;i<s.length;i++)"string"!=typeof s[i]&&t.push(s[i]);return h(o,t)}function p(e,t){t=t||{};for(var r=t.strict,n=t.end!==!1,s="",o=e[e.length-1],a="string"==typeof o&&/\/$/.test(o),h=0;h<e.length;h++){var c=e[h];if("string"==typeof c)s+=i(c);else{var f=i(c.prefix),l=c.pattern;c.repeat&&(l+="(?:"+f+l+")*"),l=c.optional?f?"(?:"+f+"("+l+"))?":"("+l+")?":f+"("+l+")",s+=l}}return r||(s=(a?s.slice(0,-2):s)+"(?:\\/(?=$))?"),s+=n?"$":r&&a?"":"(?=\\/|$)",new RegExp("^"+s,u(t))}function d(e,t,r){return t=t||[],m(t)?r||(r={}):(r=t,t=[]),e instanceof RegExp?c(e,t,r):m(e)?f(e,t,r):l(e,t,r)}var m=e(15);t.exports=d,t.exports.parse=n,t.exports.compile=s,t.exports.tokensToFunction=o,t.exports.tokensToRegExp=p;var v=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{15:15}],19:[function(t,r,n){(function(t){!function(s){function o(e){throw RangeError(q[e])}function i(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function a(e,t){var r=e.split("@"),n="";r.length>1&&(n=r[0]+"@",e=r[1]),e=e.replace(U,".");var s=e.split("."),o=i(s,t).join(".");return n+o}function h(e){for(var t,r,n=[],s=0,o=e.length;o>s;)t=e.charCodeAt(s++),t>=55296&&56319>=t&&o>s?(r=e.charCodeAt(s++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),s--)):n.push(t);return n}function u(e){return i(e,function(e){var t="";return e>65535&&(e-=65536,t+=P(e>>>10&1023|55296),e=56320|1023&e),t+=P(e)}).join("")}function c(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:C}function f(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function l(e,t,r){var n=0;for(e=r?N(e/O):e>>1,e+=N(e/t);e>I*T>>1;n+=C)e=N(e/I);return N(n+(I+1)*e/(e+A))}function p(e){var t,r,n,s,i,a,h,f,p,d,m=[],v=e.length,g=0,y=k,w=S;for(r=e.lastIndexOf(j),0>r&&(r=0),n=0;r>n;++n)e.charCodeAt(n)>=128&&o("not-basic"),m.push(e.charCodeAt(n));for(s=r>0?r+1:0;v>s;){for(i=g,a=1,h=C;s>=v&&o("invalid-input"),f=c(e.charCodeAt(s++)),(f>=C||f>N((E-g)/a))&&o("overflow"),g+=f*a,p=w>=h?_:h>=w+T?T:h-w,!(p>f);h+=C)d=C-p,a>N(E/d)&&o("overflow"),a*=d;t=m.length+1,w=l(g-i,t,0==i),N(g/t)>E-y&&o("overflow"),y+=N(g/t),g%=t,m.splice(g++,0,y)}return u(m)}function d(e){var t,r,n,s,i,a,u,c,p,d,m,v,g,y,w,b=[];for(e=h(e),v=e.length,t=k,r=0,i=S,a=0;v>a;++a)m=e[a],128>m&&b.push(P(m));for(n=s=b.length,s&&b.push(j);v>n;){for(u=E,a=0;v>a;++a)m=e[a],m>=t&&u>m&&(u=m);for(g=n+1,u-t>N((E-r)/g)&&o("overflow"),r+=(u-t)*g,t=u,a=0;v>a;++a)if(m=e[a],t>m&&++r>E&&o("overflow"),m==t){for(c=r,p=C;d=i>=p?_:p>=i+T?T:p-i,!(d>c);p+=C)w=c-d,y=C-d,b.push(P(f(d+w%y,0))),c=N(w/y);b.push(P(f(c,0))),i=l(r,g,n==s),r=0,++n}++r,++t}return b.join("")}function m(e){return a(e,function(e){return L.test(e)?p(e.slice(4).toLowerCase()):e})}function v(e){return a(e,function(e){return R.test(e)?"xn--"+d(e):e})}var g="object"==typeof n&&n&&!n.nodeType&&n,y="object"==typeof r&&r&&!r.nodeType&&r,w="object"==typeof t&&t;(w.global===w||w.window===w||w.self===w)&&(s=w);var b,x,E=2147483647,C=36,_=1,T=26,A=38,O=700,S=72,k=128,j="-",L=/^xn--/,R=/[^\x20-\x7E]/,U=/[\x2E\u3002\uFF0E\uFF61]/g,q={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=C-_,N=Math.floor,P=String.fromCharCode;if(b={version:"1.3.2",ucs2:{decode:h,encode:u},decode:p,encode:d,toASCII:v,toUnicode:m},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return b});else if(g&&y)if(r.exports==g)y.exports=b;else for(x in b)b.hasOwnProperty(x)&&(g[x]=b[x]);else s.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(e,t,r){function n(e,t,r){for(var n,i,a,h=t.match(s),u=h.length,c=e,f=0;u>f;f++)i=c,n=h[f],"[]"===n&&(n=c.length),c=(a=n in c)?c[n]:c[n]="[]"===h[f+1]?[]:{};return i[n]=a?o.concat(c,r):r,e}var s=/[^\[\]]+|\[\]/g,o=[];t.exports=n},{}],21:[function(e,t,r){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}t.exports=function(e,t,r,o){t=t||"&",r=r||"=";var i={};if("string"!=typeof e||0===e.length)return i;var a=/\+/g;e=e.split(t);var h=1e3;o&&"number"==typeof o.maxKeys&&(h=o.maxKeys);var u=e.length;h>0&&u>h&&(u=h);for(var c=0;u>c;++c){var f,l,p,d,m=e[c].replace(a,"%20"),v=m.indexOf(r);v>=0?(f=m.substr(0,v),l=m.substr(v+1)):(f=m,l=""),p=decodeURIComponent(f),d=decodeURIComponent(l),n(i,p)?s(i[p])?i[p].push(d):i[p]=[i[p],d]:i[p]=d}return i};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},{}],22:[function(e,t,r){"use strict";function n(e,t){if(e.map)return e.map(t);for(var r=[],n=0;n<e.length;n++)r.push(t(e[n],n));return r}var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,r,a){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?n(i(e),function(i){var a=encodeURIComponent(s(i))+r;return o(e[i])?n(e[i],function(e){return a+encodeURIComponent(s(e))}).join(t):a+encodeURIComponent(s(e[i]))}).join(t):a?encodeURIComponent(s(a))+r+encodeURIComponent(s(e)):""};var o=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}},{}],23:[function(e,t,r){"use strict";r.decode=r.parse=e(21),r.encode=r.stringify=e(22)},{21:21,22:22}],24:[function(e,t,r){t.exports={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"(Unused)",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},{}],25:[function(e,t,r){function n(e){if("number"==typeof e){if(!n[e])throw new Error("invalid status code: "+e);return e}if("string"!=typeof e)throw new TypeError("code must be a number or string");var t=parseInt(e,10);if(!isNaN(t)){if(!n[t])throw new Error("invalid status code: "+t);return t}if(t=n[e.toLowerCase()],!t)throw new Error('invalid status message: "'+e+'"');return t}var s=e(24);t.exports=n,n.codes=Object.keys(s).map(function(e){e=~~e;var t=s[e];return n[e]=t,n[t]=n[t.toLowerCase()]=e,e}),n.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},n.empty={204:!0,205:!0,304:!0},n.retry={502:!0,503:!0,504:!0}},{24:24}],26:[function(e,t,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function s(e,t,r){if(e&&u.isObject(e)&&e instanceof n)return e;var s=new n;return s.parse(e,t,r),s}function o(e){return u.isString(e)&&(e=s(e)),e instanceof n?e.format():n.prototype.format.call(e)}function i(e,t){return s(e,!1,!0).resolve(t)}function a(e,t){return e?s(e,!1,!0).resolveObject(t):t}var h=e(19),u=e(27);r.parse=s,r.resolve=i,r.resolveObject=a,r.format=o,r.Url=n;var c=/^([a-z0-9.+-]+:)/i,f=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","	"],d=["{","}","|","\\","^","`"].concat(p),m=["'"].concat(d),v=["%","/","?",";","#"].concat(m),g=["/","?","#"],y=255,w=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},E={javascript:!0,"javascript:":!0},C={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},_=e(23);n.prototype.parse=function(e,t,r){if(!u.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var n=e.indexOf("?"),s=-1!==n&&n<e.indexOf("#")?"?":"#",o=e.split(s),i=/\\/g;o[0]=o[0].replace(i,"/"),e=o.join(s);var a=e;if(a=a.trim(),!r&&1===e.split("#").length){var f=l.exec(a);if(f)return this.path=a,this.href=a,this.pathname=f[1],f[2]?(this.search=f[2],t?this.query=_.parse(this.search.substr(1)):this.query=this.search.substr(1)):t&&(this.search="",this.query={}),this}var p=c.exec(a);if(p){p=p[0];var d=p.toLowerCase();this.protocol=d,a=a.substr(p.length)}if(r||p||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var T="//"===a.substr(0,2);!T||p&&E[p]||(a=a.substr(2),this.slashes=!0)}if(!E[p]&&(T||p&&!C[p])){for(var A=-1,O=0;O<g.length;O++){var S=a.indexOf(g[O]);-1!==S&&(-1===A||A>S)&&(A=S)}var k,j;j=-1===A?a.lastIndexOf("@"):a.lastIndexOf("@",A),-1!==j&&(k=a.slice(0,j),a=a.slice(j+1),this.auth=decodeURIComponent(k)),A=-1;for(var O=0;O<v.length;O++){var S=a.indexOf(v[O]);-1!==S&&(-1===A||A>S)&&(A=S)}-1===A&&(A=a.length),this.host=a.slice(0,A),a=a.slice(A),this.parseHost(),this.hostname=this.hostname||"";var L="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!L)for(var R=this.hostname.split(/\./),O=0,U=R.length;U>O;O++){var q=R[O];if(q&&!q.match(w)){for(var I="",N=0,P=q.length;P>N;N++)I+=q.charCodeAt(N)>127?"x":q[N];if(!I.match(w)){var M=R.slice(0,O),H=R.slice(O+1),D=q.match(b);D&&(M.push(D[1]),H.unshift(D[2])),H.length&&(a="/"+H.join(".")+a),this.hostname=M.join(".");break}}}this.hostname.length>y?this.hostname="":this.hostname=this.hostname.toLowerCase(),L||(this.hostname=h.toASCII(this.hostname));var F=this.port?":"+this.port:"",$=this.hostname||"";this.host=$+F,this.href+=this.host,L&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!x[d])for(var O=0,U=m.length;U>O;O++){var B=m[O];if(-1!==a.indexOf(B)){var K=encodeURIComponent(B);K===B&&(K=escape(B)),a=a.split(B).join(K)}}var G=a.indexOf("#");-1!==G&&(this.hash=a.substr(G),a=a.slice(0,G));var V=a.indexOf("?");if(-1!==V?(this.search=a.substr(V),this.query=a.substr(V+1),t&&(this.query=_.parse(this.query)),a=a.slice(0,V)):t&&(this.search="",this.query={}),a&&(this.pathname=a),C[d]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var F=this.pathname||"",z=this.search||"";this.path=F+z}return this.href=this.format(),this},n.prototype.format=function(){var e=this.auth||"";e&&(e=encodeURIComponent(e),e=e.replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,o="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&u.isObject(this.query)&&Object.keys(this.query).length&&(o=_.stringify(this.query));var i=this.search||o&&"?"+o||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||C[t])&&s!==!1?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),i&&"?"!==i.charAt(0)&&(i="?"+i),r=r.replace(/[?#]/g,function(e){return encodeURIComponent(e)}),i=i.replace("#","%23"),t+s+r+i+n},n.prototype.resolve=function(e){return this.resolveObject(s(e,!1,!0)).format()},n.prototype.resolveObject=function(e){if(u.isString(e)){var t=new n;t.parse(e,!1,!0),e=t}for(var r=new n,s=Object.keys(this),o=0;o<s.length;o++){var i=s[o];r[i]=this[i]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var a=Object.keys(e),h=0;h<a.length;h++){var c=a[h];"protocol"!==c&&(r[c]=e[c])}return C[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!C[e.protocol]){for(var f=Object.keys(e),l=0;l<f.length;l++){var p=f[l];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||E[e.protocol])r.pathname=e.pathname;else{for(var d=(e.pathname||"").split("/");d.length&&!(e.host=d.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==d[0]&&d.unshift(""),d.length<2&&d.unshift(""),r.pathname=d.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var m=r.pathname||"",v=r.search||"";r.path=m+v}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var g=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),w=y||g||r.host&&e.pathname,b=w,x=r.pathname&&r.pathname.split("/")||[],d=e.pathname&&e.pathname.split("/")||[],_=r.protocol&&!C[r.protocol];if(_&&(r.hostname="",r.port=null,r.host&&(""===x[0]?x[0]=r.host:x.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===d[0]?d[0]=e.host:d.unshift(e.host)),e.host=null),w=w&&(""===d[0]||""===x[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,x=d;else if(d.length)x||(x=[]),x.pop(),x=x.concat(d),r.search=e.search,r.query=e.query;else if(!u.isNullOrUndefined(e.search)){if(_){r.hostname=r.host=x.shift();var T=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;T&&(r.auth=T.shift(),r.host=r.hostname=T.shift())}return r.search=e.search,r.query=e.query,u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!x.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var A=x.slice(-1)[0],O=(r.host||e.host||x.length>1)&&("."===A||".."===A)||""===A,S=0,k=x.length;k>=0;k--)A=x[k],"."===A?x.splice(k,1):".."===A?(x.splice(k,1),S++):S&&(x.splice(k,1),S--);if(!w&&!b)for(;S--;S)x.unshift("..");!w||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),O&&"/"!==x.join("/").substr(-1)&&x.push("");var j=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(_){r.hostname=r.host=j?"":x.length?x.shift():"";var T=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1;T&&(r.auth=T.shift(),r.host=r.hostname=T.shift())}return w=w||r.host&&x.length,w&&!j&&x.unshift(""),x.length?r.pathname=x.join("/"):(r.pathname=null,r.path=null),u.isNull(r.pathname)&&u.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var e=this.host,t=f.exec(e);t&&(t=t[0],":"!==t&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},{19:19,23:23,27:27}],27:[function(e,t,r){"use strict";t.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},{}],28:[function(e,t,r){"use strict";function n(e,t){this.req=new o(this,e),this.res=new i(this,t),this.locals={}}var s=(e(26),e(3)),o=e(31),i=e(33);t.exports=n;var a=n.prototype;a.throw=function(e,t,r){var n=new s(e,t,r);throw this.res.status=n.code,this.res.message=n.message,n},a.assert=function(e,t,r,n){e||this.throw(t,r,n)}},{26:26,3:3,31:31,33:33}],29:[function(e,t,r){"use strict";function n(){return this instanceof n?(this.base={},this.servers=[],void(this._stack=[])):new n}var s=e(5),o=e(1),i=(e(3),e(30)),a=e(28),h=e(32),u=n.prototype;t.exports=n.default=n,u.stack=function(){for(var e,t=this._stack,r=this.base,s=[],o=0,i=t.length;i>o;o++)e=t[o](r),null!=e&&(e.constructor===n?s=s.concat(e.stack()):s.push(e));return s},u.handler=function(){var e=o(this.stack());return function(t,r){r.statusCode=404;var n=new a(t,r);e(n).catch(function(e){try{404===Number(n.res.status)&&(n.res.status=500)}catch(t){}}).then(function(){h(n)})}},u.listen=function(){var e=s.createServer(this.handler());return this.servers.push(e),e.listen.apply(e,arguments)},u.close=function(){if(!this.server||!this.server.length)throw new Error("Rill: Unable to close. No servers started.");for(var e=this.servers.length;e--;)this.servers[e].close();
return this.servers=[],this},u.setup=function(){for(var e,t=arguments.length,r=0;t>r;r++)if(e=arguments[r],"function"==typeof e)e(this);else if(null!=e)throw new TypeError("Rill#setup: Setup must be a function or null.");return this},u.use=function(){for(var e=this._stack.length,t=this._stack.length+=arguments.length,r=t;e<r--;)this._stack[r]=i(null,arguments[r-e]);return this},u.at=function(e){if("string"!=typeof e)throw new TypeError("Rill#at: Path name must be a string.");for(var t={pathname:e},r=1,n=this._stack.length,s=this._stack.length+=arguments.length-r,o=s;n<o--;)this._stack[o]=i(t,arguments[o-n+r]);return this},u.host=function(e){if("string"!=typeof e)throw new TypeError("Rill#host: Host name must be a string.");for(var t={hostname:e},r=1,n=this._stack.length,s=this._stack.length+=arguments.length-r,o=s;n<o--;)this._stack[o]=i(t,arguments[o-n+r]);return this},s.METHODS.forEach(function(e){var t=e.toLowerCase();u[t]=Object.defineProperty(function(t){var r={method:e},n=0;"string"==typeof t&&(r.pathname=t,n++);for(var s=this._stack.length,o=this._stack.length+=arguments.length-n,a=o;s<a--;)this._stack[a]=i(r,arguments[a-s+n]);return this},"name",{value:t})})},{1:1,28:28,3:3,30:30,32:32,5:5}],30:[function(e,t,r){"use strict";function n(e,t){if(null==t)return i;null==e&&(e={});var r=null;if("function"==typeof t)r=a;else{if(!t.stack)throw new TypeError("Rill: Middleware must be an app, function, or null.");r=h}return function(n){for(var s in r)t=r[s](n,e[s],t);return t}}var s=(e(26),e(18)),o=e(16),i=function(){};t.exports=n;var a={pathname:function(e,t,r){var n=null!=t;if(t=o.pathname(e.pathname,t),!t)return r;var i=[],a=s(t,i,{end:n});return function(e,t){var n=e.req,s=n.pathname.match(a);if(!s)return t();for(var o,h,u=i.length;u--;){if(o=i[u],h=s[u+1],!o.optional&&null==h)return t();n.params[o.name]=h}return r(e,t)}},hostname:function(e,t,r){if(t=o.hostname(t,e.hostname),!t)return r;var n=[],i=s(t,n,{strict:!0});return function(e,t){var s=e.req,o=s.hostname.match(i);if(!o)return t();for(var a,h,u=n.length;u--;){if(a=n[u],h=o[u+1],!a.optional&&null==h)return t();s.subdomains[a.name]=h}return r(e,t)}},method:function(e,t,r){if(e.method&&t)throw new Error("Rill: cannot attach with method "+t+". Function("+r.name+") is already mounted using "+e.method+".");return(t=e.method||t)?(t=t.toUpperCase(),function(e,n){var s=e.req;return s.method!==t?n():r(e,n)}):r}},h={pathname:function(e,t,r){return t=o.pathname(e.pathname,t),t&&(r.base.pathname=t),r},hostname:function(e,t,r){return t=o.hostname(t,e.hostname),t&&(r.base.hostname=t),r},method:function(e,t,r){if(e.method)throw new Error("Rill: cannot mount with method "+t+". App is already mounted using "+r.base.method+".");return t&&(r.base.method=t),r}}},{16:16,18:18,26:26}],31:[function(e,t,r){"use strict";function n(e,t){var r=t.headers["x-forwarded-host"]||t.headers.host,n=t.connection.encrypted?"https":"http",i=s.parse(n+"://"+r+t.url,!0);this.ctx=e,this.original=t,this.method=t.method||"GET",this.headers=t.headers||{},this.cookies=a.parse(this.headers.cookie),this.params={},this.href=i.href,this.protocol=n,this.port=i.port,this.host=i.host,this.hostname=i.hostname,this.path=i.path,this.pathname=i.pathname,this.search=i.search,this.hash=i.hash,this.query={},this.origin=this.protocol+"://"+this.host,this.secure="https"===this.protocol,this.subdomains=(this.hostname||"").split(".").reverse().slice(2),this.ip=t.headers["x-forwarded-for"]||t.connection.remoteAddress||t.socket.remoteAddress||t.connection.socket.remoteAddress;var h=i.query;for(var u in h)o(this.query,u,h[u])}var s=e(26),o=e(20),i=e(14),a=e(2);t.exports=n;var h=n.prototype;h.get=function(e){return this.headers[i(e)]}},{14:14,2:2,20:20,26:26}],32:[function(e,t,r){(function(r){"use strict";function n(e){var t=e.req,r=e.res,n=r.body,u=r.original,c=n&&"function"==typeof n.pipe,f=n instanceof h;u.headersSent||(404===Number(r.status)&&(r.get("Location")?r.status=302:n&&(r.status=200)),r.message=r.message||a[r.status],"HEAD"===t.method||a.empty[r.status]||!n?(n=null,r.remove("Content-Type"),r.remove("Content-Length")):("object"!=typeof n||c||f||(n=JSON.stringify(n)),r.get("Content-Type")||r.set("Content-Type",i(r.body)),r.get("Content-Length")||c||r.set("Content-Length",o(n))),u.writeHead(r.status,r.message,s(r.headers)),c?n.pipe(u):u.end(n))}function s(e){for(var t in e)(null==e[t]||0===e[t].length)&&delete e[t];return e}var o=e(9),i=e(12),a=e(25),h=r.Buffer||n;t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{12:12,25:25,9:9}],33:[function(e,t,r){"use strict";function n(e,t){this.ctx=e,this.original=t,this.headers=t.headers={"x-powered-by":"Rill"},this.status=t.statusCode,this.body=void 0,t.once("finish",function(){e.res.finished=!0})}var s=e(26),o=e(14),i=(e(3),e(2));t.exports=n;var a=n.prototype;a.cookie=function(e,t,r){this.append("Set-Cookie",i.serialize(e,t,r))},a.clearCookie=function(e,t){t=t||{},t.expires=new Date,this.append("Set-Cookie",i.serialize(e,"",t))},a.redirect=function(e,t){var r=this.ctx.req;if(e="back"===e?r.get("Referrer"):e,e=e||t,!e)throw new TypeError("Rill#redirect: Cannot redirect, url not specified and alternative not provided.");this.set("Location",s.resolve(r.href,e))},a.refresh=function(e,t,r){var n=this.ctx.req;e=e||0,t="back"===t?n.get("Referrer"):t,t=t||r||n.href,this.set("Refresh",e+"; url="+s.resolve(n.href,t))},a.get=function(e){return this.headers[o(e)]},a.set=function(e,t){this.headers[o(e)]=t},a.append=function(e,t){e=o(e);var r=this.headers,n=this.headers[e];null==n?n=[]:n.constructor!==Array&&(n=[n]),r[e]=n.concat(t)},a.remove=function(e){delete this.headers[o(e)]}},{14:14,2:2,26:26,3:3}]},{},[29])(29)});