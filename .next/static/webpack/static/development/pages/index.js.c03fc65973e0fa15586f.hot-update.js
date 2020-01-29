webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CurrentWeather.js":
/*!**************************************!*\
  !*** ./components/CurrentWeather.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UnitToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UnitToggle */ "./components/UnitToggle.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\components\\CurrentWeather.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CurrentWeather = function CurrentWeather(_ref) {
  var temperature = _ref.temperature,
      description = _ref.description,
      city = _ref.city,
      feels_like = _ref.feels_like,
      humidity = _ref.humidity,
      highTemp = _ref.highTemp,
      lowTemp = _ref.lowTemp,
      country = _ref.country,
      windspeed = _ref.windspeed,
      unit = _ref.unit;
  var metric = Math.round(temperature);
  var imperial = Math.round(temperature * 9 / 5 + 32);
  return __jsx("section", {
    className: "hero is-info is-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "has-text-centered is-family-sans-serif has-text-weight-bold has-text-black is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Current Weather"), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    className: "is-size-3 has-text-centered is-family-sans-serif subtitle has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, unit === "metric" ? metric + "°C" : imperial + "°F")), __jsx("h2", {
    className: "is-size-4 is-capitalized has-text-centered is-family-sans-serif has-text-weight-medium has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, description), __jsx("h3", {
    className: "is-family-sans-serif has-text-dark has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, city, ", ", country), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Feels like:", " ", unit === "metric" ? Math.round(feels_like) + "°C" : Math.round(feels_like * 9 / 5 + 32) + "°F", " ", "| Humidity: ", humidity, "%"), __jsx("div", {
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, unit === "metric" ? Math.round(highTemp) + "°C" : Math.round(highTemp * 9 / 5 + 32) + "°F"), " ", "/", " ", __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, unit === "metric" ? Math.round(lowTemp) + "°C" : Math.round(lowTemp * 9 / 5 + 32) + "°F")), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Windspeed: ", windspeed), __jsx(_components_UnitToggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    toggleUnit: _this.toggleUnit,
    unit: _this.state.unit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentWeather);

/***/ }),

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
    className: "control",
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
  }), "Celsius"), __jsx("label", {
    className: "radio",
    htmlFor: "fahrenheit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("input", {
    className: "is-radio",
    type: "radio",
    id: "fahrenehit",
    name: "fahrenheit",
    value: "fahrenheit",
    checked: unit === "imperial",
    onChange: toggleUnit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), "Fahrenheit"));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitToggle);

/***/ })

})
//# sourceMappingURL=index.js.c03fc65973e0fa15586f.hot-update.js.map