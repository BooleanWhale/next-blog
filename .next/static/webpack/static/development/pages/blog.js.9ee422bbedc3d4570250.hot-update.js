webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var _components_smallComponents_HeroPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/smallComponents/HeroPost */ \"./pages/components/smallComponents/HeroPost.js\");\n/* harmony import */ var _components_smallComponents_PostsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/smallComponents/PostsList */ \"./pages/components/smallComponents/PostsList.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/blog.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Blog = function Blog(_ref) {\n  var slugs = _ref.slugs,\n      allPosts = _ref.allPosts;\n  var heroPost = allPosts[0];\n  var morePosts = allPosts.slice(1);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    id: \"blog-banner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: \"page-title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, \"Blog\")), __jsx(PostsList, {\n    posts: allPosts,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }));\n};\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Blog)); // This adds the global layout (header & footer ect)\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Blog\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nLmpzPzYxYjgiXSwibmFtZXMiOlsiQmxvZyIsInNsdWdzIiwiYWxsUG9zdHMiLCJoZXJvUG9zdCIsIm1vcmVQb3N0cyIsInNsaWNlIiwiTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXVCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUVsQyxNQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQyxDQUFELENBQXpCO0FBQ0EsTUFBTUUsU0FBUyxHQUFHRixRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLENBQWxCO0FBRUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0E7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEEsRUFVQTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixDQVZBLEVBYUEsTUFBQyxTQUFEO0FBQVcsU0FBSyxFQUFFSCxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkEsQ0FERjtBQWtCRCxDQXZCRDs7S0FBTUYsSTs7QUF5QlMscUVBQUFNLGtFQUFNLENBQUNOLElBQUQsQ0FBckIsRSxDQUE0QiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge2dldEFsbFBvc3RzfSBmcm9tICcuL2FwaS9nZXRQb3N0cydcbmltcG9ydCBIZXJvUG9zdCBmcm9tICcuL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL0hlcm9Qb3N0J1xuaW1wb3J0IE1vcmVQb3N0cyBmcm9tICcuL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL1Bvc3RzTGlzdCdcblxuY29uc3QgQmxvZyA9ICh7c2x1Z3MsIGFsbFBvc3RzfSkgPT4ge1xuXG4gIGNvbnN0IGhlcm9Qb3N0ID0gYWxsUG9zdHNbMF07XG4gIGNvbnN0IG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7LyogPEhlcm9Qb3N0XG4gICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XG4gICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5jb3ZlckltYWdlfVxuICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cbiAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yfVxuICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cbiAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XG4gICAgLz4gKi99XG4gICAgPGRpdiBpZD1cImJsb2ctYmFubmVyXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+QmxvZzwvaDI+XG4gICAgPC9kaXY+XG4gICAgPFBvc3RzTGlzdCBwb3N0cz17YWxsUG9zdHN9Lz5cblxuICAgIDwvZGl2PiBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQoQmxvZykgLy8gVGhpcyBhZGRzIHRoZSBnbG9iYWwgbGF5b3V0IChoZWFkZXIgJiBmb290ZXIgZWN0KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoJ3Bvc3RzJylcblxuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFsgXG4gICAgJ3RpdGxlJyxcbiAgICAnZGF0ZScsXG4gICAgJ2V4Y2VycHQnLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnc2x1ZycsXG4gICAgJ3RhZ3MnXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBcbiAgICAgIHNsdWdzOiBmaWxlcy5tYXAoZmlsZW5hbWUgPT4gZmlsZW5hbWUucmVwbGFjZSgnLm1kJywnJykpLFxuICAgICAgYWxsUG9zdHNcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog.js\n");

/***/ })

})