(self.webpackChunk=self.webpackChunk||[]).push([[753],{56937:(e,t,r)=>{"use strict";r.d(t,{Z:()=>R});var n=r(67294),o=r(73727),a=r(22122),s=r(19756),c=r(45697),i=r.n(c),l=r(94184),u=r.n(l),f=r(23663),p={tag:f.iC,active:i().bool,className:i().string,cssModule:i().object},d=function(e){var t=e.className,r=e.cssModule,o=e.active,c=e.tag,i=(0,s.Z)(e,["className","cssModule","active","tag"]),l=(0,f.mx)(u()(t,!!o&&"active","breadcrumb-item"),r);return n.createElement(c,(0,a.Z)({},i,{className:l,"aria-current":o?"page":void 0}))};d.propTypes=p,d.defaultProps={tag:"li"};const m=d;var b={tag:f.iC,listTag:f.iC,className:i().string,listClassName:i().string,cssModule:i().object,children:i().node,"aria-label":i().string},y=function(e){var t=e.className,r=e.listClassName,o=e.cssModule,c=e.children,i=e.tag,l=e.listTag,p=e["aria-label"],d=(0,s.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),m=(0,f.mx)(u()(t),o),b=(0,f.mx)(u()("breadcrumb",r),o);return n.createElement(i,(0,a.Z)({},d,{className:m,"aria-label":p}),n.createElement(l,{className:b},c))};y.propTypes=b,y.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};const h=y;var g=r(17625),j=r(37703),v=r(85893);function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return(Z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=S(e);if(t){var o=S(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Z(e,t)}(s,e);var t,r,n,a=E(s);function s(){return P(this,s),a.apply(this,arguments)}return t=s,(r=[{key:"render",value:function(){var e=this.props,t=e.items,r=e.main,n=e.icon,a=e.content.cms.pages.general.home,s=e.dark,c=void 0!==s&&s,i=null;return t&&(i=t.map((function(e,t){return(0,v.jsx)(m,{children:(0,v.jsx)(o.OL,{className:"text-".concat(c?"light":"secondary"),to:e.to,children:e.content})},t)}))),(0,v.jsxs)(h,{className:"d-none d-sm-flex align-items-center",color:c?"light":"secondary",listClassName:"bg-transparent rounded-0 justify-content-end text-large",style:{top:"50%",right:0,transform:"translateY(-10px)",position:"absolute",zIndex:1e3},children:[(0,v.jsx)(m,{children:(0,v.jsxs)(o.OL,{className:"text-".concat(c?"light":"secondary"),to:"/",children:[(0,v.jsx)(g.G,{icon:n,className:"mr-1"})," ",(0,v.jsx)("strong",{children:a})]})}),i,(0,v.jsx)(m,{className:"text-".concat(c?"light":"secondary"," text-decoration-none"),active:!0,children:r})]})}}])&&w(t.prototype,r),n&&w(t,n),s}(n.Component);const R=(0,j.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}))(k)},6792:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(67294);var n=r(85893);const o=function(e){var t=e.children;e.dark;return(0,n.jsx)("div",{className:"mb-3 mb-sm-4 pb-2 pb-sm-3 position-relative",children:t})}},99412:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});r(67294);var n=r(86455),o=r.n(n);r(85893);function a(e){var t=e.err;return t?o().fire({text:t.message||t,icon:"warning",confirmButtonColor:"#3085d6"}):null}},92740:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(67294),o=r(22122),a=r(19756),s=r(96156),c=r(45697),i=r.n(c),l=r(94184),u=r.n(l),f=r(23663),p=r(69638);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={children:i().node,className:i().string,closeClassName:i().string,closeAriaLabel:i().string,cssModule:i().object,color:i().string,fade:i().bool,isOpen:i().bool,toggle:i().func,tag:f.iC,transition:i().shape(p.Z.propTypes),innerRef:i().oneOfType([i().object,i().string,i().func])},y={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:m(m({},p.Z.defaultProps),{},{unmountOnExit:!0})};function h(e){var t=e.className,r=e.closeClassName,s=e.closeAriaLabel,c=e.cssModule,i=e.tag,l=e.color,d=e.isOpen,b=e.toggle,y=e.children,h=e.transition,g=e.fade,j=e.innerRef,v=(0,a.Z)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),x=(0,f.mx)(u()(t,"alert","alert-"+l,{"alert-dismissible":b}),c),O=(0,f.mx)(u()("close",r),c),N=m(m(m({},p.Z.defaultProps),h),{},{baseClass:g?h.baseClass:"",timeout:g?h.timeout:0});return n.createElement(p.Z,(0,o.Z)({},v,N,{tag:i,className:x,in:d,role:"alert",innerRef:j}),b?n.createElement("button",{type:"button",className:O,"aria-label":s,onClick:b},n.createElement("span",{"aria-hidden":"true"},"×")):null,y)}h.propTypes=b,h.defaultProps=y;const g=h;var j=r(85893);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const O=function(e){var t=e.message,r=e.time,o=v((0,n.useState)(!0),2),a=o[0],s=o[1];return r&&setTimeout((function(){s(!1)}),r),t?(0,j.jsx)(g,{color:t.type,isOpen:a,children:t.content}):null}},91658:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(67294);var n=r(85893);const o=function(e){var t=e.children,r=e.className,o=e.dark,a=void 0!==o&&o;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-30 d-none d-sm-block mb-1 text-".concat(a?"light":"secondary"," ").concat(r),children:t}),(0,n.jsx)("div",{className:"text-24 d-sm-none mb-1 text-".concat(a?"light":"secondary"," ").concat(r),children:t})]})}},31132:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(67294);var n=r(85893);const o=function(e){var t=e.children,r=e.className,o=e.dark,a=void 0!==o&&o;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-".concat(a?"light":"secondary"," text-18 d-none d-sm-block text-300 ").concat(r),children:t}),(0,n.jsx)("div",{className:"text-".concat(a?"light":"secondary"," text-14 d-sm-none text-300 ").concat(r),children:t})]})}},30753:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>U});var n=r(67294),o=r(37703),a=r(5977),s=r(22122),c=r(19756),i=r(45697),l=r.n(i),u=r(94184),f=r.n(u),p=r(23663),d={tag:p.iC,inverse:l().bool,color:l().string,body:l().bool,outline:l().bool,className:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().string,l().func])},m=function(e){var t=e.className,r=e.cssModule,o=e.color,a=e.body,i=e.inverse,l=e.outline,u=e.tag,d=e.innerRef,m=(0,c.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=(0,p.mx)(f()(t,"card",!!i&&"text-white",!!a&&"card-body",!!o&&(l?"border":"bg")+"-"+o),r);return n.createElement(u,(0,s.Z)({},m,{className:b,ref:d}))};m.propTypes=d,m.defaultProps={tag:"div"};const b=m;var y={tag:p.iC,className:l().string,cssModule:l().object},h=function(e){var t=e.className,r=e.cssModule,o=e.tag,a=(0,c.Z)(e,["className","cssModule","tag"]),i=(0,p.mx)(f()(t,"card-header"),r);return n.createElement(o,(0,s.Z)({},a,{className:i}))};h.propTypes=y,h.defaultProps={tag:"div"};const g=h;var j={tag:p.iC,className:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().string,l().func])},v=function(e){var t=e.className,r=e.cssModule,o=e.innerRef,a=e.tag,i=(0,c.Z)(e,["className","cssModule","innerRef","tag"]),l=(0,p.mx)(f()(t,"card-body"),r);return n.createElement(a,(0,s.Z)({},i,{className:l,ref:o}))};v.propTypes=j,v.defaultProps={tag:"div"};const x=v;var O=r(51252),N=r(17354),P=r(17625),w=r(51436),Z=r(6792),E=r(56937),C=r(91658),S=r(31132),k=r(99412),R=r(92740),M=r(73950),T=r(36938),_=r(92903),D=r(85893);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Y(e);if(t){var o=Y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return G(this,r)}}function G(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(a,e);var t,r,n,o=B(a);function a(){return I(this,a),o.apply(this,arguments)}return t=a,(r=[{key:"componentDidMount",value:function(){this.props.show(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){e.match.params.id!==this.props.match.params.id&&this.props.show(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.content.cms.pages.backend.pages.notifications,r=t.index,n=t.title,o=t.show,a=e.backend.notifications,s=a.loading,c=a.error,i=a.message,l=a.notification,u=e.auth.data.name,f=null,p=(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(k.Z,{err:c})}),d=(0,D.jsx)(R.Z,{message:i});if(s)f=(0,D.jsx)(O.Z,{xs:12,children:(0,D.jsx)(M.Z,{})});else if(l){var m,y,h;switch(l.type){case"App\\Notifications\\PlanPurchase":y="Plan Purchase",h=(0,D.jsx)(P.G,{className:"text-success",size:"2x",fixedWidth:!0,icon:w.sq$}),m=(0,D.jsxs)(D.Fragment,{children:["You successfully bought a ",l.data.name," plan."]});break;case"App\\Notifications\\PlanImminentExpiration":y="Plan Imminent Expiration",h=(0,D.jsx)(P.G,{className:"text-orange",size:"2x",fixedWidth:!0,icon:w.sq$}),m=(0,D.jsxs)(D.Fragment,{children:["Your ",l.data.name," plan will expire in ",l.data.days," ",l.data.days>1?"s":"","."]});break;case"App\\Notifications\\PlanExpired":y="Plan Expired",h=(0,D.jsx)(P.G,{className:"text-red",size:"2x",fixedWidth:!0,icon:w.sq$}),m=(0,D.jsxs)(D.Fragment,{children:["Your ",l.data.name," plan has just expired."]});break;case"App\\Notifications\\RestaurantRecharge":y="Recharge",h=(0,D.jsx)(P.G,{className:"text-primary",size:"2x",fixedWidth:!0,icon:w.bou}),m=(0,D.jsxs)(D.Fragment,{children:["You successfully made a ",l.data.amount," USD",l.data.method&&l.data.method.name+" "," recharge."]})}f=(0,D.jsxs)(b,{className:"bg-soft",children:[(0,D.jsxs)(g,{className:"d-flex align-items-center",children:[(0,D.jsx)("div",{children:h}),(0,D.jsxs)("div",{className:"pl-3",children:[(0,D.jsx)("h4",{children:y}),m]}),(0,D.jsxs)("div",{className:"ml-auto",children:[(0,D.jsx)(N.Z,{color:void 0,className:"position-static",children:y}),(0,D.jsx)("div",{className:"ml-auto",children:(0,_.Ny)(l.created_at)})]})]}),(0,D.jsxs)(x,{className:"bg-light-50",children:[(0,D.jsxs)("p",{children:["Hi, ",(0,D.jsx)("span",{className:"text-capitalize text-700",children:u})]}),m]})]})}return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(Z.Z,{children:[(0,D.jsx)(E.Z,{items:[{to:"/restaurant/notifications",content:r}],main:o,icon:w.qmU}),(0,D.jsx)(C.Z,{children:n}),(0,D.jsx)(S.Z,{children:o})]}),(0,D.jsxs)("div",{children:[p,d,f]})]})}}])&&L(t.prototype,r),n&&L(t,n),a}(n.Component);const U=(0,a.EN)((0,o.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e)}),(function(e){return{show:function(t){return e(T.v6(t))}}}))(q))}}]);