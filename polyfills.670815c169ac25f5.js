"use strict";(self.webpackChunkngx_custom_daterangepicker=self.webpackChunkngx_custom_daterangepicker||[]).push([[429],{404:(de,Se,Oe)=>{const me=":";class Ye extends Error{constructor(e){super(`No translation found for ${Qe(e)}.`),this.parsedMessage=e,this.type="MissingTranslationError"}}const Ee=function(i,...e){if(Ee.translate){const n=Ee.translate(i,e);i=n[0],e=n[1]}let t=et(i[0],i.raw[0]);for(let n=1;n<i.length;n++)t+=e[n-1]+et(i[n],i.raw[n]);return t},ge=":";function et(i,e){return e.charAt(0)===ge?i.substring(function Ue(i,e){for(let t=1,n=1;t<i.length;t++,n++)if("\\"===e[n])n++;else if(i[t]===me)return t;throw new Error(`Unterminated $localize metadata block in "${e}".`)}(i,e)+1):i}(()=>typeof globalThis<"u"&&globalThis||typeof global<"u"&&global||typeof window<"u"&&window||typeof self<"u"&&typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&self)().$localize=Ee,Oe(8583)},8583:()=>{!function(e){const t=e.performance;function n(x){t&&t.mark&&t.mark(x)}function r(x,m){t&&t.measure&&t.measure(x,m)}n("Zone");const s=e.__Zone_symbol_prefix||"__zone_symbol__";function l(x){return s+x}const f=!0===e[l("forceDuplicateZoneCheck")];if(e.Zone){if(f||"function"!=typeof e.Zone.__symbol__)throw new Error("Zone already loaded.");return e.Zone}let u=(()=>{class x{static assertZonePatched(){if(e.Promise!==fe.ZoneAwarePromise)throw new Error("Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)")}static get root(){let o=x.current;for(;o.parent;)o=o.parent;return o}static get current(){return W.zone}static get currentTask(){return le}static __load_patch(o,c,b=!1){if(fe.hasOwnProperty(o)){if(!b&&f)throw Error("Already loaded patch: "+o)}else if(!e["__Zone_disable_"+o]){const I="Zone:"+o;n(I),fe[o]=c(e,x,K),r(I,I)}}get parent(){return this._parent}get name(){return this._name}constructor(o,c){this._parent=o,this._name=c?c.name||"unnamed":"<root>",this._properties=c&&c.properties||{},this._zoneDelegate=new k(this,this._parent&&this._parent._zoneDelegate,c)}get(o){const c=this.getZoneWith(o);if(c)return c._properties[o]}getZoneWith(o){let c=this;for(;c;){if(c._properties.hasOwnProperty(o))return c;c=c._parent}return null}fork(o){if(!o)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,o)}wrap(o,c){if("function"!=typeof o)throw new Error("Expecting function got: "+o);const b=this._zoneDelegate.intercept(this,o,c),I=this;return function(){return I.runGuarded(b,this,arguments,c)}}run(o,c,b,I){W={parent:W,zone:this};try{return this._zoneDelegate.invoke(this,o,c,b,I)}finally{W=W.parent}}runGuarded(o,c=null,b,I){W={parent:W,zone:this};try{try{return this._zoneDelegate.invoke(this,o,c,b,I)}catch(J){if(this._zoneDelegate.handleError(this,J))throw J}}finally{W=W.parent}}runTask(o,c,b){if(o.zone!=this)throw new Error("A task can only be run in the zone of creation! (Creation: "+(o.zone||Q).name+"; Execution: "+this.name+")");if(o.state===B&&(o.type===te||o.type===O))return;const I=o.state!=y;I&&o._transitionTo(y,$),o.runCount++;const J=le;le=o,W={parent:W,zone:this};try{o.type==O&&o.data&&!o.data.isPeriodic&&(o.cancelFn=void 0);try{return this._zoneDelegate.invokeTask(this,o,c,b)}catch(h){if(this._zoneDelegate.handleError(this,h))throw h}}finally{o.state!==B&&o.state!==T&&(o.type==te||o.data&&o.data.isPeriodic?I&&o._transitionTo($,y):(o.runCount=0,this._updateTaskCount(o,-1),I&&o._transitionTo(B,y,B))),W=W.parent,le=J}}scheduleTask(o){if(o.zone&&o.zone!==this){let b=this;for(;b;){if(b===o.zone)throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${o.zone.name}`);b=b.parent}}o._transitionTo(Y,B);const c=[];o._zoneDelegates=c,o._zone=this;try{o=this._zoneDelegate.scheduleTask(this,o)}catch(b){throw o._transitionTo(T,Y,B),this._zoneDelegate.handleError(this,b),b}return o._zoneDelegates===c&&this._updateTaskCount(o,1),o.state==Y&&o._transitionTo($,Y),o}scheduleMicroTask(o,c,b,I){return this.scheduleTask(new g(L,o,c,b,I,void 0))}scheduleMacroTask(o,c,b,I,J){return this.scheduleTask(new g(O,o,c,b,I,J))}scheduleEventTask(o,c,b,I,J){return this.scheduleTask(new g(te,o,c,b,I,J))}cancelTask(o){if(o.zone!=this)throw new Error("A task can only be cancelled in the zone of creation! (Creation: "+(o.zone||Q).name+"; Execution: "+this.name+")");if(o.state===$||o.state===y){o._transitionTo(U,$,y);try{this._zoneDelegate.cancelTask(this,o)}catch(c){throw o._transitionTo(T,U),this._zoneDelegate.handleError(this,c),c}return this._updateTaskCount(o,-1),o._transitionTo(B,U),o.runCount=0,o}}_updateTaskCount(o,c){const b=o._zoneDelegates;-1==c&&(o._zoneDelegates=null);for(let I=0;I<b.length;I++)b[I]._updateTaskCount(o.type,c)}}return x.__symbol__=l,x})();const E={name:"",onHasTask:(x,m,o,c)=>x.hasTask(o,c),onScheduleTask:(x,m,o,c)=>x.scheduleTask(o,c),onInvokeTask:(x,m,o,c,b,I)=>x.invokeTask(o,c,b,I),onCancelTask:(x,m,o,c)=>x.cancelTask(o,c)};class k{constructor(m,o,c){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=m,this._parentDelegate=o,this._forkZS=c&&(c&&c.onFork?c:o._forkZS),this._forkDlgt=c&&(c.onFork?o:o._forkDlgt),this._forkCurrZone=c&&(c.onFork?this.zone:o._forkCurrZone),this._interceptZS=c&&(c.onIntercept?c:o._interceptZS),this._interceptDlgt=c&&(c.onIntercept?o:o._interceptDlgt),this._interceptCurrZone=c&&(c.onIntercept?this.zone:o._interceptCurrZone),this._invokeZS=c&&(c.onInvoke?c:o._invokeZS),this._invokeDlgt=c&&(c.onInvoke?o:o._invokeDlgt),this._invokeCurrZone=c&&(c.onInvoke?this.zone:o._invokeCurrZone),this._handleErrorZS=c&&(c.onHandleError?c:o._handleErrorZS),this._handleErrorDlgt=c&&(c.onHandleError?o:o._handleErrorDlgt),this._handleErrorCurrZone=c&&(c.onHandleError?this.zone:o._handleErrorCurrZone),this._scheduleTaskZS=c&&(c.onScheduleTask?c:o._scheduleTaskZS),this._scheduleTaskDlgt=c&&(c.onScheduleTask?o:o._scheduleTaskDlgt),this._scheduleTaskCurrZone=c&&(c.onScheduleTask?this.zone:o._scheduleTaskCurrZone),this._invokeTaskZS=c&&(c.onInvokeTask?c:o._invokeTaskZS),this._invokeTaskDlgt=c&&(c.onInvokeTask?o:o._invokeTaskDlgt),this._invokeTaskCurrZone=c&&(c.onInvokeTask?this.zone:o._invokeTaskCurrZone),this._cancelTaskZS=c&&(c.onCancelTask?c:o._cancelTaskZS),this._cancelTaskDlgt=c&&(c.onCancelTask?o:o._cancelTaskDlgt),this._cancelTaskCurrZone=c&&(c.onCancelTask?this.zone:o._cancelTaskCurrZone),this._hasTaskZS=null,this._hasTaskDlgt=null,this._hasTaskDlgtOwner=null,this._hasTaskCurrZone=null;const b=c&&c.onHasTask;(b||o&&o._hasTaskZS)&&(this._hasTaskZS=b?c:E,this._hasTaskDlgt=o,this._hasTaskDlgtOwner=this,this._hasTaskCurrZone=m,c.onScheduleTask||(this._scheduleTaskZS=E,this._scheduleTaskDlgt=o,this._scheduleTaskCurrZone=this.zone),c.onInvokeTask||(this._invokeTaskZS=E,this._invokeTaskDlgt=o,this._invokeTaskCurrZone=this.zone),c.onCancelTask||(this._cancelTaskZS=E,this._cancelTaskDlgt=o,this._cancelTaskCurrZone=this.zone))}fork(m,o){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,m,o):new u(m,o)}intercept(m,o,c){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this._interceptCurrZone,m,o,c):o}invoke(m,o,c,b,I){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this._invokeCurrZone,m,o,c,b,I):o.apply(c,b)}handleError(m,o){return!this._handleErrorZS||this._handleErrorZS.onHandleError(this._handleErrorDlgt,this._handleErrorCurrZone,m,o)}scheduleTask(m,o){let c=o;if(this._scheduleTaskZS)this._hasTaskZS&&c._zoneDelegates.push(this._hasTaskDlgtOwner),c=this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this._scheduleTaskCurrZone,m,o),c||(c=o);else if(o.scheduleFn)o.scheduleFn(o);else{if(o.type!=L)throw new Error("Task is missing scheduleFn.");R(o)}return c}invokeTask(m,o,c,b){return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this._invokeTaskCurrZone,m,o,c,b):o.callback.apply(c,b)}cancelTask(m,o){let c;if(this._cancelTaskZS)c=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this._cancelTaskCurrZone,m,o);else{if(!o.cancelFn)throw Error("Task is not cancelable");c=o.cancelFn(o)}return c}hasTask(m,o){try{this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this._hasTaskCurrZone,m,o)}catch(c){this.handleError(m,c)}}_updateTaskCount(m,o){const c=this._taskCounts,b=c[m],I=c[m]=b+o;if(I<0)throw new Error("More tasks executed then were scheduled.");0!=b&&0!=I||this.hasTask(this.zone,{microTask:c.microTask>0,macroTask:c.macroTask>0,eventTask:c.eventTask>0,change:m})}}class g{constructor(m,o,c,b,I,J){if(this._zone=null,this.runCount=0,this._zoneDelegates=null,this._state="notScheduled",this.type=m,this.source=o,this.data=b,this.scheduleFn=I,this.cancelFn=J,!c)throw new Error("callback is not defined");this.callback=c;const h=this;this.invoke=m===te&&b&&b.useG?g.invokeTask:function(){return g.invokeTask.call(e,h,this,arguments)}}static invokeTask(m,o,c){m||(m=this),oe++;try{return m.runCount++,m.zone.runTask(m,o,c)}finally{1==oe&&p(),oe--}}get zone(){return this._zone}get state(){return this._state}cancelScheduleRequest(){this._transitionTo(B,Y)}_transitionTo(m,o,c){if(this._state!==o&&this._state!==c)throw new Error(`${this.type} '${this.source}': can not transition to '${m}', expecting state '${o}'${c?" or '"+c+"'":""}, was '${this._state}'.`);this._state=m,m==B&&(this._zoneDelegates=null)}toString(){return this.data&&typeof this.data.handleId<"u"?this.data.handleId.toString():Object.prototype.toString.call(this)}toJSON(){return{type:this.type,state:this.state,source:this.source,zone:this.zone.name,runCount:this.runCount}}}const A=l("setTimeout"),N=l("Promise"),S=l("then");let F,H=[],P=!1;function z(x){if(F||e[N]&&(F=e[N].resolve(0)),F){let m=F[S];m||(m=F.then),m.call(F,x)}else e[A](x,0)}function R(x){0===oe&&0===H.length&&z(p),x&&H.push(x)}function p(){if(!P){for(P=!0;H.length;){const x=H;H=[];for(let m=0;m<x.length;m++){const o=x[m];try{o.zone.runTask(o,null,null)}catch(c){K.onUnhandledError(c)}}}K.microtaskDrainDone(),P=!1}}const Q={name:"NO ZONE"},B="notScheduled",Y="scheduling",$="scheduled",y="running",U="canceling",T="unknown",L="microTask",O="macroTask",te="eventTask",fe={},K={symbol:l,currentZoneFrame:()=>W,onUnhandledError:q,microtaskDrainDone:q,scheduleMicroTask:R,showUncaughtError:()=>!u[l("ignoreConsoleErrorUncaughtError")],patchEventTarget:()=>[],patchOnProperties:q,patchMethod:()=>q,bindArguments:()=>[],patchThen:()=>q,patchMacroTask:()=>q,patchEventPrototype:()=>q,isIEOrEdge:()=>!1,getGlobalObjects:()=>{},ObjectDefineProperty:()=>q,ObjectGetOwnPropertyDescriptor:()=>{},ObjectCreate:()=>{},ArraySlice:()=>[],patchClass:()=>q,wrapWithCurrentZone:()=>q,filterProperties:()=>[],attachOriginToPatched:()=>q,_redefineProperty:()=>q,patchCallbacks:()=>q,nativeScheduleMicroTask:z};let W={parent:null,zone:new u(null,null)},le=null,oe=0;function q(){}r("Zone","Zone"),e.Zone=u}(typeof window<"u"&&window||typeof self<"u"&&self||global);const de=Object.getOwnPropertyDescriptor,Se=Object.defineProperty,Oe=Object.getPrototypeOf,me=Object.create,nt=Array.prototype.slice,Re="addEventListener",Me="removeEventListener",ue=Zone.__symbol__(Re),Ce=Zone.__symbol__(Me),se="true",ne="false",Ne=Zone.__symbol__("");function Ae(e,t){return Zone.current.wrap(e,t)}function ze(e,t,n,r,s){return Zone.current.scheduleMacroTask(e,t,n,r,s)}const j=Zone.__symbol__,Ie=typeof window<"u",_e=Ie?window:void 0,X=Ie&&_e||"object"==typeof self&&self||global,rt="removeAttribute";function Le(e,t){for(let n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Ae(e[n],t+"_"+n));return e}function Fe(e){return!e||!1!==e.writable&&!("function"==typeof e.get&&typeof e.set>"u")}const xe=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,ve=!("nw"in X)&&typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process),De=!ve&&!xe&&!(!Ie||!_e.HTMLElement),je=typeof X.process<"u"&&"[object process]"==={}.toString.call(X.process)&&!xe&&!(!Ie||!_e.HTMLElement),we={},ie=function(e){if(!(e=e||X.event))return;let t=we[e.type];t||(t=we[e.type]=j("ON_PROPERTY"+e.type));const n=this||e.target||X,r=n[t];let s;return De&&n===_e&&"error"===e.type?(s=r&&r.call(this,e.message,e.filename,e.lineno,e.colno,e.error),!0===s&&e.preventDefault()):(s=r&&r.apply(this,arguments),null!=s&&!s&&e.preventDefault()),s};function $e(e,t,n){let r=de(e,t);if(!r&&n&&de(n,t)&&(r={enumerable:!0,configurable:!0}),!r||!r.configurable)return;const s=j("on"+t+"patched");if(e.hasOwnProperty(s)&&e[s])return;delete r.writable,delete r.value;const l=r.get,f=r.set,u=t.slice(2);let E=we[u];E||(E=we[u]=j("ON_PROPERTY"+u)),r.set=function(k){let g=this;!g&&e===X&&(g=X),g&&("function"==typeof g[E]&&g.removeEventListener(u,ie),f&&f.call(g,null),g[E]=k,"function"==typeof k&&g.addEventListener(u,ie,!1))},r.get=function(){let k=this;if(!k&&e===X&&(k=X),!k)return null;const g=k[E];if(g)return g;if(l){let A=l.call(this);if(A)return r.set.call(this,A),"function"==typeof k[rt]&&k.removeAttribute(t),A}return null},Se(e,t,r),e[s]=!0}function We(e,t,n){if(t)for(let r=0;r<t.length;r++)$e(e,"on"+t[r],n);else{const r=[];for(const s in e)"on"==s.slice(0,2)&&r.push(s);for(let s=0;s<r.length;s++)$e(e,r[s],n)}}const ee=j("originalInstance");function be(e){const t=X[e];if(!t)return;X[j(e)]=t,X[e]=function(){const s=Le(arguments,e);switch(s.length){case 0:this[ee]=new t;break;case 1:this[ee]=new t(s[0]);break;case 2:this[ee]=new t(s[0],s[1]);break;case 3:this[ee]=new t(s[0],s[1],s[2]);break;case 4:this[ee]=new t(s[0],s[1],s[2],s[3]);break;default:throw new Error("Arg list too long.")}},ae(X[e],t);const n=new t(function(){});let r;for(r in n)"XMLHttpRequest"===e&&"responseBlob"===r||function(s){"function"==typeof n[s]?X[e].prototype[s]=function(){return this[ee][s].apply(this[ee],arguments)}:Se(X[e].prototype,s,{set:function(l){"function"==typeof l?(this[ee][s]=Ae(l,e+"."+s),ae(this[ee][s],l)):this[ee][s]=l},get:function(){return this[ee][s]}})}(r);for(r in t)"prototype"!==r&&t.hasOwnProperty(r)&&(X[e][r]=t[r])}function ce(e,t,n){let r=e;for(;r&&!r.hasOwnProperty(t);)r=Oe(r);!r&&e[t]&&(r=e);const s=j(t);let l=null;if(r&&(!(l=r[s])||!r.hasOwnProperty(s))&&(l=r[s]=r[t],Fe(r&&de(r,t)))){const u=n(l,s,t);r[t]=function(){return u(this,arguments)},ae(r[t],l)}return l}function qe(e,t,n){let r=null;function s(l){const f=l.data;return f.args[f.cbIdx]=function(){l.invoke.apply(this,arguments)},r.apply(f.target,f.args),l}r=ce(e,t,l=>function(f,u){const E=n(f,u);return E.cbIdx>=0&&"function"==typeof u[E.cbIdx]?ze(E.name,u[E.cbIdx],E,s):l.apply(f,u)})}function ae(e,t){e[j("OriginalDelegate")]=t}let He=!1,Be=!1;function st(){if(He)return Be;He=!0;try{const e=_e.navigator.userAgent;(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/"))&&(Be=!0)}catch{}return Be}Zone.__load_patch("ZoneAwarePromise",(e,t,n)=>{const r=Object.getOwnPropertyDescriptor,s=Object.defineProperty,f=n.symbol,u=[],E=!0===e[f("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")],k=f("Promise"),g=f("then"),A="__creationTrace__";n.onUnhandledError=h=>{if(n.showUncaughtError()){const d=h&&h.rejection;d?console.error("Unhandled Promise rejection:",d instanceof Error?d.message:d,"; Zone:",h.zone.name,"; Task:",h.task&&h.task.source,"; Value:",d,d instanceof Error?d.stack:void 0):console.error(h)}},n.microtaskDrainDone=()=>{for(;u.length;){const h=u.shift();try{h.zone.runGuarded(()=>{throw h.throwOriginal?h.rejection:h})}catch(d){S(d)}}};const N=f("unhandledPromiseRejectionHandler");function S(h){n.onUnhandledError(h);try{const d=t[N];"function"==typeof d&&d.call(this,h)}catch{}}function H(h){return h&&h.then}function P(h){return h}function F(h){return o.reject(h)}const z=f("state"),R=f("value"),p=f("finally"),Q=f("parentPromiseValue"),B=f("parentPromiseState"),Y="Promise.then",$=null,y=!0,U=!1,T=0;function L(h,d){return a=>{try{K(h,d,a)}catch(_){K(h,!1,_)}}}const O=function(){let h=!1;return function(a){return function(){h||(h=!0,a.apply(null,arguments))}}},te="Promise resolved with itself",fe=f("currentTaskTrace");function K(h,d,a){const _=O();if(h===a)throw new TypeError(te);if(h[z]===$){let w=null;try{("object"==typeof a||"function"==typeof a)&&(w=a&&a.then)}catch(C){return _(()=>{K(h,!1,C)})(),h}if(d!==U&&a instanceof o&&a.hasOwnProperty(z)&&a.hasOwnProperty(R)&&a[z]!==$)le(a),K(h,a[z],a[R]);else if(d!==U&&"function"==typeof w)try{w.call(a,_(L(h,d)),_(L(h,!1)))}catch(C){_(()=>{K(h,!1,C)})()}else{h[z]=d;const C=h[R];if(h[R]=a,h[p]===p&&d===y&&(h[z]=h[B],h[R]=h[Q]),d===U&&a instanceof Error){const v=t.currentTask&&t.currentTask.data&&t.currentTask.data[A];v&&s(a,fe,{configurable:!0,enumerable:!1,writable:!0,value:v})}for(let v=0;v<C.length;)oe(h,C[v++],C[v++],C[v++],C[v++]);if(0==C.length&&d==U){h[z]=T;let v=a;try{throw new Error("Uncaught (in promise): "+function l(h){return h&&h.toString===Object.prototype.toString?(h.constructor&&h.constructor.name||"")+": "+JSON.stringify(h):h?h.toString():Object.prototype.toString.call(h)}(a)+(a&&a.stack?"\n"+a.stack:""))}catch(D){v=D}E&&(v.throwOriginal=!0),v.rejection=a,v.promise=h,v.zone=t.current,v.task=t.currentTask,u.push(v),n.scheduleMicroTask()}}}return h}const W=f("rejectionHandledHandler");function le(h){if(h[z]===T){try{const d=t[W];d&&"function"==typeof d&&d.call(this,{rejection:h[R],promise:h})}catch{}h[z]=U;for(let d=0;d<u.length;d++)h===u[d].promise&&u.splice(d,1)}}function oe(h,d,a,_,w){le(h);const C=h[z],v=C?"function"==typeof _?_:P:"function"==typeof w?w:F;d.scheduleMicroTask(Y,()=>{try{const D=h[R],Z=!!a&&p===a[p];Z&&(a[Q]=D,a[B]=C);const M=d.run(v,void 0,Z&&v!==F&&v!==P?[]:[D]);K(a,!0,M)}catch(D){K(a,!1,D)}},a)}const x=function(){},m=e.AggregateError;class o{static toString(){return"function ZoneAwarePromise() { [native code] }"}static resolve(d){return K(new this(null),y,d)}static reject(d){return K(new this(null),U,d)}static any(d){if(!d||"function"!=typeof d[Symbol.iterator])return Promise.reject(new m([],"All promises were rejected"));const a=[];let _=0;try{for(let v of d)_++,a.push(o.resolve(v))}catch{return Promise.reject(new m([],"All promises were rejected"))}if(0===_)return Promise.reject(new m([],"All promises were rejected"));let w=!1;const C=[];return new o((v,D)=>{for(let Z=0;Z<a.length;Z++)a[Z].then(M=>{w||(w=!0,v(M))},M=>{C.push(M),_--,0===_&&(w=!0,D(new m(C,"All promises were rejected")))})})}static race(d){let a,_,w=new this((D,Z)=>{a=D,_=Z});function C(D){a(D)}function v(D){_(D)}for(let D of d)H(D)||(D=this.resolve(D)),D.then(C,v);return w}static all(d){return o.allWithCallback(d)}static allSettled(d){return(this&&this.prototype instanceof o?this:o).allWithCallback(d,{thenCallback:_=>({status:"fulfilled",value:_}),errorCallback:_=>({status:"rejected",reason:_})})}static allWithCallback(d,a){let _,w,C=new this((M,V)=>{_=M,w=V}),v=2,D=0;const Z=[];for(let M of d){H(M)||(M=this.resolve(M));const V=D;try{M.then(G=>{Z[V]=a?a.thenCallback(G):G,v--,0===v&&_(Z)},G=>{a?(Z[V]=a.errorCallback(G),v--,0===v&&_(Z)):w(G)})}catch(G){w(G)}v++,D++}return v-=2,0===v&&_(Z),C}constructor(d){const a=this;if(!(a instanceof o))throw new Error("Must be an instanceof Promise.");a[z]=$,a[R]=[];try{const _=O();d&&d(_(L(a,y)),_(L(a,U)))}catch(_){K(a,!1,_)}}get[Symbol.toStringTag](){return"Promise"}get[Symbol.species](){return o}then(d,a){let _=this.constructor?.[Symbol.species];(!_||"function"!=typeof _)&&(_=this.constructor||o);const w=new _(x),C=t.current;return this[z]==$?this[R].push(C,w,d,a):oe(this,C,w,d,a),w}catch(d){return this.then(null,d)}finally(d){let a=this.constructor?.[Symbol.species];(!a||"function"!=typeof a)&&(a=o);const _=new a(x);_[p]=p;const w=t.current;return this[z]==$?this[R].push(w,_,d,d):oe(this,w,_,d,d),_}}o.resolve=o.resolve,o.reject=o.reject,o.race=o.race,o.all=o.all;const c=e[k]=e.Promise;e.Promise=o;const b=f("thenPatched");function I(h){const d=h.prototype,a=r(d,"then");if(a&&(!1===a.writable||!a.configurable))return;const _=d.then;d[g]=_,h.prototype.then=function(w,C){return new o((D,Z)=>{_.call(this,D,Z)}).then(w,C)},h[b]=!0}return n.patchThen=I,c&&(I(c),ce(e,"fetch",h=>function J(h){return function(d,a){let _=h.apply(d,a);if(_ instanceof o)return _;let w=_.constructor;return w[b]||I(w),_}}(h))),Promise[t.__symbol__("uncaughtPromiseErrors")]=u,o}),Zone.__load_patch("toString",e=>{const t=Function.prototype.toString,n=j("OriginalDelegate"),r=j("Promise"),s=j("Error"),l=function(){if("function"==typeof this){const k=this[n];if(k)return"function"==typeof k?t.call(k):Object.prototype.toString.call(k);if(this===Promise){const g=e[r];if(g)return t.call(g)}if(this===Error){const g=e[s];if(g)return t.call(g)}}return t.call(this)};l[n]=t,Function.prototype.toString=l;const f=Object.prototype.toString;Object.prototype.toString=function(){return"function"==typeof Promise&&this instanceof Promise?"[object Promise]":f.call(this)}});let Te=!1;if(typeof window<"u")try{const e=Object.defineProperty({},"passive",{get:function(){Te=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch{Te=!1}const Xe={useG:!0},re={},Ue={},Ye=new RegExp("^"+Ne+"(\\w+)(true|false)$"),it=j("propagationStopped");function Ke(e,t){const n=(t?t(e):e)+ne,r=(t?t(e):e)+se,s=Ne+n,l=Ne+r;re[e]={},re[e][ne]=s,re[e][se]=l}function ct(e,t,n,r){const s=r&&r.add||Re,l=r&&r.rm||Me,f=r&&r.listeners||"eventListeners",u=r&&r.rmAll||"removeAllListeners",E=j(s),k="."+s+":",g="prependListener",A="."+g+":",N=function(R,p,Q){if(R.isRemoved)return;const B=R.callback;let Y;"object"==typeof B&&B.handleEvent&&(R.callback=y=>B.handleEvent(y),R.originalDelegate=B);try{R.invoke(R,p,[Q])}catch(y){Y=y}const $=R.options;return $&&"object"==typeof $&&$.once&&p[l].call(p,Q.type,R.originalDelegate?R.originalDelegate:R.callback,$),Y};function S(R,p,Q){if(!(p=p||e.event))return;const B=R||p.target||e,Y=B[re[p.type][Q?se:ne]];if(Y){const $=[];if(1===Y.length){const y=N(Y[0],B,p);y&&$.push(y)}else{const y=Y.slice();for(let U=0;U<y.length&&(!p||!0!==p[it]);U++){const T=N(y[U],B,p);T&&$.push(T)}}if(1===$.length)throw $[0];for(let y=0;y<$.length;y++){const U=$[y];t.nativeScheduleMicroTask(()=>{throw U})}}}const H=function(R){return S(this,R,!1)},P=function(R){return S(this,R,!0)};function F(R,p){if(!R)return!1;let Q=!0;p&&void 0!==p.useG&&(Q=p.useG);const B=p&&p.vh;let Y=!0;p&&void 0!==p.chkDup&&(Y=p.chkDup);let $=!1;p&&void 0!==p.rt&&($=p.rt);let y=R;for(;y&&!y.hasOwnProperty(s);)y=Oe(y);if(!y&&R[s]&&(y=R),!y||y[E])return!1;const U=p&&p.eventNameToString,T={},L=y[E]=y[s],O=y[j(l)]=y[l],te=y[j(f)]=y[f],fe=y[j(u)]=y[u];let K;p&&p.prepend&&(K=y[j(p.prepend)]=y[p.prepend]);const o=Q?function(a){if(!T.isExisting)return L.call(T.target,T.eventName,T.capture?P:H,T.options)}:function(a){return L.call(T.target,T.eventName,a.invoke,T.options)},c=Q?function(a){if(!a.isRemoved){const _=re[a.eventName];let w;_&&(w=_[a.capture?se:ne]);const C=w&&a.target[w];if(C)for(let v=0;v<C.length;v++)if(C[v]===a){C.splice(v,1),a.isRemoved=!0,0===C.length&&(a.allRemoved=!0,a.target[w]=null);break}}if(a.allRemoved)return O.call(a.target,a.eventName,a.capture?P:H,a.options)}:function(a){return O.call(a.target,a.eventName,a.invoke,a.options)},I=p&&p.diff?p.diff:function(a,_){const w=typeof _;return"function"===w&&a.callback===_||"object"===w&&a.originalDelegate===_},J=Zone[j("UNPATCHED_EVENTS")],h=e[j("PASSIVE_EVENTS")],d=function(a,_,w,C,v=!1,D=!1){return function(){const Z=this||e;let M=arguments[0];p&&p.transferEventName&&(M=p.transferEventName(M));let V=arguments[1];if(!V)return a.apply(this,arguments);if(ve&&"uncaughtException"===M)return a.apply(this,arguments);let G=!1;if("function"!=typeof V){if(!V.handleEvent)return a.apply(this,arguments);G=!0}if(B&&!B(a,V,Z,arguments))return;const pe=Te&&!!h&&-1!==h.indexOf(M),he=function W(a,_){return!Te&&"object"==typeof a&&a?!!a.capture:Te&&_?"boolean"==typeof a?{capture:a,passive:!0}:a?"object"==typeof a&&!1!==a.passive?{...a,passive:!0}:a:{passive:!0}:a}(arguments[2],pe);if(J)for(let Pe=0;Pe<J.length;Pe++)if(M===J[Pe])return pe?a.call(Z,M,V,he):a.apply(this,arguments);const ht=!!he&&("boolean"==typeof he||he.capture),Tt=!(!he||"object"!=typeof he)&&he.once,mt=Zone.current;let dt=re[M];dt||(Ke(M,U),dt=re[M]);const Et=dt[ht?se:ne];let tt,Ze=Z[Et],gt=!1;if(Ze){if(gt=!0,Y)for(let Pe=0;Pe<Ze.length;Pe++)if(I(Ze[Pe],V))return}else Ze=Z[Et]=[];const pt=Z.constructor.name,yt=Ue[pt];yt&&(tt=yt[M]),tt||(tt=pt+_+(U?U(M):M)),T.options=he,Tt&&(T.options.once=!1),T.target=Z,T.capture=ht,T.eventName=M,T.isExisting=gt;const Ge=Q?Xe:void 0;Ge&&(Ge.taskData=T);const ye=mt.scheduleEventTask(tt,V,Ge,w,C);return T.target=null,Ge&&(Ge.taskData=null),Tt&&(he.once=!0),!Te&&"boolean"==typeof ye.options||(ye.options=he),ye.target=Z,ye.capture=ht,ye.eventName=M,G&&(ye.originalDelegate=V),D?Ze.unshift(ye):Ze.push(ye),v?Z:void 0}};return y[s]=d(L,k,o,c,$),K&&(y[g]=d(K,A,function(a){return K.call(T.target,T.eventName,a.invoke,T.options)},c,$,!0)),y[l]=function(){const a=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const w=arguments[2],C=!!w&&("boolean"==typeof w||w.capture),v=arguments[1];if(!v)return O.apply(this,arguments);if(B&&!B(O,v,a,arguments))return;const D=re[_];let Z;D&&(Z=D[C?se:ne]);const M=Z&&a[Z];if(M)for(let V=0;V<M.length;V++){const G=M[V];if(I(G,v))return M.splice(V,1),G.isRemoved=!0,0===M.length&&(G.allRemoved=!0,a[Z]=null,"string"==typeof _)&&(a[Ne+"ON_PROPERTY"+_]=null),G.zone.cancelTask(G),$?a:void 0}return O.apply(this,arguments)},y[f]=function(){const a=this||e;let _=arguments[0];p&&p.transferEventName&&(_=p.transferEventName(_));const w=[],C=at(a,U?U(_):_);for(let v=0;v<C.length;v++){const D=C[v];w.push(D.originalDelegate?D.originalDelegate:D.callback)}return w},y[u]=function(){const a=this||e;let _=arguments[0];if(_){p&&p.transferEventName&&(_=p.transferEventName(_));const w=re[_];if(w){const D=a[w[ne]],Z=a[w[se]];if(D){const M=D.slice();for(let V=0;V<M.length;V++){const G=M[V];this[l].call(this,_,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}if(Z){const M=Z.slice();for(let V=0;V<M.length;V++){const G=M[V];this[l].call(this,_,G.originalDelegate?G.originalDelegate:G.callback,G.options)}}}}else{const w=Object.keys(a);for(let C=0;C<w.length;C++){const D=Ye.exec(w[C]);let Z=D&&D[1];Z&&"removeListener"!==Z&&this[u].call(this,Z)}this[u].call(this,"removeListener")}if($)return this},ae(y[s],L),ae(y[l],O),fe&&ae(y[u],fe),te&&ae(y[f],te),!0}let z=[];for(let R=0;R<n.length;R++)z[R]=F(n[R],r);return z}function at(e,t){if(!t){const l=[];for(let f in e){const u=Ye.exec(f);let E=u&&u[1];if(E&&(!t||E===t)){const k=e[f];if(k)for(let g=0;g<k.length;g++)l.push(k[g])}}return l}let n=re[t];n||(Ke(t),n=re[t]);const r=e[n[ne]],s=e[n[se]];return r?s?r.concat(s):r.slice():s?s.slice():[]}function Je(e,t){const n=e.Event;n&&n.prototype&&t.patchMethod(n.prototype,"stopImmediatePropagation",r=>function(s,l){s[it]=!0,r&&r.apply(s,l)})}function Qe(e,t,n,r,s){const l=Zone.__symbol__(r);if(t[l])return;const f=t[l]=t[r];t[r]=function(u,E,k){return E&&E.prototype&&s.forEach(function(g){const A=`${n}.${r}::`+g,N=E.prototype;try{if(N.hasOwnProperty(g)){const S=e.ObjectGetOwnPropertyDescriptor(N,g);S&&S.value?(S.value=e.wrapWithCurrentZone(S.value,A),e._redefineProperty(E.prototype,g,S)):N[g]&&(N[g]=e.wrapWithCurrentZone(N[g],A))}else N[g]&&(N[g]=e.wrapWithCurrentZone(N[g],A))}catch{}}),f.call(t,u,E,k)},e.attachOriginToPatched(t[r],f)}function lt(e,t,n){if(!n||0===n.length)return t;const r=n.filter(l=>l.target===e);if(!r||0===r.length)return t;const s=r[0].ignoreProperties;return t.filter(l=>-1===s.indexOf(l))}function ut(e,t,n,r){e&&We(e,lt(e,t,n),r)}function Ve(e){return Object.getOwnPropertyNames(e).filter(t=>t.startsWith("on")&&t.length>2).map(t=>t.substring(2))}Zone.__load_patch("util",(e,t,n)=>{const r=Ve(e);n.patchOnProperties=We,n.patchMethod=ce,n.bindArguments=Le,n.patchMacroTask=qe;const s=t.__symbol__("BLACK_LISTED_EVENTS"),l=t.__symbol__("UNPATCHED_EVENTS");e[l]&&(e[s]=e[l]),e[s]&&(t[s]=t[l]=e[s]),n.patchEventPrototype=Je,n.patchEventTarget=ct,n.isIEOrEdge=st,n.ObjectDefineProperty=Se,n.ObjectGetOwnPropertyDescriptor=de,n.ObjectCreate=me,n.ArraySlice=nt,n.patchClass=be,n.wrapWithCurrentZone=Ae,n.filterProperties=lt,n.attachOriginToPatched=ae,n._redefineProperty=Object.defineProperty,n.patchCallbacks=Qe,n.getGlobalObjects=()=>({globalSources:Ue,zoneSymbolEventNames:re,eventNames:r,isBrowser:De,isMix:je,isNode:ve,TRUE_STR:se,FALSE_STR:ne,ZONE_SYMBOL_PREFIX:Ne,ADD_EVENT_LISTENER_STR:Re,REMOVE_EVENT_LISTENER_STR:Me})});const Ee=j("zoneTask");function ge(e,t,n,r){let s=null,l=null;n+=r;const f={};function u(k){const g=k.data;return g.args[0]=function(){return k.invoke.apply(this,arguments)},g.handleId=s.apply(e,g.args),k}function E(k){return l.call(e,k.data.handleId)}s=ce(e,t+=r,k=>function(g,A){if("function"==typeof A[0]){const N={isPeriodic:"Interval"===r,delay:"Timeout"===r||"Interval"===r?A[1]||0:void 0,args:A},S=A[0];A[0]=function(){try{return S.apply(this,arguments)}finally{N.isPeriodic||("number"==typeof N.handleId?delete f[N.handleId]:N.handleId&&(N.handleId[Ee]=null))}};const H=ze(t,A[0],N,u,E);if(!H)return H;const P=H.data.handleId;return"number"==typeof P?f[P]=H:P&&(P[Ee]=H),P&&P.ref&&P.unref&&"function"==typeof P.ref&&"function"==typeof P.unref&&(H.ref=P.ref.bind(P),H.unref=P.unref.bind(P)),"number"==typeof P||P?P:H}return k.apply(e,A)}),l=ce(e,n,k=>function(g,A){const N=A[0];let S;"number"==typeof N?S=f[N]:(S=N&&N[Ee],S||(S=N)),S&&"string"==typeof S.type?"notScheduled"!==S.state&&(S.cancelFn&&S.data.isPeriodic||0===S.runCount)&&("number"==typeof N?delete f[N]:N&&(N[Ee]=null),S.zone.cancelTask(S)):k.apply(e,A)})}Zone.__load_patch("legacy",e=>{const t=e[Zone.__symbol__("legacyPatch")];t&&t()}),Zone.__load_patch("queueMicrotask",(e,t,n)=>{n.patchMethod(e,"queueMicrotask",r=>function(s,l){t.current.scheduleMicroTask("queueMicrotask",l[0])})}),Zone.__load_patch("timers",e=>{const t="set",n="clear";ge(e,t,n,"Timeout"),ge(e,t,n,"Interval"),ge(e,t,n,"Immediate")}),Zone.__load_patch("requestAnimationFrame",e=>{ge(e,"request","cancel","AnimationFrame"),ge(e,"mozRequest","mozCancel","AnimationFrame"),ge(e,"webkitRequest","webkitCancel","AnimationFrame")}),Zone.__load_patch("blocking",(e,t)=>{const n=["alert","prompt","confirm"];for(let r=0;r<n.length;r++)ce(e,n[r],(l,f,u)=>function(E,k){return t.current.run(l,e,k,u)})}),Zone.__load_patch("EventTarget",(e,t,n)=>{(function i(e,t){t.patchEventPrototype(e,t)})(e,n),function _t(e,t){if(Zone[t.symbol("patchEventTarget")])return;const{eventNames:n,zoneSymbolEventNames:r,TRUE_STR:s,FALSE_STR:l,ZONE_SYMBOL_PREFIX:f}=t.getGlobalObjects();for(let E=0;E<n.length;E++){const k=n[E],N=f+(k+l),S=f+(k+s);r[k]={},r[k][l]=N,r[k][s]=S}const u=e.EventTarget;u&&u.prototype&&t.patchEventTarget(e,t,[u&&u.prototype])}(e,n);const r=e.XMLHttpRequestEventTarget;r&&r.prototype&&n.patchEventTarget(e,n,[r.prototype])}),Zone.__load_patch("MutationObserver",(e,t,n)=>{be("MutationObserver"),be("WebKitMutationObserver")}),Zone.__load_patch("IntersectionObserver",(e,t,n)=>{be("IntersectionObserver")}),Zone.__load_patch("FileReader",(e,t,n)=>{be("FileReader")}),Zone.__load_patch("on_property",(e,t,n)=>{!function ft(e,t){if(ve&&!je||Zone[e.symbol("patchEvents")])return;const n=t.__Zone_ignore_on_properties;let r=[];if(De){const s=window;r=r.concat(["Document","SVGElement","Element","HTMLElement","HTMLBodyElement","HTMLMediaElement","HTMLFrameSetElement","HTMLFrameElement","HTMLIFrameElement","HTMLMarqueeElement","Worker"]);const l=function ot(){try{const e=_e.navigator.userAgent;if(-1!==e.indexOf("MSIE ")||-1!==e.indexOf("Trident/"))return!0}catch{}return!1}()?[{target:s,ignoreProperties:["error"]}]:[];ut(s,Ve(s),n&&n.concat(l),Oe(s))}r=r.concat(["XMLHttpRequest","XMLHttpRequestEventTarget","IDBIndex","IDBRequest","IDBOpenDBRequest","IDBDatabase","IDBTransaction","IDBCursor","WebSocket"]);for(let s=0;s<r.length;s++){const l=t[r[s]];l&&l.prototype&&ut(l.prototype,Ve(l.prototype),n)}}(n,e)}),Zone.__load_patch("customElements",(e,t,n)=>{!function et(e,t){const{isBrowser:n,isMix:r}=t.getGlobalObjects();(n||r)&&e.customElements&&"customElements"in e&&t.patchCallbacks(t,e.customElements,"customElements","define",["connectedCallback","disconnectedCallback","adoptedCallback","attributeChangedCallback"])}(e,n)}),Zone.__load_patch("XHR",(e,t)=>{!function E(k){const g=k.XMLHttpRequest;if(!g)return;const A=g.prototype;let S=A[ue],H=A[Ce];if(!S){const T=k.XMLHttpRequestEventTarget;if(T){const L=T.prototype;S=L[ue],H=L[Ce]}}const P="readystatechange",F="scheduled";function z(T){const L=T.data,O=L.target;O[l]=!1,O[u]=!1;const te=O[s];S||(S=O[ue],H=O[Ce]),te&&H.call(O,P,te);const fe=O[s]=()=>{if(O.readyState===O.DONE)if(!L.aborted&&O[l]&&T.state===F){const W=O[t.__symbol__("loadfalse")];if(0!==O.status&&W&&W.length>0){const le=T.invoke;T.invoke=function(){const oe=O[t.__symbol__("loadfalse")];for(let q=0;q<oe.length;q++)oe[q]===T&&oe.splice(q,1);!L.aborted&&T.state===F&&le.call(T)},W.push(T)}else T.invoke()}else!L.aborted&&!1===O[l]&&(O[u]=!0)};return S.call(O,P,fe),O[n]||(O[n]=T),y.apply(O,L.args),O[l]=!0,T}function R(){}function p(T){const L=T.data;return L.aborted=!0,U.apply(L.target,L.args)}const Q=ce(A,"open",()=>function(T,L){return T[r]=0==L[2],T[f]=L[1],Q.apply(T,L)}),Y=j("fetchTaskAborting"),$=j("fetchTaskScheduling"),y=ce(A,"send",()=>function(T,L){if(!0===t.current[$]||T[r])return y.apply(T,L);{const O={target:T,url:T[f],isPeriodic:!1,args:L,aborted:!1},te=ze("XMLHttpRequest.send",R,O,z,p);T&&!0===T[u]&&!O.aborted&&te.state===F&&te.invoke()}}),U=ce(A,"abort",()=>function(T,L){const O=function N(T){return T[n]}(T);if(O&&"string"==typeof O.type){if(null==O.cancelFn||O.data&&O.data.aborted)return;O.zone.cancelTask(O)}else if(!0===t.current[Y])return U.apply(T,L)})}(e);const n=j("xhrTask"),r=j("xhrSync"),s=j("xhrListener"),l=j("xhrScheduled"),f=j("xhrURL"),u=j("xhrErrorBeforeScheduled")}),Zone.__load_patch("geolocation",e=>{e.navigator&&e.navigator.geolocation&&function ke(e,t){const n=e.constructor.name;for(let r=0;r<t.length;r++){const s=t[r],l=e[s];if(l){if(!Fe(de(e,s)))continue;e[s]=(u=>{const E=function(){return u.apply(this,Le(arguments,n+"."+s))};return ae(E,u),E})(l)}}}(e.navigator.geolocation,["getCurrentPosition","watchPosition"])}),Zone.__load_patch("PromiseRejectionEvent",(e,t)=>{function n(r){return function(s){at(e,r).forEach(f=>{const u=e.PromiseRejectionEvent;if(u){const E=new u(r,{promise:s.promise,reason:s.rejection});f.invoke(E)}})}}e.PromiseRejectionEvent&&(t[j("unhandledPromiseRejectionHandler")]=n("unhandledrejection"),t[j("rejectionHandledHandler")]=n("rejectionhandled"))})}},de=>{de(de.s=404)}]);