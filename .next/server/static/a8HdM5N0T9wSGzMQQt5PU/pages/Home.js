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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("O3aY");


/***/ }),

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
  } = info; // if ( info[id] ) {
  //     const { id } = info;
  //     return <>
  //         <input type="checkbox" id={id+"-check"} style={{display:'none'}} className="modal-checkbox"/>
  //         <div id="modal-name" className="modal modal-iframe">
  //             <label htmlFor={id+"-check"} className="modal-behind"></label>
  //             <div className="modal-inner dark-mode-off-bg ">
  //                 {content(info)}
  //             </div>
  //         </div>
  //         <label htmlFor={id+"-check"}>
  //             {trigger(info)}
  //         </label>
  //     </>
  // } else {
  //     return <></>;
  // }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
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

/***/ })

/******/ });