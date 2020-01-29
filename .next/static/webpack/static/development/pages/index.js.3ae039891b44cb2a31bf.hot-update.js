webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/UnitToggle.js":
/*!**********************************!*\
  !*** ./components/UnitToggle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\components\\UnitToggle.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UnitToggle = function UnitToggle(_ref) {
  var toggleUnit = _ref.toggleUnit,
      unit = _ref.unit;
  return __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("label", {
    className: "radio",
    htmlFor: "celsius",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("input", {
    className: "is-radio",
    type: "radio",
    id: "celsius",
    name: "celsius",
    value: "metric",
    checked: unit === "metric",
    onChange: toggleUnit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), "Celsius"), __jsx("input", {
    className: "is-radio",
    type: "radio",
    id: "fahrenehit",
    name: "fahrenheit",
    value: "fahrenheit",
    checked: unit === "imperial",
    onChange: toggleUnit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "fahrenehit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Fahrenheit"));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitToggle);

/***/ })

})
//# sourceMappingURL=index.js.3ae039891b44cb2a31bf.hot-update.js.map