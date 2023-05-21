"use strict";
exports.id = 6983;
exports.ids = [6983];
exports.modules = {

/***/ 2832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cs": () => (/* binding */ EmptyBox),
/* harmony export */   "f7": () => (/* binding */ NoticeBox),
/* harmony export */   "x1": () => (/* binding */ Line)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NoticeBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "NoticeBox",
  componentId: "sc-k3hpvw-0"
})(["@media screen and (max-width:768px){display:none;}display:flex;flex-direction:column;align-items:flex-start;padding:0px;gap:8px;position:absolute;width:702px;height:76px;left:38px;top:150px;bottom:797px;"]);
const EmptyBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "NoticeBox__EmptyBox",
  componentId: "sc-k3hpvw-1"
})(["position:absolute;width:778px;height:1px;left:38px;top:216px;background:#f7f7f7;"]);
const Line = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "NoticeBox__Line",
  componentId: "sc-k3hpvw-2"
})(["width:704px;height:0px;opacity:0.6;border:1px solid #d5d5d5;flex:none;order:1;flex-grow:0;margin-left:38px;"]);

/***/ }),

/***/ 6983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Notice)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/Notice.tsx

const NoticeTag = external_styled_components_default().span.withConfig({
  displayName: "Notice__NoticeTag",
  componentId: "sc-1w6j7hf-0"
})(["@media screen and (max-width:768px){display:none;}display:flex;flex-direction:row;justify-content:center;align-items:center;padding:6px 8px;gap:10px;position:absolute;width:42px;height:25px;background:#666666;border-radius:6px;color:#ffffff;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:14px;line-height:18px;text-align:center;letter-spacing:-0.03em;margin-bottom:8px;"]);
const NoticeTitle = external_styled_components_default().span.withConfig({
  displayName: "Notice__NoticeTitle",
  componentId: "sc-1w6j7hf-1"
})(["@media screen and (max-width:768px){display:none;}width:646px;height:18px;margin-left:56px;top:6px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:14px;line-height:18px;letter-spacing:-0.03em;cursor:pointer;"]);
// EXTERNAL MODULE: ./src/components/community/NoticeBox.tsx
var NoticeBox = __webpack_require__(2832);
// EXTERNAL MODULE: ./NoticeDummy.tsx
var NoticeDummy = __webpack_require__(9257);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/pages/Community/Notice.tsx






function Notice() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(NoticeBox/* NoticeBox */.f7, {
      children: NoticeDummy/* NoticeData */.kY?.slice(0, 2).map((a, i) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(NoticeTag, {
            children: "\uACF5\uC9C0"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NoticeTitle, {
            children: [a.title, ' - ' + a.date]
          })]
        }, i);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(NoticeBox/* EmptyBox */.cs, {})]
  });
}

/***/ })

};
;