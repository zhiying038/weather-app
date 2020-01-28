webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
false,

/***/ "./node_modules/core-js/library/fn/parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_WeatherInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/WeatherInfo */ "./components/WeatherInfo.js");
/* harmony import */ var _components_CurrentWeather__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CurrentWeather */ "./components/CurrentWeather.js");
/* harmony import */ var _components_SearchCity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SearchCity */ "./components/SearchCity.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;









var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.apikey = "b71deb2566d82e77a5e670d0d3771d2a";
    _this.apiurl = "http://api.openweathermap.org/data/2.5";
    _this.state = {
      activeCity: "Kuala Lumpur",
      data: null
    };
    _this.APIRequest = _this.APIRequest.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.retrieveData = _this.retrieveData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.submitHandler = _this.submitHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.changeHandler = _this.changeHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.APIRequest(this.state.activeCity));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "APIRequest",
    value: function APIRequest(cityName) {
      var _this2 = this;

      var forecastUrl, weatherUrl;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function APIRequest$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              forecastUrl = "".concat(this.apiurl, "/forecast?q=").concat(cityName, "&units=metric&appid=").concat(this.apikey);
              _context2.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(forecastUrl).then(function (res) {
                _this2.retrieveData(res.data.list);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 3:
              weatherUrl = "".concat(this.apiurl, "/weather?q=").concat(cityName, "&units=metric&appid=").concat(this.apikey);
              axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(weatherUrl).then(function (res) {
                var detail = res.data;

                _this2.setState({
                  city: detail.name,
                  temperature: detail.main.temp,
                  description: detail.weather[0].description,
                  feels_like: detail.main.feels_like,
                  humidity: detail.main.humidity,
                  highTemp: detail.main.temp_max,
                  lowTemp: detail.main.temp_min,
                  country: detail.sys.country
                });
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
    /* Display date in the format of DD/MM/YY */

  }, {
    key: "formatDate",
    value: function formatDate(dateData) {
      var date = dateData.split(" ")[0].split("-");
      return "".concat(date[2], "/").concat(date[1], "/").concat(date[0]);
    }
    /* Display forecast for 5 days according to the local system time */

  }, {
    key: "retrieveData",
    value: function retrieveData(data) {
      var date = new Date();
      var hours = date.getHours();
      var timeslot = "";

      if (hours >= 0 && hours < 3) {
        timeslot = "00:00:00";
      } else if (hours >= 3 && hours < 6) {
        timeslot = "03:00:00";
      } else if (hours >= 6 && hours < 9) {
        timeslot = "06:00:00";
      } else if (hours >= 9 && hours < 12) {
        timeslot = "09:00:00";
      } else if (hours >= 12 && hours < 15) {
        timeslot = "12:00:00";
      } else if (hours >= 15 && hours < 18) {
        timeslot = "15:00:00";
      } else if (hours >= 18 && hours < 21) {
        timeslot = "18:00:00";
      } else if (hours >= 21) {
        timeslot = "21:00:00";
      }

      var json = data.filter(function (c) {
        var time = c.dt_txt.split(" ")[1];

        if (time === timeslot) {
          return c;
        }
      });
      this.setState({
        data: json
      });
    }
  }, {
    key: "submitHandler",
    value: function submitHandler(input) {
      input.preventDefault();
      this.APIRequest(this.state.activeCity);
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(input) {
      input.preventDefault();
      this.setState({
        activeCity: input.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var cards = "";

      if (this.state.data) {
        cards = this.state.data.map(function (data) {
          return __jsx(_components_WeatherInfo__WEBPACK_IMPORTED_MODULE_11__["default"], {
            date: _this3.formatDate(data.dt_txt),
            maxTemp: data.main.temp_max,
            minTemp: data.main.temp_min,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          });
        });
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Weather Application")), __jsx(_components_SearchCity__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeHandler: this.changeHandler,
        submitHandler: this.submitHandler,
        activeCity: this.state.activeCity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_12__["default"], {
        city: this.state.city,
        temperature: this.state.temperature,
        description: this.state.description,
        feels_like: this.state.feels_like,
        highTemp: this.state.highTemp,
        lowTemp: this.state.lowTemp,
        humidity: this.state.humidity,
        country: this.state.country,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), __jsx("div", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, __jsx("div", {
        className: "columns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, __jsx("div", {
        className: "column tile is-ancestor is-centered",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("div", {
        className: "tile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("div", {
        className: "tile is-child",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, cards))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.869982a88923f5086231.hot-update.js.map