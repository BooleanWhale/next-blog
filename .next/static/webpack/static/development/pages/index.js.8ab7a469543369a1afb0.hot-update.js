webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function iFrame(title, url) {\n    return __jsx(\"iframe\", {\n      style: {\n        width: '100%'\n      },\n      scrolling: \"no\",\n      title: title,\n      src: url + \"?height=265&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 520,\n      frameBorder: \"no\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 41\n      }\n    }, \"See the Pen <a href=\", url, \">\", title, \"</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\");\n  }\n\n  var modalList = [{\n    title: \"second\",\n    url: \"https://codepen.io/ash_s_west/pen/GRZbvym\"\n  }, {\n    title: \"Pure-CSS-pulsing-button-effect\",\n    url: \"https://codepen.io/ash_s_west/pen/RwRejrb\"\n  }, {\n    title: \"second\",\n    url: \"\"\n  }, {\n    title: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 12\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: iFrame,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 11\n      }\n    }));\n  }), __jsx(\"iframe\", {\n    style: {\n      width: '100%'\n    },\n    scrolling: \"no\",\n    title: \"Button click pulsing effect - Pure CSS\",\n    src: \"https://codepen.io/ash_s_west/embed/GRZbvym?height=265&theme-id=dark&default-tab=css,result\",\n    loading: \"lazy\",\n    allowTransparency: \"true\",\n    allowFullScreen: \"true\",\n    height: 265,\n    frameBorder: \"no\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \"See the Pen <a href='https://codepen.io/ash_s_west/pen/GRZbvym'>Button click pulsing effect - Pure CSS</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\"), __jsx(\"iframe\", {\n    style: {\n      width: '100%'\n    },\n    scrolling: \"no\",\n    title: \"Pure CSS dark mode toggle switcher\",\n    src: \"https://codepen.io/ash_s_west/embed/RwRejrb?height=265&theme-id=dark&default-tab=css,result\",\n    loading: \"lazy\",\n    allowTransparency: \"true\",\n    allowFullScreen: \"true\",\n    height: 265,\n    frameBorder: \"no\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, \"See the Pen <a href='https://codepen.io/ash_s_west/pen/RwRejrb'>Pure CSS dark mode toggle switcher</a> by Ashley Saleem-West (<a href='https://codepen.io/ash_s_west'>@ash_s_west</a>) on <a href='https://codepen.io'>CodePen</a>.\"));\n}\n_c = CodePen;\n{\n  /* <iframe style={{width: '100%'}} scrolling=\"no\" title={item.title} src={item.url}\n  loading=\"lazy\" allowTransparency=\"true\" allowFullScreen=\"true\" height={520} frameBorder=\"no\">\n     See the Pen &lt;a href='https://codepen.io/ash_s_west/pen/GRZbvym'&gt;{item.title}&lt;/a&gt; by Ashley Saleem-West\n     (&lt;a href='https://codepen.io/ash_s_west'&gt;@ash_s_west&lt;/a&gt;) on &lt;a href='https://codepen.io'&gt;CodePen&lt;/a&gt;.\n  </iframe> */\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwiaUZyYW1lIiwidGl0bGUiLCJ1cmwiLCJ3aWR0aCIsIm1vZGFsTGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsV0FBU0MsTUFBVCxDQUFpQkMsS0FBakIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQUUsV0FBTztBQUNwQyxXQUFLLEVBQUU7QUFBQ0MsYUFBSyxFQUFFO0FBQVIsT0FENkI7QUFFcEMsZUFBUyxFQUFDLElBRjBCO0FBR3BDLFdBQUssRUFBRUYsS0FINkI7QUFJcEMsU0FBRyxFQUFFQyxHQUFHLEdBQUMsa0RBSjJCO0FBS3BDLGFBQU8sRUFBQyxNQUw0QjtBQU1wQyx1QkFBaUIsRUFBQyxNQU5rQjtBQU9wQyxxQkFBZSxFQUFDLE1BUG9CO0FBUXBDLFlBQU0sRUFBRSxHQVI0QjtBQVNwQyxpQkFBVyxFQUFDLElBVHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVVZBLEdBVlUsT0FVREQsS0FWQyxzSUFBUDtBQWE5Qjs7QUFFRCxNQUFNRyxTQUFTLEdBQUcsQ0FDaEI7QUFBQ0gsU0FBSyxFQUFDLFFBQVA7QUFBZ0JDLE9BQUcsRUFBQztBQUFwQixHQURnQixFQUVoQjtBQUFDRCxTQUFLLEVBQUMsZ0NBQVA7QUFBd0NDLE9BQUcsRUFBQztBQUE1QyxHQUZnQixFQUdoQjtBQUFDRCxTQUFLLEVBQUMsUUFBUDtBQUFnQkMsT0FBRyxFQUFDO0FBQXBCLEdBSGdCLEVBSWhCO0FBQUNELFNBQUssRUFBQztBQUFQLEdBSmdCLENBQWxCO0FBUUUsU0FBTztBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSkcsU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFPLFVBQUksRUFBRUQsSUFBYjtBQUFtQixhQUFPLEVBQUVOLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURhO0FBQUEsR0FBZCxDQUZJLEVBVUw7QUFBUSxTQUFLLEVBQUU7QUFBQ0csV0FBSyxFQUFFO0FBQVIsS0FBZjtBQUFnQyxhQUFTLEVBQUMsSUFBMUM7QUFBK0MsU0FBSyxFQUFDLHdDQUFyRDtBQUE4RixPQUFHLEVBQUMsNkZBQWxHO0FBQWdNLFdBQU8sRUFBQyxNQUF4TTtBQUErTSxxQkFBaUIsRUFBQyxNQUFqTztBQUF3TyxtQkFBZSxFQUFDLE1BQXhQO0FBQStQLFVBQU0sRUFBRSxHQUF2UTtBQUE0USxlQUFXLEVBQUMsSUFBeFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrT0FWSyxFQWVMO0FBQVEsU0FBSyxFQUFFO0FBQUNBLFdBQUssRUFBRTtBQUFSLEtBQWY7QUFBZ0MsYUFBUyxFQUFDLElBQTFDO0FBQStDLFNBQUssRUFBQyxvQ0FBckQ7QUFBMEYsT0FBRyxFQUFDLDZGQUE5RjtBQUE0TCxXQUFPLEVBQUMsTUFBcE07QUFBMk0scUJBQWlCLEVBQUMsTUFBN047QUFBb08sbUJBQWUsRUFBQyxNQUFwUDtBQUEyUCxVQUFNLEVBQUUsR0FBblE7QUFBd1EsZUFBVyxFQUFDLElBQXBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMk9BZkssQ0FBUDtBQXNCSDtLQS9DdUJKLE87QUFpRHhCO0FBQUM7Ozs7O0FBSVkiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL3NtYWxsQ29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlUGVuKCkge1xuXG4gIGZ1bmN0aW9uIGlGcmFtZSAodGl0bGUsIHVybCkgeyByZXR1cm4gPGlmcmFtZSBcbiAgICBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fSBcbiAgICBzY3JvbGxpbmc9XCJub1wiIFxuICAgIHRpdGxlPXt0aXRsZX0gXG4gICAgc3JjPXt1cmwrXCI/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIn1cbiAgICBsb2FkaW5nPVwibGF6eVwiIFxuICAgIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIFxuICAgIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBcbiAgICBoZWlnaHQ9ezUyMH0gXG4gICAgZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgICAgU2VlIHRoZSBQZW4gJmx0O2EgaHJlZj17dXJsfSZndDt7dGl0bGV9Jmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuICAgIDwvaWZyYW1lPlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHt0aXRsZTpcInNlY29uZFwiLHVybDpcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9HUlpidnltXCJ9LFxuICAgIHt0aXRsZTpcIlB1cmUtQ1NTLXB1bHNpbmctYnV0dG9uLWVmZmVjdFwiLHVybDpcImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9Sd1JlanJiXCJ9LFxuICAgIHt0aXRsZTpcInNlY29uZFwiLHVybDpcIlwifSxcbiAgICB7dGl0bGU6XCJ0aGlyZFwifSxcbiAgXVxuXG5cbiAgICByZXR1cm4gPGRpdiBpZD1cImNvZGVwZW5zXCI+XG5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17aUZyYW1lfS8+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cblxuICAgICAgey8qIDxzY3JpcHQgZGVmZXIgc3JjPVwiL3N0YXRpYy9zY3JpcHRzL21vZGVsSWZyYW1lLmpzXCI+PC9zY3JpcHQ+ICovfVxuXG4gICAgICA8aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9XCJCdXR0b24gY2xpY2sgcHVsc2luZyBlZmZlY3QgLSBQdXJlIENTU1wiIHNyYz1cImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL0dSWmJ2eW0/aGVpZ2h0PTI2NSZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIiBsb2FkaW5nPVwibGF6eVwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBoZWlnaHQ9ezI2NX0gZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgICAgICBTZWUgdGhlIFBlbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdC9wZW4vR1JaYnZ5bScmZ3Q7QnV0dG9uIGNsaWNrIHB1bHNpbmcgZWZmZWN0IC0gUHVyZSBDU1MmbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICAgICAoJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QnJmd0O0Bhc2hfc193ZXN0Jmx0Oy9hJmd0Oykgb24gJmx0O2EgaHJlZj0naHR0cHM6Ly9jb2RlcGVuLmlvJyZndDtDb2RlUGVuJmx0Oy9hJmd0Oy5cbiAgICAgIDwvaWZyYW1lPlxuXG4gICAgICA8aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9XCJQdXJlIENTUyBkYXJrIG1vZGUgdG9nZ2xlIHN3aXRjaGVyXCIgc3JjPVwiaHR0cHM6Ly9jb2RlcGVuLmlvL2FzaF9zX3dlc3QvZW1iZWQvUndSZWpyYj9oZWlnaHQ9MjY1JnRoZW1lLWlkPWRhcmsmZGVmYXVsdC10YWI9Y3NzLHJlc3VsdFwiIGxvYWRpbmc9XCJsYXp5XCIgYWxsb3dUcmFuc3BhcmVuY3k9XCJ0cnVlXCIgYWxsb3dGdWxsU2NyZWVuPVwidHJ1ZVwiIGhlaWdodD17MjY1fSBmcmFtZUJvcmRlcj1cIm5vXCI+XG4gICAgICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9Sd1JlanJiJyZndDtQdXJlIENTUyBkYXJrIG1vZGUgdG9nZ2xlIHN3aXRjaGVyJmx0Oy9hJmd0OyBieSBBc2hsZXkgU2FsZWVtLVdlc3RcbiAgICAgICAgKCZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0JyZndDtAYXNoX3Nfd2VzdCZsdDsvYSZndDspIG9uICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pbycmZ3Q7Q29kZVBlbiZsdDsvYSZndDsuXG4gICAgICA8L2lmcmFtZT5cblxuXG4gICAgPC9kaXY+XG59XG5cbnsvKiA8aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9e2l0ZW0udGl0bGV9IHNyYz17aXRlbS51cmx9XG5sb2FkaW5nPVwibGF6eVwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBoZWlnaHQ9ezUyMH0gZnJhbWVCb3JkZXI9XCJub1wiPlxuICAgIFNlZSB0aGUgUGVuICZsdDthIGhyZWY9J2h0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L3Blbi9HUlpidnltJyZndDt7aXRlbS50aXRsZX0mbHQ7L2EmZ3Q7IGJ5IEFzaGxleSBTYWxlZW0tV2VzdFxuICAgICgmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8vYXNoX3Nfd2VzdCcmZ3Q7QGFzaF9zX3dlc3QmbHQ7L2EmZ3Q7KSBvbiAmbHQ7YSBocmVmPSdodHRwczovL2NvZGVwZW4uaW8nJmd0O0NvZGVQZW4mbHQ7L2EmZ3Q7LlxuPC9pZnJhbWU+ICovfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})