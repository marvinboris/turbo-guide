(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_containers_Backend_User_Restaurants_Edit_Meals_index_js"],{

/***/ "./resources/js/src/components/Backend/UI/Delete/Delete.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Delete/Delete.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalHeader.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var deleteAction = _ref.deleteAction,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      modal = _useState2[0],
      setModal = _useState2[1];

  var toggle = function toggle() {
    return setModal(!modal);
  };

  var deleteHandler = function deleteHandler() {
    toggle();
    deleteAction();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      style: {
        cursor: 'pointer'
      },
      onClick: toggle,
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
      isOpen: modal,
      toggle: toggle,
      centered: true,
      className: className,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        toggle: toggle,
        children: "Delete item"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
        className: "text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          children: "Are you sure you want to delete this item?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
            color: "danger",
            onClick: deleteHandler,
            children: ["Delete ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrash,
              fixedWidth: true
            })]
          }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
            color: "secondary",
            onClick: toggle,
            children: ["Close ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTimes,
              fixedWidth: true
            })]
          })]
        })]
      })]
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Food/Meal/index.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Food/Meal/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _Delete_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _UI_Stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../UI/Stars */ "./resources/js/src/components/UI/Stars/index.js");
/* harmony import */ var _store_actions_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../store/actions/backend */ "./resources/js/src/store/actions/backend/index.js");
/* harmony import */ var _Meal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Meal.css */ "./resources/js/src/components/Backend/UI/Food/Meal/Meal.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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













var Circle = function Circle(_ref) {
  var color = _ref.color,
      icon = _ref.icon;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
    style: {
      height: 38,
      width: 38
    },
    className: "bg-white rounded-circle d-flex justify-content-center align-items-center border border-".concat(color, " border-2 text-").concat(color),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
      icon: icon
    })
  });
};

var Meal = /*#__PURE__*/function (_Component) {
  _inherits(Meal, _Component);

  var _super = _createSuper(Meal);

  function Meal() {
    _classCallCheck(this, Meal);

    return _super.apply(this, arguments);
  }

  _createClass(Meal, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          name = _this$props.name,
          photo = _this$props.photo,
          price = _this$props.price,
          is_active = _this$props.is_active,
          description = _this$props.description,
          mark = _this$props.mark,
          comments = _this$props.comments,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? '' : _this$props$className,
          role = _this$props.auth.role,
          currencies = _this$props.content.currencies;
      var data, currency, position;

      if (role === 'restaurant') {
        data = this.props.auth.data;
      } else {
        data = this.props.backend.restaurants.data;
      }

      currency = data.currency;
      position = data.position;
      var currencyObj = currencies.find(function (c) {
        return c.cc === currency;
      });
      var symbol = currencyObj && currencyObj.cc;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "Meal ".concat(className),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: "rounded-4 bg-white shadow-sm",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "embed-responsive embed-responsive-4by3 w-100 rounded-top-4 shadow-sm position-relative overflow-hidden",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "bg position-absolute w-100 h-100",
                style: {
                  backgroundImage: "url('".concat(photo, "')")
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "actions text-10 d-flex justify-content-center align-items-center position-absolute w-100 h-100 bg-black-30",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
                  to: "meals",
                  className: "text-decoration-none mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Circle, {
                    color: "green",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEye
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
                  to: "meals/".concat(id, "/edit"),
                  className: "text-decoration-none mr-2",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Circle, {
                    color: "primary",
                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faEdit
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Delete_Delete__WEBPACK_IMPORTED_MODULE_3__.default, {
                    deleteAction: function deleteAction() {
                      return _this.props["delete"](id);
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Circle, {
                      color: "red",
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faTrash
                    })
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "p-3 bg-white overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "mb-2 text-14 text-300 text-truncate overflow-hidden position-relative pb-1",
              children: [name, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "position-absolute bg-orange rounded-pill",
                style: {
                  width: 14.5,
                  height: 1,
                  bottom: 0,
                  left: 0
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "overflow-hidden text-truncate text-10 text-300 mb-1",
              children: description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
              className: "mb-2",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                className: "d-flex align-items-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "text-10 text-300",
                  children: "Ratings"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "mx-1",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_UI_Stars__WEBPACK_IMPORTED_MODULE_4__.default, {
                    readOnly: true,
                    lg: true,
                    mark: mark
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "text-orange text-8 text-700",
                  children: ["(", mark.toFixed(1), ")"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                  className: "ml-auto",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    className: "text-green bg-green-10 text-8 px-1 rounded-pill",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCommentAlt,
                      className: "mr-1"
                    }), comments >= 1000 ? "".concat((comments / 1000).toFixed(1), "k") : comments]
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: "text-12 text-700 d-flex align-items-center text-truncate",
              children: [position == 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-6 text-300 mr-1",
                children: currency
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                children: price
              }), position == 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
                className: "text-6 text-300 ml-1",
                children: currency
              })]
            })]
          })]
        })
      });
    }
  }]);

  return Meal;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    "delete": function _delete(id) {
      return dispatch(_store_actions_backend__WEBPACK_IMPORTED_MODULE_5__.deleteMeals(id));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Meal));

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/TitleWrapper/index.js":
/*!**********************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/TitleWrapper/index.js ***!
  \**********************************************************************/
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
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "mb-3 mb-sm-4 pb-2 pb-sm-3 position-relative",
    children: children
  });
});

/***/ }),

/***/ "./resources/js/src/components/Error/Error.js":
/*!****************************************************!*\
  !*** ./resources/js/src/components/Error/Error.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var error = function error(_ref) {
  var err = _ref.err;
  return err ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "alert alert-danger",
    children: err.message ? err.message : err
  }) : null;
};

function Error(_ref2) {
  var err = _ref2.err;
  return err ? sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
    // title: err.message || err,
    text: err.message || err,
    icon: 'warning',
    confirmButtonColor: '#3085d6' // confirmButtonText: 'Yes'

  }) : null;
}

/***/ }),

/***/ "./resources/js/src/components/Feedback/Feedback.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/Feedback/Feedback.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Alert.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (_ref) {
  var message = _ref.message,
      time = _ref.time;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  if (time) setTimeout(function () {
    setVisible(false);
  }, time);
  return message ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.default, {
    color: message.type,
    isOpen: visible,
    children: message.content
  }) : null;
});

/***/ }),

/***/ "./resources/js/src/components/UI/Stars/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/components/UI/Stars/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stars)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_css_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/css/star-rating-svg.css */ "./resources/js/src/assets/css/star-rating-svg.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
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





var Stars = /*#__PURE__*/function (_Component) {
  _inherits(Stars, _Component);

  var _super = _createSuper(Stars);

  function Stars() {
    var _this;

    _classCallCheck(this, Stars);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "stars", function () {
      $(".ranking-stars").starRating({
        strokeColor: '#894A00',
        strokeWidth: 10,
        starSize: 25,
        useFullStars: true,
        disableAfterRate: false,
        callback: function callback(currentRating) {
          $('input[name="mark"]').val(currentRating);
        }
      });
      $(".stars").starRating({
        readOnly: true,
        strokeWidth: 9,
        starSize: 12,
        strokeColor: 'orange',
        activeColor: 'orange',
        emptyColor: 'transparent'
      });
      $(".stars.stars-10").starRating({
        starSize: 10
      });
      $(".stars.stars-14").starRating({
        starSize: 14
      });
    });

    return _this;
  }

  _createClass(Stars, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.stars();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mark = _this$props.mark,
          readOnly = _this$props.readOnly,
          lg = _this$props.lg;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "overflow-hidden",
        style: readOnly && {
          height: 15
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
          style: readOnly && {
            top: -6
          },
          className: "position-relative ".concat(lg ? "stars-14" : "stars-10", " ").concat(readOnly ? "stars" : "ranking-stars"),
          "data-rating": mark
        })
      });
    }
  }]);

  return Stars;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);



/***/ }),

/***/ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js ***!
  \****************************************************************************/
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
      className = _ref.className,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-30 d-none d-sm-block mb-1 text-".concat(dark ? "light" : "secondary", " ").concat(className),
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-24 d-sm-none mb-1 text-".concat(dark ? "light" : "secondary", " ").concat(className),
      children: children
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js ***!
  \********************************************************************/
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
      className = _ref.className,
      _ref$dark = _ref.dark,
      dark = _ref$dark === void 0 ? false : _ref$dark;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-".concat(dark ? "light" : "secondary", " text-18 d-none d-sm-block text-300 ").concat(className),
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "text-".concat(dark ? "light" : "secondary", " text-14 d-sm-none text-300 ").concat(className),
      children: children
    })]
  });
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/index.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/CustomInput.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_TitleWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../components/Backend/UI/TitleWrapper */ "./resources/js/src/components/Backend/UI/TitleWrapper/index.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_Food_Meal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../components/Backend/UI/Food/Meal */ "./resources/js/src/components/Backend/UI/Food/Meal/index.js");
/* harmony import */ var _store_actions_backend_restaurants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../store/actions/backend/restaurants */ "./resources/js/src/store/actions/backend/restaurants/index.js");
/* harmony import */ var _Meals_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Meals.css */ "./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/Meals.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

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






 // Components













var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      category_id: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      if (name === 'category_id') {
        return _this.setState({
          category_id: value
        }, function () {
          return _this.props.get(value);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (category_id) {
      _this.setState({
        category_id: category_id
      }, function () {
        return _this.props.get(category_id);
      });
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          _this$props$content$c = _this$props.content.cms.pages;

      _objectDestructuringEmpty(_this$props$content$c.components);

      var _this$props$content$c2 = _this$props$content$c.backend.pages.meals,
          welcome = _this$props$content$c2.welcome,
          subtitle = _this$props$content$c2.subtitle,
          filter = _this$props$content$c2.filter,
          counted = _this$props$content$c2.counted,
          total_meals = _this$props$content$c2.total_meals,
          watching = _this$props$content$c2.watching,
          check = _this$props$content$c2.check,
          all_categories = _this$props$content$c2.all_categories,
          viewing = _this$props$content$c2.viewing,
          add = _this$props$content$c2.add,
          _this$props$backend$r = _this$props.backend.restaurants,
          name = _this$props$backend$r.data.name,
          error = _this$props$backend$r.error,
          message = _this$props$backend$r.message,
          _this$props$backend$r2 = _this$props$backend$r.meals,
          meals = _this$props$backend$r2 === void 0 ? [] : _this$props$backend$r2,
          _this$props$backend$r3 = _this$props$backend$r.categories,
          categories = _this$props$backend$r3 === void 0 ? [] : _this$props$backend$r3,
          _this$props$backend$r4 = _this$props$backend$r.mostLiked,
          mostLiked = _this$props$backend$r4 === void 0 ? [] : _this$props$backend$r4,
          countedMeals = _this$props$backend$r.countedMeals;
      var category_id = this.state.category_id;

      var errors = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Error_Error__WEBPACK_IMPORTED_MODULE_6__.default, {
          err: error
        })
      });

      var flash = this.props.location.state ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__.default, {
        time: 5000,
        message: this.props.location.state.message
      }) : null;

      var feedback = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_7__.default, {
        message: message
      });

      var lang = localStorage.getItem('lang');
      var categoriesOptions = categories.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (category) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("option", {
          value: category.id,
          children: category.name[lang]
        }, JSON.stringify(category) + Math.random());
      });
      var categoriesList = [{
        name: all_categories,
        id: ''
      }].concat(_toConsumableArray(categories)).map(function (category) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span", {
          style: {
            cursor: 'pointer'
          },
          onClick: function onClick() {
            return _this2.onClick(category.id);
          },
          className: "text-truncate text-decoration-none text-reset text-16 mr-4 text-".concat(category_id == category.id ? "500" : "300"),
          children: category.name[lang]
        }, JSON.stringify(category) + Math.random());
      });
      var mealsContent = meals.map(function (meal) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_Backend_UI_Food_Meal__WEBPACK_IMPORTED_MODULE_8__.default, _objectSpread({}, _objectSpread(_objectSpread({}, meal), {}, {
          name: meal.name[lang],
          description: meal.description[lang]
        })), JSON.stringify(meal) + Math.random());
      });
      var mostLikedMeals = mostLiked.map(function (meal, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "bg-".concat(index === 0 ? 'green' : 'light', "-10 p-2 mb-2 mt-1 d-flex"),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "mr-2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "embed-responsive embed-responsive-1by1 rounded-left-4",
              style: {
                background: "url('".concat(meal.photo, "') no-repeat center"),
                backgroundSize: 'cover',
                width: 84
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "flex-fill pr-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "d-flex justify-content-between align-items-center position-relative pb-2 mb-3",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "text-14",
                children: meal.name[lang]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "text-".concat(index === 0 ? 'green' : 'border', " text-700 text-20"),
                children: ["#", index + 1]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "position-absolute rounded-pill bg-green",
                style: {
                  left: 0,
                  bottom: 0,
                  width: 20,
                  height: 2
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "text-montserrat text-12 mb-2 d-none",
              children: [viewing, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: "text-700 text-green",
                children: ["(", meal.views, ")"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "text-12",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faStar,
                className: "text-yellow mr-1"
              }), meal.mark.toFixed(1), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faCommentAlt,
                className: "text-orange mr-1 ml-2"
              }), meal.comments >= 1000 ? "".concat((meals.comments / 1000).toFixed(1), "k") : meal.comments]
            })]
          })]
        }, JSON.stringify(meal) + Math.random());
      });
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: "Meals mt-4 mt-sm-5 row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            className: "col-xl-9",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "mr-xl-4 pr-xl-5 border-xl-right border-light",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: "d-flex align-items-center flex-wrap mb-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_Backend_UI_TitleWrapper__WEBPACK_IMPORTED_MODULE_3__.default, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
                    children: [welcome, ", ", name]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_5__.default, {
                    children: subtitle
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  className: "ml-auto mr-3",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {
                    to: "/user/restaurants/" + this.props.match.params.restaurant + "/edit/meals/add",
                    className: "d-none d-md-inline",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_14__.default, {
                      color: "green",
                      className: "rounded-2 py-2 text-16 text-500 px-3 px-sm-4",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faPlus,
                        fixedWidth: true,
                        className: "mr-3"
                      }), add]
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_15__.default, {
                    id: "category_id",
                    type: "select",
                    name: "category_id",
                    onChange: this.inputChangedHandler,
                    className: "border-light",
                    value: category_id,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("option", {
                      children: filter
                    }), categoriesOptions]
                  })
                })]
              }), errors, flash, feedback, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "mb-5 pb-2 scrollbar-orange",
                style: {
                  overflowX: 'auto'
                },
                children: categoriesList
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "scrollbar-orange",
                style: {
                  overflowX: 'auto'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                  className: "flex-container",
                  children: mealsContent
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: "col-xl-3 pt-5 pt-xl-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: "mb-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
                children: watching
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_5__.default, {
                children: check
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              className: "mb-2 pb-1",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                className: "rounded-4 bg-orange text-white p-2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: "m-1",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                    className: "pb-2 border-bottom border-white-50",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                      className: "ml-3 pl-1 text-18 text-500",
                      children: counted
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                    className: "ml-3 pl-1",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                      className: "d-flex align-items-end",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                        className: "text-40 text-700",
                        children: countedMeals
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                        className: "text-black-10 text-33 ml-auto",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
                          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__.faHamburger
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
                      className: "text-12 text-300",
                      children: total_meals
                    })]
                  })]
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
              children: mostLikedMeals
            })]
          })]
        })
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get(id) {
      return dispatch(_store_actions_backend_restaurants__WEBPACK_IMPORTED_MODULE_9__.getRestaurantsEdit('meals', id));
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_16__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(Index)));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/assets/css/star-rating-svg.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/assets/css/star-rating-svg.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jq-stars {\r\n  display: inline-block;\r\n}\r\n\r\n.jq-rating-label {\r\n  font-size: 22px;\r\n  display: inline-block;\r\n  position: relative;\r\n  vertical-align: top;\r\n  font-family: helvetica, arial, verdana;\r\n}\r\n\r\n.jq-star {\r\n  width: 100px;\r\n  height: 100px;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n.jq-star-svg {\r\n  padding-left: 3px;\r\n  width: 100%;\r\n  height: 100% ;\r\n}\r\n\r\n.jq-star:hover .fs-star-svg path {\r\n}\r\n\r\n.jq-star-svg path {\r\n  /* stroke: #000; */\r\n  stroke-linejoin: round;\r\n}\r\n\r\n/* un-used */\r\n.jq-shadow {\r\n  filter: drop-shadow( -2px -2px 2px #888 );\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/Food/Meal/Meal.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/Food/Meal/Meal.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".Meal {\r\n    padding: 4px;\r\n    width: 100%;\r\n}\r\n\r\n.Meal .bg {\r\n    top: 0;\r\n    left: 0;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    transform: scale(1) rotate(0deg);\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Meal:hover .bg {\r\n    transform: scale(1.21) rotate(10deg);\r\n}\r\n\r\n.Meal .actions {\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0;\r\n    transition: all 0.25s;\r\n}\r\n\r\n.Meal .actions:hover {\r\n    opacity: 1;\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n    .Meal {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1400px) {\r\n    .Meal {\r\n        width: 33.33%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1600px) {\r\n    .Meal {\r\n        width: 25%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1900px) {\r\n    .Meal {\r\n        width: 20%;\r\n    }\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/Meals.css":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/Meals.css ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Meals .flex-container {\r\n    display: flex;\r\n    flex-flow: column wrap;\r\n    max-height: 750px;\r\n    align-content: flex-start;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n/* Hide scrollbar for Chrome, Safari and Opera */\r\n.Meals .addons::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n/* Hide scrollbar for IE, Edge and Firefox */\r\n.Meals .addons {\r\n    -ms-overflow-style: none; /* IE and Edge */\r\n    scrollbar-width: none; /* Firefox */\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/reactstrap/es/Alert.js":
/*!*********************************************!*\
  !*** ./node_modules/reactstrap/es/Alert.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Fade */ "./node_modules/reactstrap/es/Fade.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  closeClassName: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  closeAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  fade: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func),
  tag: _utils__WEBPACK_IMPORTED_MODULE_6__.tagPropType,
  transition: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape(_Fade__WEBPACK_IMPORTED_MODULE_7__.default.propTypes),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)])
};
var defaultProps = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__.default.defaultProps), {}, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_5___default()('close', closeClassName), cssModule);

  var alertTransition = _objectSpread(_objectSpread(_objectSpread({}, _Fade__WEBPACK_IMPORTED_MODULE_7__.default.defaultProps), transition), {}, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Fade__WEBPACK_IMPORTED_MODULE_7__.default, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, children);
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ "./node_modules/reactstrap/es/CustomFileInput.js":
/*!*******************************************************!*\
  !*** ./node_modules/reactstrap/es/CustomFileInput.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./node_modules/reactstrap/es/utils.js");








var propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)]).isRequired,
  label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  valid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  invalid: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  bsSize: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  htmlFor: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)])
};

var CustomFileInput = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__.default)(CustomFileInput, _React$Component);

  function CustomFileInput(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      files: null
    };
    _this.onChange = _this.onChange.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.default)(_this));
    return _this;
  }

  var _proto = CustomFileInput.prototype;

  _proto.onChange = function onChange(e) {
    var input = e.target;
    var onChange = this.props.onChange;
    var files = this.getSelectedFiles(input);

    if (typeof onChange === "function") {
      onChange.apply(void 0, arguments);
    }

    this.setState({
      files: files
    });
  };

  _proto.getSelectedFiles = function getSelectedFiles(input) {
    var multiple = this.props.multiple;

    if (multiple && input.files) {
      var files = [].slice.call(input.files);
      return files.map(function (file) {
        return file.name;
      }).join(", ");
    }

    if (input.value.indexOf("fakepath") !== -1) {
      var parts = input.value.split("\\");
      return parts[parts.length - 1];
    }

    return input.value;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        label = _this$props.label,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        bsSize = _this$props.bsSize,
        innerRef = _this$props.innerRef,
        htmlFor = _this$props.htmlFor,
        type = _this$props.type,
        onChange = _this$props.onChange,
        dataBrowse = _this$props.dataBrowse,
        hidden = _this$props.hidden,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(_this$props, ["className", "label", "valid", "invalid", "cssModule", "children", "bsSize", "innerRef", "htmlFor", "type", "onChange", "dataBrowse", "hidden"]);

    var customClass = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()(className, "custom-file"), cssModule);
    var validationClassNames = (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_6___default()(invalid && "is-invalid", valid && "is-valid"), cssModule);
    var labelHtmlFor = htmlFor || attributes.id;
    var files = this.state.files;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: customClass,
      hidden: hidden || false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      type: "file"
    }, attributes, {
      ref: innerRef,
      "aria-invalid": invalid,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(validationClassNames, (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)("custom-file-input", cssModule)),
      onChange: this.onChange
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("label", {
      className: (0,_utils__WEBPACK_IMPORTED_MODULE_7__.mapToCssModules)("custom-file-label", cssModule),
      htmlFor: labelHtmlFor,
      "data-browse": dataBrowse
    }, files || label || "Choose file"), children);
  };

  return CustomFileInput;
}(react__WEBPACK_IMPORTED_MODULE_4__.Component);

CustomFileInput.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomFileInput);

/***/ }),

/***/ "./node_modules/reactstrap/es/CustomInput.js":
/*!***************************************************!*\
  !*** ./node_modules/reactstrap/es/CustomInput.js ***!
  \***************************************************/
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
/* harmony import */ var _CustomFileInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CustomFileInput */ "./node_modules/reactstrap/es/CustomFileInput.js");







var propTypes = {
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)]).isRequired,
  type: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  valid: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  invalid: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  bsSize: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  htmlFor: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)])
};

function CustomInput(props) {
  var className = props.className,
      label = props.label,
      inline = props.inline,
      valid = props.valid,
      invalid = props.invalid,
      cssModule = props.cssModule,
      children = props.children,
      bsSize = props.bsSize,
      innerRef = props.innerRef,
      htmlFor = props.htmlFor,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(props, ["className", "label", "inline", "valid", "invalid", "cssModule", "children", "bsSize", "innerRef", "htmlFor"]);

  var type = attributes.type;
  var customClass = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, "custom-" + type, bsSize ? "custom-" + type + "-" + bsSize : false), cssModule);
  var validationClassNames = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()(invalid && "is-invalid", valid && "is-valid"), cssModule);
  var labelHtmlFor = htmlFor || attributes.id;

  if (type === "select") {
    var _type = attributes.type,
        _rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(attributes, ["type"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _rest, {
      ref: innerRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(validationClassNames, customClass),
      "aria-invalid": invalid
    }), children);
  }

  if (type === "file") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CustomFileInput__WEBPACK_IMPORTED_MODULE_6__.default, props);
  }

  if (type !== "checkbox" && type !== "radio" && type !== "switch") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, attributes, {
      ref: innerRef,
      "aria-invalid": invalid,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(validationClassNames, customClass)
    }));
  }

  var wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(customClass, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)(classnames__WEBPACK_IMPORTED_MODULE_4___default()("custom-control", {
    "custom-control-inline": inline
  }), cssModule));

  var hidden = attributes.hidden,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__.default)(attributes, ["hidden"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: wrapperClasses,
    hidden: hidden || false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, rest, {
    type: type === "switch" ? "checkbox" : type,
    ref: innerRef,
    "aria-invalid": invalid,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(validationClassNames, (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)("custom-control-input", cssModule))
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", {
    className: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.mapToCssModules)("custom-control-label", cssModule),
    htmlFor: labelHtmlFor
  }, label), children);
}

CustomInput.propTypes = propTypes;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomInput);

/***/ }),

/***/ "./resources/js/src/assets/css/star-rating-svg.css":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/css/star-rating-svg.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./star-rating-svg.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/assets/css/star-rating-svg.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_star_rating_svg_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Food/Meal/Meal.css":
/*!*******************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Food/Meal/Meal.css ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Meal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Meal.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/components/Backend/UI/Food/Meal/Meal.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Meal_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Meal_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/Meals.css":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/Meals.css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Meals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!../../../../../../../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./Meals.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[6].oneOf[1].use[2]!./resources/js/src/containers/Backend/User/Restaurants/Edit/Meals/Meals.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Meals_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_6_oneOf_1_use_2_Meals_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);