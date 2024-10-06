(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(601),o=e.n(r),a=e(314),i=e.n(a)()(o());i.push([n.id,'/* общее оформление */\n\n.calculator {\n    margin: 50px auto;\n    width: 300px;\n    height: 500px;\n    border-radius: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 30px;\n    padding: 20px;\n}\n\n.buttons {\n    display: grid;\n    grid-template-areas: \n    "ac plus-minus percentage division"\n    "seven eight nine multiplication"\n    "four five six minus"\n    "one two three plus"\n    "theme-button zero dot equal";\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n}\n\n.button {\n    border-radius: 30%;\n    width: 60px;\n    height: 60px;\n    margin: 5px;\n    text-align: center;\n    justify-self: center;\n    font-size: 20px;\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n\n.button:hover {\n    filter: brightness(130%);\n}\n\n.button:active {\n    filter: brightness(75%);\n}\n\n.theme-button svg:hover {\n    transform: scale(1.1);\n}\n\n.display {\n    height: 100px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items:last baseline;\n    justify-content: flex-end;\n    font-size: 50px;\n    padding: 10px;\n    border-radius: 20px;\n}\n\n/* темная тема */\n\n.dark-theme .calculator {\n    background: #000;\n    color: #fff;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.dark-theme .button {\n    color: #fff;\n    background-color: #363636;\n    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.7);\n}\n\n.dark-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n    color: #fff; \n}\n\n.dark-theme .button.ac,\n.dark-theme .button.plus-minus,\n.dark-theme .button.percentage {\n    background: #878787;\n}\n\n.dark-theme .button.division,\n.dark-theme .button.multiplication,\n.dark-theme .button.minus,\n.dark-theme .button.plus,\n.dark-theme .button.equal\n {\n    background: #008b8b;\n}\n\n.dark-theme .theme-button {\n    background: #7FFFD4;\n}\n\n/* светлая тема */\n\n.light-theme .calculator {\n    background: #E1E1E1;\n    color: #4B4B4B;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.light-theme .button {\n    color: #4B4B4B;\n    background-color: #BDBCBC;\n    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);\n}\n\n.light-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);\n    color: #4B4B4B;\n}\n\n.light-theme .button.ac,\n.light-theme .button.plus-minus,\n.light-theme .button.percentage {\n    background: #4B4B4B;\n    color: #E1E1E1;\n}\n\n.light-theme .button.division,\n.light-theme .button.multiplication,\n.light-theme .button.minus,\n.light-theme .button.plus,\n.light-theme .button.equal\n {\n    background: #2AAA8A;\n    color: #E1E1E1;\n}\n\n.light-theme .theme-button {\n    background: #478778;\n    color: #BDBCBC;\n}\n',""]);const s=i},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<n.length;u++){var l=[].concat(n[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=e(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);t[s].references--}for(var c=r(n,o),u=0;u<a.length;u++){var l=e(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),a=e(825),i=e.n(a),s=e(659),c=e.n(s),u=e(56),l=e.n(u),d=e(540),p=e.n(d),m=e(113),f=e.n(m),h=e(365),b={};b.styleTagTransform=f(),b.setAttributes=l(),b.insert=c().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=p(),o()(h.A,b),h.A&&h.A.locals&&h.A.locals;var g=document.querySelector(".display"),x=["0","1","2","3","4","5","6","7","8","9","."],v=["+","-","X","/"],y="",k="",C="",E=!1,B=document.querySelector("main"),w=document.querySelector(".theme-button");document.querySelector(".ac").addEventListener("click",(function(){y="",k="",C="",E=!1,g.textContent="0"})),document.querySelector(".buttons").addEventListener("click",(function(n){if(n.target.classList.contains("button")){var t=n.target.textContent;if(x.includes(t)&&(""===k&&""===C?("0"===y&&"."!==t&&(y=""),y.length<10&&(y+=t,g.textContent=y)):""!==y&&""!==k&&E?(k=t,E=!1,g.textContent=k):("0"===k&&"."!==t&&(k=""),k.length<10&&(k+=t,g.textContent=k))),n.target.classList.contains("plus-minus")&&(""!==k?(k=-Number(k),g.textContent=k):""!==y&&(y=-Number(y),g.textContent=y)),n.target.classList.contains("percentage"))""===k&&""===C?(y=Number(y)/100,g.textContent=y,String(y).length>10&&(g.textContent="Infinity")):""!==y&&""!==k&&(k=Number(y)*Number(k)/100,g.textContent=k,String(k).length>10&&(g.textContent="Infinity"));else{if(v.includes(t))return C=t,void(g.textContent=C);if("="===t){switch(""===k&&(k=y),C){case"+":y=Number(y)+Number(k);break;case"-":y=Number(y)-Number(k);break;case"X":y=Number(y)*Number(k);break;case"/":if("0"===k)return g.textContent="Error",y="",k="",void(C="");y=Number(y)/Number(k)}String(y).length<=10?(E=!0,g.textContent=y):(E=!0,g.textContent="Infinity")}}}})),w.addEventListener("click",(function(){B.classList.toggle("light-theme"),B.classList.toggle("dark-theme")})),document.addEventListener("keydown",(function(n){"Backspace"===n.key&&(""!==k?(k=k.slice(0,-1),g.textContent=k||"0"):(y=y.slice(0,-1),g.textContent=y||"0"))}))})();