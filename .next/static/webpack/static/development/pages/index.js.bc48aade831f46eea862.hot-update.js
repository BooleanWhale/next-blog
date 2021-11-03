webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/homePage/sectionComponents/Portfolio.js":
/*!******************************************************************!*\
  !*** ./pages/components/homePage/sectionComponents/Portfolio.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Portfolio; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../smallComponents/Modal */ \"./pages/components/smallComponents/Modal.js\");\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/homePage/sectionComponents/Portfolio.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Portfolio() {\n  var _this = this;\n\n  function behanceShot(_ref) {\n    var title = _ref.title,\n        url = _ref.url,\n        img_name = _ref.img_name,\n        description = _ref.description,\n        id = _ref.id;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n      className: \"modal-header\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 5\n      }\n    }, __jsx(\"a\", {\n      href: \"https://behance.com/Ashleysw\",\n      className: \"modal-icon-link\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 7\n      }\n    }, __jsx(\"img\", {\n      className: \"modal-icon\",\n      src: \"static/mainpage/behance/behance_icon.png\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }\n    }), __jsx(\"span\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }\n    }, \"behance\")), __jsx(\"a\", {\n      href: url,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    }, __jsx(\"h4\", {\n      className: \"modal-title\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }\n    }, title)), __jsx(\"label\", {\n      htmlFor: id + \"-check\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      className: \"close-modal\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 36\n      }\n    }, \"x\"))), __jsx(\"div\", {\n      className: \"dribbble-main\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }\n    }, __jsx(\"img\", {\n      src: 'static/mainpage/behance/' + img_name + '.webp',\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: \"modal-desc\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 7\n      }\n    }, description)));\n  }\n\n  function modalTrigger(_ref2) {\n    var img_name = _ref2.img_name,\n        id = _ref2.id,\n        title = _ref2.title;\n    return __jsx(\"div\", {\n      className: id + \"-card modal-card hover-grow\",\n      title: title,\n      style: {\n        backgroundImage: \"url(static/mainpage/behance/\".concat(img_name, \"_thumb.png)\")\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 58\n      }\n    });\n  }\n\n  var modalList = [{\n    id: \"behance1\",\n    title: \"Social dog walking app\",\n    img_name: \"behance1\",\n    url: \"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for tracking your dog's walks, with collar geo location to measure your dog's covered distance and proximity to you. This is a continuation of the concept from Daily UI 19, a leader board UI design that 'Gamifies' dog walking to keep dog owners engaged and incentivised to walk their dogs. \\uD83D\\uDC36 @Daily UI\"\n  }, {\n    id: \"behance2\",\n    title: \"ECommerce dashboard\",\n    img_name: \"behance2\",\n    url: \"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An eCommerce analytics UI design for @Daily UI 18. Having experience running an eCommerce store, I took this opportunity to design my ideal analytics page. I used horizontal and vertical grids to try and fit in as much information as I could whilst still letting it breath. \\uD83D\\uDE42\"\n  }, {\n    id: \"behance3\",\n    title: \"Social app settings page\",\n    img_name: \"behance3\",\n    url: \"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"Daily UI #007 - design a settings page!\"\n  }, {\n    id: \"behance4\",\n    title: \"Home monitoring app dashboard\",\n    img_name: \"behance4\",\n    url: \"https://behance.com/shots/5376044-Social-dog-walking-app-concept-Daily-UI-020\",\n    description: \"An app concept for a home monitoring app's dashboard. I tried to balance visual appeal with usability by presenting information in a clean and minimal as design whilst adding some visual flare to the most important element on the screen. \\u2744\\uFE0F\\uD83D\\uDD25 @Daily UI\"\n  }];\n  return __jsx(\"div\", {\n    id: \"behances\",\n    className: \"center-text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    className: \"flex-gallery row\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, modalList.map(function (item, index) {\n    return __jsx(\"div\", {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }\n    }, __jsx(_smallComponents_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      info: item,\n      content: behanceShot,\n      trigger: modalTrigger,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }\n    }));\n  })), __jsx(\"a\", {\n    className: \"button black-button\",\n    href: \"https://www.behance.net/ashsaleemwest\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 5\n    }\n  }, \"See more on Behance\"));\n}\n_c = Portfolio;\n\nvar _c;\n\n$RefreshReg$(_c, \"Portfolio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2hvbWVQYWdlL3NlY3Rpb25Db21wb25lbnRzL1BvcnRmb2xpby5qcz81Yzk4Il0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsImJlaGFuY2VTaG90IiwidGl0bGUiLCJ1cmwiLCJpbWdfbmFtZSIsImRlc2NyaXB0aW9uIiwiaWQiLCJtb2RhbFRyaWdnZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb2RhbExpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBRWxDLFdBQVNDLFdBQVQsT0FBK0Q7QUFBQSxRQUF4Q0MsS0FBd0MsUUFBeENBLEtBQXdDO0FBQUEsUUFBakNDLEdBQWlDLFFBQWpDQSxHQUFpQztBQUFBLFFBQTVCQyxRQUE0QixRQUE1QkEsUUFBNEI7QUFBQSxRQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0FBQUEsUUFBTEMsRUFBSyxRQUFMQSxFQUFLO0FBQUUsV0FBTyxtRUFDdEU7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLEVBQUMsOEJBQVI7QUFBdUMsZUFBUyxFQUFDLGlCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixTQUFHLEVBQUMsMENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsQ0FERixFQU1FO0FBQUcsVUFBSSxFQUFFSCxHQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBNkJELEtBQTdCLENBREYsQ0FORixFQVVFO0FBQU8sYUFBTyxFQUFFSSxFQUFFLEdBQUMsUUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QjtBQUFHLGVBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBN0IsQ0FWRixDQURzRSxFQWN0RTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRSw2QkFBMkJGLFFBQTNCLEdBQW9DLE9BQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUE2QkMsV0FBN0IsQ0FGRixDQWRzRSxDQUFQO0FBbUJoRTs7QUFFRCxXQUFTRSxZQUFULFFBQThDO0FBQUEsUUFBdEJILFFBQXNCLFNBQXRCQSxRQUFzQjtBQUFBLFFBQVpFLEVBQVksU0FBWkEsRUFBWTtBQUFBLFFBQVJKLEtBQVEsU0FBUkEsS0FBUTtBQUFFLFdBQU87QUFDbkQsZUFBUyxFQUFFSSxFQUFFLEdBQUMsNkJBRHFDO0FBRW5ELFdBQUssRUFBRUosS0FGNEM7QUFHbkQsV0FBSyxFQUFFO0FBQUNNLHVCQUFlLHdDQUFpQ0osUUFBakM7QUFBaEIsT0FINEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBSy9DOztBQUVELE1BQU1LLFNBQVMsR0FBRyxDQUNoQjtBQUFDSCxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsd0JBQXJCO0FBQThDRSxZQUFRLEVBQUMsVUFBdkQ7QUFBa0VELE9BQUcsRUFBQywrRUFBdEU7QUFBc0pFLGVBQVc7QUFBakssR0FEZ0IsRUFFaEI7QUFBQ0MsTUFBRSxFQUFDLFVBQUo7QUFBZUosU0FBSyxFQUFDLHFCQUFyQjtBQUEyQ0UsWUFBUSxFQUFDLFVBQXBEO0FBQStERCxPQUFHLEVBQUMsK0VBQW5FO0FBQW1KRSxlQUFXO0FBQTlKLEdBRmdCLEVBR2hCO0FBQUNDLE1BQUUsRUFBQyxVQUFKO0FBQWVKLFNBQUssRUFBQywwQkFBckI7QUFBZ0RFLFlBQVEsRUFBQyxVQUF6RDtBQUFvRUQsT0FBRyxFQUFDLCtFQUF4RTtBQUF3SkUsZUFBVztBQUFuSyxHQUhnQixFQUloQjtBQUFDQyxNQUFFLEVBQUMsVUFBSjtBQUFlSixTQUFLLEVBQUMsK0JBQXJCO0FBQXFERSxZQUFRLEVBQUMsVUFBOUQ7QUFBeUVELE9BQUcsRUFBQywrRUFBN0U7QUFBNkpFLGVBQVc7QUFBeEssR0FKZ0IsQ0FBbEI7QUFPQSxTQUFPO0FBQUssTUFBRSxFQUFDLFVBQVI7QUFBbUIsYUFBUyxFQUFDLGFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dJLFNBQVMsQ0FBQ0MsR0FBVixDQUFjLFVBQUNDLElBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ2I7QUFBSyxTQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFBTyxVQUFJLEVBQUVELElBQWI7QUFBbUIsYUFBTyxFQUFFVixXQUE1QjtBQUF5QyxhQUFPLEVBQUVNLFlBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURhO0FBQUEsR0FBZCxDQURILENBREssRUFTTDtBQUFHLGFBQVMsRUFBQyxxQkFBYjtBQUFtQyxRQUFJLEVBQUMsdUNBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVEssQ0FBUDtBQVdEO0tBaER1QlAsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvaG9tZVBhZ2Uvc2VjdGlvbkNvbXBvbmVudHMvUG9ydGZvbGlvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gXCIuLi8uLi9zbWFsbENvbXBvbmVudHMvTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvKCkge1xuXG4gIGZ1bmN0aW9uIGJlaGFuY2VTaG90ICh7dGl0bGUsIHVybCwgaW1nX25hbWUsIGRlc2NyaXB0aW9uLCBpZH0pIHsgcmV0dXJuIDw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2JlaGFuY2UuY29tL0FzaGxleXN3XCIgY2xhc3NOYW1lPVwibW9kYWwtaWNvbi1saW5rXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9kYWwtaWNvblwiIHNyYz0nc3RhdGljL21haW5wYWdlL2JlaGFuY2UvYmVoYW5jZV9pY29uLnBuZycvPlxuICAgICAgICA8c3Bhbj5iZWhhbmNlPC9zcGFuPlxuICAgICAgPC9hPlxuXG4gICAgICA8YSBocmVmPXt1cmx9PlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oND5cbiAgICAgIDwvYT5cblxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2lkK1wiLWNoZWNrXCJ9PjxhIGNsYXNzTmFtZT1cImNsb3NlLW1vZGFsXCI+eDwvYT48L2xhYmVsPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkcmliYmJsZS1tYWluXCI+XG4gICAgICA8aW1nIHNyYz17J3N0YXRpYy9tYWlucGFnZS9iZWhhbmNlLycraW1nX25hbWUrJy53ZWJwJ30vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kZXNjXCI+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8Lz5cbiAgfVxuXG4gIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlciAoe2ltZ19uYW1lLCBpZCwgdGl0bGV9KSB7IHJldHVybiA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2lkK1wiLWNhcmQgbW9kYWwtY2FyZCBob3Zlci1ncm93XCJ9XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybChzdGF0aWMvbWFpbnBhZ2UvYmVoYW5jZS8ke2ltZ19uYW1lfV90aHVtYi5wbmcpYH19XG4gICAgPjwvZGl2PlxuICB9XG5cbiAgY29uc3QgbW9kYWxMaXN0ID0gW1xuICAgIHtpZDpcImJlaGFuY2UxXCIsdGl0bGU6XCJTb2NpYWwgZG9nIHdhbGtpbmcgYXBwXCIsaW1nX25hbWU6XCJiZWhhbmNlMVwiLHVybDpcImh0dHBzOi8vYmVoYW5jZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCIsZGVzY3JpcHRpb246YEFuIGFwcCBjb25jZXB0IGZvciB0cmFja2luZyB5b3VyIGRvZydzIHdhbGtzLCB3aXRoIGNvbGxhciBnZW8gbG9jYXRpb24gdG8gbWVhc3VyZSB5b3VyIGRvZydzIGNvdmVyZWQgZGlzdGFuY2UgYW5kIHByb3hpbWl0eSB0byB5b3UuIFRoaXMgaXMgYSBjb250aW51YXRpb24gb2YgdGhlIGNvbmNlcHQgZnJvbSBEYWlseSBVSSAxOSwgYSBsZWFkZXIgYm9hcmQgVUkgZGVzaWduIHRoYXQgJ0dhbWlmaWVzJyBkb2cgd2Fsa2luZyB0byBrZWVwIGRvZyBvd25lcnMgZW5nYWdlZCBhbmQgaW5jZW50aXZpc2VkIHRvIHdhbGsgdGhlaXIgZG9ncy4g8J+QtiBARGFpbHkgVUlgfSxcbiAgICB7aWQ6XCJiZWhhbmNlMlwiLHRpdGxlOlwiRUNvbW1lcmNlIGRhc2hib2FyZFwiLGltZ19uYW1lOlwiYmVoYW5jZTJcIix1cmw6XCJodHRwczovL2JlaGFuY2UuY29tL3Nob3RzLzUzNzYwNDQtU29jaWFsLWRvZy13YWxraW5nLWFwcC1jb25jZXB0LURhaWx5LVVJLTAyMFwiLGRlc2NyaXB0aW9uOmBBbiBlQ29tbWVyY2UgYW5hbHl0aWNzIFVJIGRlc2lnbiBmb3IgQERhaWx5IFVJIDE4LiBIYXZpbmcgZXhwZXJpZW5jZSBydW5uaW5nIGFuIGVDb21tZXJjZSBzdG9yZSwgSSB0b29rIHRoaXMgb3Bwb3J0dW5pdHkgdG8gZGVzaWduIG15IGlkZWFsIGFuYWx5dGljcyBwYWdlLiBJIHVzZWQgaG9yaXpvbnRhbCBhbmQgdmVydGljYWwgZ3JpZHMgdG8gdHJ5IGFuZCBmaXQgaW4gYXMgbXVjaCBpbmZvcm1hdGlvbiBhcyBJIGNvdWxkIHdoaWxzdCBzdGlsbCBsZXR0aW5nIGl0IGJyZWF0aC4g8J+ZgmB9LFxuICAgIHtpZDpcImJlaGFuY2UzXCIsdGl0bGU6XCJTb2NpYWwgYXBwIHNldHRpbmdzIHBhZ2VcIixpbWdfbmFtZTpcImJlaGFuY2UzXCIsdXJsOlwiaHR0cHM6Ly9iZWhhbmNlLmNvbS9zaG90cy81Mzc2MDQ0LVNvY2lhbC1kb2ctd2Fsa2luZy1hcHAtY29uY2VwdC1EYWlseS1VSS0wMjBcIixkZXNjcmlwdGlvbjpgRGFpbHkgVUkgIzAwNyAtIGRlc2lnbiBhIHNldHRpbmdzIHBhZ2UhYH0sXG4gICAge2lkOlwiYmVoYW5jZTRcIix0aXRsZTpcIkhvbWUgbW9uaXRvcmluZyBhcHAgZGFzaGJvYXJkXCIsaW1nX25hbWU6XCJiZWhhbmNlNFwiLHVybDpcImh0dHBzOi8vYmVoYW5jZS5jb20vc2hvdHMvNTM3NjA0NC1Tb2NpYWwtZG9nLXdhbGtpbmctYXBwLWNvbmNlcHQtRGFpbHktVUktMDIwXCIsZGVzY3JpcHRpb246YEFuIGFwcCBjb25jZXB0IGZvciBhIGhvbWUgbW9uaXRvcmluZyBhcHAncyBkYXNoYm9hcmQuIEkgdHJpZWQgdG8gYmFsYW5jZSB2aXN1YWwgYXBwZWFsIHdpdGggdXNhYmlsaXR5IGJ5IHByZXNlbnRpbmcgaW5mb3JtYXRpb24gaW4gYSBjbGVhbiBhbmQgbWluaW1hbCBhcyBkZXNpZ24gd2hpbHN0IGFkZGluZyBzb21lIHZpc3VhbCBmbGFyZSB0byB0aGUgbW9zdCBpbXBvcnRhbnQgZWxlbWVudCBvbiB0aGUgc2NyZWVuLiDinYTvuI/wn5SlIEBEYWlseSBVSWB9XG4gIF1cblxuICByZXR1cm4gPGRpdiBpZD1cImJlaGFuY2VzXCIgY2xhc3NOYW1lPVwiY2VudGVyLXRleHRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ2FsbGVyeSByb3dcIj5cbiAgICAgIHttb2RhbExpc3QubWFwKChpdGVtLGluZGV4KSA9PiBcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICA8TW9kYWwgaW5mbz17aXRlbX0gY29udGVudD17YmVoYW5jZVNob3R9IHRyaWdnZXI9e21vZGFsVHJpZ2dlcn0vPlxuICAgICAgICA8L2Rpdj4pXG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gYmxhY2stYnV0dG9uXCIgaHJlZj1cImh0dHBzOi8vd3d3LmJlaGFuY2UubmV0L2FzaHNhbGVlbXdlc3RcIj5TZWUgbW9yZSBvbiBCZWhhbmNlPC9hPlxuICA8L2Rpdj5cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/homePage/sectionComponents/Portfolio.js\n");

/***/ })

})