!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=38)}([function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r=n(27);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var t=[],n=Object.keys,r={},o={},i=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,a=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function d(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function p(e){return e.nodeName.toLowerCase()}function h(e,t){var n=e&&e.exec(t);return n&&0===n.index}function u(e){return i.test(e)}function m(e){var t,n={},r=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return r.forEach(function(e){for(t in e)n[t]=e[t]}),n}function f(e){var t=[];return function e(n,r){for(var o=n.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(t.push({event:"start",offset:r,node:o}),r=e(o,r),p(o).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:o}));return r}(e,0),t}function g(e){function t(e){return e&&e.source||e}function r(n,r){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(r?"g":""))}!function o(i,s){if(i.compiled)return;i.compiled=!0;i.keywords=i.keywords||i.beginKeywords;if(i.keywords){var a={},l=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof i.keywords?l("keyword",i.keywords):n(i.keywords).forEach(function(e){l(e,i.keywords[e])}),i.keywords=a}i.lexemesRe=r(i.lexemes||/\w+/,!0);s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=r(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=r(i.end)),i.terminator_end=t(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end));i.illegal&&(i.illegalRe=r(i.illegal));null==i.relevance&&(i.relevance=1);i.contains||(i.contains=[]);i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return m(e,{variants:null},t)}));return e.cached_variants||e.endsWithParent&&[m(e)]||[e]}("self"===e?i:e)}));i.contains.forEach(function(e){o(e,i)});i.starts&&o(i.starts,s);var c=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(t).filter(Boolean);i.terminators=c.length?r(c.join("|"),!0):{exec:function(){return null}}}(e)}function v(e,t,n,o){function i(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function s(e,t){var n=f.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function a(e,t,n,r){var o=r?"":c.classPrefix,i='<span class="'+o,s=n?"":l;return(i+=e+'">')+t+s}function p(){S+=null!=b.subLanguage?function(){var e="string"==typeof b.subLanguage;if(e&&!r[b.subLanguage])return d(N);var t=e?v(b.subLanguage,N,!0,x[b.subLanguage]):y(N,b.subLanguage.length?b.subLanguage:void 0);b.relevance>0&&(P+=t.relevance);e&&(x[b.subLanguage]=t.top);return a(t.language,t.value,!1,!0)}():function(){var e,t,n,r;if(!b.keywords)return d(N);r="",t=0,b.lexemesRe.lastIndex=0,n=b.lexemesRe.exec(N);for(;n;)r+=d(N.substring(t,n.index)),(e=s(b,n))?(P+=e[1],r+=a(e[0],d(n[0]))):r+=d(n[0]),t=b.lexemesRe.lastIndex,n=b.lexemesRe.exec(N);return r+d(N.substr(t))}(),N=""}function u(e){S+=e.className?a(e.className,"",!0):"",b=Object.create(e,{parent:{value:b}})}function m(e,t){if(N+=e,null==t)return p(),0;var r=function(e,t){var n,r;for(n=0,r=t.contains.length;n<r;n++)if(h(t.contains[n].beginRe,e))return t.contains[n].endSameAsBegin&&(t.contains[n].endRe=i(t.contains[n].beginRe.exec(e)[0])),t.contains[n]}(t,b);if(r)return r.skip?N+=t:(r.excludeBegin&&(N+=t),p(),r.returnBegin||r.excludeBegin||(N=t)),u(r),r.returnBegin?0:t.length;var o=function e(t,n){if(h(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(b,t);if(o){var s=b;s.skip?N+=t:(s.returnEnd||s.excludeEnd||(N+=t),p(),s.excludeEnd&&(N=t));do{b.className&&(S+=l),b.skip||b.subLanguage||(P+=b.relevance),b=b.parent}while(b!==o.parent);return o.starts&&(o.endSameAsBegin&&(o.starts.endRe=o.endRe),u(o.starts)),s.returnEnd?0:t.length}if(function(e,t){return!n&&h(t.illegalRe,e)}(t,b))throw new Error('Illegal lexeme "'+t+'" for mode "'+(b.className||"<unnamed>")+'"');return N+=t,t.length||1}var f=w(e);if(!f)throw new Error('Unknown language: "'+e+'"');g(f);var _,b=o||f,x={},S="";for(_=b;_!==f;_=_.parent)_.className&&(S=a(_.className,"",!0)+S);var N="",P=0;try{for(var E,T,C=0;b.terminators.lastIndex=C,E=b.terminators.exec(t);)T=m(t.substring(C,E.index),E[0]),C=E.index+T;for(m(t.substr(C)),_=b;_.parent;_=_.parent)_.className&&(S+=l);return{relevance:P,value:S,language:e,top:b}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:d(t)};throw e}}function y(e,t){t=t||c.languages||n(r);var o={relevance:0,value:d(e)},i=o;return t.filter(w).filter(S).forEach(function(t){var n=v(t,e,!1);n.language=t,n.relevance>i.relevance&&(i=n),n.relevance>o.relevance&&(i=o,o=n)}),i.language&&(o.second_best=i),o}function _(e){return c.tabReplace||c.useBR?e.replace(a,function(e,t){return c.useBR&&"\n"===e?"<br>":c.tabReplace?t.replace(/\t/g,c.tabReplace):""}):e}function b(e){var n,r,i,a,l,h=function(e){var t,n,r,o,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",n=s.exec(i))return w(n[1])?n[1]:"no-highlight";for(i=i.split(/\s+/),t=0,r=i.length;t<r;t++)if(u(o=i[t])||w(o))return o}(e);u(h)||(c.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,l=n.textContent,i=h?v(h,l,!0):y(l),(r=f(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,n,r){var o=0,i="",s=[];function a(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){i+="<"+p(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+d(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+p(e)+">"}function h(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){var u=a();if(i+=d(r.substring(o,u[0].offset)),o=u[0].offset,u===e){s.reverse().forEach(c);do{h(u.splice(0,1)[0]),u=a()}while(u===e&&u.length&&u[0].offset===o);s.reverse().forEach(l)}else"start"===u[0].event?s.push(u[0].node):s.pop(),h(u.splice(0,1)[0])}return i+d(r.substr(o))}(r,f(a),l)),i.value=_(i.value),e.innerHTML=i.value,e.className=function(e,t,n){var r=t?o[t]:n,i=[e.trim()];e.match(/\bhljs\b/)||i.push("hljs");-1===e.indexOf(r)&&i.push(r);return i.join(" ").trim()}(e.className,h,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function x(){if(!x.called){x.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,b)}}function w(e){return e=(e||"").toLowerCase(),r[e]||r[o[e]]}function S(e){var t=w(e);return t&&!t.disableAutodetect}e.highlight=v,e.highlightAuto=y,e.fixMarkup=_,e.highlightBlock=b,e.configure=function(e){c=m(c,e)},e.initHighlighting=x,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",x,!1),addEventListener("load",x,!1)},e.registerLanguage=function(t,n){var i=r[t]=n(e);i.aliases&&i.aliases.forEach(function(e){o[e]=t})},e.listLanguages=function(){return n(r)},e.getLanguage=w,e.autoDetection=S,e.inherit=m,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,r){var o=e.inherit({className:"comment",begin:t,end:n,contains:[]},r||{});return o.contains.push(e.PHRASAL_WORDS_MODE),o.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),o},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(t)}()},function(e,t,n){e.exports=n.p+"ebf0f11fdb6186dde66c63b5c54038de.png"},function(e,t,n){"use strict";(function(e,r){var o,i=n(17);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var s=Object(i.a)(o);t.a=s}).call(this,n(36),n(37)(e))},function(e,t,n){var r=n(18);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(19);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(20);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(21);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(28);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(29);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(30);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(31);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(32);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(33);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(34);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){var r=n(35);e.exports="string"==typeof r?r:r.toString()},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{--primary-color:green;--secondary-color:#fff;--nav-background:var(--primary-color);--nav-brand-text-size:18px;--nav-brand-text-color:var(--secondary-color);--nav-menu-text-color:var(--secondary-color);--nav-menu-text-size:18px;--nav-menu-text-hover-color:var(--primary-color);--nav-menu-text-hover-background:var(--secondary-color);--nav-menu-drop-hover-background:#40a040;height:100%}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{--primary-color:green}:host .main{margin-top:60px}:host .marketing{padding:10px;margin-top:20px;margin-left:auto;margin-right:auto;display:flex;flex-flow:row-reverse wrap}:host .marketing .description{flex-direction:column;order:2}:host .marketing .description h1{font-size:35px;color:var(--primary-color,green)}:host .marketing .description p{font-size:1.2rem;line-height:2.2rem;margin:5px 5px 20px}:host .logo{flex-direction:column;width:75%;order:1;margin-left:auto;margin-right:auto;margin-top:0}:host .logo img{width:100%}:host .instructions{margin-top:50px;background-color:#d9ecd9;border-radius:5px;padding:30px}@media (max-width:576px){:host .marketing{padding:0}:host .marketing .description,:host .marketing .logo{width:100%}}@media (min-width:576px){:host .marketing{padding:0}:host .marketing .description{width:\\100% & p{font-size:1.3rem}}:host .marketing .logo{margin-top:0;width:75%}}@media (min-width:768px){:host .marketing .description{width:\\60% & h1{font-size:3.5rem}}:host .marketing .description p{font-size:1.5rem}:host .marketing .logo{margin-top:30px;width:40%}}@media (min-width:992px){:host .marketing .description{width:50%}:host .marketing .logo{margin-top:-40px;width:45%}}:host{.instructions{margin-top:50px;background-color:#d9ecd9;border-radius:5px;padding:30px}}@media (min-width:768px){:host .marketing{margin-top:100px}}:host .hljs{padding:0!important}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{display:block}pre{margin:0}code,pre{font-family:var(--code-sample-font-family,Operator Mono,Inconsolata,Roboto Mono,monaco,consolas,monospace);font-size:var(--syntax-highlight-font-size,14px)}.hljs{padding:0 20px;line-height:var(--code-sample-line-height,1.3)}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;background:var(--code-sample-background,#f0f0f0)}.hljs,.hljs-subst{color:var(--code-sample-color,#444)}.hljs-comment{color:#888}.hljs-attribute,.hljs-doctag,.hljs-keyword,.hljs-meta-keyword,.hljs-name,.hljs-selector-tag{font-weight:700}.hljs-deletion,.hljs-number,.hljs-quote,.hljs-selector-class,.hljs-selector-id,.hljs-string,.hljs-template-tag,.hljs-type{color:#800}.hljs-section,.hljs-title{color:#800;font-weight:700}.hljs-link,.hljs-regexp,.hljs-selector-attr,.hljs-selector-pseudo,.hljs-symbol,.hljs-template-variable,.hljs-variable{color:#bc6060}.hljs-literal{color:#78a960}.hljs-addition,.hljs-built_in,.hljs-bullet,.hljs-code{color:#397300}.hljs-meta{color:#1f7199}.hljs-meta-string{color:#4d99bf}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}",""])},function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},o={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,o]};o.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,r,e.REGEXP_MODE];var s=o.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},function(e,t){e.exports=function(e){var t={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}}},function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},function(e,t){e.exports=function(e){var t={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},n={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,n,{className:"string",begin:/'/,end:/'/},t]}}},function(e,t){e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;background:#fff}.hljs,.hljs-emphasis,.hljs-strong,.hljs-subst,.hljs-tag,.hljs-title{color:#000}.hljs-bullet,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:navy}.hljs-code .hljs-selector-class{color:purple}.hljs-emphasis,.hljs-stronge,.hljs-type{font-style:italic}.hljs-function,.hljs-keyword,.hljs-name,.hljs-section,.hljs-selector-tag,.hljs-symbol{color:olive}.hljs-attribute{color:maroon}.hljs-class .hljs-title,.hljs-params,.hljs-variable{color:#0055af}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-comment,.hljs-deletion,.hljs-link,.hljs-meta,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-tag,.hljs-template-variable,.hljs-type{color:green}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{height:100%}:host .sidebar-wrapper{position:relative;margin:0;padding:0;height:100%;width:240px;float:left}:host .sidebar-wrapper .sidebar{overflow:auto;border-right:1px solid #d3d3d3;height:inherit;position:fixed;width:inherit}:host .sidebar-wrapper .sidebar h4{text-align:left;padding-left:20px}:host ul{list-style:none;padding-left:15px;line-height:1.5rem}:host ul li{padding:5px;text-align:left}:host ul li a{display:block;cursor:pointer;color:green;text-decoration:none}:host ul li.active a{color:#000;font-weight:600}:host .page{padding:40px;margin-left:240px;margin-top:64px}:host .sidebar-background{display:none;position:fixed;top:0;opacity:0;width:100%;height:100%;z-index:19999;transition:opacity 5s linear}:host .background-shadow{position:fixed;top:62px;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.67843);z-index:20000}:host .open{display:block!important;transform:translateY(0)!important;opacity:1!important}@media (max-width:576px){:host .sidebar-wrapper{position:fixed;top:62px;z-index:99999;background-color:#fff;left:0;transform:translateX(-100%);transition:transform .3s ease-out}:host .page{margin-left:0}:host .page .sidebar-toggle{display:block}}@media (min-width:576px){:host .sidebar-wrapper{position:relative}:host .sidebar-toggle{display:none}}@media (min-width:768px){:host .sidebar-wrapper{position:relative}}:host{@keyframes wiggle{0%{transform:opacity 0}50%{transform:opacity .5}to{transform:opacity 1}}}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host table{border-spacing:0;border:1px solid #d3d3d3}:host table thead{background-color:var(--primary-color);color:var(--secondary-color)}:host table th{padding:5px}:host table td,:host table th{border-right:1px solid #d3d3d3}:host table td{padding:20px;border-top:1px solid #d3d3d3}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host .container,:host .container-fluid{margin-right:auto;margin-left:auto;padding-left:15px;padding-right:15px}@media (max-width:576px){:host .container{width:calc(100% - 30px)}}@media (min-width:576px){:host .container{width:540px}}@media (min-width:768px){:host .container{width:720px}}@media (min-width:992px){:host .container{width:960px}}@media (min-width:1200px){:host .container{width:1140px}}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,':host{--primary-color:#41a6ef;--secondary-color:#fff;--drop-background:var(--dropdown-color,var(--primary-color));--drop-border:var(--dropdown-border-color,var(--primary-color));--drop-text-color:var(--dropdown-text-color,var(--secondary-color));--drop-text-size:var(--dropdown-text-size,1rem);--drop-text-hover-color:var(--dropdown-text-hover-color,var(--secondary-color));--drop-text-expanded-color:var(--dropdown-text-expanded-color,var(--primary-color));--drop-text-background-hover:var(--dropdown-text-background-hover,var(--primary-color));--drop-timing:var(--dropdown-timing,.3s);height:2em;position:relative;display:block}:host .dropdown-el{min-width:12em;position:relative;display:inline-block;margin-right:1em;min-height:2em;max-height:2em;overflow:hidden;font-size:var(--drop-text-size);top:.5em;cursor:pointer;text-align:left;white-space:nowrap;color:var(--drop-text-color);outline:none;border:.06em solid transparent;border-radius:1em;background-color:var(--drop-background);transition:var(--drop-timing) all ease-in-out}:host .dropdown-el input{display:none}:host .dropdown-el label{border-top:.06em solid #d9d9d9;display:block;height:2em;line-height:2em;padding-left:1em;padding-right:3em;cursor:pointer;position:relative}:host .dropdown-el label:nth-child(2){margin-top:2em;border-top:.06em solid #d9d9d9}:host .dropdown-el #option_def+label{display:block;border-top:none;position:absolute;top:0}:host .dropdown-el #option_def+label:nth-child(2){margin-top:0;position:relative}:host .dropdown-el.selection input+label{margin-top:2em}:host .dropdown-el.selection #option_def+label{display:none}:host .dropdown-el.selection input:checked+label{display:block;border-top:none;position:absolute;top:0;margin-top:0}:host .dropdown-el.selection.expanded input+label{margin-top:0}:host .dropdown-el.selection.expanded input:checked+label{display:block;border-top:.06em solid #d9d9d9;position:unset;top:unset}:host .dropdown-el:after{content:"";position:absolute;right:.8em;top:.9em;border:.3em solid transparent;border-top:.3em solid var(--drop-text-color);transition:all .4s ease-in-out}:host .dropdown-el.expanded{border:.06em solid var(--drop-border);background:#fff;border-radius:.25em;padding:0;box-shadow:3px 3px 5px 0 rgba(0,0,0,.1);max-height:15em;overflow:overlay;z-index:100}:host .dropdown-el.expanded label{border-top:.06em solid #d9d9d9;color:var(--drop-text-expanded-color)}:host .dropdown-el.expanded label:hover{color:var(--drop-text-hover-color)!important;background-color:var(--drop-text-background-hover)!important}:host .dropdown-el.expanded input:checked+label{color:var(--drop-background);font-weight:600}:host .dropdown-el.expanded:after{transform:rotate(-180deg);top:.55em;border:.3em solid transparent;border-top:.3em solid var(--drop-text-expanded-color)}:host .dropdown-el.expanded #option_def+label{display:block!important;border-top:none;position:absolute;top:0}:host .dropdown-el.expanded #option_def+label:nth-child(2){margin-top:0!important;position:relative}',""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,':host{--primary-color:green;--secondary-color:#fff;--navigation-background:var(--nav-background,var(--primary-color));--navigation-menu-mobile-background:var(--nav-menu-mobile-background,var(--secondary-color));--navigation-brand-text-size:var(--nav-brand-text-size,18px);--navigation-brand-text-color:var(--nav-brand-text-color,var(--secondary-color));--navigation-menu-text-color:var(--nav-menu-text-color,var(--secondary-color));--navigation-menu-text-size:var(--nav-menu-text-size,18px);--navigation-menu-text-padding:var(--nav-menu-text-padding,20px);--navigation-menu-text-hover-color:var(--nav-menu-text-hover-color,var(--primary-color));--navigation-menu-text-hover-background:var(--nav-menu-text-hover-background,var(--secondary-color));--navigation-menu-mobile-text-color:var(--nav-menu-mobile-text-color,var(--primary-color));--navigation-menu-mobile-text-hover-color:var(--nav-menu-mobile-text-hover-color,var(--secondary-color));--navigation-menu-mobile-text-hover-background:var(--nav-menu-mobile-text-hover-background,var(--primary-color));--navigation-menu-drop-background:var(--nav-menu-drop-background,var(--secondary-color));--navigation-menu-drop-text-color:var(--nav-menu-drop-text-color,var(--primary-color));--navigation-menu-drop-hover-color:var(--nav-menu-drop-hover-background,color(green tint(25%)));--navigation-menu-drop-hover-text-color:var(--nav-menu-drop-hover-text-color,var(--secondary-color));--navigation-menu-drop-min-width:var(--nav-menu-drop-min-width,150px);--navigation-menu-drop-text-size:var(--nav-menu-drop-text-size,15px);--navigation-menu-drop-padding:var(--nav-menu-drop-padding,10px);--navigation-menu-mobile-drop-background:var(--nav-menu-mobile-drop-background,var(--secondary-color));--navigation-menu-mobile-drop-text-color:var(--nav-menu-mobile-drop-text-color,var(--primary-color));width:100%}:host nav{background-color:var(--navigation-background);border-bottom:1px solid #3a3a3a;width:100%;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between}:host nav.fixed-top{position:fixed;top:0;left:0;z-index:10000}:host .brand{display:inline-block;margin-top:20px;margin-bottom:20px;font-size:var(--navigation-brand-text-size);font-weight:600;padding-left:20px;color:var(--navigation-brand-text-color);display:block;text-decoration:none}:host .brand:focus{outline:none}:host .mobile-toggle{display:none;padding:.45rem .75rem;font-size:1.25rem;line-height:1;background-color:#fff;border:1px solid transparent;border-radius:.25rem;margin-right:10px}:host .mobile-toggle span{position:relative;padding-left:1em}:host .mobile-toggle span:before{content:"";position:absolute;left:0;top:.25em;width:1em;height:.1em;background:#000;box-shadow:0 .25em 0 0 #000,0 .5em 0 0 #000}:host .nav-items{flex-basis:100%;flex-grow:1;align-items:center;background-color:var(--navigation-menu-mobile-background)}:host .nav-menu{display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}:host ul{margin:0 0 0 auto}:host ul li{float:left;position:relative;display:block}:host ul li a{font-weight:600;color:var(--navigation-menu-mobile-text-color);text-decoration:none;padding:20px;font-size:var(--navigation-menu-text-size);display:block}:host ul li a:hover{color:var(--navigation-menu-mobile-text-hover-color);background-color:var(--navigation-menu-mobile-text-hover-background)}:host .drop-menu{display:none;position:static;right:0;left:auto;float:none;min-width:var(--navigation-menu-drop-min-width);padding-left:0;border-radius:4px;z-index:10000;box-shadow:0 1px 5px #acacac}:host .drop-menu li{width:100%;background-color:var(--navigation-menu-mobile-drop-background)}:host .drop-menu li a{font-weight:600;color:var(--navigation-menu-mobile-drop-text-color);text-decoration:none;padding:var(--navigation-menu-drop-padding);padding-left:20px;font-size:var(--navigation-menu-drop-text-size);white-space:nowrap;display:block}:host .drop-menu li a:hover{color:var(--navigation-menu-drop-hover-text-color);background-color:var(--navigation-menu-drop-hover-color)}:host .open{display:block}:host .hidden{display:none}:host .caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent}@media (max-width:576px){:host .mobile-toggle{display:inline-block}}@media (min-width:576px){:host .mobile-toggle{display:inline-block}}@media (min-width:768px){:host .mobile-toggle{display:none}:host .nav-items{display:flex!important;flex-basis:auto;background-color:initial}:host .nav-menu{flex-direction:row}:host ul li a{color:var(--navigation-menu-text-color)}:host ul li a:hover{color:var(--navigation-menu-text-hover-color);background-color:var(--navigation-menu-text-hover-background)}:host .drop-menu{position:absolute;float:left;padding-bottom:.15rem;border:1px solid #6c6c6c}:host .drop-menu li{background-color:var(--navigation-menu-drop-background)}:host .drop-menu li a{padding-left:10px;color:var(--navigation-menu-drop-text-color)}}',""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;color:var(--code-sample-color,#333);background:var(--code-sample-background,#f8f8f8)}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host{--primary-color:green;--secondary-color:#fff}:host .btn{margin:2px;border:1px solid var(--btn-border-color,var(--primary-color));color:var(--btn-text-color,var(--primary-color));background-color:var(--btn-background);text-decoration:none;position:relative;display:inline-block;border-radius:var(--btn-border-radius,0)}:host .btn:hover{background-color:var(--btn-hover-background-color,var(--primary-color));color:var(--btn-hover-text-color,var(--secondary-color));border:1px solid var(--btn-hover-border-color,var(--primary-color))}:host .btn-xs{padding:5px;font-size:12px}:host .btn-sm{padding:5px;font-size:16px}:host .btn-md{padding:10px;font-size:20px}:host .btn-lg{padding:15px;font-size:25px}",""])},function(e,t,n){(e.exports=n(0)(!1)).push([e.i,":host .card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:initial;border:1px solid rgba(0,0,0,.125);border-radius:.25rem;box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}:host .card .body{padding:10px}:host .card-xs{-ms-flex:1 1 16.666%;flex:1 1 16.666%;max-width:250px}:host .card-sm,:host .card-xs{-webkit-box-flex:1;margin:.25rem}:host .card-sm{-ms-flex:1 1 25%;flex:1 1 25%;max-width:380px}:host .card-md{-webkit-box-flex:1;-ms-flex:1 1 33.333%;margin:.25rem;flex:1 1 33.333%;max-width:450px}:host .card-img-top{width:100%;background-size:cover;background-position-x:center;background-position-y:center}",""])},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";n.r(t);
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
class ee extends Q{update(e){super.update(e);const t=this.render();t instanceof v&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}ee.render=((e,t,n)=>{const r=n.scopeName,o=k.has(t),i=t instanceof ShadowRoot&&z&&e instanceof v,a=i&&!U.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=k.get(t);void 0===r&&(s(t,t.firstChild),k.set(t,r=new x(Object.assign({templateFactory:A},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:(e=>t=>{const n=L(t.type,e);let r=O.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},O.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(l);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(n,e),o=new h(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),a){const e=k.get(c);k.delete(c),e.value instanceof g&&B(c,e.value.template,r),s(t,t.firstChild),t.appendChild(c),k.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var te=n(5),ne=n.n(te),re=n(6),oe=n.n(re);
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
const ie=new WeakMap,se=e=>"function"==typeof e&&ie.has(e),ae=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,le=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},ce={},de=`{{lit-${String(Math.random()).slice(2)}}}`,pe=`\x3c!--${de}--\x3e`,he=new RegExp(`${de}|${pe}`),ue="$lit$";class me{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(de)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=ve.exec(o)[2],s=i.toLowerCase()+ue,a=t.getAttribute(s).split(he);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(de)<0)continue;const i=t.parentNode,s=e.split(he),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?ge():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?ge():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===de){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(ge(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(ge(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(de,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const fe=e=>-1!==e.index,ge=()=>document.createComment(""),ve=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class ye{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=ae?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(fe(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),ae&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class _e{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(ve,(t,n,r,o)=>(e=!0,n+r+ue+o+de)),e||(t+=pe)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const be=e=>null===e||!("object"==typeof e||"function"==typeof e);class xe{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new we(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class we{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===ce||be(e)&&e===this.value||(this.value=e,se(e)||(this.committer.dirty=!0))}commit(){for(;se(this.value);){const e=this.value;this.value=ce,e(this)}this.value!==ce&&this.committer.commit()}}class Se{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(ge()),this.endNode=e.appendChild(ge())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=ge()),e._insert(this.endNode=ge())}insertAfterPart(e){e._insert(this.startNode=ge()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;se(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ce,e(this)}const e=this._pendingValue;e!==ce&&(be(e)?e!==this.value&&this._commitText(e):e instanceof _e?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new ye(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Se(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;le(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Ne{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;se(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ce,e(this)}if(this._pendingValue===ce)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=ce}}class Pe extends xe{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Ee(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ee extends we{}let Te=!1;try{const e={get capture(){return Te=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Ce{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;se(this._pendingValue);){const e=this._pendingValue;this._pendingValue=ce,e(this)}if(this._pendingValue===ce)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Ae(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=ce}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Ae=e=>e&&(Te?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Pe(e,t.slice(1),n).parts:"@"===o?[new Ce(e,t.slice(1),r.eventContext)]:"?"===o?[new Ne(e,t.slice(1),n)]:new xe(e,t,n).parts}handleTextExpression(e){return new Se(e)}};
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
 */function Oe(e){let t=ke.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ke.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(de);return void 0===(n=t.keyString.get(r))&&(n=new me(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const ke=new Map,Me=new WeakMap,je=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function Ve(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,je,null,!1);let i=$e(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=$e(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const Re=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,je,null,!1);for(;n.nextNode();)t++;return t},$e=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(fe(n))return t}return-1};
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
const Le=(e,t)=>`${e}--${t}`;let ze=!0;void 0===window.ShadyCSS?ze=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),ze=!1);const Ie=["html","svg"],Ue=new Set,Be=(e,t,n)=>{Ue.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{Ie.forEach(t=>{const n=ke.get(Le(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),Ve(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,je,null,!1);let s=$e(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=Re(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=$e(o,s);return}s=$e(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),Ve(t,e)}};function Fe(e,t){return function(e){if(Array.isArray(e))return e}
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
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const De=e=>null!==e,He=e=>e?"":null,We=(e,t)=>t!==e&&(t==t||e==e),qe={attribute:!0,type:String,reflect:!1,hasChanged:We},Xe=new Promise(e=>e(!0)),Ge=1,Ke=4,Ze=8;class Qe extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Xe,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=Fe(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:We)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?De:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?He:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=Fe(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=Fe(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Ge?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:qe;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Ze,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Ze)}}_attributeToProperty(e,t){if(!(this._updateState&Ze)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||qe;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|Ke;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Ke}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Ge||(this._updateState=this._updateState|Ge,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ke}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=Fe(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Qe._attributeToPropertyMap=new Map,Qe._finalized=!0,Qe._classProperties=new Map,Qe.properties={};
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
Ye((e,t)=>e.querySelector(t)),Ye((e,t)=>e.querySelectorAll(t));function Ye(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
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
class Je extends Qe{update(e){super.update(e);const t=this.render();t instanceof _e&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Je.render=((e,t,n)=>{const r=n.scopeName,o=Me.has(t),i=t instanceof ShadowRoot&&ze&&e instanceof _e,s=i&&!Ue.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Me.get(t);void 0===r&&(le(t,t.firstChild),Me.set(t,r=new Se(Object.assign({templateFactory:Oe},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=Le(t.type,e);let r=ke.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ke.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(de);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();ze&&window.ShadyCSS.prepareTemplateDom(n,e),o=new me(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Me.get(a);Me.delete(a),e.value instanceof ye&&Be(a,e.value.template,r),le(t,t.firstChild),t.appendChild(a),Me.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var et=n(2),tt=n.n(et),nt=n(7),rt=n.n(nt),ot=n(8),it=n.n(ot),st=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object);tt.a.registerLanguage("javascript",n(22)),tt.a.registerLanguage("css",n(23)),tt.a.registerLanguage("xml",n(24)),tt.a.registerLanguage("bash",n(25)),tt.a.registerLanguage("shell",n(26));let at=st(class extends Je{static get properties(){return{code:{type:String},theme:{type:String},type:{type:String},hljs:{type:Object}}}connectedCallback(){this.hljs=this.hljs||tt.a,this.style(),this.highlight(this.code)}style(){let e=document.createElement("style");e.innerHTML=rt.a+(this.theme?this.theme:it.a),this.shadowRoot.appendChild(e)}highlight(e){let t=document.createElement("pre"),n=document.createElement("code");this.type&&n.classList.add(this.type),n.innerHTML=this.entitize(e),t.appendChild(n),this.shadowRoot.appendChild(t),tt.a.highlightBlock(n)}cleanIndentation(e){const t=e.match(/\s*\n[\t\s]*/);return e.replace(new RegExp(t,"g"),"\n")}entitize(e){return String(e).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/=""/g,"").replace(/=&gt;/g,"=>").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}});customElements.define("eve-highlight",at);var lt=n(1),ct=n.n(lt);let dt=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
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
            <eve-button size="lg" href="/docs">Get Started</eve-button>
          </div>
          <div class="logo">
            <img src="/ebf0f11fdb6186dde66c63b5c54038de.png">
          </div>
        </div>
        <div class="instructions">
            <h3>Quick Install</h3>
            <p>Create new evergreen app</p>
            <eve-highlight type="shell" code="$ npx create-evergreen-app my-app" theme="${ct.a}"></eve-highlight>
            <p>Change directory to application</p>
            <eve-highlight type="shell" code="$ cd my-app" theme="${ct.a}"></eve-highlight>
            <p>Start developing!</p>
            <eve-highlight type="shell" code="$ npm start" theme="${ct.a}"></eve-highlight>
        </div>
      </eve-container>
    </div>
    `}});customElements.define("home-page",dt);var pt=n(9),ht=n.n(pt),ut=n(10),mt=n.n(ut);let ft=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{static get properties(){return{items:{type:Array}}}render(){return M`
      <style>
        ${mt.a}
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
    `}});customElements.define("eve-docs-table",ft);let gt=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{static get properties(){return{title:String,description:String,usage:String,styleVar:String,props:Object,install:String}}render(){const e=this.title,t=this.description,n=this.usage,r=this.styleVar,o=this.props,i=this.install;return M`
      <div>
        <h2>${e}</h2>
        <p>${t}</p>
        <slot></slot>
        <br />
        <h3>Get Started</h3>
        <eve-highlight type="shell" theme="${ct.a}" code="${i}"></eve-highlight>
        <br />
        <h3>Usage</h3>
        <eve-highlight type="javascript" theme="${ct.a}" code="${n}"></eve-highlight>
        <br />
        ${o?M`
        <h3>Props</h3>
        <eve-docs-table .items="${o}"></eve-docs-table>
        <br />
        `:""}
        ${r?M`
            <h3>Styling</h3>
            <eve-highlight type="css" theme="${ct.a}" code="${r}"></eve-highlight>
            <br />`:""}

      </div>
    `}});customElements.define("eve-docs",gt);
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
const vt=new WeakMap,yt=e=>"function"==typeof e&&vt.has(e),_t=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,bt=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},xt={},wt=`{{lit-${String(Math.random()).slice(2)}}}`,St=`\x3c!--${wt}--\x3e`,Nt=new RegExp(`${wt}|${St}`),Pt="$lit$";class Et{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(wt)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=At.exec(o)[2],s=i.toLowerCase()+Pt,a=t.getAttribute(s).split(Nt);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(wt)<0)continue;const i=t.parentNode,s=e.split(Nt),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Ct():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Ct():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===wt){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Ct(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Ct(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(wt,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Tt=e=>-1!==e.index,Ct=()=>document.createComment(""),At=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class Ot{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=_t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(Tt(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),_t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class kt{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(At,(t,n,r,o)=>(e=!0,n+r+Pt+o+wt)),e||(t+=St)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const Mt=e=>null===e||!("object"==typeof e||"function"==typeof e);class jt{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Vt(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Vt{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===xt||Mt(e)&&e===this.value||(this.value=e,yt(e)||(this.committer.dirty=!0))}commit(){for(;yt(this.value);){const e=this.value;this.value=xt,e(this)}this.value!==xt&&this.committer.commit()}}class Rt{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ct()),this.endNode=e.appendChild(Ct())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Ct()),e._insert(this.endNode=Ct())}insertAfterPart(e){e._insert(this.startNode=Ct()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;yt(this._pendingValue);){const e=this._pendingValue;this._pendingValue=xt,e(this)}const e=this._pendingValue;e!==xt&&(Mt(e)?e!==this.value&&this._commitText(e):e instanceof kt?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Ot(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Rt(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;bt(this.startNode.parentNode,e.nextSibling,this.endNode)}}class $t{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;yt(this._pendingValue);){const e=this._pendingValue;this._pendingValue=xt,e(this)}if(this._pendingValue===xt)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=xt}}class Lt extends jt{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new zt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class zt extends Vt{}let It=!1;try{const e={get capture(){return It=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Ut{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;yt(this._pendingValue);){const e=this._pendingValue;this._pendingValue=xt,e(this)}if(this._pendingValue===xt)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Bt(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=xt}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Bt=e=>e&&(It?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const Ft=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Lt(e,t.slice(1),n).parts:"@"===o?[new Ut(e,t.slice(1),r.eventContext)]:"?"===o?[new $t(e,t.slice(1),n)]:new jt(e,t,n).parts}handleTextExpression(e){return new Rt(e)}};
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
 */function Dt(e){let t=Ht.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Ht.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(wt);return void 0===(n=t.keyString.get(r))&&(n=new Et(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Ht=new Map,Wt=new WeakMap,qt=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new kt(e,n,"html",Ft)},Xt=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function Gt(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,Xt,null,!1);let i=Zt(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=Zt(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const Kt=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,Xt,null,!1);for(;n.nextNode();)t++;return t},Zt=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(Tt(n))return t}return-1};
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
const Qt=(e,t)=>`${e}--${t}`;let Yt=!0;void 0===window.ShadyCSS?Yt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),Yt=!1);const Jt=["html","svg"],en=new Set,tn=(e,t,n)=>{en.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{Jt.forEach(t=>{const n=Ht.get(Qt(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),Gt(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,Xt,null,!1);let s=Zt(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=Kt(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=Zt(o,s);return}s=Zt(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),Gt(t,e)}};function nn(e,t){return function(e){if(Array.isArray(e))return e}
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
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const rn=e=>null!==e,on=e=>e?"":null,sn=(e,t)=>t!==e&&(t==t||e==e),an={attribute:!0,type:String,reflect:!1,hasChanged:sn},ln=new Promise(e=>e(!0)),cn=1,dn=4,pn=8;class hn extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=ln,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=nn(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:an;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:sn)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?rn:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?on:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=nn(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=nn(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&cn?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:an;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|pn,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~pn)}}_attributeToProperty(e,t){if(!(this._updateState&pn)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||an;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|dn;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&dn}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&cn||(this._updateState=this._updateState|cn,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~dn}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=nn(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}hn._attributeToPropertyMap=new Map,hn._finalized=!0,hn._classProperties=new Map,hn.properties={};
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
un((e,t)=>e.querySelector(t)),un((e,t)=>e.querySelectorAll(t));function un(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
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
class mn extends hn{update(e){super.update(e);const t=this.render();t instanceof kt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}mn.render=((e,t,n)=>{const r=n.scopeName,o=Wt.has(t),i=t instanceof ShadowRoot&&Yt&&e instanceof kt,s=i&&!en.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Wt.get(t);void 0===r&&(bt(t,t.firstChild),Wt.set(t,r=new Rt(Object.assign({templateFactory:Dt},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=Qt(t.type,e);let r=Ht.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Ht.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(wt);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();Yt&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Et(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Wt.get(a);Wt.delete(a),e.value instanceof Ot&&tn(a,e.value.template,r),bt(t,t.firstChild),t.appendChild(a),Wt.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var fn=n(11),gn=n.n(fn);let vn=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends mn{static get properties(){return{fluid:{type:Boolean}}}render(){return qt`
      <style>
      ${gn.a}
      </style>
      <div class=${this.fluid?"container-fluid":"container"}>
        <slot></slot>
      </div>
    `}});customElements.define("eve-container",vn);const yn=[{property:"fluid",description:"Set width to 100% of all devices. Otherwise, width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px"}];let _n=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
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
        install="$ npm i @evergreen/eve-container"
        .props=${yn}
        >
        <div class="outter-container">
          <eve-container fluid>
            <div class="inner-container">Content padded 15px left and right, width 100% if fluid set or preset breakpoints if not</div>
          </eve-container>
        </div>
      </eve-docs>
    `}});customElements.define("container-docs",_n);
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
const bn=new WeakMap,xn=e=>"function"==typeof e&&bn.has(e),wn=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Sn=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},Nn={},Pn=`{{lit-${String(Math.random()).slice(2)}}}`,En=`\x3c!--${Pn}--\x3e`,Tn=new RegExp(`${Pn}|${En}`),Cn="$lit$";class An{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Pn)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=Mn.exec(o)[2],s=i.toLowerCase()+Cn,a=t.getAttribute(s).split(Tn);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Pn)<0)continue;const i=t.parentNode,s=e.split(Tn),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?kn():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?kn():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Pn){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(kn(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(kn(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Pn,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const On=e=>-1!==e.index,kn=()=>document.createComment(""),Mn=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class jn{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=wn?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(On(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),wn&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class Vn{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(Mn,(t,n,r,o)=>(e=!0,n+r+Cn+o+Pn)),e||(t+=En)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const Rn=e=>null===e||!("object"==typeof e||"function"==typeof e);class $n{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Ln(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ln{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Nn||Rn(e)&&e===this.value||(this.value=e,xn(e)||(this.committer.dirty=!0))}commit(){for(;xn(this.value);){const e=this.value;this.value=Nn,e(this)}this.value!==Nn&&this.committer.commit()}}class zn{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(kn()),this.endNode=e.appendChild(kn())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=kn()),e._insert(this.endNode=kn())}insertAfterPart(e){e._insert(this.startNode=kn()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;xn(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Nn,e(this)}const e=this._pendingValue;e!==Nn&&(Rn(e)?e!==this.value&&this._commitText(e):e instanceof Vn?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new jn(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new zn(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Sn(this.startNode.parentNode,e.nextSibling,this.endNode)}}class In{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;xn(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Nn,e(this)}if(this._pendingValue===Nn)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=Nn}}class Un extends $n{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Bn(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Bn extends Ln{}let Fn=!1;try{const e={get capture(){return Fn=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Dn{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;xn(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Nn,e(this)}if(this._pendingValue===Nn)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Hn(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=Nn}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Hn=e=>e&&(Fn?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const Wn=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Un(e,t.slice(1),n).parts:"@"===o?[new Dn(e,t.slice(1),r.eventContext)]:"?"===o?[new In(e,t.slice(1),n)]:new $n(e,t,n).parts}handleTextExpression(e){return new zn(e)}};
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
 */function qn(e){let t=Xn.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Xn.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Pn);return void 0===(n=t.keyString.get(r))&&(n=new An(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Xn=new Map,Gn=new WeakMap,Kn=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Vn(e,n,"html",Wn)},Zn=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function Qn(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,Zn,null,!1);let i=Jn(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=Jn(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const Yn=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,Zn,null,!1);for(;n.nextNode();)t++;return t},Jn=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(On(n))return t}return-1};
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
const er=(e,t)=>`${e}--${t}`;let tr=!0;void 0===window.ShadyCSS?tr=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),tr=!1);const nr=["html","svg"],rr=new Set,or=(e,t,n)=>{rr.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{nr.forEach(t=>{const n=Xn.get(er(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),Qn(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,Zn,null,!1);let s=Jn(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=Yn(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=Jn(o,s);return}s=Jn(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),Qn(t,e)}};function ir(e,t){return function(e){if(Array.isArray(e))return e}
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
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const sr=e=>null!==e,ar=e=>e?"":null,lr=(e,t)=>t!==e&&(t==t||e==e),cr={attribute:!0,type:String,reflect:!1,hasChanged:lr},dr=new Promise(e=>e(!0)),pr=1,hr=4,ur=8;class mr extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=dr,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=ir(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:cr;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:lr)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?sr:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?ar:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=ir(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=ir(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&pr?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:cr;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|ur,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~ur)}}_attributeToProperty(e,t){if(!(this._updateState&ur)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||cr;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|hr;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&hr}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&pr||(this._updateState=this._updateState|pr,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~hr}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=ir(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}mr._attributeToPropertyMap=new Map,mr._finalized=!0,mr._classProperties=new Map,mr.properties={};
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
fr((e,t)=>e.querySelector(t)),fr((e,t)=>e.querySelectorAll(t));function fr(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
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
class gr extends mr{update(e){super.update(e);const t=this.render();t instanceof Vn&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}gr.render=((e,t,n)=>{const r=n.scopeName,o=Gn.has(t),i=t instanceof ShadowRoot&&tr&&e instanceof Vn,s=i&&!rr.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Gn.get(t);void 0===r&&(Sn(t,t.firstChild),Gn.set(t,r=new zn(Object.assign({templateFactory:qn},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=er(t.type,e);let r=Xn.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Xn.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Pn);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();tr&&window.ShadyCSS.prepareTemplateDom(n,e),o=new An(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Gn.get(a);Gn.delete(a),e.value instanceof jn&&or(a,e.value.template,r),Sn(t,t.firstChild),t.appendChild(a),Gn.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var vr=n(12),yr=n.n(vr);let _r=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends gr{static get properties(){return{label:{type:String},options:{type:Array},selected:{type:String}}}handleEvent(e){e.preventDefault(),e.stopPropagation();let t="";e.target.htmlFor?(t=e.target.parentNode,"option_def"!==e.target.htmlFor&&(this.setSelected(this.shadowRoot.querySelector("#"+e.target.htmlFor).value),t.classList.add("selection"))):t=e.target,this.handleDropdown(t),t.classList.toggle("expanded")}setSelected(e){let t=this.options.findIndex(t=>{return t.value===e}),n=this.options.findIndex(e=>{return e.checked});n>-1&&(this.options[n].checked=!1),t>-1&&(this.options[t].checked=!0,this.selected=this.options[t].value,this.optionSelectedCallback(this.selected,t)),this.dropdown.scrollTop=0}handleDropdown(e){this.dropdown=e}connectedCallback(){this.shadowRoot.addEventListener("click",this.handleEvent.bind(this),!0),window.addEventListener("click",this.close.bind(this),!1)}disconnectedCallback(){this.shadowRoot.removeEventListener("click",this.handleEvent.bind(this),!0),window.removeEventListener("click",this.close.bind(this),!1)}close(){this.dropdown&&this.dropdown.classList.remove("expanded")}renderItems(e,t){const n=(e,t,n,r)=>Kn`<input type="checkbox" name="option_drop" ?checked=${n} value=${t} id=${r}><label for=${r}>${e}</label>`;return void 0===t&&e?e.map((e,t)=>{let r=e.label,o=e.value,i=e.checked;return n(r,o,i,`option_${t}`)}):n(t,"",!1,"option_def")}render(){let e=this.options,t=this.label;return Kn`
    <style>
      ${yr.a}
    </style>
      <span class="dropdown-el">
        ${this.renderItems(e,t)}
        ${this.renderItems(e)}
      </span>
    `}});customElements.define("eve-dropdown",_r);var br=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object);const xr=new Array(4).fill(null).map((e,t)=>({value:`value${t}`,label:`label${t}`})),wr=[{property:"label",description:"The initial text displayed for the dropdown and at the top of the expanded dropdown."},{property:"options",description:"An array of objects containing value and label properties to display in dropdown."},{property:"optionSelectedCallback",description:"A callback function for when an option is selected. Will be return the value and index of the selected item to the callback function."}];let Sr=br(class extends ee{handleSelection(e){alert("Selected value: "+e)}render(){return M`
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
      install="$ npm i @evergreen/eve-dropdown"
      .props=${wr}
      >
        <eve-dropdown label="Options..." .options="${xr}" .optionSelectedCallback="${this.handleSelection.bind(this)}" ></eve-dropdown>
    </eve-docs>
   `}});customElements.define("dropdown-docs",Sr);
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
const Nr=new WeakMap,Pr=e=>"function"==typeof e&&Nr.has(e),Er=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Tr=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},Cr={},Ar=`{{lit-${String(Math.random()).slice(2)}}}`,Or=`\x3c!--${Ar}--\x3e`,kr=new RegExp(`${Ar}|${Or}`),Mr="$lit$";class jr{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Ar)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=$r.exec(o)[2],s=i.toLowerCase()+Mr,a=t.getAttribute(s).split(kr);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Ar)<0)continue;const i=t.parentNode,s=e.split(kr),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Rr():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Rr():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Ar){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Rr(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Rr(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Ar,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Vr=e=>-1!==e.index,Rr=()=>document.createComment(""),$r=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class Lr{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=Er?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(Vr(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),Er&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class zr{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace($r,(t,n,r,o)=>(e=!0,n+r+Mr+o+Ar)),e||(t+=Or)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const Ir=e=>null===e||!("object"==typeof e||"function"==typeof e);class Ur{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Br(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Br{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===Cr||Ir(e)&&e===this.value||(this.value=e,Pr(e)||(this.committer.dirty=!0))}commit(){for(;Pr(this.value);){const e=this.value;this.value=Cr,e(this)}this.value!==Cr&&this.committer.commit()}}class Fr{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Rr()),this.endNode=e.appendChild(Rr())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Rr()),e._insert(this.endNode=Rr())}insertAfterPart(e){e._insert(this.startNode=Rr()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Pr(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Cr,e(this)}const e=this._pendingValue;e!==Cr&&(Ir(e)?e!==this.value&&this._commitText(e):e instanceof zr?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Lr(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Fr(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Tr(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Dr{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;Pr(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Cr,e(this)}if(this._pendingValue===Cr)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=Cr}}class Hr extends Ur{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Wr(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Wr extends Br{}let qr=!1;try{const e={get capture(){return qr=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class Xr{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Pr(this._pendingValue);){const e=this._pendingValue;this._pendingValue=Cr,e(this)}if(this._pendingValue===Cr)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=Gr(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=Cr}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Gr=e=>e&&(qr?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const Kr=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Hr(e,t.slice(1),n).parts:"@"===o?[new Xr(e,t.slice(1),r.eventContext)]:"?"===o?[new Dr(e,t.slice(1),n)]:new Ur(e,t,n).parts}handleTextExpression(e){return new Fr(e)}};
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
 */function Zr(e){let t=Qr.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},Qr.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Ar);return void 0===(n=t.keyString.get(r))&&(n=new jr(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const Qr=new Map,Yr=new WeakMap,Jr=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new zr(e,n,"html",Kr)},eo=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function to(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,eo,null,!1);let i=ro(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=ro(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const no=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,eo,null,!1);for(;n.nextNode();)t++;return t},ro=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(Vr(n))return t}return-1};
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
const oo=(e,t)=>`${e}--${t}`;let io=!0;void 0===window.ShadyCSS?io=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),io=!1);const so=["html","svg"],ao=new Set,lo=(e,t,n)=>{ao.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{so.forEach(t=>{const n=Qr.get(oo(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),to(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,eo,null,!1);let s=ro(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=no(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=ro(o,s);return}s=ro(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),to(t,e)}};function co(e,t){return function(e){if(Array.isArray(e))return e}
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
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const po=e=>null!==e,ho=e=>e?"":null,uo=(e,t)=>t!==e&&(t==t||e==e),mo={attribute:!0,type:String,reflect:!1,hasChanged:uo},fo=new Promise(e=>e(!0)),go=1,vo=4,yo=8;class _o extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=fo,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=co(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:mo;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:uo)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?po:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?ho:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=co(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=co(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&go?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:mo;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|yo,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~yo)}}_attributeToProperty(e,t){if(!(this._updateState&yo)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||mo;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|vo;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&vo}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&go||(this._updateState=this._updateState|go,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~vo}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=co(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}_o._attributeToPropertyMap=new Map,_o._finalized=!0,_o._classProperties=new Map,_o.properties={};
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
bo((e,t)=>e.querySelector(t)),bo((e,t)=>e.querySelectorAll(t));function bo(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
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
class xo extends _o{update(e){super.update(e);const t=this.render();t instanceof zr&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}xo.render=((e,t,n)=>{const r=n.scopeName,o=Yr.has(t),i=t instanceof ShadowRoot&&io&&e instanceof zr,s=i&&!ao.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=Yr.get(t);void 0===r&&(Tr(t,t.firstChild),Yr.set(t,r=new Fr(Object.assign({templateFactory:Zr},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=oo(t.type,e);let r=Qr.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},Qr.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Ar);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();io&&window.ShadyCSS.prepareTemplateDom(n,e),o=new jr(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=Yr.get(a);Yr.delete(a),e.value instanceof Lr&&lo(a,e.value.template,r),Tr(t,t.firstChild),t.appendChild(a),Yr.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});var wo=n(13),So=n.n(wo);let No=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends xo{static get properties(){return{fluid:{type:Boolean},fixed:{type:Boolean},brand:{type:String},menu:{type:Array},drawerOpen:{type:Boolean}}}constructor(){super(),this.drawerOpen=!1}connectedCallback(){window.addEventListener("click",this.close.bind(this),!1)}disconnectedCallback(){window.removeEventListener("click",this.close.bind(this),!1)}close(){this.drop&&(this.drop.classList.remove("open"),delete this.drop),this.drawerOpen&&(this.drawerOpen=!1)}openDropdown(e){"drop-item"!==e.target.parentNode.classList[0]&&(this.drop&&this.drop.classList.toggle("open"),e.target.parentNode.querySelector(".drop-menu")===this.drop&&this.drop||(e.stopPropagation(),this.drop=e.target.parentNode.querySelector(".drop-menu"),this.drop.classList.toggle("open")))}toggleDrawer(e){e.stopPropagation(),this.drawerOpen=!this.drawerOpen}renderMenu(){if(this.menu)return this.menu.map((e,t)=>{let n=e.label,r=e.to,o=e.dropdown;if(0!==t)return o?Jr`
              <li @click="${e=>this.openDropdown(e)}">
                <a href="#">${n}<span class="caret"></span></a>
                <ul class="drop-menu">
                  ${o.map(e=>{let t=e.label;return Jr`
                      <li class="drop-item"><a href=${e.to}>${t}</a></li>
                    `})}
                </ul>
              </li>
            `:Jr`
              <li><a href=${r}>${n}</a></li>
            `})}render(){return Jr`
      <style>
        ${So.a}
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
    `}});customElements.define("eve-navigation",No);const Po=[{property:"brand",description:"Main Brand name displayed and linked for the feature application"},{property:"menu",description:"Main navigation menu array. Each item is an object which contains a label and to(url) keys. First index is default brand link."},{property:"fluid",description:"Set container width to 100% of all devices. Otherwise, container width is preset to responsive breakpoints >=1200px, >=992px, >=768px, >=576px, <576px and centered on page"},{property:"fixed",description:"Set navigation position to fixed at top."}],Eo=[{label:"Home",to:"/"},{label:"Blog",to:"/blog"},{label:"Portfolio",to:"/portfolio",dropdown:[{label:"dropdown item 1",to:"#demos1"},{label:"dropdown item 2",to:"#demos2"}]},{label:"Photos",to:"/photos"},{label:"Contact",to:"/contact"}];let To=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
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
        install="$ npm i @evergreen/eve-navigation"
        .props=${Po}
        >
        <eve-navigation brand="My Site" .menu=${Eo} fluid></eve-navigation>
      </eve-docs>
    `}});customElements.define("navigation-docs",To);var Co=n(14),Ao=n.n(Co);const Oo=[{property:"type",description:"Set the syntax type e.g. html, css, js, xml, bash"},{property:"theme",description:"Set the imported CSS file."},{property:"code",description:"Set the code string to highlight."},{property:"hljs",description:"Optionally you may wish to use a language not already registered due to optimization. You can import and register the languages in your own hljs object and add it as an attribute."}];let ko=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
      <eve-docs
        title="Syntax Highlighter"
        description="A highlight.js syntax highlighting component"
        usage=${"\nimport '@evergreen-wc/eve-highlight';\n// highlightjs themes https://github.com/highlightjs/highlight.js/tree/master/src/styles\nimport github from '../Highlight/themes/github.css';\n\n// Javascript example\n// Escape $ with \\\nconst code = `\nclass MyComponent extends LitElement {\n  constructor() {\n    this.name = 'helloworld'\n  }\n\n  renderThing() {\n    if(this.name === 'helloworld'){\n      console.log(this.name)\n    }\n  }\n}\ncustomElements.define('my-component', MyComponent);\n`;\n\nclass SomeComponent extends LitElement {\n  render() {\n    return html`\n      <eve-highlight type=\"js\" theme=\"${github}\" code=\"${code}\"></eve-highlight>\n    `;\n  }\n}\ncustomElements.define('some-component', SomeComponent);\n"}
        install="$ npm i @evergreen/eve-highlight"
        .props=${Oo}
        >
        <eve-highlight type="javascript" theme="${Ao.a}" code="${"\n// javascript example\nclass MyComponent extends LitElement {\n  constructor() {\n    this.name = 'helloworld'\n  }\n\n  renderThing() {\n    if(this.name === 'helloworld'){\n      console.log(this.name)\n    }\n  }\n}\ncustomElements.define('my-component', MyComponent);\n"}"></eve-highlight>
      </eve-docs>
    `}});customElements.define("highlighter-docs",ko);
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
const Mo=new WeakMap,jo=e=>"function"==typeof e&&Mo.has(e),Vo=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Ro=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t;for(;r!==n;){const t=r.nextSibling;e.removeChild(r),r=t}},$o={},Lo=`{{lit-${String(Math.random()).slice(2)}}}`,zo=`\x3c!--${Lo}--\x3e`,Io=new RegExp(`${Lo}|${zo}`),Uo="$lit$";class Bo{constructor(e,t){this.parts=[],this.element=t;let n=-1,r=0;const o=[],i=t=>{const s=t.content,a=document.createTreeWalker(s,133,null,!1);let l,c;for(;a.nextNode();){n++,l=c;const t=c=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const o=t.attributes;let i=0;for(let e=0;e<o.length;e++)o[e].value.indexOf(Lo)>=0&&i++;for(;i-- >0;){const o=e.strings[r],i=Ho.exec(o)[2],s=i.toLowerCase()+Uo,a=t.getAttribute(s).split(Io);this.parts.push({type:"attribute",index:n,name:i,strings:a}),t.removeAttribute(s),r+=a.length-1}}"TEMPLATE"===t.tagName&&i(t)}else if(3===t.nodeType){const e=t.nodeValue;if(e.indexOf(Lo)<0)continue;const i=t.parentNode,s=e.split(Io),a=s.length-1;r+=a;for(let e=0;e<a;e++)i.insertBefore(""===s[e]?Do():document.createTextNode(s[e]),t),this.parts.push({type:"node",index:n++});i.insertBefore(""===s[a]?Do():document.createTextNode(s[a]),t),o.push(t)}else if(8===t.nodeType)if(t.nodeValue===Lo){const e=t.parentNode,i=t.previousSibling;null===i||i!==l||i.nodeType!==Node.TEXT_NODE?e.insertBefore(Do(),t):n--,this.parts.push({type:"node",index:n++}),o.push(t),null===t.nextSibling?e.insertBefore(Do(),t):n--,c=l,r++}else{let e=-1;for(;-1!==(e=t.nodeValue.indexOf(Lo,e+1));)this.parts.push({type:"node",index:-1})}}};i(t);for(const e of o)e.parentNode.removeChild(e)}}const Fo=e=>-1!==e.index,Do=()=>document.createComment(""),Ho=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class Wo{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=Vo?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,r=0;const o=e=>{const i=document.createTreeWalker(e,133,null,!1);let s=i.nextNode();for(;n<t.length&&null!==s;){const e=t[n];if(Fo(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(s),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(s,e.name,e.strings,this.options));n++}else r++,"TEMPLATE"===s.nodeName&&o(s.content),s=i.nextNode();else this._parts.push(void 0),n++}};return o(e),Vo&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class qo{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){let e=!1;t+=this.strings[n].replace(Ho,(t,n,r,o)=>(e=!0,n+r+Uo+o+Lo)),e||(t+=zo)}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const Xo=e=>null===e||!("object"==typeof e||"function"==typeof e);class Go{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new Ko(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let r=0;r<t;r++){n+=e[r];const t=this.parts[r];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ko{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===$o||Xo(e)&&e===this.value||(this.value=e,jo(e)||(this.committer.dirty=!0))}commit(){for(;jo(this.value);){const e=this.value;this.value=$o,e(this)}this.value!==$o&&this.committer.commit()}}class Zo{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Do()),this.endNode=e.appendChild(Do())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Do()),e._insert(this.endNode=Do())}insertAfterPart(e){e._insert(this.startNode=Do()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;jo(this._pendingValue);){const e=this._pendingValue;this._pendingValue=$o,e(this)}const e=this._pendingValue;e!==$o&&(Xo(e)?e!==this.value&&this._commitText(e):e instanceof qo?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&t.nodeType===Node.TEXT_NODE?t.textContent=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value&&this.value.template===t)this.value.update(e.values);else{const n=new Wo(t,e.processor,this.options),r=n._clone();n.update(e.values),this._commitNode(r),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)void 0===(n=t[r])&&(n=new Zo(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Ro(this.startNode.parentNode,e.nextSibling,this.endNode)}}class Qo{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;jo(this._pendingValue);){const e=this._pendingValue;this._pendingValue=$o,e(this)}if(this._pendingValue===$o)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=$o}}class Yo extends Go{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Jo(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Jo extends Ko{}let ei=!1;try{const e={get capture(){return ei=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class ti{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;jo(this._pendingValue);){const e=this._pendingValue;this._pendingValue=$o,e(this)}if(this._pendingValue===$o)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),r&&(this._options=ni(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=$o}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const ni=e=>e&&(ei?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const ri=new class{handleAttributeExpressions(e,t,n,r){const o=t[0];return"."===o?new Yo(e,t.slice(1),n).parts:"@"===o?[new ti(e,t.slice(1),r.eventContext)]:"?"===o?[new Qo(e,t.slice(1),n)]:new Go(e,t,n).parts}handleTextExpression(e){return new Zo(e)}};
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
 */function oi(e){let t=ii.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},ii.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(Lo);return void 0===(n=t.keyString.get(r))&&(n=new Bo(e,e.getTemplateElement()),t.keyString.set(r,n)),t.stringsArray.set(e.strings,n),n}const ii=new Map,si=new WeakMap,ai=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new qo(e,n,"html",ri)},li=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;
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
 */function ci(e,t){const n=e.element.content,r=e.parts,o=document.createTreeWalker(n,li,null,!1);let i=pi(r),s=r[i],a=-1,l=0;const c=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,s=r[i=pi(r,i)]}c.forEach(e=>e.parentNode.removeChild(e))}const di=e=>{let t=e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(e,li,null,!1);for(;n.nextNode();)t++;return t},pi=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(Fo(n))return t}return-1};
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
const hi=(e,t)=>`${e}--${t}`;let ui=!0;void 0===window.ShadyCSS?ui=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),ui=!1);const mi=["html","svg"],fi=new Set,gi=(e,t,n)=>{fi.add(n);const r=e.querySelectorAll("style");if(0===r.length)return;const o=document.createElement("style");for(let e=0;e<r.length;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}if((e=>{mi.forEach(t=>{const n=ii.get(hi(t,e));void 0!==n&&n.keyString.forEach(e=>{const t=e.element.content,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),ci(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const r=e.element.content,o=e.parts;if(null===n||void 0===n)return void r.appendChild(t);const i=document.createTreeWalker(r,li,null,!1);let s=pi(o),a=0,l=-1;for(;i.nextNode();)for(l++,i.currentNode===n&&(a=di(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===l;){if(a>0){for(;-1!==s;)o[s].index+=a,s=pi(o,s);return}s=pi(o,s)}}(t,o,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(o,t.element.content.firstChild);const e=new Set;e.add(o),ci(t,e)}};function vi(e,t){return function(e){if(Array.isArray(e))return e}
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
 */(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(r=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}const yi=e=>null!==e,_i=e=>e?"":null,bi=(e,t)=>t!==e&&(t==t||e==e),xi={attribute:!0,type:String,reflect:!1,hasChanged:bi},wi=new Promise(e=>e(!0)),Si=1,Ni=4,Pi=8;class Ei extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=wi,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const e=[];for(const n of this._classProperties){var t=vi(n,2);const r=t[0],o=t[1],i=this._attributeNameForProperty(r,o);void 0!==i&&(this._attributeToPropertyMap.set(i,r),e.push(i))}return e}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xi;if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}if(this._classProperties.set(e,t),this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(r){const o=this[e];this[n]=r,this._requestPropertyUpdate(e,o,t)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const e=Object.getPrototypeOf(this);"function"==typeof e._finalize&&e._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const t=this.properties,n=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const e of n)this.createProperty(e,t[e])}static _attributeNameForProperty(e,t){const n=void 0!==t&&t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:bi)(e,t)}static _propertyValueFromAttribute(e,t){const n=t&&t.type;if(void 0===n)return e;const r=n===Boolean?yi:"function"==typeof n?n:n.fromAttribute;return r?r(e):e}static _propertyValueToAttribute(e,t){if(void 0===t||void 0===t.reflect)return;return(t.type===Boolean?_i:t.type&&t.type.toAttribute||String)(e)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const e of this.constructor._classProperties){const t=vi(e,1)[0];if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}}_applyInstanceProperties(){for(const t of this._instanceProperties){var e=vi(t,2);const n=e[0],r=e[1];this[n]=r}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&Si?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:xi;const r=this.constructor,o=r._propertyValueToAttribute(t,n);if(void 0!==o){const t=r._attributeNameForProperty(e,n);void 0!==t&&(this._updateState=this._updateState|Pi,null===o?this.removeAttribute(t):this.setAttribute(t,o),this._updateState=this._updateState&~Pi)}}_attributeToProperty(e,t){if(!(this._updateState&Pi)){const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n._classProperties.get(r);this[r]=n._propertyValueFromAttribute(t,e)}}}requestUpdate(e,t){if(void 0!==e){const n=this.constructor._classProperties.get(e)||xi;return this._requestPropertyUpdate(e,t,n)}return this._invalidate()}_requestPropertyUpdate(e,t,n){return this.constructor._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let e;this._updateState=this._updateState|Ni;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._validate(),e(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&Ni}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&Si||(this._updateState=this._updateState|Si,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Ni}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const e of this._reflectingProperties){var t=vi(e,2);const n=t[0],r=t[1];this._propertyToAttribute(n,this[n],r)}this._reflectingProperties=void 0}}updated(e){}firstUpdated(e){}}Ei._attributeToPropertyMap=new Map,Ei._finalized=!0,Ei._classProperties=new Map,Ei.properties={};
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
Ti((e,t)=>e.querySelector(t)),Ti((e,t)=>e.querySelectorAll(t));function Ti(e){return t=>(n,r)=>{Object.defineProperty(n,r,{get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0})}}
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
class Ci extends Ei{update(e){super.update(e);const t=this.render();t instanceof qo&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}Ci.render=((e,t,n)=>{const r=n.scopeName,o=si.has(t),i=t instanceof ShadowRoot&&ui&&e instanceof qo,s=i&&!fi.has(r),a=s?document.createDocumentFragment():t;if(((e,t,n)=>{let r=si.get(t);void 0===r&&(Ro(t,t.firstChild),si.set(t,r=new Zo(Object.assign({templateFactory:oi},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,a,Object.assign({templateFactory:(e=>t=>{const n=hi(t.type,e);let r=ii.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},ii.set(n,r));let o=r.stringsArray.get(t.strings);if(void 0!==o)return o;const i=t.strings.join(Lo);if(void 0===(o=r.keyString.get(i))){const n=t.getTemplateElement();ui&&window.ShadyCSS.prepareTemplateDom(n,e),o=new Bo(t,n),r.keyString.set(i,o)}return r.stringsArray.set(t.strings,o),o})(r)},n)),s){const e=si.get(a);si.delete(a),e.value instanceof Wo&&gi(a,e.value.template,r),Ro(t,t.firstChild),t.appendChild(a),si.set(t,e)}!o&&i&&window.ShadyCSS.styleElement(t.host)});let Ai=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends Ci{render(){return ai`
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
    `}});customElements.define("eve-row",Ai);let Oi=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends Ci{static get properties(){return{width:{type:String}}}render(){return ai`
    <style>
      :host {
        flex: 0 0 calc((${this.width} / 12)* 100%);
        max-width: calc((${this.width} / 12) * 100%);
        background-color: lightgray;
        border: 1px solid gray;
      }
    </style>
    <slot></slot>
    `}});customElements.define("eve-col",Oi);var ki=n(3),Mi=n.n(ki);let ji=function(e){var t=e.getPrototypeOf||function(e){return e.__proto__},n=e.setPrototypeOf||function(e,t){return e.__proto__=t,e},r="object"==typeof Reflect?Reflect.construct:function(e,t,r){var o,i=[null];return i.push.apply(i,t),o=e.bind.apply(e,i),n(new o,r.prototype)};return function(e){var o=t(e);return n(e,n(function(){return r(o,arguments,t(this).constructor)},o))}}(Object)(class extends ee{render(){return M`
    <style>
      eve-row{
        border: 4px solid green;
      }
    </style>
    <eve-docs
      title="Row"
      description="A centered flexbox row wrap layout component"
      install="$ npm i @evergreen/layout"
      usage=${'\nimport \'@evergreen-wc/eve-card\';\nimport \'@evergreen-wc/eve-row\';\n\nclass MyComponent extends LitElement {\n  render() {\n    return html`\n    <eve-row>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n      <eve-card img="${logo}" size="xs">\n        <h1>Example Card</h1>\n        <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>\n      </eve-card>\n    </eve-row>\n    `;\n  }\n}\ncustomElements.define(\'my-component\', MyComponent);\n'}
      >
        <eve-row>
          <eve-card img="${Mi.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
          <eve-card img="${Mi.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
          <eve-card img="${Mi.a}" size="xs">
            <h1>Example Card</h1>
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
          </eve-card>
          <eve-card img="${Mi.a}" size="xs">
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
        install="$ npm i @evergreen/eve-button"
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
        install="$ npm i @evergreen/eve-card"
        .props=${$a}
        >
        <eve-card img='${Mi.a}' size="md">
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
        ${ht.a}
      </style>

      <div class="sidebar-wrapper" @click="${e=>e.stopPropagation()}">
        <div class="sidebar">
          <h4>Components</h4>
          <ul>
            ${cl.map(e=>{let t=e.label,n=e.id;return M`
                <li class="${this.id===n?"active":""}">
                  <a @click="${()=>this.goTo(`/docs/${n}`)}" aria-label="menu-item">${t}</a>
                </li>
              `})}
          </ul>
        </div>
      </div>

      ${this.renderPage()}
    `}});customElements.define("docs-page",dl),(e=>{e.addReducers({router:el}),Ya(e)})(al);const pl=[{label:"Home",to:"/"},{label:"About",to:"/about",dropdown:[{label:"Dropdown Item 1",to:"/demos1"},{label:"Dropdown Item 3",to:"/demos2"}]},{label:"Docs",to:"/docs",dropdown:[{label:"dropdown item 1",to:"/docs1"},{label:"dropdown item 2",to:"/docs2"}]},{label:"Examples",to:"/examples"}];customElements.define("eve-app",class extends(Ua(al)(ee)){render(){return M`
    <style>
      ${ne.a}
    </style>
      <eve-navigation brand="Project Evergreen" fixed fluid .menu="${pl}"></eve-navigation>
      <lit-route path="/" component="home-page" active=""></lit-route>
      <lit-route path="/docs" component="docs-page"></lit-route>
      <lit-route path="/docs/:id" component="docs-page"></lit-route>
      <!-- <lit-route path="/examples" component="examples-page"></lit-route> -->
    `}})}]);