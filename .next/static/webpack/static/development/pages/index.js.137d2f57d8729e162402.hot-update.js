webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(title, url) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '70vw',\n        maxWidth: '1000px'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 565,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 47\n      }\n    }, \"See the Pen <a href=\", url, \">Pure CSS dark mode toggle switcher</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  var modalList = [{\n    id: \"Psdsdffect\",\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\"\n  }, {\n    id: \"Pure-CSS-pulsing-button-effect\",\n    title: \"Pure-CSS-pulsing-button-effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 12\n    }\n  }, __jsx(\"style\", {\n    dangerouslySetInnerHTML: {\n      __html: \".referer-warning{display:none;}\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }), modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }));\n  }));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1heFdpZHRoIiwibW9kYWxMaXN0IiwiaWQiLCJfX2h0bWwiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBRWhDLFdBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxHQUF4QixFQUE2QjtBQUFFLFdBQWE7QUFBUSxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFLE1BQVI7QUFBZ0JDLGdCQUFRLEVBQUU7QUFBMUIsT0FBZjtBQUFvRCxlQUFTLEVBQUMsSUFBOUQ7QUFBbUUsV0FBSyxFQUFFSCxLQUExRTtBQUM1QyxTQUFHLEVBQUVDLEdBQUcsR0FBQyxrREFEbUM7QUFDaUIsYUFBTyxFQUFDLE1BRHpCO0FBQ2dDLHVCQUFpQixFQUFDLE1BRGxEO0FBQ3lELHFCQUFlLEVBQUMsTUFEekU7QUFDZ0YsWUFBTSxFQUFFLEdBRHhGO0FBQzZGLGlCQUFXLEVBQUMsSUFEekc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFFcEJBLEdBRm9CLHlLQUFiO0FBSzlCOztBQUVELE1BQU1HLFNBQVMsR0FBRyxDQUNoQjtBQUFDQyxNQUFFLEVBQUMsWUFBSjtBQUFpQkwsU0FBSyxFQUFDLFFBQXZCO0FBQWdDQyxPQUFHLEVBQUM7QUFBcEMsR0FEZ0IsRUFFaEI7QUFBQ0ksTUFBRSxFQUFDLGdDQUFKO0FBQXFDTCxTQUFLLEVBQUMsZ0NBQTNDO0FBQTRFQyxPQUFHLEVBQUM7QUFBaEYsR0FGZ0IsQ0FBbEI7QUFNRSxTQUFPO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQU8sMkJBQXVCLEVBQUU7QUFBQ0ssWUFBTSxFQUFFO0FBQVQsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBR0pGLFNBQVMsQ0FBQ0csR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUVELElBQWI7QUFBbUIsYUFBTyxFQUFFVCxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEYTtBQUFBLEdBQWQsQ0FISSxDQUFQO0FBWUg7S0EzQnVCRCxPIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ob21lUGFnZS9zZWN0aW9uQ29tcG9uZW50cy9Db2RlUGVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9zbWFsbENvbXBvbmVudHMvTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVBlbigpIHtcblxuICBmdW5jdGlvbiBpRnJhbWUgKHRpdGxlLCB1cmwpIHsgcmV0dXJuICAgICAgIDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzcwdncnLCBtYXhXaWR0aDogJzEwMDBweCd9fSBzY3JvbGxpbmc9XCJub1wiIHRpdGxlPXt0aXRsZX0gXG4gIHNyYz17dXJsK1wiP2hlaWdodD0yNjUmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1jc3MscmVzdWx0XCJ9IGxvYWRpbmc9XCJsYXp5XCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dGdWxsU2NyZWVuPVwidHJ1ZVwiIGhlaWdodD17NTY1fSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9e3VybH0mZ3Q7UHVyZSBDU1MgZGFyayBtb2RlIHRvZ2dsZSBzd2l0Y2hlciZsdDsvYSZndDsgYnkgQXNobGV5IFNhbGVlbS1XZXN0XG4gICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuPC9pZnJhbWU+XG4gIH1cblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAge2lkOlwiUHNkc2RmZmVjdFwiLHRpdGxlOlwic2Vjb25kXCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL0dSWmJ2eW1cIn0sXG4gICAge2lkOlwiUHVyZS1DU1MtcHVsc2luZy1idXR0b24tZWZmZWN0XCIsdGl0bGU6XCJQdXJlLUNTUy1wdWxzaW5nLWJ1dHRvbi1lZmZlY3RcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vUndSZWpyYlwifSxcbiAgXVxuXG5cbiAgICByZXR1cm4gPGRpdiBpZD1cImNvZGVwZW5zXCI+XG4gICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IFwiLnJlZmVyZXItd2FybmluZ3tkaXNwbGF5Om5vbmU7fVwiIH19IC8+XG5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17aUZyYW1lfS8+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cblxuICAgICAgey8qIDxzY3JpcHQgZGVmZXIgc3JjPVwiL3N0YXRpYy9zY3JpcHRzL21vZGVsSWZyYW1lLmpzXCI+PC9zY3JpcHQ+ICovfVxuXG4gICAgPC9kaXY+XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})