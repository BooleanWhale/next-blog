module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("tur0");


/***/ }),

/***/ "3WRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Modal({
  info,
  content,
  trigger
}) {
  // id, title, content, trigger
  const {
    id
  } = info;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("input", {
    type: "checkbox",
    id: id + "-check",
    style: {
      display: 'none'
    },
    className: "modal-checkbox"
  }), __jsx("div", {
    id: "modal-name",
    className: "modal modal-iframe"
  }, __jsx("label", {
    htmlFor: id + "-check",
    className: "modal-behind"
  }), __jsx("div", {
    className: "modal-inner dark-mode-off-bg "
  }, content(info))), __jsx("label", {
    htmlFor: id + "-check"
  }, trigger(info)));
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "tur0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodePen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3WRr");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CodePen() {
  function dribbbleShot({
    title,
    url,
    img_name,
    description,
    id
  }) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "modal-header"
    }, __jsx("a", {
      href: "https://dribbble.com/Ashleysw",
      className: "modal-icon-link"
    }, __jsx("img", {
      className: "modal-icon",
      src: "/static/mainpage/dribbble/dribbble_icon.png"
    }), __jsx("span", null, "DRIBBBLE")), __jsx("a", {
      href: url
    }, __jsx("h4", {
      className: "modal-title"
    }, title)), __jsx("label", {
      htmlFor: id + "-check"
    }, __jsx("a", {
      className: "close-modal"
    }, "x"))), __jsx("div", {
      className: "dribbble-main"
    }, __jsx("img", {
      src: '/static/mainpage/dribbble/' + img_name + '.png'
    }), __jsx("div", {
      className: "modal-desc"
    }, description)));
  }

  function modalTrigger({
    img_name,
    id,
    title
  }) {
    return __jsx("div", {
      className: id + "-card modal-card hover-grow",
      title: title,
      style: {
        backgroundImage: `url(/static/mainpage/dribbble/${img_name}_thumb.png)`
      }
    });
  }

  const modalList = [{
    id: "dribbble1",
    title: "Social dog walking app",
    img_name: "daily_ui_20",
    url: "https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",
    description: `An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifies' dog walking to keep dog owners engaged and incentivised to walk their dogs. 🐶 @Daily UI`
  }, {
    id: "dribbble2",
    title: "ECommerce dashboard",
    img_name: "daily_ui_18",
    url: "https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",
    description: `An eCommerce analytics UI design for @Daily UI 18. Having experience running an eCommerce store, I took this opportunity to design my ideal analytics page. I used horizontal and vertical grids to try and fit in as much information as I could whilst still letting it breath. 🙂`
  }, {
    id: "dribbble3",
    title: "Social app settings page",
    img_name: "daily_ui_07",
    url: "https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",
    description: `Daily UI #007 - design a settings page!`
  }, {
    id: "dribbble4",
    title: "Home monitoring app dashboard",
    img_name: "daily_ui_21",
    url: "https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020",
    description: `An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. ❄️🔥 @Daily UI`
  }];
  return __jsx("div", {
    id: "dribbbles",
    className: "center-text"
  }, __jsx("h3", {
    className: "center works-subtitle"
  }, "Dribbbles"), __jsx("div", {
    className: "flex-gallery row"
  }, modalList.map((item, index) => __jsx("div", {
    key: index
  }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    info: item,
    content: dribbbleShot,
    trigger: modalTrigger
  })))), __jsx("a", {
    className: "button black-button",
    href: "https://codepen.io/ash_s_west"
  }, "See more on Dribbble"));
}

/***/ })

/******/ });