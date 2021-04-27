(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Frontend_Restaurants_Home_index_js"],{

/***/ "./resources/js/src/components/UI/Food/Meal/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/UI/Food/Meal/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./resources/js/src/components/UI/Food/index.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Stars */ "./resources/js/src/components/UI/Stars/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread(_objectSpread({
    meal: true
  }, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [props.position == 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-8 mr-1",
          children: props.symbol
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-700",
          children: props.price
        }), props.position == 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "text-8 ml-1",
          children: props.symbol
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "mx-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "rounded-pill text-10 px-1 bg-orange-30 text-orange d-flex align-items-center",
          style: {
            paddingTop: 1,
            paddingBottom: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_0__.FontAwesomeIcon, {
            icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faClock,
            className: "text-6 mr-1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "text-5",
            children: [props.time, " Min"]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "d-flex align-items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "text-8",
          children: "Ratings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "mx-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Stars__WEBPACK_IMPORTED_MODULE_3__.default, {
            readOnly: true,
            lg: true,
            mark: props.mark
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-orange text-6 text-700",
          children: ["(", props.mark.toFixed(1), ")"]
        })]
      })]
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

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/Carousel/index.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/Carousel/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CarouselItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Carousel.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CarouselIndicators.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Carousel = /*#__PURE__*/function (_Component) {
  _inherits(Carousel, _Component);

  var _super = _createSuper(Carousel);

  function Carousel() {
    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeIndex: 0,
      animating: false
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      if (_this.state.animating) return;
      var nextIndex = _this.state.activeIndex === _this.props.items.length - 1 ? 0 : _this.state.activeIndex + 1;

      _this.setState({
        activeIndex: nextIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "previous", function () {
      if (_this.state.animating) return;
      var nextIndex = _this.state.activeIndex === 0 ? _this.props.items.length - 1 : _this.state.activeIndex - 1;

      _this.setState({
        activeIndex: nextIndex
      });
    });

    _defineProperty(_assertThisInitialized(_this), "goToIndex", function (newIndex) {
      if (_this.state.animating) return;

      _this.setState({
        activeIndex: newIndex
      });
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.props.items;
      var slides = items.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
          onExiting: function onExiting() {
            return _this2.setState({
              animating: true
            });
          },
          onExited: function onExited() {
            return _this2.setState({
              animating: false
            });
          },
          className: "h-100",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "h-100",
            style: {
              background: "url(\"".concat(item, "\") no-repeat top center"),
              backgroundSize: 'cover'
            }
          })
        }, item);
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: "carousel",
        activeIndex: this.state.activeIndex,
        next: this.next,
        previous: this.previous,
        className: "h-100 carousel-fade Carousel",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
          items: items,
          activeIndex: this.state.activeIndex,
          onClickHandler: this.goToIndex
        }), slides, this.props.children]
      });
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/index.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CategoryTitle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryTitle.css */ "./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/CategoryTitle.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var CategoryTitle = function CategoryTitle(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      active = _ref.active;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "CategoryTitle pr-2 text-truncate d-inline-block",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      style: {
        cursor: 'pointer'
      },
      onClick: onClick,
      className: "rounded-pill d-block border border-orange text-decoration-none text-10 text-truncate ".concat(active ? "active" : ""),
      children: children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref2) {
  var _ref2$categories = _ref2.categories,
      categories = _ref2$categories === void 0 ? [] : _ref2$categories,
      _onClick = _ref2.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: categories.map(function (_ref3) {
      var name = _ref3.name,
          id = _ref3.id,
          active = _ref3.active;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CategoryTitle, {
        onClick: function onClick() {
          return _onClick(id);
        },
        active: active,
        children: name
      }, name + Math.random());
    })
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/index.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ListGroup.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ListGroupItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ListGroupItemHeading.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ListGroupItemText.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _SelectCategory_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectCategory.css */ "./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/SelectCategory.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var categories = _ref.categories,
      id = _ref.id,
      onClick = _ref.onClick,
      cms = _ref.cms;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var toggle = function toggle() {
    return setModal(!modal);
  };

  var click = function click(id) {
    onClick(id);
    toggle();
    setSearch('');
  };

  var searchChangeHandler = function searchChangeHandler(e) {
    setSearch(e.target.value);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        cursor: 'pointer'
      },
      onClick: toggle,
      className: "bg-orange-30 rounded-pill py-2 px-2 text-500 text-orange text-13 position-relative category-select",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "d-flex mx-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "text-truncate",
          children: categories.length > 0 && categories.find(function (category) {
            return +category.id === +id;
          }).name
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "position-relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            style: {
              width: .5,
              height: 21
            },
            className: "mx-2 bg-orange"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "embed-responsive embed-responsive-1by1 rounded-circle border border-orange bg-white position-absolute",
            style: {
              width: 4,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)'
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faFilter
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
      isOpen: modal,
      toggle: toggle,
      className: "SelectCategory",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
        toggle: toggle,
        className: "text-17 text-500",
        children: cms.select_category
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
        className: "p-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
          flush: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "mr-3 text-17 text-light",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "flex-fill",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                type: "search",
                name: "search",
                className: "border-0 text-poppins border-transparent p-0 m-0 d-block text-13 w-100",
                style: {
                  outline: 'none'
                },
                placeholder: "".concat(cms.search, "..."),
                value: search,
                onChange: searchChangeHandler
              })
            })]
          }), categories.filter(function (category) {
            return category.name.toLowerCase().includes(search.toLowerCase());
          }).map(function (category) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_9__.default, {
              active: +category.id === +id,
              onClick: function onClick() {
                return click(category.id);
              },
              style: {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_10__.default, {
                className: "text-13 text-500",
                children: category.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_11__.default, {
                className: "text-10 text-300 m-0",
                children: category.description
              })]
            }, "ListGroupItem-".concat(category.id));
          })]
        })
      })]
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/index.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownItem.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/UncontrolledDropdown.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var _components_UI_Food_Meal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/UI/Food/Meal */ "./resources/js/src/components/UI/Food/Meal/index.js");
/* harmony import */ var _components_UI_Stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/UI/Stars */ "./resources/js/src/components/UI/Stars/index.js");
/* harmony import */ var _components_UI_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/UI/Spinner */ "./resources/js/src/components/UI/Spinner/index.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation */ "./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/index.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Carousel */ "./resources/js/src/containers/Frontend/Restaurants/Home/Carousel/index.js");
/* harmony import */ var _SelectCategory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SelectCategory */ "./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/index.js");
/* harmony import */ var _store_actions_frontend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../store/actions/frontend */ "./resources/js/src/store/actions/frontend/index.js");
/* harmony import */ var _store_actions_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../store/actions/content */ "./resources/js/src/store/actions/content.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Home.css */ "./resources/js/src/containers/Frontend/Restaurants/Home/Home.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















var Wrapper = function Wrapper(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    className: className,
    style: _objectSpread({
      padding: '12px 11px'
    }, style),
    children: children
  });
};

var Category = function Category(_ref2) {
  var children = _ref2.children,
      name = _ref2.name,
      id = _ref2.id,
      index = _ref2.index;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    id: "category-".concat(id),
    className: "category",
    style: {
      padding: '15px 0px'
    },
    children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "mb-3 d-flex justify-content-end",
      style: {
        paddingRight: 11
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "text-13 text-500 px-4 py-2 bg-orange-30 text-orange rounded-pill",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "px-1",
          children: name
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      children: children
    })]
  });
};

var Stack = function Stack(_ref3) {
  var icon = _ref3.icon,
      color = _ref3.color,
      link = _ref3.link,
      _ref3$className = _ref3.className,
      className = _ref3$className === void 0 ? '' : _ref3$className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
    href: link,
    target: "_blank",
    className: "fa-stack fa-2x text-".concat(color, " text-10 ").concat(className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faCircle,
      className: "fa-stack-2x"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: icon,
      className: "fa-stack-1x fa-inverse"
    })]
  });
};

var Conditional = function Conditional(_ref4) {
  var condition = _ref4.condition,
      children = _ref4.children;
  return condition ? children : null;
};

var Languages = function Languages(_ref5) {
  var languages = _ref5.languages,
      set = _ref5.set;
  var lang = localStorage.getItem('lang');
  var language = languages.find(function (l) {
    return l.abbr === lang;
  });
  var dropdownItems = languages.map(function (l) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
      onClick: function onClick() {
        return set(l.abbr);
      },
      className: "px-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "flag-icon flag-icon-".concat(l.flag.toLowerCase())
      }), " ", l.abbr.toUpperCase()]
    }, JSON.stringify(l));
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_16__.default, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_17__.default, {
      className: "d-flex justify-content-around align-items-center bg-orange-50 rounded-pill border-0 p-2 m-0",
      style: {
        boxShadow: 'none'
      },
      caret: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "language-flag shadow-lg mr-2 overflow-hidden d-inline-flex justify-content-center align-items-center position-relative",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "flag-icon position-absolute flag-icon-".concat(language && language.flag.toLowerCase())
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
        className: "pl-2 border-left border-dark-20 position-relative",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "text-700",
          children: language && language.abbr.toUpperCase()
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faCircle,
          className: "text-orange text-6 position-absolute",
          style: {
            left: 0,
            transform: 'translate(-50%, -50%)',
            top: '50%'
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_18__.default, {
      style: {
        minWidth: '5rem'
      },
      children: dropdownItems
    })]
  });
};

var timeout;

var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: '',
      categoryOffsets: [],
      modal: false
    });

    _defineProperty(_assertThisInitialized(_this), "scrollProcess", function () {
      var stickyBlockHeight = document.querySelector(".sticky-top").offsetHeight;
      var scrollTop = window.scrollY;
      var _this$state = _this.state,
          categoryOffsets = _this$state.categoryOffsets,
          id = _this$state.id;
      var activeCategory = categoryOffsets.find(function (el) {
        return el.top - stickyBlockHeight + 51.5 < scrollTop && scrollTop <= el.top + el.height - stickyBlockHeight + 51.5;
      });

      if (activeCategory && activeCategory.id !== id) {
        _this.setState({
          id: activeCategory.id
        }, function () {
          var index = _this.props.frontend.restaurants.categories.findIndex(function (category) {
            return category.id == _this.state.id;
          });

          document.querySelector('.navigation').scroll({
            left: document.getElementsByClassName('CategoryTitle')[index].offsetLeft - 11,
            behavior: 'smooth'
          });
        });
      } else if (!activeCategory && id !== categoryOffsets[0].id) {
        _this.setState({
          id: categoryOffsets[0].id
        }, function () {
          var index = _this.props.frontend.restaurants.categories.findIndex(function (category) {
            return category.id === _this.state.id;
          });

          document.querySelector('.navigation').scroll({
            left: document.getElementsByClassName('CategoryTitle')[index].offsetLeft - 11,
            behavior: 'smooth'
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollHandler", function () {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        _this.scrollProcess();

        clearTimeout(timeout);
      }, 25);
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (id) {
      document.removeEventListener('scroll', _this.scrollHandler);
      var stickyBlockHeight = document.querySelector(".sticky-top").offsetHeight;
      var categoryOffsets = _this.state.categoryOffsets;
      var index = 0;
      var category = categoryOffsets.find(function (el, i) {
        index = i;
        return el.id === id;
      });

      if (category) {
        window.scroll({
          top: category.top - stickyBlockHeight + (index === 0 ? 0 : 53),
          behavior: 'smooth'
        });

        _this.setState({
          id: id
        }, function () {
          return setTimeout(function () {
            document.querySelector('.navigation').scroll({
              left: document.getElementsByClassName('CategoryTitle')[index].offsetLeft - 11,
              behavior: 'smooth'
            });
            document.addEventListener('scroll', _this.scrollHandler);
          }, 1500);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setLanguage", function (lang) {
      localStorage.setItem('lang', lang);

      _this.props.getContent();
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get(this.props.match.params.slug);
      document.addEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.id !== '' && prevState.categoryOffsets.length === 0) {
        var categoryElts = document.getElementsByClassName("category");
        var categoryOffsets = [];
        var i = 0;

        var _iterator = _createForOfIteratorHelper(categoryElts),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var categoryElt = _step.value;
            categoryOffsets.push({
              id: this.props.frontend.restaurants.categories[i].id,
              top: categoryElt.offsetTop,
              height: categoryElt.offsetHeight
            });
            i++;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        this.setState({
          categoryOffsets: categoryOffsets
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('scroll', this.scrollHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$content = _this$props.content,
          _this$props$content$c = _this$props$content.cms.pages,
          food = _this$props$content$c.components.food,
          home = _this$props$content$c.frontend.restaurants.home,
          currencies = _this$props$content.currencies,
          languages = _this$props$content.languages,
          _this$props$frontend$ = _this$props.frontend.restaurants,
          loading = _this$props$frontend$.loading,
          _this$props$frontend$2 = _this$props$frontend$.restaurant,
          restaurant = _this$props$frontend$2 === void 0 ? {} : _this$props$frontend$2,
          _this$props$frontend$3 = _this$props$frontend$.categories,
          categories = _this$props$frontend$3 === void 0 ? [] : _this$props$frontend$3,
          currency = _this$props$frontend$.currency,
          position = _this$props$frontend$.position;
      var id = this.state.id;
      var currencyObj = currencies.find(function (c) {
        return c.cc === currency;
      });
      var categoriesContent = categories.map(function (category, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Category, {
          id: category.id,
          index: index,
          name: category.name,
          children: category.meals && category.meals.map(function (meal) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_UI_Food_Meal__WEBPACK_IMPORTED_MODULE_3__.default, _objectSpread(_objectSpread({
              symbol: currencyObj && currencyObj.symbol,
              position: position
            }, meal), {}, {
              slug: _this2.props.match.params.slug
            }), JSON.stringify(meal) + Math.random());
          })
        }, JSON.stringify(category) + Math.random());
      });
      var items = [];
      if (restaurant.banner1) items.push(restaurant.banner1);
      if (restaurant.banner2) items.push(restaurant.banner2);
      if (restaurant.banner3) items.push(restaurant.banner3);
      var basic = restaurant.plan;
      var standard = restaurant.plan && restaurant.plan.slug === 'standard';
      var premium = restaurant.plan && restaurant.plan.slug === 'premium';
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "Home",
        children: [loading && Object.keys(restaurant).length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_UI_Spinner__WEBPACK_IMPORTED_MODULE_5__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "embed-responsive embed-responsive-16by9 position-relative",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "position-absolute w-100 h-100",
            style: {
              top: 0,
              left: 0
            },
            children: [items.length > 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Carousel__WEBPACK_IMPORTED_MODULE_7__.default, {
              items: items
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "h-100",
              style: {
                top: 0,
                left: 0,
                backgroundImage: "url('".concat(restaurant.banner1, "')"),
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "position-absolute pt-4 pr-4",
              style: {
                top: 0,
                right: 0,
                zIndex: 1040
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Languages, {
                languages: languages,
                set: this.setLanguage
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "sticky-top border-bottom border-soft bg-white",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(Wrapper, {
            className: "bg-orange-10",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "d-flex justify-content-between align-items-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                className: "text-500 text-17 text-orange",
                children: restaurant.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Conditional, {
                  condition: (premium || standard || basic) && restaurant.phone,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Stack, {
                    link: "tel:+".concat(restaurant.phone),
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faPhone,
                    color: "primary"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Conditional, {
                  condition: (premium || standard) && restaurant.whatsapp,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Stack, {
                    link: "//wa.me/".concat(restaurant.whatsapp),
                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__.faWhatsapp,
                    color: "green"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Conditional, {
                  condition: premium && restaurant.location,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Stack, {
                    link: restaurant.location,
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_14__.faMapMarkerAlt,
                    color: "yellow"
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "d-flex align-items-center text-8 text-500",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "mr-2 pr-2 border-right border-lg border-orange d-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                  className: "mr-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_20__.faCalendar,
                    className: "text-6 text-orange"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                  children: restaurant.days
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                  className: "mr-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_20__.faClock,
                    className: "text-6 text-orange"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                  children: restaurant.hours
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "d-flex justify-content-between align-items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                className: "text-300 text-8",
                children: restaurant.address
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                  className: "text-8",
                  children: food.ratings
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                  className: "mx-1",
                  children: restaurant.mark && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_components_UI_Stars__WEBPACK_IMPORTED_MODULE_4__.default, {
                    readOnly: true,
                    lg: true,
                    mark: +restaurant.mark
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
                  className: "text-orange text-6 text-700",
                  children: ["(", restaurant.mark, ")"]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Wrapper, {
            className: "navigation scrollbar-orange",
            style: {
              paddingTop: 18
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "text-truncate",
              style: {
                overflow: 'visible'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_Navigation__WEBPACK_IMPORTED_MODULE_6__.default, {
                categories: categories.map(function (c) {
                  return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_11__.updateObject)(c, {
                    active: id === c.id
                  });
                }),
                onClick: this.onClick
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(Wrapper, {
            className: "bg-orange-10 d-flex justify-content-end align-items-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "text-12 mr-auto",
              children: home.you_are_on_category
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "mx-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
                className: "rounded-pill bg-orange",
                style: {
                  height: 5,
                  width: 18
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_SelectCategory__WEBPACK_IMPORTED_MODULE_8__.default, {
              cms: home,
              categories: categories,
              id: id,
              onClick: this.onClick
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "categories bg-white",
          children: categoriesContent
        })]
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: // Lifecycle methods
    function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.frontend.restaurants.restaurant && prevState.id === '') {
        var _nextProps$frontend$r = nextProps.frontend.restaurants,
            categories = _nextProps$frontend$r.categories,
            name = _nextProps$frontend$r.restaurant.name;
        if (!document.title.includes("".concat(name, " - "))) document.title = "".concat(name, " - ").concat(document.title);
        if (categories.length > 0) return (0,_shared_utility__WEBPACK_IMPORTED_MODULE_11__.updateObject)(prevState, {
          id: categories[0].id
        });
      }

      return null;
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get(slug) {
      return dispatch(_store_actions_frontend__WEBPACK_IMPORTED_MODULE_9__.getRestaurant(slug));
    },
    getContent: function getContent() {
      return dispatch(_store_actions_content__WEBPACK_IMPORTED_MODULE_10__.getContent());
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_21__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Home)));

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

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/Home.css":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/Home.css ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Home .categories {\r\n    padding-bottom: calc(100vh - 280px);\r\n}\r\n\r\n.Home .carousel-inner {\r\n    height: 100% !important;\r\n}\r\n\r\n.Home .language-flag {\r\n    overflow: hidden;\r\n    border-radius: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 3px solid #fff;\r\n}\r\n\r\n.Home .navigation {\r\n    overflow-x: auto;\r\n}\r\n\r\n.Home #banner {\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\n.Home .category-select {\r\n    max-width: calc(var(--app-width) - 178px);\r\n}\r\n\r\n@media (max-width: 412px) {\r\n    .Home .category-select {\r\n        max-width: calc(100vw - 178px);\r\n    }\r\n}\r\n\r\n.Home .carousel-indicators li {\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 100%;\r\n    background-color: var(--white-50);\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Home .carousel-indicators li.active {\r\n    background-color: var(--white-80);\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/CategoryTitle.css":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/CategoryTitle.css ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".CategoryTitle div {\r\n    color: var(--secondary);\r\n    background-color: white;\r\n    padding: 9px 18px;\r\n    transition: all .25s;\r\n}\r\n\r\n.CategoryTitle div:hover,\r\n.CategoryTitle div.active {\r\n    color: white;\r\n    background-color: var(--orange);\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/SelectCategory.css":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/SelectCategory.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".SelectCategory .list-group-item.active {\r\n    background-color: var(--orange);\r\n    border-color: var(--orange);\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/reactstrap/es/Carousel.js":
/*!************************************************!*\
  !*** ./node_modules/reactstrap/es/Carousel.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CarouselItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CarouselItem */ "./node_modules/reactstrap/es/CarouselItem.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");







var SWIPE_THRESHOLD = 40;

var Carousel = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.default)(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this));
    _this.renderItems = _this.renderItems.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this));
    _this.hoverStart = _this.hoverStart.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this));
    _this.hoverEnd = _this.hoverEnd.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'right';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'left';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'left' : 'right';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'right' : 'left';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.state.activeIndex;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(item, {
        in: isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className;
    var outerClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'carousel', slide && 'slide'), cssModule);
    var innerClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === _CarouselItem__WEBPACK_IMPORTED_MODULE_6__.default;
    }); // Rendering only slides

    if (slidesOnly) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(children, innerClasses));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
  };

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_2__.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  // controls if the left and right arrow keys should control the carousel
  keyboard: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)]),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  // called when the mouse enters the Carousel
  mouseEnter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  // called when the mouse exits the Carousel
  mouseLeave: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  // controls whether the slide animation on the Carousel works or not
  slide: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  enableTouch: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true
};
Carousel.childContextTypes = {
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);

/***/ }),

/***/ "./node_modules/reactstrap/es/CarouselIndicators.js":
/*!**********************************************************!*\
  !*** ./node_modules/reactstrap/es/CarouselIndicators.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");





var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: activeIndex === idx
    }), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: listClasses
  }, indicators);
};

CarouselIndicators.propTypes = {
  items: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  activeIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  onClickHandler: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselIndicators);

/***/ }),

/***/ "./node_modules/reactstrap/es/CarouselItem.js":
/*!****************************************************!*\
  !*** ./node_modules/reactstrap/es/CarouselItem.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var CarouselItem = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__.default)(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.onEntering = _this.onEntering.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.onExit = _this.onExit.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.onExiting = _this.onExiting.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    _this.onExited = _this.onExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props.in,
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__.default)(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Transition, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__.default)({}, transitionProps, {
      enter: slide,
      exit: slide,
      in: isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.ENTERED || status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.EXITING;
      var directionClassName = (status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.ENTERING || status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
      var orderClassName = status === _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_7___default()(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5__.createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(react__WEBPACK_IMPORTED_MODULE_5__.Component);

CarouselItem.propTypes = _objectSpread(_objectSpread({}, react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Transition.propTypes), {}, {
  tag: _utils__WEBPACK_IMPORTED_MODULE_9__.tagPropType,
  in: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  slide: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
});
CarouselItem.defaultProps = _objectSpread(_objectSpread({}, react_transition_group__WEBPACK_IMPORTED_MODULE_8__.Transition.defaultProps), {}, {
  tag: 'div',
  timeout: _utils__WEBPACK_IMPORTED_MODULE_9__.TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/ListGroup.js":
/*!*************************************************!*\
  !*** ./node_modules/reactstrap/es/ListGroup.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  flush: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)])
};
var defaultProps = {
  tag: 'ul',
  horizontal: false
};

var getHorizontalClass = function getHorizontalClass(horizontal) {
  if (horizontal === false) {
    return false;
  } else if (horizontal === true || horizontal === "xs") {
    return "list-group-horizontal";
  }

  return "list-group-horizontal-" + horizontal;
};

var ListGroup = function ListGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      flush = props.flush,
      horizontal = props.horizontal,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "tag", "flush", "horizontal"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'list-group', // list-group-horizontal cannot currently be mixed with list-group-flush
  // we only try to apply horizontal classes if flush is false
  flush ? 'list-group-flush' : getHorizontalClass(horizontal)), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

ListGroup.propTypes = propTypes;
ListGroup.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListGroup);

/***/ }),

/***/ "./node_modules/reactstrap/es/ListGroupItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/reactstrap/es/ListGroupItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  active: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  action: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'li'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var ListGroupItem = function ListGroupItem(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      active = props.active,
      disabled = props.disabled,
      action = props.action,
      color = props.color,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

ListGroupItem.propTypes = propTypes;
ListGroupItem.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListGroupItem);

/***/ }),

/***/ "./node_modules/reactstrap/es/ListGroupItemHeading.js":
/*!************************************************************!*\
  !*** ./node_modules/reactstrap/es/ListGroupItemHeading.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'h5'
};

var ListGroupItemHeading = function ListGroupItemHeading(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'list-group-item-heading'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

ListGroupItemHeading.propTypes = propTypes;
ListGroupItemHeading.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListGroupItemHeading);

/***/ }),

/***/ "./node_modules/reactstrap/es/ListGroupItemText.js":
/*!*********************************************************!*\
  !*** ./node_modules/reactstrap/es/ListGroupItemText.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_5__.tagPropType,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'p'
};

var ListGroupItemText = function ListGroupItemText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, 'list-group-item-text'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
    className: classes
  }));
};

ListGroupItemText.propTypes = propTypes;
ListGroupItemText.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListGroupItemText);

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

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/Home.css":
/*!************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/Home.css ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Home.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/Home.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Home_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Home_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/CategoryTitle.css":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/CategoryTitle.css ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_CategoryTitle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./CategoryTitle.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/Navigation/CategoryTitle.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_CategoryTitle_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_CategoryTitle_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/SelectCategory.css":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/SelectCategory.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_SelectCategory_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./SelectCategory.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Frontend/Restaurants/Home/SelectCategory/SelectCategory.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_SelectCategory_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_SelectCategory_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);