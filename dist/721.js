"use strict";(self.webpackChunkhighlight_and_share=self.webpackChunkhighlight_and_share||[]).push([[721],{1685:e=>{var t=function(e){return parseInt(e,16)};e.exports=function(e,r){var s,a,n=function(e){return"#"===e.charAt(0)?e.slice(1):e}(e),i=function(e){var r=e.g,s=e.b,a=e.a;return{r:t(e.r),g:t(r),b:t(s),a:+(t(a)/255).toFixed(2)}}({r:(a=3===(s=n).length||4===s.length)?"".concat(s.slice(0,1)).concat(s.slice(0,1)):s.slice(0,2),g:a?"".concat(s.slice(1,2)).concat(s.slice(1,2)):s.slice(2,4),b:a?"".concat(s.slice(2,3)).concat(s.slice(2,3)):s.slice(4,6),a:(a?"".concat(s.slice(3,4)).concat(s.slice(3,4)):s.slice(6,8))||"ff"});return function(e,t){var r,s=e.r,a=e.g,n=e.b,i=e.a,o=(r=t,!isNaN(parseFloat(r))&&isFinite(r)?t:i);return"rgba(".concat(s,", ").concat(a,", ").concat(n,", ").concat(o,")")}(i,r)}},7536:(e,t,r)=>{r.d(t,{Qr:()=>U,cI:()=>Se,cl:()=>k,qo:()=>O});var s=r(9196),a=e=>"checkbox"===e.type,n=e=>e instanceof Date,i=e=>null==e;const o=e=>"object"==typeof e;var l=e=>!i(e)&&!Array.isArray(e)&&o(e)&&!n(e),u=e=>l(e)&&e.target?a(e.target)?e.target.checked:e.target.value:e,c=(e,t)=>e.has((e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e)(t)),d=e=>Array.isArray(e)?e.filter(Boolean):[],f=e=>void 0===e,m=(e,t,r)=>{if(!t||!l(e))return r;const s=d(t.split(/[,[\].]+?/)).reduce(((e,t)=>i(e)?e:e[t]),e);return f(s)||s===e?f(e[t])?r:e[t]:s};const y={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},h={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},g="pattern",v="required",b=s.createContext(null),p=()=>s.useContext(b);var _=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const n in e)Object.defineProperty(a,n,{get:()=>{const a=n;return t._proxyFormState[a]!==h.all&&(t._proxyFormState[a]=!s||h.all),r&&(r[a]=!0),e[a]}});return a},V=e=>l(e)&&!Object.keys(e).length,A=(e,t,r)=>{const{name:s,...a}=e;return V(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find((e=>t[e]===(!r||h.all)))},w=e=>Array.isArray(e)?e:[e],F=(e,t,r)=>r&&t?e===t:!e||!t||e===t||w(e).some((e=>e&&(e.startsWith(t)||t.startsWith(e))));function S(e){const t=s.useRef(e);t.current=e,s.useEffect((()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}}),[e.disabled])}function k(e){const t=p(),{control:r=t.control,disabled:a,name:n,exact:i}=e||{},[o,l]=s.useState(r._formState),u=s.useRef(!0),c=s.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),d=s.useRef(n);return d.current=n,S({disabled:a,callback:s.useCallback((e=>u.current&&F(d.current,e.name,i)&&A(e,c.current)&&l({...r._formState,...e})),[r,i]),subject:r._subjects.state}),s.useEffect((()=>(u.current=!0,()=>{u.current=!1})),[]),_(o,r,c.current,!1)}var x=e=>"string"==typeof e,D=(e,t,r,s)=>{const a=Array.isArray(e);return x(e)?(s&&t.watch.add(e),m(r,e)):a?e.map((e=>(s&&t.watch.add(e),m(r,e)))):(s&&(t.watchAll=!0),r)},C=e=>"function"==typeof e,E=e=>{for(const t in e)if(C(e[t]))return!0;return!1};function O(e){const t=p(),{control:r=t.control,name:a,defaultValue:n,disabled:i,exact:o}=e||{},u=s.useRef(a);u.current=a,S({disabled:i,subject:r._subjects.watch,callback:s.useCallback((e=>{if(F(u.current,e.name,o)){const t=D(u.current,r._names,e.values||r._formValues);d(f(u.current)||l(t)&&!E(t)?{...t}:Array.isArray(t)?[...t]:f(t)?n:t)}}),[r,o,n])});const[c,d]=s.useState(f(n)?r._getWatch(a):n);return s.useEffect((()=>r._removeUnmounted())),c}const U=e=>e.render(function(e){const t=p(),{name:r,control:a=t.control,shouldUnregister:n}=e,i=c(a._names.array,r),o=O({control:a,name:r,defaultValue:m(a._formValues,r,m(a._defaultValues,r,e.defaultValue)),exact:!0}),l=k({control:a,name:r}),d=s.useRef(a.register(r,{...e.rules,value:o}));return s.useEffect((()=>{const e=(e,t)=>{const r=m(a._fields,e);r&&(r._f.mount=t)};return e(r,!0),()=>{const t=a._options.shouldUnregister||n;(i?t&&!a._stateFlags.action:t)?a.unregister(r):e(r,!1)}}),[r,a,i,n]),{field:{name:r,value:o,onChange:s.useCallback((e=>d.current.onChange({target:{value:u(e),name:r},type:y.CHANGE})),[r]),onBlur:s.useCallback((()=>d.current.onBlur({target:{value:m(a._formValues,r),name:r},type:y.BLUR})),[r,a]),ref:e=>{const t=m(a._fields,r);t&&e&&(t._f.ref={focus:()=>e.focus(),select:()=>e.select(),setCustomValidity:t=>e.setCustomValidity(t),reportValidity:()=>e.reportValidity()})}},formState:l,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!m(l.errors,r)},isDirty:{enumerable:!0,get:()=>!!m(l.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!m(l.touchedFields,r)},error:{enumerable:!0,get:()=>m(l.errors,r)}})}}(e));var T=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},j=e=>/^\w*$/.test(e),B=e=>d(e.replace(/["|']|\]/g,"").split(/\.|\[/));function N(e,t,r){let s=-1;const a=j(t)?[t]:B(t),n=a.length,i=n-1;for(;++s<n;){const t=a[s];let n=r;if(s!==i){const r=e[t];n=l(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=n,e=e[t]}return e}const L=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=m(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else l(s)&&L(s,t)}}};var M=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),R=(e,t,r)=>{const s=d(m(e,r));return N(s,"root",t[r]),N(e,r,s),e},q=e=>"boolean"==typeof e,H=e=>"file"===e.type,I=e=>x(e)||s.isValidElement(e),P=e=>"radio"===e.type,W=e=>e instanceof RegExp;const $={value:!1,isValid:!1},G={value:!0,isValid:!0};var Q=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!f(e[0].attributes.value)?f(e[0].value)||""===e[0].value?G:{value:e[0].value,isValid:!0}:G:$}return $};const z={isValid:!1,value:null};var J=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),z):z;function K(e,t,r="validate"){if(I(e)||Array.isArray(e)&&e.every(I)||q(e)&&!e)return{type:r,message:I(e)?e:"",ref:t}}var X=e=>l(e)&&!W(e)?e:{value:e,message:""},Y=async(e,t,r,s,n)=>{const{ref:o,refs:u,required:c,maxLength:d,minLength:f,min:m,max:y,pattern:h,validate:b,name:p,valueAsNumber:_,mount:A,disabled:w}=e._f;if(!A||w)return{};const F=u?u[0]:o,S=e=>{s&&F.reportValidity&&(F.setCustomValidity(q(e)?"":e||" "),F.reportValidity())},k={},D=P(o),E=a(o),O=D||E,U=(_||H(o))&&!o.value||""===t||Array.isArray(t)&&!t.length,j=T.bind(null,p,r,k),B=(e,t,r,s="maxLength",a="minLength")=>{const n=e?t:r;k[p]={type:e?s:a,message:n,ref:o,...j(e?s:a,n)}};if(n?!Array.isArray(t)||!t.length:c&&(!O&&(U||i(t))||q(t)&&!t||E&&!Q(u).isValid||D&&!J(u).isValid)){const{value:e,message:t}=I(c)?{value:!!c,message:c}:X(c);if(e&&(k[p]={type:v,message:t,ref:F,...j(v,t)},!r))return S(t),k}if(!(U||i(m)&&i(y))){let e,s;const a=X(y),n=X(m);if(i(t)||isNaN(t)){const r=o.valueAsDate||new Date(t),i=e=>new Date((new Date).toDateString()+" "+e),l="time"==o.type,u="week"==o.type;x(a.value)&&t&&(e=l?i(t)>i(a.value):u?t>a.value:r>new Date(a.value)),x(n.value)&&t&&(s=l?i(t)<i(n.value):u?t<n.value:r<new Date(n.value))}else{const r=o.valueAsNumber||(t?+t:t);i(a.value)||(e=r>a.value),i(n.value)||(s=r<n.value)}if((e||s)&&(B(!!e,a.message,n.message,"max","min"),!r))return S(k[p].message),k}if((d||f)&&!U&&(x(t)||n&&Array.isArray(t))){const e=X(d),s=X(f),a=!i(e.value)&&t.length>e.value,n=!i(s.value)&&t.length<s.value;if((a||n)&&(B(a,e.message,s.message),!r))return S(k[p].message),k}if(h&&!U&&x(t)){const{value:e,message:s}=X(h);if(W(e)&&!t.match(e)&&(k[p]={type:g,message:s,ref:o,...j(g,s)},!r))return S(s),k}if(b)if(C(b)){const e=K(await b(t),F);if(e&&(k[p]={...e,...j("validate",e.message)},!r))return S(e.message),k}else if(l(b)){let e={};for(const s in b){if(!V(e)&&!r)break;const a=K(await b[s](t),F,s);a&&(e={...a,...j(s,a.message)},S(a.message),r&&(k[p]=e))}if(!V(e)&&(k[p]={ref:F,...e},!r))return k}return S(!0),k},Z=e=>{const t=e.constructor&&e.constructor.prototype;return l(t)&&t.hasOwnProperty("isPrototypeOf")},ee="undefined"!=typeof window&&void 0!==window.HTMLElement&&"undefined"!=typeof document;function te(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(ee&&(e instanceof Blob||e instanceof FileList)||!r&&!l(e))return e;if(t=r?[]:{},Array.isArray(e)||Z(e))for(const r in e)t[r]=te(e[r]);else t=e}return t}var re=e=>({isOnSubmit:!e||e===h.onSubmit,isOnBlur:e===h.onBlur,isOnChange:e===h.onChange,isOnAll:e===h.all,isOnTouch:e===h.onTouched});function se(e){for(const t in e)if(!f(e[t]))return!1;return!0}function ae(e,t){const r=j(t)?[t]:B(t),s=1==r.length?e:function(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=f(e)?s++:e[t[s++]];return e}(e,r),a=r[r.length-1];let n;s&&delete s[a];for(let t=0;t<r.slice(0,-1).length;t++){let s,a=-1;const i=r.slice(0,-(t+1)),o=i.length-1;for(t>0&&(n=e);++a<i.length;){const t=i[a];s=s?s[t]:e[t],o===a&&(l(s)&&V(s)||Array.isArray(s)&&se(s))&&(n?delete n[t]:delete e[t]),n=s}}return e}function ne(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ie=e=>i(e)||!o(e);function oe(e,t){if(ie(e)||ie(t))return e===t;if(n(e)&&n(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(n(r)&&n(e)||l(r)&&l(e)||Array.isArray(r)&&Array.isArray(e)?!oe(r,e):r!==e)return!1}}return!0}var le=e=>{const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},ue=e=>"select-multiple"===e.type,ce=e=>P(e)||a(e),de=e=>le(e)&&e.isConnected;function fe(e,t={}){const r=Array.isArray(e);if(l(e)||r)for(const r in e)Array.isArray(e[r])||l(e[r])&&!E(e[r])?(t[r]=Array.isArray(e[r])?[]:{},fe(e[r],t[r])):i(e[r])||(t[r]=!0);return t}function me(e,t,r){const s=Array.isArray(e);if(l(e)||s)for(const s in e)Array.isArray(e[s])||l(e[s])&&!E(e[s])?f(t)||ie(r[s])?r[s]=Array.isArray(e[s])?fe(e[s],[]):{...fe(e[s])}:me(e[s],i(t)?{}:t[s],r[s]):r[s]=!oe(e[s],t[s]);return r}var ye=(e,t)=>me(e,t,fe(t)),he=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>f(e)?e:t?""===e?NaN:e?+e:e:r&&x(e)?new Date(e):s?s(e):e;function ge(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return H(t)?t.files:P(t)?J(e.refs).value:ue(t)?[...t.selectedOptions].map((({value:e})=>e)):a(t)?Q(e.refs).value:he(f(t.value)?e.ref.value:t.value,e)}var ve=(e,t,r,s)=>{const a={};for(const r of e){const e=m(t,r);e&&N(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},be=e=>f(e)?void 0:W(e)?e.source:l(e)?W(e.value)?e.value.source:e.value:e,pe=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function _e(e,t,r){const s=m(e,r);if(s||j(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),n=m(t,s),i=m(e,s);if(n&&!Array.isArray(n)&&r!==s)return{name:r};if(i&&i.type)return{name:s,error:i};a.pop()}return{name:r}}var Ve=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),Ae=(e,t)=>!d(m(e,t)).length&&ae(e,t);const we={mode:h.onSubmit,reValidateMode:h.onChange,shouldFocusError:!0};function Fe(e={}){let t,r={...we,...e},s={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},o={},l=te(r.defaultValues)||{},g=r.shouldUnregister?{}:te(l),v={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},p=0,_={};const A={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},F={watch:ne(),array:ne(),state:ne()},S=re(r.mode),k=re(r.reValidateMode),E=r.criteriaMode===h.all,O=async e=>{let t=!1;return A.isValid&&(t=r.resolver?V((await j()).errors):await B(o,!0),e||t===s.isValid||(s.isValid=t,F.state.next({isValid:t}))),t},U=(e,t,r,s)=>{const a=m(o,e);if(a){const n=m(g,e,f(r)?m(l,e):r);f(n)||s&&s.defaultChecked||t?N(g,e,t?n:ge(a._f)):W(e,n),v.mount&&O()}},T=(e,t,r,a,n)=>{let i=!1;const o={name:e},u=m(s.touchedFields,e);if(A.isDirty){const e=s.isDirty;s.isDirty=o.isDirty=I(),i=e!==o.isDirty}if(A.dirtyFields&&(!r||a)){const r=m(s.dirtyFields,e);oe(m(l,e),t)?ae(s.dirtyFields,e):N(s.dirtyFields,e,!0),o.dirtyFields=s.dirtyFields,i=i||r!==m(s.dirtyFields,e)}return r&&!u&&(N(s.touchedFields,e,r),o.touchedFields=s.touchedFields,i=i||A.touchedFields&&u!==r),i&&n&&F.state.next(o),i?o:{}},j=async e=>r.resolver?await r.resolver({...g},r.context,ve(e||b.mount,o,r.criteriaMode,r.shouldUseNativeValidation)):{},B=async(e,t,a={valid:!0})=>{for(const n in e){const i=e[n];if(i){const{_f:e,...n}=i;if(e){const n=b.array.has(e.name),o=await Y(i,m(g,e.name),E,r.shouldUseNativeValidation,n);if(o[e.name]&&(a.valid=!1,t))break;!t&&(m(o,e.name)?n?R(s.errors,o,e.name):N(s.errors,e.name,o[e.name]):ae(s.errors,e.name))}n&&await B(n,t,a)}}return a.valid},I=(e,t)=>(e&&t&&N(g,e,t),!oe(J(),l)),P=(e,t,r)=>{const s={...v.mount?g:f(t)?l:x(e)?{[e]:t}:t};return D(e,b,s,r)},W=(e,t,r={})=>{const s=m(o,e);let n=t;if(s){const r=s._f;r&&(!r.disabled&&N(g,e,he(t,r)),n=ee&&le(r.ref)&&i(t)?"":t,ue(r.ref)?[...r.ref.options].forEach((e=>e.selected=n.includes(e.value))):r.refs?a(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(n)?!!n.find((t=>t===e.value)):n===e.value))):r.refs[0]&&(r.refs[0].checked=!!n):r.refs.forEach((e=>e.checked=e.value===n)):H(r.ref)?r.ref.value="":(r.ref.value=n,r.ref.type||F.watch.next({name:e})))}(r.shouldDirty||r.shouldTouch)&&T(e,n,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&z(e)},$=(e,t,r)=>{for(const s in t){const a=t[s],i=`${e}.${s}`,l=m(o,i);!b.array.has(e)&&ie(a)&&(!l||l._f)||n(a)?W(i,a,r):$(i,a,r)}},G=(e,t,r={})=>{const a=m(o,e),n=b.array.has(e),u=te(t);N(g,e,u),n?(F.array.next({name:e,values:g}),(A.isDirty||A.dirtyFields)&&r.shouldDirty&&(s.dirtyFields=ye(l,g),F.state.next({name:e,dirtyFields:s.dirtyFields,isDirty:I(e,u)}))):!a||a._f||i(u)?W(e,u,r):$(e,u,r),M(e,b)&&F.state.next({}),F.watch.next({name:e})},Q=async a=>{const n=a.target;let i=n.name;const l=m(o,i);if(l){let c,d;const f=n.type?ge(l._f):u(a),h=a.type===y.BLUR||a.type===y.FOCUS_OUT,v=!pe(l._f)&&!r.resolver&&!m(s.errors,i)&&!l._f.deps||Ve(h,m(s.touchedFields,i),s.isSubmitted,k,S),w=M(i,b,h);N(g,i,f),h?(l._f.onBlur&&l._f.onBlur(a),t&&t(0)):l._f.onChange&&l._f.onChange(a);const x=T(i,f,h,!1),D=!V(x)||w;if(!h&&F.watch.next({name:i,type:a.type}),v)return D&&F.state.next({name:i,...w?{}:x});if(!h&&w&&F.state.next({}),_[i]=(_[i],1),F.state.next({isValidating:!0}),r.resolver){const{errors:e}=await j([i]),t=_e(s.errors,o,i),r=_e(e,o,t.name||i);c=r.error,i=r.name,d=V(e)}else c=(await Y(l,m(g,i),E,r.shouldUseNativeValidation))[i],d=await O(!0);l._f.deps&&z(l._f.deps),(async(r,a,n,i)=>{const o=m(s.errors,r),l=A.isValid&&s.isValid!==a;var u;if(e.delayError&&n?(u=()=>((e,t)=>{N(s.errors,e,t),F.state.next({errors:s.errors})})(r,n),t=e=>{clearTimeout(p),p=window.setTimeout(u,e)},t(e.delayError)):(clearTimeout(p),t=null,n?N(s.errors,r,n):ae(s.errors,r)),(n?!oe(o,n):o)||!V(i)||l){const e={...i,...l?{isValid:a}:{},errors:s.errors,name:r};s={...s,...e},F.state.next(e)}_[r]--,A.isValidating&&!Object.values(_).some((e=>e))&&(F.state.next({isValidating:!1}),_={})})(i,d,c,x)}},z=async(e,t={})=>{let a,n;const i=w(e);if(F.state.next({isValidating:!0}),r.resolver){const t=await(async e=>{const{errors:t}=await j();if(e)for(const r of e){const e=m(t,r);e?N(s.errors,r,e):ae(s.errors,r)}else s.errors=t;return t})(f(e)?e:i);a=V(t),n=e?!i.some((e=>m(t,e))):a}else e?(n=(await Promise.all(i.map((async e=>{const t=m(o,e);return await B(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||s.isValid)&&O()):n=a=await B(o);return F.state.next({...!x(e)||A.isValid&&a!==s.isValid?{}:{name:e},...r.resolver||!e?{isValid:a}:{},errors:s.errors,isValidating:!1}),t.shouldFocus&&!n&&L(o,(e=>e&&m(s.errors,e)),e?i:b.mount),n},J=e=>{const t={...l,...v.mount?g:{}};return f(e)?t:x(e)?m(t,e):e.map((e=>m(t,e)))},K=(e,t)=>({invalid:!!m((t||s).errors,e),isDirty:!!m((t||s).dirtyFields,e),isTouched:!!m((t||s).touchedFields,e),error:m((t||s).errors,e)}),X=(e,t={})=>{for(const a of e?w(e):b.mount)b.mount.delete(a),b.array.delete(a),m(o,a)&&(t.keepValue||(ae(o,a),ae(g,a)),!t.keepError&&ae(s.errors,a),!t.keepDirty&&ae(s.dirtyFields,a),!t.keepTouched&&ae(s.touchedFields,a),!r.shouldUnregister&&!t.keepDefaultValue&&ae(l,a));F.watch.next({}),F.state.next({...s,...t.keepDirty?{isDirty:I()}:{}}),!t.keepIsValid&&O()},Z=(e,t={})=>{let s=m(o,e);const a=q(t.disabled);return N(o,e,{...s||{},_f:{...s&&s._f?s._f:{ref:{name:e}},name:e,mount:!0,...t}}),b.mount.add(e),s?a&&N(g,e,t.disabled?void 0:m(g,e,ge(s._f))):U(e,!0,t.value),{...a?{disabled:t.disabled}:{},...r.shouldUseNativeValidation?{required:!!t.required,min:be(t.min),max:be(t.max),minLength:be(t.minLength),maxLength:be(t.maxLength),pattern:be(t.pattern)}:{},name:e,onChange:Q,onBlur:Q,ref:a=>{if(a){Z(e,t),s=m(o,e);const r=f(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,n=ce(r),i=s._f.refs||[];if(n?i.find((e=>e===r)):r===s._f.ref)return;N(o,e,{_f:{...s._f,...n?{refs:[...i.filter(de),r,...Array.isArray(m(l,e))?[{}]:[]],ref:{type:r.type,name:e}}:{ref:r}}}),U(e,!1,void 0,r)}else s=m(o,e,{}),s._f&&(s._f.mount=!1),(r.shouldUnregister||t.shouldUnregister)&&(!c(b.array,e)||!v.action)&&b.unMount.add(e)}}},se=()=>r.shouldFocusError&&L(o,(e=>e&&m(s.errors,e)),b.mount);return{control:{register:Z,unregister:X,getFieldState:K,_executeSchema:j,_focusError:se,_getWatch:P,_getDirty:I,_updateValid:O,_removeUnmounted:()=>{for(const e of b.unMount){const t=m(o,e);t&&(t._f.refs?t._f.refs.every((e=>!de(e))):!de(t._f.ref))&&X(e)}b.unMount=new Set},_updateFieldArray:(e,t=[],r,a,n=!0,i=!0)=>{if(a&&r){if(v.action=!0,i&&Array.isArray(m(o,e))){const t=r(m(o,e),a.argA,a.argB);n&&N(o,e,t)}if(A.errors&&i&&Array.isArray(m(s.errors,e))){const t=r(m(s.errors,e),a.argA,a.argB);n&&N(s.errors,e,t),Ae(s.errors,e)}if(A.touchedFields&&i&&Array.isArray(m(s.touchedFields,e))){const t=r(m(s.touchedFields,e),a.argA,a.argB);n&&N(s.touchedFields,e,t)}A.dirtyFields&&(s.dirtyFields=ye(l,g)),F.state.next({isDirty:I(e,t),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else N(g,e,t)},_getFieldArray:t=>d(m(v.mount?g:l,t,e.shouldUnregister?m(l,t,[]):[])),_subjects:F,_proxyFormState:A,get _fields(){return o},get _formValues(){return g},get _stateFlags(){return v},set _stateFlags(e){v=e},get _defaultValues(){return l},get _names(){return b},set _names(e){b=e},get _formState(){return s},set _formState(e){s=e},get _options(){return r},set _options(e){r={...r,...e}}},trigger:z,register:Z,handleSubmit:(e,t)=>async a=>{a&&(a.preventDefault&&a.preventDefault(),a.persist&&a.persist());let n=!0,i=te(g);F.state.next({isSubmitting:!0});try{if(r.resolver){const{errors:e,values:t}=await j();s.errors=e,i=t}else await B(o);V(s.errors)?(F.state.next({errors:{},isSubmitting:!0}),await e(i,a)):(t&&await t({...s.errors},a),se())}catch(e){throw n=!1,e}finally{s.isSubmitted=!0,F.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:V(s.errors)&&n,submitCount:s.submitCount+1,errors:s.errors})}},watch:(e,t)=>C(e)?F.watch.subscribe({next:r=>e(P(void 0,t),r)}):P(e,t,!0),setValue:G,getValues:J,reset:(t,r)=>((t,r={})=>{const a=t||l,n=te(a),i=t&&!V(t)?n:l;if(r.keepDefaultValues||(l=a),!r.keepValues){if(r.keepDirtyValues)for(const e of b.mount)m(s.dirtyFields,e)?N(i,e,m(g,e)):G(e,m(i,e));else{if(ee&&f(t))for(const e of b.mount){const t=m(o,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;try{if(le(e)){e.closest("form").reset();break}}catch(e){}}}o={}}g=e.shouldUnregister?r.keepDefaultValues?te(l):{}:n,F.array.next({values:i}),F.watch.next({values:i})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},v.mount=!A.isValid||!!r.keepIsValid,v.watch=!!e.shouldUnregister,F.state.next({submitCount:r.keepSubmitCount?s.submitCount:0,isDirty:r.keepDirty||r.keepDirtyValues?s.isDirty:!(!r.keepDefaultValues||oe(t,l)),isSubmitted:!!r.keepIsSubmitted&&s.isSubmitted,dirtyFields:r.keepDirty||r.keepDirtyValues?s.dirtyFields:r.keepDefaultValues&&t?ye(l,t):{},touchedFields:r.keepTouched?s.touchedFields:{},errors:r.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})})(C(t)?t(g):t,r),resetField:(e,t={})=>{m(o,e)&&(f(t.defaultValue)?G(e,m(l,e)):(G(e,t.defaultValue),N(l,e,t.defaultValue)),t.keepTouched||ae(s.touchedFields,e),t.keepDirty||(ae(s.dirtyFields,e),s.isDirty=t.defaultValue?I(e,m(l,e)):I()),t.keepError||(ae(s.errors,e),A.isValid&&O()),F.state.next({...s}))},clearErrors:e=>{e?w(e).forEach((e=>ae(s.errors,e))):s.errors={},F.state.next({errors:s.errors})},unregister:X,setError:(e,t,r)=>{const a=(m(o,e,{_f:{}})._f||{}).ref;N(s.errors,e,{...t,ref:a}),F.state.next({name:e,errors:s.errors,isValid:!1}),r&&r.shouldFocus&&a&&a.focus&&a.focus()},setFocus:(e,t={})=>{const r=m(o,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:K}}function Se(e={}){const t=s.useRef(),[r,a]=s.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...Fe(e),formState:r});const n=t.current.control;return n._options=e,S({subject:n._subjects.state,callback:s.useCallback((e=>{A(e,n._proxyFormState,!0)&&(n._formState={...n._formState,...e},a({...n._formState}))}),[n])}),s.useEffect((()=>{n._stateFlags.mount||(n._proxyFormState.isValid&&n._updateValid(),n._stateFlags.mount=!0),n._stateFlags.watch&&(n._stateFlags.watch=!1,n._subjects.state.next({})),n._removeUnmounted()})),s.useEffect((()=>{r.submitCount&&n._focusError()}),[n,r.submitCount]),t.current.formState=_(r,n),t.current}}}]);