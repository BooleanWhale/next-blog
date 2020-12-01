webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/Dribbble.js":
/*!*****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/Dribbble.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/Dribbble.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function dribbbleShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        img_name = _ref.img_name,\n        description = _ref.description,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://dribbble.com/Ashleysw\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"/static/mainpage/dribbble/dribbble_icon.png\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"DRIBBBLE\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      \"for\": id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 32\n      }\n    }, \"x\"))), __jsx(\"div\", {\n      className: \"dribbble-main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }\n    }, __jsx(\"img\", {\n      src: '/static/mainpage/dribbble/' + img_name + '.png',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: \"dribbble-desc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, description)));\n  }\n\n  function modalTrigger(_ref2) {\n    var img_name = _ref2.img_name,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(/static/mainpage/dribbble/\".concat(img_name, \"_thumb.png)\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 58\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"dribbble1\",\n    title: \"Social dog walking app\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifies' dog walking to keep dog owners engaged and incentivised to walk their dogs. \\uD83D\\uDC36 @Daily UI\"\n  }, {\n    id: \"dribbble2\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\"\n  }, {\n    id: \"dribbble3\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\"\n  }, {\n    id: \"dribbble4\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\"\n  }];\n  return __jsx(\"div\", {\n    id: \"Dribbbles\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 10\n    }\n  }, __jsx(\"h3\", {\n    className: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, \"Dribbbles\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: dribbbleShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }));\n  })));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0RyaWJiYmxlLmpzP2I2ZWEiXSwibmFtZXMiOlsiQ29kZVBlbiIsImRyaWJiYmxlU2hvdCIsInRpdGxlIiwidXJsIiwiaW1nX25hbWUiLCJkZXNjcmlwdGlvbiIsImlkIiwibW9kYWxUcmlnZ2VyIiwiYmFja2dyb3VuZEltYWdlIiwibW9kYWxMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUVoQyxXQUFTQyxZQUFULE9BQWdFO0FBQUEsUUFBeENDLEtBQXdDLFFBQXhDQSxLQUF3QztBQUFBLFFBQWpDQyxHQUFpQyxRQUFqQ0EsR0FBaUM7QUFBQSxRQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsUUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUFBLFFBQUxDLEVBQUssUUFBTEEsRUFBSztBQUFFLFdBQU8sbUVBQ3ZFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSxFQUFDLCtCQUFSO0FBQXdDLGVBQVMsRUFBQyxpQkFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFDLDZDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBREYsRUFNRTtBQUFHLFVBQUksRUFBRUgsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTZCRCxLQUE3QixDQURGLENBTkYsRUFVRTtBQUFPLGFBQUtJLEVBQUUsR0FBQyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUF6QixDQVZGLENBRHVFLEVBY3ZFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFLCtCQUE2QkYsUUFBN0IsR0FBc0MsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDQyxXQUFoQyxDQUZGLENBZHVFLENBQVA7QUFtQmpFOztBQUVELFdBQVNFLFlBQVQsUUFBOEM7QUFBQSxRQUF0QkgsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsUUFBWkUsRUFBWSxTQUFaQSxFQUFZO0FBQUEsUUFBUkosS0FBUSxTQUFSQSxLQUFRO0FBQUUsV0FBTztBQUNuRCxlQUFTLEVBQUVJLEVBQUUsR0FBQyw2QkFEcUM7QUFFbkQsV0FBSyxFQUFFSixLQUY0QztBQUduRCxXQUFLLEVBQUU7QUFBQ00sdUJBQWUsMENBQW1DSixRQUFuQztBQUFoQixPQUg0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFLL0M7O0FBRUQsTUFBTUssU0FBUyxHQUFHLENBQ2hCO0FBQUNILE1BQUUsRUFBQyxXQUFKO0FBQWdCSixTQUFLLEVBQUMsd0JBQXRCO0FBQStDRSxZQUFRLEVBQUMsYUFBeEQ7QUFBc0VELE9BQUcsRUFBQyxnRkFBMUU7QUFBMkpFLGVBQVc7QUFBdEssR0FEZ0IsRUFFaEI7QUFBQ0MsTUFBRSxFQUFDLFdBQUo7QUFBZ0JKLFNBQUssRUFBQyxRQUF0QjtBQUErQkUsWUFBUSxFQUFDLGFBQXhDO0FBQXNERCxPQUFHLEVBQUM7QUFBMUQsR0FGZ0IsRUFHaEI7QUFBQ0csTUFBRSxFQUFDLFdBQUo7QUFBZ0JKLFNBQUssRUFBQyxRQUF0QjtBQUErQkUsWUFBUSxFQUFDLGFBQXhDO0FBQXNERCxPQUFHLEVBQUM7QUFBMUQsR0FIZ0IsRUFJaEI7QUFBQ0csTUFBRSxFQUFDLFdBQUo7QUFBZ0JKLFNBQUssRUFBQyxRQUF0QjtBQUErQkUsWUFBUSxFQUFDLGFBQXhDO0FBQXNERCxPQUFHLEVBQUM7QUFBMUQsR0FKZ0IsQ0FBbEI7QUFPQSxTQUFPO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMO0FBQUksYUFBUyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxFQUVMO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR00sU0FBUyxDQUFDQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFNQyxLQUFOO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyw4REFBRDtBQUFPLFVBQUksRUFBRUQsSUFBYjtBQUFtQixhQUFPLEVBQUVWLFlBQTVCO0FBQTBDLGFBQU8sRUFBRU0sWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRGE7QUFBQSxHQUFkLENBREgsQ0FGSyxDQUFQO0FBVUQ7S0EvQ3VCUCxPIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9ob21lUGFnZS9zZWN0aW9uQ29tcG9uZW50cy9EcmliYmJsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbCBmcm9tIFwiLi4vLi4vc21hbGxDb21wb25lbnRzL01vZGFsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvZGVQZW4oKSB7XG5cbiAgZnVuY3Rpb24gZHJpYmJibGVTaG90ICh7dGl0bGUsIHVybCwgaW1nX25hbWUsIGRlc2NyaXB0aW9uLCBpZH0pIHsgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9Bc2hsZXlzd1wiIGNsYXNzTmFtZT1cIm1vZGFsLWljb24tbGlua1wiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vZGFsLWljb25cIiBzcmM9Jy9zdGF0aWMvbWFpbnBhZ2UvZHJpYmJibGUvZHJpYmJibGVfaWNvbi5wbmcnLz5cbiAgICAgICAgPHNwYW4+RFJJQkJCTEU8L3NwYW4+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aXRsZX08L2g0PlxuICAgICAgPC9hPlxuXG4gICAgICA8bGFiZWwgZm9yPXtpZCtcIi1jaGVja1wifT48YT54PC9hPjwvbGFiZWw+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRyaWJiYmxlLW1haW5cIj5cbiAgICAgIDxpbWcgc3JjPXsnL3N0YXRpYy9tYWlucGFnZS9kcmliYmJsZS8nK2ltZ19uYW1lKycucG5nJ30vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcmliYmJsZS1kZXNjXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlciAoe2ltZ19uYW1lLCBpZCwgdGl0bGV9KSB7IHJldHVybiA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2lkK1wiLWNhcmQgbW9kYWwtY2FyZCBob3Zlci1ncm93XCJ9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgvc3RhdGljL21haW5wYWdlL2RyaWJiYmxlLyR7aW1nX25hbWV9X3RodW1iLnBuZylgfX1cbiAgICA+PC9kaXY+XG4gIH1cblxuICBjb25zdCBtb2RhbExpc3QgPSBbXG4gICAge2lkOlwiZHJpYmJibGUxXCIsdGl0bGU6XCJTb2NpYWwgZG9nIHdhbGtpbmcgYXBwXCIsaW1nX25hbWU6XCJkYWlseV91aV8yMFwiLHVybDpcImh0dHBzOi8vZHJpYmJibGUuY29tL3Nob3RzLzUzNzYwNDQtU29jaWFsLWRvZy13YWxraW5nLWFwcC1jb25jZXB0LURhaWx5LVVJLTAyMFwiLGRlc2NyaXB0aW9uOmBBbiBhcHAgY29uY2VwdCBmb3IgdHJhY2tpbmcgeW91ciBkb2cncyB3YWxrcywgd2l0aCBjb2xsYXIgZ2VvIGxvY2F0aW9uIHRvIG1lYXN1cmUgeW91ciBkb2cncyBjb3ZlcmVkIGRpc3RhbmNlIGFuZCBwcm94aW1pdHkgdG8geW91LiBUaGlzIGlzIGEgY29udGludWF0aW9uIG9mIHRoZSBjb25jZXB0IGZyb20gRGFpbHkgVUkgMTksIGEgbGVhZGVyIGJvYXJkIFVJIGRlc2lnbiB0aGF0ICdHYW1pZmllcycgZG9nIHdhbGtpbmcgdG8ga2VlcCBkb2cgb3duZXJzIGVuZ2FnZWQgYW5kIGluY2VudGl2aXNlZCB0byB3YWxrIHRoZWlyIGRvZ3MuIPCfkLYgQERhaWx5IFVJYH0sXG4gICAge2lkOlwiZHJpYmJibGUyXCIsdGl0bGU6XCJzZWNvbmRcIixpbWdfbmFtZTpcImRhaWx5X3VpXzIwXCIsdXJsOlwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCJ9LFxuICAgIHtpZDpcImRyaWJiYmxlM1wiLHRpdGxlOlwic2Vjb25kXCIsaW1nX25hbWU6XCJkYWlseV91aV8yMFwiLHVybDpcImh0dHBzOi8vZHJpYmJibGUuY29tL3Nob3RzLzUzNzYwNDQtU29jaWFsLWRvZy13YWxraW5nLWFwcC1jb25jZXB0LURhaWx5LVVJLTAyMFwifSxcbiAgICB7aWQ6XCJkcmliYmJsZTRcIix0aXRsZTpcInNlY29uZFwiLGltZ19uYW1lOlwiZGFpbHlfdWlfMjBcIix1cmw6XCJodHRwczovL2RyaWJiYmxlLmNvbS9zaG90cy81Mzc2MDQ0LVNvY2lhbC1kb2ctd2Fsa2luZy1hcHAtY29uY2VwdC1EYWlseS1VSS0wMjBcIn1cbiAgXVxuXG4gIHJldHVybiA8ZGl2IGlkPVwiRHJpYmJibGVzXCI+XG4gICAgPGgzIGNsYXNzTmFtZT1cImNlbnRlclwiPkRyaWJiYmxlczwvaDM+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdhbGxlcnkgcm93XCI+XG4gICAgICB7bW9kYWxMaXN0Lm1hcCgoaXRlbSxpbmRleCkgPT4gXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgPE1vZGFsIGluZm89e2l0ZW19IGNvbnRlbnQ9e2RyaWJiYmxlU2hvdH0gdHJpZ2dlcj17bW9kYWxUcmlnZ2VyfS8+XG4gICAgICAgIDwvZGl2PilcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG59ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/Dribbble.js\n");

/***/ })

})