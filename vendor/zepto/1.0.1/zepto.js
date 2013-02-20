define("#zepto/1.0.1/zepto",[],function(require,exports,module){(function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(this===void 0||this===null)throw new TypeError;var n=Object(this),r=n.length>>>0,i=0,s;if(typeof t!="function")throw new TypeError;if(r==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)s=arguments[1];else do{if(i in n){s=n[i++];break}if(++i>=r)throw new TypeError}while(!0);while(i<r)i in n&&(s=t.call(e,s,n[i],i,n)),i++;return s})})();var Zepto=function(){function C(e){return E.call(e)=="[object Function]"}function k(e){return e instanceof Object}function L(t){var n,r;if(E.call(t)!=="[object Object]")return!1;r=C(t.constructor)&&t.constructor.prototype;if(!r||!hasOwnProperty.call(r,"isPrototypeOf"))return!1;for(n in t);return n===e||hasOwnProperty.call(t,n)}function A(e){return e instanceof Array}function O(e){return typeof e.length=="number"}function M(t){return t.filter(function(t){return t!==e&&t!==null})}function _(e){return e.length>0?[].concat.apply([],e):e}function D(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function P(e){return e in a?a[e]:a[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function H(e,t){return typeof t=="number"&&!l[D(e)]?t+"px":t}function B(e){var t,n;return u[e]||(t=o.createElement(e),o.body.appendChild(t),n=f(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),u[e]=n),u[e]}function j(t,r){return r===e?n(t):n(t).filter(r)}function F(e,t,n,r){return C(t)?t.call(e,n,r):t}function I(e,t,r){var i=e%2?t:t.parentNode;i?i.insertBefore(r,e?e==1?i.firstChild:e==2?t:null:t.nextSibling):n(r).remove()}function q(e,t){t(e);for(var n in e.childNodes)q(e.childNodes[n],t)}var e,t,n,r,i=[],s=i.slice,o=window.document,u={},a={},f=o.defaultView.getComputedStyle,l={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},c=/^\s*<(\w+|!)[^>]*>/,h=[1,3,8,9,11],p=["after","prepend","before","append"],d=o.createElement("table"),v=o.createElement("tr"),m={tr:o.createElement("tbody"),tbody:d,thead:d,tfoot:d,td:v,th:v,"*":o.createElement("div")},g=/complete|loaded|interactive/,y=/^\.([\w-]+)$/,b=/^#([\w-]+)$/,w=/^[\w-]+$/,E={}.toString,S={},x,T,N=o.createElement("div");return S.matches=function(e,t){if(!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=N).appendChild(e),r=~S.qsa(i,t).indexOf(e),s&&N.removeChild(e),r},x=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},T=function(e){return e.filter(function(t,n){return e.indexOf(t)==n})},S.fragment=function(t,r){r===e&&(r=c.test(t)&&RegExp.$1),r in m||(r="*");var i=m[r];return i.innerHTML=""+t,n.each(s.call(i.childNodes),function(){i.removeChild(this)})},S.Z=function(e,t){return e=e||[],e.__proto__=arguments.callee.prototype,e.selector=t||"",e},S.isZ=function(e){return e instanceof S.Z},S.init=function(t,r){if(!t)return S.Z();if(C(t))return n(o).ready(t);if(S.isZ(t))return t;var i;if(A(t))i=M(t);else if(L(t))i=[n.extend({},t)],t=null;else if(h.indexOf(t.nodeType)>=0||t===window)i=[t],t=null;else if(c.test(t))i=S.fragment(t.trim(),RegExp.$1),t=null;else{if(r!==e)return n(r).find(t);i=S.qsa(o,t)}return S.Z(i,t)},n=function(e,t){return S.init(e,t)},n.extend=function(n){return s.call(arguments,1).forEach(function(r){for(t in r)r[t]!==e&&(n[t]=r[t])}),n},S.qsa=function(e,t){var n;return e===o&&b.test(t)?(n=e.getElementById(RegExp.$1))?[n]:i:e.nodeType!==1&&e.nodeType!==9?i:s.call(y.test(t)?e.getElementsByClassName(RegExp.$1):w.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},n.isFunction=C,n.isObject=k,n.isArray=A,n.isPlainObject=L,n.inArray=function(e,t,n){return i.indexOf.call(t,e,n)},n.trim=function(e){return e.trim()},n.uuid=0,n.map=function(e,t){var n,r=[],i,s;if(O(e))for(i=0;i<e.length;i++)n=t(e[i],i),n!=null&&r.push(n);else for(s in e)n=t(e[s],s),n!=null&&r.push(n);return _(r)},n.each=function(e,t){var n,r;if(O(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},n.fn={forEach:i.forEach,reduce:i.reduce,push:i.push,indexOf:i.indexOf,concat:i.concat,map:function(e){return n.map(this,function(t,n){return e.call(t,n,t)})},slice:function(){return n(s.apply(this,arguments))},ready:function(e){return g.test(o.readyState)?e(n):o.addEventListener("DOMContentLoaded",function(){e(n)},!1),this},get:function(t){return t===e?s.call(this):this[t]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return this.forEach(function(t,n){e.call(t,n,t)}),this},filter:function(e){return n([].filter.call(this,function(t){return S.matches(t,e)}))},add:function(e,t){return n(T(this.concat(n(e,t))))},is:function(e){return this.length>0&&S.matches(this[0],e)},not:function(t){var r=[];if(C(t)&&t.call!==e)this.each(function(e){t.call(this,e)||r.push(this)});else{var i=typeof t=="string"?this.filter(t):O(t)&&C(t.item)?s.call(t):n(t);this.forEach(function(e){i.indexOf(e)<0&&r.push(e)})}return n(r)},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!k(e)?e:n(e)},last:function(){var e=this[this.length-1];return e&&!k(e)?e:n(e)},find:function(e){var t;return this.length==1?t=S.qsa(this[0],e):t=this.map(function(){return S.qsa(this,e)}),n(t)},closest:function(e,t){var r=this[0];while(r&&!S.matches(r,e))r=r!==t&&r!==o&&r.parentNode;return n(r)},parents:function(e){var t=[],r=this;while(r.length>0)r=n.map(r,function(e){if((e=e.parentNode)&&e!==o&&t.indexOf(e)<0)return t.push(e),e});return j(t,e)},parent:function(e){return j(T(this.pluck("parentNode")),e)},children:function(e){return j(this.map(function(){return s.call(this.children)}),e)},siblings:function(e){return j(this.map(function(e,t){return s.call(t.parentNode.children).filter(function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return this.map(function(){return this[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),f(this,"").getPropertyValue("display")=="none"&&(this.style.display=B(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return this.each(function(){n(this).wrapAll(n(e)[0].cloneNode(!1))})},wrapAll:function(e){return this[0]&&(n(this[0]).before(e=n(e)),e.append(this)),this},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return n(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(t){return(t===e?this.css("display")=="none":t)?this.show():this.hide()},prev:function(){return n(this.pluck("previousElementSibling"))},next:function(){return n(this.pluck("nextElementSibling"))},html:function(t){return t===e?this.length>0?this[0].innerHTML:null:this.each(function(e){var r=this.innerHTML;n(this).empty().append(F(this,t,e,r))})},text:function(t){return t===e?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=t})},attr:function(n,r){var i;return typeof n=="string"&&r===e?this.length==0||this[0].nodeType!==1?e:n=="value"&&this[0].nodeName=="INPUT"?this.val():!(i=this[0].getAttribute(n))&&n in this[0]?this[0][n]:i:this.each(function(e){if(this.nodeType!==1)return;if(k(n))for(t in n)this.setAttribute(t,n[t]);else this.setAttribute(n,F(this,r,e,this.getAttribute(n)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&this.removeAttribute(e)})},prop:function(t,n){return n===e?this[0]?this[0][t]:e:this.each(function(e){this[t]=F(this,n,e,this[t])})},data:function(t,n){var r=this.attr("data-"+D(t),n);return r!==null?r:e},val:function(t){return t===e?this.length>0?this[0].value:e:this.each(function(e){this.value=F(this,t,e,this.value)})},offset:function(){if(this.length==0)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},css:function(n,r){if(r===e&&typeof n=="string")return this.length==0?e:this[0].style[x(n)]||f(this[0],"").getPropertyValue(n);var i="";for(t in n)typeof n[t]=="string"&&n[t]==""?this.each(function(){this.style.removeProperty(D(t))}):i+=D(t)+":"+H(t,n[t])+";";return typeof n=="string"&&(r==""?this.each(function(){this.style.removeProperty(D(n))}):i=D(n)+":"+H(n,r)),this.each(function(){this.style.cssText+=";"+i})},index:function(e){return e?this.indexOf(n(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return this.length<1?!1:P(e).test(this[0].className)},addClass:function(e){return this.each(function(t){r=[];var i=this.className,s=F(this,e,t,i);s.split(/\s+/g).forEach(function(e){n(this).hasClass(e)||r.push(e)},this),r.length&&(this.className+=(i?" ":"")+r.join(" "))})},removeClass:function(t){return this.each(function(n){if(t===e)return this.className="";r=this.className,F(this,t,n,r).split(/\s+/g).forEach(function(e){r=r.replace(P(e)," ")}),this.className=r.trim()})},toggleClass:function(t,r){return this.each(function(i){var s=F(this,t,i,this.className);(r===e?!n(this).hasClass(s):r)?n(this).addClass(s):n(this).removeClass(s)})}},["width","height"].forEach(function(t){n.fn[t]=function(r){var i,s=t.replace(/./,function(e){return e[0].toUpperCase()});return r===e?this[0]==window?window["inner"+s]:this[0]==o?o.documentElement["offset"+s]:(i=this.offset())&&i[t]:this.each(function(e){var i=n(this);i.css(t,F(this,r,e,i[t]()))})}}),p.forEach(function(e,t){n.fn[e]=function(){var e=n.map(arguments,function(e){return k(e)?e:S.fragment(e)});if(e.length<1)return this;var r=this.length,i=r>1,s=t<2;return this.each(function(n,o){for(var u=0;u<e.length;u++){var a=e[s?e.length-u-1:u];q(a,function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&window.eval.call(window,e.innerHTML)}),i&&n<r-1&&(a=a.cloneNode(!0)),I(t,o,a)}})},n.fn[t%2?e+"To":"insert"+(t?"Before":"After")]=function(t){return n(t)[e](this),this}}),S.Z.prototype=n.fn,S.camelize=x,S.uniq=T,n.zepto=S,n}();return window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function s(e){return e._zid||(e._zid=r++)}function o(e,t,r,i){t=u(t);if(t.ns)var o=a(t.ns);return(n[s(e)]||[]).filter(function(e){return e&&(!t.e||e.e==t.e)&&(!t.ns||o.test(e.ns))&&(!r||s(e.fn)===s(r))&&(!i||e.sel==i)})}function u(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function a(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function f(t,n,r){e.isObject(t)?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function l(t,r,i,o,a,l){l=!!l;var c=s(t),h=n[c]||(n[c]=[]);f(r,i,function(n,r){var i=a&&a(r,n),s=i||r,f=function(e){var n=s.apply(t,[e].concat(e.data));return n===!1&&e.preventDefault(),n},c=e.extend(u(n),{fn:r,proxy:f,sel:o,del:i,i:h.length});h.push(c),t.addEventListener(c.e,f,l)})}function c(e,t,r,i){var u=s(e);f(t||"",r,function(t,r){o(e,t,r,i).forEach(function(t){delete n[u][t.i],e.removeEventListener(t.e,t.proxy,!1)})})}function v(t){var n=e.extend({originalEvent:t},t);return e.each(d,function(e,r){n[e]=function(){return this[r]=h,t[e].apply(t,arguments)},n[r]=p}),n}function m(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var t=e.zepto.qsa,n={},r=1,i={};i.click=i.mousedown=i.mouseup=i.mousemove="MouseEvents",e.event={add:l,remove:c},e.proxy=function(t,n){if(e.isFunction(t)){var r=function(){return t.apply(n,arguments)};return r._zid=s(t),r}if(typeof n=="string")return e.proxy(t[n],t);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){l(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){c(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){l(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return c(r,t,e),n}})})};var h=function(){return!0},p=function(){return!1},d={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){var i=!1;if(n=="blur"||n=="focus")e.iswebkit?n=n=="blur"?"focusout":n=="focus"?"focusin":n:i=!0;return this.each(function(s,o){l(o,n,r,t,function(n){return function(r){var i,s=e(r.target).closest(t,o).get(0);if(s)return i=e.extend(v(r),{currentTarget:s,liveFired:o}),n.apply(s,[i].concat([].slice.call(arguments,1)))}},i)})},e.fn.undelegate=function(e,t,n){return this.each(function(){c(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return n==undefined||e.isFunction(n)?this.bind(t,n):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return n==undefined||e.isFunction(n)?this.unbind(t,n):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){return typeof t=="string"&&(t=e.Event(t)),m(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,n){var r,i;return this.each(function(s,u){r=v(typeof t=="string"?e.Event(t):t),r.data=n,r.target=u,e.each(o(u,t.type||t),function(e,t){i=t.proxy(r);if(r.isImmediatePropagationStopped())return!1})}),i},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){if(e)this.bind(t,e);else if(this.length)try{this.get(0)[t]()}catch(n){}return this}}),e.Event=function(e,t){var n=document.createEvent(i[e]||"Events"),r=!0;if(t)for(var s in t)s=="bubbles"?r=!!t[s]:n[s]=t[s];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n}}(Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/WebKit\/([\d.]+)/),i=e.match(/(Android)\s+([\d.]+)/),s=e.match(/(iPad).*OS\s([\d_]+)/),o=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/),u=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),a=u&&e.match(/TouchPad/),f=e.match(/Kindle\/([\d.]+)/),l=e.match(/Silk\/([\d._]+)/),c=e.match(/(BlackBerry).*Version\/([\d.]+)/);if(n.webkit=!!r)n.version=r[1];i&&(t.android=!0,t.version=i[2]),o&&(t.ios=t.iphone=!0,t.version=o[2].replace(/_/g,".")),s&&(t.ios=t.ipad=!0,t.version=s[2].replace(/_/g,".")),u&&(t.webos=!0,t.version=u[2]),a&&(t.touchpad=!0),c&&(t.blackberry=!0,t.version=c[2]),f&&(t.kindle=!0,t.version=f[1]),l&&(n.silk=!0,n.version=l[1]),!l&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0)}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e,t){function c(e){return e.toLowerCase()}function h(e){return r?r+e:c(e)}var n="",r,i,s,o={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},u=window.document,a=u.createElement("div"),f=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,l={};e.each(o,function(e,i){if(a.style[e+"TransitionProperty"]!==t)return n="-"+c(e)+"-",r=i,!1}),l[n+"transition-property"]=l[n+"transition-duration"]=l[n+"transition-timing-function"]=l[n+"animation-name"]=l[n+"animation-duration"]="",e.fx={off:r===t&&a.style.transitionProperty===t,cssPrefix:n,transitionEnd:h("TransitionEnd"),animationEnd:h("AnimationEnd")},e.fn.animate=function(t,n,r,i){return e.isObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n/=1e3),this.anim(t,n,r,i)},e.fn.anim=function(r,i,s,o){var u,a={},c,h=this,p,d=e.fx.transitionEnd;i===t&&(i=.4),e.fx.off&&(i=0);if(typeof r=="string")a[n+"animation-name"]=r,a[n+"animation-duration"]=i+"s",d=e.fx.animationEnd;else{for(c in r)f.test(c)?(u||(u=[]),u.push(c+"("+r[c]+")")):a[c]=r[c];u&&(a[n+"transform"]=u.join(" ")),!e.fx.off&&typeof r=="object"&&(a[n+"transition-property"]=Object.keys(r).join(", "),a[n+"transition-duration"]=i+"s",a[n+"transition-timing-function"]=s||"linear")}return p=function(t){if(typeof t!="undefined"){if(t.target!==t.currentTarget)return;e(t.target).unbind(d,arguments.callee)}e(this).css(l),o&&o.call(this)},i>0&&this.bind(d,p),setTimeout(function(){h.css(a),i<=0&&setTimeout(function(){h.each(function(){p.call(this)})},0)},0),this},a=null}(Zepto),function($){function triggerAndReturn(e,t,n){var r=$.Event(t);return $(e).trigger(r,n),!r.defaultPrevented}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){e.global&&$.active++===0&&triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){e.global&&!--$.active&&triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n){var r=n.context,i="success";n.success.call(r,e,i,t),triggerGlobal(n,r,"ajaxSuccess",[t,n,e]),ajaxComplete(i,t,n)}function ajaxError(e,t,n,r){var i=r.context;r.error.call(i,n,t,e),triggerGlobal(r,i,"ajaxError",[n,r,e]),ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e),triggerGlobal(n,r,"ajaxComplete",[t,n]),ajaxStop(n)}function empty(){}function mimeToDataType(e){return e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){isObject(e.data)&&(e.data=$.param(e.data)),e.data&&(!e.type||e.type.toUpperCase()=="GET")&&(e.url=appendQuery(e.url,e.data))}function serialize(e,t,n,r){var i=$.isArray(t);$.each(t,function(t,s){r&&(t=n?r:r+"["+(i?"":t)+"]"),!r&&i?e.add(s.name,s.value):(n?$.isArray(s):isObject(s))?serialize(e,s,n,t):e.add(t,s)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(e){var t="jsonp"+ ++jsonpID,n=document.createElement("script"),r=function(){$(n).remove(),t in window&&(window[t]=empty),ajaxComplete("abort",i,e)},i={abort:r},s;return e.error&&(n.onerror=function(){i.abort(),e.error()}),window[t]=function(r){clearTimeout(s),$(n).remove(),delete window[t],ajaxSuccess(r,i,e)},serializeData(e),n.src=e.url.replace(/=\?/,"="+t),$("head").append(n),e.timeout>0&&(s=setTimeout(function(){i.abort(),ajaxComplete("timeout",i,e)},e.timeout)),i},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,"error",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(e,t){return $.ajax({url:e,success:t})},$.post=function(e,t,n,r){return $.isFunction(t)&&(r=r||n,n=t,t=null),$.ajax({type:"POST",url:e,data:t,success:n,dataType:r})},$.getJSON=function(e,t){return $.ajax({url:e,success:t,dataType:"json"})},$.fn.load=function(e,t){if(!this.length)return this;var n=this,r=e.split(/\s/),i;return r.length>1&&(e=r[0],i=r[1]),$.get(e,function(e){n.html(i?$(document.createElement("div")).html(e.replace(rscript,"")).find(i).html():e),t&&t.call(n)}),this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];return n.add=function(e,t){this.push(escape(e)+"="+escape(t))},serialize(n,e,t),n.join("&").replace("%20","+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t=[],n;return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked)&&t.push({name:n.attr("name"),value:n.val()})}),t},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e){function r(e){return"tagName"in e?e:e.parentNode}function i(e,t,n,r){var i=Math.abs(e-t),s=Math.abs(n-r);return i>=s?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function u(){o=null,t.last&&(t.el.trigger("longTap"),t={})}function a(){o&&clearTimeout(o),o=null}var t={},n,s=750,o;e(document).ready(function(){var f,l;e(document.body).bind("touchstart",function(i){f=Date.now(),l=f-(t.last||f),t.el=e(r(i.touches[0].target)),n&&clearTimeout(n),t.x1=i.touches[0].pageX,t.y1=i.touches[0].pageY,l>0&&l<=250&&(t.isDoubleTap=!0),t.last=f,o=setTimeout(u,s)}).bind("touchmove",function(e){a(),t.x2=e.touches[0].pageX,t.y2=e.touches[0].pageY}).bind("touchend",function(e){a(),t.isDoubleTap?(t.el.trigger("doubleTap"),t={}):t.x2&&Math.abs(t.x1-t.x2)>30||t.y2&&Math.abs(t.y1-t.y2)>30?(t.el.trigger("swipe")&&t.el.trigger("swipe"+i(t.x1,t.x2,t.y1,t.y2)),t={}):"last"in t&&(t.el.trigger("tap"),n=setTimeout(function(){n=null,t.el.trigger("singleTap"),t={}},250))}).bind("touchcancel",function(){n&&clearTimeout(n),o&&clearTimeout(o),o=n=null,t={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto),Zepto});