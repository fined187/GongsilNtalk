"use strict";
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MNotice)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/MNotice.tsx

const MNoticeBox = external_styled_components_default().div.withConfig({
    componentId: "sc-61f1c9a5-0"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0px;
    gap: 6px;

    position: absolute;
    width: 40px;
    height: 78px;
    top: 40px;
  }
  display: none;
`;
const MNoticeTag = external_styled_components_default().div.withConfig({
    componentId: "sc-61f1c9a5-1"
})`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 8px;
    gap: 10px;

    width: 40px;
    height: 25px;

    background-color: #f0f0f0;
    border-radius: 6px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    letter-spacing: -0.03em;
    color: #666666;
  }
  display: none;
`;
const MNoticeTitle = external_styled_components_default().span.withConfig({
    componentId: "sc-61f1c9a5-2"
})`
  @media screen and (max-width: 768px) {
    display: flex;

    position: absolute;
    width: 274px;
    height: 18px;
    left: 55px;
    margin-top: -22px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    letter-spacing: -0.03em;

    color: #343232;
  }
  display: none;
`;

// EXTERNAL MODULE: ./NoticeDummy.tsx
var NoticeDummy = __webpack_require__(436);
;// CONCATENATED MODULE: ./src/pages/Community/MNotice.tsx



function MNotice() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MNoticeBox, {
            children: NoticeDummy/* NoticeData */.kY?.slice(0, 2).map((a, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MNoticeTag, {
                            children: "공지"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MNoticeTitle, {
                            children: a.title
                        })
                    ]
                }, i);
            })
        })
    });
}


/***/ })

};
;