"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Community/Contents/Megazine",{

/***/ "./src/pages/Community/Contents/Megazine/index.tsx":
/*!*********************************************************!*\
  !*** ./src/pages/Community/Contents/Megazine/index.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Megazine; }\n/* harmony export */ });\n/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/community/ContentsBox */ \"./src/components/community/ContentsBox.tsx\");\n/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/community/NoticeBox */ \"./src/components/community/NoticeBox.tsx\");\n/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Notice */ \"./src/pages/Community/Notice.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Paging */ \"./src/pages/Community/Paging.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/community/TabBox */ \"./src/components/community/TabBox.tsx\");\n/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/community/TabSpan */ \"./src/components/community/TabSpan.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../NoticeDummy */ \"./NoticeDummy.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\nvar _jsxFileName = \"/Users/wootaiklee/dev/JavaScript/gongsilntalk/gongsilntalk/src/pages/Community/Contents/Megazine/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Megazine() {\n  _s();\n\n  var _this = this;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),\n      tabClicked = _useState[0],\n      setTabClicked = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),\n      innerTab = _useState2[0],\n      setInnerTab = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0),\n      clickedOrder = _useState3[0],\n      setClickedOrder = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),\n      post = _useState4[0],\n      setPost = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_9__.Youtubes),\n      yPosts = _useState5[0],\n      setYposts = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_9__.community),\n      mPosts = _useState6[0],\n      setMposts = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1),\n      currentPage = _useState7[0],\n      setCurrentPage = _useState7[1];\n\n  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(5),\n      postPerPage = _useState8[0],\n      setPostPerPage = _useState8[1];\n\n  var indexOfLast = currentPage * postPerPage;\n  var indexOfFirst = indexOfLast - postPerPage;\n\n  var currentPosts = function currentPosts(posts) {\n    var currentPosts = 0;\n    currentPosts = posts === null || posts === void 0 ? void 0 : posts.slice(indexOfFirst, indexOfLast);\n    return currentPosts;\n  };\n  /** API 생성시 수정 */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {\n    var fetchData = function fetchData() {\n      if (innerTab === 0) {\n        setPost(currentPosts(yPosts));\n      } else {\n        setPost(currentPosts(mPosts));\n      }\n    };\n\n    fetchData();\n  }, [currentPage, innerTab]);\n\n  var handleClick = function handleClick(number) {\n    setClickedOrder(number);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_6__.TabBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__.GongtalkContentsText, {\n        tabClicked: tabClicked,\n        onClick: function onClick() {\n          return setTabClicked(0);\n        },\n        children: \"\\uACF5\\uD1A1 \\uCEE8\\uD150\\uCE20\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_7__.CommunityText, {\n        tabClicked: tabClicked,\n        onClick: function onClick() {\n          return setTabClicked(1);\n        },\n        children: \"\\uCEE4\\uBBA4\\uB2C8\\uD2F0\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Notice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.EmptyBox, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__.ContentsBox, {\n      children: [post === null || post === void 0 ? void 0 : post.map(function (a, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__.ProfileBox, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: '/ProPic.png',\n              alt: \"ProPic\",\n              width: 30,\n              height: 30,\n              style: {\n                marginBottom: '16px'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__.YUsername, {\n              children: \"\\uACF5\\uC2E4\\uC564\\uD1A1\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n              src: '/YImage.png',\n              alt: \"YImage\",\n              width: 154,\n              height: 108,\n              style: {\n                position: 'absolute',\n                left: '600px',\n                marginTop: '-20px'\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/Community/Contents/Megazine/posts/\".concat(a.id),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__.Ytitle, {\n              children: a.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 97,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__.YContents, {\n            children: a.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_0__.YFooter, {\n            children: [a.date + ' ', \" \", '추천 ' + a.reco + ' ', \" \", '댓글 ' + a.repl]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_1__.Line, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 15\n          }, _this)]\n        }, i, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this);\n      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_Paging__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        totalPosts: mPosts === null || mPosts === void 0 ? void 0 : mPosts.length,\n        paginate: setCurrentPage\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Megazine, \"ZMR7gE4W+AyErlU56R+ak2laX0w=\");\n\n_c = Megazine;\n\nvar _c;\n\n$RefreshReg$(_c, \"Megazine\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL01lZ2F6aW5lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlLFNBQVNtQixRQUFULEdBQW9CO0VBQUE7O0VBQUE7O0VBQ2pDLGdCQUFvQ0gsK0NBQVEsQ0FBUyxDQUFULENBQTVDO0VBQUEsSUFBT0ksVUFBUDtFQUFBLElBQW1CQyxhQUFuQjs7RUFDQSxpQkFBZ0NMLCtDQUFRLENBQVMsQ0FBVCxDQUF4QztFQUFBLElBQU9NLFFBQVA7RUFBQSxJQUFpQkMsV0FBakI7O0VBQ0EsaUJBQXdDUCwrQ0FBUSxDQUFTLENBQVQsQ0FBaEQ7RUFBQSxJQUFPUSxZQUFQO0VBQUEsSUFBcUJDLGVBQXJCOztFQUNBLGlCQUF3QlQsK0NBQVEsQ0FBTSxFQUFOLENBQWhDO0VBQUEsSUFBT1UsSUFBUDtFQUFBLElBQWFDLE9BQWI7O0VBQ0EsaUJBQTRCWCwrQ0FBUSxDQUFNQyxrREFBTixDQUFwQztFQUFBLElBQU9XLE1BQVA7RUFBQSxJQUFlQyxTQUFmOztFQUNBLGlCQUE0QmIsK0NBQVEsQ0FBTUUsbURBQU4sQ0FBcEM7RUFBQSxJQUFPWSxNQUFQO0VBQUEsSUFBZUMsU0FBZjs7RUFDQSxpQkFBc0NmLCtDQUFRLENBQVMsQ0FBVCxDQUE5QztFQUFBLElBQU9nQixXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUNBLGlCQUFzQ2pCLCtDQUFRLENBQVMsQ0FBVCxDQUE5QztFQUFBLElBQU9rQixXQUFQO0VBQUEsSUFBb0JDLGNBQXBCOztFQUVBLElBQU1DLFdBQVcsR0FBR0osV0FBVyxHQUFHRSxXQUFsQztFQUNBLElBQU1HLFlBQVksR0FBR0QsV0FBVyxHQUFHRixXQUFuQzs7RUFFQSxJQUFNSSxZQUFZLEdBQUcsc0JBQUNDLEtBQUQsRUFBZ0I7SUFDbkMsSUFBSUQsWUFBWSxHQUFHLENB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QUFDLENBQUNTLElBQUYsR0FBUyxHQURaLE9BQ2tCLFFBQVFULENBQUMsQ0FBQ1UsSUFBVixHQUFpQixHQURuQyxPQUN5QyxRQUFRVixDQUFDLENBQUNXLElBRG5EO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQSxTQTlCRixlQWlDRSwrREFBQyxpRUFBRDtZQUFBO1lBQUE7WUFBQTtVQUFBLFNBakNGO1FBQUEsR0FBVVYsQ0FBVjtVQUFBO1VBQUE7VUFBQTtRQUFBLFNBREY7TUFxQ0QsQ0F0Q0EsQ0FESCxlQXdDRSwrREFBQywrQ0FBRDtRQUFRLFVBQVUsRUFBRWhCLE1BQUYsYUFBRUEsTUFBRix1QkFBRUEsTUFBTSxDQUFFMkIsTUFBNUI7UUFBb0MsUUFBUSxFQUFFeEI7TUFBOUM7UUFBQTtRQUFBO1FBQUE7TUFBQSxRQXhDRjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsUUFYRjtFQUFBLGdCQURGO0FBd0REOztHQTNGdUJkOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQ29tbXVuaXR5L0NvbnRlbnRzL01lZ2F6aW5lL2luZGV4LnRzeD9kODY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRlbnRzQm94LFxuICBQcm9maWxlQm94LFxuICBZQ29udGVudHMsXG4gIFlGb290ZXIsXG4gIFlVc2VybmFtZSxcbiAgWXRpdGxlLFxufSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L0NvbnRlbnRzQm94JztcbmltcG9ydCB7IEVtcHR5Qm94LCBMaW5lLCBOb3RpY2VCb3ggfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L05vdGljZUJveCc7XG5pbXBvcnQgTm90aWNlIGZyb20gJy4uLy4uL05vdGljZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgUGFnaW5nIGZyb20gJy4uLy4uL1BhZ2luZyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgVGFiQm94IH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbW11bml0eS9UYWJCb3gnO1xuaW1wb3J0IHsgQ29tbXVuaXR5VGV4dCwgR29uZ3RhbGtDb250ZW50c1RleHQgfSBmcm9tICdAL2NvbXBvbmVudHMvY29tbXVuaXR5L1RhYlNwYW4nO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFlvdXR1YmVzLCBjb21tdW5pdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9Ob3RpY2VEdW1teSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVnYXppbmUoKSB7XG4gIGNvbnN0IFt0YWJDbGlja2VkLCBzZXRUYWJDbGlja2VkXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtpbm5lclRhYiwgc2V0SW5uZXJUYWJdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW2NsaWNrZWRPcmRlciwgc2V0Q2xpY2tlZE9yZGVyXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gIGNvbnN0IFtwb3N0LCBzZXRQb3N0XSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICBjb25zdCBbeVBvc3RzLCBzZXRZcG9zdHNdID0gdXNlU3RhdGU8YW55PihZb3V0dWJlcyk7XG4gIGNvbnN0IFttUG9zdHMsIHNldE1wb3N0c10gPSB1c2VTdGF0ZTxhbnk+KGNvbW11bml0eSk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGU8bnVtYmVyPigxKTtcbiAgY29uc3QgW3Bvc3RQZXJQYWdlLCBzZXRQb3N0UGVyUGFnZV0gPSB1c2VTdGF0ZTxudW1iZXI+KDUpO1xuXG4gIGNvbnN0IGluZGV4T2ZMYXN0ID0gY3VycmVudFBhZ2UgKiBwb3N0UGVyUGFnZTtcbiAgY29uc3QgaW5kZXhPZkZpcnN0ID0gaW5kZXhPZkxhc3QgLSBwb3N0UGVyUGFnZTtcblxuICBjb25zdCBjdXJyZW50UG9zdHMgPSAocG9zdHM6IGFueSkgPT4ge1xuICAgIGxldCBjdXJyZW50UG9zdHMgPSAwO1xuICAgIGN1cnJlbnRQb3N0cyA9IHBvc3RzPy5zbGljZShpbmRleE9mRmlyc3QsIGluZGV4T2ZMYXN0KTtcbiAgICByZXR1cm4gY3VycmVudFBvc3RzO1xuICB9O1xuXG4gIC8qKiBBUEkg7IOd7ISx7IucIOyImOyglSAqL1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9ICgpID0+IHtcbiAgICAgIGlmIChpbm5lclRhYiA9PT0gMCkge1xuICAgICAgICBzZXRQb3N0KGN1cnJlbnRQb3N0cyh5UG9zdHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFBvc3QoY3VycmVudFBvc3RzKG1Qb3N0cykpO1xuICAgICAgfVxuICAgIH07XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtjdXJyZW50UGFnZSwgaW5uZXJUYWJdKTtcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChudW1iZXI6IG51bWJlcikgPT4ge1xuICAgIHNldENsaWNrZWRPcmRlcihudW1iZXIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUYWJCb3g+XG4gICAgICAgIDxHb25ndGFsa0NvbnRlbnRzVGV4dCB0YWJDbGlja2VkPXt0YWJDbGlja2VkfSBvbkNsaWNrPXsoKSA9PiBzZXRUYWJDbGlja2VkKDApfT5cbiAgICAgICAgICDqs7XthqEg7Luo7YWQ7LigXG4gICAgICAgIDwvR29uZ3RhbGtDb250ZW50c1RleHQ+XG4gICAgICAgIDxDb21tdW5pdHlUZXh0IHRhYkNsaWNrZWQ9e3RhYkNsaWNrZWR9IG9uQ2xpY2s9eygpID0+IHNldFRhYkNsaWNrZWQoMSl9PlxuICAgICAgICAgIOy7pOuupOuLiO2LsFxuICAgICAgICA8L0NvbW11bml0eVRleHQ+XG4gICAgICA8L1RhYkJveD5cbiAgICAgIDxOb3RpY2UgLz5cbiAgICAgIDxFbXB0eUJveCAvPlxuICAgICAgPENvbnRlbnRzQm94PlxuICAgICAgICB7cG9zdD8ubWFwKChhOiBhbnksIGk6IG51bWJlcikgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgIDxQcm9maWxlQm94PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXsnL1Byb1BpYy5wbmcnfVxuICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvUGljXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8WVVzZXJuYW1lPuqzteyLpOyVpO2GoTwvWVVzZXJuYW1lPlxuICAgICAgICAgICAgICA8L1Byb2ZpbGVCb3g+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9eycvWUltYWdlLnBuZyd9XG4gICAgICAgICAgICAgICAgICBhbHQ9XCJZSW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE1NH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTA4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICc2MDBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogJy0yMHB4JyxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvQ29tbXVuaXR5L0NvbnRlbnRzL01lZ2F6aW5lL3Bvc3RzLyR7YS5pZH1gfT5cbiAgICAgICAgICAgICAgICA8WXRpdGxlPnthLnRpdGxlfTwvWXRpdGxlPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxZQ29udGVudHM+e2EuY29udGVudH08L1lDb250ZW50cz5cbiAgICAgICAgICAgICAgPFlGb290ZXI+XG4gICAgICAgICAgICAgICAge2EuZGF0ZSArICcgJ30geyfstpTsspwgJyArIGEucmVjbyArICcgJ30geyfrjJPquIAgJyArIGEucmVwbH1cbiAgICAgICAgICAgICAgPC9ZRm9vdGVyPlxuICAgICAgICAgICAgICA8TGluZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmcgdG90YWxQb3N0cz17bVBvc3RzPy5sZW5ndGh9IHBhZ2luYXRlPXtzZXRDdXJyZW50UGFnZX0gLz5cbiAgICAgIDwvQ29udGVudHNCb3g+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudHNCb3giLCJQcm9maWxlQm94IiwiWUNvbnRlbnRzIiwiWUZvb3RlciIsIllVc2VybmFtZSIsIll0aXRsZSIsIkVtcHR5Qm94IiwiTGluZSIsIk5vdGljZSIsIkltYWdlIiwiUGFnaW5nIiwiTGluayIsIlRhYkJveCIsIkNvbW11bml0eVRleHQiLCJHb25ndGFsa0NvbnRlbnRzVGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiWW91dHViZXMiLCJjb21tdW5pdHkiLCJNZWdhemluZSIsInRhYkNsaWNrZWQiLCJzZXRUYWJDbGlja2VkIiwiaW5uZXJUYWIiLCJzZXRJbm5lclRhYiIsImNsaWNrZWRPcmRlciIsInNldENsaWNrZWRPcmRlciIsInBvc3QiLCJzZXRQb3N0IiwieVBvc3RzIiwic2V0WXBvc3RzIiwibVBvc3RzIiwic2V0TXBvc3RzIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInBvc3RQZXJQYWdlIiwic2V0UG9zdFBlclBhZ2UiLCJpbmRleE9mTGFzdCIsImluZGV4T2ZGaXJzdCIsImN1cnJlbnRQb3N0cyIsInBvc3RzIiwic2xpY2UiLCJmZXRjaERhdGEiLCJoYW5kbGVDbGljayIsIm51bWJlciIsIm1hcCIsImEiLCJpIiwibWFyZ2luQm90dG9tIiwicG9zaXRpb24iLCJsZWZ0IiwibWFyZ2luVG9wIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnQiLCJkYXRlIiwicmVjbyIsInJlcGwiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Community/Contents/Megazine/index.tsx\n"));

/***/ })

});