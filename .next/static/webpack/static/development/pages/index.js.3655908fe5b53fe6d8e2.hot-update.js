webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/WeatherInfo.js":
/*!***********************************!*\
  !*** ./components/WeatherInfo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherInfo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\React\\weather\\components\\WeatherInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var WeatherInfo =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WeatherInfo, _React$Component);

  function WeatherInfo() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WeatherInfo);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WeatherInfo).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WeatherInfo, [{
    key: "getWeatherIcon",
    value: function getWeatherIcon(description, time) {
      var icon = "";

      if (description.includes("clear sky") && time >= 6 && time <= 18) {
        icon = "day";
      } else if (description.includes("clouds") && time >= 6 && time <= 18) {
        icon = "cloudyday";
      } else if (description.includes("clear sky") && (time >= 0 && time <= 6 || time >= 21)) {
        icon = "moon";
      } else if (description.includes("clouds") && ((time = 0 && false) || time >= 21)) {
        icon = "cloudymoon";
      } else if (description.includes("rain")) {
        icon = "rain";
      }

      return icon;
    }
  }, {
    key: "render",
    value: function render() {
      var icon = this.getWeatherIcon(this.props.description, this.props.time);
      return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_7__["Col"], {
        lg: 2,
        className: "has-text-centered is-family-sans-serif weather-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx("div", {
        className: "is-size-6 has-text-weight-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.date), __jsx("div", {
        className: "weather-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx("img", {
        src: "../images/".concat(icon, ".png"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }))), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, Math.round(this.props.minTemp), "\xB0"), " /", " ", __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, Math.round(this.props.maxTemp), "\xB0C")), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Humidity: ", this.props.humidity), __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Weather: ", this.props.description));
    }
  }]);

  return WeatherInfo;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3655908fe5b53fe6d8e2.hot-update.js.map