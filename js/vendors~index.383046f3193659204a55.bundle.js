(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,n){"use strict";var s=n(5),i=n(6),r=n(1);
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
const o=133;function a(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,o,null,!1);let r=c(s),a=s[r],l=-1,h=0;const d=[];let u=null;for(;i.nextNode();){l++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(d.push(e),null===u&&(u=e)),null!==u&&h++;void 0!==a&&a.index===l;)a.index=null!==u?-1:a.index-h,a=s[r=c(s,r)]}d.forEach(e=>e.parentNode.removeChild(e))}const l=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,o,null,!1);for(;n.nextNode();)t++;return t},c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(Object(r.d)(t))return n}return-1};var h=n(10),d=n(8),u=n(14),p=n(7);
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
const m=(e,t)=>"".concat(e,"--").concat(t);let f=!0;void 0===window.ShadyCSS?f=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),f=!1);const g=e=>t=>{const n=m(t.type,e);let s=d.a.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},d.a.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r.f);if(void 0===(i=s.keyString.get(o))){const n=t.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(n,e),i=new r.a(t,n),s.keyString.set(o,i)}return s.stringsArray.set(t.strings,i),i},_=["html","svg"],y=new Set,v=(e,t,n)=>{y.add(n);const s=e.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const r=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{_.forEach(t=>{const n=d.a.get(m(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),a(e,n)})})})(n);const h=t.element.content;!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,o,null,!1);let a=c(i),h=0,d=-1;for(;r.nextNode();)for(d++,r.currentNode===n&&(h=l(t),n.parentNode.insertBefore(t,n));-1!==a&&i[a].index===d;){if(h>0){for(;-1!==a;)i[a].index+=h,a=c(i,a);return}a=c(i,a)}}(t,r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n);const u=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==u)e.insertBefore(u.cloneNode(!0),e.firstChild);else{h.insertBefore(r,h.firstChild);const e=new Set;e.add(r),a(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const S={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},b=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:b},x=Promise.resolve(!0),P=1,N=4,C=8,E=16,A=32;class T extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=x,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:b)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||S,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||S.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|A,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|C,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~C}}_attributeToProperty(e,t){if(this._updateState&C)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||w;this._updateState=this._updateState|E,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~E}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const s=this.constructor,i=s._classProperties.get(e)||w;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&E||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|N;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{e=n,t=s});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&A}get _hasRequestedUpdate(){return this._updateState&N}get hasUpdated(){return this._updateState&P}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&P||(this._updateState=this._updateState|P,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~N}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}T.finalized=!0;
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
const O=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:s}=t;return{kind:n,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),V=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}}:Object.assign({},t,{finisher(n){n.createProperty(t.key,e)}}),R=(e,t,n)=>{t.constructor.createProperty(n,e)};function k(e){return(t,n)=>void 0!==n?R(e,t,n):V(e,t)}const M="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return j}),n.d(t,"b",function(){return O}),n.d(t,"d",function(){return k}),n.d(t,"c",function(){return s.d}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const U=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class j extends T{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){U(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?M?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof s.b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}j.finalized=!0,j.render=(e,t,n)=>{const s=n.scopeName,r=h.a.has(t),o=f&&11===t.nodeType&&!!t.host&&e instanceof p.b,a=o&&!y.has(s),l=a?document.createDocumentFragment():t;if(Object(h.b)(e,l,Object.assign({templateFactory:g(s)},n)),a){const e=h.a.get(l);h.a.delete(l),e.value instanceof u.a&&v(l,e.value.template,s),Object(i.b)(t,t.firstChild),t.appendChild(l),h.a.set(t,e)}!r&&o&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"f",function(){return s}),n.d(t,"g",function(){return i}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return h}),n.d(t,"e",function(){return d});
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
const s="{{lit-".concat(String(Math.random()).slice(2),"}}"),i="\x3c!--".concat(s,"--\x3e"),r=new RegExp("".concat(s,"|").concat(i)),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,u=-1,p=0;const{strings:m,values:{length:f}}=e;for(;p<f;){const e=a.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)l(t[e].name,o)&&s++;for(;s-- >0;){const t=m[p],n=d.exec(t)[2],s=n.toLowerCase()+o,i=e.getAttribute(s);e.removeAttribute(s);const a=i.split(r);this.parts.push({type:"attribute",index:u,name:n,strings:a}),p+=a.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const s=e.parentNode,i=t.split(r),a=i.length-1;for(let t=0;t<a;t++){let n,r=i[t];if(""===r)n=h();else{const e=d.exec(r);null!==e&&l(e[2],o)&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-o.length)+e[3]),n=document.createTextNode(r)}s.insertBefore(n,e),this.parts.push({type:"node",index:++u})}""===i[a]?(s.insertBefore(h(),e),n.push(e)):e.data=i[a],p+=a}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&u!==c||(u++,t.insertBefore(h(),e)),c=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(n.push(e),u--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=i.pop()}for(const e of n)e.parentNode.removeChild(e)}}const l=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>-1!==e.index,h=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,n){"use strict";n.d(t,"f",function(){return c}),n.d(t,"a",function(){return d}),n.d(t,"d",function(){return p}),n.d(t,"b",function(){return m}),n.d(t,"e",function(){return f}),n.d(t,"c",function(){return y});var s=n(9),i=n(6),r=n(3),o=n(14),a=n(7),l=n(1);
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
const c=e=>null===e||!("object"==typeof e||"function"==typeof e),h=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class d{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new u(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(c(e)||!h(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class u{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r.a||c(e)&&e===this.value||(this.value=e,Object(s.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(s.b)(this.value);){const e=this.value;this.value=r.a,e(this)}this.value!==r.a&&this.committer.commit()}}class p{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Object(l.c)()),e.__insert(this.endNode=Object(l.c)())}insertAfterPart(e){e.__insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;Object(s.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r.a,e(this)}const e=this.__pendingValue;e!==r.a&&(c(e)?e!==this.value&&this.__commitText(e):e instanceof a.b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):h(e)?this.__commitIterable(e):e===r.b?(this.value=r.b,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this.__commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const n=new o.a(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new p(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Object(i.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class m{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;Object(s.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r.a,e(this)}if(this.__pendingValue===r.a)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r.a}}class f extends d{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new g(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class g extends u{}let _=!1;try{const e={get capture(){return _=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class y{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;Object(s.b)(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r.a,e(this)}if(this.__pendingValue===r.a)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=v(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const v=e=>e&&(_?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return i});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
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
const s={},i={}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",s=e[3];if(!s)return n;if(t&&"function"==typeof btoa){var i=(o=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),r=s.sources.map(function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"});return[n].concat(r).concat([i]).join("\n")}var o;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var s={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(s[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&s[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(e,t,n){"use strict";var s=n(2);
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
 */const i=new class{handleAttributeExpressions(e,t,n,i){const r=t[0];return"."===r?new s.e(e,t.slice(1),n).parts:"@"===r?[new s.c(e,t.slice(1),i.eventContext)]:"?"===r?[new s.b(e,t.slice(1),n)]:new s.a(e,t,n).parts}handleTextExpression(e){return new s.d(e)}};var r=n(7),o=n(9);n(6),n(3),n(10),n(8),n(14),n(1);n.d(t,"d",function(){return a}),n.d(t,"c",function(){return o.a}),n.d(t,"a",function(){return s.d}),n.d(t,"b",function(){return r.b}),
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const a=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new r.b(e,n,"html",i)}},function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return r});
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
const s=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,s),t=n}},r=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}}},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var s=n(6),i=n(1);
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
class r{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const o=i.e.exec(e);t+=null===o?e+(n?i.f:i.g):e.substr(0,o.index)+o[1]+o[2]+i.b+o[3]+i.f}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends r{getHTML(){return"<svg>".concat(super.getHTML(),"</svg>")}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),Object(s.c)(t,n.firstChild),e}}},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});var s=n(1);
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
 */function i(e){let t=r.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},r.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const i=e.strings.join(s.f);return void 0===(n=t.keyString.get(i))&&(n=new s.a(e,e.getTemplateElement()),t.keyString.set(i,n)),t.stringsArray.set(e.strings,n),n}const r=new Map},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});
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
const s=new WeakMap,i=e=>(function(){const t=e(...arguments);return s.set(t,!0),t}),r=e=>"function"==typeof e&&s.has(e)},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var s=n(6),i=n(2),r=n(8);
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
const o=new WeakMap,a=(e,t,n)=>{let a=o.get(t);void 0===a&&(Object(s.b)(t,t.firstChild),o.set(t,a=new i.d(Object.assign({templateFactory:r.b},n))),a.appendInto(t)),a.setValue(e),a.commit()}},,,function(e,t,n){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var t=[],n=Object.keys,s={},i={},r=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,a=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function u(e,t){var n=e&&e.exec(t);return n&&0===n.index}function p(e){return r.test(e)}function m(e){var t,n={},s=Array.prototype.slice.call(arguments,1);for(t in e)n[t]=e[t];return s.forEach(function(e){for(t in e)n[t]=e[t]}),n}function f(e){var t=[];return function e(n,s){for(var i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?s+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:s,node:i}),s=e(i,s),d(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:s,node:i}));return s}(e,0),t}function g(e){function t(e){return e&&e.source||e}function s(n,s){return new RegExp(t(n),"m"+(e.case_insensitive?"i":"")+(s?"g":""))}!function i(r,o){if(r.compiled)return;r.compiled=!0;r.keywords=r.keywords||r.beginKeywords;if(r.keywords){var a={},l=function(t,n){e.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(e){var n=e.split("|");a[n[0]]=[t,n[1]?Number(n[1]):1]})};"string"==typeof r.keywords?l("keyword",r.keywords):n(r.keywords).forEach(function(e){l(e,r.keywords[e])}),r.keywords=a}r.lexemesRe=s(r.lexemes||/\w+/,!0);o&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=s(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=s(r.end)),r.terminator_end=t(r.end)||"",r.endsWithParent&&o.terminator_end&&(r.terminator_end+=(r.end?"|":"")+o.terminator_end));r.illegal&&(r.illegalRe=s(r.illegal));null==r.relevance&&(r.relevance=1);r.contains||(r.contains=[]);r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return m(e,{variants:null},t)}));return e.cached_variants||e.endsWithParent&&[m(e)]||[e]}("self"===e?r:e)}));r.contains.forEach(function(e){i(e,r)});r.starts&&i(r.starts,o);var c=r.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(t).filter(Boolean);r.terminators=c.length?s(c.join("|"),!0):{exec:function(){return null}}}(e)}function _(e,t,n,i){function r(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function o(e,t){var n=f.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(n)&&e.keywords[n]}function a(e,t,n,s){var i=s?"":c.classPrefix,r='<span class="'+i,o=n?"":l;return(r+=e+'">')+t+o}function d(){x+=null!=S.subLanguage?function(){var e="string"==typeof S.subLanguage;if(e&&!s[S.subLanguage])return h(P);var t=e?_(S.subLanguage,P,!0,b[S.subLanguage]):y(P,S.subLanguage.length?S.subLanguage:void 0);S.relevance>0&&(N+=t.relevance);e&&(b[S.subLanguage]=t.top);return a(t.language,t.value,!1,!0)}():function(){var e,t,n,s;if(!S.keywords)return h(P);s="",t=0,S.lexemesRe.lastIndex=0,n=S.lexemesRe.exec(P);for(;n;)s+=h(P.substring(t,n.index)),(e=o(S,n))?(N+=e[1],s+=a(e[0],h(n[0]))):s+=h(n[0]),t=S.lexemesRe.lastIndex,n=S.lexemesRe.exec(P);return s+h(P.substr(t))}(),P=""}function p(e){x+=e.className?a(e.className,"",!0):"",S=Object.create(e,{parent:{value:S}})}function m(e,t){if(P+=e,null==t)return d(),0;var s=function(e,t){var n,s;for(n=0,s=t.contains.length;n<s;n++)if(u(t.contains[n].beginRe,e))return t.contains[n].endSameAsBegin&&(t.contains[n].endRe=r(t.contains[n].beginRe.exec(e)[0])),t.contains[n]}(t,S);if(s)return s.skip?P+=t:(s.excludeBegin&&(P+=t),d(),s.returnBegin||s.excludeBegin||(P=t)),p(s),s.returnBegin?0:t.length;var i=function e(t,n){if(u(t.endRe,n)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,n)}(S,t);if(i){var o=S;o.skip?P+=t:(o.returnEnd||o.excludeEnd||(P+=t),d(),o.excludeEnd&&(P=t));do{S.className&&(x+=l),S.skip||S.subLanguage||(N+=S.relevance),S=S.parent}while(S!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),p(i.starts)),o.returnEnd?0:t.length}if(function(e,t){return!n&&u(t.illegalRe,e)}(t,S))throw new Error('Illegal lexeme "'+t+'" for mode "'+(S.className||"<unnamed>")+'"');return P+=t,t.length||1}var f=w(e);if(!f)throw new Error('Unknown language: "'+e+'"');g(f);var v,S=i||f,b={},x="";for(v=S;v!==f;v=v.parent)v.className&&(x=a(v.className,"",!0)+x);var P="",N=0;try{for(var C,E,A=0;S.terminators.lastIndex=A,C=S.terminators.exec(t);)E=m(t.substring(A,C.index),C[0]),A=C.index+E;for(m(t.substr(A)),v=S;v.parent;v=v.parent)v.className&&(x+=l);return{relevance:N,value:x,language:e,top:S}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:h(t)};throw e}}function y(e,t){t=t||c.languages||n(s);var i={relevance:0,value:h(e)},r=i;return t.filter(w).filter(x).forEach(function(t){var n=_(t,e,!1);n.language=t,n.relevance>r.relevance&&(r=n),n.relevance>i.relevance&&(r=i,i=n)}),r.language&&(i.second_best=r),i}function v(e){return c.tabReplace||c.useBR?e.replace(a,function(e,t){return c.useBR&&"\n"===e?"<br>":c.tabReplace?t.replace(/\t/g,c.tabReplace):""}):e}function S(e){var n,s,r,a,l,u=function(e){var t,n,s,i,r=e.className+" ";if(r+=e.parentNode?e.parentNode.className:"",n=o.exec(r))return w(n[1])?n[1]:"no-highlight";for(r=r.split(/\s+/),t=0,s=r.length;t<s;t++)if(p(i=r[t])||w(i))return i}(e);p(u)||(c.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,l=n.textContent,r=u?_(u,l,!0):y(l),(s=f(n)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,n,s){var i=0,r="",o=[];function a(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){r+="<"+d(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+h(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){r+="</"+d(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){var p=a();if(r+=h(s.substring(i,p[0].offset)),i=p[0].offset,p===e){o.reverse().forEach(c);do{u(p.splice(0,1)[0]),p=a()}while(p===e&&p.length&&p[0].offset===i);o.reverse().forEach(l)}else"start"===p[0].event?o.push(p[0].node):o.pop(),u(p.splice(0,1)[0])}return r+h(s.substr(i))}(s,f(a),l)),r.value=v(r.value),e.innerHTML=r.value,e.className=function(e,t,n){var s=t?i[t]:n,r=[e.trim()];e.match(/\bhljs\b/)||r.push("hljs");-1===e.indexOf(s)&&r.push(s);return r.join(" ").trim()}(e.className,u,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function b(){if(!b.called){b.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,S)}}function w(e){return e=(e||"").toLowerCase(),s[e]||s[i[e]]}function x(e){var t=w(e);return t&&!t.disableAutodetect}e.highlight=_,e.highlightAuto=y,e.fixMarkup=v,e.highlightBlock=S,e.configure=function(e){c=m(c,e)},e.initHighlighting=b,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)},e.registerLanguage=function(t,n){var r=s[t]=n(e);r.aliases&&r.aliases.forEach(function(e){i[e]=t})},e.listLanguages=function(){return n(s)},e.getLanguage=w,e.autoDetection=x,e.inherit=m,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,n,s){var i=e.inherit({className:"comment",begin:t,end:n,contains:[]},s||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(t)}()},function(e,t,n){"use strict";n.d(t,"a",function(){return r});var s=n(6),i=n(1);
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
class r{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=s.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let o,a=0,l=0,c=r.nextNode();for(;a<n.length;)if(o=n[a],Object(i.d)(o)){for(;l<o.index;)l++,"TEMPLATE"===c.nodeName&&(t.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=t.pop(),c=r.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));a++}else this.__parts.push(void 0),a++;return s.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,n){"use strict";n.d(t,"a",function(){return s});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}})},function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,R=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new y(e,n,"html",T)},M=133;function U(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>"".concat(e,"--").concat(t);let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const n=z(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,F=(e,t,n)=>{H.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=V.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W},$=Promise.resolve(!0),K=1,G=4,Z=8,X=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return re}),n.d(t,"b",function(){return k}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,n)=>{const s=n.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof y,a=r&&!H.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=R.get(t);void 0===s&&(o(t,t.firstChild),R.set(t,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:B(s)},n)),a){const e=R.get(l);R.delete(l),e.value instanceof _&&F(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,R=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new y(e,n,"html",T)},M=133;function U(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>"".concat(e,"--").concat(t);let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const n=z(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,F=(e,t,n)=>{H.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=V.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W},$=Promise.resolve(!0),K=1,G=4,Z=8,X=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return re}),n.d(t,"b",function(){return k}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,n)=>{const s=n.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof y,a=r&&!H.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=R.get(t);void 0===s&&(o(t,t.firstChild),R.set(t,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:B(s)},n)),a){const e=R.get(l);R.delete(l),e.value instanceof _&&F(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";var s=n(0),i=n(22),r=n(15);n(21);const o=(e,t)=>{const{pattern:n,keys:s}=function(e,t){var n,s,i,r,o=[],a="",l=e.split("/");for(l[0]||l.shift();i=l.shift();)"*"===(n=i[0])?(o.push("wild"),a+="/(.*)"):":"===n?(s=i.indexOf("?",1),r=i.indexOf(".",1),o.push(i.substring(1,~s?s:~r?r:i.length)),a+=~s&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~s?"?":"")+"\\"+i.substring(r))):a+="/"+i;return{keys:o,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}(e),i=t.replace(/\?.*/,""),r=n.exec(i),o=n.test(i);return{active:o,params:o?s.reduce((e,t,n)=>Object.assign({},e,{[t]:r&&r[n+1]||""}),{}):{}}},a=e=>((e=>{window.history.pushState({},"",e)})(e),{type:"NAVIGATE",path:e}),l=(e,t)=>{let{router:{routes:n}}=e;return n&&t&&n[t]||{}},c=(e,t)=>t?!!l(e,t).active:(e=>{let{router:{routes:t}}=e;return Object.keys(t).reduce((e,n)=>e&&!t[n].active,!0)})(e);function h(){const e=p(["<slot></slot>"]);return h=function(){return e},e}function d(){const e=p([""]);return d=function(){return e},e}function u(){const e=p(["",""]);return u=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};let f,g=!1;var _=e=>{let t=class extends(Object(r.a)(e)(s.a)){constructor(){super(...arguments),this.active=!1,this.params={}}firstUpdated(){var t;g||(t=t=>{const n=window.decodeURIComponent(t.pathname);return e.dispatch((e=>({type:"SET_ACTIVE_ROUTE",path:e}))(n))},document.body.addEventListener("click",e=>{if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)return;const n=e.composedPath().filter(e=>"A"===e.tagName)[0];if(!n||n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const s=n.href;if(!s||-1!==s.indexOf("mailto:"))return;const i=window.location,r=i.origin||i.protocol+"//"+i.host;0===s.indexOf(r)&&(e.preventDefault(),s!==i.href&&(window.history.pushState({},"",s),t(i,e)))}),window.addEventListener("popstate",e=>t(window.location,e)),t(window.location,null),g=!0),this.path&&e.dispatch((e=>({type:"ADD_ROUTE",path:e}))(this.path))}stateChanged(e){this.active=c(e,this.path),this.params=((e,t)=>l(e,t).params||{})(e,this.path)}getTemplate(e,t){const n=e.replace(/[^A-Za-z-]/,"");let r="";t&&(r=Object.keys(t).map(e=>" ".concat(e,'="').concat(this.params[e],'"')).join(""));const o="<".concat(n).concat(r,"></").concat(n,">");return Object(s.c)(u(),Object(i.a)(o))}render(){return this.active?this.component?this.getTemplate(this.component,this.params):Object(s.c)(h()):Object(s.c)(d())}};m([Object(s.d)({type:Boolean,reflect:!0})],t.prototype,"active",void 0),m([Object(s.d)({type:String})],t.prototype,"component",void 0),m([Object(s.d)({type:Object})],t.prototype,"params",void 0),m([Object(s.d)({type:String})],t.prototype,"path",void 0),t=m([Object(s.b)("lit-route")],t),f=t};const y={activeRoute:"/",routes:{}};var v=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,{type:t="",path:n=""}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t){case"NAVIGATE":case"SET_ACTIVE_ROUTE":return Object.assign({},e,{activeRoute:n,routes:Object.keys(e.routes).reduce((e,t)=>Object.assign({},e,{[t]:o(t,n)}),{})});case"ADD_ROUTE":return Object.assign({},e,{routes:Object.assign({},e.routes,{[n]:o(n,e.activeRoute)})});default:return e}};n.d(t,"a",function(){return S}),n.d(t,"b",function(){return a});const S=e=>{e.addReducers({router:v}),_(e)}},function(e,t,n){"use strict";n.d(t,"d",function(){return a}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return u});var s=n(25),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},r={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,n){var i;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,c=t,h=[],d=h,u=!1;function p(){d===h&&(d=h.slice())}function m(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function f(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var n=d.indexOf(e);d.splice(n,1)}}}function g(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,c=l(c,e)}finally{u=!1}for(var t=h=d,n=0;n<t.length;n++){(0,t[n])()}return e}return g({type:r.INIT}),(i={dispatch:g,subscribe:f,getState:m,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,g({type:r.REPLACE})}})[s.a]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(m())}return n(),{unsubscribe:t(n)}}})[s.a]=function(){return this},e},i}function l(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){for(var t=Object.keys(e),n={},s=0;s<t.length;s++){var i=t[s];0,"function"==typeof e[i]&&(n[i]=e[i])}var o,a=Object.keys(n);try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:r.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:r.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+r.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var s=!1,i={},r=0;r<a.length;r++){var c=a[r],h=n[c],d=e[c],u=h(d,t);if(void 0===u){var p=l(c,t);throw new Error(p)}i[c]=u,s=s||u!==d}return s?i:e}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){h(e,t,n[t])})}return e}function u(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),s=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return s.apply(void 0,arguments)}},r=t.map(function(e){return e(i)});return d({},n,{dispatch:s=u.apply(void 0,r)(n.dispatch)})}}}},function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,R=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new y(e,n,"html",T)},M=133;function U(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>"".concat(e,"--").concat(t);let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const n=z(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,F=(e,t,n)=>{H.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=V.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W},$=Promise.resolve(!0),K=1,G=4,Z=8,X=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return re}),n.d(t,"b",function(){return k}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,n)=>{const s=n.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof y,a=r&&!H.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=R.get(t);void 0===s&&(o(t,t.firstChild),R.set(t,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:B(s)},n)),a){const e=R.get(l);R.delete(l),e.value instanceof _&&F(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";n.d(t,"a",function(){return s});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const s=e=>{return t=>(n,s)=>{let i={};const r=t(n,s);return Object.assign({},r,{addReducers(t){const n=Object.assign({},i,t);this.replaceReducer(e(i=n))}})}}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var s=n(2),i=n(5);
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
const r=new WeakMap,o=Object(i.c)(e=>t=>{if(!(t instanceof i.a))throw new Error("unsafeHTML can only be used in text bindings");const n=r.get(t);if(void 0!==n&&Object(s.f)(e)&&e===n.value&&t.value===n.fragment)return;const o=document.createElement("template");o.innerHTML=e;const a=document.importNode(o.content,!0);t.setValue(a),r.set(t,{value:e,fragment:a})})},function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,R=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new y(e,n,"html",T)},M=133;function U(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>"".concat(e,"--").concat(t);let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const n=z(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,F=(e,t,n)=>{H.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=V.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W},$=Promise.resolve(!0),K=1,G=4,Z=8,X=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return re}),n.d(t,"b",function(){return k}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,n)=>{const s=n.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof y,a=r&&!H.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=R.get(t);void 0===s&&(o(t,t.firstChild),R.set(t,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:B(s)},n)),a){const e=R.get(l);R.delete(l),e.value instanceof _&&F(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,R=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new y(e,n,"html",T)},M=133;function U(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>"".concat(e,"--").concat(t);let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const n=z(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,F=(e,t,n)=>{H.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=V.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W},$=Promise.resolve(!0),K=1,G=4,Z=8,X=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return re}),n.d(t,"b",function(){return k}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,n)=>{const s=n.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof y,a=r&&!H.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=R.get(t);void 0===s&&(o(t,t.firstChild),R.set(t,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:B(s)},n)),a){const e=R.get(l);R.delete(l),e.value instanceof _&&F(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},function(e,t,n){"use strict";(function(e,s){var i,r=n(40);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:s;var o=Object(r.a)(i);t.a=o}).call(this,n(61),n(62)(e))},function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */const T=new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,R=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new y(e,n,"html",T)},M=133;function U(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,M,null,!1);let r=I(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=I(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,M,null,!1);for(;n.nextNode();)t++;return t},I=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const z=(e,t)=>"".concat(e,"--").concat(t);let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=e=>t=>{const n=z(t.type,e);let s=V.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},q=["html","svg"],H=new Set,F=(e,t,n)=>{H.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{q.forEach(t=>{const n=V.get(z(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),U(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,M,null,!1);let o=I(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=j(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=I(i,o);return}o=I(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const D={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:W},$=Promise.resolve(!0),K=1,G=4,Z=8,X=16,Q=32;class Y extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:J;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:W)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||D,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||D.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:J;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||J;this._updateState=this._updateState|X,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~X}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||J;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&X||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|G;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&G}get hasUpdated(){return this._updateState&K}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~G}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Y.finalized=!0;ne((e,t)=>e.querySelector(t)),ne((e,t)=>e.querySelectorAll(t));const ee=(e,t,n)=>{Object.defineProperty(t,n,e)},te=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ne(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?ee(i,n,s):te(i,n)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return re}),n.d(t,"b",function(){return k}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ie=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class re extends Y{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ie(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}re.finalized=!0,re.render=(e,t,n)=>{const s=n.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof y,a=r&&!H.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=R.get(t);void 0===s&&(o(t,t.firstChild),R.set(t,s=new w(Object.assign({templateFactory:O},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:B(s)},n)),a){const e=R.get(l);R.delete(l),e.value instanceof _&&F(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},,,,,,,,,,,,,function(e,t,n){"use strict";function s(e){return function(t){var n=t.dispatch,s=t.getState;return function(t){return function(i){return"function"==typeof i?i(n,s,e):t(i)}}}}var i=s();i.withExtraArgument=s,t.a=i},function(e,t,n){"use strict";function s(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return s})},,function(e,t,n){"use strict";
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
 */const s=new WeakMap,i=e=>"function"==typeof e&&s.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=t;for(;s!==n;){const t=s.nextSibling;e.removeChild(s),s=t}},a={},l={},c="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(c,"--\x3e"),d=new RegExp("".concat(c,"|").concat(h)),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let n=-1,s=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){n++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[s],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:n,name:r,strings:a}),t.removeAttribute(o),s+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++n});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],s+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&n!==l||(n++,e.insertBefore(f(),t)),l=n,this.parts.push({type:"node",index:n}),null===t.nextSibling?t.data="":(i.push(t),n--),s++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class _{constructor(e,t,n){this._parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this._parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let n=0,s=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;n<t.length&&null!==o;){const e=t[n];if(m(e))if(s===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));n++}else s++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),n++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */class y{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="";for(let n=0;n<e;n++){const e=this.strings[n],s=g.exec(e);t+=s?e.substr(0,s.index)+s[1]+s[2]+u+s[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)n+="string"==typeof t?t:String(t);else n+="string"==typeof e?e:String(e)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof y?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),s=n._clone();n.update(e.values),this._commitNode(s),this.value=n}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const i of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(i),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,n){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this._boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),s&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
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
 */new class{handleAttributeExpressions(e,t,n,s){const i=t[0];return"."===i?new P(e,t.slice(1),n).parts:"@"===i?[new E(e,t.slice(1),s.eventContext)]:"?"===i?[new x(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new w(e)}};
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
 */function T(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(c);return void 0===(n=t.keyString.get(s))&&(n=new p(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const O=new Map,V=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const R=133;function k(e,t){const{element:{content:n},parts:s}=e,i=document.createTreeWalker(n,R,null,!1);let r=U(s),o=s[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=s[r=U(s,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,R,null,!1);for(;n.nextNode();)t++;return t},U=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;for(let n=t+1;n<e.length;n++){const t=e[n];if(m(t))return n}return-1};
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
const j=(e,t)=>"".concat(e,"--").concat(t);let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),I=!1);const z=e=>t=>{const n=j(t.type,e);let s=O.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},O.set(n,s));let i=s.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=s.keyString.get(r))){const n=t.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(n,e),i=new p(t,n),s.keyString.set(r,i)}return s.stringsArray.set(t.strings,i),i},L=["html","svg"],B=new Set,q=(e,t,n)=>{B.add(n);const s=e.querySelectorAll("style");if(0===s.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,n);const i=document.createElement("style");for(let e=0;e<s.length;e++){const t=s[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{L.forEach(t=>{const n=O.get(j(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),k(e,n)})})})(n),function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:i}=e;if(null==n)return void s.appendChild(t);const r=document.createTreeWalker(s,R,null,!1);let o=U(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===n&&(a=M(t),n.parentNode.insertBefore(t,n));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=U(i,o);return}o=U(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,n),window.ShadyCSS.nativeShadow){const n=t.element.content.querySelector("style");e.insertBefore(n.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),k(t,e)}};
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
window.JSCompiler_renameProperty=(e,t)=>e;const H={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:F},W=Promise.resolve(!0),J=1,$=4,K=8,G=16,Z=32;class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__".concat(e);Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this.requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:F)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||H,i="function"==typeof s?s:s.fromAttribute;return i?i(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||H.toAttribute)(e,n)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Z,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const s=this.constructor,i=s._attributeNameForProperty(e,n);if(void 0!==i){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|K,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~K}}_attributeToProperty(e,t){if(this._updateState&K)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||D;this._updateState=this._updateState|G,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~G}}requestUpdate(e,t){let n=!0;if(void 0!==e&&!this._changedProperties.has(e)){const s=this.constructor,i=s._classProperties.get(e)||D;s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&G||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}return!this._hasRequestedUpdate&&n&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|$;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const n=this.performUpdate();null!=n&&"function"==typeof n.then&&await n,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Z}get _hasRequestedUpdate(){return this._updateState&$}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~$}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}X.finalized=!0;ee((e,t)=>e.querySelector(t)),ee((e,t)=>e.querySelectorAll(t));const Q=(e,t,n)=>{Object.defineProperty(t,n,e)},Y=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ee(e){return t=>(n,s)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==s?Q(i,n,s):Y(i,n)}}const te="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();n.d(t,"a",function(){return se}),
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,i=t.length;s<i;s++){const i=t[s];Array.isArray(i)?e(i,n):n.push(i)}return n}(e);class se extends X{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?te?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof y&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=(e,t,n)=>{const s=n.scopeName,i=V.has(t),r=t instanceof ShadowRoot&&I&&e instanceof y,a=r&&!B.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=V.get(t);void 0===s&&(o(t,t.firstChild),V.set(t,s=new w(Object.assign({templateFactory:T},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:z(s)},n)),a){const e=V.get(l);V.delete(l),e.value instanceof _&&q(l,e.value.template,s),o(t,t.firstChild),t.appendChild(l),V.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)}},,,,,function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},s={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},r={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,s,e.REGEXP_MODE];var o=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},function(e,t){e.exports=function(e){var t={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}}},function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},function(e,t){e.exports=function(e){var t={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},n={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,n,{className:"string",begin:/'/,end:/'/},t]}}},function(e,t){e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},,,,,,,,,,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]]);