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
      windspeed = _ref.windspeed;
  return __jsx("section", {
    className: "hero is-info is-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h1", {
    className: "has-text-centered is-family-sans-serif has-text-weight-bold has-text-black is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Current Weather"), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h1", {
    className: "is-size-3 has-text-centered is-family-sans-serif subtitle has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, Math.round(temperature), "\xB0C")), __jsx("h2", {
    className: "is-size-4 is-capitalized has-text-centered is-family-sans-serif has-text-weight-medium has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, description), __jsx("h3", {
    className: "is-family-sans-serif has-text-dark has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, city, ", ", country), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Feels like: ", Math.round(feels_like), "\xB0C | Humidity: ", humidity, "%"), __jsx("div", {
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Math.round(lowTemp), "\xB0"), " ", "/", " ", __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, Math.round(highTemp), "\xB0C")), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Windspeed: ", windspeed)));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentWeather);

/***/ })

})
//# sourceMappingURL=index.js.7ebf346c0b2a088a85a3.hot-update.js.map