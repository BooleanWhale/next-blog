webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(title, url) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '100%'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url,\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 520,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 41\n      }\n    }, \"See the Pen <a href='https://codepen.io/ash_s_west/pen/abZYvrq'>\", title, \"</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  var modalList = [{\n    title: \"Pure-CSS-pulsing-button-effect\",\n    url: \"https://codepen.io/ash_s_west/embed/GRZbvym?height=520&theme-id=dark&default-tab=css,result\"\n  }, {\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/embed/abZYvrq?height=265&theme-id=dark&default-tab=css,result\"\n  }, {\n    title: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }\n    }));\n  }), __jsx(\"script\", {\n    defer: true,\n    src: \"/static/scripts/modelIframe.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }));\n}\n_c = CodePen;\n{\n  /* <iframe style={{width: '100%'}} scrolling=\"no\" title={item.title} src={item.url}\n  loading=\"lazy\" allowTransparency=\"true\" allowFullScreen=\"true\" height={520} frameBorder=\"no\">\n     See the Pen &lt;a href='https://codepen.io/ash_s_west/pen/GRZbvym'&gt;{item.title}&lt;/a&gt; by Ashley Saleem-West\n     (&lt;a href='https://codepen.io/ash_s_west'&gt;@ash_s_west&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.\n  </iframe> */\n}\n\n__jsx(\"iframe\", {\n  height: \"265\",\n  style: \"width: 100%;\",\n  scrolling: \"no\",\n  title: \"Dark mode switch\",\n  src: \"https://codepen.io/ash_s_west/embed/abZYvrq?height=265&theme-id=dark&default-tab=css,result\",\n  frameborder: \"no\",\n  loading: \"lazy\",\n  allowtransparency: \"true\",\n  allowfullscreen: \"true\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 1\n  }\n}, \"See the Pen \", __jsx(\"a\", {\n  href: \"https://codepen.io/ash_s_west/pen/abZYvrq\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 49,\n    columnNumber: 15\n  }\n}, \"Dark mode switch\"), \" by Ashley Saleem-West (\", __jsx(\"a\", {\n  href: \"https://codepen.io/ash_s_west\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 4\n  }\n}, \"@ash_s_west\"), \") on \", __jsx(\"a\", {\n  href: \"https://codepen.io\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 64\n  }\n}, \"CodePen\"), \".\");\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1vZGFsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsV0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQUUsV0FBTztBQUNwQyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFO0FBQVIsT0FENkI7QUFFcEMsZUFBUyxFQUFDLElBRjBCO0FBR3BDLFdBQUssRUFBRUYsS0FINkI7QUFJcEMsU0FBRyxFQUFFQyxHQUorQjtBQUtwQyxhQUFPLEVBQUMsTUFMNEI7QUFNcEMsdUJBQWlCLEVBQUMsTUFOa0I7QUFPcEMscUJBQWUsRUFBQyxNQVBvQjtBQVFwQyxZQUFNLEVBQUUsR0FSNEI7QUFTcEMsaUJBQVcsRUFBQyxJQVR3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQVVxQ0QsS0FWckMsc0lBQVA7QUFhOUI7O0FBRUQsTUFBTUcsU0FBUyxHQUFHLENBQ2hCO0FBQUNILFNBQUssRUFBQyxnQ0FBUDtBQUF3Q0MsT0FBRyxFQUFDO0FBQTVDLEdBRGdCLEVBRWhCO0FBQUNELFNBQUssRUFBQyxRQUFQO0FBQWdCQyxPQUFHLEVBQUM7QUFBcEIsR0FGZ0IsRUFHaEI7QUFBQ0QsU0FBSyxFQUFDO0FBQVAsR0FIZ0IsQ0FBbEI7QUFPRSxTQUFPO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVKRyxTQUFTLENBQUNDLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU1DLEtBQU47QUFBQSxXQUNiO0FBQUssU0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQU8sVUFBSSxFQUFFRCxJQUFiO0FBQW1CLGFBQU8sRUFBRU4sTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFkLENBRkksRUFRTDtBQUFRLFNBQUssTUFBYjtBQUFjLE9BQUcsRUFBQyxnQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJLLENBQVA7QUFXSDtLQW5DdUJELE87QUFxQ3hCO0FBQUM7Ozs7O0FBSVk7O0FBSWI7QUFBUSxRQUFNLEVBQUMsS0FBZjtBQUFxQixPQUFLLEVBQUMsY0FBM0I7QUFBMEMsV0FBUyxFQUFDLElBQXBEO0FBQXlELE9BQUssRUFBQyxrQkFBL0Q7QUFBa0YsS0FBRyxFQUFDLDZGQUF0RjtBQUFvTCxhQUFXLEVBQUMsSUFBaE07QUFBcU0sU0FBTyxFQUFDLE1BQTdNO0FBQW9OLG1CQUFpQixFQUFDLE1BQXRPO0FBQTZPLGlCQUFlLEVBQUMsTUFBN1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYztBQUFHLE1BQUksRUFBQywyQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURkLDhCQUVHO0FBQUcsTUFBSSxFQUFDLCtCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkgsV0FFK0Q7QUFBRyxNQUFJLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUYvRCIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vc21hbGxDb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgZnVuY3Rpb24gaUZyYW1lICh0aXRsZSwgdXJsKSB7IHJldHVybiA8aWZyYW1lIFxuICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IFxuICAgIHNjcm9sbGluZz1cIm5vXCIgXG4gICAgdGl0bGU9e3RpdGxlfSBcbiAgICBzcmM9e3VybH1cbiAgICBsb2FkaW5nPVwibGF6eVwiIFxuICAgIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIFxuICAgIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBcbiAgICBoZWlnaHQ9ezUyMH0gXG4gICAgZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL2FiWll2cnEnJmd0O3t0aXRsZX0mbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG4gICAgPC9pZnJhbWU+XG4gIH1cblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAge3RpdGxlOlwiUHVyZS1DU1MtcHVsc2luZy1idXR0b24tZWZmZWN0XCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvZW1iZWQvR1JaYnZ5bT9oZWlnaHQ9NTIwJnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSxcbiAgICB7dGl0bGU6XCJzZWNvbmRcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9lbWJlZC9hYlpZdnJxP2hlaWdodD0yNjUmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1jc3MscmVzdWx0XCJ9LFxuICAgIHt0aXRsZTpcInRoaXJkXCJ9LFxuICBdXG5cblxuICAgIHJldHVybiA8ZGl2IGlkPVwiY29kZXBlbnNcIj5cblxuICAgICAge21vZGFsTGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxNb2RhbCBpbmZvPXtpdGVtfSBjb250ZW50PXtpRnJhbWV9Lz5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuXG4gICAgICA8c2NyaXB0IGRlZmVyIHNyYz1cIi9zdGF0aWMvc2NyaXB0cy9tb2RlbElmcmFtZS5qc1wiPjwvc2NyaXB0PlxuXG4gICAgPC9kaXY+XG59XG5cbnsvKiA8aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9e2l0ZW0udGl0bGV9IHNyYz17aXRlbS51cmx9XG5sb2FkaW5nPVwibGF6eVwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBoZWlnaHQ9ezUyMH0gZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9HUlpidnltJyZndDt7aXRlbS50aXRsZX0mbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuPC9pZnJhbWU+ICovfVxuXG5cblxuPGlmcmFtZSBoZWlnaHQ9XCIyNjVcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9XCJEYXJrIG1vZGUgc3dpdGNoXCIgc3JjPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvZW1iZWQvYWJaWXZycT9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwiIGZyYW1lYm9yZGVyPVwibm9cIiBsb2FkaW5nPVwibGF6eVwiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIj5cbiAgU2VlIHRoZSBQZW4gPGEgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL2FiWll2cnEnPkRhcmsgbW9kZSBzd2l0Y2g8L2E+IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAoPGEgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QnPkBhc2hfc193ZXN0PC9hPikgb24gPGEgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJz5Db2RlUGVuPC9hPi5cbjwvaWZyYW1lPiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})