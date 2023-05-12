"use strict";
exports.id = 9139;
exports.ids = [9139];
exports.modules = {

/***/ 9139:
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
    componentId: "sc-215082c5-0"
})`
  position: absolute;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;

  width: 100px;
  height: 40px;
  top: 86px;
  left: 38px;

  background: ${(props)=>`${props.innerTab == 0 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 0 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 0 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  cursor: pointer;
  text-align: center;
  padding: 18px;
`;
const FreeBoardTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(QnABoxTab).withConfig({
    componentId: "sc-215082c5-1"
})`
  width: 74px;
  height: 40px;
  left: 150px;
  padding: 15px;

  background: ${(props)=>`${props.innerTab == 1 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 1 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 1 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
`;
const KnowHowTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(QnABoxTab).withConfig({
    componentId: "sc-215082c5-2"
})`
  width: 74px;
  height: 40px;
  background: ${(props)=>`${props.innerTab == 2 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 2 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 2 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
  padding: 15px;

  left: 235px;
`;
const ReviewTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(QnABoxTab).withConfig({
    componentId: "sc-215082c5-3"
})`
  left: 320px;
  width: 59px;
  height: 40px;
  padding: 15px;

  background: ${(props)=>`${props.innerTab == 3 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  color: ${(props)=>`${props.innerTab == 3 ? "#F16341" : "#9B9B9B"}`};
  border: ${(props)=>`${props.innerTab == 3 ? "1px solid #F16341" : "1px solid #D5D5D5"}`};
`;
const ContentsBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-215082c5-4"
})`
  position: absolute;
  width: 778px;
  height: 1200px;
  left: 0px;
  top: 230px;

  background-color: #ffffff;
`;


/***/ })

};
;