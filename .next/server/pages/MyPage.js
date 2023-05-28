"use strict";
(() => {
var exports = {};
exports.id = 7955;
exports.ids = [7955,1918,4821,5192,1492,5340,2686,4525];
exports.modules = {

/***/ 2058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfferedText": () => (/* binding */ OfferedText),
/* harmony export */   "default": () => (/* binding */ OfferedPageTop)
/* harmony export */ });
/* harmony import */ var _components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4650);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Offered1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9734);
/* harmony import */ var _Offered2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6110);
/* harmony import */ var _Offered3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2194);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const OfferedText = styled_components__WEBPACK_IMPORTED_MODULE_2___default().span.withConfig({
  displayName: "MyPage__OfferedText",
  componentId: "sc-1epvgqn-0"
})(["@media screen and (max-width:768px){}position:absolute;width:360px;height:30px;left:853px;top:96px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:24px;line-height:30px;display:flex;align-items:center;letter-spacing:-0.03em;color:#2a2828;"]);
function OfferedPageTop() {
  const {
    0: pageNum,
    1: setPageNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: formData,
    1: setFormData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    sigungu: null,
    condition: 0,
    area: 0,
    user: 0
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(OfferedText, {
      children: ["\uB9E4\uBB3C \uC81C\uC548\uC11C \uBC1B\uAE30", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        style: {
          color: '#F16341',
          marginLeft: '8px'
        },
        children: pageNum
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_myPage_Offered__WEBPACK_IMPORTED_MODULE_0__/* .PageCnt */ .$n, {
        children: " / 3"
      })]
    }), pageNum === 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Offered1__WEBPACK_IMPORTED_MODULE_3__["default"], {
      pageNum: pageNum,
      setPageNum: setPageNum
    }) : pageNum === 2 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Offered2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      pageNum: pageNum,
      setPageNum: setPageNum
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Offered3__WEBPACK_IMPORTED_MODULE_5__["default"], {
      pageNum: pageNum,
      setPageNum: setPageNum
    })]
  });
}

/***/ }),

/***/ 5725:
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4650,9734,6110,2194], () => (__webpack_exec__(2058)));
module.exports = __webpack_exports__;

})();