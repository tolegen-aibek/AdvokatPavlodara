(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var hd={exports:{}},Ia={},pd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function NE(){if($0)return _t;$0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(O,J,Oe){this.props=O,this.context=J,this.refs=A,this.updater=Oe||_}y.prototype.isReactComponent={},y.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=y.prototype;function C(O,J,Oe){this.props=O,this.context=J,this.refs=A,this.updater=Oe||_}var P=C.prototype=new S;P.constructor=C,M(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,N=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(O,J,Oe){var Ge,Ne={},ce=null,ye=null;if(J!=null)for(Ge in J.ref!==void 0&&(ye=J.ref),J.key!==void 0&&(ce=""+J.key),J)N.call(J,Ge)&&!F.hasOwnProperty(Ge)&&(Ne[Ge]=J[Ge]);var me=arguments.length-2;if(me===1)Ne.children=Oe;else if(1<me){for(var Ue=Array(me),Je=0;Je<me;Je++)Ue[Je]=arguments[Je+2];Ne.children=Ue}if(O&&O.defaultProps)for(Ge in me=O.defaultProps,me)Ne[Ge]===void 0&&(Ne[Ge]=me[Ge]);return{$$typeof:n,type:O,key:ce,ref:ye,props:Ne,_owner:L.current}}function I(O,J){return{$$typeof:n,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function B(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return J[Oe]})}var q=/\/+/g;function le(O,J){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):J.toString(36)}function ue(O,J,Oe,Ge,Ne){var ce=typeof O;(ce==="undefined"||ce==="boolean")&&(O=null);var ye=!1;if(O===null)ye=!0;else switch(ce){case"string":case"number":ye=!0;break;case"object":switch(O.$$typeof){case n:case e:ye=!0}}if(ye)return ye=O,Ne=Ne(ye),O=Ge===""?"."+le(ye,0):Ge,R(Ne)?(Oe="",O!=null&&(Oe=O.replace(q,"$&/")+"/"),ue(Ne,J,Oe,"",function(Je){return Je})):Ne!=null&&(B(Ne)&&(Ne=I(Ne,Oe+(!Ne.key||ye&&ye.key===Ne.key?"":(""+Ne.key).replace(q,"$&/")+"/")+O)),J.push(Ne)),1;if(ye=0,Ge=Ge===""?".":Ge+":",R(O))for(var me=0;me<O.length;me++){ce=O[me];var Ue=Ge+le(ce,me);ye+=ue(ce,J,Oe,Ue,Ne)}else if(Ue=g(O),typeof Ue=="function")for(O=Ue.call(O),me=0;!(ce=O.next()).done;)ce=ce.value,Ue=Ge+le(ce,me++),ye+=ue(ce,J,Oe,Ue,Ne);else if(ce==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ye}function G(O,J,Oe){if(O==null)return O;var Ge=[],Ne=0;return ue(O,Ge,"","",function(ce){return J.call(Oe,ce,Ne++)}),Ge}function Q(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var $={current:null},X={transition:null},ie={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:G,forEach:function(O,J,Oe){G(O,function(){J.apply(this,arguments)},Oe)},count:function(O){var J=0;return G(O,function(){J++}),J},toArray:function(O){return G(O,function(J){return J})||[]},only:function(O){if(!B(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=C,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,_t.act=se,_t.cloneElement=function(O,J,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=M({},O.props),Ne=O.key,ce=O.ref,ye=O._owner;if(J!=null){if(J.ref!==void 0&&(ce=J.ref,ye=L.current),J.key!==void 0&&(Ne=""+J.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ue in J)N.call(J,Ue)&&!F.hasOwnProperty(Ue)&&(Ge[Ue]=J[Ue]===void 0&&me!==void 0?me[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)Ge.children=Oe;else if(1<Ue){me=Array(Ue);for(var Je=0;Je<Ue;Je++)me[Je]=arguments[Je+2];Ge.children=me}return{$$typeof:n,type:O.type,key:Ne,ref:ce,props:Ge,_owner:ye}},_t.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},_t.createElement=E,_t.createFactory=function(O){var J=E.bind(null,O);return J.type=O,J},_t.createRef=function(){return{current:null}},_t.forwardRef=function(O){return{$$typeof:u,render:O}},_t.isValidElement=B,_t.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Q}},_t.memo=function(O,J){return{$$typeof:h,type:O,compare:J===void 0?null:J}},_t.startTransition=function(O){var J=X.transition;X.transition={};try{O()}finally{X.transition=J}},_t.unstable_act=se,_t.useCallback=function(O,J){return $.current.useCallback(O,J)},_t.useContext=function(O){return $.current.useContext(O)},_t.useDebugValue=function(){},_t.useDeferredValue=function(O){return $.current.useDeferredValue(O)},_t.useEffect=function(O,J){return $.current.useEffect(O,J)},_t.useId=function(){return $.current.useId()},_t.useImperativeHandle=function(O,J,Oe){return $.current.useImperativeHandle(O,J,Oe)},_t.useInsertionEffect=function(O,J){return $.current.useInsertionEffect(O,J)},_t.useLayoutEffect=function(O,J){return $.current.useLayoutEffect(O,J)},_t.useMemo=function(O,J){return $.current.useMemo(O,J)},_t.useReducer=function(O,J,Oe){return $.current.useReducer(O,J,Oe)},_t.useRef=function(O){return $.current.useRef(O)},_t.useState=function(O){return $.current.useState(O)},_t.useSyncExternalStore=function(O,J,Oe){return $.current.useSyncExternalStore(O,J,Oe)},_t.useTransition=function(){return $.current.useTransition()},_t.version="18.3.1",_t}var K0;function Op(){return K0||(K0=1,pd.exports=NE()),pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function UE(){if(Z0)return Ia;Z0=1;var n=Op(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:_,props:v,_owner:o.current}}return Ia.Fragment=t,Ia.jsx=c,Ia.jsxs=c,Ia}var Q0;function FE(){return Q0||(Q0=1,hd.exports=UE()),hd.exports}var V=FE(),Re=Op(),gc={},md={exports:{}},Yn={},gd={exports:{}},vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function OE(){return J0||(J0=1,(function(n){function e(X,ie){var se=X.length;X.push(ie);e:for(;0<se;){var O=se-1>>>1,J=X[O];if(0<o(J,ie))X[O]=ie,X[se]=J,se=O;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ie=X[0],se=X.pop();if(se!==ie){X[0]=se;e:for(var O=0,J=X.length,Oe=J>>>1;O<Oe;){var Ge=2*(O+1)-1,Ne=X[Ge],ce=Ge+1,ye=X[ce];if(0>o(Ne,se))ce<J&&0>o(ye,Ne)?(X[O]=ye,X[ce]=se,O=ce):(X[O]=Ne,X[Ge]=se,O=Ge);else if(ce<J&&0>o(ye,se))X[O]=ye,X[ce]=se,O=ce;else break e}}return ie}function o(X,ie){var se=X.sortIndex-ie.sortIndex;return se!==0?se:X.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,_=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(X){for(var ie=t(h);ie!==null;){if(ie.callback===null)r(h);else if(ie.startTime<=X)r(h),ie.sortIndex=ie.expirationTime,e(d,ie);else break;ie=t(h)}}function R(X){if(A=!1,P(X),!M)if(t(d)!==null)M=!0,Q(N);else{var ie=t(h);ie!==null&&$(R,ie.startTime-X)}}function N(X,ie){M=!1,A&&(A=!1,S(E),E=-1),_=!0;var se=g;try{for(P(ie),v=t(d);v!==null&&(!(v.expirationTime>ie)||X&&!k());){var O=v.callback;if(typeof O=="function"){v.callback=null,g=v.priorityLevel;var J=O(v.expirationTime<=ie);ie=n.unstable_now(),typeof J=="function"?v.callback=J:v===t(d)&&r(d),P(ie)}else r(d);v=t(d)}if(v!==null)var Oe=!0;else{var Ge=t(h);Ge!==null&&$(R,Ge.startTime-ie),Oe=!1}return Oe}finally{v=null,g=se,_=!1}}var L=!1,F=null,E=-1,I=5,B=-1;function k(){return!(n.unstable_now()-B<I)}function q(){if(F!==null){var X=n.unstable_now();B=X;var ie=!0;try{ie=F(!0,X)}finally{ie?le():(L=!1,F=null)}}else L=!1}var le;if(typeof C=="function")le=function(){C(q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,G=ue.port2;ue.port1.onmessage=q,le=function(){G.postMessage(null)}}else le=function(){y(q,0)};function Q(X){F=X,L||(L=!0,le())}function $(X,ie){E=y(function(){X(n.unstable_now())},ie)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,Q(N))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var se=g;g=ie;try{return X()}finally{g=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ie){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var se=g;g=X;try{return ie()}finally{g=se}},n.unstable_scheduleCallback=function(X,ie,se){var O=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,X){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=se+J,X={id:p++,callback:ie,priorityLevel:X,startTime:se,expirationTime:J,sortIndex:-1},se>O?(X.sortIndex=se,e(h,X),t(d)===null&&X===t(h)&&(A?(S(E),E=-1):A=!0,$(R,se-O))):(X.sortIndex=J,e(d,X),M||_||(M=!0,Q(N))),X},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(X){var ie=g;return function(){var se=g;g=ie;try{return X.apply(this,arguments)}finally{g=se}}}})(vd)),vd}var ev;function kE(){return ev||(ev=1,gd.exports=OE()),gd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function BE(){if(tv)return Yn;tv=1;var n=Op(),e=kE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||_(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,f,m,x,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,C);y[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,C);y[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,C);y[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,f){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),k=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),X=Symbol.iterator;function ie(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,O;function J(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Oe=!1;function Ge(i,s){if(!i||Oe)return"";Oe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var f=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){f=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){f=ae}i()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var m=ae.stack.split(`
`),x=f.stack.split(`
`),w=m.length-1,U=x.length-1;1<=w&&0<=U&&m[w]!==x[U];)U--;for(;1<=w&&0<=U;w--,U--)if(m[w]!==x[U]){if(w!==1||U!==1)do if(w--,U--,0>U||m[w]!==x[U]){var z=`
`+m[w].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=w&&0<=U);break}}}finally{Oe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?J(i):""}function Ne(i){switch(i.tag){case 5:return J(i.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return i=Ge(i.type,!1),i;case 11:return i=Ge(i.type.render,!1),i;case 1:return i=Ge(i.type,!0),i;default:return""}}function ce(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case L:return"Portal";case I:return"Profiler";case E:return"StrictMode";case le:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case G:return s=i.displayName||null,s!==null?s:ce(i.type)||"Memo";case Q:s=i._payload,i=i._init;try{return ce(i(s))}catch{}}return null}function ye(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ce(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(w){f=""+w,x.call(this,w)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(w){f=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function et(i){i._valueTracker||(i._valueTracker=Je(i))}function Bt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Ue(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function dt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function At(i,s){var l=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Nt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function Kt(i,s){ht(i,s);var l=me(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?yn(i,s.type,l):s.hasOwnProperty("defaultValue")&&yn(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Vt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function yn(i,s,l){(s!=="number"||dt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var W=Array.isArray;function zt(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function pt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Pt(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(W(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:me(l)}}function Le(i,s){var l=me(s.value),f=me(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function Wt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function D(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?D(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var K,he=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=K.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ge(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){De.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function fe(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function pe(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=fe(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var Fe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(i,s){if(s){if(Fe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ae(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function rt(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var at=null,gt=null,H=null;function we(i){if(i=xa(i)){if(typeof at!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Dl(s),at(i.stateNode,i.type,s))}}function de(i){gt?H?H.push(i):H=[i]:gt=i}function ke(){if(gt){var i=gt,s=H;if(H=gt=null,we(i),s)for(i=0;i<s.length;i++)we(s[i])}}function be(i,s){return i(s)}function ve(){}var Ye=!1;function lt(i,s,l){if(Ye)return i(s,l);Ye=!0;try{return be(i,s,l)}finally{Ye=!1,(gt!==null||H!==null)&&(ve(),ke())}}function Ot(i,s){var l=i.stateNode;if(l===null)return null;var f=Dl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ct=!1;if(u)try{var Nn={};Object.defineProperty(Nn,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{Ct=!1}function ai(i,s,l,f,m,x,w,U,z){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(_e){this.onError(_e)}}var rr=!1,Ws=null,cs=!1,js=null,sr={onError:function(i){rr=!0,Ws=i}};function Zo(i,s,l,f,m,x,w,U,z){rr=!1,Ws=null,ai.apply(sr,arguments)}function pl(i,s,l,f,m,x,w,U,z){if(Zo.apply(this,arguments),rr){if(rr){var ae=Ws;rr=!1,Ws=null}else throw Error(t(198));cs||(cs=!0,js=ae)}}function ki(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function us(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Qo(i){if(ki(i)!==i)throw Error(t(188))}function Xs(i){var s=i.alternate;if(!s){if(s=ki(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return Qo(m),i;if(x===f)return Qo(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var w=!1,U=m.child;U;){if(U===l){w=!0,l=m,f=x;break}if(U===f){w=!0,f=m,l=x;break}U=U.sibling}if(!w){for(U=x.child;U;){if(U===l){w=!0,l=x,f=m;break}if(U===f){w=!0,f=x,l=m;break}U=U.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function Jo(i){return i=Xs(i),i!==null?ea(i):null}function ea(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ea(i);if(s!==null)return s;i=i.sibling}return null}var ml=e.unstable_scheduleCallback,gl=e.unstable_cancelCallback,Uu=e.unstable_shouldYield,Fu=e.unstable_requestPaint,Zt=e.unstable_now,Ou=e.unstable_getCurrentPriorityLevel,ta=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,oe=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,Pe=null;function He(i){if(Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(ee,i,void 0,(i.current.flags&128)===128)}catch{}}var Ce=Math.clz32?Math.clz32:ct,qe=Math.log,Qe=Math.LN2;function ct(i){return i>>>=0,i===0?32:31-(qe(i)/Qe|0)|0}var ut=64,Ke=4194304;function Mt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ht(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,x=i.pingedLanes,w=l&268435455;if(w!==0){var U=w&~m;U!==0?f=Mt(U):(x&=w,x!==0&&(f=Mt(x)))}else w=l&~m,w!==0?f=Mt(w):x!==0&&(f=Mt(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-Ce(s),m=1<<l,f|=i[l],s&=~m;return f}function qt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var w=31-Ce(x),U=1<<w,z=m[w];z===-1?((U&l)===0||(U&f)!==0)&&(m[w]=qt(U,s)):z<=s&&(i.expiredLanes|=U),x&=~U}}function sn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ve(){var i=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),i}function Sn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function vt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ce(s),i[s]=l}function Vn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-Ce(l),x=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~x}}function zn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-Ce(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var xt=0;function or(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Rt,jt,xi,Lt,_i,Bi=!1,fs=[],Pr=null,Dr=null,Lr=null,na=new Map,ia=new Map,Ir=[],nM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lm(i,s){switch(i){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Dr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":na.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(s.pointerId)}}function ra(i,s,l,f,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},s!==null&&(s=xa(s),s!==null&&jt(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function iM(i,s,l,f,m){switch(s){case"focusin":return Pr=ra(Pr,i,s,l,f,m),!0;case"dragenter":return Dr=ra(Dr,i,s,l,f,m),!0;case"mouseover":return Lr=ra(Lr,i,s,l,f,m),!0;case"pointerover":var x=m.pointerId;return na.set(x,ra(na.get(x)||null,i,s,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,ia.set(x,ra(ia.get(x)||null,i,s,l,f,m)),!0}return!1}function Im(i){var s=ds(i.target);if(s!==null){var l=ki(s);if(l!==null){if(s=l.tag,s===13){if(s=us(l),s!==null){i.blockedOn=s,_i(i.priority,function(){xi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function vl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Bu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Ee=f,l.target.dispatchEvent(f),Ee=null}else return s=xa(l),s!==null&&jt(s),i.blockedOn=l,!1;s.shift()}return!0}function Nm(i,s,l){vl(i)&&l.delete(s)}function rM(){Bi=!1,Pr!==null&&vl(Pr)&&(Pr=null),Dr!==null&&vl(Dr)&&(Dr=null),Lr!==null&&vl(Lr)&&(Lr=null),na.forEach(Nm),ia.forEach(Nm)}function sa(i,s){i.blockedOn===s&&(i.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rM)))}function oa(i){function s(m){return sa(m,i)}if(0<fs.length){sa(fs[0],i);for(var l=1;l<fs.length;l++){var f=fs[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Pr!==null&&sa(Pr,i),Dr!==null&&sa(Dr,i),Lr!==null&&sa(Lr,i),na.forEach(s),ia.forEach(s),l=0;l<Ir.length;l++)f=Ir[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)Im(l),l.blockedOn===null&&Ir.shift()}var Ys=R.ReactCurrentBatchConfig,xl=!0;function sM(i,s,l,f){var m=xt,x=Ys.transition;Ys.transition=null;try{xt=1,ku(i,s,l,f)}finally{xt=m,Ys.transition=x}}function oM(i,s,l,f){var m=xt,x=Ys.transition;Ys.transition=null;try{xt=4,ku(i,s,l,f)}finally{xt=m,Ys.transition=x}}function ku(i,s,l,f){if(xl){var m=Bu(i,s,l,f);if(m===null)nf(i,s,f,_l,l),Lm(i,f);else if(iM(m,i,s,l,f))f.stopPropagation();else if(Lm(i,f),s&4&&-1<nM.indexOf(i)){for(;m!==null;){var x=xa(m);if(x!==null&&Rt(x),x=Bu(i,s,l,f),x===null&&nf(i,s,f,_l,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else nf(i,s,f,null,l)}}var _l=null;function Bu(i,s,l,f){if(_l=null,i=rt(f),i=ds(i),i!==null)if(s=ki(i),s===null)i=null;else if(l=s.tag,l===13){if(i=us(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return _l=i,null}function Um(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ou()){case ta:return 1;case b:return 4;case Y:case oe:return 16;case te:return 536870912;default:return 16}default:return 16}}var Nr=null,Vu=null,yl=null;function Fm(){if(yl)return yl;var i,s=Vu,l=s.length,f,m="value"in Nr?Nr.value:Nr.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var w=l-i;for(f=1;f<=w&&s[l-f]===m[x-f];f++);return yl=m.slice(i,1<f?1-f:void 0)}function Sl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Ml(){return!0}function Om(){return!1}function Zn(i){function s(l,f,m,x,w){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=w,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(l=i[U],this[U]=l?l(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ml:Om,this.isPropagationStopped=Om,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),s}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Zn(qs),aa=se({},qs,{view:0,detail:0}),aM=Zn(aa),Hu,Gu,la,El=se({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ju,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==la&&(la&&i.type==="mousemove"?(Hu=i.screenX-la.screenX,Gu=i.screenY-la.screenY):Gu=Hu=0,la=i),Hu)},movementY:function(i){return"movementY"in i?i.movementY:Gu}}),km=Zn(El),lM=se({},El,{dataTransfer:0}),cM=Zn(lM),uM=se({},aa,{relatedTarget:0}),Wu=Zn(uM),fM=se({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),dM=Zn(fM),hM=se({},qs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),pM=Zn(hM),mM=se({},qs,{data:0}),Bm=Zn(mM),gM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _M(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=xM[i])?!!s[i]:!1}function ju(){return _M}var yM=se({},aa,{key:function(i){if(i.key){var s=gM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Sl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?vM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ju,charCode:function(i){return i.type==="keypress"?Sl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Sl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),SM=Zn(yM),MM=se({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vm=Zn(MM),EM=se({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ju}),TM=Zn(EM),wM=se({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),AM=Zn(wM),CM=se({},El,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),bM=Zn(CM),RM=[9,13,27,32],Xu=u&&"CompositionEvent"in window,ca=null;u&&"documentMode"in document&&(ca=document.documentMode);var PM=u&&"TextEvent"in window&&!ca,zm=u&&(!Xu||ca&&8<ca&&11>=ca),Hm=" ",Gm=!1;function Wm(i,s){switch(i){case"keyup":return RM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var $s=!1;function DM(i,s){switch(i){case"compositionend":return jm(s);case"keypress":return s.which!==32?null:(Gm=!0,Hm);case"textInput":return i=s.data,i===Hm&&Gm?null:i;default:return null}}function LM(i,s){if($s)return i==="compositionend"||!Xu&&Wm(i,s)?(i=Fm(),yl=Vu=Nr=null,$s=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return zm&&s.locale!=="ko"?null:s.data;default:return null}}var IM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!IM[i.type]:s==="textarea"}function Ym(i,s,l,f){de(f),s=bl(s,"onChange"),0<s.length&&(l=new zu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var ua=null,fa=null;function NM(i){fg(i,0)}function Tl(i){var s=eo(i);if(Bt(s))return i}function UM(i,s){if(i==="change")return s}var qm=!1;if(u){var Yu;if(u){var qu="oninput"in document;if(!qu){var $m=document.createElement("div");$m.setAttribute("oninput","return;"),qu=typeof $m.oninput=="function"}Yu=qu}else Yu=!1;qm=Yu&&(!document.documentMode||9<document.documentMode)}function Km(){ua&&(ua.detachEvent("onpropertychange",Zm),fa=ua=null)}function Zm(i){if(i.propertyName==="value"&&Tl(fa)){var s=[];Ym(s,fa,i,rt(i)),lt(NM,s)}}function FM(i,s,l){i==="focusin"?(Km(),ua=s,fa=l,ua.attachEvent("onpropertychange",Zm)):i==="focusout"&&Km()}function OM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Tl(fa)}function kM(i,s){if(i==="click")return Tl(s)}function BM(i,s){if(i==="input"||i==="change")return Tl(s)}function VM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var yi=typeof Object.is=="function"?Object.is:VM;function da(i,s){if(yi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!yi(i[m],s[m]))return!1}return!0}function Qm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Jm(i,s){var l=Qm(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Qm(l)}}function eg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?eg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function tg(){for(var i=window,s=dt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=dt(i.document)}return s}function $u(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function zM(i){var s=tg(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&eg(l.ownerDocument.documentElement,l)){if(f!==null&&$u(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!i.extend&&x>f&&(m=f,f=x,x=m),m=Jm(l,x);var w=Jm(l,f);m&&w&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>f?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var HM=u&&"documentMode"in document&&11>=document.documentMode,Ks=null,Ku=null,ha=null,Zu=!1;function ng(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Zu||Ks==null||Ks!==dt(f)||(f=Ks,"selectionStart"in f&&$u(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ha&&da(ha,f)||(ha=f,f=bl(Ku,"onSelect"),0<f.length&&(s=new zu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ks)))}function wl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Zs={animationend:wl("Animation","AnimationEnd"),animationiteration:wl("Animation","AnimationIteration"),animationstart:wl("Animation","AnimationStart"),transitionend:wl("Transition","TransitionEnd")},Qu={},ig={};u&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Al(i){if(Qu[i])return Qu[i];if(!Zs[i])return i;var s=Zs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in ig)return Qu[i]=s[l];return i}var rg=Al("animationend"),sg=Al("animationiteration"),og=Al("animationstart"),ag=Al("transitionend"),lg=new Map,cg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(i,s){lg.set(i,s),a(s,[i])}for(var Ju=0;Ju<cg.length;Ju++){var ef=cg[Ju],GM=ef.toLowerCase(),WM=ef[0].toUpperCase()+ef.slice(1);Ur(GM,"on"+WM)}Ur(rg,"onAnimationEnd"),Ur(sg,"onAnimationIteration"),Ur(og,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(ag,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jM=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function ug(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,pl(f,s,void 0,i),i.currentTarget=null}function fg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var w=f.length-1;0<=w;w--){var U=f[w],z=U.instance,ae=U.currentTarget;if(U=U.listener,z!==x&&m.isPropagationStopped())break e;ug(m,U,ae),x=z}else for(w=0;w<f.length;w++){if(U=f[w],z=U.instance,ae=U.currentTarget,U=U.listener,z!==x&&m.isPropagationStopped())break e;ug(m,U,ae),x=z}}}if(cs)throw i=js,cs=!1,js=null,i}function Xt(i,s){var l=s[cf];l===void 0&&(l=s[cf]=new Set);var f=i+"__bubble";l.has(f)||(dg(s,i,2,!1),l.add(f))}function tf(i,s,l){var f=0;s&&(f|=4),dg(l,i,f,s)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ma(i){if(!i[Cl]){i[Cl]=!0,r.forEach(function(l){l!=="selectionchange"&&(jM.has(l)||tf(l,!1,i),tf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Cl]||(s[Cl]=!0,tf("selectionchange",!1,s))}}function dg(i,s,l,f){switch(Um(s)){case 1:var m=sM;break;case 4:m=oM;break;default:m=ku}l=m.bind(null,s,l,i),m=void 0,!Ct||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function nf(i,s,l,f,m){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var w=f.tag;if(w===3||w===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(w===4)for(w=f.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;w=w.return}for(;U!==null;){if(w=ds(U),w===null)return;if(z=w.tag,z===5||z===6){f=x=w;continue e}U=U.parentNode}}f=f.return}lt(function(){var ae=x,_e=rt(l),Se=[];e:{var xe=lg.get(i);if(xe!==void 0){var ze=zu,je=i;switch(i){case"keypress":if(Sl(l)===0)break e;case"keydown":case"keyup":ze=SM;break;case"focusin":je="focus",ze=Wu;break;case"focusout":je="blur",ze=Wu;break;case"beforeblur":case"afterblur":ze=Wu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=cM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=TM;break;case rg:case sg:case og:ze=dM;break;case ag:ze=AM;break;case"scroll":ze=aM;break;case"wheel":ze=bM;break;case"copy":case"cut":case"paste":ze=pM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=Vm}var $e=(s&4)!==0,nn=!$e&&i==="scroll",Z=$e?xe!==null?xe+"Capture":null:xe;$e=[];for(var j=ae,ne;j!==null;){ne=j;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,Z!==null&&(Te=Ot(j,Z),Te!=null&&$e.push(ga(j,Te,ne)))),nn)break;j=j.return}0<$e.length&&(xe=new ze(xe,je,null,l,_e),Se.push({event:xe,listeners:$e}))}}if((s&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",ze=i==="mouseout"||i==="pointerout",xe&&l!==Ee&&(je=l.relatedTarget||l.fromElement)&&(ds(je)||je[ar]))break e;if((ze||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(je=l.relatedTarget||l.toElement,ze=ae,je=je?ds(je):null,je!==null&&(nn=ki(je),je!==nn||je.tag!==5&&je.tag!==6)&&(je=null)):(ze=null,je=ae),ze!==je)){if($e=km,Te="onMouseLeave",Z="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&($e=Vm,Te="onPointerLeave",Z="onPointerEnter",j="pointer"),nn=ze==null?xe:eo(ze),ne=je==null?xe:eo(je),xe=new $e(Te,j+"leave",ze,l,_e),xe.target=nn,xe.relatedTarget=ne,Te=null,ds(_e)===ae&&($e=new $e(Z,j+"enter",je,l,_e),$e.target=ne,$e.relatedTarget=nn,Te=$e),nn=Te,ze&&je)t:{for($e=ze,Z=je,j=0,ne=$e;ne;ne=Qs(ne))j++;for(ne=0,Te=Z;Te;Te=Qs(Te))ne++;for(;0<j-ne;)$e=Qs($e),j--;for(;0<ne-j;)Z=Qs(Z),ne--;for(;j--;){if($e===Z||Z!==null&&$e===Z.alternate)break t;$e=Qs($e),Z=Qs(Z)}$e=null}else $e=null;ze!==null&&hg(Se,xe,ze,$e,!1),je!==null&&nn!==null&&hg(Se,nn,je,$e,!0)}}e:{if(xe=ae?eo(ae):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var Ze=UM;else if(Xm(xe))if(qm)Ze=BM;else{Ze=OM;var nt=FM}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=kM);if(Ze&&(Ze=Ze(i,ae))){Ym(Se,Ze,l,_e);break e}nt&&nt(i,xe,ae),i==="focusout"&&(nt=xe._wrapperState)&&nt.controlled&&xe.type==="number"&&yn(xe,"number",xe.value)}switch(nt=ae?eo(ae):window,i){case"focusin":(Xm(nt)||nt.contentEditable==="true")&&(Ks=nt,Ku=ae,ha=null);break;case"focusout":ha=Ku=Ks=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,ng(Se,l,_e);break;case"selectionchange":if(HM)break;case"keydown":case"keyup":ng(Se,l,_e)}var it;if(Xu)e:{switch(i){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else $s?Wm(i,l)&&(st="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(st="onCompositionStart");st&&(zm&&l.locale!=="ko"&&($s||st!=="onCompositionStart"?st==="onCompositionEnd"&&$s&&(it=Fm()):(Nr=_e,Vu="value"in Nr?Nr.value:Nr.textContent,$s=!0)),nt=bl(ae,st),0<nt.length&&(st=new Bm(st,i,null,l,_e),Se.push({event:st,listeners:nt}),it?st.data=it:(it=jm(l),it!==null&&(st.data=it)))),(it=PM?DM(i,l):LM(i,l))&&(ae=bl(ae,"onBeforeInput"),0<ae.length&&(_e=new Bm("onBeforeInput","beforeinput",null,l,_e),Se.push({event:_e,listeners:ae}),_e.data=it))}fg(Se,s)})}function ga(i,s,l){return{instance:i,listener:s,currentTarget:l}}function bl(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Ot(i,l),x!=null&&f.unshift(ga(i,x,m)),x=Ot(i,s),x!=null&&f.push(ga(i,x,m))),i=i.return}return f}function Qs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function hg(i,s,l,f,m){for(var x=s._reactName,w=[];l!==null&&l!==f;){var U=l,z=U.alternate,ae=U.stateNode;if(z!==null&&z===f)break;U.tag===5&&ae!==null&&(U=ae,m?(z=Ot(l,x),z!=null&&w.unshift(ga(l,z,U))):m||(z=Ot(l,x),z!=null&&w.push(ga(l,z,U)))),l=l.return}w.length!==0&&i.push({event:s,listeners:w})}var XM=/\r\n?/g,YM=/\u0000|\uFFFD/g;function pg(i){return(typeof i=="string"?i:""+i).replace(XM,`
`).replace(YM,"")}function Rl(i,s,l){if(s=pg(s),pg(i)!==s&&l)throw Error(t(425))}function Pl(){}var rf=null,sf=null;function of(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,qM=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(i){return mg.resolve(null).then(i).catch(KM)}:af;function KM(i){setTimeout(function(){throw i})}function lf(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),oa(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);oa(s)}function Fr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function gg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Vi="__reactFiber$"+Js,va="__reactProps$"+Js,ar="__reactContainer$"+Js,cf="__reactEvents$"+Js,ZM="__reactListeners$"+Js,QM="__reactHandles$"+Js;function ds(i){var s=i[Vi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ar]||l[Vi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=gg(i);i!==null;){if(l=i[Vi])return l;i=gg(i)}return s}i=l,l=i.parentNode}return null}function xa(i){return i=i[Vi]||i[ar],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function eo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Dl(i){return i[va]||null}var uf=[],to=-1;function Or(i){return{current:i}}function Yt(i){0>to||(i.current=uf[to],uf[to]=null,to--)}function Gt(i,s){to++,uf[to]=i.current,i.current=s}var kr={},An=Or(kr),Hn=Or(!1),hs=kr;function no(i,s){var l=i.type.contextTypes;if(!l)return kr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Gn(i){return i=i.childContextTypes,i!=null}function Ll(){Yt(Hn),Yt(An)}function vg(i,s,l){if(An.current!==kr)throw Error(t(168));Gt(An,s),Gt(Hn,l)}function xg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,ye(i)||"Unknown",m));return se({},l,f)}function Il(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||kr,hs=An.current,Gt(An,i),Gt(Hn,Hn.current),!0}function _g(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=xg(i,s,hs),f.__reactInternalMemoizedMergedChildContext=i,Yt(Hn),Yt(An),Gt(An,i)):Yt(Hn),Gt(Hn,l)}var lr=null,Nl=!1,ff=!1;function yg(i){lr===null?lr=[i]:lr.push(i)}function JM(i){Nl=!0,yg(i)}function Br(){if(!ff&&lr!==null){ff=!0;var i=0,s=xt;try{var l=lr;for(xt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}lr=null,Nl=!1}catch(m){throw lr!==null&&(lr=lr.slice(i+1)),ml(ta,Br),m}finally{xt=s,ff=!1}}return null}var io=[],ro=0,Ul=null,Fl=0,li=[],ci=0,ps=null,cr=1,ur="";function ms(i,s){io[ro++]=Fl,io[ro++]=Ul,Ul=i,Fl=s}function Sg(i,s,l){li[ci++]=cr,li[ci++]=ur,li[ci++]=ps,ps=i;var f=cr;i=ur;var m=32-Ce(f)-1;f&=~(1<<m),l+=1;var x=32-Ce(s)+m;if(30<x){var w=m-m%5;x=(f&(1<<w)-1).toString(32),f>>=w,m-=w,cr=1<<32-Ce(s)+m|l<<m|f,ur=x+i}else cr=1<<x|l<<m|f,ur=i}function df(i){i.return!==null&&(ms(i,1),Sg(i,1,0))}function hf(i){for(;i===Ul;)Ul=io[--ro],io[ro]=null,Fl=io[--ro],io[ro]=null;for(;i===ps;)ps=li[--ci],li[ci]=null,ur=li[--ci],li[ci]=null,cr=li[--ci],li[ci]=null}var Qn=null,Jn=null,$t=!1,Si=null;function Mg(i,s){var l=hi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Eg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=Fr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Qn=i,Jn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ps!==null?{id:cr,overflow:ur}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Qn=i,Jn=null,!0):!1;default:return!1}}function pf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function mf(i){if($t){var s=Jn;if(s){var l=s;if(!Eg(i,s)){if(pf(i))throw Error(t(418));s=Fr(l.nextSibling);var f=Qn;s&&Eg(i,s)?Mg(f,l):(i.flags=i.flags&-4097|2,$t=!1,Qn=i)}}else{if(pf(i))throw Error(t(418));i.flags=i.flags&-4097|2,$t=!1,Qn=i}}}function Tg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Qn=i}function Ol(i){if(i!==Qn)return!1;if(!$t)return Tg(i),$t=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!of(i.type,i.memoizedProps)),s&&(s=Jn)){if(pf(i))throw wg(),Error(t(418));for(;s;)Mg(i,s),s=Fr(s.nextSibling)}if(Tg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Jn=Fr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Jn=null}}else Jn=Qn?Fr(i.stateNode.nextSibling):null;return!0}function wg(){for(var i=Jn;i;)i=Fr(i.nextSibling)}function so(){Jn=Qn=null,$t=!1}function gf(i){Si===null?Si=[i]:Si.push(i)}var eE=R.ReactCurrentBatchConfig;function _a(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(w){var U=m.refs;w===null?delete U[x]:U[x]=w},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function kl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Ag(i){var s=i._init;return s(i._payload)}function Cg(i){function s(Z,j){if(i){var ne=Z.deletions;ne===null?(Z.deletions=[j],Z.flags|=16):ne.push(j)}}function l(Z,j){if(!i)return null;for(;j!==null;)s(Z,j),j=j.sibling;return null}function f(Z,j){for(Z=new Map;j!==null;)j.key!==null?Z.set(j.key,j):Z.set(j.index,j),j=j.sibling;return Z}function m(Z,j){return Z=Yr(Z,j),Z.index=0,Z.sibling=null,Z}function x(Z,j,ne){return Z.index=ne,i?(ne=Z.alternate,ne!==null?(ne=ne.index,ne<j?(Z.flags|=2,j):ne):(Z.flags|=2,j)):(Z.flags|=1048576,j)}function w(Z){return i&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,j,ne,Te){return j===null||j.tag!==6?(j=ad(ne,Z.mode,Te),j.return=Z,j):(j=m(j,ne),j.return=Z,j)}function z(Z,j,ne,Te){var Ze=ne.type;return Ze===F?_e(Z,j,ne.props.children,Te,ne.key):j!==null&&(j.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&Ag(Ze)===j.type)?(Te=m(j,ne.props),Te.ref=_a(Z,j,ne),Te.return=Z,Te):(Te=lc(ne.type,ne.key,ne.props,null,Z.mode,Te),Te.ref=_a(Z,j,ne),Te.return=Z,Te)}function ae(Z,j,ne,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==ne.containerInfo||j.stateNode.implementation!==ne.implementation?(j=ld(ne,Z.mode,Te),j.return=Z,j):(j=m(j,ne.children||[]),j.return=Z,j)}function _e(Z,j,ne,Te,Ze){return j===null||j.tag!==7?(j=Es(ne,Z.mode,Te,Ze),j.return=Z,j):(j=m(j,ne),j.return=Z,j)}function Se(Z,j,ne){if(typeof j=="string"&&j!==""||typeof j=="number")return j=ad(""+j,Z.mode,ne),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case N:return ne=lc(j.type,j.key,j.props,null,Z.mode,ne),ne.ref=_a(Z,null,j),ne.return=Z,ne;case L:return j=ld(j,Z.mode,ne),j.return=Z,j;case Q:var Te=j._init;return Se(Z,Te(j._payload),ne)}if(W(j)||ie(j))return j=Es(j,Z.mode,ne,null),j.return=Z,j;kl(Z,j)}return null}function xe(Z,j,ne,Te){var Ze=j!==null?j.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ze!==null?null:U(Z,j,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:return ne.key===Ze?z(Z,j,ne,Te):null;case L:return ne.key===Ze?ae(Z,j,ne,Te):null;case Q:return Ze=ne._init,xe(Z,j,Ze(ne._payload),Te)}if(W(ne)||ie(ne))return Ze!==null?null:_e(Z,j,ne,Te,null);kl(Z,ne)}return null}function ze(Z,j,ne,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(ne)||null,U(j,Z,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case N:return Z=Z.get(Te.key===null?ne:Te.key)||null,z(j,Z,Te,Ze);case L:return Z=Z.get(Te.key===null?ne:Te.key)||null,ae(j,Z,Te,Ze);case Q:var nt=Te._init;return ze(Z,j,ne,nt(Te._payload),Ze)}if(W(Te)||ie(Te))return Z=Z.get(ne)||null,_e(j,Z,Te,Ze,null);kl(j,Te)}return null}function je(Z,j,ne,Te){for(var Ze=null,nt=null,it=j,st=j=0,vn=null;it!==null&&st<ne.length;st++){it.index>st?(vn=it,it=null):vn=it.sibling;var bt=xe(Z,it,ne[st],Te);if(bt===null){it===null&&(it=vn);break}i&&it&&bt.alternate===null&&s(Z,it),j=x(bt,j,st),nt===null?Ze=bt:nt.sibling=bt,nt=bt,it=vn}if(st===ne.length)return l(Z,it),$t&&ms(Z,st),Ze;if(it===null){for(;st<ne.length;st++)it=Se(Z,ne[st],Te),it!==null&&(j=x(it,j,st),nt===null?Ze=it:nt.sibling=it,nt=it);return $t&&ms(Z,st),Ze}for(it=f(Z,it);st<ne.length;st++)vn=ze(it,Z,st,ne[st],Te),vn!==null&&(i&&vn.alternate!==null&&it.delete(vn.key===null?st:vn.key),j=x(vn,j,st),nt===null?Ze=vn:nt.sibling=vn,nt=vn);return i&&it.forEach(function(qr){return s(Z,qr)}),$t&&ms(Z,st),Ze}function $e(Z,j,ne,Te){var Ze=ie(ne);if(typeof Ze!="function")throw Error(t(150));if(ne=Ze.call(ne),ne==null)throw Error(t(151));for(var nt=Ze=null,it=j,st=j=0,vn=null,bt=ne.next();it!==null&&!bt.done;st++,bt=ne.next()){it.index>st?(vn=it,it=null):vn=it.sibling;var qr=xe(Z,it,bt.value,Te);if(qr===null){it===null&&(it=vn);break}i&&it&&qr.alternate===null&&s(Z,it),j=x(qr,j,st),nt===null?Ze=qr:nt.sibling=qr,nt=qr,it=vn}if(bt.done)return l(Z,it),$t&&ms(Z,st),Ze;if(it===null){for(;!bt.done;st++,bt=ne.next())bt=Se(Z,bt.value,Te),bt!==null&&(j=x(bt,j,st),nt===null?Ze=bt:nt.sibling=bt,nt=bt);return $t&&ms(Z,st),Ze}for(it=f(Z,it);!bt.done;st++,bt=ne.next())bt=ze(it,Z,st,bt.value,Te),bt!==null&&(i&&bt.alternate!==null&&it.delete(bt.key===null?st:bt.key),j=x(bt,j,st),nt===null?Ze=bt:nt.sibling=bt,nt=bt);return i&&it.forEach(function(IE){return s(Z,IE)}),$t&&ms(Z,st),Ze}function nn(Z,j,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case N:e:{for(var Ze=ne.key,nt=j;nt!==null;){if(nt.key===Ze){if(Ze=ne.type,Ze===F){if(nt.tag===7){l(Z,nt.sibling),j=m(nt,ne.props.children),j.return=Z,Z=j;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===Q&&Ag(Ze)===nt.type){l(Z,nt.sibling),j=m(nt,ne.props),j.ref=_a(Z,nt,ne),j.return=Z,Z=j;break e}l(Z,nt);break}else s(Z,nt);nt=nt.sibling}ne.type===F?(j=Es(ne.props.children,Z.mode,Te,ne.key),j.return=Z,Z=j):(Te=lc(ne.type,ne.key,ne.props,null,Z.mode,Te),Te.ref=_a(Z,j,ne),Te.return=Z,Z=Te)}return w(Z);case L:e:{for(nt=ne.key;j!==null;){if(j.key===nt)if(j.tag===4&&j.stateNode.containerInfo===ne.containerInfo&&j.stateNode.implementation===ne.implementation){l(Z,j.sibling),j=m(j,ne.children||[]),j.return=Z,Z=j;break e}else{l(Z,j);break}else s(Z,j);j=j.sibling}j=ld(ne,Z.mode,Te),j.return=Z,Z=j}return w(Z);case Q:return nt=ne._init,nn(Z,j,nt(ne._payload),Te)}if(W(ne))return je(Z,j,ne,Te);if(ie(ne))return $e(Z,j,ne,Te);kl(Z,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,j!==null&&j.tag===6?(l(Z,j.sibling),j=m(j,ne),j.return=Z,Z=j):(l(Z,j),j=ad(ne,Z.mode,Te),j.return=Z,Z=j),w(Z)):l(Z,j)}return nn}var oo=Cg(!0),bg=Cg(!1),Bl=Or(null),Vl=null,ao=null,vf=null;function xf(){vf=ao=Vl=null}function _f(i){var s=Bl.current;Yt(Bl),i._currentValue=s}function yf(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function lo(i,s){Vl=i,vf=ao=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Wn=!0),i.firstContext=null)}function ui(i){var s=i._currentValue;if(vf!==i)if(i={context:i,memoizedValue:s,next:null},ao===null){if(Vl===null)throw Error(t(308));ao=i,Vl.dependencies={lanes:0,firstContext:i}}else ao=ao.next=i;return s}var gs=null;function Sf(i){gs===null?gs=[i]:gs.push(i)}function Rg(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,Sf(s)):(l.next=m.next,m.next=l),s.interleaved=l,fr(i,f)}function fr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Vr=!1;function Mf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function dr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function zr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Et&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,fr(i,l)}return m=f.interleaved,m===null?(s.next=s,Sf(f)):(s.next=m.next,m.next=s),f.interleaved=s,fr(i,l)}function zl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,zn(i,l)}}function Dg(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=w:x=x.next=w,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Hl(i,s,l,f){var m=i.updateQueue;Vr=!1;var x=m.firstBaseUpdate,w=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var z=U,ae=z.next;z.next=null,w===null?x=ae:w.next=ae,w=z;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==w&&(U===null?_e.firstBaseUpdate=ae:U.next=ae,_e.lastBaseUpdate=z))}if(x!==null){var Se=m.baseState;w=0,_e=ae=z=null,U=x;do{var xe=U.lane,ze=U.eventTime;if((f&xe)===xe){_e!==null&&(_e=_e.next={eventTime:ze,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var je=i,$e=U;switch(xe=s,ze=l,$e.tag){case 1:if(je=$e.payload,typeof je=="function"){Se=je.call(ze,Se,xe);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=$e.payload,xe=typeof je=="function"?je.call(ze,Se,xe):je,xe==null)break e;Se=se({},Se,xe);break e;case 2:Vr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,xe=m.effects,xe===null?m.effects=[U]:xe.push(U))}else ze={eventTime:ze,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(ae=_e=ze,z=Se):_e=_e.next=ze,w|=xe;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,m.lastBaseUpdate=xe,m.shared.pending=null}}while(!0);if(_e===null&&(z=Se),m.baseState=z,m.firstBaseUpdate=ae,m.lastBaseUpdate=_e,s=m.shared.interleaved,s!==null){m=s;do w|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);_s|=w,i.lanes=w,i.memoizedState=Se}}function Lg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ya={},zi=Or(ya),Sa=Or(ya),Ma=Or(ya);function vs(i){if(i===ya)throw Error(t(174));return i}function Ef(i,s){switch(Gt(Ma,s),Gt(Sa,i),Gt(zi,ya),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:T(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=T(s,i)}Yt(zi),Gt(zi,s)}function co(){Yt(zi),Yt(Sa),Yt(Ma)}function Ig(i){vs(Ma.current);var s=vs(zi.current),l=T(s,i.type);s!==l&&(Gt(Sa,i),Gt(zi,l))}function Tf(i){Sa.current===i&&(Yt(zi),Yt(Sa))}var Qt=Or(0);function Gl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var wf=[];function Af(){for(var i=0;i<wf.length;i++)wf[i]._workInProgressVersionPrimary=null;wf.length=0}var Wl=R.ReactCurrentDispatcher,Cf=R.ReactCurrentBatchConfig,xs=0,Jt=null,cn=null,mn=null,jl=!1,Ea=!1,Ta=0,tE=0;function Cn(){throw Error(t(321))}function bf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!yi(i[l],s[l]))return!1;return!0}function Rf(i,s,l,f,m,x){if(xs=x,Jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Wl.current=i===null||i.memoizedState===null?sE:oE,i=l(f,m),Ea){x=0;do{if(Ea=!1,Ta=0,25<=x)throw Error(t(301));x+=1,mn=cn=null,s.updateQueue=null,Wl.current=aE,i=l(f,m)}while(Ea)}if(Wl.current=ql,s=cn!==null&&cn.next!==null,xs=0,mn=cn=Jt=null,jl=!1,s)throw Error(t(300));return i}function Pf(){var i=Ta!==0;return Ta=0,i}function Hi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Jt.memoizedState=mn=i:mn=mn.next=i,mn}function fi(){if(cn===null){var i=Jt.alternate;i=i!==null?i.memoizedState:null}else i=cn.next;var s=mn===null?Jt.memoizedState:mn.next;if(s!==null)mn=s,cn=i;else{if(i===null)throw Error(t(310));cn=i,i={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},mn===null?Jt.memoizedState=mn=i:mn=mn.next=i}return mn}function wa(i,s){return typeof s=="function"?s(i):s}function Df(i){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=cn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var w=m.next;m.next=x.next,x.next=w}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var U=w=null,z=null,ae=x;do{var _e=ae.lane;if((xs&_e)===_e)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:i(f,ae.action);else{var Se={lane:_e,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(U=z=Se,w=f):z=z.next=Se,Jt.lanes|=_e,_s|=_e}ae=ae.next}while(ae!==null&&ae!==x);z===null?w=f:z.next=U,yi(f,s.memoizedState)||(Wn=!0),s.memoizedState=f,s.baseState=w,s.baseQueue=z,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do x=m.lane,Jt.lanes|=x,_s|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Lf(i){var s=fi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var w=m=m.next;do x=i(x,w.action),w=w.next;while(w!==m);yi(x,s.memoizedState)||(Wn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function Ng(){}function Ug(i,s){var l=Jt,f=fi(),m=s(),x=!yi(f.memoizedState,m);if(x&&(f.memoizedState=m,Wn=!0),f=f.queue,If(kg.bind(null,l,f,i),[i]),f.getSnapshot!==s||x||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Aa(9,Og.bind(null,l,f,m,s),void 0,null),gn===null)throw Error(t(349));(xs&30)!==0||Fg(l,s,m)}return m}function Fg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Og(i,s,l,f){s.value=l,s.getSnapshot=f,Bg(s)&&Vg(i)}function kg(i,s,l){return l(function(){Bg(s)&&Vg(i)})}function Bg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!yi(i,l)}catch{return!0}}function Vg(i){var s=fr(i,1);s!==null&&wi(s,i,1,-1)}function zg(i){var s=Hi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:i},s.queue=i,i=i.dispatch=rE.bind(null,Jt,i),[s.memoizedState,i]}function Aa(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function Hg(){return fi().memoizedState}function Xl(i,s,l,f){var m=Hi();Jt.flags|=i,m.memoizedState=Aa(1|s,l,void 0,f===void 0?null:f)}function Yl(i,s,l,f){var m=fi();f=f===void 0?null:f;var x=void 0;if(cn!==null){var w=cn.memoizedState;if(x=w.destroy,f!==null&&bf(f,w.deps)){m.memoizedState=Aa(s,l,x,f);return}}Jt.flags|=i,m.memoizedState=Aa(1|s,l,x,f)}function Gg(i,s){return Xl(8390656,8,i,s)}function If(i,s){return Yl(2048,8,i,s)}function Wg(i,s){return Yl(4,2,i,s)}function jg(i,s){return Yl(4,4,i,s)}function Xg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Yg(i,s,l){return l=l!=null?l.concat([i]):null,Yl(4,4,Xg.bind(null,s,i),l)}function Nf(){}function qg(i,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bf(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function $g(i,s){var l=fi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bf(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function Kg(i,s,l){return(xs&21)===0?(i.baseState&&(i.baseState=!1,Wn=!0),i.memoizedState=l):(yi(l,s)||(l=Ve(),Jt.lanes|=l,_s|=l,i.baseState=!0),s)}function nE(i,s){var l=xt;xt=l!==0&&4>l?l:4,i(!0);var f=Cf.transition;Cf.transition={};try{i(!1),s()}finally{xt=l,Cf.transition=f}}function Zg(){return fi().memoizedState}function iE(i,s,l){var f=jr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},Qg(i))Jg(s,l);else if(l=Rg(i,s,l,f),l!==null){var m=Fn();wi(l,i,f,m),e0(l,s,f)}}function rE(i,s,l){var f=jr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(Qg(i))Jg(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var w=s.lastRenderedState,U=x(w,l);if(m.hasEagerState=!0,m.eagerState=U,yi(U,w)){var z=s.interleaved;z===null?(m.next=m,Sf(s)):(m.next=z.next,z.next=m),s.interleaved=m;return}}catch{}finally{}l=Rg(i,s,m,f),l!==null&&(m=Fn(),wi(l,i,f,m),e0(l,s,f))}}function Qg(i){var s=i.alternate;return i===Jt||s!==null&&s===Jt}function Jg(i,s){Ea=jl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function e0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,zn(i,l)}}var ql={readContext:ui,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},sE={readContext:ui,useCallback:function(i,s){return Hi().memoizedState=[i,s===void 0?null:s],i},useContext:ui,useEffect:Gg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Xl(4194308,4,Xg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Xl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Xl(4,2,i,s)},useMemo:function(i,s){var l=Hi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Hi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=iE.bind(null,Jt,i),[f.memoizedState,i]},useRef:function(i){var s=Hi();return i={current:i},s.memoizedState=i},useState:zg,useDebugValue:Nf,useDeferredValue:function(i){return Hi().memoizedState=i},useTransition:function(){var i=zg(!1),s=i[0];return i=nE.bind(null,i[1]),Hi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=Jt,m=Hi();if($t){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),gn===null)throw Error(t(349));(xs&30)!==0||Fg(f,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,Gg(kg.bind(null,f,x,i),[i]),f.flags|=2048,Aa(9,Og.bind(null,f,x,l,s),void 0,null),l},useId:function(){var i=Hi(),s=gn.identifierPrefix;if($t){var l=ur,f=cr;l=(f&~(1<<32-Ce(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ta++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=tE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},oE={readContext:ui,useCallback:qg,useContext:ui,useEffect:If,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:$g,useReducer:Df,useRef:Hg,useState:function(){return Df(wa)},useDebugValue:Nf,useDeferredValue:function(i){var s=fi();return Kg(s,cn.memoizedState,i)},useTransition:function(){var i=Df(wa)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Ng,useSyncExternalStore:Ug,useId:Zg,unstable_isNewReconciler:!1},aE={readContext:ui,useCallback:qg,useContext:ui,useEffect:If,useImperativeHandle:Yg,useInsertionEffect:Wg,useLayoutEffect:jg,useMemo:$g,useReducer:Lf,useRef:Hg,useState:function(){return Lf(wa)},useDebugValue:Nf,useDeferredValue:function(i){var s=fi();return cn===null?s.memoizedState=i:Kg(s,cn.memoizedState,i)},useTransition:function(){var i=Lf(wa)[0],s=fi().memoizedState;return[i,s]},useMutableSource:Ng,useSyncExternalStore:Ug,useId:Zg,unstable_isNewReconciler:!1};function Mi(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Uf(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:se({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var $l={isMounted:function(i){return(i=i._reactInternals)?ki(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Fn(),m=jr(i),x=dr(f,m);x.payload=s,l!=null&&(x.callback=l),s=zr(i,x,m),s!==null&&(wi(s,i,m,f),zl(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Fn(),m=jr(i),x=dr(f,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=zr(i,x,m),s!==null&&(wi(s,i,m,f),zl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Fn(),f=jr(i),m=dr(l,f);m.tag=2,s!=null&&(m.callback=s),s=zr(i,m,f),s!==null&&(wi(s,i,f,l),zl(s,i,f))}};function t0(i,s,l,f,m,x,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,w):s.prototype&&s.prototype.isPureReactComponent?!da(l,f)||!da(m,x):!0}function n0(i,s,l){var f=!1,m=kr,x=s.contextType;return typeof x=="object"&&x!==null?x=ui(x):(m=Gn(s)?hs:An.current,f=s.contextTypes,x=(f=f!=null)?no(i,m):kr),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=$l,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function i0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&$l.enqueueReplaceState(s,s.state,null)}function Ff(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Mf(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=ui(x):(x=Gn(s)?hs:An.current,m.context=no(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Uf(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&$l.enqueueReplaceState(m,m.state,null),Hl(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function uo(i,s){try{var l="",f=s;do l+=Ne(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function Of(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function kf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var lE=typeof WeakMap=="function"?WeakMap:Map;function r0(i,s,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){nc||(nc=!0,Jf=f),kf(i,s)},l}function s0(i,s,l){l=dr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){kf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){kf(i,s),typeof f!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function o0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new lE;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=ME.bind(null,i,s,l),s.then(i,i))}function a0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function l0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=dr(-1,1),s.tag=2,zr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var cE=R.ReactCurrentOwner,Wn=!1;function Un(i,s,l,f){s.child=i===null?bg(s,null,l,f):oo(s,i.child,l,f)}function c0(i,s,l,f,m){l=l.render;var x=s.ref;return lo(s,m),f=Rf(i,s,l,f,x,m),l=Pf(),i!==null&&!Wn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,hr(i,s,m)):($t&&l&&df(s),s.flags|=1,Un(i,s,f,m),s.child)}function u0(i,s,l,f,m){if(i===null){var x=l.type;return typeof x=="function"&&!od(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,f0(i,s,x,f,m)):(i=lc(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var w=x.memoizedProps;if(l=l.compare,l=l!==null?l:da,l(w,f)&&i.ref===s.ref)return hr(i,s,m)}return s.flags|=1,i=Yr(x,f),i.ref=s.ref,i.return=s,s.child=i}function f0(i,s,l,f,m){if(i!==null){var x=i.memoizedProps;if(da(x,f)&&i.ref===s.ref)if(Wn=!1,s.pendingProps=f=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Wn=!0);else return s.lanes=i.lanes,hr(i,s,m)}return Bf(i,s,l,f,m)}function d0(i,s,l){var f=s.pendingProps,m=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(ho,ei),ei|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Gt(ho,ei),ei|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Gt(ho,ei),ei|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,Gt(ho,ei),ei|=f;return Un(i,s,m,l),s.child}function h0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Bf(i,s,l,f,m){var x=Gn(l)?hs:An.current;return x=no(s,x),lo(s,m),l=Rf(i,s,l,f,x,m),f=Pf(),i!==null&&!Wn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,hr(i,s,m)):($t&&f&&df(s),s.flags|=1,Un(i,s,l,m),s.child)}function p0(i,s,l,f,m){if(Gn(l)){var x=!0;Il(s)}else x=!1;if(lo(s,m),s.stateNode===null)Zl(i,s),n0(s,l,f),Ff(s,l,f,m),f=!0;else if(i===null){var w=s.stateNode,U=s.memoizedProps;w.props=U;var z=w.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=ui(ae):(ae=Gn(l)?hs:An.current,ae=no(s,ae));var _e=l.getDerivedStateFromProps,Se=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==f||z!==ae)&&i0(s,w,f,ae),Vr=!1;var xe=s.memoizedState;w.state=xe,Hl(s,f,w,m),z=s.memoizedState,U!==f||xe!==z||Hn.current||Vr?(typeof _e=="function"&&(Uf(s,l,_e,f),z=s.memoizedState),(U=Vr||t0(s,l,U,f,xe,z,ae))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),w.props=f,w.state=z,w.context=ae,f=U):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{w=s.stateNode,Pg(i,s),U=s.memoizedProps,ae=s.type===s.elementType?U:Mi(s.type,U),w.props=ae,Se=s.pendingProps,xe=w.context,z=l.contextType,typeof z=="object"&&z!==null?z=ui(z):(z=Gn(l)?hs:An.current,z=no(s,z));var ze=l.getDerivedStateFromProps;(_e=typeof ze=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==Se||xe!==z)&&i0(s,w,f,z),Vr=!1,xe=s.memoizedState,w.state=xe,Hl(s,f,w,m);var je=s.memoizedState;U!==Se||xe!==je||Hn.current||Vr?(typeof ze=="function"&&(Uf(s,l,ze,f),je=s.memoizedState),(ae=Vr||t0(s,l,ae,f,xe,je,z)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(f,je,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(f,je,z)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=je),w.props=f,w.state=je,w.context=z,f=ae):(typeof w.componentDidUpdate!="function"||U===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),f=!1)}return Vf(i,s,l,f,x,m)}function Vf(i,s,l,f,m,x){h0(i,s);var w=(s.flags&128)!==0;if(!f&&!w)return m&&_g(s,l,!1),hr(i,s,x);f=s.stateNode,cE.current=s;var U=w&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&w?(s.child=oo(s,i.child,null,x),s.child=oo(s,null,U,x)):Un(i,s,U,x),s.memoizedState=f.state,m&&_g(s,l,!0),s.child}function m0(i){var s=i.stateNode;s.pendingContext?vg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&vg(i,s.context,!1),Ef(i,s.containerInfo)}function g0(i,s,l,f,m){return so(),gf(m),s.flags|=256,Un(i,s,l,f),s.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Hf(i){return{baseLanes:i,cachePool:null,transitions:null}}function v0(i,s,l){var f=s.pendingProps,m=Qt.current,x=!1,w=(s.flags&128)!==0,U;if((U=w)||(U=i!==null&&i.memoizedState===null?!1:(m&2)!==0),U?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Gt(Qt,m&1),i===null)return mf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=f.children,i=f.fallback,x?(f=s.mode,x=s.child,w={mode:"hidden",children:w},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=w):x=cc(w,f,0,null),i=Es(i,f,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Hf(l),s.memoizedState=zf,i):Gf(s,w));if(m=i.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return uE(i,s,w,f,U,m,l);if(x){x=f.fallback,w=s.mode,m=i.child,U=m.sibling;var z={mode:"hidden",children:f.children};return(w&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Yr(m,z),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?x=Yr(U,x):(x=Es(x,w,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,w=i.child.memoizedState,w=w===null?Hf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},x.memoizedState=w,x.childLanes=i.childLanes&~l,s.memoizedState=zf,f}return x=i.child,i=x.sibling,f=Yr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Gf(i,s){return s=cc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Kl(i,s,l,f){return f!==null&&gf(f),oo(s,i.child,null,l),i=Gf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function uE(i,s,l,f,m,x,w){if(l)return s.flags&256?(s.flags&=-257,f=Of(Error(t(422))),Kl(i,s,w,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=f.fallback,m=s.mode,f=cc({mode:"visible",children:f.children},m,0,null),x=Es(x,m,w,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&oo(s,i.child,null,w),s.child.memoizedState=Hf(w),s.memoizedState=zf,x);if((s.mode&1)===0)return Kl(i,s,w,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,x=Error(t(419)),f=Of(x,f,void 0),Kl(i,s,w,f)}if(U=(w&i.childLanes)!==0,Wn||U){if(f=gn,f!==null){switch(w&-w){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|w))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,fr(i,m),wi(f,i,m,-1))}return sd(),f=Of(Error(t(421))),Kl(i,s,w,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=EE.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,Jn=Fr(m.nextSibling),Qn=s,$t=!0,Si=null,i!==null&&(li[ci++]=cr,li[ci++]=ur,li[ci++]=ps,cr=i.id,ur=i.overflow,ps=s),s=Gf(s,f.children),s.flags|=4096,s)}function x0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),yf(i.return,s,l)}function Wf(i,s,l,f,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function _0(i,s,l){var f=s.pendingProps,m=f.revealOrder,x=f.tail;if(Un(i,s,f.children,l),f=Qt.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&x0(i,l,s);else if(i.tag===19)x0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Gt(Qt,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Gl(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Wf(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Gl(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Wf(s,!0,l,null,x);break;case"together":Wf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Zl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function hr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),_s|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Yr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Yr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function fE(i,s,l){switch(s.tag){case 3:m0(s),so();break;case 5:Ig(s);break;case 1:Gn(s.type)&&Il(s);break;case 4:Ef(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Gt(Bl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Gt(Qt,Qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?v0(i,s,l):(Gt(Qt,Qt.current&1),i=hr(i,s,l),i!==null?i.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return _0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Gt(Qt,Qt.current),f)break;return null;case 22:case 23:return s.lanes=0,d0(i,s,l)}return hr(i,s,l)}var y0,jf,S0,M0;y0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},jf=function(){},S0=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,vs(zi.current);var x=null;switch(l){case"input":m=At(i,m),f=At(i,f),x=[];break;case"select":m=se({},m,{value:void 0}),f=se({},f,{value:void 0}),x=[];break;case"textarea":m=pt(i,m),f=pt(i,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Pl)}Be(l,f);var w;l=null;for(ae in m)if(!f.hasOwnProperty(ae)&&m.hasOwnProperty(ae)&&m[ae]!=null)if(ae==="style"){var U=m[ae];for(w in U)U.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in f){var z=f[ae];if(U=m!=null?m[ae]:void 0,f.hasOwnProperty(ae)&&z!==U&&(z!=null||U!=null))if(ae==="style")if(U){for(w in U)!U.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in z)z.hasOwnProperty(w)&&U[w]!==z[w]&&(l||(l={}),l[w]=z[w])}else l||(x||(x=[]),x.push(ae,l)),l=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(x=x||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Xt("scroll",i),x||U===z||(x=[])):(x=x||[]).push(ae,z))}l&&(x=x||[]).push("style",l);var ae=x;(s.updateQueue=ae)&&(s.flags|=4)}},M0=function(i,s,l,f){l!==f&&(s.flags|=4)};function Ca(i,s){if(!$t)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function bn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function dE(i,s,l){var f=s.pendingProps;switch(hf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(s),null;case 1:return Gn(s.type)&&Ll(),bn(s),null;case 3:return f=s.stateNode,co(),Yt(Hn),Yt(An),Af(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ol(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Si!==null&&(nd(Si),Si=null))),jf(i,s),bn(s),null;case 5:Tf(s);var m=vs(Ma.current);if(l=s.type,i!==null&&s.stateNode!=null)S0(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return bn(s),null}if(i=vs(zi.current),Ol(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[Vi]=s,f[va]=x,i=(s.mode&1)!==0,l){case"dialog":Xt("cancel",f),Xt("close",f);break;case"iframe":case"object":case"embed":Xt("load",f);break;case"video":case"audio":for(m=0;m<pa.length;m++)Xt(pa[m],f);break;case"source":Xt("error",f);break;case"img":case"image":case"link":Xt("error",f),Xt("load",f);break;case"details":Xt("toggle",f);break;case"input":Nt(f,x),Xt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Xt("invalid",f);break;case"textarea":Pt(f,x),Xt("invalid",f)}Be(l,x),m=null;for(var w in x)if(x.hasOwnProperty(w)){var U=x[w];w==="children"?typeof U=="string"?f.textContent!==U&&(x.suppressHydrationWarning!==!0&&Rl(f.textContent,U,i),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&Rl(f.textContent,U,i),m=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Xt("scroll",f)}switch(l){case"input":et(f),Vt(f,x,!0);break;case"textarea":et(f),Wt(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Pl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{w=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=D(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=w.createElement(l,{is:f.is}):(i=w.createElement(l),l==="select"&&(w=i,f.multiple?w.multiple=!0:f.size&&(w.size=f.size))):i=w.createElementNS(i,l),i[Vi]=s,i[va]=f,y0(i,s,!1,!1),s.stateNode=i;e:{switch(w=Ae(l,f),l){case"dialog":Xt("cancel",i),Xt("close",i),m=f;break;case"iframe":case"object":case"embed":Xt("load",i),m=f;break;case"video":case"audio":for(m=0;m<pa.length;m++)Xt(pa[m],i);m=f;break;case"source":Xt("error",i),m=f;break;case"img":case"image":case"link":Xt("error",i),Xt("load",i),m=f;break;case"details":Xt("toggle",i),m=f;break;case"input":Nt(i,f),m=At(i,f),Xt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=se({},f,{value:void 0}),Xt("invalid",i);break;case"textarea":Pt(i,f),m=pt(i,f),Xt("invalid",i);break;default:m=f}Be(l,m),U=m;for(x in U)if(U.hasOwnProperty(x)){var z=U[x];x==="style"?pe(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&he(i,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&ge(i,z):typeof z=="number"&&ge(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Xt("scroll",i):z!=null&&P(i,x,z,w))}switch(l){case"input":et(i),Vt(i,f,!1);break;case"textarea":et(i),Wt(i);break;case"option":f.value!=null&&i.setAttribute("value",""+me(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?zt(i,!!f.multiple,x,!1):f.defaultValue!=null&&zt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Pl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bn(s),null;case 6:if(i&&s.stateNode!=null)M0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=vs(Ma.current),vs(zi.current),Ol(s)){if(f=s.stateNode,l=s.memoizedProps,f[Vi]=s,(x=f.nodeValue!==l)&&(i=Qn,i!==null))switch(i.tag){case 3:Rl(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Rl(f.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Vi]=s,s.stateNode=f}return bn(s),null;case 13:if(Yt(Qt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if($t&&Jn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)wg(),so(),s.flags|=98560,x=!1;else if(x=Ol(s),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Vi]=s}else so(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bn(s),x=!1}else Si!==null&&(nd(Si),Si=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Qt.current&1)!==0?un===0&&(un=3):sd())),s.updateQueue!==null&&(s.flags|=4),bn(s),null);case 4:return co(),jf(i,s),i===null&&ma(s.stateNode.containerInfo),bn(s),null;case 10:return _f(s.type._context),bn(s),null;case 17:return Gn(s.type)&&Ll(),bn(s),null;case 19:if(Yt(Qt),x=s.memoizedState,x===null)return bn(s),null;if(f=(s.flags&128)!==0,w=x.rendering,w===null)if(f)Ca(x,!1);else{if(un!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Gl(i),w!==null){for(s.flags|=128,Ca(x,!1),f=w.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,i=f,x.flags&=14680066,w=x.alternate,w===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=w.childLanes,x.lanes=w.lanes,x.child=w.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=w.memoizedProps,x.memoizedState=w.memoizedState,x.updateQueue=w.updateQueue,x.type=w.type,i=w.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Gt(Qt,Qt.current&1|2),s.child}i=i.sibling}x.tail!==null&&Zt()>po&&(s.flags|=128,f=!0,Ca(x,!1),s.lanes=4194304)}else{if(!f)if(i=Gl(w),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ca(x,!0),x.tail===null&&x.tailMode==="hidden"&&!w.alternate&&!$t)return bn(s),null}else 2*Zt()-x.renderingStartTime>po&&l!==1073741824&&(s.flags|=128,f=!0,Ca(x,!1),s.lanes=4194304);x.isBackwards?(w.sibling=s.child,s.child=w):(l=x.last,l!==null?l.sibling=w:s.child=w,x.last=w)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Zt(),s.sibling=null,l=Qt.current,Gt(Qt,f?l&1|2:l&1),s):(bn(s),null);case 22:case 23:return rd(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ei&1073741824)!==0&&(bn(s),s.subtreeFlags&6&&(s.flags|=8192)):bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function hE(i,s){switch(hf(s),s.tag){case 1:return Gn(s.type)&&Ll(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return co(),Yt(Hn),Yt(An),Af(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Tf(s),null;case 13:if(Yt(Qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));so()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Yt(Qt),null;case 4:return co(),null;case 10:return _f(s.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var Ql=!1,Rn=!1,pE=typeof WeakSet=="function"?WeakSet:Set,We=null;function fo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){en(i,s,f)}else l.current=null}function Xf(i,s,l){try{l()}catch(f){en(i,s,f)}}var E0=!1;function mE(i,s){if(rf=xl,i=tg(),$u(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var w=0,U=-1,z=-1,ae=0,_e=0,Se=i,xe=null;t:for(;;){for(var ze;Se!==l||m!==0&&Se.nodeType!==3||(U=w+m),Se!==x||f!==0&&Se.nodeType!==3||(z=w+f),Se.nodeType===3&&(w+=Se.nodeValue.length),(ze=Se.firstChild)!==null;)xe=Se,Se=ze;for(;;){if(Se===i)break t;if(xe===l&&++ae===m&&(U=w),xe===x&&++_e===f&&(z=w),(ze=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=ze}l=U===-1||z===-1?null:{start:U,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(sf={focusedElem:i,selectionRange:l},xl=!1,We=s;We!==null;)if(s=We,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,We=i;else for(;We!==null;){s=We;try{var je=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var $e=je.memoizedProps,nn=je.memoizedState,Z=s.stateNode,j=Z.getSnapshotBeforeUpdate(s.elementType===s.type?$e:Mi(s.type,$e),nn);Z.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ne=s.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){en(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,We=i;break}We=s.return}return je=E0,E0=!1,je}function ba(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&Xf(s,l,x)}m=m.next}while(m!==f)}}function Jl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Yf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function T0(i){var s=i.alternate;s!==null&&(i.alternate=null,T0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Vi],delete s[va],delete s[cf],delete s[ZM],delete s[QM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function w0(i){return i.tag===5||i.tag===3||i.tag===4}function A0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||w0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function qf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Pl));else if(f!==4&&(i=i.child,i!==null))for(qf(i,s,l),i=i.sibling;i!==null;)qf(i,s,l),i=i.sibling}function $f(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for($f(i,s,l),i=i.sibling;i!==null;)$f(i,s,l),i=i.sibling}var Mn=null,Ei=!1;function Hr(i,s,l){for(l=l.child;l!==null;)C0(i,s,l),l=l.sibling}function C0(i,s,l){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(ee,l)}catch{}switch(l.tag){case 5:Rn||fo(l,s);case 6:var f=Mn,m=Ei;Mn=null,Hr(i,s,l),Mn=f,Ei=m,Mn!==null&&(Ei?(i=Mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(Ei?(i=Mn,l=l.stateNode,i.nodeType===8?lf(i.parentNode,l):i.nodeType===1&&lf(i,l),oa(i)):lf(Mn,l.stateNode));break;case 4:f=Mn,m=Ei,Mn=l.stateNode.containerInfo,Ei=!0,Hr(i,s,l),Mn=f,Ei=m;break;case 0:case 11:case 14:case 15:if(!Rn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,w=x.destroy;x=x.tag,w!==void 0&&((x&2)!==0||(x&4)!==0)&&Xf(l,s,w),m=m.next}while(m!==f)}Hr(i,s,l);break;case 1:if(!Rn&&(fo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){en(l,s,U)}Hr(i,s,l);break;case 21:Hr(i,s,l);break;case 22:l.mode&1?(Rn=(f=Rn)||l.memoizedState!==null,Hr(i,s,l),Rn=f):Hr(i,s,l);break;default:Hr(i,s,l)}}function b0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new pE),s.forEach(function(f){var m=TE.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ti(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=i,w=s,U=w;e:for(;U!==null;){switch(U.tag){case 5:Mn=U.stateNode,Ei=!1;break e;case 3:Mn=U.stateNode.containerInfo,Ei=!0;break e;case 4:Mn=U.stateNode.containerInfo,Ei=!0;break e}U=U.return}if(Mn===null)throw Error(t(160));C0(x,w,m),Mn=null,Ei=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(ae){en(m,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)R0(s,i),s=s.sibling}function R0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ti(s,i),Gi(i),f&4){try{ba(3,i,i.return),Jl(3,i)}catch($e){en(i,i.return,$e)}try{ba(5,i,i.return)}catch($e){en(i,i.return,$e)}}break;case 1:Ti(s,i),Gi(i),f&512&&l!==null&&fo(l,l.return);break;case 5:if(Ti(s,i),Gi(i),f&512&&l!==null&&fo(l,l.return),i.flags&32){var m=i.stateNode;try{ge(m,"")}catch($e){en(i,i.return,$e)}}if(f&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,w=l!==null?l.memoizedProps:x,U=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&ht(m,x),Ae(U,w);var ae=Ae(U,x);for(w=0;w<z.length;w+=2){var _e=z[w],Se=z[w+1];_e==="style"?pe(m,Se):_e==="dangerouslySetInnerHTML"?he(m,Se):_e==="children"?ge(m,Se):P(m,_e,Se,ae)}switch(U){case"input":Kt(m,x);break;case"textarea":Le(m,x);break;case"select":var xe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var ze=x.value;ze!=null?zt(m,!!x.multiple,ze,!1):xe!==!!x.multiple&&(x.defaultValue!=null?zt(m,!!x.multiple,x.defaultValue,!0):zt(m,!!x.multiple,x.multiple?[]:"",!1))}m[va]=x}catch($e){en(i,i.return,$e)}}break;case 6:if(Ti(s,i),Gi(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch($e){en(i,i.return,$e)}}break;case 3:if(Ti(s,i),Gi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{oa(s.containerInfo)}catch($e){en(i,i.return,$e)}break;case 4:Ti(s,i),Gi(i);break;case 13:Ti(s,i),Gi(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Qf=Zt())),f&4&&b0(i);break;case 22:if(_e=l!==null&&l.memoizedState!==null,i.mode&1?(Rn=(ae=Rn)||_e,Ti(s,i),Rn=ae):Ti(s,i),Gi(i),f&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!_e&&(i.mode&1)!==0)for(We=i,_e=i.child;_e!==null;){for(Se=We=_e;We!==null;){switch(xe=We,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:ba(4,xe,xe.return);break;case 1:fo(xe,xe.return);var je=xe.stateNode;if(typeof je.componentWillUnmount=="function"){f=xe,l=xe.return;try{s=f,je.props=s.memoizedProps,je.state=s.memoizedState,je.componentWillUnmount()}catch($e){en(f,l,$e)}}break;case 5:fo(xe,xe.return);break;case 22:if(xe.memoizedState!==null){L0(Se);continue}}ze!==null?(ze.return=xe,We=ze):L0(Se)}_e=_e.sibling}e:for(_e=null,Se=i;;){if(Se.tag===5){if(_e===null){_e=Se;try{m=Se.stateNode,ae?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=Se.stateNode,z=Se.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=fe("display",w))}catch($e){en(i,i.return,$e)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch($e){en(i,i.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ti(s,i),Gi(i),f&4&&b0(i);break;case 21:break;default:Ti(s,i),Gi(i)}}function Gi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(w0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(ge(m,""),f.flags&=-33);var x=A0(i);$f(i,x,m);break;case 3:case 4:var w=f.stateNode.containerInfo,U=A0(i);qf(i,U,w);break;default:throw Error(t(161))}}catch(z){en(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function gE(i,s,l){We=i,P0(i)}function P0(i,s,l){for(var f=(i.mode&1)!==0;We!==null;){var m=We,x=m.child;if(m.tag===22&&f){var w=m.memoizedState!==null||Ql;if(!w){var U=m.alternate,z=U!==null&&U.memoizedState!==null||Rn;U=Ql;var ae=Rn;if(Ql=w,(Rn=z)&&!ae)for(We=m;We!==null;)w=We,z=w.child,w.tag===22&&w.memoizedState!==null?I0(m):z!==null?(z.return=w,We=z):I0(m);for(;x!==null;)We=x,P0(x),x=x.sibling;We=m,Ql=U,Rn=ae}D0(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,We=x):D0(i)}}function D0(i){for(;We!==null;){var s=We;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Rn||Jl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Rn)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Mi(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Lg(s,x,f);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Lg(s,w,l)}break;case 5:var U=s.stateNode;if(l===null&&s.flags&4){l=U;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var _e=ae.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&oa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Rn||s.flags&512&&Yf(s)}catch(xe){en(s,s.return,xe)}}if(s===i){We=null;break}if(l=s.sibling,l!==null){l.return=s.return,We=l;break}We=s.return}}function L0(i){for(;We!==null;){var s=We;if(s===i){We=null;break}var l=s.sibling;if(l!==null){l.return=s.return,We=l;break}We=s.return}}function I0(i){for(;We!==null;){var s=We;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Jl(4,s)}catch(z){en(s,l,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(z){en(s,m,z)}}var x=s.return;try{Yf(s)}catch(z){en(s,x,z)}break;case 5:var w=s.return;try{Yf(s)}catch(z){en(s,w,z)}}}catch(z){en(s,s.return,z)}if(s===i){We=null;break}var U=s.sibling;if(U!==null){U.return=s.return,We=U;break}We=s.return}}var vE=Math.ceil,ec=R.ReactCurrentDispatcher,Kf=R.ReactCurrentOwner,di=R.ReactCurrentBatchConfig,Et=0,gn=null,on=null,En=0,ei=0,ho=Or(0),un=0,Ra=null,_s=0,tc=0,Zf=0,Pa=null,jn=null,Qf=0,po=1/0,pr=null,nc=!1,Jf=null,Gr=null,ic=!1,Wr=null,rc=0,Da=0,ed=null,sc=-1,oc=0;function Fn(){return(Et&6)!==0?Zt():sc!==-1?sc:sc=Zt()}function jr(i){return(i.mode&1)===0?1:(Et&2)!==0&&En!==0?En&-En:eE.transition!==null?(oc===0&&(oc=Ve()),oc):(i=xt,i!==0||(i=window.event,i=i===void 0?16:Um(i.type)),i)}function wi(i,s,l,f){if(50<Da)throw Da=0,ed=null,Error(t(185));vt(i,l,f),((Et&2)===0||i!==gn)&&(i===gn&&((Et&2)===0&&(tc|=l),un===4&&Xr(i,En)),Xn(i,f),l===1&&Et===0&&(s.mode&1)===0&&(po=Zt()+500,Nl&&Br()))}function Xn(i,s){var l=i.callbackNode;Dt(i,s);var f=Ht(i,i===gn?En:0);if(f===0)l!==null&&gl(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&gl(l),s===1)i.tag===0?JM(U0.bind(null,i)):yg(U0.bind(null,i)),$M(function(){(Et&6)===0&&Br()}),l=null;else{switch(or(f)){case 1:l=ta;break;case 4:l=b;break;case 16:l=Y;break;case 536870912:l=te;break;default:l=Y}l=G0(l,N0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function N0(i,s){if(sc=-1,oc=0,(Et&6)!==0)throw Error(t(327));var l=i.callbackNode;if(mo()&&i.callbackNode!==l)return null;var f=Ht(i,i===gn?En:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=ac(i,f);else{s=f;var m=Et;Et|=2;var x=O0();(gn!==i||En!==s)&&(pr=null,po=Zt()+500,Ss(i,s));do try{yE();break}catch(U){F0(i,U)}while(!0);xf(),ec.current=x,Et=m,on!==null?s=0:(gn=null,En=0,s=un)}if(s!==0){if(s===2&&(m=sn(i),m!==0&&(f=m,s=td(i,m))),s===1)throw l=Ra,Ss(i,0),Xr(i,f),Xn(i,Zt()),l;if(s===6)Xr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!xE(m)&&(s=ac(i,f),s===2&&(x=sn(i),x!==0&&(f=x,s=td(i,x))),s===1))throw l=Ra,Ss(i,0),Xr(i,f),Xn(i,Zt()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ms(i,jn,pr);break;case 3:if(Xr(i,f),(f&130023424)===f&&(s=Qf+500-Zt(),10<s)){if(Ht(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Fn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=af(Ms.bind(null,i,jn,pr),s);break}Ms(i,jn,pr);break;case 4:if(Xr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var w=31-Ce(f);x=1<<w,w=s[w],w>m&&(m=w),f&=~x}if(f=m,f=Zt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*vE(f/1960))-f,10<f){i.timeoutHandle=af(Ms.bind(null,i,jn,pr),f);break}Ms(i,jn,pr);break;case 5:Ms(i,jn,pr);break;default:throw Error(t(329))}}}return Xn(i,Zt()),i.callbackNode===l?N0.bind(null,i):null}function td(i,s){var l=Pa;return i.current.memoizedState.isDehydrated&&(Ss(i,s).flags|=256),i=ac(i,s),i!==2&&(s=jn,jn=l,s!==null&&nd(s)),i}function nd(i){jn===null?jn=i:jn.push.apply(jn,i)}function xE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!yi(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Xr(i,s){for(s&=~Zf,s&=~tc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Ce(s),f=1<<l;i[l]=-1,s&=~f}}function U0(i){if((Et&6)!==0)throw Error(t(327));mo();var s=Ht(i,0);if((s&1)===0)return Xn(i,Zt()),null;var l=ac(i,s);if(i.tag!==0&&l===2){var f=sn(i);f!==0&&(s=f,l=td(i,f))}if(l===1)throw l=Ra,Ss(i,0),Xr(i,s),Xn(i,Zt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ms(i,jn,pr),Xn(i,Zt()),null}function id(i,s){var l=Et;Et|=1;try{return i(s)}finally{Et=l,Et===0&&(po=Zt()+500,Nl&&Br())}}function ys(i){Wr!==null&&Wr.tag===0&&(Et&6)===0&&mo();var s=Et;Et|=1;var l=di.transition,f=xt;try{if(di.transition=null,xt=1,i)return i()}finally{xt=f,di.transition=l,Et=s,(Et&6)===0&&Br()}}function rd(){ei=ho.current,Yt(ho)}function Ss(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,qM(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(hf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ll();break;case 3:co(),Yt(Hn),Yt(An),Af();break;case 5:Tf(f);break;case 4:co();break;case 13:Yt(Qt);break;case 19:Yt(Qt);break;case 10:_f(f.type._context);break;case 22:case 23:rd()}l=l.return}if(gn=i,on=i=Yr(i.current,null),En=ei=s,un=0,Ra=null,Zf=tc=_s=0,jn=Pa=null,gs!==null){for(s=0;s<gs.length;s++)if(l=gs[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var w=x.next;x.next=m,f.next=w}l.pending=f}gs=null}return i}function F0(i,s){do{var l=on;try{if(xf(),Wl.current=ql,jl){for(var f=Jt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}jl=!1}if(xs=0,mn=cn=Jt=null,Ea=!1,Ta=0,Kf.current=null,l===null||l.return===null){un=1,Ra=s,on=null;break}e:{var x=i,w=l.return,U=l,z=s;if(s=En,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,_e=U,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var ze=a0(w);if(ze!==null){ze.flags&=-257,l0(ze,w,U,x,s),ze.mode&1&&o0(x,ae,s),s=ze,z=ae;var je=s.updateQueue;if(je===null){var $e=new Set;$e.add(z),s.updateQueue=$e}else je.add(z);break e}else{if((s&1)===0){o0(x,ae,s),sd();break e}z=Error(t(426))}}else if($t&&U.mode&1){var nn=a0(w);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),l0(nn,w,U,x,s),gf(uo(z,U));break e}}x=z=uo(z,U),un!==4&&(un=2),Pa===null?Pa=[x]:Pa.push(x),x=w;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var Z=r0(x,z,s);Dg(x,Z);break e;case 1:U=z;var j=x.type,ne=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Gr===null||!Gr.has(ne)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=s0(x,U,s);Dg(x,Te);break e}}x=x.return}while(x!==null)}B0(l)}catch(Ze){s=Ze,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function O0(){var i=ec.current;return ec.current=ql,i===null?ql:i}function sd(){(un===0||un===3||un===2)&&(un=4),gn===null||(_s&268435455)===0&&(tc&268435455)===0||Xr(gn,En)}function ac(i,s){var l=Et;Et|=2;var f=O0();(gn!==i||En!==s)&&(pr=null,Ss(i,s));do try{_E();break}catch(m){F0(i,m)}while(!0);if(xf(),Et=l,ec.current=f,on!==null)throw Error(t(261));return gn=null,En=0,un}function _E(){for(;on!==null;)k0(on)}function yE(){for(;on!==null&&!Uu();)k0(on)}function k0(i){var s=H0(i.alternate,i,ei);i.memoizedProps=i.pendingProps,s===null?B0(i):on=s,Kf.current=null}function B0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=dE(l,s,ei),l!==null){on=l;return}}else{if(l=hE(l,s),l!==null){l.flags&=32767,on=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{un=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=i}while(s!==null);un===0&&(un=5)}function Ms(i,s,l){var f=xt,m=di.transition;try{di.transition=null,xt=1,SE(i,s,l,f)}finally{di.transition=m,xt=f}return null}function SE(i,s,l,f){do mo();while(Wr!==null);if((Et&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Vn(i,x),i===gn&&(on=gn=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ic||(ic=!0,G0(Y,function(){return mo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=di.transition,di.transition=null;var w=xt;xt=1;var U=Et;Et|=4,Kf.current=null,mE(i,l),R0(l,i),zM(sf),xl=!!rf,sf=rf=null,i.current=l,gE(l),Fu(),Et=U,xt=w,di.transition=x}else i.current=l;if(ic&&(ic=!1,Wr=i,rc=m),x=i.pendingLanes,x===0&&(Gr=null),He(l.stateNode),Xn(i,Zt()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(nc)throw nc=!1,i=Jf,Jf=null,i;return(rc&1)!==0&&i.tag!==0&&mo(),x=i.pendingLanes,(x&1)!==0?i===ed?Da++:(Da=0,ed=i):Da=0,Br(),null}function mo(){if(Wr!==null){var i=or(rc),s=di.transition,l=xt;try{if(di.transition=null,xt=16>i?16:i,Wr===null)var f=!1;else{if(i=Wr,Wr=null,rc=0,(Et&6)!==0)throw Error(t(331));var m=Et;for(Et|=4,We=i.current;We!==null;){var x=We,w=x.child;if((We.flags&16)!==0){var U=x.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ae=U[z];for(We=ae;We!==null;){var _e=We;switch(_e.tag){case 0:case 11:case 15:ba(8,_e,x)}var Se=_e.child;if(Se!==null)Se.return=_e,We=Se;else for(;We!==null;){_e=We;var xe=_e.sibling,ze=_e.return;if(T0(_e),_e===ae){We=null;break}if(xe!==null){xe.return=ze,We=xe;break}We=ze}}}var je=x.alternate;if(je!==null){var $e=je.child;if($e!==null){je.child=null;do{var nn=$e.sibling;$e.sibling=null,$e=nn}while($e!==null)}}We=x}}if((x.subtreeFlags&2064)!==0&&w!==null)w.return=x,We=w;else e:for(;We!==null;){if(x=We,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ba(9,x,x.return)}var Z=x.sibling;if(Z!==null){Z.return=x.return,We=Z;break e}We=x.return}}var j=i.current;for(We=j;We!==null;){w=We;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,We=ne;else e:for(w=j;We!==null;){if(U=We,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Jl(9,U)}}catch(Ze){en(U,U.return,Ze)}if(U===w){We=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,We=Te;break e}We=U.return}}if(Et=m,Br(),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(ee,i)}catch{}f=!0}return f}finally{xt=l,di.transition=s}}return!1}function V0(i,s,l){s=uo(l,s),s=r0(i,s,1),i=zr(i,s,1),s=Fn(),i!==null&&(vt(i,1,s),Xn(i,s))}function en(i,s,l){if(i.tag===3)V0(i,i,l);else for(;s!==null;){if(s.tag===3){V0(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Gr===null||!Gr.has(f))){i=uo(l,i),i=s0(s,i,1),s=zr(s,i,1),i=Fn(),s!==null&&(vt(s,1,i),Xn(s,i));break}}s=s.return}}function ME(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Fn(),i.pingedLanes|=i.suspendedLanes&l,gn===i&&(En&l)===l&&(un===4||un===3&&(En&130023424)===En&&500>Zt()-Qf?Ss(i,0):Zf|=l),Xn(i,s)}function z0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=Fn();i=fr(i,s),i!==null&&(vt(i,s,l),Xn(i,l))}function EE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),z0(i,l)}function TE(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),z0(i,l)}var H0;H0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Hn.current)Wn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Wn=!1,fE(i,s,l);Wn=(i.flags&131072)!==0}else Wn=!1,$t&&(s.flags&1048576)!==0&&Sg(s,Fl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Zl(i,s),i=s.pendingProps;var m=no(s,An.current);lo(s,l),m=Rf(null,s,f,i,m,l);var x=Pf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gn(f)?(x=!0,Il(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Mf(s),m.updater=$l,s.stateNode=m,m._reactInternals=s,Ff(s,f,i,l),s=Vf(null,s,f,!0,x,l)):(s.tag=0,$t&&x&&df(s),Un(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(Zl(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=AE(f),i=Mi(f,i),m){case 0:s=Bf(null,s,f,i,l);break e;case 1:s=p0(null,s,f,i,l);break e;case 11:s=c0(null,s,f,i,l);break e;case 14:s=u0(null,s,f,Mi(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Mi(f,m),Bf(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Mi(f,m),p0(i,s,f,m,l);case 3:e:{if(m0(s),i===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,m=x.element,Pg(i,s),Hl(s,f,null,l);var w=s.memoizedState;if(f=w.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=uo(Error(t(423)),s),s=g0(i,s,f,l,m);break e}else if(f!==m){m=uo(Error(t(424)),s),s=g0(i,s,f,l,m);break e}else for(Jn=Fr(s.stateNode.containerInfo.firstChild),Qn=s,$t=!0,Si=null,l=bg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(so(),f===m){s=hr(i,s,l);break e}Un(i,s,f,l)}s=s.child}return s;case 5:return Ig(s),i===null&&mf(s),f=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,w=m.children,of(f,m)?w=null:x!==null&&of(f,x)&&(s.flags|=32),h0(i,s),Un(i,s,w,l),s.child;case 6:return i===null&&mf(s),null;case 13:return v0(i,s,l);case 4:return Ef(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=oo(s,null,f,l):Un(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Mi(f,m),c0(i,s,f,m,l);case 7:return Un(i,s,s.pendingProps,l),s.child;case 8:return Un(i,s,s.pendingProps.children,l),s.child;case 12:return Un(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,x=s.memoizedProps,w=m.value,Gt(Bl,f._currentValue),f._currentValue=w,x!==null)if(yi(x.value,w)){if(x.children===m.children&&!Hn.current){s=hr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var U=x.dependencies;if(U!==null){w=x.child;for(var z=U.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=dr(-1,l&-l),z.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var _e=ae.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ae.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),yf(x.return,l,s),U.lanes|=l;break}z=z.next}}else if(x.tag===10)w=x.type===s.type?null:x.child;else if(x.tag===18){if(w=x.return,w===null)throw Error(t(341));w.lanes|=l,U=w.alternate,U!==null&&(U.lanes|=l),yf(w,l,s),w=x.sibling}else w=x.child;if(w!==null)w.return=x;else for(w=x;w!==null;){if(w===s){w=null;break}if(x=w.sibling,x!==null){x.return=w.return,w=x;break}w=w.return}x=w}Un(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,lo(s,l),m=ui(m),f=f(m),s.flags|=1,Un(i,s,f,l),s.child;case 14:return f=s.type,m=Mi(f,s.pendingProps),m=Mi(f.type,m),u0(i,s,f,m,l);case 15:return f0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Mi(f,m),Zl(i,s),s.tag=1,Gn(f)?(i=!0,Il(s)):i=!1,lo(s,l),n0(s,f,m),Ff(s,f,m,l),Vf(null,s,f,!0,i,l);case 19:return _0(i,s,l);case 22:return d0(i,s,l)}throw Error(t(156,s.tag))};function G0(i,s){return ml(i,s)}function wE(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(i,s,l,f){return new wE(i,s,l,f)}function od(i){return i=i.prototype,!(!i||!i.isReactComponent)}function AE(i){if(typeof i=="function")return od(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===G)return 14}return 2}function Yr(i,s){var l=i.alternate;return l===null?(l=hi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function lc(i,s,l,f,m,x){var w=2;if(f=i,typeof i=="function")od(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case F:return Es(l.children,m,x,s);case E:w=8,m|=8;break;case I:return i=hi(12,l,s,m|2),i.elementType=I,i.lanes=x,i;case le:return i=hi(13,l,s,m),i.elementType=le,i.lanes=x,i;case ue:return i=hi(19,l,s,m),i.elementType=ue,i.lanes=x,i;case $:return cc(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:w=10;break e;case k:w=9;break e;case q:w=11;break e;case G:w=14;break e;case Q:w=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=hi(w,l,s,m),s.elementType=i,s.type=f,s.lanes=x,s}function Es(i,s,l,f){return i=hi(7,i,f,s),i.lanes=l,i}function cc(i,s,l,f){return i=hi(22,i,f,s),i.elementType=$,i.lanes=l,i.stateNode={isHidden:!1},i}function ad(i,s,l){return i=hi(6,i,null,s),i.lanes=l,i}function ld(i,s,l){return s=hi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function CE(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function cd(i,s,l,f,m,x,w,U,z){return i=new CE(i,s,l,U,z),s===1?(s=1,x===!0&&(s|=8)):s=0,x=hi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(x),i}function bE(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function W0(i){if(!i)return kr;i=i._reactInternals;e:{if(ki(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Gn(l))return xg(i,l,s)}return s}function j0(i,s,l,f,m,x,w,U,z){return i=cd(l,f,!0,i,m,x,w,U,z),i.context=W0(null),l=i.current,f=Fn(),m=jr(l),x=dr(f,m),x.callback=s??null,zr(l,x,m),i.current.lanes=m,vt(i,m,f),Xn(i,f),i}function uc(i,s,l,f){var m=s.current,x=Fn(),w=jr(m);return l=W0(l),s.context===null?s.context=l:s.pendingContext=l,s=dr(x,w),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=zr(m,s,w),i!==null&&(wi(i,m,w,x),zl(i,m,w)),w}function fc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function X0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function ud(i,s){X0(i,s),(i=i.alternate)&&X0(i,s)}function RE(){return null}var Y0=typeof reportError=="function"?reportError:function(i){console.error(i)};function fd(i){this._internalRoot=i}dc.prototype.render=fd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));uc(i,s,null,null)},dc.prototype.unmount=fd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ys(function(){uc(null,i,null,null)}),s[ar]=null}};function dc(i){this._internalRoot=i}dc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Lt();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Ir.length&&s!==0&&s<Ir[l].priority;l++);Ir.splice(l,0,i),l===0&&Im(i)}};function dd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function hc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function q0(){}function PE(i,s,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var ae=fc(w);x.call(ae)}}var w=j0(s,f,i,0,null,!1,!1,"",q0);return i._reactRootContainer=w,i[ar]=w.current,ma(i.nodeType===8?i.parentNode:i),ys(),w}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var ae=fc(z);U.call(ae)}}var z=cd(i,0,!1,null,null,!1,!1,"",q0);return i._reactRootContainer=z,i[ar]=z.current,ma(i.nodeType===8?i.parentNode:i),ys(function(){uc(s,z,l,f)}),z}function pc(i,s,l,f,m){var x=l._reactRootContainer;if(x){var w=x;if(typeof m=="function"){var U=m;m=function(){var z=fc(w);U.call(z)}}uc(s,w,i,m)}else w=PE(l,s,i,m,f);return fc(w)}Rt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Mt(s.pendingLanes);l!==0&&(zn(s,l|1),Xn(s,Zt()),(Et&6)===0&&(po=Zt()+500,Br()))}break;case 13:ys(function(){var f=fr(i,1);if(f!==null){var m=Fn();wi(f,i,1,m)}}),ud(i,1)}},jt=function(i){if(i.tag===13){var s=fr(i,134217728);if(s!==null){var l=Fn();wi(s,i,134217728,l)}ud(i,134217728)}},xi=function(i){if(i.tag===13){var s=jr(i),l=fr(i,s);if(l!==null){var f=Fn();wi(l,i,s,f)}ud(i,s)}},Lt=function(){return xt},_i=function(i,s){var l=xt;try{return xt=i,s()}finally{xt=l}},at=function(i,s,l){switch(s){case"input":if(Kt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Dl(f);if(!m)throw Error(t(90));Bt(f),Kt(f,m)}}}break;case"textarea":Le(i,l);break;case"select":s=l.value,s!=null&&zt(i,!!l.multiple,s,!1)}},be=id,ve=ys;var DE={usingClientEntryPoint:!1,Events:[xa,eo,Dl,de,ke,id]},La={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Jo(i),i===null?null:i.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||RE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{ee=mc.inject(LE),Pe=mc}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE,Yn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(s))throw Error(t(200));return bE(i,s,null,l)},Yn.createRoot=function(i,s){if(!dd(i))throw Error(t(299));var l=!1,f="",m=Y0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=cd(i,1,!1,null,null,l,!1,f,m),i[ar]=s.current,ma(i.nodeType===8?i.parentNode:i),new fd(s)},Yn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Jo(s),i=i===null?null:i.stateNode,i},Yn.flushSync=function(i){return ys(i)},Yn.hydrate=function(i,s,l){if(!hc(s))throw Error(t(200));return pc(null,i,s,!0,l)},Yn.hydrateRoot=function(i,s,l){if(!dd(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",w=Y0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=j0(s,null,i,1,l??null,m,!1,x,w),i[ar]=s.current,ma(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new dc(s)},Yn.render=function(i,s,l){if(!hc(s))throw Error(t(200));return pc(null,i,s,!1,l)},Yn.unmountComponentAtNode=function(i){if(!hc(i))throw Error(t(40));return i._reactRootContainer?(ys(function(){pc(null,null,i,!1,function(){i._reactRootContainer=null,i[ar]=null})}),!0):!1},Yn.unstable_batchedUpdates=id,Yn.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!hc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return pc(i,s,l,!1,f)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var nv;function VE(){if(nv)return md.exports;nv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),md.exports=BE(),md.exports}var iv;function zE(){if(iv)return gc;iv=1;var n=VE();return gc.createRoot=n.createRoot,gc.hydrateRoot=n.hydrateRoot,gc}var HE=zE();const rv=[["Услуги","#services"],["О юристе","#about"],["Отзывы","#reviews"],["FAQ","#faq"]];function GE({transparent:n}){const[e,t]=Re.useState(!1),[r,o]=Re.useState(!1);Re.useEffect(()=>{const p=()=>t(window.scrollY>60);return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]);const a=n?"rgba(255,255,255,.92)":"var(--g700)",c=n?"rgba(255,255,255,.72)":"var(--fg2)",u=n?"rgba(255,255,255,1)":"var(--g700)",d=n?"white":"var(--fg1)",h=n?{background:"rgba(0,0,0,.12)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.14)",boxShadow:"none"}:e?{background:"rgba(244,239,230,.97)",boxShadow:"0 4px 28px rgba(0,0,0,.09)"}:{};return V.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:50,display:"flex",justifyContent:"center",padding:"14px 16px 0",transition:"all .35s ease"},children:[V.jsxs("div",{className:`navbar ${!n&&e?"sc":""}`,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 22px",width:"100%",maxWidth:"1040px",transition:"background .35s, border .35s, box-shadow .35s",...h},children:[V.jsx("a",{href:"#",className:"serif",style:{fontWeight:700,color:a,fontSize:"18px",textDecoration:"none",transition:"color .35s"},children:"Алия Сейткали"}),V.jsx("div",{className:"md-hide",style:{alignItems:"center",gap:"24px"},children:rv.map(([p,v])=>V.jsx("a",{href:v,style:{fontSize:"14px",fontWeight:500,color:c,textDecoration:"none",transition:"color .2s"},onMouseEnter:g=>g.target.style.color=u,onMouseLeave:g=>g.target.style.color=c,children:p},p))}),V.jsx("a",{href:"tel:+77066060600",className:`btn md-hide ${n?"btn-ghost":"btn-g"}`,style:{padding:"10px 20px",fontSize:"13px",transition:"all .35s"},children:"Связаться ↗"}),V.jsx("button",{className:"md-show",onClick:()=>o(!r),style:{background:"none",border:"none",cursor:"pointer",padding:"4px",flexDirection:"column",gap:"5px"},children:[0,1,2].map(p=>V.jsx("span",{style:{display:"block",width:"22px",height:"2px",background:d,transition:"all .25s",opacity:p===1&&r?0:1,transform:p===0&&r?"rotate(45deg) translateY(7px)":p===2&&r?"rotate(-45deg) translateY(-7px)":""}},p))})]}),r&&V.jsxs("div",{className:"mob-menu",style:{position:"absolute",top:"100%",left:"12px",right:"12px",background:"rgba(244,239,230,.98)",border:"1px solid var(--bd)",borderRadius:"20px",padding:"16px",boxShadow:"0 12px 40px rgba(0,0,0,.12)",marginTop:"8px"},children:[rv.map(([p,v])=>V.jsx("a",{href:v,onClick:()=>o(!1),style:{display:"block",padding:"13px 8px",fontSize:"15px",fontWeight:500,color:"var(--fg1)",textDecoration:"none",borderBottom:"1px solid var(--bd)"},children:p},p)),V.jsx("a",{href:"tel:+77066060600",className:"btn btn-g",style:{marginTop:"12px",width:"100%",justifyContent:"center"},children:"Связаться с юристом ↗"})]})]})}const kp=Re.createContext({});function ss(n){const e=Re.useRef(null);return e.current===null&&(e.current=n()),e.current}const WE=typeof window<"u",Eu=WE?Re.useLayoutEffect:Re.useEffect,Tu=Re.createContext(null);function Bp(n,e){n.indexOf(e)===-1&&n.push(e)}function ou(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Oi=(n,e,t)=>t>e?e:t<n?n:t;let Vp=()=>{};const os={},D_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),L_=n=>typeof n=="object"&&n!==null,I_=n=>/^0[^.\s]+$/u.test(n);function N_(n){let e;return()=>(e===void 0&&(e=n()),e)}const $n=n=>n,ol=(...n)=>n.reduce((e,t)=>r=>t(e(r))),Bo=(n,e,t)=>{const r=e-n;return r?(t-n)/r:1};class zp{constructor(){this.subscriptions=[]}add(e){return Bp(this.subscriptions,e),()=>ou(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ri=n=>n*1e3,gi=n=>n/1e3,Hp=(n,e)=>e?n*(1e3/e):0,U_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,jE=1e-7,XE=12;function YE(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=U_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>jE&&++u<XE);return c}function al(n,e,t,r){if(n===e&&t===r)return $n;const o=a=>YE(a,0,1,n,t);return a=>a===0||a===1?a:U_(o(a),e,r)}const F_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,O_=n=>e=>1-n(1-e),k_=al(.33,1.53,.69,.99),Gp=O_(k_),B_=F_(Gp),V_=n=>n>=1?1:(n*=2)<1?.5*Gp(n):.5*(2-Math.pow(2,-10*(n-1))),Wp=n=>1-Math.sin(Math.acos(n)),z_=O_(Wp),H_=F_(Wp),qE=al(.42,0,1,1),$E=al(0,0,.58,1),G_=al(.42,0,.58,1),KE=n=>Array.isArray(n)&&typeof n[0]!="number",W_=n=>Array.isArray(n)&&typeof n[0]=="number",ZE={linear:$n,easeIn:qE,easeInOut:G_,easeOut:$E,circIn:Wp,circInOut:H_,circOut:z_,backIn:Gp,backInOut:B_,backOut:k_,anticipate:V_},QE=n=>typeof n=="string",sv=n=>{if(W_(n)){Vp(n.length===4);const[e,t,r,o]=n;return al(e,t,r,o)}else if(QE(n))return ZE[n];return n},vc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function JE(n,e){let t=new Set,r=new Set,o=!1,a=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function d(p){c.has(p)&&(h.schedule(p),n()),p(u)}const h={schedule:(p,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&c.add(p),M.add(p),p},cancel:p=>{r.delete(p),c.delete(p)},process:p=>{if(u=p,o){a=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(p))}};return h}const eT=40;function j_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=vc.reduce((P,R)=>(P[R]=JE(a),P),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:_,postRender:M}=c,A=()=>{const P=os.useManualTiming,R=P?o.timestamp:performance.now();t=!1,P||(o.delta=r?1e3/60:Math.max(Math.min(R-o.timestamp,eT),1)),o.timestamp=R,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),v.process(o),g.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(A))},y=()=>{t=!0,r=!0,o.isProcessing||n(A)};return{schedule:vc.reduce((P,R)=>{const N=c[R];return P[R]=(L,F=!1,E=!1)=>(t||y(),N.schedule(L,F,E)),P},{}),cancel:P=>{for(let R=0;R<vc.length;R++)c[vc[R]].cancel(P)},state:o,steps:c}}const{schedule:wt,cancel:vi,state:_n,steps:xd}=j_(typeof requestAnimationFrame<"u"?requestAnimationFrame:$n,!0);let Yc;function tT(){Yc=void 0}const kn={now:()=>(Yc===void 0&&kn.set(_n.isProcessing||os.useManualTiming?_n.timestamp:performance.now()),Yc),set:n=>{Yc=n,queueMicrotask(tT)}},X_=n=>e=>typeof e=="string"&&e.startsWith(n),Y_=X_("--"),nT=X_("var(--"),jp=n=>nT(n)?iT.test(n.split("/*")[0].trim()):!1,iT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ov(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Xo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},el={...Xo,transform:n=>Oi(0,1,n)},xc={...Xo,default:1},Ya=n=>Math.round(n*1e5)/1e5,Xp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function rT(n){return n==null}const sT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yp=(n,e)=>t=>!!(typeof t=="string"&&sT.test(t)&&t.startsWith(n)||e&&!rT(t)&&Object.prototype.hasOwnProperty.call(t,e)),q_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(Xp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},oT=n=>Oi(0,255,n),_d={...Xo,transform:n=>Math.round(oT(n))},Ns={test:Yp("rgb","red"),parse:q_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+_d.transform(n)+", "+_d.transform(e)+", "+_d.transform(t)+", "+Ya(el.transform(r))+")"};function aT(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const xh={test:Yp("#"),parse:aT,transform:Ns.transform},ll=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),yr=ll("deg"),Zi=ll("%"),Xe=ll("px"),lT=ll("vh"),cT=ll("vw"),av={...Zi,parse:n=>Zi.parse(n)/100,transform:n=>Zi.transform(n*100)},Io={test:Yp("hsl","hue"),parse:q_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Zi.transform(Ya(e))+", "+Zi.transform(Ya(t))+", "+Ya(el.transform(r))+")"},ln={test:n=>Ns.test(n)||xh.test(n)||Io.test(n),parse:n=>Ns.test(n)?Ns.parse(n):Io.test(n)?Io.parse(n):xh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ns.transform(n):Io.transform(n),getAnimatableNone:n=>{const e=ln.parse(n);return e.alpha=0,ln.transform(e)}},uT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function fT(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Xp))==null?void 0:e.length)||0)+(((t=n.match(uT))==null?void 0:t.length)||0)>0}const $_="number",K_="color",dT="var",hT="var(",lv="${}",pT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vo(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(pT,d=>(ln.test(d)?(r.color.push(a),o.push(K_),t.push(ln.parse(d))):d.startsWith(hT)?(r.var.push(a),o.push(dT),t.push(d)):(r.number.push(a),o.push($_),t.push(parseFloat(d))),++a,lv)).split(lv);return{values:t,split:u,indexes:r,types:o}}function mT(n){return Vo(n).values}function Z_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===$_?o+=Ya(r[a]):c===K_?o+=ln.transform(r[a]):o+=r[a]}return o}}function gT(n){return Z_(Vo(n))}const vT=n=>typeof n=="number"?0:ln.test(n)?ln.getAnimatableNone(n):n,xT=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:vT(n);function _T(n){const e=Vo(n);return Z_(e)(e.values.map((r,o)=>xT(r,e.split[o])))}const Fi={test:fT,parse:mT,createTransformer:gT,getAnimatableNone:_T};function yd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function yT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=yd(d,u,n+1/3),a=yd(d,u,n),c=yd(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function au(n,e){return t=>t>0?e:n}const kt=(n,e,t)=>n+(e-n)*t,Sd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},ST=[xh,Ns,Io],MT=n=>ST.find(e=>e.test(n));function cv(n){const e=MT(n);if(!e)return!1;let t=e.parse(n);return e===Io&&(t=yT(t)),t}const uv=(n,e)=>{const t=cv(n),r=cv(e);if(!t||!r)return au(n,e);const o={...t};return a=>(o.red=Sd(t.red,r.red,a),o.green=Sd(t.green,r.green,a),o.blue=Sd(t.blue,r.blue,a),o.alpha=kt(t.alpha,r.alpha,a),Ns.transform(o))},_h=new Set(["none","hidden"]);function ET(n,e){return _h.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function TT(n,e){return t=>kt(n,e,t)}function qp(n){return typeof n=="number"?TT:typeof n=="string"?jp(n)?au:ln.test(n)?uv:CT:Array.isArray(n)?Q_:typeof n=="object"?ln.test(n)?uv:wT:au}function Q_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>qp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function wT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=qp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function AT(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],u=n.values[c]??0;t[o]=u,r[a]++}return t}const CT=(n,e)=>{const t=Fi.createTransformer(e),r=Vo(n),o=Vo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?_h.has(n)&&!o.values.length||_h.has(e)&&!r.values.length?ET(n,e):ol(Q_(AT(r,o),o.values),t):au(n,e)};function J_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?kt(n,e,t):qp(n)(n,e)}const bT=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>wt.update(e,t),stop:()=>vi(e),now:()=>_n.isProcessing?_n.timestamp:kn.now()}},ey=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},lu=2e4;function $p(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<lu;)e+=t,r=n.next(e);return e>=lu?1/0:e}function RT(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min($p(r),lu);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:gi(o)}}const tn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function yh(n,e){return n*Math.sqrt(1-e*e)}const PT=12;function DT(n,e,t){let r=t;for(let o=1;o<PT;o++)r=r-n(r)/e(r);return r}const Md=.001;function LT({duration:n=tn.duration,bounce:e=tn.bounce,velocity:t=tn.velocity,mass:r=tn.mass}){let o,a,c=1-e;c=Oi(tn.minDamping,tn.maxDamping,c),n=Oi(tn.minDuration,tn.maxDuration,gi(n)),c<1?(o=h=>{const p=h*c,v=p*n,g=p-t,_=yh(h,c),M=Math.exp(-v);return Md-g/_*M},a=h=>{const v=h*c*n,g=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=yh(Math.pow(h,2),c);return(-o(h)+Md>0?-1:1)*((g-_)*M)/A}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Md+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=DT(o,a,u);if(n=ri(n),isNaN(d))return{stiffness:tn.stiffness,damping:tn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const IT=["duration","bounce"],NT=["stiffness","damping","mass"];function fv(n,e){return e.some(t=>n[t]!==void 0)}function UT(n){let e={velocity:tn.velocity,stiffness:tn.stiffness,damping:tn.damping,mass:tn.mass,isResolvedFromDuration:!1,...n};if(!fv(n,NT)&&fv(n,IT))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Oi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:tn.mass,stiffness:o,damping:a}}else{const t=LT({...n,velocity:0});e={...e,...t,mass:tn.mass},e.isResolvedFromDuration=!0}return e}function cu(n=tn.visualDuration,e=tn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:_}=UT({...t,velocity:-gi(t.velocity||0)}),M=g||0,A=h/(2*Math.sqrt(d*p)),y=c-a,S=gi(Math.sqrt(d/p)),C=Math.abs(y)<5;r||(r=C?tn.restSpeed.granular:tn.restSpeed.default),o||(o=C?tn.restDelta.granular:tn.restDelta.default);let P,R,N,L,F,E;if(A<1)N=yh(S,A),L=(M+A*S*y)/N,P=B=>{const k=Math.exp(-A*S*B);return c-k*(L*Math.sin(N*B)+y*Math.cos(N*B))},F=A*S*L+y*N,E=A*S*y-L*N,R=B=>Math.exp(-A*S*B)*(F*Math.sin(N*B)+E*Math.cos(N*B));else if(A===1){P=k=>c-Math.exp(-S*k)*(y+(M+S*y)*k);const B=M+S*y;R=k=>Math.exp(-S*k)*(S*B*k-M)}else{const B=S*Math.sqrt(A*A-1);P=ue=>{const G=Math.exp(-A*S*ue),Q=Math.min(B*ue,300);return c-G*((M+A*S*y)*Math.sinh(Q)+B*y*Math.cosh(Q))/B};const k=(M+A*S*y)/B,q=A*S*k-y*B,le=A*S*y-k*B;R=ue=>{const G=Math.exp(-A*S*ue),Q=Math.min(B*ue,300);return G*(q*Math.sinh(Q)+le*Math.cosh(Q))}}const I={calculatedDuration:_&&v||null,velocity:B=>ri(R(B)),next:B=>{if(!_&&A<1){const q=Math.exp(-A*S*B),le=Math.sin(N*B),ue=Math.cos(N*B),G=c-q*(L*le+y*ue),Q=ri(q*(F*le+E*ue));return u.done=Math.abs(Q)<=r&&Math.abs(c-G)<=o,u.value=u.done?c:G,u}const k=P(B);if(_)u.done=B>=v;else{const q=ri(R(B));u.done=Math.abs(q)<=r&&Math.abs(c-k)<=o}return u.value=u.done?c:k,u},toString:()=>{const B=Math.min($p(I),lu),k=ey(q=>I.next(B*q).value,B,30);return B+"ms "+k},toTransition:()=>{}};return I}cu.applyToOptions=n=>{const e=RT(n,100,cu);return n.ease=e.ease,n.duration=ri(e.duration),n.type="keyframes",n};const FT=5;function ty(n,e,t){const r=Math.max(e-FT,0);return Hp(t-n(r),e-r)}function Sh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},_=E=>u!==void 0&&E<u||d!==void 0&&E>d,M=E=>u===void 0?d:d===void 0||Math.abs(u-E)<Math.abs(d-E)?u:d;let A=t*e;const y=v+A,S=c===void 0?y:c(y);S!==y&&(A=S-v);const C=E=>-A*Math.exp(-E/r),P=E=>S+C(E),R=E=>{const I=C(E),B=P(E);g.done=Math.abs(I)<=h,g.value=g.done?S:B};let N,L;const F=E=>{_(g.value)&&(N=E,L=cu({keyframes:[g.value,M(g.value)],velocity:ty(P,E,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:E=>{let I=!1;return!L&&N===void 0&&(I=!0,R(E),F(E)),N!==void 0&&E>=N?L.next(E-N):(!I&&R(E),g)}}}function OT(n,e,t){const r=[],o=t||os.mix||J_,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||$n:e;u=ol(d,u)}r.push(u)}return r}function Kp(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Vp(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=OT(e,r,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=Bo(n[v],n[v+1],p);return u[v](g)};return t?p=>h(Oi(n[0],n[a-1],p)):h}function kT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Bo(0,e,r);n.push(kt(t,1,o))}}function ny(n){const e=[0];return kT(e,n.length-1),e}function BT(n,e){return n.map(t=>t*e)}function VT(n,e){return n.map(()=>e||G_).splice(0,n.length-1)}function qa({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=KE(r)?r.map(sv):sv(r),a={done:!1,value:e[0]},c=BT(t&&t.length===e.length?t:ny(e),n),u=Kp(c,e,{ease:Array.isArray(o)?o:VT(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const zT=n=>n!==null;function wu(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(zT),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||r===void 0?a[u]:r}const HT={decay:Sh,inertia:Sh,tween:qa,keyframes:qa,spring:cu};function iy(n){typeof n.type=="string"&&(n.type=HT[n.type])}class Zp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const GT=n=>n/100;class uu extends Zp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==kn.now()&&this.tick(kn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;iy(e);const{type:t=qa,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||qa;d!==qa&&typeof u[0]!="number"&&(this.mixKeyframes=ol(GT,J_(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=$p(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:_,type:M,onUpdate:A,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let P=this.currentTime,R=r;if(v){const E=Math.min(this.currentTime,o)/u;let I=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&I--,I=Math.min(I,v+1),!!(I%2)&&(g==="reverse"?(B=1-B,_&&(B-=_/u)):g==="mirror"&&(R=c)),P=Oi(0,1,B)*u}let N;C?(this.delayState.value=p[0],N=this.delayState):N=R.next(P),a&&!C&&(N.value=a(N.value));let{done:L}=N;!C&&d!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return F&&M!==Sh&&(N.value=wu(p,this.options,y,this.speed)),A&&A(N.value),F&&this.finish(),N}then(e,t){return this.finished.then(e,t)}get duration(){return gi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(this.currentTime)}set time(e){e=ri(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return ty(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(kn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=gi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=bT,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(kn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function WT(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Us=n=>n*180/Math.PI,Mh=n=>{const e=Us(Math.atan2(n[1],n[0]));return Eh(e)},jT={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Mh,rotateZ:Mh,skewX:n=>Us(Math.atan(n[1])),skewY:n=>Us(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Eh=n=>(n=n%360,n<0&&(n+=360),n),dv=Mh,hv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),pv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),XT={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:hv,scaleY:pv,scale:n=>(hv(n)+pv(n))/2,rotateX:n=>Eh(Us(Math.atan2(n[6],n[5]))),rotateY:n=>Eh(Us(Math.atan2(-n[2],n[0]))),rotateZ:dv,rotate:dv,skewX:n=>Us(Math.atan(n[4])),skewY:n=>Us(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Th(n){return n.includes("scale")?1:0}function wh(n,e){if(!n||n==="none")return Th(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=XT,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=jT,o=u}if(!o)return Th(e);const a=r[e],c=o[1].split(",").map(qT);return typeof a=="function"?a(c):c[a]}const YT=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return wh(t,e)};function qT(n){return parseFloat(n.trim())}const Yo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],qo=new Set([...Yo,"pathRotation"]),mv=n=>n===Xo||n===Xe,$T=new Set(["x","y","z"]),KT=Yo.filter(n=>!$T.has(n));function ZT(n){const e=[];return KT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const is={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>wh(e,"x"),y:(n,{transform:e})=>wh(e,"y")};is.translateX=is.x;is.translateY=is.y;const ks=new Set;let Ah=!1,Ch=!1,bh=!1;function ry(){if(Ch){const n=Array.from(ks).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=ZT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))==null||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Ch=!1,Ah=!1,ks.forEach(n=>n.complete(bh)),ks.clear()}function sy(){ks.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Ch=!0)})}function QT(){bh=!0,sy(),ry(),bh=!1}class Qp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(ks.add(this),Ah||(Ah=!0,wt.read(sy),wt.resolveKeyframes(ry))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}WT(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ks.delete(this)}cancel(){this.state==="scheduled"&&(ks.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const JT=n=>n.startsWith("--");function oy(n,e,t){JT(e)?n.style.setProperty(e,t):n.style[e]=t}const e1={};function Jp(n,e){const t=N_(n);return()=>e1[e]??t()}const em=Jp(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ay=Jp(()=>window.ViewTimeline!==void 0,"viewTimeline"),ly=Jp(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ga=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,gv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])};function cy(n,e){if(n)return typeof n=="function"?ly()?ey(n,e):"ease-out":W_(n)?Ga(n):Array.isArray(n)?n.map(t=>cy(t,e)||gv.easeOut):gv[n]}function t1(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=cy(u,o);Array.isArray(v)&&(p.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function uy(n){return typeof n=="function"&&"applyToOptions"in n}function n1({type:n,...e}){return uy(n)&&ly()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class fy extends Zp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Vp(typeof e.type!="string");const h=n1(e);this.animation=t1(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=wu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),oy(t,r,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return gi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ri(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&em()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),$n):o(this)}}const dy={anticipate:V_,backInOut:B_,circInOut:H_};function i1(n){return n in dy}function r1(n){typeof n.ease=="string"&&i1(n.ease)&&(n.ease=dy[n.ease])}const Ed=10;class s1 extends fy{constructor(e){r1(e),iy(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new uu({...c,autoplay:!1}),d=Math.max(Ed,kn.now()-this.startTime),h=Oi(0,Ed,d-Ed),p=u.sample(d).value,{name:v}=this.options;a&&v&&oy(a,v,p),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,p,h),u.stop()}}const vv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fi.test(n)||n==="0")&&!n.startsWith("url("));function o1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function a1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=vv(o,e),u=vv(a,e);return!c||!u?!1:o1(n)||(t==="spring"||uy(t))&&r}function Rh(n){n.duration=0,n.type="keyframes"}const hy=new Set(["opacity","clipPath","filter","transform"]),l1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function c1(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&l1.test(n[e]))return!0;return!1}const u1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),f1=N_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function d1(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:u}=n;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=e.owner.getProps();return f1()&&t&&(hy.has(t)||u1.has(t)&&c1(u))&&(t!=="transform"||!p)&&!h&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const h1=40;class p1 extends Zp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...v}){var M;super(),this.stop=()=>{var A,y;this._animation&&(this._animation.stop(),(A=this.stopTimeline)==null||A.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=kn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...v},_=(p==null?void 0:p.KeyframeResolver)||Qp;this.keyframeResolver=new _(u,(A,y,S)=>this.onKeyframesResolved(A,y,g,!S),d,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var S,C;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=r;this.resolvedAt=kn.now();let v=!0;a1(e,a,c,u)||(v=!1,(os.instantAnimations||!d)&&(p==null||p(wu(e,r,t))),e[0]=e[e.length-1],Rh(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>h1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&d1(_),A=(C=(S=_.motionValue)==null?void 0:S.owner)==null?void 0:C.current;let y;if(M)try{y=new s1({..._,element:A})}catch{y=new uu(_)}else y=new uu(_);y.finished.then(()=>{this.notifyFinished()}).catch($n),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),QT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function py(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:u-a*r}const xv=30,m1=n=>!isNaN(parseFloat(n)),$a={current:void 0};class g1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=kn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=kn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=m1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new zp);const r=this.events[e].add(t);return e==="change"?()=>{r(),wt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return $a.current&&$a.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=kn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>xv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,xv);return Hp(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ii(n,e){return new g1(n,e)}function my(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function tm(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?my(t,n):t}const v1={type:"spring",stiffness:500,damping:25,restSpeed:10},x1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),_1={type:"keyframes",duration:.8},y1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},S1=(n,{keyframes:e})=>e.length>2?_1:qo.has(n)?n.startsWith("scale")?x1(e[1]):v1:y1,M1=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function E1(n){for(const e in n)if(!M1.has(e))return!0;return!1}const nm=(n,e,t,r={},o,a)=>c=>{const u=tm(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ri(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};E1(u)||Object.assign(p,S1(n,p)),p.duration&&(p.duration=ri(p.duration)),p.repeatDelay&&(p.repeatDelay=ri(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Rh(p),p.delay===0&&(v=!0)),(os.instantAnimations||os.skipAnimations||o!=null&&o.shouldSkipAnimations||u.skipAnimations)&&(v=!0,Rh(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const g=wu(p.keyframes,u);if(g!==void 0){wt.update(()=>{p.onUpdate(g),p.onComplete()});return}}return u.isSync?new uu(p):new p1(p)},T1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function w1(n){const e=T1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function gy(n,e,t=1){const[r,o]=w1(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return D_(c)?parseFloat(c):c}return jp(o)?gy(o,e,t+1):o}function _v(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function im(n,e,t,r){if(typeof e=="function"){const[o,a]=_v(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=_v(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Bs(n,e,t){const r=n.getProps();return im(r,e,t!==void 0?t:r.custom,n)}const vy=new Set(["width","height","top","left","right","bottom",...Yo]),Ph=n=>Array.isArray(n);function A1(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ii(t))}function C1(n){return Ph(n)?n[n.length-1]||0:n}function b1(n,e){const t=Bs(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=C1(a[c]);A1(n,c,u)}}const Tn=n=>!!(n&&n.getVelocity);function R1(n){return!!(Tn(n)&&n.add)}function Dh(n,e){const t=n.getValue("willChange");if(R1(t))return t.add(e);if(!t&&os.WillChange){const r=new os.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function rm(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const P1="framerAppearId",xy="data-"+rm(P1);function _y(n){return n.props[xy]}function D1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function yy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();a=a?my(a,d):d;const h=a==null?void 0:a.reduceMotion,p=a==null?void 0:a.skipAnimations;r&&(a=r);const v=[],g=o&&n.animationState&&n.animationState.getState()[o],_=a==null?void 0:a.path;_&&_.animateVisualElement(n,u,a,t,v);for(const M in u){const A=n.getValue(M,n.latestValues[M]??null),y=u[M];if(y===void 0||g&&D1(g,M))continue;const S={delay:t,...tm(a||{},M)};p&&(S.skipAnimations=!0);const C=A.get();if(C!==void 0&&!A.isAnimating()&&!Array.isArray(y)&&y===C&&!S.velocity){wt.update(()=>A.set(y));continue}let P=!1;if(window.MotionHandoffAnimation){const L=_y(n);if(L){const F=window.MotionHandoffAnimation(L,M,wt);F!==null&&(S.startTime=F,P=!0)}}Dh(n,M);const R=h??n.shouldReduceMotion;A.start(nm(M,A,y,R&&vy.has(M)?{type:!1}:S,n,P));const N=A.animation;N&&v.push(N)}if(c){const M=()=>wt.update(()=>{c&&b1(n,c)});v.length?Promise.all(v).then(M):M()}return v}function Lh(n,e,t={}){var d;const r=Bs(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(yy(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=o;return L1(n,e,h,p,v,g,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,p]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function L1(n,e,t=0,r=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(Lh(d,e,{...c,delay:t+(typeof r=="function"?0:r)+py(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function I1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Lh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Lh(n,e,t);else{const o=typeof e=="function"?Bs(n,e,t.custom):e;r=Promise.all(yy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const N1={test:n=>n==="auto",parse:n=>n},Sy=n=>e=>e.test(n),My=[Xo,Xe,Zi,yr,cT,lT,N1],yv=n=>My.find(Sy(n));function U1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||I_(n):!0}const F1=new Set(["brightness","contrast","saturate","opacity"]);function O1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Xp)||[];if(!r)return n;const o=t.replace(r,"");let a=F1.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const k1=/\b([a-z-]*)\(.*?\)/gu,Ih={...Fi,getAnimatableNone:n=>{const e=n.match(k1);return e?e.map(O1).join(" "):n}},Nh={...Fi,getAnimatableNone:n=>{const e=Fi.parse(n);return Fi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Sv={...Xo,transform:Math.round},B1={rotate:yr,pathRotation:yr,rotateX:yr,rotateY:yr,rotateZ:yr,scale:xc,scaleX:xc,scaleY:xc,scaleZ:xc,skew:yr,skewX:yr,skewY:yr,distance:Xe,translateX:Xe,translateY:Xe,translateZ:Xe,x:Xe,y:Xe,z:Xe,perspective:Xe,transformPerspective:Xe,opacity:el,originX:av,originY:av,originZ:Xe},fu={borderWidth:Xe,borderTopWidth:Xe,borderRightWidth:Xe,borderBottomWidth:Xe,borderLeftWidth:Xe,borderRadius:Xe,borderTopLeftRadius:Xe,borderTopRightRadius:Xe,borderBottomRightRadius:Xe,borderBottomLeftRadius:Xe,width:Xe,maxWidth:Xe,height:Xe,maxHeight:Xe,top:Xe,right:Xe,bottom:Xe,left:Xe,inset:Xe,insetBlock:Xe,insetBlockStart:Xe,insetBlockEnd:Xe,insetInline:Xe,insetInlineStart:Xe,insetInlineEnd:Xe,padding:Xe,paddingTop:Xe,paddingRight:Xe,paddingBottom:Xe,paddingLeft:Xe,paddingBlock:Xe,paddingBlockStart:Xe,paddingBlockEnd:Xe,paddingInline:Xe,paddingInlineStart:Xe,paddingInlineEnd:Xe,margin:Xe,marginTop:Xe,marginRight:Xe,marginBottom:Xe,marginLeft:Xe,marginBlock:Xe,marginBlockStart:Xe,marginBlockEnd:Xe,marginInline:Xe,marginInlineStart:Xe,marginInlineEnd:Xe,fontSize:Xe,backgroundPositionX:Xe,backgroundPositionY:Xe,...B1,zIndex:Sv,fillOpacity:el,strokeOpacity:el,numOctaves:Sv},V1={...fu,color:ln,backgroundColor:ln,outlineColor:ln,fill:ln,stroke:ln,borderColor:ln,borderTopColor:ln,borderRightColor:ln,borderBottomColor:ln,borderLeftColor:ln,filter:Ih,WebkitFilter:Ih,mask:Nh,WebkitMask:Nh},Ey=n=>V1[n],z1=new Set([Ih,Nh]);function Ty(n,e){let t=Ey(n);return z1.has(t)||(t=Fi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const H1=new Set(["auto","none","0"]);function G1(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!H1.has(a)&&Vo(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Ty(t,o)}class W1 extends Qp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),jp(v))){const g=gy(v,t.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!vy.has(r)||e.length!==2)return;const[o,a]=e,c=yv(o),u=yv(a),d=ov(o),h=ov(a);if(d!==h&&is[r]){this.needsMeasurement=!0;return}if(c!==u)if(mv(c)&&mv(u))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else is[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||U1(e[o]))&&r.push(o);r.length&&G1(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=is[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=is[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function wy(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Uh=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function Ka(n){return L_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:zo,cancel:Ay}=j_(queueMicrotask,!1),Pi={x:!1,y:!1};function Cy(){return Pi.x||Pi.y}function j1(n){return n==="x"||n==="y"?Pi[n]?null:(Pi[n]=!0,()=>{Pi[n]=!1}):Pi.x||Pi.y?null:(Pi.x=Pi.y=!0,()=>{Pi.x=Pi.y=!1})}function by(n,e){const t=wy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function X1(n){return!(n.pointerType==="touch"||Cy())}function Y1(n,e,t={}){const[r,o,a]=by(n,t);return r.forEach(c=>{let u=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},v=y=>{h&&(h(y),h=void 0),p()},g=y=>{u=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(y))},_=()=>{u=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=y=>{if(y.pointerType!=="touch"){if(u){d=!0;return}v(y)}},A=y=>{if(!X1(y))return;d=!1;const S=e(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",A,o),c.addEventListener("pointerdown",_,o)}),a}const Ry=(n,e)=>e?n===e?!0:Ry(n,e.parentElement):!1,sm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,q1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $1(n){return q1.has(n.tagName)||n.isContentEditable===!0}const K1=new Set(["INPUT","SELECT","TEXTAREA"]);function Z1(n){return K1.has(n.tagName)||n.isContentEditable===!0}const qc=new WeakSet;function Mv(n){return e=>{e.key==="Enter"&&n(e)}}function Td(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const Q1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=Mv(()=>{if(qc.has(t))return;Td(t,"down");const o=Mv(()=>{Td(t,"up")}),a=()=>Td(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Ev(n){return sm(n)&&!Cy()}const Tv=new WeakSet;function J1(n,e,t={}){const[r,o,a]=by(n,t),c=u=>{const d=u.currentTarget;if(!Ev(u)||Tv.has(u))return;qc.add(d),t.stopPropagation&&Tv.add(u);const h=e(d,u),p=(_,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),qc.has(d)&&qc.delete(d),Ev(_)&&typeof h=="function"&&h(_,{success:M})},v=_=>{p(_,d===window||d===document||t.useGlobalTarget||Ry(d,_.target))},g=_=>{p(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),Ka(u)&&(u.addEventListener("focus",h=>Q1(h,o)),!$1(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function om(n){return L_(n)&&"ownerSVGElement"in n}const $c=new WeakMap;let ts;const Py=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:om(r)&&"getBBox"in r?r.getBBox()[e]:r[t],ew=Py("inline","width","offsetWidth"),tw=Py("block","height","offsetHeight");function nw({target:n,borderBoxSize:e}){var t;(t=$c.get(n))==null||t.forEach(r=>{r(n,{get width(){return ew(n,e)},get height(){return tw(n,e)}})})}function iw(n){n.forEach(nw)}function rw(){typeof ResizeObserver>"u"||(ts=new ResizeObserver(iw))}function sw(n,e){ts||rw();const t=wy(n);return t.forEach(r=>{let o=$c.get(r);o||(o=new Set,$c.set(r,o)),o.add(e),ts==null||ts.observe(r)}),()=>{t.forEach(r=>{const o=$c.get(r);o==null||o.delete(e),o!=null&&o.size||ts==null||ts.unobserve(r)})}}const Kc=new Set;let No;function ow(){No=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Kc.forEach(e=>e(n))},window.addEventListener("resize",No)}function aw(n){return Kc.add(n),No||ow(),()=>{Kc.delete(n),!Kc.size&&typeof No=="function"&&(window.removeEventListener("resize",No),No=void 0)}}function Fh(n,e){return typeof n=="function"?aw(n):sw(n,e)}function Dy(n,e){let t;const r=()=>{const{currentTime:o}=e,c=(o===null?0:o.value)/100;t!==c&&n(c),t=c};return wt.preUpdate(r,!0),()=>vi(r)}function lw(n){return om(n)&&n.tagName==="svg"}function cw(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=Kp(o,a,c);return e?u(r):u}const uw=[...My,ln,Fi],fw=n=>uw.find(Sy(n)),wv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Uo=()=>({x:wv(),y:wv()}),Av=()=>({min:0,max:0}),fn=()=>({x:Av(),y:Av()}),dw=new WeakMap;function Au(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function tl(n){return typeof n=="string"||Array.isArray(n)}const am=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],lm=["initial",...am];function Cu(n){return Au(n.animate)||lm.some(e=>tl(n[e]))}function Ly(n){return!!(Cu(n)||n.variants)}function hw(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Tn(o))n.addValue(r,o);else if(Tn(a))n.addValue(r,Ii(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Ii(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Oh={current:null},Iy={current:!1},pw=typeof window<"u";function mw(){if(Iy.current=!0,!!pw)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Oh.current=n.matches;n.addEventListener("change",e),e()}else Oh.current=!1}const Cv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let du={};function Ny(n){du=n}function gw(){return du}class vw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Qp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=kn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,wt.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Cu(t),this.isVariantNode=Ly(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in g){const M=g[_];h[_]!==void 0&&Tn(M)&&M.set(h[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,dw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Iy.current||mw(),this.shouldReduceMotion=Oh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),vi(this.notifyUpdate),vi(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&hy.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:p}=t.accelerate,v=new fy({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:ri(p)}),g=c(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=qo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&wt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in du){const t=du[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):fn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Cv.length;r++){const o=Cv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=hw(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ii(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(D_(r)||I_(r))?r=parseFloat(r):!fw(r)&&Fi.test(t)&&(r=Ty(e,t)),this.setBaseTarget(e,Tn(r)?r.get():r)),Tn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=im(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Tn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new zp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){zo.render(this.render)}}class Uy extends vw{constructor(){super(...arguments),this.KeyframeResolver=W1}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Tn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ls{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Fy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function xw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function _w(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function wd(n){return n===void 0||n===1}function kh({scale:n,scaleX:e,scaleY:t}){return!wd(n)||!wd(e)||!wd(t)}function Rs(n){return kh(n)||Oy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Oy(n){return bv(n.x)||bv(n.y)}function bv(n){return n&&n!=="0%"}function hu(n,e,t){const r=n-t,o=e*r;return t+o}function Rv(n,e,t,r,o){return o!==void 0&&(n=hu(n,o,r)),hu(n,t,r)+e}function Bh(n,e=0,t=1,r,o){n.min=Rv(n.min,e,t,r,o),n.max=Rv(n.max,e,t,r,o)}function ky(n,{x:e,y:t}){Bh(n.x,e.translate,e.scale,e.originPoint),Bh(n.y,t.translate,t.scale,t.originPoint)}const Pv=.999999999999,Dv=1.0000000000001;function yw(n,e,t,r=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let d=0;d<o;d++){a=t[d],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Yi(n.x,-a.scroll.offset.x),Yi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,ky(n,c)),r&&Rs(a.latestValues)&&Zc(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<Dv&&e.x>Pv&&(e.x=1),e.y<Dv&&e.y>Pv&&(e.y=1)}function Yi(n,e){n.min+=e,n.max+=e}function Lv(n,e,t,r,o=.5){const a=kt(n.min,n.max,o);Bh(n,e,t,a,r)}function Iv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Zc(n,e,t){const r=t??n;Lv(n.x,Iv(e.x,r.x),e.scaleX,e.scale,e.originX),Lv(n.y,Iv(e.y,r.y),e.scaleY,e.scale,e.originY)}function By(n,e){return Fy(_w(n.getBoundingClientRect(),e))}function Sw(n,e,t){const r=By(n,t),{scroll:o}=e;return o&&(Yi(r.x,o.offset.x),Yi(r.y,o.offset.y)),r}const Mw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ew=Yo.length;function Tw(n,e,t){let r="",o=!0;for(let c=0;c<Ew;c++){const u=Yo[c],d=n[u];if(d===void 0)continue;let h=!0;if(typeof d=="number")h=d===(u.startsWith("scale")?1:0);else{const p=parseFloat(d);h=u.startsWith("scale")?p===1:p===0}if(!h||t){const p=Uh(d,fu[u]);if(!h){o=!1;const v=Mw[u]||u;r+=`${v}(${p}) `}t&&(e[u]=p)}}const a=n.pathRotation;return a&&(o=!1,r+=`rotate(${Uh(a,fu.pathRotation)}) `),r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function cm(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(qo.has(d)){c=!0;continue}else if(Y_(d)){o[d]=h;continue}else{const p=Uh(h,fu[d]);d.startsWith("origin")?(u=!0,a[d]=p):r[d]=p}}if(e.transform||(c||t?r.transform=Tw(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}function Vy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function Nv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Na={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Xe.test(n))n=parseFloat(n);else return n;const t=Nv(n,e.target.x),r=Nv(n,e.target.y);return`${t}% ${r}%`}},ww={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Fi.parse(n);if(o.length>5)return r;const a=Fi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=kt(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},Vh={borderRadius:{...Na,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Na,borderTopRightRadius:Na,borderBottomLeftRadius:Na,borderBottomRightRadius:Na,boxShadow:ww};function zy(n,{layout:e,layoutId:t}){return qo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Vh[n]||n==="opacity")}function um(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const u in r)(Tn(r[u])||o&&Tn(o[u])||zy(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=r[u]);return a}function Aw(n){return window.getComputedStyle(n)}class Cw extends Uy{constructor(){super(...arguments),this.type="html",this.renderInstance=Vy}readValueFromInstance(e,t){var r;if(qo.has(t))return(r=this.projection)!=null&&r.isProjecting?Th(t):YT(e,t);{const o=Aw(e),a=(Y_(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return By(e,t)}build(e,t,r){cm(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return um(e,t,r)}}const bw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Rw={offset:"strokeDashoffset",array:"strokeDasharray"};function Pw(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?bw:Rw;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const Dw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Hy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(cm(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const _ of Dw)v[_]!==void 0&&(g[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&Pw(v,o,a,c,!1)}const Gy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Wy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Lw(n,e,t,r){Vy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Gy.has(o)?o:rm(o),e.attrs[o])}function jy(n,e,t){const r=um(n,e,t);for(const o in n)if(Tn(n[o])||Tn(e[o])){const a=Yo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class Iw extends Uy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=fn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(qo.has(t)){const r=Ey(t);return r&&r.default||0}return t=Gy.has(t)?t:rm(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return jy(e,t,r)}build(e,t,r){Hy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Lw(e,t,r,o)}mount(e){this.isSVGTag=Wy(e.tagName),super.mount(e)}}const Nw=lm.length;function Xy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Xy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Nw;t++){const r=lm[t],o=n.props[r];(tl(o)||o===!1)&&(e[r]=o)}return e}function Yy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const Uw=[...am].reverse(),Fw=am.length;function Ow(n){return e=>Promise.all(e.map(({animation:t,options:r})=>I1(n,t,r)))}function kw(n){let e=Ow(n),t=Uv(),r=!0,o=!1;const a=h=>(p,v)=>{var _;const g=Bs(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(g){const{transition:M,transitionEnd:A,...y}=g;p={...p,...y,...A}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,v=Xy(n.parent)||{},g=[],_=new Set;let M={},A=1/0;for(let S=0;S<Fw;S++){const C=Uw[S],P=t[C],R=p[C]!==void 0?p[C]:v[C],N=tl(R),L=C===h?P.isActive:null;L===!1&&(A=S);let F=R===v[C]&&R!==p[C]&&N;if(F&&(r||o)&&n.manuallyAnimateOnMount&&(F=!1),P.protectedKeys={...M},!P.isActive&&L===null||!R&&!P.prevProp||Au(R)||typeof R=="boolean")continue;if(C==="exit"&&P.isActive&&L!==!0){P.prevResolvedValues&&(M={...M,...P.prevResolvedValues});continue}const E=Bw(P.prevProp,R);let I=E||C===h&&P.isActive&&!F&&N||S>A&&N,B=!1;const k=Array.isArray(R)?R:[R];let q=k.reduce(a(C),{});L===!1&&(q={});const{prevResolvedValues:le={}}=P,ue={...le,...q},G=X=>{I=!0,_.has(X)&&(B=!0,_.delete(X)),P.needsAnimating[X]=!0;const ie=n.getValue(X);ie&&(ie.liveStyle=!1)};for(const X in ue){const ie=q[X],se=le[X];if(M.hasOwnProperty(X))continue;let O=!1;Ph(ie)&&Ph(se)?O=!Yy(ie,se)||E:O=ie!==se,O?ie!=null?G(X):_.add(X):ie!==void 0&&_.has(X)?G(X):P.protectedKeys[X]=!0}P.prevProp=R,P.prevResolvedValues=q,P.isActive&&(M={...M,...q}),(r||o)&&n.blockInitialAnimation&&(I=!1);const Q=F&&E;I&&(!Q||B)&&g.push(...k.map(X=>{const ie={type:C};if(typeof X=="string"&&(r||o)&&!Q&&n.manuallyAnimateOnMount&&n.parent){const{parent:se}=n,O=Bs(se,X);if(se.enteringChildren&&O){const{delayChildren:J}=O.transition||{};ie.delay=py(se.enteringChildren,n,J)}}return{animation:X,options:ie}}))}if(_.size){const S={};if(typeof p.initial!="boolean"){const C=Bs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);C&&C.transition&&(S.transition=C.transition)}_.forEach(C=>{const P=n.getBaseTarget(C),R=n.getValue(C);R&&(R.liveStyle=!0),S[C]=P??null}),g.push({animation:S})}let y=!!g.length;return r&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(g):Promise.resolve()}function d(h,p){var g;if(t[h].isActive===p)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,p)}),t[h].isActive=p;const v=u(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Uv(),o=!0}}}function Bw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Yy(e,n):!1}function Ts(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Uv(){return{animate:Ts(!0),whileInView:Ts(),whileHover:Ts(),whileTap:Ts(),whileDrag:Ts(),whileFocus:Ts(),exit:Ts()}}function zh(n,e){n.min=e.min,n.max=e.max}function Ai(n,e){zh(n.x,e.x),zh(n.y,e.y)}function Fv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const qy=1e-4,Vw=1-qy,zw=1+qy,$y=.01,Hw=0-$y,Gw=0+$y;function Bn(n){return n.max-n.min}function Ww(n,e,t){return Math.abs(n-e)<=t}function Ov(n,e,t,r=.5){n.origin=r,n.originPoint=kt(e.min,e.max,n.origin),n.scale=Bn(t)/Bn(e),n.translate=kt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Vw&&n.scale<=zw||isNaN(n.scale))&&(n.scale=1),(n.translate>=Hw&&n.translate<=Gw||isNaN(n.translate))&&(n.translate=0)}function Za(n,e,t,r){Ov(n.x,e.x,t.x,r?r.originX:void 0),Ov(n.y,e.y,t.y,r?r.originY:void 0)}function kv(n,e,t,r=0){const o=r?kt(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+Bn(e)}function jw(n,e,t,r){kv(n.x,e.x,t.x,r==null?void 0:r.x),kv(n.y,e.y,t.y,r==null?void 0:r.y)}function Bv(n,e,t,r=0){const o=r?kt(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+Bn(e)}function pu(n,e,t,r){Bv(n.x,e.x,t.x,r==null?void 0:r.x),Bv(n.y,e.y,t.y,r==null?void 0:r.y)}function Vv(n,e,t,r,o){return n-=e,n=hu(n,1/t,r),o!==void 0&&(n=hu(n,1/o,r)),n}function Xw(n,e=0,t=1,r=.5,o,a=n,c=n){if(Zi.test(e)&&(e=parseFloat(e),e=kt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=kt(a.min,a.max,r);n===a&&(u-=e),n.min=Vv(n.min,e,t,u,o),n.max=Vv(n.max,e,t,u,o)}function zv(n,e,[t,r,o],a,c){Xw(n,e[t],e[r],e[o],e.scale,a,c)}const Yw=["x","scaleX","originX"],qw=["y","scaleY","originY"];function Hv(n,e,t,r){zv(n.x,e,Yw,t?t.x:void 0,r?r.x:void 0),zv(n.y,e,qw,t?t.y:void 0,r?r.y:void 0)}function Gv(n){return n.translate===0&&n.scale===1}function Ky(n){return Gv(n.x)&&Gv(n.y)}function Wv(n,e){return n.min===e.min&&n.max===e.max}function $w(n,e){return Wv(n.x,e.x)&&Wv(n.y,e.y)}function jv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Zy(n,e){return jv(n.x,e.x)&&jv(n.y,e.y)}function Xv(n){return Bn(n.x)/Bn(n.y)}function Yv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Xi(n){return[n("x"),n("y")]}function Kw(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,pathRotation:v,rotateX:g,rotateY:_,skewX:M,skewY:A}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotate(${v}deg) `),g&&(r+=`rotateX(${g}deg) `),_&&(r+=`rotateY(${_}deg) `),M&&(r+=`skewX(${M}deg) `),A&&(r+=`skewY(${A}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const Qy=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Zw=Qy.length,qv=n=>typeof n=="string"?parseFloat(n):n,$v=n=>typeof n=="number"||Xe.test(n);function Qw(n,e,t,r,o,a){o?(n.opacity=kt(0,t.opacity??1,Jw(r)),n.opacityExit=kt(e.opacity??1,0,eA(r))):a&&(n.opacity=kt(e.opacity??1,t.opacity??1,r));for(let c=0;c<Zw;c++){const u=Qy[c];let d=Kv(e,u),h=Kv(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||$v(d)===$v(h)?(n[u]=Math.max(kt(qv(d),qv(h),r),0),(Zi.test(h)||Zi.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=kt(e.rotate||0,t.rotate||0,r))}function Kv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Jw=Jy(0,.5,z_),eA=Jy(.5,.95,$n);function Jy(n,e,t){return r=>r<n?0:r>e?1:t(Bo(n,e,r))}function tA(n,e,t){const r=Tn(n)?n:Ii(n);return r.start(nm("",r,e,t)),r.animation}function nl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const nA=(n,e)=>n.depth-e.depth;class iA{constructor(){this.children=[],this.isDirty=!1}add(e){Bp(this.children,e),this.isDirty=!0}remove(e){ou(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nA),this.isDirty=!1,this.children.forEach(e)}}function rA(n,e){const t=kn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(vi(r),n(a-e))};return wt.setup(r,!0),()=>vi(r)}function Qc(n){return Tn(n)?n.get():n}class sA{constructor(){this.members=[]}add(e){Bp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(ou(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(ou(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Jc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ad=["","X","Y","Z"],oA=1e3;let aA=0;function Cd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function eS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=_y(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",wt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&eS(r)}function tS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=aA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(uA),this.nodes.forEach(gA),this.nodes.forEach(vA),this.nodes.forEach(fA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new iA)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new zp),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=om(c)&&!lw(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,v=0;const g=()=>this.root.updateBlockedByResize=!1;wt.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=rA(g,250),Jc.hasAnimatedSinceResize&&(Jc.hasAnimatedSinceResize=!1,this.nodes.forEach(Jv)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||MA,{onLayoutAnimationStart:A,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!Zy(this.targetLayout,_),C=!v&&g;if(this.options.layoutRoot||this.resumeFrom||C||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...tm(M,"layout"),onPlay:A,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(p,C,P.path)}else v||Jv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),vi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&eS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(hA),this.nodes.forEach(Zv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Qv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(pA),this.nodes.forEach(mA),this.nodes.forEach(lA),this.nodes.forEach(cA)):this.nodes.forEach(Qv),this.clearAllSnapshots();const u=kn.now();_n.delta=Oi(0,1e3/60,u-_n.timestamp),_n.timestamp=u,_n.isProcessing=!0,xd.update.process(_n),xd.preRender.process(_n),xd.render.process(_n),_n.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,zo.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(dA),this.sharedNodes.forEach(_A)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,wt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){wt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Bn(this.snapshot.measuredBox.x)&&!Bn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=fn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Ky(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Rs(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),EA(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return fn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(TA))){const{scroll:p}=this.root;p&&(Yi(u.x,p.offset.x),Yi(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=fn();if(Ai(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:g}=p;p!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ai(u,c),Yi(u.x,v.offset.x),Yi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,d){var p,v;const h=d||fn();Ai(h,c);for(let g=0;g<this.path.length;g++){const _=this.path[g];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Yi(h.x,-_.scroll.offset.x),Yi(h.y,-_.scroll.offset.y)),Rs(_.latestValues)&&Zc(h,_.latestValues,(p=_.layout)==null?void 0:p.layoutBox)}return Rs(this.latestValues)&&Zc(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var d;const u=fn();Ai(u,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!Rs(p.latestValues))continue;let v;p.instance&&(kh(p.latestValues)&&p.updateSnapshot(),v=fn(),Ai(v,p.measurePageBox())),Hv(u,p.latestValues,(d=p.snapshot)==null?void 0:d.layoutBox,v)}return Rs(this.latestValues)&&Hv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==_n.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=_n.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=fn(),this.targetWithTransforms=fn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),jw(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ai(this.target,this.layout.layoutBox),ky(this.target,this.targetDelta)):Ai(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||kh(this.parent.latestValues)||Oy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=fn(),this.relativeTargetOrigin=fn(),pu(this.relativeTargetOrigin,u,d,this.options.layoutAnchor||void 0),Ai(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===_n.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ai(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;yw(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=fn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Fv(this.prevProjectionDelta.x,this.projectionDelta.x),Fv(this.prevProjectionDelta.y,this.projectionDelta.y)),Za(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Yv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Yv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Uo(),this.projectionDelta=Uo(),this.projectionDeltaWithTransform=Uo()}setAnimationOrigin(c,u=!1,d){const h=this.snapshot,p=h?h.latestValues:{},v={...this.latestValues},g=Uo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const _=fn(),M=h?h.source:void 0,A=this.layout?this.layout.source:void 0,y=M!==A,S=this.getStack(),C=!S||S.members.length<=1,P=!!(y&&!C&&this.options.crossfade===!0&&!this.path.some(SA));this.animationProgress=0;let R;const N=d==null?void 0:d.interpolateProjection(c);this.mixTargetDelta=L=>{const F=L/1e3,E=N==null?void 0:N(F);E?(g.x.translate=E.x,g.x.scale=kt(c.x.scale,1,F),g.x.origin=c.x.origin,g.x.originPoint=c.x.originPoint,g.y.translate=E.y,g.y.scale=kt(c.y.scale,1,F),g.y.origin=c.y.origin,g.y.originPoint=c.y.originPoint):(ex(g.x,c.x,F),ex(g.y,c.y,F)),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(pu(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yA(this.relativeTarget,this.relativeTargetOrigin,_,F),R&&$w(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=fn()),Ai(R,this.relativeTarget)),y&&(this.animationValues=v,Qw(v,p,this.latestValues,F,P,C)),E&&E.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=E.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(vi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=wt.update(()=>{Jc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ii(0)),this.motionValue.jump(0,!1),this.currentAnimation=tA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(oA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&nS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||fn();const v=Bn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=Bn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ai(u,d),Zc(u,p),Za(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new sA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Cd("z",c,h,this.animationValues);for(let p=0;p<Ad.length;p++)Cd(`rotate${Ad[p]}`,c,h,this.animationValues),Cd(`skew${Ad[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=Qc(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=Qc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Rs(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=Kw(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),c.transform=v;const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in Vh){if(p[M]===void 0)continue;const{correct:A,applyTo:y,isCSSVariable:S}=Vh[M],C=v==="none"?p[M]:A(p[M],h);if(y){const P=y.length;for(let R=0;R<P;R++)c[y[R]]=C}else S?this.options.visualElement.renderState.vars[M]=C:c[M]=C}this.options.layoutId&&(c.pointerEvents=h===this?Qc(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(Zv),this.root.sharedNodes.clear()}}}function lA(n){n.updateLayout()}function cA(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Xi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=Bn(g);g.min=r[v].min,g.max=g.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";zh(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else nS(a,e.layoutBox,r)&&Xi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=Bn(r[v]);g.max=g.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const u=Uo();Za(u,r,e.layoutBox);const d=Uo();c?Za(d,n.applyTransform(o,!0),e.measuredBox):Za(d,r,e.layoutBox);const h=!Ky(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:_}=v;if(g&&_){const M=n.options.layoutAnchor||void 0,A=fn();pu(A,e.layoutBox,g.layoutBox,M);const y=fn();pu(y,r,_.layoutBox,M),Zy(A,y)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=A,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function uA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function fA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function dA(n){n.clearSnapshot()}function Zv(n){n.clearMeasurements()}function hA(n){n.isLayoutDirty=!0,n.updateLayout()}function Qv(n){n.isLayoutDirty=!1}function pA(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function mA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Jv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function gA(n){n.resolveTargetDelta()}function vA(n){n.calcProjection()}function xA(n){n.resetSkewAndRotation()}function _A(n){n.removeLeadSnapshot()}function ex(n,e,t){n.translate=kt(e.translate,0,t),n.scale=kt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function tx(n,e,t,r){n.min=kt(e.min,t.min,r),n.max=kt(e.max,t.max,r)}function yA(n,e,t,r){tx(n.x,e.x,t.x,r),tx(n.y,e.y,t.y,r)}function SA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const MA={duration:.45,ease:[.4,0,.1,1]},nx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ix=nx("applewebkit/")&&!nx("chrome/")?Math.round:$n;function rx(n){n.min=ix(n.min),n.max=ix(n.max)}function EA(n){rx(n.x),rx(n.y)}function nS(n,e,t){return n==="position"||n==="preserve-aspect"&&!Ww(Xv(e),Xv(t),.2)}function TA(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const wA=tS({attachResizeListener:(n,e)=>nl(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bd={current:void 0},iS=tS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!bd.current){const n=new wA({});n.mount(window),n.setOptions({layoutScroll:!0}),bd.current=n}return bd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),bu=Re.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function sx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function AA(...n){return e=>{let t=!1;const r=n.map(o=>{const a=sx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():sx(n[o],null)}}}}function CA(...n){return Re.useCallback(AA(...n),n)}class bA extends Re.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(Ka(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=Ka(r)&&r.offsetWidth||0,a=Ka(r)&&r.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top,u.direction=c.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function RA({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var g;const c=Re.useId(),u=Re.useRef(null),d=Re.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:h}=Re.useContext(bu),p=((g=n.props)==null?void 0:g.ref)??(n==null?void 0:n.ref),v=CA(u,p);return Re.useInsertionEffect(()=>{const{width:_,height:M,top:A,left:y,right:S,bottom:C,direction:P}=d.current;if(e||a===!1||!u.current||!_||!M)return;const R=P==="rtl",N=t==="left"?R?`right: ${S}`:`left: ${y}`:R?`left: ${y}`:`right: ${S}`,L=r==="bottom"?`bottom: ${C}`:`top: ${A}`;u.current.dataset.motionPopId=c;const F=document.createElement("style");h&&(F.nonce=h);const E=o??document.head;return E.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${N}px !important;
            ${L}px !important;
          }
        `),()=>{var I;(I=u.current)==null||I.removeAttribute("data-motion-pop-id"),E.contains(F)&&E.removeChild(F)}},[e]),V.jsx(bA,{isPresent:e,childRef:u,sizeRef:d,pop:a,children:a===!1?n:Re.cloneElement(n,{ref:v})})}const PA=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:d,root:h})=>{const p=ss(DA),v=Re.useId();let g=!0,_=Re.useMemo(()=>(g=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:M=>{p.set(M,!0);for(const A of p.values())if(!A)return;r&&r()},register:M=>(p.set(M,!1),()=>p.delete(M))}),[t,p,r]);return a&&g&&(_={..._}),Re.useMemo(()=>{p.forEach((M,A)=>p.set(A,!1))},[t]),Re.useEffect(()=>{!t&&!p.size&&r&&r()},[t]),n=V.jsx(RA,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:d,root:h,children:n}),V.jsx(Tu.Provider,{value:_,children:n})};function DA(){return new Map}function rS(n=!0){const e=Re.useContext(Tu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Re.useId();Re.useEffect(()=>{if(n)return o(a)},[n]);const c=Re.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const _c=n=>n.key||"";function ox(n){const e=[];return Re.Children.forEach(n,t=>{Re.isValidElement(t)&&e.push(t)}),e}const LA=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:d="top",root:h})=>{const[p,v]=rS(c),g=Re.useMemo(()=>ox(n),[n]),_=c&&!p?[]:g.map(_c),M=Re.useRef(!0),A=Re.useRef(g),y=ss(()=>new Map),S=Re.useRef(new Set),[C,P]=Re.useState(g),[R,N]=Re.useState(g);Eu(()=>{M.current=!1,A.current=g;for(let E=0;E<R.length;E++){const I=_c(R[E]);_.includes(I)?(y.delete(I),S.current.delete(I)):y.get(I)!==!0&&y.set(I,!1)}},[R,_.length,_.join("-")]);const L=[];if(g!==C){let E=[...g];for(let I=0;I<R.length;I++){const B=R[I],k=_c(B);_.includes(k)||(E.splice(I,0,B),L.push(B))}return a==="wait"&&L.length&&(E=L),N(ox(E)),P(g),null}const{forceRender:F}=Re.useContext(kp);return V.jsx(V.Fragment,{children:R.map(E=>{const I=_c(E),B=c&&!p?!1:g===R||_.includes(I),k=()=>{if(S.current.has(I))return;if(y.has(I))S.current.add(I),y.set(I,!0);else return;let q=!0;y.forEach(le=>{le||(q=!1)}),q&&(F==null||F(),N(A.current),c&&(v==null||v()),r&&r())};return V.jsx(PA,{isPresent:B,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:B?void 0:k,anchorX:u,anchorY:d,children:E},I)})})},sS=Re.createContext({strict:!1}),ax={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let lx=!1;function IA(){if(lx)return;const n={};for(const e in ax)n[e]={isEnabled:t=>ax[e].some(r=>!!t[r])};Ny(n),lx=!0}function oS(){return IA(),gw()}function NA(n){const e=oS();for(const t in n)e[t]={...e[t],...n[t]};Ny(e)}const UA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function mu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||UA.has(n)}let aS=n=>!mu(n);function FA(n){typeof n=="function"&&(aS=e=>e.startsWith("on")?!mu(e):n(e))}try{FA(require("@emotion/is-prop-valid").default)}catch{}function OA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||Tn(n[o])||(aS(o)||t===!0&&mu(o)||!e&&!mu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Ru=Re.createContext({});function kA(n,e){if(Cu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||tl(t)?t:void 0,animate:tl(r)?r:void 0}}return n.inherit!==!1?e:{}}function BA(n){const{initial:e,animate:t}=kA(n,Re.useContext(Ru));return Re.useMemo(()=>({initial:e,animate:t}),[cx(e),cx(t)])}function cx(n){return Array.isArray(n)?n.join(" "):n}const fm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function lS(n,e,t){for(const r in e)!Tn(e[r])&&!zy(r,t)&&(n[r]=e[r])}function VA({transformTemplate:n},e){return Re.useMemo(()=>{const t=fm();return cm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function zA(n,e){const t=n.style||{},r={};return lS(r,t,n),Object.assign(r,VA(n,e)),r}function HA(n,e){const t={},r=zA(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const cS=()=>({...fm(),attrs:{}});function GA(n,e,t,r){const o=Re.useMemo(()=>{const a=cS();return Hy(a,e,Wy(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};lS(a,n.style,n),o.style={...a,...o.style}}return o}const WA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dm(n){return typeof n!="string"||n.includes("-")?!1:!!(WA.indexOf(n)>-1||/[A-Z]/u.test(n))}function jA(n,e,t,{latestValues:r},o,a=!1,c){const d=(c??dm(n)?GA:HA)(e,r,o,n),h=OA(e,typeof n=="string",a),p=n!==Re.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=Re.useMemo(()=>Tn(v)?v.get():v,[v]);return Re.createElement(n,{...p,children:g})}function XA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:YA(t,r,o,n),renderState:e()}}function YA(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=Qc(a[g]);let{initial:c,animate:u}=n;const d=Cu(n),h=Ly(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Au(v)){const g=Array.isArray(v)?v:[v];for(let _=0;_<g.length;_++){const M=im(n,g[_]);if(M){const{transitionEnd:A,transition:y,...S}=M;for(const C in S){let P=S[C];if(Array.isArray(P)){const R=p?P.length-1:0;P=P[R]}P!==null&&(o[C]=P)}for(const C in A)o[C]=A[C]}}}return o}const uS=n=>(e,t)=>{const r=Re.useContext(Ru),o=Re.useContext(Tu),a=()=>XA(n,e,r,o);return t?a():ss(a)},qA=uS({scrapeMotionValuesFromProps:um,createRenderState:fm}),$A=uS({scrapeMotionValuesFromProps:jy,createRenderState:cS}),KA=Symbol.for("motionComponentSymbol");function ZA(n,e,t){const r=Re.useRef(t);Re.useInsertionEffect(()=>{r.current=t});const o=Re.useRef(null);return Re.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a)),e&&(a?e.mount(a):e.unmount());const c=r.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a)},[e])}const fS=Re.createContext({});function Lo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function QA(n,e,t,r,o,a){var P,R;const{visualElement:c}=Re.useContext(Ru),u=Re.useContext(sS),d=Re.useContext(Tu),h=Re.useContext(bu),p=h.reducedMotion,v=h.skipAnimations,g=Re.useRef(null),_=Re.useRef(!1);r=r||u.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:a}),_.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,A=Re.useContext(fS);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&JA(g.current,t,o,A);const y=Re.useRef(!1);Re.useInsertionEffect(()=>{M&&y.current&&M.update(t,d)});const S=t[xy],C=Re.useRef(!!S&&typeof window<"u"&&!((P=window.MotionHandoffIsComplete)!=null&&P.call(window,S))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,S)));return Eu(()=>{_.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),C.current&&M.animationState&&M.animationState.animateChanges())}),Re.useEffect(()=>{M&&(!C.current&&M.animationState&&M.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var N;(N=window.MotionHandoffMarkAsComplete)==null||N.call(window,S)}),C.current=!1),M.enteringChildren=void 0)}),M}function JA(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutAnchor:p,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:dS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Lo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:p})}function dS(n){if(n)return n.options.allowProjection!==!1?n.projection:dS(n.parent)}function Rd(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&NA(r);const a=t?t==="svg":dm(n),c=a?$A:qA;function u(h,p){let v;const g={...Re.useContext(bu),...h,layoutId:eC(h)},{isStatic:_}=g,M=BA(h),A=c(h,_);if(!_&&typeof window<"u"){tC();const y=nC(g);v=y.MeasureLayout,M.visualElement=QA(n,A,g,o,y.ProjectionNode,a)}return V.jsxs(Ru.Provider,{value:M,children:[v&&M.visualElement?V.jsx(v,{visualElement:M.visualElement,...g}):null,jA(n,h,ZA(A,M.visualElement,p),A,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=Re.forwardRef(u);return d[KA]=n,d}function eC({layoutId:n}){const e=Re.useContext(kp).id;return e&&n!==void 0?e+"-"+n:n}function tC(n,e){Re.useContext(sS).strict}function nC(n){const e=oS(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function iC(n,e){if(typeof Proxy>"u")return Rd;const t=new Map,r=(a,c)=>Rd(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Rd(c,void 0,n,e)),t.get(c))})}const rC=(n,e)=>e.isSVG??dm(n)?new Iw(e):new Cw(e,{allowProjection:n!==Re.Fragment});class sC extends ls{constructor(e){super(e),e.animationState||(e.animationState=kw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Au(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let oC=0;class aC extends ls{constructor(){super(...arguments),this.id=oC++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"||typeof c=="object"&&c!==null&&!Array.isArray(c)){const d=Bs(this.node,c,u);if(d){const{transition:h,transitionEnd:p,...v}=d;for(const g in v)(a=this.node.getValue(g))==null||a.jump(v[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const lC={animation:{Feature:sC},exit:{Feature:aC}};function cl(n){return{point:{x:n.pageX,y:n.pageY}}}const cC=n=>e=>sm(e)&&n(e,cl(e));function Qa(n,e,t,r){return nl(n,e,cC(t),r)}const hS=({current:n})=>n?n.ownerDocument.defaultView:null,ux=(n,e)=>Math.abs(n-e);function uC(n,e){const t=ux(n.x,e.x),r=ux(n.y,e.y);return Math.sqrt(t**2+r**2)}const fx=new Set(["auto","scroll"]);class pS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=yc(this.lastRawMoveEventInfo,this.transformPagePoint));const _=Pd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,A=uC(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!A)return;const{point:y}=_,{timestamp:S}=_n;this.history.push({...y,timestamp:S});const{onStart:C,onMove:P}=this.handlers;M||(C&&C(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,_)},this.handlePointerMove=(_,M)=>{this.lastMoveEvent=_,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=yc(M,this.transformPagePoint),wt.update(this.updatePoint,!0)},this.handlePointerUp=(_,M)=>{this.end();const{onEnd:A,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Pd(_.type==="pointercancel"?this.lastMoveEventInfo:yc(M,this.transformPagePoint),this.history);this.startEvent&&A&&A(_,C),y&&y(_,C)},!sm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const d=cl(e),h=yc(d,this.transformPagePoint),{point:p}=h,{timestamp:v}=_n;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,Pd(h,this.history)),this.removeListeners=ol(Qa(this.contextWindow,"pointermove",this.handlePointerMove),Qa(this.contextWindow,"pointerup",this.handlePointerUp),Qa(this.contextWindow,"pointercancel",this.handlePointerUp)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(fx.has(r.overflowX)||fx.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),wt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),vi(this.updatePoint)}}function yc(n,e){return e?{point:e(n.point)}:n}function dx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Pd({point:n},e){return{point:n,delta:dx(n,mS(e)),offset:dx(n,fC(e)),velocity:dC(e,.1)}}function fC(n){return n[0]}function mS(n){return n[n.length-1]}function dC(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=mS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ri(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ri(e)*2&&(r=n[1]);const a=gi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function hC(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?kt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?kt(t,n,r.max):Math.min(n,t)),n}function hx(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function pC(n,{top:e,left:t,bottom:r,right:o}){return{x:hx(n.x,t,o),y:hx(n.y,e,r)}}function px(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function mC(n,e){return{x:px(n.x,e.x),y:px(n.y,e.y)}}function gC(n,e){let t=.5;const r=Bn(n),o=Bn(e);return o>r?t=Bo(e.min,e.max-r,n.min):r>o&&(t=Bo(n.min,n.max-o,e.min)),Oi(0,1,t)}function vC(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Hh=.35;function xC(n=Hh){return n===!1?n=0:n===!0&&(n=Hh),{x:mx(n,"left","right"),y:mx(n,"top","bottom")}}function mx(n,e,t){return{min:gx(n,e),max:gx(n,t)}}function gx(n,e){return typeof n=="number"?n:n[e]||0}const _C=new WeakMap;class yC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=fn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(cl(v).point),this.stopAnimation()},c=(v,g)=>{const{drag:_,dragPropagation:M,onDragStart:A}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=j1(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xi(S=>{let C=this.getAxisMotionValue(S).get()||0;if(Zi.test(C)){const{projection:P}=this.visualElement;if(P&&P.layout){const R=P.layout.layoutBox[S];R&&(C=Bn(R)*(parseFloat(C)/100))}}this.originPoint[S]=C}),A&&wt.update(()=>A(v,g),!1,!0),Dh(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},u=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:A,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=g;if(M&&this.currentDirection===null){this.currentDirection=MC(S),this.currentDirection!==null&&A&&A(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),y&&wt.update(()=>y(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new pS(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:hS(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&wt.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Sc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=hC(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Lo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=pC(r.layoutBox,e):this.constraints=!1,this.elastic=xC(t),o!==this.constraints&&!Lo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Xi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=vC(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Lo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const a=Sw(r,o.root,this.visualElement.getTransformPagePoint());let c=mC(o.layout.layoutBox,a);if(t){const u=t(xw(c));this.hasMutatedConstraints=!!u,u&&(c=Fy(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Xi(p=>{if(!Sc(p,t,this.currentDirection))return;let v=d&&d[p]||{};(c===!0||c===p)&&(v={min:0,max:0});const g=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Dh(this.visualElement,e),r.start(nm(e,r,0,t,this.visualElement,!1))}stopAnimation(){Xi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[t];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Xi(t=>{const{drag:r}=this.getProps();if(!Sc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-kt(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Lo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Xi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=gC({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xi(c=>{if(!Sc(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(kt(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;_C.set(this.visualElement,this);const e=this.visualElement.current,t=Qa(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),g=h.target,_=g!==e&&Z1(g);p&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();Lo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=SC(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),wt.read(o);const u=nl(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Xi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Hh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function vx(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function SC(n,e,t){const r=Fh(n,vx(t)),o=Fh(e,vx(t));return()=>{r(),o()}}function Sc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function MC(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class EC extends ls{constructor(e){super(e),this.removeGroupControls=$n,this.removeListeners=$n,this.controls=new yC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||$n}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Dd=n=>(e,t)=>{n&&wt.update(()=>n(e,t),!1,!0)};class TC extends ls{constructor(){super(...arguments),this.removePointerDownListener=$n}onPointerDown(e){this.session=new pS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:hS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Dd(e),onStart:Dd(t),onMove:Dd(r),onEnd:(a,c)=>{delete this.session,o&&wt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Qa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ld=!1;class wC extends Re.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Ld&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Jc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Ld=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||wt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),zo.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Ld=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function gS(n){const[e,t]=rS(),r=Re.useContext(kp);return V.jsx(wC,{...n,layoutGroup:r,switchLayoutGroup:Re.useContext(fS),isPresent:e,safeToRemove:t})}const AC={pan:{Feature:TC},drag:{Feature:EC,ProjectionNode:iS,MeasureLayout:gS}};function xx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&wt.postRender(()=>a(e,cl(e)))}class CC extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=Y1(e,(t,r)=>(xx(this.node,r,"Start"),o=>xx(this.node,o,"End"))))}unmount(){}}class bC extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ol(nl(this.node.current,"focus",()=>this.onFocus()),nl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function _x(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&wt.postRender(()=>a(e,cl(e)))}class RC extends ls{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=J1(e,(o,a)=>(_x(this.node,a,"Start"),(c,{success:u})=>_x(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Gh=new WeakMap,Id=new WeakMap,PC=n=>{const e=Gh.get(n.target);e&&e(n)},DC=n=>{n.forEach(PC)};function LC({root:n,...e}){const t=n||document;Id.has(t)||Id.set(t,{});const r=Id.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(DC,{root:n,...e})),r[o]}function IC(n,e,t){const r=LC(e);return Gh.set(n,t),r.observe(n),()=>{Gh.delete(n),r.unobserve(n)}}const NC={some:0,all:1};class UC extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:NC[o]},u=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),_=p?v:g;_&&_(h)};this.stopObserver=IC(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(FC(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function FC({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const OC={inView:{Feature:UC},tap:{Feature:RC},focus:{Feature:bC},hover:{Feature:CC}},kC={layout:{ProjectionNode:iS,MeasureLayout:gS}},BC={...lC,...OC,...AC,...kC},tt=iC(BC,rC);function gu(n){return typeof window>"u"?!1:n?ay():em()}const VC=50,yx=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),zC=()=>({time:0,x:yx(),y:yx()}),HC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Sx(n,e,t,r){const o=t[e],{length:a,position:c}=HC[e],u=o.current,d=t.time;o.current=Math.abs(n[`scroll${c}`]),o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Bo(0,o.scrollLength,o.current);const h=r-d;o.velocity=h>VC?0:Hp(o.current-u,h)}function GC(n,e,t){Sx(n,"x",e,t),Sx(n,"y",e,t),e.time=t}function WC(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(Ka(r))t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let c=null,u=r.parentNode;for(;!c;)u.tagName==="svg"&&(c=u),u=r.parentNode;r=c}else break;return t}const Wh={start:0,center:.5,end:1};function Mx(n,e,t=0){let r=0;if(n in Wh&&(n=Wh[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const jC=[0,0];function XC(n,e,t,r){let o=Array.isArray(n)?n:jC,a=0,c=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,Wh[n]?n:"0"]),a=Mx(o[0],t,r),c=Mx(o[1],e),a-c}const Wa={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},YC={x:0,y:0};function qC(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function $C(n,e,t){const{offset:r=Wa.All}=t,{target:o=n,axis:a="y"}=t,c=a==="y"?"height":"width",u=o!==n?WC(o,n):YC,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:qC(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let p=!e[a].interpolate;const v=r.length;for(let g=0;g<v;g++){const _=XC(r[g],h[c],d[c],u[a]);!p&&_!==e[a].interpolatorOffsets[g]&&(p=!0),e[a].offset[g]=_}p&&(e[a].interpolate=Kp(e[a].offset,ny(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Oi(0,1,e[a].interpolate(e[a].current))}function KC(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function ZC(n,e,t,r={}){return{measure:o=>{KC(n,r.target,t),GC(n,t,o),(r.offset||r.target)&&$C(n,t,r)},notify:()=>e(t)}}const go=new WeakMap,Ex=new WeakMap,Nd=new WeakMap,Tx=new WeakMap,Mc=new WeakMap,wx=n=>n===document.scrollingElement?window:n;function vS(n,{container:e=document.scrollingElement,trackContentSize:t=!1,...r}={}){if(!e)return $n;let o=Nd.get(e);o||(o=new Set,Nd.set(e,o));const a=zC(),c=ZC(e,n,a,r);if(o.add(c),!go.has(e)){const d=()=>{for(const g of o)g.measure(_n.timestamp);wt.preUpdate(h)},h=()=>{for(const g of o)g.notify()},p=()=>wt.read(d);go.set(e,p);const v=wx(e);window.addEventListener("resize",p),e!==document.documentElement&&Ex.set(e,Fh(e,p)),v.addEventListener("scroll",p),p()}if(t&&!Mc.has(e)){const d=go.get(e),h={width:e.scrollWidth,height:e.scrollHeight};Tx.set(e,h);const p=()=>{const g=e.scrollWidth,_=e.scrollHeight;(h.width!==g||h.height!==_)&&(d(),h.width=g,h.height=_)},v=wt.read(p,!0);Mc.set(e,v)}const u=go.get(e);return wt.read(u,!1,!0),()=>{var v;vi(u);const d=Nd.get(e);if(!d||(d.delete(c),d.size))return;const h=go.get(e);go.delete(e),h&&(wx(e).removeEventListener("scroll",h),(v=Ex.get(e))==null||v(),window.removeEventListener("resize",h));const p=Mc.get(e);p&&(vi(p),Mc.delete(e)),Tx.delete(e)}}const QC=[[Wa.Enter,"entry"],[Wa.Exit,"exit"],[Wa.Any,"cover"],[Wa.All,"contain"]],Ax={start:0,end:1};function JC(n){const e=n.trim().split(/\s+/);if(e.length!==2)return;const t=Ax[e[0]],r=Ax[e[1]];if(!(t===void 0||r===void 0))return[t,r]}function eb(n){if(n.length!==2)return;const e=[];for(const t of n)if(Array.isArray(t))e.push(t);else if(typeof t=="string"){const r=JC(t);if(!r)return;e.push(r)}else return;return e}function tb(n,e){const t=eb(n);if(!t)return!1;for(let r=0;r<2;r++){const o=t[r],a=e[r];if(o[0]!==a[0]||o[1]!==a[1])return!1}return!0}function hm(n){if(!n)return{rangeStart:"contain 0%",rangeEnd:"contain 100%"};for(const[e,t]of QC)if(tb(n,e))return{rangeStart:`${t} 0%`,rangeEnd:`${t} 100%`}}const Cx=new Map;function bx(n){const e={value:0},t=vS(r=>{e.value=r[n.axis].progress*100},n);return{currentTime:e,cancel:t}}function xS({source:n,container:e,...t}){const{axis:r}=t;n&&(e=n);let o=Cx.get(e);o||(o=new Map,Cx.set(e,o));const a=t.target??"self";let c=o.get(a);c||(c={},o.set(a,c));const u=r+(t.offset??[]).join(",");return c[u]||(t.target&&gu(t.target)?hm(t.offset)?c[u]=new ViewTimeline({subject:t.target,axis:r}):c[u]=bx({container:e,...t}):gu()?c[u]=new ScrollTimeline({source:e,axis:r}):c[u]=bx({container:e,...t})),c[u]}function nb(n,e){const t=xS(e),r=e.target?hm(e.offset):void 0,o=e.target?gu(e.target)&&!!r:gu();return n.attachTimeline({timeline:o?t:void 0,...r&&o&&{rangeStart:r.rangeStart,rangeEnd:r.rangeEnd},observe:a=>(a.pause(),Dy(c=>{a.time=a.iterationDuration*c},t))})}function ib(n){return n&&(n.target||n.offset)}function rb(n){return n.length===2}function sb(n,e){return rb(n)||ib(e)?vS(t=>{n(t[e.axis].progress,t)},e):Dy(n,xS(e))}function _S(n,{axis:e="y",container:t=document.scrollingElement,...r}={}){if(!t)return $n;const o={axis:e,container:t,...r};return typeof n=="function"?sb(n,o):nb(n,o)}const ob=()=>({scrollX:Ii(0),scrollY:Ii(0),scrollXProgress:Ii(0),scrollYProgress:Ii(0)}),Fo=n=>n?!n.current:!1;function Rx(n,e,t,r){return{factory:o=>{let a;const c=()=>{if(Fo(t)||Fo(r)){zo.read(c);return}a=_S(o,{...e,axis:n,container:(t==null?void 0:t.current)||void 0,target:(r==null?void 0:r.current)||void 0})};return zo.read(c),()=>{Ay(c),a==null||a()}},times:[0,1],keyframes:[0,1],ease:o=>o,duration:1}}function ab(n,e){return typeof window>"u"?!1:n?ay()&&!!hm(e):em()}function lb({container:n,target:e,...t}={}){const r=ss(ob);ab(e,t.offset)&&(r.scrollXProgress.accelerate=Rx("x",t,n,e),r.scrollYProgress.accelerate=Rx("y",t,n,e));const o=Re.useRef(null),a=Re.useRef(!1),c=Re.useCallback(()=>(o.current=_S((u,{x:d,y:h})=>{r.scrollX.set(d.current),r.scrollXProgress.set(d.progress),r.scrollY.set(h.current),r.scrollYProgress.set(h.progress)},{...t,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var u;(u=o.current)==null||u.call(o)}),[n,e,JSON.stringify(t.offset)]);return Eu(()=>{if(a.current=!1,Fo(n)||Fo(e)){a.current=!0;return}else return c()},[c]),Re.useEffect(()=>{if(!a.current)return;let u;const d=()=>{const h=Fo(n),p=Fo(e);!h&&!p&&(u=c())};return zo.read(d),()=>{Ay(d),u==null||u()}},[c]),r}function cb(n){const e=ss(()=>Ii(n)),{isStatic:t}=Re.useContext(bu);if(t){const[,r]=Re.useState(n);Re.useEffect(()=>e.on("change",r),[])}return e}function yS(n,e){const t=cb(e()),r=()=>t.set(e());return r(),Eu(()=>{const o=()=>wt.preRender(r,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),vi(r)}}),t}function ub(n){$a.current=[],n();const e=yS($a.current,n);return $a.current=void 0,e}function jh(n,e,t,r){if(typeof n=="function")return ub(n);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return fb(n,e,t,r);const c=typeof e=="function"?e:cw(e,t,r),u=Array.isArray(n)?Px(n,c):Px([n],([h])=>c(h)),d=Array.isArray(n)?void 0:n.accelerate;return d&&!d.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(r==null?void 0:r.clamp)!==!1&&(u.accelerate={...d,times:e,keyframes:t,isTransformed:!0}),u}function Px(n,e){const t=ss(()=>[]);return yS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function fb(n,e,t,r){const o=ss(()=>Object.keys(t)),a=ss(()=>({}));for(const c of o)a[c]=jh(n,e,t[c],r);return a}const si={once:!0,amount:.05},Ni={hidden:{opacity:0,y:48},show:{opacity:1,y:0,transition:{type:"spring",stiffness:80,damping:18}}},db={hidden:{opacity:0,x:-52},show:{opacity:1,x:0,transition:{type:"spring",stiffness:80,damping:18}}},Pu={hidden:{opacity:0,scale:.88,y:24},show:{opacity:1,scale:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},Er=(n=.1,e=0)=>({hidden:{},show:{transition:{staggerChildren:n,delayChildren:e}}}),hb={hidden:{opacity:0,y:60,rotateX:-30},show:{opacity:1,y:0,rotateX:0,transition:{type:"spring",stiffness:90,damping:16}}},Ds=(n=0)=>({animate:{y:[0,-18,0],transition:{duration:5,repeat:1/0,ease:"easeInOut",delay:n}}}),pb={animate:{scale:[1,.92,1],opacity:[1,.4,1],transition:{duration:1.8,repeat:1/0,ease:"easeInOut"}}},Ua="/AdvokatPavlodara/",mb=[{n:"8 лет",l:"опыт работы"},{n:"340+",l:"выигранных дел"},{n:"92%",l:"успешных решений"},{n:"600+",l:"довольных клиентов"}];function gb({heroLine1:n,ctaText:e,showOrbs:t,showBadges:r,doParallax:o}){const a=Re.useRef(null),{scrollYProgress:c}=lb({target:a,offset:["start start","end start"]}),u=jh(c,[0,1],["0%",o?"28%":"0%"]),d=jh(c,[0,1],["0%",o?"12%":"0%"]);return V.jsxs("section",{ref:a,className:"hero-section",style:{position:"relative",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"hidden",paddingTop:"104px",paddingBottom:"60px",background:"linear-gradient(140deg,#FAF8F4 0%,var(--cr200) 45%,var(--cr300) 100%)"},children:[V.jsx(tt.div,{style:{position:"absolute",inset:0,opacity:.034,pointerEvents:"none",y:u},children:V.jsxs("svg",{width:"100%",height:"120%",children:[V.jsx("defs",{children:V.jsx("pattern",{id:"gr",width:"56",height:"56",patternUnits:"userSpaceOnUse",children:V.jsx("path",{d:"M56 0L0 0 0 56",fill:"none",stroke:"#1B4A2A",strokeWidth:"1"})})}),V.jsx("rect",{width:"100%",height:"100%",fill:"url(#gr)"})]})}),t&&V.jsxs(V.Fragment,{children:[V.jsx(tt.div,{className:"orb",style:{width:"460px",height:"460px",background:"var(--g500)",top:"-110px",right:"-130px",opacity:.12},...Ds(0)}),V.jsx(tt.div,{className:"orb",style:{width:"300px",height:"300px",background:"var(--gold)",bottom:"30px",left:"-90px",opacity:.12},...Ds(2)}),V.jsx(tt.div,{className:"orb",style:{width:"180px",height:"180px",background:"var(--gold-l)",top:"38%",right:"27%",opacity:.15},...Ds(4)})]}),V.jsxs("div",{className:"hero-mob-photo",children:[V.jsx("img",{src:`${Ua}uploads/lawyer_photo-1780568895176.png`,alt:"Юрист Алия Сейткали"}),V.jsxs("div",{className:"hero-mob-badge",children:[V.jsx("span",{className:"hero-mob-badge-dot"}),"Павлодар · Консультация бесплатно"]})]}),V.jsxs("div",{className:"s-pad",style:{position:"relative",maxWidth:"1120px",margin:"0 auto",width:"100%"},children:[V.jsxs("div",{className:"g-hero",children:[V.jsxs(tt.div,{variants:Er(.12,0),initial:"hidden",animate:"show",children:[V.jsxs(tt.div,{className:"hero-avail-text-badge",variants:Ni,style:{display:"inline-flex",alignItems:"center",gap:"8px",padding:"7px 16px",borderRadius:"999px",background:"rgba(155,133,80,.08)",border:"1px solid rgba(155,133,80,.22)",marginBottom:"22px"},children:[V.jsx(tt.span,{style:{width:"7px",height:"7px",borderRadius:"50%",background:"var(--gold)",display:"inline-block"},...pb}),V.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--gold)",letterSpacing:".07em",textTransform:"uppercase"},children:"Павлодар · Консультация бесплатно"})]}),V.jsx(tt.div,{variants:Er(.08),style:{perspective:"800px",marginBottom:"18px"},children:[n,"юрист рядом"].map((h,p)=>V.jsx("div",{style:{overflow:"hidden"},children:h.split(" ").map((v,g)=>V.jsx(tt.span,{variants:hb,className:"hero-title-word",style:{display:"inline-block",marginRight:"0.28em",fontFamily:'var(--heading-font,"Playfair Display"),Georgia,serif',fontSize:"clamp(40px,5vw,64px)",fontWeight:700,lineHeight:1.1,color:p===1&&v==="юрист"?"transparent":"var(--g900)",letterSpacing:"-.02em",...p===1&&v==="юрист"?{background:"linear-gradient(130deg,var(--gold) 0%,var(--gold-l) 48%,var(--gold) 95%)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 3.5s linear infinite"}:{}},children:v},g))},p))}),V.jsx(tt.p,{variants:Ni,style:{fontSize:"17px",color:"var(--fg2)",lineHeight:1.65,marginBottom:"30px",maxWidth:"460px"},children:"Помогу разобраться с кредитными долгами, семейными спорами и трудовыми конфликтами. Личный подход — каждое дело веду сам."}),V.jsxs(tt.div,{className:"hero-cta-btns",variants:Ni,style:{display:"flex",flexWrap:"wrap",gap:"12px",marginBottom:"36px"},children:[V.jsxs(tt.a,{href:"tel:+77066060600",className:"btn btn-g",style:{fontSize:"15px",padding:"15px 32px"},whileHover:{scale:1.04,y:-2},whileTap:{scale:.97},children:[e," ↗"]}),V.jsx(tt.a,{href:"#services",className:"btn btn-o",style:{fontSize:"15px",padding:"14px 28px"},whileHover:{scale:1.04,y:-2},whileTap:{scale:.97},children:"Наши услуги"})]}),V.jsxs(tt.div,{variants:Ni,style:{display:"flex",alignItems:"center",gap:"16px",paddingTop:"24px",borderTop:"1px solid var(--bd)"},children:[V.jsx("div",{style:{display:"flex"},children:[`${Ua}uploads/SmartSelect_20260604_152529_Google.jpg`,`${Ua}uploads/SmartSelect_20260604_152543_Google.jpg`,`${Ua}uploads/SmartSelect_20260604_152646_Google.jpg`].map((h,p)=>V.jsx("img",{src:h,alt:"",style:{width:"36px",height:"36px",borderRadius:"50%",objectFit:"cover",objectPosition:"top",border:"2px solid var(--cr200)",marginLeft:p?"-10px":"0"}},p))}),V.jsxs("div",{children:[V.jsx("div",{children:"★★★★★".split("").map((h,p)=>V.jsx("span",{style:{color:"var(--gold)",fontSize:"13px"},children:h},p))}),V.jsx("p",{style:{fontSize:"12px",color:"var(--fg3)",marginTop:"2px"},children:"Более 600 клиентов в Павлодаре"})]})]})]}),V.jsx(tt.div,{className:"hero-desktop-photo",style:{display:"flex",justifyContent:"center",position:"relative"},initial:{opacity:0,x:60},animate:{opacity:1,x:0},transition:{type:"spring",stiffness:60,damping:18,delay:.3},children:V.jsxs(tt.div,{style:{position:"relative"},style2:{y:d},children:[V.jsx("div",{className:"hero-deco",style:{position:"absolute",inset:"-16px",borderRadius:"34px",border:"1px solid rgba(155,133,80,.22)"}}),V.jsx("div",{className:"hero-deco",style:{position:"absolute",inset:"-32px",borderRadius:"42px",border:"1px solid rgba(155,133,80,.1)"}}),V.jsx(tt.div,{className:"hero-photo-wrap",style:{width:"320px",height:"460px",borderRadius:"28px",overflow:"hidden",background:"linear-gradient(160deg,#EDE7DA,#F4EFE6)",boxShadow:"0 28px 80px rgba(13,43,26,.18)",y:d},whileHover:{scale:1.02,transition:{type:"spring",stiffness:200,damping:20}},children:V.jsx("img",{src:`${Ua}uploads/lawyer_photo-1780568895176.png`,alt:"Юрист Алия Сейткали Павлодар",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center top"}})}),r&&V.jsxs(tt.div,{className:"hero-deco",style:{position:"absolute",top:"-16px",right:"-28px",background:"var(--gold)",color:"white",borderRadius:"20px",padding:"13px 18px",boxShadow:"0 8px 28px rgba(155,133,80,.42)"},initial:{opacity:0,scale:.5,rotate:-12},animate:{opacity:1,scale:1,rotate:0},transition:{type:"spring",stiffness:120,damping:14,delay:.7},...Ds(.8),children:[V.jsx("p",{className:"serif",style:{fontSize:"28px",fontWeight:700,lineHeight:1},children:"8+"}),V.jsx("p",{style:{fontSize:"11px",opacity:.85,marginTop:"2px"},children:"лет опыта"})]}),r&&V.jsxs(tt.div,{className:"hero-deco",style:{position:"absolute",bottom:"-16px",left:"-28px",background:"white",borderRadius:"18px",padding:"13px 16px",boxShadow:"0 8px 32px rgba(0,0,0,.1)",display:"flex",alignItems:"center",gap:"10px",maxWidth:"218px"},initial:{opacity:0,scale:.5,rotate:12},animate:{opacity:1,scale:1,rotate:0},transition:{type:"spring",stiffness:120,damping:14,delay:1},...Ds(1.6),children:[V.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"50%",background:"var(--g700)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"18px",flexShrink:0},children:"✓"}),V.jsxs("div",{children:[V.jsx("p",{style:{fontSize:"12px",fontWeight:600,color:"var(--fg1)"},children:"Первая консультация"}),V.jsx("p",{style:{fontSize:"11px",color:"var(--gold)",fontWeight:500},children:"Бесплатно"})]})]})]})})]}),V.jsx(tt.div,{className:"g-4 hero-stats",style:{marginTop:"60px"},variants:Er(.08,.1),initial:"hidden",animate:"show",children:mb.map((h,p)=>V.jsxs(tt.div,{variants:Pu,whileHover:{y:-4,transition:{type:"spring",stiffness:300}},className:"stat-card",style:{background:"rgba(255,255,255,.72)",border:"1px solid var(--bd)",borderRadius:"16px",padding:"22px",textAlign:"center",backdropFilter:"blur(8px)"},children:[V.jsx("p",{className:"serif",style:{fontSize:"34px",fontWeight:700,color:"var(--g900)",lineHeight:1},children:h.n}),V.jsx("p",{style:{fontSize:"13px",color:"var(--fg3)",marginTop:"5px"},children:h.l})]},p))})]})]})}const Ud="/AdvokatPavlodara/",vb=({c:n})=>V.jsx("span",{style:{display:"inline-block",padding:"6px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",color:"var(--gold)",border:"1px solid rgba(155,133,80,.3)",background:"rgba(155,133,80,.05)",marginBottom:"16px"},children:n}),xb=[{title:"Кредиты и долги",desc:"Реструктуризация долга, защита от коллекторов, оспаривание кредитных договоров и снятие арестов с имущества.",img:`${Ud}uploads/settlement.jpg`,pts:["Реструктуризация долга","Защита от коллекторов","Оспаривание договора","Снятие ареста"],clr:"#1B4A2A"},{title:"Семейное право",desc:"Развод, раздел имущества, алименты, определение места жительства детей — деликатно и результативно.",img:`${Ud}uploads/luchshie-yuristy-po-semejnym-delam-v-sankt-peterburge.jpg`,pts:["Бракоразводный процесс","Алименты и взыскание","Раздел имущества","Опека над детьми"],clr:"#9B8550"},{title:"Трудовые споры",desc:"Незаконное увольнение, невыплата зарплаты, дискриминация — профессиональная защита трудовых прав.",img:`${Ud}uploads/2f35b21596602b04f8afeadf70e51f3a_original275517.webp`,pts:["Незаконное увольнение","Задержка зарплаты","Восстановление на работе","Трудовые договоры"],clr:"#5E4F28"}];function _b(){return V.jsx("section",{id:"services",style:{padding:"var(--sec-py) 0",background:"#fff"},children:V.jsxs("div",{className:"s-pad",style:{maxWidth:"1120px",margin:"0 auto"},children:[V.jsxs(tt.div,{variants:Ni,initial:"hidden",whileInView:"show",viewport:si,style:{textAlign:"center",marginBottom:"52px"},children:[V.jsx(vb,{c:"Услуги"}),V.jsxs("h2",{className:"serif",style:{fontSize:"clamp(28px,3.5vw,44px)",fontWeight:700,color:"var(--g900)"},children:["Три направления, ",V.jsx("span",{className:"gtext",children:"одна цель"})]}),V.jsx("p",{style:{fontSize:"16px",color:"var(--fg2)",marginTop:"10px",maxWidth:"460px",margin:"10px auto 0"},children:"Профессиональная защита ваших прав в самых важных жизненных ситуациях"})]}),V.jsx(tt.div,{className:"g-3",variants:Er(.14),initial:"hidden",whileInView:"show",viewport:si,children:xb.map((n,e)=>V.jsxs(tt.div,{variants:Pu,whileHover:{y:-8,boxShadow:"0 24px 60px rgba(0,0,0,0.13)",transition:{type:"spring",stiffness:280,damping:22}},style:{background:"#F9F7F3",overflow:"hidden",borderRadius:"var(--card-r,20px)",border:"1px solid var(--bd)"},children:[V.jsx("div",{className:"svc-img",style:{overflow:"hidden",height:"210px",borderRadius:"12px"},children:V.jsx(tt.img,{src:n.img,alt:n.title,style:{width:"100%",height:"100%",objectFit:"cover"},whileHover:{scale:1.07,transition:{duration:.45,ease:"easeOut"}}})}),V.jsxs("div",{style:{padding:"24px"},children:[V.jsx("h3",{className:"serif",style:{fontSize:"20px",fontWeight:700,color:"var(--g900)",marginBottom:"10px"},children:n.title}),V.jsx("p",{style:{fontSize:"14px",color:"var(--fg2)",lineHeight:1.65,marginBottom:"16px"},children:n.desc}),V.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"7px",marginBottom:"20px"},children:n.pts.map((t,r)=>V.jsxs(tt.li,{initial:{opacity:0,x:-12},whileInView:{opacity:1,x:0},viewport:si,transition:{delay:r*.06,type:"spring",stiffness:120},style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"13px",color:"var(--fg2)"},children:[V.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:n.clr,flexShrink:0}}),t]},r))}),V.jsx(tt.a,{href:"tel:+77066060600",className:"btn btn-g",style:{width:"100%",justifyContent:"center",fontSize:"13px",padding:"12px"},whileHover:{scale:1.03},whileTap:{scale:.97},children:"Получить консультацию ↗"})]})]},e))})]})})}const yb=({c:n})=>V.jsx("span",{style:{display:"inline-block",padding:"6px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",color:"var(--gold)",border:"1px solid rgba(155,133,80,.3)",background:"rgba(155,133,80,.05)",marginBottom:"16px"},children:n}),Sb=[{ic:"★",t:"Первичная консультация бесплатно",d:"Оценю ситуацию и расскажу о перспективах без каких-либо обязательств с вашей стороны"},{ic:"⚖",t:"Ведение дела под ключ",d:"Беру на себя всё — от сбора документов до исполнения судебного решения. Вы занимаетесь жизнью"},{ic:"◎",t:"Прозрачная стоимость",d:"Фиксированная цена оговаривается заранее и закрепляется договором. Никаких сюрпризов в процессе"},{ic:"◈",t:"Личное ведение каждого дела",d:"Ваше дело веду я сама, а не помощники. Полная вовлечённость и внимание к деталям"},{ic:"⊞",t:"Опыт в судах Павлодарской области",d:"Знаю местную практику и специфику региона. Это даёт реальное преимущество в деле"},{ic:"⏱",t:"Работаем ежедневно 9:00–20:00",d:"Принимаю в будни и выходные. Экстренная связь по WhatsApp в любое время"}];function Mb(){return V.jsx("section",{id:"about",style:{padding:"var(--sec-py) 0",background:"var(--cr200)"},children:V.jsxs("div",{className:"s-pad",style:{maxWidth:"1120px",margin:"0 auto"},children:[V.jsxs(tt.div,{variants:db,initial:"hidden",whileInView:"show",viewport:si,style:{marginBottom:"52px"},children:[V.jsx(yb,{c:"Почему я"}),V.jsxs("h2",{className:"serif",style:{fontSize:"clamp(28px,3.5vw,44px)",fontWeight:700,color:"var(--g900)"},children:["Что вы ",V.jsx("span",{className:"gtext",children:"получаете"})]})]}),V.jsx(tt.div,{className:"g-3",style:{gap:"20px"},variants:Er(.1),initial:"hidden",whileInView:"show",viewport:si,children:Sb.map((n,e)=>V.jsxs(tt.div,{variants:Pu,whileHover:{y:-6,boxShadow:"0 20px 52px rgba(0,0,0,0.11)",transition:{type:"spring",stiffness:280,damping:22}},className:"feat-card",style:{background:"#fff",padding:"26px",borderRadius:"var(--card-r,20px)",border:"1px solid var(--bd)"},children:[V.jsx(tt.div,{style:{width:"48px",height:"48px",borderRadius:"50%",background:"var(--g700)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"20px",marginBottom:"14px"},whileHover:{rotate:[0,-10,10,0],scale:1.1,transition:{duration:.4}},children:n.ic}),V.jsx("h3",{style:{fontWeight:600,fontSize:"15px",color:"var(--g900)",marginBottom:"8px",lineHeight:1.4},children:n.t}),V.jsx("p",{style:{fontSize:"13px",color:"var(--fg2)",lineHeight:1.65},children:n.d})]},e))})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pm="184",Eb=0,Dx=1,Tb=2,eu=1,wb=2,ja=3,as=0,Kn=1,Sr=2,Tr=0,Oo=1,Lx=2,Ix=3,Nx=4,Ab=5,Ls=100,Cb=101,bb=102,Rb=103,Pb=104,Db=200,Lb=201,Ib=202,Nb=203,Xh=204,Yh=205,Ub=206,Fb=207,Ob=208,kb=209,Bb=210,Vb=211,zb=212,Hb=213,Gb=214,qh=0,$h=1,Kh=2,Ho=3,Zh=4,Qh=5,Jh=6,ep=7,SS=0,Wb=1,jb=2,Qi=0,MS=1,ES=2,TS=3,wS=4,AS=5,CS=6,bS=7,RS=300,Vs=301,Go=302,Fd=303,Od=304,Du=306,tp=1e3,Mr=1001,np=1002,wn=1003,Xb=1004,Ec=1005,Ln=1006,kd=1007,Fs=1008,mi=1009,PS=1010,DS=1011,il=1012,mm=1013,tr=1014,$i=1015,Cr=1016,gm=1017,vm=1018,rl=1020,LS=35902,IS=35899,NS=1021,US=1022,Ui=1023,br=1026,Os=1027,FS=1028,xm=1029,zs=1030,_m=1031,ym=1033,tu=33776,nu=33777,iu=33778,ru=33779,ip=35840,rp=35841,sp=35842,op=35843,ap=36196,lp=37492,cp=37496,up=37488,fp=37489,vu=37490,dp=37491,hp=37808,pp=37809,mp=37810,gp=37811,vp=37812,xp=37813,_p=37814,yp=37815,Sp=37816,Mp=37817,Ep=37818,Tp=37819,wp=37820,Ap=37821,Cp=36492,bp=36494,Rp=36495,Pp=36283,Dp=36284,xu=36285,Lp=36286,Yb=3200,Ux=0,qb=1,ns="",ii="srgb",_u="srgb-linear",yu="linear",It="srgb",vo=7680,Fx=519,$b=512,Kb=513,Zb=514,Sm=515,Qb=516,Jb=517,Mm=518,eR=519,Ox=35044,kx="300 es",Ki=2e3,Su=2001;function tR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nR(){const n=sl("canvas");return n.style.display="block",n}const Bx={};function Vx(...n){const e="THREE."+n.shift();console.log(e,...n)}function OS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ot(...n){n=OS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Tt(...n){n=OS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ip(...n){const e=n.join(" ");e in Bx||(Bx[e]=!0,ot(...n))}function iR(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const rR={[qh]:$h,[Kh]:Jh,[Zh]:ep,[Ho]:Qh,[$h]:qh,[Jh]:Kh,[ep]:Zh,[Qh]:Ho};class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=Math.PI/180,Np=180/Math.PI;function ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function sR(n,e){return(n%e+e)%e}function Vd(n,e,t){return(1-t)*n+t*e}function Fa(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Cm=class Cm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cm.prototype.isVector2=!0;let Ft=Cm;class $o{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let d=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],g=a[c+0],_=a[c+1],M=a[c+2],A=a[c+3];if(v!==A||d!==g||h!==_||p!==M){let y=d*g+h*_+p*M+v*A;y<0&&(g=-g,_=-_,M=-M,A=-A,y=-y);let S=1-u;if(y<.9995){const C=Math.acos(y),P=Math.sin(C);S=Math.sin(S*C)/P,u=Math.sin(u*C)/P,d=d*S+g*u,h=h*S+_*u,p=p*S+M*u,v=v*S+A*u}else{d=d*S+g*u,h=h*S+_*u,p=p*S+M*u,v=v*S+A*u;const C=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=C,h*=C,p*=C,v*=C}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],d=r[o+1],h=r[o+2],p=r[o+3],v=a[c],g=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*v+d*_-h*g,e[t+1]=d*M+p*g+h*v-u*_,e[t+2]=h*M+p*_+u*g-d*v,e[t+3]=p*M-u*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(o/2),v=u(a/2),g=d(r/2),_=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"YZX":this._x=g*p*v+h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v-g*_*M;break;case"XZY":this._x=g*p*v-h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v+g*_*M;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=r+u+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>u&&r>v){const _=2*Math.sqrt(1+r-u-v);this._w=(p-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-r-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-r*h,this._z=a*p+c*h+r*d-o*u,this._w=c*p-r*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bm=class bm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),p=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-u*p,this.y=r+d*p+u*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bm.prototype.isVector3=!0;let re=bm;const zd=new re,zx=new $o,Rm=class Rm{constructor(e,t,r,o,a,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h)}set(e,t,r,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],v=r[7],g=r[2],_=r[5],M=r[8],A=o[0],y=o[3],S=o[6],C=o[1],P=o[4],R=o[7],N=o[2],L=o[5],F=o[8];return a[0]=c*A+u*C+d*N,a[3]=c*y+u*P+d*L,a[6]=c*S+u*R+d*F,a[1]=h*A+p*C+v*N,a[4]=h*y+p*P+v*L,a[7]=h*S+p*R+v*F,a[2]=g*A+_*C+M*N,a[5]=g*y+_*P+M*L,a[8]=g*S+_*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*a*p+r*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*a,_=h*a-c*d,M=t*v+r*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-p*r)*A,e[2]=(u*r-o*c)*A,e[3]=g*A,e[4]=(p*t-o*d)*A,e[5]=(o*a-u*t)*A,e[6]=_*A,e[7]=(r*d-h*t)*A,e[8]=(c*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Hd.makeScale(e,t)),this}rotate(e){return this.premultiply(Hd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rm.prototype.isMatrix3=!0;let ft=Rm;const Hd=new ft,Hx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oR(){const n={enabled:!0,workingColorSpace:_u,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===It&&(o.r=wr(o.r),o.g=wr(o.g),o.b=wr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(o.r=ko(o.r),o.g=ko(o.g),o.b=ko(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ns?yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Ip("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Ip("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[_u]:{primaries:e,whitePoint:r,transfer:yu,toXYZ:Hx,fromXYZ:Gx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Hx,fromXYZ:Gx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),n}const yt=oR();function wr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xo;class aR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xo===void 0&&(xo=sl("canvas")),xo.width=e.width,xo.height=e.height;const o=xo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=xo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=wr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wr(t[r]/255)*255):t[r]=wr(t[r]);return{data:t,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lR=0;class Em{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lR++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Gd(o[c].image)):a.push(Gd(o[c]))}else a=Gd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Gd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let cR=0;const Wd=new re;class In extends Gs{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,r=Mr,o=Mr,a=Ln,c=Fs,u=Ui,d=mi,h=In.DEFAULT_ANISOTROPY,p=ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cR++}),this.uuid=ul(),this.name="",this.source=new Em(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==RS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tp:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case np:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tp:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case np:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=RS;In.DEFAULT_ANISOTROPY=1;const Pm=class Pm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],_=d[5],M=d[9],A=d[2],y=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+A)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(_+1)/2,N=(S+1)/2,L=(p+g)/4,F=(v+A)/4,E=(M+y)/4;return P>R&&P>N?P<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(P),o=L/r,a=F/r):R>N?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=L/o,a=E/o):N<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(N),r=F/a,o=E/a),this.set(r,o,a,t),this}let C=Math.sqrt((y-M)*(y-M)+(v-A)*(v-A)+(g-p)*(g-p));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(v-A)/C,this.z=(g-p)/C,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pm.prototype.isVector4=!0;let rn=Pm;class uR extends Gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new In(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Em(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends uR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class kS extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fR extends In{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=class Mu{constructor(e,t,r,o,a,c,u,d,h,p,v,g,_,M,A,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h,p,v,g,_,M,A,y)}set(e,t,r,o,a,c,u,d,h,p,v,g,_,M,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=d,S[2]=h,S[6]=p,S[10]=v,S[14]=g,S[3]=_,S[7]=M,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/_o.setFromMatrixColumn(e,0).length(),a=1/_o.setFromMatrixColumn(e,1).length(),c=1/_o.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*p,_=c*v,M=u*p,A=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=g-A*h,t[9]=-u*d,t[2]=A-g*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,_=d*v,M=h*p,A=h*v;t[0]=g+A*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=A+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,_=d*v,M=h*p,A=h*v;t[0]=g-A*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=A-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,_=c*v,M=u*p,A=u*v;t[0]=d*p,t[4]=M*h-_,t[8]=g*h+A,t[1]=d*v,t[5]=A*h+g,t[9]=_*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,M=u*d,A=u*h;t[0]=d*p,t[4]=A-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*v+M,t[10]=g-A*v}else if(e.order==="XZY"){const g=c*d,_=c*h,M=u*d,A=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+A,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*p,t[10]=A*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dR,e,hR)}lookAt(e,t,r){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),$r.crossVectors(r,ti),$r.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),$r.crossVectors(r,ti)),$r.normalize(),Tc.crossVectors(ti,$r),o[0]=$r.x,o[4]=Tc.x,o[8]=ti.x,o[1]=$r.y,o[5]=Tc.y,o[9]=ti.y,o[2]=$r.z,o[6]=Tc.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],v=r[5],g=r[9],_=r[13],M=r[2],A=r[6],y=r[10],S=r[14],C=r[3],P=r[7],R=r[11],N=r[15],L=o[0],F=o[4],E=o[8],I=o[12],B=o[1],k=o[5],q=o[9],le=o[13],ue=o[2],G=o[6],Q=o[10],$=o[14],X=o[3],ie=o[7],se=o[11],O=o[15];return a[0]=c*L+u*B+d*ue+h*X,a[4]=c*F+u*k+d*G+h*ie,a[8]=c*E+u*q+d*Q+h*se,a[12]=c*I+u*le+d*$+h*O,a[1]=p*L+v*B+g*ue+_*X,a[5]=p*F+v*k+g*G+_*ie,a[9]=p*E+v*q+g*Q+_*se,a[13]=p*I+v*le+g*$+_*O,a[2]=M*L+A*B+y*ue+S*X,a[6]=M*F+A*k+y*G+S*ie,a[10]=M*E+A*q+y*Q+S*se,a[14]=M*I+A*le+y*$+S*O,a[3]=C*L+P*B+R*ue+N*X,a[7]=C*F+P*k+R*G+N*ie,a[11]=C*E+P*q+R*Q+N*se,a[15]=C*I+P*le+R*$+N*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],A=e[7],y=e[11],S=e[15],C=d*_-h*g,P=u*_-h*v,R=u*g-d*v,N=c*_-h*p,L=c*g-d*p,F=c*v-u*p;return t*(A*C-y*P+S*R)-r*(M*C-y*N+S*L)+o*(M*P-A*N+S*F)-a*(M*R-A*L+y*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],A=e[13],y=e[14],S=e[15],C=t*u-r*c,P=t*d-o*c,R=t*h-a*c,N=r*d-o*u,L=r*h-a*u,F=o*h-a*d,E=p*A-v*M,I=p*y-g*M,B=p*S-_*M,k=v*y-g*A,q=v*S-_*A,le=g*S-_*y,ue=C*le-P*q+R*k+N*B-L*I+F*E;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ue;return e[0]=(u*le-d*q+h*k)*G,e[1]=(o*q-r*le-a*k)*G,e[2]=(A*F-y*L+S*N)*G,e[3]=(g*L-v*F-_*N)*G,e[4]=(d*B-c*le-h*I)*G,e[5]=(t*le-o*B+a*I)*G,e[6]=(y*R-M*F-S*P)*G,e[7]=(p*F-g*R+_*P)*G,e[8]=(c*q-u*B+h*E)*G,e[9]=(r*B-t*q-a*E)*G,e[10]=(M*L-A*R+S*C)*G,e[11]=(v*R-p*L-_*C)*G,e[12]=(u*I-c*k-d*E)*G,e[13]=(t*k-r*I+o*E)*G,e[14]=(A*P-M*N-y*C)*G,e[15]=(p*N-v*P+g*C)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+r,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,v=u+u,g=a*h,_=a*p,M=a*v,A=c*p,y=c*v,S=u*v,C=d*h,P=d*p,R=d*v,N=r.x,L=r.y,F=r.z;return o[0]=(1-(A+S))*N,o[1]=(_+R)*N,o[2]=(M-P)*N,o[3]=0,o[4]=(_-R)*L,o[5]=(1-(g+S))*L,o[6]=(y+C)*L,o[7]=0,o[8]=(M+P)*F,o[9]=(y-C)*F,o[10]=(1-(g+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=_o.set(o[0],o[1],o[2]).length();const u=_o.set(o[4],o[5],o[6]).length(),d=_o.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ci.copy(this);const h=1/c,p=1/u,v=1/d;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=p,Ci.elements[5]*=p,Ci.elements[6]*=p,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,t.setFromRotationMatrix(Ci),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,a,c,u=Ki,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let M,A;if(d)M=a/(c-a),A=c*a/(c-a);else if(u===Ki)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(u===Su)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=Ki,d=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,A;if(d)M=1/(c-a),A=c/(c-a);else if(u===Ki)M=-2/(c-a),A=-(c+a)/(c-a);else if(u===Su)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Mu.prototype.isMatrix4=!0;let dn=Mu;const _o=new re,Ci=new dn,dR=new re(0,0,0),hR=new re(1,1,1),$r=new re,Tc=new re,ti=new re,Wx=new dn,jx=new $o;class Hs{constructor(e=0,t=0,r=0,o=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],v=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(St(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wx,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jx.setFromEuler(this),this.setFromQuaternion(jx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class BS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pR=0;const Xx=new re,yo=new $o,mr=new dn,wc=new re,Oa=new re,mR=new re,gR=new $o,Yx=new re(1,0,0),qx=new re(0,1,0),$x=new re(0,0,1),Kx={type:"added"},vR={type:"removed"},So={type:"childadded",child:null},jd={type:"childremoved",child:null};class oi extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pR++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new re,t=new Hs,r=new $o,o=new re(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new ft}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new BS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Yx,e)}rotateY(e){return this.rotateOnAxis(qx,e)}rotateZ(e){return this.rotateOnAxis($x,e)}translateOnAxis(e,t){return Xx.copy(e).applyQuaternion(this.quaternion),this.position.add(Xx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yx,e)}translateY(e){return this.translateOnAxis(qx,e)}translateZ(e){return this.translateOnAxis($x,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wc.copy(e):wc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Oa,wc,this.up):mr.lookAt(wc,Oa,this.up),this.quaternion.setFromRotationMatrix(mr),o&&(mr.extractRotation(o.matrixWorld),yo.setFromRotationMatrix(mr),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kx),So.child=e,this.dispatchEvent(So),So.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vR),jd.child=e,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kx),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,mR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,gR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}oi.DEFAULT_UP=new re(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ac extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xR={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),S=this._getHandJoint(h,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(xR)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const VS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kr={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Yd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ut{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=yt.workingColorSpace){if(e=sR(e,1),t=St(t,0,1),r=St(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Yd(c,a,e+1/3),this.g=Yd(c,a,e),this.b=Yd(c,a,e-1/3)}return yt.colorSpaceToWorking(this,o),this}setStyle(e,t=ii){function r(a){a!==void 0&&parseFloat(a)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const r=VS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return yt.workingToColorSpace(Dn.copy(this),e),Math.round(St(Dn.r*255,0,255))*65536+Math.round(St(Dn.g*255,0,255))*256+Math.round(St(Dn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(Dn.copy(this),t);const r=Dn.r,o=Dn.g,a=Dn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=ii){yt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,r=Dn.g,o=Dn.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Kr),this.setHSL(Kr.h+e,Kr.s+t,Kr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Kr),e.getHSL(Cc);const r=Vd(Kr.h,Cc.h,t),o=Vd(Kr.s,Cc.s,t),a=Vd(Kr.l,Cc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ut;Ut.NAMES=VS;class _R extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hs,this.environmentIntensity=1,this.environmentRotation=new Hs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new re,gr=new re,qd=new re,vr=new re,Mo=new re,Eo=new re,Zx=new re,$d=new re,Kd=new re,Zd=new re,Qd=new rn,Jd=new rn,eh=new rn;class Li{constructor(e=new re,t=new re,r=new re){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){bi.subVectors(o,t),gr.subVectors(r,t),qd.subVectors(e,t);const c=bi.dot(bi),u=bi.dot(gr),d=bi.dot(qd),h=gr.dot(gr),p=gr.dot(qd),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(h*d-u*p)*g,M=(c*p-u*d)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,r,o,a,c,u,d){return this.getBarycoord(e,t,r,o,vr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,vr.x),d.addScaledVector(c,vr.y),d.addScaledVector(u,vr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Qd.setScalar(0),Jd.setScalar(0),eh.setScalar(0),Qd.fromBufferAttribute(e,t),Jd.fromBufferAttribute(e,r),eh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Qd,a.x),c.addScaledVector(Jd,a.y),c.addScaledVector(eh,a.z),c}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),gr.subVectors(e,t),bi.cross(gr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),bi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Li.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;Mo.subVectors(o,r),Eo.subVectors(a,r),$d.subVectors(e,r);const d=Mo.dot($d),h=Eo.dot($d);if(d<=0&&h<=0)return t.copy(r);Kd.subVectors(e,o);const p=Mo.dot(Kd),v=Eo.dot(Kd);if(p>=0&&v<=p)return t.copy(o);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(Mo,c);Zd.subVectors(e,a);const _=Mo.dot(Zd),M=Eo.dot(Zd);if(M>=0&&_<=M)return t.copy(a);const A=_*h-d*M;if(A<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Eo,u);const y=p*M-_*v;if(y<=0&&v-p>=0&&_-M>=0)return Zx.subVectors(a,o),u=(v-p)/(v-p+(_-M)),t.copy(o).addScaledVector(Zx,u);const S=1/(y+A+g);return c=A*S,u=g*S,t.copy(r).addScaledVector(Mo,c).addScaledVector(Eo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fl{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ri):Ri.fromBufferAttribute(a,c),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bc.copy(r.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Rc.subVectors(this.max,ka),To.subVectors(e.a,ka),wo.subVectors(e.b,ka),Ao.subVectors(e.c,ka),Zr.subVectors(wo,To),Qr.subVectors(Ao,wo),ws.subVectors(To,Ao);let t=[0,-Zr.z,Zr.y,0,-Qr.z,Qr.y,0,-ws.z,ws.y,Zr.z,0,-Zr.x,Qr.z,0,-Qr.x,ws.z,0,-ws.x,-Zr.y,Zr.x,0,-Qr.y,Qr.x,0,-ws.y,ws.x,0];return!th(t,To,wo,Ao,Rc)||(t=[1,0,0,0,1,0,0,0,1],!th(t,To,wo,Ao,Rc))?!1:(Pc.crossVectors(Zr,Qr),t=[Pc.x,Pc.y,Pc.z],th(t,To,wo,Ao,Rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new re,new re,new re,new re,new re,new re,new re,new re],Ri=new re,bc=new fl,To=new re,wo=new re,Ao=new re,Zr=new re,Qr=new re,ws=new re,ka=new re,Rc=new re,Pc=new re,As=new re;function th(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){As.fromArray(n,a);const u=o.x*Math.abs(As.x)+o.y*Math.abs(As.y)+o.z*Math.abs(As.z),d=e.dot(As),h=t.dot(As),p=r.dot(As);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const an=new re,Dc=new Ft;let yR=0;class er extends Gs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Ox,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dc.fromBufferAttribute(this,t),Dc.applyMatrix3(e),this.setXY(t,Dc.x,Dc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fa(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fa(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fa(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array),a=qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ox&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zS extends er{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class HS extends er{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ar extends er{constructor(e,t,r){super(new Float32Array(e),t,r)}}const SR=new fl,Ba=new re,nh=new re;class Tm{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):SR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(nh)),this.expandByPoint(Ba.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MR=0;const pi=new dn,ih=new oi,Co=new re,ni=new fl,Va=new fl,xn=new re;class Rr extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MR++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tR(e)?HS:zS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ft().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ar(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ni.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Va.setFromBufferAttribute(u),this.morphTargetsRelative?(xn.addVectors(ni.min,Va.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Va.max),ni.expandByPoint(xn)):(ni.expandByPoint(Va.min),ni.expandByPoint(Va.max))}ni.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)xn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(xn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)xn.fromBufferAttribute(u,h),d&&(Co.fromBufferAttribute(e,h),xn.add(Co)),o=Math.max(o,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new er(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let E=0;E<r.count;E++)u[E]=new re,d[E]=new re;const h=new re,p=new re,v=new re,g=new Ft,_=new Ft,M=new Ft,A=new re,y=new re;function S(E,I,B){h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),v.fromBufferAttribute(r,B),g.fromBufferAttribute(a,E),_.fromBufferAttribute(a,I),M.fromBufferAttribute(a,B),p.sub(h),v.sub(h),_.sub(g),M.sub(g);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(A.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(k),y.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(k),u[E].add(A),u[I].add(A),u[B].add(A),d[E].add(y),d[I].add(y),d[B].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,I=C.length;E<I;++E){const B=C[E],k=B.start,q=B.count;for(let le=k,ue=k+q;le<ue;le+=3)S(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const P=new re,R=new re,N=new re,L=new re;function F(E){N.fromBufferAttribute(o,E),L.copy(N);const I=u[E];P.copy(I),P.sub(N.multiplyScalar(N.dot(I))).normalize(),R.crossVectors(L,I);const k=R.dot(d[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,k)}for(let E=0,I=C.length;E<I;++E){const B=C[E],k=B.start,q=B.count;for(let le=k,ue=k+q;le<ue;le+=3)F(e.getX(le+0)),F(e.getX(le+1)),F(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new er(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new re,a=new re,c=new re,u=new re,d=new re,h=new re,p=new re,v=new re;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),A=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,y),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),u.add(p),d.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let _=0,M=0;for(let A=0,y=d.length;A<y;A++){u.isInterleavedBufferAttribute?_=d[A]*u.data.stride+u.offset:_=d[A]*p;for(let S=0;S<p;S++)g[M++]=h[_++]}return new er(g,p,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rr,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],_=e(g,r);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ER=0;class Lu extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ER++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Oo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=Yh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Yh&&(r.blendDst=this.blendDst),this.blendEquation!==Ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _r=new re,rh=new re,Lc=new re,Jr=new re,sh=new re,Ic=new re,oh=new re;class TR{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rh.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(rh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Lc),u=Jr.dot(this.direction),d=-Jr.dot(Lc),h=Jr.lengthSq(),p=Math.abs(1-c*c);let v,g,_,M;if(p>0)if(v=c*d-u,g=c*u-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const A=1/p;v*=A,g*=A,_=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),_=g*(g+2*d)+h):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(rh).addScaledVector(Lc,g),_}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const r=_r.dot(this.direction),o=_r.dot(_r)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,r,o,a){sh.subVectors(t,e),Ic.subVectors(r,e),oh.crossVectors(sh,Ic);let c=this.direction.dot(oh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Jr.subVectors(this.origin,e);const d=u*this.direction.dot(Ic.crossVectors(Jr,Ic));if(d<0)return null;const h=u*this.direction.dot(sh.cross(Jr));if(h<0||d+h>c)return null;const p=-u*Jr.dot(oh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ja extends Lu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hs,this.combine=SS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qx=new dn,Cs=new TR,Nc=new Tm,Jx=new re,Uc=new re,Fc=new re,Oc=new re,ah=new re,kc=new re,e_=new re,Bc=new re;class nr extends oi{constructor(e=new Rr,t=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){kc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],v=a[d];p!==0&&(ah.fromBufferAttribute(v,e),c?kc.addScaledVector(ah,p):kc.addScaledVector(ah.sub(t),p))}t.add(kc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nc.copy(r.boundingSphere),Nc.applyMatrix4(a),Cs.copy(e.ray).recast(e.near),!(Nc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Nc,Jx)===null||Cs.origin.distanceToSquared(Jx)>(e.far-e.near)**2))&&(Qx.copy(a).invert(),Cs.copy(e.ray).applyMatrix4(Qx),!(r.boundingBox!==null&&Cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const y=g[M],S=c[y.materialIndex],C=Math.max(y.start,_.start),P=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let R=C,N=P;R<N;R+=3){const L=u.getX(R),F=u.getX(R+1),E=u.getX(R+2);o=Vc(this,S,e,r,h,p,v,L,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),A=Math.min(u.count,_.start+_.count);for(let y=M,S=A;y<S;y+=3){const C=u.getX(y),P=u.getX(y+1),R=u.getX(y+2);o=Vc(this,c,e,r,h,p,v,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,A=g.length;M<A;M++){const y=g[M],S=c[y.materialIndex],C=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=C,N=P;R<N;R+=3){const L=R,F=R+1,E=R+2;o=Vc(this,S,e,r,h,p,v,L,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),A=Math.min(d.count,_.start+_.count);for(let y=M,S=A;y<S;y+=3){const C=y,P=y+1,R=y+2;o=Vc(this,c,e,r,h,p,v,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function wR(n,e,t,r,o,a,c,u){let d;if(e.side===Kn?d=r.intersectTriangle(c,a,o,!0,u):d=r.intersectTriangle(o,a,c,e.side===as,u),d===null)return null;Bc.copy(u),Bc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Bc);return h<t.near||h>t.far?null:{distance:h,point:Bc.clone(),object:n}}function Vc(n,e,t,r,o,a,c,u,d,h){n.getVertexPosition(u,Uc),n.getVertexPosition(d,Fc),n.getVertexPosition(h,Oc);const p=wR(n,e,t,r,Uc,Fc,Oc,e_);if(p){const v=new re;Li.getBarycoord(e_,Uc,Fc,Oc,v),o&&(p.uv=Li.getInterpolatedAttribute(o,u,d,h,v,new Ft)),a&&(p.uv1=Li.getInterpolatedAttribute(a,u,d,h,v,new Ft)),c&&(p.normal=Li.getInterpolatedAttribute(c,u,d,h,v,new re),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new re,materialIndex:0};Li.getNormal(Uc,Fc,Oc,g.normal),p.face=g,p.barycoord=v}return p}class AR extends In{constructor(e=null,t=1,r=1,o,a,c,u,d,h=wn,p=wn,v,g){super(null,c,u,d,h,p,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lh=new re,CR=new re,bR=new ft;class Ps{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=lh.subVectors(r,t).cross(CR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(lh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||bR.getNormalMatrix(e),o=this.coplanarPoint(lh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bs=new Tm,RR=new Ft(.5,.5),zc=new re;class GS{constructor(e=new Ps,t=new Ps,r=new Ps,o=new Ps,a=new Ps,c=new Ps){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ki,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],_=a[7],M=a[8],A=a[9],y=a[10],S=a[11],C=a[12],P=a[13],R=a[14],N=a[15];if(o[0].setComponents(h-c,_-p,S-M,N-C).normalize(),o[1].setComponents(h+c,_+p,S+M,N+C).normalize(),o[2].setComponents(h+u,_+v,S+A,N+P).normalize(),o[3].setComponents(h-u,_-v,S-A,N-P).normalize(),r)o[4].setComponents(d,g,y,R).normalize(),o[5].setComponents(h-d,_-g,S-y,N-R).normalize();else if(o[4].setComponents(h-d,_-g,S-y,N-R).normalize(),t===Ki)o[5].setComponents(h+d,_+g,S+y,N+R).normalize();else if(t===Su)o[5].setComponents(d,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(e){bs.center.set(0,0,0);const t=RR.distanceTo(e.center);return bs.radius=.7071067811865476+t,bs.applyMatrix4(e.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zc.x=o.normal.x>0?e.max.x:e.min.x,zc.y=o.normal.y>0?e.max.y:e.min.y,zc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class WS extends In{constructor(e=[],t=Vs,r,o,a,c,u,d,h,p){super(e,t,r,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wo extends In{constructor(e,t,r=tr,o,a,c,u=wn,d=wn,h,p=br,v=1){if(p!==br&&p!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,u,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class PR extends Wo{constructor(e,t=tr,r=Vs,o,a,c=wn,u=wn,d,h=br){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jS extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends Rr{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Ar(h,3)),this.setAttribute("normal",new Ar(p,3)),this.setAttribute("uv",new Ar(v,2));function M(A,y,S,C,P,R,N,L,F,E,I){const B=R/F,k=N/E,q=R/2,le=N/2,ue=L/2,G=F+1,Q=E+1;let $=0,X=0;const ie=new re;for(let se=0;se<Q;se++){const O=se*k-le;for(let J=0;J<G;J++){const Oe=J*B-q;ie[A]=Oe*C,ie[y]=O*P,ie[S]=ue,h.push(ie.x,ie.y,ie.z),ie[A]=0,ie[y]=0,ie[S]=L>0?1:-1,p.push(ie.x,ie.y,ie.z),v.push(J/F),v.push(1-se/E),$+=1}}for(let se=0;se<E;se++)for(let O=0;O<F;O++){const J=g+O+G*se,Oe=g+O+G*(se+1),Ge=g+(O+1)+G*(se+1),Ne=g+(O+1)+G*se;d.push(J,Oe,Ne),d.push(Oe,Ge,Ne),X+=6}u.addGroup(_,X,I),_+=X,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hl extends Rr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,p=d+1,v=e/u,g=t/d,_=[],M=[],A=[],y=[];for(let S=0;S<p;S++){const C=S*g-c;for(let P=0;P<h;P++){const R=P*v-a;M.push(R,-C,0),A.push(0,0,1),y.push(P/u),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let C=0;C<u;C++){const P=C+h*S,R=C+h*(S+1),N=C+1+h*(S+1),L=C+1+h*S;_.push(P,R,L),_.push(R,N,L)}this.setIndex(_),this.setAttribute("position",new Ar(M,3)),this.setAttribute("normal",new Ar(A,3)),this.setAttribute("uv",new Ar(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}function jo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(t_(o))o.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(t_(o[0])){const a=[];for(let c=0,u=o.length;c<u;c++)a[c]=o[c].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const r=jo(n[t]);for(const o in r)e[o]=r[o]}return e}function t_(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function DR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function XS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:yt.workingColorSpace}const LR={clone:jo,merge:On};var IR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Lu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IR,this.fragmentShader=NR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=DR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class UR extends ir{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FR extends Lu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OR extends Lu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ch={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(n_(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!n_(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function n_(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class kR{constructor(e,t,r){const o=this;let a=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(p){u++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,u),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,u),c===u&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,v){return h.push(p,v),this},this.removeHandler=function(p){const v=h.indexOf(p);return v!==-1&&h.splice(v,2),this},this.getHandler=function(p){for(let v=0,g=h.length;v<g;v+=2){const _=h[v],M=h[v+1];if(_.global&&(_.lastIndex=0),_.test(p))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const BR=new kR;class wm{constructor(e){this.manager=e!==void 0?e:BR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,a){r.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wm.DEFAULT_MATERIAL_NAME="__DEFAULT";const bo=new WeakMap;class VR extends wm{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=ch.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let v=bo.get(c);v===void 0&&(v=[],bo.set(c,v)),v.push({onLoad:t,onError:o})}return c}const u=sl("img");function d(){p(),t&&t(this);const v=bo.get(this)||[];for(let g=0;g<v.length;g++){const _=v[g];_.onLoad&&_.onLoad(this)}bo.delete(this),a.manager.itemEnd(e)}function h(v){p(),o&&o(v),ch.remove(`image:${e}`);const g=bo.get(this)||[];for(let _=0;_<g.length;_++){const M=g[_];M.onError&&M.onError(v)}bo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function p(){u.removeEventListener("load",d,!1),u.removeEventListener("error",h,!1)}return u.addEventListener("load",d,!1),u.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),ch.add(`image:${e}`,u),a.manager.itemStart(e),u.src=e,u}}class zR extends wm{constructor(e){super(e)}load(e,t,r,o){const a=new In,c=new VR(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},r,o),a}}const Hc=new re,Gc=new $o,Wi=new re;class YS extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hc,Gc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Gc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hc,Gc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hc,Gc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const es=new re,i_=new Ft,r_=new Ft;class Di extends YS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Np*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Np*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,i_,r_),t.subVectors(r_,i_)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Am extends YS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ro=-90,Po=1;class HR extends oi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Di(Ro,Po,e,t);o.layers=this.layers,this.add(o);const a=new Di(Ro,Po,e,t);a.layers=this.layers,this.add(a);const c=new Di(Ro,Po,e,t);c.layers=this.layers,this.add(c);const u=new Di(Ro,Po,e,t);u.layers=this.layers,this.add(u);const d=new Di(Ro,Po,e,t);d.layers=this.layers,this.add(d);const h=new Di(Ro,Po,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class GR extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dm=class Dm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};Dm.prototype.isMatrix2=!0;let s_=Dm;function o_(n,e,t,r){const o=WR(r);switch(t){case NS:return n*e;case FS:return n*e/o.components*o.byteLength;case xm:return n*e/o.components*o.byteLength;case zs:return n*e*2/o.components*o.byteLength;case _m:return n*e*2/o.components*o.byteLength;case US:return n*e*3/o.components*o.byteLength;case Ui:return n*e*4/o.components*o.byteLength;case ym:return n*e*4/o.components*o.byteLength;case tu:case nu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case iu:case ru:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rp:case op:return Math.max(n,16)*Math.max(e,8)/4;case ip:case sp:return Math.max(n,8)*Math.max(e,8)/2;case ap:case lp:case up:case fp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cp:case vu:case dp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case mp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case gp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case _p:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case yp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Cp:case bp:case Rp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Pp:case Dp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xu:case Lp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WR(n){switch(n){case mi:case PS:return{byteLength:1,components:1};case il:case DS:case Cr:return{byteLength:2,components:1};case gm:case vm:return{byteLength:2,components:4};case tr:case mm:case $i:return{byteLength:4,components:1};case LS:case IS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qS(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function jR(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],A=v[_];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++g,v[g]=A)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const A=v[_];n.bufferSubData(h,A.start*p.BYTES_PER_ELEMENT,p,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var XR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,qR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$R=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ZR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,QR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,JR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_P=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MP="gl_FragColor = linearToOutputTexel( gl_FragColor );",EP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,wP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,CP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,RP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,kP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qP=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$P=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,r2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,a2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,f2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,M2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,P2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,D2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,F2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,V2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,z2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,a3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,h3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,T3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:XR,alphahash_pars_fragment:YR,alphamap_fragment:qR,alphamap_pars_fragment:$R,alphatest_fragment:KR,alphatest_pars_fragment:ZR,aomap_fragment:QR,aomap_pars_fragment:JR,batching_pars_vertex:eP,batching_vertex:tP,begin_vertex:nP,beginnormal_vertex:iP,bsdfs:rP,iridescence_fragment:sP,bumpmap_pars_fragment:oP,clipping_planes_fragment:aP,clipping_planes_pars_fragment:lP,clipping_planes_pars_vertex:cP,clipping_planes_vertex:uP,color_fragment:fP,color_pars_fragment:dP,color_pars_vertex:hP,color_vertex:pP,common:mP,cube_uv_reflection_fragment:gP,defaultnormal_vertex:vP,displacementmap_pars_vertex:xP,displacementmap_vertex:_P,emissivemap_fragment:yP,emissivemap_pars_fragment:SP,colorspace_fragment:MP,colorspace_pars_fragment:EP,envmap_fragment:TP,envmap_common_pars_fragment:wP,envmap_pars_fragment:AP,envmap_pars_vertex:CP,envmap_physical_pars_fragment:kP,envmap_vertex:bP,fog_vertex:RP,fog_pars_vertex:PP,fog_fragment:DP,fog_pars_fragment:LP,gradientmap_pars_fragment:IP,lightmap_pars_fragment:NP,lights_lambert_fragment:UP,lights_lambert_pars_fragment:FP,lights_pars_begin:OP,lights_toon_fragment:BP,lights_toon_pars_fragment:VP,lights_phong_fragment:zP,lights_phong_pars_fragment:HP,lights_physical_fragment:GP,lights_physical_pars_fragment:WP,lights_fragment_begin:jP,lights_fragment_maps:XP,lights_fragment_end:YP,lightprobes_pars_fragment:qP,logdepthbuf_fragment:$P,logdepthbuf_pars_fragment:KP,logdepthbuf_pars_vertex:ZP,logdepthbuf_vertex:QP,map_fragment:JP,map_pars_fragment:e2,map_particle_fragment:t2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:r2,morphinstance_vertex:s2,morphcolor_vertex:o2,morphnormal_vertex:a2,morphtarget_pars_vertex:l2,morphtarget_vertex:c2,normal_fragment_begin:u2,normal_fragment_maps:f2,normal_pars_fragment:d2,normal_pars_vertex:h2,normal_vertex:p2,normalmap_pars_fragment:m2,clearcoat_normal_fragment_begin:g2,clearcoat_normal_fragment_maps:v2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:_2,opaque_fragment:y2,packing:S2,premultiplied_alpha_fragment:M2,project_vertex:E2,dithering_fragment:T2,dithering_pars_fragment:w2,roughnessmap_fragment:A2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:R2,shadowmap_vertex:P2,shadowmask_pars_fragment:D2,skinbase_vertex:L2,skinning_pars_vertex:I2,skinning_vertex:N2,skinnormal_vertex:U2,specularmap_fragment:F2,specularmap_pars_fragment:O2,tonemapping_fragment:k2,tonemapping_pars_fragment:B2,transmission_fragment:V2,transmission_pars_fragment:z2,uv_pars_fragment:H2,uv_pars_vertex:G2,uv_vertex:W2,worldpos_vertex:j2,background_vert:X2,background_frag:Y2,backgroundCube_vert:q2,backgroundCube_frag:$2,cube_vert:K2,cube_frag:Z2,depth_vert:Q2,depth_frag:J2,distance_vert:e3,distance_frag:t3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:r3,linedashed_frag:s3,meshbasic_vert:o3,meshbasic_frag:a3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:f3,meshnormal_vert:d3,meshnormal_frag:h3,meshphong_vert:p3,meshphong_frag:m3,meshphysical_vert:g3,meshphysical_frag:v3,meshtoon_vert:x3,meshtoon_frag:_3,points_vert:y3,points_frag:S3,shadow_vert:M3,shadow_frag:E3,sprite_vert:T3,sprite_frag:w3},Ie={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},qi={basic:{uniforms:On([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:On([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:On([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:On([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:On([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:On([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:On([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:On([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:On([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:On([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:On([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:On([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:On([Ie.lights,Ie.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};qi.physical={uniforms:On([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Wc={r:0,b:0,g:0},A3=new dn,$S=new ft;$S.set(-1,0,0,0,1,0,0,0,1);function C3(n,e,t,r,o,a){const c=new Ut(0);let u=o===!0?0:1,d,h,p=null,v=0,g=null;function _(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const R=C.backgroundBlurriness>0;P=e.get(P,R)}return P}function M(C){let P=!1;const R=_(C);R===null?y(c,u):R&&R.isColor&&(y(R,1),P=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(C,P){const R=_(P);R&&(R.isCubeTexture||R.mapping===Du)?(h===void 0&&(h=new nr(new dl(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:jo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(A3.makeRotationFromEuler(P.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply($S),h.material.toneMapped=yt.getTransfer(R.colorSpace)!==It,(p!==R||v!==R.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=R,v=R.version,g=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new nr(new hl(2,2),new ir({name:"BackgroundMaterial",uniforms:jo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=yt.getTransfer(R.colorSpace)!==It,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||v!==R.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=R,v=R.version,g=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function y(C,P){C.getRGB(Wc,XS(n)),t.buffers.color.setClear(Wc.r,Wc.g,Wc.b,P,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,P=1){c.set(C),u=P,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,y(c,u)},render:M,addToRenderList:A,dispose:S}}function b3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function u(k,q,le,ue,G){let Q=!1;const $=v(k,ue,le,q);a!==$&&(a=$,h(a.object)),Q=_(k,ue,le,G),Q&&M(k,ue,le,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Q||c)&&(c=!1,R(k,q,le,ue),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function p(k){return n.deleteVertexArray(k)}function v(k,q,le,ue){const G=ue.wireframe===!0;let Q=r[q.id];Q===void 0&&(Q={},r[q.id]=Q);const $=k.isInstancedMesh===!0?k.id:0;let X=Q[$];X===void 0&&(X={},Q[$]=X);let ie=X[le.id];ie===void 0&&(ie={},X[le.id]=ie);let se=ie[G];return se===void 0&&(se=g(d()),ie[G]=se),se}function g(k){const q=[],le=[],ue=[];for(let G=0;G<t;G++)q[G]=0,le[G]=0,ue[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:ue,object:k,attributes:{},index:null}}function _(k,q,le,ue){const G=a.attributes,Q=q.attributes;let $=0;const X=le.getAttributes();for(const ie in X)if(X[ie].location>=0){const O=G[ie];let J=Q[ie];if(J===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(J=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(J=k.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;$++}return a.attributesNum!==$||a.index!==ue}function M(k,q,le,ue){const G={},Q=q.attributes;let $=0;const X=le.getAttributes();for(const ie in X)if(X[ie].location>=0){let O=Q[ie];O===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),G[ie]=J,$++}a.attributes=G,a.attributesNum=$,a.index=ue}function A(){const k=a.newAttributes;for(let q=0,le=k.length;q<le;q++)k[q]=0}function y(k){S(k,0)}function S(k,q){const le=a.newAttributes,ue=a.enabledAttributes,G=a.attributeDivisors;le[k]=1,ue[k]===0&&(n.enableVertexAttribArray(k),ue[k]=1),G[k]!==q&&(n.vertexAttribDivisor(k,q),G[k]=q)}function C(){const k=a.newAttributes,q=a.enabledAttributes;for(let le=0,ue=q.length;le<ue;le++)q[le]!==k[le]&&(n.disableVertexAttribArray(le),q[le]=0)}function P(k,q,le,ue,G,Q,$){$===!0?n.vertexAttribIPointer(k,q,le,G,Q):n.vertexAttribPointer(k,q,le,ue,G,Q)}function R(k,q,le,ue){A();const G=ue.attributes,Q=le.getAttributes(),$=q.defaultAttributeValues;for(const X in Q){const ie=Q[X];if(ie.location>=0){let se=G[X];if(se===void 0&&(X==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),X==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),se!==void 0){const O=se.normalized,J=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const Ge=Oe.buffer,Ne=Oe.type,ce=Oe.bytesPerElement,ye=Ne===n.INT||Ne===n.UNSIGNED_INT||se.gpuType===mm;if(se.isInterleavedBufferAttribute){const me=se.data,Ue=me.stride,Je=se.offset;if(me.isInstancedInterleavedBuffer){for(let et=0;et<ie.locationSize;et++)S(ie.location+et,me.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let et=0;et<ie.locationSize;et++)y(ie.location+et);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let et=0;et<ie.locationSize;et++)P(ie.location+et,J/ie.locationSize,Ne,O,Ue*ce,(Je+J/ie.locationSize*et)*ce,ye)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<ie.locationSize;me++)S(ie.location+me,se.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<ie.locationSize;me++)y(ie.location+me);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let me=0;me<ie.locationSize;me++)P(ie.location+me,J/ie.locationSize,Ne,O,J*ce,J/ie.locationSize*me*ce,ye)}}else if($!==void 0){const O=$[X];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ie.location,O);break;case 3:n.vertexAttrib3fv(ie.location,O);break;case 4:n.vertexAttrib4fv(ie.location,O);break;default:n.vertexAttrib1fv(ie.location,O)}}}}C()}function N(){I();for(const k in r){const q=r[k];for(const le in q){const ue=q[le];for(const G in ue){const Q=ue[G];for(const $ in Q)p(Q[$].object),delete Q[$];delete ue[G]}}delete r[k]}}function L(k){if(r[k.id]===void 0)return;const q=r[k.id];for(const le in q){const ue=q[le];for(const G in ue){const Q=ue[G];for(const $ in Q)p(Q[$].object),delete Q[$];delete ue[G]}}delete r[k.id]}function F(k){for(const q in r){const le=r[q];for(const ue in le){const G=le[ue];if(G[k.id]===void 0)continue;const Q=G[k.id];for(const $ in Q)p(Q[$].object),delete Q[$];delete G[k.id]}}}function E(k){for(const q in r){const le=r[q],ue=k.isInstancedMesh===!0?k.id:0,G=le[ue];if(G!==void 0){for(const Q in G){const $=G[Q];for(const X in $)p($[X].object),delete $[X];delete G[Q]}delete le[ue],Object.keys(le).length===0&&delete r[q]}}}function I(){B(),c=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:I,resetDefaultState:B,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function R3(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,p){p!==0&&(n.drawArraysInstanced(r,d,h,p),t.update(h,r,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,p);let g=0;for(let _=0;_<p;_++)g+=h[_];t.update(g,r,1)}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u}function P3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ui&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const E=F===Cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==mi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==$i&&!E)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ot("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),N=n.getParameter(n.MAX_SAMPLES),L=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:R,maxSamples:N,samples:L}}function D3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Ps,u=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||r!==0||o;return o=g,r=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||M===null||M.length===0||a&&!y)a?p(null):h();else{const C=a?0:r,P=C*4;let R=S.clippingState||null;d.value=R,R=p(M,g,P,_);for(let N=0;N!==P;++N)R[N]=t[N];S.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,g,_,M){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=d.value,M!==!0||y===null){const S=_+A*4,C=g.matrixWorldInverse;u.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,R=_;P!==A;++P,R+=4)c.copy(v[P]).applyMatrix4(C,u),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const rs=4,a_=[.125,.215,.35,.446,.526,.582],Is=20,L3=256,za=new Am,l_=new Ut;let uh=null,fh=0,dh=0,hh=!1;const I3=new re;class c_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=I3}=a;uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uh,fh,dh),this._renderer.xr.enabled=hh,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Cr,format:Ui,colorSpace:_u,depthBuffer:!1},o=u_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u_(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=N3(a)),this._blurMaterial=F3(a,e,t),this._ggxMaterial=U3(a,e,t)}return o}_compileMaterial(e){const t=new nr(new Rr,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,r,o,a){const d=new Di(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(l_),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nr(new dl,new Ja({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(l_),S=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[P],a.y,a.z)):R===1?(d.up.set(0,0,h[P]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[P],a.z)):(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[P]));const N=this._cubeSize;Do(o,R*N,P>2?N:0,N,N),v.setRenderTarget(o),S&&v.render(A,d),v.render(e,d)}v.toneMapping=_,v.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Vs||e.mapping===Go;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=d_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Do(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,za)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=0+h*1.25,_=v*g,{_lodMax:M}=this,A=this._sizeLods[r],y=3*A*(r>M-rs?r-M+rs:0),S=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,Do(a,y,S,3*A,2*A),o.setRenderTarget(a),o.render(u,za),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Do(e,y,S,3*A,2*A),o.setRenderTarget(e),o.render(u,za)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,_=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Is-1),A=a/M,y=isFinite(a)?1+Math.floor(p*A):Is;y>Is&&ot(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Is}`);const S=[];let C=0;for(let F=0;F<Is;++F){const E=F/A,I=Math.exp(-E*E/2);S.push(I),F===0?C+=I:F<y&&(C+=2*I)}for(let F=0;F<S.length;F++)S[F]=S[F]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-r;const R=this._sizeLods[o],N=3*R*(o>P-rs?o-P+rs:0),L=4*(this._cubeSize-R);Do(t,N,L,3*R,2*R),d.setRenderTarget(t),d.render(v,za)}}function N3(n){const e=[],t=[],r=[];let o=n;const a=n-rs+1+a_.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let d=1/u;c>n-rs?d=a_[c-n+rs-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,A=3,y=2,S=1,C=new Float32Array(A*M*_),P=new Float32Array(y*M*_),R=new Float32Array(S*M*_);for(let L=0;L<_;L++){const F=L%3*2/3-1,E=L>2?0:-1,I=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];C.set(I,A*M*L),P.set(g,y*M*L);const B=[L,L,L,L,L,L];R.set(B,S*M*L)}const N=new Rr;N.setAttribute("position",new er(C,A)),N.setAttribute("uv",new er(P,y)),N.setAttribute("faceIndex",new er(R,S)),r.push(new nr(N,null)),o>rs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function u_(n,e,t){const r=new Ji(n,e,t);return r.texture.mapping=Du,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Do(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function U3(n,e,t){return new ir({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function F3(n,e,t){const r=new Float32Array(Is),o=new re(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function f_(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function d_(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class KS extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new WS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new dl(5,5,5),a=new ir({name:"CubemapFromEquirect",uniforms:jo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:Tr});a.uniforms.tEquirect.value=t;const c=new nr(o,a),u=t.minFilter;return t.minFilter===Fs&&(t.minFilter=Ln),new HR(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function O3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?c(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===Fd||_===Od)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const A=new KS(M.height);return A.fromEquirectangularTexture(n,g),e.set(g,A),g.addEventListener("dispose",h),u(A.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===Fd||_===Od,A=_===Vs||_===Go;if(M||A){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new c_(n)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return M&&C&&C.height>0||A&&C&&d(C)?(r===null&&(r=new c_(n)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",p),y.texture):null}}}return g}function u(g,_){return _===Fd?g.mapping=Vs:_===Od&&(g.mapping=Go),g}function d(g){let _=0;const M=6;for(let A=0;A<M;A++)g[A]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function k3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Ip("WebGLRenderer: "+r+" extension not supported."),o}}}function B3(n,e,t,r){const o={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],n.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(_!==null){const C=_.array;A=_.version;for(let P=0,R=C.length;P<R;P+=3){const N=C[P+0],L=C[P+1],F=C[P+2];g.push(N,L,L,F,F,N)}}else{const C=M.array;A=M.version;for(let P=0,R=C.length/3-1;P<R;P+=3){const N=P+0,L=P+1,F=P+2;g.push(N,L,L,F,F,N)}}const y=new(M.count>=65535?HS:zS)(g,1);y.version=A;const S=a.get(v);S&&e.remove(S),a.set(v,y)}function p(v){const g=a.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function V3(n,e,t){let r;function o(v){r=v}let a,c;function u(v){a=v.type,c=v.bytesPerElement}function d(v,g){n.drawElements(r,g,a,v*c),t.update(g,r,1)}function h(v,g,_){_!==0&&(n.drawElementsInstanced(r,g,a,v*c,_),t.update(g,r,_))}function p(v,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,a,v,0,_);let A=0;for(let y=0;y<_;y++)A+=g[y];t.update(A,r,1)}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function z3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Tt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function H3(n,e,t){const r=new WeakMap,o=new rn;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let B=function(){E.dispose(),r.delete(u),u.removeEventListener("dispose",B)};var _=B;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,A=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let N=u.attributes.position.count*R,L=1;N>e.maxTextureSize&&(L=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*L*4*v),E=new kS(F,N,L,v);E.type=$i,E.needsUpdate=!0;const I=R*4;for(let k=0;k<v;k++){const q=S[k],le=C[k],ue=P[k],G=N*L*4*k;for(let Q=0;Q<q.count;Q++){const $=Q*I;M===!0&&(o.fromBufferAttribute(q,Q),F[G+$+0]=o.x,F[G+$+1]=o.y,F[G+$+2]=o.z,F[G+$+3]=0),A===!0&&(o.fromBufferAttribute(le,Q),F[G+$+4]=o.x,F[G+$+5]=o.y,F[G+$+6]=o.z,F[G+$+7]=0),y===!0&&(o.fromBufferAttribute(ue,Q),F[G+$+8]=o.x,F[G+$+9]=o.y,F[G+$+10]=o.z,F[G+$+11]=ue.itemSize===4?o.w:1)}}g={count:v,texture:E,size:new Ft(N,L)},r.set(u,g),u.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const A=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function G3(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const W3={[MS]:"LINEAR_TONE_MAPPING",[ES]:"REINHARD_TONE_MAPPING",[TS]:"CINEON_TONE_MAPPING",[wS]:"ACES_FILMIC_TONE_MAPPING",[CS]:"AGX_TONE_MAPPING",[bS]:"NEUTRAL_TONE_MAPPING",[AS]:"CUSTOM_TONE_MAPPING"};function j3(n,e,t,r,o){const a=new Ji(e,t,{type:n,depthBuffer:r,stencilBuffer:o,depthTexture:r?new Wo(e,t):void 0}),c=new Ji(e,t,{type:Cr,depthBuffer:!1,stencilBuffer:!1}),u=new Rr;u.setAttribute("position",new Ar([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ar([0,2,0,0,2,0],2));const d=new UR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new nr(u,d),p=new Am(-1,1,1,-1,0,1);let v=null,g=null,_=!1,M,A=null,y=[],S=!1;this.setSize=function(C,P){a.setSize(C,P),c.setSize(C,P);for(let R=0;R<y.length;R++){const N=y[R];N.setSize&&N.setSize(C,P)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;const P=a.width,R=a.height;for(let N=0;N<y.length;N++){const L=y[N];L.setSize&&L.setSize(P,R)}},this.begin=function(C,P){if(_||C.toneMapping===Qi&&y.length===0)return!1;if(A=P,P!==null){const R=P.width,N=P.height;(a.width!==R||a.height!==N)&&this.setSize(R,N)}return S===!1&&C.setRenderTarget(a),M=C.toneMapping,C.toneMapping=Qi,!0},this.hasRenderPass=function(){return S},this.end=function(C,P){C.toneMapping=M,_=!0;let R=a,N=c;for(let L=0;L<y.length;L++){const F=y[L];if(F.enabled!==!1&&(F.render(C,N,R,P),F.needsSwap!==!1)){const E=R;R=N,N=E}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,d.defines={},yt.getTransfer(v)===It&&(d.defines.SRGB_TRANSFER="");const L=W3[g];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(A),C.render(h,p),A=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),c.dispose(),u.dispose(),d.dispose()}}const ZS=new In,Up=new Wo(1,1),QS=new kS,JS=new fR,eM=new WS,h_=[],p_=[],m_=new Float32Array(16),g_=new Float32Array(9),v_=new Float32Array(4);function Ko(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=h_[o];if(a===void 0&&(a=new Float32Array(o),h_[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Nu(n,e){let t=p_[e];t===void 0&&(t=new Int32Array(e),p_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function X3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function K3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;v_.set(r),n.uniformMatrix2fv(this.addr,!1,v_),pn(t,r)}}function Z3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;g_.set(r),n.uniformMatrix3fv(this.addr,!1,g_),pn(t,r)}}function Q3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;m_.set(r),n.uniformMatrix4fv(this.addr,!1,m_),pn(t,r)}}function J3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function eD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function tD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function iD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function rD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function sD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function oD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function aD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Up.compareFunction=t.isReversedDepthBuffer()?Mm:Sm,a=Up):a=ZS,t.setTexture2D(e||a,o)}function lD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||JS,o)}function cD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||eM,o)}function uD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||QS,o)}function fD(n){switch(n){case 5126:return X3;case 35664:return Y3;case 35665:return q3;case 35666:return $3;case 35674:return K3;case 35675:return Z3;case 35676:return Q3;case 5124:case 35670:return J3;case 35667:case 35671:return eD;case 35668:case 35672:return tD;case 35669:case 35673:return nD;case 5125:return iD;case 36294:return rD;case 36295:return sD;case 36296:return oD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return lD;case 35680:case 36300:case 36308:case 36293:return cD;case 36289:case 36303:case 36311:case 36292:return uD}}function dD(n,e){n.uniform1fv(this.addr,e)}function hD(n,e){const t=Ko(e,this.size,2);n.uniform2fv(this.addr,t)}function pD(n,e){const t=Ko(e,this.size,3);n.uniform3fv(this.addr,t)}function mD(n,e){const t=Ko(e,this.size,4);n.uniform4fv(this.addr,t)}function gD(n,e){const t=Ko(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vD(n,e){const t=Ko(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xD(n,e){const t=Ko(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _D(n,e){n.uniform1iv(this.addr,e)}function yD(n,e){n.uniform2iv(this.addr,e)}function SD(n,e){n.uniform3iv(this.addr,e)}function MD(n,e){n.uniform4iv(this.addr,e)}function ED(n,e){n.uniform1uiv(this.addr,e)}function TD(n,e){n.uniform2uiv(this.addr,e)}function wD(n,e){n.uniform3uiv(this.addr,e)}function AD(n,e){n.uniform4uiv(this.addr,e)}function CD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Up:c=ZS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function bD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||JS,a[c])}function RD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||eM,a[c])}function PD(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||QS,a[c])}function DD(n){switch(n){case 5126:return dD;case 35664:return hD;case 35665:return pD;case 35666:return mD;case 35674:return gD;case 35675:return vD;case 35676:return xD;case 5124:case 35670:return _D;case 35667:case 35671:return yD;case 35668:case 35672:return SD;case 35669:case 35673:return MD;case 5125:return ED;case 36294:return TD;case 36295:return wD;case 36296:return AD;case 35678:case 36198:case 36298:case 36306:case 35682:return CD;case 35679:case 36299:case 36307:return bD;case 35680:case 36300:case 36308:case 36293:return RD;case 36289:case 36303:case 36311:case 36292:return PD}}class LD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=fD(t.type)}}class ID{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DD(t.type)}}class ND{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const ph=/(\w+)(\])?(\[|\.)?/g;function x_(n,e){n.seq.push(e),n.map[e.id]=e}function UD(n,e,t){const r=n.name,o=r.length;for(ph.lastIndex=0;;){const a=ph.exec(r),c=ph.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){x_(t,h===void 0?new LD(u,n,e):new ID(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new ND(u),x_(t,v)),t=v}}}class su{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);UD(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function __(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const FD=37297;let OD=0;function kD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const y_=new ft;function BD(n){yt._getMatrix(y_,yt.workingColorSpace,n);const e=`mat3( ${y_.elements.map(t=>t.toFixed(4))} )`;switch(yt.getTransfer(n)){case yu:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function S_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+kD(n.getShaderSource(e),u)}else return a}function VD(n,e){const t=BD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zD={[MS]:"Linear",[ES]:"Reinhard",[TS]:"Cineon",[wS]:"ACESFilmic",[CS]:"AgX",[bS]:"Neutral",[AS]:"Custom"};function HD(n,e){const t=zD[e];return t===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jc=new re;function GD(){yt.getLuminanceCoefficients(jc);const n=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function jD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function XD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Xa(n){return n!==""}function M_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fp(n){return n.replace(YD,$D)}const qD=new Map;function $D(n,e){let t=mt[e];if(t===void 0){const r=qD.get(e);if(r!==void 0)t=mt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Fp(t)}const KD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(n){return n.replace(KD,ZD)}function ZD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function w_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const QD={[eu]:"SHADOWMAP_TYPE_PCF",[ja]:"SHADOWMAP_TYPE_VSM"};function JD(n){return QD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eL={[Vs]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE",[Du]:"ENVMAP_TYPE_CUBE_UV"};function tL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":eL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const nL={[Go]:"ENVMAP_MODE_REFRACTION"};function iL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":nL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rL={[SS]:"ENVMAP_BLENDING_MULTIPLY",[Wb]:"ENVMAP_BLENDING_MIX",[jb]:"ENVMAP_BLENDING_ADD"};function sL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":rL[n.combine]||"ENVMAP_BLENDING_NONE"}function oL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function aL(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=JD(t),h=tL(t),p=iL(t),v=sL(t),g=oL(t),_=WD(t),M=jD(a),A=o.createProgram();let y,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),S.length>0&&(S+=`
`)):(y=[w_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),S=[w_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?HD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,VD("linearToOutputTexel",t.outputColorSpace),GD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),c=Fp(c),c=M_(c,t),c=E_(c,t),u=Fp(u),u=M_(u,t),u=E_(u,t),c=T_(c),u=T_(u),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===kx?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=C+y+c,R=C+S+u,N=__(o,o.VERTEX_SHADER,P),L=__(o,o.FRAGMENT_SHADER,R);o.attachShader(A,N),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(k){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(A)||"",le=o.getShaderInfoLog(N)||"",ue=o.getShaderInfoLog(L)||"",G=q.trim(),Q=le.trim(),$=ue.trim();let X=!0,ie=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,N,L);else{const se=S_(o,N,"vertex"),O=S_(o,L,"fragment");Tt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+G+`
`+se+`
`+O)}else G!==""?ot("WebGLProgram: Program Info Log:",G):(Q===""||$==="")&&(ie=!1);ie&&(k.diagnostics={runnable:X,programLog:G,vertexShader:{log:Q,prefix:y},fragmentShader:{log:$,prefix:S}})}o.deleteShader(N),o.deleteShader(L),E=new su(o,A),I=XD(o,A)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(A,FD)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=OD++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=N,this.fragmentShader=L,this}let lL=0;class cL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new uL(e),t.set(e,r)),r}}class uL{constructor(e){this.id=lL++,this.code=e,this.usedTimes=0}}function fL(n){return n===zs||n===vu||n===xu}function dL(n,e,t,r,o,a){const c=new BS,u=new cL,d=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,I,B,k,q,le){const ue=k.fog,G=q.geometry,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,X=e.get(E.envMap||Q,$),ie=X&&X.mapping===Du?X.image.height:null,se=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ot("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const O=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,J=O!==void 0?O.length:0;let Oe=0;G.morphAttributes.position!==void 0&&(Oe=1),G.morphAttributes.normal!==void 0&&(Oe=2),G.morphAttributes.color!==void 0&&(Oe=3);let Ge,Ne,ce,ye;if(se){const lt=qi[se];Ge=lt.vertexShader,Ne=lt.fragmentShader}else Ge=E.vertexShader,Ne=E.fragmentShader,u.update(E),ce=u.getVertexShaderID(E),ye=u.getFragmentShaderID(E);const me=n.getRenderTarget(),Ue=n.state.buffers.depth.getReversed(),Je=q.isInstancedMesh===!0,et=q.isBatchedMesh===!0,Bt=!!E.map,dt=!!E.matcap,At=!!X,Nt=!!E.aoMap,ht=!!E.lightMap,Kt=!!E.bumpMap,Vt=!!E.normalMap,yn=!!E.displacementMap,W=!!E.emissiveMap,zt=!!E.metalnessMap,pt=!!E.roughnessMap,Pt=E.anisotropy>0,Le=E.clearcoat>0,Wt=E.dispersion>0,D=E.iridescence>0,T=E.sheen>0,K=E.transmission>0,he=Pt&&!!E.anisotropyMap,ge=Le&&!!E.clearcoatMap,Me=Le&&!!E.clearcoatNormalMap,De=Le&&!!E.clearcoatRoughnessMap,fe=D&&!!E.iridescenceMap,pe=D&&!!E.iridescenceThicknessMap,Fe=T&&!!E.sheenColorMap,Be=T&&!!E.sheenRoughnessMap,Ae=!!E.specularMap,Ee=!!E.specularColorMap,rt=!!E.specularIntensityMap,at=K&&!!E.transmissionMap,gt=K&&!!E.thicknessMap,H=!!E.gradientMap,we=!!E.alphaMap,de=E.alphaTest>0,ke=!!E.alphaHash,be=!!E.extensions;let ve=Qi;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=n.toneMapping);const Ye={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Ne,defines:E.defines,customVertexShaderID:ce,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:et,batchingColor:et&&q._colorsTexture!==null,instancing:Je,instancingColor:Je&&q.instanceColor!==null,instancingMorph:Je&&q.morphTexture!==null,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Bt,matcap:dt,envMap:At,envMapMode:At&&X.mapping,envMapCubeUVHeight:ie,aoMap:Nt,lightMap:ht,bumpMap:Kt,normalMap:Vt,displacementMap:yn,emissiveMap:W,normalMapObjectSpace:Vt&&E.normalMapType===qb,normalMapTangentSpace:Vt&&E.normalMapType===Ux,packedNormalMap:Vt&&E.normalMapType===Ux&&fL(E.normalMap.format),metalnessMap:zt,roughnessMap:pt,anisotropy:Pt,anisotropyMap:he,clearcoat:Le,clearcoatMap:ge,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,dispersion:Wt,iridescence:D,iridescenceMap:fe,iridescenceThicknessMap:pe,sheen:T,sheenColorMap:Fe,sheenRoughnessMap:Be,specularMap:Ae,specularColorMap:Ee,specularIntensityMap:rt,transmission:K,transmissionMap:at,thicknessMap:gt,gradientMap:H,opaque:E.transparent===!1&&E.blending===Oo&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:de,alphaHash:ke,combine:E.combine,mapUv:Bt&&M(E.map.channel),aoMapUv:Nt&&M(E.aoMap.channel),lightMapUv:ht&&M(E.lightMap.channel),bumpMapUv:Kt&&M(E.bumpMap.channel),normalMapUv:Vt&&M(E.normalMap.channel),displacementMapUv:yn&&M(E.displacementMap.channel),emissiveMapUv:W&&M(E.emissiveMap.channel),metalnessMapUv:zt&&M(E.metalnessMap.channel),roughnessMapUv:pt&&M(E.roughnessMap.channel),anisotropyMapUv:he&&M(E.anisotropyMap.channel),clearcoatMapUv:ge&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Be&&M(E.sheenRoughnessMap.channel),specularMapUv:Ae&&M(E.specularMap.channel),specularColorMapUv:Ee&&M(E.specularColorMap.channel),specularIntensityMapUv:rt&&M(E.specularIntensityMap.channel),transmissionMapUv:at&&M(E.transmissionMap.channel),thicknessMapUv:gt&&M(E.thicknessMap.channel),alphaMapUv:we&&M(E.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Vt||Pt),vertexNormals:!!G.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&(Bt||we),fog:!!ue,useFog:E.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||G.attributes.normal===void 0&&Vt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ue,skinning:q.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Oe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:ve,decodeVideoTexture:Bt&&E.map.isVideoTexture===!0&&yt.getTransfer(E.map.colorSpace)===It,decodeVideoTextureEmissive:W&&E.emissiveMap.isVideoTexture===!0&&yt.getTransfer(E.emissiveMap.colorSpace)===It,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sr,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:be&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&E.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=d.has(1),Ye.vertexUv2s=d.has(2),Ye.vertexUv3s=d.has(3),d.clear(),Ye}function y(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)I.push(B),I.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(S(I,E),C(I,E),I.push(n.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function S(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function C(E,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function P(E){const I=_[E.type];let B;if(I){const k=qi[I];B=LR.clone(k.uniforms)}else B=E.uniforms;return B}function R(E,I){let B=p.get(I);return B!==void 0?++B.usedTimes:(B=new aL(n,I,E,o),h.push(B),p.set(I,B)),B}function N(E){if(--E.usedTimes===0){const I=h.indexOf(E);h[I]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function L(E){u.remove(E)}function F(){u.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:N,releaseShaderCache:L,programs:h,dispose:F}}function hL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function pL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function A_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function C_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,A,y,S){let C=n[e];return C===void 0?(C={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:A,renderOrder:g.renderOrder,z:y,group:S},n[e]=C):(C.id=g.id,C.object=g,C.geometry=_,C.material=M,C.materialVariant=c(g),C.groupOrder=A,C.renderOrder=g.renderOrder,C.z=y,C.group=S),e++,C}function d(g,_,M,A,y,S){const C=u(g,_,M,A,y,S);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function h(g,_,M,A,y,S){const C=u(g,_,M,A,y,S);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function p(g,_){t.length>1&&t.sort(g||pL),r.length>1&&r.sort(_||A_),o.length>1&&o.sort(_||A_)}function v(){for(let g=e,_=n.length;g<_;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function mL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new C_,n.set(r,[c])):o>=a.length?(c=new C_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function gL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Ut};break;case"SpotLight":t={position:new re,direction:new re,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new re,halfWidth:new re,halfHeight:new re};break}return n[e.id]=t,t}}}function vL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xL=0;function _L(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yL(n){const e=new gL,t=vL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new re);const o=new re,a=new dn,c=new dn;function u(h){let p=0,v=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let _=0,M=0,A=0,y=0,S=0,C=0,P=0,R=0,N=0,L=0,F=0;h.sort(_L);for(let I=0,B=h.length;I<B;I++){const k=h[I],q=k.color,le=k.intensity,ue=k.distance;let G=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===zs?G=k.shadow.map.texture:G=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=q.r*le,v+=q.g*le,g+=q.b*le;else if(k.isLightProbe){for(let Q=0;Q<9;Q++)r.probe[Q].addScaledVector(k.sh.coefficients[Q],le);F++}else if(k.isDirectionalLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const $=k.shadow,X=t.get(k);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=k.shadow.matrix,C++}r.directional[_]=Q,_++}else if(k.isSpotLight){const Q=e.get(k);Q.position.setFromMatrixPosition(k.matrixWorld),Q.color.copy(q).multiplyScalar(le),Q.distance=ue,Q.coneCos=Math.cos(k.angle),Q.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Q.decay=k.decay,r.spot[A]=Q;const $=k.shadow;if(k.map&&(r.spotLightMap[N]=k.map,N++,$.updateMatrices(k),k.castShadow&&L++),r.spotLightMatrix[A]=$.matrix,k.castShadow){const X=t.get(k);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=G,R++}A++}else if(k.isRectAreaLight){const Q=e.get(k);Q.color.copy(q).multiplyScalar(le),Q.halfWidth.set(k.width*.5,0,0),Q.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=Q,y++}else if(k.isPointLight){const Q=e.get(k);if(Q.color.copy(k.color).multiplyScalar(k.intensity),Q.distance=k.distance,Q.decay=k.decay,k.castShadow){const $=k.shadow,X=t.get(k);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,r.pointShadow[M]=X,r.pointShadowMap[M]=G,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=Q,M++}else if(k.isHemisphereLight){const Q=e.get(k);Q.skyColor.copy(k.color).multiplyScalar(le),Q.groundColor.copy(k.groundColor).multiplyScalar(le),r.hemi[S]=Q,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ie.LTC_FLOAT_1,r.rectAreaLTC2=Ie.LTC_FLOAT_2):(r.rectAreaLTC1=Ie.LTC_HALF_1,r.rectAreaLTC2=Ie.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==_||E.pointLength!==M||E.spotLength!==A||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==C||E.numPointShadows!==P||E.numSpotShadows!==R||E.numSpotMaps!==N||E.numLightProbes!==F)&&(r.directional.length=_,r.spot.length=A,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+N-L,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,E.directionalLength=_,E.pointLength=M,E.spotLength=A,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=C,E.numPointShadows=P,E.numSpotShadows=R,E.numSpotMaps=N,E.numLightProbes=F,r.version=xL++)}function d(h,p){let v=0,g=0,_=0,M=0,A=0;const y=p.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const P=h[S];if(P.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(P.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(P.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:u,setupView:d,state:r}}function b_(n){const e=new yL(n),t=[],r=[],o=[];function a(g){v.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function u(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function p(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function SL(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new b_(n),e.set(o,[u])):a>=c.length?(u=new b_(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const ML=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,TL=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],wL=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],R_=new dn,Ha=new re,mh=new re;function AL(n,e,t){let r=new GS;const o=new Ft,a=new Ft,c=new rn,u=new FR,d=new OR,h={},p=t.maxTextureSize,v={[as]:Kn,[Kn]:as,[Sr]:Sr},g=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:ML,fragmentShader:EL}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new Rr;M.setAttribute("position",new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new nr(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let S=this.type;this.render=function(L,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===wb&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=eu);const I=n.getRenderTarget(),B=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Tr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const le=S!==this.type;le&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(G=>G.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,G=L.length;ue<G;ue++){const Q=L[ue],$=Q.shadow;if($===void 0){ot("WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const X=$.getFrameExtents();o.multiply(X),a.copy($.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/X.x),o.x=a.x*X.x,$.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/X.y),o.y=a.y*X.y,$.mapSize.y=a.y));const ie=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=ie,$.map===null||le===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ja){if(Q.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ji(o.x,o.y,{format:zs,type:Cr,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),$.map.texture.name=Q.name+".shadowMap",$.map.depthTexture=new Wo(o.x,o.y,$i),$.map.depthTexture.name=Q.name+".shadowMapDepth",$.map.depthTexture.format=br,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=wn,$.map.depthTexture.magFilter=wn}else Q.isPointLight?($.map=new KS(o.x),$.map.depthTexture=new PR(o.x,tr)):($.map=new Ji(o.x,o.y),$.map.depthTexture=new Wo(o.x,o.y,tr)),$.map.depthTexture.name=Q.name+".shadowMap",$.map.depthTexture.format=br,this.type===eu?($.map.depthTexture.compareFunction=ie?Mm:Sm,$.map.depthTexture.minFilter=Ln,$.map.depthTexture.magFilter=Ln):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=wn,$.map.depthTexture.magFilter=wn);$.camera.updateProjectionMatrix()}const se=$.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<se;O++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,O),n.clear();else{O===0&&(n.setRenderTarget($.map),n.clear());const J=$.getViewport(O);c.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),q.viewport(c)}if(Q.isPointLight){const J=$.camera,Oe=$.matrix,Ge=Q.distance||J.far;Ge!==J.far&&(J.far=Ge,J.updateProjectionMatrix()),Ha.setFromMatrixPosition(Q.matrixWorld),J.position.copy(Ha),mh.copy(J.position),mh.add(TL[O]),J.up.copy(wL[O]),J.lookAt(mh),J.updateMatrixWorld(),Oe.makeTranslation(-Ha.x,-Ha.y,-Ha.z),R_.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$._frustum.setFromProjectionMatrix(R_,J.coordinateSystem,J.reversedDepth)}else $.updateMatrices(Q);r=$.getFrustum(),R(F,E,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===ja&&C($,E),$.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(I,B,k)};function C(L,F){const E=e.update(A);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ji(o.x,o.y,{format:zs,type:Cr})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(F,null,E,g,A,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(F,null,E,_,A,null)}function P(L,F,E,I){let B=null;const k=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(k!==void 0)B=k;else if(B=E.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=B.uuid,le=F.uuid;let ue=h[q];ue===void 0&&(ue={},h[q]=ue);let G=ue[le];G===void 0&&(G=B.clone(),ue[le]=G,F.addEventListener("dispose",N)),B=G}if(B.visible=F.visible,B.wireframe=F.wireframe,I===ja?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:v[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const q=n.properties.get(B);q.light=E}return B}function R(L,F,E,I,B){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&B===ja)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const le=e.update(L),ue=L.material;if(Array.isArray(ue)){const G=le.groups;for(let Q=0,$=G.length;Q<$;Q++){const X=G[Q],ie=ue[X.materialIndex];if(ie&&ie.visible){const se=P(L,ie,I,B);L.onBeforeShadow(n,L,F,E,le,se,X),n.renderBufferDirect(E,null,le,se,L,X),L.onAfterShadow(n,L,F,E,le,se,X)}}}else if(ue.visible){const G=P(L,ue,I,B);L.onBeforeShadow(n,L,F,E,le,G,null),n.renderBufferDirect(E,null,le,G,L,null),L.onAfterShadow(n,L,F,E,le,G,null)}}const q=L.children;for(let le=0,ue=q.length;le<ue;le++)R(q[le],F,E,I,B)}function N(L){L.target.removeEventListener("dispose",N);for(const E in h){const I=h[E],B=L.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function CL(n,e){function t(){let H=!1;const we=new rn;let de=null;const ke=new rn(0,0,0,0);return{setMask:function(be){de!==be&&!H&&(n.colorMask(be,be,be,be),de=be)},setLocked:function(be){H=be},setClear:function(be,ve,Ye,lt,Ot){Ot===!0&&(be*=lt,ve*=lt,Ye*=lt),we.set(be,ve,Ye,lt),ke.equals(we)===!1&&(n.clearColor(be,ve,Ye,lt),ke.copy(we))},reset:function(){H=!1,de=null,ke.set(-1,0,0,0)}}}function r(){let H=!1,we=!1,de=null,ke=null,be=null;return{setReversed:function(ve){if(we!==ve){const Ye=e.get("EXT_clip_control");ve?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),we=ve;const lt=be;be=null,this.setClear(lt)}},getReversed:function(){return we},setTest:function(ve){ve?me(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(ve){de!==ve&&!H&&(n.depthMask(ve),de=ve)},setFunc:function(ve){if(we&&(ve=rR[ve]),ke!==ve){switch(ve){case qh:n.depthFunc(n.NEVER);break;case $h:n.depthFunc(n.ALWAYS);break;case Kh:n.depthFunc(n.LESS);break;case Ho:n.depthFunc(n.LEQUAL);break;case Zh:n.depthFunc(n.EQUAL);break;case Qh:n.depthFunc(n.GEQUAL);break;case Jh:n.depthFunc(n.GREATER);break;case ep:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ke=ve}},setLocked:function(ve){H=ve},setClear:function(ve){be!==ve&&(be=ve,we&&(ve=1-ve),n.clearDepth(ve))},reset:function(){H=!1,de=null,ke=null,be=null,we=!1}}}function o(){let H=!1,we=null,de=null,ke=null,be=null,ve=null,Ye=null,lt=null,Ot=null;return{setTest:function(Ct){H||(Ct?me(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(Ct){we!==Ct&&!H&&(n.stencilMask(Ct),we=Ct)},setFunc:function(Ct,Nn,ai){(de!==Ct||ke!==Nn||be!==ai)&&(n.stencilFunc(Ct,Nn,ai),de=Ct,ke=Nn,be=ai)},setOp:function(Ct,Nn,ai){(ve!==Ct||Ye!==Nn||lt!==ai)&&(n.stencilOp(Ct,Nn,ai),ve=Ct,Ye=Nn,lt=ai)},setLocked:function(Ct){H=Ct},setClear:function(Ct){Ot!==Ct&&(n.clearStencil(Ct),Ot=Ct)},reset:function(){H=!1,we=null,de=null,ke=null,be=null,ve=null,Ye=null,lt=null,Ot=null}}}const a=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let p={},v={},g={},_=new WeakMap,M=[],A=null,y=!1,S=null,C=null,P=null,R=null,N=null,L=null,F=null,E=new Ut(0,0,0),I=0,B=!1,k=null,q=null,le=null,ue=null,G=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ie)[1]),$=X>=1):ie.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),$=X>=2);let se=null,O={};const J=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),Ge=new rn().fromArray(J),Ne=new rn().fromArray(Oe);function ce(H,we,de,ke){const be=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<de;Ye++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(we,0,n.RGBA,1,1,ke,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(we+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return ve}const ye={};ye[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(n.DEPTH_TEST),c.setFunc(Ho),Kt(!1),Vt(Dx),me(n.CULL_FACE),Nt(Tr);function me(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function Ue(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function Je(H,we){return g[H]!==we?(n.bindFramebuffer(H,we),g[H]=we,H===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=we),H===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=we),!0):!1}function et(H,we){let de=M,ke=!1;if(H){de=_.get(we),de===void 0&&(de=[],_.set(we,de));const be=H.textures;if(de.length!==be.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ye=be.length;ve<Ye;ve++)de[ve]=n.COLOR_ATTACHMENT0+ve;de.length=be.length,ke=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,ke=!0);ke&&n.drawBuffers(de)}function Bt(H){return A!==H?(n.useProgram(H),A=H,!0):!1}const dt={[Ls]:n.FUNC_ADD,[Cb]:n.FUNC_SUBTRACT,[bb]:n.FUNC_REVERSE_SUBTRACT};dt[Rb]=n.MIN,dt[Pb]=n.MAX;const At={[Db]:n.ZERO,[Lb]:n.ONE,[Ib]:n.SRC_COLOR,[Xh]:n.SRC_ALPHA,[Bb]:n.SRC_ALPHA_SATURATE,[Ob]:n.DST_COLOR,[Ub]:n.DST_ALPHA,[Nb]:n.ONE_MINUS_SRC_COLOR,[Yh]:n.ONE_MINUS_SRC_ALPHA,[kb]:n.ONE_MINUS_DST_COLOR,[Fb]:n.ONE_MINUS_DST_ALPHA,[Vb]:n.CONSTANT_COLOR,[zb]:n.ONE_MINUS_CONSTANT_COLOR,[Hb]:n.CONSTANT_ALPHA,[Gb]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(H,we,de,ke,be,ve,Ye,lt,Ot,Ct){if(H===Tr){y===!0&&(Ue(n.BLEND),y=!1);return}if(y===!1&&(me(n.BLEND),y=!0),H!==Ab){if(H!==S||Ct!==B){if((C!==Ls||N!==Ls)&&(n.blendEquation(n.FUNC_ADD),C=Ls,N=Ls),Ct)switch(H){case Oo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lx:n.blendFunc(n.ONE,n.ONE);break;case Ix:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Tt("WebGLState: Invalid blending: ",H);break}else switch(H){case Oo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ix:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nx:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",H);break}P=null,R=null,L=null,F=null,E.set(0,0,0),I=0,S=H,B=Ct}return}be=be||we,ve=ve||de,Ye=Ye||ke,(we!==C||be!==N)&&(n.blendEquationSeparate(dt[we],dt[be]),C=we,N=be),(de!==P||ke!==R||ve!==L||Ye!==F)&&(n.blendFuncSeparate(At[de],At[ke],At[ve],At[Ye]),P=de,R=ke,L=ve,F=Ye),(lt.equals(E)===!1||Ot!==I)&&(n.blendColor(lt.r,lt.g,lt.b,Ot),E.copy(lt),I=Ot),S=H,B=!1}function ht(H,we){H.side===Sr?Ue(n.CULL_FACE):me(n.CULL_FACE);let de=H.side===Kn;we&&(de=!de),Kt(de),H.blending===Oo&&H.transparent===!1?Nt(Tr):Nt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const ke=H.stencilWrite;u.setTest(ke),ke&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),W(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(H){k!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),k=H)}function Vt(H){H!==Eb?(me(n.CULL_FACE),H!==q&&(H===Dx?n.cullFace(n.BACK):H===Tb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),q=H}function yn(H){H!==le&&($&&n.lineWidth(H),le=H)}function W(H,we,de){H?(me(n.POLYGON_OFFSET_FILL),(ue!==we||G!==de)&&(ue=we,G=de,c.getReversed()&&(we=-we),n.polygonOffset(we,de))):Ue(n.POLYGON_OFFSET_FILL)}function zt(H){H?me(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function pt(H){H===void 0&&(H=n.TEXTURE0+Q-1),se!==H&&(n.activeTexture(H),se=H)}function Pt(H,we,de){de===void 0&&(se===null?de=n.TEXTURE0+Q-1:de=se);let ke=O[de];ke===void 0&&(ke={type:void 0,texture:void 0},O[de]=ke),(ke.type!==H||ke.texture!==we)&&(se!==de&&(n.activeTexture(de),se=de),n.bindTexture(H,we||ye[H]),ke.type=H,ke.texture=we)}function Le(){const H=O[se];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Wt(){try{n.compressedTexImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function T(){try{n.texSubImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function K(){try{n.texSubImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function he(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function ge(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Me(){try{n.texStorage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function De(){try{n.texStorage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function fe(){try{n.texImage2D(...arguments)}catch(H){Tt("WebGLState:",H)}}function pe(){try{n.texImage3D(...arguments)}catch(H){Tt("WebGLState:",H)}}function Fe(H){return v[H]!==void 0?v[H]:n.getParameter(H)}function Be(H,we){v[H]!==we&&(n.pixelStorei(H,we),v[H]=we)}function Ae(H){Ge.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function Ee(H){Ne.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ne.copy(H))}function rt(H,we){let de=h.get(we);de===void 0&&(de=new WeakMap,h.set(we,de));let ke=de.get(H);ke===void 0&&(ke=n.getUniformBlockIndex(we,H.name),de.set(H,ke))}function at(H,we){const ke=h.get(we).get(H);d.get(we)!==ke&&(n.uniformBlockBinding(we,ke,H.__bindingPointIndex),d.set(we,ke))}function gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},v={},se=null,O={},g={},_=new WeakMap,M=[],A=null,y=!1,S=null,C=null,P=null,R=null,N=null,L=null,F=null,E=new Ut(0,0,0),I=0,B=!1,k=null,q=null,le=null,ue=null,G=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:me,disable:Ue,bindFramebuffer:Je,drawBuffers:et,useProgram:Bt,setBlending:Nt,setMaterial:ht,setFlipSided:Kt,setCullFace:Vt,setLineWidth:yn,setPolygonOffset:W,setScissorTest:zt,activeTexture:pt,bindTexture:Pt,unbindTexture:Le,compressedTexImage2D:Wt,compressedTexImage3D:D,texImage2D:fe,texImage3D:pe,pixelStorei:Be,getParameter:Fe,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:Me,texStorage3D:De,texSubImage2D:T,texSubImage3D:K,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Ae,viewport:Ee,reset:gt}}function bL(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,p=new WeakMap,v=new Set;let g;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,T){return M?new OffscreenCanvas(D,T):sl("canvas")}function y(D,T,K){let he=1;const ge=Wt(D);if((ge.width>K||ge.height>K)&&(he=K/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Me=Math.floor(he*ge.width),De=Math.floor(he*ge.height);g===void 0&&(g=A(Me,De));const fe=T?A(Me,De):g;return fe.width=Me,fe.height=De,fe.getContext("2d").drawImage(D,0,0,Me,De),ot("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Me+"x"+De+")."),fe}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function C(D){n.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function R(D,T,K,he,ge,Me=!1){if(D!==null){if(n[D]!==void 0)return n[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let De;he&&(De=e.get("EXT_texture_norm16"),De||ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=T;if(T===n.RED&&(K===n.FLOAT&&(fe=n.R32F),K===n.HALF_FLOAT&&(fe=n.R16F),K===n.UNSIGNED_BYTE&&(fe=n.R8),K===n.UNSIGNED_SHORT&&De&&(fe=De.R16_EXT),K===n.SHORT&&De&&(fe=De.R16_SNORM_EXT)),T===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.R8UI),K===n.UNSIGNED_SHORT&&(fe=n.R16UI),K===n.UNSIGNED_INT&&(fe=n.R32UI),K===n.BYTE&&(fe=n.R8I),K===n.SHORT&&(fe=n.R16I),K===n.INT&&(fe=n.R32I)),T===n.RG&&(K===n.FLOAT&&(fe=n.RG32F),K===n.HALF_FLOAT&&(fe=n.RG16F),K===n.UNSIGNED_BYTE&&(fe=n.RG8),K===n.UNSIGNED_SHORT&&De&&(fe=De.RG16_EXT),K===n.SHORT&&De&&(fe=De.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RG8UI),K===n.UNSIGNED_SHORT&&(fe=n.RG16UI),K===n.UNSIGNED_INT&&(fe=n.RG32UI),K===n.BYTE&&(fe=n.RG8I),K===n.SHORT&&(fe=n.RG16I),K===n.INT&&(fe=n.RG32I)),T===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),K===n.UNSIGNED_INT&&(fe=n.RGB32UI),K===n.BYTE&&(fe=n.RGB8I),K===n.SHORT&&(fe=n.RGB16I),K===n.INT&&(fe=n.RGB32I)),T===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),K===n.UNSIGNED_INT&&(fe=n.RGBA32UI),K===n.BYTE&&(fe=n.RGBA8I),K===n.SHORT&&(fe=n.RGBA16I),K===n.INT&&(fe=n.RGBA32I)),T===n.RGB&&(K===n.UNSIGNED_SHORT&&De&&(fe=De.RGB16_EXT),K===n.SHORT&&De&&(fe=De.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),T===n.RGBA){const pe=Me?yu:yt.getTransfer(ge);K===n.FLOAT&&(fe=n.RGBA32F),K===n.HALF_FLOAT&&(fe=n.RGBA16F),K===n.UNSIGNED_BYTE&&(fe=pe===It?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&De&&(fe=De.RGBA16_EXT),K===n.SHORT&&De&&(fe=De.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function N(D,T){let K;return D?T===null||T===tr||T===rl?K=n.DEPTH24_STENCIL8:T===$i?K=n.DEPTH32F_STENCIL8:T===il&&(K=n.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===tr||T===rl?K=n.DEPTH_COMPONENT24:T===$i?K=n.DEPTH_COMPONENT32F:T===il&&(K=n.DEPTH_COMPONENT16),K}function L(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Ln?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function F(D){const T=D.target;T.removeEventListener("dispose",F),I(T),T.isVideoTexture&&p.delete(T),T.isHTMLTexture&&v.delete(T)}function E(D){const T=D.target;T.removeEventListener("dispose",E),k(T)}function I(D){const T=r.get(D);if(T.__webglInit===void 0)return;const K=D.source,he=_.get(K);if(he){const ge=he[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&B(D),Object.keys(he).length===0&&_.delete(K)}r.remove(D)}function B(D){const T=r.get(D);n.deleteTexture(T.__webglTexture);const K=D.source,he=_.get(K);delete he[T.__cacheKey],c.memory.textures--}function k(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ge=0;ge<T.__webglFramebuffer[he].length;ge++)n.deleteFramebuffer(T.__webglFramebuffer[he][ge]);else n.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)n.deleteFramebuffer(T.__webglFramebuffer[he]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=D.textures;for(let he=0,ge=K.length;he<ge;he++){const Me=r.get(K[he]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(K[he])}r.remove(D)}let q=0;function le(){q=0}function ue(){return q}function G(D){q=D}function Q(){const D=q;return D>=o.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),q+=1,D}function $(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function X(D,T){const K=r.get(D);if(D.isVideoTexture&&Pt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const he=D.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(K,D,T);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+T)}function ie(D,T){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Ue(K,D,T);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+T)}function se(D,T){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Ue(K,D,T);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+T)}function O(D,T){const K=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){Je(K,D,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+T)}const J={[tp]:n.REPEAT,[Mr]:n.CLAMP_TO_EDGE,[np]:n.MIRRORED_REPEAT},Oe={[wn]:n.NEAREST,[Xb]:n.NEAREST_MIPMAP_NEAREST,[Ec]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[kd]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},Ge={[$b]:n.NEVER,[eR]:n.ALWAYS,[Kb]:n.LESS,[Sm]:n.LEQUAL,[Zb]:n.EQUAL,[Mm]:n.GEQUAL,[Qb]:n.GREATER,[Jb]:n.NOTEQUAL};function Ne(D,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ln||T.magFilter===kd||T.magFilter===Ec||T.magFilter===Fs||T.minFilter===Ln||T.minFilter===kd||T.minFilter===Ec||T.minFilter===Fs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,J[T.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,J[T.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,J[T.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,Oe[T.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,Oe[T.minFilter]),T.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,Ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==Ec&&T.minFilter!==Fs||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ce(D,T){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",F));const he=T.source;let ge=_.get(he);ge===void 0&&(ge={},_.set(he,ge));const Me=$(T);if(Me!==D.__cacheKey){ge[Me]===void 0&&(ge[Me]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ge[Me].usedTimes++;const De=ge[D.__cacheKey];De!==void 0&&(ge[D.__cacheKey].usedTimes--,De.usedTimes===0&&B(T)),D.__cacheKey=Me,D.__webglTexture=ge[Me].texture}return K}function ye(D,T,K){return Math.floor(Math.floor(D/K)/T)}function me(D,T,K,he){const Me=D.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,K,he,T.data);else{Me.sort((Be,Ae)=>Be.start-Ae.start);let De=0;for(let Be=1;Be<Me.length;Be++){const Ae=Me[De],Ee=Me[Be],rt=Ae.start+Ae.count,at=ye(Ee.start,T.width,4),gt=ye(Ae.start,T.width,4);Ee.start<=rt+1&&at===gt&&ye(Ee.start+Ee.count-1,T.width,4)===at?Ae.count=Math.max(Ae.count,Ee.start+Ee.count-Ae.start):(++De,Me[De]=Ee)}Me.length=De+1;const fe=t.getParameter(n.UNPACK_ROW_LENGTH),pe=t.getParameter(n.UNPACK_SKIP_PIXELS),Fe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Be=0,Ae=Me.length;Be<Ae;Be++){const Ee=Me[Be],rt=Math.floor(Ee.start/4),at=Math.ceil(Ee.count/4),gt=rt%T.width,H=Math.floor(rt/T.width),we=at,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,gt,H,we,de,K,he,T.data)}D.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,fe),t.pixelStorei(n.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function Ue(D,T,K){let he=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=n.TEXTURE_3D);const ge=ce(D,T),Me=T.source;t.bindTexture(he,D.__webglTexture,n.TEXTURE0+K);const De=r.get(Me);if(Me.version!==De.__version||ge===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const de=yt.getPrimaries(yt.workingColorSpace),ke=T.colorSpace===ns?null:yt.getPrimaries(T.colorSpace),be=T.colorSpace===ns||de===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let pe=y(T.image,!1,o.maxTextureSize);pe=Le(T,pe);const Fe=a.convert(T.format,T.colorSpace),Be=a.convert(T.type);let Ae=R(T.internalFormat,Fe,Be,T.normalized,T.colorSpace,T.isVideoTexture);Ne(he,T);let Ee;const rt=T.mipmaps,at=T.isVideoTexture!==!0,gt=De.__version===void 0||ge===!0,H=Me.dataReady,we=L(T,pe);if(T.isDepthTexture)Ae=N(T.format===Os,T.type),gt&&(at?t.texStorage2D(n.TEXTURE_2D,1,Ae,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Fe,Be,null));else if(T.isDataTexture)if(rt.length>0){at&&gt&&t.texStorage2D(n.TEXTURE_2D,we,Ae,rt[0].width,rt[0].height);for(let de=0,ke=rt.length;de<ke;de++)Ee=rt[de],at?H&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Fe,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,de,Ae,Ee.width,Ee.height,0,Fe,Be,Ee.data);T.generateMipmaps=!1}else at?(gt&&t.texStorage2D(n.TEXTURE_2D,we,Ae,pe.width,pe.height),H&&me(T,pe,Fe,Be)):t.texImage2D(n.TEXTURE_2D,0,Ae,pe.width,pe.height,0,Fe,Be,pe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){at&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ae,rt[0].width,rt[0].height,pe.depth);for(let de=0,ke=rt.length;de<ke;de++)if(Ee=rt[de],T.format!==Ui)if(Fe!==null)if(at){if(H)if(T.layerUpdates.size>0){const be=o_(Ee.width,Ee.height,T.format,T.type);for(const ve of T.layerUpdates){const Ye=Ee.data.subarray(ve*be/Ee.data.BYTES_PER_ELEMENT,(ve+1)*be/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,ve,Ee.width,Ee.height,1,Fe,Ye)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,Fe,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ae,Ee.width,Ee.height,pe.depth,0,Ee.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Ee.width,Ee.height,pe.depth,Fe,Be,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ae,Ee.width,Ee.height,pe.depth,0,Fe,Be,Ee.data)}else{at&&gt&&t.texStorage2D(n.TEXTURE_2D,we,Ae,rt[0].width,rt[0].height);for(let de=0,ke=rt.length;de<ke;de++)Ee=rt[de],T.format!==Ui?Fe!==null?at?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Fe,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ae,Ee.width,Ee.height,0,Ee.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ee.width,Ee.height,Fe,Be,Ee.data):t.texImage2D(n.TEXTURE_2D,de,Ae,Ee.width,Ee.height,0,Fe,Be,Ee.data)}else if(T.isDataArrayTexture)if(at){if(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Ae,pe.width,pe.height,pe.depth),H)if(T.layerUpdates.size>0){const de=o_(pe.width,pe.height,T.format,T.type);for(const ke of T.layerUpdates){const be=pe.data.subarray(ke*de/pe.data.BYTES_PER_ELEMENT,(ke+1)*de/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,pe.width,pe.height,1,Fe,Be,be)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Fe,Be,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,pe.width,pe.height,pe.depth,0,Fe,Be,pe.data);else if(T.isData3DTexture)at?(gt&&t.texStorage3D(n.TEXTURE_3D,we,Ae,pe.width,pe.height,pe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Fe,Be,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,pe.width,pe.height,pe.depth,0,Fe,Be,pe.data);else if(T.isFramebufferTexture){if(gt)if(at)t.texStorage2D(n.TEXTURE_2D,we,Ae,pe.width,pe.height);else{let de=pe.width,ke=pe.height;for(let be=0;be<we;be++)t.texImage2D(n.TEXTURE_2D,be,Ae,de,ke,0,Fe,Be,null),de>>=1,ke>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),pe.parentNode!==de){de.appendChild(pe),v.add(T),de.onpaint=lt=>{const Ot=lt.changedElements;for(const Ct of v)Ot.includes(Ct.image)&&(Ct.needsUpdate=!0)},de.requestPaint();return}const ke=0,be=n.RGBA,ve=n.RGBA,Ye=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,ke,be,ve,Ye,pe),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(rt.length>0){if(at&&gt){const de=Wt(rt[0]);t.texStorage2D(n.TEXTURE_2D,we,Ae,de.width,de.height)}for(let de=0,ke=rt.length;de<ke;de++)Ee=rt[de],at?H&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Fe,Be,Ee):t.texImage2D(n.TEXTURE_2D,de,Ae,Fe,Be,Ee);T.generateMipmaps=!1}else if(at){if(gt){const de=Wt(pe);t.texStorage2D(n.TEXTURE_2D,we,Ae,de.width,de.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,Be,pe)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Fe,Be,pe);S(T)&&C(he),De.__version=Me.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Je(D,T,K){if(T.image.length!==6)return;const he=ce(D,T),ge=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+K);const Me=r.get(ge);if(ge.version!==Me.__version||he===!0){t.activeTexture(n.TEXTURE0+K);const De=yt.getPrimaries(yt.workingColorSpace),fe=T.colorSpace===ns?null:yt.getPrimaries(T.colorSpace),pe=T.colorSpace===ns||De===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,Be=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let ve=0;ve<6;ve++)!Fe&&!Be?Ae[ve]=y(T.image[ve],!0,o.maxCubemapSize):Ae[ve]=Be?T.image[ve].image:T.image[ve],Ae[ve]=Le(T,Ae[ve]);const Ee=Ae[0],rt=a.convert(T.format,T.colorSpace),at=a.convert(T.type),gt=R(T.internalFormat,rt,at,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,we=Me.__version===void 0||he===!0,de=ge.dataReady;let ke=L(T,Ee);Ne(n.TEXTURE_CUBE_MAP,T);let be;if(Fe){H&&we&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,gt,Ee.width,Ee.height);for(let ve=0;ve<6;ve++){be=Ae[ve].mipmaps;for(let Ye=0;Ye<be.length;Ye++){const lt=be[Ye];T.format!==Ui?rt!==null?H?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,rt,lt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,gt,lt.width,lt.height,0,lt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,0,0,lt.width,lt.height,rt,at,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye,gt,lt.width,lt.height,0,rt,at,lt.data)}}}else{if(be=T.mipmaps,H&&we){be.length>0&&ke++;const ve=Wt(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,gt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Be){H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae[ve].width,Ae[ve].height,rt,at,Ae[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,gt,Ae[ve].width,Ae[ve].height,0,rt,at,Ae[ve].data);for(let Ye=0;Ye<be.length;Ye++){const Ot=be[Ye].image[ve].image;H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,Ot.width,Ot.height,rt,at,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,gt,Ot.width,Ot.height,0,rt,at,Ot.data)}}else{H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,rt,at,Ae[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,gt,rt,at,Ae[ve]);for(let Ye=0;Ye<be.length;Ye++){const lt=be[Ye];H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,0,0,rt,at,lt.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ye+1,gt,rt,at,lt.image[ve])}}}S(T)&&C(n.TEXTURE_CUBE_MAP),Me.__version=ge.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function et(D,T,K,he,ge,Me){const De=a.convert(K.format,K.colorSpace),fe=a.convert(K.type),pe=R(K.internalFormat,De,fe,K.normalized,K.colorSpace),Fe=r.get(T),Be=r.get(K);if(Be.__renderTarget=T,!Fe.__hasExternalTextures){const Ae=Math.max(1,T.width>>Me),Ee=Math.max(1,T.height>>Me);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,Me,pe,Ae,Ee,T.depth,0,De,fe,null):t.texImage2D(ge,Me,pe,Ae,Ee,0,De,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),pt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,ge,Be.__webglTexture,0,zt(T)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,he,ge,Be.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(D,T,K){if(n.bindRenderbuffer(n.RENDERBUFFER,D),T.depthBuffer){const he=T.depthTexture,ge=he&&he.isDepthTexture?he.type:null,Me=N(T.stencilBuffer,ge),De=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(T),Me,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(T),Me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Me,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,De,n.RENDERBUFFER,D)}else{const he=T.textures;for(let ge=0;ge<he.length;ge++){const Me=he[ge],De=a.convert(Me.format,Me.colorSpace),fe=a.convert(Me.type),pe=R(Me.internalFormat,De,fe,Me.normalized,Me.colorSpace);pt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt(T),pe,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt(T),pe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,pe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function dt(D,T,K){const he=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,T.depthTexture);const Fe=a.convert(T.depthTexture.format),Be=a.convert(T.depthTexture.type);let Ae;T.depthTexture.format===br?Ae=n.DEPTH_COMPONENT24:T.depthTexture.format===Os&&(Ae=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ae,T.width,T.height,0,Fe,Be,null)}}else X(T.depthTexture,0);const Me=ge.__webglTexture,De=zt(T),fe=he?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,pe=T.depthTexture.format===Os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===br)pt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,fe,Me,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,pe,fe,Me,0);else if(T.depthTexture.format===Os)pt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,fe,Me,0,De):n.framebufferTexture2D(n.FRAMEBUFFER,pe,fe,Me,0);else throw new Error("Unknown depthTexture format")}function At(D){const T=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=he}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let he=0;he<6;he++)dt(T.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?dt(T.__webglFramebuffer[0],D,0):dt(T.__webglFramebuffer,D,0)}else if(K){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=n.createRenderbuffer(),Bt(T.__webglDepthbuffer[he],D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer[he];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Me)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Bt(T.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(D,T,K){const he=r.get(D);T!==void 0&&et(he.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&At(D)}function ht(D){const T=D.texture,K=r.get(D),he=r.get(T);D.addEventListener("dispose",E);const ge=D.textures,Me=D.isWebGLCubeRenderTarget===!0,De=ge.length>1;if(De||(he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture()),he.__version=T.version,c.memory.textures++),Me){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let pe=0;pe<T.mipmaps.length;pe++)K.__webglFramebuffer[fe][pe]=n.createFramebuffer()}else K.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<T.mipmaps.length;fe++)K.__webglFramebuffer[fe]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(De)for(let fe=0,pe=ge.length;fe<pe;fe++){const Fe=r.get(ge[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),c.memory.textures++)}if(D.samples>0&&pt(D)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<ge.length;fe++){const pe=ge[fe];K.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Fe=a.convert(pe.format,pe.colorSpace),Be=a.convert(pe.type),Ae=R(pe.internalFormat,Fe,Be,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Ee=zt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,Ae,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,he.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,T);for(let fe=0;fe<6;fe++)if(T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)et(K.__webglFramebuffer[fe][pe],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else et(K.__webglFramebuffer[fe],D,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(T)&&C(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let fe=0,pe=ge.length;fe<pe;fe++){const Fe=ge[fe],Be=r.get(Fe);let Ae=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Be.__webglTexture),Ne(Ae,Fe),et(K.__webglFramebuffer,D,Fe,n.COLOR_ATTACHMENT0+fe,Ae,0),S(Fe)&&C(Ae)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(fe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,he.__webglTexture),Ne(fe,T),T.mipmaps&&T.mipmaps.length>0)for(let pe=0;pe<T.mipmaps.length;pe++)et(K.__webglFramebuffer[pe],D,T,n.COLOR_ATTACHMENT0,fe,pe);else et(K.__webglFramebuffer,D,T,n.COLOR_ATTACHMENT0,fe,0);S(T)&&C(fe),t.unbindTexture()}D.depthBuffer&&At(D)}function Kt(D){const T=D.textures;for(let K=0,he=T.length;K<he;K++){const ge=T[K];if(S(ge)){const Me=P(D),De=r.get(ge).__webglTexture;t.bindTexture(Me,De),C(Me),t.unbindTexture()}}}const Vt=[],yn=[];function W(D){if(D.samples>0){if(pt(D)===!1){const T=D.textures,K=D.width,he=D.height;let ge=n.COLOR_BUFFER_BIT;const Me=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,De=r.get(D),fe=T.length>1;if(fe)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);const Be=r.get(T[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,K,he,0,0,K,he,ge,n.NEAREST),d===!0&&(Vt.length=0,yn.length=0,Vt.push(n.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Vt.push(Me),yn.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,yn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,De.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,De.__webglColorRenderbuffer[Fe]);const Be=r.get(T[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,De.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const T=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function zt(D){return Math.min(o.maxSamples,D.samples)}function pt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Pt(D){const T=c.render.frame;p.get(D)!==T&&(p.set(D,T),D.update())}function Le(D,T){const K=D.colorSpace,he=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==_u&&K!==ns&&(yt.getTransfer(K)===It?(he!==Ui||ge!==mi)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",K)),T}function Wt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=le,this.getTextureUnits=ue,this.setTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=Nt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=et,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function RL(n,e){function t(r,o=ns){let a;const c=yt.getTransfer(o);if(r===mi)return n.UNSIGNED_BYTE;if(r===gm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===LS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===IS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===PS)return n.BYTE;if(r===DS)return n.SHORT;if(r===il)return n.UNSIGNED_SHORT;if(r===mm)return n.INT;if(r===tr)return n.UNSIGNED_INT;if(r===$i)return n.FLOAT;if(r===Cr)return n.HALF_FLOAT;if(r===NS)return n.ALPHA;if(r===US)return n.RGB;if(r===Ui)return n.RGBA;if(r===br)return n.DEPTH_COMPONENT;if(r===Os)return n.DEPTH_STENCIL;if(r===FS)return n.RED;if(r===xm)return n.RED_INTEGER;if(r===zs)return n.RG;if(r===_m)return n.RG_INTEGER;if(r===ym)return n.RGBA_INTEGER;if(r===tu||r===nu||r===iu||r===ru)if(c===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===tu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===tu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===iu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ru)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ip||r===rp||r===sp||r===op)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ip)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===op)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ap||r===lp||r===cp||r===up||r===fp||r===vu||r===dp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ap||r===lp)return c===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===up)return a.COMPRESSED_R11_EAC;if(r===fp)return a.COMPRESSED_SIGNED_R11_EAC;if(r===vu)return a.COMPRESSED_RG11_EAC;if(r===dp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hp||r===pp||r===mp||r===gp||r===vp||r===xp||r===_p||r===yp||r===Sp||r===Mp||r===Ep||r===Tp||r===wp||r===Ap)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===hp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_p)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ep)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Tp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wp)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ap)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cp||r===bp||r===Rp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Cp)return c===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pp||r===Dp||r===xu||r===Lp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Pp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Dp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===rl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const PL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new jS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ir({vertexShader:PL,fragmentShader:DL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nr(new hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IL extends Gs{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,_=null,M=null;const A=typeof XRWebGLBinding<"u",y=new LL,S={},C=t.getContextAttributes();let P=null,R=null;const N=[],L=[],F=new Ft;let E=null;const I=new Di;I.viewport=new rn;const B=new Di;B.viewport=new rn;const k=[I,B],q=new GR;let le=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ye=N[ce];return ye===void 0&&(ye=new Xd,N[ce]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(ce){let ye=N[ce];return ye===void 0&&(ye=new Xd,N[ce]=ye),ye.getGripSpace()},this.getHand=function(ce){let ye=N[ce];return ye===void 0&&(ye=new Xd,N[ce]=ye),ye.getHandSpace()};function G(ce){const ye=L.indexOf(ce.inputSource);if(ye===-1)return;const me=N[ye];me!==void 0&&(me.update(ce.inputSource,ce.frame,h||c),me.dispatchEvent({type:ce.type,data:ce.inputSource}))}function Q(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",Q),o.removeEventListener("inputsourceschange",$);for(let ce=0;ce<N.length;ce++){const ye=L[ce];ye!==null&&(L[ce]=null,N[ce].disconnect(ye))}le=null,ue=null,y.reset();for(const ce in S)delete S[ce];e.setRenderTarget(P),_=null,g=null,v=null,o=null,R=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){u=ce,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ce){h=ce},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",Q),o.addEventListener("inputsourceschange",$),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Je=null;C.depth&&(Je=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?Os:br,Ue=C.stencil?rl:tr);const et={colorFormat:t.RGBA8,depthFormat:Je,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ji(g.textureWidth,g.textureHeight,{format:Ui,type:mi,depthTexture:new Wo(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Ji(_.framebufferWidth,_.framebufferHeight,{format:Ui,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(ce){for(let ye=0;ye<ce.removed.length;ye++){const me=ce.removed[ye],Ue=L.indexOf(me);Ue>=0&&(L[Ue]=null,N[Ue].disconnect(me))}for(let ye=0;ye<ce.added.length;ye++){const me=ce.added[ye];let Ue=L.indexOf(me);if(Ue===-1){for(let et=0;et<N.length;et++)if(et>=L.length){L.push(me),Ue=et;break}else if(L[et]===null){L[et]=me,Ue=et;break}if(Ue===-1)break}const Je=N[Ue];Je&&Je.connect(me)}}const X=new re,ie=new re;function se(ce,ye,me){X.setFromMatrixPosition(ye.matrixWorld),ie.setFromMatrixPosition(me.matrixWorld);const Ue=X.distanceTo(ie),Je=ye.projectionMatrix.elements,et=me.projectionMatrix.elements,Bt=Je[14]/(Je[10]-1),dt=Je[14]/(Je[10]+1),At=(Je[9]+1)/Je[5],Nt=(Je[9]-1)/Je[5],ht=(Je[8]-1)/Je[0],Kt=(et[8]+1)/et[0],Vt=Bt*ht,yn=Bt*Kt,W=Ue/(-ht+Kt),zt=W*-ht;if(ye.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(zt),ce.translateZ(W),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),Je[10]===-1)ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const pt=Bt+W,Pt=dt+W,Le=Vt-zt,Wt=yn+(Ue-zt),D=At*dt/Pt*pt,T=Nt*dt/Pt*pt;ce.projectionMatrix.makePerspective(Le,Wt,D,T,pt,Pt),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function O(ce,ye){ye===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ye.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let ye=ce.near,me=ce.far;y.texture!==null&&(y.depthNear>0&&(ye=y.depthNear),y.depthFar>0&&(me=y.depthFar)),q.near=B.near=I.near=ye,q.far=B.far=I.far=me,(le!==q.near||ue!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),le=q.near,ue=q.far),q.layers.mask=ce.layers.mask|6,I.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;const Ue=ce.parent,Je=q.cameras;O(q,Ue);for(let et=0;et<Je.length;et++)O(Je[et],Ue);Je.length===2?se(q,I,B):q.projectionMatrix.copy(I.projectionMatrix),J(ce,q,Ue)};function J(ce,ye,me){me===null?ce.matrix.copy(ye.matrixWorld):(ce.matrix.copy(me.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ye.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ye.projectionMatrix),ce.projectionMatrixInverse.copy(ye.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Np*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(ce){d=ce,g!==null&&(g.fixedFoveation=ce),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=ce)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(ce){return S[ce]};let Oe=null;function Ge(ce,ye){if(p=ye.getViewerPose(h||c),M=ye,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Ue=!1;me.length!==q.cameras.length&&(q.cameras.length=0,Ue=!0);for(let dt=0;dt<me.length;dt++){const At=me[dt];let Nt=null;if(_!==null)Nt=_.getViewport(At);else{const Kt=v.getViewSubImage(g,At);Nt=Kt.viewport,dt===0&&(e.setRenderTargetTextures(R,Kt.colorTexture,Kt.depthStencilTexture),e.setRenderTarget(R))}let ht=k[dt];ht===void 0&&(ht=new Di,ht.layers.enable(dt),ht.viewport=new rn,k[dt]=ht),ht.matrix.fromArray(At.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(At.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),dt===0&&(q.matrix.copy(ht.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ue===!0&&q.cameras.push(ht)}const Je=o.enabledFeatures;if(Je&&Je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const dt=v.getDepthInformation(me[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(Je&&Je.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<me.length;dt++){const At=me[dt].camera;if(At){let Nt=S[At];Nt||(Nt=new jS,S[At]=Nt);const ht=v.getCameraImage(At);Nt.sourceTexture=ht}}}}for(let me=0;me<N.length;me++){const Ue=L[me],Je=N[me];Ue!==null&&Je!==void 0&&Je.update(Ue,ye,h||c)}Oe&&Oe(ce,ye),ye.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ye}),M=null}const Ne=new qS;Ne.setAnimationLoop(Ge),this.setAnimationLoop=function(ce){Oe=ce},this.dispose=function(){}}}const NL=new dn,tM=new ft;tM.set(-1,0,0,0,1,0,0,0,1);function UL(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,XS(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,C,P,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),p(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),g(y,S),S.isMeshPhysicalMaterial&&_(y,S,R)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),A(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&u(y,S)):S.isPointsMaterial?d(y,S,C,P):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),P=C.envMap,R=C.envMapRotation;P&&(y.envMap.value=P,y.envMapRotation.value.setFromMatrix4(NL.makeRotationFromEuler(R)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(tM),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function u(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,C,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=P*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function FL(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,P){const R=P.program;r.uniformBlockBinding(C,R)}function h(C,P){let R=o[C.id];R===void 0&&(M(C),R=p(C),o[C.id]=R,C.addEventListener("dispose",y));const N=P.program;r.updateUBOMapping(C,N);const L=e.render.frame;a[C.id]!==L&&(g(C),a[C.id]=L)}function p(C){const P=v();C.__bindingPointIndex=P;const R=n.createBuffer(),N=C.__size,L=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,N,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,R),R}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],R=C.uniforms,N=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let L=0,F=R.length;L<F;L++){const E=Array.isArray(R[L])?R[L]:[R[L]];for(let I=0,B=E.length;I<B;I++){const k=E[I];if(_(k,L,I,N)===!0){const q=k.__offset,le=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let G=0;G<le.length;G++){const Q=le[G],$=A(Q);typeof Q=="number"||typeof Q=="boolean"?(k.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,q+ue,k.__data)):Q.isMatrix3?(k.__data[0]=Q.elements[0],k.__data[1]=Q.elements[1],k.__data[2]=Q.elements[2],k.__data[3]=0,k.__data[4]=Q.elements[3],k.__data[5]=Q.elements[4],k.__data[6]=Q.elements[5],k.__data[7]=0,k.__data[8]=Q.elements[6],k.__data[9]=Q.elements[7],k.__data[10]=Q.elements[8],k.__data[11]=0):ArrayBuffer.isView(Q)?k.__data.set(new Q.constructor(Q.buffer,Q.byteOffset,k.__data.length)):(Q.toArray(k.__data,ue),ue+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(C,P,R,N){const L=C.value,F=P+"_"+R;if(N[F]===void 0)return typeof L=="number"||typeof L=="boolean"?N[F]=L:ArrayBuffer.isView(L)?N[F]=L.slice():N[F]=L.clone(),!0;{const E=N[F];if(typeof L=="number"||typeof L=="boolean"){if(E!==L)return N[F]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(E.equals(L)===!1)return E.copy(L),!0}}return!1}function M(C){const P=C.uniforms;let R=0;const N=16;for(let F=0,E=P.length;F<E;F++){const I=Array.isArray(P[F])?P[F]:[P[F]];for(let B=0,k=I.length;B<k;B++){const q=I[B],le=Array.isArray(q.value)?q.value:[q.value];for(let ue=0,G=le.length;ue<G;ue++){const Q=le[ue],$=A(Q),X=R%N,ie=X%$.boundary,se=X+ie;R+=ie,se!==0&&N-se<$.storage&&(R+=N-se),q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=R,R+=$.storage}}}const L=R%N;return L>0&&(R+=N-L),C.__size=R,C.__cache={},this}function A(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(P.boundary=16,P.storage=C.byteLength):ot("WebGLRenderer: Unsupported uniform value type.",C),P}function y(C){const P=C.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function S(){for(const C in o)n.deleteBuffer(o[C]);c=[],o={},a={}}return{bind:d,update:h,dispose:S}}const OL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function kL(){return ji===null&&(ji=new AR(OL,16,16,zs,Cr),ji.name="DFG_LUT",ji.minFilter=Ln,ji.magFilter=Ln,ji.wrapS=Mr,ji.wrapT=Mr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class BL{constructor(e={}){const{canvas:t=nR(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=mi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const A=_,y=new Set([ym,_m,xm]),S=new Set([mi,tr,il,rl,gm,vm]),C=new Uint32Array(4),P=new Int32Array(4),R=new re;let N=null,L=null;const F=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let k=!1,q=null;this._outputColorSpace=ii;let le=0,ue=0,G=null,Q=-1,$=null;const X=new rn,ie=new rn;let se=null;const O=new Ut(0);let J=0,Oe=t.width,Ge=t.height,Ne=1,ce=null,ye=null;const me=new rn(0,0,Oe,Ge),Ue=new rn(0,0,Oe,Ge);let Je=!1;const et=new GS;let Bt=!1,dt=!1;const At=new dn,Nt=new re,ht=new rn,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function yn(){return G===null?Ne:1}let W=r;function zt(b,Y){return t.getContext(b,Y)}try{const b={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pm}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",lt,!1),W===null){const Y="webgl2";if(W=zt(Y,b),W===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Tt("WebGLRenderer: "+b.message),b}let pt,Pt,Le,Wt,D,T,K,he,ge,Me,De,fe,pe,Fe,Be,Ae,Ee,rt,at,gt,H,we,de;function ke(){pt=new k3(W),pt.init(),H=new RL(W,pt),Pt=new P3(W,pt,e,H),Le=new CL(W,pt),Pt.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),Wt=new z3(W),D=new hL,T=new bL(W,pt,Le,D,Pt,H,Wt),K=new O3(B),he=new jR(W),we=new b3(W,he),ge=new B3(W,he,Wt,we),Me=new G3(W,ge,he,we,Wt),rt=new H3(W,Pt,T),Be=new D3(D),De=new dL(B,K,pt,Pt,we,Be),fe=new UL(B,D),pe=new mL,Fe=new SL(pt),Ee=new C3(B,K,Le,Me,M,d),Ae=new AL(B,Me,Pt),de=new FL(W,Wt,Pt,Le),at=new R3(W,pt,Wt),gt=new V3(W,pt,Wt),Wt.programs=De.programs,B.capabilities=Pt,B.extensions=pt,B.properties=D,B.renderLists=pe,B.shadowMap=Ae,B.state=Le,B.info=Wt}ke(),A!==mi&&(I=new j3(A,t.width,t.height,o,a));const be=new IL(B,W);this.xr=be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(b){b!==void 0&&(Ne=b,this.setSize(Oe,Ge,!1))},this.getSize=function(b){return b.set(Oe,Ge)},this.setSize=function(b,Y,oe=!0){if(be.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=b,Ge=Y,t.width=Math.floor(b*Ne),t.height=Math.floor(Y*Ne),oe===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(Oe*Ne,Ge*Ne).floor()},this.setDrawingBufferSize=function(b,Y,oe){Oe=b,Ge=Y,Ne=oe,t.width=Math.floor(b*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,b,Y)},this.setEffects=function(b){if(A===mi){Tt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Y=0;Y<b.length;Y++)if(b[Y].isOutputPass===!0){ot("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(X)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,Y,oe,te){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,Y,oe,te),Le.viewport(X.copy(me).multiplyScalar(Ne).round())},this.getScissor=function(b){return b.copy(Ue)},this.setScissor=function(b,Y,oe,te){b.isVector4?Ue.set(b.x,b.y,b.z,b.w):Ue.set(b,Y,oe,te),Le.scissor(ie.copy(Ue).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){Le.setScissorTest(Je=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){ye=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,oe=!0){let te=0;if(b){let ee=!1;if(G!==null){const Pe=G.texture.format;ee=y.has(Pe)}if(ee){const Pe=G.texture.type,He=S.has(Pe),Ce=Ee.getClearColor(),qe=Ee.getClearAlpha(),Qe=Ce.r,ct=Ce.g,ut=Ce.b;He?(C[0]=Qe,C[1]=ct,C[2]=ut,C[3]=qe,W.clearBufferuiv(W.COLOR,0,C)):(P[0]=Qe,P[1]=ct,P[2]=ut,P[3]=qe,W.clearBufferiv(W.COLOR,0,P))}else te|=W.COLOR_BUFFER_BIT}Y&&(te|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(te|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&W.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),q=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",lt,!1),Ee.dispose(),pe.dispose(),Fe.dispose(),D.dispose(),K.dispose(),Me.dispose(),we.dispose(),de.dispose(),De.dispose(),be.dispose(),be.removeEventListener("sessionstart",cs),be.removeEventListener("sessionend",js),sr.stop()};function ve(b){b.preventDefault(),Vx("WebGLRenderer: Context Lost."),k=!0}function Ye(){Vx("WebGLRenderer: Context Restored."),k=!1;const b=Wt.autoReset,Y=Ae.enabled,oe=Ae.autoUpdate,te=Ae.needsUpdate,ee=Ae.type;ke(),Wt.autoReset=b,Ae.enabled=Y,Ae.autoUpdate=oe,Ae.needsUpdate=te,Ae.type=ee}function lt(b){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ot(b){const Y=b.target;Y.removeEventListener("dispose",Ot),Ct(Y)}function Ct(b){Nn(b),D.remove(b)}function Nn(b){const Y=D.get(b).programs;Y!==void 0&&(Y.forEach(function(oe){De.releaseProgram(oe)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,oe,te,ee,Pe){Y===null&&(Y=Kt);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=gl(b,Y,oe,te,ee);Le.setMaterial(te,He);let qe=oe.index,Qe=1;if(te.wireframe===!0){if(qe=ge.getWireframeAttribute(oe),qe===void 0)return;Qe=2}const ct=oe.drawRange,ut=oe.attributes.position;let Ke=ct.start*Qe,Mt=(ct.start+ct.count)*Qe;Pe!==null&&(Ke=Math.max(Ke,Pe.start*Qe),Mt=Math.min(Mt,(Pe.start+Pe.count)*Qe)),qe!==null?(Ke=Math.max(Ke,0),Mt=Math.min(Mt,qe.count)):ut!=null&&(Ke=Math.max(Ke,0),Mt=Math.min(Mt,ut.count));const Ht=Mt-Ke;if(Ht<0||Ht===1/0)return;we.setup(ee,te,Ce,oe,qe);let qt,Dt=at;if(qe!==null&&(qt=he.get(qe),Dt=gt,Dt.setIndex(qt)),ee.isMesh)te.wireframe===!0?(Le.setLineWidth(te.wireframeLinewidth*yn()),Dt.setMode(W.LINES)):Dt.setMode(W.TRIANGLES);else if(ee.isLine){let sn=te.linewidth;sn===void 0&&(sn=1),Le.setLineWidth(sn*yn()),ee.isLineSegments?Dt.setMode(W.LINES):ee.isLineLoop?Dt.setMode(W.LINE_LOOP):Dt.setMode(W.LINE_STRIP)}else ee.isPoints?Dt.setMode(W.POINTS):ee.isSprite&&Dt.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const sn=ee._multiDrawStarts,Ve=ee._multiDrawCounts,Sn=ee._multiDrawCount,vt=qe?he.get(qe).bytesPerElement:1,Vn=D.get(te).currentProgram.getUniforms();for(let zn=0;zn<Sn;zn++)Vn.setValue(W,"_gl_DrawID",zn),Dt.render(sn[zn]/vt,Ve[zn])}else if(ee.isInstancedMesh)Dt.renderInstances(Ke,Ht,ee.count);else if(oe.isInstancedBufferGeometry){const sn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,sn);Dt.renderInstances(Ke,Ht,Ve)}else Dt.render(Ke,Ht)};function ai(b,Y,oe){b.transparent===!0&&b.side===Sr&&b.forceSinglePass===!1?(b.side=Kn,b.needsUpdate=!0,Xs(b,Y,oe),b.side=as,b.needsUpdate=!0,Xs(b,Y,oe),b.side=Sr):Xs(b,Y,oe)}this.compile=function(b,Y,oe=null){oe===null&&(oe=b),L=Fe.get(oe),L.init(Y),E.push(L),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),b!==oe&&b.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),L.setupLights();const te=new Set;return b.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let He=0;He<Pe.length;He++){const Ce=Pe[He];ai(Ce,oe,ee),te.add(Ce)}else ai(Pe,oe,ee),te.add(Pe)}),L=E.pop(),te},this.compileAsync=function(b,Y,oe=null){const te=this.compile(b,Y,oe);return new Promise(ee=>{function Pe(){if(te.forEach(function(He){D.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){ee(b);return}setTimeout(Pe,10)}pt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let rr=null;function Ws(b){rr&&rr(b)}function cs(){sr.stop()}function js(){sr.start()}const sr=new qS;sr.setAnimationLoop(Ws),typeof self<"u"&&sr.setContext(self),this.setAnimationLoop=function(b){rr=b,be.setAnimationLoop(b),b===null?sr.stop():sr.start()},be.addEventListener("sessionstart",cs),be.addEventListener("sessionend",js),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(b,Y);const oe=be.enabled===!0&&be.isPresenting===!0,te=I!==null&&(G===null||oe)&&I.begin(B,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(Y),Y=be.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,Y,G),L=Fe.get(b,E.length),L.init(Y),L.state.textureUnits=T.getTextureUnits(),E.push(L),At.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),et.setFromProjectionMatrix(At,Ki,Y.reversedDepth),dt=this.localClippingEnabled,Bt=Be.init(this.clippingPlanes,dt),N=pe.get(b,F.length),N.init(),F.push(N),be.enabled===!0&&be.isPresenting===!0){const He=B.xr.getDepthSensingMesh();He!==null&&Zo(He,Y,-1/0,B.sortObjects)}Zo(b,Y,0,B.sortObjects),N.finish(),B.sortObjects===!0&&N.sort(ce,ye),Vt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Vt&&Ee.addToRenderList(N,b),this.info.render.frame++,Bt===!0&&Be.beginShadows();const ee=L.state.shadowsArray;if(Ae.render(ee,b,Y),Bt===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&I.hasRenderPass())===!1){const He=N.opaque,Ce=N.transmissive;if(L.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Ce.length>0)for(let Qe=0,ct=qe.length;Qe<ct;Qe++){const ut=qe[Qe];ki(He,Ce,b,ut)}Vt&&Ee.render(b);for(let Qe=0,ct=qe.length;Qe<ct;Qe++){const ut=qe[Qe];pl(N,b,ut,ut.viewport)}}else Ce.length>0&&ki(He,Ce,b,Y),Vt&&Ee.render(b),pl(N,b,Y)}G!==null&&ue===0&&(T.updateMultisampleRenderTarget(G),T.updateRenderTargetMipmap(G)),te&&I.end(B),b.isScene===!0&&b.onAfterRender(B,b,Y),we.resetDefaultState(),Q=-1,$=null,E.pop(),E.length>0?(L=E[E.length-1],T.setTextureUnits(L.state.textureUnits),Bt===!0&&Be.setGlobalState(B.clippingPlanes,L.state.camera)):L=null,F.pop(),F.length>0?N=F[F.length-1]:N=null,q!==null&&q.renderEnd()};function Zo(b,Y,oe,te){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)oe=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLightProbeGrid)L.pushLightProbeGrid(b);else if(b.isLight)L.pushLight(b),b.castShadow&&L.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){te&&ht.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);const He=Me.update(b),Ce=b.material;Ce.visible&&N.push(b,He,Ce,oe,ht.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const He=Me.update(b),Ce=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ht.copy(b.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ht.copy(He.boundingSphere.center)),ht.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(Ce)){const qe=He.groups;for(let Qe=0,ct=qe.length;Qe<ct;Qe++){const ut=qe[Qe],Ke=Ce[ut.materialIndex];Ke&&Ke.visible&&N.push(b,He,Ke,oe,ht.z,ut)}}else Ce.visible&&N.push(b,He,Ce,oe,ht.z,null)}}const Pe=b.children;for(let He=0,Ce=Pe.length;He<Ce;He++)Zo(Pe[He],Y,oe,te)}function pl(b,Y,oe,te){const{opaque:ee,transmissive:Pe,transparent:He}=b;L.setupLightsView(oe),Bt===!0&&Be.setGlobalState(B.clippingPlanes,oe),te&&Le.viewport(X.copy(te)),ee.length>0&&us(ee,Y,oe),Pe.length>0&&us(Pe,Y,oe),He.length>0&&us(He,Y,oe),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function ki(b,Y,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const Ke=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new Ji(1,1,{generateMipmaps:!0,type:Ke?Cr:mi,minFilter:Fs,samples:Math.max(4,Pt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:yt.workingColorSpace})}const Pe=L.state.transmissionRenderTarget[te.id],He=te.viewport||X;Pe.setSize(He.z*B.transmissionResolutionScale,He.w*B.transmissionResolutionScale);const Ce=B.getRenderTarget(),qe=B.getActiveCubeFace(),Qe=B.getActiveMipmapLevel();B.setRenderTarget(Pe),B.getClearColor(O),J=B.getClearAlpha(),J<1&&B.setClearColor(16777215,.5),B.clear(),Vt&&Ee.render(oe);const ct=B.toneMapping;B.toneMapping=Qi;const ut=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),Bt===!0&&Be.setGlobalState(B.clippingPlanes,te),us(b,oe,te),T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Mt=0,Ht=Y.length;Mt<Ht;Mt++){const qt=Y[Mt],{object:Dt,geometry:sn,material:Ve,group:Sn}=qt;if(Ve.side===Sr&&Dt.layers.test(te.layers)){const vt=Ve.side;Ve.side=Kn,Ve.needsUpdate=!0,Qo(Dt,oe,te,sn,Ve,Sn),Ve.side=vt,Ve.needsUpdate=!0,Ke=!0}}Ke===!0&&(T.updateMultisampleRenderTarget(Pe),T.updateRenderTargetMipmap(Pe))}B.setRenderTarget(Ce,qe,Qe),B.setClearColor(O,J),ut!==void 0&&(te.viewport=ut),B.toneMapping=ct}function us(b,Y,oe){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,Pe=b.length;ee<Pe;ee++){const He=b[ee],{object:Ce,geometry:qe,group:Qe}=He;let ct=He.material;ct.allowOverride===!0&&te!==null&&(ct=te),Ce.layers.test(oe.layers)&&Qo(Ce,Y,oe,qe,ct,Qe)}}function Qo(b,Y,oe,te,ee,Pe){b.onBeforeRender(B,Y,oe,te,ee,Pe),b.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ee.onBeforeRender(B,Y,oe,te,b,Pe),ee.transparent===!0&&ee.side===Sr&&ee.forceSinglePass===!1?(ee.side=Kn,ee.needsUpdate=!0,B.renderBufferDirect(oe,Y,te,ee,b,Pe),ee.side=as,ee.needsUpdate=!0,B.renderBufferDirect(oe,Y,te,ee,b,Pe),ee.side=Sr):B.renderBufferDirect(oe,Y,te,ee,b,Pe),b.onAfterRender(B,Y,oe,te,ee,Pe)}function Xs(b,Y,oe){Y.isScene!==!0&&(Y=Kt);const te=D.get(b),ee=L.state.lights,Pe=L.state.shadowsArray,He=ee.state.version,Ce=De.getParameters(b,ee.state,Pe,Y,oe,L.state.lightProbeGridArray),qe=De.getProgramCacheKey(Ce);let Qe=te.programs;te.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;const ct=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;te.envMap=K.get(b.envMap||te.environment,ct),te.envMapRotation=te.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",Ot),Qe=new Map,te.programs=Qe);let ut=Qe.get(qe);if(ut!==void 0){if(te.currentProgram===ut&&te.lightsStateVersion===He)return ea(b,Ce),ut}else Ce.uniforms=De.getUniforms(b),q!==null&&b.isNodeMaterial&&q.build(b,oe,Ce),b.onBeforeCompile(Ce,B),ut=De.acquireProgram(Ce,qe),Qe.set(qe,ut),te.uniforms=Ce.uniforms;const Ke=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=Be.uniform),ea(b,Ce),te.needsLights=Fu(b),te.lightsStateVersion=He,te.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ut,te.uniformsList=null,ut}function Jo(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=su.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function ea(b,Y){const oe=D.get(b);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function ml(b,Y){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;R.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,te=b.length;oe<te;oe++){const ee=b[oe];if(ee.texture!==null&&ee.boundingBox.containsPoint(R))return ee}return null}function gl(b,Y,oe,te,ee){Y.isScene!==!0&&(Y=Kt),T.resetTextureUnits();const Pe=Y.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,Ce=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:yt.workingColorSpace,qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Qe=K.get(te.envMap||He,qe),ct=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ut=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!oe.morphAttributes.position,Mt=!!oe.morphAttributes.normal,Ht=!!oe.morphAttributes.color;let qt=Qi;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(qt=B.toneMapping);const Dt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,sn=Dt!==void 0?Dt.length:0,Ve=D.get(te),Sn=L.state.lights;if(Bt===!0&&(dt===!0||b!==$)){const Lt=b===$&&te.id===Q;Be.setState(te,b,Lt)}let vt=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Sn.state.version||Ve.outputColorSpace!==Ce||ee.isBatchedMesh&&Ve.batching===!1||!ee.isBatchedMesh&&Ve.batching===!0||ee.isBatchedMesh&&Ve.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Ve.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||ee.isInstancedMesh&&Ve.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Ve.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Ve.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Ve.instancingMorph===!1&&ee.morphTexture!==null||Ve.envMap!==Qe||te.fog===!0&&Ve.fog!==Pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Be.numPlanes||Ve.numIntersection!==Be.numIntersection)||Ve.vertexAlphas!==ct||Ve.vertexTangents!==ut||Ve.morphTargets!==Ke||Ve.morphNormals!==Mt||Ve.morphColors!==Ht||Ve.toneMapping!==qt||Ve.morphTargetsCount!==sn||!!Ve.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ve.__version=te.version);let Vn=Ve.currentProgram;vt===!0&&(Vn=Xs(te,Y,ee),q&&te.isNodeMaterial&&q.onUpdateProgram(te,Vn,Ve));let zn=!1,xt=!1,or=!1;const Rt=Vn.getUniforms(),jt=Ve.uniforms;if(Le.useProgram(Vn.program)&&(zn=!0,xt=!0,or=!0),te.id!==Q&&(Q=te.id,xt=!0),Ve.needsLights){const Lt=ml(L.state.lightProbeGridArray,ee);Ve.lightProbeGrid!==Lt&&(Ve.lightProbeGrid=Lt,xt=!0)}if(zn||$!==b){Le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(W,"projectionMatrix",b.projectionMatrix),Rt.setValue(W,"viewMatrix",b.matrixWorldInverse);const _i=Rt.map.cameraPosition;_i!==void 0&&_i.setValue(W,Nt.setFromMatrixPosition(b.matrixWorld)),Pt.logarithmicDepthBuffer&&Rt.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Rt.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,xt=!0,or=!0)}if(Ve.needsLights&&(Sn.state.directionalShadowMap.length>0&&Rt.setValue(W,"directionalShadowMap",Sn.state.directionalShadowMap,T),Sn.state.spotShadowMap.length>0&&Rt.setValue(W,"spotShadowMap",Sn.state.spotShadowMap,T),Sn.state.pointShadowMap.length>0&&Rt.setValue(W,"pointShadowMap",Sn.state.pointShadowMap,T)),ee.isSkinnedMesh){Rt.setOptional(W,ee,"bindMatrix"),Rt.setOptional(W,ee,"bindMatrixInverse");const Lt=ee.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue(W,"boneTexture",Lt.boneTexture,T))}ee.isBatchedMesh&&(Rt.setOptional(W,ee,"batchingTexture"),Rt.setValue(W,"batchingTexture",ee._matricesTexture,T),Rt.setOptional(W,ee,"batchingIdTexture"),Rt.setValue(W,"batchingIdTexture",ee._indirectTexture,T),Rt.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Rt.setValue(W,"batchingColorTexture",ee._colorsTexture,T));const xi=oe.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&rt.update(ee,oe,Vn),(xt||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,Rt.setValue(W,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(jt.envMapIntensity.value=Y.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=kL()),xt){if(Rt.setValue(W,"toneMappingExposure",B.toneMappingExposure),Ve.needsLights&&Uu(jt,or),Pe&&te.fog===!0&&fe.refreshFogUniforms(jt,Pe),fe.refreshMaterialUniforms(jt,te,Ne,Ge,L.state.transmissionRenderTarget[b.id]),Ve.needsLights&&Ve.lightProbeGrid){const Lt=Ve.lightProbeGrid;jt.probesSH.value=Lt.texture,jt.probesMin.value.copy(Lt.boundingBox.min),jt.probesMax.value.copy(Lt.boundingBox.max),jt.probesResolution.value.copy(Lt.resolution)}su.upload(W,Jo(Ve),jt,T)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(su.upload(W,Jo(Ve),jt,T),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Rt.setValue(W,"center",ee.center),Rt.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Rt.setValue(W,"normalMatrix",ee.normalMatrix),Rt.setValue(W,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Lt=te.uniformsGroups;for(let _i=0,Bi=Lt.length;_i<Bi;_i++){const fs=Lt[_i];de.update(fs,Vn),de.bind(fs,Vn)}}return Vn}function Uu(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function Fu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ue},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,Y,oe){const te=D.get(b);te.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),D.get(b.texture).__webglTexture=Y,D.get(b.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const oe=D.get(b);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Zt=W.createFramebuffer();this.setRenderTarget=function(b,Y=0,oe=0){G=b,le=Y,ue=oe;let te=null,ee=!1,Pe=!1;if(b){const Ce=D.get(b);if(Ce.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(W.FRAMEBUFFER,Ce.__webglFramebuffer),X.copy(b.viewport),ie.copy(b.scissor),se=b.scissorTest,Le.viewport(X),Le.scissor(ie),Le.setScissorTest(se),Q=-1;return}else if(Ce.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ce.__hasExternalTextures)T.rebindTextures(b,D.get(b.texture).__webglTexture,D.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ct=b.depthTexture;if(Ce.__boundDepthTexture!==ct){if(ct!==null&&D.has(ct)&&(b.width!==ct.image.width||b.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const qe=b.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const Qe=D.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?te=Qe[Y][oe]:te=Qe[Y],ee=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?te=D.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?te=Qe[oe]:te=Qe,X.copy(b.viewport),ie.copy(b.scissor),se=b.scissorTest}else X.copy(me).multiplyScalar(Ne).floor(),ie.copy(Ue).multiplyScalar(Ne).floor(),se=Je;if(oe!==0&&(te=Zt),Le.bindFramebuffer(W.FRAMEBUFFER,te)&&Le.drawBuffers(b,te),Le.viewport(X),Le.scissor(ie),Le.setScissorTest(se),ee){const Ce=D.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,oe)}else if(Pe){const Ce=Y;for(let qe=0;qe<b.textures.length;qe++){const Qe=D.get(b.textures[qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,oe,Ce)}}else if(b!==null&&oe!==0){const Ce=D.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ce.__webglTexture,oe)}Q=-1},this.readRenderTargetPixels=function(b,Y,oe,te,ee,Pe,He,Ce=0){if(!(b&&b.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=D.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe){Le.bindFramebuffer(W.FRAMEBUFFER,qe);try{const Qe=b.textures[Ce],ct=Qe.format,ut=Qe.type;if(b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ce),!Pt.textureFormatReadable(ct)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(ut)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-te&&oe>=0&&oe<=b.height-ee&&W.readPixels(Y,oe,te,ee,H.convert(ct),H.convert(ut),Pe)}finally{const Qe=G!==null?D.get(G).__webglFramebuffer:null;Le.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,Y,oe,te,ee,Pe,He,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=D.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&He!==void 0&&(qe=qe[He]),qe)if(Y>=0&&Y<=b.width-te&&oe>=0&&oe<=b.height-ee){Le.bindFramebuffer(W.FRAMEBUFFER,qe);const Qe=b.textures[Ce],ct=Qe.format,ut=Qe.type;if(b.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ce),!Pt.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.bufferData(W.PIXEL_PACK_BUFFER,Pe.byteLength,W.STREAM_READ),W.readPixels(Y,oe,te,ee,H.convert(ct),H.convert(ut),0);const Mt=G!==null?D.get(G).__webglFramebuffer:null;Le.bindFramebuffer(W.FRAMEBUFFER,Mt);const Ht=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await iR(W,Ht,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ke),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Pe),W.deleteBuffer(Ke),W.deleteSync(Ht),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,oe=0){const te=Math.pow(2,-oe),ee=Math.floor(b.image.width*te),Pe=Math.floor(b.image.height*te),He=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;T.setTexture2D(b,0),W.copyTexSubImage2D(W.TEXTURE_2D,oe,0,0,He,Ce,ee,Pe),Le.unbindTexture()};const Ou=W.createFramebuffer(),ta=W.createFramebuffer();this.copyTextureToTexture=function(b,Y,oe=null,te=null,ee=0,Pe=0){let He,Ce,qe,Qe,ct,ut,Ke,Mt,Ht;const qt=b.isCompressedTexture?b.mipmaps[Pe]:b.image;if(oe!==null)He=oe.max.x-oe.min.x,Ce=oe.max.y-oe.min.y,qe=oe.isBox3?oe.max.z-oe.min.z:1,Qe=oe.min.x,ct=oe.min.y,ut=oe.isBox3?oe.min.z:0;else{const jt=Math.pow(2,-ee);He=Math.floor(qt.width*jt),Ce=Math.floor(qt.height*jt),b.isDataArrayTexture?qe=qt.depth:b.isData3DTexture?qe=Math.floor(qt.depth*jt):qe=1,Qe=0,ct=0,ut=0}te!==null?(Ke=te.x,Mt=te.y,Ht=te.z):(Ke=0,Mt=0,Ht=0);const Dt=H.convert(Y.format),sn=H.convert(Y.type);let Ve;Y.isData3DTexture?(T.setTexture3D(Y,0),Ve=W.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(T.setTexture2DArray(Y,0),Ve=W.TEXTURE_2D_ARRAY):(T.setTexture2D(Y,0),Ve=W.TEXTURE_2D),Le.activeTexture(W.TEXTURE0),Le.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Y.flipY),Le.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Le.pixelStorei(W.UNPACK_ALIGNMENT,Y.unpackAlignment);const Sn=Le.getParameter(W.UNPACK_ROW_LENGTH),vt=Le.getParameter(W.UNPACK_IMAGE_HEIGHT),Vn=Le.getParameter(W.UNPACK_SKIP_PIXELS),zn=Le.getParameter(W.UNPACK_SKIP_ROWS),xt=Le.getParameter(W.UNPACK_SKIP_IMAGES);Le.pixelStorei(W.UNPACK_ROW_LENGTH,qt.width),Le.pixelStorei(W.UNPACK_IMAGE_HEIGHT,qt.height),Le.pixelStorei(W.UNPACK_SKIP_PIXELS,Qe),Le.pixelStorei(W.UNPACK_SKIP_ROWS,ct),Le.pixelStorei(W.UNPACK_SKIP_IMAGES,ut);const or=b.isDataArrayTexture||b.isData3DTexture,Rt=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const jt=D.get(b),xi=D.get(Y),Lt=D.get(jt.__renderTarget),_i=D.get(xi.__renderTarget);Le.bindFramebuffer(W.READ_FRAMEBUFFER,Lt.__webglFramebuffer),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Bi=0;Bi<qe;Bi++)or&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,D.get(b).__webglTexture,ee,ut+Bi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,D.get(Y).__webglTexture,Pe,Ht+Bi)),W.blitFramebuffer(Qe,ct,He,Ce,Ke,Mt,He,Ce,W.DEPTH_BUFFER_BIT,W.NEAREST);Le.bindFramebuffer(W.READ_FRAMEBUFFER,null),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||b.isRenderTargetTexture||D.has(b)){const jt=D.get(b),xi=D.get(Y);Le.bindFramebuffer(W.READ_FRAMEBUFFER,Ou),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,ta);for(let Lt=0;Lt<qe;Lt++)or?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,jt.__webglTexture,ee,ut+Lt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,jt.__webglTexture,ee),Rt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,xi.__webglTexture,Pe,Ht+Lt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,xi.__webglTexture,Pe),ee!==0?W.blitFramebuffer(Qe,ct,He,Ce,Ke,Mt,He,Ce,W.COLOR_BUFFER_BIT,W.NEAREST):Rt?W.copyTexSubImage3D(Ve,Pe,Ke,Mt,Ht+Lt,Qe,ct,He,Ce):W.copyTexSubImage2D(Ve,Pe,Ke,Mt,Qe,ct,He,Ce);Le.bindFramebuffer(W.READ_FRAMEBUFFER,null),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Rt?b.isDataTexture||b.isData3DTexture?W.texSubImage3D(Ve,Pe,Ke,Mt,Ht,He,Ce,qe,Dt,sn,qt.data):Y.isCompressedArrayTexture?W.compressedTexSubImage3D(Ve,Pe,Ke,Mt,Ht,He,Ce,qe,Dt,qt.data):W.texSubImage3D(Ve,Pe,Ke,Mt,Ht,He,Ce,qe,Dt,sn,qt):b.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Pe,Ke,Mt,He,Ce,Dt,sn,qt.data):b.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Pe,Ke,Mt,qt.width,qt.height,Dt,qt.data):W.texSubImage2D(W.TEXTURE_2D,Pe,Ke,Mt,He,Ce,Dt,sn,qt);Le.pixelStorei(W.UNPACK_ROW_LENGTH,Sn),Le.pixelStorei(W.UNPACK_IMAGE_HEIGHT,vt),Le.pixelStorei(W.UNPACK_SKIP_PIXELS,Vn),Le.pixelStorei(W.UNPACK_SKIP_ROWS,zn),Le.pixelStorei(W.UNPACK_SKIP_IMAGES,xt),Pe===0&&Y.generateMipmaps&&W.generateMipmap(Ve),Le.unbindTexture()},this.initRenderTarget=function(b){D.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){le=0,ue=0,G=null,Le.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}}const VL="/AdvokatPavlodara/",Xc=21,zL=1948,HL=1064,gh=zL/HL,GL="560vh";function P_(n,e,t){const r=e/t;if(r>=gh){const o=gh/r;n.repeat.set(1,o),n.offset.set(0,(1-o)/2)}else{const o=r/gh;n.repeat.set(o,1),n.offset.set((1-o)/2,0)}}function WL({onEnter:n}){const e=Re.useRef(null),t=Re.useRef(null),r=Re.useRef(null),o=Re.useRef({renderer:null,mesh:null,scene:null,camera:null,textures:Array(Xc).fill(null),currentFrame:-1,loaded:0});return Re.useEffect(()=>{const a=e.current,c=t.current,u=o.current,d=new BL({canvas:c,antialias:!1,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.renderer=d;const h=new _R;u.scene=h;const p=new Am(-1,1,1,-1,0,1);u.camera=p;const v=new hl(2,2),g=new Ja({color:662030}),_=new nr(v,g);h.add(_),u.mesh=_;const M=()=>d.render(h,p),A=()=>{const R=window.innerWidth,N=window.innerHeight;d.setSize(R,N),u.textures.forEach(L=>L&&P_(L,R,N)),M()},y=new zR;for(let R=0;R<Xc;R++){const N=String(R+1).padStart(3,"0");y.load(`${VL}frames/ezgif-frame-${N}.jpg`,L=>{L.colorSpace=ii,P_(L,window.innerWidth,window.innerHeight),u.textures[R]=L,u.loaded++,R===0&&(_.material=new Ja({map:L}),M())})}const S=R=>{const N=Math.max(0,Math.min(Xc-1,R));if(N===u.currentFrame)return;u.currentFrame=N;const L=u.textures[N];L&&(_.material.map?(_.material.map=L,_.material.needsUpdate=!0):_.material=new Ja({map:L}),M())},C=()=>{if(!a)return;const R=a.getBoundingClientRect().top,N=a.offsetHeight,L=window.innerHeight,F=-R,E=N-L,I=Math.max(0,Math.min(1,F/E)),B=Math.round(I*(Xc-1));S(B),r.current&&(r.current.style.transform=`scaleX(${I})`)},P=new IntersectionObserver(([R])=>n==null?void 0:n(R.isIntersecting),{threshold:0});return P.observe(a),window.addEventListener("scroll",C,{passive:!0}),window.addEventListener("resize",A,{passive:!0}),A(),C(),()=>{window.removeEventListener("scroll",C),window.removeEventListener("resize",A),P.disconnect(),d.dispose(),v.dispose()}},[]),V.jsx("section",{ref:e,style:{height:GL,position:"relative"},children:V.jsxs("div",{style:{position:"sticky",top:0,height:"100vh",overflow:"hidden",background:"linear-gradient(160deg, #060f08 0%, #0D2B1A 45%, #040c06 100%)"},children:[V.jsx("canvas",{ref:t,style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}),V.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(4,12,6,.72) 100%)"}}),V.jsxs("div",{style:{position:"absolute",top:"36px",left:"36px",pointerEvents:"none",display:"flex",alignItems:"center",gap:"9px"},children:[V.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"var(--gold)",display:"inline-block",flexShrink:0}}),V.jsx("span",{style:{fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",letterSpacing:".18em",textTransform:"uppercase"},children:"Судебная практика"})]}),V.jsxs("div",{style:{position:"absolute",bottom:"52px",left:0,right:0,textAlign:"center",pointerEvents:"none"},children:[V.jsx("p",{style:{fontFamily:'var(--heading-font,"Playfair Display"),Georgia,serif',fontSize:"clamp(16px,2.2vw,26px)",fontWeight:700,color:"rgba(255,255,255,.88)",letterSpacing:"-.01em",lineHeight:1.3,textShadow:"0 2px 24px rgba(0,0,0,.6)"},children:"Знание закона — наше оружие."}),V.jsx("p",{style:{marginTop:"8px",fontSize:"13px",color:"rgba(255,255,255,.36)",fontWeight:500,letterSpacing:".08em"},children:"340+ выигранных дел в судах Павлодарской области"})]}),V.jsxs("div",{className:"anim-scroll-hint",style:{position:"absolute",bottom:"52px",right:"36px",pointerEvents:"none",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px"},children:[V.jsx("span",{style:{fontSize:"10px",fontWeight:600,color:"rgba(255,255,255,.28)",letterSpacing:".14em",textTransform:"uppercase"},children:"scroll"}),V.jsx("div",{style:{width:"1px",height:"32px",background:"linear-gradient(to bottom, rgba(155,133,80,.6), transparent)"}})]}),V.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"rgba(255,255,255,.07)"},children:V.jsx("div",{ref:r,style:{height:"100%",background:"linear-gradient(90deg, var(--gold), var(--gold-l))",transformOrigin:"left center",transform:"scaleX(0)",transition:"transform .08s linear"}})})]})})}const jL=[{n:"Kaspi Bank",s:"kaspi.kz"},{n:"Halyk",s:"Народный Банк"},{n:"ForteBank",s:"forte.kz"},{n:"BTA Bank",s:"btabank.kz"},{n:"BI Group",s:"bi.group"},{n:"Павлодарэнерго",s:"pav-energo.kz"}];function XL(){return V.jsx("section",{style:{padding:"60px 0",background:"#fff",borderTop:"1px solid var(--bd)",borderBottom:"1px solid var(--bd)"},children:V.jsxs("div",{className:"s-pad",style:{maxWidth:"980px",margin:"0 auto"},children:[V.jsx(tt.p,{variants:Ni,initial:"hidden",whileInView:"show",viewport:si,style:{textAlign:"center",fontSize:"12px",fontWeight:600,color:"var(--fg3)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"36px"},children:"Нам доверяют клиенты ведущих компаний Казахстана"}),V.jsx(tt.div,{className:"g-6",variants:Er(.08),initial:"hidden",whileInView:"show",viewport:si,children:jL.map((n,e)=>V.jsxs(tt.div,{variants:{hidden:{opacity:0,y:20},show:{opacity:1,y:0,transition:{type:"spring",stiffness:100}}},whileHover:{opacity:.9,scale:1.08,transition:{type:"spring",stiffness:300}},style:{textAlign:"center",opacity:.38,cursor:"default",padding:"6px"},children:[V.jsx("p",{className:"serif",style:{fontWeight:700,fontSize:"13px",color:"var(--g700)",lineHeight:1.3},children:n.n}),V.jsx("p",{style:{fontSize:"10px",color:"var(--fg3)",marginTop:"3px"},children:n.s})]},e))})]})})}const vh="/AdvokatPavlodara/",YL=({c:n})=>V.jsx("span",{style:{display:"inline-block",padding:"6px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",color:"var(--gold)",border:"1px solid rgba(155,133,80,.3)",background:"rgba(155,133,80,.05)",marginBottom:"16px"},children:n}),qL=[{q:"Алия помогла выйти из долговой ямы. Банк угрожал арестом счетов, но через 3 месяца работы добились реструктуризации и сократили долг почти вдвое. Не думал, что это реально.",n:"Марат Ахметов",ro:"Предприниматель, Павлодар",img:`${vh}uploads/SmartSelect_20260604_152646_Google.jpg`},{q:"После тяжёлого развода не знал, как защитить права на детей. Алия вела дело чётко и профессионально, объясняла каждый шаг. Суд встал на мою сторону полностью.",n:"Айдос Жаксыбеков",ro:"Инженер, Павлодар",img:`${vh}uploads/SmartSelect_20260604_152626_Google.jpg`},{q:"Меня уволили незаконно за день до отпуска. Думал, что один против юристов компании. Алия восстановила на работе и добилась компенсации за три месяца простоя.",n:"Дмитрий Козлов",ro:"Механик, Экибастуз",img:`${vh}uploads/SmartSelect_20260604_152513_Google.jpg`}];function $L(){return V.jsx("section",{id:"reviews",style:{padding:"var(--sec-py) 0",background:"var(--cr200)"},children:V.jsxs("div",{className:"s-pad",style:{maxWidth:"1120px",margin:"0 auto"},children:[V.jsxs(tt.div,{variants:Ni,initial:"hidden",whileInView:"show",viewport:si,style:{textAlign:"center",marginBottom:"52px"},children:[V.jsx(YL,{c:"Отзывы"}),V.jsxs("h2",{className:"serif",style:{fontSize:"clamp(28px,3.5vw,44px)",fontWeight:700,color:"var(--g900)"},children:["Говорят ",V.jsx("span",{className:"gtext",children:"клиенты"})]})]}),V.jsx(tt.div,{className:"g-3",variants:Er(.15),initial:"hidden",whileInView:"show",viewport:si,children:qL.map((n,e)=>V.jsxs(tt.div,{variants:Pu,whileHover:{y:-8,boxShadow:"0 24px 60px rgba(0,0,0,0.12)",transition:{type:"spring",stiffness:280,damping:22}},style:{background:"#fff",padding:"26px",display:"flex",flexDirection:"column",borderRadius:"var(--card-r,20px)",border:"1px solid var(--bd)"},children:[V.jsx("div",{style:{display:"flex",gap:"3px",marginBottom:"14px"},children:[...Array(5)].map((t,r)=>V.jsx(tt.span,{initial:{opacity:0,scale:0},whileInView:{opacity:1,scale:1},viewport:si,transition:{delay:r*.07+e*.15,type:"spring",stiffness:200},style:{color:"var(--gold)",fontSize:"15px"},children:"★"},r))}),V.jsxs("p",{style:{fontSize:"14px",color:"var(--fg2)",lineHeight:1.7,fontStyle:"italic",flex:1},children:["«",n.q,"»"]}),V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginTop:"20px",paddingTop:"18px",borderTop:"1px solid var(--bd)"},children:[V.jsx(tt.img,{src:n.img,alt:n.n,style:{width:"44px",height:"44px",borderRadius:"50%",objectFit:"cover",objectPosition:"top"},whileHover:{scale:1.12,transition:{type:"spring",stiffness:300}}}),V.jsxs("div",{children:[V.jsx("p",{style:{fontWeight:600,fontSize:"14px",color:"var(--fg1)"},children:n.n}),V.jsx("p",{style:{fontSize:"12px",color:"var(--fg3)"},children:n.ro})]})]})]},e))})]})})}const KL=({c:n})=>V.jsx("span",{style:{display:"inline-block",padding:"6px 16px",borderRadius:"999px",fontSize:"12px",fontWeight:600,letterSpacing:".07em",textTransform:"uppercase",color:"var(--gold)",border:"1px solid rgba(155,133,80,.3)",background:"rgba(155,133,80,.05)",marginBottom:"16px"},children:n}),ZL=[{q:"Сколько стоит консультация?",a:"Первичная консультация бесплатна — без ограничения по времени. Выслушаю ситуацию, оценю перспективы и объясню варианты решения. Стоимость ведения дела фиксируется в договоре после первой встречи."},{q:"Как долго рассматривается дело в суде?",a:"Сроки зависят от категории. Семейные споры — в среднем 2–4 месяца. Кредитные — от 3 до 6 месяцев. Трудовые — 1–3 месяца. Правильная подготовка документов помогает сократить эти сроки."},{q:"Нужно ли мне присутствовать на заседаниях?",a:"Необязательно. Могу представлять ваши интересы по нотариальной доверенности. Ваше личное присутствие необходимо лишь в отдельных категориях дел, где суд требует этого."},{q:"Что делать, если банк уже подал на меня в суд?",a:"Не паникуйте. Даже получив повестку, у вас есть возможности для защиты. Свяжитесь как можно скорее — чем раньше мы начнём, тем больше аргументов подготовим. Промедление работает против вас."},{q:"Можно ли оформить алименты без суда?",a:"Да. Если оба родителя согласны, оформляется нотариальное соглашение об алиментах — быстрее и дешевле суда. Помогу составить документ, который защитит интересы детей и будет иметь силу исполнительного листа."},{q:"Что делать при незаконном увольнении?",a:"Срок обжалования в Казахстане — один месяц. Сохраните трудовой договор, приказы и переписку с работодателем. Обратитесь сразу — оценю шансы на восстановление или выплату компенсации."}];function QL(){const[n,e]=Re.useState(null);return V.jsx("section",{id:"faq",style:{padding:"var(--sec-py) 0",background:"#fff"},children:V.jsxs("div",{className:"s-pad",style:{maxWidth:"760px",margin:"0 auto"},children:[V.jsxs(tt.div,{variants:Ni,initial:"hidden",whileInView:"show",viewport:si,style:{textAlign:"center",marginBottom:"52px"},children:[V.jsx(KL,{c:"FAQ"}),V.jsxs("h2",{className:"serif",style:{fontSize:"clamp(28px,3.5vw,44px)",fontWeight:700,color:"var(--g900)"},children:["Частые ",V.jsx("span",{className:"gtext",children:"вопросы"})]})]}),V.jsx(tt.div,{style:{display:"flex",flexDirection:"column",gap:"10px"},variants:Er(.08),initial:"hidden",whileInView:"show",viewport:si,children:ZL.map((t,r)=>V.jsxs(tt.div,{variants:{hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{type:"spring",stiffness:90,damping:18}}},style:{background:"#F9F7F3",borderRadius:"16px",border:"1px solid var(--bd)",overflow:"hidden"},children:[V.jsxs(tt.button,{onClick:()=>e(n===r?null:r),whileHover:{backgroundColor:"rgba(244,239,230,0.8)"},style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",padding:"18px 22px",background:"none",border:"none",cursor:"pointer",textAlign:"left"},children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[V.jsxs("span",{className:"serif",style:{fontWeight:700,fontSize:"13px",color:"var(--gold-l)",minWidth:"26px"},children:[String(r+1).padStart(2,"0"),"."]}),V.jsx("span",{style:{fontWeight:500,fontSize:"15px",color:"var(--fg1)"},children:t.q})]}),V.jsx(tt.span,{style:{color:"var(--gold)",fontSize:"22px",flexShrink:0,lineHeight:1,display:"inline-block"},animate:{rotate:n===r?45:0},transition:{type:"spring",stiffness:200,damping:18},children:"+"})]}),V.jsx(LA,{initial:!1,children:n===r&&V.jsx(tt.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{height:{type:"spring",stiffness:120,damping:20},opacity:{duration:.2}},children:V.jsx("p",{style:{padding:"0 22px 20px 50px",fontSize:"14px",color:"var(--fg2)",lineHeight:1.72},children:t.a})},"content")})]},r))})]})})}function JL(){return V.jsxs("section",{className:"cta-section-pad",style:{paddingTop:"var(--sec-py)",paddingBottom:"var(--sec-py)",background:"var(--g700)",position:"relative",overflow:"hidden"},children:[V.jsx("div",{style:{position:"absolute",inset:0,opacity:.055},children:V.jsxs("svg",{width:"100%",height:"100%",children:[V.jsx("defs",{children:V.jsx("pattern",{id:"g2",width:"48",height:"48",patternUnits:"userSpaceOnUse",children:V.jsx("path",{d:"M48 0L0 0 0 48",fill:"none",stroke:"white",strokeWidth:"1"})})}),V.jsx("rect",{width:"100%",height:"100%",fill:"url(#g2)"})]})}),V.jsx(tt.div,{className:"orb",style:{width:"320px",height:"320px",background:"#2E6B40",top:"-80px",right:"-60px",opacity:.45},...Ds(0)}),V.jsx(tt.div,{className:"orb",style:{width:"200px",height:"200px",background:"#9B8550",bottom:"-40px",left:"10%",opacity:.3},...Ds(2)}),V.jsxs(tt.div,{variants:Er(.12),initial:"hidden",whileInView:"show",viewport:si,style:{maxWidth:"700px",margin:"0 auto",textAlign:"center",position:"relative"},children:[V.jsxs(tt.h2,{variants:Ni,className:"serif",style:{fontSize:"clamp(28px,4vw,50px)",fontWeight:700,color:"white",marginBottom:"14px",lineHeight:1.2},children:["Готовы решить",V.jsx("br",{}),V.jsx("span",{style:{color:"var(--gold-l)"},children:"вашу проблему?"})]}),V.jsx(tt.p,{variants:Ni,style:{fontSize:"16px",color:"rgba(255,255,255,.68)",marginBottom:"32px"},children:"Первичная консультация бесплатна. Ежедневно с 9:00 до 20:00."}),V.jsxs(tt.div,{variants:Ni,className:"cta-btns",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"12px"},children:[V.jsx(tt.a,{href:"tel:+77066060600",className:"btn btn-g",style:{fontSize:"15px",padding:"15px 32px",boxShadow:"0 4px 20px rgba(155,133,80,.4)"},whileHover:{scale:1.05,y:-3,boxShadow:"0 12px 36px rgba(155,133,80,.55)"},whileTap:{scale:.97},children:"Связаться с юристом ↗"}),V.jsx(tt.a,{href:"https://wa.me/77066060600",className:"btn btn-ghost",style:{fontSize:"15px",padding:"14px 28px"},whileHover:{scale:1.05,y:-3},whileTap:{scale:.97},children:"Написать в WhatsApp"})]})]})]})}function eI(){return V.jsx("footer",{style:{background:"var(--g900)",color:"white",paddingTop:"72px",paddingBottom:"32px"},children:V.jsxs("div",{className:"s-pad",style:{maxWidth:"1120px",margin:"0 auto"},children:[V.jsxs("div",{className:"g-footer",style:{marginBottom:"56px"},children:[V.jsxs("div",{children:[V.jsx("p",{className:"serif",style:{fontWeight:700,fontSize:"22px",marginBottom:"12px"},children:"Алия Сейткали"}),V.jsx("p",{style:{fontSize:"13px",color:"rgba(255,255,255,.42)",lineHeight:1.7,marginBottom:"20px"},children:"Юридические услуги в Павлодаре. Профессиональная защита ваших прав с 2016 года."}),V.jsx("div",{style:{display:"flex",gap:"8px"},children:[["ВК","#"],["TG","https://t.me/"],["WA","https://wa.me/77066060600"],["IG","#"]].map(([n,e])=>V.jsx("a",{href:e,style:{width:"33px",height:"33px",borderRadius:"50%",background:"rgba(255,255,255,.08)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"rgba(255,255,255,.55)",textDecoration:"none",transition:"all .2s"},onMouseEnter:t=>{t.currentTarget.style.background="var(--gold)",t.currentTarget.style.color="white"},onMouseLeave:t=>{t.currentTarget.style.background="rgba(255,255,255,.08)",t.currentTarget.style.color="rgba(255,255,255,.55)"},children:n},n))})]}),[{h:"Услуги",lnks:["Кредиты и долги","Семейное право","Трудовые споры","Консультация"]},{h:"Навигация",lnks:["О юристе","Отзывы","FAQ","Контакты"]}].map(n=>V.jsxs("div",{children:[V.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"20px"},children:n.h}),V.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:"12px"},children:n.lnks.map(e=>V.jsx("li",{children:V.jsx("a",{href:"#services",style:{fontSize:"13px",color:"rgba(255,255,255,.48)",textDecoration:"none",transition:"color .2s"},onMouseEnter:t=>t.target.style.color="var(--gold-l)",onMouseLeave:t=>t.target.style.color="rgba(255,255,255,.48)",children:e})},e))})]},n.h)),V.jsxs("div",{children:[V.jsx("p",{style:{fontSize:"11px",fontWeight:600,color:"rgba(255,255,255,.45)",letterSpacing:".1em",textTransform:"uppercase",marginBottom:"20px"},children:"Контакты"}),V.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[{ic:"📞",t:"+7 706 606-06-00",s:"Ежедневно 9:00–20:00"},{ic:"📍",t:"г. Павлодар",s:"Приём по записи"},{ic:"💬",t:"Консультация бесплатно",s:"Первичный приём"}].map((n,e)=>V.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"10px"},children:[V.jsx("span",{style:{color:"var(--gold)",flexShrink:0,marginTop:"1px"},children:n.ic}),V.jsxs("div",{children:[V.jsx("p",{style:{fontSize:"13px",color:"white",fontWeight:500},children:n.t}),V.jsx("p",{style:{fontSize:"11px",color:"rgba(255,255,255,.38)",marginTop:"2px"},children:n.s})]})]},e))})]})]}),V.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,.09)",paddingTop:"28px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"8px"},children:[V.jsx("p",{style:{fontSize:"12px",color:"rgba(255,255,255,.3)"},children:"© 2026 Алия Сейткали. Все права защищены."}),V.jsx("p",{style:{fontSize:"12px",color:"rgba(255,255,255,.3)"},children:"Юридические услуги в Павлодаре, Казахстан"})]})]})})}function tI(){const[n,e]=Re.useState(!1);return V.jsxs("div",{children:[V.jsx(GE,{transparent:n}),V.jsx(gb,{heroLine1:"Ваш надёжный",ctaText:"Связаться с юристом",showOrbs:!0,showBadges:!0,doParallax:!0}),V.jsx(_b,{}),V.jsx(Mb,{}),V.jsx(WL,{onEnter:e}),V.jsx(XL,{}),V.jsx($L,{}),V.jsx(QL,{}),V.jsx(JL,{}),V.jsx(eI,{}),V.jsx("a",{href:"https://wa.me/77066060600",className:"wa",target:"_blank",rel:"noopener",title:"WhatsApp",children:"💬"})]})}HE.createRoot(document.getElementById("root")).render(V.jsx(Re.StrictMode,{children:V.jsx(tI,{})}));
