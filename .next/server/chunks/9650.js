"use strict";
exports.id = 9650;
exports.ids = [9650];
exports.modules = {

/***/ 6381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bx": () => (/* binding */ FirstContent),
/* harmony export */   "MB": () => (/* binding */ MovingSpan),
/* harmony export */   "j_": () => (/* binding */ SecondContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FirstContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-651b83a7-0"
})`
  position: absolute;
  top: 19.5px;
  left: 147.5px;

  width: 95px;
  height: 25px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  text-align: center;
  letter-spacing: -0.03em;
  cursor: pointer;

  color: ${(props)=>`${props.tabClicked === 0 ? "#000000" : "#D5D5D5"}`};
`;
const SecondContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(FirstContent).withConfig({
    componentId: "sc-651b83a7-1"
})`
  left: 547.5px;
  color: ${(props)=>`${props.tabClicked === 1 ? "#000000" : "#D5D5D5"}`};
`;
const MovingSpan = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-651b83a7-2"
})`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;

  letter-spacing: -0.02em;

  color: #000000;

  position: absolute;
  top: 28px;
  left: 30px;
`;


/***/ }),

/***/ 9650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Youtube)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/community/NoticeBox.tsx
var NoticeBox = __webpack_require__(4637);
// EXTERNAL MODULE: ./src/components/community/ContentsBox.tsx
var ContentsBox = __webpack_require__(6479);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/pages/Community/Paging.tsx + 1 modules
var Paging = __webpack_require__(7716);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/community/OrderBy.tsx

const OrderBox = external_styled_components_default().div.withConfig({
    componentId: "sc-bac5ebbd-0"
})`
  position: absolute;
  top: 15px;
  left: 550px;
  width: 200px;
  height: 20px;

  display: flex;
  flex-direction: row;
  cursor: pointer;
`;
const Updated = external_styled_components_default().div.withConfig({
    componentId: "sc-bac5ebbd-1"
})`
  position: absolute;
  left: 60px;
  width: 38px;
  height: 18px;

  cursor: pointer;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props)=>`${props.clickedOrder ? "#666666" : "#BFBFBF"}`};
`;
const Recommend = external_styled_components_default().div.withConfig({
    componentId: "sc-bac5ebbd-2"
})`
  position: absolute;
  left: 110px;
  width: 38px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props)=>`${props.clickedOrder ? "#666666" : "#BFBFBF"}`};
  cursor: pointer;
`;
const Repl = external_styled_components_default().div.withConfig({
    componentId: "sc-bac5ebbd-3"
})`
  position: absolute;
  left: 160px;
  width: 38px;
  height: 18px;

  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  display: flex;
  align-items: center;
  letter-spacing: -0.03em;

  color: ${(props)=>`${props.clickedOrder ? "#666666" : "#BFBFBF"}`};
  cursor: pointer;
`;
const ClickedOrder = external_styled_components_default().div.withConfig({
    componentId: "sc-bac5ebbd-4"
})`
  position: absolute;
  top: 5px;
  left: -10px;
  width: 5px;
  height: 5px;

  background-color: ${(props)=>`${props.clickedOrder ? "#F16341" : "#FFFFFF"}`};
  border-radius: 150px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/community/TabSpan.tsx
var TabSpan = __webpack_require__(6381);
// EXTERNAL MODULE: ./src/pages/Community/Notice.tsx + 1 modules
var Notice = __webpack_require__(7061);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/pages/Community/Contents/Youtube/Youtube.tsx










function Youtube({ post , yPosts , setCurrentPage  }) {
    const [clickedOrder, setClickedOrder] = (0,external_react_.useState)(0);
    const handleClick = (number)=>{
        setClickedOrder(number);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Notice["default"], {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentsBox/* ContentsBox */.Kh, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(OrderBox, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Updated, {
                                clickedOrder: clickedOrder === 0,
                                onClick: ()=>{
                                    handleClick(0);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ClickedOrder, {
                                        clickedOrder: clickedOrder === 0,
                                        onClick: ()=>{
                                            handleClick(0);
                                        }
                                    }),
                                    "최신순"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Recommend, {
                                clickedOrder: clickedOrder === 1,
                                onClick: ()=>{
                                    handleClick(1);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ClickedOrder, {
                                        clickedOrder: clickedOrder === 1,
                                        onClick: ()=>{
                                            handleClick(1);
                                        }
                                    }),
                                    "추천순"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Repl, {
                                clickedOrder: clickedOrder === 2,
                                onClick: ()=>{
                                    handleClick(2);
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ClickedOrder, {
                                        clickedOrder: clickedOrder === 2,
                                        onClick: ()=>{
                                            handleClick(2);
                                        }
                                    }),
                                    "댓글순"
                                ]
                            })
                        ]
                    }),
                    post?.map((a, i)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentsBox/* ProfileBox */.PX, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/ProPic.png",
                                            alt: "ProPic",
                                            width: 30,
                                            height: 30,
                                            style: {
                                                marginBottom: "16px"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ContentsBox/* YUsername */.Qp, {
                                            children: "공실앤톡"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/YImage.png",
                                        alt: "YImage",
                                        width: 154,
                                        height: 108,
                                        style: {
                                            position: "absolute",
                                            left: "600px",
                                            marginTop: "-20px"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: `/Community/Contents/Youtube/posts/${a.id}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(ContentsBox/* Ytitle */.j5, {
                                            children: a.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(ContentsBox/* YContents */.fG, {
                                            children: a.contents
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentsBox/* YFooter */.Bj, {
                                            children: [
                                                a.date + " ",
                                                " ",
                                                "추천 " + a.reco + " ",
                                                " ",
                                                "댓글 " + a.repl
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NoticeBox/* Line */.x1, {})
                            ]
                        }, i);
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Paging["default"], {
                        totalPosts: yPosts?.length,
                        paginate: setCurrentPage
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContentsBox/* MovingBox */.pS, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(TabSpan/* MovingSpan */.MB, {
                    children: "공톡 유튜브 추천글"
                })
            })
        ]
    });
}


/***/ })

};
;