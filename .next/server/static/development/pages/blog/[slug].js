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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! marked */ \"marked\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/blog/[slug].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n //parses metadata from markdown\n\n //turns markdown into html\n\nconst Post = ({\n  htmlString,\n  data\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }, data.title), __jsx(\"meta\", {\n    title: \"description\",\n    content: data.description,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  })), __jsx(\"div\", {\n    className: \"blog\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: htmlString\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 17\n    }\n  })));\n};\n\nconst getStaticPaths = async () => {\n  const files = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdirSync('posts');\n  console.log('files: ', files);\n  const paths = files.map(filename => ({\n    params: {\n      slug: filename.replace(\".md\", \"\")\n    }\n  }));\n  console.log('paths: ', paths);\n  return {\n    paths,\n    fallback: false\n  };\n}; // this is a new SSG function, it create the path\n\nconst getStaticProps = async ({\n  params: {\n    slug\n  }\n}) => {\n  const markdownWithMeta = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join('posts', slug + '.md')).toString();\n  const parsedMarkdown = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(markdownWithMeta);\n  const htmlString = marked__WEBPACK_IMPORTED_MODULE_5___default()(parsedMarkdown.content);\n  return {\n    props: {\n      htmlString,\n      data: parsedMarkdown.data\n    }\n  };\n}; // this function fetches the data to create the path\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post); // this generates dynamic routes//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS5qcz8yOTM0Il0sIm5hbWVzIjpbIlBvc3QiLCJodG1sU3RyaW5nIiwiZGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJfX2h0bWwiLCJnZXRTdGF0aWNQYXRocyIsImZpbGVzIiwiZnMiLCJyZWFkZGlyU3luYyIsImNvbnNvbGUiLCJsb2ciLCJwYXRocyIsIm1hcCIsImZpbGVuYW1lIiwicGFyYW1zIiwic2x1ZyIsInJlcGxhY2UiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwibWFya2Rvd25XaXRoTWV0YSIsInJlYWRGaWxlU3luYyIsInBhdGgiLCJqb2luIiwidG9TdHJpbmciLCJwYXJzZWRNYXJrZG93biIsIm1hdHRlciIsIm1hcmtlZCIsImNvbnRlbnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUNrQzs7Q0FDTDs7QUFFN0IsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBQ0MsWUFBRDtBQUFhQztBQUFiLENBQUQsS0FBd0I7QUFDakMsU0FDSSxtRUFDSSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFBLElBQUksQ0FBQ0MsS0FBYixDQURKLEVBRUk7QUFBTSxTQUFLLEVBQUMsYUFBWjtBQUEwQixXQUFPLEVBQUVELElBQUksQ0FBQ0UsV0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLDJCQUF1QixFQUFFO0FBQUVDLFlBQU0sRUFBRUo7QUFBVixLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixDQURKO0FBVUYsQ0FYRjs7QUFhTyxNQUFNSyxjQUFjLEdBQUcsWUFBWTtBQUV0QyxRQUFNQyxLQUFLLEdBQUdDLHlDQUFFLENBQUNDLFdBQUgsQ0FBZSxPQUFmLENBQWQ7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1QkosS0FBdkI7QUFFQSxRQUFNSyxLQUFLLEdBQUdMLEtBQUssQ0FBQ00sR0FBTixDQUFVQyxRQUFRLEtBQUs7QUFDakNDLFVBQU0sRUFBRTtBQUNKQyxVQUFJLEVBQUVGLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixLQUFqQixFQUF3QixFQUF4QjtBQURGO0FBRHlCLEdBQUwsQ0FBbEIsQ0FBZDtBQUtBUCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCQyxLQUF2QjtBQUVBLFNBQU87QUFDSEEsU0FERztBQUVITSxZQUFRLEVBQUU7QUFGUCxHQUFQO0FBSUgsQ0FoQk0sQyxDQWlCUDs7QUFFTyxNQUFNQyxjQUFjLEdBQUcsT0FBTztBQUFDSixRQUFNLEVBQUU7QUFBQ0M7QUFBRDtBQUFULENBQVAsS0FBNEI7QUFFdEQsUUFBTUksZ0JBQWdCLEdBQUdaLHlDQUFFLENBQUNhLFlBQUgsQ0FBZ0JDLDJDQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFWLEVBQW1CUCxJQUFJLEdBQUMsS0FBeEIsQ0FBaEIsRUFBZ0RRLFFBQWhELEVBQXpCO0FBRUEsUUFBTUMsY0FBYyxHQUFHQyxrREFBTSxDQUFDTixnQkFBRCxDQUE3QjtBQUVBLFFBQU1uQixVQUFVLEdBQUcwQiw2Q0FBTSxDQUFDRixjQUFjLENBQUNHLE9BQWhCLENBQXpCO0FBRUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDSDVCLGdCQURHO0FBRUhDLFVBQUksRUFBRXVCLGNBQWMsQ0FBQ3ZCO0FBRmxCO0FBREosR0FBUDtBQU1ILENBZE0sQyxDQWVQOztBQUVlRixtRUFBZixFLENBRUEiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IG1hdHRlciBmcm9tICdncmF5LW1hdHRlcic7IC8vcGFyc2VzIG1ldGFkYXRhIGZyb20gbWFya2Rvd25cbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJzsgLy90dXJucyBtYXJrZG93biBpbnRvIGh0bWxcblxuY29uc3QgUG9zdCA9ICh7aHRtbFN0cmluZywgZGF0YX0pID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+e2RhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSB0aXRsZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGF0YS5kZXNjcmlwdGlvbn0vPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWxTdHJpbmcgfX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbil9OyBcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygncG9zdHMnKVxuICAgIGNvbnNvbGUubG9nKCdmaWxlczogJywgZmlsZXMpXG5cbiAgICBjb25zdCBwYXRocyA9IGZpbGVzLm1hcChmaWxlbmFtZSA9PiAoe1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNsdWc6IGZpbGVuYW1lLnJlcGxhY2UoXCIubWRcIiwgXCJcIilcbiAgICAgICAgfVxuICAgIH0pKVxuICAgIGNvbnNvbGUubG9nKCdwYXRoczogJywgcGF0aHMpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXRocyxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXG4gICAgfVxufVxuLy8gdGhpcyBpcyBhIG5ldyBTU0cgZnVuY3Rpb24sIGl0IGNyZWF0ZSB0aGUgcGF0aFxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoe3BhcmFtczoge3NsdWd9fSkgPT4ge1xuXG4gICAgY29uc3QgbWFya2Rvd25XaXRoTWV0YSA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oJ3Bvc3RzJywgc2x1ZysnLm1kJykpLnRvU3RyaW5nKCk7XG5cbiAgICBjb25zdCBwYXJzZWRNYXJrZG93biA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhKVxuXG4gICAgY29uc3QgaHRtbFN0cmluZyA9IG1hcmtlZChwYXJzZWRNYXJrZG93bi5jb250ZW50KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGh0bWxTdHJpbmcsXG4gICAgICAgICAgICBkYXRhOiBwYXJzZWRNYXJrZG93bi5kYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB0aGlzIGZ1bmN0aW9uIGZldGNoZXMgdGhlIGRhdGEgdG8gY3JlYXRlIHRoZSBwYXRoXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG5cbi8vIHRoaXMgZ2VuZXJhdGVzIGR5bmFtaWMgcm91dGVzICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ 4:
/*!************************************!*\
  !*** multi ./pages/blog/[slug].js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/blog/[slug].js */"./pages/blog/[slug].js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIj8yNWY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hcmtlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///marked\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

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