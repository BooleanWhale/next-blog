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
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cZx7");


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

/***/ })

/******/ });