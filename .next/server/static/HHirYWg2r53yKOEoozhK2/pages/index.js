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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1rmK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CertificationsSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2MaU");
/* harmony import */ var _svg_IconSun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cZx7");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CertificationsSection() {
  const certArr = [{
    name: "Linked in Assessments",
    image: __jsx(_svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    link: "https://www.linkedin.com/in/ashsw/#ember90"
  }, {
    name: "google",
    image: __jsx(_svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    link: "https://www.google.com"
  }, {
    name: "google",
    image: __jsx(_svg_LinkedInLogo__WEBPACK_IMPORTED_MODULE_1__["default"], null),
    link: "https://www.google.com"
  }];
  return __jsx("section", {
    id: "certifications",
    className: "color-off-bg"
  }, __jsx("h2", {
    className: "center"
  }, "Certified with"), __jsx("div", {
    className: "container"
  }, certArr.map((cert, index) => __jsx("a", {
    key: index,
    href: cert.link,
    title: cert.name,
    className: "certification"
  }, cert.image))));
}

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


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

  if (info[id]) {
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
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
  }
}

/***/ }),

/***/ "LO+l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactMeSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ContactMeSection() {
  return __jsx("section", {
    id: "contact-me",
    className: "container"
  }, __jsx("div", {
    id: "contact-me-text"
  }, __jsx("div", null, __jsx("h3", null, "Send me a message!"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar habitant elit magna platea. Curabitur posuere dolor duis adipiscing tortor duis. Pellentesque vitae dictumst tortor ipsum."), __jsx("p", {
    className: "hand-emoji"
  }, "\uD83D\uDC4B"))), __jsx("div", {
    id: "contact-me-box"
  }, __jsx("form", {
    id: "contact-me-form"
  }, __jsx("input", {
    placeholder: "Your name",
    type: "text",
    tabIndex: "1",
    required: true,
    autoFocus: true
  }), __jsx("br", null), __jsx("input", {
    placeholder: "Your Email Address",
    type: "email",
    tabIndex: "2",
    required: true
  }), __jsx("br", null), __jsx("input", {
    placeholder: "Your Phone Number",
    type: "tel",
    tabIndex: "3"
  }), __jsx("br", null), __jsx("textarea", {
    placeholder: "Type your Message Here....",
    tabIndex: "5",
    required: true
  }), __jsx("br", null), __jsx("button", {
    name: "submit",
    type: "submit",
    id: "contact-submit",
    "data-submit": "...Sending"
  }, "Send message")), __jsx("div", {
    className: "contact-bg main-gradient"
  })));
}

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

/***/ "O3aY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_homePage_HeroSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vYuC");
/* harmony import */ var _components_homePage_WhatIDoSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("WDPx");
/* harmony import */ var _components_homePage_WorksSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ko78");
/* harmony import */ var _components_homePage_AboutMeSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("iic1");
/* harmony import */ var _components_homePage_CertificationsSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("1rmK");
/* harmony import */ var _components_homePage_ContactMeSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LO+l");
/* harmony import */ var _components_homePage_SocialLinksSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q8xI");
/* harmony import */ var _components_smallComponents_DarkModeToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("XCE9");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home({
  slugs
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", null, "TEST"), __jsx(_components_homePage_HeroSection__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_components_homePage_WorksSection__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_components_homePage_AboutMeSection__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_homePage_CertificationsSection__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_components_homePage_ContactMeSection__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(_components_homePage_SocialLinksSection__WEBPACK_IMPORTED_MODULE_7__["default"], null));
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

/***/ "Qtx7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SocialLinks() {
  const socialProfiles = [{
    title: 'Code Pen',
    link: 'www.test.com',
    image: '/static/social-icons/dribbble.svg'
  }, {
    title: 'Linked In',
    link: 'www.test.com',
    image: '/static/social-icons/linkedin.svg'
  }, {
    title: 'Code Pen',
    link: 'www.test.com',
    image: '/static/social-icons/codepen.svg'
  }, {
    title: 'Behance',
    link: 'www.test.com',
    image: '/static/social-icons/behance.svg'
  }, {
    title: 'Github',
    link: 'www.test.com',
    image: '/static/social-icons/github.svg'
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, socialProfiles.map((profile, index) => __jsx("a", {
    key: index,
    href: profile.link,
    title: profile.title,
    className: "social-link"
  }, __jsx("img", {
    alt: profile.title,
    src: profile.image
  }))));
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Q0LR");
/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O3aY");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import './main.css';

const Index = () => {
  return __jsx(_Home_js__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"])(Index)); // This adds the global layout (header & footer ect)

/***/ }),

/***/ "WDPx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WhatIDoSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function WhatIDoSection() {
  return __jsx("section", {
    id: "what-i-do"
  });
}

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

/***/ "ZPwZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CodePen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("3WRr");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CodePen() {
  function codePenShot({
    title,
    url,
    id
  }) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "modal-header"
    }, __jsx("a", {
      href: "https://codepen.io/ash_s_west",
      className: "modal-icon-link"
    }, __jsx("img", {
      className: "modal-icon",
      src: "/static/mainpage/codepen/codepen_icon.svg"
    }), __jsx("span", null, "CODEPEN")), __jsx("a", {
      href: "https://codepen.io/ash_s_west/pen/" + url
    }, __jsx("h4", {
      className: "modal-title"
    }, title)), __jsx("label", {
      htmlFor: id + "-check"
    }, __jsx("a", {
      className: "close-modal"
    }, "x"))), __jsx("iframe", {
      style: {
        width: '70vw',
        maxWidth: '1000px',
        minHeight: '70vh'
      },
      scrolling: "no",
      title: "Button click pulsing effect - Pure CSS",
      src: "https://codepen.io/ash_s_west/embed/" + url + "?height=265&theme-id=dark&default-tab=css,result",
      loading: "lazy",
      allowtransparency: "true",
      allowFullScreen: true,
      height: 265,
      frameBorder: "no"
    }, "See the Pen <a href=", "https://codepen.io/ash_s_west/pen/" + url, ">", title, "</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>."));
  }

  function modalTrigger({
    img,
    id,
    title
  }) {
    return __jsx("div", {
      className: id + "-card modal-card hover-grow",
      title: title,
      style: {
        backgroundImage: `url(${img})`
      }
    });
  }

  const modalList = [{
    id: "codepen1",
    title: "Pure CSS pulsing button effect",
    url: "GRZbvym",
    img: "/static/mainpage/codepen-1.png"
  }, {
    id: "codepen2",
    title: "Pure CSS dark mode switch",
    url: "RwRejrb",
    img: "/static/mainpage/codepen-1.png"
  }, {
    id: "codepen3",
    title: "Pure CSS pulsing button effect",
    url: "GRZbvym",
    img: "/static/mainpage/codepen-1.png"
  }, {
    id: "codepen4",
    title: "Pure CSS dark mode switch",
    url: "RwRejrb",
    img: "/static/mainpage/codepen-1.png"
  }];
  return __jsx("div", {
    id: "codepens",
    className: "center-text"
  }, __jsx("h3", {
    className: "center works-subtitle"
  }, "CodePens"), __jsx("div", {
    className: "flex-gallery row"
  }, modalList.map((item, index) => __jsx("div", {
    key: index
  }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    info: item,
    content: codePenShot,
    trigger: modalTrigger
  })))), __jsx("a", {
    className: "button black-button",
    href: "https://codepen.io/ash_s_west"
  }, "See more on CodePen"));
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

/***/ "iic1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AboutMeSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function AboutMeSection() {
  return __jsx("section", {
    id: "about-me",
    className: "container"
  }, __jsx("div", {
    id: "about-me-image-container"
  }, __jsx("div", {
    id: "about-me-image",
    style: {
      backgroundImage: "url(/static/test-person.jpg)"
    }
  })), __jsx("div", {
    id: "about-me-info-cont"
  }, __jsx("div", {
    id: "about-me-info"
  }, __jsx("h2", null, "About Me"), __jsx("p", null, "Hi, my name is Ashley Saleem-West. I'm a web developer based St Albans, a wonderful town near London in the UK. I describe myself as a passionately user-focused developer who loves coding, design, and the web platform."), __jsx("p", null, "Starting as a designer and becoming acquainted with web development through personal E-Commerce projects before moving onto E-Service Europe Ltd, to redesign and develop their E-Commerce website."), __jsx("p", null, " With experiece in MySQL databases and React.JS, I am always pushing myself to learn more and have been making use of the time saved from commuting by participating in Harvard's CS50 course for Web Programming."), __jsx("p", null, "I think of performance and design as two sides of the same coin, which is why I push for great user experience without a heavy overhead. I like to ask myself how I can make an application easy, enjoyable,and fast to use."), __jsx("p", null, "When I'm not coding or designing, I can be found drawing or caring for my ", __jsx("a", {
    href: "https://www.instagram.com/jaqenclownfish/"
  }, "two adorable clownfish.")))));
}

/***/ }),

/***/ "ko78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorksSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sectionComponents_CodePen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZPwZ");
/* harmony import */ var _sectionComponents_Dribbble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tur0");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WorksSection() {
  return __jsx("section", {
    id: "works"
  }, __jsx("div", {
    id: "works-about",
    className: "container"
  }, __jsx("h2", null, "My works")), __jsx(_sectionComponents_CodePen__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_sectionComponents_Dribbble__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "q8xI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialLinksSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _smallComponents_SocialLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Qtx7");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SocialLinksSection() {
  return __jsx("section", {
    id: "contact-information"
  }, __jsx("h4", null, "Stay Connected"), __jsx("h3", null, __jsx("a", null, "hello@ashleysw.com")), __jsx("p", null, __jsx("a", null, "(+44)7-219-414-822")), __jsx("div", {
    id: "social-links"
  }, __jsx(_smallComponents_SocialLinks__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
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

/***/ "vYuC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function HeroSection() {
  return __jsx("section", {
    id: "hero",
    className: "container"
  }, __jsx("div", {
    className: "hero-info"
  }, __jsx("h2", null, "Hi, I'm Ashley"), __jsx("h1", null, "I make things for the web and make it look good while I'm at it."), __jsx("a", {
    href: "#contact-me",
    className: "button accent-button"
  }, "Let's talk")), __jsx("div", {
    className: "img-container"
  }, __jsx("img", {
    className: "profile-pic shadow",
    src: "/static/mainpage/ashley-saleem-west.jpg"
  })));
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
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import Link from 'next/Link';
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
  }, __jsx("ul", null, navLinks.map((navLink, index) => __jsx("li", {
    key: navLink.title
  }, __jsx("a", {
    href: navLink.path
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