webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/Dribbble.js":
/*!*****************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/Dribbble.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CodePen; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/Dribbble.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction CodePen() {\n  var _this = this;\n\n  function dribbbleShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        img_name = _ref.img_name,\n        description = _ref.description;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://dribbble.com/Ashleysw\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"/static/mainpage/dribbble/dribbble_icon.png\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"DRIBBBLE\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"dribbble-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title))), __jsx(\"div\", {\n      className: \"dribbble-main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 5\n      }\n    }, __jsx(\"img\", {\n      src: '/static/mainpage/dribbble/' + img_name + '.png',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: \"dribbble-desc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 7\n      }\n    }, description)));\n  }\n\n  function modalTrigger(_ref2) {\n    var img_name = _ref2.img_name,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(/static/mainpage/dribbble/\".concat(img_name, \"_thumb.png)\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 58\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"dribbble1\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. <br /> \\n This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifyies' dog walking to keep dog owners engaged and incentivised to walk their dogs. 🐶 @Daily UI\"\n  }, {\n    id: \"dribbble2\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\"\n  }, {\n    id: \"dribbble3\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\"\n  }, {\n    id: \"dribbble4\",\n    title: \"second\",\n    img_name: \"daily_ui_20\",\n    url: \"https://dribbble.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\"\n  }];\n  return __jsx(\"div\", {\n    id: \"Dribbbles\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 10\n    }\n  }, __jsx(\"h3\", {\n    className: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }\n  }, \"Dribbbles\"), __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: dribbbleShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }\n    }));\n  })));\n}\n_c = CodePen;\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL0RyaWJiYmxlLmpzP2I2ZWEiXSwibmFtZXMiOlsiQ29kZVBlbiIsImRyaWJiYmxlU2hvdCIsInRpdGxlIiwidXJsIiwiaW1nX25hbWUiLCJkZXNjcmlwdGlvbiIsIm1vZGFsVHJpZ2dlciIsImlkIiwiYmFja2dyb3VuZEltYWdlIiwibW9kYWxMaXN0IiwibWFwIiwiaXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUVoQyxXQUFTQyxZQUFULE9BQTREO0FBQUEsUUFBcENDLEtBQW9DLFFBQXBDQSxLQUFvQztBQUFBLFFBQTdCQyxHQUE2QixRQUE3QkEsR0FBNkI7QUFBQSxRQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsUUFBZEMsV0FBYyxRQUFkQSxXQUFjO0FBQUUsV0FBTyxtRUFDbkU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBNEIsU0FBRyxFQUFDLDZDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGLENBREYsRUFNRTtBQUFHLFVBQUksRUFBRUYsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsZ0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQ0QsS0FBaEMsQ0FERixDQU5GLENBRG1FLEVBWW5FO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFLCtCQUE2QkUsUUFBN0IsR0FBc0MsTUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdDQyxXQUFoQyxDQUZGLENBWm1FLENBQVA7QUFpQjdEOztBQUVELFdBQVNDLFlBQVQsUUFBOEM7QUFBQSxRQUF0QkYsUUFBc0IsU0FBdEJBLFFBQXNCO0FBQUEsUUFBWkcsRUFBWSxTQUFaQSxFQUFZO0FBQUEsUUFBUkwsS0FBUSxTQUFSQSxLQUFRO0FBQUUsV0FBTztBQUNuRCxlQUFTLEVBQUVLLEVBQUUsR0FBQyw2QkFEcUM7QUFFbkQsV0FBSyxFQUFFTCxLQUY0QztBQUduRCxXQUFLLEVBQUU7QUFBQ00sdUJBQWUsMENBQW1DSixRQUFuQztBQUFoQixPQUg0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFLL0M7O0FBRUQsTUFBTUssU0FBUyxHQUFHLENBQ2hCO0FBQUNGLE1BQUUsRUFBQyxXQUFKO0FBQWdCTCxTQUFLLEVBQUMsUUFBdEI7QUFBK0JFLFlBQVEsRUFBQyxhQUF4QztBQUFzREQsT0FBRyxFQUFDLGdGQUExRDtBQUEySUUsZUFBVyxFQUFDO0FBQXZKLEdBRGdCLEVBRWhCO0FBQUNFLE1BQUUsRUFBQyxXQUFKO0FBQWdCTCxTQUFLLEVBQUMsUUFBdEI7QUFBK0JFLFlBQVEsRUFBQyxhQUF4QztBQUFzREQsT0FBRyxFQUFDO0FBQTFELEdBRmdCLEVBR2hCO0FBQUNJLE1BQUUsRUFBQyxXQUFKO0FBQWdCTCxTQUFLLEVBQUMsUUFBdEI7QUFBK0JFLFlBQVEsRUFBQyxhQUF4QztBQUFzREQsT0FBRyxFQUFDO0FBQTFELEdBSGdCLEVBSWhCO0FBQUNJLE1BQUUsRUFBQyxXQUFKO0FBQWdCTCxTQUFLLEVBQUMsUUFBdEI7QUFBK0JFLFlBQVEsRUFBQyxhQUF4QztBQUFzREQsT0FBRyxFQUFDO0FBQTFELEdBSmdCLENBQWxCO0FBT0EsU0FBTztBQUFLLE1BQUUsRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFJLGFBQVMsRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssRUFFTDtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dNLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUVELElBQWI7QUFBbUIsYUFBTyxFQUFFVixZQUE1QjtBQUEwQyxhQUFPLEVBQUVLLFlBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURhO0FBQUEsR0FBZCxDQURILENBRkssQ0FBUDtBQVVEO0tBN0N1Qk4sTyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvRHJpYmJibGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcIi4uLy4uL3NtYWxsQ29tcG9uZW50cy9Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2RlUGVuKCkge1xuXG4gIGZ1bmN0aW9uIGRyaWJiYmxlU2hvdCAoe3RpdGxlLCB1cmwsIGltZ19uYW1lLCBkZXNjcmlwdGlvbn0pIHsgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9Bc2hsZXlzd1wiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vZGFsLWljb25cIiBzcmM9Jy9zdGF0aWMvbWFpbnBhZ2UvZHJpYmJibGUvZHJpYmJibGVfaWNvbi5wbmcnLz5cbiAgICAgICAgPHNwYW4+RFJJQkJCTEU8L3NwYW4+XG4gICAgICA8L2E+XG5cbiAgICAgIDxhIGhyZWY9e3VybH0+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJkcmliYmJsZS10aXRsZVwiPnt0aXRsZX08L2g0PlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmliYmJsZS1tYWluXCI+XG4gICAgICA8aW1nIHNyYz17Jy9zdGF0aWMvbWFpbnBhZ2UvZHJpYmJibGUvJytpbWdfbmFtZSsnLnBuZyd9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJpYmJibGUtZGVzY1wiPntkZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4gIH1cblxuICBmdW5jdGlvbiBtb2RhbFRyaWdnZXIgKHtpbWdfbmFtZSwgaWQsIHRpdGxlfSkgeyByZXR1cm4gPGRpdlxuICAgICAgY2xhc3NOYW1lPXtpZCtcIi1jYXJkIG1vZGFsLWNhcmQgaG92ZXItZ3Jvd1wifVxuICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL3N0YXRpYy9tYWlucGFnZS9kcmliYmJsZS8ke2ltZ19uYW1lfV90aHVtYi5wbmcpYH19XG4gICAgPjwvZGl2PlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtpZDpcImRyaWJiYmxlMVwiLHRpdGxlOlwic2Vjb25kXCIsaW1nX25hbWU6XCJkYWlseV91aV8yMFwiLHVybDpcImh0dHBzOi8vZHJpYmJibGUuY29tL3Nob3RzLzUzNzYwNDQtU29jaWFsLWRvZy13YWxraW5nLWFwcC1jb25jZXB0LURhaWx5LVVJLTAyMFwiLGRlc2NyaXB0aW9uOlwiQW4gYXBwIGNvbmNlcHQgZm9yIHRyYWNraW5nIHlvdXIgZG9nJ3Mgd2Fsa3MsIHdpdGggY29sbGFyIGdlbyBsb2NhdGlvbiB0byBtZWFzdXJlIHlvdXIgZG9nJ3MgY292ZXJlZCBkaXN0YW5jZSBhbmQgcHJveGltaXR5IHRvIHlvdS4gPGJyIC8+IFxcbiBUaGlzIGlzIGEgY29udGludWF0aW9uIG9mIHRoZSBjb25jZXB0IGZyb20gRGFpbHkgVUkgMTksIGEgbGVhZGVyIGJvYXJkIFVJIGRlc2lnbiB0aGF0ICdHYW1pZnlpZXMnIGRvZyB3YWxraW5nIHRvIGtlZXAgZG9nIG93bmVycyBlbmdhZ2VkIGFuZCBpbmNlbnRpdmlzZWQgdG8gd2FsayB0aGVpciBkb2dzLiDwn5C2IEBEYWlseSBVSVwifSxcbiAgICB7aWQ6XCJkcmliYmJsZTJcIix0aXRsZTpcInNlY29uZFwiLGltZ19uYW1lOlwiZGFpbHlfdWlfMjBcIix1cmw6XCJodHRwczovL2RyaWJiYmxlLmNvbS9zaG90cy81Mzc2MDQ0LVNvY2lhbC1kb2ctd2Fsa2luZy1hcHAtY29uY2VwdC1EYWlseS1VSS0wMjBcIn0sXG4gICAge2lkOlwiZHJpYmJibGUzXCIsdGl0bGU6XCJzZWNvbmRcIixpbWdfbmFtZTpcImRhaWx5X3VpXzIwXCIsdXJsOlwiaHR0cHM6Ly9kcmliYmJsZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCJ9LFxuICAgIHtpZDpcImRyaWJiYmxlNFwiLHRpdGxlOlwic2Vjb25kXCIsaW1nX25hbWU6XCJkYWlseV91aV8yMFwiLHVybDpcImh0dHBzOi8vZHJpYmJibGUuY29tL3Nob3RzLzUzNzYwNDQtU29jaWFsLWRvZy13YWxraW5nLWFwcC1jb25jZXB0LURhaWx5LVVJLTAyMFwifVxuICBdXG5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJEcmliYmJsZXNcIj5cbiAgICA8aDMgY2xhc3NOYW1lPVwiY2VudGVyXCI+RHJpYmJibGVzPC9oMz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ2FsbGVyeSByb3dcIj5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17ZHJpYmJibGVTaG90fSB0cmlnZ2VyPXttb2RhbFRyaWdnZXJ9Lz5cbiAgICAgICAgPC9kaXY+KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/Dribbble.js\n");

/***/ })

})