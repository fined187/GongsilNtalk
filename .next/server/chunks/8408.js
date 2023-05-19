"use strict";
exports.id = 8408;
exports.ids = [8408];
exports.modules = {

/***/ 8408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MTabContentsComponent)
/* harmony export */ });
/* harmony import */ var _components_community_TabBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1336);
/* harmony import */ var _MNotice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(626);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NoticeDummy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9257);
/* harmony import */ var _Youtube_MYoutube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9607);
/* harmony import */ var _Megazine_MMegazine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6447);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









function MTabContentsComponent({
  tabClicked,
  setTabClicked
}) {
  const {
    0: innerTab,
    1: setInnerTab
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: post,
    1: setPost
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: yPosts,
    1: setYposts
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_3__/* .Youtubes */ .Af);
  const {
    0: mPosts,
    1: setMposts
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_NoticeDummy__WEBPACK_IMPORTED_MODULE_3__/* .community */ .bJ);
  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: postPerPage,
    1: setPostPerPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(5);
  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;

  const currentPosts = posts => {
    let currentPosts = 0;
    currentPosts = posts?.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }; //  API 생성시 수정


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const fetchData = () => {
      if (innerTab === 0) {
        setPost(currentPosts(yPosts));
      } else {
        setPost(currentPosts(mPosts));
      }
    };

    fetchData();
  }, [currentPage, innerTab]);
  const {
    0: showSearch,
    1: setShowSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_0__/* .MTabContents */ .ac, {
      children: [tabClicked === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_0__/* .YoutubeTab */ .yy, {
          innerTab: innerTab,
          onClick: () => setInnerTab(0),
          children: "\uACF5\uD1A1 \uC720\uD29C\uBE0C"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_community_TabBox__WEBPACK_IMPORTED_MODULE_0__/* .MegazineTab */ .Dn, {
          innerTab: innerTab,
          onClick: () => setInnerTab(1),
          children: "\uACF5\uD1A1 \uB9E4\uAC70\uC9C4"
        }), innerTab === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Youtube_MYoutube__WEBPACK_IMPORTED_MODULE_4__["default"], {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Megazine_MMegazine__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_MNotice__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
    })
  });
}

/***/ })

};
;