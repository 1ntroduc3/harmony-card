/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,n,i){var o,r=arguments.length,s=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(r<3?o(s):r>3?o(t,n,s):o(t,n))||s);return r>3&&s&&Object.defineProperty(t,n,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},i=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${i}--\x3e`,r=new RegExp(`${i}|${o}`);class s{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],s=document.createTreeWalker(t.content,133,null,!1);let c=0,u=-1,h=0;const{strings:p,values:{length:m}}=e;for(;h<m;){const e=s.nextNode();if(null!==e){if(u++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let i=0;for(let e=0;e<n;e++)a(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=p[h],n=d.exec(t)[2],i=n.toLowerCase()+"$lit$",o=e.getAttribute(i);e.removeAttribute(i);const s=o.split(r);this.parts.push({type:"attribute",index:u,name:n,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(i)>=0){const i=e.parentNode,o=t.split(r),s=o.length-1;for(let t=0;t<s;t++){let n,r=o[t];if(""===r)n=l();else{const e=d.exec(r);null!==e&&a(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(r)}i.insertBefore(n,e),this.parts.push({type:"node",index:++u})}""===o[s]?(i.insertBefore(l(),e),n.push(e)):e.data=o[s],h+=s}}else if(8===e.nodeType)if(e.data===i){const t=e.parentNode;null!==e.previousSibling&&u!==c||(u++,t.insertBefore(l(),e)),c=u,this.parts.push({type:"node",index:u}),null===e.nextSibling?e.data="":(n.push(e),u--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(i,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const a=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:n},parts:i}=e,o=document.createTreeWalker(n,133,null,!1);let r=p(i),s=i[r],a=-1,c=0;const l=[];let d=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,r=p(i,r),s=i[r]}l.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},p=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(c(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const m=new WeakMap,f=e=>(...t)=>{const n=e(...t);return m.set(n,!0),n},g=e=>"function"==typeof e&&m.has(e),v={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class _{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let r,s=0,a=0,l=o.nextNode();for(;s<i.length;)if(r=i[s],c(r)){for(;a<r.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=n.pop(),l=o.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${i} `;class S{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let r=0;r<e;r++){const e=this.strings[r],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const a=d.exec(e);t+=null===a?e+(n?w:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==b&&(t=b.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=e=>null===e||!("object"==typeof e||"function"==typeof e),P=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new $(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!P(e))return e}let i="";for(let o=0;o<t;o++){i+=e[o];const t=n[o];if(void 0!==t){const e=t.value;if(x(e)||!P(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class ${constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||x(e)&&e===this.value||(this.value=e,g(e)||(this.committer.dirty=!0))}commit(){for(;g(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class T{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof S?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):P(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof _&&this.value.template===t)this.value.update(e.values);else{const n=new _(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,i=0;for(const o of e)n=t[i],void 0===n&&(n=new T(this.options),t.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(t[i-1])),n.setValue(o),n.commit(),i++;i<t.length&&(t.length=i,this.clear(n&&n.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class M extends C{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new E(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class E extends ${}let O=!1;(()=>{try{const e={get capture(){return O=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class A{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;g(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const N=e=>e&&(O?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function B(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(i);return n=t.keyString.get(o),void 0===n&&(n=new s(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const V=new Map,j=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const D=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
class{handleAttributeExpressions(e,t,n,i){const o=t[0];if("."===o){return new M(e,t.slice(1),n).parts}if("@"===o)return[new A(e,t.slice(1),i.eventContext)];if("?"===o)return[new k(e,t.slice(1),n)];return new C(e,t,n).parts}handleTextExpression(e){return new T(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const H=(e,...t)=>new S(e,t,"html",D)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,I=(e,t)=>`${e}--${t}`;let R=!0;void 0===window.ShadyCSS?R=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),R=!1);const Y=e=>t=>{const n=I(t.type,e);let o=V.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},V.set(n,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(i);if(r=o.keyString.get(a),void 0===r){const n=t.getTemplateElement();R&&window.ShadyCSS.prepareTemplateDom(n,e),r=new s(t,n),o.keyString.set(a,r)}return o.stringsArray.set(t.strings,r),r},U=["html","svg"],L=new Set,q=(e,t,n)=>{L.add(e);const i=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:r}=o;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const s=document.createElement("style");for(let e=0;e<r;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{U.forEach(t=>{const n=V.get(I(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),u(e,n)})})})(e);const a=i.content;n?function(e,t,n=null){const{element:{content:i},parts:o}=e;if(null==n)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let s=p(o),a=0,c=-1;for(;r.nextNode();){c++;for(r.currentNode===n&&(a=h(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=p(o,s);return}s=p(o,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),u(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},F=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:F};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const i=this._attributeNameForProperty(n,t);void 0!==i&&(this._attributeToPropertyMap.set(i,n),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=F){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,i=t.converter||z,o="function"==typeof i?i:i.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,i=t.converter;return(i&&i.toAttribute||z.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=W){const i=this.constructor,o=i._attributeNameForProperty(e,n);if(void 0!==o){const e=i._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,i=n._attributeToPropertyMap.get(e);if(void 0!==i){const e=n.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let i=!0;if(void 0!==e){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
const Z=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function X(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):K(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class ee{constructor(e,t){if(t!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const n=t.reduce((t,n,i)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[i+1],e[0]);return new ee(n,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ne={};class ie extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),i=[];n.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),Q)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ne}}ie.finalized=!0,ie.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,r=j.has(t),s=R&&11===t.nodeType&&!!t.host,a=s&&!L.has(o),c=a?document.createDocumentFragment():t;if(((e,t,i)=>{let o=j.get(t);void 0===o&&(n(t,t.firstChild),j.set(t,o=new T(Object.assign({templateFactory:B},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:Y(o)},i)),a){const e=j.get(c);j.delete(c);const i=e.value instanceof _?e.value.template:void 0;q(o,c,i),n(t,t.firstChild),t.appendChild(c),j.set(t,e)}!r&&s&&window.ShadyCSS.styleElement(t.host)};var oe=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,re="[^\\s]+",se=/\[([^]*?)\]/gm;function ae(e,t){for(var n=[],i=0,o=e.length;i<o;i++)n.push(e[i].substr(0,t));return n}var ce=function(e){return function(t,n){var i=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function le(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var i=0,o=t;i<o.length;i++){var r=o[i];for(var s in r)e[s]=r[s]}return e}var de=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ue=["January","February","March","April","May","June","July","August","September","October","November","December"],he=ae(ue,3),pe={dayNamesShort:ae(de,3),dayNames:de,monthNamesShort:he,monthNames:ue,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},me=le({},pe),fe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ge={D:function(e){return String(e.getDate())},DD:function(e){return fe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return fe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return fe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return fe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return fe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return fe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return fe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return fe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return fe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return fe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return fe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(Math.floor(Math.abs(t)/60),2)+":"+fe(Math.abs(t)%60,2)}},ve=function(e){return+e-1},ye=[null,"[1-9]\\d?"],_e=[null,re],be=["isPm",re,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],we=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],Se=(ce("monthNamesShort"),ce("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,n){if(void 0===t&&(t=Se.default),void 0===n&&(n={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=Se[t]||t).replace(se,(function(e,t){return i.push(t),"@@@"}));var o=le(le({},me),n);return(t=t.replace(oe,(function(t){return ge[t](e,o)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var Pe=["closed","locked","off"],Ce=function(e,t,n,i){i=i||{},n=null==n?{}:n;var o=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return o.detail=n,e.dispatchEvent(o),o},$e=function(e){Ce(window,"haptic",e)},Te=function(e,t,n,i){var o;if("double_tap"===i&&n.double_tap_action?o=n.double_tap_action:"hold"===i&&n.hold_action?o=n.hold_action:"tap"===i&&n.tap_action&&(o=n.tap_action),o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||($e("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(n.entity||n.camera_image)&&Ce(e,"hass-more-info",{entityId:n.entity?n.entity:n.camera_image});break;case"navigate":o.navigation_path&&function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),Ce(window,"location-changed",{replace:n})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":n.entity&&(function(e,t){(function(e,t,n){void 0===n&&(n=!0);var i,o=function(e){return e.substr(0,e.indexOf("."))}(t),r="group"===o?"homeassistant":o;switch(o){case"lock":i=n?"unlock":"lock";break;case"cover":i=n?"open_cover":"close_cover";break;default:i=n?"turn_on":"turn_off"}e.callService(r,i,{entity_id:t})})(e,t,Pe.includes(e.states[t].state))}(t,n.entity),$e("success"));break;case"call-service":if(!o.service)return void $e("failure");var r=o.service.split(".",2);t.callService(r[0],r[1],o.service_data),$e("success")}};function ke(e){return void 0!==e&&"none"!==e.action}
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
const Me=new WeakMap,Ee=f(e=>t=>{if(!(t instanceof $)||t instanceof E||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:n}=t,{style:i}=n.element;let o=Me.get(t);void 0===o&&(i.cssText=n.strings.join(" "),Me.set(t,o=new Set)),o.forEach(t=>{t in e||(o.delete(t),-1===t.indexOf("-")?i[t]=null:i.removeProperty(t))});for(const t in e)o.add(t),-1===t.indexOf("-")?i[t]=e[t]:i.setProperty(t,e[t])}),Oe=te`
  :host {
    overflow: visible !important;
    display: block;
    --mmp-scale: var(--mini-media-player-scale, 1);
    --mmp-unit: calc(var(--mmp-scale) * 40px);
  }

  :host ::slotted(.card-content) {
    padding: 16px;
  }

  .ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .label {
    margin: 0 8px;
  }
  ha-icon {
    width: calc(var(--mmp-unit) * .6);
    height: calc(var(--mmp-unit) * .6);
  }
  ha-icon-button {
    width: var(--mmp-unit);
    height: var(--mmp-unit);
    color: var(--mmp-text-color, var(--primary-text-color));
    transition: color .25s;
  }
  ha-icon-button[color] {
    color: var(--mmp-accent-color, var(--accent-color)) !important;
    opacity: 1 !important;
  }
  ha-icon-button[inactive] {
    opacity: .5;
  }
  ha-icon-button[outlined] {
    color: var(--accent-color) !important;
  }

  .play-pause {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .activities {
      display: flex;
      flex-wrap: wrap;
  }
  .activities-icons {
    justify-content: space-evenly;
  }
  .activities>mwc-button:not(:first-child) {
    flex-grow: 1;
  }

  .remote {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: auto auto auto;
      align-items: center;
      justify-content: center;
      text-align: center;
  }

  .xbox-buttons {
    display: grid;
    grid-template-columns: auto auto 10px auto auto auto auto;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .volume-controls {
      display: flex;
      justify-content: center;
  }

  .volume-controls>paper-slider {
    flex: 1;
  }
`,Ae={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let Ne=class extends ie{setConfig(e){this._config=e}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _volume_entity(){return this._config&&this._config.volume_entity||""}render(){if(!this.hass)return H``;const e=Object.keys(this.hass.states).filter(e=>"remote"===e.substr(0,e.indexOf("."))),t=Object.keys(this.hass.states).filter(e=>"media_player"===e.substr(0,e.indexOf(".")));return H`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ae.required.icon}></ha-icon>
            <div class="title">${Ae.required.name}</div>
          </div>
          <div class="secondary">${Ae.required.secondary}</div>
        </div>
        ${Ae.required.show?H`
              <div class="values">
                <paper-dropdown-menu
                  label="Harmony Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${e.indexOf(this._entity)}>
                    ${e.map(e=>H`
                        <paper-item>${e}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <div class="values">
                <paper-dropdown-menu
                  label="Volume Entity"
                  @value-changed=${this._valueChanged}
                  .configValue=${"volume_entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._volume_entity)}>
                    ${t.map(e=>H`
                        <paper-item>${e}</paper-item>
                      `)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Ae.appearance.icon}></ha-icon>
            <div class="title">${Ae.appearance.name}</div>
          </div>
          <div class="secondary">${Ae.appearance.secondary}</div>
        </div>
        ${Ae.appearance.show?H`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
              </div>
            `:""}
      </div>
    `}_toggleOption(e){this._toggleThing(e,Ae)}_toggleThing(e,t){const n=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=n,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Ce(this,"config-changed",{config:this._config}))}static get styles(){return te`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};e([X()],Ne.prototype,"hass",void 0),e([X()],Ne.prototype,"_config",void 0),e([X()],Ne.prototype,"_toggle",void 0),Ne=e([Z("harmony-card-editor")],Ne);const Be=(e,t)=>{if(e===t)return!0;if(e&&t&&"object"==typeof e&&"object"==typeof t){if(e.constructor!==t.constructor)return!1;let n,i;if(Array.isArray(e)){if(i=e.length,i!==t.length)return!1;for(n=i;0!=n--;)if(!Be(e[n],t[n]))return!1;return!0}if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;for(n of e.entries())if(!Be(n[1],t.get(n[0])))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(n of e.entries())if(!t.has(n[0]))return!1;return!0}if(ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(i=e.length,i!==t.length)return!1;for(n=i;0!=n--;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const o=Object.keys(e);if(i=o.length,i!==Object.keys(t).length)return!1;for(n=i;0!=n--;)if(!Object.prototype.hasOwnProperty.call(t,o[n]))return!1;for(n=i;0!=n--;){const i=o[n];if(!Be(e[i],t[i]))return!1}return!0}return e!=e&&t!=t},Ve="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,je=(e,t)=>{console.log(e,t)};class De extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.cancelled=!1,this.isRepeating=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ve?"100px":"50px",height:Ve?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{this.cancelled=!0,this.holdTimeout&&(this.stopAnimation(),clearTimeout(this.holdTimeout),this.holdTimeout=void 0,this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1))},{passive:!0})})}bind(e,t){e.actionHandler&&Be(t,e.actionHandler.options)||(e.actionHandler?(e.removeEventListener("touchstart",e.actionHandler.start),e.removeEventListener("touchend",e.actionHandler.end),e.removeEventListener("touchcancel",e.actionHandler.end),e.removeEventListener("mousedown",e.actionHandler.start),e.removeEventListener("click",e.actionHandler.end),e.removeEventListener("keyup",e.actionHandler.handleEnter)):e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1}),e.actionHandler={options:t},e.actionHandler.start=n=>{let i,o;je("START",n),this.cancelled=!1,n.touches?(i=n.touches[0].pageX,o=n.touches[0].pageY):(i=n.pageX,o=n.pageY),t.hasHold&&(this.held=!1,this.holdTimeout=window.setTimeout(()=>{this.startAnimation(i,o),this.held=!0,je("TIMER",n),t.repeat&&!this.isRepeating&&(this.isRepeating=!0,this.repeatTimeout=window.setInterval(()=>{Ce(e,"action",{action:"hold"})},t.repeat))},this.holdTime))},e.actionHandler.end=e=>{if(je("END",e),["touchend","touchcancel"].includes(e.type)&&this.cancelled)return void(this.isRepeating&&this.repeatTimeout&&(clearInterval(this.repeatTimeout),this.isRepeating=!1));const n=e.target;e.cancelable&&e.preventDefault(),t.hasHold&&(clearTimeout(this.holdTimeout),this.isRepeating&&this.repeatTimeout&&clearInterval(this.repeatTimeout),this.isRepeating=!1,this.stopAnimation(),this.holdTimeout=void 0),t.hasHold&&this.held?t.repeat||Ce(n,"action",{action:"hold"}):t.hasDoubleClick?"click"===e.type&&e.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Ce(n,"action",{action:"tap"})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ce(n,"action",{action:"double_tap"})):Ce(n,"action",{action:"tap"})},e.actionHandler.handleEnter=e=>{"13"===e.code&&e.currentTarget.actionHandler.end(e)},e.addEventListener("touchstart",e.actionHandler.start,{passive:!0}),e.addEventListener("touchend",e.actionHandler.end),e.addEventListener("touchcancel",e.actionHandler.end),e.addEventListener("mousedown",e.actionHandler.start,{passive:!0}),e.addEventListener("click",e.actionHandler.end),e.addEventListener("keyup",e.actionHandler.handleEnter))}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-harmony",De);const He=(e,t)=>{const n=(()=>{const e=document.body;if(e.querySelector("action-handler-harmony"))return e.querySelector("action-handler-harmony");const t=document.createElement("action-handler-harmony");return e.appendChild(t),t})();n&&n.bind(e,t)},Ie=f((e={})=>t=>{He(t.committer.element,e)}),Re={0:{command:"0",icon:"mdi:numeric-0-circle",hide:!1},1:{command:"1",icon:"mdi:numeric-1-circle",hide:!1},2:{command:"2",icon:"mdi:numeric-2-circle",hide:!1},3:{command:"3",icon:"mdi:numeric-3-circle",hide:!1},4:{command:"4",icon:"mdi:numeric-4-circle",hide:!1},5:{command:"5",icon:"mdi:numeric-5-circle",hide:!1},6:{command:"6",icon:"mdi:numeric-6-circle",hide:!1},7:{command:"7",icon:"mdi:numeric-7-circle",hide:!1},8:{command:"8",icon:"mdi:numeric-8-circle",hide:!1},9:{command:"9",icon:"mdi:numeric-9-circle",hide:!1},volume_down:{command:"VolumeDown",icon:"mdi:volume-medium",hide:!1},volume_up:{command:"VolumeUp",icon:"mdi:volume-high",hide:!1},volume_mute:{command:"Mute",icon:"mdi:volume-off",hide:!1},skip_back:{command:"SkipBack",icon:"mdi:skip-previous",hide:!1},play:{command:"Play",icon:"mdi:play",hide:!1},pause:{command:"Pause",icon:"mdi:pause",hide:!1},skip_forward:{command:"SkipForward",icon:"mdi:skip-next",hide:!1},dpad_up:{command:"DirectionUp",icon:"mdi:chevron-up-circle",hide:!1},dpad_down:{command:"DirectionDown",icon:"mdi:chevron-down-circle",hide:!1},dpad_left:{command:"DirectionLeft",icon:"mdi:chevron-left-circle",hide:!1},dpad_right:{command:"DirectionRight",icon:"mdi:chevron-right-circle",hide:!1},dpad_center:{command:"OK",icon:"mdi:checkbox-blank-circle",hide:!1},xbox:{command:"Xbox",icon:"mdi:microsoft-xbox",hide:!1},back:{command:"Back",icon:"mdi:undo-variant",hide:!1},a:{command:"A",icon:"mdi:alpha-a-circle",hide:!1,color:"#2d9f1c"},b:{command:"B",icon:"mdi:alpha-b-circle",hide:!1,color:"#e43308"},x:{command:"X",icon:"mdi:alpha-x-circle",hide:!1,color:"#003bbd"},y:{command:"Y",icon:"mdi:alpha-y-circle",hide:!1,color:"#f1c70f"}};var Ye={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Ue={common:Ye},Le={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},qe={common:Le},ze={en:Object.freeze({__proto__:null,common:Ye,default:Ue}),nb:Object.freeze({__proto__:null,common:Le,default:qe})};var Fe=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===We}(e)}(e)};var We="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function Je(e,t){return!1!==t.clone&&t.isMergeableObject(e)?Qe((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function Ze(e,t,n){return e.concat(t).map((function(e){return Je(e,n)}))}function Ke(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function Xe(e,t){try{return t in e}catch(e){return!1}}function Ge(e,t,n){var i={};return n.isMergeableObject(e)&&Ke(e).forEach((function(t){i[t]=Je(e[t],n)})),Ke(t).forEach((function(o){(function(e,t){return Xe(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,o)||(Xe(e,o)&&n.isMergeableObject(t[o])?i[o]=function(e,t){if(!t.customMerge)return Qe;var n=t.customMerge(e);return"function"==typeof n?n:Qe}(o,n)(e[o],t[o],n):i[o]=Je(t[o],n))})),i}function Qe(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||Ze,n.isMergeableObject=n.isMergeableObject||Fe,n.cloneUnlessOtherwiseSpecified=Je;var i=Array.isArray(t);return i===Array.isArray(e)?i?n.arrayMerge(e,t,n):Ge(e,t,n):Je(t,n)}Qe.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,n){return Qe(e,n,t)}),{})};var et=Qe;console.info(`%c  HARMONY-CARD \n%c  ${function(e,t="",n=""){const i=e.split(".")[0],o=e.split(".")[1],r=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");var s;try{s=ze[r][i][o]}catch(e){s=ze.en[i][o]}return void 0===s&&(s=ze.en[i][o]),""!==t&&""!==n&&(s=s.replace(t,n)),s}("common.version")} 2    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let tt=class extends ie{static async getConfigElement(){return document.createElement("harmony-card-editor")}static getStubConfig(){return{}}setConfig(e){if(!e.entity||"remote"!==e.entity.split(".")[0])throw new Error("Specify an entity from within the remote domain for a harmony hub.");e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),this.config=Object.assign({name:""},e)}preventBubbling(e){e.stopPropagation(),e.cancelBubble=!0}harmonyCommand(e,t){var n,i,o,r;this.preventBubbling(e),null==t||"off"==t||"turn_off"==t?null===(n=this.hass)||void 0===n||n.callService("remote","turn_off",{entity_id:null===(i=this.config)||void 0===i?void 0:i.entity}):null===(o=this.hass)||void 0===o||o.callService("remote","turn_on",{entity_id:null===(r=this.config)||void 0===r?void 0:r.entity,activity:t})}volumeCommand(e,t,n){var i,o,r;if(this.preventBubbling(e),null===(i=this.config)||void 0===i?void 0:i.volume_entity){const e={entity_id:null===(o=this.config)||void 0===o?void 0:o.volume_entity};null===(r=this.hass)||void 0===r||r.callService("media_player",t,Object.assign(e,n||{}))}}shouldUpdate(e){return!!this.config&&function(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var i=t.get("hass");return!i||i.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){if(!this.config||!this.hass)return H``;const e=this.hass.states[this.config.entity],t=e.state,n=e.attributes.current_activity,i=this.config.activities.find(e=>e.name===n),o=null==i?void 0:i.device,r=this.computeButtonConfig(this.config,i);return H`
      <ha-card
        style=${this.computeStyles()}
        .header=${this.config.name}
        aria-label=${"Harmony: "+this.config.entity}
      >
        <div class="card-content">
            ${this.renderActivityButtons(this.config,t,n)}
            ${this.renderVolumeControls(this.hass,this.config,r,i)}
            ${this.renderKeyPad(this.config,r,i,o)}

            <div class="play-pause">
                ${this.renderIconButton(r.skip_back,o)}
                ${this.renderIconButton(r.play,o)}
                ${this.renderIconButton(r.pause,o)}
                ${this.renderIconButton(r.skip_forward,o)}
            </div>

            <div class="remote">
                ${this.renderIconButton(r.dpad_left,o,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_right,o,{"grid-column":"3","grid-row":"2"})}
                ${this.renderIconButton(r.dpad_up,o,{"grid-column":"2","grid-row":"1"})}
                ${this.renderIconButton(r.dpad_down,o,{"grid-column":"2","grid-row":"3"})}
                ${this.renderIconButton(r.dpad_center,o,{"grid-column":"2","grid-row":"2"})}        
            </div>

            <div class="xbox-buttons">
                ${this.renderIconButton(r.xbox,o,{"grid-column":"1","grid-row":"2"})}
                ${this.renderIconButton(r.back,o,{"grid-column":"2","grid-row":"2"})}
                ${this.renderIconButton(r.a,o,{"grid-column":"4","grid-row":"2"})}
                ${this.renderIconButton(r.b,o,{"grid-column":"5","grid-row":"2"})}
                ${this.renderIconButton(r.x,o,{"grid-column":"6","grid-row":"2"})}
                ${this.renderIconButton(r.y,o,{"grid-column":"7","grid-row":"2"})}
            </div>
        </div>
      </ha-card>
    `}renderActivityButtons(e,t,n){if(void 0!==e.hide_activities&&e.hide_activities)return H``;const i=e.show_activities_icons?"activities activities-icons":"activities";return H`
        <div class="${i}">
            ${this.renderActivityButton("off"===t,"turn_off","off",e.show_activities_icons,"mdi:power")}
            ${e.activities.map(t=>H`
                ${this.renderActivityButton(n===t.name,t.name,t.name,e.show_activities_icons,t.icon)}
              `)}
        </div>
    `}renderActivityButton(e,t,n,i=!1,o){return H`
           ${i&&o?H`
              <ha-icon-button
                icon="${o}"
                ?outlined="${e}"
                @click="${e=>this.harmonyCommand(e,t)}"
                @touchstart="${e=>this.preventBubbling(e)}"
              ></ha-icon-button>
            `:H`
              <mwc-button
                ?outlined="${e}"
                label="${n}"
                @click="${e=>this.harmonyCommand(e,t)}"
                @touchstart="${e=>this.preventBubbling(e)}"
              ></mwc-button>
            `}
        `}renderKeyPad(e,t,n,i){return(void 0===(null==n?void 0:n.hide_keyPad)||(null==n?void 0:n.hide_keyPad))&&(void 0===e.hide_keyPad||e.hide_keyPad)?H``:this.renderKeyPadButton(t,i)}renderKeyPadButton(e,t){return H`
        <div class="remote">
            ${this.renderIconButton(e[1],t,{"grid-column":"1","grid-row":"1"})}
            ${this.renderIconButton(e[2],t,{"grid-column":"2","grid-row":"1"})}
            ${this.renderIconButton(e[3],t,{"grid-column":"3","grid-row":"1"})}
            ${this.renderIconButton(e[4],t,{"grid-column":"1","grid-row":"2"})}
            ${this.renderIconButton(e[5],t,{"grid-column":"2","grid-row":"2"})}
            ${this.renderIconButton(e[6],t,{"grid-column":"3","grid-row":"2"})}
            ${this.renderIconButton(e[7],t,{"grid-column":"1","grid-row":"3"})}
            ${this.renderIconButton(e[8],t,{"grid-column":"2","grid-row":"3"})}
            ${this.renderIconButton(e[9],t,{"grid-column":"3","grid-row":"3"})}
            ${this.renderIconButton(e[0],t,{"grid-column":"2","grid-row":"4"})}
        </div>
        `}renderIconButton(e,t,n){var i;if(!0===e.hide)return H``;const o=Object.assign(n||{},{color:e.color});return H`
            <ha-icon-button
                icon="${e.icon}"
                style="${Ee(o)}"
                .hass="${this.hass}"
                @action=${n=>this._handleButtonAction(n,e,e.device||t,e.command||"")}
                .actionHandler=${Ie({hasHold:ke(e.hold_action),hasDoubleClick:ke(e.double_tap_action),repeat:null===(i=e.hold_action)||void 0===i?void 0:i.repeat})}
                >
            </ha-icon-button>
        `}renderVolumeControls(e,t,n,i){return(null==i?void 0:i.volume_entity)?this.renderMediaPlayerVolumeControls(e,null==i?void 0:i.volume_entity,n):(null==i?void 0:i.volume_device)?this.renderDeviceVolumeControls(null==i?void 0:i.volume_device,n):t.volume_entity?this.renderMediaPlayerVolumeControls(e,t.volume_entity,n):t.volume_device?this.renderDeviceVolumeControls(t.volume_device,n):H``}renderMediaPlayerVolumeControls(e,t,n){const i=e.states[t],o=i.attributes.volume_level,r=i.attributes.is_volume_muted,s=Object.assign({},{color:n.volume_down.color}),a=Object.assign({},{color:n.volume_up.color}),c=Object.assign({},{color:n.volume_mute.color});return H`
            <div class="volume-controls">
            ${this.renderIconButton(n.volume_down,t,s)}
            ${this.renderIconButton(n.volume_up,t,a)}
                <paper-slider
                    @change=${e=>this.volumeCommand(e,"volume_set",{volume_level:e.target.value/100})}
                    @click=${e=>e.stopPropagation()}
                    @touchstart="${e=>this.preventBubbling(e)}"
                    ?disabled=${r}
                    min=0 max=100
                    value=${100*o}
                    dir=${"ltr"}
                    ignore-bar-touch pin>
                </paper-slider>
            ${this.renderIconButton(n.volume_down,t,c)}
            </div>`}renderDeviceVolumeControls(e,t){return H`
            <div class="volume-controls">
                ${this.renderIconButton(t.volume_down,e)}
                ${this.renderIconButton(t.volume_up,e)}
                ${this.renderIconButton(t.volume_mute,e)}
            </div>`}_handleButtonAction(e,t,n,i){if(this.preventBubbling(e),this.hass&&t&&e.detail.action){switch(e.detail.action){case"tap":const e={action:"call-service",service:"remote.send_command",service_data:{entity_id:this.config.entity,command:i,device:n}};t.tap_action=t.tap_action?t.tap_action:e}Te(this,this.hass,Object.assign(Object.assign({},t),{entity:this.config.entity}),e.detail.action)}}computeStyles(){var e;const t=(null===(e=this.config)||void 0===e?void 0:e.scale)||1;return Ee({"--mmp-unit":40*t+"px","--mdc-icon-size":24*t+"px"})}computeButtonConfig(e,t){let n=et(Re,e.buttons||{});return t&&(n=et(n,t.buttons||{})),(null==t?void 0:t.volume_entity)?n=this.computeVolumeBtnConfig(n,t.volume_entity,"media"):(null==t?void 0:t.volume_device)?n=this.computeVolumeBtnConfig(n,t.volume_device,"remote"):e.volume_entity?n=this.computeVolumeBtnConfig(n,e.volume_entity,"media"):e.volume_device&&(n=this.computeVolumeBtnConfig(n,e.volume_device,"remote")),n}computeVolumeBtnConfig(e,t,n){return e.volume_down.tap_action=this.getAction(n,e,"volume_down",t,!1),e.volume_down.hold_action=this.getAction(n,e,"volume_down",t,!0),e.volume_up.tap_action=this.getAction(n,e,"volume_up",t,!1),e.volume_up.hold_action=this.getAction(n,e,"volume_up",t,!0),e.volume_mute.tap_action=this.getAction(n,e,"volume_mute",t,!1),e}getAction(e,t,n,i,o=!1){const r={entity_id:"remote"===e?this.config.entity:i};"remote"===e&&(r.command=t[n].command,r.device=i);const s={action:"call-service",service:"remote"===e?"remote.send_command":"media_player."+n,service_data:r};return o&&(s.repeat=500),s}static get styles(){return[te`
            .warning {
                display: block;
                color: black;
                background-color: #fce588;
                padding: 8px;
            }
            
            div {
                font-size:16px;
            }`,Oe]}};e([X()],tt.prototype,"hass",void 0),e([function(e){return X({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}()],tt.prototype,"config",void 0),tt=e([Z("harmony-card")],tt);export{tt as HarmonyCard};
