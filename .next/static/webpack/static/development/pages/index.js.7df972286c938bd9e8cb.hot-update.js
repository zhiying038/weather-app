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
var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\components\\CurrentWeather.js";
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
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h1", {
    className: "has-text-centered is-family-sans-serif has-text-weight-bold has-text-black is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Current Weather"), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h1", {
    className: "is-size-3 has-text-centered is-family-sans-serif subtitle has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, unit === "metric" ? metric + "°C" : imperial + "°F")), __jsx("h2", {
    className: "is-size-4 is-capitalized has-text-centered is-family-sans-serif has-text-weight-medium has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, description), __jsx("h3", {
    className: "is-family-sans-serif has-text-dark has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, city, ", ", country), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Feels like: ", unit === "metric" ? Math.round(feels_like) + "°C" : Math.round(feels_like * 9 / 5 + 32) + "°F", " | Humidity: ", humidity, "%"), __jsx("div", {
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, unit === "metric" ? Math.round(highTemp) + "°C" : Math.round(highTemp * 9 / 5 + 32) + "°F"), " ", "/", " ", __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, unit === "metric" ? Math.round(lowTemp) + "°C" : Math.round(lowTemp * 9 / 5 + 32) + "°F")), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Windspeed: ", unit === "metric" ? windspeed + " m/s" : (windspeed * 2.237).toFixed(1) + " mph")));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentWeather);

/***/ })

})
//# sourceMappingURL=index.js.7df972286c938bd9e8cb.hot-update.js.map