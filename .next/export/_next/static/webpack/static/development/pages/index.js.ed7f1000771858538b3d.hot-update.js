webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\",\n    _this = undefined;\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction CodePen() {\n  var modalList = [{\n    name: \"first\"\n  }, {\n    name: \"second\"\n  }, {\n    name: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }\n  });\n}\n_c = CodePen;\n\n__jsx(\"ul\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 1\n  }\n}, modal.map(function (item, index) {\n  return __jsx(\"li\", {\n    key: index,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: \"modal-check2\",\n    style: {\n      display: 'none'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    id: \"modal-name\",\n    className: \"modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"label\", {\n    \"for\": \"modal-check2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, \"x\")), __jsx(\"div\", {\n    id: \"target-inner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, \"CSS Modal\"), \"This modal is open.\")), __jsx(\"label\", {\n    \"class\": \"button\",\n    \"for\": \"modal-check2\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    \"class\": \"modal-button\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, \"Modal4U\")));\n}));\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwibW9kYWxMaXN0IiwibmFtZSIsIm1vZGFsIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWUsU0FBU0EsT0FBVCxHQUFtQjtBQUVoQyxNQUFNQyxTQUFTLEdBQUcsQ0FDaEI7QUFBQ0MsUUFBSSxFQUFDO0FBQU4sR0FEZ0IsRUFFaEI7QUFBQ0EsUUFBSSxFQUFDO0FBQU4sR0FGZ0IsRUFHaEI7QUFBQ0EsUUFBSSxFQUFDO0FBQU4sR0FIZ0IsQ0FBbEI7QUFNRSxTQUFPO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBaUJIO0tBekJ1QkYsTzs7QUEyQnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDS0csS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsU0FDWDtBQUFJLE9BQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0U7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixNQUFFLEVBQUMsY0FBMUI7QUFBeUMsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBUyxFQUFDLE9BQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQUksY0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGLENBREYsRUFJRTtBQUFLLE1BQUUsRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLHdCQUpGLENBSkYsRUFhRTtBQUFPLGFBQU0sUUFBYjtBQUFzQixXQUFJLGNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQU0sY0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsQ0FiRixDQURXO0FBQUEsQ0FBVixDQURMIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ob21lUGFnZS9zZWN0aW9uQ29tcG9uZW50cy9Db2RlUGVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29kZVBlbigpIHtcblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAge25hbWU6XCJmaXJzdFwifSxcbiAgICB7bmFtZTpcInNlY29uZFwifSxcbiAgICB7bmFtZTpcInRoaXJkXCJ9LFxuICBdXG5cbiAgICByZXR1cm4gPGRpdiBpZD1cImNvZGVwZW5zXCI+XG5cbiAgICAgIHsvKiA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtb2RhbC1jaGVjazJcIiBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0vPlxuICAgICAgPGRpdiBpZD1cIm1vZGFsLW5hbWVcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibW9kYWwtY2hlY2syXCI+XG4gICAgICAgICAgPGE+eDwvYT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBpZD1cInRhcmdldC1pbm5lclwiPlxuICAgICAgICAgIDxoMj5DU1MgTW9kYWw8L2gyPlxuICAgICAgICAgIFRoaXMgbW9kYWwgaXMgb3Blbi5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImJ1dHRvblwiIGZvcj1cIm1vZGFsLWNoZWNrMlwiPlxuICAgICAgICA8YSBjbGFzcz1cIm1vZGFsLWJ1dHRvblwiPk1vZGFsNFU8L2E+XG4gICAgICA8L2xhYmVsPiAqL31cblxuICAgIDwvZGl2PlxufVxuXG48dWw+XG4gICAge21vZGFsLm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgPGxpIGtleT17aW5kZXh9PlxuXG4gICAgICB7LyogPFByb2R1Y3RDb21wIGRldGFpbHM9e2l0ZW19Lz4gKi99XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtb2RhbC1jaGVjazJcIiBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0vPlxuICAgICAgPGRpdiBpZD1cIm1vZGFsLW5hbWVcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwibW9kYWwtY2hlY2syXCI+XG4gICAgICAgICAgPGE+eDwvYT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBpZD1cInRhcmdldC1pbm5lclwiPlxuICAgICAgICAgIDxoMj5DU1MgTW9kYWw8L2gyPlxuICAgICAgICAgIFRoaXMgbW9kYWwgaXMgb3Blbi5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImJ1dHRvblwiIGZvcj1cIm1vZGFsLWNoZWNrMlwiPlxuICAgICAgICA8YSBjbGFzcz1cIm1vZGFsLWJ1dHRvblwiPk1vZGFsNFU8L2E+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgXG4gICAgPC9saT4pfVxuPC91bD4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})