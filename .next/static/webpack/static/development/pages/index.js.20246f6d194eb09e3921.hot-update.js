webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction CodePen() {\n  var _this = this;\n\n  var modalList = [{\n    name: \"first\"\n  }, {\n    name: \"second\"\n  }, {\n    name: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      id: item.name,\n      style: {\n        display: 'none'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }\n    }), __jsx(\"div\", {\n      id: \"modal-name\",\n      className: \"modal\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }, __jsx(\"label\", {\n      \"for\": item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, \"x\")), __jsx(\"div\", {\n      id: \"target-inner\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 11\n      }\n    }, __jsx(\"iframe\", {\n      style: {\n        width: '100%'\n      },\n      scrolling: \"no\",\n      title: \"Button click pulsing effect - Pure CSS\",\n      src: \"https://codepen.io/ash_s_west/embed/GRZbvym?height=520&theme-id=dark&default-tab=css,result\",\n      loading: \"lazy\",\n      allowTransparency: \"true\",\n      allowFullScreen: \"true\",\n      height: 520,\n      frameBorder: \"no\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 1\n      }\n    }))), __jsx(\"label\", {\n      \"class\": \"button\",\n      \"for\": item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      \"class\": \"modal-button\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 11\n      }\n    }, \"Modal4U\")));\n  }));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwibW9kYWxMaXN0IiwibmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBRGdCLEVBRWhCO0FBQUNBLFFBQUksRUFBQztBQUFOLEdBRmdCLEVBR2hCO0FBQUNBLFFBQUksRUFBQztBQUFOLEdBSGdCLENBQWxCO0FBTUUsU0FBTztBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFTkQsU0FBUyxDQUFDRSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0U7QUFBTyxVQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFFLEVBQUVELElBQUksQ0FBQ0YsSUFBaEM7QUFBc0MsV0FBSyxFQUFFO0FBQUNJLGVBQU8sRUFBQztBQUFULE9BQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIRixFQUlFO0FBQUssUUFBRSxFQUFDLFlBQVI7QUFBcUIsZUFBUyxFQUFDLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFPLGFBQUtGLElBQUksQ0FBQ0YsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixDQURGLEVBSUU7QUFBSyxRQUFFLEVBQUMsY0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ1Y7QUFBUSxXQUFLLEVBQUU7QUFBQ0ssYUFBSyxFQUFFO0FBQVIsT0FBZjtBQUFnQyxlQUFTLEVBQUMsSUFBMUM7QUFBK0MsV0FBSyxFQUFDLHdDQUFyRDtBQUE4RixTQUFHLEVBQUMsNkZBQWxHO0FBQWdNLGFBQU8sRUFBQyxNQUF4TTtBQUErTSx1QkFBaUIsRUFBQyxNQUFqTztBQUF3TyxxQkFBZSxFQUFDLE1BQXhQO0FBQStQLFlBQU0sRUFBRSxHQUF2UTtBQUE0USxpQkFBVyxFQUFDLElBQXhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEVSxDQUpGLENBSkYsRUFhRTtBQUFPLGVBQU0sUUFBYjtBQUFzQixhQUFLSCxJQUFJLENBQUNGLElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQU0sY0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBYkYsQ0FEYTtBQUFBLEdBQWQsQ0FGTSxDQUFQO0FBd0JIO0tBaEN1QkYsTyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtuYW1lOlwiZmlyc3RcIn0sXG4gICAge25hbWU6XCJzZWNvbmRcIn0sXG4gICAge25hbWU6XCJ0aGlyZFwifSxcbiAgXVxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJjb2RlcGVuc1wiPlxuXG4gICAge21vZGFsTGlzdC5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgICAgPGRpdiBrZXk9e2luZGV4fT5cblxuICAgICAgICB7LyogPFByb2R1Y3RDb21wIGRldGFpbHM9e2l0ZW19Lz4gKi99XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17aXRlbS5uYW1lfSBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0vPlxuICAgICAgICA8ZGl2IGlkPVwibW9kYWwtbmFtZVwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj17aXRlbS5uYW1lfT5cbiAgICAgICAgICAgIDxhPng8L2E+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGlkPVwidGFyZ2V0LWlubmVyXCI+XG48aWZyYW1lIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNjcm9sbGluZz1cIm5vXCIgdGl0bGU9XCJCdXR0b24gY2xpY2sgcHVsc2luZyBlZmZlY3QgLSBQdXJlIENTU1wiIHNyYz1cImh0dHBzOi8vY29kZXBlbi5pby9hc2hfc193ZXN0L2VtYmVkL0dSWmJ2eW0/aGVpZ2h0PTUyMCZ0aGVtZS1pZD1kYXJrJmRlZmF1bHQtdGFiPWNzcyxyZXN1bHRcIiBsb2FkaW5nPVwibGF6eVwiIGFsbG93VHJhbnNwYXJlbmN5PVwidHJ1ZVwiIGFsbG93RnVsbFNjcmVlbj1cInRydWVcIiBoZWlnaHQ9ezUyMH0gZnJhbWVCb3JkZXI9XCJub1wiPlxuPC9pZnJhbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJidXR0b25cIiBmb3I9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgPGEgY2xhc3M9XCJtb2RhbC1idXR0b25cIj5Nb2RhbDRVPC9hPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICBcbiAgICAgIDwvZGl2Pil9XG5cbiAgICA8L2Rpdj5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})