webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/smallComponents/Modal.js":
/*!***************************************************!*\
  !*** ./pages/components/smallComponents/Modal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/smallComponents/Modal.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction Modal(_ref) {\n  var info = _ref.info,\n      content = _ref.content;\n  // id, title, content, trigger\n  var id = info.id,\n      title = info.title,\n      url = info.url;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"checkbox\",\n    id: id + \"-check\",\n    style: {\n      display: 'none'\n    },\n    \"class\": \"modal-checkbox\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    id: \"modal-name\",\n    className: \"modal modal-iframe\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    \"for\": id + \"-check\",\n    className: \"modal-behind\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    \"class\": \"modal-inner\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }\n  }, __jsx(\"label\", {\n    \"for\": id + \"-check\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 42\n    }\n  }, \"x\")), content(title, url))), __jsx(\"label\", {\n    \"class\": \"button\",\n    \"for\": id + \"-check\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    \"class\": \"modal-button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }\n  }, title)));\n}\n_c = Modal;\n\nvar _c;\n\n$RefreshReg$(_c, \"Modal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9Nb2RhbC5qcz9kZDY0Il0sIm5hbWVzIjpbIk1vZGFsIiwiaW5mbyIsImNvbnRlbnQiLCJpZCIsInRpdGxlIiwidXJsIiwiZGlzcGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLEtBQVQsT0FBZ0M7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsTUFBVkMsT0FBVSxRQUFWQSxPQUFVO0FBRTNDO0FBRjJDLE1BR25DQyxFQUhtQyxHQUdqQkYsSUFIaUIsQ0FHbkNFLEVBSG1DO0FBQUEsTUFHL0JDLEtBSCtCLEdBR2pCSCxJQUhpQixDQUcvQkcsS0FIK0I7QUFBQSxNQUd4QkMsR0FId0IsR0FHakJKLElBSGlCLENBR3hCSSxHQUh3QjtBQUszQyxTQUFPLG1FQUVIO0FBQU8sUUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBRSxFQUFFRixFQUFFLEdBQUMsUUFBOUI7QUFBd0MsU0FBSyxFQUFFO0FBQUNHLGFBQU8sRUFBQztBQUFULEtBQS9DO0FBQWlFLGFBQU0sZ0JBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRyxFQUdIO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBcUIsYUFBUyxFQUFDLG9CQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxXQUFLSCxFQUFFLEdBQUMsUUFBZjtBQUF5QixhQUFTLEVBQUMsY0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBR0k7QUFBSyxhQUFNLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sV0FBS0EsRUFBRSxHQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXpCLENBREosRUFFS0QsT0FBTyxDQUFDRSxLQUFELEVBQVFDLEdBQVIsQ0FGWixDQUhKLENBSEcsRUFZSDtBQUFPLGFBQU0sUUFBYjtBQUFzQixXQUFLRixFQUFFLEdBQUMsUUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBTSxjQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUJDLEtBQXpCLENBREosQ0FaRyxDQUFQO0FBa0JEO0tBdkJxQkosSyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL01vZGFsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoe2luZm8sIGNvbnRlbnR9KSB7XG5cbiAgICAvLyBpZCwgdGl0bGUsIGNvbnRlbnQsIHRyaWdnZXJcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgdXJsfSA9IGluZm87XG4gIFxuICAgIHJldHVybiA8PlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17aWQrXCItY2hlY2tcIn0gc3R5bGU9e3tkaXNwbGF5Oidub25lJ319IGNsYXNzPVwibW9kYWwtY2hlY2tib3hcIi8+XG4gICAgICAgIDxkaXYgaWQ9XCJtb2RhbC1uYW1lXCIgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtaWZyYW1lXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPXtpZCtcIi1jaGVja1wifSBjbGFzc05hbWU9XCJtb2RhbC1iZWhpbmRcIj48L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaW5uZXJcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPXtpZCtcIi1jaGVja1wifT48YT54PC9hPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAge2NvbnRlbnQodGl0bGUsIHVybCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiYnV0dG9uXCIgZm9yPXtpZCtcIi1jaGVja1wifT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwibW9kYWwtYnV0dG9uXCI+e3RpdGxlfTwvYT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgPC8+XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/smallComponents/Modal.js\n");

/***/ })

})