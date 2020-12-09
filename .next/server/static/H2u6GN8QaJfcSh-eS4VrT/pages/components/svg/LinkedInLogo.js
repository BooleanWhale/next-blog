module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2MaU");


/***/ }),

/***/ "2MaU":
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
      className: "svg-dark-mode",
      version: "1.1",
      id: "Layer_2",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 200 54.6",
      xmlSpace: "preserve"
    }, __jsx("path", {
      id: "path14",
      className: "st0 svg-dark-mode",
      d: "M147.4,4.6c0-2.1,1.7-3.8,3.9-3.8h44.9c2.1,0,3.9,1.7,3.9,3.8V50c0,2.1-1.7,3.8-3.9,3.8h-44.9 c-2.1,0-3.9-1.7-3.9-3.8V4.6z"
    }), __jsx("path", {
      id: "path16",
      className: "st1",
      d: "M0,45.2h22V38H8V10.5H0C0,10.5,0,45.2,0,45.2z"
    }), __jsx("path", {
      id: "path18",
      className: "st1",
      d: "M33.1,45.2V21.3h-8v23.9H33.1z M29.1,18c2.8,0,4.5-1.8,4.5-4.1c-0.1-2.3-1.7-4.1-4.4-4.1 c-2.7,0-4.5,1.8-4.5,4.1C24.7,16.2,26.4,18,29.1,18L29.1,18L29.1,18z"
    }), __jsx("path", {
      id: "path20",
      className: "st1",
      d: "M36.8,45.2h8V31.8c0-0.7,0.1-1.4,0.3-1.9c0.6-1.4,1.9-2.9,4.1-2.9c2.9,0,4,2.2,4,5.4v12.8h8V31.5 c0-7.3-3.9-10.8-9.2-10.8c-4.3,0-6.2,2.4-7.2,4h0.1v-3.5h-8C36.9,23.5,36.8,45.2,36.8,45.2L36.8,45.2z"
    }), __jsx("path", {
      id: "path22",
      className: "st1",
      d: "M72.3,10.5h-8v34.7h8v-7.8l2-2.5l6.2,10.3h9.8L79.8,30.3L89,20.2h-9.6c0,0-6.5,9-7.1,10.1 L72.3,10.5L72.3,10.5z"
    }), __jsx("path", {
      id: "path24",
      className: "st1",
      d: "M111.5,35.2c0.1-0.6,0.3-1.8,0.3-3.1c0-6.2-3.1-12.5-11.4-12.5c-8.8,0-12.9,7-12.9,13.3 c0,7.8,5,12.7,13.7,12.7c3.5,0,6.6-0.5,9.3-1.6l-1-5.3c-2.1,0.7-4.3,1.1-7.1,1.1c-3.7,0-7-1.5-7.2-4.8L111.5,35.2L111.5,35.2z M95,29.8c0.2-2,1.6-5.1,5-5.1c3.6,0,4.4,3.2,4.4,5.1H95z"
    }), __jsx("path", {
      id: "path26",
      className: "st1",
      d: "M131.4,10.5v12h-0.1c-1.2-1.7-3.6-2.8-6.7-2.8c-6.1,0-11.5,4.9-11.5,13.3c0,7.8,4.9,12.8,10.9,12.8 c3.3,0,6.4-1.4,8-4.2h0.2l0.3,3.6h7.1c-0.1-1.7-0.2-4.6-0.2-7.4V10.5H131.4L131.4,10.5z M131.4,34.1c0,0.6-0.1,1.2-0.2,1.7 c-0.5,2.2-2.4,3.7-4.7,3.7c-3.3,0-5.4-2.7-5.4-6.8c0-3.9,1.8-7.1,5.5-7.1c2.5,0,4.2,1.7,4.7,3.8c0.1,0.5,0.1,1,0.1,1.4L131.4,34.1 L131.4,34.1z"
    }), __jsx("path", {
      id: "path28",
      className: "st1 svg-dark-inverse",
      d: "M163.3,45.2V21.2h-8v23.9H163.3z M159.3,18c2.8,0,4.5-1.8,4.5-4.1c-0.1-2.3-1.7-4.1-4.4-4.1 c-2.7,0-4.5,1.8-4.5,4.1C154.9,16.1,156.6,18,159.3,18L159.3,18L159.3,18z"
    }), __jsx("path", {
      id: "path30",
      className: "st1 svg-dark-inverse",
      d: "M167.7,45.2h8V31.8c0-0.7,0.1-1.4,0.3-1.9c0.6-1.4,1.9-2.9,4.1-2.9c2.9,0,4,2.2,4,5.4v12.8h8V31.4 c0-7.3-3.9-10.8-9.2-10.8c-4.3,0-6.2,2.4-7.2,4h0.1v-3.5h-8C167.8,23.5,167.7,45.2,167.7,45.2L167.7,45.2z"
    })));
  }

}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });