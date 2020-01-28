webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_WeatherInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/WeatherInfo */ "./components/WeatherInfo.js");
/* harmony import */ var _components_CurrentWeather__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/CurrentWeather */ "./components/CurrentWeather.js");
/* harmony import */ var _components_SearchCity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SearchCity */ "./components/SearchCity.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_15__);








var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).call(this, props));
    _this.apikey = "b71deb2566d82e77a5e670d0d3771d2a";
    _this.apiurl = "http://api.openweathermap.org/data/2.5";
    _this.state = {
      activeCity: "Kuala Lumpur",
      data: null
    };
    _this.APIRequest = _this.APIRequest.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.retrieveData = _this.retrieveData.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.submitHandler = _this.submitHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    _this.changeHandler = _this.changeHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function componentDidMount$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.APIRequest(this.state.activeCity));

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
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function APIRequest$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              forecastUrl = "".concat(this.apiurl, "/forecast?q=").concat(cityName, "&units=metric&appid=").concat(this.apikey);
              _context2.next = 3;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(forecastUrl).then(function (res) {
                _this2.retrieveData(res.data.list);
              })["catch"](function (error) {
                console.log(error);
              }));

            case 3:
              weatherUrl = "".concat(this.apiurl, "/weather?q=").concat(cityName, "&units=metric&appid=").concat(this.apikey);
              axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(weatherUrl).then(function (res) {
                var detail = res.data;

                _this2.setState({
                  city: detail.name,
                  temperature: detail.main.temp,
                  description: detail.weather[0].description,
                  feels_like: detail.main.feels_like,
                  humidity: detail.main.humidity,
                  highTemp: detail.main.temp_max,
                  lowTemp: detail.main.temp_min
                });
              });

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "formatDate",
    value: function formatDate(dateTxt) {
      var date = dateTxt.split(" ")[0].split("-");
      return "".concat(date[2], "/").concat(date[1], "/").concat(date[0]);
    }
  }, {
    key: "formatTime",
    value: function formatTime(dateTxt) {
      return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(dateTxt.split(" ")[1].split(":")[0]);
    }
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
      var id = 1;

      if (this.state.data) {
        cards = this.state.data.map(function (c) {
          return __jsx(_components_WeatherInfo__WEBPACK_IMPORTED_MODULE_12__["default"], {
            key: id++,
            time: _this3.formatTime(c.dt_txt),
            date: _this3.formatDate(c.dt_txt),
            maxTemp: c.main.temp_max,
            minTemp: c.main.temp_min,
            humidity: c.main.humidity,
            description: c.weather[0].description,
            icon: c.weather[0].icon,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          });
        });
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Weather Application")), __jsx(_components_SearchCity__WEBPACK_IMPORTED_MODULE_14__["default"], {
        changeHandler: this.changeHandler,
        submitHandler: this.submitHandler,
        activeCity: this.state.activeCity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), __jsx(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_13__["default"], {
        city: this.state.city,
        temperature: this.state.temperature,
        description: this.state.description,
        feels_like: this.state.feels_like,
        highTemp: this.state.highTemp,
        lowTemp: this.state.lowTemp,
        humidity: this.state.humidity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_11__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        lg: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, cards)))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.58c5509f896cf65a3074.hot-update.js.map