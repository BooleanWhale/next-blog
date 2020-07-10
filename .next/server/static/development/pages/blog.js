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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var _components_BlogPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/BlogPosts */ \"./pages/components/BlogPosts.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import './main.css';\n\nconst Blog = ({\n  slugs\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    className: \"test\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 10\n    }\n  }, \"test\"), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, slugs.map(slug => {\n    return __jsx(\"li\", {\n      key: slug,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 11\n      }\n    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      as: '/blog/' + slug,\n      href: '/blog/' + slug,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, slug)));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Blog)); // This adds the global layout (header & footer ect)\n\nconst getStaticProps = async () => {\n  const files = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readdirSync('posts');\n  return {\n    props: {\n      slugs: files.map(filename => filename.replace('.md', ''))\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiQmxvZyIsInNsdWdzIiwibWFwIiwic2x1ZyIsIkxheW91dCIsImdldFN0YXRpY1Byb3BzIiwiZmlsZXMiLCJmcyIsInJlYWRkaXJTeW5jIiwicHJvcHMiLCJmaWxlbmFtZSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYTtBQUN4QixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTCxFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVdDLElBQUksSUFBSTtBQUNsQixXQUNBO0FBQUksU0FBRyxFQUFFQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBRSxFQUFFLFdBQVNBLElBQW5CO0FBQXlCLFVBQUksRUFBRSxXQUFTQSxJQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxJQUFKLENBREYsQ0FERixDQURBO0FBT0QsR0FSQSxDQURILENBREYsQ0FERjtBQWdCRCxDQWpCRDs7QUFtQmVDLGlJQUFNLENBQUNKLElBQUQsQ0FBckIsRSxDQUE0Qjs7QUFFckIsTUFBTUssY0FBYyxHQUFHLFlBQVk7QUFDeEMsUUFBTUMsS0FBSyxHQUFHQyx5Q0FBRSxDQUFDQyxXQUFILENBQWUsT0FBZixDQUFkO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTFIsV0FBSyxFQUFFSyxLQUFLLENBQUNKLEdBQU4sQ0FBVVEsUUFBUSxJQUFJQSxRQUFRLENBQUNDLE9BQVQsQ0FBaUIsS0FBakIsRUFBdUIsRUFBdkIsQ0FBdEI7QUFERjtBQURGLEdBQVA7QUFLRCxDQVJNIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvTGluaydcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQmxvZ1Bvc3RzIGZyb20gJy4vY29tcG9uZW50cy9CbG9nUG9zdHMnO1xuLy8gaW1wb3J0ICcuL21haW4uY3NzJztcblxuY29uc3QgQmxvZyA9ICh7c2x1Z3N9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj48cCBjbGFzc05hbWU9XCJ0ZXN0XCI+dGVzdDwvcD5cbiAgICAgIDx1bD5cbiAgICAgICAge3NsdWdzLm1hcCggc2x1ZyA9PiB7XG4gICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgIDxsaSBrZXk9e3NsdWd9PlxuICAgICAgICAgICAgPExpbmsgYXM9eycvYmxvZy8nK3NsdWd9IGhyZWY9eycvYmxvZy8nK3NsdWd9PlxuICAgICAgICAgICAgICA8YT57c2x1Z308L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC91bD5cbiAgICAgIHsvKiA8QmxvZ1Bvc3RzLz4gKi99XG4gICAgPC9kaXY+IFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dChCbG9nKSAvLyBUaGlzIGFkZHMgdGhlIGdsb2JhbCBsYXlvdXQgKGhlYWRlciAmIGZvb3RlciBlY3QpXG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygncG9zdHMnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgXG4gICAgICBzbHVnczogZmlsZXMubWFwKGZpbGVuYW1lID0+IGZpbGVuYW1lLnJlcGxhY2UoJy5tZCcsJycpKVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ }),

/***/ "./pages/components/BlogPosts.js":
/*!***************************************!*\
  !*** ./pages/components/BlogPosts.js ***!
  \***************************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/BlogPosts.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import './main.css';\n\nconst BlogPosts = ({\n  slugs\n}) => {\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"test\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 12\n    }\n  }, \"test\"), __jsx(\"ul\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, slugs.map(slug => {\n    return __jsx(\"li\", {\n      key: slug,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 13\n      }\n    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      as: '/blog/' + slug,\n      href: '/blog/' + slug,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 15\n      }\n    }, __jsx(\"a\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }, slug)));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPosts); // This adds the global layout (header & footer ect)\n\nconst getStaticProps = async () => {\n  const files = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readdirSync('posts');\n  return {\n    props: {\n      slugs: files.map(filename => filename.replace('.md', ''))\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0Jsb2dQb3N0cy5qcz9mNzJmIl0sIm5hbWVzIjpbIkJsb2dQb3N0cyIsInNsdWdzIiwibWFwIiwic2x1ZyIsImdldFN0YXRpY1Byb3BzIiwiZmlsZXMiLCJmcyIsInJlYWRkaXJTeW5jIiwicHJvcHMiLCJmaWxlbmFtZSIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBYTtBQUMzQixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSztBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBTCxFQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVdDLElBQUksSUFBSTtBQUNsQixXQUNBO0FBQUksU0FBRyxFQUFFQSxJQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBRSxFQUFFLFdBQVNBLElBQW5CO0FBQXlCLFVBQUksRUFBRSxXQUFTQSxJQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxJQUFKLENBREYsQ0FERixDQURBO0FBT0QsR0FSQSxDQURILENBREYsQ0FERjtBQWVELENBaEJIOztBQWtCaUJILHdFQUFmLEUsQ0FBeUI7O0FBRWxCLE1BQU1JLGNBQWMsR0FBRyxZQUFZO0FBQ3hDLFFBQU1DLEtBQUssR0FBR0MseUNBQUUsQ0FBQ0MsV0FBSCxDQUFlLE9BQWYsQ0FBZDtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xQLFdBQUssRUFBRUksS0FBSyxDQUFDSCxHQUFOLENBQVVPLFFBQVEsSUFBSUEsUUFBUSxDQUFDQyxPQUFULENBQWlCLEtBQWpCLEVBQXVCLEVBQXZCLENBQXRCO0FBREY7QUFERixHQUFQO0FBS0QsQ0FSTSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvQmxvZ1Bvc3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuLy8gaW1wb3J0ICcuL21haW4uY3NzJztcblxuY29uc3QgQmxvZ1Bvc3RzID0gKHtzbHVnc30pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj48cCBjbGFzc05hbWU9XCJ0ZXN0XCI+dGVzdDwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtzbHVncy5tYXAoIHNsdWcgPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGxpIGtleT17c2x1Z30+XG4gICAgICAgICAgICAgIDxMaW5rIGFzPXsnL2Jsb2cvJytzbHVnfSBocmVmPXsnL2Jsb2cvJytzbHVnfT5cbiAgICAgICAgICAgICAgICA8YT57c2x1Z308L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj4gXG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBCbG9nUG9zdHMgLy8gVGhpcyBhZGRzIHRoZSBnbG9iYWwgbGF5b3V0IChoZWFkZXIgJiBmb290ZXIgZWN0KVxuICBcbiAgZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoJ3Bvc3RzJylcbiAgXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IFxuICAgICAgICBzbHVnczogZmlsZXMubWFwKGZpbGVuYW1lID0+IGZpbGVuYW1lLnJlcGxhY2UoJy5tZCcsJycpKVxuICAgICAgfVxuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/BlogPosts.js\n");

/***/ }),

/***/ "./pages/components/Footer.js":
/*!************************************!*\
  !*** ./pages/components/Footer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/Footer.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Header() {\n  return __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, \"TESTING FOOTER\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0Zvb3Rlci5qcz9iYjMwIl0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosQ0FERjtBQUtEIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgICAgPHA+VEVTVElORyBGT09URVI8L3A+XG4gICAgPC9mb290ZXI+IFxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Footer.js\n");

/***/ }),

/***/ "./pages/components/Header.js":
/*!************************************!*\
  !*** ./pages/components/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./smallComponents/Navigation */ \"./pages/components/smallComponents/Navigation.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/Header.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Header() {\n  return __jsx(\"header\", {\n    className: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    className: \"logo\",\n    scr: \"/vercel.svg\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(_smallComponents_Navigation__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }));\n} // import React, {useState} from 'react';\n// import Navigation from './Navigation.js'\n// import DarkModeButton from './smallComps/DarkModeButton.js'\n// export default function Header() {\n//     const [menuActive, setMenuActive] = useState(false);\n//     return <header className=\"mainHeader\">\n//         <div className=\"logo\">logo</div>\n//         <div className={`menu-container ${menuActive && 'active'}`}>\n//             <Navigation/>\n//             {/* <DarkModeButton/> */}\n//         </div>\n//         <i className=\"ionicons icon ion-ios-menu menu-icon\" onClick={()=> setMenuActive(!menuActive)}/>\n//     </header>\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0hlYWRlci5qcz9iMDY5Il0sIm5hbWVzIjpbIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBRTdCLFNBQ0E7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsT0FBRyxFQUFDLGFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREE7QUFNSCxDLENBS0Q7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvSGVhZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vc21hbGxDb21wb25lbnRzL05hdmlnYXRpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc2NyPVwiL3ZlcmNlbC5zdmdcIiAvPlxuICAgICAgICA8TmF2aWdhdGlvbi8+XG4gICAgPC9oZWFkZXI+IFxuICAgIClcbn1cblxuXG5cblxuLy8gaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbi5qcydcbi8vIGltcG9ydCBEYXJrTW9kZUJ1dHRvbiBmcm9tICcuL3NtYWxsQ29tcHMvRGFya01vZGVCdXR0b24uanMnXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbi8vICAgICBjb25zdCBbbWVudUFjdGl2ZSwgc2V0TWVudUFjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbi8vICAgICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJtYWluSGVhZGVyXCI+XG5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+bG9nbzwvZGl2PlxuXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWVudS1jb250YWluZXIgJHttZW51QWN0aXZlICYmICdhY3RpdmUnfWB9PlxuLy8gICAgICAgICAgICAgPE5hdmlnYXRpb24vPlxuLy8gICAgICAgICAgICAgey8qIDxEYXJrTW9kZUJ1dHRvbi8+ICovfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaW9uaWNvbnMgaWNvbiBpb24taW9zLW1lbnUgbWVudS1pY29uXCIgb25DbGljaz17KCk9PiBzZXRNZW51QWN0aXZlKCFtZW51QWN0aXZlKX0vPlxuLy8gICAgIDwvaGVhZGVyPlxuLy8gICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Header.js\n");

/***/ }),

/***/ "./pages/components/Layout.js":
/*!************************************!*\
  !*** ./pages/components/Layout.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ \"./pages/components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ \"./pages/components/Footer.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/Layout.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nfunction Layout(Page) {\n  return props => {\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }\n    }), __jsx(Page, _extends({}, props, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }\n    })), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }\n    }));\n  };\n} // The props are needed incase a page component recieves props\n// Since a Higher Order Compent is a wrapper, props need to pass through it//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0xheW91dC5qcz80MzQyIl0sIm5hbWVzIjpbIkxheW91dCIsIlBhZ2UiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFFbEMsU0FBUUMsS0FBRCxJQUFXO0FBQ2QsV0FDSSxtRUFDSSxNQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVRLE1BQUMsSUFBRCxlQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGUixFQUdJLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLENBREo7QUFPSCxHQVJEO0FBU0gsQyxDQUVEO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQgKFBhZ2UpIHtcblxuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgcmV0dXJuICggXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgICAgICAgICAgICA8UGFnZSB7Li4ucHJvcHN9Lz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG4vLyBUaGUgcHJvcHMgYXJlIG5lZWRlZCBpbmNhc2UgYSBwYWdlIGNvbXBvbmVudCByZWNpZXZlcyBwcm9wc1xuLy8gU2luY2UgYSBIaWdoZXIgT3JkZXIgQ29tcGVudCBpcyBhIHdyYXBwZXIsIHByb3BzIG5lZWQgdG8gcGFzcyB0aHJvdWdoIGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Layout.js\n");

/***/ }),

/***/ "./pages/components/smallComponents/Navigation.js":
/*!********************************************************!*\
  !*** ./pages/components/smallComponents/Navigation.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Navigation; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"next/Link\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/smallComponents/Navigation.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Navigation() {\n  const navLinks = [{\n    title: \"Home\",\n    path: \"/\"\n  }, {\n    title: \"Blog\",\n    path: \"/blog\"\n  }, {\n    title: \"About\",\n    path: \"/about\"\n  }, {\n    title: \"Contact\",\n    path: \"/contact\"\n  }];\n  return __jsx(\"nav\", {\n    className: \"navigation\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, navLinks.map((link, index) => __jsx(\"li\", {\n    key: link.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    as: link.path,\n    href: link.path,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 25\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 63\n    }\n  }, link.title))))));\n} // This component turns an array into a series of links//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9OYXZpZ2F0aW9uLmpzP2NhMTAiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsIm5hdkxpbmtzIiwidGl0bGUiLCJwYXRoIiwibWFwIiwibGluayIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULEdBQXNCO0FBRWpDLFFBQU1DLFFBQVEsR0FBRyxDQUNiO0FBQUNDLFNBQUssRUFBQyxNQUFQO0FBQWVDLFFBQUksRUFBQztBQUFwQixHQURhLEVBRWI7QUFBQ0QsU0FBSyxFQUFDLE1BQVA7QUFBZUMsUUFBSSxFQUFDO0FBQXBCLEdBRmEsRUFHYjtBQUFDRCxTQUFLLEVBQUMsT0FBUDtBQUFnQkMsUUFBSSxFQUFDO0FBQXJCLEdBSGEsRUFJYjtBQUFDRCxTQUFLLEVBQUMsU0FBUDtBQUFrQkMsUUFBSSxFQUFDO0FBQXZCLEdBSmEsQ0FBakI7QUFPQSxTQUFPO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTUYsUUFBUSxDQUFDRyxHQUFULENBQWEsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQ1A7QUFBSSxPQUFHLEVBQUVELElBQUksQ0FBQ0gsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLE1BQUUsRUFBRUcsSUFBSSxDQUFDRixJQUFmO0FBQXFCLFFBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUUsSUFBSSxDQUFDSCxLQUFULENBQXRDLENBREosQ0FETixDQUROLENBREcsQ0FBUDtBQVVILEMsQ0FFRCIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL05hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbigpIHtcblxuICAgIGNvbnN0IG5hdkxpbmtzID0gW1xuICAgICAgICB7dGl0bGU6XCJIb21lXCIsIHBhdGg6XCIvXCJ9LFxuICAgICAgICB7dGl0bGU6XCJCbG9nXCIsIHBhdGg6XCIvYmxvZ1wifSxcbiAgICAgICAge3RpdGxlOlwiQWJvdXRcIiwgcGF0aDpcIi9hYm91dFwifSxcbiAgICAgICAge3RpdGxlOlwiQ29udGFjdFwiLCBwYXRoOlwiL2NvbnRhY3RcIn1cbiAgICBdXG5cbiAgICByZXR1cm4gPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHsgbmF2TGlua3MubWFwKChsaW5rLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2xpbmsudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgYXM9e2xpbmsucGF0aH0gaHJlZj17bGluay5wYXRofT48YT57bGluay50aXRsZX08L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICA8L25hdj5cbn1cblxuLy8gVGhpcyBjb21wb25lbnQgdHVybnMgYW4gYXJyYXkgaW50byBhIHNlcmllcyBvZiBsaW5rcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/smallComponents/Navigation.js\n");

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/blog.js */"./pages/blog.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/Link\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIj9lYzk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvTGluay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/Link\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });