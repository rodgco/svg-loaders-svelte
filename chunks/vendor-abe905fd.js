function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const r=i(t,n,e,o);return t[0](r)}}function i(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o,r,c,s){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,c);if(u){const r=i(n,e,o,s);t.p(r,u)}}function a(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function l(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function d(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function p(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function y(){return m(" ")}function b(){return m("")}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n){for(const e in n)x(t,e,n[e])}function w(t){return Array.from(t.childNodes)}function k(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const c=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||c.push(t.name)}for(let t=0;t<c.length;t++)o.removeAttribute(c[t]);return t.splice(r,1)[0]}}return o?g(n):$(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function E(t){return v(t," ")}function A(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function j(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function S(t,n=document.body){return Array.from(n.querySelectorAll(t))}let N;function O(t){N=t}function q(){if(!N)throw new Error("Function called outside component initialization");return N}function C(t){q().$$.on_mount.push(t)}function M(t){q().$$.after_update.push(t)}function T(t,n){q().$$.context.set(t,n)}const z=[],B=[],F=[],P=[],D=Promise.resolve();let G=!1;function H(t){F.push(t)}let I=!1;const J=new Set;function K(){if(!I){I=!0;do{for(let t=0;t<z.length;t+=1){const n=z[t];O(n),L(n.$$)}for(O(null),z.length=0;B.length;)B.pop()();for(let t=0;t<F.length;t+=1){const n=F[t];J.has(n)||(J.add(n),n())}F.length=0}while(z.length);for(;P.length;)P.pop()();G=!1,I=!1,J.clear()}}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(H)}}const Q=new Set;let R;function U(){R={r:0,c:[],p:R}}function V(){R.r||r(R.c),R=R.p}function W(t,n){t&&t.i&&(Q.delete(t),t.i(n))}function X(t,n,e,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),R.c.push((()=>{Q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function Y(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const s=t[c],u=n[c];if(u){for(const t in s)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[c]=u}else for(const t in s)r[t]=1}for(const s in o)s in e||(e[s]=void 0);return e}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function nt(t,n){t&&t.l(n)}function et(t,n,o,s){const{fragment:u,on_mount:i,on_destroy:f,after_update:a}=t.$$;u&&u.m(n,o),s||H((()=>{const n=i.map(e).filter(c);f?f.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(H)}function ot(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function rt(t,n){-1===t.$$.dirty[0]&&(z.push(t),G||(G=!0,D.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ct(n,e,c,s,u,i,f=[-1]){const a=N;O(n);const l=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1};let d=!1;if(l.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&u(l.ctx[t],l.ctx[t]=r)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](r),d&&rt(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!s&&s(l.ctx),e.target){if(e.hydrate){const t=w(e.target);l.fragment&&l.fragment.l(t),t.forEach(p)}else l.fragment&&l.fragment.c();e.intro&&W(n.$$.fragment),et(n,e.target,e.anchor,e.customElement),K()}O(a)}class st{$destroy(){ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ut=[];function it(n,e=t){let o;const r=[];function c(t){if(s(n,t)&&(n=t,o)){const t=!ut.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),ut.push(t,n)}if(t){for(let t=0;t<ut.length;t+=2)ut[t][0](ut[t+1]);ut.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(s,u=t){const i=[s,u];return r.push(i),1===r.length&&(o=e(c)||t),s(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}export{n as A,U as B,it as C,u as D,f as E,d as F,t as G,g as H,_ as I,l as J,a as K,S as L,j as M,st as S,w as a,x as b,k as c,p as d,$ as e,h as f,v as g,A as h,ct as i,tt as j,y as k,b as l,nt as m,E as n,et as o,Y as p,Z as q,X as r,s,m as t,V as u,W as v,ot as w,T as x,M as y,C as z};
