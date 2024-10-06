(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,'/* общее оформление  */\n\n.calculator {\n    margin: 50px auto;\n    width: 300px;\n    height: 500px;\n    border-radius: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 30px;\n    padding: 20px;\n}\n\n.buttons {\n    display: grid;\n    grid-template-areas: \n    "ac plus-minus percentage division"\n    "seven eight nine multiplication"\n    "four five six minus"\n    "one two three plus"\n    "theme-button zero dot equal";\n    justify-items: center;\n    align-items: center;\n    grid-gap: 5px;\n}\n\n.button {\n    border-radius: 30%;\n    width: 60px;\n    height: 60px;\n    margin: 5px;\n    text-align: center;\n    justify-self: center;\n    font-size: 20px;\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n}\n\n.button:hover {\n    filter: brightness(130%);\n}\n\n.button:active {\n    filter: brightness(75%);\n}\n\n.theme-button svg:hover {\n    transform: scale(1.1);\n}\n\n.history {\n    height: 30px; /* Высота строки истории */\n    margin-bottom: 5px; /* Отступ между историей и дисплеем */\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-size: 20px; /* Размер шрифта для истории */\n    color: #888; /* Цвет текста для истории */\n    overflow: hidden; /* Скрыть переполнение */\n    white-space: nowrap; /* Не переносить текст */\n    text-overflow: ellipsis; /* Добавить многоточие, если текст длинный */\n}\n\n.display {\n    height: 100px;\n    margin-bottom: 10px;\n    display: flex;\n    align-items:last baseline;\n    justify-content: flex-end;\n    font-size: 50px;\n    padding: 10px;\n    border-radius: 20px;\n}\n\n/* темная тема */\n\n.dark-theme .calculator {\n    background: #000;\n    color: #fff;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.dark-theme .button {\n    color: #fff;\n    background-color: #363636;\n    box-shadow: 2px 2px 3px 2px rgba(255, 255, 255, 0.7);\n}\n\n.dark-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(255, 255, 255, 0.7);\n    color: #fff; \n}\n\n.dark-theme .button.ac,\n.dark-theme .button.plus-minus,\n.dark-theme .button.percentage {\n    background: #878787;\n}\n\n.dark-theme .button.division,\n.dark-theme .button.multiplication,\n.dark-theme .button.minus,\n.dark-theme .button.plus,\n.dark-theme .button.equal\n {\n    background: #008b8b;\n}\n\n.dark-theme .theme-button {\n    background: #7FFFD4;\n}\n\n/* светлая тема */\n\n.light-theme .calculator {\n    background: #E1E1E1;\n    color: #4B4B4B;\n    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.7)\n}\n\n.light-theme .button {\n    color: #4B4B4B;\n    background-color: #BDBCBC;\n    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.5);\n}\n\n.light-theme .display {\n    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);\n    color: #4B4B4B;\n}\n\n.light-theme .button.ac,\n.light-theme .button.plus-minus,\n.light-theme .button.percentage {\n    background: #4B4B4B;\n    color: #E1E1E1;\n}\n\n.light-theme .button.division,\n.light-theme .button.multiplication,\n.light-theme .button.minus,\n.light-theme .button.plus,\n.light-theme .button.equal\n {\n    background: #2AAA8A;\n    color: #E1E1E1;\n}\n\n.light-theme .theme-button {\n    background: #478778;\n    color: #BDBCBC;\n}\n',""]);const s=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var u=this[s][0];null!=u&&(a[u]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var u=n[s],c=r.base?u[0]+r.base:u[0],l=i[c]||0,p="".concat(c," ").concat(l);i[c]=l+1;var d=e(p),f={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var u=r(n,o),c=0;c<i.length;c++){var l=e(i[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=u}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),s=e(659),u=e.n(s),c=e(56),l=e.n(c),p=e(540),d=e.n(p),f=e(113),m=e.n(f),h=e(365),b={};b.styleTagTransform=m(),b.setAttributes=l(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=d(),o()(h.A,b),h.A&&h.A.locals&&h.A.locals;var x=document.querySelector(".display"),g="",v=["0","1","2","3","4","5","6","7","8","9","."],y=["+","-","X","/"],k="",C="",w="",B=!1;document.querySelector("main"),document.querySelector(".theme-button"),document.querySelector(".ac").addEventListener("click",(function(){k="",C="",w="",B=!1,x.textContent="0"})),document.querySelector(".buttons").addEventListener("click",(function(n){if(n.target.classList.contains("button")){var t=n.target.textContent;if(v.includes(t)&&(""===C&&""===w?("0"===k&&"."!==t&&(k=""),k.length<10&&(k+=t,x.textContent=k)):""!==k&&""!==C&&B?(C=t,B=!1,x.textContent=C):("0"===C&&"."!==t&&(C=""),C.length<10&&(C+=t,x.textContent=C)),g+=t,document.querySelector(".history").textContent=g),n.target.classList.contains("plus-minus")&&(""!==C?(C=-Number(C),x.textContent=C):""!==k&&(k=-Number(k),x.textContent=k)),n.target.classList.contains("percentage"))""===C&&""===w?(k=Number(k)/100,x.textContent=k,String(k).length>10&&(x.textContent="Infinity")):""!==k&&""!==C&&(C=Number(k)*Number(C)/100,x.textContent=C,String(C).length>10&&(x.textContent="Infinity"));else{if(y.includes(t))return w=t,void(x.textContent=w);if("="===t){switch(""===C&&(C=k),w){case"+":k=Number(k)+Number(C);break;case"-":k=Number(k)-Number(C);break;case"X":k=Number(k)*Number(C);break;case"/":if("0"===C)return x.textContent="Error",k="",C="",void(w="");k=Number(k)/Number(C)}String(k).length<=10?(B=!0,x.textContent=k):(B=!0,x.textContent="Infinity")}}}}))})();