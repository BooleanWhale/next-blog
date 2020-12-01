webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(title, url) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '100%'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url,\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 520,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 41\n      }\n    }, \"See the Pen <a href='https://codepen.io/ash_s_west/pen/GRZbvym'>\", title, \"</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  var modalList = [{\n    title: \"Pure-CSS-pulsing-button-effect\",\n    url: \"https://codepen.io/ash_s_west/embed/GRZbvym?height=520&theme-id=dark&default-tab=css,result\",\n    content: \"test\"\n  }, {\n    title: \"second\"\n  }, {\n    title: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 12\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      props: item,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }\n    }));\n  }), __jsx(\"script\", {\n    defer: true,\n    src: \"/static/scripts/modelIframe.js\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }));\n}\n_c = CodePen;\n{\n  /* <iframe style={{width: '100%'}} scrolling=\"no\" title={item.title} src={item.url}\n  loading=\"lazy\" allowTransparency=\"true\" allowFullScreen=\"true\" height={520} frameBorder=\"no\">\n     See the Pen &lt;a href='https://codepen.io/ash_s_west/pen/GRZbvym'&gt;{item.title}&lt;/a&gt; by Ashley Saleem-West\n     (&lt;a href='https://codepen.io/ash_s_west'&gt;@ash_s_west&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.\n  </iframe> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1vZGFsTGlzdCIsImNvbnRlbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBRWhDLFdBQVNDLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxHQUF4QixFQUE2QjtBQUFFLFdBQU87QUFDcEMsV0FBSyxFQUFFO0FBQUNDLGFBQUssRUFBRTtBQUFSLE9BRDZCO0FBRXBDLGVBQVMsRUFBQyxJQUYwQjtBQUdwQyxXQUFLLEVBQUVGLEtBSDZCO0FBSXBDLFNBQUcsRUFBRUMsR0FKK0I7QUFLcEMsYUFBTyxFQUFDLE1BTDRCO0FBTXBDLHVCQUFpQixFQUFDLE1BTmtCO0FBT3BDLHFCQUFlLEVBQUMsTUFQb0I7QUFRcEMsWUFBTSxFQUFFLEdBUjRCO0FBU3BDLGlCQUFXLEVBQUMsSUFUd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRUFVcUNELEtBVnJDLHNJQUFQO0FBYTlCOztBQUVELE1BQU1HLFNBQVMsR0FBRyxDQUNoQjtBQUFDSCxTQUFLLEVBQUMsZ0NBQVA7QUFBd0NDLE9BQUcsRUFBQyw2RkFBNUM7QUFBMElHLFdBQU8sRUFBQztBQUFsSixHQURnQixFQUVoQjtBQUFDSixTQUFLLEVBQUM7QUFBUCxHQUZnQixFQUdoQjtBQUFDQSxTQUFLLEVBQUM7QUFBUCxHQUhnQixDQUFsQjtBQU9FLFNBQU87QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRU5HLFNBQVMsQ0FBQ0UsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVFLE1BQUMsOERBQUQ7QUFBTyxXQUFLLEVBQUVELElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLENBRGE7QUFBQSxHQUFkLENBRk0sRUFRTDtBQUFRLFNBQUssTUFBYjtBQUFjLE9BQUcsRUFBQyxnQ0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJLLENBQVA7QUFXSDtLQW5DdUJSLE87QUFxQ3hCO0FBQUM7Ozs7O0FBSVkiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL3NtYWxsQ29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlUGVuKCkge1xuXG4gIGZ1bmN0aW9uIGlGcmFtZSAodGl0bGUsIHVybCkgeyByZXR1cm4gPGlmcmFtZSBcbiAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fSBcbiAgICBzY3JvbGxpbmc9XCJub1wiIFxuICAgIHRpdGxlPXt0aXRsZX0gXG4gICAgc3JjPXt1cmx9XG4gICAgbG9hZGluZz1cImxhenlcIiBcbiAgICBhbGxvd1RyYW5zcGFyZW5jeT1cInRydWVcIiBcbiAgICBhbGxvd0Z1bGxTY3JlZW49XCJ0cnVlXCIgXG4gICAgaGVpZ2h0PXs1MjB9IFxuICAgIGZyYW1lQm9yZGVyPVwibm9cIj5cbiAgICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9HUlpidnltJyZndDt7dGl0bGV9Jmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuICAgIDwvaWZyYW1lPlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHt0aXRsZTpcIlB1cmUtQ1NTLXB1bHNpbmctYnV0dG9uLWVmZmVjdFwiLHVybDpcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL0dSWmJ2eW0/aGVpZ2h0PTUyMCZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIixjb250ZW50OlwidGVzdFwifSxcbiAgICB7dGl0bGU6XCJzZWNvbmRcIn0sXG4gICAge3RpdGxlOlwidGhpcmRcIn0sXG4gIF1cblxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJjb2RlcGVuc1wiPlxuXG4gICAge21vZGFsTGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgICAgPGRpdiBrZXk9e2luZGV4fT5cblxuICAgICAgICA8TW9kYWwgcHJvcHM9e2l0ZW19Lz5cbiAgICAgIDwvZGl2Pil9XG5cbiAgICAgIDxzY3JpcHQgZGVmZXIgc3JjPVwiL3N0YXRpYy9zY3JpcHRzL21vZGVsSWZyYW1lLmpzXCI+PC9zY3JpcHQ+XG5cbiAgICA8L2Rpdj5cbn1cblxuey8qIDxpZnJhbWUgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gc2Nyb2xsaW5nPVwibm9cIiB0aXRsZT17aXRlbS50aXRsZX0gc3JjPXtpdGVtLnVybH1cbmxvYWRpbmc9XCJsYXp5XCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dGdWxsU2NyZWVuPVwidHJ1ZVwiIGhlaWdodD17NTIwfSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvcGVuL0dSWmJ2eW0nJmd0O3tpdGVtLnRpdGxlfSZsdDsvYSZndDsgYnkgQXNobGV5IFNhbGVlbS1XZXN0XG4gICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG48L2lmcmFtZT4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})