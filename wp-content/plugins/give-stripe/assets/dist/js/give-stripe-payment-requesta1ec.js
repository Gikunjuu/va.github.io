!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=8)}([function(t,e,r){t.exports=r(1)},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=b(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function p(){}function d(){}function f(){}var h={};h[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==e&&r.call(v,o)&&(h=v);var m=f.prototype=p.prototype=Object.create(h);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==typeof p&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(p).then((function(t){s.value=t,a(s)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=m.constructor=f,f.constructor=d,d.displayName=u(f,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,u(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),u(m,a,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},,,,,,,function(t,e,r){t.exports=r(9)},function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);function i(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}var a={};document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".give-form-wrap"),e=[],r=[],n=[],u="",c=give_stripe_vars.preferred_locale;Array.prototype.forEach.call(t,(function(t){var l=t.querySelector(".give-form");if(null!==l){var s=l.getAttribute("data-publishable-key"),p=l.getAttribute("data-account"),d=l.getAttribute("data-id");if(null!==s){a[d]=Stripe(s),0!==p.trim().length&&(a[d]=Stripe(s,{stripeAccount:p}));var f=l.querySelector("input[name=give-form-id]").value,h=t.querySelector(".give-btn-modal"),y=document.querySelector("#give-card-".concat(f)),v=null!==h,m=null!==y,g=a[d].elements({locale:c});if(null!==l.querySelector(".give-gateway-option-selected .give-gateway")&&(u=l.querySelector(".give-gateway-option-selected .give-gateway").value),n[d]=!1,Array.prototype.forEach.call(l.querySelectorAll(".give-gateway"),(function(t){t.addEventListener("change",(function(e){t.checked&&(u=t.value)}))})),document.addEventListener("give_gateway_loaded",(function(t){"stripe_google_pay"!==u&&"stripe_apple_pay"!==u&&"stripe_checkout"!==u||w(d,g)})),v&&h.addEventListener("click",b),m&&y.addEventListener("click",b),Give.fn.getParameterByName("form-id")===l.querySelector("input[name=give-form-id]").value&&["stripe_google_pay","stripe_apple_pay","stripe_checkout"].includes(Give.fn.getParameterByName("payment-mode"))&&(v||m))var _=window.setInterval((function(){jQuery.magnificPopup.instance.isOpen&&(document.getElementsByClassName("mfp-wrap")[0].getElementsByClassName("give-form").length&&(w(d,g),window.clearTimeout(_)))}),500);else"stripe_google_pay"!==u&&"stripe_apple_pay"!==u&&"stripe_checkout"!==u||w(d,g)}}function b(){"stripe_google_pay"!==u&&"stripe_apple_pay"!==u&&"stripe_checkout"!==u||(void 0!==e[d]&&(e[d].removeListener("click"),e[d].unmount("#give-stripe-payment-request-button-"+d)),w(d,g))}function w(t,u){var c=l.querySelector('input[name="give-form-title"]'),s=Give.fn.unFormatCurrency(l.querySelector(".give-final-total-amount").dataset.total,l.dataset.decimal_separator);void 0===r[t]&&(r[t]=a[t].paymentRequest({country:give_stripe_vars.base_country,currency:l.getAttribute("data-currency_code").toLowerCase(),total:{label:c.value,amount:Math.round(100*s)},requestShipping:!1,requestPayerName:!0}),r[t].on("paymentmethod",function(){var t,e=(t=o.a.mark((function t(e){var r,n,i,a,u,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=e.paymentMethod.billing_details,l.querySelector('input[name="give_stripe_payment_method"]').value=e.paymentMethod.id,(n=document.createElement("input")).setAttribute("type","hidden"),n.setAttribute("name","billing_country"),l.appendChild(n).value=r.address.country,(i=document.createElement("input")).setAttribute("type","hidden"),i.setAttribute("name","card_address"),l.appendChild(i).value=r.address.line1,(a=document.createElement("input")).setAttribute("type","hidden"),a.setAttribute("name","card_address_2"),l.appendChild(a).value=r.address.line2,(u=document.createElement("input")).setAttribute("type","hidden"),u.setAttribute("name","card_city"),l.appendChild(u).value=r.address.city,(c=document.createElement("input")).setAttribute("type","hidden"),c.setAttribute("name","card_zip"),l.appendChild(c).value=r.address.postal_code,(s=document.createElement("input")).setAttribute("type","hidden"),s.setAttribute("name","card_state"),l.appendChild(s).value=r.address.state.toUpperCase(),l.submit(),e.complete("success");case 28:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))});return function(t){return e.apply(this,arguments)}}())),!1===n[t]&&(e[t]=u.create("paymentRequestButton",{paymentRequest:r[t],style:{paymentRequestButton:{type:"donate",theme:give_stripe_vars.payment_request_button_style,height:"48px"}}}),n[t]=!0),r[t].canMakePayment().then((function(r){var o=document.getElementById("give-stripe-payment-request-button-"+t),i=l.querySelector(".give-stripe-checkout-modal-else-part");o&&(r?(e[t].mount("#give-stripe-payment-request-button-"+t),n[t]=!0,o.style.display="block"):null!==i&&(i.style.display="none"),null===i&&(o.style.display="block"))})),e[t].on("click",(function(e){var n=l.querySelector('input[name="give_validate_stripe_payment_fields"]');null!==n&&n.setAttribute("value","0");var o=new XMLHttpRequest,i=new FormData(l),a=l.querySelector("#give-stripe-payment-errors-"+t);s=Give.fn.unFormatCurrency(l.querySelector(".give-final-total-amount").dataset.total,l.dataset.decimal_separator),i.append("action","give_process_donation"),i.append("give_ajax",!0),r[t].update({currency:l.getAttribute("data-currency_code").toLowerCase(),total:{label:c.value,amount:Math.round(100*s)}}),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&"success"!==this.responseText?(e.preventDefault(),a.innerHTML=this.response):a.innerHTML=""},o.open("POST",give_global_vars.ajaxurl,!1),o.send(i)}))}}))}))}]);