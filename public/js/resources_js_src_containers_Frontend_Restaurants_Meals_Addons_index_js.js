(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_Restaurants_Meals_Addons_index_js"],{

/***/ "./resources/js/src/components/UI/Food/Addon/index.js":
/*!************************************************************!*\
  !*** ./resources/js/src/components/UI/Food/Addon/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./resources/js/src/components/UI/Food/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.default, _objectSpread(_objectSpread({
    addon: true
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "d-flex align-items-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [props.position == 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-8 mr-1",
          children: props.symbol
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-700",
          children: props.formattedPrice
        }), props.position == 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-8 ml-1",
          children: props.symbol
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "text-8 ml-1",
          children: "/ Portion"
        })]
      })
    })
  }));
});

/***/ }),

/***/ "./resources/js/src/components/UI/Food/index.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/UI/Food/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Food_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Food.css */ "./resources/js/src/components/UI/Food/Food.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var photo = _ref.photo,
      name = _ref.name,
      description = _ref.description,
      reference = _ref.reference,
      meal = _ref.meal,
      addon = _ref.addon,
      qty = _ref.qty,
      add = _ref.add,
      sub = _ref.sub,
      id = _ref.id,
      slug = _ref.slug,
      children = _ref.children;

  var content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "pb-1 d-flex",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "pr-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "mr-1 position-relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "embed-responsive embed-responsive-1by1 rounded-8 shadow",
            style: {
              width: 83,
              background: "url(\"".concat(photo, "\") no-repeat center"),
              backgroundSize: 'cover'
            }
          }), addon && qty > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "position-absolute",
            style: {
              top: 0,
              right: 0,
              transform: 'translate(50%,-50%)'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "rounded-circle border border-2 border-green bg-white d-flex justify-content-center align-items-center text-green text-300 text-8",
              style: {
                width: 18,
                height: 18
              },
              children: qty
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "flex-fill d-flex flex-column",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "pb-1 position-relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-12 text-500 text-truncate ".concat(addon ? "addon-limit" : "", " ").concat(meal ? "meal-limit" : ""),
              children: name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mx-2 text-11 text-orange",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faExclamationCircle
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "px-1 bg-green text-white text-5 rounded-pill",
                style: {
                  paddingTop: 2,
                  paddingBottom: 2
                },
                children: reference
              })
            }), addon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "ml-auto pl-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "rounded-pill py-1 px-1 bg-orange-25 d-flex align-items-center text-10 text-orange",
                style: {
                  width: 63
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faMinusCircle,
                    onClick: sub
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "mx-1 flex-fill text-center",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "px-2 bg-soft-70 text-7 text-secondary rounded-pill",
                    style: {
                      paddingTop: 2,
                      paddingBottom: 2
                    },
                    children: qty
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faPlusCircle,
                    onClick: add
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "position-absolute d-flex align-items-center",
            style: {
              bottom: 0,
              left: 0
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "bg-orange",
                style: {
                  width: 29,
                  height: .5
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              style: {
                margin: '0 2.5px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "embed-responsive embed-responsive-1by1 rounded-circle border border-orange bg-white",
                style: {
                  width: 4
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "bg-orange",
                style: {
                  width: 29,
                  height: .5
                }
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-10 text-300 text-ellipsis-2 mb-1",
          children: description
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-montserrat mt-auto",
          children: children
        })]
      })]
    })
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "Food pb-3 px-3 mb-3 border-bottom border-".concat(addon ? "orange-10" : "soft"),
    children: meal ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
      to: "/restaurants/".concat(slug, "/meals/").concat(id, "/addons"),
      className: "d-block text-decoration-none text-reset",
      children: content
    }) : content
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Meals/Addons/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Meals/Addons/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Wrapper */ "./resources/js/src/containers/Frontend/Restaurants/Meals/Wrapper/index.js");
/* harmony import */ var _components_UI_Food_Addon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/UI/Food/Addon */ "./resources/js/src/components/UI/Food/Addon/index.js");
/* harmony import */ var _store_actions_frontend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../store/actions/frontend */ "./resources/js/src/store/actions/frontend/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }













var Addons = /*#__PURE__*/function (_Component) {
  _inherits(Addons, _Component);

  var _super = _createSuper(Addons);

  function Addons() {
    _classCallCheck(this, Addons);

    return _super.apply(this, arguments);
  }

  _createClass(Addons, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.scrollTo(0, 0);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          _this$props$content = _this$props.content,
          meals = _this$props$content.cms.pages.frontend.restaurants.meals,
          currencies = _this$props$content.currencies,
          _this$props$frontend$ = _this$props.frontend.restaurants,
          _this$props$frontend$2 = _this$props$frontend$.total,
          total = _this$props$frontend$2 === void 0 ? 0 : _this$props$frontend$2,
          _this$props$frontend$3 = _this$props$frontend$.addons,
          addons = _this$props$frontend$3 === void 0 ? [] : _this$props$frontend$3,
          currency = _this$props$frontend$.currency,
          position = _this$props$frontend$.position;
      var currencyObj = currencies.find(function (c) {
        return c.cc === currency;
      });
      var symbol = currencyObj && currencyObj.symbol;
      var addonsContent = addons.map(function (addon) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_UI_Food_Addon__WEBPACK_IMPORTED_MODULE_5__.default, _objectSpread(_objectSpread({
          symbol: symbol,
          position: position
        }, addon), {}, {
          add: function add() {
            return _this.props.add(addon.id);
          },
          sub: function sub() {
            return _this.props.sub(addon.id);
          }
        }), addon.id + Math.random());
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Wrapper__WEBPACK_IMPORTED_MODULE_4__.default, {
          className: "pb-4 mb-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "rounded-8 bg-soft py-2 px-3 text-10",
            children: meals.addons.dear_customers
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          children: addonsContent
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "mb-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            style: {
              margin: '0px -22px'
            },
            className: "bg-green-10",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "row align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "col-6 pl-5 text-14",
                children: meals.addons.your_cart_cost_is
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "col-6 rounded-4 bg-green text-white p-4 rounded-right-0 text-20 text-montserrat",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {
                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faShoppingBasket,
                  className: "mr-3"
                }), position == 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-10 mr-1",
                  children: symbol
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-700",
                  children: total.toFixed(2)
                }), position == 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-10 ml-1",
                  children: symbol
                })]
              })]
            })
          })
        })]
      });
    }
  }]);

  return Addons;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    add: function add(id) {
      return dispatch(_store_actions_frontend__WEBPACK_IMPORTED_MODULE_6__.addAddon(id));
    },
    sub: function sub(id) {
      return dispatch(_store_actions_frontend__WEBPACK_IMPORTED_MODULE_6__.subAddon(id));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(mapStateToProps, mapDispatchToProps)(Addons)));

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Meals/Wrapper/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Meals/Wrapper/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: className,
    style: {
      paddingLeft: 11,
      paddingRight: 11
    },
    children: children
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Food/Food.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Food/Food.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Food .addon-limit {\r\n    max-width: calc(var(--app-width) - 250px);\r\n}\r\n.Food .meal-limit {\r\n    max-width: calc(var(--app-width) - 180px);\r\n}\r\n\r\n@media (max-width: 412px) {\r\n    .Food .addon-limit {\r\n        max-width: calc(100vw - 250px);\r\n    }\r\n\r\n    .Food .meal-limit {\r\n        max-width: calc(100vw - 180px);\r\n    }\r\n  }\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/components/UI/Food/Food.css":
/*!******************************************************!*\
  !*** ./resources/js/src/components/UI/Food/Food.css ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Food_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Food.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/UI/Food/Food.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Food_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Food_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);