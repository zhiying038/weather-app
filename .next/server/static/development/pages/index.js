module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CurrentWeather.js":
/*!**************************************!*\
  !*** ./components/CurrentWeather.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\components\\CurrentWeather.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CurrentWeather = ({
  temperature,
  description,
  city,
  feels_like,
  humidity,
  highTemp,
  lowTemp,
  country
}) => {
  return __jsx("section", {
    className: "hero is-info is-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "hero-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("h1", {
    className: "has-text-centered is-family-sans-serif has-text-weight-bold has-text-black is-size-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Current Weather"), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h1", {
    className: "is-size-3 has-text-centered is-family-sans-serif subtitle has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, Math.round(temperature), "\xB0C")), __jsx("h2", {
    className: "is-size-4 is-capitalized has-text-centered is-family-sans-serif has-text-weight-medium has-text-black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, description), __jsx("h3", {
    className: "is-family-sans-serif has-text-dark has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, city, ", ", country), __jsx("h5", {
    className: "is-family-sans-serif has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Feels like: ", Math.round(feels_like), "\xB0C | Humidity: ", humidity), __jsx("div", {
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, Math.round(lowTemp), "\xB0"), " ", "/", " ", __jsx("span", {
    className: "is-family-sans-serif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, Math.round(highTemp), "\xB0C"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrentWeather);

/***/ }),

/***/ "./components/SearchCity.js":
/*!**********************************!*\
  !*** ./components/SearchCity.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\components\\SearchCity.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SearchCity = ({
  changeHandler,
  submitHandler,
  activeCity
}) => {
  return __jsx("div", {
    className: "field is-grouped centered-search",
    onSubmit: submitHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("input", {
    className: "input",
    placeholder: "Enter City",
    onChange: changeHandler,
    value: activeCity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("div", {
    className: "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("a", {
    className: "button is-dark",
    onClick: submitHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Search")));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchCity);

/***/ }),

/***/ "./components/WeatherInfo.js":
/*!***********************************!*\
  !*** ./components/WeatherInfo.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WeatherInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\components\\WeatherInfo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class WeatherInfo extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: 2,
      className: "has-text-centered is-family-sans-serif weather-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "is-size-6 has-text-weight-bold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, this.props.date), __jsx("div", {
      className: "weather-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      src: `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, Math.round(this.props.minTemp), "\xB0"), " /", " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, Math.round(this.props.maxTemp), "\xB0C")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("h5", {
      className: "has-text-weight-semibold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Humidity:", __jsx("span", {
      className: "is-normal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, this.props.humidity))), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("h5", {
      className: "has-text-weight-semibold",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Weather: "), __jsx("p", {
      className: "is-capitalized",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, this.props.description)));
  }

}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WeatherInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WeatherInfo */ "./components/WeatherInfo.js");
/* harmony import */ var _components_CurrentWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CurrentWeather */ "./components/CurrentWeather.js");
/* harmony import */ var _components_SearchCity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchCity */ "./components/SearchCity.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\Yoh Zhi Ying\\Desktop\\weather-app\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.apikey = "b71deb2566d82e77a5e670d0d3771d2a";
    this.apiurl = "http://api.openweathermap.org/data/2.5";
    this.state = {
      activeCity: "Kuala Lumpur",
      data: null
    };
    this.APIRequest = this.APIRequest.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  async componentDidMount() {
    await this.APIRequest(this.state.activeCity);
  }

  async APIRequest(cityName) {
    const forecastUrl = `${this.apiurl}/forecast?q=${cityName}&units=metric&appid=${this.apikey}`;
    await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(forecastUrl).then(res => {
      this.retrieveData(res.data.list);
    }).catch(error => {
      console.log(error);
    });
    const weatherUrl = `${this.apiurl}/weather?q=${cityName}&units=metric&appid=${this.apikey}`;
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(weatherUrl).then(res => {
      const detail = res.data;
      this.setState({
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
  }
  /* Display date in the format of DD/MM/YY */


  formatDate(dateData) {
    let date = dateData.split(" ")[0].split("-");
    return `${date[2]}/${date[1]}/${date[0]}`;
  }
  /* Display forecast for 5 days according to the local system time */


  retrieveData(data) {
    let date = new Date();
    let hours = date.getHours();
    let timeslot = "";

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

    let jsonData = data.filter(data => {
      let time = data.dt_txt.split(" ")[1];

      if (time === timeslot) {
        return data;
      }
    });
    this.setState({
      data: jsonData
    });
  }

  submitHandler(input) {
    input.preventDefault();
    this.APIRequest(this.state.activeCity);
  }

  changeHandler(input) {
    input.preventDefault();
    this.setState({
      activeCity: input.target.value
    });
  }

  render() {
    let cards = "";

    if (this.state.data) {
      cards = this.state.data.map(data => {
        return __jsx(_components_WeatherInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          date: this.formatDate(data.dt_txt),
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
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
    }, "Weather Application")), __jsx(_components_SearchCity__WEBPACK_IMPORTED_MODULE_6__["default"], {
      changeHandler: this.changeHandler,
      submitHandler: this.submitHandler,
      activeCity: this.state.activeCity,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }), __jsx(_components_CurrentWeather__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, cards))))))));
  }

}

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yoh Zhi Ying\Desktop\weather-app\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-grid-system");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map