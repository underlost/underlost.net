/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e(t.bootstrap={},t.jQuery)}(this,function(t,e){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function c(r){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},e=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(o).filter(function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=o[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}for(var r,n,o,a,l,f,h,u,d,p,g,m,_,v,E,y,b,T,C,w,I,D,A,S,O,N,k,L,P,x,j,M,R,H,W,F,U,B,K,V,Q,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,ot,st,at,lt,ct,ft,ht,ut,dt,pt,gt=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=e[i],s=o&&l.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e=e&&e.hasOwnProperty("default")?e.default:e),mt=(n="alert",a="."+(o="bs.alert"),l=(r=e).fn[n],f={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},h="alert",u="fade",d="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,o),this._element=null},t._getRootElement=function(t){var e=gt.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+h)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(f.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(d),r(e).hasClass(u)){var t=gt.getTransitionDurationFromElement(e);r(e).one(gt.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(f.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(o);e||(e=new i(this),t.data(o,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),r(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),r.fn[n]=p._jQueryInterface,r.fn[n].Constructor=p,r.fn[n].noConflict=function(){return r.fn[n]=l,p._jQueryInterface},p),_t=(m="button",v="."+(_="bs.button"),E=".data-api",y=(g=e).fn[m],b="active",T="btn",w='[data-toggle^="button"]',I='[data-toggle="buttons"]',D="input",A=".active",S=".btn",O={CLICK_DATA_API:"click"+v+E,FOCUS_BLUR_DATA_API:(C="focus")+v+E+" blur"+v+E},N=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(I)[0];if(n){var i=g(this._element).find(D)[0];if(i){if("radio"===i.type)if(i.checked&&g(this._element).hasClass(b))t=!1;else{var r=g(n).find(A)[0];r&&g(r).removeClass(b)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!g(this._element).hasClass(b),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!g(this._element).hasClass(b)),t&&g(this._element).toggleClass(b)},t.dispose=function(){g.removeData(this._element,_),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(_);t||(t=new n(this),g(this).data(_,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),n}(),g(document).on(O.CLICK_DATA_API,w,function(t){t.preventDefault();var e=t.target;g(e).hasClass(T)||(e=g(e).closest(S)),N._jQueryInterface.call(g(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,w,function(t){var e=g(t.target).closest(S)[0];g(e).toggleClass(C,/^focus(in)?$/.test(t.type))}),g.fn[m]=N._jQueryInterface,g.fn[m].Constructor=N,g.fn[m].noConflict=function(){return g.fn[m]=y,N._jQueryInterface},N),vt=(L="carousel",x="."+(P="bs.carousel"),j=".data-api",M=(k=e).fn[L],R={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},H={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},W="next",F="prev",U="left",B="right",K={SLIDE:"slide"+x,SLID:"slid"+x,KEYDOWN:"keydown"+x,MOUSEENTER:"mouseenter"+x,MOUSELEAVE:"mouseleave"+x,TOUCHEND:"touchend"+x,LOAD_DATA_API:"load"+x+j,CLICK_DATA_API:"click"+x+j},V="carousel",Q="active",Y="slide",G="carousel-item-right",q="carousel-item-left",z="carousel-item-next",X="carousel-item-prev",J={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},Z=function(){function o(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=k(t)[0],this._indicatorsElement=k(this._element).find(J.INDICATORS)[0],this._addEventListeners()}var t=o.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&k(this._element).is(":visible")&&"hidden"!==k(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(F)},t.pause=function(t){t||(this._isPaused=!0),k(this._element).find(J.NEXT_PREV)[0]&&(gt.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=k(this._element).find(J.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)k(this._element).one(K.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:F;this._slide(i,this._items[t])}},t.dispose=function(){k(this._element).off(x),k.removeData(this._element,P),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=c({},R,t),gt.typeCheckConfig(L,t,H),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&k(this._element).on(K.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(k(this._element).on(K.MOUSEENTER,function(t){return e.pause(t)}).on(K.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&k(this._element).on(K.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=k.makeArray(k(t).parent().find(J.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===F,r=this._getItemIndex(e),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return e;var s=(r+(t===F?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(k(this._element).find(J.ACTIVE_ITEM)[0]),r=k.Event(K.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return k(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){k(this._indicatorsElement).find(J.ACTIVE).removeClass(Q);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&k(e).addClass(Q)}},t._slide=function(t,e){var n,i,r,o=this,s=k(this._element).find(J.ACTIVE_ITEM)[0],a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),f=Boolean(this._interval);if(t===W?(n=q,i=z,r=U):(n=G,i=X,r=B),l&&k(l).hasClass(Q))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,f&&this.pause(),this._setActiveIndicatorElement(l);var h=k.Event(K.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(k(this._element).hasClass(Y)){k(l).addClass(i),gt.reflow(l),k(s).addClass(n),k(l).addClass(n);var u=gt.getTransitionDurationFromElement(s);k(s).one(gt.TRANSITION_END,function(){k(l).removeClass(n+" "+i).addClass(Q),k(s).removeClass(Q+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return k(o._element).trigger(h)},0)}).emulateTransitionEnd(u)}else k(s).removeClass(Q),k(l).addClass(Q),this._isSliding=!1,k(this._element).trigger(h);f&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var t=k(this).data(P),e=c({},R,k(this).data());"object"==typeof i&&(e=c({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new o(this,e),k(this).data(P,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},o._dataApiClickHandler=function(t){var e=gt.getSelectorFromElement(this);if(e){var n=k(e)[0];if(n&&k(n).hasClass(V)){var i=c({},k(n).data(),k(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(k(n),i),r&&k(n).data(P).to(r),t.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return R}}]),o}(),k(document).on(K.CLICK_DATA_API,J.DATA_SLIDE,Z._dataApiClickHandler),k(window).on(K.LOAD_DATA_API,function(){k(J.DATA_RIDE).each(function(){var t=k(this);Z._jQueryInterface.call(t,t.data())})}),k.fn[L]=Z._jQueryInterface,k.fn[L].Constructor=Z,k.fn[L].noConflict=function(){return k.fn[L]=M,Z._jQueryInterface},Z),Et=(tt="collapse",nt="."+(et="bs.collapse"),it=($=e).fn[tt],rt={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},st={SHOW:"show"+nt,SHOWN:"shown"+nt,HIDE:"hide"+nt,HIDDEN:"hidden"+nt,CLICK_DATA_API:"click"+nt+".data-api"},at="show",lt="collapse",ct="collapsing",ft="collapsed",ht="width",ut="height",dt={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},pt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=$.makeArray($('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=$(dt.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],o=gt.getSelectorFromElement(r);null!==o&&0<$(o).filter(t).length&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){$(this._element).hasClass(at)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!$(this._element).hasClass(at)&&(this._parent&&0===(t=$.makeArray($(this._parent).find(dt.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=$(t).not(this._selector).data(et))&&e._isTransitioning))){var i=$.Event(st.SHOW);if($(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call($(t).not(this._selector),"hide"),e||$(t).data(et,null));var r=this._getDimension();$(this._element).removeClass(lt).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&$(this._triggerArray).removeClass(ft).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){$(n._element).removeClass(ct).addClass(lt).addClass(at),n._element.style[r]="",n.setTransitioning(!1),$(n._element).trigger(st.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&$(this._element).hasClass(at)){var e=$.Event(st.HIDE);if($(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",gt.reflow(this._element),$(this._element).addClass(ct).removeClass(lt).removeClass(at),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],o=gt.getSelectorFromElement(r);if(null!==o)$(o).hasClass(at)||$(r).addClass(ft).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var s=gt.getTransitionDurationFromElement(this._element);$(this._element).one(gt.TRANSITION_END,function(){t.setTransitioning(!1),$(t._element).removeClass(ct).addClass(lt).trigger(st.HIDDEN)}).emulateTransitionEnd(s)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){$.removeData(this._element,et),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=c({},rt,t)).toggle=Boolean(t.toggle),gt.typeCheckConfig(tt,t,ot),t},t._getDimension=function(){return $(this._element).hasClass(ht)?ht:ut},t._getParent=function(){var n=this,t=null;gt.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=$(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return $(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=$(t).hasClass(at);0<e.length&&$(e).toggleClass(ft,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=gt.getSelectorFromElement(t);return e?$(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=$(this),e=t.data(et),n=c({},rt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(et,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return rt}}]),a}(),$(document).on(st.CLICK_DATA_API,dt.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=$(this),e=gt.getSelectorFromElement(this);$(e).each(function(){var t=$(this),e=t.data(et)?"toggle":n.data();pt._jQueryInterface.call(t,e)})}),$.fn[tt]=pt._jQueryInterface,$.fn[tt].Constructor=pt,$.fn[tt].noConflict=function(){return $.fn[tt]=it,pt._jQueryInterface},pt),yt="undefined"!=typeof window&&"undefined"!=typeof document,bt=["Edge","Trident","Firefox"],Tt=0,Ct=0;Ct<bt.length;Ct+=1)if(yt&&0<=navigator.userAgent.indexOf(bt[Ct])){Tt=1;break}var wt=yt&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Tt))}};function It(t){return t&&"[object Function]"==={}.toString.call(t)}function Dt(t,e){if(1!==t.nodeType)return[];var n=getComputedStyle(t,null);return e?n[e]:n}function At(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function St(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=Dt(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/(auto|scroll|overlay)/.test(n+r+i)?t:St(At(t))}var Ot=yt&&!(!window.MSInputMethodContext||!document.documentMode),Nt=yt&&/MSIE 10/.test(navigator.userAgent);function kt(t){return 11===t?Ot:10===t?Nt:Ot||Nt}function Lt(t){if(!t)return document.documentElement;for(var e=kt(10)?document.body:null,n=t.offsetParent;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TD","TABLE"].indexOf(n.nodeName)&&"static"===Dt(n,"position")?Lt(n):n:t?t.ownerDocument.documentElement:document.documentElement}function Pt(t){return null!==t.parentNode?Pt(t.parentNode):t}function xt(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,r=n?e:t,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(t!==l&&e!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&Lt(s.firstElementChild)!==s?Lt(l):l;var c=Pt(t);return c.host?xt(c.host,e):xt(t,Pt(e).host)}function jt(t){var e="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){var i=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||i)[e]}return t[e]}function Mt(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+i+"Width"],10)}function Rt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],kt(10)?n["offset"+t]+i["margin"+("Height"===t?"Top":"Left")]+i["margin"+("Height"===t?"Bottom":"Right")]:0)}function Ht(){var t=document.body,e=document.documentElement,n=kt(10)&&getComputedStyle(e);return{height:Rt("Height",t,e,n),width:Rt("Width",t,e,n)}}var Wt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Ft=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),Ut=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},Bt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function Kt(t){return Bt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Vt(t){var e={};try{if(kt(10)){e=t.getBoundingClientRect();var n=jt(t,"top"),i=jt(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(t){}var r={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},o="HTML"===t.nodeName?Ht():{},s=o.width||t.clientWidth||r.right-r.left,a=o.height||t.clientHeight||r.bottom-r.top,l=t.offsetWidth-s,c=t.offsetHeight-a;if(l||c){var f=Dt(t);l-=Mt(f,"x"),c-=Mt(f,"y"),r.width-=l,r.height-=c}return Kt(r)}function Qt(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=kt(10),r="HTML"===e.nodeName,o=Vt(t),s=Vt(e),a=St(t),l=Dt(e),c=parseFloat(l.borderTopWidth,10),f=parseFloat(l.borderLeftWidth,10);n&&"HTML"===e.nodeName&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var h=Kt({top:o.top-s.top-c,left:o.left-s.left-f,width:o.width,height:o.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),d=parseFloat(l.marginLeft,10);h.top-=c-u,h.bottom-=c-u,h.left-=f-d,h.right-=f-d,h.marginTop=u,h.marginLeft=d}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(h=function(t,e){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=jt(e,"top"),r=jt(e,"left"),o=n?-1:1;return t.top+=i*o,t.bottom+=i*o,t.left+=r*o,t.right+=r*o,t}(h,e)),h}function Yt(t){if(!t||!t.parentElement||kt())return document.documentElement;for(var e=t.parentElement;e&&"none"===Dt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Gt(t,e,n,i){var r=4<arguments.length&&void 0!==arguments[4]&&arguments[4],o={top:0,left:0},s=r?Yt(t):xt(t,e);if("viewport"===i)o=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=Qt(t,n),r=Math.max(n.clientWidth,window.innerWidth||0),o=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:jt(n),a=e?0:jt(n,"left");return Kt({top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:r,height:o})}(s,r);else{var a=void 0;"scrollParent"===i?"BODY"===(a=St(At(e))).nodeName&&(a=t.ownerDocument.documentElement):a="window"===i?t.ownerDocument.documentElement:i;var l=Qt(a,s,r);if("HTML"!==a.nodeName||function t(e){var n=e.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===Dt(e,"position")||t(At(e)))}(s))o=l;else{var c=Ht(),f=c.height,h=c.width;o.top+=l.top-l.marginTop,o.bottom=f+l.top,o.left+=l.left-l.marginLeft,o.right=h+l.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function qt(t,e,i,n,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=Gt(i,n,o,r),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},l=Object.keys(a).map(function(t){return Bt({key:t},a[t],{area:(e=a[t],e.width*e.height)});var e}).sort(function(t,e){return e.area-t.area}),c=l.filter(function(t){var e=t.width,n=t.height;return e>=i.clientWidth&&n>=i.clientHeight}),f=0<c.length?c[0].key:l[0].key,h=t.split("-")[1];return f+(h?"-"+h:"")}function zt(t,e,n){var i=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return Qt(n,i?Yt(e):xt(e,n),i)}function Xt(t){var e=getComputedStyle(t),n=parseFloat(e.marginTop)+parseFloat(e.marginBottom),i=parseFloat(e.marginLeft)+parseFloat(e.marginRight);return{width:t.offsetWidth+i,height:t.offsetHeight+n}}function Jt(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function Zt(t,e,n){n=n.split("-")[0];var i=Xt(t),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=e[s]+e[l]/2-i[l]/2,r[a]=n===a?e[a]-i[c]:e[Jt(a)],r}function $t(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function te(t,n,e){return(void 0===e?t:t.slice(0,function(t,e,n){if(Array.prototype.findIndex)return t.findIndex(function(t){return t[e]===n});var i=$t(t,function(t){return t[e]===n});return t.indexOf(i)}(t,"name",e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&It(e)&&(n.offsets.popper=Kt(n.offsets.popper),n.offsets.reference=Kt(n.offsets.reference),n=e(n,t))}),n}function ee(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function ne(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var r=e[i],o=r?""+r+n:t;if("undefined"!=typeof document.body.style[o])return o}return null}function ie(t){var e=t.ownerDocument;return e?e.defaultView:window}function re(t,e,n,i){n.updateBound=i,ie(t).addEventListener("resize",n.updateBound,{passive:!0});var r=St(t);return function t(e,n,i,r){var o="BODY"===e.nodeName,s=o?e.ownerDocument.defaultView:e;s.addEventListener(n,i,{passive:!0}),o||t(St(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function oe(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,ie(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function se(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function ae(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&se(i[t])&&(e="px"),n.style[t]=i[t]+e})}function le(t,e,n){var i=$t(t,function(t){return t.name===e}),r=!!i&&t.some(function(t){return t.name===n&&t.enabled&&t.order<i.order});if(!r){var o="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}var ce=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],fe=ce.slice(3);function he(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=fe.indexOf(t),i=fe.slice(n+1).concat(fe.slice(0,n));return e?i.reverse():i}var ue={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function de(t,r,o,e){var s=[0,0],a=-1!==["right","left"].indexOf(e),n=t.split(/(\+|\-)/).map(function(t){return t.trim()}),i=n.indexOf($t(n,function(t){return-1!==t.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var r=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),o=+r[1],s=r[2];if(!o)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Kt(a)[e]/100*o}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o;return o}(t,n,r,o)})})).forEach(function(n,i){n.forEach(function(t,e){se(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s}var pe={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var r=t.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",f={start:Ut({},l,o[l]),end:Ut({},l,o[l]+o[c]-s[c])};t.offsets.popper=Bt({},s,f[i])}return t}},offset:{order:200,enabled:!0,fn:function(t,e){var n=e.offset,i=t.placement,r=t.offsets,o=r.popper,s=r.reference,a=i.split("-")[0],l=void 0;return l=se(+n)?[+n,0]:de(n,o,s,a),"left"===a?(o.top+=l[0],o.left-=l[1]):"right"===a?(o.top+=l[0],o.left+=l[1]):"top"===a?(o.left+=l[0],o.top-=l[1]):"bottom"===a&&(o.left+=l[0],o.top+=l[1]),t.popper=o,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||Lt(t.instance.popper);t.instance.reference===e&&(e=Lt(e));var n=ne("transform"),r=t.instance.popper.style,o=r.top,s=r.left,a=r[n];r.top="",r.left="",r[n]="";var l=Gt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);r.top=o,r.left=s,r[n]=a,i.boundaries=l;var c=i.priority,f=t.offsets.popper,h={primary:function(t){var e=f[t];return f[t]<l[t]&&!i.escapeWithReference&&(e=Math.max(f[t],l[t])),Ut({},t,e)},secondary:function(t){var e="right"===t?"left":"top",n=f[e];return f[t]>l[t]&&!i.escapeWithReference&&(n=Math.min(f[e],l[t]-("right"===t?f.width:f.height))),Ut({},e,n)}};return c.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=Bt({},f,h[e](t))}),t.offsets.popper=f,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,r=t.placement.split("-")[0],o=Math.floor,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(t.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(t.offsets.popper[l]=o(i[a])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){var n;if(!le(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"==typeof i){if(!(i=t.instance.popper.querySelector(i)))return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var r=t.placement.split("-")[0],o=t.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",f=l?"Top":"Left",h=f.toLowerCase(),u=l?"left":"top",d=l?"bottom":"right",p=Xt(i)[c];a[d]-p<s[h]&&(t.offsets.popper[h]-=s[h]-(a[d]-p)),a[h]+p>s[d]&&(t.offsets.popper[h]+=a[h]+p-s[d]),t.offsets.popper=Kt(t.offsets.popper);var g=a[h]+a[c]/2-p/2,m=Dt(t.instance.popper),_=parseFloat(m["margin"+f],10),v=parseFloat(m["border"+f+"Width"],10),E=g-t.offsets.popper[h]-_-v;return E=Math.max(Math.min(s[c]-p,E),0),t.arrowElement=i,t.offsets.arrow=(Ut(n={},h,Math.round(E)),Ut(n,u,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,g){if(ee(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var m=Gt(p.instance.popper,p.instance.reference,g.padding,g.boundariesElement,p.positionFixed),_=p.placement.split("-")[0],v=Jt(_),E=p.placement.split("-")[1]||"",y=[];switch(g.behavior){case ue.FLIP:y=[_,v];break;case ue.CLOCKWISE:y=he(_);break;case ue.COUNTERCLOCKWISE:y=he(_,!0);break;default:y=g.behavior}return y.forEach(function(t,e){if(_!==t||y.length===e+1)return p;_=p.placement.split("-")[0],v=Jt(_);var n,i=p.offsets.popper,r=p.offsets.reference,o=Math.floor,s="left"===_&&o(i.right)>o(r.left)||"right"===_&&o(i.left)<o(r.right)||"top"===_&&o(i.bottom)>o(r.top)||"bottom"===_&&o(i.top)<o(r.bottom),a=o(i.left)<o(m.left),l=o(i.right)>o(m.right),c=o(i.top)<o(m.top),f=o(i.bottom)>o(m.bottom),h="left"===_&&a||"right"===_&&l||"top"===_&&c||"bottom"===_&&f,u=-1!==["top","bottom"].indexOf(_),d=!!g.flipVariations&&(u&&"start"===E&&a||u&&"end"===E&&l||!u&&"start"===E&&c||!u&&"end"===E&&f);(s||h||d)&&(p.flipped=!0,(s||h)&&(_=y[e+1]),d&&(E="end"===(n=E)?"start":"start"===n?"end":n),p.placement=_+(E?"-"+E:""),p.offsets.popper=Bt({},p.offsets.popper,Zt(p.instance.popper,p.offsets.reference,p.placement)),p=te(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),t.placement=Jt(e),t.offsets.popper=Kt(r),t}},hide:{order:800,enabled:!0,fn:function(t){if(!le(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=$t(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,r=t.offsets.popper,o=$t(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==o?o:e.gpuAcceleration,a=Vt(Lt(t.instance.popper)),l={position:r.position},c={left:Math.floor(r.left),top:Math.round(r.top),bottom:Math.round(r.bottom),right:Math.floor(r.right)},f="bottom"===n?"top":"bottom",h="right"===i?"left":"right",u=ne("transform"),d=void 0,p=void 0;if(p="bottom"===f?-a.height+c.bottom:c.top,d="right"===h?-a.width+c.right:c.left,s&&u)l[u]="translate3d("+d+"px, "+p+"px, 0)",l[f]=0,l[h]=0,l.willChange="transform";else{var g="bottom"===f?-1:1,m="right"===h?-1:1;l[f]=p*g,l[h]=d*m,l.willChange=f+", "+h}var _={"x-placement":t.placement};return t.attributes=Bt({},_,t.attributes),t.styles=Bt({},l,t.styles),t.arrowStyles=Bt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){var e,n;return ae(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&ae(t.arrowElement,t.arrowStyles),t},onLoad:function(t,e,n,i,r){var o=zt(r,e,t,n.positionFixed),s=qt(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),ae(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},ge=function(){function o(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};Wt(this,o),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=wt(this.update.bind(this)),this.options=Bt({},o.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(Bt({},o.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=Bt({},o.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return Bt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&It(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return Ft(o,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=zt(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=qt(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=Zt(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=te(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,ee(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[ne("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=re(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return oe.call(this)}}]),o}();ge.Utils=("undefined"!=typeof window?window:global).PopperUtils,ge.placements=ce,ge.Defaults=pe;var me,_e,ve,Ee,ye,be,Te,Ce,we,Ie,De,Ae,Se,Oe,Ne,ke,Le,Pe,xe,je,Me,Re,He,We,Fe,Ue,Be,Ke,Ve,Qe,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,on,sn,an,ln,cn,fn,hn,un,dn,pn,gn,mn,_n,vn,En,yn,bn,Tn,Cn,wn,In,Dn,An,Sn,On,Nn,kn,Ln,Pn,xn,jn,Mn,Rn,Hn,Wn,Fn,Un,Bn,Kn,Vn,Qn,Yn,Gn,qn,zn,Xn,Jn,Zn,$n,ti,ei,ni,ii,ri,oi,si,ai,li,ci,fi,hi,ui,di,pi,gi,mi,_i,vi,Ei,yi,bi,Ti=(_e="dropdown",Ee="."+(ve="bs.dropdown"),ye=".data-api",be=(me=e).fn[_e],Te=new RegExp("38|40|27"),Ce={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:"show"+Ee,SHOWN:"shown"+Ee,CLICK:"click"+Ee,CLICK_DATA_API:"click"+Ee+ye,KEYDOWN_DATA_API:"keydown"+Ee+ye,KEYUP_DATA_API:"keyup"+Ee+ye},we="disabled",Ie="show",De="dropup",Ae="dropright",Se="dropleft",Oe="dropdown-menu-right",Ne="position-static",ke='[data-toggle="dropdown"]',Le=".dropdown form",Pe=".dropdown-menu",xe=".navbar-nav",je=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Me="top-start",Re="top-end",He="bottom-start",We="bottom-end",Fe="right-start",Ue="left-start",Be={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Ke={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Ve=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!me(this._element).hasClass(we)){var t=l._getParentFromElement(this._element),e=me(this._menu).hasClass(Ie);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=me.Event(Ce.SHOW,n);if(me(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof ge)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:gt.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&me(t).addClass(Ne),this._popper=new ge(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===me(t).closest(xe).length&&me(document.body).children().on("mouseover",null,me.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),me(this._menu).toggleClass(Ie),me(t).toggleClass(Ie).trigger(me.Event(Ce.SHOWN,n))}}}},t.dispose=function(){me.removeData(this._element,ve),me(this._element).off(Ee),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;me(this._element).on(Ce.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=c({},this.constructor.Default,me(this._element).data(),t),gt.typeCheckConfig(_e,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=me(t).find(Pe)[0]}return this._menu},t._getPlacement=function(){var t=me(this._element).parent(),e=He;return t.hasClass(De)?(e=Me,me(this._menu).hasClass(Oe)&&(e=Re)):t.hasClass(Ae)?e=Fe:t.hasClass(Se)?e=Ue:me(this._menu).hasClass(Oe)&&(e=We),e},t._detectNavbar=function(){return 0<me(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=c({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=me(this).data(ve);if(t||(t=new l(this,"object"==typeof e?e:null),me(this).data(ve,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=me.makeArray(me(ke)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=me(e[n]).data(ve),o={relatedTarget:e[n]};if(r){var s=r._menu;if(me(i).hasClass(Ie)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&me.contains(i,t.target))){var a=me.Event(Ce.HIDE,o);me(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&me(document.body).children().off("mouseover",null,me.noop),e[n].setAttribute("aria-expanded","false"),me(s).removeClass(Ie),me(i).removeClass(Ie).trigger(me.Event(Ce.HIDDEN,o)))}}}},l._getParentFromElement=function(t){var e,n=gt.getSelectorFromElement(t);return n&&(e=me(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||me(t.target).closest(Pe).length)):Te.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!me(this).hasClass(we))){var e=l._getParentFromElement(this),n=me(e).hasClass(Ie);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=me(e).find(je).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var o=me(e).find(ke)[0];me(o).trigger("focus")}me(this).trigger("click")}}},s(l,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Be}},{key:"DefaultType",get:function(){return Ke}}]),l}(),me(document).on(Ce.KEYDOWN_DATA_API,ke,Ve._dataApiKeydownHandler).on(Ce.KEYDOWN_DATA_API,Pe,Ve._dataApiKeydownHandler).on(Ce.CLICK_DATA_API+" "+Ce.KEYUP_DATA_API,Ve._clearMenus).on(Ce.CLICK_DATA_API,ke,function(t){t.preventDefault(),t.stopPropagation(),Ve._jQueryInterface.call(me(this),"toggle")}).on(Ce.CLICK_DATA_API,Le,function(t){t.stopPropagation()}),me.fn[_e]=Ve._jQueryInterface,me.fn[_e].Constructor=Ve,me.fn[_e].noConflict=function(){return me.fn[_e]=be,Ve._jQueryInterface},Ve),Ci=(Ye="modal",qe="."+(Ge="bs.modal"),ze=(Qe=e).fn[Ye],Xe={backdrop:!0,keyboard:!0,focus:!0,show:!0},Je={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Ze={HIDE:"hide"+qe,HIDDEN:"hidden"+qe,SHOW:"show"+qe,SHOWN:"shown"+qe,FOCUSIN:"focusin"+qe,RESIZE:"resize"+qe,CLICK_DISMISS:"click.dismiss"+qe,KEYDOWN_DISMISS:"keydown.dismiss"+qe,MOUSEUP_DISMISS:"mouseup.dismiss"+qe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qe,CLICK_DATA_API:"click"+qe+".data-api"},$e="modal-scrollbar-measure",tn="modal-backdrop",en="modal-open",nn="fade",rn="show",on={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},sn=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Qe(t).find(on.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Qe(this._element).hasClass(nn)&&(this._isTransitioning=!0);var n=Qe.Event(Ze.SHOW,{relatedTarget:t});Qe(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Qe(document.body).addClass(en),this._setEscapeEvent(),this._setResizeEvent(),Qe(this._element).on(Ze.CLICK_DISMISS,on.DATA_DISMISS,function(t){return e.hide(t)}),Qe(this._dialog).on(Ze.MOUSEDOWN_DISMISS,function(){Qe(e._element).one(Ze.MOUSEUP_DISMISS,function(t){Qe(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Qe.Event(Ze.HIDE);if(Qe(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Qe(this._element).hasClass(nn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Qe(document).off(Ze.FOCUSIN),Qe(this._element).removeClass(rn),Qe(this._element).off(Ze.CLICK_DISMISS),Qe(this._dialog).off(Ze.MOUSEDOWN_DISMISS),i){var r=gt.getTransitionDurationFromElement(this._element);Qe(this._element).one(gt.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Qe.removeData(this._element,Ge),Qe(window,document,this._element,this._backdrop).off(qe),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=c({},Xe,t),gt.typeCheckConfig(Ye,t,Je),t},t._showElement=function(t){var e=this,n=Qe(this._element).hasClass(nn);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&gt.reflow(this._element),Qe(this._element).addClass(rn),this._config.focus&&this._enforceFocus();var i=Qe.Event(Ze.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Qe(e._element).trigger(i)};if(n){var o=gt.getTransitionDurationFromElement(this._element);Qe(this._dialog).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},t._enforceFocus=function(){var e=this;Qe(document).off(Ze.FOCUSIN).on(Ze.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Qe(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Qe(this._element).on(Ze.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Qe(this._element).off(Ze.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Qe(window).on(Ze.RESIZE,function(t){return e.handleUpdate(t)}):Qe(window).off(Ze.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Qe(document.body).removeClass(en),t._resetAdjustments(),t._resetScrollbar(),Qe(t._element).trigger(Ze.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Qe(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Qe(this._element).hasClass(nn)?nn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=tn,n&&Qe(this._backdrop).addClass(n),Qe(this._backdrop).appendTo(document.body),Qe(this._element).on(Ze.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&gt.reflow(this._backdrop),Qe(this._backdrop).addClass(rn),!t)return;if(!n)return void t();var i=gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Qe(this._backdrop).removeClass(rn);var r=function(){e._removeBackdrop(),t&&t()};if(Qe(this._element).hasClass(nn)){var o=gt.getTransitionDurationFromElement(this._backdrop);Qe(this._backdrop).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Qe(on.FIXED_CONTENT).each(function(t,e){var n=Qe(e)[0].style.paddingRight,i=Qe(e).css("padding-right");Qe(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Qe(on.STICKY_CONTENT).each(function(t,e){var n=Qe(e)[0].style.marginRight,i=Qe(e).css("margin-right");Qe(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Qe(on.NAVBAR_TOGGLER).each(function(t,e){var n=Qe(e)[0].style.marginRight,i=Qe(e).css("margin-right");Qe(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Qe(document.body).css("padding-right");Qe(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Qe(on.FIXED_CONTENT).each(function(t,e){var n=Qe(e).data("padding-right");"undefined"!=typeof n&&Qe(e).css("padding-right",n).removeData("padding-right")}),Qe(on.STICKY_CONTENT+", "+on.NAVBAR_TOGGLER).each(function(t,e){var n=Qe(e).data("margin-right");"undefined"!=typeof n&&Qe(e).css("margin-right",n).removeData("margin-right")});var t=Qe(document.body).data("padding-right");"undefined"!=typeof t&&Qe(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$e,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Qe(this).data(Ge),e=c({},Xe,Qe(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),Qe(this).data(Ge,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Xe}}]),r}(),Qe(document).on(Ze.CLICK_DATA_API,on.DATA_TOGGLE,function(t){var e,n=this,i=gt.getSelectorFromElement(this);i&&(e=Qe(i)[0]);var r=Qe(e).data(Ge)?"toggle":c({},Qe(e).data(),Qe(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=Qe(e).one(Ze.SHOW,function(t){t.isDefaultPrevented()||o.one(Ze.HIDDEN,function(){Qe(n).is(":visible")&&n.focus()})});sn._jQueryInterface.call(Qe(e),r,this)}),Qe.fn[Ye]=sn._jQueryInterface,Qe.fn[Ye].Constructor=sn,Qe.fn[Ye].noConflict=function(){return Qe.fn[Ye]=ze,sn._jQueryInterface},sn),wi=(ln="tooltip",fn="."+(cn="bs.tooltip"),hn=(an=e).fn[ln],un="bs-tooltip",dn=new RegExp("(^|\\s)"+un+"\\S+","g"),mn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(gn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(pn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},vn="out",En={HIDE:"hide"+fn,HIDDEN:"hidden"+fn,SHOW:(_n="show")+fn,SHOWN:"shown"+fn,INSERTED:"inserted"+fn,CLICK:"click"+fn,FOCUSIN:"focusin"+fn,FOCUSOUT:"focusout"+fn,MOUSEENTER:"mouseenter"+fn,MOUSELEAVE:"mouseleave"+fn},yn="fade",bn="show",Tn=".tooltip-inner",Cn=".arrow",wn="hover",In="focus",Dn="click",An="manual",Sn=function(){function i(t,e){if("undefined"==typeof ge)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=an(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(an(this.getTipElement()).hasClass(bn))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),an.removeData(this.element,this.constructor.DATA_KEY),an(this.element).off(this.constructor.EVENT_KEY),an(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&an(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===an(this.element).css("display"))throw new Error("Please use show on visible elements");var t=an.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){an(this.element).trigger(t);var n=an.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=gt.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&an(i).addClass(yn);var o="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,s=this._getAttachment(o);this.addAttachmentClass(s);var a=!1===this.config.container?document.body:an(this.config.container);an(i).data(this.constructor.DATA_KEY,this),an.contains(this.element.ownerDocument.documentElement,this.tip)||an(i).appendTo(a),an(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new ge(this.element,i,{placement:s,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Cn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),an(i).addClass(bn),"ontouchstart"in document.documentElement&&an(document.body).children().on("mouseover",null,an.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,an(e.element).trigger(e.constructor.Event.SHOWN),t===vn&&e._leave(null,e)};if(an(this.tip).hasClass(yn)){var c=gt.getTransitionDurationFromElement(this.tip);an(this.tip).one(gt.TRANSITION_END,l).emulateTransitionEnd(c)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=an.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==_n&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),an(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(an(this.element).trigger(i),!i.isDefaultPrevented()){if(an(n).removeClass(bn),"ontouchstart"in document.documentElement&&an(document.body).children().off("mouseover",null,an.noop),this._activeTrigger[Dn]=!1,this._activeTrigger[In]=!1,this._activeTrigger[wn]=!1,an(this.tip).hasClass(yn)){var o=gt.getTransitionDurationFromElement(n);an(n).one(gt.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){an(this.getTipElement()).addClass(un+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||an(this.config.template)[0],this.tip},t.setContent=function(){var t=an(this.getTipElement());this.setElementContent(t.find(Tn),this.getTitle()),t.removeClass(yn+" "+bn)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?an(e).parent().is(t)||t.empty().append(e):t.text(an(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return gn[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)an(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==An){var e=t===wn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===wn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;an(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}an(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=c({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||an(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?In:wn]=!0),an(e.getTipElement()).hasClass(bn)||e._hoverState===_n?e._hoverState=_n:(clearTimeout(e._timeout),e._hoverState=_n,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===_n&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||an(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),an(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?In:wn]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=vn,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===vn&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=c({},this.constructor.Default,an(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),gt.typeCheckConfig(ln,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=an(this.getTipElement()),e=t.attr("class").match(dn);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(an(t).removeClass(yn),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=an(this).data(cn),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),an(this).data(cn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return mn}},{key:"NAME",get:function(){return ln}},{key:"DATA_KEY",get:function(){return cn}},{key:"Event",get:function(){return En}},{key:"EVENT_KEY",get:function(){return fn}},{key:"DefaultType",get:function(){return pn}}]),i}(),an.fn[ln]=Sn._jQueryInterface,an.fn[ln].Constructor=Sn,an.fn[ln].noConflict=function(){return an.fn[ln]=hn,Sn._jQueryInterface},Sn),Ii=(Nn="popover",Ln="."+(kn="bs.popover"),Pn=(On=e).fn[Nn],xn="bs-popover",jn=new RegExp("(^|\\s)"+xn+"\\S+","g"),Mn=c({},wi.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Rn=c({},wi.DefaultType,{content:"(string|element|function)"}),Hn="fade",Fn=".popover-header",Un=".popover-body",Bn={HIDE:"hide"+Ln,HIDDEN:"hidden"+Ln,SHOW:(Wn="show")+Ln,SHOWN:"shown"+Ln,INSERTED:"inserted"+Ln,CLICK:"click"+Ln,FOCUSIN:"focusin"+Ln,FOCUSOUT:"focusout"+Ln,MOUSEENTER:"mouseenter"+Ln,MOUSELEAVE:"mouseleave"+Ln},Kn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){On(this.getTipElement()).addClass(xn+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||On(this.config.template)[0],this.tip},r.setContent=function(){var t=On(this.getTipElement());this.setElementContent(t.find(Fn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Un),e),t.removeClass(Hn+" "+Wn)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=On(this.getTipElement()),e=t.attr("class").match(jn);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=On(this).data(kn),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),On(this).data(kn,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Mn}},{key:"NAME",get:function(){return Nn}},{key:"DATA_KEY",get:function(){return kn}},{key:"Event",get:function(){return Bn}},{key:"EVENT_KEY",get:function(){return Ln}},{key:"DefaultType",get:function(){return Rn}}]),i}(wi),On.fn[Nn]=Kn._jQueryInterface,On.fn[Nn].Constructor=Kn,On.fn[Nn].noConflict=function(){return On.fn[Nn]=Pn,Kn._jQueryInterface},Kn),Di=(Qn="scrollspy",Gn="."+(Yn="bs.scrollspy"),qn=(Vn=e).fn[Qn],zn={offset:10,method:"auto",target:""},Xn={offset:"number",method:"string",target:"(string|element)"},Jn={ACTIVATE:"activate"+Gn,SCROLL:"scroll"+Gn,LOAD_DATA_API:"load"+Gn+".data-api"},Zn="dropdown-item",$n="active",ti={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},ei="offset",ni="position",ii=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+ti.NAV_LINKS+","+this._config.target+" "+ti.LIST_ITEMS+","+this._config.target+" "+ti.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Vn(this._scrollElement).on(Jn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?ei:ni,r="auto"===this._config.method?t:this._config.method,o=r===ni?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Vn.makeArray(Vn(this._selector)).map(function(t){var e,n=gt.getSelectorFromElement(t);if(n&&(e=Vn(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Vn(e)[r]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Vn.removeData(this._element,Yn),Vn(this._scrollElement).off(Gn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=c({},zn,"object"==typeof t&&t?t:{})).target){var e=Vn(t.target).attr("id");e||(e=gt.getUID(Qn),Vn(t.target).attr("id",e)),t.target="#"+e}return gt.typeCheckConfig(Qn,t,Xn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Vn(t.join(","));n.hasClass(Zn)?(n.closest(ti.DROPDOWN).find(ti.DROPDOWN_TOGGLE).addClass($n),n.addClass($n)):(n.addClass($n),n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_LINKS+", "+ti.LIST_ITEMS).addClass($n),n.parents(ti.NAV_LIST_GROUP).prev(ti.NAV_ITEMS).children(ti.NAV_LINKS).addClass($n)),Vn(this._scrollElement).trigger(Jn.ACTIVATE,{relatedTarget:e})},t._clear=function(){Vn(this._selector).filter(ti.ACTIVE).removeClass($n)},n._jQueryInterface=function(e){return this.each(function(){var t=Vn(this).data(Yn);if(t||(t=new n(this,"object"==typeof e&&e),Vn(this).data(Yn,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return zn}}]),n}(),Vn(window).on(Jn.LOAD_DATA_API,function(){for(var t=Vn.makeArray(Vn(ti.DATA_SPY)),e=t.length;e--;){var n=Vn(t[e]);ii._jQueryInterface.call(n,n.data())}}),Vn.fn[Qn]=ii._jQueryInterface,Vn.fn[Qn].Constructor=ii,Vn.fn[Qn].noConflict=function(){return Vn.fn[Qn]=qn,ii._jQueryInterface},ii),Ai=(si="."+(oi="bs.tab"),ai=(ri=e).fn.tab,li={HIDE:"hide"+si,HIDDEN:"hidden"+si,SHOW:"show"+si,SHOWN:"shown"+si,CLICK_DATA_API:"click"+si+".data-api"},ci="dropdown-menu",fi="active",hi="disabled",ui="fade",di="show",pi=".dropdown",gi=".nav, .list-group",mi=".active",_i="> li > .active",vi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ei=".dropdown-toggle",yi="> .dropdown-menu .active",bi=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&ri(this._element).hasClass(fi)||ri(this._element).hasClass(hi))){var t,i,e=ri(this._element).closest(gi)[0],r=gt.getSelectorFromElement(this._element);if(e){var o="UL"===e.nodeName?_i:mi;i=(i=ri.makeArray(ri(e).find(o)))[i.length-1]}var s=ri.Event(li.HIDE,{relatedTarget:this._element}),a=ri.Event(li.SHOW,{relatedTarget:i});if(i&&ri(i).trigger(s),ri(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(t=ri(r)[0]),this._activate(this._element,e);var l=function(){var t=ri.Event(li.HIDDEN,{relatedTarget:n._element}),e=ri.Event(li.SHOWN,{relatedTarget:i});ri(i).trigger(t),ri(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){ri.removeData(this._element,oi),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?ri(e).find(_i):ri(e).children(mi))[0],o=n&&r&&ri(r).hasClass(ui),s=function(){return i._transitionComplete(t,r,n)};if(r&&o){var a=gt.getTransitionDurationFromElement(r);ri(r).one(gt.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){ri(e).removeClass(di+" "+fi);var i=ri(e.parentNode).find(yi)[0];i&&ri(i).removeClass(fi),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(ri(t).addClass(fi),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),gt.reflow(t),ri(t).addClass(di),t.parentNode&&ri(t.parentNode).hasClass(ci)){var r=ri(t).closest(pi)[0];r&&ri(r).find(Ei).addClass(fi),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=ri(this),e=t.data(oi);if(e||(e=new i(this),t.data(oi,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),ri(document).on(li.CLICK_DATA_API,vi,function(t){t.preventDefault(),bi._jQueryInterface.call(ri(this),"show")}),ri.fn.tab=bi._jQueryInterface,ri.fn.tab.Constructor=bi,ri.fn.tab.noConflict=function(){return ri.fn.tab=ai,bi._jQueryInterface},bi);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=gt,t.Alert=mt,t.Button=_t,t.Carousel=vt,t.Collapse=Et,t.Dropdown=Ti,t.Modal=Ci,t.Popover=Ii,t.Scrollspy=Di,t.Tab=Ai,t.Tooltip=wi,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
// ┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.2.0 - JavaScript Vector Library                                                             │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2016 Dmitry Baranovskiy (http://raphaeljs.com)                                       │ \\
// │ Copyright © 2008-2016 Sencha Labs (http://sencha.com)                                                 │ \\
// ├───────────────────────────────────────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (https://github.com/DmitryBaranovskiy/raphael/blob/master/license.txt) license.│ \\
// └───────────────────────────────────────────────────────────────────────────────────────────────────────┘ \\

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Raphael"] = factory();
	else
		root["Raphael"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1), __webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(R) {

	    return R;

	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(eve) {

	    /*\
	     * Raphael
	     [ method ]
	     **
	     * Creates a canvas object on which to draw.
	     * You must do this first, as all future calls to drawing methods
	     * from this instance will be bound to this canvas.
	     > Parameters
	     **
	     - container (HTMLElement|string) DOM element or its ID which is going to be a parent for drawing surface
	     - width (number)
	     - height (number)
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - x (number)
	     - y (number)
	     - width (number)
	     - height (number)
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - all (array) (first 3 or 4 elements in the array are equal to [containerID, width, height] or [x, y, width, height]. The rest are element descriptions in format {type: type, <attributes>}). See @Paper.add.
	     - callback (function) #optional callback function which is going to be executed in the context of newly created paper
	     * or
	     - onReadyCallback (function) function that is going to be called on DOM ready event. You can also subscribe to this event via Eve’s “DOMLoad” event. In this case method returns `undefined`.
	     = (object) @Paper
	     > Usage
	     | // Each of the following examples create a canvas
	     | // that is 320px wide by 200px high.
	     | // Canvas is created at the viewport’s 10,50 coordinate.
	     | var paper = Raphael(10, 50, 320, 200);
	     | // Canvas is created at the top left corner of the #notepad element
	     | // (or its top right corner in dir="rtl" elements)
	     | var paper = Raphael(document.getElementById("notepad"), 320, 200);
	     | // Same as above
	     | var paper = Raphael("notepad", 320, 200);
	     | // Image dump
	     | var set = Raphael(["notepad", 320, 200, {
	     |     type: "rect",
	     |     x: 10,
	     |     y: 10,
	     |     width: 25,
	     |     height: 25,
	     |     stroke: "#f00"
	     | }, {
	     |     type: "text",
	     |     x: 30,
	     |     y: 40,
	     |     text: "Dump"
	     | }]);
	    \*/
	    function R(first) {
	        if (R.is(first, "function")) {
	            return loaded ? first() : eve.on("raphael.DOMload", first);
	        } else if (R.is(first, array)) {
	            return R._engine.create[apply](R, first.splice(0, 3 + R.is(first[0], nu))).add(first);
	        } else {
	            var args = Array.prototype.slice.call(arguments, 0);
	            if (R.is(args[args.length - 1], "function")) {
	                var f = args.pop();
	                return loaded ? f.call(R._engine.create[apply](R, args)) : eve.on("raphael.DOMload", function () {
	                    f.call(R._engine.create[apply](R, args));
	                });
	            } else {
	                return R._engine.create[apply](R, arguments);
	            }
	        }
	    }
	    R.version = "2.2.0";
	    R.eve = eve;
	    var loaded,
	        separator = /[, ]+/,
	        elements = {circle: 1, rect: 1, path: 1, ellipse: 1, text: 1, image: 1},
	        formatrg = /\{(\d+)\}/g,
	        proto = "prototype",
	        has = "hasOwnProperty",
	        g = {
	            doc: document,
	            win: window
	        },
	        oldRaphael = {
	            was: Object.prototype[has].call(g.win, "Raphael"),
	            is: g.win.Raphael
	        },
	        Paper = function () {
	            /*\
	             * Paper.ca
	             [ property (object) ]
	             **
	             * Shortcut for @Paper.customAttributes
	            \*/
	            /*\
	             * Paper.customAttributes
	             [ property (object) ]
	             **
	             * If you have a set of attributes that you would like to represent
	             * as a function of some number you can do it easily with custom attributes:
	             > Usage
	             | paper.customAttributes.hue = function (num) {
	             |     num = num % 1;
	             |     return {fill: "hsb(" + num + ", 0.75, 1)"};
	             | };
	             | // Custom attribute “hue” will change fill
	             | // to be given hue with fixed saturation and brightness.
	             | // Now you can use it like this:
	             | var c = paper.circle(10, 10, 10).attr({hue: .45});
	             | // or even like this:
	             | c.animate({hue: 1}, 1e3);
	             |
	             | // You could also create custom attribute
	             | // with multiple parameters:
	             | paper.customAttributes.hsb = function (h, s, b) {
	             |     return {fill: "hsb(" + [h, s, b].join(",") + ")"};
	             | };
	             | c.attr({hsb: "0.5 .8 1"});
	             | c.animate({hsb: [1, 0, 0.5]}, 1e3);
	            \*/
	            this.ca = this.customAttributes = {};
	        },
	        paperproto,
	        appendChild = "appendChild",
	        apply = "apply",
	        concat = "concat",
	        supportsTouch = ('ontouchstart' in g.win) || g.win.DocumentTouch && g.doc instanceof DocumentTouch, //taken from Modernizr touch test
	        E = "",
	        S = " ",
	        Str = String,
	        split = "split",
	        events = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[split](S),
	        touchMap = {
	            mousedown: "touchstart",
	            mousemove: "touchmove",
	            mouseup: "touchend"
	        },
	        lowerCase = Str.prototype.toLowerCase,
	        math = Math,
	        mmax = math.max,
	        mmin = math.min,
	        abs = math.abs,
	        pow = math.pow,
	        PI = math.PI,
	        nu = "number",
	        string = "string",
	        array = "array",
	        toString = "toString",
	        fillString = "fill",
	        objectToString = Object.prototype.toString,
	        paper = {},
	        push = "push",
	        ISURL = R._ISURL = /^url\(['"]?(.+?)['"]?\)$/i,
	        colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
	        isnan = {"NaN": 1, "Infinity": 1, "-Infinity": 1},
	        bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
	        round = math.round,
	        setAttribute = "setAttribute",
	        toFloat = parseFloat,
	        toInt = parseInt,
	        upperCase = Str.prototype.toUpperCase,
	        availableAttrs = R._availableAttrs = {
	            "arrow-end": "none",
	            "arrow-start": "none",
	            blur: 0,
	            "clip-rect": "0 0 1e9 1e9",
	            cursor: "default",
	            cx: 0,
	            cy: 0,
	            fill: "#fff",
	            "fill-opacity": 1,
	            font: '10px "Arial"',
	            "font-family": '"Arial"',
	            "font-size": "10",
	            "font-style": "normal",
	            "font-weight": 400,
	            gradient: 0,
	            height: 0,
	            href: "http://raphaeljs.com/",
	            "letter-spacing": 0,
	            opacity: 1,
	            path: "M0,0",
	            r: 0,
	            rx: 0,
	            ry: 0,
	            src: "",
	            stroke: "#000",
	            "stroke-dasharray": "",
	            "stroke-linecap": "butt",
	            "stroke-linejoin": "butt",
	            "stroke-miterlimit": 0,
	            "stroke-opacity": 1,
	            "stroke-width": 1,
	            target: "_blank",
	            "text-anchor": "middle",
	            title: "Raphael",
	            transform: "",
	            width: 0,
	            x: 0,
	            y: 0,
	            "class": ""
	        },
	        availableAnimAttrs = R._availableAnimAttrs = {
	            blur: nu,
	            "clip-rect": "csv",
	            cx: nu,
	            cy: nu,
	            fill: "colour",
	            "fill-opacity": nu,
	            "font-size": nu,
	            height: nu,
	            opacity: nu,
	            path: "path",
	            r: nu,
	            rx: nu,
	            ry: nu,
	            stroke: "colour",
	            "stroke-opacity": nu,
	            "stroke-width": nu,
	            transform: "transform",
	            width: nu,
	            x: nu,
	            y: nu
	        },
	        whitespace = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
	        commaSpaces = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
	        hsrg = {hs: 1, rg: 1},
	        p2s = /,?([achlmqrstvxz]),?/gi,
	        pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
	        tCommand = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
	        pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
	        radial_gradient = R._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
	        eldata = {},
	        sortByKey = function (a, b) {
	            return a.key - b.key;
	        },
	        sortByNumber = function (a, b) {
	            return toFloat(a) - toFloat(b);
	        },
	        fun = function () {},
	        pipe = function (x) {
	            return x;
	        },
	        rectPath = R._rectPath = function (x, y, w, h, r) {
	            if (r) {
	                return [["M", x + r, y], ["l", w - r * 2, 0], ["a", r, r, 0, 0, 1, r, r], ["l", 0, h - r * 2], ["a", r, r, 0, 0, 1, -r, r], ["l", r * 2 - w, 0], ["a", r, r, 0, 0, 1, -r, -r], ["l", 0, r * 2 - h], ["a", r, r, 0, 0, 1, r, -r], ["z"]];
	            }
	            return [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
	        },
	        ellipsePath = function (x, y, rx, ry) {
	            if (ry == null) {
	                ry = rx;
	            }
	            return [["M", x, y], ["m", 0, -ry], ["a", rx, ry, 0, 1, 1, 0, 2 * ry], ["a", rx, ry, 0, 1, 1, 0, -2 * ry], ["z"]];
	        },
	        getPath = R._getPath = {
	            path: function (el) {
	                return el.attr("path");
	            },
	            circle: function (el) {
	                var a = el.attrs;
	                return ellipsePath(a.cx, a.cy, a.r);
	            },
	            ellipse: function (el) {
	                var a = el.attrs;
	                return ellipsePath(a.cx, a.cy, a.rx, a.ry);
	            },
	            rect: function (el) {
	                var a = el.attrs;
	                return rectPath(a.x, a.y, a.width, a.height, a.r);
	            },
	            image: function (el) {
	                var a = el.attrs;
	                return rectPath(a.x, a.y, a.width, a.height);
	            },
	            text: function (el) {
	                var bbox = el._getBBox();
	                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	            },
	            set : function(el) {
	                var bbox = el._getBBox();
	                return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
	            }
	        },
	        /*\
	         * Raphael.mapPath
	         [ method ]
	         **
	         * Transform the path string with given matrix.
	         > Parameters
	         - path (string) path string
	         - matrix (object) see @Matrix
	         = (string) transformed path string
	        \*/
	        mapPath = R.mapPath = function (path, matrix) {
	            if (!matrix) {
	                return path;
	            }
	            var x, y, i, j, ii, jj, pathi;
	            path = path2curve(path);
	            for (i = 0, ii = path.length; i < ii; i++) {
	                pathi = path[i];
	                for (j = 1, jj = pathi.length; j < jj; j += 2) {
	                    x = matrix.x(pathi[j], pathi[j + 1]);
	                    y = matrix.y(pathi[j], pathi[j + 1]);
	                    pathi[j] = x;
	                    pathi[j + 1] = y;
	                }
	            }
	            return path;
	        };

	    R._g = g;
	    /*\
	     * Raphael.type
	     [ property (string) ]
	     **
	     * Can be “SVG”, “VML” or empty, depending on browser support.
	    \*/
	    R.type = (g.win.SVGAngle || g.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML");
	    if (R.type == "VML") {
	        var d = g.doc.createElement("div"),
	            b;
	        d.innerHTML = '<v:shape adj="1"/>';
	        b = d.firstChild;
	        b.style.behavior = "url(#default#VML)";
	        if (!(b && typeof b.adj == "object")) {
	            return (R.type = E);
	        }
	        d = null;
	    }
	    /*\
	     * Raphael.svg
	     [ property (boolean) ]
	     **
	     * `true` if browser supports SVG.
	    \*/
	    /*\
	     * Raphael.vml
	     [ property (boolean) ]
	     **
	     * `true` if browser supports VML.
	    \*/
	    R.svg = !(R.vml = R.type == "VML");
	    R._Paper = Paper;
	    /*\
	     * Raphael.fn
	     [ property (object) ]
	     **
	     * You can add your own method to the canvas. For example if you want to draw a pie chart,
	     * you can create your own pie chart function and ship it as a Raphaël plugin. To do this
	     * you need to extend the `Raphael.fn` object. You should modify the `fn` object before a
	     * Raphaël instance is created, otherwise it will take no effect. Please note that the
	     * ability for namespaced plugins was removed in Raphael 2.0. It is up to the plugin to
	     * ensure any namespacing ensures proper context.
	     > Usage
	     | Raphael.fn.arrow = function (x1, y1, x2, y2, size) {
	     |     return this.path( ... );
	     | };
	     | // or create namespace
	     | Raphael.fn.mystuff = {
	     |     arrow: function () {…},
	     |     star: function () {…},
	     |     // etc…
	     | };
	     | var paper = Raphael(10, 10, 630, 480);
	     | // then use it
	     | paper.arrow(10, 10, 30, 30, 5).attr({fill: "#f00"});
	     | paper.mystuff.arrow();
	     | paper.mystuff.star();
	    \*/
	    R.fn = paperproto = Paper.prototype = R.prototype;
	    R._id = 0;
	    /*\
	     * Raphael.is
	     [ method ]
	     **
	     * Handful of replacements for `typeof` operator.
	     > Parameters
	     - o (…) any object or primitive
	     - type (string) name of the type, i.e. “string”, “function”, “number”, etc.
	     = (boolean) is given value is of given type
	    \*/
	    R.is = function (o, type) {
	        type = lowerCase.call(type);
	        if (type == "finite") {
	            return !isnan[has](+o);
	        }
	        if (type == "array") {
	            return o instanceof Array;
	        }
	        return  (type == "null" && o === null) ||
	                (type == typeof o && o !== null) ||
	                (type == "object" && o === Object(o)) ||
	                (type == "array" && Array.isArray && Array.isArray(o)) ||
	                objectToString.call(o).slice(8, -1).toLowerCase() == type;
	    };

	    function clone(obj) {
	        if (typeof obj == "function" || Object(obj) !== obj) {
	            return obj;
	        }
	        var res = new obj.constructor;
	        for (var key in obj) if (obj[has](key)) {
	            res[key] = clone(obj[key]);
	        }
	        return res;
	    }

	    /*\
	     * Raphael.angle
	     [ method ]
	     **
	     * Returns angle between two or three points
	     > Parameters
	     - x1 (number) x coord of first point
	     - y1 (number) y coord of first point
	     - x2 (number) x coord of second point
	     - y2 (number) y coord of second point
	     - x3 (number) #optional x coord of third point
	     - y3 (number) #optional y coord of third point
	     = (number) angle in degrees.
	    \*/
	    R.angle = function (x1, y1, x2, y2, x3, y3) {
	        if (x3 == null) {
	            var x = x1 - x2,
	                y = y1 - y2;
	            if (!x && !y) {
	                return 0;
	            }
	            return (180 + math.atan2(-y, -x) * 180 / PI + 360) % 360;
	        } else {
	            return R.angle(x1, y1, x3, y3) - R.angle(x2, y2, x3, y3);
	        }
	    };
	    /*\
	     * Raphael.rad
	     [ method ]
	     **
	     * Transform angle to radians
	     > Parameters
	     - deg (number) angle in degrees
	     = (number) angle in radians.
	    \*/
	    R.rad = function (deg) {
	        return deg % 360 * PI / 180;
	    };
	    /*\
	     * Raphael.deg
	     [ method ]
	     **
	     * Transform angle to degrees
	     > Parameters
	     - rad (number) angle in radians
	     = (number) angle in degrees.
	    \*/
	    R.deg = function (rad) {
	        return Math.round ((rad * 180 / PI% 360)* 1000) / 1000;
	    };
	    /*\
	     * Raphael.snapTo
	     [ method ]
	     **
	     * Snaps given value to given grid.
	     > Parameters
	     - values (array|number) given array of values or step of the grid
	     - value (number) value to adjust
	     - tolerance (number) #optional tolerance for snapping. Default is `10`.
	     = (number) adjusted value.
	    \*/
	    R.snapTo = function (values, value, tolerance) {
	        tolerance = R.is(tolerance, "finite") ? tolerance : 10;
	        if (R.is(values, array)) {
	            var i = values.length;
	            while (i--) if (abs(values[i] - value) <= tolerance) {
	                return values[i];
	            }
	        } else {
	            values = +values;
	            var rem = value % values;
	            if (rem < tolerance) {
	                return value - rem;
	            }
	            if (rem > values - tolerance) {
	                return value - rem + values;
	            }
	        }
	        return value;
	    };

	    /*\
	     * Raphael.createUUID
	     [ method ]
	     **
	     * Returns RFC4122, version 4 ID
	    \*/
	    var createUUID = R.createUUID = (function (uuidRegEx, uuidReplacer) {
	        return function () {
	            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
	        };
	    })(/[xy]/g, function (c) {
	        var r = math.random() * 16 | 0,
	            v = c == "x" ? r : (r & 3 | 8);
	        return v.toString(16);
	    });

	    /*\
	     * Raphael.setWindow
	     [ method ]
	     **
	     * Used when you need to draw in `&lt;iframe>`. Switched window to the iframe one.
	     > Parameters
	     - newwin (window) new window object
	    \*/
	    R.setWindow = function (newwin) {
	        eve("raphael.setWindow", R, g.win, newwin);
	        g.win = newwin;
	        g.doc = g.win.document;
	        if (R._engine.initWin) {
	            R._engine.initWin(g.win);
	        }
	    };
	    var toHex = function (color) {
	        if (R.vml) {
	            // http://dean.edwards.name/weblog/2009/10/convert-any-colour-value-to-hex-in-msie/
	            var trim = /^\s+|\s+$/g;
	            var bod;
	            try {
	                var docum = new ActiveXObject("htmlfile");
	                docum.write("<body>");
	                docum.close();
	                bod = docum.body;
	            } catch(e) {
	                bod = createPopup().document.body;
	            }
	            var range = bod.createTextRange();
	            toHex = cacher(function (color) {
	                try {
	                    bod.style.color = Str(color).replace(trim, E);
	                    var value = range.queryCommandValue("ForeColor");
	                    value = ((value & 255) << 16) | (value & 65280) | ((value & 16711680) >>> 16);
	                    return "#" + ("000000" + value.toString(16)).slice(-6);
	                } catch(e) {
	                    return "none";
	                }
	            });
	        } else {
	            var i = g.doc.createElement("i");
	            i.title = "Rapha\xebl Colour Picker";
	            i.style.display = "none";
	            g.doc.body.appendChild(i);
	            toHex = cacher(function (color) {
	                i.style.color = color;
	                return g.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
	            });
	        }
	        return toHex(color);
	    },
	    hsbtoString = function () {
	        return "hsb(" + [this.h, this.s, this.b] + ")";
	    },
	    hsltoString = function () {
	        return "hsl(" + [this.h, this.s, this.l] + ")";
	    },
	    rgbtoString = function () {
	        return this.hex;
	    },
	    prepareRGB = function (r, g, b) {
	        if (g == null && R.is(r, "object") && "r" in r && "g" in r && "b" in r) {
	            b = r.b;
	            g = r.g;
	            r = r.r;
	        }
	        if (g == null && R.is(r, string)) {
	            var clr = R.getRGB(r);
	            r = clr.r;
	            g = clr.g;
	            b = clr.b;
	        }
	        if (r > 1 || g > 1 || b > 1) {
	            r /= 255;
	            g /= 255;
	            b /= 255;
	        }

	        return [r, g, b];
	    },
	    packageRGB = function (r, g, b, o) {
	        r *= 255;
	        g *= 255;
	        b *= 255;
	        var rgb = {
	            r: r,
	            g: g,
	            b: b,
	            hex: R.rgb(r, g, b),
	            toString: rgbtoString
	        };
	        R.is(o, "finite") && (rgb.opacity = o);
	        return rgb;
	    };

	    /*\
	     * Raphael.color
	     [ method ]
	     **
	     * Parses the color string and returns object with all values for the given color.
	     > Parameters
	     - clr (string) color string in one of the supported formats (see @Raphael.getRGB)
	     = (object) Combined RGB & HSB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••,
	     o     error (boolean) `true` if string can’t be parsed,
	     o     h (number) hue,
	     o     s (number) saturation,
	     o     v (number) value (brightness),
	     o     l (number) lightness
	     o }
	    \*/
	    R.color = function (clr) {
	        var rgb;
	        if (R.is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
	            rgb = R.hsb2rgb(clr);
	            clr.r = rgb.r;
	            clr.g = rgb.g;
	            clr.b = rgb.b;
	            clr.hex = rgb.hex;
	        } else if (R.is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
	            rgb = R.hsl2rgb(clr);
	            clr.r = rgb.r;
	            clr.g = rgb.g;
	            clr.b = rgb.b;
	            clr.hex = rgb.hex;
	        } else {
	            if (R.is(clr, "string")) {
	                clr = R.getRGB(clr);
	            }
	            if (R.is(clr, "object") && "r" in clr && "g" in clr && "b" in clr) {
	                rgb = R.rgb2hsl(clr);
	                clr.h = rgb.h;
	                clr.s = rgb.s;
	                clr.l = rgb.l;
	                rgb = R.rgb2hsb(clr);
	                clr.v = rgb.b;
	            } else {
	                clr = {hex: "none"};
	                clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
	            }
	        }
	        clr.toString = rgbtoString;
	        return clr;
	    };
	    /*\
	     * Raphael.hsb2rgb
	     [ method ]
	     **
	     * Converts HSB values to RGB object.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - v (number) value or brightness
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••
	     o }
	    \*/
	    R.hsb2rgb = function (h, s, v, o) {
	        if (this.is(h, "object") && "h" in h && "s" in h && "b" in h) {
	            v = h.b;
	            s = h.s;
	            o = h.o;
	            h = h.h;
	        }
	        h *= 360;
	        var R, G, B, X, C;
	        h = (h % 360) / 60;
	        C = v * s;
	        X = C * (1 - abs(h % 2 - 1));
	        R = G = B = v - C;

	        h = ~~h;
	        R += [C, X, 0, 0, X, C][h];
	        G += [X, C, C, X, 0, 0][h];
	        B += [0, 0, X, C, C, X][h];
	        return packageRGB(R, G, B, o);
	    };
	    /*\
	     * Raphael.hsl2rgb
	     [ method ]
	     **
	     * Converts HSL values to RGB object.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - l (number) luminosity
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue,
	     o     hex (string) color in HTML/CSS format: #••••••
	     o }
	    \*/
	    R.hsl2rgb = function (h, s, l, o) {
	        if (this.is(h, "object") && "h" in h && "s" in h && "l" in h) {
	            l = h.l;
	            s = h.s;
	            h = h.h;
	        }
	        if (h > 1 || s > 1 || l > 1) {
	            h /= 360;
	            s /= 100;
	            l /= 100;
	        }
	        h *= 360;
	        var R, G, B, X, C;
	        h = (h % 360) / 60;
	        C = 2 * s * (l < .5 ? l : 1 - l);
	        X = C * (1 - abs(h % 2 - 1));
	        R = G = B = l - C / 2;

	        h = ~~h;
	        R += [C, X, 0, 0, X, C][h];
	        G += [X, C, C, X, 0, 0][h];
	        B += [0, 0, X, C, C, X][h];
	        return packageRGB(R, G, B, o);
	    };
	    /*\
	     * Raphael.rgb2hsb
	     [ method ]
	     **
	     * Converts RGB values to HSB object.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (object) HSB object in format:
	     o {
	     o     h (number) hue
	     o     s (number) saturation
	     o     b (number) brightness
	     o }
	    \*/
	    R.rgb2hsb = function (r, g, b) {
	        b = prepareRGB(r, g, b);
	        r = b[0];
	        g = b[1];
	        b = b[2];

	        var H, S, V, C;
	        V = mmax(r, g, b);
	        C = V - mmin(r, g, b);
	        H = (C == 0 ? null :
	             V == r ? (g - b) / C :
	             V == g ? (b - r) / C + 2 :
	                      (r - g) / C + 4
	            );
	        H = ((H + 360) % 6) * 60 / 360;
	        S = C == 0 ? 0 : C / V;
	        return {h: H, s: S, b: V, toString: hsbtoString};
	    };
	    /*\
	     * Raphael.rgb2hsl
	     [ method ]
	     **
	     * Converts RGB values to HSL object.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (object) HSL object in format:
	     o {
	     o     h (number) hue
	     o     s (number) saturation
	     o     l (number) luminosity
	     o }
	    \*/
	    R.rgb2hsl = function (r, g, b) {
	        b = prepareRGB(r, g, b);
	        r = b[0];
	        g = b[1];
	        b = b[2];

	        var H, S, L, M, m, C;
	        M = mmax(r, g, b);
	        m = mmin(r, g, b);
	        C = M - m;
	        H = (C == 0 ? null :
	             M == r ? (g - b) / C :
	             M == g ? (b - r) / C + 2 :
	                      (r - g) / C + 4);
	        H = ((H + 360) % 6) * 60 / 360;
	        L = (M + m) / 2;
	        S = (C == 0 ? 0 :
	             L < .5 ? C / (2 * L) :
	                      C / (2 - 2 * L));
	        return {h: H, s: S, l: L, toString: hsltoString};
	    };
	    R._path2string = function () {
	        return this.join(",").replace(p2s, "$1");
	    };
	    function repush(array, item) {
	        for (var i = 0, ii = array.length; i < ii; i++) if (array[i] === item) {
	            return array.push(array.splice(i, 1)[0]);
	        }
	    }
	    function cacher(f, scope, postprocessor) {
	        function newf() {
	            var arg = Array.prototype.slice.call(arguments, 0),
	                args = arg.join("\u2400"),
	                cache = newf.cache = newf.cache || {},
	                count = newf.count = newf.count || [];
	            if (cache[has](args)) {
	                repush(count, args);
	                return postprocessor ? postprocessor(cache[args]) : cache[args];
	            }
	            count.length >= 1e3 && delete cache[count.shift()];
	            count.push(args);
	            cache[args] = f[apply](scope, arg);
	            return postprocessor ? postprocessor(cache[args]) : cache[args];
	        }
	        return newf;
	    }

	    var preload = R._preload = function (src, f) {
	        var img = g.doc.createElement("img");
	        img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
	        img.onload = function () {
	            f.call(this);
	            this.onload = null;
	            g.doc.body.removeChild(this);
	        };
	        img.onerror = function () {
	            g.doc.body.removeChild(this);
	        };
	        g.doc.body.appendChild(img);
	        img.src = src;
	    };

	    function clrToString() {
	        return this.hex;
	    }

	    /*\
	     * Raphael.getRGB
	     [ method ]
	     **
	     * Parses colour string as RGB object
	     > Parameters
	     - colour (string) colour string in one of formats:
	     # <ul>
	     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
	     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
	     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
	     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
	     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
	     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
	     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsl(•••, •••, •••) — same as hsb</li>
	     #     <li>hsl(•••%, •••%, •••%) — same as hsb</li>
	     # </ul>
	     = (object) RGB object in format:
	     o {
	     o     r (number) red,
	     o     g (number) green,
	     o     b (number) blue
	     o     hex (string) color in HTML/CSS format: #••••••,
	     o     error (boolean) true if string can’t be parsed
	     o }
	    \*/
	    R.getRGB = cacher(function (colour) {
	        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
	            return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
	        }
	        if (colour == "none") {
	            return {r: -1, g: -1, b: -1, hex: "none", toString: clrToString};
	        }
	        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
	        var res,
	            red,
	            green,
	            blue,
	            opacity,
	            t,
	            values,
	            rgb = colour.match(colourRegExp);
	        if (rgb) {
	            if (rgb[2]) {
	                blue = toInt(rgb[2].substring(5), 16);
	                green = toInt(rgb[2].substring(3, 5), 16);
	                red = toInt(rgb[2].substring(1, 3), 16);
	            }
	            if (rgb[3]) {
	                blue = toInt((t = rgb[3].charAt(3)) + t, 16);
	                green = toInt((t = rgb[3].charAt(2)) + t, 16);
	                red = toInt((t = rgb[3].charAt(1)) + t, 16);
	            }
	            if (rgb[4]) {
	                values = rgb[4][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	            }
	            if (rgb[5]) {
	                values = rgb[5][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsb2rgb(red, green, blue, opacity);
	            }
	            if (rgb[6]) {
	                values = rgb[6][split](commaSpaces);
	                red = toFloat(values[0]);
	                values[0].slice(-1) == "%" && (red *= 2.55);
	                green = toFloat(values[1]);
	                values[1].slice(-1) == "%" && (green *= 2.55);
	                blue = toFloat(values[2]);
	                values[2].slice(-1) == "%" && (blue *= 2.55);
	                (values[0].slice(-3) == "deg" || values[0].slice(-1) == "\xb0") && (red /= 360);
	                rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
	                values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
	                return R.hsl2rgb(red, green, blue, opacity);
	            }
	            rgb = {r: red, g: green, b: blue, toString: clrToString};
	            rgb.hex = "#" + (16777216 | blue | (green << 8) | (red << 16)).toString(16).slice(1);
	            R.is(opacity, "finite") && (rgb.opacity = opacity);
	            return rgb;
	        }
	        return {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: clrToString};
	    }, R);
	    /*\
	     * Raphael.hsb
	     [ method ]
	     **
	     * Converts HSB values to hex representation of the colour.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - b (number) value or brightness
	     = (string) hex representation of the colour.
	    \*/
	    R.hsb = cacher(function (h, s, b) {
	        return R.hsb2rgb(h, s, b).hex;
	    });
	    /*\
	     * Raphael.hsl
	     [ method ]
	     **
	     * Converts HSL values to hex representation of the colour.
	     > Parameters
	     - h (number) hue
	     - s (number) saturation
	     - l (number) luminosity
	     = (string) hex representation of the colour.
	    \*/
	    R.hsl = cacher(function (h, s, l) {
	        return R.hsl2rgb(h, s, l).hex;
	    });
	    /*\
	     * Raphael.rgb
	     [ method ]
	     **
	     * Converts RGB values to hex representation of the colour.
	     > Parameters
	     - r (number) red
	     - g (number) green
	     - b (number) blue
	     = (string) hex representation of the colour.
	    \*/
	    R.rgb = cacher(function (r, g, b) {
	        function round(x) { return (x + 0.5) | 0; }
	        return "#" + (16777216 | round(b) | (round(g) << 8) | (round(r) << 16)).toString(16).slice(1);
	    });
	    /*\
	     * Raphael.getColor
	     [ method ]
	     **
	     * On each call returns next colour in the spectrum. To reset it back to red call @Raphael.getColor.reset
	     > Parameters
	     - value (number) #optional brightness, default is `0.75`
	     = (string) hex representation of the colour.
	    \*/
	    R.getColor = function (value) {
	        var start = this.getColor.start = this.getColor.start || {h: 0, s: 1, b: value || .75},
	            rgb = this.hsb2rgb(start.h, start.s, start.b);
	        start.h += .075;
	        if (start.h > 1) {
	            start.h = 0;
	            start.s -= .2;
	            start.s <= 0 && (this.getColor.start = {h: 0, s: 1, b: start.b});
	        }
	        return rgb.hex;
	    };
	    /*\
	     * Raphael.getColor.reset
	     [ method ]
	     **
	     * Resets spectrum position for @Raphael.getColor back to red.
	    \*/
	    R.getColor.reset = function () {
	        delete this.start;
	    };

	    // http://schepers.cc/getting-to-the-point
	    function catmullRom2bezier(crp, z) {
	        var d = [];
	        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
	            var p = [
	                        {x: +crp[i - 2], y: +crp[i - 1]},
	                        {x: +crp[i],     y: +crp[i + 1]},
	                        {x: +crp[i + 2], y: +crp[i + 3]},
	                        {x: +crp[i + 4], y: +crp[i + 5]}
	                    ];
	            if (z) {
	                if (!i) {
	                    p[0] = {x: +crp[iLen - 2], y: +crp[iLen - 1]};
	                } else if (iLen - 4 == i) {
	                    p[3] = {x: +crp[0], y: +crp[1]};
	                } else if (iLen - 2 == i) {
	                    p[2] = {x: +crp[0], y: +crp[1]};
	                    p[3] = {x: +crp[2], y: +crp[3]};
	                }
	            } else {
	                if (iLen - 4 == i) {
	                    p[3] = p[2];
	                } else if (!i) {
	                    p[0] = {x: +crp[i], y: +crp[i + 1]};
	                }
	            }
	            d.push(["C",
	                  (-p[0].x + 6 * p[1].x + p[2].x) / 6,
	                  (-p[0].y + 6 * p[1].y + p[2].y) / 6,
	                  (p[1].x + 6 * p[2].x - p[3].x) / 6,
	                  (p[1].y + 6*p[2].y - p[3].y) / 6,
	                  p[2].x,
	                  p[2].y
	            ]);
	        }

	        return d;
	    }
	    /*\
	     * Raphael.parsePathString
	     [ method ]
	     **
	     * Utility method
	     **
	     * Parses given path string into an array of arrays of path segments.
	     > Parameters
	     - pathString (string|array) path string or array of segments (in the last case it will be returned straight away)
	     = (array) array of segments.
	    \*/
	    R.parsePathString = function (pathString) {
	        if (!pathString) {
	            return null;
	        }
	        var pth = paths(pathString);
	        if (pth.arr) {
	            return pathClone(pth.arr);
	        }

	        var paramCounts = {a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0},
	            data = [];
	        if (R.is(pathString, array) && R.is(pathString[0], array)) { // rough assumption
	            data = pathClone(pathString);
	        }
	        if (!data.length) {
	            Str(pathString).replace(pathCommand, function (a, b, c) {
	                var params = [],
	                    name = b.toLowerCase();
	                c.replace(pathValues, function (a, b) {
	                    b && params.push(+b);
	                });
	                if (name == "m" && params.length > 2) {
	                    data.push([b][concat](params.splice(0, 2)));
	                    name = "l";
	                    b = b == "m" ? "l" : "L";
	                }
	                if (name == "r") {
	                    data.push([b][concat](params));
	                } else while (params.length >= paramCounts[name]) {
	                    data.push([b][concat](params.splice(0, paramCounts[name])));
	                    if (!paramCounts[name]) {
	                        break;
	                    }
	                }
	            });
	        }
	        data.toString = R._path2string;
	        pth.arr = pathClone(data);
	        return data;
	    };
	    /*\
	     * Raphael.parseTransformString
	     [ method ]
	     **
	     * Utility method
	     **
	     * Parses given path string into an array of transformations.
	     > Parameters
	     - TString (string|array) transform string or array of transformations (in the last case it will be returned straight away)
	     = (array) array of transformations.
	    \*/
	    R.parseTransformString = cacher(function (TString) {
	        if (!TString) {
	            return null;
	        }
	        var paramCounts = {r: 3, s: 4, t: 2, m: 6},
	            data = [];
	        if (R.is(TString, array) && R.is(TString[0], array)) { // rough assumption
	            data = pathClone(TString);
	        }
	        if (!data.length) {
	            Str(TString).replace(tCommand, function (a, b, c) {
	                var params = [],
	                    name = lowerCase.call(b);
	                c.replace(pathValues, function (a, b) {
	                    b && params.push(+b);
	                });
	                data.push([b][concat](params));
	            });
	        }
	        data.toString = R._path2string;
	        return data;
	    });
	    // PATHS
	    var paths = function (ps) {
	        var p = paths.ps = paths.ps || {};
	        if (p[ps]) {
	            p[ps].sleep = 100;
	        } else {
	            p[ps] = {
	                sleep: 100
	            };
	        }
	        setTimeout(function () {
	            for (var key in p) if (p[has](key) && key != ps) {
	                p[key].sleep--;
	                !p[key].sleep && delete p[key];
	            }
	        });
	        return p[ps];
	    };
	    /*\
	     * Raphael.findDotsAtSegment
	     [ method ]
	     **
	     * Utility method
	     **
	     * Find dot coordinates on the given cubic bezier curve at the given t.
	     > Parameters
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     - t (number) position on the curve (0..1)
	     = (object) point information in format:
	     o {
	     o     x: (number) x coordinate of the point
	     o     y: (number) y coordinate of the point
	     o     m: {
	     o         x: (number) x coordinate of the left anchor
	     o         y: (number) y coordinate of the left anchor
	     o     }
	     o     n: {
	     o         x: (number) x coordinate of the right anchor
	     o         y: (number) y coordinate of the right anchor
	     o     }
	     o     start: {
	     o         x: (number) x coordinate of the start of the curve
	     o         y: (number) y coordinate of the start of the curve
	     o     }
	     o     end: {
	     o         x: (number) x coordinate of the end of the curve
	     o         y: (number) y coordinate of the end of the curve
	     o     }
	     o     alpha: (number) angle of the curve derivative at the point
	     o }
	    \*/
	    R.findDotsAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	        var t1 = 1 - t,
	            t13 = pow(t1, 3),
	            t12 = pow(t1, 2),
	            t2 = t * t,
	            t3 = t2 * t,
	            x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
	            y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
	            mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
	            my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
	            nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
	            ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
	            ax = t1 * p1x + t * c1x,
	            ay = t1 * p1y + t * c1y,
	            cx = t1 * c2x + t * p2x,
	            cy = t1 * c2y + t * p2y,
	            alpha = (90 - math.atan2(mx - nx, my - ny) * 180 / PI);
	        (mx > nx || my < ny) && (alpha += 180);
	        return {
	            x: x,
	            y: y,
	            m: {x: mx, y: my},
	            n: {x: nx, y: ny},
	            start: {x: ax, y: ay},
	            end: {x: cx, y: cy},
	            alpha: alpha
	        };
	    };
	    /*\
	     * Raphael.bezierBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Return bounding box of a given cubic bezier curve
	     > Parameters
	     - p1x (number) x of the first point of the curve
	     - p1y (number) y of the first point of the curve
	     - c1x (number) x of the first anchor of the curve
	     - c1y (number) y of the first anchor of the curve
	     - c2x (number) x of the second anchor of the curve
	     - c2y (number) y of the second anchor of the curve
	     - p2x (number) x of the second point of the curve
	     - p2y (number) y of the second point of the curve
	     * or
	     - bez (array) array of six points for bezier curve
	     = (object) point information in format:
	     o {
	     o     min: {
	     o         x: (number) x coordinate of the left point
	     o         y: (number) y coordinate of the top point
	     o     }
	     o     max: {
	     o         x: (number) x coordinate of the right point
	     o         y: (number) y coordinate of the bottom point
	     o     }
	     o }
	    \*/
	    R.bezierBBox = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	        if (!R.is(p1x, "array")) {
	            p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
	        }
	        var bbox = curveDim.apply(null, p1x);
	        return {
	            x: bbox.min.x,
	            y: bbox.min.y,
	            x2: bbox.max.x,
	            y2: bbox.max.y,
	            width: bbox.max.x - bbox.min.x,
	            height: bbox.max.y - bbox.min.y
	        };
	    };
	    /*\
	     * Raphael.isPointInsideBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside bounding boxes.
	     > Parameters
	     - bbox (string) bounding box
	     - x (string) x coordinate of the point
	     - y (string) y coordinate of the point
	     = (boolean) `true` if point inside
	    \*/
	    R.isPointInsideBBox = function (bbox, x, y) {
	        return x >= bbox.x && x <= bbox.x2 && y >= bbox.y && y <= bbox.y2;
	    };
	    /*\
	     * Raphael.isBBoxIntersect
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if two bounding boxes intersect
	     > Parameters
	     - bbox1 (string) first bounding box
	     - bbox2 (string) second bounding box
	     = (boolean) `true` if they intersect
	    \*/
	    R.isBBoxIntersect = function (bbox1, bbox2) {
	        var i = R.isPointInsideBBox;
	        return i(bbox2, bbox1.x, bbox1.y)
	            || i(bbox2, bbox1.x2, bbox1.y)
	            || i(bbox2, bbox1.x, bbox1.y2)
	            || i(bbox2, bbox1.x2, bbox1.y2)
	            || i(bbox1, bbox2.x, bbox2.y)
	            || i(bbox1, bbox2.x2, bbox2.y)
	            || i(bbox1, bbox2.x, bbox2.y2)
	            || i(bbox1, bbox2.x2, bbox2.y2)
	            || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)
	            && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
	    };
	    function base3(t, p1, p2, p3, p4) {
	        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
	            t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
	        return t * t2 - 3 * p1 + 3 * p2;
	    }
	    function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
	        if (z == null) {
	            z = 1;
	        }
	        z = z > 1 ? 1 : z < 0 ? 0 : z;
	        var z2 = z / 2,
	            n = 12,
	            Tvalues = [-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],
	            Cvalues = [0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],
	            sum = 0;
	        for (var i = 0; i < n; i++) {
	            var ct = z2 * Tvalues[i] + z2,
	                xbase = base3(ct, x1, x2, x3, x4),
	                ybase = base3(ct, y1, y2, y3, y4),
	                comb = xbase * xbase + ybase * ybase;
	            sum += Cvalues[i] * math.sqrt(comb);
	        }
	        return z2 * sum;
	    }
	    function getTatLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
	        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
	            return;
	        }
	        var t = 1,
	            step = t / 2,
	            t2 = t - step,
	            l,
	            e = .01;
	        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        while (abs(l - ll) > e) {
	            step /= 2;
	            t2 += (l < ll ? 1 : -1) * step;
	            l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
	        }
	        return t2;
	    }
	    function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
	        if (
	            mmax(x1, x2) < mmin(x3, x4) ||
	            mmin(x1, x2) > mmax(x3, x4) ||
	            mmax(y1, y2) < mmin(y3, y4) ||
	            mmin(y1, y2) > mmax(y3, y4)
	        ) {
	            return;
	        }
	        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
	            ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
	            denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

	        if (!denominator) {
	            return;
	        }
	        var px = nx / denominator,
	            py = ny / denominator,
	            px2 = +px.toFixed(2),
	            py2 = +py.toFixed(2);
	        if (
	            px2 < +mmin(x1, x2).toFixed(2) ||
	            px2 > +mmax(x1, x2).toFixed(2) ||
	            px2 < +mmin(x3, x4).toFixed(2) ||
	            px2 > +mmax(x3, x4).toFixed(2) ||
	            py2 < +mmin(y1, y2).toFixed(2) ||
	            py2 > +mmax(y1, y2).toFixed(2) ||
	            py2 < +mmin(y3, y4).toFixed(2) ||
	            py2 > +mmax(y3, y4).toFixed(2)
	        ) {
	            return;
	        }
	        return {x: px, y: py};
	    }
	    function inter(bez1, bez2) {
	        return interHelper(bez1, bez2);
	    }
	    function interCount(bez1, bez2) {
	        return interHelper(bez1, bez2, 1);
	    }
	    function interHelper(bez1, bez2, justCount) {
	        var bbox1 = R.bezierBBox(bez1),
	            bbox2 = R.bezierBBox(bez2);
	        if (!R.isBBoxIntersect(bbox1, bbox2)) {
	            return justCount ? 0 : [];
	        }
	        var l1 = bezlen.apply(0, bez1),
	            l2 = bezlen.apply(0, bez2),
	            n1 = mmax(~~(l1 / 5), 1),
	            n2 = mmax(~~(l2 / 5), 1),
	            dots1 = [],
	            dots2 = [],
	            xy = {},
	            res = justCount ? 0 : [];
	        for (var i = 0; i < n1 + 1; i++) {
	            var p = R.findDotsAtSegment.apply(R, bez1.concat(i / n1));
	            dots1.push({x: p.x, y: p.y, t: i / n1});
	        }
	        for (i = 0; i < n2 + 1; i++) {
	            p = R.findDotsAtSegment.apply(R, bez2.concat(i / n2));
	            dots2.push({x: p.x, y: p.y, t: i / n2});
	        }
	        for (i = 0; i < n1; i++) {
	            for (var j = 0; j < n2; j++) {
	                var di = dots1[i],
	                    di1 = dots1[i + 1],
	                    dj = dots2[j],
	                    dj1 = dots2[j + 1],
	                    ci = abs(di1.x - di.x) < .001 ? "y" : "x",
	                    cj = abs(dj1.x - dj.x) < .001 ? "y" : "x",
	                    is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
	                if (is) {
	                    if (xy[is.x.toFixed(4)] == is.y.toFixed(4)) {
	                        continue;
	                    }
	                    xy[is.x.toFixed(4)] = is.y.toFixed(4);
	                    var t1 = di.t + abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
	                        t2 = dj.t + abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
	                    if (t1 >= 0 && t1 <= 1.001 && t2 >= 0 && t2 <= 1.001) {
	                        if (justCount) {
	                            res++;
	                        } else {
	                            res.push({
	                                x: is.x,
	                                y: is.y,
	                                t1: mmin(t1, 1),
	                                t2: mmin(t2, 1)
	                            });
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    /*\
	     * Raphael.pathIntersection
	     [ method ]
	     **
	     * Utility method
	     **
	     * Finds intersections of two paths
	     > Parameters
	     - path1 (string) path string
	     - path2 (string) path string
	     = (array) dots of intersection
	     o [
	     o     {
	     o         x: (number) x coordinate of the point
	     o         y: (number) y coordinate of the point
	     o         t1: (number) t value for segment of path1
	     o         t2: (number) t value for segment of path2
	     o         segment1: (number) order number for segment of path1
	     o         segment2: (number) order number for segment of path2
	     o         bez1: (array) eight coordinates representing beziér curve for the segment of path1
	     o         bez2: (array) eight coordinates representing beziér curve for the segment of path2
	     o     }
	     o ]
	    \*/
	    R.pathIntersection = function (path1, path2) {
	        return interPathHelper(path1, path2);
	    };
	    R.pathIntersectionNumber = function (path1, path2) {
	        return interPathHelper(path1, path2, 1);
	    };
	    function interPathHelper(path1, path2, justCount) {
	        path1 = R._path2curve(path1);
	        path2 = R._path2curve(path2);
	        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2,
	            res = justCount ? 0 : [];
	        for (var i = 0, ii = path1.length; i < ii; i++) {
	            var pi = path1[i];
	            if (pi[0] == "M") {
	                x1 = x1m = pi[1];
	                y1 = y1m = pi[2];
	            } else {
	                if (pi[0] == "C") {
	                    bez1 = [x1, y1].concat(pi.slice(1));
	                    x1 = bez1[6];
	                    y1 = bez1[7];
	                } else {
	                    bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
	                    x1 = x1m;
	                    y1 = y1m;
	                }
	                for (var j = 0, jj = path2.length; j < jj; j++) {
	                    var pj = path2[j];
	                    if (pj[0] == "M") {
	                        x2 = x2m = pj[1];
	                        y2 = y2m = pj[2];
	                    } else {
	                        if (pj[0] == "C") {
	                            bez2 = [x2, y2].concat(pj.slice(1));
	                            x2 = bez2[6];
	                            y2 = bez2[7];
	                        } else {
	                            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
	                            x2 = x2m;
	                            y2 = y2m;
	                        }
	                        var intr = interHelper(bez1, bez2, justCount);
	                        if (justCount) {
	                            res += intr;
	                        } else {
	                            for (var k = 0, kk = intr.length; k < kk; k++) {
	                                intr[k].segment1 = i;
	                                intr[k].segment2 = j;
	                                intr[k].bez1 = bez1;
	                                intr[k].bez2 = bez2;
	                            }
	                            res = res.concat(intr);
	                        }
	                    }
	                }
	            }
	        }
	        return res;
	    }
	    /*\
	     * Raphael.isPointInsidePath
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns `true` if given point is inside a given closed path.
	     > Parameters
	     - path (string) path string
	     - x (number) x of the point
	     - y (number) y of the point
	     = (boolean) true, if point is inside the path
	    \*/
	    R.isPointInsidePath = function (path, x, y) {
	        var bbox = R.pathBBox(path);
	        return R.isPointInsideBBox(bbox, x, y) &&
	               interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
	    };
	    R._removedFactory = function (methodname) {
	        return function () {
	            eve("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + methodname + "\u201d of removed object", methodname);
	        };
	    };
	    /*\
	     * Raphael.pathBBox
	     [ method ]
	     **
	     * Utility method
	     **
	     * Return bounding box of a given path
	     > Parameters
	     - path (string) path string
	     = (object) bounding box
	     o {
	     o     x: (number) x coordinate of the left top point of the box
	     o     y: (number) y coordinate of the left top point of the box
	     o     x2: (number) x coordinate of the right bottom point of the box
	     o     y2: (number) y coordinate of the right bottom point of the box
	     o     width: (number) width of the box
	     o     height: (number) height of the box
	     o     cx: (number) x coordinate of the center of the box
	     o     cy: (number) y coordinate of the center of the box
	     o }
	    \*/
	    var pathDimensions = R.pathBBox = function (path) {
	        var pth = paths(path);
	        if (pth.bbox) {
	            return clone(pth.bbox);
	        }
	        if (!path) {
	            return {x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0};
	        }
	        path = path2curve(path);
	        var x = 0,
	            y = 0,
	            X = [],
	            Y = [],
	            p;
	        for (var i = 0, ii = path.length; i < ii; i++) {
	            p = path[i];
	            if (p[0] == "M") {
	                x = p[1];
	                y = p[2];
	                X.push(x);
	                Y.push(y);
	            } else {
	                var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                X = X[concat](dim.min.x, dim.max.x);
	                Y = Y[concat](dim.min.y, dim.max.y);
	                x = p[5];
	                y = p[6];
	            }
	        }
	        var xmin = mmin[apply](0, X),
	            ymin = mmin[apply](0, Y),
	            xmax = mmax[apply](0, X),
	            ymax = mmax[apply](0, Y),
	            width = xmax - xmin,
	            height = ymax - ymin,
	                bb = {
	                x: xmin,
	                y: ymin,
	                x2: xmax,
	                y2: ymax,
	                width: width,
	                height: height,
	                cx: xmin + width / 2,
	                cy: ymin + height / 2
	            };
	        pth.bbox = clone(bb);
	        return bb;
	    },
	        pathClone = function (pathArray) {
	            var res = clone(pathArray);
	            res.toString = R._path2string;
	            return res;
	        },
	        pathToRelative = R._pathToRelative = function (pathArray) {
	            var pth = paths(pathArray);
	            if (pth.rel) {
	                return pathClone(pth.rel);
	            }
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = pathArray[0][1];
	                y = pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res.push(["M", x, y]);
	            }
	            for (var i = start, ii = pathArray.length; i < ii; i++) {
	                var r = res[i] = [],
	                    pa = pathArray[i];
	                if (pa[0] != lowerCase.call(pa[0])) {
	                    r[0] = lowerCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "a":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] - x).toFixed(3);
	                            r[7] = +(pa[7] - y).toFixed(3);
	                            break;
	                        case "v":
	                            r[1] = +(pa[1] - y).toFixed(3);
	                            break;
	                        case "m":
	                            mx = pa[1];
	                            my = pa[2];
	                        default:
	                            for (var j = 1, jj = pa.length; j < jj; j++) {
	                                r[j] = +(pa[j] - ((j % 2) ? x : y)).toFixed(3);
	                            }
	                    }
	                } else {
	                    r = res[i] = [];
	                    if (pa[0] == "m") {
	                        mx = pa[1] + x;
	                        my = pa[2] + y;
	                    }
	                    for (var k = 0, kk = pa.length; k < kk; k++) {
	                        res[i][k] = pa[k];
	                    }
	                }
	                var len = res[i].length;
	                switch (res[i][0]) {
	                    case "z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "h":
	                        x += +res[i][len - 1];
	                        break;
	                    case "v":
	                        y += +res[i][len - 1];
	                        break;
	                    default:
	                        x += +res[i][len - 2];
	                        y += +res[i][len - 1];
	                }
	            }
	            res.toString = R._path2string;
	            pth.rel = pathClone(res);
	            return res;
	        },
	        pathToAbsolute = R._pathToAbsolute = function (pathArray) {
	            var pth = paths(pathArray);
	            if (pth.abs) {
	                return pathClone(pth.abs);
	            }
	            if (!R.is(pathArray, array) || !R.is(pathArray && pathArray[0], array)) { // rough assumption
	                pathArray = R.parsePathString(pathArray);
	            }
	            if (!pathArray || !pathArray.length) {
	                return [["M", 0, 0]];
	            }
	            var res = [],
	                x = 0,
	                y = 0,
	                mx = 0,
	                my = 0,
	                start = 0;
	            if (pathArray[0][0] == "M") {
	                x = +pathArray[0][1];
	                y = +pathArray[0][2];
	                mx = x;
	                my = y;
	                start++;
	                res[0] = ["M", x, y];
	            }
	            var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
	            for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
	                res.push(r = []);
	                pa = pathArray[i];
	                if (pa[0] != upperCase.call(pa[0])) {
	                    r[0] = upperCase.call(pa[0]);
	                    switch (r[0]) {
	                        case "A":
	                            r[1] = pa[1];
	                            r[2] = pa[2];
	                            r[3] = pa[3];
	                            r[4] = pa[4];
	                            r[5] = pa[5];
	                            r[6] = +(pa[6] + x);
	                            r[7] = +(pa[7] + y);
	                            break;
	                        case "V":
	                            r[1] = +pa[1] + y;
	                            break;
	                        case "H":
	                            r[1] = +pa[1] + x;
	                            break;
	                        case "R":
	                            var dots = [x, y][concat](pa.slice(1));
	                            for (var j = 2, jj = dots.length; j < jj; j++) {
	                                dots[j] = +dots[j] + x;
	                                dots[++j] = +dots[j] + y;
	                            }
	                            res.pop();
	                            res = res[concat](catmullRom2bezier(dots, crz));
	                            break;
	                        case "M":
	                            mx = +pa[1] + x;
	                            my = +pa[2] + y;
	                        default:
	                            for (j = 1, jj = pa.length; j < jj; j++) {
	                                r[j] = +pa[j] + ((j % 2) ? x : y);
	                            }
	                    }
	                } else if (pa[0] == "R") {
	                    dots = [x, y][concat](pa.slice(1));
	                    res.pop();
	                    res = res[concat](catmullRom2bezier(dots, crz));
	                    r = ["R"][concat](pa.slice(-2));
	                } else {
	                    for (var k = 0, kk = pa.length; k < kk; k++) {
	                        r[k] = pa[k];
	                    }
	                }
	                switch (r[0]) {
	                    case "Z":
	                        x = mx;
	                        y = my;
	                        break;
	                    case "H":
	                        x = r[1];
	                        break;
	                    case "V":
	                        y = r[1];
	                        break;
	                    case "M":
	                        mx = r[r.length - 2];
	                        my = r[r.length - 1];
	                    default:
	                        x = r[r.length - 2];
	                        y = r[r.length - 1];
	                }
	            }
	            res.toString = R._path2string;
	            pth.abs = pathClone(res);
	            return res;
	        },
	        l2c = function (x1, y1, x2, y2) {
	            return [x1, y1, x2, y2, x2, y2];
	        },
	        q2c = function (x1, y1, ax, ay, x2, y2) {
	            var _13 = 1 / 3,
	                _23 = 2 / 3;
	            return [
	                    _13 * x1 + _23 * ax,
	                    _13 * y1 + _23 * ay,
	                    _13 * x2 + _23 * ax,
	                    _13 * y2 + _23 * ay,
	                    x2,
	                    y2
	                ];
	        },
	        a2c = function (x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
	            // for more information of where this math came from visit:
	            // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
	            var _120 = PI * 120 / 180,
	                rad = PI / 180 * (+angle || 0),
	                res = [],
	                xy,
	                rotate = cacher(function (x, y, rad) {
	                    var X = x * math.cos(rad) - y * math.sin(rad),
	                        Y = x * math.sin(rad) + y * math.cos(rad);
	                    return {x: X, y: Y};
	                });
	            if (!recursive) {
	                xy = rotate(x1, y1, -rad);
	                x1 = xy.x;
	                y1 = xy.y;
	                xy = rotate(x2, y2, -rad);
	                x2 = xy.x;
	                y2 = xy.y;
	                var cos = math.cos(PI / 180 * angle),
	                    sin = math.sin(PI / 180 * angle),
	                    x = (x1 - x2) / 2,
	                    y = (y1 - y2) / 2;
	                var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
	                if (h > 1) {
	                    h = math.sqrt(h);
	                    rx = h * rx;
	                    ry = h * ry;
	                }
	                var rx2 = rx * rx,
	                    ry2 = ry * ry,
	                    k = (large_arc_flag == sweep_flag ? -1 : 1) *
	                        math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
	                    cx = k * rx * y / ry + (x1 + x2) / 2,
	                    cy = k * -ry * x / rx + (y1 + y2) / 2,
	                    f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
	                    f2 = math.asin(((y2 - cy) / ry).toFixed(9));

	                f1 = x1 < cx ? PI - f1 : f1;
	                f2 = x2 < cx ? PI - f2 : f2;
	                f1 < 0 && (f1 = PI * 2 + f1);
	                f2 < 0 && (f2 = PI * 2 + f2);
	                if (sweep_flag && f1 > f2) {
	                    f1 = f1 - PI * 2;
	                }
	                if (!sweep_flag && f2 > f1) {
	                    f2 = f2 - PI * 2;
	                }
	            } else {
	                f1 = recursive[0];
	                f2 = recursive[1];
	                cx = recursive[2];
	                cy = recursive[3];
	            }
	            var df = f2 - f1;
	            if (abs(df) > _120) {
	                var f2old = f2,
	                    x2old = x2,
	                    y2old = y2;
	                f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
	                x2 = cx + rx * math.cos(f2);
	                y2 = cy + ry * math.sin(f2);
	                res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
	            }
	            df = f2 - f1;
	            var c1 = math.cos(f1),
	                s1 = math.sin(f1),
	                c2 = math.cos(f2),
	                s2 = math.sin(f2),
	                t = math.tan(df / 4),
	                hx = 4 / 3 * rx * t,
	                hy = 4 / 3 * ry * t,
	                m1 = [x1, y1],
	                m2 = [x1 + hx * s1, y1 - hy * c1],
	                m3 = [x2 + hx * s2, y2 - hy * c2],
	                m4 = [x2, y2];
	            m2[0] = 2 * m1[0] - m2[0];
	            m2[1] = 2 * m1[1] - m2[1];
	            if (recursive) {
	                return [m2, m3, m4][concat](res);
	            } else {
	                res = [m2, m3, m4][concat](res).join()[split](",");
	                var newres = [];
	                for (var i = 0, ii = res.length; i < ii; i++) {
	                    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
	                }
	                return newres;
	            }
	        },
	        findDotAtSegment = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
	            var t1 = 1 - t;
	            return {
	                x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
	                y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
	            };
	        },
	        curveDim = cacher(function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
	            var a = (c2x - 2 * c1x + p1x) - (p2x - 2 * c2x + c1x),
	                b = 2 * (c1x - p1x) - 2 * (c2x - c1x),
	                c = p1x - c1x,
	                t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a,
	                y = [p1y, p2y],
	                x = [p1x, p2x],
	                dot;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            a = (c2y - 2 * c1y + p1y) - (p2y - 2 * c2y + c1y);
	            b = 2 * (c1y - p1y) - 2 * (c2y - c1y);
	            c = p1y - c1y;
	            t1 = (-b + math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            t2 = (-b - math.sqrt(b * b - 4 * a * c)) / 2 / a;
	            abs(t1) > "1e12" && (t1 = .5);
	            abs(t2) > "1e12" && (t2 = .5);
	            if (t1 > 0 && t1 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t1);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            if (t2 > 0 && t2 < 1) {
	                dot = findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t2);
	                x.push(dot.x);
	                y.push(dot.y);
	            }
	            return {
	                min: {x: mmin[apply](0, x), y: mmin[apply](0, y)},
	                max: {x: mmax[apply](0, x), y: mmax[apply](0, y)}
	            };
	        }),
	        path2curve = R._path2curve = cacher(function (path, path2) {
	            var pth = !path2 && paths(path);
	            if (!path2 && pth.curve) {
	                return pathClone(pth.curve);
	            }
	            var p = pathToAbsolute(path),
	                p2 = path2 && pathToAbsolute(path2),
	                attrs = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                attrs2 = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null},
	                processPath = function (path, d, pcom) {
	                    var nx, ny, tq = {T:1, Q:1};
	                    if (!path) {
	                        return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
	                    }
	                    !(path[0] in tq) && (d.qx = d.qy = null);
	                    switch (path[0]) {
	                        case "M":
	                            d.X = path[1];
	                            d.Y = path[2];
	                            break;
	                        case "A":
	                            path = ["C"][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
	                            break;
	                        case "S":
	                            if (pcom == "C" || pcom == "S") { // In "S" case we have to take into account, if the previous command is C/S.
	                                nx = d.x * 2 - d.bx;          // And reflect the previous
	                                ny = d.y * 2 - d.by;          // command's control point relative to the current point.
	                            }
	                            else {                            // or some else or nothing
	                                nx = d.x;
	                                ny = d.y;
	                            }
	                            path = ["C", nx, ny][concat](path.slice(1));
	                            break;
	                        case "T":
	                            if (pcom == "Q" || pcom == "T") { // In "T" case we have to take into account, if the previous command is Q/T.
	                                d.qx = d.x * 2 - d.qx;        // And make a reflection similar
	                                d.qy = d.y * 2 - d.qy;        // to case "S".
	                            }
	                            else {                            // or something else or nothing
	                                d.qx = d.x;
	                                d.qy = d.y;
	                            }
	                            path = ["C"][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
	                            break;
	                        case "Q":
	                            d.qx = path[1];
	                            d.qy = path[2];
	                            path = ["C"][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
	                            break;
	                        case "L":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], path[2]));
	                            break;
	                        case "H":
	                            path = ["C"][concat](l2c(d.x, d.y, path[1], d.y));
	                            break;
	                        case "V":
	                            path = ["C"][concat](l2c(d.x, d.y, d.x, path[1]));
	                            break;
	                        case "Z":
	                            path = ["C"][concat](l2c(d.x, d.y, d.X, d.Y));
	                            break;
	                    }
	                    return path;
	                },
	                fixArc = function (pp, i) {
	                    if (pp[i].length > 7) {
	                        pp[i].shift();
	                        var pi = pp[i];
	                        while (pi.length) {
	                            pcoms1[i]="A"; // if created multiple C:s, their original seg is saved
	                            p2 && (pcoms2[i]="A"); // the same as above
	                            pp.splice(i++, 0, ["C"][concat](pi.splice(0, 6)));
	                        }
	                        pp.splice(i, 1);
	                        ii = mmax(p.length, p2 && p2.length || 0);
	                    }
	                },
	                fixM = function (path1, path2, a1, a2, i) {
	                    if (path1 && path2 && path1[i][0] == "M" && path2[i][0] != "M") {
	                        path2.splice(i, 0, ["M", a2.x, a2.y]);
	                        a1.bx = 0;
	                        a1.by = 0;
	                        a1.x = path1[i][1];
	                        a1.y = path1[i][2];
	                        ii = mmax(p.length, p2 && p2.length || 0);
	                    }
	                },
	                pcoms1 = [], // path commands of original path p
	                pcoms2 = [], // path commands of original path p2
	                pfirst = "", // temporary holder for original path command
	                pcom = ""; // holder for previous path command of original path
	            for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
	                p[i] && (pfirst = p[i][0]); // save current path command

	                if (pfirst != "C") // C is not saved yet, because it may be result of conversion
	                {
	                    pcoms1[i] = pfirst; // Save current path command
	                    i && ( pcom = pcoms1[i-1]); // Get previous path command pcom
	                }
	                p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

	                if (pcoms1[i] != "A" && pfirst == "C") pcoms1[i] = "C"; // A is the only command
	                // which may produce multiple C:s
	                // so we have to make sure that C is also C in original path

	                fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

	                if (p2) { // the same procedures is done to p2
	                    p2[i] && (pfirst = p2[i][0]);
	                    if (pfirst != "C")
	                    {
	                        pcoms2[i] = pfirst;
	                        i && (pcom = pcoms2[i-1]);
	                    }
	                    p2[i] = processPath(p2[i], attrs2, pcom);

	                    if (pcoms2[i]!="A" && pfirst=="C") pcoms2[i]="C";

	                    fixArc(p2, i);
	                }
	                fixM(p, p2, attrs, attrs2, i);
	                fixM(p2, p, attrs2, attrs, i);
	                var seg = p[i],
	                    seg2 = p2 && p2[i],
	                    seglen = seg.length,
	                    seg2len = p2 && seg2.length;
	                attrs.x = seg[seglen - 2];
	                attrs.y = seg[seglen - 1];
	                attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
	                attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
	                attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
	                attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
	                attrs2.x = p2 && seg2[seg2len - 2];
	                attrs2.y = p2 && seg2[seg2len - 1];
	            }
	            if (!p2) {
	                pth.curve = pathClone(p);
	            }
	            return p2 ? [p, p2] : p;
	        }, null, pathClone),
	        parseDots = R._parseDots = cacher(function (gradient) {
	            var dots = [];
	            for (var i = 0, ii = gradient.length; i < ii; i++) {
	                var dot = {},
	                    par = gradient[i].match(/^([^:]*):?([\d\.]*)/);
	                dot.color = R.getRGB(par[1]);
	                if (dot.color.error) {
	                    return null;
	                }
	                dot.opacity = dot.color.opacity;
	                dot.color = dot.color.hex;
	                par[2] && (dot.offset = par[2] + "%");
	                dots.push(dot);
	            }
	            for (i = 1, ii = dots.length - 1; i < ii; i++) {
	                if (!dots[i].offset) {
	                    var start = toFloat(dots[i - 1].offset || 0),
	                        end = 0;
	                    for (var j = i + 1; j < ii; j++) {
	                        if (dots[j].offset) {
	                            end = dots[j].offset;
	                            break;
	                        }
	                    }
	                    if (!end) {
	                        end = 100;
	                        j = ii;
	                    }
	                    end = toFloat(end);
	                    var d = (end - start) / (j - i + 1);
	                    for (; i < j; i++) {
	                        start += d;
	                        dots[i].offset = start + "%";
	                    }
	                }
	            }
	            return dots;
	        }),
	        tear = R._tear = function (el, paper) {
	            el == paper.top && (paper.top = el.prev);
	            el == paper.bottom && (paper.bottom = el.next);
	            el.next && (el.next.prev = el.prev);
	            el.prev && (el.prev.next = el.next);
	        },
	        tofront = R._tofront = function (el, paper) {
	            if (paper.top === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = null;
	            el.prev = paper.top;
	            paper.top.next = el;
	            paper.top = el;
	        },
	        toback = R._toback = function (el, paper) {
	            if (paper.bottom === el) {
	                return;
	            }
	            tear(el, paper);
	            el.next = paper.bottom;
	            el.prev = null;
	            paper.bottom.prev = el;
	            paper.bottom = el;
	        },
	        insertafter = R._insertafter = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.top && (paper.top = el);
	            el2.next && (el2.next.prev = el);
	            el.next = el2.next;
	            el.prev = el2;
	            el2.next = el;
	        },
	        insertbefore = R._insertbefore = function (el, el2, paper) {
	            tear(el, paper);
	            el2 == paper.bottom && (paper.bottom = el);
	            el2.prev && (el2.prev.next = el);
	            el.prev = el2.prev;
	            el2.prev = el;
	            el.next = el2;
	        },
	        /*\
	         * Raphael.toMatrix
	         [ method ]
	         **
	         * Utility method
	         **
	         * Returns matrix of transformations applied to a given path
	         > Parameters
	         - path (string) path string
	         - transform (string|array) transformation string
	         = (object) @Matrix
	        \*/
	        toMatrix = R.toMatrix = function (path, transform) {
	            var bb = pathDimensions(path),
	                el = {
	                    _: {
	                        transform: E
	                    },
	                    getBBox: function () {
	                        return bb;
	                    }
	                };
	            extractTransform(el, transform);
	            return el.matrix;
	        },
	        /*\
	         * Raphael.transformPath
	         [ method ]
	         **
	         * Utility method
	         **
	         * Returns path transformed by a given transformation
	         > Parameters
	         - path (string) path string
	         - transform (string|array) transformation string
	         = (string) path
	        \*/
	        transformPath = R.transformPath = function (path, transform) {
	            return mapPath(path, toMatrix(path, transform));
	        },
	        extractTransform = R._extractTransform = function (el, tstr) {
	            if (tstr == null) {
	                return el._.transform;
	            }
	            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || E);
	            var tdata = R.parseTransformString(tstr),
	                deg = 0,
	                dx = 0,
	                dy = 0,
	                sx = 1,
	                sy = 1,
	                _ = el._,
	                m = new Matrix;
	            _.transform = tdata || [];
	            if (tdata) {
	                for (var i = 0, ii = tdata.length; i < ii; i++) {
	                    var t = tdata[i],
	                        tlen = t.length,
	                        command = Str(t[0]).toLowerCase(),
	                        absolute = t[0] != command,
	                        inver = absolute ? m.invert() : 0,
	                        x1,
	                        y1,
	                        x2,
	                        y2,
	                        bb;
	                    if (command == "t" && tlen == 3) {
	                        if (absolute) {
	                            x1 = inver.x(0, 0);
	                            y1 = inver.y(0, 0);
	                            x2 = inver.x(t[1], t[2]);
	                            y2 = inver.y(t[1], t[2]);
	                            m.translate(x2 - x1, y2 - y1);
	                        } else {
	                            m.translate(t[1], t[2]);
	                        }
	                    } else if (command == "r") {
	                        if (tlen == 2) {
	                            bb = bb || el.getBBox(1);
	                            m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                            deg += t[1];
	                        } else if (tlen == 4) {
	                            if (absolute) {
	                                x2 = inver.x(t[2], t[3]);
	                                y2 = inver.y(t[2], t[3]);
	                                m.rotate(t[1], x2, y2);
	                            } else {
	                                m.rotate(t[1], t[2], t[3]);
	                            }
	                            deg += t[1];
	                        }
	                    } else if (command == "s") {
	                        if (tlen == 2 || tlen == 3) {
	                            bb = bb || el.getBBox(1);
	                            m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
	                            sx *= t[1];
	                            sy *= t[tlen - 1];
	                        } else if (tlen == 5) {
	                            if (absolute) {
	                                x2 = inver.x(t[3], t[4]);
	                                y2 = inver.y(t[3], t[4]);
	                                m.scale(t[1], t[2], x2, y2);
	                            } else {
	                                m.scale(t[1], t[2], t[3], t[4]);
	                            }
	                            sx *= t[1];
	                            sy *= t[2];
	                        }
	                    } else if (command == "m" && tlen == 7) {
	                        m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
	                    }
	                    _.dirtyT = 1;
	                    el.matrix = m;
	                }
	            }

	            /*\
	             * Element.matrix
	             [ property (object) ]
	             **
	             * Keeps @Matrix object, which represents element transformation
	            \*/
	            el.matrix = m;

	            _.sx = sx;
	            _.sy = sy;
	            _.deg = deg;
	            _.dx = dx = m.e;
	            _.dy = dy = m.f;

	            if (sx == 1 && sy == 1 && !deg && _.bbox) {
	                _.bbox.x += +dx;
	                _.bbox.y += +dy;
	            } else {
	                _.dirtyT = 1;
	            }
	        },
	        getEmpty = function (item) {
	            var l = item[0];
	            switch (l.toLowerCase()) {
	                case "t": return [l, 0, 0];
	                case "m": return [l, 1, 0, 0, 1, 0, 0];
	                case "r": if (item.length == 4) {
	                    return [l, 0, item[2], item[3]];
	                } else {
	                    return [l, 0];
	                }
	                case "s": if (item.length == 5) {
	                    return [l, 1, 1, item[3], item[4]];
	                } else if (item.length == 3) {
	                    return [l, 1, 1];
	                } else {
	                    return [l, 1];
	                }
	            }
	        },
	        equaliseTransform = R._equaliseTransform = function (t1, t2) {
	            t2 = Str(t2).replace(/\.{3}|\u2026/g, t1);
	            t1 = R.parseTransformString(t1) || [];
	            t2 = R.parseTransformString(t2) || [];
	            var maxlength = mmax(t1.length, t2.length),
	                from = [],
	                to = [],
	                i = 0, j, jj,
	                tt1, tt2;
	            for (; i < maxlength; i++) {
	                tt1 = t1[i] || getEmpty(t2[i]);
	                tt2 = t2[i] || getEmpty(tt1);
	                if ((tt1[0] != tt2[0]) ||
	                    (tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3])) ||
	                    (tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4]))
	                    ) {
	                    return;
	                }
	                from[i] = [];
	                to[i] = [];
	                for (j = 0, jj = mmax(tt1.length, tt2.length); j < jj; j++) {
	                    j in tt1 && (from[i][j] = tt1[j]);
	                    j in tt2 && (to[i][j] = tt2[j]);
	                }
	            }
	            return {
	                from: from,
	                to: to
	            };
	        };
	    R._getContainer = function (x, y, w, h) {
	        var container;
	        container = h == null && !R.is(x, "object") ? g.doc.getElementById(x) : x;
	        if (container == null) {
	            return;
	        }
	        if (container.tagName) {
	            if (y == null) {
	                return {
	                    container: container,
	                    width: container.style.pixelWidth || container.offsetWidth,
	                    height: container.style.pixelHeight || container.offsetHeight
	                };
	            } else {
	                return {
	                    container: container,
	                    width: y,
	                    height: w
	                };
	            }
	        }
	        return {
	            container: 1,
	            x: x,
	            y: y,
	            width: w,
	            height: h
	        };
	    };
	    /*\
	     * Raphael.pathToRelative
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to relative form
	     > Parameters
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments.
	    \*/
	    R.pathToRelative = pathToRelative;
	    R._engine = {};
	    /*\
	     * Raphael.path2curve
	     [ method ]
	     **
	     * Utility method
	     **
	     * Converts path to a new path where all segments are cubic bezier curves.
	     > Parameters
	     - pathString (string|array) path string or array of segments
	     = (array) array of segments.
	    \*/
	    R.path2curve = path2curve;
	    /*\
	     * Raphael.matrix
	     [ method ]
	     **
	     * Utility method
	     **
	     * Returns matrix based on given parameters.
	     > Parameters
	     - a (number)
	     - b (number)
	     - c (number)
	     - d (number)
	     - e (number)
	     - f (number)
	     = (object) @Matrix
	    \*/
	    R.matrix = function (a, b, c, d, e, f) {
	        return new Matrix(a, b, c, d, e, f);
	    };
	    function Matrix(a, b, c, d, e, f) {
	        if (a != null) {
	            this.a = +a;
	            this.b = +b;
	            this.c = +c;
	            this.d = +d;
	            this.e = +e;
	            this.f = +f;
	        } else {
	            this.a = 1;
	            this.b = 0;
	            this.c = 0;
	            this.d = 1;
	            this.e = 0;
	            this.f = 0;
	        }
	    }
	    (function (matrixproto) {
	        /*\
	         * Matrix.add
	         [ method ]
	         **
	         * Adds given matrix to existing one.
	         > Parameters
	         - a (number)
	         - b (number)
	         - c (number)
	         - d (number)
	         - e (number)
	         - f (number)
	         or
	         - matrix (object) @Matrix
	        \*/
	        matrixproto.add = function (a, b, c, d, e, f) {
	            var out = [[], [], []],
	                m = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
	                matrix = [[a, c, e], [b, d, f], [0, 0, 1]],
	                x, y, z, res;

	            if (a && a instanceof Matrix) {
	                matrix = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]];
	            }

	            for (x = 0; x < 3; x++) {
	                for (y = 0; y < 3; y++) {
	                    res = 0;
	                    for (z = 0; z < 3; z++) {
	                        res += m[x][z] * matrix[z][y];
	                    }
	                    out[x][y] = res;
	                }
	            }
	            this.a = out[0][0];
	            this.b = out[1][0];
	            this.c = out[0][1];
	            this.d = out[1][1];
	            this.e = out[0][2];
	            this.f = out[1][2];
	        };
	        /*\
	         * Matrix.invert
	         [ method ]
	         **
	         * Returns inverted version of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.invert = function () {
	            var me = this,
	                x = me.a * me.d - me.b * me.c;
	            return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
	        };
	        /*\
	         * Matrix.clone
	         [ method ]
	         **
	         * Returns copy of the matrix
	         = (object) @Matrix
	        \*/
	        matrixproto.clone = function () {
	            return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
	        };
	        /*\
	         * Matrix.translate
	         [ method ]
	         **
	         * Translate the matrix
	         > Parameters
	         - x (number)
	         - y (number)
	        \*/
	        matrixproto.translate = function (x, y) {
	            this.add(1, 0, 0, 1, x, y);
	        };
	        /*\
	         * Matrix.scale
	         [ method ]
	         **
	         * Scales the matrix
	         > Parameters
	         - x (number)
	         - y (number) #optional
	         - cx (number) #optional
	         - cy (number) #optional
	        \*/
	        matrixproto.scale = function (x, y, cx, cy) {
	            y == null && (y = x);
	            (cx || cy) && this.add(1, 0, 0, 1, cx, cy);
	            this.add(x, 0, 0, y, 0, 0);
	            (cx || cy) && this.add(1, 0, 0, 1, -cx, -cy);
	        };
	        /*\
	         * Matrix.rotate
	         [ method ]
	         **
	         * Rotates the matrix
	         > Parameters
	         - a (number)
	         - x (number)
	         - y (number)
	        \*/
	        matrixproto.rotate = function (a, x, y) {
	            a = R.rad(a);
	            x = x || 0;
	            y = y || 0;
	            var cos = +math.cos(a).toFixed(9),
	                sin = +math.sin(a).toFixed(9);
	            this.add(cos, sin, -sin, cos, x, y);
	            this.add(1, 0, 0, 1, -x, -y);
	        };
	        /*\
	         * Matrix.x
	         [ method ]
	         **
	         * Return x coordinate for given point after transformation described by the matrix. See also @Matrix.y
	         > Parameters
	         - x (number)
	         - y (number)
	         = (number) x
	        \*/
	        matrixproto.x = function (x, y) {
	            return x * this.a + y * this.c + this.e;
	        };
	        /*\
	         * Matrix.y
	         [ method ]
	         **
	         * Return y coordinate for given point after transformation described by the matrix. See also @Matrix.x
	         > Parameters
	         - x (number)
	         - y (number)
	         = (number) y
	        \*/
	        matrixproto.y = function (x, y) {
	            return x * this.b + y * this.d + this.f;
	        };
	        matrixproto.get = function (i) {
	            return +this[Str.fromCharCode(97 + i)].toFixed(4);
	        };
	        matrixproto.toString = function () {
	            return R.svg ?
	                "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" :
	                [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join();
	        };
	        matrixproto.toFilter = function () {
	            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) +
	                ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) +
	                ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')";
	        };
	        matrixproto.offset = function () {
	            return [this.e.toFixed(4), this.f.toFixed(4)];
	        };
	        function norm(a) {
	            return a[0] * a[0] + a[1] * a[1];
	        }
	        function normalize(a) {
	            var mag = math.sqrt(norm(a));
	            a[0] && (a[0] /= mag);
	            a[1] && (a[1] /= mag);
	        }
	        /*\
	         * Matrix.split
	         [ method ]
	         **
	         * Splits matrix into primitive transformations
	         = (object) in format:
	         o dx (number) translation by x
	         o dy (number) translation by y
	         o scalex (number) scale by x
	         o scaley (number) scale by y
	         o shear (number) shear
	         o rotate (number) rotation in deg
	         o isSimple (boolean) could it be represented via simple transformations
	        \*/
	        matrixproto.split = function () {
	            var out = {};
	            // translation
	            out.dx = this.e;
	            out.dy = this.f;

	            // scale and shear
	            var row = [[this.a, this.c], [this.b, this.d]];
	            out.scalex = math.sqrt(norm(row[0]));
	            normalize(row[0]);

	            out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
	            row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];

	            out.scaley = math.sqrt(norm(row[1]));
	            normalize(row[1]);
	            out.shear /= out.scaley;

	            // rotation
	            var sin = -row[0][1],
	                cos = row[1][1];
	            if (cos < 0) {
	                out.rotate = R.deg(math.acos(cos));
	                if (sin < 0) {
	                    out.rotate = 360 - out.rotate;
	                }
	            } else {
	                out.rotate = R.deg(math.asin(sin));
	            }

	            out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
	            out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
	            out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
	            return out;
	        };
	        /*\
	         * Matrix.toTransformString
	         [ method ]
	         **
	         * Return transform string that represents given matrix
	         = (string) transform string
	        \*/
	        matrixproto.toTransformString = function (shorter) {
	            var s = shorter || this[split]();
	            if (s.isSimple) {
	                s.scalex = +s.scalex.toFixed(4);
	                s.scaley = +s.scaley.toFixed(4);
	                s.rotate = +s.rotate.toFixed(4);
	                return  (s.dx || s.dy ? "t" + [s.dx, s.dy] : E) +
	                        (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E) +
	                        (s.rotate ? "r" + [s.rotate, 0, 0] : E);
	            } else {
	                return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
	            }
	        };
	    })(Matrix.prototype);

	    var preventDefault = function () {
	        this.returnValue = false;
	    },
	    preventTouch = function () {
	        return this.originalEvent.preventDefault();
	    },
	    stopPropagation = function () {
	        this.cancelBubble = true;
	    },
	    stopTouch = function () {
	        return this.originalEvent.stopPropagation();
	    },
	    getEventPosition = function (e) {
	        var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;

	        return {
	            x: e.clientX + scrollX,
	            y: e.clientY + scrollY
	        };
	    },
	    addEvent = (function () {
	        if (g.doc.addEventListener) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    var pos = getEventPosition(e);
	                    return fn.call(element, e, pos.x, pos.y);
	                };
	                obj.addEventListener(type, f, false);

	                if (supportsTouch && touchMap[type]) {
	                    var _f = function (e) {
	                        var pos = getEventPosition(e),
	                            olde = e;

	                        for (var i = 0, ii = e.targetTouches && e.targetTouches.length; i < ii; i++) {
	                            if (e.targetTouches[i].target == obj) {
	                                e = e.targetTouches[i];
	                                e.originalEvent = olde;
	                                e.preventDefault = preventTouch;
	                                e.stopPropagation = stopTouch;
	                                break;
	                            }
	                        }

	                        return fn.call(element, e, pos.x, pos.y);
	                    };
	                    obj.addEventListener(touchMap[type], _f, false);
	                }

	                return function () {
	                    obj.removeEventListener(type, f, false);

	                    if (supportsTouch && touchMap[type])
	                        obj.removeEventListener(touchMap[type], _f, false);

	                    return true;
	                };
	            };
	        } else if (g.doc.attachEvent) {
	            return function (obj, type, fn, element) {
	                var f = function (e) {
	                    e = e || g.win.event;
	                    var scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	                        scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
	                        x = e.clientX + scrollX,
	                        y = e.clientY + scrollY;
	                    e.preventDefault = e.preventDefault || preventDefault;
	                    e.stopPropagation = e.stopPropagation || stopPropagation;
	                    return fn.call(element, e, x, y);
	                };
	                obj.attachEvent("on" + type, f);
	                var detacher = function () {
	                    obj.detachEvent("on" + type, f);
	                    return true;
	                };
	                return detacher;
	            };
	        }
	    })(),
	    drag = [],
	    dragMove = function (e) {
	        var x = e.clientX,
	            y = e.clientY,
	            scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	            scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft,
	            dragi,
	            j = drag.length;
	        while (j--) {
	            dragi = drag[j];
	            if (supportsTouch && e.touches) {
	                var i = e.touches.length,
	                    touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    if (touch.identifier == dragi.el._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        (e.originalEvent ? e.originalEvent : e).preventDefault();
	                        break;
	                    }
	                }
	            } else {
	                e.preventDefault();
	            }
	            var node = dragi.el.node,
	                o,
	                next = node.nextSibling,
	                parent = node.parentNode,
	                display = node.style.display;
	            g.win.opera && parent.removeChild(node);
	            node.style.display = "none";
	            o = dragi.el.paper.getElementByPoint(x, y);
	            node.style.display = display;
	            g.win.opera && (next ? parent.insertBefore(node, next) : parent.appendChild(node));
	            o && eve("raphael.drag.over." + dragi.el.id, dragi.el, o);
	            x += scrollX;
	            y += scrollY;
	            eve("raphael.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
	        }
	    },
	    dragUp = function (e) {
	        R.unmousemove(dragMove).unmouseup(dragUp);
	        var i = drag.length,
	            dragi;
	        while (i--) {
	            dragi = drag[i];
	            dragi.el._drag = {};
	            eve("raphael.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
	        }
	        drag = [];
	    },
	    /*\
	     * Raphael.el
	     [ property (object) ]
	     **
	     * You can add your own method to elements. This is useful when you want to hack default functionality or
	     * want to wrap some common transformation or attributes in one method. In difference to canvas methods,
	     * you can redefine element method at any time. Expending element methods wouldn’t affect set.
	     > Usage
	     | Raphael.el.red = function () {
	     |     this.attr({fill: "#f00"});
	     | };
	     | // then use it
	     | paper.circle(100, 100, 20).red();
	    \*/
	    elproto = R.el = {};
	    /*\
	     * Element.click
	     [ method ]
	     **
	     * Adds event handler for click for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unclick
	     [ method ]
	     **
	     * Removes event handler for click for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.dblclick
	     [ method ]
	     **
	     * Adds event handler for double click for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.undblclick
	     [ method ]
	     **
	     * Removes event handler for double click for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousedown
	     [ method ]
	     **
	     * Adds event handler for mousedown for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousedown
	     [ method ]
	     **
	     * Removes event handler for mousedown for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mousemove
	     [ method ]
	     **
	     * Adds event handler for mousemove for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmousemove
	     [ method ]
	     **
	     * Removes event handler for mousemove for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseout
	     [ method ]
	     **
	     * Adds event handler for mouseout for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseout
	     [ method ]
	     **
	     * Removes event handler for mouseout for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseover
	     [ method ]
	     **
	     * Adds event handler for mouseover for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseover
	     [ method ]
	     **
	     * Removes event handler for mouseover for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.mouseup
	     [ method ]
	     **
	     * Adds event handler for mouseup for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.unmouseup
	     [ method ]
	     **
	     * Removes event handler for mouseup for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchstart
	     [ method ]
	     **
	     * Adds event handler for touchstart for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchstart
	     [ method ]
	     **
	     * Removes event handler for touchstart for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchmove
	     [ method ]
	     **
	     * Adds event handler for touchmove for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchmove
	     [ method ]
	     **
	     * Removes event handler for touchmove for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchend
	     [ method ]
	     **
	     * Adds event handler for touchend for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchend
	     [ method ]
	     **
	     * Removes event handler for touchend for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/

	    /*\
	     * Element.touchcancel
	     [ method ]
	     **
	     * Adds event handler for touchcancel for the element.
	     > Parameters
	     - handler (function) handler for the event
	     = (object) @Element
	    \*/
	    /*\
	     * Element.untouchcancel
	     [ method ]
	     **
	     * Removes event handler for touchcancel for the element.
	     > Parameters
	     - handler (function) #optional handler for the event
	     = (object) @Element
	    \*/
	    for (var i = events.length; i--;) {
	        (function (eventName) {
	            R[eventName] = elproto[eventName] = function (fn, scope) {
	                if (R.is(fn, "function")) {
	                    this.events = this.events || [];
	                    this.events.push({name: eventName, f: fn, unbind: addEvent(this.shape || this.node || g.doc, eventName, fn, scope || this)});
	                }
	                return this;
	            };
	            R["un" + eventName] = elproto["un" + eventName] = function (fn) {
	                var events = this.events || [],
	                    l = events.length;
	                while (l--){
	                    if (events[l].name == eventName && (R.is(fn, "undefined") || events[l].f == fn)) {
	                        events[l].unbind();
	                        events.splice(l, 1);
	                        !events.length && delete this.events;
	                    }
	                }
	                return this;
	            };
	        })(events[i]);
	    }

	    /*\
	     * Element.data
	     [ method ]
	     **
	     * Adds or retrieves given value associated with given key.
	     **
	     * See also @Element.removeData
	     > Parameters
	     - key (string) key to store data
	     - value (any) #optional value to store
	     = (object) @Element
	     * or, if value is not specified:
	     = (any) value
	     * or, if key and value are not specified:
	     = (object) Key/value pairs for all the data associated with the element.
	     > Usage
	     | for (var i = 0, i < 5, i++) {
	     |     paper.circle(10 + 15 * i, 10, 10)
	     |          .attr({fill: "#000"})
	     |          .data("i", i)
	     |          .click(function () {
	     |             alert(this.data("i"));
	     |          });
	     | }
	    \*/
	    elproto.data = function (key, value) {
	        var data = eldata[this.id] = eldata[this.id] || {};
	        if (arguments.length == 0) {
	            return data;
	        }
	        if (arguments.length == 1) {
	            if (R.is(key, "object")) {
	                for (var i in key) if (key[has](i)) {
	                    this.data(i, key[i]);
	                }
	                return this;
	            }
	            eve("raphael.data.get." + this.id, this, data[key], key);
	            return data[key];
	        }
	        data[key] = value;
	        eve("raphael.data.set." + this.id, this, value, key);
	        return this;
	    };
	    /*\
	     * Element.removeData
	     [ method ]
	     **
	     * Removes value associated with an element by given key.
	     * If key is not provided, removes all the data of the element.
	     > Parameters
	     - key (string) #optional key
	     = (object) @Element
	    \*/
	    elproto.removeData = function (key) {
	        if (key == null) {
	            eldata[this.id] = {};
	        } else {
	            eldata[this.id] && delete eldata[this.id][key];
	        }
	        return this;
	    };
	     /*\
	     * Element.getData
	     [ method ]
	     **
	     * Retrieves the element data
	     = (object) data
	    \*/
	    elproto.getData = function () {
	        return clone(eldata[this.id] || {});
	    };
	    /*\
	     * Element.hover
	     [ method ]
	     **
	     * Adds event handlers for hover for the element.
	     > Parameters
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     - icontext (object) #optional context for hover in handler
	     - ocontext (object) #optional context for hover out handler
	     = (object) @Element
	    \*/
	    elproto.hover = function (f_in, f_out, scope_in, scope_out) {
	        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
	    };
	    /*\
	     * Element.unhover
	     [ method ]
	     **
	     * Removes event handlers for hover for the element.
	     > Parameters
	     - f_in (function) handler for hover in
	     - f_out (function) handler for hover out
	     = (object) @Element
	    \*/
	    elproto.unhover = function (f_in, f_out) {
	        return this.unmouseover(f_in).unmouseout(f_out);
	    };
	    var draggable = [];
	    /*\
	     * Element.drag
	     [ method ]
	     **
	     * Adds event handlers for drag of the element.
	     > Parameters
	     - onmove (function) handler for moving
	     - onstart (function) handler for drag start
	     - onend (function) handler for drag end
	     - mcontext (object) #optional context for moving handler
	     - scontext (object) #optional context for drag start handler
	     - econtext (object) #optional context for drag end handler
	     * Additionally following `drag` events will be triggered: `drag.start.<id>` on start,
	     * `drag.end.<id>` on end and `drag.move.<id>` on every move. When element will be dragged over another element
	     * `drag.over.<id>` will be fired as well.
	     *
	     * Start event and start handler will be called in specified context or in context of the element with following parameters:
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * Move event and move handler will be called in specified context or in context of the element with following parameters:
	     o dx (number) shift by x from the start point
	     o dy (number) shift by y from the start point
	     o x (number) x position of the mouse
	     o y (number) y position of the mouse
	     o event (object) DOM event object
	     * End event and end handler will be called in specified context or in context of the element with following parameters:
	     o event (object) DOM event object
	     = (object) @Element
	    \*/
	    elproto.drag = function (onmove, onstart, onend, move_scope, start_scope, end_scope) {
	        function start(e) {
	            (e.originalEvent || e).preventDefault();
	            var x = e.clientX,
	                y = e.clientY,
	                scrollY = g.doc.documentElement.scrollTop || g.doc.body.scrollTop,
	                scrollX = g.doc.documentElement.scrollLeft || g.doc.body.scrollLeft;
	            this._drag.id = e.identifier;
	            if (supportsTouch && e.touches) {
	                var i = e.touches.length, touch;
	                while (i--) {
	                    touch = e.touches[i];
	                    this._drag.id = touch.identifier;
	                    if (touch.identifier == this._drag.id) {
	                        x = touch.clientX;
	                        y = touch.clientY;
	                        break;
	                    }
	                }
	            }
	            this._drag.x = x + scrollX;
	            this._drag.y = y + scrollY;
	            !drag.length && R.mousemove(dragMove).mouseup(dragUp);
	            drag.push({el: this, move_scope: move_scope, start_scope: start_scope, end_scope: end_scope});
	            onstart && eve.on("raphael.drag.start." + this.id, onstart);
	            onmove && eve.on("raphael.drag.move." + this.id, onmove);
	            onend && eve.on("raphael.drag.end." + this.id, onend);
	            eve("raphael.drag.start." + this.id, start_scope || move_scope || this, e.clientX + scrollX, e.clientY + scrollY, e);
	        }
	        this._drag = {};
	        draggable.push({el: this, start: start});
	        this.mousedown(start);
	        return this;
	    };
	    /*\
	     * Element.onDragOver
	     [ method ]
	     **
	     * Shortcut for assigning event handler for `drag.over.<id>` event, where id is id of the element (see @Element.id).
	     > Parameters
	     - f (function) handler for event, first argument would be the element you are dragging over
	    \*/
	    elproto.onDragOver = function (f) {
	        f ? eve.on("raphael.drag.over." + this.id, f) : eve.unbind("raphael.drag.over." + this.id);
	    };
	    /*\
	     * Element.undrag
	     [ method ]
	     **
	     * Removes all drag event handlers from given element.
	    \*/
	    elproto.undrag = function () {
	        var i = draggable.length;
	        while (i--) if (draggable[i].el == this) {
	            this.unmousedown(draggable[i].start);
	            draggable.splice(i, 1);
	            eve.unbind("raphael.drag.*." + this.id);
	        }
	        !draggable.length && R.unmousemove(dragMove).unmouseup(dragUp);
	        drag = [];
	    };
	    /*\
	     * Paper.circle
	     [ method ]
	     **
	     * Draws a circle.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - r (number) radius
	     = (object) Raphaël element object with type “circle”
	     **
	     > Usage
	     | var c = paper.circle(50, 50, 40);
	    \*/
	    paperproto.circle = function (x, y, r) {
	        var out = R._engine.circle(this, x || 0, y || 0, r || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.rect
	     [ method ]
	     *
	     * Draws a rectangle.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the top left corner
	     - y (number) y coordinate of the top left corner
	     - width (number) width
	     - height (number) height
	     - r (number) #optional radius for rounded corners, default is 0
	     = (object) Raphaël element object with type “rect”
	     **
	     > Usage
	     | // regular rectangle
	     | var c = paper.rect(10, 10, 50, 50);
	     | // rectangle with rounded corners
	     | var c = paper.rect(40, 40, 50, 50, 10);
	    \*/
	    paperproto.rect = function (x, y, w, h, r) {
	        var out = R._engine.rect(this, x || 0, y || 0, w || 0, h || 0, r || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.ellipse
	     [ method ]
	     **
	     * Draws an ellipse.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the centre
	     - y (number) y coordinate of the centre
	     - rx (number) horizontal radius
	     - ry (number) vertical radius
	     = (object) Raphaël element object with type “ellipse”
	     **
	     > Usage
	     | var c = paper.ellipse(50, 50, 40, 20);
	    \*/
	    paperproto.ellipse = function (x, y, rx, ry) {
	        var out = R._engine.ellipse(this, x || 0, y || 0, rx || 0, ry || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.path
	     [ method ]
	     **
	     * Creates a path element by given path data string.
	     > Parameters
	     - pathString (string) #optional path string in SVG format.
	     * Path string consists of one-letter commands, followed by comma seprarated arguments in numercal form. Example:
	     | "M10,20L30,40"
	     * Here we can see two commands: “M”, with arguments `(10, 20)` and “L” with arguments `(30, 40)`. Upper case letter mean command is absolute, lower case—relative.
	     *
	     # <p>Here is short list of commands available, for more details see <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path's data attribute's format are described in the SVG specification.">SVG path string format</a>.</p>
	     # <table><thead><tr><th>Command</th><th>Name</th><th>Parameters</th></tr></thead><tbody>
	     # <tr><td>M</td><td>moveto</td><td>(x y)+</td></tr>
	     # <tr><td>Z</td><td>closepath</td><td>(none)</td></tr>
	     # <tr><td>L</td><td>lineto</td><td>(x y)+</td></tr>
	     # <tr><td>H</td><td>horizontal lineto</td><td>x+</td></tr>
	     # <tr><td>V</td><td>vertical lineto</td><td>y+</td></tr>
	     # <tr><td>C</td><td>curveto</td><td>(x1 y1 x2 y2 x y)+</td></tr>
	     # <tr><td>S</td><td>smooth curveto</td><td>(x2 y2 x y)+</td></tr>
	     # <tr><td>Q</td><td>quadratic Bézier curveto</td><td>(x1 y1 x y)+</td></tr>
	     # <tr><td>T</td><td>smooth quadratic Bézier curveto</td><td>(x y)+</td></tr>
	     # <tr><td>A</td><td>elliptical arc</td><td>(rx ry x-axis-rotation large-arc-flag sweep-flag x y)+</td></tr>
	     # <tr><td>R</td><td><a href="http://en.wikipedia.org/wiki/Catmull–Rom_spline#Catmull.E2.80.93Rom_spline">Catmull-Rom curveto</a>*</td><td>x1 y1 (x y)+</td></tr></tbody></table>
	     * * “Catmull-Rom curveto” is a not standard SVG command and added in 2.0 to make life easier.
	     * Note: there is a special case when path consist of just three commands: “M10,10R…z”. In this case path will smoothly connects to its beginning.
	     > Usage
	     | var c = paper.path("M10 10L90 90");
	     | // draw a diagonal line:
	     | // move to 10,10, line to 90,90
	     * For example of path strings, check out these icons: http://raphaeljs.com/icons/
	    \*/
	    paperproto.path = function (pathString) {
	        pathString && !R.is(pathString, string) && !R.is(pathString[0], array) && (pathString += E);
	        var out = R._engine.path(R.format[apply](R, arguments), this);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.image
	     [ method ]
	     **
	     * Embeds an image into the surface.
	     **
	     > Parameters
	     **
	     - src (string) URI of the source image
	     - x (number) x coordinate position
	     - y (number) y coordinate position
	     - width (number) width of the image
	     - height (number) height of the image
	     = (object) Raphaël element object with type “image”
	     **
	     > Usage
	     | var c = paper.image("apple.png", 10, 10, 80, 80);
	    \*/
	    paperproto.image = function (src, x, y, w, h) {
	        var out = R._engine.image(this, src || "about:blank", x || 0, y || 0, w || 0, h || 0);
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.text
	     [ method ]
	     **
	     * Draws a text string. If you need line breaks, put “\n” in the string.
	     **
	     > Parameters
	     **
	     - x (number) x coordinate position
	     - y (number) y coordinate position
	     - text (string) The text string to draw
	     = (object) Raphaël element object with type “text”
	     **
	     > Usage
	     | var t = paper.text(50, 50, "Raphaël\nkicks\nbutt!");
	    \*/
	    paperproto.text = function (x, y, text) {
	        var out = R._engine.text(this, x || 0, y || 0, Str(text));
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Paper.set
	     [ method ]
	     **
	     * Creates array-like object to keep and operate several elements at once.
	     * Warning: it doesn’t create any elements for itself in the page, it just groups existing elements.
	     * Sets act as pseudo elements — all methods available to an element can be used on a set.
	     = (object) array-like object that represents set of elements
	     **
	     > Usage
	     | var st = paper.set();
	     | st.push(
	     |     paper.circle(10, 10, 5),
	     |     paper.circle(30, 10, 5)
	     | );
	     | st.attr({fill: "red"}); // changes the fill of both circles
	    \*/
	    paperproto.set = function (itemsArray) {
	        !R.is(itemsArray, "array") && (itemsArray = Array.prototype.splice.call(arguments, 0, arguments.length));
	        var out = new Set(itemsArray);
	        this.__set__ && this.__set__.push(out);
	        out["paper"] = this;
	        out["type"] = "set";
	        return out;
	    };
	    /*\
	     * Paper.setStart
	     [ method ]
	     **
	     * Creates @Paper.set. All elements that will be created after calling this method and before calling
	     * @Paper.setFinish will be added to the set.
	     **
	     > Usage
	     | paper.setStart();
	     | paper.circle(10, 10, 5),
	     | paper.circle(30, 10, 5)
	     | var st = paper.setFinish();
	     | st.attr({fill: "red"}); // changes the fill of both circles
	    \*/
	    paperproto.setStart = function (set) {
	        this.__set__ = set || this.set();
	    };
	    /*\
	     * Paper.setFinish
	     [ method ]
	     **
	     * See @Paper.setStart. This method finishes catching and returns resulting set.
	     **
	     = (object) set
	    \*/
	    paperproto.setFinish = function (set) {
	        var out = this.__set__;
	        delete this.__set__;
	        return out;
	    };
	    /*\
	     * Paper.getSize
	     [ method ]
	     **
	     * Obtains current paper actual size.
	     **
	     = (object)
	     \*/
	    paperproto.getSize = function () {
	        var container = this.canvas.parentNode;
	        return {
	            width: container.offsetWidth,
	            height: container.offsetHeight
	                };
	        };
	    /*\
	     * Paper.setSize
	     [ method ]
	     **
	     * If you need to change dimensions of the canvas call this method
	     **
	     > Parameters
	     **
	     - width (number) new width of the canvas
	     - height (number) new height of the canvas
	    \*/
	    paperproto.setSize = function (width, height) {
	        return R._engine.setSize.call(this, width, height);
	    };
	    /*\
	     * Paper.setViewBox
	     [ method ]
	     **
	     * Sets the view box of the paper. Practically it gives you ability to zoom and pan whole paper surface by
	     * specifying new boundaries.
	     **
	     > Parameters
	     **
	     - x (number) new x position, default is `0`
	     - y (number) new y position, default is `0`
	     - w (number) new width of the canvas
	     - h (number) new height of the canvas
	     - fit (boolean) `true` if you want graphics to fit into new boundary box
	    \*/
	    paperproto.setViewBox = function (x, y, w, h, fit) {
	        return R._engine.setViewBox.call(this, x, y, w, h, fit);
	    };
	    /*\
	     * Paper.top
	     [ property ]
	     **
	     * Points to the topmost element on the paper
	    \*/
	    /*\
	     * Paper.bottom
	     [ property ]
	     **
	     * Points to the bottom element on the paper
	    \*/
	    paperproto.top = paperproto.bottom = null;
	    /*\
	     * Paper.raphael
	     [ property ]
	     **
	     * Points to the @Raphael object/function
	    \*/
	    paperproto.raphael = R;
	    var getOffset = function (elem) {
	        var box = elem.getBoundingClientRect(),
	            doc = elem.ownerDocument,
	            body = doc.body,
	            docElem = doc.documentElement,
	            clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0,
	            top  = box.top  + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop ) - clientTop,
	            left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
	        return {
	            y: top,
	            x: left
	        };
	    };
	    /*\
	     * Paper.getElementByPoint
	     [ method ]
	     **
	     * Returns you topmost element under given point.
	     **
	     = (object) Raphaël element object
	     > Parameters
	     **
	     - x (number) x coordinate from the top left corner of the window
	     - y (number) y coordinate from the top left corner of the window
	     > Usage
	     | paper.getElementByPoint(mouseX, mouseY).attr({stroke: "#f00"});
	    \*/
	    paperproto.getElementByPoint = function (x, y) {
	        var paper = this,
	            svg = paper.canvas,
	            target = g.doc.elementFromPoint(x, y);
	        if (g.win.opera && target.tagName == "svg") {
	            var so = getOffset(svg),
	                sr = svg.createSVGRect();
	            sr.x = x - so.x;
	            sr.y = y - so.y;
	            sr.width = sr.height = 1;
	            var hits = svg.getIntersectionList(sr, null);
	            if (hits.length) {
	                target = hits[hits.length - 1];
	            }
	        }
	        if (!target) {
	            return null;
	        }
	        while (target.parentNode && target != svg.parentNode && !target.raphael) {
	            target = target.parentNode;
	        }
	        target == paper.canvas.parentNode && (target = svg);
	        target = target && target.raphael ? paper.getById(target.raphaelid) : null;
	        return target;
	    };

	    /*\
	     * Paper.getElementsByBBox
	     [ method ]
	     **
	     * Returns set of elements that have an intersecting bounding box
	     **
	     > Parameters
	     **
	     - bbox (object) bbox to check with
	     = (object) @Set
	     \*/
	    paperproto.getElementsByBBox = function (bbox) {
	        var set = this.set();
	        this.forEach(function (el) {
	            if (R.isBBoxIntersect(el.getBBox(), bbox)) {
	                set.push(el);
	            }
	        });
	        return set;
	    };

	    /*\
	     * Paper.getById
	     [ method ]
	     **
	     * Returns you element by its internal ID.
	     **
	     > Parameters
	     **
	     - id (number) id
	     = (object) Raphaël element object
	    \*/
	    paperproto.getById = function (id) {
	        var bot = this.bottom;
	        while (bot) {
	            if (bot.id == id) {
	                return bot;
	            }
	            bot = bot.next;
	        }
	        return null;
	    };
	    /*\
	     * Paper.forEach
	     [ method ]
	     **
	     * Executes given function for each element on the paper
	     *
	     * If callback function returns `false` it will stop loop running.
	     **
	     > Parameters
	     **
	     - callback (function) function to run
	     - thisArg (object) context object for the callback
	     = (object) Paper object
	     > Usage
	     | paper.forEach(function (el) {
	     |     el.attr({ stroke: "blue" });
	     | });
	    \*/
	    paperproto.forEach = function (callback, thisArg) {
	        var bot = this.bottom;
	        while (bot) {
	            if (callback.call(thisArg, bot) === false) {
	                return this;
	            }
	            bot = bot.next;
	        }
	        return this;
	    };
	    /*\
	     * Paper.getElementsByPoint
	     [ method ]
	     **
	     * Returns set of elements that have common point inside
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the point
	     - y (number) y coordinate of the point
	     = (object) @Set
	    \*/
	    paperproto.getElementsByPoint = function (x, y) {
	        var set = this.set();
	        this.forEach(function (el) {
	            if (el.isPointInside(x, y)) {
	                set.push(el);
	            }
	        });
	        return set;
	    };
	    function x_y() {
	        return this.x + S + this.y;
	    }
	    function x_y_w_h() {
	        return this.x + S + this.y + S + this.width + " \xd7 " + this.height;
	    }
	    /*\
	     * Element.isPointInside
	     [ method ]
	     **
	     * Determine if given point is inside this element’s shape
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the point
	     - y (number) y coordinate of the point
	     = (boolean) `true` if point inside the shape
	    \*/
	    elproto.isPointInside = function (x, y) {
	        var rp = this.realPath = getPath[this.type](this);
	        if (this.attr('transform') && this.attr('transform').length) {
	            rp = R.transformPath(rp, this.attr('transform'));
	        }
	        return R.isPointInsidePath(rp, x, y);
	    };
	    /*\
	     * Element.getBBox
	     [ method ]
	     **
	     * Return bounding box for a given element
	     **
	     > Parameters
	     **
	     - isWithoutTransform (boolean) flag, `true` if you want to have bounding box before transformations. Default is `false`.
	     = (object) Bounding box object:
	     o {
	     o     x: (number) top left corner x
	     o     y: (number) top left corner y
	     o     x2: (number) bottom right corner x
	     o     y2: (number) bottom right corner y
	     o     width: (number) width
	     o     height: (number) height
	     o }
	    \*/
	    elproto.getBBox = function (isWithoutTransform) {
	        if (this.removed) {
	            return {};
	        }
	        var _ = this._;
	        if (isWithoutTransform) {
	            if (_.dirty || !_.bboxwt) {
	                this.realPath = getPath[this.type](this);
	                _.bboxwt = pathDimensions(this.realPath);
	                _.bboxwt.toString = x_y_w_h;
	                _.dirty = 0;
	            }
	            return _.bboxwt;
	        }
	        if (_.dirty || _.dirtyT || !_.bbox) {
	            if (_.dirty || !this.realPath) {
	                _.bboxwt = 0;
	                this.realPath = getPath[this.type](this);
	            }
	            _.bbox = pathDimensions(mapPath(this.realPath, this.matrix));
	            _.bbox.toString = x_y_w_h;
	            _.dirty = _.dirtyT = 0;
	        }
	        return _.bbox;
	    };
	    /*\
	     * Element.clone
	     [ method ]
	     **
	     = (object) clone of a given element
	     **
	    \*/
	    elproto.clone = function () {
	        if (this.removed) {
	            return null;
	        }
	        var out = this.paper[this.type]().attr(this.attr());
	        this.__set__ && this.__set__.push(out);
	        return out;
	    };
	    /*\
	     * Element.glow
	     [ method ]
	     **
	     * Return set of elements that create glow-like effect around given element. See @Paper.set.
	     *
	     * Note: Glow is not connected to the element. If you change element attributes it won’t adjust itself.
	     **
	     > Parameters
	     **
	     - glow (object) #optional parameters object with all properties optional:
	     o {
	     o     width (number) size of the glow, default is `10`
	     o     fill (boolean) will it be filled, default is `false`
	     o     opacity (number) opacity, default is `0.5`
	     o     offsetx (number) horizontal offset, default is `0`
	     o     offsety (number) vertical offset, default is `0`
	     o     color (string) glow colour, default is `black`
	     o }
	     = (object) @Paper.set of elements that represents glow
	    \*/
	    elproto.glow = function (glow) {
	        if (this.type == "text") {
	            return null;
	        }
	        glow = glow || {};
	        var s = {
	            width: (glow.width || 10) + (+this.attr("stroke-width") || 1),
	            fill: glow.fill || false,
	            opacity: glow.opacity == null ? .5 : glow.opacity,
	            offsetx: glow.offsetx || 0,
	            offsety: glow.offsety || 0,
	            color: glow.color || "#000"
	        },
	            c = s.width / 2,
	            r = this.paper,
	            out = r.set(),
	            path = this.realPath || getPath[this.type](this);
	        path = this.matrix ? mapPath(path, this.matrix) : path;
	        for (var i = 1; i < c + 1; i++) {
	            out.push(r.path(path).attr({
	                stroke: s.color,
	                fill: s.fill ? s.color : "none",
	                "stroke-linejoin": "round",
	                "stroke-linecap": "round",
	                "stroke-width": +(s.width / c * i).toFixed(3),
	                opacity: +(s.opacity / c).toFixed(3)
	            }));
	        }
	        return out.insertBefore(this).translate(s.offsetx, s.offsety);
	    };
	    var curveslengths = {},
	    getPointAtSegmentLength = function (p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
	        if (length == null) {
	            return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
	        } else {
	            return R.findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, getTatLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length));
	        }
	    },
	    getLengthFactory = function (istotal, subpath) {
	        return function (path, length, onlystart) {
	            path = path2curve(path);
	            var x, y, p, l, sp = "", subpaths = {}, point,
	                len = 0;
	            for (var i = 0, ii = path.length; i < ii; i++) {
	                p = path[i];
	                if (p[0] == "M") {
	                    x = +p[1];
	                    y = +p[2];
	                } else {
	                    l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
	                    if (len + l > length) {
	                        if (subpath && !subpaths.start) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            sp += ["C" + point.start.x, point.start.y, point.m.x, point.m.y, point.x, point.y];
	                            if (onlystart) {return sp;}
	                            subpaths.start = sp;
	                            sp = ["M" + point.x, point.y + "C" + point.n.x, point.n.y, point.end.x, point.end.y, p[5], p[6]].join();
	                            len += l;
	                            x = +p[5];
	                            y = +p[6];
	                            continue;
	                        }
	                        if (!istotal && !subpath) {
	                            point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
	                            return {x: point.x, y: point.y, alpha: point.alpha};
	                        }
	                    }
	                    len += l;
	                    x = +p[5];
	                    y = +p[6];
	                }
	                sp += p.shift() + p;
	            }
	            subpaths.end = sp;
	            point = istotal ? len : subpath ? subpaths : R.findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
	            point.alpha && (point = {x: point.x, y: point.y, alpha: point.alpha});
	            return point;
	        };
	    };
	    var getTotalLength = getLengthFactory(1),
	        getPointAtLength = getLengthFactory(),
	        getSubpathsAtLength = getLengthFactory(0, 1);
	    /*\
	     * Raphael.getTotalLength
	     [ method ]
	     **
	     * Returns length of the given path in pixels.
	     **
	     > Parameters
	     **
	     - path (string) SVG path string.
	     **
	     = (number) length.
	    \*/
	    R.getTotalLength = getTotalLength;
	    /*\
	     * Raphael.getPointAtLength
	     [ method ]
	     **
	     * Return coordinates of the point located at the given length on the given path.
	     **
	     > Parameters
	     **
	     - path (string) SVG path string
	     - length (number)
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate
	     o     y: (number) y coordinate
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    R.getPointAtLength = getPointAtLength;
	    /*\
	     * Raphael.getSubpath
	     [ method ]
	     **
	     * Return subpath of a given path from given length to given length.
	     **
	     > Parameters
	     **
	     - path (string) SVG path string
	     - from (number) position of the start of the segment
	     - to (number) position of the end of the segment
	     **
	     = (string) pathstring for the segment
	    \*/
	    R.getSubpath = function (path, from, to) {
	        if (this.getTotalLength(path) - to < 1e-6) {
	            return getSubpathsAtLength(path, from).end;
	        }
	        var a = getSubpathsAtLength(path, to, 1);
	        return from ? getSubpathsAtLength(a, from).end : a;
	    };
	    /*\
	     * Element.getTotalLength
	     [ method ]
	     **
	     * Returns length of the path in pixels. Only works for element of “path” type.
	     = (number) length.
	    \*/
	    elproto.getTotalLength = function () {
	        var path = this.getPath();
	        if (!path) {
	            return;
	        }

	        if (this.node.getTotalLength) {
	            return this.node.getTotalLength();
	        }

	        return getTotalLength(path);
	    };
	    /*\
	     * Element.getPointAtLength
	     [ method ]
	     **
	     * Return coordinates of the point located at the given length on the given path. Only works for element of “path” type.
	     **
	     > Parameters
	     **
	     - length (number)
	     **
	     = (object) representation of the point:
	     o {
	     o     x: (number) x coordinate
	     o     y: (number) y coordinate
	     o     alpha: (number) angle of derivative
	     o }
	    \*/
	    elproto.getPointAtLength = function (length) {
	        var path = this.getPath();
	        if (!path) {
	            return;
	        }

	        return getPointAtLength(path, length);
	    };
	    /*\
	     * Element.getPath
	     [ method ]
	     **
	     * Returns path of the element. Only works for elements of “path” type and simple elements like circle.
	     = (object) path
	     **
	    \*/
	    elproto.getPath = function () {
	        var path,
	            getPath = R._getPath[this.type];

	        if (this.type == "text" || this.type == "set") {
	            return;
	        }

	        if (getPath) {
	            path = getPath(this);
	        }

	        return path;
	    };
	    /*\
	     * Element.getSubpath
	     [ method ]
	     **
	     * Return subpath of a given element from given length to given length. Only works for element of “path” type.
	     **
	     > Parameters
	     **
	     - from (number) position of the start of the segment
	     - to (number) position of the end of the segment
	     **
	     = (string) pathstring for the segment
	    \*/
	    elproto.getSubpath = function (from, to) {
	        var path = this.getPath();
	        if (!path) {
	            return;
	        }

	        return R.getSubpath(path, from, to);
	    };
	    /*\
	     * Raphael.easing_formulas
	     [ property ]
	     **
	     * Object that contains easing formulas for animation. You could extend it with your own. By default it has following list of easing:
	     # <ul>
	     #     <li>“linear”</li>
	     #     <li>“&lt;” or “easeIn” or “ease-in”</li>
	     #     <li>“>” or “easeOut” or “ease-out”</li>
	     #     <li>“&lt;>” or “easeInOut” or “ease-in-out”</li>
	     #     <li>“backIn” or “back-in”</li>
	     #     <li>“backOut” or “back-out”</li>
	     #     <li>“elastic”</li>
	     #     <li>“bounce”</li>
	     # </ul>
	     # <p>See also <a href="http://raphaeljs.com/easing.html">Easing demo</a>.</p>
	    \*/
	    var ef = R.easing_formulas = {
	        linear: function (n) {
	            return n;
	        },
	        "<": function (n) {
	            return pow(n, 1.7);
	        },
	        ">": function (n) {
	            return pow(n, .48);
	        },
	        "<>": function (n) {
	            var q = .48 - n / 1.04,
	                Q = math.sqrt(.1734 + q * q),
	                x = Q - q,
	                X = pow(abs(x), 1 / 3) * (x < 0 ? -1 : 1),
	                y = -Q - q,
	                Y = pow(abs(y), 1 / 3) * (y < 0 ? -1 : 1),
	                t = X + Y + .5;
	            return (1 - t) * 3 * t * t + t * t * t;
	        },
	        backIn: function (n) {
	            var s = 1.70158;
	            return n * n * ((s + 1) * n - s);
	        },
	        backOut: function (n) {
	            n = n - 1;
	            var s = 1.70158;
	            return n * n * ((s + 1) * n + s) + 1;
	        },
	        elastic: function (n) {
	            if (n == !!n) {
	                return n;
	            }
	            return pow(2, -10 * n) * math.sin((n - .075) * (2 * PI) / .3) + 1;
	        },
	        bounce: function (n) {
	            var s = 7.5625,
	                p = 2.75,
	                l;
	            if (n < (1 / p)) {
	                l = s * n * n;
	            } else {
	                if (n < (2 / p)) {
	                    n -= (1.5 / p);
	                    l = s * n * n + .75;
	                } else {
	                    if (n < (2.5 / p)) {
	                        n -= (2.25 / p);
	                        l = s * n * n + .9375;
	                    } else {
	                        n -= (2.625 / p);
	                        l = s * n * n + .984375;
	                    }
	                }
	            }
	            return l;
	        }
	    };
	    ef.easeIn = ef["ease-in"] = ef["<"];
	    ef.easeOut = ef["ease-out"] = ef[">"];
	    ef.easeInOut = ef["ease-in-out"] = ef["<>"];
	    ef["back-in"] = ef.backIn;
	    ef["back-out"] = ef.backOut;

	    var animationElements = [],
	        requestAnimFrame = window.requestAnimationFrame       ||
	                           window.webkitRequestAnimationFrame ||
	                           window.mozRequestAnimationFrame    ||
	                           window.oRequestAnimationFrame      ||
	                           window.msRequestAnimationFrame     ||
	                           function (callback) {
	                               setTimeout(callback, 16);
	                           },
	        animation = function () {
	            var Now = +new Date,
	                l = 0;
	            for (; l < animationElements.length; l++) {
	                var e = animationElements[l];
	                if (e.el.removed || e.paused) {
	                    continue;
	                }
	                var time = Now - e.start,
	                    ms = e.ms,
	                    easing = e.easing,
	                    from = e.from,
	                    diff = e.diff,
	                    to = e.to,
	                    t = e.t,
	                    that = e.el,
	                    set = {},
	                    now,
	                    init = {},
	                    key;
	                if (e.initstatus) {
	                    time = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * ms;
	                    e.status = e.initstatus;
	                    delete e.initstatus;
	                    e.stop && animationElements.splice(l--, 1);
	                } else {
	                    e.status = (e.prev + (e.percent - e.prev) * (time / ms)) / e.anim.top;
	                }
	                if (time < 0) {
	                    continue;
	                }
	                if (time < ms) {
	                    var pos = easing(time / ms);
	                    for (var attr in from) if (from[has](attr)) {
	                        switch (availableAnimAttrs[attr]) {
	                            case nu:
	                                now = +from[attr] + pos * ms * diff[attr];
	                                break;
	                            case "colour":
	                                now = "rgb(" + [
	                                    upto255(round(from[attr].r + pos * ms * diff[attr].r)),
	                                    upto255(round(from[attr].g + pos * ms * diff[attr].g)),
	                                    upto255(round(from[attr].b + pos * ms * diff[attr].b))
	                                ].join(",") + ")";
	                                break;
	                            case "path":
	                                now = [];
	                                for (var i = 0, ii = from[attr].length; i < ii; i++) {
	                                    now[i] = [from[attr][i][0]];
	                                    for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                        now[i][j] = +from[attr][i][j] + pos * ms * diff[attr][i][j];
	                                    }
	                                    now[i] = now[i].join(S);
	                                }
	                                now = now.join(S);
	                                break;
	                            case "transform":
	                                if (diff[attr].real) {
	                                    now = [];
	                                    for (i = 0, ii = from[attr].length; i < ii; i++) {
	                                        now[i] = [from[attr][i][0]];
	                                        for (j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                            now[i][j] = from[attr][i][j] + pos * ms * diff[attr][i][j];
	                                        }
	                                    }
	                                } else {
	                                    var get = function (i) {
	                                        return +from[attr][i] + pos * ms * diff[attr][i];
	                                    };
	                                    // now = [["r", get(2), 0, 0], ["t", get(3), get(4)], ["s", get(0), get(1), 0, 0]];
	                                    now = [["m", get(0), get(1), get(2), get(3), get(4), get(5)]];
	                                }
	                                break;
	                            case "csv":
	                                if (attr == "clip-rect") {
	                                    now = [];
	                                    i = 4;
	                                    while (i--) {
	                                        now[i] = +from[attr][i] + pos * ms * diff[attr][i];
	                                    }
	                                }
	                                break;
	                            default:
	                                var from2 = [][concat](from[attr]);
	                                now = [];
	                                i = that.paper.customAttributes[attr].length;
	                                while (i--) {
	                                    now[i] = +from2[i] + pos * ms * diff[attr][i];
	                                }
	                                break;
	                        }
	                        set[attr] = now;
	                    }
	                    that.attr(set);
	                    (function (id, that, anim) {
	                        setTimeout(function () {
	                            eve("raphael.anim.frame." + id, that, anim);
	                        });
	                    })(that.id, that, e.anim);
	                } else {
	                    (function(f, el, a) {
	                        setTimeout(function() {
	                            eve("raphael.anim.frame." + el.id, el, a);
	                            eve("raphael.anim.finish." + el.id, el, a);
	                            R.is(f, "function") && f.call(el);
	                        });
	                    })(e.callback, that, e.anim);
	                    that.attr(to);
	                    animationElements.splice(l--, 1);
	                    if (e.repeat > 1 && !e.next) {
	                        for (key in to) if (to[has](key)) {
	                            init[key] = e.totalOrigin[key];
	                        }
	                        e.el.attr(init);
	                        runAnimation(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1);
	                    }
	                    if (e.next && !e.stop) {
	                        runAnimation(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat);
	                    }
	                }
	            }
	            animationElements.length && requestAnimFrame(animation);
	        },
	        upto255 = function (color) {
	            return color > 255 ? 255 : color < 0 ? 0 : color;
	        };
	    /*\
	     * Element.animateWith
	     [ method ]
	     **
	     * Acts similar to @Element.animate, but ensure that given animation runs in sync with another given element.
	     **
	     > Parameters
	     **
	     - el (object) element to sync with
	     - anim (object) animation to sync with
	     - params (object) #optional final attributes for the element, see also @Element.attr
	     - ms (number) #optional number of milliseconds for animation to run
	     - easing (string) #optional easing type. Accept on of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
	     - callback (function) #optional callback function. Will be called at the end of animation.
	     * or
	     - element (object) element to sync with
	     - anim (object) animation to sync with
	     - animation (object) #optional animation object, see @Raphael.animation
	     **
	     = (object) original element
	    \*/
	    elproto.animateWith = function (el, anim, params, ms, easing, callback) {
	        var element = this;
	        if (element.removed) {
	            callback && callback.call(element);
	            return element;
	        }
	        var a = params instanceof Animation ? params : R.animation(params, ms, easing, callback),
	            x, y;
	        runAnimation(a, element, a.percents[0], null, element.attr());
	        for (var i = 0, ii = animationElements.length; i < ii; i++) {
	            if (animationElements[i].anim == anim && animationElements[i].el == el) {
	                animationElements[ii - 1].start = animationElements[i].start;
	                break;
	            }
	        }
	        return element;
	        //
	        //
	        // var a = params ? R.animation(params, ms, easing, callback) : anim,
	        //     status = element.status(anim);
	        // return this.animate(a).status(a, status * anim.ms / a.ms);
	    };
	    function CubicBezierAtTime(t, p1x, p1y, p2x, p2y, duration) {
	        var cx = 3 * p1x,
	            bx = 3 * (p2x - p1x) - cx,
	            ax = 1 - cx - bx,
	            cy = 3 * p1y,
	            by = 3 * (p2y - p1y) - cy,
	            ay = 1 - cy - by;
	        function sampleCurveX(t) {
	            return ((ax * t + bx) * t + cx) * t;
	        }
	        function solve(x, epsilon) {
	            var t = solveCurveX(x, epsilon);
	            return ((ay * t + by) * t + cy) * t;
	        }
	        function solveCurveX(x, epsilon) {
	            var t0, t1, t2, x2, d2, i;
	            for(t2 = x, i = 0; i < 8; i++) {
	                x2 = sampleCurveX(t2) - x;
	                if (abs(x2) < epsilon) {
	                    return t2;
	                }
	                d2 = (3 * ax * t2 + 2 * bx) * t2 + cx;
	                if (abs(d2) < 1e-6) {
	                    break;
	                }
	                t2 = t2 - x2 / d2;
	            }
	            t0 = 0;
	            t1 = 1;
	            t2 = x;
	            if (t2 < t0) {
	                return t0;
	            }
	            if (t2 > t1) {
	                return t1;
	            }
	            while (t0 < t1) {
	                x2 = sampleCurveX(t2);
	                if (abs(x2 - x) < epsilon) {
	                    return t2;
	                }
	                if (x > x2) {
	                    t0 = t2;
	                } else {
	                    t1 = t2;
	                }
	                t2 = (t1 - t0) / 2 + t0;
	            }
	            return t2;
	        }
	        return solve(t, 1 / (200 * duration));
	    }
	    elproto.onAnimation = function (f) {
	        f ? eve.on("raphael.anim.frame." + this.id, f) : eve.unbind("raphael.anim.frame." + this.id);
	        return this;
	    };
	    function Animation(anim, ms) {
	        var percents = [],
	            newAnim = {};
	        this.ms = ms;
	        this.times = 1;
	        if (anim) {
	            for (var attr in anim) if (anim[has](attr)) {
	                newAnim[toFloat(attr)] = anim[attr];
	                percents.push(toFloat(attr));
	            }
	            percents.sort(sortByNumber);
	        }
	        this.anim = newAnim;
	        this.top = percents[percents.length - 1];
	        this.percents = percents;
	    }
	    /*\
	     * Animation.delay
	     [ method ]
	     **
	     * Creates a copy of existing animation object with given delay.
	     **
	     > Parameters
	     **
	     - delay (number) number of ms to pass between animation start and actual animation
	     **
	     = (object) new altered Animation object
	     | var anim = Raphael.animation({cx: 10, cy: 20}, 2e3);
	     | circle1.animate(anim); // run the given animation immediately
	     | circle2.animate(anim.delay(500)); // run the given animation after 500 ms
	    \*/
	    Animation.prototype.delay = function (delay) {
	        var a = new Animation(this.anim, this.ms);
	        a.times = this.times;
	        a.del = +delay || 0;
	        return a;
	    };
	    /*\
	     * Animation.repeat
	     [ method ]
	     **
	     * Creates a copy of existing animation object with given repetition.
	     **
	     > Parameters
	     **
	     - repeat (number) number iterations of animation. For infinite animation pass `Infinity`
	     **
	     = (object) new altered Animation object
	    \*/
	    Animation.prototype.repeat = function (times) {
	        var a = new Animation(this.anim, this.ms);
	        a.del = this.del;
	        a.times = math.floor(mmax(times, 0)) || 1;
	        return a;
	    };
	    function runAnimation(anim, element, percent, status, totalOrigin, times) {
	        percent = toFloat(percent);
	        var params,
	            isInAnim,
	            isInAnimSet,
	            percents = [],
	            next,
	            prev,
	            timestamp,
	            ms = anim.ms,
	            from = {},
	            to = {},
	            diff = {};
	        if (status) {
	            for (i = 0, ii = animationElements.length; i < ii; i++) {
	                var e = animationElements[i];
	                if (e.el.id == element.id && e.anim == anim) {
	                    if (e.percent != percent) {
	                        animationElements.splice(i, 1);
	                        isInAnimSet = 1;
	                    } else {
	                        isInAnim = e;
	                    }
	                    element.attr(e.totalOrigin);
	                    break;
	                }
	            }
	        } else {
	            status = +to; // NaN
	        }
	        for (var i = 0, ii = anim.percents.length; i < ii; i++) {
	            if (anim.percents[i] == percent || anim.percents[i] > status * anim.top) {
	                percent = anim.percents[i];
	                prev = anim.percents[i - 1] || 0;
	                ms = ms / anim.top * (percent - prev);
	                next = anim.percents[i + 1];
	                params = anim.anim[percent];
	                break;
	            } else if (status) {
	                element.attr(anim.anim[anim.percents[i]]);
	            }
	        }
	        if (!params) {
	            return;
	        }
	        if (!isInAnim) {
	            for (var attr in params) if (params[has](attr)) {
	                if (availableAnimAttrs[has](attr) || element.paper.customAttributes[has](attr)) {
	                    from[attr] = element.attr(attr);
	                    (from[attr] == null) && (from[attr] = availableAttrs[attr]);
	                    to[attr] = params[attr];
	                    switch (availableAnimAttrs[attr]) {
	                        case nu:
	                            diff[attr] = (to[attr] - from[attr]) / ms;
	                            break;
	                        case "colour":
	                            from[attr] = R.getRGB(from[attr]);
	                            var toColour = R.getRGB(to[attr]);
	                            diff[attr] = {
	                                r: (toColour.r - from[attr].r) / ms,
	                                g: (toColour.g - from[attr].g) / ms,
	                                b: (toColour.b - from[attr].b) / ms
	                            };
	                            break;
	                        case "path":
	                            var pathes = path2curve(from[attr], to[attr]),
	                                toPath = pathes[1];
	                            from[attr] = pathes[0];
	                            diff[attr] = [];
	                            for (i = 0, ii = from[attr].length; i < ii; i++) {
	                                diff[attr][i] = [0];
	                                for (var j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                    diff[attr][i][j] = (toPath[i][j] - from[attr][i][j]) / ms;
	                                }
	                            }
	                            break;
	                        case "transform":
	                            var _ = element._,
	                                eq = equaliseTransform(_[attr], to[attr]);
	                            if (eq) {
	                                from[attr] = eq.from;
	                                to[attr] = eq.to;
	                                diff[attr] = [];
	                                diff[attr].real = true;
	                                for (i = 0, ii = from[attr].length; i < ii; i++) {
	                                    diff[attr][i] = [from[attr][i][0]];
	                                    for (j = 1, jj = from[attr][i].length; j < jj; j++) {
	                                        diff[attr][i][j] = (to[attr][i][j] - from[attr][i][j]) / ms;
	                                    }
	                                }
	                            } else {
	                                var m = (element.matrix || new Matrix),
	                                    to2 = {
	                                        _: {transform: _.transform},
	                                        getBBox: function () {
	                                            return element.getBBox(1);
	                                        }
	                                    };
	                                from[attr] = [
	                                    m.a,
	                                    m.b,
	                                    m.c,
	                                    m.d,
	                                    m.e,
	                                    m.f
	                                ];
	                                extractTransform(to2, to[attr]);
	                                to[attr] = to2._.transform;
	                                diff[attr] = [
	                                    (to2.matrix.a - m.a) / ms,
	                                    (to2.matrix.b - m.b) / ms,
	                                    (to2.matrix.c - m.c) / ms,
	                                    (to2.matrix.d - m.d) / ms,
	                                    (to2.matrix.e - m.e) / ms,
	                                    (to2.matrix.f - m.f) / ms
	                                ];
	                                // from[attr] = [_.sx, _.sy, _.deg, _.dx, _.dy];
	                                // var to2 = {_:{}, getBBox: function () { return element.getBBox(); }};
	                                // extractTransform(to2, to[attr]);
	                                // diff[attr] = [
	                                //     (to2._.sx - _.sx) / ms,
	                                //     (to2._.sy - _.sy) / ms,
	                                //     (to2._.deg - _.deg) / ms,
	                                //     (to2._.dx - _.dx) / ms,
	                                //     (to2._.dy - _.dy) / ms
	                                // ];
	                            }
	                            break;
	                        case "csv":
	                            var values = Str(params[attr])[split](separator),
	                                from2 = Str(from[attr])[split](separator);
	                            if (attr == "clip-rect") {
	                                from[attr] = from2;
	                                diff[attr] = [];
	                                i = from2.length;
	                                while (i--) {
	                                    diff[attr][i] = (values[i] - from[attr][i]) / ms;
	                                }
	                            }
	                            to[attr] = values;
	                            break;
	                        default:
	                            values = [][concat](params[attr]);
	                            from2 = [][concat](from[attr]);
	                            diff[attr] = [];
	                            i = element.paper.customAttributes[attr].length;
	                            while (i--) {
	                                diff[attr][i] = ((values[i] || 0) - (from2[i] || 0)) / ms;
	                            }
	                            break;
	                    }
	                }
	            }
	            var easing = params.easing,
	                easyeasy = R.easing_formulas[easing];
	            if (!easyeasy) {
	                easyeasy = Str(easing).match(bezierrg);
	                if (easyeasy && easyeasy.length == 5) {
	                    var curve = easyeasy;
	                    easyeasy = function (t) {
	                        return CubicBezierAtTime(t, +curve[1], +curve[2], +curve[3], +curve[4], ms);
	                    };
	                } else {
	                    easyeasy = pipe;
	                }
	            }
	            timestamp = params.start || anim.start || +new Date;
	            e = {
	                anim: anim,
	                percent: percent,
	                timestamp: timestamp,
	                start: timestamp + (anim.del || 0),
	                status: 0,
	                initstatus: status || 0,
	                stop: false,
	                ms: ms,
	                easing: easyeasy,
	                from: from,
	                diff: diff,
	                to: to,
	                el: element,
	                callback: params.callback,
	                prev: prev,
	                next: next,
	                repeat: times || anim.times,
	                origin: element.attr(),
	                totalOrigin: totalOrigin
	            };
	            animationElements.push(e);
	            if (status && !isInAnim && !isInAnimSet) {
	                e.stop = true;
	                e.start = new Date - ms * status;
	                if (animationElements.length == 1) {
	                    return animation();
	                }
	            }
	            if (isInAnimSet) {
	                e.start = new Date - e.ms * status;
	            }
	            animationElements.length == 1 && requestAnimFrame(animation);
	        } else {
	            isInAnim.initstatus = status;
	            isInAnim.start = new Date - isInAnim.ms * status;
	        }
	        eve("raphael.anim.start." + element.id, element, anim);
	    }
	    /*\
	     * Raphael.animation
	     [ method ]
	     **
	     * Creates an animation object that can be passed to the @Element.animate or @Element.animateWith methods.
	     * See also @Animation.delay and @Animation.repeat methods.
	     **
	     > Parameters
	     **
	     - params (object) final attributes for the element, see also @Element.attr
	     - ms (number) number of milliseconds for animation to run
	     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
	     - callback (function) #optional callback function. Will be called at the end of animation.
	     **
	     = (object) @Animation
	    \*/
	    R.animation = function (params, ms, easing, callback) {
	        if (params instanceof Animation) {
	            return params;
	        }
	        if (R.is(easing, "function") || !easing) {
	            callback = callback || easing || null;
	            easing = null;
	        }
	        params = Object(params);
	        ms = +ms || 0;
	        var p = {},
	            json,
	            attr;
	        for (attr in params) if (params[has](attr) && toFloat(attr) != attr && toFloat(attr) + "%" != attr) {
	            json = true;
	            p[attr] = params[attr];
	        }
	        if (!json) {
	            // if percent-like syntax is used and end-of-all animation callback used
	            if(callback){
	                // find the last one
	                var lastKey = 0;
	                for(var i in params){
	                    var percent = toInt(i);
	                    if(params[has](i) && percent > lastKey){
	                        lastKey = percent;
	                    }
	                }
	                lastKey += '%';
	                // if already defined callback in the last keyframe, skip
	                !params[lastKey].callback && (params[lastKey].callback = callback);
	            }
	          return new Animation(params, ms);
	        } else {
	            easing && (p.easing = easing);
	            callback && (p.callback = callback);
	            return new Animation({100: p}, ms);
	        }
	    };
	    /*\
	     * Element.animate
	     [ method ]
	     **
	     * Creates and starts animation for given element.
	     **
	     > Parameters
	     **
	     - params (object) final attributes for the element, see also @Element.attr
	     - ms (number) number of milliseconds for animation to run
	     - easing (string) #optional easing type. Accept one of @Raphael.easing_formulas or CSS format: `cubic&#x2010;bezier(XX,&#160;XX,&#160;XX,&#160;XX)`
	     - callback (function) #optional callback function. Will be called at the end of animation.
	     * or
	     - animation (object) animation object, see @Raphael.animation
	     **
	     = (object) original element
	    \*/
	    elproto.animate = function (params, ms, easing, callback) {
	        var element = this;
	        if (element.removed) {
	            callback && callback.call(element);
	            return element;
	        }
	        var anim = params instanceof Animation ? params : R.animation(params, ms, easing, callback);
	        runAnimation(anim, element, anim.percents[0], null, element.attr());
	        return element;
	    };
	    /*\
	     * Element.setTime
	     [ method ]
	     **
	     * Sets the status of animation of the element in milliseconds. Similar to @Element.status method.
	     **
	     > Parameters
	     **
	     - anim (object) animation object
	     - value (number) number of milliseconds from the beginning of the animation
	     **
	     = (object) original element if `value` is specified
	     * Note, that during animation following events are triggered:
	     *
	     * On each animation frame event `anim.frame.<id>`, on start `anim.start.<id>` and on end `anim.finish.<id>`.
	    \*/
	    elproto.setTime = function (anim, value) {
	        if (anim && value != null) {
	            this.status(anim, mmin(value, anim.ms) / anim.ms);
	        }
	        return this;
	    };
	    /*\
	     * Element.status
	     [ method ]
	     **
	     * Gets or sets the status of animation of the element.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     - value (number) #optional 0 – 1. If specified, method works like a setter and sets the status of a given animation to the value. This will cause animation to jump to the given position.
	     **
	     = (number) status
	     * or
	     = (array) status if `anim` is not specified. Array of objects in format:
	     o {
	     o     anim: (object) animation object
	     o     status: (number) status
	     o }
	     * or
	     = (object) original element if `value` is specified
	    \*/
	    elproto.status = function (anim, value) {
	        var out = [],
	            i = 0,
	            len,
	            e;
	        if (value != null) {
	            runAnimation(anim, this, -1, mmin(value, 1));
	            return this;
	        } else {
	            len = animationElements.length;
	            for (; i < len; i++) {
	                e = animationElements[i];
	                if (e.el.id == this.id && (!anim || e.anim == anim)) {
	                    if (anim) {
	                        return e.status;
	                    }
	                    out.push({
	                        anim: e.anim,
	                        status: e.status
	                    });
	                }
	            }
	            if (anim) {
	                return 0;
	            }
	            return out;
	        }
	    };
	    /*\
	     * Element.pause
	     [ method ]
	     **
	     * Stops animation of the element with ability to resume it later on.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     **
	     = (object) original element
	    \*/
	    elproto.pause = function (anim) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
	            if (eve("raphael.anim.pause." + this.id, this, animationElements[i].anim) !== false) {
	                animationElements[i].paused = true;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.resume
	     [ method ]
	     **
	     * Resumes animation if it was paused with @Element.pause method.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     **
	     = (object) original element
	    \*/
	    elproto.resume = function (anim) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
	            var e = animationElements[i];
	            if (eve("raphael.anim.resume." + this.id, this, e.anim) !== false) {
	                delete e.paused;
	                this.status(e.anim, e.status);
	            }
	        }
	        return this;
	    };
	    /*\
	     * Element.stop
	     [ method ]
	     **
	     * Stops animation of the element.
	     **
	     > Parameters
	     **
	     - anim (object) #optional animation object
	     **
	     = (object) original element
	    \*/
	    elproto.stop = function (anim) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.id == this.id && (!anim || animationElements[i].anim == anim)) {
	            if (eve("raphael.anim.stop." + this.id, this, animationElements[i].anim) !== false) {
	                animationElements.splice(i--, 1);
	            }
	        }
	        return this;
	    };
	    function stopAnimation(paper) {
	        for (var i = 0; i < animationElements.length; i++) if (animationElements[i].el.paper == paper) {
	            animationElements.splice(i--, 1);
	        }
	    }
	    eve.on("raphael.remove", stopAnimation);
	    eve.on("raphael.clear", stopAnimation);
	    elproto.toString = function () {
	        return "Rapha\xebl\u2019s object";
	    };

	    // Set
	    var Set = function (items) {
	        this.items = [];
	        this.length = 0;
	        this.type = "set";
	        if (items) {
	            for (var i = 0, ii = items.length; i < ii; i++) {
	                if (items[i] && (items[i].constructor == elproto.constructor || items[i].constructor == Set)) {
	                    this[this.items.length] = this.items[this.items.length] = items[i];
	                    this.length++;
	                }
	            }
	        }
	    },
	    setproto = Set.prototype;
	    /*\
	     * Set.push
	     [ method ]
	     **
	     * Adds each argument to the current set.
	     = (object) original element
	    \*/
	    setproto.push = function () {
	        var item,
	            len;
	        for (var i = 0, ii = arguments.length; i < ii; i++) {
	            item = arguments[i];
	            if (item && (item.constructor == elproto.constructor || item.constructor == Set)) {
	                len = this.items.length;
	                this[len] = this.items[len] = item;
	                this.length++;
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.pop
	     [ method ]
	     **
	     * Removes last element and returns it.
	     = (object) element
	    \*/
	    setproto.pop = function () {
	        this.length && delete this[this.length--];
	        return this.items.pop();
	    };
	    /*\
	     * Set.forEach
	     [ method ]
	     **
	     * Executes given function for each element in the set.
	     *
	     * If function returns `false` it will stop loop running.
	     **
	     > Parameters
	     **
	     - callback (function) function to run
	     - thisArg (object) context object for the callback
	     = (object) Set object
	    \*/
	    setproto.forEach = function (callback, thisArg) {
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            if (callback.call(thisArg, this.items[i], i) === false) {
	                return this;
	            }
	        }
	        return this;
	    };
	    for (var method in elproto) if (elproto[has](method)) {
	        setproto[method] = (function (methodname) {
	            return function () {
	                var arg = arguments;
	                return this.forEach(function (el) {
	                    el[methodname][apply](el, arg);
	                });
	            };
	        })(method);
	    }
	    setproto.attr = function (name, value) {
	        if (name && R.is(name, array) && R.is(name[0], "object")) {
	            for (var j = 0, jj = name.length; j < jj; j++) {
	                this.items[j].attr(name[j]);
	            }
	        } else {
	            for (var i = 0, ii = this.items.length; i < ii; i++) {
	                this.items[i].attr(name, value);
	            }
	        }
	        return this;
	    };
	    /*\
	     * Set.clear
	     [ method ]
	     **
	     * Removes all elements from the set
	    \*/
	    setproto.clear = function () {
	        while (this.length) {
	            this.pop();
	        }
	    };
	    /*\
	     * Set.splice
	     [ method ]
	     **
	     * Removes given element from the set
	     **
	     > Parameters
	     **
	     - index (number) position of the deletion
	     - count (number) number of element to remove
	     - insertion… (object) #optional elements to insert
	     = (object) set elements that were deleted
	    \*/
	    setproto.splice = function (index, count, insertion) {
	        index = index < 0 ? mmax(this.length + index, 0) : index;
	        count = mmax(0, mmin(this.length - index, count));
	        var tail = [],
	            todel = [],
	            args = [],
	            i;
	        for (i = 2; i < arguments.length; i++) {
	            args.push(arguments[i]);
	        }
	        for (i = 0; i < count; i++) {
	            todel.push(this[index + i]);
	        }
	        for (; i < this.length - index; i++) {
	            tail.push(this[index + i]);
	        }
	        var arglen = args.length;
	        for (i = 0; i < arglen + tail.length; i++) {
	            this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
	        }
	        i = this.items.length = this.length -= count - arglen;
	        while (this[i]) {
	            delete this[i++];
	        }
	        return new Set(todel);
	    };
	    /*\
	     * Set.exclude
	     [ method ]
	     **
	     * Removes given element from the set
	     **
	     > Parameters
	     **
	     - element (object) element to remove
	     = (boolean) `true` if object was found & removed from the set
	    \*/
	    setproto.exclude = function (el) {
	        for (var i = 0, ii = this.length; i < ii; i++) if (this[i] == el) {
	            this.splice(i, 1);
	            return true;
	        }
	    };
	    setproto.animate = function (params, ms, easing, callback) {
	        (R.is(easing, "function") || !easing) && (callback = easing || null);
	        var len = this.items.length,
	            i = len,
	            item,
	            set = this,
	            collector;
	        if (!len) {
	            return this;
	        }
	        callback && (collector = function () {
	            !--len && callback.call(set);
	        });
	        easing = R.is(easing, string) ? easing : collector;
	        var anim = R.animation(params, ms, easing, collector);
	        item = this.items[--i].animate(anim);
	        while (i--) {
	            this.items[i] && !this.items[i].removed && this.items[i].animateWith(item, anim, anim);
	            (this.items[i] && !this.items[i].removed) || len--;
	        }
	        return this;
	    };
	    setproto.insertAfter = function (el) {
	        var i = this.items.length;
	        while (i--) {
	            this.items[i].insertAfter(el);
	        }
	        return this;
	    };
	    setproto.getBBox = function () {
	        var x = [],
	            y = [],
	            x2 = [],
	            y2 = [];
	        for (var i = this.items.length; i--;) if (!this.items[i].removed) {
	            var box = this.items[i].getBBox();
	            x.push(box.x);
	            y.push(box.y);
	            x2.push(box.x + box.width);
	            y2.push(box.y + box.height);
	        }
	        x = mmin[apply](0, x);
	        y = mmin[apply](0, y);
	        x2 = mmax[apply](0, x2);
	        y2 = mmax[apply](0, y2);
	        return {
	            x: x,
	            y: y,
	            x2: x2,
	            y2: y2,
	            width: x2 - x,
	            height: y2 - y
	        };
	    };
	    setproto.clone = function (s) {
	        s = this.paper.set();
	        for (var i = 0, ii = this.items.length; i < ii; i++) {
	            s.push(this.items[i].clone());
	        }
	        return s;
	    };
	    setproto.toString = function () {
	        return "Rapha\xebl\u2018s set";
	    };

	    setproto.glow = function(glowConfig) {
	        var ret = this.paper.set();
	        this.forEach(function(shape, index){
	            var g = shape.glow(glowConfig);
	            if(g != null){
	                g.forEach(function(shape2, index2){
	                    ret.push(shape2);
	                });
	            }
	        });
	        return ret;
	    };


	    /*\
	     * Set.isPointInside
	     [ method ]
	     **
	     * Determine if given point is inside this set’s elements
	     **
	     > Parameters
	     **
	     - x (number) x coordinate of the point
	     - y (number) y coordinate of the point
	     = (boolean) `true` if point is inside any of the set's elements
	     \*/
	    setproto.isPointInside = function (x, y) {
	        var isPointInside = false;
	        this.forEach(function (el) {
	            if (el.isPointInside(x, y)) {
	                isPointInside = true;
	                return false; // stop loop
	            }
	        });
	        return isPointInside;
	    };

	    /*\
	     * Raphael.registerFont
	     [ method ]
	     **
	     * Adds given font to the registered set of fonts for Raphaël. Should be used as an internal call from within Cufón’s font file.
	     * Returns original parameter, so it could be used with chaining.
	     # <a href="http://wiki.github.com/sorccu/cufon/about">More about Cufón and how to convert your font form TTF, OTF, etc to JavaScript file.</a>
	     **
	     > Parameters
	     **
	     - font (object) the font to register
	     = (object) the font you passed in
	     > Usage
	     | Cufon.registerFont(Raphael.registerFont({…}));
	    \*/
	    R.registerFont = function (font) {
	        if (!font.face) {
	            return font;
	        }
	        this.fonts = this.fonts || {};
	        var fontcopy = {
	                w: font.w,
	                face: {},
	                glyphs: {}
	            },
	            family = font.face["font-family"];
	        for (var prop in font.face) if (font.face[has](prop)) {
	            fontcopy.face[prop] = font.face[prop];
	        }
	        if (this.fonts[family]) {
	            this.fonts[family].push(fontcopy);
	        } else {
	            this.fonts[family] = [fontcopy];
	        }
	        if (!font.svg) {
	            fontcopy.face["units-per-em"] = toInt(font.face["units-per-em"], 10);
	            for (var glyph in font.glyphs) if (font.glyphs[has](glyph)) {
	                var path = font.glyphs[glyph];
	                fontcopy.glyphs[glyph] = {
	                    w: path.w,
	                    k: {},
	                    d: path.d && "M" + path.d.replace(/[mlcxtrv]/g, function (command) {
	                            return {l: "L", c: "C", x: "z", t: "m", r: "l", v: "c"}[command] || "M";
	                        }) + "z"
	                };
	                if (path.k) {
	                    for (var k in path.k) if (path[has](k)) {
	                        fontcopy.glyphs[glyph].k[k] = path.k[k];
	                    }
	                }
	            }
	        }
	        return font;
	    };
	    /*\
	     * Paper.getFont
	     [ method ]
	     **
	     * Finds font object in the registered fonts by given parameters. You could specify only one word from the font name, like “Myriad” for “Myriad Pro”.
	     **
	     > Parameters
	     **
	     - family (string) font family name or any word from it
	     - weight (string) #optional font weight
	     - style (string) #optional font style
	     - stretch (string) #optional font stretch
	     = (object) the font object
	     > Usage
	     | paper.print(100, 100, "Test string", paper.getFont("Times", 800), 30);
	    \*/
	    paperproto.getFont = function (family, weight, style, stretch) {
	        stretch = stretch || "normal";
	        style = style || "normal";
	        weight = +weight || {normal: 400, bold: 700, lighter: 300, bolder: 800}[weight] || 400;
	        if (!R.fonts) {
	            return;
	        }
	        var font = R.fonts[family];
	        if (!font) {
	            var name = new RegExp("(^|\\s)" + family.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
	            for (var fontName in R.fonts) if (R.fonts[has](fontName)) {
	                if (name.test(fontName)) {
	                    font = R.fonts[fontName];
	                    break;
	                }
	            }
	        }
	        var thefont;
	        if (font) {
	            for (var i = 0, ii = font.length; i < ii; i++) {
	                thefont = font[i];
	                if (thefont.face["font-weight"] == weight && (thefont.face["font-style"] == style || !thefont.face["font-style"]) && thefont.face["font-stretch"] == stretch) {
	                    break;
	                }
	            }
	        }
	        return thefont;
	    };
	    /*\
	     * Paper.print
	     [ method ]
	     **
	     * Creates path that represent given text written using given font at given position with given size.
	     * Result of the method is path element that contains whole text as a separate path.
	     **
	     > Parameters
	     **
	     - x (number) x position of the text
	     - y (number) y position of the text
	     - string (string) text to print
	     - font (object) font object, see @Paper.getFont
	     - size (number) #optional size of the font, default is `16`
	     - origin (string) #optional could be `"baseline"` or `"middle"`, default is `"middle"`
	     - letter_spacing (number) #optional number in range `-1..1`, default is `0`
	     - line_spacing (number) #optional number in range `1..3`, default is `1`
	     = (object) resulting path element, which consist of all letters
	     > Usage
	     | var txt = r.print(10, 50, "print", r.getFont("Museo"), 30).attr({fill: "#fff"});
	    \*/
	    paperproto.print = function (x, y, string, font, size, origin, letter_spacing, line_spacing) {
	        origin = origin || "middle"; // baseline|middle
	        letter_spacing = mmax(mmin(letter_spacing || 0, 1), -1);
	        line_spacing = mmax(mmin(line_spacing || 1, 3), 1);
	        var letters = Str(string)[split](E),
	            shift = 0,
	            notfirst = 0,
	            path = E,
	            scale;
	        R.is(font, "string") && (font = this.getFont(font));
	        if (font) {
	            scale = (size || 16) / font.face["units-per-em"];
	            var bb = font.face.bbox[split](separator),
	                top = +bb[0],
	                lineHeight = bb[3] - bb[1],
	                shifty = 0,
	                height = +bb[1] + (origin == "baseline" ? lineHeight + (+font.face.descent) : lineHeight / 2);
	            for (var i = 0, ii = letters.length; i < ii; i++) {
	                if (letters[i] == "\n") {
	                    shift = 0;
	                    curr = 0;
	                    notfirst = 0;
	                    shifty += lineHeight * line_spacing;
	                } else {
	                    var prev = notfirst && font.glyphs[letters[i - 1]] || {},
	                        curr = font.glyphs[letters[i]];
	                    shift += notfirst ? (prev.w || font.w) + (prev.k && prev.k[letters[i]] || 0) + (font.w * letter_spacing) : 0;
	                    notfirst = 1;
	                }
	                if (curr && curr.d) {
	                    path += R.transformPath(curr.d, ["t", shift * scale, shifty * scale, "s", scale, scale, top, height, "t", (x - top) / scale, (y - height) / scale]);
	                }
	            }
	        }
	        return this.path(path).attr({
	            fill: "#000",
	            stroke: "none"
	        });
	    };

	    /*\
	     * Paper.add
	     [ method ]
	     **
	     * Imports elements in JSON array in format `{type: type, <attributes>}`
	     **
	     > Parameters
	     **
	     - json (array)
	     = (object) resulting set of imported elements
	     > Usage
	     | paper.add([
	     |     {
	     |         type: "circle",
	     |         cx: 10,
	     |         cy: 10,
	     |         r: 5
	     |     },
	     |     {
	     |         type: "rect",
	     |         x: 10,
	     |         y: 10,
	     |         width: 10,
	     |         height: 10,
	     |         fill: "#fc0"
	     |     }
	     | ]);
	    \*/
	    paperproto.add = function (json) {
	        if (R.is(json, "array")) {
	            var res = this.set(),
	                i = 0,
	                ii = json.length,
	                j;
	            for (; i < ii; i++) {
	                j = json[i] || {};
	                elements[has](j.type) && res.push(this[j.type]().attr(j));
	            }
	        }
	        return res;
	    };

	    /*\
	     * Raphael.format
	     [ method ]
	     **
	     * Simple format function. Replaces construction of type “`{<number>}`” to the corresponding argument.
	     **
	     > Parameters
	     **
	     - token (string) string to format
	     - … (string) rest of arguments will be treated as parameters for replacement
	     = (string) formated string
	     > Usage
	     | var x = 10,
	     |     y = 20,
	     |     width = 40,
	     |     height = 50;
	     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
	     | paper.path(Raphael.format("M{0},{1}h{2}v{3}h{4}z", x, y, width, height, -width));
	    \*/
	    R.format = function (token, params) {
	        var args = R.is(params, array) ? [0][concat](params) : arguments;
	        token && R.is(token, string) && args.length - 1 && (token = token.replace(formatrg, function (str, i) {
	            return args[++i] == null ? E : args[i];
	        }));
	        return token || E;
	    };
	    /*\
	     * Raphael.fullfill
	     [ method ]
	     **
	     * A little bit more advanced format function than @Raphael.format. Replaces construction of type “`{<name>}`” to the corresponding argument.
	     **
	     > Parameters
	     **
	     - token (string) string to format
	     - json (object) object which properties will be used as a replacement
	     = (string) formated string
	     > Usage
	     | // this will draw a rectangular shape equivalent to "M10,20h40v50h-40z"
	     | paper.path(Raphael.fullfill("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
	     |     x: 10,
	     |     y: 20,
	     |     dim: {
	     |         width: 40,
	     |         height: 50,
	     |         "negative width": -40
	     |     }
	     | }));
	    \*/
	    R.fullfill = (function () {
	        var tokenRegex = /\{([^\}]+)\}/g,
	            objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, // matches .xxxxx or ["xxxxx"] to run over object properties
	            replacer = function (all, key, obj) {
	                var res = obj;
	                key.replace(objNotationRegex, function (all, name, quote, quotedName, isFunc) {
	                    name = name || quotedName;
	                    if (res) {
	                        if (name in res) {
	                            res = res[name];
	                        }
	                        typeof res == "function" && isFunc && (res = res());
	                    }
	                });
	                res = (res == null || res == obj ? all : res) + "";
	                return res;
	            };
	        return function (str, obj) {
	            return String(str).replace(tokenRegex, function (all, key) {
	                return replacer(all, key, obj);
	            });
	        };
	    })();
	    /*\
	     * Raphael.ninja
	     [ method ]
	     **
	     * If you want to leave no trace of Raphaël (Well, Raphaël creates only one global variable `Raphael`, but anyway.) You can use `ninja` method.
	     * Beware, that in this case plugins could stop working, because they are depending on global variable existence.
	     **
	     = (object) Raphael object
	     > Usage
	     | (function (local_raphael) {
	     |     var paper = local_raphael(10, 10, 320, 200);
	     |     …
	     | })(Raphael.ninja());
	    \*/
	    R.ninja = function () {
	        if (oldRaphael.was) {
	            g.win.Raphael = oldRaphael.is;
	        } else {
	            // IE8 raises an error when deleting window property
	            window.Raphael = undefined;
	            try {
	                delete window.Raphael;
	            } catch(e) {}
	        }
	        return R;
	    };
	    /*\
	     * Raphael.st
	     [ property (object) ]
	     **
	     * You can add your own method to elements and sets. It is wise to add a set method for each element method
	     * you added, so you will be able to call the same method on sets too.
	     **
	     * See also @Raphael.el.
	     > Usage
	     | Raphael.el.red = function () {
	     |     this.attr({fill: "#f00"});
	     | };
	     | Raphael.st.red = function () {
	     |     this.forEach(function (el) {
	     |         el.red();
	     |     });
	     | };
	     | // then use it
	     | paper.set(paper.circle(100, 100, 20), paper.circle(110, 100, 20)).red();
	    \*/
	    R.st = setproto;

	    eve.on("raphael.DOMload", function () {
	        loaded = true;
	    });

	    // Firefox <3.6 fix: http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
	    (function (doc, loaded, f) {
	        if (doc.readyState == null && doc.addEventListener){
	            doc.addEventListener(loaded, f = function () {
	                doc.removeEventListener(loaded, f, false);
	                doc.readyState = "complete";
	            }, false);
	            doc.readyState = "loading";
	        }
	        function isLoaded() {
	            (/in/).test(doc.readyState) ? setTimeout(isLoaded, 9) : R.eve("raphael.DOMload");
	        }
	        isLoaded();
	    })(document, "DOMContentLoaded");

	    return R;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Adobe Systems Incorporated. All rights reserved.
	// 
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	// You may obtain a copy of the License at
	// 
	// http://www.apache.org/licenses/LICENSE-2.0
	// 
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	// See the License for the specific language governing permissions and
	// limitations under the License.
	// ┌────────────────────────────────────────────────────────────┐ \\
	// │ Eve 0.5.0 - JavaScript Events Library                      │ \\
	// ├────────────────────────────────────────────────────────────┤ \\
	// │ Author Dmitry Baranovskiy (http://dmitry.baranovskiy.com/) │ \\
	// └────────────────────────────────────────────────────────────┘ \\

	(function (glob) {
	    var version = "0.5.0",
	        has = "hasOwnProperty",
	        separator = /[\.\/]/,
	        comaseparator = /\s*,\s*/,
	        wildcard = "*",
	        fun = function () {},
	        numsort = function (a, b) {
	            return a - b;
	        },
	        current_event,
	        stop,
	        events = {n: {}},
	        firstDefined = function () {
	            for (var i = 0, ii = this.length; i < ii; i++) {
	                if (typeof this[i] != "undefined") {
	                    return this[i];
	                }
	            }
	        },
	        lastDefined = function () {
	            var i = this.length;
	            while (--i) {
	                if (typeof this[i] != "undefined") {
	                    return this[i];
	                }
	            }
	        },
	        objtos = Object.prototype.toString,
	        Str = String,
	        isArray = Array.isArray || function (ar) {
	            return ar instanceof Array || objtos.call(ar) == "[object Array]";
	        };
	    /*\
	     * eve
	     [ method ]

	     * Fires event with given `name`, given scope and other parameters.

	     > Arguments

	     - name (string) name of the *event*, dot (`.`) or slash (`/`) separated
	     - scope (object) context for the event handlers
	     - varargs (...) the rest of arguments will be sent to event handlers

	     = (object) array of returned values from the listeners. Array has two methods `.firstDefined()` and `.lastDefined()` to get first or last not `undefined` value.
	    \*/
	        eve = function (name, scope) {
	            var e = events,
	                oldstop = stop,
	                args = Array.prototype.slice.call(arguments, 2),
	                listeners = eve.listeners(name),
	                z = 0,
	                f = false,
	                l,
	                indexed = [],
	                queue = {},
	                out = [],
	                ce = current_event,
	                errors = [];
	            out.firstDefined = firstDefined;
	            out.lastDefined = lastDefined;
	            current_event = name;
	            stop = 0;
	            for (var i = 0, ii = listeners.length; i < ii; i++) if ("zIndex" in listeners[i]) {
	                indexed.push(listeners[i].zIndex);
	                if (listeners[i].zIndex < 0) {
	                    queue[listeners[i].zIndex] = listeners[i];
	                }
	            }
	            indexed.sort(numsort);
	            while (indexed[z] < 0) {
	                l = queue[indexed[z++]];
	                out.push(l.apply(scope, args));
	                if (stop) {
	                    stop = oldstop;
	                    return out;
	                }
	            }
	            for (i = 0; i < ii; i++) {
	                l = listeners[i];
	                if ("zIndex" in l) {
	                    if (l.zIndex == indexed[z]) {
	                        out.push(l.apply(scope, args));
	                        if (stop) {
	                            break;
	                        }
	                        do {
	                            z++;
	                            l = queue[indexed[z]];
	                            l && out.push(l.apply(scope, args));
	                            if (stop) {
	                                break;
	                            }
	                        } while (l)
	                    } else {
	                        queue[l.zIndex] = l;
	                    }
	                } else {
	                    out.push(l.apply(scope, args));
	                    if (stop) {
	                        break;
	                    }
	                }
	            }
	            stop = oldstop;
	            current_event = ce;
	            return out;
	        };
	        // Undocumented. Debug only.
	        eve._events = events;
	    /*\
	     * eve.listeners
	     [ method ]

	     * Internal method which gives you array of all event handlers that will be triggered by the given `name`.

	     > Arguments

	     - name (string) name of the event, dot (`.`) or slash (`/`) separated

	     = (array) array of event handlers
	    \*/
	    eve.listeners = function (name) {
	        var names = isArray(name) ? name : name.split(separator),
	            e = events,
	            item,
	            items,
	            k,
	            i,
	            ii,
	            j,
	            jj,
	            nes,
	            es = [e],
	            out = [];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            nes = [];
	            for (j = 0, jj = es.length; j < jj; j++) {
	                e = es[j].n;
	                items = [e[names[i]], e[wildcard]];
	                k = 2;
	                while (k--) {
	                    item = items[k];
	                    if (item) {
	                        nes.push(item);
	                        out = out.concat(item.f || []);
	                    }
	                }
	            }
	            es = nes;
	        }
	        return out;
	    };
	    /*\
	     * eve.separator
	     [ method ]

	     * If for some reasons you don’t like default separators (`.` or `/`) you can specify yours
	     * here. Be aware that if you pass a string longer than one character it will be treated as
	     * a list of characters.

	     - separator (string) new separator. Empty string resets to default: `.` or `/`.
	    \*/
	    eve.separator = function (sep) {
	        if (sep) {
	            sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
	            sep = "[" + sep + "]";
	            separator = new RegExp(sep);
	        } else {
	            separator = /[\.\/]/;
	        }
	    };
	    /*\
	     * eve.on
	     [ method ]
	     **
	     * Binds given event handler with a given name. You can use wildcards “`*`” for the names:
	     | eve.on("*.under.*", f);
	     | eve("mouse.under.floor"); // triggers f
	     * Use @eve to trigger the listener.
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     - name (array) if you don’t want to use separators, you can use array of strings
	     - f (function) event handler function
	     **
	     = (function) returned function accepts a single numeric parameter that represents z-index of the handler. It is an optional feature and only used when you need to ensure that some subset of handlers will be invoked in a given order, despite of the order of assignment. 
	     > Example:
	     | eve.on("mouse", eatIt)(2);
	     | eve.on("mouse", scream);
	     | eve.on("mouse", catchIt)(1);
	     * This will ensure that `catchIt` function will be called before `eatIt`.
	     *
	     * If you want to put your handler before non-indexed handlers, specify a negative value.
	     * Note: I assume most of the time you don’t need to worry about z-index, but it’s nice to have this feature “just in case”.
	    \*/
	    eve.on = function (name, f) {
	        if (typeof f != "function") {
	            return function () {};
	        }
	        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
	        for (var i = 0, ii = names.length; i < ii; i++) {
	            (function (name) {
	                var names = isArray(name) ? name : Str(name).split(separator),
	                    e = events,
	                    exist;
	                for (var i = 0, ii = names.length; i < ii; i++) {
	                    e = e.n;
	                    e = e.hasOwnProperty(names[i]) && e[names[i]] || (e[names[i]] = {n: {}});
	                }
	                e.f = e.f || [];
	                for (i = 0, ii = e.f.length; i < ii; i++) if (e.f[i] == f) {
	                    exist = true;
	                    break;
	                }
	                !exist && e.f.push(f);
	            }(names[i]));
	        }
	        return function (zIndex) {
	            if (+zIndex == +zIndex) {
	                f.zIndex = +zIndex;
	            }
	        };
	    };
	    /*\
	     * eve.f
	     [ method ]
	     **
	     * Returns function that will fire given event with optional arguments.
	     * Arguments that will be passed to the result function will be also
	     * concated to the list of final arguments.
	     | el.onclick = eve.f("click", 1, 2);
	     | eve.on("click", function (a, b, c) {
	     |     console.log(a, b, c); // 1, 2, [event object]
	     | });
	     > Arguments
	     - event (string) event name
	     - varargs (…) and any other arguments
	     = (function) possible event handler function
	    \*/
	    eve.f = function (event) {
	        var attrs = [].slice.call(arguments, 1);
	        return function () {
	            eve.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
	        };
	    };
	    /*\
	     * eve.stop
	     [ method ]
	     **
	     * Is used inside an event handler to stop the event, preventing any subsequent listeners from firing.
	    \*/
	    eve.stop = function () {
	        stop = 1;
	    };
	    /*\
	     * eve.nt
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     > Arguments
	     **
	     - subname (string) #optional subname of the event
	     **
	     = (string) name of the event, if `subname` is not specified
	     * or
	     = (boolean) `true`, if current event’s name contains `subname`
	    \*/
	    eve.nt = function (subname) {
	        var cur = isArray(current_event) ? current_event.join(".") : current_event;
	        if (subname) {
	            return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
	        }
	        return cur;
	    };
	    /*\
	     * eve.nts
	     [ method ]
	     **
	     * Could be used inside event handler to figure out actual name of the event.
	     **
	     **
	     = (array) names of the event
	    \*/
	    eve.nts = function () {
	        return isArray(current_event) ? current_event : current_event.split(separator);
	    };
	    /*\
	     * eve.off
	     [ method ]
	     **
	     * Removes given function from the list of event listeners assigned to given name.
	     * If no arguments specified all the events will be cleared.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	    \*/
	    /*\
	     * eve.unbind
	     [ method ]
	     **
	     * See @eve.off
	    \*/
	    eve.off = eve.unbind = function (name, f) {
	        if (!name) {
	            eve._events = events = {n: {}};
	            return;
	        }
	        var names = isArray(name) ? (isArray(name[0]) ? name : [name]) : Str(name).split(comaseparator);
	        if (names.length > 1) {
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                eve.off(names[i], f);
	            }
	            return;
	        }
	        names = isArray(name) ? name : Str(name).split(separator);
	        var e,
	            key,
	            splice,
	            i, ii, j, jj,
	            cur = [events];
	        for (i = 0, ii = names.length; i < ii; i++) {
	            for (j = 0; j < cur.length; j += splice.length - 2) {
	                splice = [j, 1];
	                e = cur[j].n;
	                if (names[i] != wildcard) {
	                    if (e[names[i]]) {
	                        splice.push(e[names[i]]);
	                    }
	                } else {
	                    for (key in e) if (e[has](key)) {
	                        splice.push(e[key]);
	                    }
	                }
	                cur.splice.apply(cur, splice);
	            }
	        }
	        for (i = 0, ii = cur.length; i < ii; i++) {
	            e = cur[i];
	            while (e.n) {
	                if (f) {
	                    if (e.f) {
	                        for (j = 0, jj = e.f.length; j < jj; j++) if (e.f[j] == f) {
	                            e.f.splice(j, 1);
	                            break;
	                        }
	                        !e.f.length && delete e.f;
	                    }
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        var funcs = e.n[key].f;
	                        for (j = 0, jj = funcs.length; j < jj; j++) if (funcs[j] == f) {
	                            funcs.splice(j, 1);
	                            break;
	                        }
	                        !funcs.length && delete e.n[key].f;
	                    }
	                } else {
	                    delete e.f;
	                    for (key in e.n) if (e.n[has](key) && e.n[key].f) {
	                        delete e.n[key].f;
	                    }
	                }
	                e = e.n;
	            }
	        }
	    };
	    /*\
	     * eve.once
	     [ method ]
	     **
	     * Binds given event handler with a given name to only run once then unbind itself.
	     | eve.once("login", f);
	     | eve("login"); // triggers f
	     | eve("login"); // no listeners
	     * Use @eve to trigger the listener.
	     **
	     > Arguments
	     **
	     - name (string) name of the event, dot (`.`) or slash (`/`) separated, with optional wildcards
	     - f (function) event handler function
	     **
	     = (function) same return function as @eve.on
	    \*/
	    eve.once = function (name, f) {
	        var f2 = function () {
	            eve.off(name, f2);
	            return f.apply(this, arguments);
	        };
	        return eve.on(name, f2);
	    };
	    /*\
	     * eve.version
	     [ property (string) ]
	     **
	     * Current version of the library.
	    \*/
	    eve.version = version;
	    eve.toString = function () {
	        return "You are running Eve " + version;
	    };
	    (typeof module != "undefined" && module.exports) ? (module.exports = eve) : ( true ? (!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() { return eve; }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))) : (glob.eve = eve));
	})(this);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(R) {
	    if (R && !R.svg) {
	        return;
	    }

	    var has = "hasOwnProperty",
	        Str = String,
	        toFloat = parseFloat,
	        toInt = parseInt,
	        math = Math,
	        mmax = math.max,
	        abs = math.abs,
	        pow = math.pow,
	        separator = /[, ]+/,
	        eve = R.eve,
	        E = "",
	        S = " ";
	    var xlink = "http://www.w3.org/1999/xlink",
	        markers = {
	            block: "M5,0 0,2.5 5,5z",
	            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
	            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
	            open: "M6,1 1,3.5 6,6",
	            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
	        },
	        markerCounter = {};
	    R.toString = function () {
	        return  "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version;
	    };
	    var $ = function (el, attr) {
	        if (attr) {
	            if (typeof el == "string") {
	                el = $(el);
	            }
	            for (var key in attr) if (attr[has](key)) {
	                if (key.substring(0, 6) == "xlink:") {
	                    el.setAttributeNS(xlink, key.substring(6), Str(attr[key]));
	                } else {
	                    el.setAttribute(key, Str(attr[key]));
	                }
	            }
	        } else {
	            el = R._g.doc.createElementNS("http://www.w3.org/2000/svg", el);
	            el.style && (el.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
	        }
	        return el;
	    },
	    addGradientFill = function (element, gradient) {
	        var type = "linear",
	            id = element.id + gradient,
	            fx = .5, fy = .5,
	            o = element.node,
	            SVG = element.paper,
	            s = o.style,
	            el = R._g.doc.getElementById(id);
	        if (!el) {
	            gradient = Str(gradient).replace(R._radial_gradient, function (all, _fx, _fy) {
	                type = "radial";
	                if (_fx && _fy) {
	                    fx = toFloat(_fx);
	                    fy = toFloat(_fy);
	                    var dir = ((fy > .5) * 2 - 1);
	                    pow(fx - .5, 2) + pow(fy - .5, 2) > .25 &&
	                        (fy = math.sqrt(.25 - pow(fx - .5, 2)) * dir + .5) &&
	                        fy != .5 &&
	                        (fy = fy.toFixed(5) - 1e-5 * dir);
	                }
	                return E;
	            });
	            gradient = gradient.split(/\s*\-\s*/);
	            if (type == "linear") {
	                var angle = gradient.shift();
	                angle = -toFloat(angle);
	                if (isNaN(angle)) {
	                    return null;
	                }
	                var vector = [0, 0, math.cos(R.rad(angle)), math.sin(R.rad(angle))],
	                    max = 1 / (mmax(abs(vector[2]), abs(vector[3])) || 1);
	                vector[2] *= max;
	                vector[3] *= max;
	                if (vector[2] < 0) {
	                    vector[0] = -vector[2];
	                    vector[2] = 0;
	                }
	                if (vector[3] < 0) {
	                    vector[1] = -vector[3];
	                    vector[3] = 0;
	                }
	            }
	            var dots = R._parseDots(gradient);
	            if (!dots) {
	                return null;
	            }
	            id = id.replace(/[\(\)\s,\xb0#]/g, "_");

	            if (element.gradient && id != element.gradient.id) {
	                SVG.defs.removeChild(element.gradient);
	                delete element.gradient;
	            }

	            if (!element.gradient) {
	                el = $(type + "Gradient", {id: id});
	                element.gradient = el;
	                $(el, type == "radial" ? {
	                    fx: fx,
	                    fy: fy
	                } : {
	                    x1: vector[0],
	                    y1: vector[1],
	                    x2: vector[2],
	                    y2: vector[3],
	                    gradientTransform: element.matrix.invert()
	                });
	                SVG.defs.appendChild(el);
	                for (var i = 0, ii = dots.length; i < ii; i++) {
	                    el.appendChild($("stop", {
	                        offset: dots[i].offset ? dots[i].offset : i ? "100%" : "0%",
	                        "stop-color": dots[i].color || "#fff",
	                        "stop-opacity": isFinite(dots[i].opacity) ? dots[i].opacity : 1
	                    }));
	                }
	            }
	        }
	        $(o, {
	            fill: fillurl(id),
	            opacity: 1,
	            "fill-opacity": 1
	        });
	        s.fill = E;
	        s.opacity = 1;
	        s.fillOpacity = 1;
	        return 1;
	    },
	    isIE9or10 = function () {
	      var mode = document.documentMode;
	      return mode && (mode === 9 || mode === 10);
	    },
	    fillurl = function (id) {
	      if (isIE9or10()) {
	          return "url('#" + id + "')";
	      }
	      var location = document.location;
	      var locationString = (
	          location.protocol + '//' +
	          location.host +
	          location.pathname +
	          location.search
	      );
	      return "url('" + locationString + "#" + id + "')";
	    },
	    updatePosition = function (o) {
	        var bbox = o.getBBox(1);
	        $(o.pattern, {patternTransform: o.matrix.invert() + " translate(" + bbox.x + "," + bbox.y + ")"});
	    },
	    addArrow = function (o, value, isEnd) {
	        if (o.type == "path") {
	            var values = Str(value).toLowerCase().split("-"),
	                p = o.paper,
	                se = isEnd ? "end" : "start",
	                node = o.node,
	                attrs = o.attrs,
	                stroke = attrs["stroke-width"],
	                i = values.length,
	                type = "classic",
	                from,
	                to,
	                dx,
	                refX,
	                attr,
	                w = 3,
	                h = 3,
	                t = 5;
	            while (i--) {
	                switch (values[i]) {
	                    case "block":
	                    case "classic":
	                    case "oval":
	                    case "diamond":
	                    case "open":
	                    case "none":
	                        type = values[i];
	                        break;
	                    case "wide": h = 5; break;
	                    case "narrow": h = 2; break;
	                    case "long": w = 5; break;
	                    case "short": w = 2; break;
	                }
	            }
	            if (type == "open") {
	                w += 2;
	                h += 2;
	                t += 2;
	                dx = 1;
	                refX = isEnd ? 4 : 1;
	                attr = {
	                    fill: "none",
	                    stroke: attrs.stroke
	                };
	            } else {
	                refX = dx = w / 2;
	                attr = {
	                    fill: attrs.stroke,
	                    stroke: "none"
	                };
	            }
	            if (o._.arrows) {
	                if (isEnd) {
	                    o._.arrows.endPath && markerCounter[o._.arrows.endPath]--;
	                    o._.arrows.endMarker && markerCounter[o._.arrows.endMarker]--;
	                } else {
	                    o._.arrows.startPath && markerCounter[o._.arrows.startPath]--;
	                    o._.arrows.startMarker && markerCounter[o._.arrows.startMarker]--;
	                }
	            } else {
	                o._.arrows = {};
	            }
	            if (type != "none") {
	                var pathId = "raphael-marker-" + type,
	                    markerId = "raphael-marker-" + se + type + w + h + "-obj" + o.id;
	                if (!R._g.doc.getElementById(pathId)) {
	                    p.defs.appendChild($($("path"), {
	                        "stroke-linecap": "round",
	                        d: markers[type],
	                        id: pathId
	                    }));
	                    markerCounter[pathId] = 1;
	                } else {
	                    markerCounter[pathId]++;
	                }
	                var marker = R._g.doc.getElementById(markerId),
	                    use;
	                if (!marker) {
	                    marker = $($("marker"), {
	                        id: markerId,
	                        markerHeight: h,
	                        markerWidth: w,
	                        orient: "auto",
	                        refX: refX,
	                        refY: h / 2
	                    });
	                    use = $($("use"), {
	                        "xlink:href": "#" + pathId,
	                        transform: (isEnd ? "rotate(180 " + w / 2 + " " + h / 2 + ") " : E) + "scale(" + w / t + "," + h / t + ")",
	                        "stroke-width": (1 / ((w / t + h / t) / 2)).toFixed(4)
	                    });
	                    marker.appendChild(use);
	                    p.defs.appendChild(marker);
	                    markerCounter[markerId] = 1;
	                } else {
	                    markerCounter[markerId]++;
	                    use = marker.getElementsByTagName("use")[0];
	                }
	                $(use, attr);
	                var delta = dx * (type != "diamond" && type != "oval");
	                if (isEnd) {
	                    from = o._.arrows.startdx * stroke || 0;
	                    to = R.getTotalLength(attrs.path) - delta * stroke;
	                } else {
	                    from = delta * stroke;
	                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
	                }
	                attr = {};
	                attr["marker-" + se] = "url(#" + markerId + ")";
	                if (to || from) {
	                    attr.d = R.getSubpath(attrs.path, from, to);
	                }
	                $(node, attr);
	                o._.arrows[se + "Path"] = pathId;
	                o._.arrows[se + "Marker"] = markerId;
	                o._.arrows[se + "dx"] = delta;
	                o._.arrows[se + "Type"] = type;
	                o._.arrows[se + "String"] = value;
	            } else {
	                if (isEnd) {
	                    from = o._.arrows.startdx * stroke || 0;
	                    to = R.getTotalLength(attrs.path) - from;
	                } else {
	                    from = 0;
	                    to = R.getTotalLength(attrs.path) - (o._.arrows.enddx * stroke || 0);
	                }
	                o._.arrows[se + "Path"] && $(node, {d: R.getSubpath(attrs.path, from, to)});
	                delete o._.arrows[se + "Path"];
	                delete o._.arrows[se + "Marker"];
	                delete o._.arrows[se + "dx"];
	                delete o._.arrows[se + "Type"];
	                delete o._.arrows[se + "String"];
	            }
	            for (attr in markerCounter) if (markerCounter[has](attr) && !markerCounter[attr]) {
	                var item = R._g.doc.getElementById(attr);
	                item && item.parentNode.removeChild(item);
	            }
	        }
	    },
	    dasharray = {
	        "-": [3, 1],
	        ".": [1, 1],
	        "-.": [3, 1, 1, 1],
	        "-..": [3, 1, 1, 1, 1, 1],
	        ". ": [1, 3],
	        "- ": [4, 3],
	        "--": [8, 3],
	        "- .": [4, 3, 1, 3],
	        "--.": [8, 3, 1, 3],
	        "--..": [8, 3, 1, 3, 1, 3]
	    },
	    addDashes = function (o, value, params) {
	        value = dasharray[Str(value).toLowerCase()];
	        if (value) {
	            var width = o.attrs["stroke-width"] || "1",
	                butt = {round: width, square: width, butt: 0}[o.attrs["stroke-linecap"] || params["stroke-linecap"]] || 0,
	                dashes = [],
	                i = value.length;
	            while (i--) {
	                dashes[i] = value[i] * width + ((i % 2) ? 1 : -1) * butt;
	            }
	            $(o.node, {"stroke-dasharray": dashes.join(",")});
	        }
	        else {
	          $(o.node, {"stroke-dasharray": "none"});
	        }
	    },
	    setFillAndStroke = function (o, params) {
	        var node = o.node,
	            attrs = o.attrs,
	            vis = node.style.visibility;
	        node.style.visibility = "hidden";
	        for (var att in params) {
	            if (params[has](att)) {
	                if (!R._availableAttrs[has](att)) {
	                    continue;
	                }
	                var value = params[att];
	                attrs[att] = value;
	                switch (att) {
	                    case "blur":
	                        o.blur(value);
	                        break;
	                    case "title":
	                        var title = node.getElementsByTagName("title");

	                        // Use the existing <title>.
	                        if (title.length && (title = title[0])) {
	                          title.firstChild.nodeValue = value;
	                        } else {
	                          title = $("title");
	                          var val = R._g.doc.createTextNode(value);
	                          title.appendChild(val);
	                          node.appendChild(title);
	                        }
	                        break;
	                    case "href":
	                    case "target":
	                        var pn = node.parentNode;
	                        if (pn.tagName.toLowerCase() != "a") {
	                            var hl = $("a");
	                            pn.insertBefore(hl, node);
	                            hl.appendChild(node);
	                            pn = hl;
	                        }
	                        if (att == "target") {
	                            pn.setAttributeNS(xlink, "show", value == "blank" ? "new" : value);
	                        } else {
	                            pn.setAttributeNS(xlink, att, value);
	                        }
	                        break;
	                    case "cursor":
	                        node.style.cursor = value;
	                        break;
	                    case "transform":
	                        o.transform(value);
	                        break;
	                    case "arrow-start":
	                        addArrow(o, value);
	                        break;
	                    case "arrow-end":
	                        addArrow(o, value, 1);
	                        break;
	                    case "clip-rect":
	                        var rect = Str(value).split(separator);
	                        if (rect.length == 4) {
	                            o.clip && o.clip.parentNode.parentNode.removeChild(o.clip.parentNode);
	                            var el = $("clipPath"),
	                                rc = $("rect");
	                            el.id = R.createUUID();
	                            $(rc, {
	                                x: rect[0],
	                                y: rect[1],
	                                width: rect[2],
	                                height: rect[3]
	                            });
	                            el.appendChild(rc);
	                            o.paper.defs.appendChild(el);
	                            $(node, {"clip-path": "url(#" + el.id + ")"});
	                            o.clip = rc;
	                        }
	                        if (!value) {
	                            var path = node.getAttribute("clip-path");
	                            if (path) {
	                                var clip = R._g.doc.getElementById(path.replace(/(^url\(#|\)$)/g, E));
	                                clip && clip.parentNode.removeChild(clip);
	                                $(node, {"clip-path": E});
	                                delete o.clip;
	                            }
	                        }
	                    break;
	                    case "path":
	                        if (o.type == "path") {
	                            $(node, {d: value ? attrs.path = R._pathToAbsolute(value) : "M0,0"});
	                            o._.dirty = 1;
	                            if (o._.arrows) {
	                                "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
	                                "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
	                            }
	                        }
	                        break;
	                    case "width":
	                        node.setAttribute(att, value);
	                        o._.dirty = 1;
	                        if (attrs.fx) {
	                            att = "x";
	                            value = attrs.x;
	                        } else {
	                            break;
	                        }
	                    case "x":
	                        if (attrs.fx) {
	                            value = -attrs.x - (attrs.width || 0);
	                        }
	                    case "rx":
	                        if (att == "rx" && o.type == "rect") {
	                            break;
	                        }
	                    case "cx":
	                        node.setAttribute(att, value);
	                        o.pattern && updatePosition(o);
	                        o._.dirty = 1;
	                        break;
	                    case "height":
	                        node.setAttribute(att, value);
	                        o._.dirty = 1;
	                        if (attrs.fy) {
	                            att = "y";
	                            value = attrs.y;
	                        } else {
	                            break;
	                        }
	                    case "y":
	                        if (attrs.fy) {
	                            value = -attrs.y - (attrs.height || 0);
	                        }
	                    case "ry":
	                        if (att == "ry" && o.type == "rect") {
	                            break;
	                        }
	                    case "cy":
	                        node.setAttribute(att, value);
	                        o.pattern && updatePosition(o);
	                        o._.dirty = 1;
	                        break;
	                    case "r":
	                        if (o.type == "rect") {
	                            $(node, {rx: value, ry: value});
	                        } else {
	                            node.setAttribute(att, value);
	                        }
	                        o._.dirty = 1;
	                        break;
	                    case "src":
	                        if (o.type == "image") {
	                            node.setAttributeNS(xlink, "href", value);
	                        }
	                        break;
	                    case "stroke-width":
	                        if (o._.sx != 1 || o._.sy != 1) {
	                            value /= mmax(abs(o._.sx), abs(o._.sy)) || 1;
	                        }
	                        node.setAttribute(att, value);
	                        if (attrs["stroke-dasharray"]) {
	                            addDashes(o, attrs["stroke-dasharray"], params);
	                        }
	                        if (o._.arrows) {
	                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
	                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
	                        }
	                        break;
	                    case "stroke-dasharray":
	                        addDashes(o, value, params);
	                        break;
	                    case "fill":
	                        var isURL = Str(value).match(R._ISURL);
	                        if (isURL) {
	                            el = $("pattern");
	                            var ig = $("image");
	                            el.id = R.createUUID();
	                            $(el, {x: 0, y: 0, patternUnits: "userSpaceOnUse", height: 1, width: 1});
	                            $(ig, {x: 0, y: 0, "xlink:href": isURL[1]});
	                            el.appendChild(ig);

	                            (function (el) {
	                                R._preload(isURL[1], function () {
	                                    var w = this.offsetWidth,
	                                        h = this.offsetHeight;
	                                    $(el, {width: w, height: h});
	                                    $(ig, {width: w, height: h});
	                                });
	                            })(el);
	                            o.paper.defs.appendChild(el);
	                            $(node, {fill: "url(#" + el.id + ")"});
	                            o.pattern = el;
	                            o.pattern && updatePosition(o);
	                            break;
	                        }
	                        var clr = R.getRGB(value);
	                        if (!clr.error) {
	                            delete params.gradient;
	                            delete attrs.gradient;
	                            !R.is(attrs.opacity, "undefined") &&
	                                R.is(params.opacity, "undefined") &&
	                                $(node, {opacity: attrs.opacity});
	                            !R.is(attrs["fill-opacity"], "undefined") &&
	                                R.is(params["fill-opacity"], "undefined") &&
	                                $(node, {"fill-opacity": attrs["fill-opacity"]});
	                        } else if ((o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value)) {
	                            if ("opacity" in attrs || "fill-opacity" in attrs) {
	                                var gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
	                                if (gradient) {
	                                    var stops = gradient.getElementsByTagName("stop");
	                                    $(stops[stops.length - 1], {"stop-opacity": ("opacity" in attrs ? attrs.opacity : 1) * ("fill-opacity" in attrs ? attrs["fill-opacity"] : 1)});
	                                }
	                            }
	                            attrs.gradient = value;
	                            attrs.fill = "none";
	                            break;
	                        }
	                        clr[has]("opacity") && $(node, {"fill-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
	                    case "stroke":
	                        clr = R.getRGB(value);
	                        node.setAttribute(att, clr.hex);
	                        att == "stroke" && clr[has]("opacity") && $(node, {"stroke-opacity": clr.opacity > 1 ? clr.opacity / 100 : clr.opacity});
	                        if (att == "stroke" && o._.arrows) {
	                            "startString" in o._.arrows && addArrow(o, o._.arrows.startString);
	                            "endString" in o._.arrows && addArrow(o, o._.arrows.endString, 1);
	                        }
	                        break;
	                    case "gradient":
	                        (o.type == "circle" || o.type == "ellipse" || Str(value).charAt() != "r") && addGradientFill(o, value);
	                        break;
	                    case "opacity":
	                        if (attrs.gradient && !attrs[has]("stroke-opacity")) {
	                            $(node, {"stroke-opacity": value > 1 ? value / 100 : value});
	                        }
	                        // fall
	                    case "fill-opacity":
	                        if (attrs.gradient) {
	                            gradient = R._g.doc.getElementById(node.getAttribute("fill").replace(/^url\(#|\)$/g, E));
	                            if (gradient) {
	                                stops = gradient.getElementsByTagName("stop");
	                                $(stops[stops.length - 1], {"stop-opacity": value});
	                            }
	                            break;
	                        }
	                    default:
	                        att == "font-size" && (value = toInt(value, 10) + "px");
	                        var cssrule = att.replace(/(\-.)/g, function (w) {
	                            return w.substring(1).toUpperCase();
	                        });
	                        node.style[cssrule] = value;
	                        o._.dirty = 1;
	                        node.setAttribute(att, value);
	                        break;
	                }
	            }
	        }

	        tuneText(o, params);
	        node.style.visibility = vis;
	    },
	    leading = 1.2,
	    tuneText = function (el, params) {
	        if (el.type != "text" || !(params[has]("text") || params[has]("font") || params[has]("font-size") || params[has]("x") || params[has]("y"))) {
	            return;
	        }
	        var a = el.attrs,
	            node = el.node,
	            fontSize = node.firstChild ? toInt(R._g.doc.defaultView.getComputedStyle(node.firstChild, E).getPropertyValue("font-size"), 10) : 10;

	        if (params[has]("text")) {
	            a.text = params.text;
	            while (node.firstChild) {
	                node.removeChild(node.firstChild);
	            }
	            var texts = Str(params.text).split("\n"),
	                tspans = [],
	                tspan;
	            for (var i = 0, ii = texts.length; i < ii; i++) {
	                tspan = $("tspan");
	                i && $(tspan, {dy: fontSize * leading, x: a.x});
	                tspan.appendChild(R._g.doc.createTextNode(texts[i]));
	                node.appendChild(tspan);
	                tspans[i] = tspan;
	            }
	        } else {
	            tspans = node.getElementsByTagName("tspan");
	            for (i = 0, ii = tspans.length; i < ii; i++) if (i) {
	                $(tspans[i], {dy: fontSize * leading, x: a.x});
	            } else {
	                $(tspans[0], {dy: 0});
	            }
	        }
	        $(node, {x: a.x, y: a.y});
	        el._.dirty = 1;
	        var bb = el._getBBox(),
	            dif = a.y - (bb.y + bb.height / 2);
	        dif && R.is(dif, "finite") && $(tspans[0], {dy: dif});
	    },
	    getRealNode = function (node) {
	        if (node.parentNode && node.parentNode.tagName.toLowerCase() === "a") {
	            return node.parentNode;
	        } else {
	            return node;
	        }
	    },
	    Element = function (node, svg) {
	        var X = 0,
	            Y = 0;
	        /*\
	         * Element.node
	         [ property (object) ]
	         **
	         * Gives you a reference to the DOM object, so you can assign event handlers or just mess around.
	         **
	         * Note: Don’t mess with it.
	         > Usage
	         | // draw a circle at coordinate 10,10 with radius of 10
	         | var c = paper.circle(10, 10, 10);
	         | c.node.onclick = function () {
	         |     c.attr("fill", "red");
	         | };
	        \*/
	        this[0] = this.node = node;
	        /*\
	         * Element.raphael
	         [ property (object) ]
	         **
	         * Internal reference to @Raphael object. In case it is not available.
	         > Usage
	         | Raphael.el.red = function () {
	         |     var hsb = this.paper.raphael.rgb2hsb(this.attr("fill"));
	         |     hsb.h = 1;
	         |     this.attr({fill: this.paper.raphael.hsb2rgb(hsb).hex});
	         | }
	        \*/
	        node.raphael = true;
	        /*\
	         * Element.id
	         [ property (number) ]
	         **
	         * Unique id of the element. Especially useful when you want to listen to events of the element,
	         * because all events are fired in format `<module>.<action>.<id>`. Also useful for @Paper.getById method.
	        \*/
	        this.id = guid();
	        node.raphaelid = this.id;

	        /**
	        * Method that returns a 5 letter/digit id, enough for 36^5 = 60466176 elements
	        * @returns {string} id
	        */
	        function guid() {
	            return ("0000" + (Math.random()*Math.pow(36,5) << 0).toString(36)).slice(-5);
	        }

	        this.matrix = R.matrix();
	        this.realPath = null;
	        /*\
	         * Element.paper
	         [ property (object) ]
	         **
	         * Internal reference to “paper” where object drawn. Mainly for use in plugins and element extensions.
	         > Usage
	         | Raphael.el.cross = function () {
	         |     this.attr({fill: "red"});
	         |     this.paper.path("M10,10L50,50M50,10L10,50")
	         |         .attr({stroke: "red"});
	         | }
	        \*/
	        this.paper = svg;
	        this.attrs = this.attrs || {};
	        this._ = {
	            transform: [],
	            sx: 1,
	            sy: 1,
	            deg: 0,
	            dx: 0,
	            dy: 0,
	            dirty: 1
	        };
	        !svg.bottom && (svg.bottom = this);
	        /*\
	         * Element.prev
	         [ property (object) ]
	         **
	         * Reference to the previous element in the hierarchy.
	        \*/
	        this.prev = svg.top;
	        svg.top && (svg.top.next = this);
	        svg.top = this;
	        /*\
	         * Element.next
	         [ property (object) ]
	         **
	         * Reference to the next element in the hierarchy.
	        \*/
	        this.next = null;
	    },
	    elproto = R.el;

	    Element.prototype = elproto;
	    elproto.constructor = Element;

	    R._engine.path = function (pathString, SVG) {
	        var el = $("path");
	        SVG.canvas && SVG.canvas.appendChild(el);
	        var p = new Element(el, SVG);
	        p.type = "path";
	        setFillAndStroke(p, {
	            fill: "none",
	            stroke: "#000",
	            path: pathString
	        });
	        return p;
	    };
	    /*\
	     * Element.rotate
	     [ method ]
	     **
	     * Deprecated! Use @Element.transform instead.
	     * Adds rotation by given angle around given point to the list of
	     * transformations of the element.
	     > Parameters
	     - deg (number) angle in degrees
	     - cx (number) #optional x coordinate of the centre of rotation
	     - cy (number) #optional y coordinate of the centre of rotation
	     * If cx & cy aren’t specified centre of the shape is used as a point of rotation.
	     = (object) @Element
	    \*/
	    elproto.rotate = function (deg, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        deg = Str(deg).split(separator);
	        if (deg.length - 1) {
	            cx = toFloat(deg[1]);
	            cy = toFloat(deg[2]);
	        }
	        deg = toFloat(deg[0]);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	            cx = bbox.x + bbox.width / 2;
	            cy = bbox.y + bbox.height / 2;
	        }
	        this.transform(this._.transform.concat([["r", deg, cx, cy]]));
	        return this;
	    };
	    /*\
	     * Element.scale
	     [ method ]
	     **
	     * Deprecated! Use @Element.transform instead.
	     * Adds scale by given amount relative to given point to the list of
	     * transformations of the element.
	     > Parameters
	     - sx (number) horisontal scale amount
	     - sy (number) vertical scale amount
	     - cx (number) #optional x coordinate of the centre of scale
	     - cy (number) #optional y coordinate of the centre of scale
	     * If cx & cy aren’t specified centre of the shape is used instead.
	     = (object) @Element
	    \*/
	    elproto.scale = function (sx, sy, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        sx = Str(sx).split(separator);
	        if (sx.length - 1) {
	            sy = toFloat(sx[1]);
	            cx = toFloat(sx[2]);
	            cy = toFloat(sx[3]);
	        }
	        sx = toFloat(sx[0]);
	        (sy == null) && (sy = sx);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	        }
	        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
	        cy = cy == null ? bbox.y + bbox.height / 2 : cy;
	        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
	        return this;
	    };
	    /*\
	     * Element.translate
	     [ method ]
	     **
	     * Deprecated! Use @Element.transform instead.
	     * Adds translation by given amount to the list of transformations of the element.
	     > Parameters
	     - dx (number) horisontal shift
	     - dy (number) vertical shift
	     = (object) @Element
	    \*/
	    elproto.translate = function (dx, dy) {
	        if (this.removed) {
	            return this;
	        }
	        dx = Str(dx).split(separator);
	        if (dx.length - 1) {
	            dy = toFloat(dx[1]);
	        }
	        dx = toFloat(dx[0]) || 0;
	        dy = +dy || 0;
	        this.transform(this._.transform.concat([["t", dx, dy]]));
	        return this;
	    };
	    /*\
	     * Element.transform
	     [ method ]
	     **
	     * Adds transformation to the element which is separate to other attributes,
	     * i.e. translation doesn’t change `x` or `y` of the rectange. The format
	     * of transformation string is similar to the path string syntax:
	     | "t100,100r30,100,100s2,2,100,100r45s1.5"
	     * Each letter is a command. There are four commands: `t` is for translate, `r` is for rotate, `s` is for
	     * scale and `m` is for matrix.
	     *
	     * There are also alternative “absolute” translation, rotation and scale: `T`, `R` and `S`. They will not take previous transformation into account. For example, `...T100,0` will always move element 100 px horisontally, while `...t100,0` could move it vertically if there is `r90` before. Just compare results of `r90t100,0` and `r90T100,0`.
	     *
	     * So, the example line above could be read like “translate by 100, 100; rotate 30° around 100, 100; scale twice around 100, 100;
	     * rotate 45° around centre; scale 1.5 times relative to centre”. As you can see rotate and scale commands have origin
	     * coordinates as optional parameters, the default is the centre point of the element.
	     * Matrix accepts six parameters.
	     > Usage
	     | var el = paper.rect(10, 20, 300, 200);
	     | // translate 100, 100, rotate 45°, translate -100, 0
	     | el.transform("t100,100r45t-100,0");
	     | // if you want you can append or prepend transformations
	     | el.transform("...t50,50");
	     | el.transform("s2...");
	     | // or even wrap
	     | el.transform("t50,50...t-50-50");
	     | // to reset transformation call method with empty string
	     | el.transform("");
	     | // to get current value call it without parameters
	     | console.log(el.transform());
	     > Parameters
	     - tstr (string) #optional transformation string
	     * If tstr isn’t specified
	     = (string) current transformation string
	     * else
	     = (object) @Element
	    \*/
	    elproto.transform = function (tstr) {
	        var _ = this._;
	        if (tstr == null) {
	            return _.transform;
	        }
	        R._extractTransform(this, tstr);

	        this.clip && $(this.clip, {transform: this.matrix.invert()});
	        this.pattern && updatePosition(this);
	        this.node && $(this.node, {transform: this.matrix});

	        if (_.sx != 1 || _.sy != 1) {
	            var sw = this.attrs[has]("stroke-width") ? this.attrs["stroke-width"] : 1;
	            this.attr({"stroke-width": sw});
	        }

	        return this;
	    };
	    /*\
	     * Element.hide
	     [ method ]
	     **
	     * Makes element invisible. See @Element.show.
	     = (object) @Element
	    \*/
	    elproto.hide = function () {
	        if(!this.removed) this.node.style.display = "none";
	        return this;
	    };
	    /*\
	     * Element.show
	     [ method ]
	     **
	     * Makes element visible. See @Element.hide.
	     = (object) @Element
	    \*/
	    elproto.show = function () {
	        if(!this.removed) this.node.style.display = "";
	        return this;
	    };
	    /*\
	     * Element.remove
	     [ method ]
	     **
	     * Removes element from the paper.
	    \*/
	    elproto.remove = function () {
	        var node = getRealNode(this.node);
	        if (this.removed || !node.parentNode) {
	            return;
	        }
	        var paper = this.paper;
	        paper.__set__ && paper.__set__.exclude(this);
	        eve.unbind("raphael.*.*." + this.id);
	        if (this.gradient) {
	            paper.defs.removeChild(this.gradient);
	        }
	        R._tear(this, paper);

	        node.parentNode.removeChild(node);

	        // Remove custom data for element
	        this.removeData();

	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	        this.removed = true;
	    };
	    elproto._getBBox = function () {
	        if (this.node.style.display == "none") {
	            this.show();
	            var hide = true;
	        }
	        var canvasHidden = false,
	            containerStyle;
	        if (this.paper.canvas.parentElement) {
	          containerStyle = this.paper.canvas.parentElement.style;
	        } //IE10+ can't find parentElement
	        else if (this.paper.canvas.parentNode) {
	          containerStyle = this.paper.canvas.parentNode.style;
	        }

	        if(containerStyle && containerStyle.display == "none") {
	          canvasHidden = true;
	          containerStyle.display = "";
	        }
	        var bbox = {};
	        try {
	            bbox = this.node.getBBox();
	        } catch(e) {
	            // Firefox 3.0.x, 25.0.1 (probably more versions affected) play badly here - possible fix
	            bbox = {
	                x: this.node.clientLeft,
	                y: this.node.clientTop,
	                width: this.node.clientWidth,
	                height: this.node.clientHeight
	            }
	        } finally {
	            bbox = bbox || {};
	            if(canvasHidden){
	              containerStyle.display = "none";
	            }
	        }
	        hide && this.hide();
	        return bbox;
	    };
	    /*\
	     * Element.attr
	     [ method ]
	     **
	     * Sets the attributes of the element.
	     > Parameters
	     - attrName (string) attribute’s name
	     - value (string) value
	     * or
	     - params (object) object of name/value pairs
	     * or
	     - attrName (string) attribute’s name
	     * or
	     - attrNames (array) in this case method returns array of current values for given attribute names
	     = (object) @Element if attrsName & value or params are passed in.
	     = (...) value of the attribute if only attrsName is passed in.
	     = (array) array of values of the attribute if attrsNames is passed in.
	     = (object) object of attributes if nothing is passed in.
	     > Possible parameters
	     # <p>Please refer to the <a href="http://www.w3.org/TR/SVG/" title="The W3C Recommendation for the SVG language describes these properties in detail.">SVG specification</a> for an explanation of these parameters.</p>
	     o arrow-end (string) arrowhead on the end of the path. The format for string is `<type>[-<width>[-<length>]]`. Possible types: `classic`, `block`, `open`, `oval`, `diamond`, `none`, width: `wide`, `narrow`, `medium`, length: `long`, `short`, `midium`.
	     o clip-rect (string) comma or space separated values: x, y, width and height
	     o cursor (string) CSS type of the cursor
	     o cx (number) the x-axis coordinate of the center of the circle, or ellipse
	     o cy (number) the y-axis coordinate of the center of the circle, or ellipse
	     o fill (string) colour, gradient or image
	     o fill-opacity (number)
	     o font (string)
	     o font-family (string)
	     o font-size (number) font size in pixels
	     o font-weight (string)
	     o height (number)
	     o href (string) URL, if specified element behaves as hyperlink
	     o opacity (number)
	     o path (string) SVG path string format
	     o r (number) radius of the circle, ellipse or rounded corner on the rect
	     o rx (number) horisontal radius of the ellipse
	     o ry (number) vertical radius of the ellipse
	     o src (string) image URL, only works for @Element.image element
	     o stroke (string) stroke colour
	     o stroke-dasharray (string) [“”, “none”, “`-`”, “`.`”, “`-.`”, “`-..`”, “`. `”, “`- `”, “`--`”, “`- .`”, “`--.`”, “`--..`”]
	     o stroke-linecap (string) [“`butt`”, “`square`”, “`round`”]
	     o stroke-linejoin (string) [“`bevel`”, “`round`”, “`miter`”]
	     o stroke-miterlimit (number)
	     o stroke-opacity (number)
	     o stroke-width (number) stroke width in pixels, default is '1'
	     o target (string) used with href
	     o text (string) contents of the text element. Use `\n` for multiline text
	     o text-anchor (string) [“`start`”, “`middle`”, “`end`”], default is “`middle`”
	     o title (string) will create tooltip with a given text
	     o transform (string) see @Element.transform
	     o width (number)
	     o x (number)
	     o y (number)
	     > Gradients
	     * Linear gradient format: “`‹angle›-‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`90-#fff-#000`” – 90°
	     * gradient from white to black or “`0-#fff-#f00:20-#000`” – 0° gradient from white via red (at 20%) to black.
	     *
	     * radial gradient: “`r[(‹fx›, ‹fy›)]‹colour›[-‹colour›[:‹offset›]]*-‹colour›`”, example: “`r#fff-#000`” –
	     * gradient from white to black or “`r(0.25, 0.75)#fff-#000`” – gradient from white to black with focus point
	     * at 0.25, 0.75. Focus point coordinates are in 0..1 range. Radial gradients can only be applied to circles and ellipses.
	     > Path String
	     # <p>Please refer to <a href="http://www.w3.org/TR/SVG/paths.html#PathData" title="Details of a path’s data attribute’s format are described in the SVG specification.">SVG documentation regarding path string</a>. Raphaël fully supports it.</p>
	     > Colour Parsing
	     # <ul>
	     #     <li>Colour name (“<code>red</code>”, “<code>green</code>”, “<code>cornflowerblue</code>”, etc)</li>
	     #     <li>#••• — shortened HTML colour: (“<code>#000</code>”, “<code>#fc0</code>”, etc)</li>
	     #     <li>#•••••• — full length HTML colour: (“<code>#000000</code>”, “<code>#bd2300</code>”)</li>
	     #     <li>rgb(•••, •••, •••) — red, green and blue channels’ values: (“<code>rgb(200,&nbsp;100,&nbsp;0)</code>”)</li>
	     #     <li>rgb(•••%, •••%, •••%) — same as above, but in %: (“<code>rgb(100%,&nbsp;175%,&nbsp;0%)</code>”)</li>
	     #     <li>rgba(•••, •••, •••, •••) — red, green and blue channels’ values: (“<code>rgba(200,&nbsp;100,&nbsp;0, .5)</code>”)</li>
	     #     <li>rgba(•••%, •••%, •••%, •••%) — same as above, but in %: (“<code>rgba(100%,&nbsp;175%,&nbsp;0%, 50%)</code>”)</li>
	     #     <li>hsb(•••, •••, •••) — hue, saturation and brightness values: (“<code>hsb(0.5,&nbsp;0.25,&nbsp;1)</code>”)</li>
	     #     <li>hsb(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsba(•••, •••, •••, •••) — same as above, but with opacity</li>
	     #     <li>hsl(•••, •••, •••) — almost the same as hsb, see <a href="http://en.wikipedia.org/wiki/HSL_and_HSV" title="HSL and HSV - Wikipedia, the free encyclopedia">Wikipedia page</a></li>
	     #     <li>hsl(•••%, •••%, •••%) — same as above, but in %</li>
	     #     <li>hsla(•••, •••, •••, •••) — same as above, but with opacity</li>
	     #     <li>Optionally for hsb and hsl you could specify hue as a degree: “<code>hsl(240deg,&nbsp;1,&nbsp;.5)</code>” or, if you want to go fancy, “<code>hsl(240°,&nbsp;1,&nbsp;.5)</code>”</li>
	     # </ul>
	    \*/
	    elproto.attr = function (name, value) {
	        if (this.removed) {
	            return this;
	        }
	        if (name == null) {
	            var res = {};
	            for (var a in this.attrs) if (this.attrs[has](a)) {
	                res[a] = this.attrs[a];
	            }
	            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
	            res.transform = this._.transform;
	            return res;
	        }
	        if (value == null && R.is(name, "string")) {
	            if (name == "fill" && this.attrs.fill == "none" && this.attrs.gradient) {
	                return this.attrs.gradient;
	            }
	            if (name == "transform") {
	                return this._.transform;
	            }
	            var names = name.split(separator),
	                out = {};
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                name = names[i];
	                if (name in this.attrs) {
	                    out[name] = this.attrs[name];
	                } else if (R.is(this.paper.customAttributes[name], "function")) {
	                    out[name] = this.paper.customAttributes[name].def;
	                } else {
	                    out[name] = R._availableAttrs[name];
	                }
	            }
	            return ii - 1 ? out : out[names[0]];
	        }
	        if (value == null && R.is(name, "array")) {
	            out = {};
	            for (i = 0, ii = name.length; i < ii; i++) {
	                out[name[i]] = this.attr(name[i]);
	            }
	            return out;
	        }
	        if (value != null) {
	            var params = {};
	            params[name] = value;
	        } else if (name != null && R.is(name, "object")) {
	            params = name;
	        }
	        for (var key in params) {
	            eve("raphael.attr." + key + "." + this.id, this, params[key]);
	        }
	        for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
	            var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
	            this.attrs[key] = params[key];
	            for (var subkey in par) if (par[has](subkey)) {
	                params[subkey] = par[subkey];
	            }
	        }
	        setFillAndStroke(this, params);
	        return this;
	    };
	    /*\
	     * Element.toFront
	     [ method ]
	     **
	     * Moves the element so it is the closest to the viewer’s eyes, on top of other elements.
	     = (object) @Element
	    \*/
	    elproto.toFront = function () {
	        if (this.removed) {
	            return this;
	        }
	        var node = getRealNode(this.node);
	        node.parentNode.appendChild(node);
	        var svg = this.paper;
	        svg.top != this && R._tofront(this, svg);
	        return this;
	    };
	    /*\
	     * Element.toBack
	     [ method ]
	     **
	     * Moves the element so it is the furthest from the viewer’s eyes, behind other elements.
	     = (object) @Element
	    \*/
	    elproto.toBack = function () {
	        if (this.removed) {
	            return this;
	        }
	        var node = getRealNode(this.node);
	        var parentNode = node.parentNode;
	        parentNode.insertBefore(node, parentNode.firstChild);
	        R._toback(this, this.paper);
	        var svg = this.paper;
	        return this;
	    };
	    /*\
	     * Element.insertAfter
	     [ method ]
	     **
	     * Inserts current object after the given one.
	     = (object) @Element
	    \*/
	    elproto.insertAfter = function (element) {
	        if (this.removed || !element) {
	            return this;
	        }

	        var node = getRealNode(this.node);
	        var afterNode = getRealNode(element.node || element[element.length - 1].node);
	        if (afterNode.nextSibling) {
	            afterNode.parentNode.insertBefore(node, afterNode.nextSibling);
	        } else {
	            afterNode.parentNode.appendChild(node);
	        }
	        R._insertafter(this, element, this.paper);
	        return this;
	    };
	    /*\
	     * Element.insertBefore
	     [ method ]
	     **
	     * Inserts current object before the given one.
	     = (object) @Element
	    \*/
	    elproto.insertBefore = function (element) {
	        if (this.removed || !element) {
	            return this;
	        }

	        var node = getRealNode(this.node);
	        var beforeNode = getRealNode(element.node || element[0].node);
	        beforeNode.parentNode.insertBefore(node, beforeNode);
	        R._insertbefore(this, element, this.paper);
	        return this;
	    };
	    elproto.blur = function (size) {
	        // Experimental. No Safari support. Use it on your own risk.
	        var t = this;
	        if (+size !== 0) {
	            var fltr = $("filter"),
	                blur = $("feGaussianBlur");
	            t.attrs.blur = size;
	            fltr.id = R.createUUID();
	            $(blur, {stdDeviation: +size || 1.5});
	            fltr.appendChild(blur);
	            t.paper.defs.appendChild(fltr);
	            t._blur = fltr;
	            $(t.node, {filter: "url(#" + fltr.id + ")"});
	        } else {
	            if (t._blur) {
	                t._blur.parentNode.removeChild(t._blur);
	                delete t._blur;
	                delete t.attrs.blur;
	            }
	            t.node.removeAttribute("filter");
	        }
	        return t;
	    };
	    R._engine.circle = function (svg, x, y, r) {
	        var el = $("circle");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {cx: x, cy: y, r: r, fill: "none", stroke: "#000"};
	        res.type = "circle";
	        $(el, res.attrs);
	        return res;
	    };
	    R._engine.rect = function (svg, x, y, w, h, r) {
	        var el = $("rect");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {x: x, y: y, width: w, height: h, rx: r || 0, ry: r || 0, fill: "none", stroke: "#000"};
	        res.type = "rect";
	        $(el, res.attrs);
	        return res;
	    };
	    R._engine.ellipse = function (svg, x, y, rx, ry) {
	        var el = $("ellipse");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {cx: x, cy: y, rx: rx, ry: ry, fill: "none", stroke: "#000"};
	        res.type = "ellipse";
	        $(el, res.attrs);
	        return res;
	    };
	    R._engine.image = function (svg, src, x, y, w, h) {
	        var el = $("image");
	        $(el, {x: x, y: y, width: w, height: h, preserveAspectRatio: "none"});
	        el.setAttributeNS(xlink, "href", src);
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {x: x, y: y, width: w, height: h, src: src};
	        res.type = "image";
	        return res;
	    };
	    R._engine.text = function (svg, x, y, text) {
	        var el = $("text");
	        svg.canvas && svg.canvas.appendChild(el);
	        var res = new Element(el, svg);
	        res.attrs = {
	            x: x,
	            y: y,
	            "text-anchor": "middle",
	            text: text,
	            "font-family": R._availableAttrs["font-family"],
	            "font-size": R._availableAttrs["font-size"],
	            stroke: "none",
	            fill: "#000"
	        };
	        res.type = "text";
	        setFillAndStroke(res, res.attrs);
	        return res;
	    };
	    R._engine.setSize = function (width, height) {
	        this.width = width || this.width;
	        this.height = height || this.height;
	        this.canvas.setAttribute("width", this.width);
	        this.canvas.setAttribute("height", this.height);
	        if (this._viewBox) {
	            this.setViewBox.apply(this, this._viewBox);
	        }
	        return this;
	    };
	    R._engine.create = function () {
	        var con = R._getContainer.apply(0, arguments),
	            container = con && con.container,
	            x = con.x,
	            y = con.y,
	            width = con.width,
	            height = con.height;
	        if (!container) {
	            throw new Error("SVG container not found.");
	        }
	        var cnvs = $("svg"),
	            css = "overflow:hidden;",
	            isFloating;
	        x = x || 0;
	        y = y || 0;
	        width = width || 512;
	        height = height || 342;
	        $(cnvs, {
	            height: height,
	            version: 1.1,
	            width: width,
	            xmlns: "http://www.w3.org/2000/svg",
	            "xmlns:xlink": "http://www.w3.org/1999/xlink"
	        });
	        if (container == 1) {
	            cnvs.style.cssText = css + "position:absolute;left:" + x + "px;top:" + y + "px";
	            R._g.doc.body.appendChild(cnvs);
	            isFloating = 1;
	        } else {
	            cnvs.style.cssText = css + "position:relative";
	            if (container.firstChild) {
	                container.insertBefore(cnvs, container.firstChild);
	            } else {
	                container.appendChild(cnvs);
	            }
	        }
	        container = new R._Paper;
	        container.width = width;
	        container.height = height;
	        container.canvas = cnvs;
	        container.clear();
	        container._left = container._top = 0;
	        isFloating && (container.renderfix = function () {});
	        container.renderfix();
	        return container;
	    };
	    R._engine.setViewBox = function (x, y, w, h, fit) {
	        eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
	        var paperSize = this.getSize(),
	            size = mmax(w / paperSize.width, h / paperSize.height),
	            top = this.top,
	            aspectRatio = fit ? "xMidYMid meet" : "xMinYMin",
	            vb,
	            sw;
	        if (x == null) {
	            if (this._vbSize) {
	                size = 1;
	            }
	            delete this._vbSize;
	            vb = "0 0 " + this.width + S + this.height;
	        } else {
	            this._vbSize = size;
	            vb = x + S + y + S + w + S + h;
	        }
	        $(this.canvas, {
	            viewBox: vb,
	            preserveAspectRatio: aspectRatio
	        });
	        while (size && top) {
	            sw = "stroke-width" in top.attrs ? top.attrs["stroke-width"] : 1;
	            top.attr({"stroke-width": sw});
	            top._.dirty = 1;
	            top._.dirtyT = 1;
	            top = top.prev;
	        }
	        this._viewBox = [x, y, w, h, !!fit];
	        return this;
	    };
	    /*\
	     * Paper.renderfix
	     [ method ]
	     **
	     * Fixes the issue of Firefox and IE9 regarding subpixel rendering. If paper is dependent
	     * on other elements after reflow it could shift half pixel which cause for lines to lost their crispness.
	     * This method fixes the issue.
	     **
	       Special thanks to Mariusz Nowak (http://www.medikoo.com/) for this method.
	    \*/
	    R.prototype.renderfix = function () {
	        var cnvs = this.canvas,
	            s = cnvs.style,
	            pos;
	        try {
	            pos = cnvs.getScreenCTM() || cnvs.createSVGMatrix();
	        } catch (e) {
	            pos = cnvs.createSVGMatrix();
	        }
	        var left = -pos.e % 1,
	            top = -pos.f % 1;
	        if (left || top) {
	            if (left) {
	                this._left = (this._left + left) % 1;
	                s.left = this._left + "px";
	            }
	            if (top) {
	                this._top = (this._top + top) % 1;
	                s.top = this._top + "px";
	            }
	        }
	    };
	    /*\
	     * Paper.clear
	     [ method ]
	     **
	     * Clears the paper, i.e. removes all the elements.
	    \*/
	    R.prototype.clear = function () {
	        R.eve("raphael.clear", this);
	        var c = this.canvas;
	        while (c.firstChild) {
	            c.removeChild(c.firstChild);
	        }
	        this.bottom = this.top = null;
	        (this.desc = $("desc")).appendChild(R._g.doc.createTextNode("Created with Rapha\xebl " + R.version));
	        c.appendChild(this.desc);
	        c.appendChild(this.defs = $("defs"));
	    };
	    /*\
	     * Paper.remove
	     [ method ]
	     **
	     * Removes the paper from the DOM.
	    \*/
	    R.prototype.remove = function () {
	        eve("raphael.remove", this);
	        this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	    };
	    var setproto = R.st;
	    for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {
	        setproto[method] = (function (methodname) {
	            return function () {
	                var arg = arguments;
	                return this.forEach(function (el) {
	                    el[methodname].apply(el, arg);
	                });
	            };
	        })(method);
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = function(R) {
	    if (R && !R.vml) {
	        return;
	    }

	    var has = "hasOwnProperty",
	        Str = String,
	        toFloat = parseFloat,
	        math = Math,
	        round = math.round,
	        mmax = math.max,
	        mmin = math.min,
	        abs = math.abs,
	        fillString = "fill",
	        separator = /[, ]+/,
	        eve = R.eve,
	        ms = " progid:DXImageTransform.Microsoft",
	        S = " ",
	        E = "",
	        map = {M: "m", L: "l", C: "c", Z: "x", m: "t", l: "r", c: "v", z: "x"},
	        bites = /([clmz]),?([^clmz]*)/gi,
	        blurregexp = / progid:\S+Blur\([^\)]+\)/g,
	        val = /-?[^,\s-]+/g,
	        cssDot = "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
	        zoom = 21600,
	        pathTypes = {path: 1, rect: 1, image: 1},
	        ovalTypes = {circle: 1, ellipse: 1},
	        path2vml = function (path) {
	            var total =  /[ahqstv]/ig,
	                command = R._pathToAbsolute;
	            Str(path).match(total) && (command = R._path2curve);
	            total = /[clmz]/g;
	            if (command == R._pathToAbsolute && !Str(path).match(total)) {
	                var res = Str(path).replace(bites, function (all, command, args) {
	                    var vals = [],
	                        isMove = command.toLowerCase() == "m",
	                        res = map[command];
	                    args.replace(val, function (value) {
	                        if (isMove && vals.length == 2) {
	                            res += vals + map[command == "m" ? "l" : "L"];
	                            vals = [];
	                        }
	                        vals.push(round(value * zoom));
	                    });
	                    return res + vals;
	                });
	                return res;
	            }
	            var pa = command(path), p, r;
	            res = [];
	            for (var i = 0, ii = pa.length; i < ii; i++) {
	                p = pa[i];
	                r = pa[i][0].toLowerCase();
	                r == "z" && (r = "x");
	                for (var j = 1, jj = p.length; j < jj; j++) {
	                    r += round(p[j] * zoom) + (j != jj - 1 ? "," : E);
	                }
	                res.push(r);
	            }
	            return res.join(S);
	        },
	        compensation = function (deg, dx, dy) {
	            var m = R.matrix();
	            m.rotate(-deg, .5, .5);
	            return {
	                dx: m.x(dx, dy),
	                dy: m.y(dx, dy)
	            };
	        },
	        setCoords = function (p, sx, sy, dx, dy, deg) {
	            var _ = p._,
	                m = p.matrix,
	                fillpos = _.fillpos,
	                o = p.node,
	                s = o.style,
	                y = 1,
	                flip = "",
	                dxdy,
	                kx = zoom / sx,
	                ky = zoom / sy;
	            s.visibility = "hidden";
	            if (!sx || !sy) {
	                return;
	            }
	            o.coordsize = abs(kx) + S + abs(ky);
	            s.rotation = deg * (sx * sy < 0 ? -1 : 1);
	            if (deg) {
	                var c = compensation(deg, dx, dy);
	                dx = c.dx;
	                dy = c.dy;
	            }
	            sx < 0 && (flip += "x");
	            sy < 0 && (flip += " y") && (y = -1);
	            s.flip = flip;
	            o.coordorigin = (dx * -kx) + S + (dy * -ky);
	            if (fillpos || _.fillsize) {
	                var fill = o.getElementsByTagName(fillString);
	                fill = fill && fill[0];
	                o.removeChild(fill);
	                if (fillpos) {
	                    c = compensation(deg, m.x(fillpos[0], fillpos[1]), m.y(fillpos[0], fillpos[1]));
	                    fill.position = c.dx * y + S + c.dy * y;
	                }
	                if (_.fillsize) {
	                    fill.size = _.fillsize[0] * abs(sx) + S + _.fillsize[1] * abs(sy);
	                }
	                o.appendChild(fill);
	            }
	            s.visibility = "visible";
	        };
	    R.toString = function () {
	        return  "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version;
	    };
	    var addArrow = function (o, value, isEnd) {
	        var values = Str(value).toLowerCase().split("-"),
	            se = isEnd ? "end" : "start",
	            i = values.length,
	            type = "classic",
	            w = "medium",
	            h = "medium";
	        while (i--) {
	            switch (values[i]) {
	                case "block":
	                case "classic":
	                case "oval":
	                case "diamond":
	                case "open":
	                case "none":
	                    type = values[i];
	                    break;
	                case "wide":
	                case "narrow": h = values[i]; break;
	                case "long":
	                case "short": w = values[i]; break;
	            }
	        }
	        var stroke = o.node.getElementsByTagName("stroke")[0];
	        stroke[se + "arrow"] = type;
	        stroke[se + "arrowlength"] = w;
	        stroke[se + "arrowwidth"] = h;
	    },
	    setFillAndStroke = function (o, params) {
	        // o.paper.canvas.style.display = "none";
	        o.attrs = o.attrs || {};
	        var node = o.node,
	            a = o.attrs,
	            s = node.style,
	            xy,
	            newpath = pathTypes[o.type] && (params.x != a.x || params.y != a.y || params.width != a.width || params.height != a.height || params.cx != a.cx || params.cy != a.cy || params.rx != a.rx || params.ry != a.ry || params.r != a.r),
	            isOval = ovalTypes[o.type] && (a.cx != params.cx || a.cy != params.cy || a.r != params.r || a.rx != params.rx || a.ry != params.ry),
	            res = o;


	        for (var par in params) if (params[has](par)) {
	            a[par] = params[par];
	        }
	        if (newpath) {
	            a.path = R._getPath[o.type](o);
	            o._.dirty = 1;
	        }
	        params.href && (node.href = params.href);
	        params.title && (node.title = params.title);
	        params.target && (node.target = params.target);
	        params.cursor && (s.cursor = params.cursor);
	        "blur" in params && o.blur(params.blur);
	        if (params.path && o.type == "path" || newpath) {
	            node.path = path2vml(~Str(a.path).toLowerCase().indexOf("r") ? R._pathToAbsolute(a.path) : a.path);
	            o._.dirty = 1;
	            if (o.type == "image") {
	                o._.fillpos = [a.x, a.y];
	                o._.fillsize = [a.width, a.height];
	                setCoords(o, 1, 1, 0, 0, 0);
	            }
	        }
	        "transform" in params && o.transform(params.transform);
	        if (isOval) {
	            var cx = +a.cx,
	                cy = +a.cy,
	                rx = +a.rx || +a.r || 0,
	                ry = +a.ry || +a.r || 0;
	            node.path = R.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", round((cx - rx) * zoom), round((cy - ry) * zoom), round((cx + rx) * zoom), round((cy + ry) * zoom), round(cx * zoom));
	            o._.dirty = 1;
	        }
	        if ("clip-rect" in params) {
	            var rect = Str(params["clip-rect"]).split(separator);
	            if (rect.length == 4) {
	                rect[2] = +rect[2] + (+rect[0]);
	                rect[3] = +rect[3] + (+rect[1]);
	                var div = node.clipRect || R._g.doc.createElement("div"),
	                    dstyle = div.style;
	                dstyle.clip = R.format("rect({1}px {2}px {3}px {0}px)", rect);
	                if (!node.clipRect) {
	                    dstyle.position = "absolute";
	                    dstyle.top = 0;
	                    dstyle.left = 0;
	                    dstyle.width = o.paper.width + "px";
	                    dstyle.height = o.paper.height + "px";
	                    node.parentNode.insertBefore(div, node);
	                    div.appendChild(node);
	                    node.clipRect = div;
	                }
	            }
	            if (!params["clip-rect"]) {
	                node.clipRect && (node.clipRect.style.clip = "auto");
	            }
	        }
	        if (o.textpath) {
	            var textpathStyle = o.textpath.style;
	            params.font && (textpathStyle.font = params.font);
	            params["font-family"] && (textpathStyle.fontFamily = '"' + params["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, E) + '"');
	            params["font-size"] && (textpathStyle.fontSize = params["font-size"]);
	            params["font-weight"] && (textpathStyle.fontWeight = params["font-weight"]);
	            params["font-style"] && (textpathStyle.fontStyle = params["font-style"]);
	        }
	        if ("arrow-start" in params) {
	            addArrow(res, params["arrow-start"]);
	        }
	        if ("arrow-end" in params) {
	            addArrow(res, params["arrow-end"], 1);
	        }
	        if (params.opacity != null ||
	            params.fill != null ||
	            params.src != null ||
	            params.stroke != null ||
	            params["stroke-width"] != null ||
	            params["stroke-opacity"] != null ||
	            params["fill-opacity"] != null ||
	            params["stroke-dasharray"] != null ||
	            params["stroke-miterlimit"] != null ||
	            params["stroke-linejoin"] != null ||
	            params["stroke-linecap"] != null) {
	            var fill = node.getElementsByTagName(fillString),
	                newfill = false;
	            fill = fill && fill[0];
	            !fill && (newfill = fill = createNode(fillString));
	            if (o.type == "image" && params.src) {
	                fill.src = params.src;
	            }
	            params.fill && (fill.on = true);
	            if (fill.on == null || params.fill == "none" || params.fill === null) {
	                fill.on = false;
	            }
	            if (fill.on && params.fill) {
	                var isURL = Str(params.fill).match(R._ISURL);
	                if (isURL) {
	                    fill.parentNode == node && node.removeChild(fill);
	                    fill.rotate = true;
	                    fill.src = isURL[1];
	                    fill.type = "tile";
	                    var bbox = o.getBBox(1);
	                    fill.position = bbox.x + S + bbox.y;
	                    o._.fillpos = [bbox.x, bbox.y];

	                    R._preload(isURL[1], function () {
	                        o._.fillsize = [this.offsetWidth, this.offsetHeight];
	                    });
	                } else {
	                    fill.color = R.getRGB(params.fill).hex;
	                    fill.src = E;
	                    fill.type = "solid";
	                    if (R.getRGB(params.fill).error && (res.type in {circle: 1, ellipse: 1} || Str(params.fill).charAt() != "r") && addGradientFill(res, params.fill, fill)) {
	                        a.fill = "none";
	                        a.gradient = params.fill;
	                        fill.rotate = false;
	                    }
	                }
	            }
	            if ("fill-opacity" in params || "opacity" in params) {
	                var opacity = ((+a["fill-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+R.getRGB(params.fill).o + 1 || 2) - 1);
	                opacity = mmin(mmax(opacity, 0), 1);
	                fill.opacity = opacity;
	                if (fill.src) {
	                    fill.color = "none";
	                }
	            }
	            node.appendChild(fill);
	            var stroke = (node.getElementsByTagName("stroke") && node.getElementsByTagName("stroke")[0]),
	            newstroke = false;
	            !stroke && (newstroke = stroke = createNode("stroke"));
	            if ((params.stroke && params.stroke != "none") ||
	                params["stroke-width"] ||
	                params["stroke-opacity"] != null ||
	                params["stroke-dasharray"] ||
	                params["stroke-miterlimit"] ||
	                params["stroke-linejoin"] ||
	                params["stroke-linecap"]) {
	                stroke.on = true;
	            }
	            (params.stroke == "none" || params.stroke === null || stroke.on == null || params.stroke == 0 || params["stroke-width"] == 0) && (stroke.on = false);
	            var strokeColor = R.getRGB(params.stroke);
	            stroke.on && params.stroke && (stroke.color = strokeColor.hex);
	            opacity = ((+a["stroke-opacity"] + 1 || 2) - 1) * ((+a.opacity + 1 || 2) - 1) * ((+strokeColor.o + 1 || 2) - 1);
	            var width = (toFloat(params["stroke-width"]) || 1) * .75;
	            opacity = mmin(mmax(opacity, 0), 1);
	            params["stroke-width"] == null && (width = a["stroke-width"]);
	            params["stroke-width"] && (stroke.weight = width);
	            width && width < 1 && (opacity *= width) && (stroke.weight = 1);
	            stroke.opacity = opacity;

	            params["stroke-linejoin"] && (stroke.joinstyle = params["stroke-linejoin"] || "miter");
	            stroke.miterlimit = params["stroke-miterlimit"] || 8;
	            params["stroke-linecap"] && (stroke.endcap = params["stroke-linecap"] == "butt" ? "flat" : params["stroke-linecap"] == "square" ? "square" : "round");
	            if ("stroke-dasharray" in params) {
	                var dasharray = {
	                    "-": "shortdash",
	                    ".": "shortdot",
	                    "-.": "shortdashdot",
	                    "-..": "shortdashdotdot",
	                    ". ": "dot",
	                    "- ": "dash",
	                    "--": "longdash",
	                    "- .": "dashdot",
	                    "--.": "longdashdot",
	                    "--..": "longdashdotdot"
	                };
	                stroke.dashstyle = dasharray[has](params["stroke-dasharray"]) ? dasharray[params["stroke-dasharray"]] : E;
	            }
	            newstroke && node.appendChild(stroke);
	        }
	        if (res.type == "text") {
	            res.paper.canvas.style.display = E;
	            var span = res.paper.span,
	                m = 100,
	                fontSize = a.font && a.font.match(/\d+(?:\.\d*)?(?=px)/);
	            s = span.style;
	            a.font && (s.font = a.font);
	            a["font-family"] && (s.fontFamily = a["font-family"]);
	            a["font-weight"] && (s.fontWeight = a["font-weight"]);
	            a["font-style"] && (s.fontStyle = a["font-style"]);
	            fontSize = toFloat(a["font-size"] || fontSize && fontSize[0]) || 10;
	            s.fontSize = fontSize * m + "px";
	            res.textpath.string && (span.innerHTML = Str(res.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
	            var brect = span.getBoundingClientRect();
	            res.W = a.w = (brect.right - brect.left) / m;
	            res.H = a.h = (brect.bottom - brect.top) / m;
	            // res.paper.canvas.style.display = "none";
	            res.X = a.x;
	            res.Y = a.y + res.H / 2;

	            ("x" in params || "y" in params) && (res.path.v = R.format("m{0},{1}l{2},{1}", round(a.x * zoom), round(a.y * zoom), round(a.x * zoom) + 1));
	            var dirtyattrs = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
	            for (var d = 0, dd = dirtyattrs.length; d < dd; d++) if (dirtyattrs[d] in params) {
	                res._.dirty = 1;
	                break;
	            }

	            // text-anchor emulation
	            switch (a["text-anchor"]) {
	                case "start":
	                    res.textpath.style["v-text-align"] = "left";
	                    res.bbx = res.W / 2;
	                break;
	                case "end":
	                    res.textpath.style["v-text-align"] = "right";
	                    res.bbx = -res.W / 2;
	                break;
	                default:
	                    res.textpath.style["v-text-align"] = "center";
	                    res.bbx = 0;
	                break;
	            }
	            res.textpath.style["v-text-kern"] = true;
	        }
	        // res.paper.canvas.style.display = E;
	    },
	    addGradientFill = function (o, gradient, fill) {
	        o.attrs = o.attrs || {};
	        var attrs = o.attrs,
	            pow = Math.pow,
	            opacity,
	            oindex,
	            type = "linear",
	            fxfy = ".5 .5";
	        o.attrs.gradient = gradient;
	        gradient = Str(gradient).replace(R._radial_gradient, function (all, fx, fy) {
	            type = "radial";
	            if (fx && fy) {
	                fx = toFloat(fx);
	                fy = toFloat(fy);
	                pow(fx - .5, 2) + pow(fy - .5, 2) > .25 && (fy = math.sqrt(.25 - pow(fx - .5, 2)) * ((fy > .5) * 2 - 1) + .5);
	                fxfy = fx + S + fy;
	            }
	            return E;
	        });
	        gradient = gradient.split(/\s*\-\s*/);
	        if (type == "linear") {
	            var angle = gradient.shift();
	            angle = -toFloat(angle);
	            if (isNaN(angle)) {
	                return null;
	            }
	        }
	        var dots = R._parseDots(gradient);
	        if (!dots) {
	            return null;
	        }
	        o = o.shape || o.node;
	        if (dots.length) {
	            o.removeChild(fill);
	            fill.on = true;
	            fill.method = "none";
	            fill.color = dots[0].color;
	            fill.color2 = dots[dots.length - 1].color;
	            var clrs = [];
	            for (var i = 0, ii = dots.length; i < ii; i++) {
	                dots[i].offset && clrs.push(dots[i].offset + S + dots[i].color);
	            }
	            fill.colors = clrs.length ? clrs.join() : "0% " + fill.color;
	            if (type == "radial") {
	                fill.type = "gradientTitle";
	                fill.focus = "100%";
	                fill.focussize = "0 0";
	                fill.focusposition = fxfy;
	                fill.angle = 0;
	            } else {
	                // fill.rotate= true;
	                fill.type = "gradient";
	                fill.angle = (270 - angle) % 360;
	            }
	            o.appendChild(fill);
	        }
	        return 1;
	    },
	    Element = function (node, vml) {
	        this[0] = this.node = node;
	        node.raphael = true;
	        this.id = R._oid++;
	        node.raphaelid = this.id;
	        this.X = 0;
	        this.Y = 0;
	        this.attrs = {};
	        this.paper = vml;
	        this.matrix = R.matrix();
	        this._ = {
	            transform: [],
	            sx: 1,
	            sy: 1,
	            dx: 0,
	            dy: 0,
	            deg: 0,
	            dirty: 1,
	            dirtyT: 1
	        };
	        !vml.bottom && (vml.bottom = this);
	        this.prev = vml.top;
	        vml.top && (vml.top.next = this);
	        vml.top = this;
	        this.next = null;
	    };
	    var elproto = R.el;

	    Element.prototype = elproto;
	    elproto.constructor = Element;
	    elproto.transform = function (tstr) {
	        if (tstr == null) {
	            return this._.transform;
	        }
	        var vbs = this.paper._viewBoxShift,
	            vbt = vbs ? "s" + [vbs.scale, vbs.scale] + "-1-1t" + [vbs.dx, vbs.dy] : E,
	            oldt;
	        if (vbs) {
	            oldt = tstr = Str(tstr).replace(/\.{3}|\u2026/g, this._.transform || E);
	        }
	        R._extractTransform(this, vbt + tstr);
	        var matrix = this.matrix.clone(),
	            skew = this.skew,
	            o = this.node,
	            split,
	            isGrad = ~Str(this.attrs.fill).indexOf("-"),
	            isPatt = !Str(this.attrs.fill).indexOf("url(");
	        matrix.translate(1, 1);
	        if (isPatt || isGrad || this.type == "image") {
	            skew.matrix = "1 0 0 1";
	            skew.offset = "0 0";
	            split = matrix.split();
	            if ((isGrad && split.noRotation) || !split.isSimple) {
	                o.style.filter = matrix.toFilter();
	                var bb = this.getBBox(),
	                    bbt = this.getBBox(1),
	                    dx = bb.x - bbt.x,
	                    dy = bb.y - bbt.y;
	                o.coordorigin = (dx * -zoom) + S + (dy * -zoom);
	                setCoords(this, 1, 1, dx, dy, 0);
	            } else {
	                o.style.filter = E;
	                setCoords(this, split.scalex, split.scaley, split.dx, split.dy, split.rotate);
	            }
	        } else {
	            o.style.filter = E;
	            skew.matrix = Str(matrix);
	            skew.offset = matrix.offset();
	        }
	        if (oldt !== null) { // empty string value is true as well
	            this._.transform = oldt;
	            R._extractTransform(this, oldt);
	        }
	        return this;
	    };
	    elproto.rotate = function (deg, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        if (deg == null) {
	            return;
	        }
	        deg = Str(deg).split(separator);
	        if (deg.length - 1) {
	            cx = toFloat(deg[1]);
	            cy = toFloat(deg[2]);
	        }
	        deg = toFloat(deg[0]);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	            cx = bbox.x + bbox.width / 2;
	            cy = bbox.y + bbox.height / 2;
	        }
	        this._.dirtyT = 1;
	        this.transform(this._.transform.concat([["r", deg, cx, cy]]));
	        return this;
	    };
	    elproto.translate = function (dx, dy) {
	        if (this.removed) {
	            return this;
	        }
	        dx = Str(dx).split(separator);
	        if (dx.length - 1) {
	            dy = toFloat(dx[1]);
	        }
	        dx = toFloat(dx[0]) || 0;
	        dy = +dy || 0;
	        if (this._.bbox) {
	            this._.bbox.x += dx;
	            this._.bbox.y += dy;
	        }
	        this.transform(this._.transform.concat([["t", dx, dy]]));
	        return this;
	    };
	    elproto.scale = function (sx, sy, cx, cy) {
	        if (this.removed) {
	            return this;
	        }
	        sx = Str(sx).split(separator);
	        if (sx.length - 1) {
	            sy = toFloat(sx[1]);
	            cx = toFloat(sx[2]);
	            cy = toFloat(sx[3]);
	            isNaN(cx) && (cx = null);
	            isNaN(cy) && (cy = null);
	        }
	        sx = toFloat(sx[0]);
	        (sy == null) && (sy = sx);
	        (cy == null) && (cx = cy);
	        if (cx == null || cy == null) {
	            var bbox = this.getBBox(1);
	        }
	        cx = cx == null ? bbox.x + bbox.width / 2 : cx;
	        cy = cy == null ? bbox.y + bbox.height / 2 : cy;

	        this.transform(this._.transform.concat([["s", sx, sy, cx, cy]]));
	        this._.dirtyT = 1;
	        return this;
	    };
	    elproto.hide = function () {
	        !this.removed && (this.node.style.display = "none");
	        return this;
	    };
	    elproto.show = function () {
	        !this.removed && (this.node.style.display = E);
	        return this;
	    };
	    // Needed to fix the vml setViewBox issues
	    elproto.auxGetBBox = R.el.getBBox;
	    elproto.getBBox = function(){
	      var b = this.auxGetBBox();
	      if (this.paper && this.paper._viewBoxShift)
	      {
	        var c = {};
	        var z = 1/this.paper._viewBoxShift.scale;
	        c.x = b.x - this.paper._viewBoxShift.dx;
	        c.x *= z;
	        c.y = b.y - this.paper._viewBoxShift.dy;
	        c.y *= z;
	        c.width  = b.width  * z;
	        c.height = b.height * z;
	        c.x2 = c.x + c.width;
	        c.y2 = c.y + c.height;
	        return c;
	      }
	      return b;
	    };
	    elproto._getBBox = function () {
	        if (this.removed) {
	            return {};
	        }
	        return {
	            x: this.X + (this.bbx || 0) - this.W / 2,
	            y: this.Y - this.H,
	            width: this.W,
	            height: this.H
	        };
	    };
	    elproto.remove = function () {
	        if (this.removed || !this.node.parentNode) {
	            return;
	        }
	        this.paper.__set__ && this.paper.__set__.exclude(this);
	        R.eve.unbind("raphael.*.*." + this.id);
	        R._tear(this, this.paper);
	        this.node.parentNode.removeChild(this.node);
	        this.shape && this.shape.parentNode.removeChild(this.shape);
	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	        this.removed = true;
	    };
	    elproto.attr = function (name, value) {
	        if (this.removed) {
	            return this;
	        }
	        if (name == null) {
	            var res = {};
	            for (var a in this.attrs) if (this.attrs[has](a)) {
	                res[a] = this.attrs[a];
	            }
	            res.gradient && res.fill == "none" && (res.fill = res.gradient) && delete res.gradient;
	            res.transform = this._.transform;
	            return res;
	        }
	        if (value == null && R.is(name, "string")) {
	            if (name == fillString && this.attrs.fill == "none" && this.attrs.gradient) {
	                return this.attrs.gradient;
	            }
	            var names = name.split(separator),
	                out = {};
	            for (var i = 0, ii = names.length; i < ii; i++) {
	                name = names[i];
	                if (name in this.attrs) {
	                    out[name] = this.attrs[name];
	                } else if (R.is(this.paper.customAttributes[name], "function")) {
	                    out[name] = this.paper.customAttributes[name].def;
	                } else {
	                    out[name] = R._availableAttrs[name];
	                }
	            }
	            return ii - 1 ? out : out[names[0]];
	        }
	        if (this.attrs && value == null && R.is(name, "array")) {
	            out = {};
	            for (i = 0, ii = name.length; i < ii; i++) {
	                out[name[i]] = this.attr(name[i]);
	            }
	            return out;
	        }
	        var params;
	        if (value != null) {
	            params = {};
	            params[name] = value;
	        }
	        value == null && R.is(name, "object") && (params = name);
	        for (var key in params) {
	            eve("raphael.attr." + key + "." + this.id, this, params[key]);
	        }
	        if (params) {
	            for (key in this.paper.customAttributes) if (this.paper.customAttributes[has](key) && params[has](key) && R.is(this.paper.customAttributes[key], "function")) {
	                var par = this.paper.customAttributes[key].apply(this, [].concat(params[key]));
	                this.attrs[key] = params[key];
	                for (var subkey in par) if (par[has](subkey)) {
	                    params[subkey] = par[subkey];
	                }
	            }
	            // this.paper.canvas.style.display = "none";
	            if (params.text && this.type == "text") {
	                this.textpath.string = params.text;
	            }
	            setFillAndStroke(this, params);
	            // this.paper.canvas.style.display = E;
	        }
	        return this;
	    };
	    elproto.toFront = function () {
	        !this.removed && this.node.parentNode.appendChild(this.node);
	        this.paper && this.paper.top != this && R._tofront(this, this.paper);
	        return this;
	    };
	    elproto.toBack = function () {
	        if (this.removed) {
	            return this;
	        }
	        if (this.node.parentNode.firstChild != this.node) {
	            this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild);
	            R._toback(this, this.paper);
	        }
	        return this;
	    };
	    elproto.insertAfter = function (element) {
	        if (this.removed) {
	            return this;
	        }
	        if (element.constructor == R.st.constructor) {
	            element = element[element.length - 1];
	        }
	        if (element.node.nextSibling) {
	            element.node.parentNode.insertBefore(this.node, element.node.nextSibling);
	        } else {
	            element.node.parentNode.appendChild(this.node);
	        }
	        R._insertafter(this, element, this.paper);
	        return this;
	    };
	    elproto.insertBefore = function (element) {
	        if (this.removed) {
	            return this;
	        }
	        if (element.constructor == R.st.constructor) {
	            element = element[0];
	        }
	        element.node.parentNode.insertBefore(this.node, element.node);
	        R._insertbefore(this, element, this.paper);
	        return this;
	    };
	    elproto.blur = function (size) {
	        var s = this.node.runtimeStyle,
	            f = s.filter;
	        f = f.replace(blurregexp, E);
	        if (+size !== 0) {
	            this.attrs.blur = size;
	            s.filter = f + S + ms + ".Blur(pixelradius=" + (+size || 1.5) + ")";
	            s.margin = R.format("-{0}px 0 0 -{0}px", round(+size || 1.5));
	        } else {
	            s.filter = f;
	            s.margin = 0;
	            delete this.attrs.blur;
	        }
	        return this;
	    };

	    R._engine.path = function (pathString, vml) {
	        var el = createNode("shape");
	        el.style.cssText = cssDot;
	        el.coordsize = zoom + S + zoom;
	        el.coordorigin = vml.coordorigin;
	        var p = new Element(el, vml),
	            attr = {fill: "none", stroke: "#000"};
	        pathString && (attr.path = pathString);
	        p.type = "path";
	        p.path = [];
	        p.Path = E;
	        setFillAndStroke(p, attr);
	        vml.canvas && vml.canvas.appendChild(el);
	        var skew = createNode("skew");
	        skew.on = true;
	        el.appendChild(skew);
	        p.skew = skew;
	        p.transform(E);
	        return p;
	    };
	    R._engine.rect = function (vml, x, y, w, h, r) {
	        var path = R._rectPath(x, y, w, h, r),
	            res = vml.path(path),
	            a = res.attrs;
	        res.X = a.x = x;
	        res.Y = a.y = y;
	        res.W = a.width = w;
	        res.H = a.height = h;
	        a.r = r;
	        a.path = path;
	        res.type = "rect";
	        return res;
	    };
	    R._engine.ellipse = function (vml, x, y, rx, ry) {
	        var res = vml.path(),
	            a = res.attrs;
	        res.X = x - rx;
	        res.Y = y - ry;
	        res.W = rx * 2;
	        res.H = ry * 2;
	        res.type = "ellipse";
	        setFillAndStroke(res, {
	            cx: x,
	            cy: y,
	            rx: rx,
	            ry: ry
	        });
	        return res;
	    };
	    R._engine.circle = function (vml, x, y, r) {
	        var res = vml.path(),
	            a = res.attrs;
	        res.X = x - r;
	        res.Y = y - r;
	        res.W = res.H = r * 2;
	        res.type = "circle";
	        setFillAndStroke(res, {
	            cx: x,
	            cy: y,
	            r: r
	        });
	        return res;
	    };
	    R._engine.image = function (vml, src, x, y, w, h) {
	        var path = R._rectPath(x, y, w, h),
	            res = vml.path(path).attr({stroke: "none"}),
	            a = res.attrs,
	            node = res.node,
	            fill = node.getElementsByTagName(fillString)[0];
	        a.src = src;
	        res.X = a.x = x;
	        res.Y = a.y = y;
	        res.W = a.width = w;
	        res.H = a.height = h;
	        a.path = path;
	        res.type = "image";
	        fill.parentNode == node && node.removeChild(fill);
	        fill.rotate = true;
	        fill.src = src;
	        fill.type = "tile";
	        res._.fillpos = [x, y];
	        res._.fillsize = [w, h];
	        node.appendChild(fill);
	        setCoords(res, 1, 1, 0, 0, 0);
	        return res;
	    };
	    R._engine.text = function (vml, x, y, text) {
	        var el = createNode("shape"),
	            path = createNode("path"),
	            o = createNode("textpath");
	        x = x || 0;
	        y = y || 0;
	        text = text || "";
	        path.v = R.format("m{0},{1}l{2},{1}", round(x * zoom), round(y * zoom), round(x * zoom) + 1);
	        path.textpathok = true;
	        o.string = Str(text);
	        o.on = true;
	        el.style.cssText = cssDot;
	        el.coordsize = zoom + S + zoom;
	        el.coordorigin = "0 0";
	        var p = new Element(el, vml),
	            attr = {
	                fill: "#000",
	                stroke: "none",
	                font: R._availableAttrs.font,
	                text: text
	            };
	        p.shape = el;
	        p.path = path;
	        p.textpath = o;
	        p.type = "text";
	        p.attrs.text = Str(text);
	        p.attrs.x = x;
	        p.attrs.y = y;
	        p.attrs.w = 1;
	        p.attrs.h = 1;
	        setFillAndStroke(p, attr);
	        el.appendChild(o);
	        el.appendChild(path);
	        vml.canvas.appendChild(el);
	        var skew = createNode("skew");
	        skew.on = true;
	        el.appendChild(skew);
	        p.skew = skew;
	        p.transform(E);
	        return p;
	    };
	    R._engine.setSize = function (width, height) {
	        var cs = this.canvas.style;
	        this.width = width;
	        this.height = height;
	        width == +width && (width += "px");
	        height == +height && (height += "px");
	        cs.width = width;
	        cs.height = height;
	        cs.clip = "rect(0 " + width + " " + height + " 0)";
	        if (this._viewBox) {
	            R._engine.setViewBox.apply(this, this._viewBox);
	        }
	        return this;
	    };
	    R._engine.setViewBox = function (x, y, w, h, fit) {
	        R.eve("raphael.setViewBox", this, this._viewBox, [x, y, w, h, fit]);
	        var paperSize = this.getSize(),
	            width = paperSize.width,
	            height = paperSize.height,
	            H, W;
	        if (fit) {
	            H = height / h;
	            W = width / w;
	            if (w * H < width) {
	                x -= (width - w * H) / 2 / H;
	            }
	            if (h * W < height) {
	                y -= (height - h * W) / 2 / W;
	            }
	        }
	        this._viewBox = [x, y, w, h, !!fit];
	        this._viewBoxShift = {
	            dx: -x,
	            dy: -y,
	            scale: paperSize
	        };
	        this.forEach(function (el) {
	            el.transform("...");
	        });
	        return this;
	    };
	    var createNode;
	    R._engine.initWin = function (win) {
	            var doc = win.document;
	            if (doc.styleSheets.length < 31) {
	                doc.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
	            } else {
	                // no more room, add to the existing one
	                // http://msdn.microsoft.com/en-us/library/ms531194%28VS.85%29.aspx
	                doc.styleSheets[0].addRule(".rvml", "behavior:url(#default#VML)");
	            }
	            try {
	                !doc.namespaces.rvml && doc.namespaces.add("rvml", "urn:schemas-microsoft-com:vml");
	                createNode = function (tagName) {
	                    return doc.createElement('<rvml:' + tagName + ' class="rvml">');
	                };
	            } catch (e) {
	                createNode = function (tagName) {
	                    return doc.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
	                };
	            }
	        };
	    R._engine.initWin(R._g.win);
	    R._engine.create = function () {
	        var con = R._getContainer.apply(0, arguments),
	            container = con.container,
	            height = con.height,
	            s,
	            width = con.width,
	            x = con.x,
	            y = con.y;
	        if (!container) {
	            throw new Error("VML container not found.");
	        }
	        var res = new R._Paper,
	            c = res.canvas = R._g.doc.createElement("div"),
	            cs = c.style;
	        x = x || 0;
	        y = y || 0;
	        width = width || 512;
	        height = height || 342;
	        res.width = width;
	        res.height = height;
	        width == +width && (width += "px");
	        height == +height && (height += "px");
	        res.coordsize = zoom * 1e3 + S + zoom * 1e3;
	        res.coordorigin = "0 0";
	        res.span = R._g.doc.createElement("span");
	        res.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;";
	        c.appendChild(res.span);
	        cs.cssText = R.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", width, height);
	        if (container == 1) {
	            R._g.doc.body.appendChild(c);
	            cs.left = x + "px";
	            cs.top = y + "px";
	            cs.position = "absolute";
	        } else {
	            if (container.firstChild) {
	                container.insertBefore(c, container.firstChild);
	            } else {
	                container.appendChild(c);
	            }
	        }
	        res.renderfix = function () {};
	        return res;
	    };
	    R.prototype.clear = function () {
	        R.eve("raphael.clear", this);
	        this.canvas.innerHTML = E;
	        this.span = R._g.doc.createElement("span");
	        this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";
	        this.canvas.appendChild(this.span);
	        this.bottom = this.top = null;
	    };
	    R.prototype.remove = function () {
	        R.eve("raphael.remove", this);
	        this.canvas.parentNode.removeChild(this.canvas);
	        for (var i in this) {
	            this[i] = typeof this[i] == "function" ? R._removedFactory(i) : null;
	        }
	        return true;
	    };

	    var setproto = R.st;
	    for (var method in elproto) if (elproto[has](method) && !setproto[has](method)) {
	        setproto[method] = (function (methodname) {
	            return function () {
	                var arg = arguments;
	                return this.forEach(function (el) {
	                    el[methodname].apply(el, arg);
	                });
	            };
	        })(method);
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }
/******/ ])
});
;
// src/core.js
var Abstract = {};
Abstract.Modules = {};

Abstract.build = function(selector, width, height, draw) {
  var canvases = [];
  if (selector) {
    $(selector).each(function() {
      canvas = new Abstract.Canvas({
        width : width,
        height : height,
        draw : draw,
        element : this
      });
      canvases.push(canvas);
      $(this).data('AbstractCanvas', canvas);
    });
  }
  return canvases;
}

// src/utilities.js
Abstract.utilites = {
  options : function(options, defaults) {
    return $.extend({}, defaults, options);
  },
  parseMeasurement : function(measurement, dimension) {
    var parse = function(m) {
      if (dimension && typeof m == 'string' && m.indexOf('%') != -1) {
        m = dimension * (parseInt(m)/100);
      }
      return m;
    }
    if (measurement instanceof Array) {
      $.each(measurement, function(i, j) {
        measurement[i] = parse(j);
      });
      return measurement;
    } else {
      return parse(measurement);
    }
  },

  random : function(v, exclude) {
    if (v && typeof v.generate == 'function') return v.generate();

    if (v instanceof Array) {

      if (exclude) {
        if (!(exclude instanceof Array)) exclude = [exclude];
        vv = [];
        $.each(v, function(i, e) {
          if ($.inArray(e, exclude)) {
            vv.push(e);
          }
        });
        if (vv.length > 0) v = vv;
      }

      if (v.length == 2 && typeof v[0] == 'number' && typeof v[1] == 'number') {
        v.sort(function(a,b){ return (a - b) });
        v = Math.floor(Math.random()*(v[1]-v[0]+1)+v[0]);
      } else {
        index = Math.floor(Math.random()*(v.length));
        v = v[index];
      }
    }
    return v;
  },

  decimalRange : function(v) {
    if (v > 1) v = v/100;
    return v;
  }
}

// src/modules/origin.js
Abstract.Modules.Origin = function(options) {
  this.origin = function(origin) {
    if (origin) {
      this._origin = this.buildOrigin(origin);
      if (this.reposition) this.reposition();
      return this;
    } else {
      if (!this._origin) {
        this._origin = this.options.origin;
      }
    }
    this._origin = this.buildOrigin(this._origin);
    return (this._origin) ? this._origin : this.parent().origin();
  }

  this.buildOrigin = function(origin) {
    if (origin && origin.class_name != 'Abstract.Point') {
      origin = new Abstract.Point(origin);
      origin.parent((this.parent) ? this.parent() : this);
    }
    return origin;
  }
  return this;
}

// src/modules/parent.js
Abstract.Modules.Parent = function(options) {
  this.parent = function(parent) {
    if (parent) {
      this._parent = parent;
    } else {
      if (!this._parent) {
        this._parent = this.options.parent;
      }
    }
    return this._parent;
  }
  return this;
}

// src/modules/shape.js
Abstract.Modules.Shape = function(options) {
  this.paper = function() {
    return (this._paper) ? this._paper : this.parent().paper();
  }
  this.draw = function() {
    this.fill();
    this.stroke();
    this.rotate();
    this.opacity();
    return this;
  }

  this.x = function() {
    if (!this._x) {
      this._x = this.origin().x();
    }
    return this._x;
  }

  this.y = function() {
    if (!this._y) {
      this._y = this.origin().y();
    }
    return this._y;
  }

  this.reposition = function() {
    this.element().attr({
      x : this.x(),
      y : this.y()
    });

    this.stroke();
    return this;
  }

  this.resize = function() {
    this.element().attr({
      width : this.width(),
      height : this.height()
    });
    return this.reposition();
  }

  this.fill = function(fill) {
    if (fill != null) {
      this._fill = Abstract.utilites.random(fill);
    } else {
      if (this._fill == null) {
        this._fill = Abstract.utilites.random(this.options.fill);
      }
    }
    if (this.element()) {
      this.element().attr({ 'fill' : this._fill });
    }
    return (fill != null) ? this : this._fill;
  }

  this.stroke = function(stroke) {
    if (stroke != null) {
      this._stroke = Abstract.utilites.random(stroke);
    } else {
      if (this._stroke == null) {
        this._stroke = Abstract.utilites.random(this.options.stroke);
      }
    }
    if (this._stroke && this._stroke.class_name != 'Abstract.Stroke') this._stroke = new Abstract.Stroke(this._stroke);
    if (this._stroke && (this._stroke.position() == 'inside' || this._stroke.position() == 'outside')) {
      this.strokeElement();
    } else {
      this.clearStroke();
      if (this.element() && this._stroke) {
        this.element().attr({
          'stroke' : this._stroke.color(),
          'stroke-width' : this._stroke.width(),
          'stroke-opacity' : (this._stroke && this._stroke.opacity()) ? this._stroke.opacity() : this._opacity
        });
      }
    }
    return (stroke != null) ? this : this._stroke;
  }

  this.clearStroke = function() {
    if (this.element()) {
      this.element().attr({
        'stroke' : 'none',
        'stroke-width' : 0
      });
    }
    if (this._stroke_element) {
      this._stroke_element.element().remove();
      this._stroke_element = null;
    }
  }

  this.strokeElement = function() {
    this.clearStroke();
    var klass = eval(this.class_name);
    this._stroke_element = new klass({
      fill : false,
      rotate : this._rotate,
      parent : this.parent(),
      origin : { x : this.x(), y : this.y() },
      width : this.width() + ((this._stroke.position() == 'inside') ? -this._stroke.width() : this._stroke.width()),
      height : this.height() + ((this._stroke.position() == 'inside') ? -this._stroke.width() : this._stroke.width()),
      thickness : (this.thickness) ? (this.thickness() + ((this._stroke.position() == 'inside') ? -this._stroke.width() : this._stroke.width())) : 0,
      stroke : { color : this._stroke.color(), width : this._stroke.width(), opacity : (this._stroke && this._stroke.opacity()) ? this._stroke.opacity() : this._opacity }
    }).draw();
  }

  this.opacity = function(opacity) {
    if (opacity != null) {
      this._opacity = Abstract.utilites.decimalRange(Abstract.utilites.random(opacity));
    } else {
      if (this._opacity == null) {
        this._opacity = Abstract.utilites.decimalRange(Abstract.utilites.random(this.options.opacity));
      }
    }

    if (this.element()) {
      this.stroke();
      this.element().attr({ 'fill-opacity' : this._opacity });
    }

    return (opacity != null) ? this : this._opacity;
  }

  this.rotate = function(rotate) {
    if (rotate != null) {
      this._rotate = Abstract.utilites.random(rotate);
    } else {
      if (this._rotate == null) {
        this._rotate = Abstract.utilites.random(this.options.rotate);
      }
    }

    if (this.element()) {
      this.stroke();
      this.element().rotate(this._rotate);
    }

    return (rotate != null) ? this : this._rotate;
  }

  return this;
}

// src/modules/size.js
Abstract.Modules.Size = function(options) {
  this.size = function(size)
  {
    if (size) {
      this._size = Abstract.utilites.random(size);
      if (this.resize) this.resize();
      return this;
    } else {
      if (!this._size) {
        this._size = Abstract.utilites.random(this.options.size);
      }
    }

    return this._size;
  }

  this.width = function(width) {
    if (width) {
      this._width = Abstract.utilites.random(width);
      if (this.resize) this.resize();
      return this
    } else {
      if (!this._width) {
        this._width = (this.size()) ? this.size() : Abstract.utilites.random(this.options.width);
      }
    }

    return this._width;
  }

  this.height = function(height) {
    if (height) {
      this._height = Abstract.utilites.random(height);
      if (this.resize) this.resize();
      return this;
    } else {
      if (!this._height) {
        this._height = (this.size()) ? this.size() : Abstract.utilites.random(this.options.height);
      }
    }

    return this._height;
  }
  return this;
}

// src/objects/canvas.js
Abstract.Canvas = function(options) {
  this.options = Abstract.utilites.options(options, {
    element : null,
    width : 0,
    height : 0,
    origin : new Abstract.Point({ x : '50%', y : '50%', parent : this }),
    background : '#fff',
    draw : function(canvas) {}
  });

  this.element = function() {
    if (!this._element) {
      this._element = this.options.element;
    }
    return this._element;
  }

  this.paper = function() {
    if (!this._paper) {
      this._paper = Raphael(this.element(), this.width(), this.height());
    }
    return this._paper;
  }

  this.background = function(background) {
    if (!this._background) {
      if (background.class_name == 'Abstract.Gradient' && background.type() == 'radial') {
        var size = Math.ceil(Math.sqrt(
          Math.pow(this.width(), 2) +
          Math.pow(this.height(), 2)
        ));
        this._background = new Abstract.Ellipse({
          size : size,
          fill : background,
          stroke : false,
          parent : this,
          origin : new Abstract.Point({ x : '50%', y : '50%' })
        }).draw();
      } else {
        this._background = new Abstract.Rectangle({
          width : this.width(),
          height : this.height(),
          fill : background,
          stroke : false,
          parent : this,
          origin : new Abstract.Point({ x : '50%', y : '50%' })
        }).draw();
      }
    } else {
      this._background.fill(background);
    }
    return this;
  }

  this.gradient = function(options){
    return new Abstract.Gradient(options);
  }

  this.stroke = function(options){
    return new Abstract.Stroke(options);
  }

  this.rectangle = function(options, auto_draw){
    var rectangle = new Abstract.Rectangle(options);
    rectangle.parent(this);
    if (auto_draw !== false) rectangle.draw();
    return rectangle;
  }

  this.square = function(options, auto_draw){
    return this.rectangle(options, auto_draw);
  }

  this.ellipse = function(options, auto_draw){
    var ellipse = new Abstract.Ellipse(options);
    ellipse.parent(this);
    if (auto_draw !== false) ellipse.draw();
    return ellipse;
  }

  this.circle = function(options, auto_draw){
    return this.ellipse(options, auto_draw);
  }

  this.cross = function(options, auto_draw){
    var cross = new Abstract.Cross(options);
    cross.parent(this);
    if (auto_draw !== false) cross.draw();
    return cross;
  }

  this.point = function(options){
    point = new Abstract.Point(options);
    point.parent(this);
    return point;
  }

  this.repeat = function(times, func){
    if (times && func) {
      for (var i=0; i < Abstract.utilites.random(times); i++) {
        func();
      };
    }
  }
  this.redraw = function(){
    if (this.options.draw) {
      this.paper().clear();
      this._background = null;
      this.options.draw(this);
    }
  }
  if (this.options.draw) {
    this.options.draw(this);
  }
};
Abstract.Modules.Size.call(Abstract.Canvas.prototype);
Abstract.Modules.Origin.call(Abstract.Canvas.prototype);

// src/objects/gradient.js
Abstract.Gradient = function(options){
  this.class_name = 'Abstract.Gradient';
  this.options = Abstract.utilites.options(options, {
    type : 'linear',
    angle : 0,
    start : '#fff',
    end : '#000',
    colors : null,
    origin : new Abstract.Point({ x : 0.5, y : 0.5 })
  });

  this.x = function(){
    return Abstract.utilites.decimalRange(this.origin().x());
  }

  this.y = function(){
    return Abstract.utilites.decimalRange(this.origin().y());
  }

  this.generate = function(){
    var type = Abstract.utilites.random(this.options.type);
    var angle = Abstract.utilites.random(this.options.angle);
    var start = Abstract.utilites.random(this.options.start);
    var end = Abstract.utilites.random(this.options.end, start);

    var prefix = angle+'-';
    if (type == 'radial') {
      prefix = 'r('+this.x()+', '+this.y()+')';
    }

    if (this.options.colors) {
      start = Abstract.utilites.random(this.options.colors);
      end = Abstract.utilites.random(this.options.colors, start);
    }
    return prefix+start+'-'+end;
  }

  this.type = function(type){
    if (type) {
      this._type = Abstract.utilites.random(type);
      return this;
    } else {
      if (!this._type) {
        this._type = Abstract.utilites.random(this.options.type);
      }
    }

    return this._type;
  }
}

Abstract.Modules.Origin.call(Abstract.Gradient.prototype);

// src/objects/point.js
Abstract.Point = function(options){
  this.class_name = 'Abstract.Point';
  this.options = Abstract.utilites.options(options, {
    x : 0,
    y : 0,
    parent : null
  });

  this.x = function(){
    var x = this.options.x;
    if (this.parent()) {
      x = Abstract.utilites.parseMeasurement(this.options.x, this.parent().width());
    }
    return Abstract.utilites.random(x);
  }

  this.y = function(){
    var y = this.options.y;
    if (this.parent()) {
      y = Abstract.utilites.parseMeasurement(this.options.y, this.parent().height());
    }
    return Abstract.utilites.random(y);
  }
};
Abstract.Modules.Parent.call(Abstract.Point.prototype);
Abstract.Modules.Origin.call(Abstract.Point.prototype);


//
// src/objects/stroke.js
//

Abstract.Stroke = function(options){
  this.class_name = 'Abstract.Stroke';

  this.options = Abstract.utilites.options(options, {
    width : 1,
    color : '#000',
    opacity : null,
    position : 'normal'
  });

  this.width = function(width){
    if (width) {
      this._width = width;
      return this;
    } else {
      if (!this._width) {
        this._width = Abstract.utilites.random(this.options.width);
      }
    }
    return this._width;
  }

  this.color = function(){
    if (!this._color) {
      this._color = Abstract.utilites.random(this.options.color);
    }

    return this._color;
  }

  this.opacity = function(){
    if (!this._opacity) {
      this._opacity = Abstract.utilites.decimalRange(Abstract.utilites.random(this.options.opacity));
    }

    return this._opacity;
  }

  this.position = function(){
    if (!this._position) {
      p = Abstract.utilites.random(this.options.position);
      this._position = (p == 'inside' || p == 'outside') ? p : 'normal';
    }

    return this._position;
  }
};


//
// src/shapes/cross.js
//

Abstract.Cross = function(options) {

  this.class_name = 'Abstract.Cross';

  this.options = Abstract.utilites.options(options, {
    size : null,
    width : 0,
    height : 0,
    parent : null,
    opacity : 1,
    thickness : 0,
    background : '#fff',
    stroke : new Abstract.Stroke(),
    origin : null,
    rotate : 0
  });

  this.element = function()
  {
    if (!this._element) {

      start_x = this.x() - this.thickness()/2;
      start_y = this.y() - this.thickness()/2;
      width = (this.width() - this.thickness())/2;
      height = (this.height() - this.thickness())/2;

      this._element = this.paper().path(
        'M'+start_x+','+start_y +
        'v-'+height+'h'+this.thickness()+'v'+height +
        'h'+width+'v'+this.thickness()+'h-'+width +
        'v'+height+'h-'+this.thickness()+'v-'+height +
        'h-'+width+'v-'+this.thickness()+'Z'
      );
    }
    return this._element;
  }

  this.redraw = function()
  {
    this.element().remove();
    this._element = null;
    this.draw();
  }

  this.reposition = function()
  {
    this.redraw();
    return this;
  }

  this.resize = function()
  {
    this.redraw();
    return this;
  }

  this.thickness = function(thickness)
  {
    if (thickness) {
      this._thickness = Abstract.utilites.random(thickness);
      if (this.resize) this.resize();
      return this;
    } else {
      if (!this._thickness) {
        this._thickness = Abstract.utilites.random(this.options.thickness);
      }
    }

    return this._thickness;
  }
};

Abstract.Modules.Size.call(Abstract.Cross.prototype);
Abstract.Modules.Shape.call(Abstract.Cross.prototype);
Abstract.Modules.Parent.call(Abstract.Cross.prototype);
Abstract.Modules.Origin.call(Abstract.Cross.prototype);


//
// src/shapes/ellipse.js
//

Abstract.Ellipse = function(options) {

  this.class_name = 'Abstract.Ellipse';

  this.options = Abstract.utilites.options(options, {
    size : null,
    width : 0,
    height : 0,
    parent : null,
    opacity : 1,
    background : '#fff',
    stroke : new Abstract.Stroke(),
    origin : null,
    rotate : 0
  });

  this.element = function()
  {
    if (!this._element) {
      this._element = this.paper().ellipse(this.x(), this.y(), this.width()/2, this.height()/2);
    }
    return this._element;
  }

  this.reposition = function()
  {
    this.element().attr({
      cx : this.x(),
      cy : this.y()
    });

    this.stroke();
    return this;
  }

  this.resize = function()
  {
    this.element().attr({
      rx : this.width()/2,
      ry : this.height()/2
    });

    return this.reposition();
  }
};

Abstract.Modules.Size.call(Abstract.Ellipse.prototype);
Abstract.Modules.Shape.call(Abstract.Ellipse.prototype);
Abstract.Modules.Parent.call(Abstract.Ellipse.prototype);
Abstract.Modules.Origin.call(Abstract.Ellipse.prototype);

// src/shapes/rectangle.js
Abstract.Rectangle = function(options) {

  this.class_name = 'Abstract.Rectangle';

  this.options = Abstract.utilites.options(options, {
    size : null,
    width : 0,
    height : 0,
    parent : null,
    opacity : 1,
    background : '#fff',
    stroke : new Abstract.Stroke(),
    origin : null,
    rotate : 0
  });

  this.element = function()
  {
    if (!this._element) {
      this._element = this.paper().rect(this.offsetX(), this.offsetY(), this.width(), this.height());
    }
    return this._element;
  }

  this.reposition = function()
  {
    this.element().attr({
      x : this.offsetX(),
      y : this.offsetY()
    });

    this.stroke();
    return this;
  }

  this.offsetX = function()
  {
    return this.x() - (this.width()/2);
  }

  this.offsetY = function()
  {
    return this.y() - (this.height()/2);
  }
};

Abstract.Modules.Size.call(Abstract.Rectangle.prototype);
Abstract.Modules.Shape.call(Abstract.Rectangle.prototype);
Abstract.Modules.Parent.call(Abstract.Rectangle.prototype);
Abstract.Modules.Origin.call(Abstract.Rectangle.prototype);

var RenderBackground = {
  init : function() {
    this.drawAbstract();
  },
  drawAbstract : function() {
    // IE6 pretty much explodes trying to draw the background
    if ($('html').hasClass('ie6')) return;
    var background = $('<div id="background" />').appendTo('body');
    background.wrap('<div id="background-wrapper" />');

    var abstract_canvas = Abstract.build(background, 3000, 3000, function(canvas) {
      var base_colors = ['#333'];
      var colors = base_colors.concat(['#333']);
      canvas.origin({ x : [0, '100%'], y : [0, '100%'] });
      canvas.repeat([400, 600], function() {
        var option = Abstract.utilites.random([1, 10]);
        if (option == 1) {
          canvas.circle({ size : [10, 200], fill : colors, opacity : [5, 10], stroke : false });
        } else if (option == 2) {
          canvas.circle({ size : [60, 600], fill : false, opacity : [5, 10], stroke : { color : colors, width : [1,10] } });
        } else {
          canvas.circle({ size : [5, 32], fill : ['#222'], opacity : [5, 10], stroke : false });
        }
      });
    })[0];
    //$('h1').css('cursor', 'pointer').click(function() {
    //    abstract_canvas.redraw();
    //})
  }
};

(function ($) {
  $(document).ready(function() {
    RenderBackground.init();
  });
})(jQuery);

//# sourceMappingURL=maps/site.js.map
