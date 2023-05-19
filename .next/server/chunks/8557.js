"use strict";
exports.id = 8557;
exports.ids = [8557];
exports.modules = {

/***/ 8557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bf": () => (/* binding */ GongtalkContentsText),
/* harmony export */   "MB": () => (/* binding */ MovingSpan),
/* harmony export */   "ZF": () => (/* binding */ CommunityText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GongtalkContentsText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "TabSpan__GongtalkContentsText",
  componentId: "sc-16suz2y-0"
})(["position:absolute;top:19.5px;left:147.5px;width:95px;height:25px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:20px;line-height:25px;text-align:center;letter-spacing:-0.03em;cursor:pointer;color:", ";"], props => `${props.tabClicked === 0 ? '#000000' : '#D5D5D5'}`);
const CommunityText = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(GongtalkContentsText).withConfig({
  displayName: "TabSpan__CommunityText",
  componentId: "sc-16suz2y-1"
})(["left:547.5px;color:", ";"], props => `${props.tabClicked === 1 ? '#000000' : '#D5D5D5'}`);
const MovingSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "TabSpan__MovingSpan",
  componentId: "sc-16suz2y-2"
})(["font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:700;font-size:18px;line-height:23px;letter-spacing:-0.02em;color:#000000;position:absolute;top:28px;left:30px;"]);

/***/ })

};
;