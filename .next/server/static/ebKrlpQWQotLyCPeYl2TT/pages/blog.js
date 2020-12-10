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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/E3z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DateFormatter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/OhW");
/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2w1Q");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags
}) {
  return __jsx("div", {
    className: "blog-post-preview flex-item"
  }, __jsx(_CoverImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slug: slug,
    title: title,
    src: coverImage
  }), __jsx("div", {
    className: "blog-info"
  }, __jsx("div", {
    className: "accented-title"
  }, __jsx("h3", {
    className: "blog-title"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: `/blog/${slug}`,
    href: "/blog/[slug]"
  }, __jsx("a", {
    className: "hover:underline"
  }, title))), __jsx("div", {
    className: tags + "-accent accent"
  })), __jsx("p", {
    className: "blog-text"
  }, excerpt), __jsx("div", {
    className: "blog-info-bottom"
  }, __jsx("div", {
    className: "blog-date"
  }, __jsx(_DateFormatter__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dateString: date
  })), __jsx("div", {
    className: "blog-tags"
  }, __jsx("span", {
    className: tags + "-tag"
  }, tags.toUpperCase())))));
}

/***/ }),

/***/ "/OhW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateFormater; });
// import { parseISO, format } from 'date-fns'
// export default function DateFormater({ dateString }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
// }
function DateFormater({
  dateString
}) {
  return dateString.slice(0, 10);
}

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2w1Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function CoverImage({
  title,
  src,
  slug
}) {
  const image = __jsx("img", {
    src: src,
    alt: `Cover Image for ${title}`,
    className: `cover-image`
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/blog/${slug}`,
    href: "/blog/[slug]"
  }, __jsx("div", {
    className: "blog-image-container",
    style: {
      backgroundImage: `url(${src})`
    },
    "aria-label": title
  })) : __jsx("div", {
    className: "blog-image-container",
    style: {
      backgroundImage: `url(${src})`
    },
    "aria-label": title
  }));
} // className={cn('shadow-small', {
//     'hover:shadow-medium transition-shadow duration-200': slug,
//   })}

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YbiN");


/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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
    src: "static/scripts/darkmode.js"
  }));
}

/***/ }),

/***/ "MiHD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeroPost; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CoverImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2w1Q");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DateFormatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/OhW");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import DateFormater from '../components/date-formater'



function HeroPost({
  // these are the props
  title,
  coverImage,
  date,
  excerpt,
  slug
}) {
  // these were the props
  return __jsx("section", {
    className: "hero-post"
  }, __jsx("div", null, __jsx(_CoverImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    src: coverImage,
    slug: slug
  })), __jsx("div", null, __jsx("div", null, __jsx("h3", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    as: `/blog/${slug}`,
    href: "/blog/[slug]"
  }, __jsx("a", null, title))), __jsx("div", null, __jsx(_DateFormatter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dateString: date
  }))), __jsx("div", null, __jsx("p", null, excerpt, " - this is the post description"))));
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "YbiN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Q0LR");
/* harmony import */ var _api_getPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nZ/2");
/* harmony import */ var _components_smallComponents_HeroPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("MiHD");
/* harmony import */ var _components_smallComponents_PostsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fPyY");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Blog = ({
  slugs,
  allPosts
}) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return __jsx("div", null, __jsx("div", {
    id: "blog-banner"
  }), __jsx("div", {
    className: "container"
  }, __jsx("h2", {
    className: "page-title"
  }, "Blog")), __jsx(_components_smallComponents_PostsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
    posts: allPosts
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"])(Blog)); // This adds the global layout (header & footer ect)

async function getStaticProps() {
  const files = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readdirSync('posts');
  const allPosts = Object(_api_getPosts__WEBPACK_IMPORTED_MODULE_4__["getAllPosts"])(['title', 'date', 'excerpt', 'coverImage', 'slug', 'tags']);
  return {
    props: {
      slugs: files.map(filename => filename.replace('.md', '')),
      allPosts
    }
  };
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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

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

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fPyY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostPreview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/E3z");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function PostsList({
  posts
}) {
  return __jsx("section", {
    className: "more-posts"
  }, __jsx("div", {
    className: "posts-container"
  }, posts.map(post => __jsx(_PostPreview__WEBPACK_IMPORTED_MODULE_1__["default"], {
    key: post.slug,
    title: post.title,
    coverImage: post.coverImage,
    date: post.date,
    author: post.author,
    slug: post.slug,
    excerpt: post.excerpt,
    tags: post.tags
  }))));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mw/K":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nZ/2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostSlugs", function() { return getPostSlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("mw/K");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oyvS");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uo/4");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);



const postsDirectory = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(process.cwd(), 'posts');
function getPostSlugs() {
  return fs__WEBPACK_IMPORTED_MODULE_0___default.a.readdirSync(postsDirectory);
}
function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(postsDirectory, `${realSlug}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf8');
  const {
    data,
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const items = {}; // Ensure only the minimal needed data is exposed

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }

    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}
function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug, fields)) // sort posts by date in descending order
  .sort((post1, post2) => post1.date > post2.date ? '-1' : '1');
  return posts;
}

/***/ }),

/***/ "oyvS":
/***/ (function(module, exports) {

module.exports = require("path");

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

/***/ "uo/4":
/***/ (function(module, exports) {

module.exports = require("gray-matter");

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
    path: "#"
  }, {
    title: "About",
    path: "#about-me"
  }, {
    title: "Contact",
    path: "#contact-me"
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