webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/components/smallComponents/CoverImage.js":
/*!********************************************************!*\
  !*** ./pages/components/smallComponents/CoverImage.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CoverImage; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/ashleysaleem-west/Documents/GitHub/next-blog/pages/components/smallComponents/CoverImage.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction CoverImage(_ref) {\n  var title = _ref.title,\n      src = _ref.src,\n      slug = _ref.slug;\n\n  var image = __jsx(\"img\", {\n    // src={src}\n    alt: \"Cover Image for \".concat(title),\n    className: \"cover-image\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  });\n\n  return __jsx(\"div\", {\n    className: \"blog-image-container\",\n    style: {\n      backgroundImage: \"url(\".concat(src, \")\")\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, slug ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    as: \"/blog/\".concat(slug),\n    href: \"/blog/[slug]\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    \"aria-label\": title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, image)) : image);\n} // className={cn('shadow-small', {\n//     'hover:shadow-medium transition-shadow duration-200': slug,\n//   })}\n\n_c = CoverImage;\n\nvar _c;\n\n$RefreshReg$(_c, \"CoverImage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL3NtYWxsQ29tcG9uZW50cy9Db3ZlckltYWdlLmpzP2RiMGQiXSwibmFtZXMiOlsiQ292ZXJJbWFnZSIsInRpdGxlIiwic3JjIiwic2x1ZyIsImltYWdlIiwiYmFja2dyb3VuZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQTBDO0FBQUEsTUFBcEJDLEtBQW9CLFFBQXBCQSxLQUFvQjtBQUFBLE1BQWJDLEdBQWEsUUFBYkEsR0FBYTtBQUFBLE1BQVJDLElBQVEsUUFBUkEsSUFBUTs7QUFDdkQsTUFBTUMsS0FBSyxHQUNUO0FBQ0U7QUFDQSxPQUFHLDRCQUFxQkgsS0FBckIsQ0FGTDtBQUdFLGFBQVMsZUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7O0FBT0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFzQyxTQUFLLEVBQUU7QUFBQ0kscUJBQWUsZ0JBQVNILEdBQVQ7QUFBaEIsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxJQUFJLEdBQ0gsTUFBQyxnREFBRDtBQUFNLE1BQUUsa0JBQVdBLElBQVgsQ0FBUjtBQUEyQixRQUFJLEVBQUMsY0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsa0JBQVlGLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QkcsS0FBdkIsQ0FERixDQURHLEdBS0hBLEtBTkosQ0FERjtBQVdELEMsQ0FHRDtBQUNBO0FBQ0E7O0tBeEJ3QkosVSIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvc21hbGxDb21wb25lbnRzL0NvdmVySW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ292ZXJJbWFnZSh7IHRpdGxlLCBzcmMsIHNsdWcgfSkge1xuICBjb25zdCBpbWFnZSA9IChcbiAgICA8aW1nXG4gICAgICAvLyBzcmM9e3NyY31cbiAgICAgIGFsdD17YENvdmVyIEltYWdlIGZvciAke3RpdGxlfWB9XG4gICAgICBjbGFzc05hbWU9e2Bjb3Zlci1pbWFnZWB9XG4gICAgLz5cbiAgKVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZy1pbWFnZS1jb250YWluZXJcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke3NyY30pYH19PlxuICAgICAge3NsdWcgPyAoXG4gICAgICAgIDxMaW5rIGFzPXtgL2Jsb2cvJHtzbHVnfWB9IGhyZWY9XCIvYmxvZy9bc2x1Z11cIj5cbiAgICAgICAgICA8YSBhcmlhLWxhYmVsPXt0aXRsZX0+e2ltYWdlfTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgKSA6IChcbiAgICAgICAgaW1hZ2VcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4vLyBjbGFzc05hbWU9e2NuKCdzaGFkb3ctc21hbGwnLCB7XG4vLyAgICAgJ2hvdmVyOnNoYWRvdy1tZWRpdW0gdHJhbnNpdGlvbi1zaGFkb3cgZHVyYXRpb24tMjAwJzogc2x1Zyxcbi8vICAgfSl9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/smallComponents/CoverImage.js\n");

/***/ })

})