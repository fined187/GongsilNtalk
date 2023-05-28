"use strict";
(() => {
var exports = {};
exports.id = 3984;
exports.ids = [3984,1918,4821,5192,5340,2686,4525];
exports.modules = {

/***/ 181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthBox": () => (/* binding */ AuthBox),
/* harmony export */   "AuthText": () => (/* binding */ AuthText),
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var _components_auth_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9542);
/* harmony import */ var _components_auth_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4132);
/* harmony import */ var _components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1784);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const AuthBox = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
  displayName: "Auth__AuthBox",
  componentId: "sc-1wunvpb-0"
})(["position:absolute;width:578px;height:526px;left:671px;top:311px;background-color:#ffffff;border:1px solid #f0f0f0;border-radius:10px;"]);
const AuthText = styled_components__WEBPACK_IMPORTED_MODULE_4___default().span.withConfig({
  displayName: "Auth__AuthText",
  componentId: "sc-1wunvpb-1"
})(["position:absolute;width:84px;height:28px;top:80px;left:247px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:22px;line-height:28px;display:flex;align-items:center;text-align:center;letter-spacing:-0.03em;color:#000000;"]);
function Auth() {
  const {
    0: authCode,
    1: setAuthCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(AuthBox, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(AuthText, {
        children: "\uBCF8\uC778 \uC778\uC99D"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_Label__WEBPACK_IMPORTED_MODULE_1__/* .AuthName */ .VS, {
          children: "\uC774\uB984"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_0__/* .AuthNameInput */ .C$, {
          name: "name",
          type: "text",
          placeholder: "\uD64D\uAE38\uB3D9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_Label__WEBPACK_IMPORTED_MODULE_1__/* .AuthPhone */ .KE, {
          children: "\uD734\uB300\uC804\uD654"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_0__/* .AuthPhoneNum */ .zR, {
          name: "phone",
          type: "text",
          placeholder: "-\uC5C6\uC774 \uC22B\uC790\uB9CC \uC785\uB825"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_2__/* .AuthSend */ .KY, {
          children: "\uC778\uC99D\uBC88\uD638 \uC804\uC1A1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_Input__WEBPACK_IMPORTED_MODULE_0__/* .AuthPhoneSMS */ .qW, {
          name: "confirmNum",
          type: "text",
          placeholder: "\uC778\uC99D\uBC88\uD638 \uC785\uB825"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_2__/* .AuthConfirm */ .zO, {
          authCode: authCode,
          disabled: authCode,
          children: "\uC778\uC99D\uBC88\uD638 \uD655\uC778"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_auth_LoginBtn__WEBPACK_IMPORTED_MODULE_2__/* .ConfirmSend */ .NN, {
          children: "\uC644\uB8CC"
        })]
      })]
    })
  });
}

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
var __webpack_exports__ = __webpack_require__.X(0, [5071], () => (__webpack_exec__(181)));
module.exports = __webpack_exports__;

})();