"use strict";
exports.id = 2461;
exports.ids = [2461];
exports.modules = {

/***/ 2461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MYoutube)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/MYoutube.tsx

const MYoutubeBox = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-0"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 360px;
    height: 456px;
    left: -15px;
    top: 130px;
    overflow: scroll;

    background-color: #ffffff;
  }
`;
const MYoutubeContents = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-1"
})`
  @media screen and (max-width: 768px) {
    width: 324px;
    height: 138px;
    margin-top: 14px;
    margin-left: 18px;
    right: 18px;
    bottom: 14px;

    background-color: #ffffff;
  }
`;
const MYoutubeProfileBox = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-2"
})`
  @media screen and (max-width: 768px) {
    box-sizing: border-box;

    width: 30px;
    height: 30px;
    left: 0px;
    top: 0px;
    border-radius: 15px;

    background-color: #f0f0f0;

    border: 1px solid #9b9b9b;
  }
`;
const MYoutubeProfileName = external_styled_components_default().span.withConfig({
    componentId: "sc-141d6577-3"
})`
  @media screen and (max-width: 768px) {
    position: absolute;
    width: 47px;
    height: 16px;
    left: 57px;
    margin-top: 8px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    letter-spacing: -0.03em;

    color: #282828;
  }
`;
const MYoutubeContentsBox = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-4"
})`
  @media screen and (max-width: 768px) {
    width: 324px;
    height: 95px;
    top: 43px;

    background-color: #ffffff;
  }
`;
const MYoutubeContentsTitle = external_styled_components_default().span.withConfig({
    componentId: "sc-141d6577-5"
})`
  @media screen and (max-width: 768px) {
    width: 216px;
    height: 20px;
    left: 0px;

    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    letter-spacing: -0.03em;
    color: #343232;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const MYoutubeContentsDetail = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-6"
})`
  position: absolute;
  width: 216px;
  height: 36px;
  left: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.03em;

  color: #666666;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MYoutubeFooter = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-7"
})`
  position: absolute;
  width: 163px;
  height: 15px;
  left: 19px;
  margin-top: 38px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.02em;

  color: #9b9b9b;
`;
const MYoutubeImg = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-8"
})`
  position: absolute;
  width: 92px;
  height: 92px;
  left: 250px;
  margin-top: 40px;
`;
const MYoutubeLine = external_styled_components_default().div.withConfig({
    componentId: "sc-141d6577-9"
})`
  width: 359px;
  height: 0px;
  opacity: 0.6;
  border: 1px solid #f0f0f0;
`;

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/Youtube/MYoutube.tsx



function MYoutube({ post , yPosts , setCurrentPage  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MYoutubeBox, {
            children: post?.map((a, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MYoutubeContents, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(MYoutubeProfileBox, {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MYoutubeProfileName, {
                                        children: "공실앤톡"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MYoutubeContentsBox, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(MYoutubeContentsTitle, {
                                            children: a.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(MYoutubeContentsDetail, {
                                            children: a.contents
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MYoutubeFooter, {
                                            children: [
                                                a.date + " ",
                                                " ",
                                                "추천 " + a.reco + " ",
                                                " ",
                                                "댓글 " + a.repl
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/YImage",
                                            alt: "YImage",
                                            width: 92,
                                            height: 92,
                                            style: {
                                                position: "absolute",
                                                left: "250px",
                                                marginTop: "-20px"
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MYoutubeLine, {})
                    ]
                }, i);
            })
        })
    });
}


/***/ })

};
;