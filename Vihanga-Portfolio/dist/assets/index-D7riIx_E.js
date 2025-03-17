import{j as w,m as qe}from"./animations-D0yIMW5C.js";import{a as tc,r as Te,R as fi,L as $r,u as nc,B as ic}from"./vendor-DF66QNvA.js";import{C as sc,a as rc,S as oc,M as ac,X as cc,b as lc,c as hc,d as uc,P as dc,e as fc,I as pc,F as gc,T as mc}from"./ui-fDkHzqXR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=i(r);fetch(r.href,c)}})();var zr,Hs=tc;zr=Hs.createRoot,Hs.hydrateRoot;const Gr=Te.createContext(void 0),yc=({children:t})=>{const[e,i]=Te.useState(()=>{if(typeof window<"u"){const r=localStorage.getItem("theme");return r==="light"||r==="dark"?r:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}return"light"});Te.useEffect(()=>{const r=window.document.documentElement;r.classList.remove("light","dark"),r.classList.add(e),localStorage.setItem("theme",e)},[e]);const s=()=>{i(r=>r==="light"?"dark":"light")};return w.jsx(Gr.Provider,{value:{theme:e,toggleTheme:s},children:t})},vc=()=>{const t=Te.useContext(Gr);if(t===void 0)throw new Error("useTheme must be used within a ThemeProvider");return t},_c=()=>{};var $s={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=function(t){const e=[];let i=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[i++]=r:r<2048?(e[i++]=r>>6|192,e[i++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[i++]=r>>18|240,e[i++]=r>>12&63|128,e[i++]=r>>6&63|128,e[i++]=r&63|128):(e[i++]=r>>12|224,e[i++]=r>>6&63|128,e[i++]=r&63|128)}return e},wc=function(t){const e=[];let i=0,s=0;for(;i<t.length;){const r=t[i++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const c=t[i++];e[s++]=String.fromCharCode((r&31)<<6|c&63)}else if(r>239&&r<365){const c=t[i++],l=t[i++],u=t[i++],g=((r&7)<<18|(c&63)<<12|(l&63)<<6|u&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const c=t[i++],l=t[i++];e[s++]=String.fromCharCode((r&15)<<12|(c&63)<<6|l&63)}}return e.join("")},qr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const c=t[r],l=r+1<t.length,u=l?t[r+1]:0,g=r+2<t.length,T=g?t[r+2]:0,A=c>>2,k=(c&3)<<4|u>>4;let R=(u&15)<<2|T>>6,P=T&63;g||(P=64,l||(R=64)),s.push(i[A],i[k],i[R],i[P])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wr(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wc(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const c=i[t.charAt(r++)],u=r<t.length?i[t.charAt(r)]:0;++r;const T=r<t.length?i[t.charAt(r)]:64;++r;const k=r<t.length?i[t.charAt(r)]:64;if(++r,c==null||u==null||T==null||k==null)throw new Ic;const R=c<<2|u>>4;if(s.push(R),T!==64){const P=u<<4&240|T>>2;if(s.push(P),k!==64){const C=T<<6&192|k;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bc=function(t){const e=Wr(t);return qr.encodeByteArray(e,!0)},ln=function(t){return bc(t).replace(/\./g,"")},Kr=function(t){try{return qr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=()=>Tc().__FIREBASE_DEFAULTS__,Ac=()=>{if(typeof process>"u"||typeof $s>"u")return;const t=$s.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kc=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Kr(t[1]);return e&&JSON.parse(e)},Ei=()=>{try{return _c()||Ec()||Ac()||kc()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jr=t=>{var e,i;return(i=(e=Ei())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[t]},Xr=t=>{const e=Jr(t);if(!e)return;const i=e.lastIndexOf(":");if(i<=0||i+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(i+1),10);return e[0]==="["?[e.substring(1,i-1),s]:[e.substring(0,i),s]},Yr=()=>{var t;return(t=Ei())===null||t===void 0?void 0:t.config},Zr=t=>{var e;return(e=Ei())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,s)=>{i?this.reject(i):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,c=t.sub||t.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ln(JSON.stringify(i)),ln(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function Cc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Nc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xc(){const t=Y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function to(){try{return typeof indexedDB=="object"}catch{return!1}}function no(){return new Promise((t,e)=>{try{let i=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var c;e(((c=r.error)===null||c===void 0?void 0:c.message)||"")}}catch(i){e(i)}})}function Pc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="FirebaseError";class ae extends Error{constructor(e,i,s){super(i),this.code=e,this.customData=s,this.name=Oc,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ye.prototype.create)}}class Ye{constructor(e,i,s){this.service=e,this.serviceName=i,this.errors=s}create(e,...i){const s=i[0]||{},r=`${this.service}/${e}`,c=this.errors[e],l=c?Dc(c,s):"Error",u=`${this.serviceName}: ${l} (${r}).`;return new ae(r,u,s)}}function Dc(t,e){return t.replace(Lc,(i,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Lc=/\{\$([^}]+)}/g;function Mc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fe(t,e){if(t===e)return!0;const i=Object.keys(t),s=Object.keys(e);for(const r of i){if(!s.includes(r))return!1;const c=t[r],l=e[r];if(zs(c)&&zs(l)){if(!Fe(c,l))return!1}else if(c!==l)return!1}for(const r of s)if(!i.includes(r))return!1;return!0}function zs(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){const e=[];for(const[i,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jc(t,e){const i=new Uc(t,e);return i.subscribe.bind(i)}class Uc{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,s){let r;if(e===void 0&&i===void 0&&s===void 0)throw new Error("Missing Observer.");Fc(e,["next","error","complete"])?r=e:r={next:e,error:i,complete:s},r.next===void 0&&(r.next=ei),r.error===void 0&&(r.error=ei),r.complete===void 0&&(r.complete=ei);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Fc(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function ei(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=1e3,Vc=2,Hc=4*60*60*1e3,$c=.5;function Gs(t,e=Bc,i=Vc){const s=e*Math.pow(i,t),r=Math.round($c*s*(Math.random()-.5)*2);return Math.min(Hc,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class oe{constructor(e,i,s){this.name=e,this.instanceFactory=i,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const s=new Sc;if(this.instancesDeferred.set(i,s),this.isInitialized(i)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:i});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const s=this.normalizeInstanceIdentifier(e?.identifier),r=(i=e?.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(c){if(r)return null;throw c}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wc(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[i,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(i);try{const c=this.getOrInitializeService({instanceIdentifier:r});s.resolve(c)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:i});for(const[c,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(c);s===u&&l.resolve(r)}return r}onInit(e,i){var s;const r=this.normalizeInstanceIdentifier(i),c=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;c.add(e),this.onInitCallbacks.set(r,c);const l=this.instances.get(r);return l&&e(l,r),()=>{c.delete(e)}}invokeOnInitCallbacks(e,i){const s=this.onInitCallbacks.get(i);if(s)for(const r of s)try{r(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gc(e),options:i}),this.instances.set(e,s),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gc(t){return t===ze?void 0:t}function Wc(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new zc(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(D||(D={}));const Kc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Jc=D.INFO,Xc={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Yc=(t,e,...i)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Xc[e];if(r)console[r](`[${s}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class In{constructor(e){this.name=e,this._logLevel=Jc,this._logHandler=Yc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Zc=(t,e)=>e.some(i=>t instanceof i);let Ws,qs;function Qc(){return Ws||(Ws=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function el(){return qs||(qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const io=new WeakMap,pi=new WeakMap,so=new WeakMap,ti=new WeakMap,Ai=new WeakMap;function tl(t){const e=new Promise((i,s)=>{const r=()=>{t.removeEventListener("success",c),t.removeEventListener("error",l)},c=()=>{i(je(t.result)),r()},l=()=>{s(t.error),r()};t.addEventListener("success",c),t.addEventListener("error",l)});return e.then(i=>{i instanceof IDBCursor&&io.set(i,t)}).catch(()=>{}),Ai.set(e,t),e}function nl(t){if(pi.has(t))return;const e=new Promise((i,s)=>{const r=()=>{t.removeEventListener("complete",c),t.removeEventListener("error",l),t.removeEventListener("abort",l)},c=()=>{i(),r()},l=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",c),t.addEventListener("error",l),t.addEventListener("abort",l)});pi.set(t,e)}let gi={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return pi.get(t);if(e==="objectStoreNames")return t.objectStoreNames||so.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return je(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function il(t){gi=t(gi)}function sl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const s=t.call(ni(this),e,...i);return so.set(s,e.sort?e.sort():[e]),je(s)}:el().includes(t)?function(...e){return t.apply(ni(this),e),je(io.get(this))}:function(...e){return je(t.apply(ni(this),e))}}function rl(t){return typeof t=="function"?sl(t):(t instanceof IDBTransaction&&nl(t),Zc(t,Qc())?new Proxy(t,gi):t)}function je(t){if(t instanceof IDBRequest)return tl(t);if(ti.has(t))return ti.get(t);const e=rl(t);return e!==t&&(ti.set(t,e),Ai.set(e,t)),e}const ni=t=>Ai.get(t);function ro(t,e,{blocked:i,upgrade:s,blocking:r,terminated:c}={}){const l=indexedDB.open(t,e),u=je(l);return s&&l.addEventListener("upgradeneeded",g=>{s(je(l.result),g.oldVersion,g.newVersion,je(l.transaction),g)}),i&&l.addEventListener("blocked",g=>i(g.oldVersion,g.newVersion,g)),u.then(g=>{c&&g.addEventListener("close",()=>c()),r&&g.addEventListener("versionchange",T=>r(T.oldVersion,T.newVersion,T))}).catch(()=>{}),u}const ol=["get","getKey","getAll","getAllKeys","count"],al=["put","add","delete","clear"],ii=new Map;function Ks(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ii.get(e))return ii.get(e);const i=e.replace(/FromIndex$/,""),s=e!==i,r=al.includes(i);if(!(i in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ol.includes(i)))return;const c=async function(l,...u){const g=this.transaction(l,r?"readwrite":"readonly");let T=g.store;return s&&(T=T.index(u.shift())),(await Promise.all([T[i](...u),r&&g.done]))[0]};return ii.set(e,c),c}il(t=>({...t,get:(e,i,s)=>Ks(e,i)||t.get(e,i,s),has:(e,i)=>!!Ks(e,i)||t.has(e,i)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(ll(i)){const s=i.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(i=>i).join(" ")}}function ll(t){const e=t.getComponent();return e?.type==="VERSION"}const mi="@firebase/app",Js="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new In("@firebase/app"),hl="@firebase/app-compat",ul="@firebase/analytics-compat",dl="@firebase/analytics",fl="@firebase/app-check-compat",pl="@firebase/app-check",gl="@firebase/auth",ml="@firebase/auth-compat",yl="@firebase/database",vl="@firebase/data-connect",_l="@firebase/database-compat",wl="@firebase/functions",Il="@firebase/functions-compat",bl="@firebase/installations",Tl="@firebase/installations-compat",El="@firebase/messaging",Al="@firebase/messaging-compat",kl="@firebase/performance",Sl="@firebase/performance-compat",Rl="@firebase/remote-config",Cl="@firebase/remote-config-compat",Nl="@firebase/storage",xl="@firebase/storage-compat",Pl="@firebase/firestore",Ol="@firebase/vertexai",Dl="@firebase/firestore-compat",Ll="firebase",Ml="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi="[DEFAULT]",jl={[mi]:"fire-core",[hl]:"fire-core-compat",[dl]:"fire-analytics",[ul]:"fire-analytics-compat",[pl]:"fire-app-check",[fl]:"fire-app-check-compat",[gl]:"fire-auth",[ml]:"fire-auth-compat",[yl]:"fire-rtdb",[vl]:"fire-data-connect",[_l]:"fire-rtdb-compat",[wl]:"fire-fn",[Il]:"fire-fn-compat",[bl]:"fire-iid",[Tl]:"fire-iid-compat",[El]:"fire-fcm",[Al]:"fire-fcm-compat",[kl]:"fire-perf",[Sl]:"fire-perf-compat",[Rl]:"fire-rc",[Cl]:"fire-rc-compat",[Nl]:"fire-gcs",[xl]:"fire-gcs-compat",[Pl]:"fire-fst",[Dl]:"fire-fst-compat",[Ol]:"fire-vertex","fire-js":"fire-js",[Ll]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,Ul=new Map,vi=new Map;function Xs(t,e){try{t.container.addComponent(e)}catch(i){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function de(t){const e=t.name;if(vi.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;vi.set(e,t);for(const i of hn.values())Xs(i,t);for(const i of Ul.values())Xs(i,t);return!0}function Be(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function le(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new Ye("app","Firebase",Fl);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,i,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=Ml;function oo(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yi,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ue.create("bad-app-name",{appName:String(r)});if(i||(i=Yr()),!i)throw Ue.create("no-options");const c=hn.get(r);if(c){if(Fe(i,c.options)&&Fe(s,c.config))return c;throw Ue.create("duplicate-app",{appName:r})}const l=new qc(r);for(const g of vi.values())l.addComponent(g);const u=new Bl(i,s,l);return hn.set(r,u),u}function bn(t=yi){const e=hn.get(t);if(!e&&t===yi&&Yr())return oo();if(!e)throw Ue.create("no-app",{appName:t});return e}function te(t,e,i){var s;let r=(s=jl[t])!==null&&s!==void 0?s:t;i&&(r+=`-${i}`);const c=r.match(/\s|\//),l=e.match(/\s|\//);if(c||l){const u=[`Unable to register library "${r}" with version "${e}":`];c&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),c&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ee.warn(u.join(" "));return}de(new oe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl="firebase-heartbeat-database",Hl=1,Pt="firebase-heartbeat-store";let si=null;function ao(){return si||(si=ro(Vl,Hl,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pt)}catch(i){console.warn(i)}}}}).catch(t=>{throw Ue.create("idb-open",{originalErrorMessage:t.message})})),si}async function $l(t){try{const i=(await ao()).transaction(Pt),s=await i.objectStore(Pt).get(co(t));return await i.done,s}catch(e){if(e instanceof ae)Ee.warn(e.message);else{const i=Ue.create("idb-get",{originalErrorMessage:e?.message});Ee.warn(i.message)}}}async function Ys(t,e){try{const s=(await ao()).transaction(Pt,"readwrite");await s.objectStore(Pt).put(e,co(t)),await s.done}catch(i){if(i instanceof ae)Ee.warn(i.message);else{const s=Ue.create("idb-set",{originalErrorMessage:i?.message});Ee.warn(s.message)}}}function co(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=1024,Gl=30;class Wl{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new Kl(i),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,i;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Zs();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:r}),this._heartbeatsCache.heartbeats.length>Gl){const l=Jl(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ee.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=Zs(),{heartbeatsToSend:s,unsentEntries:r}=ql(this._heartbeatsCache.heartbeats),c=ln(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=i,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(i){return Ee.warn(i),""}}}function Zs(){return new Date().toISOString().substring(0,10)}function ql(t,e=zl){const i=[];let s=t.slice();for(const r of t){const c=i.find(l=>l.agent===r.agent);if(c){if(c.dates.push(r.date),Qs(i)>e){c.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),Qs(i)>e){i.pop();break}s=s.slice(1)}return{heartbeatsToSend:i,unsentEntries:s}}class Kl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return to()?no().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await $l(this.app);return i?.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ys(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ys(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qs(t){return ln(JSON.stringify({version:2,heartbeats:t})).length}function Jl(t){if(t.length===0)return-1;let e=0,i=t[0].date;for(let s=1;s<t.length;s++)t[s].date<i&&(i=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t){de(new oe("platform-logger",e=>new cl(e),"PRIVATE")),de(new oe("heartbeat",e=>new Wl(e),"PRIVATE")),te(mi,Js,t),te(mi,Js,"esm2017"),te("fire-js","")}Xl("");var Yl="firebase",Zl="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */te(Yl,Zl,"app");function ki(t,e){var i={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(i[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(i[s[r]]=t[s[r]]);return i}function lo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ql=lo,ho=new Ye("auth","Firebase",lo());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new In("@firebase/auth");function eh(t,...e){un.logLevel<=D.WARN&&un.warn(`Auth (${Ze}): ${t}`,...e)}function rn(t,...e){un.logLevel<=D.ERROR&&un.error(`Auth (${Ze}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(t,...e){throw Si(t,...e)}function fe(t,...e){return Si(t,...e)}function uo(t,e,i){const s=Object.assign(Object.assign({},Ql()),{[e]:i});return new Ye("auth","Firebase",s).create(e,{appName:t.name})}function We(t){return uo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Si(t,...e){if(typeof t!="string"){const i=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(i,...s)}return ho.create(t,...e)}function S(t,e,...i){if(!t)throw Si(e,...i)}function we(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rn(e),new Error(e)}function ke(t,e){t||we(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function th(){return er()==="http:"||er()==="https:"}function er(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(th()||eo()||"connection"in navigator)?navigator.onLine:!0}function ih(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,i){this.shortDelay=e,this.longDelay=i,ke(i>e,"Short delay should be less than long delay!"),this.isMobile=Rc()||Nc()}get(){return nh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(t,e){ke(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{static initialize(e,i,s){this.fetchImpl=e,i&&(this.headersImpl=i),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=new Lt(3e4,6e4);function Ci(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ht(t,e,i,s,r={}){return po(t,r,async()=>{let c={},l={};s&&(e==="GET"?l=s:c={body:JSON.stringify(s)});const u=Dt(Object.assign({key:t.config.apiKey},l)).slice(1),g=await t._getAdditionalHeaders();g["Content-Type"]="application/json",t.languageCode&&(g["X-Firebase-Locale"]=t.languageCode);const T=Object.assign({method:e,headers:g},c);return Cc()||(T.referrerPolicy="no-referrer"),fo.fetch()(go(t,t.config.apiHost,i,u),T)})}async function po(t,e,i){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},sh),e);try{const r=new ah(t),c=await Promise.race([i(),r.promise]);r.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw tn(t,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const u=c.ok?l.errorMessage:l.error.message,[g,T]=u.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw tn(t,"credential-already-in-use",l);if(g==="EMAIL_EXISTS")throw tn(t,"email-already-in-use",l);if(g==="USER_DISABLED")throw tn(t,"user-disabled",l);const A=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw uo(t,A,T);Ae(t,A)}}catch(r){if(r instanceof ae)throw r;Ae(t,"network-request-failed",{message:String(r)})}}async function oh(t,e,i,s,r={}){const c=await ht(t,e,i,s,r);return"mfaPendingCredential"in c&&Ae(t,"multi-factor-auth-required",{_serverResponse:c}),c}function go(t,e,i,s){const r=`${e}${i}?${s}`;return t.config.emulator?Ri(t.config,r):`${t.config.apiScheme}://${r}`}class ah{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,s)=>{this.timer=setTimeout(()=>s(fe(this.auth,"network-request-failed")),rh.get())})}}function tn(t,e,i){const s={appName:t.name};i.email&&(s.email=i.email),i.phoneNumber&&(s.phoneNumber=i.phoneNumber);const r=fe(t,e,s);return r.customData._tokenResponse=i,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ch(t,e){return ht(t,"POST","/v1/accounts:delete",e)}async function mo(t,e){return ht(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lh(t,e=!1){const i=Se(t),s=await i.getIdToken(e),r=Ni(s);S(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const c=typeof r.firebase=="object"?r.firebase:void 0,l=c?.sign_in_provider;return{claims:r,token:s,authTime:Rt(ri(r.auth_time)),issuedAtTime:Rt(ri(r.iat)),expirationTime:Rt(ri(r.exp)),signInProvider:l||null,signInSecondFactor:c?.sign_in_second_factor||null}}function ri(t){return Number(t)*1e3}function Ni(t){const[e,i,s]=t.split(".");if(e===void 0||i===void 0||s===void 0)return rn("JWT malformed, contained fewer than 3 sections"),null;try{const r=Kr(i);return r?JSON.parse(r):(rn("Failed to decode base64 JWT payload"),null)}catch(r){return rn("Caught error parsing JWT payload as JSON",r?.toString()),null}}function tr(t){const e=Ni(t);return S(e,"internal-error"),S(typeof e.exp<"u","internal-error"),S(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(t,e,i=!1){if(i)return e;try{return await e}catch(s){throw s instanceof ae&&hh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function hh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rt(this.lastLoginAt),this.creationTime=Rt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(t){var e;const i=t.auth,s=await t.getIdToken(),r=await Ot(t,mo(i,{idToken:s}));S(r?.users.length,i,"internal-error");const c=r.users[0];t._notifyReloadListener(c);const l=!((e=c.providerUserInfo)===null||e===void 0)&&e.length?yo(c.providerUserInfo):[],u=fh(t.providerData,l),g=t.isAnonymous,T=!(t.email&&c.passwordHash)&&!u?.length,A=g?T:!1,k={uid:c.localId,displayName:c.displayName||null,photoURL:c.photoUrl||null,email:c.email||null,emailVerified:c.emailVerified||!1,phoneNumber:c.phoneNumber||null,tenantId:c.tenantId||null,providerData:u,metadata:new wi(c.createdAt,c.lastLoginAt),isAnonymous:A};Object.assign(t,k)}async function dh(t){const e=Se(t);await dn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function yo(t){return t.map(e=>{var{providerId:i}=e,s=ki(e,["providerId"]);return{providerId:i,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ph(t,e){const i=await po(t,{},async()=>{const s=Dt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:c}=t.config,l=go(t,r,"/v1/token",`key=${c}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",fo.fetch()(l,{method:"POST",headers:u,body:s})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function gh(t,e){return ht(t,"POST","/v2/accounts:revokeToken",Ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken<"u","internal-error"),S(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):tr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){S(e.length!==0,"internal-error");const i=tr(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(S(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:s,refreshToken:r,expiresIn:c}=await ph(e,i);this.updateTokensAndExpiration(s,r,Number(c))}updateTokensAndExpiration(e,i,s){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,i){const{refreshToken:s,accessToken:r,expirationTime:c}=i,l=new rt;return s&&(S(typeof s=="string","internal-error",{appName:e}),l.refreshToken=s),r&&(S(typeof r=="string","internal-error",{appName:e}),l.accessToken=r),c&&(S(typeof c=="number","internal-error",{appName:e}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rt,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){S(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ie{constructor(e){var{uid:i,auth:s,stsTokenManager:r}=e,c=ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=c.displayName||null,this.email=c.email||null,this.emailVerified=c.emailVerified||!1,this.phoneNumber=c.phoneNumber||null,this.photoURL=c.photoURL||null,this.isAnonymous=c.isAnonymous||!1,this.tenantId=c.tenantId||null,this.providerData=c.providerData?[...c.providerData]:[],this.metadata=new wi(c.createdAt||void 0,c.lastLoginAt||void 0)}async getIdToken(e){const i=await Ot(this,this.stsTokenManager.getToken(this.auth,e));return S(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return lh(this,e)}reload(){return dh(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Ie(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),i&&await dn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(le(this.auth.app))return Promise.reject(We(this.auth));const e=await this.getIdToken();return await Ot(this,ch(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var s,r,c,l,u,g,T,A;const k=(s=i.displayName)!==null&&s!==void 0?s:void 0,R=(r=i.email)!==null&&r!==void 0?r:void 0,P=(c=i.phoneNumber)!==null&&c!==void 0?c:void 0,C=(l=i.photoURL)!==null&&l!==void 0?l:void 0,j=(u=i.tenantId)!==null&&u!==void 0?u:void 0,N=(g=i._redirectEventId)!==null&&g!==void 0?g:void 0,Z=(T=i.createdAt)!==null&&T!==void 0?T:void 0,q=(A=i.lastLoginAt)!==null&&A!==void 0?A:void 0,{uid:U,emailVerified:F,isAnonymous:se,providerData:V,stsTokenManager:v}=i;S(U&&v,e,"internal-error");const d=rt.fromJSON(this.name,v);S(typeof U=="string",e,"internal-error"),Pe(k,e.name),Pe(R,e.name),S(typeof F=="boolean",e,"internal-error"),S(typeof se=="boolean",e,"internal-error"),Pe(P,e.name),Pe(C,e.name),Pe(j,e.name),Pe(N,e.name),Pe(Z,e.name),Pe(q,e.name);const p=new Ie({uid:U,auth:e,email:R,emailVerified:F,displayName:k,isAnonymous:se,photoURL:C,phoneNumber:P,tenantId:j,stsTokenManager:d,createdAt:Z,lastLoginAt:q});return V&&Array.isArray(V)&&(p.providerData=V.map(m=>Object.assign({},m))),N&&(p._redirectEventId=N),p}static async _fromIdTokenResponse(e,i,s=!1){const r=new rt;r.updateFromServerResponse(i);const c=new Ie({uid:i.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await dn(c),c}static async _fromGetAccountInfoResponse(e,i,s){const r=i.users[0];S(r.localId!==void 0,"internal-error");const c=r.providerUserInfo!==void 0?yo(r.providerUserInfo):[],l=!(r.email&&r.passwordHash)&&!c?.length,u=new rt;u.updateFromIdToken(s);const g=new Ie({uid:r.localId,auth:e,stsTokenManager:u,isAnonymous:l}),T={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new wi(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!c?.length};return Object.assign(g,T),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr=new Map;function be(t){ke(t instanceof Function,"Expected a class definition");let e=nr.get(t);return e?(ke(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nr.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}vo.type="NONE";const ir=vo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e,i){return`firebase:${t}:${e}:${i}`}class ot{constructor(e,i,s){this.persistence=e,this.auth=i,this.userKey=s;const{config:r,name:c}=this.auth;this.fullUserKey=on(this.userKey,r.apiKey,c),this.fullPersistenceKey=on("persistence",r.apiKey,c),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ie._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,s="authUser"){if(!i.length)return new ot(be(ir),e,s);const r=(await Promise.all(i.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let c=r[0]||be(ir);const l=on(s,e.config.apiKey,e.name);let u=null;for(const T of i)try{const A=await T._get(l);if(A){const k=Ie._fromJSON(e,A);T!==c&&(u=k),c=T;break}}catch{}const g=r.filter(T=>T._shouldAllowMigration);return!c._shouldAllowMigration||!g.length?new ot(c,e,s):(c=g[0],u&&await c._set(l,u.toJSON()),await Promise.all(i.map(async T=>{if(T!==c)try{await T._remove(l)}catch{}})),new ot(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_o(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Eo(e))return"Blackberry";if(Ao(e))return"Webos";if(wo(e))return"Safari";if((e.includes("chrome/")||Io(e))&&!e.includes("edge/"))return"Chrome";if(To(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(i);if(s?.length===2)return s[1]}return"Other"}function _o(t=Y()){return/firefox\//i.test(t)}function wo(t=Y()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Io(t=Y()){return/crios\//i.test(t)}function bo(t=Y()){return/iemobile/i.test(t)}function To(t=Y()){return/android/i.test(t)}function Eo(t=Y()){return/blackberry/i.test(t)}function Ao(t=Y()){return/webos/i.test(t)}function xi(t=Y()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mh(t=Y()){var e;return xi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yh(){return xc()&&document.documentMode===10}function ko(t=Y()){return xi(t)||To(t)||Ao(t)||Eo(t)||/windows phone/i.test(t)||bo(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e=[]){let i;switch(t){case"Browser":i=sr(Y());break;case"Worker":i=`${sr(Y())}-${t}`;break;default:i=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${Ze}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const s=c=>new Promise((l,u)=>{try{const g=e(c);l(g)}catch(g){u(g)}});s.onAbort=i,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const s of this.queue)await s(e),s.onAbort&&i.push(s.onAbort)}catch(s){i.reverse();for(const r of i)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _h(t,e={}){return ht(t,"GET","/v2/passwordPolicy",Ci(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=6;class Ih{constructor(e){var i,s,r,c;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=l.minPasswordLength)!==null&&i!==void 0?i:wh,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(c=e.forceUpgradeOnSignin)!==null&&c!==void 0?c:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,s,r,c,l,u;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(i=g.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(r=g.containsLowercaseLetter)!==null&&r!==void 0?r:!0),g.isValid&&(g.isValid=(c=g.containsUppercaseLetter)!==null&&c!==void 0?c:!0),g.isValid&&(g.isValid=(l=g.containsNumericCharacter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(u=g.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),g}validatePasswordLengthOptions(e,i){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(i.meetsMinPasswordLength=e.length>=s),r&&(i.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(i,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,i,s,r,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,i,s,r){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rr(this),this.idTokenSubscription=new rr(this),this.beforeStateQueue=new vh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ho,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=be(i)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ot.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await mo(this,{idToken:e}),s=await Ie._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(s)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(le(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,c=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,u=r?._redirectEventId,g=await this.tryRedirectSignIn(e);(!l||l===u)&&g?.user&&(r=g.user,c=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(c)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await dn(e)}catch(i){if(i?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ih()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(le(this.app))return Promise.reject(We(this));const i=e?Se(e):null;return i&&S(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return le(this.app)?Promise.reject(We(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return le(this.app)?Promise.reject(We(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _h(this),i=new Ih(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ye("auth","Firebase",e())}onAuthStateChanged(e,i,s){return this.registerStateListener(this.authStateSubscription,e,i,s)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,s){return this.registerStateListener(this.idTokenSubscription,e,i,s)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(s.tenantId=this.tenantId),await gh(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const s=await this.getOrInitRedirectPersistenceManager(i);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&be(e)||this._popupRedirectResolver;S(i,this,"argument-error"),this.redirectPersistenceManager=await ot.create(this,[be(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,s;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,s,r){if(this._deleted)return()=>{};const c=typeof i=="function"?i:i.next.bind(i);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(S(u,this,"internal-error"),u.then(()=>{l||c(this.currentUser)}),typeof i=="function"){const g=e.addObserver(i,s,r);return()=>{l=!0,g()}}else{const g=e.addObserver(i);return()=>{l=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=So(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(i["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(i["X-Firebase-AppCheck"]=r),i}async _getAppCheckToken(){var e;if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i?.error&&eh(`Error while retrieving App Check token: ${i.error}`),i?.token}}function Pi(t){return Se(t)}class rr{constructor(e){this.auth=e,this.observer=null,this.addObserver=jc(i=>this.observer=i)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Th(t){Oi=t}function Eh(t){return Oi.loadJS(t)}function Ah(){return Oi.gapiScript}function kh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(t,e){const i=Be(t,"auth");if(i.isInitialized()){const r=i.getImmediate(),c=i.getOptions();if(Fe(c,e??{}))return r;Ae(r,"already-initialized")}return i.initialize({options:e})}function Rh(t,e){const i=e?.persistence||[],s=(Array.isArray(i)?i:[i]).map(be);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e?.popupRedirectResolver)}function Ch(t,e,i){const s=Pi(t);S(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,c=Ro(e),{host:l,port:u}=Nh(e),g=u===null?"":`:${u}`,T={url:`${c}//${l}${g}/`},A=Object.freeze({host:l,port:u,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!s._canInitEmulator){S(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),S(Fe(T,s.config.emulator)&&Fe(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=T,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,xh()}function Ro(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nh(t){const e=Ro(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const s=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const c=r[1];return{host:c,port:or(s.substr(c.length+1))}}else{const[c,l]=s.split(":");return{host:c,port:or(l)}}}function or(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function xh(){function t(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,i){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e){return oh(t,"POST","/v1/accounts:signInWithIdp",Ci(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="http://localhost";class Ke extends Co{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Ae("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=i,c=ki(i,["providerId","signInMethod"]);if(!s||!r)return null;const l=new Ke(s,r);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(e){const i=this.buildRequest();return at(e,i)}_linkToIdToken(e,i){const s=this.buildRequest();return s.idToken=i,at(e,s)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,at(e,i)}buildRequest(){const e={requestUri:Ph,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=Dt(i)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends No{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Mt{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Oe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Mt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Ke._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:s}=e;if(!i&&!s)return null;try{return De.credential(i,s)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Mt{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Mt{constructor(){super("twitter.com")}static credential(e,i){return Ke._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:s}=e;if(!i||!s)return null;try{return Me.credential(i,s)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,s,r=!1){const c=await Ie._fromIdTokenResponse(e,s,r),l=ar(s);return new ct({user:c,providerId:l,_tokenResponse:s,operationType:i})}static async _forOperation(e,i,s){await e._updateTokensIfNecessary(s,!0);const r=ar(s);return new ct({user:e,providerId:r,_tokenResponse:s,operationType:i})}}function ar(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ae{constructor(e,i,s,r){var c;super(i.code,i.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,fn.prototype),this.customData={appName:e.name,tenantId:(c=e.tenantId)!==null&&c!==void 0?c:void 0,_serverResponse:i.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,i,s,r){return new fn(e,i,s,r)}}function xo(t,e,i,s){return(e==="reauthenticate"?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?fn._fromErrorAndOperation(t,c,e,s):c})}async function Oh(t,e,i=!1){const s=await Ot(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return ct._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e,i=!1){const{auth:s}=t;if(le(s.app))return Promise.reject(We(s));const r="reauthenticate";try{const c=await Ot(t,xo(s,r,e,t),i);S(c.idToken,s,"internal-error");const l=Ni(c.idToken);S(l,s,"internal-error");const{sub:u}=l;return S(t.uid===u,s,"user-mismatch"),ct._forOperation(t,r,c)}catch(c){throw c?.code==="auth/user-not-found"&&Ae(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e,i=!1){if(le(t.app))return Promise.reject(We(t));const s="signIn",r=await xo(t,s,e),c=await ct._fromIdTokenResponse(t,s,r);return i||await t._updateCurrentUser(c.user),c}function Mh(t,e,i,s){return Se(t).onIdTokenChanged(e,i,s)}function jh(t,e,i){return Se(t).beforeAuthStateChanged(e,i)}const pn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=1e3,Fh=10;class Oo extends Po{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ko(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const s=this.storage.getItem(i),r=this.localCache[i];s!==r&&e(i,r,s)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((l,u,g)=>{this.notifyListeners(l,g)});return}const s=e.key;i?this.detachListener():this.stopPolling();const r=()=>{const l=this.storage.getItem(s);!i&&this.localCache[s]===l||this.notifyListeners(s,l)},c=this.storage.getItem(s);yh()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Fh):r()}notifyListeners(e,i){this.localCache[e]=i;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:s}),!0)})},Uh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Oo.type="LOCAL";const Bh=Oo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends Po{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Do.type="SESSION";const Lo=Do;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(r=>r.isListeningto(e));if(i)return i;const s=new Tn(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:s,eventType:r,data:c}=i.data,l=this.handlersMap[r];if(!l?.size)return;i.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const u=Array.from(l).map(async T=>T(i.origin,c)),g=await Vh(u);i.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:g})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t="",e=10){let i="";for(let s=0;s<e;s++)i+=Math.floor(Math.random()*10);return t+i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let c,l;return new Promise((u,g)=>{const T=Di("",20);r.port1.start();const A=setTimeout(()=>{g(new Error("unsupported_event"))},s);l={messageChannel:r,onMessage(k){const R=k;if(R.data.eventId===T)switch(R.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),u(R.data.response);break;default:clearTimeout(A),clearTimeout(c),g(new Error("invalid_response"));break}}},this.handlers.add(l),r.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:T,data:i},[r.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return window}function $h(t){pe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function zh(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gh(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wh(){return Mo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo="firebaseLocalStorageDb",qh=1,gn="firebaseLocalStorage",Uo="fbase_key";class jt{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function En(t,e){return t.transaction([gn],e?"readwrite":"readonly").objectStore(gn)}function Kh(){const t=indexedDB.deleteDatabase(jo);return new jt(t).toPromise()}function Ii(){const t=indexedDB.open(jo,qh);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(gn,{keyPath:Uo})}catch(r){i(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(gn)?e(s):(s.close(),await Kh(),e(await Ii()))})})}async function cr(t,e,i){const s=En(t,!0).put({[Uo]:e,value:i});return new jt(s).toPromise()}async function Jh(t,e){const i=En(t,!1).get(e),s=await new jt(i).toPromise();return s===void 0?null:s.value}function lr(t,e){const i=En(t,!0).delete(e);return new jt(i).toPromise()}const Xh=800,Yh=3;class Fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ii(),this.db)}async _withRetries(e){let i=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(i++>Yh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tn._getInstance(Wh()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await zh(),!this.activeServiceWorker)return;this.sender=new Hh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((i=s[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ii();return await cr(e,pn,"1"),await lr(e,pn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(s=>cr(s,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(s=>Jh(s,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>lr(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const c=En(r,!1).getAll();return new jt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:c}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(c)&&(this.notifyListeners(r,c),i.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),i.push(r));return i}notifyListeners(e,i){this.localCache[e]=i;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fo.type="LOCAL";const Zh=Fo;new Lt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(t,e){return e?be(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Co{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return at(e,this._buildIdpRequest())}_linkToIdToken(e,i){return at(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return at(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function eu(t){return Lh(t.auth,new Li(t),t.bypassAuthState)}function tu(t){const{auth:e,user:i}=t;return S(i,e,"internal-error"),Dh(i,new Li(t),t.bypassAuthState)}async function nu(t){const{auth:e,user:i}=t;return S(i,e,"internal-error"),Oh(i,new Li(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,i,s,r,c=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:s,postBody:r,tenantId:c,error:l,type:u}=e;if(l){this.reject(l);return}const g={auth:this.auth,requestUri:i,sessionId:s,tenantId:c||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(g))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eu;case"linkViaPopup":case"linkViaRedirect":return nu;case"reauthViaPopup":case"reauthViaRedirect":return tu;default:Ae(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new Lt(2e3,1e4);class st extends Bo{constructor(e,i,s,r,c){super(e,i,r,c),this.provider=s,this.authWindow=null,this.pollId=null,st.currentPopupAction&&st.currentPopupAction.cancel(),st.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=Di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,st.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,s;if(!((s=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iu.get())};e()}}st.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="pendingRedirect",an=new Map;class ru extends Bo{constructor(e,i,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s),this.eventId=null}async execute(){let e=an.get(this.auth._key());if(!e){try{const s=await ou(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(i){e=()=>Promise.reject(i)}an.set(this.auth._key(),e)}return this.bypassAuthState||an.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ou(t,e){const i=lu(e),s=cu(t);if(!await s._isAvailable())return!1;const r=await s._get(i)==="true";return await s._remove(i),r}function au(t,e){an.set(t._key(),e)}function cu(t){return be(t._redirectPersistence)}function lu(t){return on(su,t.config.apiKey,t.name)}async function hu(t,e,i=!1){if(le(t.app))return Promise.reject(We(t));const s=Pi(t),r=Qh(s,e),l=await new ru(s,r,i).execute();return l&&!i&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=10*60*1e3;class du{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(i=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fu(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var s;if(e.error&&!Vo(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";i.onError(fe(this.auth,r))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const s=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uu&&this.cachedEventUids.clear(),this.cachedEventUids.has(hr(e))}saveEventToCache(e){this.cachedEventUids.add(hr(e)),this.lastProcessedEventTime=Date.now()}}function hr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vo({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function fu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(t,e={}){return ht(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mu=/^https?/;async function yu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pu(t);for(const i of e)try{if(vu(i))return}catch{}Ae(t,"unauthorized-domain")}function vu(t){const e=_i(),{protocol:i,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&s===""?i==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&l.hostname===s}if(!mu.test(i))return!1;if(gu.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new Lt(3e4,6e4);function ur(){const t=pe().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}}function wu(t){return new Promise((e,i)=>{var s,r,c;function l(){ur(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ur(),i(fe(t,"network-request-failed"))},timeout:_u.get()})}if(!((r=(s=pe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((c=pe().gapi)===null||c===void 0)&&c.load)l();else{const u=kh("iframefcb");return pe()[u]=()=>{gapi.load?l():i(fe(t,"network-request-failed"))},Eh(`${Ah()}?onload=${u}`).catch(g=>i(g))}}).catch(e=>{throw cn=null,e})}let cn=null;function Iu(t){return cn=cn||wu(t),cn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new Lt(5e3,15e3),Tu="__/auth/iframe",Eu="emulator/auth/iframe",Au={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ku=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Su(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Ri(e,Eu):`https://${t.config.authDomain}/${Tu}`,s={apiKey:e.apiKey,appName:t.name,v:Ze},r=ku.get(t.config.apiHost);r&&(s.eid=r);const c=t._getFrameworks();return c.length&&(s.fw=c.join(",")),`${i}?${Dt(s).slice(1)}`}async function Ru(t){const e=await Iu(t),i=pe().gapi;return S(i,t,"internal-error"),e.open({where:document.body,url:Su(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Au,dontclear:!0},s=>new Promise(async(r,c)=>{await s.restyle({setHideOnLeave:!1});const l=fe(t,"network-request-failed"),u=pe().setTimeout(()=>{c(l)},bu.get());function g(){pe().clearTimeout(u),r(s)}s.ping(g).then(g,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nu=500,xu=600,Pu="_blank",Ou="http://localhost";class dr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Du(t,e,i,s=Nu,r=xu){const c=Math.max((window.screen.availHeight-r)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let u="";const g=Object.assign(Object.assign({},Cu),{width:s.toString(),height:r.toString(),top:c,left:l}),T=Y().toLowerCase();i&&(u=Io(T)?Pu:i),_o(T)&&(e=e||Ou,g.scrollbars="yes");const A=Object.entries(g).reduce((R,[P,C])=>`${R}${P}=${C},`,"");if(mh(T)&&u!=="_self")return Lu(e||"",u),new dr(null);const k=window.open(e||"",u,A);S(k,t,"popup-blocked");try{k.focus()}catch{}return new dr(k)}function Lu(t,e){const i=document.createElement("a");i.href=t,i.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="__/auth/handler",ju="emulator/auth/handler",Uu=encodeURIComponent("fac");async function fr(t,e,i,s,r,c){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:s,v:Ze,eventId:r};if(e instanceof No){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Mc(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,k]of Object.entries({}))l[A]=k}if(e instanceof Mt){const A=e.getScopes().filter(k=>k!=="");A.length>0&&(l.scopes=A.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const A of Object.keys(u))u[A]===void 0&&delete u[A];const g=await t._getAppCheckToken(),T=g?`#${Uu}=${encodeURIComponent(g)}`:"";return`${Fu(t)}?${Dt(u).slice(1)}${T}`}function Fu({config:t}){return t.emulator?Ri(t,ju):`https://${t.authDomain}/${Mu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="webStorageSupport";class Bu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lo,this._completeRedirectFn=hu,this._overrideRedirectResult=au}async _openPopup(e,i,s,r){var c;ke((c=this.eventManagers[e._key()])===null||c===void 0?void 0:c.manager,"_initialize() not called before _openPopup()");const l=await fr(e,i,s,_i(),r);return Du(e,l,Di())}async _openRedirect(e,i,s,r){await this._originValidation(e);const c=await fr(e,i,s,_i(),r);return $h(c),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:r,promise:c}=this.eventManagers[i];return r?Promise.resolve(r):(ke(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[i]={promise:s},s.catch(()=>{delete this.eventManagers[i]}),s}async initAndGetManager(e){const i=await Ru(e),s=new du(e);return i.register("authEvent",r=>(S(r?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=i,s}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(oi,{type:oi},r=>{var c;const l=(c=r?.[0])===null||c===void 0?void 0:c[oi];l!==void 0&&i(!!l),Ae(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=yu(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return ko()||wo()||xi()}}const Vu=Bu;var pr="@firebase/auth",gr="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zu(t){de(new oe("auth",(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=s.options;S(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:So(t)},T=new bh(s,r,c,g);return Rh(T,i),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,s)=>{e.getProvider("auth-internal").initialize()})),de(new oe("auth-internal",e=>{const i=Pi(e.getProvider("auth").getImmediate());return(s=>new Hu(s))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),te(pr,gr,$u(t)),te(pr,gr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=5*60,Wu=Zr("authIdTokenMaxAge")||Gu;let mr=null;const qu=t=>async e=>{const i=e&&await e.getIdTokenResult(),s=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(s&&s>Wu)return;const r=i?.token;mr!==r&&(mr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ku(t=bn()){const e=Be(t,"auth");if(e.isInitialized())return e.getImmediate();const i=Sh(t,{popupRedirectResolver:Vu,persistence:[Zh,Bh,Lo]}),s=Zr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const l=qu(c.toString());jh(i,l,()=>l(i.currentUser)),Mh(i,u=>l(u))}}const r=Jr("auth");return r&&Ch(i,`http://${r}`),i}function Ju(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Th({loadJS(t){return new Promise((e,i)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const c=fe("internal-error");c.customData=r,i(c)},s.type="text/javascript",s.charset="UTF-8",Ju().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zu("Browser");var yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ho;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,d){function p(){}p.prototype=d.prototype,v.D=d.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(m,y,I){for(var f=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)f[ye-2]=arguments[ye];return d.prototype[y].apply(m,f)}}function i(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,i),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(v,d,p){p||(p=0);var m=Array(16);if(typeof d=="string")for(var y=0;16>y;++y)m[y]=d.charCodeAt(p++)|d.charCodeAt(p++)<<8|d.charCodeAt(p++)<<16|d.charCodeAt(p++)<<24;else for(y=0;16>y;++y)m[y]=d[p++]|d[p++]<<8|d[p++]<<16|d[p++]<<24;d=v.g[0],p=v.g[1],y=v.g[2];var I=v.g[3],f=d+(I^p&(y^I))+m[0]+3614090360&4294967295;d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[1]+3905402710&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[2]+606105819&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[3]+3250441966&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[4]+4118548399&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[5]+1200080426&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[6]+2821735955&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[7]+4249261313&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[8]+1770035416&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[9]+2336552879&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[10]+4294925233&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[11]+2304563134&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(I^p&(y^I))+m[12]+1804603682&4294967295,d=p+(f<<7&4294967295|f>>>25),f=I+(y^d&(p^y))+m[13]+4254626195&4294967295,I=d+(f<<12&4294967295|f>>>20),f=y+(p^I&(d^p))+m[14]+2792965006&4294967295,y=I+(f<<17&4294967295|f>>>15),f=p+(d^y&(I^d))+m[15]+1236535329&4294967295,p=y+(f<<22&4294967295|f>>>10),f=d+(y^I&(p^y))+m[1]+4129170786&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[6]+3225465664&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[11]+643717713&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[0]+3921069994&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[5]+3593408605&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[10]+38016083&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[15]+3634488961&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[4]+3889429448&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[9]+568446438&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[14]+3275163606&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[3]+4107603335&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[8]+1163531501&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(y^I&(p^y))+m[13]+2850285829&4294967295,d=p+(f<<5&4294967295|f>>>27),f=I+(p^y&(d^p))+m[2]+4243563512&4294967295,I=d+(f<<9&4294967295|f>>>23),f=y+(d^p&(I^d))+m[7]+1735328473&4294967295,y=I+(f<<14&4294967295|f>>>18),f=p+(I^d&(y^I))+m[12]+2368359562&4294967295,p=y+(f<<20&4294967295|f>>>12),f=d+(p^y^I)+m[5]+4294588738&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[8]+2272392833&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[11]+1839030562&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[14]+4259657740&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[1]+2763975236&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[4]+1272893353&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[7]+4139469664&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[10]+3200236656&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[13]+681279174&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[0]+3936430074&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[3]+3572445317&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[6]+76029189&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(p^y^I)+m[9]+3654602809&4294967295,d=p+(f<<4&4294967295|f>>>28),f=I+(d^p^y)+m[12]+3873151461&4294967295,I=d+(f<<11&4294967295|f>>>21),f=y+(I^d^p)+m[15]+530742520&4294967295,y=I+(f<<16&4294967295|f>>>16),f=p+(y^I^d)+m[2]+3299628645&4294967295,p=y+(f<<23&4294967295|f>>>9),f=d+(y^(p|~I))+m[0]+4096336452&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[7]+1126891415&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[14]+2878612391&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[5]+4237533241&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[12]+1700485571&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[3]+2399980690&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[10]+4293915773&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[1]+2240044497&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[8]+1873313359&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[15]+4264355552&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[6]+2734768916&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[13]+1309151649&4294967295,p=y+(f<<21&4294967295|f>>>11),f=d+(y^(p|~I))+m[4]+4149444226&4294967295,d=p+(f<<6&4294967295|f>>>26),f=I+(p^(d|~y))+m[11]+3174756917&4294967295,I=d+(f<<10&4294967295|f>>>22),f=y+(d^(I|~p))+m[2]+718787259&4294967295,y=I+(f<<15&4294967295|f>>>17),f=p+(I^(y|~d))+m[9]+3951481745&4294967295,v.g[0]=v.g[0]+d&4294967295,v.g[1]=v.g[1]+(y+(f<<21&4294967295|f>>>11))&4294967295,v.g[2]=v.g[2]+y&4294967295,v.g[3]=v.g[3]+I&4294967295}s.prototype.u=function(v,d){d===void 0&&(d=v.length);for(var p=d-this.blockSize,m=this.B,y=this.h,I=0;I<d;){if(y==0)for(;I<=p;)r(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<d;)if(m[y++]=v.charCodeAt(I++),y==this.blockSize){r(this,m),y=0;break}}else for(;I<d;)if(m[y++]=v[I++],y==this.blockSize){r(this,m),y=0;break}}this.h=y,this.o+=d},s.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var d=1;d<v.length-8;++d)v[d]=0;var p=8*this.o;for(d=v.length-8;d<v.length;++d)v[d]=p&255,p/=256;for(this.u(v),v=Array(16),d=p=0;4>d;++d)for(var m=0;32>m;m+=8)v[p++]=this.g[d]>>>m&255;return v};function c(v,d){var p=u;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=d(v)}function l(v,d){this.h=d;for(var p=[],m=!0,y=v.length-1;0<=y;y--){var I=v[y]|0;m&&I==d||(p[y]=I,m=!1)}this.g=p}var u={};function g(v){return-128<=v&&128>v?c(v,function(d){return new l([d|0],0>d?-1:0)}):new l([v|0],0>v?-1:0)}function T(v){if(isNaN(v)||!isFinite(v))return k;if(0>v)return N(T(-v));for(var d=[],p=1,m=0;v>=p;m++)d[m]=v/p|0,p*=4294967296;return new l(d,0)}function A(v,d){if(v.length==0)throw Error("number format error: empty string");if(d=d||10,2>d||36<d)throw Error("radix out of range: "+d);if(v.charAt(0)=="-")return N(A(v.substring(1),d));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=T(Math.pow(d,8)),m=k,y=0;y<v.length;y+=8){var I=Math.min(8,v.length-y),f=parseInt(v.substring(y,y+I),d);8>I?(I=T(Math.pow(d,I)),m=m.j(I).add(T(f))):(m=m.j(p),m=m.add(T(f)))}return m}var k=g(0),R=g(1),P=g(16777216);t=l.prototype,t.m=function(){if(j(this))return-N(this).m();for(var v=0,d=1,p=0;p<this.g.length;p++){var m=this.i(p);v+=(0<=m?m:4294967296+m)*d,d*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(C(this))return"0";if(j(this))return"-"+N(this).toString(v);for(var d=T(Math.pow(v,6)),p=this,m="";;){var y=F(p,d).g;p=Z(p,y.j(d));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=y,C(p))return I+m;for(;6>I.length;)I="0"+I;m=I+m}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function C(v){if(v.h!=0)return!1;for(var d=0;d<v.g.length;d++)if(v.g[d]!=0)return!1;return!0}function j(v){return v.h==-1}t.l=function(v){return v=Z(this,v),j(v)?-1:C(v)?0:1};function N(v){for(var d=v.g.length,p=[],m=0;m<d;m++)p[m]=~v.g[m];return new l(p,~v.h).add(R)}t.abs=function(){return j(this)?N(this):this},t.add=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0,y=0;y<=d;y++){var I=m+(this.i(y)&65535)+(v.i(y)&65535),f=(I>>>16)+(this.i(y)>>>16)+(v.i(y)>>>16);m=f>>>16,I&=65535,f&=65535,p[y]=f<<16|I}return new l(p,p[p.length-1]&-2147483648?-1:0)};function Z(v,d){return v.add(N(d))}t.j=function(v){if(C(this)||C(v))return k;if(j(this))return j(v)?N(this).j(N(v)):N(N(this).j(v));if(j(v))return N(this.j(N(v)));if(0>this.l(P)&&0>v.l(P))return T(this.m()*v.m());for(var d=this.g.length+v.g.length,p=[],m=0;m<2*d;m++)p[m]=0;for(m=0;m<this.g.length;m++)for(var y=0;y<v.g.length;y++){var I=this.i(m)>>>16,f=this.i(m)&65535,ye=v.i(y)>>>16,ut=v.i(y)&65535;p[2*m+2*y]+=f*ut,q(p,2*m+2*y),p[2*m+2*y+1]+=I*ut,q(p,2*m+2*y+1),p[2*m+2*y+1]+=f*ye,q(p,2*m+2*y+1),p[2*m+2*y+2]+=I*ye,q(p,2*m+2*y+2)}for(m=0;m<d;m++)p[m]=p[2*m+1]<<16|p[2*m];for(m=d;m<2*d;m++)p[m]=0;return new l(p,0)};function q(v,d){for(;(v[d]&65535)!=v[d];)v[d+1]+=v[d]>>>16,v[d]&=65535,d++}function U(v,d){this.g=v,this.h=d}function F(v,d){if(C(d))throw Error("division by zero");if(C(v))return new U(k,k);if(j(v))return d=F(N(v),d),new U(N(d.g),N(d.h));if(j(d))return d=F(v,N(d)),new U(N(d.g),d.h);if(30<v.g.length){if(j(v)||j(d))throw Error("slowDivide_ only works with positive integers.");for(var p=R,m=d;0>=m.l(v);)p=se(p),m=se(m);var y=V(p,1),I=V(m,1);for(m=V(m,2),p=V(p,2);!C(m);){var f=I.add(m);0>=f.l(v)&&(y=y.add(p),I=f),m=V(m,1),p=V(p,1)}return d=Z(v,y.j(d)),new U(y,d)}for(y=k;0<=v.l(d);){for(p=Math.max(1,Math.floor(v.m()/d.m())),m=Math.ceil(Math.log(p)/Math.LN2),m=48>=m?1:Math.pow(2,m-48),I=T(p),f=I.j(d);j(f)||0<f.l(v);)p-=m,I=T(p),f=I.j(d);C(I)&&(I=R),y=y.add(I),v=Z(v,f)}return new U(y,v)}t.A=function(v){return F(this,v).h},t.and=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)&v.i(m);return new l(p,this.h&v.h)},t.or=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)|v.i(m);return new l(p,this.h|v.h)},t.xor=function(v){for(var d=Math.max(this.g.length,v.g.length),p=[],m=0;m<d;m++)p[m]=this.i(m)^v.i(m);return new l(p,this.h^v.h)};function se(v){for(var d=v.g.length+1,p=[],m=0;m<d;m++)p[m]=v.i(m)<<1|v.i(m-1)>>>31;return new l(p,v.h)}function V(v,d){var p=d>>5;d%=32;for(var m=v.g.length-p,y=[],I=0;I<m;I++)y[I]=0<d?v.i(I+p)>>>d|v.i(I+p+1)<<32-d:v.i(I+p);return new l(y,v.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=T,l.fromString=A,Ho=l}).apply(typeof yr<"u"?yr:typeof self<"u"?self:typeof window<"u"?window:{});var nn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(n,o,a){return n==Array.prototype||n==Object.prototype||(n[o]=a.value),n};function i(n){n=[typeof globalThis=="object"&&globalThis,n,typeof window=="object"&&window,typeof self=="object"&&self,typeof nn=="object"&&nn];for(var o=0;o<n.length;++o){var a=n[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=i(this);function r(n,o){if(o)e:{var a=s;n=n.split(".");for(var h=0;h<n.length-1;h++){var _=n[h];if(!(_ in a))break e;a=a[_]}n=n[n.length-1],h=a[n],o=o(h),o!=h&&o!=null&&e(a,n,{configurable:!0,writable:!0,value:o})}}function c(n,o){n instanceof String&&(n+="");var a=0,h=!1,_={next:function(){if(!h&&a<n.length){var b=a++;return{value:o(b,n[b]),done:!1}}return h=!0,{done:!0,value:void 0}}};return _[Symbol.iterator]=function(){return _},_}r("Array.prototype.values",function(n){return n||function(){return c(this,function(o,a){return a})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function g(n){var o=typeof n;return o=o!="object"?o:n?Array.isArray(n)?"array":o:"null",o=="array"||o=="object"&&typeof n.length=="number"}function T(n){var o=typeof n;return o=="object"&&n!=null||o=="function"}function A(n,o,a){return n.call.apply(n.bind,arguments)}function k(n,o,a){if(!n)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var _=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(_,h),n.apply(o,_)}}return function(){return n.apply(o,arguments)}}function R(n,o,a){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?A:k,R.apply(null,arguments)}function P(n,o){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),n.apply(this,h)}}function C(n,o){function a(){}a.prototype=o.prototype,n.aa=o.prototype,n.prototype=new a,n.prototype.constructor=n,n.Qb=function(h,_,b){for(var E=Array(arguments.length-2),L=2;L<arguments.length;L++)E[L-2]=arguments[L];return o.prototype[_].apply(h,E)}}function j(n){const o=n.length;if(0<o){const a=Array(o);for(let h=0;h<o;h++)a[h]=n[h];return a}return[]}function N(n,o){for(let a=1;a<arguments.length;a++){const h=arguments[a];if(g(h)){const _=n.length||0,b=h.length||0;n.length=_+b;for(let E=0;E<b;E++)n[_+E]=h[E]}else n.push(h)}}class Z{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return 0<this.h?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function q(n){return/^[\s\xa0]*$/.test(n)}function U(){var n=u.navigator;return n&&(n=n.userAgent)?n:""}function F(n){return F[" "](n),n}F[" "]=function(){};var se=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function V(n,o,a){for(const h in n)o.call(a,n[h],h,n)}function v(n,o){for(const a in n)o.call(void 0,n[a],a,n)}function d(n){const o={};for(const a in n)o[a]=n[a];return o}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function m(n,o){let a,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(a in h)n[a]=h[a];for(let b=0;b<p.length;b++)a=p[b],Object.prototype.hasOwnProperty.call(h,a)&&(n[a]=h[a])}}function y(n){var o=1;n=n.split(":");const a=[];for(;0<o&&n.length;)a.push(n.shift()),o--;return n.length&&a.push(n.join(":")),a}function I(n){u.setTimeout(()=>{throw n},0)}function f(){var n=Rn;let o=null;return n.g&&(o=n.g,n.g=n.g.next,n.g||(n.h=null),o.next=null),o}class ye{constructor(){this.h=this.g=null}add(o,a){const h=ut.get();h.set(o,a),this.h?this.h.next=h:this.g=h,this.h=h}}var ut=new Z(()=>new va,n=>n.reset());class va{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,ft=!1,Rn=new ye,zi=()=>{const n=u.Promise.resolve(void 0);dt=()=>{n.then(_a)}};var _a=()=>{for(var n;n=f();){try{n.h.call(n.g)}catch(a){I(a)}var o=ut;o.j(n),100>o.h&&(o.h++,n.next=o.g,o.g=n)}ft=!1};function Re(){this.s=this.s,this.C=this.C}Re.prototype.s=!1,Re.prototype.ma=function(){this.s||(this.s=!0,this.N())},Re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $(n,o){this.type=n,this.g=this.target=o,this.defaultPrevented=!1}$.prototype.h=function(){this.defaultPrevented=!0};var wa=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var n=!1,o=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const a=()=>{};u.addEventListener("test",a,o),u.removeEventListener("test",a,o)}catch{}return n}();function pt(n,o){if($.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var a=this.type=n.type,h=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=o,o=n.relatedTarget){if(se){e:{try{F(o.nodeName);var _=!0;break e}catch{}_=!1}_||(o=null)}}else a=="mouseover"?o=n.fromElement:a=="mouseout"&&(o=n.toElement);this.relatedTarget=o,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Ia[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&pt.aa.h.call(this)}}C(pt,$);var Ia={2:"touch",3:"pen",4:"mouse"};pt.prototype.h=function(){pt.aa.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),ba=0;function Ta(n,o,a,h,_){this.listener=n,this.proxy=null,this.src=o,this.type=a,this.capture=!!h,this.ha=_,this.key=++ba,this.da=this.fa=!1}function Bt(n){n.da=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Vt(n){this.src=n,this.g={},this.h=0}Vt.prototype.add=function(n,o,a,h,_){var b=n.toString();n=this.g[b],n||(n=this.g[b]=[],this.h++);var E=Nn(n,o,h,_);return-1<E?(o=n[E],a||(o.fa=!1)):(o=new Ta(o,this.src,b,!!h,_),o.fa=a,n.push(o)),o};function Cn(n,o){var a=o.type;if(a in n.g){var h=n.g[a],_=Array.prototype.indexOf.call(h,o,void 0),b;(b=0<=_)&&Array.prototype.splice.call(h,_,1),b&&(Bt(o),n.g[a].length==0&&(delete n.g[a],n.h--))}}function Nn(n,o,a,h){for(var _=0;_<n.length;++_){var b=n[_];if(!b.da&&b.listener==o&&b.capture==!!a&&b.ha==h)return _}return-1}var xn="closure_lm_"+(1e6*Math.random()|0),Pn={};function Gi(n,o,a,h,_){if(Array.isArray(o)){for(var b=0;b<o.length;b++)Gi(n,o[b],a,h,_);return null}return a=Ki(a),n&&n[Ft]?n.K(o,a,T(h)?!!h.capture:!!h,_):Ea(n,o,a,!1,h,_)}function Ea(n,o,a,h,_,b){if(!o)throw Error("Invalid event type");var E=T(_)?!!_.capture:!!_,L=Dn(n);if(L||(n[xn]=L=new Vt(n)),a=L.add(o,a,h,E,b),a.proxy)return a;if(h=Aa(),a.proxy=h,h.src=n,h.listener=a,n.addEventListener)wa||(_=E),_===void 0&&(_=!1),n.addEventListener(o.toString(),h,_);else if(n.attachEvent)n.attachEvent(qi(o.toString()),h);else if(n.addListener&&n.removeListener)n.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Aa(){function n(a){return o.call(n.src,n.listener,a)}const o=ka;return n}function Wi(n,o,a,h,_){if(Array.isArray(o))for(var b=0;b<o.length;b++)Wi(n,o[b],a,h,_);else h=T(h)?!!h.capture:!!h,a=Ki(a),n&&n[Ft]?(n=n.i,o=String(o).toString(),o in n.g&&(b=n.g[o],a=Nn(b,a,h,_),-1<a&&(Bt(b[a]),Array.prototype.splice.call(b,a,1),b.length==0&&(delete n.g[o],n.h--)))):n&&(n=Dn(n))&&(o=n.g[o.toString()],n=-1,o&&(n=Nn(o,a,h,_)),(a=-1<n?o[n]:null)&&On(a))}function On(n){if(typeof n!="number"&&n&&!n.da){var o=n.src;if(o&&o[Ft])Cn(o.i,n);else{var a=n.type,h=n.proxy;o.removeEventListener?o.removeEventListener(a,h,n.capture):o.detachEvent?o.detachEvent(qi(a),h):o.addListener&&o.removeListener&&o.removeListener(h),(a=Dn(o))?(Cn(a,n),a.h==0&&(a.src=null,o[xn]=null)):Bt(n)}}}function qi(n){return n in Pn?Pn[n]:Pn[n]="on"+n}function ka(n,o){if(n.da)n=!0;else{o=new pt(o,this);var a=n.listener,h=n.ha||n.src;n.fa&&On(n),n=a.call(h,o)}return n}function Dn(n){return n=n[xn],n instanceof Vt?n:null}var Ln="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(n){return typeof n=="function"?n:(n[Ln]||(n[Ln]=function(o){return n.handleEvent(o)}),n[Ln])}function z(){Re.call(this),this.i=new Vt(this),this.M=this,this.F=null}C(z,Re),z.prototype[Ft]=!0,z.prototype.removeEventListener=function(n,o,a,h){Wi(this,n,o,a,h)};function K(n,o){var a,h=n.F;if(h)for(a=[];h;h=h.F)a.push(h);if(n=n.M,h=o.type||o,typeof o=="string")o=new $(o,n);else if(o instanceof $)o.target=o.target||n;else{var _=o;o=new $(h,n),m(o,_)}if(_=!0,a)for(var b=a.length-1;0<=b;b--){var E=o.g=a[b];_=Ht(E,h,!0,o)&&_}if(E=o.g=n,_=Ht(E,h,!0,o)&&_,_=Ht(E,h,!1,o)&&_,a)for(b=0;b<a.length;b++)E=o.g=a[b],_=Ht(E,h,!1,o)&&_}z.prototype.N=function(){if(z.aa.N.call(this),this.i){var n=this.i,o;for(o in n.g){for(var a=n.g[o],h=0;h<a.length;h++)Bt(a[h]);delete n.g[o],n.h--}}this.F=null},z.prototype.K=function(n,o,a,h){return this.i.add(String(n),o,!1,a,h)},z.prototype.L=function(n,o,a,h){return this.i.add(String(n),o,!0,a,h)};function Ht(n,o,a,h){if(o=n.i.g[String(o)],!o)return!0;o=o.concat();for(var _=!0,b=0;b<o.length;++b){var E=o[b];if(E&&!E.da&&E.capture==a){var L=E.listener,H=E.ha||E.src;E.fa&&Cn(n.i,E),_=L.call(H,h)!==!1&&_}}return _&&!h.defaultPrevented}function Ji(n,o,a){if(typeof n=="function")a&&(n=R(n,a));else if(n&&typeof n.handleEvent=="function")n=R(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(o)?-1:u.setTimeout(n,o||0)}function Xi(n){n.g=Ji(()=>{n.g=null,n.i&&(n.i=!1,Xi(n))},n.l);const o=n.h;n.h=null,n.m.apply(null,o)}class Sa extends Re{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:Xi(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(n){Re.call(this),this.h=n,this.g={}}C(gt,Re);var Yi=[];function Zi(n){V(n.g,function(o,a){this.g.hasOwnProperty(a)&&On(o)},n),n.g={}}gt.prototype.N=function(){gt.aa.N.call(this),Zi(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mn=u.JSON.stringify,Ra=u.JSON.parse,Ca=class{stringify(n){return u.JSON.stringify(n,void 0)}parse(n){return u.JSON.parse(n,void 0)}};function jn(){}jn.prototype.h=null;function Qi(n){return n.h||(n.h=n.i())}function Na(){}var mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Un(){$.call(this,"d")}C(Un,$);function Fn(){$.call(this,"c")}C(Fn,$);var Qe={},es=null;function Bn(){return es=es||new z}Qe.La="serverreachability";function ts(n){$.call(this,Qe.La,n)}C(ts,$);function yt(n){const o=Bn();K(o,new ts(o))}Qe.STAT_EVENT="statevent";function ns(n,o){$.call(this,Qe.STAT_EVENT,n),this.stat=o}C(ns,$);function J(n){const o=Bn();K(o,new ns(o,n))}Qe.Ma="timingevent";function is(n,o){$.call(this,Qe.Ma,n),this.size=o}C(is,$);function vt(n,o){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){n()},o)}function _t(){this.g=!0}_t.prototype.xa=function(){this.g=!1};function xa(n,o,a,h,_,b){n.info(function(){if(n.g)if(b)for(var E="",L=b.split("&"),H=0;H<L.length;H++){var O=L[H].split("=");if(1<O.length){var G=O[0];O=O[1];var W=G.split("_");E=2<=W.length&&W[1]=="type"?E+(G+"="+O+"&"):E+(G+"=redacted&")}}else E=null;else E=b;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+o+`
`+a+`
`+E})}function Pa(n,o,a,h,_,b,E){n.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+o+`
`+a+`
`+b+" "+E})}function et(n,o,a,h){n.info(function(){return"XMLHTTP TEXT ("+o+"): "+Da(n,a)+(h?" "+h:"")})}function Oa(n,o){n.info(function(){return"TIMEOUT: "+o})}_t.prototype.info=function(){};function Da(n,o){if(!n.g)return o;if(!o)return null;try{var a=JSON.parse(o);if(a){for(n=0;n<a.length;n++)if(Array.isArray(a[n])){var h=a[n];if(!(2>h.length)){var _=h[1];if(Array.isArray(_)&&!(1>_.length)){var b=_[0];if(b!="noop"&&b!="stop"&&b!="close")for(var E=1;E<_.length;E++)_[E]=""}}}}return Mn(a)}catch{return o}}var Vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},La={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hn;function $t(){}C($t,jn),$t.prototype.g=function(){return new XMLHttpRequest},$t.prototype.i=function(){return{}},Hn=new $t;function Ce(n,o,a,h){this.j=n,this.i=o,this.l=a,this.R=h||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ss}function ss(){this.i=null,this.g="",this.h=!1}var rs={},$n={};function zn(n,o,a){n.L=1,n.v=qt(ve(o)),n.m=a,n.P=!0,os(n,null)}function os(n,o){n.F=Date.now(),zt(n),n.A=ve(n.v);var a=n.A,h=n.R;Array.isArray(h)||(h=[String(h)]),ws(a.i,"t",h),n.C=0,a=n.j.J,n.h=new ss,n.g=Us(n.j,a?o:null,!n.m),0<n.O&&(n.M=new Sa(R(n.Y,n,n.g),n.O)),o=n.U,a=n.g,h=n.ca;var _="readystatechange";Array.isArray(_)||(_&&(Yi[0]=_.toString()),_=Yi);for(var b=0;b<_.length;b++){var E=Gi(a,_[b],h||o.handleEvent,!1,o.h||o);if(!E)break;o.g[E.key]=E}o=n.H?d(n.H):{},n.m?(n.u||(n.u="POST"),o["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.m,o)):(n.u="GET",n.g.ea(n.A,n.u,null,o)),yt(),xa(n.i,n.u,n.A,n.l,n.R,n.m)}Ce.prototype.ca=function(n){n=n.target;const o=this.M;o&&_e(n)==3?o.j():this.Y(n)},Ce.prototype.Y=function(n){try{if(n==this.g)e:{const W=_e(this.g);var o=this.g.Ba();const it=this.g.Z();if(!(3>W)&&(W!=3||this.g&&(this.h.h||this.g.oa()||Ss(this.g)))){this.J||W!=4||o==7||(o==8||0>=it?yt(3):yt(2)),Gn(this);var a=this.g.Z();this.X=a;t:if(as(this)){var h=Ss(this.g);n="";var _=h.length,b=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ve(this),wt(this);var E="";break t}this.h.i=new u.TextDecoder}for(o=0;o<_;o++)this.h.h=!0,n+=this.h.i.decode(h[o],{stream:!(b&&o==_-1)});h.length=0,this.h.g+=n,this.C=0,E=this.h.g}else E=this.g.oa();if(this.o=a==200,Pa(this.i,this.u,this.A,this.l,this.R,W,a),this.o){if(this.T&&!this.K){t:{if(this.g){var L,H=this.g;if((L=H.g?H.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(L)){var O=L;break t}}O=null}if(a=O)et(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wn(this,a);else{this.o=!1,this.s=3,J(12),Ve(this),wt(this);break e}}if(this.P){a=!0;let ce;for(;!this.J&&this.C<E.length;)if(ce=Ma(this,E),ce==$n){W==4&&(this.s=4,J(14),a=!1),et(this.i,this.l,null,"[Incomplete Response]");break}else if(ce==rs){this.s=4,J(15),et(this.i,this.l,E,"[Invalid Chunk]"),a=!1;break}else et(this.i,this.l,ce,null),Wn(this,ce);if(as(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||E.length!=0||this.h.h||(this.s=1,J(16),a=!1),this.o=this.o&&a,!a)et(this.i,this.l,E,"[Invalid Chunked Response]"),Ve(this),wt(this);else if(0<E.length&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.ba&&!G.M&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),Zn(G),G.M=!0,J(11))}}else et(this.i,this.l,E,null),Wn(this,E);W==4&&Ve(this),this.o&&!this.J&&(W==4?Ds(this.j,this):(this.o=!1,zt(this)))}else Qa(this.g),a==400&&0<E.indexOf("Unknown SID")?(this.s=3,J(12)):(this.s=0,J(13)),Ve(this),wt(this)}}}catch{}finally{}};function as(n){return n.g?n.u=="GET"&&n.L!=2&&n.j.Ca:!1}function Ma(n,o){var a=n.C,h=o.indexOf(`
`,a);return h==-1?$n:(a=Number(o.substring(a,h)),isNaN(a)?rs:(h+=1,h+a>o.length?$n:(o=o.slice(h,h+a),n.C=h+a,o)))}Ce.prototype.cancel=function(){this.J=!0,Ve(this)};function zt(n){n.S=Date.now()+n.I,cs(n,n.I)}function cs(n,o){if(n.B!=null)throw Error("WatchDog timer not null");n.B=vt(R(n.ba,n),o)}function Gn(n){n.B&&(u.clearTimeout(n.B),n.B=null)}Ce.prototype.ba=function(){this.B=null;const n=Date.now();0<=n-this.S?(Oa(this.i,this.A),this.L!=2&&(yt(),J(17)),Ve(this),this.s=2,wt(this)):cs(this,this.S-n)};function wt(n){n.j.G==0||n.J||Ds(n.j,n)}function Ve(n){Gn(n);var o=n.M;o&&typeof o.ma=="function"&&o.ma(),n.M=null,Zi(n.U),n.g&&(o=n.g,n.g=null,o.abort(),o.ma())}function Wn(n,o){try{var a=n.j;if(a.G!=0&&(a.g==n||qn(a.h,n))){if(!n.K&&qn(a.h,n)&&a.G==3){try{var h=a.Da.g.parse(o)}catch{h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){e:if(!a.u){if(a.g)if(a.g.F+3e3<n.F)Qt(a),Yt(a);else break e;Yn(a),J(18)}}else a.za=_[1],0<a.za-a.T&&37500>_[2]&&a.F&&a.v==0&&!a.C&&(a.C=vt(R(a.Za,a),6e3));if(1>=us(a.h)&&a.ca){try{a.ca()}catch{}a.ca=void 0}}else $e(a,11)}else if((n.K||a.g==n)&&Qt(a),!q(o))for(_=a.Da.g.parse(o),o=0;o<_.length;o++){let O=_[o];if(a.T=O[0],O=O[1],a.G==2)if(O[0]=="c"){a.K=O[1],a.ia=O[2];const G=O[3];G!=null&&(a.la=G,a.j.info("VER="+a.la));const W=O[4];W!=null&&(a.Aa=W,a.j.info("SVER="+a.Aa));const it=O[5];it!=null&&typeof it=="number"&&0<it&&(h=1.5*it,a.L=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const ce=n.g;if(ce){const en=ce.g?ce.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(en){var b=h.h;b.g||en.indexOf("spdy")==-1&&en.indexOf("quic")==-1&&en.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Kn(b,b.h),b.h=null))}if(h.D){const Qn=ce.g?ce.g.getResponseHeader("X-HTTP-Session-Id"):null;Qn&&(h.ya=Qn,M(h.I,h.D,Qn))}}a.G=3,a.l&&a.l.ua(),a.ba&&(a.R=Date.now()-n.F,a.j.info("Handshake RTT: "+a.R+"ms")),h=a;var E=n;if(h.qa=js(h,h.J?h.ia:null,h.W),E.K){ds(h.h,E);var L=E,H=h.L;H&&(L.I=H),L.B&&(Gn(L),zt(L)),h.g=E}else Ps(h);0<a.i.length&&Zt(a)}else O[0]!="stop"&&O[0]!="close"||$e(a,7);else a.G==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?$e(a,7):Xn(a):O[0]!="noop"&&a.l&&a.l.ta(O),a.v=0)}}yt(4)}catch{}}var ja=class{constructor(n,o){this.g=n,this.map=o}};function ls(n){this.l=n||10,u.PerformanceNavigationTiming?(n=u.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hs(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function us(n){return n.h?1:n.g?n.g.size:0}function qn(n,o){return n.h?n.h==o:n.g?n.g.has(o):!1}function Kn(n,o){n.g?n.g.add(o):n.h=o}function ds(n,o){n.h&&n.h==o?n.h=null:n.g&&n.g.has(o)&&n.g.delete(o)}ls.prototype.cancel=function(){if(this.i=fs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function fs(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let o=n.i;for(const a of n.g.values())o=o.concat(a.D);return o}return j(n.i)}function Ua(n){if(n.V&&typeof n.V=="function")return n.V();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(g(n)){for(var o=[],a=n.length,h=0;h<a;h++)o.push(n[h]);return o}o=[],a=0;for(h in n)o[a++]=n[h];return o}function Fa(n){if(n.na&&typeof n.na=="function")return n.na();if(!n.V||typeof n.V!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(g(n)||typeof n=="string"){var o=[];n=n.length;for(var a=0;a<n;a++)o.push(a);return o}o=[],a=0;for(const h in n)o[a++]=h;return o}}}function ps(n,o){if(n.forEach&&typeof n.forEach=="function")n.forEach(o,void 0);else if(g(n)||typeof n=="string")Array.prototype.forEach.call(n,o,void 0);else for(var a=Fa(n),h=Ua(n),_=h.length,b=0;b<_;b++)o.call(void 0,h[b],a&&a[b],n)}var gs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ba(n,o){if(n){n=n.split("&");for(var a=0;a<n.length;a++){var h=n[a].indexOf("="),_=null;if(0<=h){var b=n[a].substring(0,h);_=n[a].substring(h+1)}else b=n[a];o(b,_?decodeURIComponent(_.replace(/\+/g," ")):"")}}}function He(n){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,n instanceof He){this.h=n.h,Gt(this,n.j),this.o=n.o,this.g=n.g,Wt(this,n.s),this.l=n.l;var o=n.i,a=new Tt;a.i=o.i,o.g&&(a.g=new Map(o.g),a.h=o.h),ms(this,a),this.m=n.m}else n&&(o=String(n).match(gs))?(this.h=!1,Gt(this,o[1]||"",!0),this.o=It(o[2]||""),this.g=It(o[3]||"",!0),Wt(this,o[4]),this.l=It(o[5]||"",!0),ms(this,o[6]||"",!0),this.m=It(o[7]||"")):(this.h=!1,this.i=new Tt(null,this.h))}He.prototype.toString=function(){var n=[],o=this.j;o&&n.push(bt(o,ys,!0),":");var a=this.g;return(a||o=="file")&&(n.push("//"),(o=this.o)&&n.push(bt(o,ys,!0),"@"),n.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.s,a!=null&&n.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&n.push("/"),n.push(bt(a,a.charAt(0)=="/"?$a:Ha,!0))),(a=this.i.toString())&&n.push("?",a),(a=this.m)&&n.push("#",bt(a,Ga)),n.join("")};function ve(n){return new He(n)}function Gt(n,o,a){n.j=a?It(o,!0):o,n.j&&(n.j=n.j.replace(/:$/,""))}function Wt(n,o){if(o){if(o=Number(o),isNaN(o)||0>o)throw Error("Bad port number "+o);n.s=o}else n.s=null}function ms(n,o,a){o instanceof Tt?(n.i=o,Wa(n.i,n.h)):(a||(o=bt(o,za)),n.i=new Tt(o,n.h))}function M(n,o,a){n.i.set(o,a)}function qt(n){return M(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function It(n,o){return n?o?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function bt(n,o,a){return typeof n=="string"?(n=encodeURI(n).replace(o,Va),a&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Va(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ys=/[#\/\?@]/g,Ha=/[#\?:]/g,$a=/[#\?]/g,za=/[#\?@]/g,Ga=/#/g;function Tt(n,o){this.h=this.g=null,this.i=n||null,this.j=!!o}function Ne(n){n.g||(n.g=new Map,n.h=0,n.i&&Ba(n.i,function(o,a){n.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}t=Tt.prototype,t.add=function(n,o){Ne(this),this.i=null,n=tt(this,n);var a=this.g.get(n);return a||this.g.set(n,a=[]),a.push(o),this.h+=1,this};function vs(n,o){Ne(n),o=tt(n,o),n.g.has(o)&&(n.i=null,n.h-=n.g.get(o).length,n.g.delete(o))}function _s(n,o){return Ne(n),o=tt(n,o),n.g.has(o)}t.forEach=function(n,o){Ne(this),this.g.forEach(function(a,h){a.forEach(function(_){n.call(o,_,h,this)},this)},this)},t.na=function(){Ne(this);const n=Array.from(this.g.values()),o=Array.from(this.g.keys()),a=[];for(let h=0;h<o.length;h++){const _=n[h];for(let b=0;b<_.length;b++)a.push(o[h])}return a},t.V=function(n){Ne(this);let o=[];if(typeof n=="string")_s(this,n)&&(o=o.concat(this.g.get(tt(this,n))));else{n=Array.from(this.g.values());for(let a=0;a<n.length;a++)o=o.concat(n[a])}return o},t.set=function(n,o){return Ne(this),this.i=null,n=tt(this,n),_s(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[o]),this.h+=1,this},t.get=function(n,o){return n?(n=this.V(n),0<n.length?String(n[0]):o):o};function ws(n,o,a){vs(n,o),0<a.length&&(n.i=null,n.g.set(tt(n,o),j(a)),n.h+=a.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],o=Array.from(this.g.keys());for(var a=0;a<o.length;a++){var h=o[a];const b=encodeURIComponent(String(h)),E=this.V(h);for(h=0;h<E.length;h++){var _=b;E[h]!==""&&(_+="="+encodeURIComponent(String(E[h]))),n.push(_)}}return this.i=n.join("&")};function tt(n,o){return o=String(o),n.j&&(o=o.toLowerCase()),o}function Wa(n,o){o&&!n.j&&(Ne(n),n.i=null,n.g.forEach(function(a,h){var _=h.toLowerCase();h!=_&&(vs(this,h),ws(this,_,a))},n)),n.j=o}function qa(n,o){const a=new _t;if(u.Image){const h=new Image;h.onload=P(xe,a,"TestLoadImage: loaded",!0,o,h),h.onerror=P(xe,a,"TestLoadImage: error",!1,o,h),h.onabort=P(xe,a,"TestLoadImage: abort",!1,o,h),h.ontimeout=P(xe,a,"TestLoadImage: timeout",!1,o,h),u.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=n}else o(!1)}function Ka(n,o){const a=new _t,h=new AbortController,_=setTimeout(()=>{h.abort(),xe(a,"TestPingServer: timeout",!1,o)},1e4);fetch(n,{signal:h.signal}).then(b=>{clearTimeout(_),b.ok?xe(a,"TestPingServer: ok",!0,o):xe(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(_),xe(a,"TestPingServer: error",!1,o)})}function xe(n,o,a,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(a)}catch{}}function Ja(){this.g=new Ca}function Xa(n,o,a){const h=a||"";try{ps(n,function(_,b){let E=_;T(_)&&(E=Mn(_)),o.push(h+b+"="+encodeURIComponent(E))})}catch(_){throw o.push(h+"type="+encodeURIComponent("_badmap")),_}}function Kt(n){this.l=n.Ub||null,this.j=n.eb||!1}C(Kt,jn),Kt.prototype.g=function(){return new Jt(this.l,this.j)},Kt.prototype.i=function(n){return function(){return n}}({});function Jt(n,o){z.call(this),this.D=n,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Jt,z),t=Jt.prototype,t.open=function(n,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=n,this.A=o,this.readyState=1,At(this)},t.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const o={headers:this.u,method:this.B,credentials:this.m,cache:void 0};n&&(o.body=n),(this.D||u).fetch(new Request(this.A,o)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Et(this)),this.readyState=0},t.Sa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,At(this)),this.g&&(this.readyState=3,At(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Is(this)}else n.text().then(this.Ra.bind(this),this.ga.bind(this))};function Is(n){n.j.read().then(n.Pa.bind(n)).catch(n.ga.bind(n))}t.Pa=function(n){if(this.g){if(this.o&&n.value)this.response.push(n.value);else if(!this.o){var o=n.value?n.value:new Uint8Array(0);(o=this.v.decode(o,{stream:!n.done}))&&(this.response=this.responseText+=o)}n.done?Et(this):At(this),this.readyState==3&&Is(this)}},t.Ra=function(n){this.g&&(this.response=this.responseText=n,Et(this))},t.Qa=function(n){this.g&&(this.response=n,Et(this))},t.ga=function(){this.g&&Et(this)};function Et(n){n.readyState=4,n.l=null,n.j=null,n.v=null,At(n)}t.setRequestHeader=function(n,o){this.u.append(n,o)},t.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,n.push(a[0]+": "+a[1]),a=o.next();return n.join(`\r
`)};function At(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Jt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});function bs(n){let o="";return V(n,function(a,h){o+=h,o+=":",o+=a,o+=`\r
`}),o}function Jn(n,o,a){e:{for(h in a){var h=!1;break e}h=!0}h||(a=bs(a),typeof n=="string"?a!=null&&encodeURIComponent(String(a)):M(n,o,a))}function B(n){z.call(this),this.headers=new Map,this.o=n||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(B,z);var Ya=/^https?$/i,Za=["POST","PUT"];t=B.prototype,t.Ha=function(n){this.J=n},t.ea=function(n,o,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+n);o=o?o.toUpperCase():"GET",this.D=n,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hn.g(),this.v=this.o?Qi(this.o):Qi(Hn),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(o,String(n),!0),this.B=!1}catch(b){Ts(this,b);return}if(n=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)a.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const b of h.keys())a.set(b,h.get(b));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(b=>b.toLowerCase()=="content-type"),_=u.FormData&&n instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Za,o,void 0))||h||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,E]of a)this.g.setRequestHeader(b,E);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ks(this),this.u=!0,this.g.send(n),this.u=!1}catch(b){Ts(this,b)}};function Ts(n,o){n.h=!1,n.g&&(n.j=!0,n.g.abort(),n.j=!1),n.l=o,n.m=5,Es(n),Xt(n)}function Es(n){n.A||(n.A=!0,K(n,"complete"),K(n,"error"))}t.abort=function(n){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=n||7,K(this,"complete"),K(this,"abort"),Xt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xt(this,!0)),B.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?As(this):this.bb())},t.bb=function(){As(this)};function As(n){if(n.h&&typeof l<"u"&&(!n.v[1]||_e(n)!=4||n.Z()!=2)){if(n.u&&_e(n)==4)Ji(n.Ea,0,n);else if(K(n,"readystatechange"),_e(n)==4){n.h=!1;try{const E=n.Z();e:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var h;if(h=E===0){var _=String(n.D).match(gs)[1]||null;!_&&u.self&&u.self.location&&(_=u.self.location.protocol.slice(0,-1)),h=!Ya.test(_?_.toLowerCase():"")}a=h}if(a)K(n,"complete"),K(n,"success");else{n.m=6;try{var b=2<_e(n)?n.g.statusText:""}catch{b=""}n.l=b+" ["+n.Z()+"]",Es(n)}}finally{Xt(n)}}}}function Xt(n,o){if(n.g){ks(n);const a=n.g,h=n.v[0]?()=>{}:null;n.g=null,n.v=null,o||K(n,"ready");try{a.onreadystatechange=h}catch{}}}function ks(n){n.I&&(u.clearTimeout(n.I),n.I=null)}t.isActive=function(){return!!this.g};function _e(n){return n.g?n.g.readyState:0}t.Z=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(n){if(this.g){var o=this.g.responseText;return n&&o.indexOf(n)==0&&(o=o.substring(n.length)),Ra(o)}};function Ss(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.H){case"":case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Qa(n){const o={};n=(n.g&&2<=_e(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<n.length;h++){if(q(n[h]))continue;var a=y(n[h]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const b=o[_]||[];o[_]=b,b.push(a)}v(o,function(h){return h.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kt(n,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[n]||o}function Rs(n){this.Aa=0,this.i=[],this.j=new _t,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kt("failFast",!1,n),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kt("baseRetryDelayMs",5e3,n),this.cb=kt("retryDelaySeedMs",1e4,n),this.Wa=kt("forwardChannelMaxRetries",2,n),this.wa=kt("forwardChannelRequestTimeoutMs",2e4,n),this.pa=n&&n.xmlHttpFactory||void 0,this.Xa=n&&n.Tb||void 0,this.Ca=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.h=new ls(n&&n.concurrentRequestLimit),this.Da=new Ja,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=n&&n.Rb||!1,n&&n.xa&&this.j.xa(),n&&n.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&n&&n.detectBufferingProxy||!1,this.ja=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.ja=n.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Rs.prototype,t.la=8,t.G=1,t.connect=function(n,o,a,h){J(0),this.W=n,this.H=o||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.I=js(this,null,this.W),Zt(this)};function Xn(n){if(Cs(n),n.G==3){var o=n.U++,a=ve(n.I);if(M(a,"SID",n.K),M(a,"RID",o),M(a,"TYPE","terminate"),St(n,a),o=new Ce(n,n.j,o),o.L=2,o.v=qt(ve(a)),a=!1,u.navigator&&u.navigator.sendBeacon)try{a=u.navigator.sendBeacon(o.v.toString(),"")}catch{}!a&&u.Image&&(new Image().src=o.v,a=!0),a||(o.g=Us(o.j,null),o.g.ea(o.v)),o.F=Date.now(),zt(o)}Ms(n)}function Yt(n){n.g&&(Zn(n),n.g.cancel(),n.g=null)}function Cs(n){Yt(n),n.u&&(u.clearTimeout(n.u),n.u=null),Qt(n),n.h.cancel(),n.s&&(typeof n.s=="number"&&u.clearTimeout(n.s),n.s=null)}function Zt(n){if(!hs(n.h)&&!n.s){n.s=!0;var o=n.Ga;dt||zi(),ft||(dt(),ft=!0),Rn.add(o,n),n.B=0}}function ec(n,o){return us(n.h)>=n.h.j-(n.s?1:0)?!1:n.s?(n.i=o.D.concat(n.i),!0):n.G==1||n.G==2||n.B>=(n.Va?0:n.Wa)?!1:(n.s=vt(R(n.Ga,n,o),Ls(n,n.B)),n.B++,!0)}t.Ga=function(n){if(this.s)if(this.s=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const _=new Ce(this,this.j,n);let b=this.o;if(this.S&&(b?(b=d(b),m(b,this.S)):b=this.S),this.m!==null||this.O||(_.H=b,b=null),this.P)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break t}h=void 0}if(h===void 0)break;if(o+=h,4096<o){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=xs(this,_,o),a=ve(this.I),M(a,"RID",n),M(a,"CVER",22),this.D&&M(a,"X-HTTP-Session-Id",this.D),St(this,a),b&&(this.O?o="headers="+encodeURIComponent(String(bs(b)))+"&"+o:this.m&&Jn(a,this.m,b)),Kn(this.h,_),this.Ua&&M(a,"TYPE","init"),this.P?(M(a,"$req",o),M(a,"SID","null"),_.T=!0,zn(_,a,null)):zn(_,a,o),this.G=2}}else this.G==3&&(n?Ns(this,n):this.i.length==0||hs(this.h)||Ns(this))};function Ns(n,o){var a;o?a=o.l:a=n.U++;const h=ve(n.I);M(h,"SID",n.K),M(h,"RID",a),M(h,"AID",n.T),St(n,h),n.m&&n.o&&Jn(h,n.m,n.o),a=new Ce(n,n.j,a,n.B+1),n.m===null&&(a.H=n.o),o&&(n.i=o.D.concat(n.i)),o=xs(n,a,1e3),a.I=Math.round(.5*n.wa)+Math.round(.5*n.wa*Math.random()),Kn(n.h,a),zn(a,h,o)}function St(n,o){n.H&&V(n.H,function(a,h){M(o,h,a)}),n.l&&ps({},function(a,h){M(o,h,a)})}function xs(n,o,a){a=Math.min(n.i.length,a);var h=n.l?R(n.l.Na,n.l,n):null;e:{var _=n.i;let b=-1;for(;;){const E=["count="+a];b==-1?0<a?(b=_[0].g,E.push("ofs="+b)):b=0:E.push("ofs="+b);let L=!0;for(let H=0;H<a;H++){let O=_[H].g;const G=_[H].map;if(O-=b,0>O)b=Math.max(0,_[H].g-100),L=!1;else try{Xa(G,E,"req"+O+"_")}catch{h&&h(G)}}if(L){h=E.join("&");break e}}}return n=n.i.splice(0,a),o.D=n,h}function Ps(n){if(!n.g&&!n.u){n.Y=1;var o=n.Fa;dt||zi(),ft||(dt(),ft=!0),Rn.add(o,n),n.v=0}}function Yn(n){return n.g||n.u||3<=n.v?!1:(n.Y++,n.u=vt(R(n.Fa,n),Ls(n,n.v)),n.v++,!0)}t.Fa=function(){if(this.u=null,Os(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var n=2*this.R;this.j.info("BP detection timer enabled: "+n),this.A=vt(R(this.ab,this),n)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,J(10),Yt(this),Os(this))};function Zn(n){n.A!=null&&(u.clearTimeout(n.A),n.A=null)}function Os(n){n.g=new Ce(n,n.j,"rpc",n.Y),n.m===null&&(n.g.H=n.o),n.g.O=0;var o=ve(n.qa);M(o,"RID","rpc"),M(o,"SID",n.K),M(o,"AID",n.T),M(o,"CI",n.F?"0":"1"),!n.F&&n.ja&&M(o,"TO",n.ja),M(o,"TYPE","xmlhttp"),St(n,o),n.m&&n.o&&Jn(o,n.m,n.o),n.L&&(n.g.I=n.L);var a=n.g;n=n.ia,a.L=1,a.v=qt(ve(o)),a.m=null,a.P=!0,os(a,n)}t.Za=function(){this.C!=null&&(this.C=null,Yt(this),Yn(this),J(19))};function Qt(n){n.C!=null&&(u.clearTimeout(n.C),n.C=null)}function Ds(n,o){var a=null;if(n.g==o){Qt(n),Zn(n),n.g=null;var h=2}else if(qn(n.h,o))a=o.D,ds(n.h,o),h=1;else return;if(n.G!=0){if(o.o)if(h==1){a=o.m?o.m.length:0,o=Date.now()-o.F;var _=n.B;h=Bn(),K(h,new is(h,a)),Zt(n)}else Ps(n);else if(_=o.s,_==3||_==0&&0<o.X||!(h==1&&ec(n,o)||h==2&&Yn(n)))switch(a&&0<a.length&&(o=n.h,o.i=o.i.concat(a)),_){case 1:$e(n,5);break;case 4:$e(n,10);break;case 3:$e(n,6);break;default:$e(n,2)}}}function Ls(n,o){let a=n.Ta+Math.floor(Math.random()*n.cb);return n.isActive()||(a*=2),a*o}function $e(n,o){if(n.j.info("Error code "+o),o==2){var a=R(n.fb,n),h=n.Xa;const _=!h;h=new He(h||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Gt(h,"https"),qt(h),_?qa(h.toString(),a):Ka(h.toString(),a)}else J(2);n.G=0,n.l&&n.l.sa(o),Ms(n),Cs(n)}t.fb=function(n){n?(this.j.info("Successfully pinged google.com"),J(2)):(this.j.info("Failed to ping google.com"),J(1))};function Ms(n){if(n.G=0,n.ka=[],n.l){const o=fs(n.h);(o.length!=0||n.i.length!=0)&&(N(n.ka,o),N(n.ka,n.i),n.h.i.length=0,j(n.i),n.i.length=0),n.l.ra()}}function js(n,o,a){var h=a instanceof He?ve(a):new He(a);if(h.g!="")o&&(h.g=o+"."+h.g),Wt(h,h.s);else{var _=u.location;h=_.protocol,o=o?o+"."+_.hostname:_.hostname,_=+_.port;var b=new He(null);h&&Gt(b,h),o&&(b.g=o),_&&Wt(b,_),a&&(b.l=a),h=b}return a=n.D,o=n.ya,a&&o&&M(h,a,o),M(h,"VER",n.la),St(n,h),h}function Us(n,o,a){if(o&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return o=n.Ca&&!n.pa?new B(new Kt({eb:a})):new B(n.pa),o.Ha(n.J),o}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fs(){}t=Fs.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function re(n,o){z.call(this),this.g=new Rs(o),this.l=n,this.h=o&&o.messageUrlParams||null,n=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.o=n,n=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(n?n["X-WebChannel-Content-Type"]=o.messageContentType:n={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.va&&(n?n["X-WebChannel-Client-Profile"]=o.va:n={"X-WebChannel-Client-Profile":o.va}),this.g.S=n,(n=o&&o.Sb)&&!q(n)&&(this.g.m=n),this.v=o&&o.supportsCrossDomainXhr||!1,this.u=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!q(o)&&(this.g.D=o,n=this.h,n!==null&&o in n&&(n=this.h,o in n&&delete n[o])),this.j=new nt(this)}C(re,z),re.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},re.prototype.close=function(){Xn(this.g)},re.prototype.o=function(n){var o=this.g;if(typeof n=="string"){var a={};a.__data__=n,n=a}else this.u&&(a={},a.__data__=Mn(n),n=a);o.i.push(new ja(o.Ya++,n)),o.G==3&&Zt(o)},re.prototype.N=function(){this.g.l=null,delete this.j,Xn(this.g),delete this.g,re.aa.N.call(this)};function Bs(n){Un.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var o=n.__sm__;if(o){e:{for(const a in o){n=a;break e}n=void 0}(this.i=n)&&(n=this.i,o=o!==null&&n in o?o[n]:void 0),this.data=o}else this.data=n}C(Bs,Un);function Vs(){Fn.call(this),this.status=1}C(Vs,Fn);function nt(n){this.g=n}C(nt,Fs),nt.prototype.ua=function(){K(this.g,"a")},nt.prototype.ta=function(n){K(this.g,new Bs(n))},nt.prototype.sa=function(n){K(this.g,new Vs)},nt.prototype.ra=function(){K(this.g,"b")},re.prototype.send=re.prototype.o,re.prototype.open=re.prototype.m,re.prototype.close=re.prototype.close,Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,La.COMPLETE="complete",Na.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",z.prototype.listen=z.prototype.K,B.prototype.listenOnce=B.prototype.L,B.prototype.getLastError=B.prototype.Ka,B.prototype.getLastErrorCode=B.prototype.Ba,B.prototype.getStatus=B.prototype.Z,B.prototype.getResponseJson=B.prototype.Oa,B.prototype.getResponseText=B.prototype.oa,B.prototype.send=B.prototype.ea,B.prototype.setWithCredentials=B.prototype.Ha}).apply(typeof nn<"u"?nn:typeof self<"u"?self:typeof window<"u"?window:{});const vr="@firebase/firestore",_r="4.7.9";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut="11.4.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt=new In("@firebase/firestore");function he(t,...e){if(lt.logLevel<=D.DEBUG){const i=e.map(Mi);lt.debug(`Firestore (${Ut}): ${t}`,...i)}}function $o(t,...e){if(lt.logLevel<=D.ERROR){const i=e.map(Mi);lt.error(`Firestore (${Ut}): ${t}`,...i)}}function Xu(t,...e){if(lt.logLevel<=D.WARN){const i=e.map(Mi);lt.warn(`Firestore (${Ut}): ${t}`,...i)}}function Mi(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(i){return JSON.stringify(i)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t="Unexpected state"){const e=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+t;throw $o(e),new Error(e)}function Ct(t,e){t||ji()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends ae{constructor(e,i){super(e,i),this.code=e,this.message=i,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,i){this.user=i,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,i){e.enqueueRetryable(()=>i(X.UNAUTHENTICATED))}shutdown(){}}class Zu{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,i){this.changeListener=i,e.enqueueRetryable(()=>i(this.token.user))}shutdown(){this.changeListener=null}}class Qu{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,i){Ct(this.o===void 0);let s=this.i;const r=g=>this.i!==s?(s=this.i,i(g)):Promise.resolve();let c=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Nt,e.enqueueRetryable(()=>r(this.currentUser))};const l=()=>{const g=c;e.enqueueRetryable(async()=>{await g.promise,await r(this.currentUser)})},u=g=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(g=>u(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?u(g):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Nt)}},0),l()}getToken(){const e=this.i,i=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(i).then(s=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ct(typeof s.accessToken=="string"),new zo(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ct(e===null||typeof e=="string"),new X(e)}}class ed{constructor(e,i,s){this.l=e,this.h=i,this.P=s,this.type="FirstParty",this.user=X.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class td{constructor(e,i,s){this.l=e,this.h=i,this.P=s}getToken(){return Promise.resolve(new ed(this.l,this.h,this.P))}start(e,i){e.enqueueRetryable(()=>i(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nd{constructor(e,i){this.A=i,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,le(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,i){Ct(this.o===void 0);const s=c=>{c.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.R;return this.R=c.token,he("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?i(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const r=c=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>r(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?r(c):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new wr(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(i=>i?(Ct(typeof i.token=="string"),this.R=i.token,new wr(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function id(t){return t.name==="IndexedDbTransactionError"}const bi="(default)";class mn{constructor(e,i){this.projectId=e,this.database=i||bi}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database===bi}isEqual(e){return e instanceof mn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ir,x;(x=Ir||(Ir={}))[x.OK=0]="OK",x[x.CANCELLED=1]="CANCELLED",x[x.UNKNOWN=2]="UNKNOWN",x[x.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",x[x.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",x[x.NOT_FOUND=5]="NOT_FOUND",x[x.ALREADY_EXISTS=6]="ALREADY_EXISTS",x[x.PERMISSION_DENIED=7]="PERMISSION_DENIED",x[x.UNAUTHENTICATED=16]="UNAUTHENTICATED",x[x.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",x[x.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",x[x.ABORTED=10]="ABORTED",x[x.OUT_OF_RANGE=11]="OUT_OF_RANGE",x[x.UNIMPLEMENTED=12]="UNIMPLEMENTED",x[x.INTERNAL=13]="INTERNAL",x[x.UNAVAILABLE=14]="UNAVAILABLE",x[x.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ho([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=1048576;function ai(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,i,s=1e3,r=1.5,c=6e4){this.Ti=e,this.timerId=i,this.Go=s,this.zo=r,this.jo=c,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const i=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),r=Math.max(0,i-s);r>0&&he("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${i} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,i,s,r,c){this.asyncQueue=e,this.timerId=i,this.targetTimeMs=s,this.op=r,this.removalCallback=c,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,i,s,r,c){const l=Date.now()+s,u=new Ui(e,i,l,r,c);return u.start(s),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var br,Tr;(Tr=br||(br={}))._a="default",Tr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map;function cd(t,e,i,s){if(e===!0&&s===!0)throw new ee(Q.INVALID_ARGUMENT,`${t} and ${i} cannot be used together.`)}function ld(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ji()}function hd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ee(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const i=ld(t);throw new ee(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${i}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="firestore.googleapis.com",Ar=!0;class kr{constructor(e){var i,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Go,this.ssl=Ar}else this.host=e.host,this.ssl=(i=e.ssl)!==null&&i!==void 0?i:Ar;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<rd)throw new ee(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ad((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new ee(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new ee(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new ee(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wo{constructor(e,i,s,r){this._authCredentials=e,this._appCheckCredentials=i,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kr(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new Yu;switch(s.type){case"firstParty":return new td(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ee(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){const s=Er.get(i);s&&(he("ComponentProvider","Removing Datastore"),Er.delete(i),s.terminate())}(this),Promise.resolve()}}function ud(t,e,i,s={}){var r;const c=(t=hd(t,Wo))._getSettings(),l=Object.assign(Object.assign({},c),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${i}`;c.host!==Go&&c.host!==u&&Xu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:u,ssl:!1,emulatorOptions:s});if(!Fe(g,l)&&(t._setSettings(g),s.mockUserToken)){let T,A;if(typeof s.mockUserToken=="string")T=s.mockUserToken,A=X.MOCK_USER;else{T=Qr(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const k=s.mockUserToken.sub||s.mockUserToken.user_id;if(!k)throw new ee(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new X(k)}t._authCredentials=new Zu(new zo(T,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="AsyncQueue";class Rr{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new od(this,"async_queue_retry"),this.bu=()=>{const s=ai();s&&he(Sr,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.Su=e;const i=ai();i&&typeof i.addEventListener=="function"&&i.addEventListener("visibilitychange",this.bu)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const i=ai();i&&typeof i.removeEventListener=="function"&&i.removeEventListener("visibilitychange",this.bu)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const i=new Nt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(i.resolve,i.reject),i.promise)).then(()=>i.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!id(e))throw e;he(Sr,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const i=this.Su.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const r=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(s);throw $o("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.pu=!1,s))));return this.Su=i,i}enqueueAfterDelay(e,i,s){this.Du(),this.wu.indexOf(e)>-1&&(i=0);const r=Ui.createAndSchedule(this,e,i,s,c=>this.Fu(c));return this.fu.push(r),r}Du(){this.gu&&ji()}verifyOperationInProgress(){}async Mu(){let e;do e=this.Su,await e;while(e!==this.Su)}xu(e){for(const i of this.fu)if(i.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((i,s)=>i.targetTimeMs-s.targetTimeMs);for(const i of this.fu)if(i.skipDelay(),e!=="all"&&i.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const i=this.fu.indexOf(e);this.fu.splice(i,1)}}class dd extends Wo{constructor(e,i,s,r){super(e,i,s,r),this.type="firestore",this._queue=new Rr,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rr(e),this._firestoreClient=void 0,await e}}}function fd(t,e){const i=typeof t=="object"?t:bn(),s=typeof t=="string"?t:bi,r=Be(i,"firestore").getImmediate({identifier:s});if(!r._initialized){const c=Xr("firestore");c&&ud(r,...c)}return r}(function(e,i=!0){(function(r){Ut=r})(Ze),de(new oe("firestore",(s,{instanceIdentifier:r,options:c})=>{const l=s.getProvider("app").getImmediate(),u=new dd(new Qu(s.getProvider("auth-internal")),new nd(l,s.getProvider("app-check-internal")),function(T,A){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new ee(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(T.options.projectId,A)}(l,r),l);return c=Object.assign({useFetchStreams:i},c),u._setSettings(c),u},"PUBLIC").setMultipleInstances(!0)),te(vr,_r,e),te(vr,_r,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="firebasestorage.googleapis.com",pd="storageBucket",gd=2*60*1e3,md=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends ae{constructor(e,i,s=0){super(ci(e),`Firebase Storage: ${i} (${ci(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ci(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function ci(t){return"storage/"+t}function yd(){const t="An unknown error occurred, please check the error payload for server response.";return new me(ge.UNKNOWN,t)}function vd(){return new me(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function _d(){return new me(ge.CANCELED,"User canceled the upload/download.")}function wd(t){return new me(ge.INVALID_URL,"Invalid URL '"+t+"'.")}function Id(t){return new me(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Cr(t){return new me(ge.INVALID_ARGUMENT,t)}function Ko(){return new me(ge.APP_DELETED,"The Firebase app was deleted.")}function bd(t){return new me(ge.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,i){this.bucket=e,this.path_=i}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,i){let s;try{s=ue.makeFromUrl(e,i)}catch{return new ue(e,"")}if(s.path==="")return s;throw Id(e)}static makeFromUrl(e,i){let s=null;const r="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+r+l,"i"),g={bucket:1,path:3};function T(F){F.path_=decodeURIComponent(F.path)}const A="v[A-Za-z0-9_]+",k=i.replace(/[.]/g,"\\."),R="(/([^?#]*).*)?$",P=new RegExp(`^https?://${k}/${A}/b/${r}/o${R}`,"i"),C={bucket:1,path:3},j=i===qo?"(?:storage.googleapis.com|storage.cloud.google.com)":i,N="([^?#]*)",Z=new RegExp(`^https?://${j}/${r}/${N}`,"i"),U=[{regex:u,indices:g,postModify:c},{regex:P,indices:C,postModify:T},{regex:Z,indices:{bucket:1,path:2},postModify:T}];for(let F=0;F<U.length;F++){const se=U[F],V=se.regex.exec(e);if(V){const v=V[se.indices.bucket];let d=V[se.indices.path];d||(d=""),s=new ue(v,d),se.postModify(s);break}}if(s==null)throw wd(e);return s}}class Td{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e,i){let s=1,r=null,c=null,l=!1,u=0;function g(){return u===2}let T=!1;function A(...N){T||(T=!0,e.apply(null,N))}function k(N){r=setTimeout(()=>{r=null,t(P,g())},N)}function R(){c&&clearTimeout(c)}function P(N,...Z){if(T){R();return}if(N){R(),A.call(null,N,...Z);return}if(g()||l){R(),A.call(null,N,...Z);return}s<64&&(s*=2);let U;u===1?(u=2,U=0):U=(s+Math.random())*1e3,k(U)}let C=!1;function j(N){C||(C=!0,R(),!T&&(r!==null?(N||(u=2),clearTimeout(r),k(0)):N||(u=1)))}return k(0),c=setTimeout(()=>{l=!0,j(!0)},i),j}function Ad(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t){return t!==void 0}function Nr(t,e,i,s){if(s<e)throw Cr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>i)throw Cr(`Invalid value for '${t}'. Expected ${i} or less.`)}function Sd(t){const e=encodeURIComponent;let i="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);i=i+r+"&"}return i=i.slice(0,-1),i}var yn;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yn||(yn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){const i=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,c=e.indexOf(t)!==-1;return i||r||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,i,s,r,c,l,u,g,T,A,k,R=!0){this.url_=e,this.method_=i,this.headers_=s,this.body_=r,this.successCodes_=c,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=g,this.timeout_=T,this.progressCallback_=A,this.connectionFactory_=k,this.retry=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((P,C)=>{this.resolve_=P,this.reject_=C,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new sn(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const l=u=>{const g=u.loaded,T=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,T)};this.progressCallback_!==null&&c.addUploadProgressListener(l),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(l),this.pendingConnection_=null;const u=c.getErrorCode()===yn.NO_ERROR,g=c.getStatus();if(!u||Rd(g,this.additionalRetryCodes_)&&this.retry){const A=c.getErrorCode()===yn.ABORT;s(!1,new sn(!1,null,A));return}const T=this.successCodes_.indexOf(g)!==-1;s(!0,new sn(T,c))})},i=(s,r)=>{const c=this.resolve_,l=this.reject_,u=r.connection;if(r.wasSuccessCode)try{const g=this.callback_(u,u.getResponse());kd(g)?c(g):c()}catch(g){l(g)}else if(u!==null){const g=yd();g.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,g)):l(g)}else if(r.canceled){const g=this.appDelete_?Ko():_d();l(g)}else{const g=vd();l(g)}};this.canceled_?i(!1,new sn(!1,null,!0)):this.backoffId_=Ed(e,i,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ad(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class sn{constructor(e,i,s){this.wasSuccessCode=e,this.connection=i,this.canceled=!!s}}function Nd(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xd(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Pd(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Od(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Dd(t,e,i,s,r,c,l=!0){const u=Sd(t.urlParams),g=t.url+u,T=Object.assign({},t.headers);return Pd(T,e),Nd(T,i),xd(T,c),Od(T,s),new Cd(g,t.method,T,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Md(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,i){this._service=e,i instanceof ue?this._location=i:this._location=ue.makeFromUrl(i,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,i){return new vn(e,i)}get root(){const e=new ue(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Md(this._location.path)}get storage(){return this._service}get parent(){const e=Ld(this._location.path);if(e===null)return null;const i=new ue(this._location.bucket,e);return new vn(this._service,i)}_throwIfRoot(e){if(this._location.path==="")throw bd(e)}}function xr(t,e){const i=e?.[pd];return i==null?null:ue.makeFromBucketSpec(i,t)}function jd(t,e,i,s={}){t.host=`${e}:${i}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Qr(r,t.app.options.projectId))}class Ud{constructor(e,i,s,r,c){this.app=e,this._authProvider=i,this._appCheckProvider=s,this._url=r,this._firebaseVersion=c,this._bucket=null,this._host=qo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gd,this._maxUploadRetryTime=md,this._requests=new Set,r!=null?this._bucket=ue.makeFromBucketSpec(r,this._host):this._bucket=xr(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ue.makeFromBucketSpec(this._url,e):this._bucket=xr(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Nr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Nr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const i=await e.getToken();if(i!==null)return i.accessToken}return null}async _getAppCheckToken(){if(le(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vn(this,e)}_makeRequest(e,i,s,r,c=!0){if(this._deleted)return new Td(Ko());{const l=Dd(e,this._appId,s,r,i,this._firebaseVersion,c);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,i){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,i,s,r).getPromise()}}const Pr="@firebase/storage",Or="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="storage";function Fd(t=bn(),e){t=Se(t);const s=Be(t,Jo).getImmediate({identifier:e}),r=Xr("storage");return r&&Bd(s,...r),s}function Bd(t,e,i,s={}){jd(t,e,i,s)}function Vd(t,{instanceIdentifier:e}){const i=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Ud(i,s,r,e,Ze)}function Hd(){de(new oe(Jo,Vd,"PUBLIC").setMultipleInstances(!0)),te(Pr,Or,""),te(Pr,Or,"esm2017")}Hd();const Xo="@firebase/installations",Fi="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=1e4,Zo=`w:${Fi}`,Qo="FIS_v2",$d="https://firebaseinstallations.googleapis.com/v1",zd=60*60*1e3,Gd="installations",Wd="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Je=new Ye(Gd,Wd,qd);function ea(t){return t instanceof ae&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta({projectId:t}){return`${$d}/projects/${t}/installations`}function na(t){return{token:t.token,requestStatus:2,expiresIn:Jd(t.expiresIn),creationTime:Date.now()}}async function ia(t,e){const s=(await e.json()).error;return Je.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function sa({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Kd(t,{refreshToken:e}){const i=sa(t);return i.append("Authorization",Xd(e)),i}async function ra(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Jd(t){return Number(t.replace("s","000"))}function Xd(t){return`${Qo} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yd({appConfig:t,heartbeatServiceProvider:e},{fid:i}){const s=ta(t),r=sa(t),c=e.getImmediate({optional:!0});if(c){const T=await c.getHeartbeatsHeader();T&&r.append("x-firebase-client",T)}const l={fid:i,authVersion:Qo,appId:t.appId,sdkVersion:Zo},u={method:"POST",headers:r,body:JSON.stringify(l)},g=await ra(()=>fetch(s,u));if(g.ok){const T=await g.json();return{fid:T.fid||i,registrationStatus:2,refreshToken:T.refreshToken,authToken:na(T.authToken)}}else throw await ia("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=/^[cdef][\w-]{21}$/,Ti="";function ef(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const i=tf(t);return Qd.test(i)?i:Ti}catch{return Ti}}function tf(t){return Zd(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map;function ca(t,e){const i=An(t);la(i,e),nf(i,e)}function la(t,e){const i=aa.get(t);if(i)for(const s of i)s(e)}function nf(t,e){const i=sf();i&&i.postMessage({key:t,fid:e}),rf()}let Ge=null;function sf(){return!Ge&&"BroadcastChannel"in self&&(Ge=new BroadcastChannel("[Firebase] FID Change"),Ge.onmessage=t=>{la(t.data.key,t.data.fid)}),Ge}function rf(){aa.size===0&&Ge&&(Ge.close(),Ge=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="firebase-installations-database",af=1,Xe="firebase-installations-store";let li=null;function Bi(){return li||(li=ro(of,af,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xe)}}})),li}async function _n(t,e){const i=An(t),r=(await Bi()).transaction(Xe,"readwrite"),c=r.objectStore(Xe),l=await c.get(i);return await c.put(e,i),await r.done,(!l||l.fid!==e.fid)&&ca(t,e.fid),e}async function ha(t){const e=An(t),s=(await Bi()).transaction(Xe,"readwrite");await s.objectStore(Xe).delete(e),await s.done}async function kn(t,e){const i=An(t),r=(await Bi()).transaction(Xe,"readwrite"),c=r.objectStore(Xe),l=await c.get(i),u=e(l);return u===void 0?await c.delete(i):await c.put(u,i),await r.done,u&&(!l||l.fid!==u.fid)&&ca(t,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t){let e;const i=await kn(t.appConfig,s=>{const r=cf(s),c=lf(t,r);return e=c.registrationPromise,c.installationEntry});return i.fid===Ti?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}function cf(t){const e=t||{fid:ef(),registrationStatus:0};return ua(e)}function lf(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Je.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=hf(t,i);return{installationEntry:i,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:uf(t)}:{installationEntry:e}}async function hf(t,e){try{const i=await Yd(t,e);return _n(t.appConfig,i)}catch(i){throw ea(i)&&i.customData.serverCode===409?await ha(t.appConfig):await _n(t.appConfig,{fid:e.fid,registrationStatus:0}),i}}async function uf(t){let e=await Dr(t.appConfig);for(;e.registrationStatus===1;)await oa(100),e=await Dr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:i,registrationPromise:s}=await Vi(t);return s||i}return e}function Dr(t){return kn(t,e=>{if(!e)throw Je.create("installation-not-found");return ua(e)})}function ua(t){return df(t)?{fid:t.fid,registrationStatus:0}:t}function df(t){return t.registrationStatus===1&&t.registrationTime+Yo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff({appConfig:t,heartbeatServiceProvider:e},i){const s=pf(t,i),r=Kd(t,i),c=e.getImmediate({optional:!0});if(c){const T=await c.getHeartbeatsHeader();T&&r.append("x-firebase-client",T)}const l={installation:{sdkVersion:Zo,appId:t.appId}},u={method:"POST",headers:r,body:JSON.stringify(l)},g=await ra(()=>fetch(s,u));if(g.ok){const T=await g.json();return na(T)}else throw await ia("Generate Auth Token",g)}function pf(t,{fid:e}){return`${ta(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e=!1){let i;const s=await kn(t.appConfig,c=>{if(!da(c))throw Je.create("not-registered");const l=c.authToken;if(!e&&yf(l))return c;if(l.requestStatus===1)return i=gf(t,e),c;{if(!navigator.onLine)throw Je.create("app-offline");const u=_f(c);return i=mf(t,u),u}});return i?await i:s.authToken}async function gf(t,e){let i=await Lr(t.appConfig);for(;i.authToken.requestStatus===1;)await oa(100),i=await Lr(t.appConfig);const s=i.authToken;return s.requestStatus===0?Hi(t,e):s}function Lr(t){return kn(t,e=>{if(!da(e))throw Je.create("not-registered");const i=e.authToken;return wf(i)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mf(t,e){try{const i=await ff(t,e),s=Object.assign(Object.assign({},e),{authToken:i});return await _n(t.appConfig,s),i}catch(i){if(ea(i)&&(i.customData.serverCode===401||i.customData.serverCode===404))await ha(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _n(t.appConfig,s)}throw i}}function da(t){return t!==void 0&&t.registrationStatus===2}function yf(t){return t.requestStatus===2&&!vf(t)}function vf(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+zd}function _f(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wf(t){return t.requestStatus===1&&t.requestTime+Yo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(t){const e=t,{installationEntry:i,registrationPromise:s}=await Vi(e);return s?s.catch(console.error):Hi(e).catch(console.error),i.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf(t,e=!1){const i=t;return await Tf(i),(await Hi(i,e)).token}async function Tf(t){const{registrationPromise:e}=await Vi(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){if(!t||!t.options)throw hi("App Configuration");if(!t.name)throw hi("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw hi(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function hi(t){return Je.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="installations",Af="installations-internal",kf=t=>{const e=t.getProvider("app").getImmediate(),i=Ef(e),s=Be(e,"heartbeat");return{app:e,appConfig:i,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Sf=t=>{const e=t.getProvider("app").getImmediate(),i=Be(e,fa).getImmediate();return{getId:()=>If(i),getToken:r=>bf(i,r)}};function Rf(){de(new oe(fa,kf,"PUBLIC")),de(new oe(Af,Sf,"PRIVATE"))}Rf();te(Xo,Fi);te(Xo,Fi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="analytics",Cf="firebase_id",Nf="origin",xf=60*1e3,Pf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$i="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new In("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Of={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ie=new Ye("analytics","Analytics",Of);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t){if(!t.startsWith($i)){const e=ie.create("invalid-gtag-resource",{gtagURL:t});return ne.warn(e.message),""}return t}function pa(t){return Promise.all(t.map(e=>e.catch(i=>i)))}function Lf(t,e){let i;return window.trustedTypes&&(i=window.trustedTypes.createPolicy(t,e)),i}function Mf(t,e){const i=Lf("firebase-js-sdk-policy",{createScriptURL:Df}),s=document.createElement("script"),r=`${$i}?l=${t}&id=${e}`;s.src=i?i?.createScriptURL(r):r,s.async=!0,document.head.appendChild(s)}function jf(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Uf(t,e,i,s,r,c){const l=s[r];try{if(l)await e[l];else{const g=(await pa(i)).find(T=>T.measurementId===r);g&&await e[g.appId]}}catch(u){ne.error(u)}t("config",r,c)}async function Ff(t,e,i,s,r){try{let c=[];if(r&&r.send_to){let l=r.send_to;Array.isArray(l)||(l=[l]);const u=await pa(i);for(const g of l){const T=u.find(k=>k.measurementId===g),A=T&&e[T.appId];if(A)c.push(A);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),t("event",s,r||{})}catch(c){ne.error(c)}}function Bf(t,e,i,s){async function r(c,...l){try{if(c==="event"){const[u,g]=l;await Ff(t,e,i,u,g)}else if(c==="config"){const[u,g]=l;await Uf(t,e,i,s,u,g)}else if(c==="consent"){const[u,g]=l;t("consent",u,g)}else if(c==="get"){const[u,g,T]=l;t("get",u,g,T)}else if(c==="set"){const[u]=l;t("set",u)}else t(c,...l)}catch(u){ne.error(u)}}return r}function Vf(t,e,i,s,r){let c=function(...l){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(c=window[r]),window[r]=Bf(c,t,e,i),{gtagCore:c,wrappedGtag:window[r]}}function Hf(t){const e=window.document.getElementsByTagName("script");for(const i of Object.values(e))if(i.src&&i.src.includes($i)&&i.src.includes(t))return i;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f=30,zf=1e3;class Gf{constructor(e={},i=zf){this.throttleMetadata=e,this.intervalMillis=i}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,i){this.throttleMetadata[e]=i}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ga=new Gf;function Wf(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qf(t){var e;const{appId:i,apiKey:s}=t,r={method:"GET",headers:Wf(s)},c=Pf.replace("{app-id}",i),l=await fetch(c,r);if(l.status!==200&&l.status!==304){let u="";try{const g=await l.json();!((e=g.error)===null||e===void 0)&&e.message&&(u=g.error.message)}catch{}throw ie.create("config-fetch-failed",{httpStatus:l.status,responseMessage:u})}return l.json()}async function Kf(t,e=ga,i){const{appId:s,apiKey:r,measurementId:c}=t.options;if(!s)throw ie.create("no-app-id");if(!r){if(c)return{measurementId:c,appId:s};throw ie.create("no-api-key")}const l=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new Yf;return setTimeout(async()=>{u.abort()},xf),ma({appId:s,apiKey:r,measurementId:c},l,u,e)}async function ma(t,{throttleEndTimeMillis:e,backoffCount:i},s,r=ga){var c;const{appId:l,measurementId:u}=t;try{await Jf(s,e)}catch(g){if(u)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${g?.message}]`),{appId:l,measurementId:u};throw g}try{const g=await qf(t);return r.deleteThrottleMetadata(l),g}catch(g){const T=g;if(!Xf(T)){if(r.deleteThrottleMetadata(l),u)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${T?.message}]`),{appId:l,measurementId:u};throw g}const A=Number((c=T?.customData)===null||c===void 0?void 0:c.httpStatus)===503?Gs(i,r.intervalMillis,$f):Gs(i,r.intervalMillis),k={throttleEndTimeMillis:Date.now()+A,backoffCount:i+1};return r.setThrottleMetadata(l,k),ne.debug(`Calling attemptFetch again in ${A} millis`),ma(t,k,s,r)}}function Jf(t,e){return new Promise((i,s)=>{const r=Math.max(e-Date.now(),0),c=setTimeout(i,r);t.addEventListener(()=>{clearTimeout(c),s(ie.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Xf(t){if(!(t instanceof ae)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Yf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Zf(t,e,i,s,r){if(r&&r.global){t("event",i,s);return}else{const c=await e,l=Object.assign(Object.assign({},s),{send_to:c});t("event",i,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(){if(to())try{await no()}catch(t){return ne.warn(ie.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return ne.warn(ie.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ep(t,e,i,s,r,c,l){var u;const g=Kf(t);g.then(P=>{i[P.measurementId]=P.appId,t.options.measurementId&&P.measurementId!==t.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${P.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(P=>ne.error(P)),e.push(g);const T=Qf().then(P=>{if(P)return s.getId()}),[A,k]=await Promise.all([g,T]);Hf(c)||Mf(c,A.measurementId),r("js",new Date);const R=(u=l?.config)!==null&&u!==void 0?u:{};return R[Nf]="firebase",R.update=!0,k!=null&&(R[Cf]=k),r("config",A.measurementId,R),A.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.app=e}_delete(){return delete xt[this.app.options.appId],Promise.resolve()}}let xt={},Mr=[];const jr={};let ui="dataLayer",np="gtag",Ur,ya,Fr=!1;function ip(){const t=[];if(eo()&&t.push("This is a browser extension environment."),Pc()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),i=ie.create("invalid-analytics-context",{errorInfo:e});ne.warn(i.message)}}function sp(t,e,i){ip();const s=t.options.appId;if(!s)throw ie.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ie.create("no-api-key");if(xt[s]!=null)throw ie.create("already-exists",{id:s});if(!Fr){jf(ui);const{wrappedGtag:c,gtagCore:l}=Vf(xt,Mr,jr,ui,np);ya=c,Ur=l,Fr=!0}return xt[s]=ep(t,Mr,jr,e,Ur,ui,i),new tp(t)}function rp(t=bn()){t=Se(t);const e=Be(t,wn);return e.isInitialized()?e.getImmediate():op(t)}function op(t,e={}){const i=Be(t,wn);if(i.isInitialized()){const r=i.getImmediate();if(Fe(e,i.getOptions()))return r;throw ie.create("already-initialized")}return i.initialize({options:e})}function ap(t,e,i,s){t=Se(t),Zf(ya,xt[t.app.options.appId],e,i,s).catch(r=>ne.error(r))}const Br="@firebase/analytics",Vr="0.10.12";function cp(){de(new oe(wn,(e,{options:i})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return sp(s,r,i)},"PUBLIC")),de(new oe("analytics-internal",t,"PRIVATE")),te(Br,Vr),te(Br,Vr,"esm2017");function t(e){try{const i=e.getProvider(wn).getImmediate();return{logEvent:(s,r,c)=>ap(i,s,r,c)}}catch(i){throw ie.create("interop-component-reg-failed",{reason:i})}}}cp();const lp={apiKey:"AIzaSyBuIF6kPBqJ48hLCtk6Wlkym0CepZ8Uu4U",authDomain:"glamora-frame.firebaseapp.com",projectId:"glamora-frame",storageBucket:"glamora-frame.appspot.com",messagingSenderId:"452621758437",appId:"1:452621758437:web:df7e62b8d42a8f438d8199",measurementId:"G-MEASUREMENT_ID"},Sn=oo(lp),hp=Ku(Sn),up=fd(Sn),dp=Fd(Sn);rp(Sn);const fp=Te.createContext(void 0),pp=({children:t})=>w.jsx(fp.Provider,{value:{auth:hp,db:up,storage:dp},children:t}),gp=()=>{const[t,e]=Te.useState(!1);Te.useEffect(()=>{const s=()=>{const r=window.scrollY,c=window.innerHeight,l=document.documentElement.scrollHeight;e(r<l-c-100)};return window.addEventListener("scroll",s),s(),()=>window.removeEventListener("scroll",s)},[]);const i=()=>{window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return t?w.jsx("button",{onClick:i,className:"fixed bottom-8 right-8 bg-black/80 text-white p-3 rounded-full shadow-lg hover:bg-black transition-all duration-200 hover:scale-110 hover:shadow-xl z-40","aria-label":"Scroll to bottom",children:w.jsx(sc,{className:"h-6 w-6"})}):null},Hr=fi.memo(({item:t,location:e,onClick:i})=>w.jsx($r,{to:t.path,onClick:s=>{scrollToSection(s,t.path),i?.()},className:`${e.pathname===t.path?"text-black dark:text-white":"text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"} ${i?"block px-3 py-2 text-base":""} transition-all duration-200 hover:scale-105`,children:t.name},t.name)),mp=fi.memo(({children:t})=>{const[e,i]=fi.useState(!1),s=nc(),{theme:r,toggleTheme:c}=vc(),l=[{name:"Home",path:"#hero"},{name:"About",path:"#about"},{name:"Gallery",path:"#gallery"},{name:"Blog",path:"#blog"},{name:"Contact",path:"#contact"}];return w.jsxs("div",{className:"min-h-screen bg-white dark:bg-dark-bg text-black dark:text-dark-text",children:[w.jsxs("nav",{className:"fixed w-full bg-white/80 dark:bg-dark-surface/80 backdrop-blur-sm z-50 border-b dark:border-gray-700",children:[w.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:w.jsxs("div",{className:"flex justify-between h-16",children:[w.jsx("div",{className:"flex items-center",children:w.jsxs($r,{to:"/",className:"flex items-center space-x-2",children:[w.jsx(rc,{className:"h-8 w-8"}),w.jsx("span",{className:"font-semibold text-xl",children:"Glamora Frame"})]})}),w.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[l.map(u=>w.jsx(Hr,{item:u,location:s},u.name)),w.jsx("button",{onClick:c,className:"p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transform transition-all duration-200 hover:scale-110 hover:shadow-lg",children:r==="dark"?w.jsx(oc,{className:"h-5 w-5"}):w.jsx(ac,{className:"h-5 w-5"})})]}),w.jsx("div",{className:"md:hidden flex items-center",children:w.jsx("button",{onClick:()=>i(!e),className:"text-gray-500 hover:text-black",children:e?w.jsx(cc,{className:"h-6 w-6"}):w.jsx(lc,{className:"h-6 w-6"})})})]})}),e&&w.jsx("div",{className:"md:hidden",children:w.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b",children:l.map(u=>w.jsx(Hr,{item:u,location:s,onClick:()=>i(!1)},u.name))})})]}),w.jsxs("main",{className:"min-h-screen",children:[t,w.jsx(gp,{})]}),w.jsx("footer",{className:"bg-gray-50 dark:bg-dark-surface border-t dark:border-gray-700 mt-20",children:w.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8",children:[w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[w.jsxs("div",{children:[w.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Contact"}),w.jsx("p",{className:"text-gray-600 dark:text-dark-muted",children:"vihangaprabhashana4@gmail.com"}),w.jsx("p",{className:"text-gray-600 dark:text-dark-muted",children:"glamoraframe@gmail.com"}),w.jsx("p",{className:"text-gray-600 dark:text-dark-muted",children:"+94 72 361 5111"}),w.jsx("p",{className:"text-gray-600 dark:text-dark-muted",children:"+94 77 033 5729"})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Follow Me"}),w.jsxs("div",{className:"flex space-x-4",children:[w.jsx("a",{href:"#",className:"text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-white transform transition-all duration-200 hover:scale-105 hover:translate-y-[-2px]",children:"Instagram"}),w.jsx("a",{href:"#",className:"text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-white transform transition-all duration-200 hover:scale-105 hover:translate-y-[-2px]",children:"Facebook"}),w.jsx("a",{href:"#",className:"text-gray-600 dark:text-dark-muted hover:text-black dark:hover:text-white transform transition-all duration-200 hover:scale-105 hover:translate-y-[-2px]",children:"Twitter"})]})]}),w.jsxs("div",{children:[w.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Newsletter"}),w.jsx("p",{className:"text-gray-600 dark:text-dark-muted mb-2",children:"Subscribe to get updates on my latest work"}),w.jsxs("div",{className:"flex",children:[w.jsx("input",{type:"email",placeholder:"Enter your email",className:"flex-1 px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-dark-text"}),w.jsx("button",{className:"px-4 py-2 bg-black text-white rounded-r hover:bg-gray-800 dark:bg-dark-text dark:hover:bg-dark-muted transform transition-all duration-200 hover:scale-105 hover:shadow-lg",children:"Subscribe"})]})]})]}),w.jsxs("div",{className:"mt-8 pt-8 border-t text-center text-gray-600 dark:text-dark-muted",children:["© ",new Date().getFullYear()," Glamora Frame. All rights reserved."]})]})})]})}),yp=()=>w.jsxs("div",{className:"h-screen w-full relative",children:[w.jsx("img",{src:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",alt:"Hero background",className:"w-full h-full object-cover"}),w.jsx("div",{className:"absolute inset-0 bg-black/50"})," "]}),vp=()=>w.jsx("div",{className:"max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8",children:w.jsxs(qe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[w.jsx("h1",{className:"text-4xl font-bold mb-8",children:"About Me"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[w.jsx("div",{children:w.jsx("img",{src:"https://images.unsplash.com/photo-1554048612-b6a482bc67e5",alt:"Photographer at work",className:"w-full h-[500px] object-cover rounded-lg shadow-lg"})}),w.jsxs("div",{className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"My Journey"}),w.jsx("p",{className:"text-gray-600",children:"With over a decade of experience in photography, I've developed a keen eye for capturing the perfect moment. My journey began with a simple point-and-shoot camera, but my passion for photography quickly grew into a professional pursuit."})]}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"My Approach"}),w.jsx("p",{className:"text-gray-600",children:"I believe in capturing authentic moments and genuine emotions. Whether it's a wedding, a portrait session, or a landscape shot, I strive to tell a story through my lens that will be cherished for generations to come."})]}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Skills & Expertise"}),w.jsxs("ul",{className:"grid grid-cols-2 gap-4",children:[w.jsx("li",{className:"bg-gray-50 p-4 rounded-lg",children:"Portrait Photography"}),w.jsx("li",{className:"bg-gray-50 p-4 rounded-lg",children:"Landscape Photography"}),w.jsx("li",{className:"bg-gray-50 p-4 rounded-lg",children:"Event Coverage"}),w.jsx("li",{className:"bg-gray-50 p-4 rounded-lg",children:"Photo Editing"}),w.jsx("li",{className:"bg-gray-50 p-4 rounded-lg",children:"Studio Lighting"}),w.jsx("li",{className:"bg-gray-50 p-4 rounded-lg",children:"Digital Composition"})]})]})]})]})]})}),di=[{id:1,url:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",category:"Landscapes",title:"Mountain Majesty"},{id:2,url:"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",category:"Food",title:"Gourmet Delights"},{id:3,url:"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",category:"Landscapes",title:"Foggy Forest"},{id:4,url:"https://images.unsplash.com/photo-1511447333015-45b65e60f6d5",category:"Urban",title:"City Lights"},{id:5,url:"https://images.unsplash.com/photo-1501426026826-31c667bdf23d",category:"Portraits",title:"Summer Vibes"},{id:6,url:"https://images.unsplash.com/photo-1426604966848-d7adac402bff",category:"Nature",title:"Mountain Lake"},{id:7,url:"https://images.unsplash.com/photo-1533738363-b7f9aef128ce",category:"Food",title:"Morning Coffee"},{id:8,url:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e",category:"Nature",title:"Sunlit Forest"}],_p=[{id:1,title:"The Art of Landscape Photography",excerpt:"Learn the essential techniques for capturing stunning landscape photos.",content:"Full blog post content here...",date:"2024-03-15",image:"https://images.unsplash.com/photo-1682687221038-404670f09514",category:"Tips & Tricks"}],wp=()=>{const[t,e]=Te.useState(null),i=Array.from(new Set(di.map(c=>c.category))),s=t?di.filter(c=>c.category===t):di,r={default:3,1100:2,700:1};return w.jsx("div",{className:"max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8",children:w.jsxs(qe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[w.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Gallery"}),w.jsxs("div",{className:"flex flex-wrap gap-4 mb-8",children:[w.jsx("button",{onClick:()=>e(null),className:`px-6 py-2 rounded-full transition-all duration-200 ${t===null?"bg-black text-white dark:bg-white dark:text-black font-medium shadow-lg":"bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"}`,children:"All"}),i.map(c=>w.jsx("button",{onClick:()=>e(c),className:`px-6 py-2 rounded-full transition-all duration-200 ${t===c?"bg-black text-white dark:bg-white dark:text-black font-medium shadow-lg":"bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-200"}`,children:c},c))]}),w.jsx(hc,{breakpointCols:r,className:"flex -ml-4 w-auto",columnClassName:"pl-4 bg-clip-padding",children:s.map(c=>w.jsx(qe.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mb-4",children:w.jsxs("div",{className:"relative group",children:[w.jsx("img",{src:c.url,alt:c.title,className:"w-full rounded-lg"}),w.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 rounded-lg"}),w.jsx("div",{className:"absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:w.jsxs("div",{className:"text-white text-center",children:[w.jsx("h3",{className:"text-xl font-semibold",children:c.title}),w.jsx("p",{className:"text-sm",children:c.category})]})})]})},c.id))})]})})},Ip=()=>w.jsx("div",{className:"max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8",children:w.jsxs(qe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[w.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Blog"}),w.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:_p.map(t=>w.jsxs(qe.article,{initial:{opacity:0},animate:{opacity:1},className:"bg-white rounded-lg overflow-hidden shadow-lg",children:[w.jsx("img",{src:t.image,alt:t.title,className:"w-full h-48 object-cover"}),w.jsxs("div",{className:"p-6",children:[w.jsx("span",{className:"text-sm text-gray-500",children:t.category}),w.jsx("h2",{className:"text-xl font-semibold mt-2 mb-3",children:t.title}),w.jsx("p",{className:"text-gray-600 mb-4",children:t.excerpt}),w.jsxs("div",{className:"flex justify-between items-center",children:[w.jsx("span",{className:"text-sm text-gray-500",children:new Date(t.date).toLocaleDateString()}),w.jsx("button",{className:"text-black hover:underline",children:"Read More"})]})]})]},t.id))})]})}),bp=()=>w.jsx("div",{className:"max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8",children:w.jsxs(qe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[w.jsx("h1",{className:"text-4xl font-bold mb-8",children:"Contact"}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Get in Touch"}),w.jsxs("div",{className:"space-y-4 mb-8",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx(uc,{className:"w-5 h-5 mr-3 text-gray-600"}),w.jsxs("div",{children:[w.jsx("p",{children:"vihangaprabhashana4@gmail.com"}),w.jsx("p",{children:"glamoraframe@gmail.com"})]})]}),w.jsxs("div",{className:"flex items-center",children:[w.jsx(dc,{className:"w-5 h-5 mr-3 text-gray-600"}),w.jsxs("div",{children:[w.jsx("p",{children:"+94 72 361 5111"}),w.jsx("p",{children:"+94 77 033 5729"})]})]}),w.jsxs("div",{className:"flex items-center",children:[w.jsx(fc,{className:"w-5 h-5 mr-3 text-gray-600"}),w.jsx("span",{children:"Matugama, Sri Lanka"})]})]}),w.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Follow Me"}),w.jsxs("div",{className:"flex space-x-4",children:[w.jsx("a",{href:"#",className:"text-gray-600 hover:text-black",children:w.jsx(pc,{className:"w-6 h-6"})}),w.jsx("a",{href:"#",className:"text-gray-600 hover:text-black",children:w.jsx(gc,{className:"w-6 h-6"})}),w.jsx("a",{href:"#",className:"text-gray-600 hover:text-black",children:w.jsx(mc,{className:"w-6 h-6"})})]})]}),w.jsx("div",{children:w.jsxs("form",{className:"space-y-6",children:[w.jsxs("div",{children:[w.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),w.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"})]}),w.jsxs("div",{children:[w.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),w.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"})]}),w.jsxs("div",{children:[w.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),w.jsx("textarea",{id:"message",rows:6,className:"w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"})]}),w.jsx("button",{type:"submit",className:"w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors",children:"Send Message"})]})})]})]})}),Tp=()=>w.jsxs("div",{children:[w.jsxs("section",{id:"hero",className:"relative h-screen",children:[w.jsx(yp,{}),w.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-10",children:w.jsxs(qe.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-center text-white",children:[w.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4",children:"Hi, I'm Vihanga"}),w.jsx("p",{className:"text-xl md:text-2xl",children:"A passionate photographer capturing stunning moments"})]})})]}),w.jsx("section",{id:"about",children:w.jsx(vp,{})}),w.jsx("section",{id:"gallery",children:w.jsx(wp,{})}),w.jsx("section",{id:"blog",children:w.jsx(Ip,{})}),w.jsx("section",{id:"contact",children:w.jsx(bp,{})})]});function Ep(){return w.jsx(pp,{children:w.jsx(yc,{children:w.jsx(ic,{children:w.jsx(mp,{children:w.jsx(Tp,{})})})})})}zr(document.getElementById("root")).render(w.jsx(Te.StrictMode,{children:w.jsx(Ep,{})}));
