webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/CodePen.js":
/*!****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/CodePen.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/CodePen.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction CodePen() {\n  var _this = this;\n\n  var modalList = [{\n    name: \"first\"\n  }, {\n    name: \"second\"\n  }, {\n    name: \"third\"\n  }];\n  return __jsx(\"div\", {\n    id: \"codepens\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 12\n    }\n  }, __jsx(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, modal.map(function (item, index) {\n    return __jsx(\"li\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }\n    }, __jsx(\"input\", {\n      type: \"checkbox\",\n      id: item.name,\n      style: {\n        display: 'none'\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      id: \"modal-name\",\n      className: \"modal\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }\n    }, __jsx(\"label\", {\n      \"for\": item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, \"x\")), __jsx(\"div\", {\n      id: \"target-inner\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 11\n      }\n    }, \"CSS Modal\"), \"This modal is open.\")), __jsx(\"label\", {\n      \"class\": \"button\",\n      \"for\": item.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      \"class\": \"modal-button\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }, \"Modal4U\")));\n  })));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0NvZGVQZW4uanM/NjRmYyJdLCJuYW1lcyI6WyJDb2RlUGVuIiwibW9kYWxMaXN0IiwibmFtZSIsIm1vZGFsIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsR0FBbUI7QUFBQTs7QUFFaEMsTUFBTUMsU0FBUyxHQUFHLENBQ2hCO0FBQUNDLFFBQUksRUFBQztBQUFOLEdBRGdCLEVBRWhCO0FBQUNBLFFBQUksRUFBQztBQUFOLEdBRmdCLEVBR2hCO0FBQUNBLFFBQUksRUFBQztBQUFOLEdBSGdCLENBQWxCO0FBTUUsU0FBTztBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FpQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNEQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU1DLEtBQU47QUFBQSxXQUNYO0FBQUksU0FBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FHRTtBQUFPLFVBQUksRUFBQyxVQUFaO0FBQXVCLFFBQUUsRUFBRUQsSUFBSSxDQUFDSCxJQUFoQztBQUFzQyxXQUFLLEVBQUU7QUFBQ0ssZUFBTyxFQUFDO0FBQVQsT0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUU7QUFBSyxRQUFFLEVBQUMsWUFBUjtBQUFxQixlQUFTLEVBQUMsT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU8sYUFBS0YsSUFBSSxDQUFDSCxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBREYsRUFJRTtBQUFLLFFBQUUsRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLHdCQUpGLENBSkYsRUFhRTtBQUFPLGVBQU0sUUFBYjtBQUFzQixhQUFLRyxJQUFJLENBQUNILElBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQU0sY0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLENBYkYsQ0FEVztBQUFBLEdBQVYsQ0FEQyxDQWpCSyxDQUFQO0FBeUNIO0tBakR1QkYsTyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvQ29kZVBlbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtuYW1lOlwiZmlyc3RcIn0sXG4gICAge25hbWU6XCJzZWNvbmRcIn0sXG4gICAge25hbWU6XCJ0aGlyZFwifSxcbiAgXVxuXG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJjb2RlcGVuc1wiPlxuXG4gICAgICB7LyogPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwibW9kYWwtY2hlY2syXCIgc3R5bGU9e3tkaXNwbGF5Oidub25lJ319Lz5cbiAgICAgIDxkaXYgaWQ9XCJtb2RhbC1uYW1lXCIgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cIm1vZGFsLWNoZWNrMlwiPlxuICAgICAgICAgIDxhPng8L2E+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgaWQ9XCJ0YXJnZXQtaW5uZXJcIj5cbiAgICAgICAgICA8aDI+Q1NTIE1vZGFsPC9oMj5cbiAgICAgICAgICBUaGlzIG1vZGFsIGlzIG9wZW4uXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJidXR0b25cIiBmb3I9XCJtb2RhbC1jaGVjazJcIj5cbiAgICAgICAgPGEgY2xhc3M9XCJtb2RhbC1idXR0b25cIj5Nb2RhbDRVPC9hPlxuICAgICAgPC9sYWJlbD4gKi99XG5cblxuICAgICAgPHVsPlxuICAgIHttb2RhbC5tYXAoKGl0ZW0saW5kZXgpID0+IFxuICAgIDxsaSBrZXk9e2luZGV4fT5cblxuICAgICAgey8qIDxQcm9kdWN0Q29tcCBkZXRhaWxzPXtpdGVtfS8+ICovfVxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtpdGVtLm5hbWV9IHN0eWxlPXt7ZGlzcGxheTonbm9uZSd9fS8+XG4gICAgICA8ZGl2IGlkPVwibW9kYWwtbmFtZVwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9e2l0ZW0ubmFtZX0+XG4gICAgICAgICAgPGE+eDwvYT5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGRpdiBpZD1cInRhcmdldC1pbm5lclwiPlxuICAgICAgICAgIDxoMj5DU1MgTW9kYWw8L2gyPlxuICAgICAgICAgIFRoaXMgbW9kYWwgaXMgb3Blbi5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImJ1dHRvblwiIGZvcj17aXRlbS5uYW1lfT5cbiAgICAgICAgPGEgY2xhc3M9XCJtb2RhbC1idXR0b25cIj5Nb2RhbDRVPC9hPlxuICAgICAgPC9sYWJlbD5cblxuICAgIFxuICAgIDwvbGk+KX1cbjwvdWw+XG5cbiAgICA8L2Rpdj5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/CodePen.js\n");

/***/ })

})