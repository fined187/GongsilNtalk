"use strict";
exports.id = 1380;
exports.ids = [1380];
exports.modules = {

/***/ 1380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Megazine)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6479);
/* harmony import */ var _components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4637);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7061);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Paging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7716);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);







function Megazine({ post , mPosts , setCurrentPage  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notice__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_2__/* .EmptyBox */ .cs, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__/* .ContentsBox */ .Kh, {
                children: [
                    post?.map((a, i)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__/* .ProfileBox */ .PX, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                            src: "/ProPic.png",
                                            alt: "ProPic",
                                            width: 30,
                                            height: 30,
                                            style: {
                                                marginBottom: "16px"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__/* .YUsername */ .Qp, {
                                            children: "공실앤톡"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
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
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: `/Community/Contents/Megazine/posts/${a.id}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__/* .Ytitle */ .j5, {
                                        children: a.title
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__/* .YContents */ .fG, {
                                    children: a.content
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_community_ContentsBox__WEBPACK_IMPORTED_MODULE_1__/* .YFooter */ .Bj, {
                                    children: [
                                        a.date + " ",
                                        " ",
                                        "추천 " + a.reco + " ",
                                        " ",
                                        "댓글 " + a.repl
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_NoticeBox__WEBPACK_IMPORTED_MODULE_2__/* .Line */ .x1, {})
                            ]
                        }, i);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Paging__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        totalPosts: mPosts?.length,
                        paginate: setCurrentPage
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;