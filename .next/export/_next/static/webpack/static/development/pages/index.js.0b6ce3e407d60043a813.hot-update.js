webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(title, url) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '100%'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url,\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 520,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 41\n      }\n    }, \"See the Pen <a href='https://codepen.io/ash_s_west/pen/abZYvrq'>\", title, \"</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  var modalList = [{\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/embed/abZYvrq?height=265&theme-id=dark&default-tab=css,result\"\n  }, {\n    title: \"Pure-CSS-pulsing-button-effect\",\n    url: \"https://codepen.io/ash_s_west/embed/GRZbvym?height=520&theme-id=dark&default-tab=css,result\"\n  }, {\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/embed/abZYvrq?height=265&theme-id=dark&default-tab=css,result\"\n  }, {\n    title: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 12\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }));\n  }), __jsx(\"iframe\", {\n    height: \"265\",\n    style: \"width: 100%;\",\n    scrolling: \"no\",\n    title: \"Button click pulsing effect - Pure CSS\",\n    src: \"https://codepen.io/ash_s_west/embed/GRZbvym?height=265&theme-id=dark&default-tab=css,result\",\n    frameborder: \"no\",\n    loading: \"lazy\",\n    allowtransparency: \"true\",\n    allowfullscreen: \"true\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, \"See the Pen \", __jsx(\"a\", {\n    href: \"https://codepen.io/ash_s_west/pen/GRZbvym\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 15\n    }\n  }, \"Button click pulsing effect - Pure CSS\"), \" by Ashley Saleem-West (\", __jsx(\"a\", {\n    href: \"https://codepen.io/ash_s_west\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }\n  }, \"@ash_s_west\"), \") on \", __jsx(\"a\", {\n    href: \"https://codepen.io\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 64\n    }\n  }, \"CodePen\"), \".\"));\n}\n_c = CodePen;\n{\n  /* <iframe style={{width: '100%'}} scrolling=\"no\" title={item.title} src={item.url}\n  loading=\"lazy\" allowTransparency=\"true\" allowFullScreen=\"true\" height={520} frameBorder=\"no\">\n     See the Pen &lt;a href='https://codepen.io/ash_s_west/pen/GRZbvym'&gt;{item.title}&lt;/a&gt; by Ashley Saleem-West\n     (&lt;a href='https://codepen.io/ash_s_west'&gt;@ash_s_west&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.\n  </iframe> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1vZGFsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsV0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQUUsV0FBTztBQUNwQyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFO0FBQVIsT0FENkI7QUFFcEMsZUFBUyxFQUFDLElBRjBCO0FBR3BDLFdBQUssRUFBRUYsS0FINkI7QUFJcEMsU0FBRyxFQUFFQyxHQUorQjtBQUtwQyxhQUFPLEVBQUMsTUFMNEI7QUFNcEMsdUJBQWlCLEVBQUMsTUFOa0I7QUFPcEMscUJBQWUsRUFBQyxNQVBvQjtBQVFwQyxZQUFNLEVBQUUsR0FSNEI7QUFTcEMsaUJBQVcsRUFBQyxJQVR3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJFQVVxQ0QsS0FWckMsc0lBQVA7QUFhOUI7O0FBRUQsTUFBTUcsU0FBUyxHQUFHLENBQ2hCO0FBQUNILFNBQUssRUFBQyxRQUFQO0FBQWdCQyxPQUFHLEVBQUM7QUFBcEIsR0FEZ0IsRUFFaEI7QUFBQ0QsU0FBSyxFQUFDLGdDQUFQO0FBQXdDQyxPQUFHLEVBQUM7QUFBNUMsR0FGZ0IsRUFHaEI7QUFBQ0QsU0FBSyxFQUFDLFFBQVA7QUFBZ0JDLE9BQUcsRUFBQztBQUFwQixHQUhnQixFQUloQjtBQUFDRCxTQUFLLEVBQUM7QUFBUCxHQUpnQixDQUFsQjtBQVFFLFNBQU87QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUpHLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUVELElBQWI7QUFBbUIsYUFBTyxFQUFFTixNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEYTtBQUFBLEdBQWQsQ0FGSSxFQVdMO0FBQVEsVUFBTSxFQUFDLEtBQWY7QUFBcUIsU0FBSyxFQUFDLGNBQTNCO0FBQTBDLGFBQVMsRUFBQyxJQUFwRDtBQUF5RCxTQUFLLEVBQUMsd0NBQS9EO0FBQXdHLE9BQUcsRUFBQyw2RkFBNUc7QUFBME0sZUFBVyxFQUFDLElBQXROO0FBQTJOLFdBQU8sRUFBQyxNQUFuTztBQUEwTyxxQkFBaUIsRUFBQyxNQUE1UDtBQUFtUSxtQkFBZSxFQUFDLE1BQW5SO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ1E7QUFBRyxRQUFJLEVBQUMsMkNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FEUiw4QkFFSDtBQUFHLFFBQUksRUFBQywrQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZHLFdBRXlEO0FBQUcsUUFBSSxFQUFDLG9CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGekQsTUFYSyxDQUFQO0FBb0JIO0tBN0N1QkQsTztBQStDeEI7QUFBQzs7Ozs7QUFJWSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vc21hbGxDb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgZnVuY3Rpb24gaUZyYW1lICh0aXRsZSwgdXJsKSB7IHJldHVybiA8aWZyYW1lIFxuICAgIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IFxuICAgIHNjcm9sbGluZz1cIm5vXCIgXG4gICAgdGl0bGU9e3RpdGxlfSBcbiAgICBzcmM9e3VybH1cbiAgICBsb2FkaW5nPVwibGF6eVwiIFxuICAgIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIFxuICAgIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBcbiAgICBoZWlnaHQ9ezUyMH0gXG4gICAgZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL2FiWll2cnEnJmd0O3t0aXRsZX0mbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG4gICAgPC9pZnJhbWU+XG4gIH1cblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAge3RpdGxlOlwic2Vjb25kXCIsdXJsOlwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvZW1iZWQvYWJaWXZycT9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwifSxcbiAgICB7dGl0bGU6XCJQdXJlLUNTUy1wdWxzaW5nLWJ1dHRvbi1lZmZlY3RcIix1cmw6XCJodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9lbWJlZC9HUlpidnltP2hlaWdodD01MjAmdGhlbWUtaWQ9ZGFyayZkZWZhdWx0LXRhYj1jc3MscmVzdWx0XCJ9LFxuICAgIHt0aXRsZTpcInNlY29uZFwiLHVybDpcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL2FiWll2cnE/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIn0sXG4gICAge3RpdGxlOlwidGhpcmRcIn0sXG4gIF1cblxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJjb2RlcGVuc1wiPlxuXG4gICAgICB7bW9kYWxMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPE1vZGFsIGluZm89e2l0ZW19IGNvbnRlbnQ9e2lGcmFtZX0vPlxuICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG5cbiAgICAgIHsvKiA8c2NyaXB0IGRlZmVyIHNyYz1cIi9zdGF0aWMvc2NyaXB0cy9tb2RlbElmcmFtZS5qc1wiPjwvc2NyaXB0PiAqL31cblxuXG4gICAgICA8aWZyYW1lIGhlaWdodD1cIjI2NVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT1cIkJ1dHRvbiBjbGljayBwdWxzaW5nIGVmZmVjdCAtIFB1cmUgQ1NTXCIgc3JjPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvZW1iZWQvR1JaYnZ5bT9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwiIGZyYW1lYm9yZGVyPVwibm9cIiBsb2FkaW5nPVwibGF6eVwiIGFsbG93dHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93ZnVsbHNjcmVlbj1cInRydWVcIj5cbiAgU2VlIHRoZSBQZW4gPGEgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL0dSWmJ2eW0nPkJ1dHRvbiBjbGljayBwdWxzaW5nIGVmZmVjdCAtIFB1cmUgQ1NTPC9hPiBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgKDxhIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0Jz5AYXNoX3Nfd2VzdDwvYT4pIG9uIDxhIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbyc+Q29kZVBlbjwvYT4uXG48L2lmcmFtZT5cblxuXG5cblxuICAgIDwvZGl2PlxufVxuXG57LyogPGlmcmFtZSBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fSBzY3JvbGxpbmc9XCJub1wiIHRpdGxlPXtpdGVtLnRpdGxlfSBzcmM9e2l0ZW0udXJsfVxubG9hZGluZz1cImxhenlcIiBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIiBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCIgaGVpZ2h0PXs1MjB9IGZyYW1lQm9yZGVyPVwibm9cIj5cbiAgICBTZWUgdGhlIFBlbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vR1JaYnZ5bScmZ3Q7e2l0ZW0udGl0bGV9Jmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAoJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QnJmd0O0Bhc2hfc193ZXN0Jmx0Oy9hJmd0Oykgb24gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJyZndDtDb2RlUGVuJmx0Oy9hJmd0Oy5cbjwvaWZyYW1lPiAqL30iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})