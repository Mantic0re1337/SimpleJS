parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SDFd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.init=void 0;var e=exports.init=function(e,t){var n=document.querySelector(e),r=document.createElement(t.type),o=document.createElement(t.template);r.append(o),n.append(r)};
},{}],"PA9s":[function(require,module,exports) {
var r=function(r){return function(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),u=1;u<e;u++)t[u-1]=arguments[u];return{type:r,template:n.reduce(function(r,n,e){return r+n+(t[e]||"")},"")}}},n=r("div"),e=r("p");
},{}],"Focm":[function(require,module,exports) {
"use strict";var e,r=require("./framework"),i=require("./framework/element");function t(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var a="Marvin",c="Frachet";(0,r.init)("#app",(0,i.div)(e||(e=t(["Hello "," ",""])),a,c));
},{"./framework":"SDFd","./framework/element":"PA9s"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map