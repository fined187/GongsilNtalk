"use strict";
exports.id = 4579;
exports.ids = [4579];
exports.modules = {

/***/ 2006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FreeBoard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9139);


function FreeBoard() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .ContentsBox */ .Kh, {})
    });
}


/***/ }),

/***/ 1224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KnowHow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9139);


function KnowHow() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .ContentsBox */ .Kh, {})
    });
}


/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QnA)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9139);


function QnA() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .ContentsBox */ .Kh, {})
    });
}


/***/ }),

/***/ 3060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Review)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9139);


function Review() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .ContentsBox */ .Kh, {})
    });
}


/***/ }),

/***/ 4579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Board)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9139);
/* harmony import */ var _components_community_TabSpan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6381);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _QnA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var _FreeBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2006);
/* harmony import */ var _KnowHow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1224);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3060);
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7061);









function Board({ tabClicked , setTabClicked  }) {
    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_TabSpan__WEBPACK_IMPORTED_MODULE_2__/* .SecondContent */ .j_, {
                tabClicked: tabClicked,
                onClick: ()=>setTabClicked(1),
                children: "커뮤니티"
            }),
            tabClicked == 1 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .QnABoxTab */ .dt, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(0),
                        children: "질문/답변"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .FreeBoardTab */ .Nz, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(1),
                        children: "자유글"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .KnowHowTab */ .qf, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(2),
                        children: "노하우"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_CommunityBox__WEBPACK_IMPORTED_MODULE_1__/* .ReviewTab */ .hL, {
                        innerTab: innerTab,
                        onClick: ()=>setInnerTab(3),
                        children: "후기"
                    }),
                    innerTab === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_QnA__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : innerTab === 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FreeBoard__WEBPACK_IMPORTED_MODULE_5__["default"], {}) : innerTab === 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_KnowHow__WEBPACK_IMPORTED_MODULE_6__["default"], {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Review__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Notice__WEBPACK_IMPORTED_MODULE_8__["default"], {})
                ]
            }) : null
        ]
    });
}


/***/ })

};
;