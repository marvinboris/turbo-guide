(self.webpackChunk=self.webpackChunk||[]).push([[1179],{70878:(t,e,n)=>{"use strict";n.d(e,{Z:()=>P});var r=n(67294),o=n(37703),a=n(73727),i=n(5977),s=n(93379),c=n.n(s),l=n(10758),u={insert:"head",singleton:!1};c()(l.Z,u);l.Z.locals;var p=n(85893);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(i,t);var e,n,r,o=b(i);function i(){return h(this,i),o.apply(this,arguments)}return e=i,(n=[{key:"render",value:function(){var t=this.props,e=t.frontend.restaurants.restaurant.cart,n=t.match.params.slug;return(0,p.jsxs)(a.rU,{to:"/restaurants/".concat(n,"/cart"),className:"UI Cart",children:[(0,p.jsx)("i",{className:"fas fa-shopping-cart"}),(0,p.jsx)("div",{className:"qty",children:e.items.reduce((function(t,e){return t+e.qty}),0)})]})}}])&&g(e.prototype,n),r&&g(e,r),i}(r.Component);const P=(0,i.EN)((0,o.$j)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}))(j))},31179:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>C});var r=n(67294),o=n(37703),a=n(5977),i=n(22618),s=n(90921),c=n(97699),l=n(54178),u=n(92903),p=n(93379),d=n.n(p),f=n(83224),m={insert:"head",singleton:!1};d()(f.Z,m);f.Z.locals;var h=n(85893);function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=N(t);if(e){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?k(t):e}function k(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(t){var e=t.label,n=t.position,r=t.symbol,o=t.value;return(0,h.jsxs)("div",{className:"line",children:[(0,h.jsx)("div",{className:"label",children:e}),(0,h.jsxs)("div",{className:"value",children:[!n&&(0,h.jsx)("span",{children:"".concat(r," ")}),o,n&&(0,h.jsx)("span",{children:" ".concat(r)})]})]})},S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(a,t);var e,n,r,o=w(a);function a(){var t;j(this,a);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return F(k(t=o.call.apply(o,[this].concat(n))),"state",{location:"",address:"",phone:"",method_id:"",changing:!1,editing:!1,isMounted:!1,componentLoading:!1}),F(k(t),"inputChangedHandler",(function(e){var n=e.target,r=n.name,o=n.value;t.setState(F({},r,o))})),F(k(t),"selectMethod",(function(e){t.setState({method_id:e})})),F(k(t),"change",(function(){return t.setState({changing:!0})})),F(k(t),"getInfo",(function(){var e=t.state;return{location:e.location,address:e.address,phone:e.phone,method_id:e.method_id}})),F(k(t),"setChangeInfo",(function(){return t.setState({changing:!1},(function(){return localStorage.setItem("client_info",JSON.stringify(t.getInfo()))}))})),F(k(t),"edit",(function(){return t.setState({editing:!0})})),F(k(t),"setEditInfo",(function(){return t.setState({editing:!1},(function(){return localStorage.setItem("client_info",JSON.stringify(t.getInfo()))}))})),t}return e=a,(n=[{key:"componentDidMount",value:function(){var t=this,e=this.props.content.payment_methods,n=localStorage.getItem("client_info");n?this.setState(v({},JSON.parse(n))):localStorage.setItem("client_info",JSON.stringify(this.getInfo())),this.setState({method_id:e.length>0&&e[0].id,isMounted:!0,componentLoading:!0},(function(){return setTimeout((function(){t.setState({componentLoading:!1})}),250)}))}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.frontend.restaurants,r=n.error,o=n.tracking_code,a=e.match.params.slug;if(r)return(0,u.sD)(r);t.frontend.restaurants.tracking_code!==o&&this.props.history.push({pathname:"/restaurants/".concat(a,"/order/success"),state:{tracking_code:o}})}},{key:"render",value:function(){var t=this,e=this.props,n=e.content,r=n.cms.pages.frontend.restaurants,o=r.cart.options.list,a=r.payment,l=n.currencies,u=n.payment_methods,p=e.frontend.restaurants,d=p.restaurant,f=d.cart.total,m=d.delivery_fee,g=d.service_charge,b=p.currency,x=p.position,j=e.match.params.slug,P=e.location.state,O=P.due_amount,w=P.option,R=this.state,k=R.location,N=R.address,F=R.phone,S=R.method_id,C=R.editing,I=R.changing,U=l.find((function(t){return t.cc===b})),z=U&&U.cc,E=u.map((function(e){return(0,h.jsxs)("div",{className:"method".concat(+e.id==+S?" active":""),onClick:function(){return t.selectMethod(e.id)},children:[e.name,(0,h.jsx)("i",{className:"fas fa-check-circle"})]},JSON.stringify(e))})),Z=y(Object.keys(o),1)[0],D=(0,h.jsxs)("div",{className:"Page Payment",children:[(0,h.jsx)(i.Z,{name:a.title}),(0,h.jsxs)("main",{children:[(0,h.jsxs)("section",{className:"banner",children:[w===Z&&(0,h.jsxs)("div",{className:"top".concat(I?" changing":""),children:[(0,h.jsx)("iframe",{src:k,allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}),(0,h.jsxs)("div",{className:"change",children:[(0,h.jsx)("div",{className:"form-group",children:(0,h.jsx)("input",{type:"url",name:"location",className:"form-control",onChange:this.inputChangedHandler,value:k,placeholder:a.banner.location})}),(0,h.jsxs)("button",{onClick:I?this.setChangeInfo:this.change,children:[I?a.banner.save:a.banner.change,(0,h.jsx)("i",{className:"fas fa-map-marker-alt"})]})]})]}),(0,h.jsxs)("div",{className:"bottom".concat(C?" editing":""),children:[(0,h.jsxs)("div",{className:"title",children:[(0,h.jsx)("i",{className:"fas fa-compass"}),(0,h.jsx)("span",{children:a.banner.current_location})]}),w===Z&&(0,h.jsxs)("div",{className:"address",children:[N&&(0,h.jsx)("div",{className:"value",children:N}),(0,h.jsx)("div",{className:"form-group",children:(0,h.jsx)("textarea",{name:"address",className:"form-control",onChange:this.inputChangedHandler,value:N,placeholder:a.banner.address})})]}),(0,h.jsxs)("div",{className:"phone",children:[F&&(0,h.jsxs)("div",{className:"value",children:[(0,h.jsx)("i",{className:"fas fa-mobile-alt"}),F]}),(0,h.jsx)("div",{className:"form-group",children:(0,h.jsx)("input",{type:"tel",name:"phone",className:"form-control",onChange:this.inputChangedHandler,value:F,placeholder:a.banner.phone})})]}),(0,h.jsx)("div",{className:"edit",children:(0,h.jsxs)("button",{onClick:C?this.setEditInfo:this.edit,className:"btn btn-".concat(window.COLOR_PRIMARY),children:[(0,h.jsx)("i",{className:"fas fa-edit"}),C?a.banner.save:a.banner.edit]})})]})]}),(0,h.jsxs)("section",{className:"methods",children:[(0,h.jsx)("div",{className:"title",children:a.methods.select}),(0,h.jsx)("div",{className:"body",children:E})]}),(0,h.jsxs)("section",{className:"payment",children:[(0,h.jsx)("div",{className:"title",children:a.payment.title}),(0,h.jsxs)("div",{className:"body",children:[(0,h.jsxs)("div",{className:"table-body",children:[(0,h.jsx)(_,{label:a.payment.cart_total,value:f,position:x,symbol:z}),w===Z&&(0,h.jsx)(_,{label:a.payment.delivery_fee,value:m,position:x,symbol:z}),(0,h.jsx)(_,{label:a.payment.service_charge,value:g,position:x,symbol:z})]}),(0,h.jsx)("div",{className:"table-footer",children:(0,h.jsx)(_,{label:a.payment.total_due,value:O,position:x,symbol:z})})]})]})]}),(0,h.jsx)(s.Z,{title:a.cart.due_amount,label:a.cart.pay_now,value:O,onClick:function(){return t.props.payment(j,v(v({},t.state),t.props.location.state))}})]});return(0,h.jsx)(c.Z,{loading:this.state.isMounted&&this.state.componentLoading,children:D})}}])&&P(e.prototype,n),r&&P(e,r),a}(r.Component);const C=(0,a.EN)((0,o.$j)((function(t){return v({},t)}),(function(t){return{payment:function(e,n){return t((0,l.t9)(e,n))},reset:function(){return t((0,l.hP)(!0))}}}))(S))},90921:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(67294),o=n(37703),a=n(93379),i=n.n(a),s=n(58398),c={insert:"head",singleton:!1};i()(s.Z,c);s.Z.locals;var l=n(85893);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=b(t);if(e){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(a,t);var e,n,r,o=g(a);function a(){return f(this,a),o.apply(this,arguments)}return e=a,(n=[{key:"render",value:function(){var t=this.props,e=t.content.currencies,n=t.frontend.restaurants,r=n.restaurant.cart,o=n.currency,a=n.position,i=t.title,s=t.label,c=t.value,u=t.onClick,p=e.find((function(t){return t.cc===o})),d=p&&p.cc;return(0,l.jsxs)("div",{className:"UI Checkout",children:[(0,l.jsxs)("div",{className:"total",children:[(0,l.jsx)("div",{className:"text",children:i}),(0,l.jsxs)("div",{className:"price",children:[0==a&&(0,l.jsxs)("span",{children:[d," "]}),(0,l.jsx)("span",{className:"value",children:c}),1==a&&(0,l.jsxs)("span",{children:[" ",d]})]})]}),(0,l.jsx)("div",{className:"go-to-cart",children:(0,l.jsxs)("button",{onClick:u,className:"btn btn-white",children:[(0,l.jsx)("div",{className:"items",children:(0,l.jsx)("div",{children:r.items.reduce((function(t,e){return t+e.qty}),0)})}),(0,l.jsx)("div",{className:"text",children:s}),(0,l.jsx)("div",{className:"icon",children:(0,l.jsx)("i",{className:"fas fa-arrow-right"})})]})})]})}}])&&m(e.prototype,n),r&&m(e,r),a}(r.Component);const v=(0,o.$j)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t)}))(x)},22618:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});n(67294);var r=n(5977),o=n(70878),a=n(93379),i=n.n(a),s=n(28275),c={insert:"head",singleton:!1};i()(s.Z,c);s.Z.locals;var l=n(85893);function u(t){var e=t.name,n=t.children;return(0,l.jsxs)("header",{className:"UI Header",children:[(0,l.jsx)("span",{onClick:(0,r.k6)().goBack,className:"back",children:(0,l.jsx)("i",{className:"fas fa-angle-left"})}),(0,l.jsx)("div",{className:"meal-name",children:(0,l.jsx)("div",{children:e})}),(0,l.jsx)("div",{children:n||(0,l.jsx)(o.Z,{})})]})}},10758:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".UI.Cart{position:relative;text-decoration:none;color:var(--color-primary)}.UI.Cart i{font-size:20px}.UI.Cart .qty{top:0;right:0;width:18px;height:18px;display:flex;font-size:12px;font-weight:700;border-radius:50%;position:absolute;align-items:center;color:var(--white);line-height:15.53px;justify-content:center;background-color:var(--green);transform:translate(50%,-50%)}",""]);const a=o},83224:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,'.Frontend.Restaurants .Page.Payment{padding:78px 16px 106px}.Frontend.Restaurants .Page.Payment section .title{font-size:20px;font-weight:500;line-height:25.88px}.Frontend.Restaurants .Page.Payment section.banner{overflow:hidden;position:relative;border-radius:25px;margin-bottom:26px}.Frontend.Restaurants .Page.Payment section.banner .form-group{opacity:0;max-height:0;margin-bottom:0;overflow:hidden;transition:var(--transition)}.Frontend.Restaurants .Page.Payment section.banner .form-group .form-control{z-index:1;border:none;height:40px;margin:.2rem;outline:none;font-size:12px;overflow:hidden;position:relative;padding:12px 16px;border-radius:20px;line-height:15.53px;width:calc(100% - .4rem);background-color:var(--color-bg)}.Frontend.Restaurants .Page.Payment section.banner .form-group textarea{min-height:80px}.Frontend.Restaurants .Page.Payment section.banner button{height:30px;font-size:12px;font-weight:500;padding-left:11px;align-items:center;padding-right:11px;border-radius:50rem;display:inline-flex;line-height:15.53px}.Frontend.Restaurants .Page.Payment section.banner .top{height:142px;background-color:var(--soft)}.Frontend.Restaurants .Page.Payment section.banner .top iframe{width:100%;border:none;height:100%}.Frontend.Restaurants .Page.Payment section.banner .top .change{top:0;left:0;display:flex;padding:14px 27px;position:absolute;align-items:center}.Frontend.Restaurants .Page.Payment section.banner .top .change .form-group{flex-grow:1;max-width:0;padding-right:0;max-height:unset}.Frontend.Restaurants .Page.Payment section.banner .top .change button{border:none;outline:none;color:var(--white);background-color:var(--black-60)}.Frontend.Restaurants .Page.Payment section.banner .top .change button i{opacity:.8;font-size:11px;margin-left:9px}.Frontend.Restaurants .Page.Payment section.banner .top.changing .form-group{opacity:1;max-width:100%;margin-bottom:0;padding-right:8px}.Frontend.Restaurants .Page.Payment section.banner .bottom{padding:12px;position:relative;background-color:var(--black-5)}.Frontend.Restaurants .Page.Payment section.banner .bottom .title{display:flex;margin-bottom:8px;align-items:center}.Frontend.Restaurants .Page.Payment section.banner .bottom .title i{margin-right:7px;color:var(--color-primary)}.Frontend.Restaurants .Page.Payment section.banner .bottom .title span{display:block}.Frontend.Restaurants .Page.Payment section.banner .bottom .title span:after{content:"";width:9px;height:2px;display:block;border-radius:2px;background-color:var(--color-primary)}.Frontend.Restaurants .Page.Payment section.banner .bottom .value{opacity:1;font-size:12px;overflow:hidden;position:static;max-height:100px;margin-bottom:8px;line-height:15.53px;transition:var(--transition)}.Frontend.Restaurants .Page.Payment section.banner .bottom .address,.Frontend.Restaurants .Page.Payment section.banner .bottom .phone{width:70%;padding-left:27px}.Frontend.Restaurants .Page.Payment section.banner .bottom .phone .value{padding:5px;border-radius:8px;align-items:center;display:inline-flex;color:var(--color-primary);background-color:var(--orange-20)}.Frontend.Restaurants .Page.Payment section.banner .bottom .phone .value i{opacity:.7;font-size:13px;margin-right:5px}.Frontend.Restaurants .Page.Payment section.banner .bottom .edit{top:10px;right:11px;position:absolute}.Frontend.Restaurants .Page.Payment section.banner .bottom .edit button i{font-size:10px;margin-right:9px}.Frontend.Restaurants .Page.Payment section.banner .bottom.editing .value{opacity:0;padding:0;max-height:0;margin-bottom:0;position:absolute}.Frontend.Restaurants .Page.Payment section.banner .bottom.editing .form-group{opacity:1;max-height:100px;margin:-.2rem -.2rem calc(8px + .2rem)}.Frontend.Restaurants .Page.Payment section.methods{border-radius:25px;margin-bottom:39px;padding:22px 24px 31px;background-color:var(--black-5)}.Frontend.Restaurants .Page.Payment section.methods .body{display:flex;margin-top:17px}.Frontend.Restaurants .Page.Payment section.methods .body div{height:40px;display:flex;cursor:pointer;font-size:12px;border-radius:8px;padding-left:20px;position:relative;align-items:center;padding-right:20px;line-height:15.53px;color:var(--color-secondary);background-color:var(--color-bg)}.Frontend.Restaurants .Page.Payment section.methods .body div i{top:-8px;opacity:0;right:8px;max-width:0;font-size:16px;position:absolute;color:var(--green);transition:var(--transition)}.Frontend.Restaurants .Page.Payment section.methods .body div.active{text-decoration:none}.Frontend.Restaurants .Page.Payment section.methods .body div.active i{opacity:1}.Frontend.Restaurants .Page.Payment section.methods .body div:not(:last-child){margin-right:10px}.Frontend.Restaurants .Page.Payment section.payment{padding-bottom:50px}.Frontend.Restaurants .Page.Payment section.payment .body{margin-top:7px}.Frontend.Restaurants .Page.Payment section.payment .body .line{display:flex;font-size:14px;align-items:center;margin-bottom:12px;line-height:18.12px;justify-content:space-between}.Frontend.Restaurants .Page.Payment section.payment .body .line .value{font-weight:500}.Frontend.Restaurants .Page.Payment section.payment .body .line .value span{font-weight:400}.Frontend.Restaurants .Page.Payment section.payment .body .table-footer{margin-top:12px;padding-top:12px;border-top:1px solid var(--black-20)}.Frontend.Restaurants .Page.Payment section.payment .body .table-footer .line .label{font-weight:500}',""]);const a=o},58398:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".Frontend.Restaurants .UI.Checkout{bottom:0;left:50%;height:97px;display:flex;position:fixed;max-width:100vw;padding-left:29px;align-items:center;color:var(--white);padding-right:29px;width:var(--app-width);transform:translateX(-50%);border-radius:35px 35px 0 0;font-family:var(--family-poppins);background:linear-gradient(94.34deg,#dc810b 5.55%,#d84202 98.03%)}.Frontend.Restaurants .UI.Checkout .total .text{font-size:20px;line-height:30px;color:var(--white-50)}.Frontend.Restaurants .UI.Checkout .total .price{font-size:15px;line-height:22.5px;letter-spacing:-.41px}.Frontend.Restaurants .UI.Checkout .total .price .value{font-size:25px;font-weight:700;line-height:37.5px}.Frontend.Restaurants .UI.Checkout .go-to-cart{margin-left:auto}.Frontend.Restaurants .UI.Checkout .go-to-cart button{height:50px;display:flex;padding-left:20px;align-items:center;padding-right:20px;border-radius:50rem;text-decoration:none}.Frontend.Restaurants .UI.Checkout .go-to-cart button .items{margin-right:17px}.Frontend.Restaurants .UI.Checkout .go-to-cart button .items div{width:26px;height:26px;display:flex;font-size:14px;font-weight:21px;align-items:center;border-radius:50px;justify-content:center;letter-spacing:-.41px;color:var(--color-primary);border:1px solid var(--color-primary)}.Frontend.Restaurants .UI.Checkout .go-to-cart button .text{font-weight:500;margin-right:17px;color:var(--color-secondary)}.Frontend.Restaurants .UI.Checkout .go-to-cart button .icon{font-size:11px;color:var(--color-primary)}",""]);const a=o},28275:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(23645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".Frontend.Restaurants .UI.Header{display:flex;align-items:center;margin-bottom:46px}.Frontend.Restaurants .UI.Header .back{width:40px;height:40px;display:flex;cursor:pointer;font-size:11px;border-radius:50%;margin-right:30px;align-items:center;color:var(--white);text-decoration:none;justify-content:center;background-color:var(--color-primary)}.Frontend.Restaurants .UI.Header .meal-name{flex:1;margin-right:18px;position:relative}.Frontend.Restaurants .UI.Header .meal-name div{top:0;left:0;width:100%;font-size:25px;font-weight:700;position:absolute;line-height:32.35px;transform:translateY(-50%)}",""]);const a=o}}]);