module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Q0LR");


/***/ }),

/***/ "MR+r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DarkModeSwtich; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function DarkModeSwtich() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "checkbox",
    id: "dark-mode-switch",
    name: "dark-mode"
  }), __jsx("script", {
    defer: true,
    src: "/static/scripts/darkmode.js"
  }));
}

/***/ }),

/***/ "Q0LR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sGm0");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uzCx");
/* harmony import */ var _smallComponents_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("MR+r");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Layout(Page) {
  return props => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_smallComponents_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("main", {
      className: "main dark-bg"
    }, __jsx("div", {
      className: "main-despace"
    }), __jsx(Page, props), __jsx("div", {
      className: "main-despace"
    })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
  };
} // The props are needed incase a page component recieves props
// Since a Higher Order Compent is a wrapper, props need to pass through it

/***/ }),

/***/ "XCE9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DarkModeToggle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_IconMoon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rzau");
/* harmony import */ var _svg_IconSun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cZx7");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function DarkModeToggle() {
  return __jsx("label", {
    htmlFor: "dark-mode-switch",
    id: "dark-mode-toggle",
    title: "darkmode"
  }, __jsx(_svg_IconMoon__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_svg_IconSun__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "aJOA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoName; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class LogoName extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("svg", {
      id: "Layer_1",
      "data-name": "Layer 1",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 163.13 14.32"
    }, __jsx("path", {
      className: "cls-1",
      d: "M34,18.78l-.38-2.1c0-.07,0-.1-.12-.1H30.57c-.08,0-.12,0-.12.1l-.38,2.1a.23.23,0,0,1-.26.22H28c-.19,0-.26-.09-.22-.26l3-13.52A.24.24,0,0,1,31,5h2.12a.24.24,0,0,1,.26.22l3,13.52v.08c0,.12-.07.18-.22.18H34.25C34.09,19,34,18.93,34,18.78Zm-3.08-4h2.22c.08,0,.11,0,.1-.1L32.07,8.34s0-.06-.06-.06,0,0-.06.06l-1.14,6.32C30.8,14.73,30.83,14.76,30.91,14.76Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M38.09,18.36a2.5,2.5,0,0,1-.94-2.06v-.14a.24.24,0,0,1,.24-.24h1.72a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v.1a1,1,0,0,0,.37.8,1.35,1.35,0,0,0,.91.32,1.1,1.1,0,0,0,.82-.3,1,1,0,0,0,.3-.76.94.94,0,0,0-.26-.67,1.79,1.79,0,0,0-.56-.41c-.2-.09-.56-.25-1.08-.46A5.67,5.67,0,0,1,38,13.66a2.62,2.62,0,0,1-.73-2,2.8,2.8,0,0,1,.89-2.19,3.47,3.47,0,0,1,2.41-.79A3.55,3.55,0,0,1,43,9.49a2.86,2.86,0,0,1,.91,2.23.26.26,0,0,1-.07.17.22.22,0,0,1-.17.07H42a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V11.6a1.06,1.06,0,0,0-.33-.8,1.16,1.16,0,0,0-.83-.32,1.07,1.07,0,0,0-.83.33,1.09,1.09,0,0,0-.31.79.91.91,0,0,0,.24.64,1.93,1.93,0,0,0,.54.41c.2.1.53.25,1,.45a11.84,11.84,0,0,1,1.41.67,3.17,3.17,0,0,1,1,.94,2.61,2.61,0,0,1,.43,1.51,2.6,2.6,0,0,1-.94,2.12,3.87,3.87,0,0,1-2.54.78A3.85,3.85,0,0,1,38.09,18.36Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M51.78,9.49A4,4,0,0,1,52.45,12v6.8a.26.26,0,0,1-.07.17.22.22,0,0,1-.17.07H50.37a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V12.14a1.84,1.84,0,0,0-.3-1.12,1,1,0,0,0-.86-.4,1.06,1.06,0,0,0-.9.42,1.9,1.9,0,0,0-.32,1.16v6.56a.22.22,0,0,1-.07.17.23.23,0,0,1-.17.07H45.67a.24.24,0,0,1-.24-.24V5.24A.24.24,0,0,1,45.67,5h1.84a.23.23,0,0,1,.17.07.22.22,0,0,1,.07.17V9.42s0,.06,0,.07.07,0,.11-.07a2.66,2.66,0,0,1,3.87.07Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M54.2,18.93a.22.22,0,0,1-.07-.17V5.24a.22.22,0,0,1,.07-.17A.21.21,0,0,1,54.37,5h1.84a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17V18.76a.26.26,0,0,1-.07.17.23.23,0,0,1-.17.07H54.37A.21.21,0,0,1,54.2,18.93Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M65,14.67a.23.23,0,0,1-.17.07H60.45c-.07,0-.1,0-.1.1v.9a1.51,1.51,0,0,0,.34,1,1.08,1.08,0,0,0,.88.4,1.18,1.18,0,0,0,.79-.29,1.35,1.35,0,0,0,.43-.75.25.25,0,0,1,.26-.2l1.78.08a.23.23,0,0,1,.17.07.24.24,0,0,1,0,.19,3.16,3.16,0,0,1-1,2.15A4.35,4.35,0,0,1,59,18.29,3,3,0,0,1,58,15.92V11.86A3,3,0,0,1,59,9.51a4.21,4.21,0,0,1,5.18,0,3.08,3.08,0,0,1,1,2.35V14.5A.26.26,0,0,1,65,14.67ZM60.69,11a1.51,1.51,0,0,0-.34,1v.9c0,.07,0,.1.1.1h2.26a.09.09,0,0,0,.1-.1V12a1.54,1.54,0,0,0-.34-1,1.14,1.14,0,0,0-.9-.39A1.08,1.08,0,0,0,60.69,11Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M79.33,18.16a3.51,3.51,0,0,1-1-2.62V15a.22.22,0,0,1,.07-.17.21.21,0,0,1,.17-.07h1.82a.24.24,0,0,1,.24.24v.4A1.94,1.94,0,0,0,81,16.68a1.25,1.25,0,0,0,1,.48,1.31,1.31,0,0,0,1-.45,2,2,0,0,0,.18-2.09,2.91,2.91,0,0,0-.62-.72c-.27-.23-.69-.55-1.28-1a18.46,18.46,0,0,1-1.61-1.28,4.62,4.62,0,0,1-1-1.35,3.86,3.86,0,0,1-.41-1.83,3.5,3.5,0,0,1,1-2.64,3.63,3.63,0,0,1,2.64-1,3.59,3.59,0,0,1,2.68,1,3.72,3.72,0,0,1,1,2.73v.48a.24.24,0,0,1-.24.24h-1.8a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V8.56a1.89,1.89,0,0,0-.39-1.25,1.28,1.28,0,0,0-1-.47,1.23,1.23,0,0,0-1,.43,1.7,1.7,0,0,0-.38,1.19A1.87,1.87,0,0,0,81,9.68a9.78,9.78,0,0,0,1.61,1.38,23.29,23.29,0,0,1,1.84,1.47,4.5,4.5,0,0,1,1,1.25,3.52,3.52,0,0,1,.34,1.62,3.72,3.72,0,0,1-1,2.73,3.6,3.6,0,0,1-2.68,1A3.65,3.65,0,0,1,79.33,18.16Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M93.27,9.54a3.17,3.17,0,0,1,1,2.42v6.8a.26.26,0,0,1-.07.17A.23.23,0,0,1,94,19H92.17a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17v-.38a.09.09,0,0,0,0-.08.06.06,0,0,0-.08,0,2.53,2.53,0,0,1-2,.82,3.29,3.29,0,0,1-2-.65,2.78,2.78,0,0,1-.87-2.37,3,3,0,0,1,1-2.56,4.75,4.75,0,0,1,2.85-.76h1a.09.09,0,0,0,.1-.1V12.2a1.74,1.74,0,0,0-.36-1.15,1.12,1.12,0,0,0-.9-.43,1,1,0,0,0-.7.27,1.17,1.17,0,0,0-.34.73.24.24,0,0,1-.26.24H87.43c-.16,0-.24-.08-.22-.24a3,3,0,0,1,1.07-2.18,4,4,0,0,1,5,.1Zm-1.8,7.32a1.29,1.29,0,0,0,.46-1.06V14.66a.09.09,0,0,0-.1-.1h-1a1.58,1.58,0,0,0-1.1.37A1.35,1.35,0,0,0,89.27,16a1.22,1.22,0,0,0,.32.93,1.1,1.1,0,0,0,.82.31A1.64,1.64,0,0,0,91.47,16.86Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M95.9,18.93a.22.22,0,0,1-.07-.17V5.24a.22.22,0,0,1,.07-.17A.21.21,0,0,1,96.07,5h1.84a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17V18.76a.26.26,0,0,1-.07.17.23.23,0,0,1-.17.07H96.07A.21.21,0,0,1,95.9,18.93Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M106.74,14.67a.23.23,0,0,1-.17.07h-4.42c-.07,0-.1,0-.1.1v.9a1.51,1.51,0,0,0,.34,1,1.08,1.08,0,0,0,.88.4,1.18,1.18,0,0,0,.79-.29,1.35,1.35,0,0,0,.43-.75.25.25,0,0,1,.26-.2l1.78.08a.23.23,0,0,1,.17.07.24.24,0,0,1,0,.19,3.16,3.16,0,0,1-1,2.15,4.35,4.35,0,0,1-5-.12,3,3,0,0,1-1-2.37V11.86a3,3,0,0,1,1-2.35,4.21,4.21,0,0,1,5.18,0,3.08,3.08,0,0,1,1,2.35V14.5A.26.26,0,0,1,106.74,14.67ZM102.39,11a1.51,1.51,0,0,0-.34,1v.9c0,.07,0,.1.1.1h2.26a.09.09,0,0,0,.1-.1V12a1.54,1.54,0,0,0-.34-1,1.14,1.14,0,0,0-.9-.39A1.08,1.08,0,0,0,102.39,11Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M115.26,14.67a.23.23,0,0,1-.17.07h-4.42c-.07,0-.1,0-.1.1v.9a1.51,1.51,0,0,0,.34,1,1.08,1.08,0,0,0,.88.4,1.18,1.18,0,0,0,.79-.29,1.35,1.35,0,0,0,.43-.75.25.25,0,0,1,.26-.2l1.78.08a.23.23,0,0,1,.17.07.24.24,0,0,1,0,.19,3.16,3.16,0,0,1-1,2.15,4.35,4.35,0,0,1-5-.12,3,3,0,0,1-1-2.37V11.86a3,3,0,0,1,1-2.35,4.21,4.21,0,0,1,5.18,0,3.08,3.08,0,0,1,1,2.35V14.5A.26.26,0,0,1,115.26,14.67ZM110.91,11a1.51,1.51,0,0,0-.34,1v.9c0,.07,0,.1.1.1h2.26a.09.09,0,0,0,.1-.1V12a1.54,1.54,0,0,0-.34-1,1.14,1.14,0,0,0-.9-.39A1.08,1.08,0,0,0,110.91,11Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M127.8,9.53a4.25,4.25,0,0,1,.67,2.53v6.7a.26.26,0,0,1-.07.17.23.23,0,0,1-.17.07h-1.82a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V12.22a2,2,0,0,0-.3-1.18,1,1,0,0,0-.82-.42,1,1,0,0,0-.88.42,1.84,1.84,0,0,0-.32,1.16v6.56a.26.26,0,0,1-.07.17.23.23,0,0,1-.17.07h-1.82a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V12.22a2,2,0,0,0-.31-1.18,1,1,0,0,0-.81-.42,1,1,0,0,0-.88.42,1.84,1.84,0,0,0-.32,1.16v6.56a.26.26,0,0,1-.07.17A.23.23,0,0,1,119,19h-1.82a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V9a.22.22,0,0,1,.07-.17.21.21,0,0,1,.17-.07H119a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v.32s0,.07,0,.08,0,0,.08,0a2.29,2.29,0,0,1,.9-.58,2.87,2.87,0,0,1,1-.18,2.34,2.34,0,0,1,2.18,1.26s.1,0,.18-.06a2.29,2.29,0,0,1,1-.92,2.83,2.83,0,0,1,1.23-.28A2.3,2.3,0,0,1,127.8,9.53Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M129.92,13.91a.22.22,0,0,1-.07-.17V12.22a.22.22,0,0,1,.07-.17.21.21,0,0,1,.17-.07H135a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v1.52a.26.26,0,0,1-.07.17A.23.23,0,0,1,135,14h-4.94A.21.21,0,0,1,129.92,13.91Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M139,18.78,136.29,5.26l0-.08c0-.12.07-.18.22-.18h1.92a.23.23,0,0,1,.26.22l1.4,8.34s0,.06.06.06,0,0,.06-.06l1.26-8.34c0-.15.1-.22.26-.22h1.6a.23.23,0,0,1,.26.22l1.36,8.34s0,.06.06.06,0,0,.06-.06l1.26-8.34c0-.15.1-.22.26-.22h1.86c.17,0,.24.09.22.26l-2.54,13.52a.23.23,0,0,1-.26.22h-1.7c-.16,0-.25-.07-.26-.22l-1.34-8.5s0-.08-.06-.08-.05,0-.06.08l-1.24,8.5a.23.23,0,0,1-.26.22h-1.72C139.05,19,139,18.93,139,18.78Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M156,14.67a.23.23,0,0,1-.17.07h-4.42c-.07,0-.1,0-.1.1v.9a1.51,1.51,0,0,0,.34,1,1.08,1.08,0,0,0,.88.4,1.18,1.18,0,0,0,.79-.29,1.35,1.35,0,0,0,.43-.75.25.25,0,0,1,.26-.2l1.78.08a.23.23,0,0,1,.17.07.24.24,0,0,1,.05.19,3.16,3.16,0,0,1-1,2.15,4.35,4.35,0,0,1-5.05-.12,3,3,0,0,1-.95-2.37V11.86a3,3,0,0,1,.95-2.35,4.21,4.21,0,0,1,5.18,0,3.08,3.08,0,0,1,1,2.35V14.5A.26.26,0,0,1,156,14.67ZM151.63,11a1.51,1.51,0,0,0-.34,1v.9c0,.07,0,.1.1.1h2.26a.09.09,0,0,0,.1-.1V12a1.54,1.54,0,0,0-.34-1,1.14,1.14,0,0,0-.9-.39A1.08,1.08,0,0,0,151.63,11Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M158.25,18.36a2.5,2.5,0,0,1-.94-2.06v-.14a.22.22,0,0,1,.07-.17.21.21,0,0,1,.17-.07h1.72a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v.1a1,1,0,0,0,.37.8,1.35,1.35,0,0,0,.91.32,1.12,1.12,0,0,0,.82-.3,1,1,0,0,0,.3-.76.94.94,0,0,0-.26-.67,1.91,1.91,0,0,0-.56-.41c-.2-.09-.56-.25-1.08-.46a5.67,5.67,0,0,1-1.87-1.12,2.62,2.62,0,0,1-.73-2,2.76,2.76,0,0,1,.89-2.19,3.47,3.47,0,0,1,2.41-.79,3.55,3.55,0,0,1,2.47.83,2.89,2.89,0,0,1,.91,2.23.26.26,0,0,1-.07.17.23.23,0,0,1-.17.07h-1.68a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V11.6a1.06,1.06,0,0,0-.33-.8,1.16,1.16,0,0,0-.83-.32,1.07,1.07,0,0,0-.83.33,1.09,1.09,0,0,0-.31.79.91.91,0,0,0,.24.64,1.93,1.93,0,0,0,.54.41c.2.1.53.25,1,.45a11.84,11.84,0,0,1,1.41.67,3.17,3.17,0,0,1,1,.94,2.61,2.61,0,0,1,.43,1.51,2.63,2.63,0,0,1-.94,2.12,4.54,4.54,0,0,1-5.06,0Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M169.8,10.35a.23.23,0,0,1-.17.07h-1.24c-.07,0-.1,0-.1.1v5.24a1.36,1.36,0,0,0,.26,1,1,1,0,0,0,.78.25h.14a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v1.54a.26.26,0,0,1-.07.17.23.23,0,0,1-.17.07h-.68a3.5,3.5,0,0,1-2-.5,2.18,2.18,0,0,1-.69-1.88v-6.1a.09.09,0,0,0-.1-.1h-.7a.21.21,0,0,1-.17-.07.22.22,0,0,1-.07-.17V9a.22.22,0,0,1,.07-.17.21.21,0,0,1,.17-.07h.7a.09.09,0,0,0,.1-.1V6.48a.22.22,0,0,1,.07-.17.21.21,0,0,1,.17-.07h1.76a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v2.2c0,.07,0,.1.1.1h1.24a.23.23,0,0,1,.17.07.26.26,0,0,1,.07.17v1.16A.26.26,0,0,1,169.8,10.35Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M73.78,9a.24.24,0,0,0,0-.21.25.25,0,0,0-.18-.07H71.66a.26.26,0,0,0-.28.2l-1.5,3.82s0,.06-.06.06,0,0-.06-.06L68.26,9a.27.27,0,0,0-.28-.2H66.06c-.15,0-.22.06-.22.18a.15.15,0,0,0,0,.1s2.17,5.11,2.53,6,.41,2-1.42,2h-.14a.24.24,0,0,0-.24.24v1.54a.24.24,0,0,0,.24.24h.68a3,3,0,0,0,2-.57,4,4,0,0,0,1-1.48l1.11-2.7Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M8.77,16.88V7.08H10.1a.16.16,0,0,0,.16-.15V5.15A.16.16,0,0,0,10.1,5H7.37a.64.64,0,0,0-.64.64V18.33a.64.64,0,0,0,.64.63H10.1a.15.15,0,0,0,.16-.15V17a.16.16,0,0,0-.16-.16Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("path", {
      className: "cls-1",
      d: "M18,5.15V6.93a.15.15,0,0,0,.15.15h1.34v9.8H18.17A.16.16,0,0,0,18,17v1.77a.15.15,0,0,0,.15.15H21a.64.64,0,0,0,.64-.63V5.64A.64.64,0,0,0,21,5H18.17A.15.15,0,0,0,18,5.15Z",
      transform: "translate(-6.73 -4.84)"
    }), __jsx("circle", {
      className: "cls-1",
      cx: "4.75",
      cy: "5.06",
      r: "1.04"
    }), __jsx("circle", {
      className: "cls-1",
      cx: "9.95",
      cy: "5.06",
      r: "1.04"
    }), __jsx("path", {
      className: "cls-1",
      d: "M14.09,16.23c-2.53,0-3.27-1.44-3.48-2.27a.47.47,0,0,1,.45-.58h6a.47.47,0,0,1,.45.58C17.35,14.79,16.61,16.23,14.09,16.23Z",
      transform: "translate(-6.73 -4.84)"
    })));
  }

}

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cZx7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HumburgerIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class HumburgerIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 30,
      height: 30,
      viewBox: "0 0 20 20",
      className: "dark-hide"
    }, __jsx("g", {
      id: "Layer_4",
      "data-name": "Layer 4"
    }, __jsx("circle", {
      className: "cls-1",
      cx: 10,
      cy: 10,
      r: "5.26"
    }), __jsx("rect", {
      className: "cls-1",
      x: "9.18",
      y: "0.25",
      width: "1.63",
      height: "3.1",
      rx: "0.82"
    }), __jsx("rect", {
      className: "cls-1",
      x: "9.18",
      y: "16.65",
      width: "1.63",
      height: "3.1",
      rx: "0.82"
    }), __jsx("rect", {
      className: "cls-1",
      x: "0.99",
      y: "8.45",
      width: "1.63",
      height: "3.1",
      rx: "0.82",
      transform: "translate(-8.2 11.8) rotate(-90)"
    }), __jsx("rect", {
      className: "cls-1",
      x: "17.38",
      y: "8.45",
      width: "1.63",
      height: "3.1",
      rx: "0.82",
      transform: "translate(8.2 28.2) rotate(-90)"
    }), __jsx("rect", {
      className: "cls-1",
      x: "3.39",
      y: "2.65",
      width: "1.63",
      height: "3.1",
      rx: "0.82",
      transform: "translate(-1.74 4.2) rotate(-45)"
    }), __jsx("rect", {
      className: "cls-1",
      x: "14.98",
      y: "14.25",
      width: "1.63",
      height: "3.1",
      rx: "0.82",
      transform: "translate(-6.54 15.8) rotate(-45)"
    }), __jsx("rect", {
      className: "cls-1",
      x: "3.39",
      y: "14.25",
      width: "1.63",
      height: "3.1",
      rx: "0.82",
      transform: "translate(-4 29.94) rotate(-135)"
    }), __jsx("rect", {
      className: "cls-1",
      x: "14.98",
      y: "2.65",
      width: "1.63",
      height: "3.1",
      rx: "0.82",
      transform: "translate(24 18.35) rotate(-135)"
    }))));
  }

}

/***/ }),

/***/ "rzau":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HumburgerIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class HumburgerIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 30,
      height: 30,
      viewBox: "0 0 20 20",
      className: "light-hide"
    }, __jsx("g", {
      id: "Layer_3",
      "data-name": "Layer 3"
    }, __jsx("path", {
      className: "cls-1",
      d: "M14.4,13.26a7.61,7.61,0,0,1-6.23-12A8.84,8.84,0,1,0,18.72,11.92,7.62,7.62,0,0,1,14.4,13.26Z"
    }))));
  }

}

/***/ }),

/***/ "sGm0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smallComponents_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yhAk");
/* harmony import */ var _svg_IconMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zrTT");
/* harmony import */ var _smallComponents_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XCE9");
/* harmony import */ var _svg_LogoName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aJOA");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Header() {
  const {
    0: menuActive,
    1: setMenuActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    className: "header"
  }, __jsx("a", {
    className: "site-logo",
    href: "#"
  }, __jsx(_svg_LogoName__WEBPACK_IMPORTED_MODULE_4__["default"], null)), __jsx("div", {
    className: `menu-container ${menuActive && 'active'}`
  }, __jsx(_smallComponents_Navigation__WEBPACK_IMPORTED_MODULE_1__["default"], null)), __jsx("div", {
    className: "nav-right"
  }, __jsx(_smallComponents_DarkModeToggle__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    className: "menu-icon",
    onClick: () => setMenuActive(!menuActive)
  }, __jsx(_svg_IconMenu__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), __jsx("div", {
    className: "header-spacer dark-bg"
  })); // not all browsers support position:sticky;
} // import React, {useState} from 'react';
// import Navigation from './Navigation.js'
// import DarkModeButton from './smallComps/DarkModeButton.js'
// export default function Header() {
//     const [menuActive, setMenuActive] = useState(false);
//     return <header className="mainHeader">
//         <div className="logo">logo</div>
//         <div className={`menu-container ${menuActive && 'active'}`}>
//             <Navigation/>
//             {/* <DarkModeButton/> */}
//         </div>
//         <i className="ionicons icon ion-ios-menu menu-icon" onClick={()=> setMenuActive(!menuActive)}/>
//     </header>
//   }

/***/ }),

/***/ "uzCx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Footer() {
  return __jsx("footer", {
    className: "dark-bg"
  }, __jsx("p", null, "Built with SCSS & React/Next.js"), __jsx("p", null, "\xA9 Ashley Saleem-West ", new Date().getFullYear()));
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yhAk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // export default function Navigation() {
//     const navLinks = [
//         {title:"Home", path:"/"},
//         {title:"Blog", path:"/blog"},
//         {title:"About", path:"/about"},
//         {title:"Contact", path:"/contact"}
//     ]
//     return <nav className="navigation">
//         <ul>
//             { navLinks.map((link, index) => 
//                     <li key={link.title}>
//                         <Link as={link.path} href={link.path}><a>{link.title}</a></Link>
//                     </li>
//                 )
//             }
//         </ul>
//     </nav>
// }

function Navigation() {
  const navLinks = [{
    title: "Home",
    path: "/#"
  }, {
    title: "About",
    path: "/#about-me"
  }, {
    title: "Contact",
    path: "/#contact-me"
  }];
  return __jsx("nav", {
    className: "navigation"
  }, __jsx("ul", null, navLinks.map((link, index) => __jsx("li", {
    key: link.title
  }, __jsx("a", {
    href: link.path
  }, link.title)))));
}

/***/ }),

/***/ "zrTT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HumburgerIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class HumburgerIcon extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("svg", {
      id: "Layer_2",
      "data-name": "Layer 2",
      xmlns: "http://www.w3.org/2000/svg",
      width: 30,
      height: 30,
      viewBox: "0 0 20 20"
    }, __jsx("rect", {
      className: "cls-1",
      x: "0.25",
      y: "2.79",
      width: "19.51",
      height: "2.48",
      rx: "1.24"
    }), __jsx("rect", {
      className: "cls-1",
      x: "0.25",
      y: "8.76",
      width: "19.51",
      height: "2.48",
      rx: "1.24"
    }), __jsx("rect", {
      className: "cls-1",
      x: "0.25",
      y: "14.73",
      width: "19.51",
      height: "2.48",
      rx: "1.24"
    })));
  }

}

/***/ })

/******/ });