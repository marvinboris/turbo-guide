(self.webpackChunk=self.webpackChunk||[]).push([[4801],{6937:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(7294),a=n(3727),i=n(2122),s=n(9756),o=n(5697),l=n.n(o),c=n(4184),d=n.n(c),u=n(3663),p={tag:u.iC,active:l().bool,className:l().string,cssModule:l().object},m=function(e){var t=e.className,n=e.cssModule,a=e.active,o=e.tag,l=(0,s.Z)(e,["className","cssModule","active","tag"]),c=(0,u.mx)(d()(t,!!a&&"active","breadcrumb-item"),n);return r.createElement(o,(0,i.Z)({},l,{className:c,"aria-current":a?"page":void 0}))};m.propTypes=p,m.defaultProps={tag:"li"};const f=m;var h={tag:u.iC,listTag:u.iC,className:l().string,listClassName:l().string,cssModule:l().object,children:l().node,"aria-label":l().string},b=function(e){var t=e.className,n=e.listClassName,a=e.cssModule,o=e.children,l=e.tag,c=e.listTag,p=e["aria-label"],m=(0,s.Z)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),f=(0,u.mx)(d()(t),a),h=(0,u.mx)(d()("breadcrumb",n),a);return r.createElement(l,(0,i.Z)({},m,{className:f,"aria-label":p}),r.createElement(c,{className:h},o))};b.propTypes=h,b.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"};const g=b;var x=n(7625),y=n(7703),v=n(5893);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=T(e);if(t){var a=T(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return k(this,n)}}function k(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(s,e);var t,n,r,i=S(s);function s(){return O(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.items,n=e.main,r=e.icon,i=e.content.cms.pages.general.home,s=e.dark,o=void 0!==s&&s,l=null;return t&&(l=t.map((function(e,t){return(0,v.jsx)(f,{children:(0,v.jsx)(a.OL,{className:"text-".concat(o?"light":"secondary"),to:e.to,children:e.content})},t)}))),(0,v.jsxs)(g,{className:"d-none d-sm-flex align-items-center",color:o?"light":"secondary",listClassName:"bg-transparent rounded-0 justify-content-end text-large",style:{top:"50%",right:0,transform:"translateY(-10px)",position:"absolute",zIndex:1e3},children:[(0,v.jsx)(f,{children:(0,v.jsxs)(a.OL,{className:"text-".concat(o?"light":"secondary"),to:"/",children:[(0,v.jsx)(x.G,{icon:r,className:"mr-1"})," ",(0,v.jsx)("strong",{children:i})]})}),l,(0,v.jsx)(f,{className:"text-".concat(o?"light":"secondary"," text-decoration-none"),active:!0,children:n})]})}}])&&Z(t.prototype,n),r&&Z(t,r),s}(r.Component);const E=(0,y.$j)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e)}))(P)},1085:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});n(7294);var r=n(3727),a=n(1252),i=n(7975),s=n(5538),o=n(7625),l=n(1436),c=n(5893);const d=function(e){var t=e.onSubmit,n=e.xs,d=void 0===n?12:n,u=e.sm,p=void 0===u?12:u,m=e.md,f=void 0===m?12:m,h=e.lg,b=void 0===h?12:h,g=e.xl,x=void 0===g?12:g,y=e.icon,v=e.title,j=e.subtitle,N=e.className,w=void 0===N?"":N,O=e.dark,Z=void 0!==O&&O,C=e.innerClassName,S=void 0===C?"":C,k=e.outerClassName,T=void 0===k?"":k,P=(e.p0,e.children),E=e.style,R=e.id,_=e.list,M=e.link,z=e.disabled;return(0,c.jsxs)(a.Z,{xs:d,sm:p,md:f,lg:b,xl:x,className:T,children:[(0,c.jsxs)("div",{className:"rounded-4 d-flex align-items-center mb-4 mb-sm-5 py-3 py-sm-4 px-4 px-sm-5 bg-".concat(Z?"grayblue":"orange-10"," ").concat(w),children:[(0,c.jsxs)("div",{className:"d-flex align-items-center",children:[y?(0,c.jsx)(o.G,{fixedWidth:!0,className:"mr-3 mr-sm-4 text-30 text-orange-20",icon:y,size:"lg"}):null,(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"text-".concat(Z?"light":"orange"," text-700 text-20 mb-1"),children:v}),(0,c.jsx)("div",{className:"text-10",children:j})]})]}),_&&(0,c.jsx)(r.rU,{to:M,className:"ml-auto d-none d-md-inline",children:(0,c.jsxs)(i.Z,{color:"green",className:"rounded-2 py-2 text-16 text-500 px-3 px-sm-4",children:[(0,c.jsx)(o.G,{icon:l.A8,fixedWidth:!0,className:"mr-3"}),_]})})]}),(0,c.jsx)("div",{className:"d-flex flex-column ".concat(Z?"text-light bg-grayblue":""," ").concat(w),style:E,children:(0,c.jsx)("div",{className:"flex-fill d-flex flex-column",children:(0,c.jsx)("div",{className:"flex-fill",children:z?(0,c.jsx)("div",{id:R,className:S,encType:"multipart/form-data",children:P}):(0,c.jsx)(s.Z,{onSubmit:t,id:R,className:S,encType:"multipart/form-data",children:P})})})})]})}},6792:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(7294);var r=n(5893);const a=function(e){var t=e.children;e.dark;return(0,r.jsx)("div",{className:"mb-3 mb-sm-4 pb-2 pb-sm-3 position-relative",children:t})}},2740:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(7294),a=n(2122),i=n(9756),s=n(6156),o=n(5697),l=n.n(o),c=n(4184),d=n.n(c),u=n(3663),p=n(9638);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={children:l().node,className:l().string,closeClassName:l().string,closeAriaLabel:l().string,cssModule:l().object,color:l().string,fade:l().bool,isOpen:l().bool,toggle:l().func,tag:u.iC,transition:l().shape(p.Z.propTypes),innerRef:l().oneOfType([l().object,l().string,l().func])},b={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:f(f({},p.Z.defaultProps),{},{unmountOnExit:!0})};function g(e){var t=e.className,n=e.closeClassName,s=e.closeAriaLabel,o=e.cssModule,l=e.tag,c=e.color,m=e.isOpen,h=e.toggle,b=e.children,g=e.transition,x=e.fade,y=e.innerRef,v=(0,i.Z)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),j=(0,u.mx)(d()(t,"alert","alert-"+c,{"alert-dismissible":h}),o),N=(0,u.mx)(d()("close",n),o),w=f(f(f({},p.Z.defaultProps),g),{},{baseClass:x?g.baseClass:"",timeout:x?g.timeout:0});return r.createElement(p.Z,(0,a.Z)({},v,w,{tag:l,className:j,in:m,role:"alert",innerRef:y}),h?r.createElement("button",{type:"button",className:N,"aria-label":s,onClick:h},r.createElement("span",{"aria-hidden":"true"},"×")):null,b)}g.propTypes=h,g.defaultProps=b;const x=g;var y=n(5893);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const N=function(e){var t=e.message,n=e.time,a=v((0,r.useState)(!0),2),i=a[0],s=a[1];return n&&setTimeout((function(){s(!1)}),n),t?(0,y.jsx)(x,{color:t.type,isOpen:i,children:t.content}):null}},9405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var r=n(7294),a=n(2669),i=n(9618),s=n(8822),o=n(1566),l=n(8959),c=n(4670),d=n(7625),u=n(2903),p=n(3379),m=n.n(p),f=n(953),h={insert:"head",singleton:!1};m()(f.Z,h);f.Z.locals;var b=n(5893);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const y=function(e){var t=e.id,n=e.icon,p=e.addon,m=e.onChange,f=e.className,h=void 0===f?"":f,x=e.name,y=e.type,v=void 0===y?"text":y,j=e.required,N=e.readonly,w=e.disabled,O=e.placeholder,Z=e.value,C=void 0===Z?"":Z,S=e.validation,k=void 0===S?{}:S,T=e.append,P=e.children,E=e.dark,R=void 0!==E&&E,_=e.bonus,M=g((0,r.useState)(!1),2),z=M[0],H=M[1],U=function(e){H(!0),m(e)};return j&&(k.required=!0),(0,b.jsxs)(a.Z,{className:"Input ".concat(h),children:[(0,b.jsxs)(i.Z,{className:"bg-".concat(R?"grayblue":"white border border-soft"," rounded-6 d-flex align-items-center"),size:"lg",children:[(0,b.jsx)(s.Z,{addonType:"prepend",children:(0,b.jsx)(o.Z,{className:"bg-transparent d-block border-0 px-4 py-0 my-1 text-center text-16",style:{width:77},children:n?(0,b.jsx)(d.G,{className:"text-light mx-1",fixedWidth:!0,icon:n}):p})}),P?(0,b.jsx)(l.Z,{valid:z&&(0,u.Es)(C,k),invalid:z&&!(0,u.Es)(C,k),onChange:U,type:v,id:x,name:x,required:j,readOnly:N,disabled:w,value:C,className:"bg-".concat(R?"grayblue":""," border-top-0 border-right-0 border-bottom-0 border-soft rounded-right-6 text-small text-secondary h-100 px-4 py-3"),children:P}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c.Z,{valid:z&&(0,u.Es)(C,k),invalid:z&&!(0,u.Es)(C,k),onChange:U,id:t||x,type:v,name:x,required:j,readOnly:N,disabled:w,value:C,className:"border-top-0 border-right-0 border-bottom-0 border-soft rounded-right-6 text-small text-secondary h-100 px-4 py-3"}),(0,b.jsx)("label",{className:"text-small text-light text-truncate m-0",for:t||x,children:O})]}),T?(0,b.jsx)(s.Z,{addonType:"append",children:(0,b.jsx)(o.Z,{className:"bg-transparent border-0 text-secondary text-small px-4",children:T})}):null]}),_]})}},1658:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(7294);var r=n(5893);const a=function(e){var t=e.children,n=e.className,a=e.dark,i=void 0!==a&&a;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-30 d-none d-sm-block mb-1 text-".concat(i?"light":"secondary"," ").concat(n),children:t}),(0,r.jsx)("div",{className:"text-24 d-sm-none mb-1 text-".concat(i?"light":"secondary"," ").concat(n),children:t})]})}},1132:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(7294);var r=n(5893);const a=function(e){var t=e.children,n=e.className,a=e.dark,i=void 0!==a&&a;return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"text-".concat(i?"light":"secondary"," text-18 d-none d-sm-block text-300 ").concat(n),children:t}),(0,r.jsx)("div",{className:"text-".concat(i?"light":"secondary"," text-14 d-sm-none text-300 ").concat(n),children:t})]})}},4801:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var r=n(7294),a=n(7703),i=n(5977),s=n(7975),o=n(2669),l=n(1252),c=n(267),d=n(1436),u=n(6024),p=n(7625),m=n(1417),f=n(6937),h=n(6792),b=n(1658),g=n(1132),x=n(9412),y=n(3950),v=n(1085),j=n(9405),N=n(2740),w=n(896),O=n(2903),Z=n(5893);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var a=z(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?M(e):t}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U=function(e){var t=e.children,n=e.icon,r=e.title,a=e.save,i=e.hidden,o=e.onSubmit,l=e.updatable,c=e.toggle;return t?(0,Z.jsxs)("form",{className:"col-xxl-3 col-xl-4 col-lg-6 pb-4",style:i?{visibility:"hidden"}:{visibility:"visible"},onSubmit:o,children:[(0,Z.jsx)("input",{type:"hidden",name:"_method",defaultValue:"PATCH"}),(0,Z.jsx)("div",{className:"h-100 bg-white rounded-8 shadow py-3 py-sm-4 px-4 px-sm-5",children:(0,Z.jsxs)("div",{className:"py-2 d-flex flex-column h-100",children:[(0,Z.jsxs)("div",{className:"mb-3 mb-sm-4 pb-3 pb-sm-4 border-bottom border-orange-50 d-flex align-items-center justify-content-between",children:[(0,Z.jsxs)("div",{className:"text-14",children:[(0,Z.jsx)(p.G,{icon:n,className:"mr-3 text-orange text-21"}),r]}),(0,Z.jsx)("div",{className:"text-27 text-orange",children:(0,Z.jsx)(p.G,{icon:l?d._1N:d.byT,onClick:c,style:{cursor:"pointer"}})})]}),(0,Z.jsx)("div",{className:"mb-2 mb-sm-3 pb-1",children:t}),(0,Z.jsx)("div",{className:"mt-auto",children:(0,Z.jsx)(s.Z,{color:"orange",className:"text-20 rounded-4 py-3 px-4",children:(0,Z.jsxs)("div",{className:"mx-3",children:[a,(0,Z.jsx)(p.G,{icon:u.r6,className:"ml-4"})]})})})]})})]}):null},I=function(e){var t=e.condition,n=e.banner,r=e.attr,a=e.locked,i=e.disabled,s=e.restaurant,l=e.selected_file,c=e.fileUpload;return t?(0,Z.jsx)(o.Z,{children:(0,Z.jsx)("div",{id:"embed-".concat(r),className:"embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center",style:{cursor:i?"not-allowed":"pointer",background:n&&'url("'.concat(n,'") no-repeat center'),backgroundSize:"cover"},onClick:function(){return c(r)},children:n&&n!==s[r]&&(0,Z.jsxs)("div",{className:"text-center text-green w-100 px-3",children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(p.G,{icon:d.f8k,fixedWidth:!0,size:"5x"})}),(0,Z.jsx)("div",{className:"mt-3",children:l})]})})}):(0,Z.jsx)(o.Z,{children:(0,Z.jsx)("div",{style:{cursor:"not-allowed"},className:"embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center",children:(0,Z.jsxs)("div",{className:"text-center text-light w-100 px-3",children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(p.G,{icon:d.byT,fixedWidth:!0,size:"5x"})}),(0,Z.jsx)("div",{className:"mt-3 text-12 text-center text-truncate",children:a})]})})})},F=function(e){var t=e.condition,n=void 0!==t&&t,r=e.children;return n?r:null},A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,n,r,a=R(i);function i(){var e;T(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return H(M(e=a.call.apply(a,[this].concat(n))),"state",{name:"",owner:"",phone:"",whatsapp:"",location:"",address:"",currency:"XAF",position:"1",restaurantUpdatable:!1,email:"",country:"",token:"",password:"",new_password:"",new_password_confirmation:"",photo:"",accountUpdatable:!1,banner1:"",banner2:"",banner3:"",cmsUpdatable:!1,days:"",hours:"",calendarUpdatable:!1}),H(M(e),"submitHandler",(function(e){e.preventDefault()})),H(M(e),"restaurantSettingsSubmitHandler",(function(t){t.preventDefault(),e.props.restaurant(t.target)})),H(M(e),"restaurantToggle",(function(){return e.setState((function(e){return{restaurantUpdatable:!e.restaurantUpdatable}}))})),H(M(e),"accountSettingsSubmitHandler",(function(t){t.preventDefault(),e.props.account(t.target)})),H(M(e),"accountToggle",(function(){return e.setState((function(e){return{accountUpdatable:!e.accountUpdatable}}))})),H(M(e),"cmsSettingsSubmitHandler",(function(t){t.preventDefault(),e.props.cms(t.target)})),H(M(e),"cmsToggle",(function(){return e.setState((function(e){return{cmsUpdatable:!e.cmsUpdatable}}))})),H(M(e),"calendarSettingsSubmitHandler",(function(t){t.preventDefault(),e.props.calendar(t.target)})),H(M(e),"calendarToggle",(function(){return e.setState((function(e){return{calendarUpdatable:!e.calendarUpdatable}}))})),H(M(e),"inputChangeHandler",(function(t){var n=t.target,r=n.name,a=n.value,i=n.files;i&&e.readURL(t.target),e.setState(H({},r,i?i[0]:a))})),H(M(e),"readURL",(function(e){if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(t){document.getElementById("embed-".concat(e.name)).style.backgroundImage="url('".concat(t.target.result,"')"),document.getElementById("embed-".concat(e.name)).style.backgroundSize="cover"},t.readAsDataURL(e.files[0])}})),H(M(e),"fileUpload",(function(e){return document.getElementById(e)&&document.getElementById(e).click()})),e}return t=i,r=[{key:"getDerivedStateFromProps",value:function(e,t){if(e.backend.settings.restaurant&&""===t.name){var n=e.backend.settings.restaurant;return(0,O.v4)(t,k({},n))}return t}}],(n=[{key:"componentDidMount",value:function(){this.props.reset(),this.props.get()}},{key:"componentWillUnmount",value:function(){if(!this.props.backend.settings.restaurant.name)return this.props.history.push("/restaurant/settings");this.props.reset()}},{key:"render",value:function(){var e,t,n,r,a,i=this,s=this.props,u=s.content,w=u.cms.pages,O=w.components.form,C=O.save,S=O.selected_file,T=w.backend.pages.settings,P=T.title,E=T.subtitle,R=T.form,_=u.currencies,M=u.countries,z=s.backend.settings,H=z.loading,A=z.error,D=z.message,q=z.restaurant,G=s.auth.data.plan,L=this.state,W=L.name,B=L.owner,$=L.phone,J=L.whatsapp,V=L.location,X=L.address,Y=L.currency,Q=L.position,K=L.restaurantUpdatable,ee=L.email,te=L.country,ne=L.token,re=L.password,ae=L.new_password,ie=L.new_password_confirmation,se=L.photo,oe=L.accountUpdatable,le=L.banner1,ce=L.banner2,de=L.banner3,ue=L.cmsUpdatable,pe=L.days,me=L.hours,fe=L.calendarUpdatable,he=null;D&&"success"===D.type&&window.location.reload();var be=G,ge=G&&"standard"===G.slug,xe=G&&"premium"===G.slug,ye=M.map((function(e){var t=e.country,n=e.code,r=e.name;return(0,Z.jsx)("option",{value:t,code:n,children:r},t)})),ve=_.map((function(e){var t=e.cc,n=e.symbol,r=e.name;return(0,Z.jsx)("option",{value:t,symbol:n,children:r},t)}));if(H)e=(0,Z.jsx)(l.Z,{xs:12,children:(0,Z.jsx)(y.Z,{})});else{var je;he=(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(x.Z,{err:A})});var Ne=_.find((function(e){return e.cc===Y}));Ne&&(je=Ne.symbol),t=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Z,{type:"text",icon:d.J9Y,onChange:this.inputChangeHandler,value:W,disabled:!K,name:"name",required:!0,placeholder:R.name}),(0,Z.jsx)(j.Z,{type:"text",icon:d.Cv1,onChange:this.inputChangeHandler,value:B,disabled:!K,name:"owner",required:!0,placeholder:R.owner}),(0,Z.jsx)(F,{condition:be,children:(0,Z.jsx)(j.Z,{type:"tel",icon:d.j1w,onChange:this.inputChangeHandler,value:$,disabled:!K,name:"phone",required:!0,placeholder:R.phone})}),(0,Z.jsx)(F,{condition:ge||xe,children:(0,Z.jsx)(j.Z,{type:"tel",icon:m.VHX,onChange:this.inputChangeHandler,value:J,disabled:!K,name:"whatsapp",placeholder:R.whatsapp})}),(0,Z.jsx)(F,{condition:xe,children:(0,Z.jsx)(j.Z,{type:"text",icon:d.$40,onChange:this.inputChangeHandler,value:V,disabled:!K,name:"location",placeholder:R.location})}),(0,Z.jsx)(j.Z,{type:"text",icon:d.FGq,onChange:this.inputChangeHandler,value:X,disabled:!K,name:"address",placeholder:R.address}),(0,Z.jsxs)(j.Z,{type:"select",addon:(0,Z.jsx)("div",{className:"text-center text-light",style:{margin:"0 -10px"},children:je}),onChange:this.inputChangeHandler,value:Y,disabled:!K,name:"currency",required:!0,children:[(0,Z.jsx)("option",{children:R.select_currency}),ve]}),(0,Z.jsxs)(j.Z,{type:"select",icon:d.jev,onChange:this.inputChangeHandler,value:Q,disabled:!K,name:"position",required:!0,children:[(0,Z.jsx)("option",{children:R.select_position}),(0,Z.jsx)("option",{value:0,children:R.left}),(0,Z.jsx)("option",{value:1,children:R.right})]})]}),n=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Z,{type:"email",icon:d.FU$,onChange:this.inputChangeHandler,value:ee,disabled:!oe,name:"email",required:!0,placeholder:R.email}),(0,Z.jsxs)(j.Z,{type:"select",addon:(0,Z.jsx)("div",{children:(0,Z.jsx)("div",{className:"rounded-circle mx-auto overflow-hidden position-relative d-flex justify-content-center align-items-center",style:{width:18,height:18},children:(0,Z.jsx)("span",{className:"flag-icon text-large position-absolute flag-icon-".concat(te.toLowerCase())})})}),onChange:this.inputChangeHandler,value:te,disabled:!oe,name:"country",required:!0,children:[(0,Z.jsx)("option",{children:R.select_country}),ye]}),(0,Z.jsx)(j.Z,{type:"text",icon:d.Xcf,onChange:this.inputChangeHandler,value:ne,disabled:!oe,name:"token",readonly:!0,placeholder:R.token}),(0,Z.jsx)(j.Z,{type:"password",icon:d.byT,onChange:this.inputChangeHandler,value:re,disabled:!oe,name:"password",placeholder:R.password}),(0,Z.jsx)(j.Z,{type:"password",icon:d.byT,onChange:this.inputChangeHandler,value:ae,disabled:!oe,name:"new_password",placeholder:R.new_password}),(0,Z.jsx)(j.Z,{type:"password",icon:d.byT,onChange:this.inputChangeHandler,value:ie,disabled:!oe,name:"new_password_confirmation",placeholder:R.new_password_confirmation}),(0,Z.jsx)(o.Z,{children:(0,Z.jsx)("div",{id:"embed-photo",className:"embed-responsive embed-responsive-16by9 bg-soft rounded-8 d-flex justify-content-center align-items-center",style:{cursor:oe?"pointer":"not-allowed",background:se&&'url("'.concat(se,'") no-repeat center'),backgroundSize:"cover"},onClick:oe?function(){return i.fileUpload("photo")}:null,children:se?se&&se!==q.photo&&(0,Z.jsxs)("div",{className:"text-center text-green w-100 px-3",children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(p.G,{icon:d.f8k,fixedWidth:!0,size:"5x"})}),(0,Z.jsx)("div",{className:"mt-3",children:S})]}):(0,Z.jsxs)("div",{className:"text-center text-light w-100 overflow-hidden px-3",children:[(0,Z.jsx)("div",{children:(0,Z.jsx)(p.G,{icon:d.Oi0,fixedWidth:!0,size:"5x"})}),(0,Z.jsx)("div",{className:"mt-3 mb-1 text-center text-12 text-truncate",children:R.upload}),(0,Z.jsx)("div",{className:"text-center text-12 text-truncate",children:R.size})]})})})]}),r=(0,Z.jsx)(Z.Fragment,{children:[{condition:be,banner:le,attr:"banner1",locked:R.locked_banner1},{condition:ge||xe,banner:ce,attr:"banner2",locked:R.locked_banner2},{condition:xe,banner:de,attr:"banner3",locked:R.locked_banner3}].map((function(e){return(0,Z.jsx)(I,k(k({},e),{},{disabled:!ue,restaurant:q,selected_file:S,fileUpload:ue?i.fileUpload:null}),JSON.stringify(e))}))}),a=(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(j.Z,{type:"text",icon:d.fT7,onChange:this.inputChangeHandler,value:pe,disabled:!fe,name:"days",required:!0,placeholder:R.days}),(0,Z.jsx)(j.Z,{type:"text",icon:d.SZw,onChange:this.inputChangeHandler,value:me,disabled:!fe,name:"hours",required:!0,placeholder:R.hours})]})}return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(h.Z,{children:[(0,Z.jsx)(f.Z,{main:P,icon:d.b7W}),(0,Z.jsx)(b.Z,{children:P}),(0,Z.jsx)(g.Z,{children:P})]}),(0,Z.jsxs)("div",{children:[he,(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(v.Z,{disabled:!0,icon:d.b7W,title:P,subtitle:E,innerClassName:"row",children:[(0,Z.jsx)("div",{className:"col-12",children:(0,Z.jsx)(N.Z,{message:D})}),e,(0,Z.jsx)(U,{hidden:H,icon:d.J9Y,save:C,onSubmit:this.restaurantSettingsSubmitHandler,title:R.restaurant_settings,updatable:K,toggle:this.restaurantToggle,children:t}),(0,Z.jsxs)(U,{hidden:H,icon:d.ILF,save:C,onSubmit:this.accountSettingsSubmitHandler,title:R.account_settings,updatable:oe,toggle:this.accountToggle,children:[(0,Z.jsx)("input",{type:"file",id:"photo",name:"photo",className:"d-none",onChange:this.inputChangeHandler,accept:".png,.jpg,.jpeg"}),n]}),(0,Z.jsxs)(U,{hidden:H,icon:d.b7W,save:C,onSubmit:this.cmsSettingsSubmitHandler,title:R.cms_settings,updatable:ue,toggle:this.cmsToggle,children:[(0,Z.jsx)(F,{condition:be,children:(0,Z.jsx)("input",{type:"file",id:"banner1",name:"banner1",className:"d-none",onChange:this.inputChangeHandler,accept:".png,.jpg,.jpeg"})}),(0,Z.jsx)(F,{condition:ge||xe,children:(0,Z.jsx)("input",{type:"file",id:"banner2",name:"banner2",className:"d-none",onChange:this.inputChangeHandler,accept:".png,.jpg,.jpeg"})}),(0,Z.jsx)(F,{condition:xe,children:(0,Z.jsx)("input",{type:"file",id:"banner3",name:"banner3",className:"d-none",onChange:this.inputChangeHandler,accept:".png,.jpg,.jpeg"})}),r]}),(0,Z.jsx)(U,{hidden:H,icon:d.fT7,save:C,onSubmit:this.calendarSettingsSubmitHandler,title:R.calendar_settings,updatable:fe,toggle:this.calendarToggle,children:a})]})})]})]})}}])&&P(t.prototype,n),r&&P(t,r),i}(r.Component);const D=(0,i.EN)((0,a.$j)((function(e){return k({},e)}),(function(e){return{get:function(){return e(w.Gw())},restaurant:function(t){return e(w.Ir(t))},account:function(t){return e(w.Hl(t))},cms:function(t){return e(w.jQ(t))},calendar:function(t){return e(w.Rd(t))},reset:function(){return e(w.Sl())}}}))(A))},953:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,'.Input ::-moz-placeholder{color:var(--light);opacity:1}.Input :-ms-input-placeholder{color:var(--light);opacity:1}.Input ::placeholder{color:var(--light);opacity:1}.Input label{position:absolute;left:101px;top:1rem;z-index:1;max-width:calc(100% - 102px - 1rem)}.Input label:after{content:"*";color:red}.Input input:not([value=""])+label,.Input input[disabled]+label,.Input input[readonly]+label,.Input input[required]:valid+label{display:none}',""]);const i=a},8959:(e,t,n)=>{"use strict";n.d(t,{Z:()=>x});var r=n(2122),a=n(9756),i=n(7294),s=n(5697),o=n.n(s),l=n(4184),c=n.n(l),d=n(3663),u=n(3349),p=n(3552),m={className:o().string,id:o().oneOfType([o().string,o().number]).isRequired,label:o().node,valid:o().bool,invalid:o().bool,bsSize:o().string,htmlFor:o().string,cssModule:o().object,onChange:o().func,children:o().oneOfType([o().node,o().array,o().func]),innerRef:o().oneOfType([o().object,o().string,o().func])},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={files:null},n.onChange=n.onChange.bind((0,u.Z)(n)),n}(0,p.Z)(t,e);var n=t.prototype;return n.onChange=function(e){var t=e.target,n=this.props.onChange,r=this.getSelectedFiles(t);"function"==typeof n&&n.apply(void 0,arguments),this.setState({files:r})},n.getSelectedFiles=function(e){if(this.props.multiple&&e.files)return[].slice.call(e.files).map((function(e){return e.name})).join(", ");if(-1!==e.value.indexOf("fakepath")){var t=e.value.split("\\");return t[t.length-1]}return e.value},n.render=function(){var e=this.props,t=e.className,n=e.label,s=e.valid,o=e.invalid,l=e.cssModule,u=e.children,p=(e.bsSize,e.innerRef),m=e.htmlFor,f=(e.type,e.onChange,e.dataBrowse),h=e.hidden,b=(0,a.Z)(e,["className","label","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor","type","onChange","dataBrowse","hidden"]),g=(0,d.mx)(c()(t,"custom-file"),l),x=(0,d.mx)(c()(o&&"is-invalid",s&&"is-valid"),l),y=m||b.id,v=this.state.files;return i.createElement("div",{className:g,hidden:h||!1},i.createElement("input",(0,r.Z)({type:"file"},b,{ref:p,"aria-invalid":o,className:c()(x,(0,d.mx)("custom-file-input",l)),onChange:this.onChange})),i.createElement("label",{className:(0,d.mx)("custom-file-label",l),htmlFor:y,"data-browse":f},v||n||"Choose file"),u)},t}(i.Component);f.propTypes=m;const h=f;var b={className:o().string,id:o().oneOfType([o().string,o().number]).isRequired,type:o().string.isRequired,label:o().node,inline:o().bool,valid:o().bool,invalid:o().bool,bsSize:o().string,htmlFor:o().string,cssModule:o().object,children:o().oneOfType([o().node,o().array,o().func]),innerRef:o().oneOfType([o().object,o().string,o().func])};function g(e){var t=e.className,n=e.label,s=e.inline,o=e.valid,l=e.invalid,u=e.cssModule,p=e.children,m=e.bsSize,f=e.innerRef,b=e.htmlFor,g=(0,a.Z)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),x=g.type,y=(0,d.mx)(c()(t,"custom-"+x,!!m&&"custom-"+x+"-"+m),u),v=(0,d.mx)(c()(l&&"is-invalid",o&&"is-valid"),u),j=b||g.id;if("select"===x){g.type;var N=(0,a.Z)(g,["type"]);return i.createElement("select",(0,r.Z)({},N,{ref:f,className:c()(v,y),"aria-invalid":l}),p)}if("file"===x)return i.createElement(h,e);if("checkbox"!==x&&"radio"!==x&&"switch"!==x)return i.createElement("input",(0,r.Z)({},g,{ref:f,"aria-invalid":l,className:c()(v,y)}));var w=c()(y,(0,d.mx)(c()("custom-control",{"custom-control-inline":s}),u)),O=g.hidden,Z=(0,a.Z)(g,["hidden"]);return i.createElement("div",{className:w,hidden:O||!1},i.createElement("input",(0,r.Z)({},Z,{type:"switch"===x?"checkbox":x,ref:f,"aria-invalid":l,className:c()(v,(0,d.mx)("custom-control-input",u))})),i.createElement("label",{className:(0,d.mx)("custom-control-label",u),htmlFor:j},n),p)}g.propTypes=b;const x=g},5538:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(2122),a=n(9756),i=n(3349),s=n(3552),o=n(7294),l=n(5697),c=n.n(l),d=n(4184),u=n.n(d),p=n(3663),m={children:c().node,inline:c().bool,tag:p.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),className:c().string,cssModule:c().object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,i.Z)(n)),n.submit=n.submit.bind((0,i.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.inline,s=e.tag,l=e.innerRef,c=(0,a.Z)(e,["className","cssModule","inline","tag","innerRef"]),d=(0,p.mx)(u()(t,!!i&&"form-inline"),n);return o.createElement(s,(0,r.Z)({},c,{ref:l,className:d}))},t}(o.Component);f.propTypes=m,f.defaultProps={tag:"form"};const h=f},2669:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(2122),a=n(9756),i=n(7294),s=n(5697),o=n.n(s),l=n(4184),c=n.n(l),d=n(3663),u={children:o().node,row:o().bool,check:o().bool,inline:o().bool,disabled:o().bool,tag:d.iC,className:o().string,cssModule:o().object},p=function(e){var t=e.className,n=e.cssModule,s=e.row,o=e.disabled,l=e.check,u=e.inline,p=e.tag,m=(0,a.Z)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=(0,d.mx)(c()(t,!!s&&"row",l?"form-check":"form-group",!(!l||!u)&&"form-check-inline",!(!l||!o)&&"disabled"),n);return"fieldset"===p&&(m.disabled=o),i.createElement(p,(0,r.Z)({},m,{className:f}))};p.propTypes=u,p.defaultProps={tag:"div"};const m=p},4670:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(2122),a=n(9756),i=n(3349),s=n(3552),o=n(7294),l=n(5697),c=n.n(l),d=n(4184),u=n.n(d),p=n(3663),m={children:c().node,type:c().string,size:c().oneOfType([c().number,c().string]),bsSize:c().string,valid:c().bool,invalid:c().bool,tag:p.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),plaintext:c().bool,addon:c().bool,className:c().string,cssModule:c().object},f=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind((0,i.Z)(n)),n.focus=n.focus.bind((0,i.Z)(n)),n}(0,s.Z)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.type,s=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,m=e.addon,f=e.plaintext,h=e.innerRef,b=(0,a.Z)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,x=new RegExp("\\D","g"),y=d||("select"===i||"textarea"===i?i:"input"),v="form-control";f?(v+="-plaintext",y=d||"input"):"file"===i?v+="-file":"range"===i?v+="-range":g&&(v=m?null:"form-check-input"),b.size&&x.test(b.size)&&((0,p.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=b.size,delete b.size);var j=(0,p.mx)(u()(t,c&&"is-invalid",l&&"is-valid",!!s&&"form-control-"+s,v),n);return("input"===y||d&&"function"==typeof d)&&(b.type=i),b.children&&!f&&"select"!==i&&"string"==typeof y&&"select"!==y&&((0,p.O4)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.createElement(y,(0,r.Z)({},b,{ref:h,className:j,"aria-invalid":c}))},t}(o.Component);f.propTypes=m,f.defaultProps={type:"text"};const h=f},9618:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(2122),a=n(9756),i=n(7294),s=n(5697),o=n.n(s),l=n(4184),c=n.n(l),d=n(3663),u={tag:d.iC,size:o().string,className:o().string,cssModule:o().object},p=function(e){var t=e.className,n=e.cssModule,s=e.tag,o=e.size,l=(0,a.Z)(e,["className","cssModule","tag","size"]),u=(0,d.mx)(c()(t,"input-group",o?"input-group-"+o:null),n);return i.createElement(s,(0,r.Z)({},l,{className:u}))};p.propTypes=u,p.defaultProps={tag:"div"};const m=p},8822:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(2122),a=n(9756),i=n(7294),s=n(5697),o=n.n(s),l=n(4184),c=n.n(l),d=n(3663),u=n(1566),p={tag:d.iC,addonType:o().oneOf(["prepend","append"]).isRequired,children:o().node,className:o().string,cssModule:o().object},m=function(e){var t=e.className,n=e.cssModule,s=e.tag,o=e.addonType,l=e.children,p=(0,a.Z)(e,["className","cssModule","tag","addonType","children"]),m=(0,d.mx)(c()(t,"input-group-"+o),n);return"string"==typeof l?i.createElement(s,(0,r.Z)({},p,{className:m}),i.createElement(u.Z,{children:l})):i.createElement(s,(0,r.Z)({},p,{className:m,children:l}))};m.propTypes=p,m.defaultProps={tag:"div"};const f=m},1566:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(2122),a=n(9756),i=n(7294),s=n(5697),o=n.n(s),l=n(4184),c=n.n(l),d=n(3663),u={tag:d.iC,className:o().string,cssModule:o().object},p=function(e){var t=e.className,n=e.cssModule,s=e.tag,o=(0,a.Z)(e,["className","cssModule","tag"]),l=(0,d.mx)(c()(t,"input-group-text"),n);return i.createElement(s,(0,r.Z)({},o,{className:l}))};p.propTypes=u,p.defaultProps={tag:"span"};const m=p}}]);