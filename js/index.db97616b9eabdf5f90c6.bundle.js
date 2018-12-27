!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/evergreen-web-components/",n(n.s=38)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){e.exports=n.p+"ebf0f11fdb6186dde66c63b5c54038de.png"},function(e,t,n){var r=n(27);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var t=[],n=Object.keys,r={},o={},i=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,a=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(e){return e.nodeName.toLowerCase()}function h(e,t){var n=e&&e.exec(t);return n&&0===n.index}function u(e){return i.test(e)}function m(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach(function(e){for(t in e)n[t]=e[t]}),n}function f(e){var t=[];return function e(n,r){for(var o=n.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:r,node:o}),r=e(o,r),p(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:o}));return r}(e,0),t}function g(e){function t(e){return e&&e.source||e}function r(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function o(i,s){if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;if(i.keywords){var a={},l=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.keywords?l("keyword",i.keywords):n(i.keywords).forEach(function(e){l(e,i.keywords[e])}),i.keywords=a}i.lexemesRe=r(i.lexemes||/\w+/,!0);s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=r(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=r(i.end)),i.terminator_end=t(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end));i.illegal&&(i.illegalRe=r(i.illegal));null==i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return m(e,{variants:null},t)}));return e.cached_variants||e.endsWithParent&&[m(e)]||[e]}("self"===e?i:e)}));i.contains.forEach(function(e){o(e,i)});i.starts&&o(i.starts,s);var c=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(t).filter(Boolean);i.terminators=c.length?r(c.join("|"),!0):{exec:function(){return null}}}(e)}function v(e,t,n,o){function i(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function s(e,t){var n=f.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function a(e,t,n,r){var o=r?"":c.classPrefix,i='<span class="'+o,s=n?"":l;return(i+=e+'">')+t+s}function p(){S+=null!=b.subLanguage?function(){var e="string"==typeof b.subLanguage;if(e&&!r[b.subLanguage])return d(N);var t=e?v(b.subLanguage,N,!0,x[b.subLanguage]):y(N,b.subLanguage.length?b.subLanguage:void 0);b.relevance>0&&(P+=t.relevance);e&&(x[b.subLanguage]=t.top);return a(t.language,t.value,!1,!0)}():function(){var e,t,n,r;if(!b.keywords)return d(N);r="",t=0,b.lexemesRe.lastIndex=0,n=b.lexemesRe.exec(N);for(;n;)r+=d(N.substring(t,n.index)),(e=s(b,n))?(P+=e[1],r+=a(e[0],d(n[0]))):r+=d(n[0]),t=b.lexemesRe.lastIndex,n=b.lexemesRe.exec(N);return r+d(N.substr(t))}(),N=""}function u(e){S+=e.className?a(e.className,"",!0):"",b=Object.create(e,{parent:{value:b}})}function m(e,t){if(N+=e,null==t)return p(),0;var r=function(e,t){var n,r;for(n=0,r=t.contains.length;n<r;n++)if(h(t.contains[n].beginRe,e))return t.contains[n].endSameAsBegin&&(t.contains[n].endRe=i(t.contains[n].beginRe.exec(e)[0])),t.contains[n]}(t,b);if(r)return r.skip?N+=t:(r.excludeBegin&&(N+=t),p(),r.returnBegin||r.excludeBegin||(N=t)),u(r),r.returnBegin?0:t.length;var o=function e(t,n){if(h(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(b,t);if(o){var s=b;s.skip?N+=t:(s.returnEnd||s.excludeEnd||(N+=t),p(),s.excludeEnd&&(N=t));do{b.className&&(S+=l),b.skip||b.subLanguage||(P+=b.relevance),b=b.parent}while(b!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),u(o.starts)),s.returnEnd?0:t.length}if(function(e,t){return!n&&h(t.illegalRe,e)}(t,b))throw new Error('Illegal lexeme "'+t+'" for mode "'+(b.className||"<unnamed>")+'"');return N+=t,t.length||1}var f=w(e);if(!f)throw new Error('Unknown language: "'+e+'"');g(f);var _,b=o||f,x={},S="";for(_=b;_!==f;_=_.parent)_.className&&(S=a(_.className,"",!0)+S);var N="",P=0;try{for(var E,T,C=0;b.terminators.lastIndex=C,E=b.terminators.exec(t);)T=m(t.substring(C,E.index),E[0]),C=E.index+T;for(m(t.substr(C)),_=b;_.parent;_=_.parent)_.className&&(S+=l);return{relevance:P,value:S,language:e,top:b}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:d(t)};throw e}}function y(e,t){t=t||c.languages||n(r);var o={relevance:0,value:d(e)},i=o;return t.filter(w).filter(S).forEach(function(t){var n=v(t,e,!1);n.language=t,n.relevance>i.relevance&&(i=n),n.relevance>o.relevance&&(i=o,o=n)}),i.language&&(o.second_best=i),o}function _(e){return c.tabReplace||c.useBR?e.replace(a,function(e,t){return c.useBR&&"\n"===e?"<br>":c.tabReplace?t.replace(/\t/g,c.tabReplace):""}):e}function b(e){var n,r,i,a,l,h=function(e){var t,n,r,o,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",n=s.exec(i))return w(n[1])?n[1]:"no-highlight";for(i=i.split(/\s+/),t=0,r=i.length;t<r;t++)if(u(o=i[t])||w(o))return o}(e);u(h)||(c.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,l=n.textContent,i=h?v(h,l,!0):y(l),(r=f(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,n,r){var o=0,i="",s=[];function a(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){i+="<"+p(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+d(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+p(e)+">"}function h(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){var u=a();if(i+=d(r.substring(o,u[0].offset)),o=u[0].offset,u===e){s.reverse().forEach(c);do{h(u.splice(0,1)[0]),u=a()}while(u===e&&u.length&&u[0].offset===o);s.reverse().forEach(l)}else"start"===u[0].event?s.push(u[0].node):s.pop(),h(u.splice(0,1)[0])}return i+d(r.substr(o))}(r,f(a),l)),i.value=_(i.value),e.innerHTML=i.value,e.className=function(e,t,n){var r=t?o[t]:n,i=[e.trim()];e.match(/\bhljs\b/)||i.push("hljs");-1===e.indexOf(r)&&i.push(r);return i.join(" ").trim()}(e.className,h,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function x(){if(!x.called){x.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,b)}}function w(e){return e=(e||"").toLowerCase(),r[e]||r[o[e]]}function S(e){var t=w(e);return t&&!t.disableAutodetect}e.highlight=v,e.highlightAuto=y,e.fixMarkup=_,e.highlightBlock=b,e.configure=function(e){c=m(c,e)},e.initHighlighting=x,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",x,!1),addEventListener("load",x,!1)},e.registerLanguage=function(t,n){var i=r[t]=n(e);i.aliases&&i.aliases.forEach(function(e){o[e]=t})},e.listLanguages=function(){return n(r)},e.getLanguage=w,e.autoDetection=S,e.inherit=m,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,r){var o=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return o.contains.push(e.PHRASAL_WORDS_MODE),o.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),o},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(t)}()},function(e,t,n){"use strict";(function(e,r){var o,i=n(17);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(i.a)(o);t.a=s}).call(this,n(36),n(37)(e))},function(e,t,n){var r=n(18);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(19);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(20);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(21);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(28);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(29);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(30);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(31);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(32);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(33);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(34);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(35);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{--primary-color:green;--secondary-color:#fff;--nav-background:var(--primary-color);--nav-brand-text-size:18px;--nav-brand-text-color:var(--secondary-color);--nav-menu-text-color:var(--secondary-color);--nav-menu-text-size:18px;--nav-menu-text-hover-color:var(--primary-color);--nav-menu-text-hover-background:var(--secondary-color);--nav-menu-drop-hover-background:#40a040;height:100%}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{--primary-color:green}:host .main{margin-top:60px}:host .marketing{padding:10px;margin-top:20px;margin-left:auto;margin-right:auto;display:flex;flex-flow:row-reverse wrap}:host .marketing .description{flex-direction:column;order:2}:host .marketing .description h1{font-size:35px;color:var(--primary-color,green)}:host .marketing .description p{font-size:1.2rem;line-height:2.2rem;margin:5px 5px 20px}:host .logo{flex-direction:column;width:75%;order:1;margin-left:auto;margin-right:auto;margin-top:0}:host .logo img{width:100%}:host .instructions{margin-top:50px;background-color:#d9ecd9;border-radius:5px;padding:30px}@media (max-width:576px){:host .marketing{padding:0}:host .marketing .description,:host .marketing .logo{width:100%}}@media (min-width:576px){:host .marketing{padding:0}:host .marketing .description{width:\\100% & p{font-size:1.3rem}}:host .marketing .logo{margin-top:0;width:75%}}@media (min-width:768px){:host .marketing .description{width:\\60% & h1{font-size:3.5rem}}:host .marketing .description p{font-size:1.5rem}:host .marketing .logo{margin-top:30px;width:40%}}@media (min-width:992px){:host .marketing .description{width:50%}:host .marketing .logo{margin-top:-40px;width:45%}}:host{.instructions{margin-top:50px;background-color:#d9ecd9;border-radius:5px;padding:30px}}@media (min-width:768px){:host .marketing{margin-top:100px}}:host .hljs{padding:0!important}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{display:block}pre{margin:0}code,pre{font-family:var(--code-sample-font-family,Operator Mono,Inconsolata,Roboto Mono,monaco,consolas,monospace);font-size:var(--syntax-highlight-font-size,14px)}.hljs{padding:0 20px;line-height:var(--code-sample-line-height,1.3)}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;background:var(--code-sample-background,#f0f0f0)}.hljs,.hljs-subst{color:var(--code-sample-color,#444)}.hljs-comment{color:#888}.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color:#800}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#bc6060}.hljs-literal{color:#78a960}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta-string{color:#4d99bf}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}",""])},function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var s=o.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},function(e,t){e.exports=function(e){var t={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}}},function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},function(e,t){e.exports=function(e){var t={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},n={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,n,{className:"string",begin:/'/,end:/'/},t]}}},function(e,t){e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;background:#fff}.hljs,.hljs-emphasis,.hljs-strong,.hljs-subst,.hljs-tag,.hljs-title{color:#000}.hljs-bullet,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:navy}.hljs-code .hljs-selector-class{color:purple}.hljs-emphasis,.hljs-stronge,.hljs-type{font-style:italic}.hljs-function,.hljs-keyword,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-symbol{color:olive}.hljs-attribute{color:maroon}.hljs-class .hljs-title,.hljs-params,.hljs-variable{color:#0055af}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-comment,.hljs-deletion,.hljs-link,.hljs-meta,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-tag,.hljs-template-variable,.hljs-type{color:green}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{height:100%}:host .sidebar-wrapper{position:relative;margin:0;padding:0;height:100%;width:240px;float:left}:host .sidebar-wrapper .sidebar{overflow:auto;border-right:1px solid #d3d3d3;height:inherit;position:fixed;width:inherit}:host .sidebar-wrapper .sidebar h4{text-align:left;padding-left:20px}:host ul{list-style:none;padding-left:15px;line-height:1.5rem}:host ul li{padding:5px;text-align:left}:host ul li a{display:block;cursor:pointer;color:green;text-decoration:none}:host ul li.active a{color:#000;font-weight:600}:host .page{padding:40px;margin-left:240px;margin-top:64px}:host .sidebar-background{display:none;position:fixed;top:0;opacity:0;width:100%;height:100%;z-index:19999;transition:opacity 5s linear}:host .background-shadow{position:fixed;top:62px;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.67843);z-index:20000}:host .open{display:block!important;transform:translateY(0)!important;opacity:1!important}@media (max-width:576px){:host .sidebar-wrapper{position:fixed;top:62px;z-index:99999;background-color:#fff;left:0;transform:translateX(-100%);transition:transform .3s ease-out}:host .page{margin-left:0}:host .page .sidebar-toggle{display:block}}@media (min-width:576px){:host .sidebar-wrapper{position:relative}:host .sidebar-toggle{display:none}}@media (min-width:768px){:host .sidebar-wrapper{position:relative}}:host{@keyframes wiggle{0%{transform:opacity 0}50%{transform:opacity .5}to{transform:opacity 1}}}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host table{border-spacing:0;border:1px solid #d3d3d3}:host table thead{background-color:var(--primary-color);color:var(--secondary-color)}:host table th{padding:5px}:host table td,:host table th{border-right:1px solid #d3d3d3}:host table td{padding:20px;border-top:1px solid #d3d3d3}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host .container,:host .container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (max-width:576px){:host .container{width:calc(100% - 30px)}}@media (min-width:576px){:host .container{width:540px}}@media (min-width:768px){:host .container{width:720px}}@media (min-width:992px){:host .container{width:960px}}@media (min-width:1200px){:host .container{width:1140px}}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,':host{--primary-color:#41a6ef;--secondary-color:#fff;--drop-background:var(--dropdown-color,var(--primary-color));--drop-border:var(--dropdown-border-color,var(--primary-color));--drop-text-color:var(--dropdown-text-color,var(--secondary-color));--drop-text-size:var(--dropdown-text-size,1rem);--drop-text-hover-color:var(--dropdown-text-hover-color,var(--secondary-color));--drop-text-expanded-color:var(--dropdown-text-expanded-color,var(--primary-color));--drop-text-background-hover:var(--dropdown-text-background-hover,var(--primary-color));--drop-timing:var(--dropdown-timing,.3s);height:2em;position:relative;display:block}:host .dropdown-el{min-width:12em;position:relative;display:inline-block;margin-right:1em;min-height:2em;max-height:2em;overflow:hidden;font-size:var(--drop-text-size);top:.5em;cursor:pointer;text-align:left;white-space:nowrap;color:var(--drop-text-color);outline:none;border:.06em solid transparent;border-radius:1em;background-color:var(--drop-background);transition:var(--drop-timing) all ease-in-out}:host .dropdown-el input{display:none}:host .dropdown-el label{border-top:.06em solid #d9d9d9;display:block;height:2em;line-height:2em;padding-left:1em;padding-right:3em;cursor:pointer;position:relative}:host .dropdown-el label:nth-child(2){margin-top:2em;border-top:.06em solid #d9d9d9}:host .dropdown-el #option_def+label{display:block;border-top:none;position:absolute;top:0}:host .dropdown-el #option_def+label:nth-child(2){margin-top:0;position:relative}:host .dropdown-el.selection input+label{margin-top:2em}:host .dropdown-el.selection #option_def+label{display:none}:host .dropdown-el.selection input:checked+label{display:block;border-top:none;position:absolute;top:0;margin-top:0}:host .dropdown-el.selection.expanded input+label{margin-top:0}:host .dropdown-el.selection.expanded input:checked+label{display:block;border-top:.06em solid #d9d9d9;position:unset;top:unset}:host .dropdown-el:after{content:"";position:absolute;right:.8em;top:.9em;border:.3em solid transparent;border-top:.3em solid var(--drop-text-color);transition:all .4s ease-in-out}:host .dropdown-el.expanded{border:.06em solid var(--drop-border);background:#fff;border-radius:.25em;padding:0;box-shadow:3px 3px 5px 0 rgba(0,0,0,.1);max-height:15em;overflow:overlay;z-index:100}:host .dropdown-el.expanded label{border-top:.06em solid #d9d9d9;color:var(--drop-text-expanded-color)}:host .dropdown-el.expanded label:hover{color:var(--drop-text-hover-color)!important;background-color:var(--drop-text-background-hover)!important}:host .dropdown-el.expanded input:checked+label{color:var(--drop-background);font-weight:600}:host .dropdown-el.expanded:after{transform:rotate(-180deg);top:.55em;border:.3em solid transparent;border-top:.3em solid var(--drop-text-expanded-color)}:host .dropdown-el.expanded #option_def+label{display:block!important;border-top:none;position:absolute;top:0}:host .dropdown-el.expanded #option_def+label:nth-child(2){margin-top:0!important;position:relative}',""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,':host{--primary-color:green;--secondary-color:#fff;--navigation-background:var(--nav-background,var(--primary-color));--navigation-menu-mobile-background:var(--nav-menu-mobile-background,var(--secondary-color));--navigation-brand-text-size:var(--nav-brand-text-size,18px);--navigation-brand-text-color:var(--nav-brand-text-color,var(--secondary-color));--navigation-menu-text-color:var(--nav-menu-text-color,var(--secondary-color));--navigation-menu-text-size:var(--nav-menu-text-size,18px);--navigation-menu-text-padding:var(--nav-menu-text-padding,20px);--navigation-menu-text-hover-color:var(--nav-menu-text-hover-color,var(--primary-color));--navigation-menu-text-hover-background:var(--nav-menu-text-hover-background,var(--secondary-color));--navigation-menu-mobile-text-color:var(--nav-menu-mobile-text-color,var(--primary-color));--navigation-menu-mobile-text-hover-color:var(--nav-menu-mobile-text-hover-color,var(--secondary-color));--navigation-menu-mobile-text-hover-background:var(--nav-menu-mobile-text-hover-background,var(--primary-color));--navigation-menu-drop-background:var(--nav-menu-drop-background,var(--secondary-color));--navigation-menu-drop-text-color:var(--nav-menu-drop-text-color,var(--primary-color));--navigation-menu-drop-hover-color:var(--nav-menu-drop-hover-background,color(green tint(25%)));--navigation-menu-drop-hover-text-color:var(--nav-menu-drop-hover-text-color,var(--secondary-color));--navigation-menu-drop-min-width:var(--nav-menu-drop-min-width,150px);--navigation-menu-drop-text-size:var(--nav-menu-drop-text-size,15px);--navigation-menu-drop-padding:var(--nav-menu-drop-padding,10px);--navigation-menu-mobile-drop-background:var(--nav-menu-mobile-drop-background,var(--secondary-color));--navigation-menu-mobile-drop-text-color:var(--nav-menu-mobile-drop-text-color,var(--primary-color));width:100%}:host nav{background-color:var(--navigation-background);border-bottom:1px solid #3a3a3a;width:100%;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}:host nav.fixed-top{position:fixed;top:0;left:0;z-index:10000}:host .brand{display:inline-block;margin-top:20px;margin-bottom:20px;font-size:var(--navigation-brand-text-size);font-weight:600;padding-left:20px;color:var(--navigation-brand-text-color);display:block;text-decoration:none}:host .brand:focus{outline:none}:host .mobile-toggle{display:none;padding:.45rem .75rem;font-size:1.25rem;line-height:1;background-color:#fff;border:1px solid transparent;border-radius:.25rem;margin-right:10px}:host .mobile-toggle span{position:relative;padding-left:1em}:host .mobile-toggle span:before{content:"";position:absolute;left:0;top:.25em;width:1em;height:.1em;background:#000;box-shadow:0 .25em 0 0 #000,0 .5em 0 0 #000}:host .nav-items{flex-basis:100%;flex-grow:1;align-items:center;background-color:var(--navigation-menu-mobile-background)}:host .nav-menu{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}:host ul{margin:0 0 0 auto}:host ul li{float:left;position:relative;display:block}:host ul li a{font-weight:600;color:var(--navigation-menu-mobile-text-color);text-decoration:none;padding:20px;font-size:var(--navigation-menu-text-size);display:block}:host ul li a:hover{color:var(--navigation-menu-mobile-text-hover-color);background-color:var(--navigation-menu-mobile-text-hover-background)}:host .drop-menu{display:none;position:static;right:0;left:auto;float:none;min-width:var(--navigation-menu-drop-min-width);padding-left:0;border-radius:4px;z-index:10000;box-shadow:0 1px 5px #acacac}:host .drop-menu li{width:100%;background-color:var(--navigation-menu-mobile-drop-background)}:host .drop-menu li a{font-weight:600;color:var(--navigation-menu-mobile-drop-text-color);text-decoration:none;padding:var(--navigation-menu-drop-padding);padding-left:20px;font-size:var(--navigation-menu-drop-text-size);white-space:nowrap;display:block}:host .drop-menu li a:hover{color:var(--navigation-menu-drop-hover-text-color);background-color:var(--navigation-menu-drop-hover-color)}:host .open{display:block}:host .hidden{display:none}:host .caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent}@media (max-width:576px){:host .mobile-toggle{display:inline-block}}@media (min-width:576px){:host .mobile-toggle{display:inline-block}}@media (min-width:768px){:host .mobile-toggle{display:none}:host .nav-items{display:flex!important;flex-basis:auto;background-color:initial}:host .nav-menu{flex-direction:row}:host ul li a{color:var(--navigation-menu-text-color)}:host ul li a:hover{color:var(--navigation-menu-text-hover-color);background-color:var(--navigation-menu-text-hover-background)}:host .drop-menu{position:absolute;float:left;padding-bottom:.15rem;border:1px solid #6c6c6c}:host .drop-menu li{background-color:var(--navigation-menu-drop-background)}:host .drop-menu li a{padding-left:10px;color:var(--navigation-menu-drop-text-color)}}',""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;color:var(--code-sample-color,#333);background:var(--code-sample-background,#f8f8f8)}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{--primary-color:green;--secondary-color:#fff}:host .btn{margin:2px;border:1px solid var(--btn-border-color,var(--primary-color));color:var(--btn-text-color,var(--primary-color));background-color:var(--btn-background);text-decoration:none;position:relative;display:inline-block;border-radius:var(--btn-border-radius,0)}:host .btn:hover{background-color:var(--btn-hover-background-color,var(--primary-color));color:var(--btn-hover-text-color,var(--secondary-color));border:1px solid var(--btn-hover-border-color,var(--primary-color))}:host .btn-xs{padding:5px;font-size:12px}:host .btn-sm{padding:5px;font-size:16px}:host .btn-md{padding:10px;font-size:20px}:host .btn-lg{padding:15px;font-size:25px}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host .card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:initial;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}:host .card .body{padding:10px}:host .card-xs{-ms-flex:1 1 16.666%;flex:1 1 16.666%;max-width:250px}:host .card-sm,:host .card-xs{-webkit-box-flex:1;margin:.25rem}:host .card-sm{-ms-flex:1 1 25%;flex:1 1 25%;max-width:380px}:host .card-md{-webkit-box-flex:1;-ms-flex:1 1 33.333%;margin:.25rem;flex:1 1 33.333%;max-width:450px}:host .card-img-top{width:100%;background-size:cover;background-position-x:center;background-position-y:center}",""])},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const r=new WeakMap,o=e=>"function"==typeof e&&r.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},a={},l=`{{lit-${String(Math.random()).slice(2)}}}`,c=`\x3c!--${l}--\x3e`,d=new RegExp(`${l}|${c}`),p="$lit$";class h{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let c,h;for(;a.nextNode();){n++,c=h;const t=h=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(l)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=f.exec(o)[2],s=i.toLowerCase()+p,a=t.getAttribute(s).split(d);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(l)<0)continue;const i=t.parentNode,s=e.split(d),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?m():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?m():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===l){const e=t.parentNode,i=t.previousSibling;null===i||i!==c||i.nodeType!==Node.TEXT_NODE?e.insertBefore(m(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(m(),t):n--,h=c,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(l,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const u=e=>-1!==e.index,m=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class g{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(u(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class v{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(f,(t,n,r,o)=>(e=!0,n+r+p+o+l)),e||(t+=c)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const y=e=>null===e||!("object"==typeof e||"function"==typeof e);class _{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||y(e)&&e===this.value||(this.value=e,o(e)||(this.committer.dirty=!0))}commit(){for(;o(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class x{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(m()),this.endNode=e.appendChild(m())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=m()),e._insert(this.endNode=m())}insertAfterPart(e){e._insert(this.startNode=m()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(y(e)?e!==this.value&&this._commitText(e):e instanceof v?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new g(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new x(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class w{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class S extends _{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let P=!1;try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;o(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=T(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const T=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const C=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new S(e,t.slice(1),n).parts:"@"===o?[new E(e,t.slice(1),r.eventContext)]:"?"===o?[new w(e,t.slice(1),n)]:new _(e,t,n).parts}handleTextExpression(e){return new x(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function A(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(l);return void 0===(n=t.keyString.get(r))&&(n=new h(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const O=new Map,k=new WeakMap,M=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new v(e,n,"html",C)},j=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function V(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,j,null,!1);let i=$(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=$(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const R=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,j,null,!1);for(;n.nextNode();)t++;return t},$=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(u(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const L=(e,t)=>`${e}--${t}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),z=!1);const I=["html","svg"],U=new Set,B=(e,t,n)=>{U.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{I.forEach(t=>{const n=O.get(L(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),V(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,j,null,!1);let s=$(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=R(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=$(o,s);return}s=$(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),V(t,e)}};function F(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const D=e=>null!==e,H=e=>e?"":null,W=(e,t)=>t!==e&&(t==t||e==e),q={attribute:!0,type:String,reflect:!1,hasChanged:W},X=new Promise(e=>e(!0)),G=1,K=4,Z=8;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=F(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:q;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?D:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?H:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=F(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=F(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&G?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:q;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Z,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Z)}}_attributeToProperty(e,t){if(!(this._updateState&Z)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||q;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&K}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&G||(this._updateState=this._updateState|G,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=F(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Q._attributeToPropertyMap=new Map,Q._finalized=!0,Q._classProperties=new Map,Q.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Y=e=>(t,n)=>{t.constructor.createProperty(n,e)};J((e,t)=>e.querySelector(t)),J((e,t)=>e.querySelectorAll(t));function J(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ee extends Q{update(e){super.update(e);const t=this.render();t instanceof v&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}ee.render=((e,t,n)=>{const r=n.scopeName,o=k.has(t),i=t instanceof ShadowRoot&&z&&e instanceof v,a=i&&!U.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=k.get(t);void 0===r&&(s(t,t.firstChild),k.set(t,r=new x(Object.assign({templateFactory:A},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:(e=>t=>{const n=L(t.type,e);let r=O.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},O.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(l);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(n,e),o=new h(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),a){const e=k.get(c);k.delete(c),e.value instanceof g&&B(c,e.value.template,r),s(t,t.firstChild),t.appendChild(c),k.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var te=n(5),ne=n.n(te),re=n(6),oe=n.n(re),ie=n(1),se=n.n(ie);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ae=new WeakMap,le=e=>"function"==typeof e&&ae.has(e),ce=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,de=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},pe={},he=`{{lit-${String(Math.random()).slice(2)}}}`,ue=`\x3c!--${he}--\x3e`,me=new RegExp(`${he}|${ue}`),fe="$lit$";class ge{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(he)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=_e.exec(o)[2],s=i.toLowerCase()+fe,a=t.getAttribute(s).split(me);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(he)<0)continue;const i=t.parentNode,s=e.split(me),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?ye():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?ye():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===he){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(ye(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(ye(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(he,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const ve=e=>-1!==e.index,ye=()=>document.createComment(""),_e=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class be{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=ce?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(ve(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),ce&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class xe{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(_e,(t,n,r,o)=>(e=!0,n+r+fe+o+he)),e||(t+=ue)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const we=e=>null===e||!("object"==typeof e||"function"==typeof e);class Se{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Ne(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ne{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===pe||we(e)&&e===this.value||(this.value=e,le(e)||(this.committer.dirty=!0))}commit(){for(;le(this.value);){const e=this.value;this.value=pe,e(this)}this.value!==pe&&this.committer.commit()}}class Pe{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ye()),this.endNode=e.appendChild(ye())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=ye()),e._insert(this.endNode=ye())}insertAfterPart(e){e._insert(this.startNode=ye()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;le(this._pendingValue);){const e=this._pendingValue;this._pendingValue=pe,e(this)}const e=this._pendingValue;e!==pe&&(we(e)?e!==this.value&&this._commitText(e):e instanceof xe?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new be(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Pe(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;de(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ee{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;le(this._pendingValue);){const e=this._pendingValue;this._pendingValue=pe,e(this)}if(this._pendingValue===pe)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=pe}}class Te extends Se{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Ce(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ce extends Ne{}let Ae=!1;try{const e={get capture(){return Ae=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Oe{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;le(this._pendingValue);){const e=this._pendingValue;this._pendingValue=pe,e(this)}if(this._pendingValue===pe)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=ke(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=pe}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ke=e=>e&&(Ae?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Te(e,t.slice(1),n).parts:"@"===o?[new Oe(e,t.slice(1),r.eventContext)]:"?"===o?[new Ee(e,t.slice(1),n)]:new Se(e,t,n).parts}handleTextExpression(e){return new Pe(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Me(e){let t=je.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},je.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(he);return void 0===(n=t.keyString.get(r))&&(n=new ge(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const je=new Map,Ve=new WeakMap,Re=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $e(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,Re,null,!1);let i=ze(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=ze(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const Le=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,Re,null,!1);for(;n.nextNode();)t++;return t},ze=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(ve(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ie=(e,t)=>`${e}--${t}`;let Ue=!0;void 0===window.ShadyCSS?Ue=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),Ue=!1);const Be=["html","svg"],Fe=new Set,De=(e,t,n)=>{Fe.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{Be.forEach(t=>{const n=je.get(Ie(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),$e(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,Re,null,!1);let s=ze(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=Le(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=ze(o,s);return}s=ze(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),$e(t,e)}};function He(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const We=e=>null!==e,qe=e=>e?"":null,Xe=(e,t)=>t!==e&&(t==t||e==e),Ge={attribute:!0,type:String,reflect:!1,hasChanged:Xe},Ke=new Promise(e=>e(!0)),Ze=1,Qe=4,Ye=8;class Je extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Ke,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=He(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ge;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Xe)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?We:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?qe:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=He(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=He(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Ze?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ge;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Ye,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Ye)}}_attributeToProperty(e,t){if(!(this._updateState&Ye)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||Ge;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|Qe;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Qe}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Ze||(this._updateState=this._updateState|Ze,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Qe}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=He(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Je._attributeToPropertyMap=new Map,Je._finalized=!0,Je._classProperties=new Map,Je.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
et((e,t)=>e.querySelector(t)),et((e,t)=>e.querySelectorAll(t));function et(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class tt extends Je{update(e){super.update(e);const t=this.render();t instanceof xe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}tt.render=((e,t,n)=>{const r=n.scopeName,o=Ve.has(t),i=t instanceof ShadowRoot&&Ue&&e instanceof xe,s=i&&!Fe.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Ve.get(t);void 0===r&&(de(t,t.firstChild),Ve.set(t,r=new Pe(Object.assign({templateFactory:Me},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=Ie(t.type,e);let r=je.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},je.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(he);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();Ue&&window.ShadyCSS.prepareTemplateDom(n,e),o=new ge(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Ve.get(a);Ve.delete(a),e.value instanceof be&&De(a,e.value.template,r),de(t,t.firstChild),t.appendChild(a),Ve.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var nt=n(3),rt=n.n(nt),ot=n(7),it=n.n(ot),st=n(8),at=n.n(st),lt=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object);rt.a.registerLanguage("javascript",n(22)),rt.a.registerLanguage("css",n(23)),rt.a.registerLanguage("xml",n(24)),rt.a.registerLanguage("bash",n(25)),rt.a.registerLanguage("shell",n(26));let ct=lt(class extends tt{static get properties(){return{code:{type:String},theme:{type:String},type:{type:String},hljs:{type:Object}}}connectedCallback(){this.hljs=this.hljs||rt.a,this.style(),this.highlight(this.code)}style(){let e=document.createElement("style");e.innerHTML=it.a+(this.theme?this.theme:at.a),this.shadowRoot.appendChild(e)}highlight(e){let t=document.createElement("pre"),n=document.createElement("code");this.type&&n.classList.add(this.type),n.innerHTML=this.entitize(e),t.appendChild(n),this.shadowRoot.appendChild(t),rt.a.highlightBlock(n)}cleanIndentation(e){const t=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(t,"g"),"\n")}entitize(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}});customElements.define("eve-highlight",ct);var dt=n(2),pt=n.n(dt);let ht=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
    <style>
      ${oe.a}
    </style>

    <div class="main">
      <eve-container>
        <div class="marketing">
          <div class="description">
            <h1>Project Evergreen</h1>
            <p>Quickly build modern, dynamic, performant, and <strong>evergreen</strong> web applications.
              By leveraging more of the the web's native capabilities, application's can become more consistent,
              portable, and maintainable. </p>
            <eve-button size="lg" href="/evergreen-web-components/docs">Get Started</eve-button>
          </div>
          <div class="logo">
            <img src="${se.a}">
          </div>
        </div>
        <div class="instructions">
            <h3>Quick Install</h3>
            <p>Create new evergreen app</p>
            <eve-highlight type="shell" code="$ npx create-evergreen-app my-app" theme="${pt.a}"></eve-highlight>
            <p>Change directory to application</p>
            <eve-highlight type="shell" code="$ cd my-app" theme="${pt.a}"></eve-highlight>
            <p>Start developing!</p>
            <eve-highlight type="shell" code="$ npm start" theme="${pt.a}"></eve-highlight>
        </div>
      </eve-container>
    </div>
    `}});customElements.define("home-page",ht);var ut=n(9),mt=n.n(ut),ft=n(10),gt=n.n(ft);let vt=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{static get properties(){return{items:{type:Array}}}render(){return M`
      <style>
        ${gt.a}
      </style>
      <table>
        <thead>
          <th>Property</th>
          <th>Description</th>
        </thead>
        <tbody>
          ${this.items.map(e=>{return M`
              <tr>
                <td>${e.property}</td>
                <td>${e.description}</td>
              </tr>
            `})}
        </tbody>
      </table>
    `}});customElements.define("eve-docs-table",vt);let yt=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{static get properties(){return{title:String,description:String,usage:String,styleVar:String,props:Object,install:String}}render(){const e=this.title,t=this.description,n=this.usage,r=this.styleVar,o=this.props,i=this.install;return M`
      <div>
        <h2>${e}</h2>
        <p>${t}</p>
        <slot></slot>
        <br />
        <h3>Get Started</h3>
        <eve-highlight type="shell" theme="${pt.a}" code="${i}"></eve-highlight>
        <br />
        <h3>Usage</h3>
        <eve-highlight type="javascript" theme="${pt.a}" code="${n}"></eve-highlight>
        <br />
        ${o?M`
        <h3>Props</h3>
        <eve-docs-table .items="${o}"></eve-docs-table>
        <br />
        `:""}
        ${r?M`
            <h3>Styling</h3>
            <eve-highlight type="css" theme="${pt.a}" code="${r}"></eve-highlight>
            <br />`:""}

      </div>
    `}});customElements.define("eve-docs",yt);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _t=new WeakMap,bt=e=>"function"==typeof e&&_t.has(e),xt=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,wt=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},St={},Nt=`{{lit-${String(Math.random()).slice(2)}}}`,Pt=`\x3c!--${Nt}--\x3e`,Et=new RegExp(`${Nt}|${Pt}`),Tt="$lit$";class Ct{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Nt)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=kt.exec(o)[2],s=i.toLowerCase()+Tt,a=t.getAttribute(s).split(Et);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Nt)<0)continue;const i=t.parentNode,s=e.split(Et),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Ot():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Ot():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Nt){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Ot(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Ot(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Nt,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const At=e=>-1!==e.index,Ot=()=>document.createComment(""),kt=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Mt{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=xt?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(At(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),xt&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class jt{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(kt,(t,n,r,o)=>(e=!0,n+r+Tt+o+Nt)),e||(t+=Pt)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Vt=e=>null===e||!("object"==typeof e||"function"==typeof e);class Rt{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $t(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class $t{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===St||Vt(e)&&e===this.value||(this.value=e,bt(e)||(this.committer.dirty=!0))}commit(){for(;bt(this.value);){const e=this.value;this.value=St,e(this)}this.value!==St&&this.committer.commit()}}class Lt{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ot()),this.endNode=e.appendChild(Ot())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Ot()),e._insert(this.endNode=Ot())}insertAfterPart(e){e._insert(this.startNode=Ot()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;bt(this._pendingValue);){const e=this._pendingValue;this._pendingValue=St,e(this)}const e=this._pendingValue;e!==St&&(Vt(e)?e!==this.value&&this._commitText(e):e instanceof jt?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Mt(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Lt(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;wt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class zt{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;bt(this._pendingValue);){const e=this._pendingValue;this._pendingValue=St,e(this)}if(this._pendingValue===St)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=St}}class It extends Rt{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Ut(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ut extends $t{}let Bt=!1;try{const e={get capture(){return Bt=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Ft{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;bt(this._pendingValue);){const e=this._pendingValue;this._pendingValue=St,e(this)}if(this._pendingValue===St)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Dt(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=St}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Dt=e=>e&&(Bt?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ht=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new It(e,t.slice(1),n).parts:"@"===o?[new Ft(e,t.slice(1),r.eventContext)]:"?"===o?[new zt(e,t.slice(1),n)]:new Rt(e,t,n).parts}handleTextExpression(e){return new Lt(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Wt(e){let t=qt.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},qt.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Nt);return void 0===(n=t.keyString.get(r))&&(n=new Ct(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const qt=new Map,Xt=new WeakMap,Gt=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new jt(e,n,"html",Ht)},Kt=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Zt(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,Kt,null,!1);let i=Yt(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=Yt(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const Qt=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,Kt,null,!1);for(;n.nextNode();)t++;return t},Yt=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(At(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Jt=(e,t)=>`${e}--${t}`;let en=!0;void 0===window.ShadyCSS?en=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),en=!1);const tn=["html","svg"],nn=new Set,rn=(e,t,n)=>{nn.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{tn.forEach(t=>{const n=qt.get(Jt(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),Zt(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,Kt,null,!1);let s=Yt(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=Qt(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=Yt(o,s);return}s=Yt(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),Zt(t,e)}};function on(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const sn=e=>null!==e,an=e=>e?"":null,ln=(e,t)=>t!==e&&(t==t||e==e),cn={attribute:!0,type:String,reflect:!1,hasChanged:ln},dn=new Promise(e=>e(!0)),pn=1,hn=4,un=8;class mn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=dn,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=on(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:cn;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ln)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?sn:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?an:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=on(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=on(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&pn?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:cn;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|un,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~un)}}_attributeToProperty(e,t){if(!(this._updateState&un)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||cn;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|hn;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&hn}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&pn||(this._updateState=this._updateState|pn,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~hn}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=on(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}mn._attributeToPropertyMap=new Map,mn._finalized=!0,mn._classProperties=new Map,mn.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
fn((e,t)=>e.querySelector(t)),fn((e,t)=>e.querySelectorAll(t));function fn(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class gn extends mn{update(e){super.update(e);const t=this.render();t instanceof jt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}gn.render=((e,t,n)=>{const r=n.scopeName,o=Xt.has(t),i=t instanceof ShadowRoot&&en&&e instanceof jt,s=i&&!nn.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Xt.get(t);void 0===r&&(wt(t,t.firstChild),Xt.set(t,r=new Lt(Object.assign({templateFactory:Wt},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=Jt(t.type,e);let r=qt.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},qt.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Nt);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();en&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Ct(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Xt.get(a);Xt.delete(a),e.value instanceof Mt&&rn(a,e.value.template,r),wt(t,t.firstChild),t.appendChild(a),Xt.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var vn=n(11),yn=n.n(vn);let _n=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends gn{static get properties(){return{fluid:{type:Boolean}}}render(){return Gt`
      <style>
      ${yn.a}
      </style>
      <div class=${this.fluid?"container-fluid":"container"}>
        <slot></slot>
      </div>
    `}});customElements.define("eve-container",_n);const bn=[{property:"fluid",description:"Set width to 100% of all devices. Otherwise, width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px"}];let xn=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
    <style>
      :host{
        --primary-color: #007f1d;
        --secondary-color:#fff;
      }

      .outter-container {
        background-color:lightgreen;
      }
      .inner-container {
        padding:10px;
        background-color:white;
        color:black;
      }
    </style>
      <eve-docs
        title="Container"
        description="A page layout container component"
        usage=${"\nimport '@evergreen-wc/eve-container';\n\nclass MyComponent extends LitElement {\n  render() {\n    return html`\n      <eve-container fluid></eve-container>\n    `;\n  }\n}\ncustomElements.define('my-component', MyComponent);\n"}
        install="$ npm i @evergreen-wc/eve-container"
        .props=${bn}
        >
        <div class="outter-container">
          <eve-container fluid>
            <div class="inner-container">Content padded 15px left and right, width 100% if fluid set or preset breakpoints if not</div>
          </eve-container>
        </div>
      </eve-docs>
    `}});customElements.define("container-docs",xn);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const wn=new WeakMap,Sn=e=>"function"==typeof e&&wn.has(e),Nn=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Pn=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},En={},Tn=`{{lit-${String(Math.random()).slice(2)}}}`,Cn=`\x3c!--${Tn}--\x3e`,An=new RegExp(`${Tn}|${Cn}`),On="$lit$";class kn{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Tn)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=Vn.exec(o)[2],s=i.toLowerCase()+On,a=t.getAttribute(s).split(An);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Tn)<0)continue;const i=t.parentNode,s=e.split(An),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?jn():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?jn():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Tn){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(jn(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(jn(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Tn,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Mn=e=>-1!==e.index,jn=()=>document.createComment(""),Vn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Rn{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=Nn?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(Mn(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),Nn&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class $n{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(Vn,(t,n,r,o)=>(e=!0,n+r+On+o+Tn)),e||(t+=Cn)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ln=e=>null===e||!("object"==typeof e||"function"==typeof e);class zn{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new In(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class In{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===En||Ln(e)&&e===this.value||(this.value=e,Sn(e)||(this.committer.dirty=!0))}commit(){for(;Sn(this.value);){const e=this.value;this.value=En,e(this)}this.value!==En&&this.committer.commit()}}class Un{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(jn()),this.endNode=e.appendChild(jn())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=jn()),e._insert(this.endNode=jn())}insertAfterPart(e){e._insert(this.startNode=jn()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Sn(this._pendingValue);){const e=this._pendingValue;this._pendingValue=En,e(this)}const e=this._pendingValue;e!==En&&(Ln(e)?e!==this.value&&this._commitText(e):e instanceof $n?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Rn(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Un(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Pn(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Bn{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Sn(this._pendingValue);){const e=this._pendingValue;this._pendingValue=En,e(this)}if(this._pendingValue===En)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=En}}class Fn extends zn{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Dn(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Dn extends In{}let Hn=!1;try{const e={get capture(){return Hn=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Wn{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Sn(this._pendingValue);){const e=this._pendingValue;this._pendingValue=En,e(this)}if(this._pendingValue===En)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=qn(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=En}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const qn=e=>e&&(Hn?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Xn=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Fn(e,t.slice(1),n).parts:"@"===o?[new Wn(e,t.slice(1),r.eventContext)]:"?"===o?[new Bn(e,t.slice(1),n)]:new zn(e,t,n).parts}handleTextExpression(e){return new Un(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Gn(e){let t=Kn.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Kn.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Tn);return void 0===(n=t.keyString.get(r))&&(n=new kn(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Kn=new Map,Zn=new WeakMap,Qn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new $n(e,n,"html",Xn)},Yn=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Jn(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,Yn,null,!1);let i=tr(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=tr(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const er=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,Yn,null,!1);for(;n.nextNode();)t++;return t},tr=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(Mn(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const nr=(e,t)=>`${e}--${t}`;let rr=!0;void 0===window.ShadyCSS?rr=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),rr=!1);const or=["html","svg"],ir=new Set,sr=(e,t,n)=>{ir.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{or.forEach(t=>{const n=Kn.get(nr(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),Jn(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,Yn,null,!1);let s=tr(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=er(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=tr(o,s);return}s=tr(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),Jn(t,e)}};function ar(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const lr=e=>null!==e,cr=e=>e?"":null,dr=(e,t)=>t!==e&&(t==t||e==e),pr={attribute:!0,type:String,reflect:!1,hasChanged:dr},hr=new Promise(e=>e(!0)),ur=1,mr=4,fr=8;class gr extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=hr,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=ar(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:pr;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:dr)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?lr:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?cr:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=ar(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=ar(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&ur?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pr;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|fr,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~fr)}}_attributeToProperty(e,t){if(!(this._updateState&fr)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||pr;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|mr;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&mr}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&ur||(this._updateState=this._updateState|ur,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~mr}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=ar(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}gr._attributeToPropertyMap=new Map,gr._finalized=!0,gr._classProperties=new Map,gr.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
vr((e,t)=>e.querySelector(t)),vr((e,t)=>e.querySelectorAll(t));function vr(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class yr extends gr{update(e){super.update(e);const t=this.render();t instanceof $n&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}yr.render=((e,t,n)=>{const r=n.scopeName,o=Zn.has(t),i=t instanceof ShadowRoot&&rr&&e instanceof $n,s=i&&!ir.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Zn.get(t);void 0===r&&(Pn(t,t.firstChild),Zn.set(t,r=new Un(Object.assign({templateFactory:Gn},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=nr(t.type,e);let r=Kn.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Kn.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Tn);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();rr&&window.ShadyCSS.prepareTemplateDom(n,e),o=new kn(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Zn.get(a);Zn.delete(a),e.value instanceof Rn&&sr(a,e.value.template,r),Pn(t,t.firstChild),t.appendChild(a),Zn.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var _r=n(12),br=n.n(_r);let xr=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends yr{static get properties(){return{label:{type:String},options:{type:Array},selected:{type:String}}}handleEvent(e){e.preventDefault(),e.stopPropagation();let t="";e.target.htmlFor?(t=e.target.parentNode,"option_def"!==e.target.htmlFor&&(this.setSelected(this.shadowRoot.querySelector("#"+e.target.htmlFor).value),t.classList.add("selection"))):t=e.target,this.handleDropdown(t),t.classList.toggle("expanded")}setSelected(e){let t=this.options.findIndex(t=>{return t.value===e}),n=this.options.findIndex(e=>{return e.checked});n>-1&&(this.options[n].checked=!1),t>-1&&(this.options[t].checked=!0,this.selected=this.options[t].value,this.optionSelectedCallback(this.selected,t)),this.dropdown.scrollTop=0}handleDropdown(e){this.dropdown=e}connectedCallback(){this.shadowRoot.addEventListener("click",this.handleEvent.bind(this),!0),window.addEventListener("click",this.close.bind(this),!1)}disconnectedCallback(){this.shadowRoot.removeEventListener("click",this.handleEvent.bind(this),!0),window.removeEventListener("click",this.close.bind(this),!1)}close(){this.dropdown&&this.dropdown.classList.remove("expanded")}renderItems(e,t){const n=(e,t,n,r)=>Qn`<input type="checkbox" name="option_drop" ?checked=${n} value=${t} id=${r}><label for=${r}>${e}</label>`;return void 0===t&&e?e.map((e,t)=>{let r=e.label,o=e.value,i=e.checked;return n(r,o,i,`option_${t}`)}):n(t,"",!1,"option_def")}render(){let e=this.options,t=this.label;return Qn`
    <style>
      ${br.a}
    </style>
      <span class="dropdown-el">
        ${this.renderItems(e,t)}
        ${this.renderItems(e)}
      </span>
    `}});customElements.define("eve-dropdown",xr);var wr=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object);const Sr=new Array(4).fill(null).map((e,t)=>({value:`value${t}`,label:`label${t}`})),Nr=[{property:"label",description:"The initial text displayed for the dropdown and at the top of the expanded dropdown."},{property:"options",description:"An array of objects containing value and label properties to display in dropdown."},{property:"optionSelectedCallback",description:"A callback function for when an option is selected. Will be return the value and index of the selected item to the callback function."}];let Pr=wr(class extends ee{handleSelection(e){alert("Selected value: "+e)}render(){return M`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color: #fff;
        --dropdown-color: var(--primary-color);
        --dropdown-border-color: var(--primary-color);
        --dropdown-text-color: var(--secondary-color);
        --dropdown-text-size: 1rem;
        --dropdown-text-hover-color: var(--secondary-color);
        --dropdown-text-expanded-color: var(--primary-color);
        --dropdown-text-background-hover: var(--primary-color);
        --dropdown-timing: .3s;
      }
    </style>
    <eve-docs
      title="Dropdown"
      description="A styleable select input drop-down list"
      usage=${"\nimport '@evergreen-wc/eve-dropdown';\n\nconst options = [\n  { value: 'value1', label: 'label1'},\n  { value: 'value2', label: 'label2'},\n  { value: 'value3', label: 'label3'},\n];\n\nclass MyComponent extends LitElement {\n  handleSelection(value, idx) {\n    console.log('selected', value);\n    console.log('index', idx);\n  }\n\n  render() {\n    return html`\n      <eve-dropdown label=\"Options...\" .options='${options}' .optionSelectedCallback=\"${this.handleSelection.bind(this)}\" ></eve-dropdown>\n    `;\n  }\n}\ncustomElements.define('my-component', MyComponent);\n"}
      styleVar=${"\n/* Example style */\n--primary-color: #41a6ef;\n--secondary-color: #fff;\n--dropdown-color: var(--primary-color);\n--dropdown-border-color: var(--primary-color);\n--dropdown-text-color: var(--secondary-color);\n--dropdown-text-size: 1rem;\n--dropdown-text-hover-color: var(--secondary-color);\n--dropdown-text-expanded-color: var(--primary-color);\n--dropdown-text-background-hover: var(--primary-color);\n--dropdown-timing: .3s;\n"}
      install="$ npm i @evergreen-wc/eve-dropdown"
      .props=${Nr}
      >
        <eve-dropdown label="Options..." .options="${Sr}" .optionSelectedCallback="${this.handleSelection.bind(this)}" ></eve-dropdown>
    </eve-docs>
   `}});customElements.define("dropdown-docs",Pr);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Er=new WeakMap,Tr=e=>"function"==typeof e&&Er.has(e),Cr=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Ar=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},Or={},kr=`{{lit-${String(Math.random()).slice(2)}}}`,Mr=`\x3c!--${kr}--\x3e`,jr=new RegExp(`${kr}|${Mr}`),Vr="$lit$";class Rr{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(kr)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=zr.exec(o)[2],s=i.toLowerCase()+Vr,a=t.getAttribute(s).split(jr);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(kr)<0)continue;const i=t.parentNode,s=e.split(jr),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Lr():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Lr():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===kr){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Lr(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Lr(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(kr,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const $r=e=>-1!==e.index,Lr=()=>document.createComment(""),zr=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ir{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=Cr?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if($r(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),Cr&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ur{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(zr,(t,n,r,o)=>(e=!0,n+r+Vr+o+kr)),e||(t+=Mr)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Br=e=>null===e||!("object"==typeof e||"function"==typeof e);class Fr{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Dr(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Dr{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Or||Br(e)&&e===this.value||(this.value=e,Tr(e)||(this.committer.dirty=!0))}commit(){for(;Tr(this.value);){const e=this.value;this.value=Or,e(this)}this.value!==Or&&this.committer.commit()}}class Hr{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Lr()),this.endNode=e.appendChild(Lr())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Lr()),e._insert(this.endNode=Lr())}insertAfterPart(e){e._insert(this.startNode=Lr()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Tr(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Or,e(this)}const e=this._pendingValue;e!==Or&&(Br(e)?e!==this.value&&this._commitText(e):e instanceof Ur?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Ir(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Hr(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Ar(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Wr{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Tr(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Or,e(this)}if(this._pendingValue===Or)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=Or}}class qr extends Fr{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Xr(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Xr extends Dr{}let Gr=!1;try{const e={get capture(){return Gr=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Kr{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Tr(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Or,e(this)}if(this._pendingValue===Or)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Zr(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=Or}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Zr=e=>e&&(Gr?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Qr=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new qr(e,t.slice(1),n).parts:"@"===o?[new Kr(e,t.slice(1),r.eventContext)]:"?"===o?[new Wr(e,t.slice(1),n)]:new Fr(e,t,n).parts}handleTextExpression(e){return new Hr(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function Yr(e){let t=Jr.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Jr.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(kr);return void 0===(n=t.keyString.get(r))&&(n=new Rr(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Jr=new Map,eo=new WeakMap,to=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Ur(e,n,"html",Qr)},no=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ro(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,no,null,!1);let i=io(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=io(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const oo=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,no,null,!1);for(;n.nextNode();)t++;return t},io=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if($r(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const so=(e,t)=>`${e}--${t}`;let ao=!0;void 0===window.ShadyCSS?ao=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),ao=!1);const lo=["html","svg"],co=new Set,po=(e,t,n)=>{co.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{lo.forEach(t=>{const n=Jr.get(so(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),ro(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,no,null,!1);let s=io(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=oo(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=io(o,s);return}s=io(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),ro(t,e)}};function ho(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const uo=e=>null!==e,mo=e=>e?"":null,fo=(e,t)=>t!==e&&(t==t||e==e),go={attribute:!0,type:String,reflect:!1,hasChanged:fo},vo=new Promise(e=>e(!0)),yo=1,_o=4,bo=8;class xo extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=vo,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=ho(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:go;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:fo)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?uo:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?mo:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=ho(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=ho(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&yo?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:go;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|bo,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~bo)}}_attributeToProperty(e,t){if(!(this._updateState&bo)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||go;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|_o;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&_o}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&yo||(this._updateState=this._updateState|yo,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~_o}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=ho(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}xo._attributeToPropertyMap=new Map,xo._finalized=!0,xo._classProperties=new Map,xo.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
wo((e,t)=>e.querySelector(t)),wo((e,t)=>e.querySelectorAll(t));function wo(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class So extends xo{update(e){super.update(e);const t=this.render();t instanceof Ur&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}So.render=((e,t,n)=>{const r=n.scopeName,o=eo.has(t),i=t instanceof ShadowRoot&&ao&&e instanceof Ur,s=i&&!co.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=eo.get(t);void 0===r&&(Ar(t,t.firstChild),eo.set(t,r=new Hr(Object.assign({templateFactory:Yr},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=so(t.type,e);let r=Jr.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Jr.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(kr);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();ao&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Rr(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=eo.get(a);eo.delete(a),e.value instanceof Ir&&po(a,e.value.template,r),Ar(t,t.firstChild),t.appendChild(a),eo.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var No=n(13),Po=n.n(No);let Eo=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends So{static get properties(){return{fluid:{type:Boolean},fixed:{type:Boolean},brand:{type:String},menu:{type:Array},drawerOpen:{type:Boolean}}}constructor(){super(),this.drawerOpen=!1}connectedCallback(){window.addEventListener("click",this.close.bind(this),!1)}disconnectedCallback(){window.removeEventListener("click",this.close.bind(this),!1)}close(){this.drop&&(this.drop.classList.remove("open"),delete this.drop),this.drawerOpen&&(this.drawerOpen=!1)}openDropdown(e){"drop-item"!==e.target.parentNode.classList[0]&&(this.drop&&this.drop.classList.toggle("open"),e.target.parentNode.querySelector(".drop-menu")===this.drop&&this.drop||(e.stopPropagation(),this.drop=e.target.parentNode.querySelector(".drop-menu"),this.drop.classList.toggle("open")))}toggleDrawer(e){e.stopPropagation(),this.drawerOpen=!this.drawerOpen}renderMenu(){if(this.menu)return this.menu.map((e,t)=>{let n=e.label,r=e.to,o=e.dropdown;if(0!==t)return o?to`
              <li @click="${e=>this.openDropdown(e)}">
                <a href="#">${n}<span class="caret"></span></a>
                <ul class="drop-menu">
                  ${o.map(e=>{let t=e.label;return to`
                      <li class="drop-item"><a href=${e.to}>${t}</a></li>
                    `})}
                </ul>
              </li>
            `:to`
              <li><a href=${r}>${n}</a></li>
            `})}render(){return to`
      <style>
        ${Po.a}
      </style>

      <nav class=${this.fixed?"fixed-top":""}>
          <a class="brand" href=${this.menu?this.menu[0].to:"/"}>${this.brand}</a>
          <button @click="${e=>this.toggleDrawer(e)}" class="mobile-toggle"><span></span></button>
          <div class="nav-items ${this.drawerOpen?"":"hidden"}">
            <ul class="nav-menu">
              ${this.renderMenu()}
            </ul>
          </div>
      </nav>
    `}});customElements.define("eve-navigation",Eo);const To=[{property:"brand",description:"Main Brand name displayed and linked for the feature application"},{property:"menu",description:"Main navigation menu array. Each item is an object which contains a label and to(url) keys. First index is default brand link."},{property:"fluid",description:"Set container width to 100% of all devices. Otherwise, container width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px and centered on page"},{property:"fixed",description:"Set navigation position to fixed at top."}],Co=[{label:"Home",to:"/"},{label:"Blog",to:"/blog"},{label:"Portfolio",to:"/portfolio",dropdown:[{label:"dropdown item 1",to:"#demos1"},{label:"dropdown item 2",to:"#demos2"}]},{label:"Photos",to:"/photos"},{label:"Contact",to:"/contact"}];let Ao=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
    <style>
      :host{
        --primary-color: green;
        --secondary-color: #fff;
        --nav-background: var(--primary-color);
        --nav-brand-text-size: 18px;
        --nav-brand-text-color: var(--secondary-color);
        --nav-menu-text-color: var(--secondary-color);
        --nav-menu-text-size:18px;
        --nav-menu-text-hover-color: var(--primary-color);
        --nav-menu-text-hover-background: var(--secondary-color);
      }
    </style>
      <eve-docs
        title="Navigation"
        description="A simple responsive navigation component."
        usage=${"\nimport '@evergreen-wc/eve-navigation';\n\nconst menu = [\n  { label: 'Home', to: '/' },\n  { label: 'Blog', to: '/blog' },\n  { label: 'Portfolio', to: '/portfolio',\n    dropdown: [\n      { label: 'dropdown item 1', to: '/demos1' },\n      { label: 'dropdown item 2', to: '/demos2' }\n    ]\n  },\n  { label: 'Photos', to: '/photos' },\n  { label: 'Contact', to: '/contact' }\n];\n\nclass MyComponent extends LitElement {\n  render() {\n    return html`\n      <eve-navigation brand=\"My Website\" .menu=${menu} fluid></eve-navigation>\n    `;\n  }\n}\ncustomElements.define('my-component', MyComponent);\n"}
        styleVar=${"\n--primary-color: green;\n--secondary-color: #fff;\n--nav-background: var(--primary-color);\n--nav-brand-text-size: 18px;\n--nav-brand-text-color: var(--secondary-color);\n--nav-menu-text-color: var(--secondary-color);\n--nav-menu-text-size:18px;\n--nav-menu-text-hover-color: var(--primary-color);\n--nav-menu-text-hover-background: var(--secondary-color);\n--nav-menu-drop-hover-background: color(green tint(25%));\n"}
        install="$ npm i @evergreen-wc/eve-navigation"
        .props=${To}
        >
        <eve-navigation brand="My Site" .menu=${Co} fluid></eve-navigation>
      </eve-docs>
    `}});customElements.define("navigation-docs",Ao);var Oo=n(14),ko=n.n(Oo);const Mo=[{property:"type",description:"Set the syntax type e.g. html, css, js, xml, bash"},{property:"theme",description:"Set the imported CSS file."},{property:"code",description:"Set the code string to highlight."},{property:"hljs",description:"Optionally you may wish to use a language not already registered due to optimization. You can import and register the languages in your own hljs object and add it as an attribute."}];let jo=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
      <eve-docs
        title="Syntax Highlighter"
        description="A highlight.js syntax highlighting component"
        usage=${"\nimport '@evergreen-wc/eve-highlight';\n// highlightjs themes https://github.com/highlightjs/highlight.js/tree/master/src/styles\nimport github from '../Highlight/themes/github.css';\n\n// Javascript example\n// Escape $ with \\\nconst code = `\nclass MyComponent extends LitElement {\n  constructor() {\n    this.name = 'helloworld'\n  }\n\n  renderThing() {\n    if(this.name === 'helloworld'){\n      console.log(this.name)\n    }\n  }\n}\ncustomElements.define('my-component', MyComponent);\n`;\n\nclass SomeComponent extends LitElement {\n  render() {\n    return html`\n      <eve-highlight type=\"js\" theme=\"${github}\" code=\"${code}\"></eve-highlight>\n    `;\n  }\n}\ncustomElements.define('some-component', SomeComponent);\n"}
        install="$ npm i @evergreen-wc/eve-highlight"
        .props=${Mo}
        >
        <eve-highlight type="javascript" theme="${ko.a}" code="${"\n// javascript example\nclass MyComponent extends LitElement {\n  constructor() {\n    this.name = 'helloworld'\n  }\n\n  renderThing() {\n    if(this.name === 'helloworld'){\n      console.log(this.name)\n    }\n  }\n}\ncustomElements.define('my-component', MyComponent);\n"}"></eve-highlight>
      </eve-docs>
    `}});customElements.define("highlighter-docs",jo);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Vo=new WeakMap,Ro=e=>"function"==typeof e&&Vo.has(e),$o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Lo=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},zo={},Io=`{{lit-${String(Math.random()).slice(2)}}}`,Uo=`\x3c!--${Io}--\x3e`,Bo=new RegExp(`${Io}|${Uo}`),Fo="$lit$";class Do{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Io)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=qo.exec(o)[2],s=i.toLowerCase()+Fo,a=t.getAttribute(s).split(Bo);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Io)<0)continue;const i=t.parentNode,s=e.split(Bo),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Wo():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Wo():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Io){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Wo(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Wo(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Io,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Ho=e=>-1!==e.index,Wo=()=>document.createComment(""),qo=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Xo{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=$o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(Ho(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),$o&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Go{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(qo,(t,n,r,o)=>(e=!0,n+r+Fo+o+Io)),e||(t+=Uo)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ko=e=>null===e||!("object"==typeof e||"function"==typeof e);class Zo{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Qo(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Qo{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===zo||Ko(e)&&e===this.value||(this.value=e,Ro(e)||(this.committer.dirty=!0))}commit(){for(;Ro(this.value);){const e=this.value;this.value=zo,e(this)}this.value!==zo&&this.committer.commit()}}class Yo{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Wo()),this.endNode=e.appendChild(Wo())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Wo()),e._insert(this.endNode=Wo())}insertAfterPart(e){e._insert(this.startNode=Wo()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Ro(this._pendingValue);){const e=this._pendingValue;this._pendingValue=zo,e(this)}const e=this._pendingValue;e!==zo&&(Ko(e)?e!==this.value&&this._commitText(e):e instanceof Go?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Xo(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Yo(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Lo(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Jo{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Ro(this._pendingValue);){const e=this._pendingValue;this._pendingValue=zo,e(this)}if(this._pendingValue===zo)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=zo}}class ei extends Zo{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ti(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ti extends Qo{}let ni=!1;try{const e={get capture(){return ni=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ri{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Ro(this._pendingValue);){const e=this._pendingValue;this._pendingValue=zo,e(this)}if(this._pendingValue===zo)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=oi(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=zo}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oi=e=>e&&(ni?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const ii=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new ei(e,t.slice(1),n).parts:"@"===o?[new ri(e,t.slice(1),r.eventContext)]:"?"===o?[new Jo(e,t.slice(1),n)]:new Zo(e,t,n).parts}handleTextExpression(e){return new Yo(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function si(e){let t=ai.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ai.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Io);return void 0===(n=t.keyString.get(r))&&(n=new Do(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const ai=new Map,li=new WeakMap,ci=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Go(e,n,"html",ii)},di=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function pi(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,di,null,!1);let i=ui(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=ui(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const hi=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,di,null,!1);for(;n.nextNode();)t++;return t},ui=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(Ho(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const mi=(e,t)=>`${e}--${t}`;let fi=!0;void 0===window.ShadyCSS?fi=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),fi=!1);const gi=["html","svg"],vi=new Set,yi=(e,t,n)=>{vi.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{gi.forEach(t=>{const n=ai.get(mi(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),pi(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,di,null,!1);let s=ui(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=hi(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=ui(o,s);return}s=ui(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),pi(t,e)}};function _i(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const bi=e=>null!==e,xi=e=>e?"":null,wi=(e,t)=>t!==e&&(t==t||e==e),Si={attribute:!0,type:String,reflect:!1,hasChanged:wi},Ni=new Promise(e=>e(!0)),Pi=1,Ei=4,Ti=8;class Ci extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Ni,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=_i(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Si;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:wi)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?bi:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?xi:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=_i(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=_i(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Pi?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Si;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Ti,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Ti)}}_attributeToProperty(e,t){if(!(this._updateState&Ti)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||Si;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|Ei;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Ei}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Pi||(this._updateState=this._updateState|Pi,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ei}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=_i(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Ci._attributeToPropertyMap=new Map,Ci._finalized=!0,Ci._classProperties=new Map,Ci.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
Ai((e,t)=>e.querySelector(t)),Ai((e,t)=>e.querySelectorAll(t));function Ai(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Oi extends Ci{update(e){super.update(e);const t=this.render();t instanceof Go&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Oi.render=((e,t,n)=>{const r=n.scopeName,o=li.has(t),i=t instanceof ShadowRoot&&fi&&e instanceof Go,s=i&&!vi.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=li.get(t);void 0===r&&(Lo(t,t.firstChild),li.set(t,r=new Yo(Object.assign({templateFactory:si},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=mi(t.type,e);let r=ai.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ai.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Io);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();fi&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Do(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=li.get(a);li.delete(a),e.value instanceof Xo&&yi(a,e.value.template,r),Lo(t,t.firstChild),t.appendChild(a),li.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});let ki=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends Oi{render(){return ci`
    <style>
      :host {
        margin-left: -0.25rem;
        margin-right: -0.25rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-flow: row wrap;
        flex-flow: row wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: center;
      }
    </style>
      <slot></slot>
    `}});customElements.define("eve-row",ki);let Mi=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends Oi{static get properties(){return{width:{type:String}}}render(){return ci`
    <style>
      :host {
        flex: 0 0 calc((${this.width} / 12)* 100%);
        max-width: calc((${this.width} / 12) * 100%);
        background-color: lightgray;
        border: 1px solid gray;
      }
    </style>
    <slot></slot>
    `}});customElements.define("eve-col",Mi);let ji=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
    <style>
      eve-row{
        border: 4px solid green;
      }
    </style>
    <eve-docs
      title="Row"
      description="A centered flexbox row wrap layout component"
      install="$ npm i @evergreen-wc/layout"
      usage=${'\nimport \'@evergreen-wc/eve-card\';\nimport \'@evergreen-wc/eve-row\';\n\nclass MyComponent extends LitElement {\n  render() {\n    return html`\n    <eve-row>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n    </eve-row>\n    `;\n  }\n}\ncustomElements.define(\'my-component\', MyComponent);\n'}
      >
        <eve-row>
          <eve-card img="${se.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
          <eve-card img="${se.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
          <eve-card img="${se.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
          <eve-card img="${se.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
        </eve-row>
    </eve-docs>
    `}});customElements.define("row-docs",ji);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Vi=new WeakMap,Ri=e=>"function"==typeof e&&Vi.has(e),$i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Li=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},zi={},Ii=`{{lit-${String(Math.random()).slice(2)}}}`,Ui=`\x3c!--${Ii}--\x3e`,Bi=new RegExp(`${Ii}|${Ui}`),Fi="$lit$";class Di{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Ii)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=qi.exec(o)[2],s=i.toLowerCase()+Fi,a=t.getAttribute(s).split(Bi);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Ii)<0)continue;const i=t.parentNode,s=e.split(Bi),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Wi():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Wi():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Ii){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Wi(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Wi(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Ii,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Hi=e=>-1!==e.index,Wi=()=>document.createComment(""),qi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Xi{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=$i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(Hi(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),$i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Gi{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(qi,(t,n,r,o)=>(e=!0,n+r+Fi+o+Ii)),e||(t+=Ui)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Ki=e=>null===e||!("object"==typeof e||"function"==typeof e);class Zi{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Qi(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Qi{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===zi||Ki(e)&&e===this.value||(this.value=e,Ri(e)||(this.committer.dirty=!0))}commit(){for(;Ri(this.value);){const e=this.value;this.value=zi,e(this)}this.value!==zi&&this.committer.commit()}}class Yi{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Wi()),this.endNode=e.appendChild(Wi())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Wi()),e._insert(this.endNode=Wi())}insertAfterPart(e){e._insert(this.startNode=Wi()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Ri(this._pendingValue);){const e=this._pendingValue;this._pendingValue=zi,e(this)}const e=this._pendingValue;e!==zi&&(Ki(e)?e!==this.value&&this._commitText(e):e instanceof Gi?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Xi(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Yi(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Li(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ji{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Ri(this._pendingValue);){const e=this._pendingValue;this._pendingValue=zi,e(this)}if(this._pendingValue===zi)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=zi}}class es extends Zi{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ts(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ts extends Qi{}let ns=!1;try{const e={get capture(){return ns=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class rs{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Ri(this._pendingValue);){const e=this._pendingValue;this._pendingValue=zi,e(this)}if(this._pendingValue===zi)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=os(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=zi}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const os=e=>e&&(ns?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const is=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new es(e,t.slice(1),n).parts:"@"===o?[new rs(e,t.slice(1),r.eventContext)]:"?"===o?[new Ji(e,t.slice(1),n)]:new Zi(e,t,n).parts}handleTextExpression(e){return new Yi(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ss(e){let t=as.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},as.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Ii);return void 0===(n=t.keyString.get(r))&&(n=new Di(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const as=new Map,ls=new WeakMap,cs=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Gi(e,n,"html",is)},ds=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ps(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,ds,null,!1);let i=us(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=us(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const hs=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,ds,null,!1);for(;n.nextNode();)t++;return t},us=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(Hi(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ms=(e,t)=>`${e}--${t}`;let fs=!0;void 0===window.ShadyCSS?fs=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),fs=!1);const gs=["html","svg"],vs=new Set,ys=(e,t,n)=>{vs.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{gs.forEach(t=>{const n=as.get(ms(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),ps(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,ds,null,!1);let s=us(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=hs(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=us(o,s);return}s=us(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),ps(t,e)}};function _s(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const bs=e=>null!==e,xs=e=>e?"":null,ws=(e,t)=>t!==e&&(t==t||e==e),Ss={attribute:!0,type:String,reflect:!1,hasChanged:ws},Ns=new Promise(e=>e(!0)),Ps=1,Es=4,Ts=8;class Cs extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Ns,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=_s(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ss;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ws)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?bs:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?xs:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=_s(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=_s(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Ps?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Ss;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Ts,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Ts)}}_attributeToProperty(e,t){if(!(this._updateState&Ts)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||Ss;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|Es;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Es}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Ps||(this._updateState=this._updateState|Ps,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Es}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=_s(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Cs._attributeToPropertyMap=new Map,Cs._finalized=!0,Cs._classProperties=new Map,Cs.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
As((e,t)=>e.querySelector(t)),As((e,t)=>e.querySelectorAll(t));function As(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Os extends Cs{update(e){super.update(e);const t=this.render();t instanceof Gi&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Os.render=((e,t,n)=>{const r=n.scopeName,o=ls.has(t),i=t instanceof ShadowRoot&&fs&&e instanceof Gi,s=i&&!vs.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=ls.get(t);void 0===r&&(Li(t,t.firstChild),ls.set(t,r=new Yi(Object.assign({templateFactory:ss},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=ms(t.type,e);let r=as.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},as.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Ii);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();fs&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Di(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=ls.get(a);ls.delete(a),e.value instanceof Xi&&ys(a,e.value.template,r),Li(t,t.firstChild),t.appendChild(a),ls.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var ks=n(15),Ms=n.n(ks);let js=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends Os{static get properties(){return{href:{type:String},onClick:{type:Function},size:{type:String}}}render(){const e=this.size,t=this.href,n=this.onClick;return cs`
    <style>
      ${Ms.a}
    </style>
      ${t?cs`
          <a class="btn btn-${e}" href="${t}">
            <slot></slot>
          </a>
          `:cs`
          <a class="btn btn-${e}" href="#" @click="${n}">
            <slot></slot>
          </a>
        `}
    `}});customElements.define("eve-button",js);const Vs=[{property:"size",description:"Set size of button. e.g. xs, sm, md, lg"},{property:"href",description:"Set an anchor to navigate to on click"},{property:"onClick",description:"Set a function to callback on click"}];let Rs=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{handleClick(){alert("button clicked!")}render(){return M`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color:#fff;
        --btn-background: transparent;
        --btn-border-color: var(--primary-color);
        --btn-text-color: var(--primary-color);
        --btn-hover-background-color: var(--primary-color);
        --btn-hover-text-color: var(--secondary-color);
        --btn-hover-border-color: var(--primary-color);
        --btn-border-radius: 5px
      }
    </style>
      <eve-docs
        title="Button"
        description="A styled button component"
        usage=${'\nimport \'@evergreen-wc/eve-button\';\n\nclass MyComponent extends LitElement {\n  handleClick() {\n    alert(\'button clicked!\');\n  }\n\n  render() {\n    return html`\n      <eve-button size="md" href="/docs">Medium href Button</eve-button>\n      <eve-button size="md" .onClick="${this.handleClick.bind(this)}">Medium function Button</eve-button>\n    `;\n  }\n}\n'}
        .props=${Vs}
        install="$ npm i @evergreen-wc/eve-button"
        styleVar=${"\n--primary-color: #007f1d;\n--secondary-color:#fff;\n--btn-background: transparent;\n--btn-border-color: var(--primary-color);\n--btn-text-color: var(--primary-color);\n--btn-hover-background-color: var(--primary-color);\n--btn-hover-text-color: var(--secondary-color);\n--btn-hover-border-color: var(--primary-color);\n--btn-border-radius: 5px\n"}
        >
        <eve-button size="lg" href="/docs">Large href Button</eve-button>
        <eve-button size="lg" .onClick="${this.handleClick.bind(this)}">Large function Button</eve-button>
        <br />
        <eve-button size="md" href="/docs">Medium href Button</eve-button>
        <eve-button size="md" .onClick="${this.handleClick.bind(this)}">Medium function Button</eve-button>
        <br />
        <eve-button size="sm" href="/docs">Smaller href Button</eve-button>
        <eve-button size="sm" .onClick="${this.handleClick.bind(this)}">Smaller function Button</eve-button>
        <br />
        <eve-button size="xs" href="/docs">Smallest href Button</eve-button>
        <eve-button size="xs" .onClick="${this.handleClick.bind(this)}">Smallest function Button</eve-button>
      </eve-docs>
      `}});customElements.define("button-docs",Rs);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const $s=new WeakMap,Ls=e=>"function"==typeof e&&$s.has(e),zs=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Is=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},Us={},Bs=`{{lit-${String(Math.random()).slice(2)}}}`,Fs=`\x3c!--${Bs}--\x3e`,Ds=new RegExp(`${Bs}|${Fs}`),Hs="$lit$";class Ws{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Bs)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=Gs.exec(o)[2],s=i.toLowerCase()+Hs,a=t.getAttribute(s).split(Ds);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Bs)<0)continue;const i=t.parentNode,s=e.split(Ds),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Xs():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Xs():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Bs){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Xs(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Xs(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Bs,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const qs=e=>-1!==e.index,Xs=()=>document.createComment(""),Gs=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ks{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=zs?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(qs(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),zs&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Zs{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(Gs,(t,n,r,o)=>(e=!0,n+r+Hs+o+Bs)),e||(t+=Fs)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Qs=e=>null===e||!("object"==typeof e||"function"==typeof e);class Ys{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Js(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Js{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Us||Qs(e)&&e===this.value||(this.value=e,Ls(e)||(this.committer.dirty=!0))}commit(){for(;Ls(this.value);){const e=this.value;this.value=Us,e(this)}this.value!==Us&&this.committer.commit()}}class ea{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Xs()),this.endNode=e.appendChild(Xs())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Xs()),e._insert(this.endNode=Xs())}insertAfterPart(e){e._insert(this.startNode=Xs()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Ls(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Us,e(this)}const e=this._pendingValue;e!==Us&&(Qs(e)?e!==this.value&&this._commitText(e):e instanceof Zs?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Ks(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new ea(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Is(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ta{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Ls(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Us,e(this)}if(this._pendingValue===Us)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=Us}}class na extends Ys{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ra(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ra extends Js{}let oa=!1;try{const e={get capture(){return oa=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ia{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Ls(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Us,e(this)}if(this._pendingValue===Us)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=sa(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=Us}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const sa=e=>e&&(oa?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const aa=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new na(e,t.slice(1),n).parts:"@"===o?[new ia(e,t.slice(1),r.eventContext)]:"?"===o?[new ta(e,t.slice(1),n)]:new Ys(e,t,n).parts}handleTextExpression(e){return new ea(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function la(e){let t=ca.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ca.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Bs);return void 0===(n=t.keyString.get(r))&&(n=new Ws(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const ca=new Map,da=new WeakMap,pa=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Zs(e,n,"html",aa)},ha=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function ua(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,ha,null,!1);let i=fa(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=fa(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const ma=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,ha,null,!1);for(;n.nextNode();)t++;return t},fa=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(qs(n))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ga=(e,t)=>`${e}--${t}`;let va=!0;void 0===window.ShadyCSS?va=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),va=!1);const ya=["html","svg"],_a=new Set,ba=(e,t,n)=>{_a.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{ya.forEach(t=>{const n=ca.get(ga(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),ua(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,ha,null,!1);let s=fa(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=ma(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=fa(o,s);return}s=fa(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),ua(t,e)}};function xa(e,t){return function(e){if(Array.isArray(e))return e}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const wa=e=>null!==e,Sa=e=>e?"":null,Na=(e,t)=>t!==e&&(t==t||e==e),Pa={attribute:!0,type:String,reflect:!1,hasChanged:Na},Ea=new Promise(e=>e(!0)),Ta=1,Ca=4,Aa=8;class Oa extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Ea,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=xa(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Pa;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Na)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?wa:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?Sa:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=xa(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=xa(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Ta?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Pa;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Aa,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Aa)}}_attributeToProperty(e,t){if(!(this._updateState&Aa)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||Pa;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|Ca;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Ca}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Ta||(this._updateState=this._updateState|Ta,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ca}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=xa(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Oa._attributeToPropertyMap=new Map,Oa._finalized=!0,Oa._classProperties=new Map,Oa.properties={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
ka((e,t)=>e.querySelector(t)),ka((e,t)=>e.querySelectorAll(t));function ka(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Ma extends Oa{update(e){super.update(e);const t=this.render();t instanceof Zs&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Ma.render=((e,t,n)=>{const r=n.scopeName,o=da.has(t),i=t instanceof ShadowRoot&&va&&e instanceof Zs,s=i&&!_a.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=da.get(t);void 0===r&&(Is(t,t.firstChild),da.set(t,r=new ea(Object.assign({templateFactory:la},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=ga(t.type,e);let r=ca.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ca.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Bs);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();va&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Ws(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=da.get(a);da.delete(a),e.value instanceof Ks&&ba(a,e.value.template,r),Is(t,t.firstChild),t.appendChild(a),da.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var ja=n(16),Va=n.n(ja);let Ra=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends Ma{static get properties(){return{img:{type:String},size:{type:String}}}renderImage(){if(this.img)return pa`
        <img src="${this.img}" class="card-img-top" />
      `}render(){return pa`
    <style>
      ${Va.a}
    </style>
      <div class="card ${this.size?`card-${this.size}`:""}">
        ${this.renderImage()}
        <div class="body">
          <slot></slot>
        </div>
      </div>
    `}});customElements.define("eve-card",Ra);const $a=[{property:"size",description:"Set preset max-width of button. e.g. xs(250px), sm(300px), md(350px).\n                  By default, without size attribute, component will fill width of parent"},{property:"img",description:"Set an image url to fill the top of card"}];let La=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
    <style>
      :host {
        --primary-color: #007f1d;
        --secondary-color:#fff;
      }
    </style>
      <eve-docs
        title="Card"
        description="A styled card component"
        usage=${"\nimport '@evergreen-wc/eve-card';\n\nclass MyComponent extends LitElement {\n  render() {\n    return html`\n    <eve-card img='${logo}' size=\"md\">\n      <h1>Example Card</h1>\n      <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n    </eve-card>\n    `;\n  }\n}\ncustomElements.define('my-component', MyComponent);\n"}
        install="$ npm i @evergreen-wc/eve-card"
        .props=${$a}
        >
        <eve-card img='${se.a}' size="md">
          <h1>Example Card</h1>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
        </eve-card>
      </eve-docs>
      `}});customElements.define("card-docs",La);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const za=new WeakMap,Ia=(e=>(function(){const t=e(...arguments);return r.set(t,!0),t}))(e=>t=>{if(!(t instanceof x))throw new Error("unsafeHTML can only be used in text bindings");if(za.get(t)===e&&y(e))return;const n=document.createElement("template");n.innerHTML=e,t.setValue(document.importNode(n.content,!0)),za.set(t,e)}),Ua=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const Ba=e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const n=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const r=n.href;if(!r||-1!==r.indexOf("mailto:"))return;const o=window.location,i=o.origin||o.protocol+"//"+o.host;0===r.indexOf(i)&&(t.preventDefault(),r!==o.href&&(window.history.pushState({},"",r),e(o,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)};
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Fa=(e,t)=>{const n=function(e){var t,n,r,o=e.split("/");""===o[0]&&o.shift();for(var i,s=0,a=[],l="";s<o.length;s++)0!==(r=(i=o[s]).length)&&(42===(t=i.charCodeAt(0))?(a.push("wild"),l+="/(.*)"):58===t?(n=63===i.charCodeAt(r-1),a.push(i.substring(1,n?r-1:r)),l+=n?"(?:/([^/]+?))?":"/([^/]+?)"):l+="/"+i);return a.length&&(l+="(?:/)?"),{keys:a,pattern:l=new RegExp("^"+l+"/?$","i")}}(e),r=n.pattern,o=n.keys,i=r.exec(t);return{active:r.test(t),params:o.reduce((e,t,n)=>Object.assign({},e,{[t]:i&&i[n+1]||""}),{})}},Da=e=>({type:"ADD_ROUTE",path:e}),Ha=e=>((e=>{window.history.pushState({},"",e)})(e),{type:"NAVIGATE",path:e}),Wa=e=>({type:"SET_ACTIVE_ROUTE",path:e}),qa=(e,t)=>{let n=e.router.routes;return n&&t&&n[t]||{}},Xa=(e,t)=>t?!!qa(e,t).active:(e=>{let t=e.router.routes;return Object.keys(t).reduce((e,n)=>e&&!t[n].active,!0)})(e),Ga=(e,t)=>qa(e,t).params||{};var Ka=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let Za,Qa=!1;var Ya=e=>{class t extends(Ua(e)(ee)){constructor(){super(...arguments),this.active=!1,this.params={}}firstUpdated(){Qa||(Ba(t=>{const n=window.decodeURIComponent(t.pathname);return e.dispatch(Wa(n))}),Qa=!0),this.path&&e.dispatch(Da(this.path))}stateChanged(e){this.active=Xa(e,this.path),this.params=Ga(e,this.path)}render(){if(!this.active)return M``;if(!this.component)return M`<slot></slot>`;const e=this.component.replace(/[^A-Za-z-]/,""),t=Object.keys(this.params).map(e=>` ${e}="${this.params[e]}"`).join("");return M`${Ia(`<${e}${t}></${e}>`)}`}}Ka([Y({type:Boolean,reflect:!0})],t.prototype,"active",void 0),Ka([Y({type:String})],t.prototype,"component",void 0),Ka([Y({type:Object})],t.prototype,"params",void 0),Ka([Y({type:String})],t.prototype,"path",void 0),Za=t,window.customElements.define("lit-route",t)};const Ja={activeRoute:"/",routes:{}};var el=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ja,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.type,r=void 0===n?"":n,o=t.path,i=void 0===o?"":o;switch(r){case"NAVIGATE":case"SET_ACTIVE_ROUTE":return Object.assign({},e,{activeRoute:i,routes:Object.keys(e.routes).reduce((e,t)=>Object.assign({},e,{[t]:Fa(t,i)}),{})});case"ADD_ROUTE":return Object.assign({},e,{routes:Object.assign({},e.routes,{[i]:Fa(i,e.activeRoute)})});default:return e}};var tl=n(4),nl=function(){return Math.random().toString(36).substring(7).split("").join(".")},rl={INIT:"@@redux/INIT"+nl(),REPLACE:"@@redux/REPLACE"+nl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nl()}};function ol(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function il(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function sl(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}var al=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error("Expected the enhancer to be a function.");return r(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,s=n,a=[],l=a,c=!1;function d(){l===a&&(l=a.slice())}function p(){if(c)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(c)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(c)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=l.indexOf(e);l.splice(n,1)}}}function u(e){if(!ol(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,s=i(s,e)}finally{c=!1}for(var t=a=l,n=0;n<t.length;n++)(0,t[n])();return e}return u({type:rl.INIT}),(o={dispatch:u,subscribe:h,getState:p,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,u({type:rl.REPLACE})}})[tl.a]=function(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(p())}return n(),{unsubscribe:t(n)}}})[tl.a]=function(){return this},e},o}((e,t)=>e,(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||sl)((e=>{return t=>(n,r)=>{let o={};const i=t(n,r);return Object.assign({},i,{addReducers(t){const n=Object.assign({},o,t);this.replaceReducer(e(o=n))}})}})(function(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,s=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:rl.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:rl.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+rl.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},a=0;a<s.length;a++){var l=s[a],c=n[l],d=e[l],p=c(d,t);if(void 0===p){var h=il(l,t);throw new Error(h)}o[l]=p,r=r||p!==d}return r?o:e}}))),ll=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object);const cl=[{id:"button",label:"Button",component:M`
      <button-docs></button-docs>
    `},{id:"card",label:"Card",component:M`
      <card-docs></card-docs>
    `},{id:"container",label:"Container",component:M`
      <container-docs></container-docs>
    `},{id:"dropdown",label:"Dropdown",component:M`
      <dropdown-docs></dropdown-docs>
    `},{id:"highlight",label:"Highlighter",component:M`
      <highlighter-docs></highlighter-docs>
    `},{id:"navigation",label:"Navigation",component:M`
      <navigation-docs></navigation-docs>
    `},{id:"row",label:"Row",component:M`
      <row-docs></row-docs>
    `}];let dl=ll(class extends ee{static get properties(){return{selectDemo:Object,id:String}}constructor(){super(),this.selectDemo={}}connectedCallback(){window.addEventListener("click",this.close.bind(this),!1)}disconnectedCallback(){window.removeEventListener("click",this.close.bind(this),!1)}close(){this.sidebar&&(this.sidebar.classList.remove("open"),this.background.classList.remove("open"),delete this.sidebar,delete this.background)}updated(){this.handleSelect(this.id)}goTo(e){al.dispatch(Ha(e))}handleSelect(e){let t=cl.findIndex(t=>{return t.id===e});this.selectDemo=cl[t]}toggleSidebar(e){e.stopPropagation(),this.sidebar=this.shadowRoot.querySelector(".sidebar-wrapper"),this.background=this.shadowRoot.querySelector(".sidebar-background"),this.sidebar.classList.toggle("open"),this.background.classList.toggle("open")}renderPage(){return this.selectDemo?M`
        <div class="page">
          <div class="sidebar-background"><div class="background-shadow"></div></div>
          <div class="sidebar-toggle">
            <eve-button size="md" .onClick="${this.toggleSidebar.bind(this)}">Menu</eve-button>
          </div>
          ${this.selectDemo.component}
        </div>
      `:M`
      <div class="page">
        <p>Some component demos and usage</p>
      </div>
      `}render(){return M`
      <style>
        ${mt.a}
      </style>

      <div class="sidebar-wrapper" @click="${e=>e.stopPropagation()}">
        <div class="sidebar">
          <h4>Components</h4>
          <ul>
            ${cl.map(e=>{let t=e.label,n=e.id;return M`
                <li class="${this.id===n?"active":""}">
                  <a @click="${()=>this.goTo(`/evergreen-web-components/docs/${n}`)}" aria-label="menu-item">${t}</a>
                </li>
              `})}
          </ul>
        </div>
      </div>

      ${this.renderPage()}
    `}});customElements.define("docs-page",dl),(e=>{e.addReducers({router:el}),Ya(e)})(al);const pl=[{label:"Home",to:"/evergreen-web-components"},{label:"About",to:"/about",dropdown:[{label:"Dropdown Item 1",to:"/demos1"},{label:"Dropdown Item 3",to:"/demos2"}]},{label:"Docs",to:"/docs",dropdown:[{label:"dropdown item 1",to:"/docs1"},{label:"dropdown item 2",to:"/docs2"}]},{label:"Examples",to:"/examples"}];customElements.define("eve-app",class extends(Ua(al)(ee)){render(){return M`
    <style>
      ${ne.a}
    </style>
      <eve-navigation brand="Project Evergreen" fixed fluid .menu="${pl}"></eve-navigation>
      <lit-route path="/evergreen-web-components/" component="home-page" active=""></lit-route>
      <lit-route path="/evergreen-web-components/docs" component="docs-page"></lit-route>
      <lit-route path="/evergreen-web-components/docs/:id" component="docs-page"></lit-route>
      <!-- <lit-route path="/examples" component="examples-page"></lit-route> -->
    `}})}]);