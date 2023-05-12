"use strict";
exports.id = 5715;
exports.ids = [5715];
exports.modules = {

/***/ 5715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dn": () => (/* binding */ MegazineTab),
/* harmony export */   "LH": () => (/* binding */ MTabBox),
/* harmony export */   "_D": () => (/* binding */ TabBox),
/* harmony export */   "ac": () => (/* binding */ MTabContents),
/* harmony export */   "xt": () => (/* binding */ MContents),
/* harmony export */   "yy": () => (/* binding */ YoutubeTab)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TabBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-7721b3d-0"
})`
  @media screen and (max-width: 768px) {
    display: none;
  }
  width: 778px;
  height: 218px;

  position: absolute;
  left: 371px;
  top: 60px;

  background-color: #ffffff;
`;
const YoutubeTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-7721b3d-1"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    background-color: ${(props)=>`${props.innerTab === 0 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};

    border: ${(props)=>`${props.innerTab === 0 ? "1px solid #F16431" : "1px solid #D5D5D5"}`};
    border-radius: 6px;

    position: absolute;
    width: 81px;
    height: 30px;
    font-size: 13px;
    line-height: 16px;
    font-weight: 700;
    align-items: center;
    top: 0px;
    letter-spacing: -0.03em;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    flex-direction: row;
    padding: 8px 10px;
    left: 0px;
  }

  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;

  position: absolute;
  width: 105px;
  height: 40px;
  left: 38px;
  top: 80px;
  right: 635px;
  bottom: 895px;

  background-color: ${(props)=>`${props.innerTab === 0 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};

  border: ${(props)=>`${props.innerTab === 0 ? "1px solid #F16431" : "1px solid #D5D5D5"}`};
  border-radius: 6px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props)=>`${props.innerTab === 0 ? "#F16341" : "#9B9B9B"}`};
  cursor: pointer;
`;
const MegazineTab = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(YoutubeTab).withConfig({
    componentId: "sc-7721b3d-2"
})`
  @media screen and (max-width: 768px) {
    left: 91px;
  }

  left: 153px;
  color: ${(props)=>`${props.innerTab === 1 ? "#F16341" : "#9B9B9B"}`};
  background-color: ${(props)=>`${props.innerTab === 1 ? "rgba(241, 99, 65, 0.1)" : "#FFFFFF"}`};
  border: ${(props)=>`${props.innerTab === 1 ? "1px solid #F16431" : "1px solid #D5D5D5"}`};
`;
const MTabBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-7721b3d-3"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    height: 170px;
    width: 360px;
    top: 0px;
    background-color: #ffffff;
  }
  display: none;
`;
const MContents = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-7721b3d-4"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 6px;

    position: absolute;
    width: 100vw;
    height: 23px;
    top: 21px;
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    align-items: center;
    text-align: center;
    letter-spacing: -0.03em;

    color: #000000;
  }

  display: none;
`;
const MTabContents = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-7721b3d-5"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 50px;
    left: 0px;
    width: 359px;
    margin-left: 16px;
  }
  display: none;
`;


/***/ })

};
;