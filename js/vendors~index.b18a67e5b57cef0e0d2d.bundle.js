(window.webpackJsonp=window.webpackJsonp||[]).push([[1],[function(e,t,s){"use strict";var n=s(4),i=s(5),r=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const o=133;function a(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,o,null,!1);let r=c(n),a=n[r],l=-1,h=0;const d=[];let u=null;for(;i.nextNode();){l++;const e=i.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(d.push(e),null===u&&(u=e)),null!==u&&h++;void 0!==a&&a.index===l;)a.index=null!==u?-1:a.index-h,a=n[r=c(n,r)]}d.forEach(e=>e.parentNode.removeChild(e))}const l=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,o,null,!1);for(;s.nextNode();)t++;return t},c=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(Object(r.d)(s))return t}return-1};var h=s(10),d=s(8),u=s(14),p=s(7);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const m=(e,t)=>`${e}--${t}`;let f=!0;void 0===window.ShadyCSS?f=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),f=!1);const g=["html","svg"],y=new Set,_=(e,t,s)=>{y.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{g.forEach(t=>{const s=d.a.get(m(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),a(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,o,null,!1);let a=c(i),h=0,d=-1;for(;r.nextNode();)for(d++,r.currentNode===s&&(h=l(t),s.parentNode.insertBefore(t,s));-1!==a&&i[a].index===d;){if(h>0){for(;-1!==a;)i[a].index+=h,a=c(i,a);return}a=c(i,a)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),a(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const v={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},S=(e,t)=>t!==e&&(t==t||e==e),w={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:S},b=Promise.resolve(!0),x=1,P=4,N=8,C=16,E=32;class A extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=b,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:S)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||v,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||v.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|E,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|N,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~N}}_attributeToProperty(e,t){if(this._updateState&N)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||w;this._updateState=this._updateState|C,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~C}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||w;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&C||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|P;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&E}get _hasRequestedUpdate(){return this._updateState&P}get hasUpdated(){return this._updateState&x}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&x||(this._updateState=this._updateState|x,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~P}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}A.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const T=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{return{kind:t.kind,elements:t.elements,finisher(t){window.customElements.define(e,t)}}})(e,t),O=(e,t)=>"method"!==t.kind||!t.descriptor||"value"in t.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(s){s.createProperty(t.key,e)}}:Object.assign({},t,{finisher(s){s.createProperty(t.key,e)}}),V=(e,t,s)=>{t.constructor.createProperty(s,e)};function R(e){return(t,s)=>void 0!==s?V(e,t,s):O(e,t)}U((e,t)=>e.querySelector(t)),U((e,t)=>e.querySelectorAll(t));const k=(e,t,s)=>{Object.defineProperty(t,s,e)},M=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function U(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?k(i,s,n):M(i,s)}}const j="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return I}),s.d(t,"b",function(){return T}),s.d(t,"d",function(){return R}),s.d(t,"c",function(){return n.d}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const z=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class I extends A{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){z(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?j?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof n.b&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}I.finalized=!0,I.render=((e,t,s)=>{const n=s.scopeName,o=h.a.has(t),a=t instanceof ShadowRoot&&f&&e instanceof p.b,l=a&&!y.has(n),c=l?document.createDocumentFragment():t;if(Object(h.b)(e,c,Object.assign({templateFactory:(e=>t=>{const s=m(t.type,e);let n=d.a.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},d.a.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const o=t.strings.join(r.f);if(void 0===(i=n.keyString.get(o))){const s=t.getTemplateElement();f&&window.ShadyCSS.prepareTemplateDom(s,e),i=new r.a(t,s),n.keyString.set(o,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),l){const e=h.a.get(c);h.a.delete(c),e.value instanceof u.a&&_(c,e.value.template,n),Object(i.b)(t,t.firstChild),t.appendChild(c),h.a.set(t,e)}!o&&a&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";s.d(t,"f",function(){return n}),s.d(t,"g",function(){return i}),s.d(t,"b",function(){return o}),s.d(t,"a",function(){return a}),s.d(t,"d",function(){return l}),s.d(t,"c",function(){return c}),s.d(t,"e",function(){return h});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const n=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${n}--\x3e`,r=new RegExp(`${n}|${i}`),o="$lit$";class a{constructor(e,t){this.parts=[],this.element=t;let s=-1,i=0;const a=[],l=t=>{const d=t.content,u=document.createTreeWalker(d,133,null,!1);let p=0;for(;u.nextNode();){s++;const t=u.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const a=t.attributes;let l=0;for(let e=0;e<a.length;e++)a[e].value.indexOf(n)>=0&&l++;for(;l-- >0;){const n=e.strings[i],a=h.exec(n)[2],l=a.toLowerCase()+o,c=t.getAttribute(l).split(r);this.parts.push({type:"attribute",index:s,name:a,strings:c}),t.removeAttribute(l),i+=c.length-1}}"TEMPLATE"===t.tagName&&l(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(n)>=0){const n=t.parentNode,o=e.split(r),l=o.length-1;for(let e=0;e<l;e++)n.insertBefore(""===o[e]?c():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[l]?(n.insertBefore(c(),t),a.push(t)):t.data=o[l],i+=l}}else if(8===t.nodeType)if(t.data===n){const e=t.parentNode;null!==t.previousSibling&&s!==p||(s++,e.insertBefore(c(),t)),p=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(a.push(t),s--),i++}else{let e=-1;for(;-1!==(e=t.data.indexOf(n,e+1));)this.parts.push({type:"node",index:-1})}}};l(t);for(const e of a)e.parentNode.removeChild(e)}}const l=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/},function(e,t,s){"use strict";s.d(t,"f",function(){return c}),s.d(t,"a",function(){return h}),s.d(t,"d",function(){return u}),s.d(t,"b",function(){return p}),s.d(t,"e",function(){return m}),s.d(t,"c",function(){return y});var n=s(9),i=s(5),r=s(3),o=s(14),a=s(7),l=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const c=e=>null===e||!("object"==typeof e||"function"==typeof e);class h{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new d(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class d{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r.a||c(e)&&e===this.value||(this.value=e,Object(n.b)(e)||(this.committer.dirty=!0))}commit(){for(;Object(n.b)(this.value);){const e=this.value;this.value=r.a,e(this)}this.value!==r.a&&this.committer.commit()}}class u{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Object(l.c)()),this.endNode=e.appendChild(Object(l.c)())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=Object(l.c)()),e._insert(this.endNode=Object(l.c)())}insertAfterPart(e){e._insert(this.startNode=Object(l.c)()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;Object(n.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=r.a,e(this)}const e=this._pendingValue;e!==r.a&&(c(e)?e!==this.value&&this._commitText(e):e instanceof a.b?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===r.b?(this.value=r.b,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof o.a&&this.value.template===t)this.value.update(e.values);else{const s=new o.a(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new u(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;Object(i.b)(this.startNode.parentNode,e.nextSibling,this.endNode)}}class p{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;Object(n.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=r.a,e(this)}if(this._pendingValue===r.a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=r.a}}class m extends h{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new f(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class f extends d{}let g=!1;try{const e={get capture(){return g=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class y{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;Object(n.b)(this._pendingValue);){const e=this._pendingValue;this._pendingValue=r.a,e(this)}if(this._pendingValue===r.a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=_(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=r.a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const _=e=>e&&(g?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)},function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"b",function(){return i});
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
const n={},i={}},function(e,t,s){"use strict";var n=s(2);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const i=new class{handleAttributeExpressions(e,t,s,i){const r=t[0];return"."===r?new n.e(e,t.slice(1),s).parts:"@"===r?[new n.c(e,t.slice(1),i.eventContext)]:"?"===r?[new n.b(e,t.slice(1),s)]:new n.a(e,t,s).parts}handleTextExpression(e){return new n.d(e)}};var r=s(7),o=s(9);s(5),s(3),s(10),s(8),s(14),s(1);s.d(t,"d",function(){return a}),s.d(t,"c",function(){return o.a}),s.d(t,"a",function(){return n.d}),s.d(t,"b",function(){return r.b}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const a=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new r.b(e,s,"html",i)}},function(e,t,s){"use strict";s.d(t,"a",function(){return n}),s.d(t,"c",function(){return i}),s.d(t,"b",function(){return r});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=t;for(;i!==s;){const t=i.nextSibling;e.insertBefore(i,n),i=t}},r=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}}},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var s=function(e,t){var s=e[1]||"",n=e[3];if(!n)return s;if(t&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(n),r=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[s].concat(r).concat([i]).join("\n")}return[s].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+s+"}":s}).join("")},t.i=function(e,s){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var o=e[i];"number"==typeof o[0]&&n[o[0]]||(s&&!o[2]?o[2]=s:s&&(o[2]="("+o[2]+") and ("+s+")"),t.push(o))}},t}},function(e,t,s){"use strict";s.d(t,"b",function(){return r}),s.d(t,"a",function(){return o});var n=s(5),i=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class r{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=i.e.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+i.b+n[3]+i.f:e+i.g}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}class o extends r{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,s=t.firstChild;return t.removeChild(s),Object(n.c)(t,s.firstChild),e}}},function(e,t,s){"use strict";s.d(t,"b",function(){return i}),s.d(t,"a",function(){return r});var n=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function i(e){let t=r.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},r.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(n.f);return void 0===(s=t.keyString.get(i))&&(s=new n.a(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const r=new Map},function(e,t,s){"use strict";s.d(t,"a",function(){return i}),s.d(t,"b",function(){return r});
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const n=new WeakMap,i=e=>(function(){const t=e(...arguments);return n.set(t,!0),t}),r=e=>"function"==typeof e&&n.has(e)},function(e,t,s){"use strict";s.d(t,"a",function(){return o}),s.d(t,"b",function(){return a});var n=s(5),i=s(2),r=s(8);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const o=new WeakMap,a=(e,t,s)=>{let a=o.get(t);void 0===a&&(Object(n.b)(t,t.firstChild),o.set(t,a=new i.d(Object.assign({templateFactory:r.b},s))),a.appendInto(t)),a.setValue(e),a.commit()}},,,function(e,t,s){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;(function(e){var t=[],s=Object.keys,n={},i={},r=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,a=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,l="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function h(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function u(e,t){var s=e&&e.exec(t);return s&&0===s.index}function p(e){return r.test(e)}function m(e){var t,s={},n=Array.prototype.slice.call(arguments,1);for(t in e)s[t]=e[t];return n.forEach(function(e){for(t in e)s[t]=e[t]}),s}function f(e){var t=[];return function e(s,n){for(var i=s.firstChild;i;i=i.nextSibling)3===i.nodeType?n+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:n,node:i}),n=e(i,n),d(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:n,node:i}));return n}(e,0),t}function g(e){function t(e){return e&&e.source||e}function n(s,n){return new RegExp(t(s),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}!function i(r,o){if(r.compiled)return;r.compiled=!0;r.keywords=r.keywords||r.beginKeywords;if(r.keywords){var a={},l=function(t,s){e.case_insensitive&&(s=s.toLowerCase()),s.split(" ").forEach(function(e){var s=e.split("|");a[s[0]]=[t,s[1]?Number(s[1]):1]})};"string"==typeof r.keywords?l("keyword",r.keywords):s(r.keywords).forEach(function(e){l(e,r.keywords[e])}),r.keywords=a}r.lexemesRe=n(r.lexemes||/\w+/,!0);o&&(r.beginKeywords&&(r.begin="\\b("+r.beginKeywords.split(" ").join("|")+")\\b"),r.begin||(r.begin=/\B|\b/),r.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(r.endRe=n(r.end)),r.terminator_end=t(r.end)||"",r.endsWithParent&&o.terminator_end&&(r.terminator_end+=(r.end?"|":"")+o.terminator_end));r.illegal&&(r.illegalRe=n(r.illegal));null==r.relevance&&(r.relevance=1);r.contains||(r.contains=[]);r.contains=Array.prototype.concat.apply([],r.contains.map(function(e){return function(e){e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(t){return m(e,{variants:null},t)}));return e.cached_variants||e.endsWithParent&&[m(e)]||[e]}("self"===e?r:e)}));r.contains.forEach(function(e){i(e,r)});r.starts&&i(r.starts,o);var c=r.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([r.terminator_end,r.illegal]).map(t).filter(Boolean);r.terminators=c.length?n(c.join("|"),!0):{exec:function(){return null}}}(e)}function y(e,t,s,i){function r(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function o(e,t){var s=f.case_insensitive?t[0].toLowerCase():t[0];return e.keywords.hasOwnProperty(s)&&e.keywords[s]}function a(e,t,s,n){var i=n?"":c.classPrefix,r='<span class="'+i,o=s?"":l;return(r+=e+'">')+t+o}function d(){x+=null!=S.subLanguage?function(){var e="string"==typeof S.subLanguage;if(e&&!n[S.subLanguage])return h(P);var t=e?y(S.subLanguage,P,!0,w[S.subLanguage]):_(P,S.subLanguage.length?S.subLanguage:void 0);S.relevance>0&&(N+=t.relevance);e&&(w[S.subLanguage]=t.top);return a(t.language,t.value,!1,!0)}():function(){var e,t,s,n;if(!S.keywords)return h(P);n="",t=0,S.lexemesRe.lastIndex=0,s=S.lexemesRe.exec(P);for(;s;)n+=h(P.substring(t,s.index)),(e=o(S,s))?(N+=e[1],n+=a(e[0],h(s[0]))):n+=h(s[0]),t=S.lexemesRe.lastIndex,s=S.lexemesRe.exec(P);return n+h(P.substr(t))}(),P=""}function p(e){x+=e.className?a(e.className,"",!0):"",S=Object.create(e,{parent:{value:S}})}function m(e,t){if(P+=e,null==t)return d(),0;var n=function(e,t){var s,n;for(s=0,n=t.contains.length;s<n;s++)if(u(t.contains[s].beginRe,e))return t.contains[s].endSameAsBegin&&(t.contains[s].endRe=r(t.contains[s].beginRe.exec(e)[0])),t.contains[s]}(t,S);if(n)return n.skip?P+=t:(n.excludeBegin&&(P+=t),d(),n.returnBegin||n.excludeBegin||(P=t)),p(n),n.returnBegin?0:t.length;var i=function e(t,s){if(u(t.endRe,s)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return e(t.parent,s)}(S,t);if(i){var o=S;o.skip?P+=t:(o.returnEnd||o.excludeEnd||(P+=t),d(),o.excludeEnd&&(P=t));do{S.className&&(x+=l),S.skip||S.subLanguage||(N+=S.relevance),S=S.parent}while(S!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),p(i.starts)),o.returnEnd?0:t.length}if(function(e,t){return!s&&u(t.illegalRe,e)}(t,S))throw new Error('Illegal lexeme "'+t+'" for mode "'+(S.className||"<unnamed>")+'"');return P+=t,t.length||1}var f=b(e);if(!f)throw new Error('Unknown language: "'+e+'"');g(f);var v,S=i||f,w={},x="";for(v=S;v!==f;v=v.parent)v.className&&(x=a(v.className,"",!0)+x);var P="",N=0;try{for(var C,E,A=0;S.terminators.lastIndex=A,C=S.terminators.exec(t);)E=m(t.substring(A,C.index),C[0]),A=C.index+E;for(m(t.substr(A)),v=S;v.parent;v=v.parent)v.className&&(x+=l);return{relevance:N,value:x,language:e,top:S}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:h(t)};throw e}}function _(e,t){t=t||c.languages||s(n);var i={relevance:0,value:h(e)},r=i;return t.filter(b).filter(x).forEach(function(t){var s=y(t,e,!1);s.language=t,s.relevance>r.relevance&&(r=s),s.relevance>i.relevance&&(r=i,i=s)}),r.language&&(i.second_best=r),i}function v(e){return c.tabReplace||c.useBR?e.replace(a,function(e,t){return c.useBR&&"\n"===e?"<br>":c.tabReplace?t.replace(/\t/g,c.tabReplace):""}):e}function S(e){var s,n,r,a,l,u=function(e){var t,s,n,i,r=e.className+" ";if(r+=e.parentNode?e.parentNode.className:"",s=o.exec(r))return b(s[1])?s[1]:"no-highlight";for(r=r.split(/\s+/),t=0,n=r.length;t<n;t++)if(p(i=r[t])||b(i))return i}(e);p(u)||(c.useBR?(s=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):s=e,l=s.textContent,r=u?y(u,l,!0):_(l),(n=f(s)).length&&((a=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=r.value,r.value=function(e,s,n){var i=0,r="",o=[];function a(){return e.length&&s.length?e[0].offset!==s[0].offset?e[0].offset<s[0].offset?e:s:"start"===s[0].event?e:s:e.length?e:s}function l(e){r+="<"+d(e)+t.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+h(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){r+="</"+d(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||s.length;){var p=a();if(r+=h(n.substring(i,p[0].offset)),i=p[0].offset,p===e){o.reverse().forEach(c);do{u(p.splice(0,1)[0]),p=a()}while(p===e&&p.length&&p[0].offset===i);o.reverse().forEach(l)}else"start"===p[0].event?o.push(p[0].node):o.pop(),u(p.splice(0,1)[0])}return r+h(n.substr(i))}(n,f(a),l)),r.value=v(r.value),e.innerHTML=r.value,e.className=function(e,t,s){var n=t?i[t]:s,r=[e.trim()];e.match(/\bhljs\b/)||r.push("hljs");-1===e.indexOf(n)&&r.push(n);return r.join(" ").trim()}(e.className,u,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function w(){if(!w.called){w.called=!0;var e=document.querySelectorAll("pre code");t.forEach.call(e,S)}}function b(e){return e=(e||"").toLowerCase(),n[e]||n[i[e]]}function x(e){var t=b(e);return t&&!t.disableAutodetect}e.highlight=y,e.highlightAuto=_,e.fixMarkup=v,e.highlightBlock=S,e.configure=function(e){c=m(c,e)},e.initHighlighting=w,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",w,!1),addEventListener("load",w,!1)},e.registerLanguage=function(t,s){var r=n[t]=s(e);r.aliases&&r.aliases.forEach(function(e){i[e]=t})},e.listLanguages=function(){return s(n)},e.getLanguage=b,e.autoDetection=x,e.inherit=m,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(t,s,n){var i=e.inherit({className:"comment",begin:t,end:s,contains:[]},n||{});return i.contains.push(e.PHRASAL_WORDS_MODE),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),i},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0}})(t)}()},function(e,t,s){"use strict";s.d(t,"a",function(){return r});var n=s(5),i=s(1);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class r{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=n.a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,r=0;const o=e=>{const n=document.createTreeWalker(e,133,null,!1);let a=n.nextNode();for(;s<t.length&&null!==a;){const e=t[s];if(Object(i.d)(e))if(r===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(a,e.name,e.strings,this.options));s++}else r++,"TEMPLATE"===a.nodeName&&o(a.content),a=n.nextNode();else this._parts.push(void 0),s++}};return o(e),n.a&&(document.adoptNode(e),customElements.upgrade(e)),e}}},function(e,t,s){"use strict";s.d(t,"a",function(){return n});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}})},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";var n=s(0),i=s(23),r=s(15);s(22);const o=(e,t)=>{const s=function(e){var t,s,n,i=[],r="",o=e.split("/");for(o[0]||o.shift();n=o.shift();)"*"===(t=n[0])?(i.push("wild"),r+="/(.*)"):":"===t?(s="?"===n[n.length-1],i.push(n.substring(1,s?n.length-1:n.length)),r+=s?"(?:/([^/]+?))?":"/([^/]+?)"):r+="/"+n;return i.length&&(r+="(?:/)?"),{keys:i,pattern:new RegExp("^"+r+"/?$","i")}}(e),n=s.pattern,i=s.keys,r=t.replace(/\?.*/,""),o=n.exec(r),a=n.test(r);return{active:a,params:a?i.reduce((e,t,s)=>Object.assign({},e,{[t]:o&&o[s+1]||""}),{}):{}}},a=e=>((e=>{window.history.pushState({},"",e)})(e),{type:"NAVIGATE",path:e}),l=(e,t)=>{let s=e.router.routes;return s&&t&&s[t]||{}},c=(e,t)=>t?!!l(e,t).active:(e=>{let t=e.router.routes;return Object.keys(t).reduce((e,s)=>e&&!t[s].active,!0)})(e);var h=function(e,t,s,n){var i,r=arguments.length,o=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,n);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,s,o):i(t,s))||o);return r>3&&o&&Object.defineProperty(t,s,o),o};let d,u=!1;var p=e=>{let t=class extends(Object(r.a)(e)(n.a)){constructor(){super(...arguments),this.active=!1,this.params={}}firstUpdated(){u||((e=>{document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const s=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!s||s.target||s.hasAttribute("download")||"external"===s.getAttribute("rel"))return;const n=s.href;if(!n||-1!==n.indexOf("mailto:"))return;const i=window.location,r=i.origin||i.protocol+"//"+i.host;0===n.indexOf(r)&&(t.preventDefault(),n!==i.href&&(window.history.pushState({},"",n),e(i,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null)})(t=>{const s=window.decodeURIComponent(t.pathname);return e.dispatch((e=>({type:"SET_ACTIVE_ROUTE",path:e}))(s))}),u=!0),this.path&&e.dispatch((e=>({type:"ADD_ROUTE",path:e}))(this.path))}stateChanged(e){this.active=c(e,this.path),this.params=((e,t)=>l(e,t).params||{})(e,this.path)}render(){if(!this.active)return n["c"]``;if(!this.component)return n["c"]`<slot></slot>`;const e=this.component.replace(/[^A-Za-z-]/,""),t=`<${e}${Object.keys(this.params).map(e=>` ${e}="${this.params[e]}"`).join("")}></${e}>`;return n["c"]`${Object(i.a)(t)}`}};h([Object(n.d)({type:Boolean,reflect:!0})],t.prototype,"active",void 0),h([Object(n.d)({type:String})],t.prototype,"component",void 0),h([Object(n.d)({type:Object})],t.prototype,"params",void 0),h([Object(n.d)({type:String})],t.prototype,"path",void 0),t=h([Object(n.b)("lit-route")],t),d=t};const m={activeRoute:"/",routes:{}};var f=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.type,n=void 0===s?"":s,i=t.path,r=void 0===i?"":i;switch(n){case"NAVIGATE":case"SET_ACTIVE_ROUTE":return Object.assign({},e,{activeRoute:r,routes:Object.keys(e.routes).reduce((e,t)=>Object.assign({},e,{[t]:o(t,r)}),{})});case"ADD_ROUTE":return Object.assign({},e,{routes:Object.assign({},e.routes,{[r]:o(r,e.activeRoute)})});default:return e}};s.d(t,"a",function(){return g}),s.d(t,"b",function(){return a});const g=e=>{e.addReducers({router:f}),p(e)}},function(e,t,s){"use strict";s.d(t,"d",function(){return a}),s.d(t,"b",function(){return c}),s.d(t,"a",function(){return u}),s.d(t,"c",function(){return d});var n=s(26),i=function(){return Math.random().toString(36).substring(7).split("").join(".")},r={INIT:"@@redux/INIT"+i(),REPLACE:"@@redux/REPLACE"+i(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+i()}};function o(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,s){var i;if("function"==typeof t&&"function"==typeof s||"function"==typeof s&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===s&&(s=t,t=void 0),void 0!==s){if("function"!=typeof s)throw new Error("Expected the enhancer to be a function.");return s(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,c=t,h=[],d=h,u=!1;function p(){d===h&&(d=h.slice())}function m(){if(u)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return c}function f(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(u)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),d.push(e),function(){if(t){if(u)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var s=d.indexOf(e);d.splice(s,1)}}}function g(e){if(!o(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(u)throw new Error("Reducers may not dispatch actions.");try{u=!0,c=l(c,e)}finally{u=!1}for(var t=h=d,s=0;s<t.length;s++){(0,t[s])()}return e}return g({type:r.INIT}),(i={dispatch:g,subscribe:f,getState:m,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,g({type:r.REPLACE})}})[n.a]=function(){var e,t=f;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function s(){e.next&&e.next(m())}return s(),{unsubscribe:t(s)}}})[n.a]=function(){return this},e},i}function l(e,t){var s=t&&t.type;return"Given "+(s&&'action "'+String(s)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function c(e){for(var t=Object.keys(e),s={},n=0;n<t.length;n++){var i=t[n];0,"function"==typeof e[i]&&(s[i]=e[i])}var o,a=Object.keys(s);try{!function(e){Object.keys(e).forEach(function(t){var s=e[t];if(void 0===s(void 0,{type:r.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===s(void 0,{type:r.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+r.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(s)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var n=!1,i={},r=0;r<a.length;r++){var c=a[r],h=s[c],d=e[c],u=h(d,t);if(void 0===u){var p=l(c,t);throw new Error(p)}i[c]=u,n=n||u!==d}return n?i:e}}function h(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function d(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function u(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return function(e){return function(){var s=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:s.getState,dispatch:function(){return n.apply(void 0,arguments)}},r=t.map(function(e){return e(i)});return function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),n.forEach(function(t){h(e,t,s[t])})}return e}({},s,{dispatch:n=d.apply(void 0,r)(s.dispatch)})}}}},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";s.d(t,"a",function(){return n});
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const n=e=>{return t=>(s,n)=>{let i={};const r=t(s,n);return Object.assign({},r,{addReducers(t){const s=Object.assign({},i,t);this.replaceReducer(e(i=s))}})}}},function(e,t,s){"use strict";s.d(t,"a",function(){return o});var n=s(2),i=s(4);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const r=new WeakMap,o=Object(i.c)(e=>t=>{if(!(t instanceof i.a))throw new Error("unsafeHTML can only be used in text bindings");const s=r.get(t);if(void 0!==s&&Object(n.f)(e)&&e===s.value&&t.value===s.fragment)return;const o=document.createElement("template");o.innerHTML=e;const a=document.importNode(o.content,!0);t.setValue(a),r.set(t,{value:e,fragment:a})})},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},function(e,t,s){"use strict";(function(e,n){var i,r=s(41);i="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var o=Object(r.a)(i);t.a=o}).call(this,s(61),s(62)(e))},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const T=new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function O(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const V=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const k=function(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return new _(e,s,"html",T)},M=133;function U(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,M,null,!1);let r=z(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=z(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const j=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,M,null,!1);for(;s.nextNode();)t++;return t},z=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const I=(e,t)=>`${e}--${t}`;let L=!0;void 0===window.ShadyCSS?L=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),L=!1);const B=["html","svg"],q=new Set,H=(e,t,s)=>{q.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{B.forEach(t=>{const s=V.get(I(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),U(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,M,null,!1);let o=z(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=j(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=z(i,o);return}o=z(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),U(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},$=(e,t)=>t!==e&&(t==t||e==e),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:$},W=Promise.resolve(!0),J=1,K=4,G=8,Z=16,X=32;class Q extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:D;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:$)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||F,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||F.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|X,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:D;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|G,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~G}}_attributeToProperty(e,t){if(this._updateState&G)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||D;this._updateState=this._updateState|Z,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~Z}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||D;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&Z||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|K;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&X}get _hasRequestedUpdate(){return this._updateState&K}get hasUpdated(){return this._updateState&J}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~K}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Q.finalized=!0;te((e,t)=>e.querySelector(t)),te((e,t)=>e.querySelectorAll(t));const Y=(e,t,s)=>{Object.defineProperty(t,s,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function te(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?Y(i,s,n):ee(i,s)}}const se="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return ie}),s.d(t,"b",function(){return k}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const ne=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class ie extends Q{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ne(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ie.finalized=!0,ie.render=((e,t,s)=>{const n=s.scopeName,i=R.has(t),r=t instanceof ShadowRoot&&L&&e instanceof _,a=r&&!q.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=R.get(t);void 0===n&&(o(t,t.firstChild),R.set(t,n=new b(Object.assign({templateFactory:O},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=I(t.type,e);let n=V.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},V.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();L&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=R.get(l);R.delete(l),e.value instanceof y&&H(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),R.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},,,,,,,,,,,,,function(e,t,s){"use strict";function n(e){return function(t){var s=t.dispatch,n=t.getState;return function(t){return function(i){return"function"==typeof i?i(s,n,e):t(i)}}}}var i=n();i.withExtraArgument=n,t.a=i},function(e,t,s){"use strict";function n(e){var t,s=e.Symbol;return"function"==typeof s?s.observable?t=s.observable:(t=s("observable"),s.observable=t):t="@@observable",t}s.d(t,"a",function(){return n})},function(e,t,s){"use strict";
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const n=new WeakMap,i=e=>"function"==typeof e&&n.has(e),r=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t;for(;n!==s;){const t=n.nextSibling;e.removeChild(n),n=t}},a={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,h=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${h}`),u="$lit$";class p{constructor(e,t){this.parts=[],this.element=t;let s=-1,n=0;const i=[],r=t=>{const o=t.content,a=document.createTreeWalker(o,133,null,!1);let l=0;for(;a.nextNode();){s++;const t=a.currentNode;if(1===t.nodeType){if(t.hasAttributes()){const i=t.attributes;let r=0;for(let e=0;e<i.length;e++)i[e].value.indexOf(c)>=0&&r++;for(;r-- >0;){const i=e.strings[n],r=g.exec(i)[2],o=r.toLowerCase()+u,a=t.getAttribute(o).split(d);this.parts.push({type:"attribute",index:s,name:r,strings:a}),t.removeAttribute(o),n+=a.length-1}}"TEMPLATE"===t.tagName&&r(t)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(c)>=0){const r=t.parentNode,o=e.split(d),a=o.length-1;for(let e=0;e<a;e++)r.insertBefore(""===o[e]?f():document.createTextNode(o[e]),t),this.parts.push({type:"node",index:++s});""===o[a]?(r.insertBefore(f(),t),i.push(t)):t.data=o[a],n+=a}}else if(8===t.nodeType)if(t.data===c){const e=t.parentNode;null!==t.previousSibling&&s!==l||(s++,e.insertBefore(f(),t)),l=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(i.push(t),s--),n++}else{let e=-1;for(;-1!==(e=t.data.indexOf(c,e+1));)this.parts.push({type:"node",index:-1})}}};r(t);for(const e of i)e.parentNode.removeChild(e)}}const m=e=>-1!==e.index,f=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class y{constructor(e,t,s){this._parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this._parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this._parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=this.template.parts;let s=0,n=0;const i=e=>{const r=document.createTreeWalker(e,133,null,!1);let o=r.nextNode();for(;s<t.length&&null!==o;){const e=t[s];if(m(e))if(n===e.index){if("node"===e.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(o.previousSibling),this._parts.push(e)}else this._parts.push(...this.processor.handleAttributeExpressions(o,e.name,e.strings,this.options));s++}else n++,"TEMPLATE"===o.nodeName&&i(o.content),o=r.nextNode();else this._parts.push(void 0),s++}};return i(e),r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class _{constructor(e,t,s,n){this.strings=e,this.values=t,this.type=s,this.processor=n}getHTML(){const e=this.strings.length-1;let t="";for(let s=0;s<e;s++){const e=this.strings[s],n=g.exec(e);t+=n?e.substr(0,n.index)+n[1]+n[2]+u+n[3]+c:e+h}return t+this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const v=e=>null===e||!("object"==typeof e||"function"==typeof e);class S{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new w(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let n=0;n<t;n++){s+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(null!=e&&(Array.isArray(e)||"string"!=typeof e&&e[Symbol.iterator]))for(const t of e)s+="string"==typeof t?t:String(t);else s+="string"==typeof e?e:String(e)}}return s+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class w{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===a||v(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=a,e(this)}this.value!==a&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this._pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(f()),this.endNode=e.appendChild(f())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e._insert(this.startNode=f()),e._insert(this.endNode=f())}insertAfterPart(e){e._insert(this.startNode=f()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}const e=this._pendingValue;e!==a&&(v(e)?e!==this.value&&this._commitText(e):e instanceof _?this._commitTemplateResult(e):e instanceof Node?this._commitNode(e):Array.isArray(e)||e[Symbol.iterator]?this._commitIterable(e):e===l?(this.value=l,this.clear()):this._commitText(e))}_insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}_commitNode(e){this.value!==e&&(this.clear(),this._insert(e),this.value=e)}_commitText(e){const t=this.startNode.nextSibling;e=null==e?"":e,t===this.endNode.previousSibling&&3===t.nodeType?t.data=e:this._commitNode(document.createTextNode("string"==typeof e?e:String(e))),this.value=e}_commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof y&&this.value.template===t)this.value.update(e.values);else{const s=new y(t,e.processor,this.options),n=s._clone();s.update(e.values),this._commitNode(n),this.value=s}}_commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,n=0;for(const i of e)void 0===(s=t[n])&&(s=new b(this.options),t.push(s),0===n?s.appendIntoPart(this):s.insertAfterPart(t[n-1])),s.setValue(i),s.commit(),n++;n<t.length&&(t.length=n,this.clear(s&&s.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,s){if(this.value=void 0,this._pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=!!this._pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=e,this._pendingValue=a}}class P extends S{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends w{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this._pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this._boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this._pendingValue=e}commit(){for(;i(this._pendingValue);){const e=this._pendingValue;this._pendingValue=a,e(this)}if(this._pendingValue===a)return;const e=this._pendingValue,t=this.value,s=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||s);s&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),n&&(this._options=A(e),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=e,this._pendingValue=a}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */new class{handleAttributeExpressions(e,t,s,n){const i=t[0];return"."===i?new P(e,t.slice(1),s).parts:"@"===i?[new E(e,t.slice(1),n.eventContext)]:"?"===i?[new x(e,t.slice(1),s)]:new S(e,t,s).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function T(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const n=e.strings.join(c);return void 0===(s=t.keyString.get(n))&&(s=new p(e,e.getTemplateElement()),t.keyString.set(n,s)),t.stringsArray.set(e.strings,s),s}const O=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.0.0");const R=133;function k(e,t){const s=e.element.content,n=e.parts,i=document.createTreeWalker(s,R,null,!1);let r=U(n),o=n[r],a=-1,l=0;const c=[];let h=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===h&&(h=null),t.has(e)&&(c.push(e),null===h&&(h=e)),null!==h&&l++;void 0!==o&&o.index===a;)o.index=null!==h?-1:o.index-l,o=n[r=U(n,r)]}c.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,R,null,!1);for(;s.nextNode();)t++;return t},U=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const s=e[t];if(m(s))return t}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const j=(e,t)=>`${e}--${t}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),z=!1);const I=["html","svg"],L=new Set,B=(e,t,s)=>{L.add(s);const n=e.querySelectorAll("style");if(0===n.length)return void window.ShadyCSS.prepareTemplateStyles(t.element,s);const i=document.createElement("style");for(let e=0;e<n.length;e++){const t=n[e];t.parentNode.removeChild(t),i.textContent+=t.textContent}if((e=>{I.forEach(t=>{const s=O.get(j(t,e));void 0!==s&&s.keyString.forEach(e=>{const t=e.element.content,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),k(e,s)})})})(s),function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const n=e.element.content,i=e.parts;if(null===s||void 0===s)return void n.appendChild(t);const r=document.createTreeWalker(n,R,null,!1);let o=U(i),a=0,l=-1;for(;r.nextNode();)for(l++,r.currentNode===s&&(a=M(t),s.parentNode.insertBefore(t,s));-1!==o&&i[o].index===l;){if(a>0){for(;-1!==o;)i[o].index+=a,o=U(i,o);return}o=U(i,o)}}(t,i,t.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(t.element,s),window.ShadyCSS.nativeShadow){const s=t.element.content.querySelector("style");e.insertBefore(s.cloneNode(!0),e.firstChild)}else{t.element.content.insertBefore(i,t.element.content.firstChild);const e=new Set;e.add(i),k(t,e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
window.JSCompiler_renameProperty=((e,t)=>e);const q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),F={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:H},$=Promise.resolve(!0),D=1,W=4,J=8,K=16,G=32;class Z extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=$,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const n=this._attributeNameForProperty(s,t);void 0!==n&&(this._attributeToPropertyMap.set(n,s),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:F;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const n=this[e];this[s]=t,this.requestUpdate(e,n)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:H)(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,n=t.converter||q,i="function"==typeof n?n:n.fromAttribute;return i?i(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,n=t.converter;return(n&&n.toAttribute||q.toAttribute)(e,s)}initialize(){this._saveInstanceProperties()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|G,this._hasConnectedResolver?(this._hasConnectedResolver(),this._hasConnectedResolver=void 0):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:F;const n=this.constructor,i=n._attributeNameForProperty(e,s);if(void 0!==i){const e=n._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=this._updateState|J,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~J}}_attributeToProperty(e,t){if(this._updateState&J)return;const s=this.constructor,n=s._attributeToPropertyMap.get(e);if(void 0!==n){const e=s._classProperties.get(n)||F;this._updateState=this._updateState|K,this[n]=s._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~K}}requestUpdate(e,t){let s=!0;if(void 0!==e&&!this._changedProperties.has(e)){const n=this.constructor,i=n._classProperties.get(e)||F;n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&K||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):s=!1}return!this._hasRequestedUpdate&&s&&this._enqueueUpdate(),this.updateComplete}async _enqueueUpdate(){let e;this._updateState=this._updateState|W;const t=this._updatePromise;this._updatePromise=new Promise(t=>e=t),await t,this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);const s=this.performUpdate();null!=s&&"function"==typeof s.then&&await s,e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&G}get _hasRequestedUpdate(){return this._updateState&W}get hasUpdated(){return this._updateState&D}performUpdate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const e=this._changedProperties;this.update(e),this._markUpdated(),this._updateState&D||(this._updateState=this._updateState|D,this.firstUpdated(e)),this.updated(e)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~W}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}Z.finalized=!0;Y((e,t)=>e.querySelector(t)),Y((e,t)=>e.querySelectorAll(t));const X=(e,t,s)=>{Object.defineProperty(t,s,e)},Q=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function Y(e){return t=>(s,n)=>{const i={get(){return e(this.renderRoot,t)},enumerable:!0,configurable:!0};return void 0!==n?X(i,s,n):Q(i,s)}}const ee="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;Symbol();s.d(t,"a",function(){return se}),
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.0.1");const te=e=>e.flat?e.flat(1/0):function e(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let n=0,i=t.length;n<i;n++){const i=t[n];Array.isArray(i)?e(i,s):s.push(i)}return s}(e);class se extends Z{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){te(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}se.finalized=!0,se.render=((e,t,s)=>{const n=s.scopeName,i=V.has(t),r=t instanceof ShadowRoot&&z&&e instanceof _,a=r&&!L.has(n),l=a?document.createDocumentFragment():t;if(((e,t,s)=>{let n=V.get(t);void 0===n&&(o(t,t.firstChild),V.set(t,n=new b(Object.assign({templateFactory:T},s))),n.appendInto(t)),n.setValue(e),n.commit()})(e,l,Object.assign({templateFactory:(e=>t=>{const s=j(t.type,e);let n=O.get(s);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},O.set(s,n));let i=n.stringsArray.get(t.strings);if(void 0!==i)return i;const r=t.strings.join(c);if(void 0===(i=n.keyString.get(r))){const s=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(s,e),i=new p(t,s),n.keyString.set(r,i)}return n.stringsArray.set(t.strings,i),i})(n)},s)),a){const e=V.get(l);V.delete(l),e.value instanceof y&&B(l,e.value.template,n),o(t,t.firstChild),t.appendChild(l),V.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)})},,,,,function(e,t){e.exports=function(e){var t="[A-Za-z$_][0-9A-Za-z$_]*",s={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:s,contains:[]},r={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,n,e.REGEXP_MODE];var o=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:s,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,n,{begin:/[{,]\s*/,relevance:0,contains:[{begin:t+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:t,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+t+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:t},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:s,contains:o}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:t}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},function(e,t){e.exports=function(e){var t={begin:/[A-Z\_\.\-]+\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$"},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(font-face|page)",lexemes:"[a-z-]+",keywords:"font-face page"},{begin:"@",end:"[{;]",illegal:/:/,contains:[{className:"keyword",begin:/\w+/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,t]}]}}},function(e,t){e.exports=function(e){var t={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"meta",begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0},{begin:'b"',end:'"',skip:!0},{begin:"b'",end:"'",skip:!0},e.inherit(e.APOS_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null,className:null,contains:null,skip:!0})]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[t],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[t],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},t]}]}}},function(e,t){e.exports=function(e){var t={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},s={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,t,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,s,{className:"string",begin:/'/,end:/'/},t]}}},function(e,t){e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},,,,,,,,,,function(e,t){var s;s=function(){return this}();try{s=s||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(s=window)}e.exports=s},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]]);