"use strict";
exports.id = 7513;
exports.ids = [7513];
exports.modules = {

/***/ 7513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kh": () => (/* binding */ ContentsBox),
/* harmony export */   "Nz": () => (/* binding */ FreeBoardTab),
/* harmony export */   "dt": () => (/* binding */ QnABoxTab),
/* harmony export */   "hL": () => (/* binding */ ReviewTab),
/* harmony export */   "qf": () => (/* binding */ KnowHowTab)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const QnABoxTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CommunityBox__QnABoxTab",
  componentId: "sc-1t1ipgg-0"
})(["position:absolute;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;padding:10px 15px;gap:10px;width:100px;height:40px;top:86px;left:38px;background:", ";color:", ";border:", ";border-radius:6px;font-family:'Spoqa Han Sans Neo';font-style:normal;font-weight:500;font-size:16px;line-height:20px;display:flex;align-items:center;letter-spacing:-0.03em;cursor:pointer;text-align:center;padding:18px;"], props => `${props.innerTab == 0 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`, props => `${props.innerTab == 0 ? '#F16341' : '#9B9B9B'}`, props => `${props.innerTab == 0 ? '1px solid #F16341' : '1px solid #D5D5D5'}`);
const FreeBoardTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(QnABoxTab).withConfig({
  displayName: "CommunityBox__FreeBoardTab",
  componentId: "sc-1t1ipgg-1"
})(["width:74px;height:40px;left:150px;padding:15px;background:", ";color:", ";border:", ";"], props => `${props.innerTab == 1 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`, props => `${props.innerTab == 1 ? '#F16341' : '#9B9B9B'}`, props => `${props.innerTab == 1 ? '1px solid #F16341' : '1px solid #D5D5D5'}`);
const KnowHowTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(QnABoxTab).withConfig({
  displayName: "CommunityBox__KnowHowTab",
  componentId: "sc-1t1ipgg-2"
})(["width:74px;height:40px;background:", ";color:", ";border:", ";padding:15px;left:235px;"], props => `${props.innerTab == 2 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`, props => `${props.innerTab == 2 ? '#F16341' : '#9B9B9B'}`, props => `${props.innerTab == 2 ? '1px solid #F16341' : '1px solid #D5D5D5'}`);
const ReviewTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(QnABoxTab).withConfig({
  displayName: "CommunityBox__ReviewTab",
  componentId: "sc-1t1ipgg-3"
})(["left:320px;width:59px;height:40px;padding:15px;background:", ";color:", ";border:", ";"], props => `${props.innerTab == 3 ? 'rgba(241, 99, 65, 0.1)' : '#FFFFFF'}`, props => `${props.innerTab == 3 ? '#F16341' : '#9B9B9B'}`, props => `${props.innerTab == 3 ? '1px solid #F16341' : '1px solid #D5D5D5'}`);
const ContentsBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CommunityBox__ContentsBox",
  componentId: "sc-1t1ipgg-4"
})(["position:absolute;width:778px;height:1200px;left:370px;top:290px;background-color:#ffffff;"]);

/***/ })

};
;