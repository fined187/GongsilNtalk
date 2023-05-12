"use strict";
exports.id = 9285;
exports.ids = [9285];
exports.modules = {

/***/ 9285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MTabContentsComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5715);
/* harmony import */ var _MNotice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(492);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(436);
/* harmony import */ var _Youtube_MYoutube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2461);






function MTabContentsComponent({ tabClicked , setTabClicked  }) {
    const [innerTab, setInnerTab] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [post, setPost] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [yPosts, setYposts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_4__/* .Youtubes */ .Af);
    const [mPosts, setMposts] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_4__/* .community */ .bJ);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
    const [postPerPage, setPostPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(5);
    const indexOfLast = currentPage * postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const currentPosts = (posts)=>{
        let currentPosts = 0;
        currentPosts = posts?.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };
    //  API 생성시 수정
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const fetchData = ()=>{
            if (innerTab === 0) {
                setPost(currentPosts(yPosts));
            } else {
                setPost(currentPosts(mPosts));
            }
        };
        fetchData();
    }, [
        currentPage,
        innerTab
    ]);
    const [showSearch, setShowSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleSearchClick = ()=>{
        setShowSearch(!showSearch);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__/* .MTabContents */ .ac, {
            children: [
                tabClicked === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__/* .YoutubeTab */ .yy, {
                            innerTab: innerTab,
                            onClick: ()=>setInnerTab(0),
                            children: "공톡 유튜브"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_1__/* .MegazineTab */ .Dn, {
                            innerTab: innerTab,
                            onClick: ()=>setInnerTab(1),
                            children: "공톡 매거진"
                        }),
                        innerTab === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Youtube_MYoutube__WEBPACK_IMPORTED_MODULE_5__["default"], {
                            post: post,
                            yPosts: yPosts,
                            setCurrentPage: setCurrentPage
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
                    ]
                }) : null,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MNotice__WEBPACK_IMPORTED_MODULE_2__["default"], {})
            ]
        })
    });
}


/***/ })

};
;